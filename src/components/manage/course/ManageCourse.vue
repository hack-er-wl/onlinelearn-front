<template>
  <div class="data">
    <AddCourseForm v-on:submit="onsubmit"/>
    <CourseTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
import AddCourseForm from "@/components/manage/course/AddCourseForm.vue";
import CourseTable from "@/components/manage/course/CourseTable.vue";
const store = useStore();
const onsubmit = async (formAddCourse) => {
  const res = await store.dispatch("handleAddField", toRaw(formAddCourse));
  if(res){
    useNotification("success","系统通知",res.result);
    store.state.managerStore.courses = [];
    await store.dispatch("handleQueryCourseAll", toRaw({})).then((courses) => {
      store.state.managerStore.courses = courses;
    })
  }else{
    useNotification("error","系统通知",res.result);
  }
}
onMounted(async () => {
  store.state.managerStore.courses = [];
  await store.dispatch("handleQueryCourseAll", toRaw({})).then((courses) => {
    store.state.managerStore.courses = courses;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 128.5vh;
  width: 100%;
}
</style>