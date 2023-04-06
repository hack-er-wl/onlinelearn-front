<template>
  <div class="data">
    <AddAvatarForm v-on:submit="onsubmit"/>
    <AvatarTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import useNotification from "@/hooks/useNotification";
import AddAvatarForm from "@/components/manage/resource/AddAvatarForm.vue";
import AvatarTable from "@/components/manage/resource/AvatarTable.vue";
const store = useStore();
const onsubmit = async (formAddAvatar) => {
  // const res = await store.dispatch("handleAddField", toRaw(formAddAvatar));
  // if(res){
  //   useNotification("success","系统通知",res.result);
  //   store.state.managerStore.sliders = [];
  //   await store.dispatch("handleQuerySliderAll", toRaw({})).then((sliders) => {
  //     store.state.managerStore.sliders = sliders;
  //   })
  // }else{
  //   useNotification("error","系统通知",res.result);
  // }
}
onMounted(async () => {
  store.state.managerStore.avatars = [];
  await store.dispatch("handleQueryAvatarAll", toRaw({})).then((avatars) => {
    store.state.managerStore.avatars = avatars;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 100%;
}
</style>