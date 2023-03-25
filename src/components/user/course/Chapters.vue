<template>
  <el-card
      :body-style="{ padding: '0px',height:'548px'}">
    <el-scrollbar>
      <div class="chapter">
        <span class="title">{{data.course.value.course_name}}</span>
        <ul class="chapter_list">
            <el-collapse style="margin: 0 10px 0 10px" v-model="active">
              <el-collapse-item v-for="(n,i) in store.state.layoutStore.chapters" :key="i" :title="'第'+n.chapter_order+'章 '+n.chapter_name" :name="i">
                <el-link style="margin-left: 30px;font-size: 13px" v-for="(t,i) in n.bars" :key="i" @click="store.state.layoutStore.videoUrl = t.bar_url">{{n.chapter_order+"."+t.bar_order+" "+t.bar_name}}</el-link>
              </el-collapse-item>
            </el-collapse>
          <li class="scrollbar-demo-item demo-collapse">
            <el-button type="success" size="small" :disabled="store.state.layoutStore.learn_num >= 5?false:true" @click="router.push('/test')">参加测试</el-button>
          </li>
        </ul>
      </div>
    </el-scrollbar>
  </el-card>
</template>

<script setup>
import {useStore} from "vuex";
import router from "../../../router";
import {defineProps, ref, toRefs} from "vue";
const props = defineProps({
  course:Object
})
const data = toRefs(props);
const store = useStore();
const active = ref()
</script>

<style scoped>
.title{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  font-weight: bold;
}
.scrollbar-demo-item{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 10px 20px 10px 20px;
  text-align: center;
  border-radius: 10px;
}
.scrollbar-demo-item-title{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px 20px 10px 20px;
  text-align: center;
  border-radius: 4px;
}
</style>
