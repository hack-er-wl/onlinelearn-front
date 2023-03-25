<template>
  <el-autocomplete
      id="search"
      v-model="value"
      :fetch-suggestions="search"
      popper-class="my-autocomplete"
      placeholder="请输入···"
      @select="handleSelect">
    <template #suffix>
      <el-icon style="cursor: pointer" @click="search_icon(value)">
        <Search />
      </el-icon>
    </template>
  </el-autocomplete>
</template>

<script setup>
import {onMounted, ref, toRaw} from "vue";
import {useRouter} from "vue-router";
const my_router = useRouter();
import {useRoute} from "vue-router";
import {ElMessage} from "element-plus";
import {useStore} from "vuex";
const my_route = useRoute();
const value = ref(my_route.query.value != null ? my_route.query.value:'');
const store = useStore();
const datas = ref([]);
let index = 0;

onMounted(async () => {
  await store.dispatch("handlequeryClassesByStatus", toRaw({status: 0})).then((res) => {
    if(res){
      for(let i in res){
        datas.value.push({value:res[i].class_name,classid:res[i].class_id,status:res[i].class_status,fieldname:res[i].field_name})
      }
    }
  })
})
const createFilter = (queryString) => {
  return (datas) => {
    return (
        datas.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
function search(queryString,cb){
  const results = queryString ? datas.value.filter(createFilter(queryString)) : datas.value
  cb(results)
}
async function search_icon(value) {
  if (value == '') {
    ElMessage({message: '请输入值!', type: 'warning'});
  } else {
    await store.dispatch("handlequeryCourseByClassName", toRaw({classname: value})).then((res) => {
      store.state.layoutStore.results = res;
    })
    await my_router.push({path: '/result', query: {key:"自定义", value: value}});
  }
}
async function handleSelect(obj) {
  const t = toRaw(obj);
  await store.dispatch("handlequeryCourseByClassId", toRaw({classid: t.classid})).then((res) => {
    store.state.layoutStore.results = res;
  })
  await my_router.push({path: '/result', query: {key: t.fieldname, value: t.value}});
}
</script>

<style>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>
