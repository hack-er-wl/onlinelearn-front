<template>
  <div class="data">
    <CourseTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import CourseTable from "@/components/manage/course/CourseTable.vue";
const store = useStore();
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