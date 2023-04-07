<template>
  <el-card class="test_box_card">
    <template #header>
      <div class="card-header">
        <h6><i class="bi bi-pencil" style="color: gray"/> {{data.test.value.test_name}}</h6>
        <p style="font-size: 5px;color: gray">{{data.test.value.test_time}}</p>
      </div>
    </template>
    <div style="display: flex;justify-content: space-between">
      <div><p style="font-size: 12px;color: gray">建议用时: {{data.test.value.use_time}}分钟</p></div>
      <div><el-button :type="data.test.value.participate?'primary':'warning'" size="small" @click="handleClick(data.test.value,data.test.value.participate)">{{data.test.value.participate?'查看排名':'参加考试'}}</el-button></div>
    </div>
  </el-card>
</template>
<script setup>
import {onMounted, toRaw, toRefs} from "vue";
import {defineProps} from "vue"
import qs from "qs";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
const router = useRouter();
const store = useStore();;
const props = defineProps({
  test:Object
})
const data = toRefs(props)
console.log(data.test.value.participate)
const handleClick = (test,done) => {
  if(!done)
    router.push({path:'/test',query: {key: qs.stringify(test)}})
  else
    router.push({path:'/rank',query: {key: test.test_id}})
}
</script>
<style lang="scss" scoped>

.test_box_card {
  width: 95.6%;
  margin:2%;
  .card-header{
    display: flex;
    justify-content: space-between;
  }
}
</style>
