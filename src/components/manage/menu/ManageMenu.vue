<template>
  <div class="data">
    <AddMenuForm v-on:submit="onsubmit"/>
    <MenuTable/>
  </div>
</template>

<script setup>
import AddMenuForm from "@/components/manage/menu/AddMenuForm.vue";
import MenuTable from "@/components/manage/menu/MenuTable.vue";
import {onMounted, toRaw} from "vue";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
const store = useStore();
const onsubmit = async (formAddMenu) => {
  const res = await store.dispatch("handleAddField", toRaw(formAddMenu));
  if(res){
    useNotification("success","系统通知",res.result);
    store.state.managerStore.menus = [];
    await store.dispatch("handleQueryMenuAll", toRaw({})).then((menus) => {
      store.state.managerStore.menus = menus;
    })
  }else{
    useNotification("error","系统通知",res.result);
  }
}
onMounted(async () => {
  store.state.managerStore.menus = [];
  await store.dispatch("handleQueryMenuAll", toRaw({})).then((menus) => {
    store.state.managerStore.menus = menus;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 100vh;
}
</style>