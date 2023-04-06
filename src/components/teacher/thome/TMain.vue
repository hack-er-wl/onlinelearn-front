<template>
  <!--讲师信息区域-->
  <Detail style="margin:2%"/>
  <!--中间区域-->
  <div style="display: flex">
    <CourseOperate style="margin:0 2% 0 2%;width: 20%"/>
    <TestOperate style="margin:0 2% 0 0;width: 20%"/>
    <WeatherCard style="margin:0 2% 0 0;width: 30%"/>
    <RulesCard style="margin:0 2% 0 0;width: 50%"/>
  </div>
  <!--展示区域-->
  <MyPost style="margin:2%"/>
  <MyCkecking style="margin:2%"/>
  <MyCheckFail style="margin:2%"/>
</template>
<script setup>
import Detail from "./Detail.vue";
import CourseOperate from "./CourseOperate.vue";
import MyPost from "./MyPost.vue";
import WeatherCard from "./WeatherCard.vue";
import RulesCard from "./RulesCard.vue";
import MyCkecking from "@/components/teacher/thome/MyChecking.vue";
import MyCheckFail from "@/components/teacher/thome/MyCheckFail.vue";
import TestOperate from "@/components/teacher/thome/TestOperate.vue";
</script>
<style scoped>

</style>
