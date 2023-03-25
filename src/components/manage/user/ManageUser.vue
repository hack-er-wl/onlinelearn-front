<template>
  <div class="data">
    <UserAreaEchart/>
    <AddUserForm v-on:submit="onsubmit"/>
    <UserTable/>
  </div>
</template>

<script  setup>
import UserTable from "./UserTable.vue";
import UserAreaEchart from "./UserAreaEchart.vue";
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import AddUserForm from "@/components/manage/user/AddUserForm.vue";
import useNotification from "@/hooks/useNotification";
const store = useStore();
const onsubmit = async (formAddUser) => {
  const res = await store.dispatch("handleAddField", toRaw(formAddUser));
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
  store.state.managerStore.users = [];
  await store.dispatch("handleQueryUserAll", toRaw({})).then((users) => {
    store.state.managerStore.users = users;
  })
})
</script>
<style lang="scss" scoped>
.data{
  height: 128.5vh;
  width: 100%;
}
</style>
