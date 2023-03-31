<template>
  <div class="data">
    <AddRuleForm v-on:submit="onsubmit"/>
    <RuleTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
import AddRuleForm from "@/components/manage/rule/AddRuleForm.vue";
import RuleTable from "@/components/manage/rule/RuleTable.vue";
const store = useStore();
const onsubmit = async (formAddRule) => {
  const res = await store.dispatch("handleAddField", toRaw(formAddRule));
  if(res){
    useNotification("success","系统通知",res.result);
    store.state.managerStore.rules = [];
    await store.dispatch("handleQueryRuleAll", toRaw({})).then((rules) => {
      store.state.managerStore.rules = rules;
    })
  }else{
    useNotification("error","系统通知",res.result);
  }
}
onMounted(async () => {
  store.state.managerStore.rules = [];
  await store.dispatch("handleQueryRuleAll", toRaw({})).then((rules) => {
    store.state.managerStore.rules = rules;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 128.5vh;
}
</style>