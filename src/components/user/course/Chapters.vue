<template>
  <el-card
      :body-style="{ padding: '0px',height:'548px'}">
    <el-scrollbar>
      <div class="chapter">
        <span class="title">{{data.course.value.course_name}}</span>
        <ul class="chapter_list">
            <el-collapse style="margin: 0 4% 0 4%" v-model="active">
              <el-collapse-item v-for="(n,i) in store.state.layoutStore.chapters" :key="i" :title="'第'+n.chapter_order+'章 '+n.chapter_name" :name="i">
                <el-link style="margin-left: 30px;font-size: 13px" v-for="(t,i) in n.bars" :key="i" @click="store.state.layoutStore.videoUrl = t.bar_url">{{n.chapter_order+"."+t.bar_order+" "+t.bar_name}}</el-link>
              </el-collapse-item>
            </el-collapse>
          <li class="scrollbar-demo-item demo-collapse">
            <el-button type="success" size="small" @click="handleClick(data.course.value.course_id)">参加测试</el-button>
          </li>
        </ul>
      </div>
    </el-scrollbar>
  </el-card>
</template>

<script setup>
import {useStore} from "vuex";
import {defineProps, ref, toRefs} from "vue";
import {useRouter} from "vue-router";
const props = defineProps({
  course:Object
})
const data = toRefs(props);
const store = useStore();
const active = ref()
const router = useRouter();
const handleClick = (course_id) => {
  store.state.layoutStore.tests = [];
  console.log(course_id);
  router.push({path:'/testlist',query: {key: course_id}})
}
</script>

<style scoped>
.title{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6%;
  font-weight: bold;
}
.scrollbar-demo-item{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6%;
  margin: 4% 5% 4% 5%;
  text-align: center;
  border-radius: 10px;
}
.scrollbar-demo-item-title{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 4% 5% 4% 5%;
  text-align: center;
  border-radius: 4px;
}
</style>
