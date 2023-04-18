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
import AddRuleForm from "@/components/manage/teacher/AddRuleForm.vue";
import RuleTable from "@/components/manage/teacher/RuleTable.vue";
import {useI18n} from "vue-i18n";
const store = useStore();
const { t } = useI18n();
const onsubmit = async (formAddRule) => {
  const res = await store.dispatch("handleAddRule", toRaw(formAddRule));
  if(res){
    useNotification("success","系统通知",t("editSuccess"));
    formAddRule.rulecontent = "";
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
  height: 100vh;
}
</style>