<template>
  <div class="data">
    <AddClassForm v-on:submit="onsubmit"/>
    <ClassTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
import ClassTable from "@/components/manage/course/ClassTable.vue";
import AddClassForm from "@/components/manage/course/AddClassForm.vue";
const store = useStore();
const onsubmit = async (formAddClass) => {
  const res = await store.dispatch("handleAddField", toRaw(formAddClass));
  if(res){
    useNotification("success","系统通知",res.result);
    store.state.managerStore.classes = [];
    await store.dispatch("handleQueryClassAll", toRaw({})).then((classes) => {
      store.state.managerStore.classes = classes;
    })
  }else{
    useNotification("error","系统通知",res.result);
  }
}
onMounted(async () => {
  store.state.managerStore.classes = [];
  await store.dispatch("handleQueryClassAll", toRaw({})).then((classes) => {
    store.state.managerStore.classes = classes;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 128.5vh;
}
</style>