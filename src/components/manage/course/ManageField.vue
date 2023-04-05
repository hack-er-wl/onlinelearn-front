<template>
  <div class="data">
    <AddFieldForm v-on:submit="onsubmit"/>
    <FieldTable/>
  </div>
</template>

<script setup>
import FieldTable from "@/components/manage/course/FieldTable.vue";
import AddFieldForm from "@/components/manage/course/AddFieldForm.vue";
import {onMounted, toRaw} from "vue";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
const store = useStore();
const onsubmit = async (formAddField) => {
  const res = await store.dispatch("handleAddField", toRaw(formAddField));
  if(res){
    useNotification("success","系统通知",res.result);
    store.state.managerStore.fields = [];
    await store.dispatch("handlequeryFields", toRaw({})).then((fields) => {
      store.state.managerStore.fields = fields;
    })
  }else{
    useNotification("error","系统通知",res.result);
  }
}
onMounted(async () => {
  store.state.managerStore.fields = [];
  await store.dispatch("handlequeryFieldsAll", toRaw({})).then((fields) => {
    store.state.managerStore.fields = fields;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 128.5vh;
}
</style>