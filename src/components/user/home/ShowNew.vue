<template>
  <el-container>
    <el-header style="padding: 0">
      <div class="bottom">
        <span>
          <h4 style="color: gray">
            最新课程
            <i class="bi bi-bookmark-check-fill" style="color: blue"/>
          </h4>
        </span>
        <span style="color: gray;cursor: pointer" @click="handleClickMore">
          更多<el-icon color="blue"><ArrowRightBold /></el-icon>
        </span>
      </div>
    </el-header>
    <el-main style="display: flex;flex-wrap: wrap">
      <Card v-motion
            :initial="{ opacity: 1, x:0,y:0}"
            :enter="{ opacity: 1, x: 0,y:0}"
            :hovered="{y:-3}"
            v-for="(n,i) in store.state.layoutStore.newCourse" :key="i"
            :isLast="(i+1) % 4 == 0 ? true : false"
            :isFirst="(i+1) <= 4 ? true : false"
            :course="n"
            @click="handleClick(n)"
            style="cursor: pointer;width: 23.8%"/>
    </el-main>
  </el-container>
</template>
<script setup>
import Card from "./Card.vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import  qs from "qs";
import {toRaw} from "vue";
const store = useStore();
const router = useRouter();
const handleClick = (course)=>{
  store.state.layoutStore.assesses = [];
  router.push({path: '/course', query: {key: qs.stringify(course)}})
}
const handleClickMore = async () => {
    store.state.layoutStore.results = [];
    await store.dispatch("handlequeryCourseByStatus", toRaw({status: 1,length: -1})).then((res) => {
        store.state.layoutStore.results = res;
    })
    await router.push({path: '/result', query: {key: '最新课程', value: '更多'}});
}
</script>

<style>
.bottom{
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-between;
}
</style>
