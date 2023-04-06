<template>
  <div class="data">
      <CourseTable/>
      <ChapterTable style="margin-top: 2%"/>
      <BarTable style="margin-top: 2%"/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import CourseTable from "@/components/manage/course/CourseTable.vue";
import ChapterTable from "@/components/manage/course/ChapterTable.vue";
import BarTable from "@/components/manage/course/BarTable.vue";
const store = useStore();
onMounted(async () => {
  store.state.managerStore.courses = [];
    store.state.managerStore.chapters = [];
    store.state.managerStore.bars = [];
  await store.dispatch("handleQueryCourseAll", toRaw({})).then((courses) => {
    store.state.managerStore.courses = courses;
  })
    await store.dispatch("handleQueryChapterAll", toRaw({})).then((chapters) => {
        store.state.managerStore.chapters = chapters;
    })
    await store.dispatch("handleQueryBarAll", toRaw({})).then((bars) => {
        store.state.managerStore.bars = bars;
    })
})
</script>

<style lang="scss" scoped>
.data{
  height: 100%;
}
</style>