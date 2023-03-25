<template>
  <div class="data">
    <AddMessageForm v-on:submit="onsubmit"/>
    <MessageTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
import AddMessageForm from "@/components/manage/message/AddMessageForm.vue";
import MessageTable from "@/components/manage/message/MessageTable.vue";
const store = useStore();
const onsubmit = async (formAddMessage) => {
  const res = await store.dispatch("handleAddField", toRaw(formAddMessage));
  if(res){
    useNotification("success","系统通知",res.result);
    store.state.managerStore.messages = [];
    await store.dispatch("handleQueryMessageAll", toRaw({})).then((messages) => {
      store.state.managerStore.messages = messages;
    })
  }else{
    useNotification("error","系统通知",res.result);
  }
}
onMounted(async () => {
  store.state.managerStore.messages = [];
  await store.dispatch("handleQueryMessageAll", toRaw({})).then((messages) => {
    store.state.managerStore.messages = messages;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 128.5vh;
  width: 100%;
}
</style>