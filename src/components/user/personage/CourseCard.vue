<template>
  <el-card
      :body-style="{padding: '0px',display:'flex'}"
      shadow="hover"
      class="course_card"
      style="width: 100%"
      :style="{marginBottom:data.isLast.value?'0px':'1.4%'}">
    <el-image :src="data.course.value.course_cover" class="image" :style="{height:'150px',width:'30%',borderRadius:'4px'}"/>
    <div style="padding:3px;width: 100%">
      <div style="margin-left: 8px;margin-right:8px;margin-top: 16px;display: flex;justify-content: space-between">
        <h4>{{data.course.value.course_name}}</h4>
        <el-tag>￥{{data.course.value.course_fee}}元</el-tag>
      </div>
      <div style="margin-left: 8px;margin-right:8px;margin-top: 65px;display: flex;justify-content: space-between">
        <div class="left">
          <div style="display: flex">
            <h6 style="color:gray;margin-right: 24px">主讲老师：{{data.course.value.teach_name}}</h6>
            <h6 style="color:gray;margin-right: 24px">课程时常：2h</h6>
            <h6 style="color:gray">已有{{data.course.value.subscribe_num}}人学习</h6>
          </div>
          <div style="margin-top: 4px;width: 400px">
            <el-progress :percentage="10" :format="(percentage) => (percentage === 10 ? '1/10' : `${percentage}%`)"/>
          </div>
        </div>
        <div class="right">
          <el-button type="success" @click="handleClick(data.course.value)" round icon="Reading">继续学习</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import router from "../../../router"
import {toRefs} from "vue";
import {defineProps} from "vue";
import qs from "qs";
import {useStore} from "vuex";
const store = useStore();
const props = defineProps({
    isLast:Boolean,
    course:Object
})
const data = toRefs(props)
const handleClick = (course)=>{
    console.log(course);
    store.state.layoutStore.assesses = [];
    router.push({path: '/course', query: {key: qs.stringify(course)}})
}
</script>

<style scoped>

</style>