<template>
  <div class="data">
    <AddTeacherForm v-on:submit="onsubmit"/>
    <TeacherTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
import AddTeacherForm from "@/components/manage/teacher/AddTeacherForm.vue";
import TeacherTable from "@/components/manage/teacher/TeacherTable.vue";
const store = useStore();
const onsubmit = async (formAddTeacher) => {
  const res = await store.dispatch("handleAddField", toRaw(formAddTeacher));
  if(res){
    useNotification("success","系统通知",res.result);
    store.state.managerStore.teachers = [];
    await store.dispatch("handleQueryTeacherAll", toRaw({})).then((teachers) => {
      store.state.managerStore.teachers = teachers;
    })
  }else{
    useNotification("error","系统通知",res.result);
  }
}
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
  width: 100%;
}
</style>