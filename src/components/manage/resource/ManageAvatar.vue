<template>
  <div class="data">
    <AddAvatarForm/>
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