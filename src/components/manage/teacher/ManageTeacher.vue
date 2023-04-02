<template>
  <div class="data">
    <TeacherTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import TeacherTable from "@/components/manage/teacher/TeacherTable.vue";
const store = useStore();
onMounted(async () => {
  store.state.managerStore.teachers = [];
  await store.dispatch("handleQueryTeacherAll", toRaw({})).then((teachers) => {
    store.state.managerStore.teachers = teachers;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 128.5vh;
}
</style>