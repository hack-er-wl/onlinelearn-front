<template>
  <el-dialog title="编辑守则">
    <el-form ref="editFormRef"
             :model="editForm"
             :rules="editRules">
      <el-form-item label="守则ID">
        <el-input disabled :placeholder="store.state.managerStore.editRule.rule_id" style="width: 50%"/>
      </el-form-item>
        <el-form-item label="守则内容">
            <el-input v-model="editForm.rulecontent" :placeholder="store.state.managerStore.editRule.rule_content"/>
        </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="postAssessCancel()">取消</el-button>
        <el-button type="primary" @click="postAssessConfirm()">更新</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {reactive, ref, toRaw} from "vue";
import { useI18n } from "vue-i18n";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
import {ElMessage} from "element-plus";
const { t } = useI18n();
const store = useStore();
const editFormRef = ref('');
const editForm = reactive({
    ruleid:"",
    rulecontent:"",
});
const editRules = reactive({
    rulecontent: [{ required: true, message: "请输入内容", trigger: "blur"}],
});
async function postAssessConfirm() {
  if(editForm.code != ""){
      editForm.ruleid = store.state.managerStore.editRule.rule_id;
      if(editForm.code === ""){
          ElMessage({message: "状态码不能为空", type: 'warning'});
      }else{
          await store.dispatch("handleUpdateRule", toRaw(editForm)).then(async (res) => {
              if (res) {
                  useNotification('success', '系统通知', t("editSuccess"));
                  store.state.managerStore.isEditRule = false;
                  store.state.managerStore.rules = [];
                  await store.dispatch("handleQueryRuleAll", toRaw({})).then((rules) => {
                      store.state.managerStore.rules = rules;
                  })
              } else {
                  useNotification('success', '系统通知', res.result);
              }
          });
      }
  }else{
    ElMessage({message: "状态码不能为空", type: 'warning'});
  }
}
function postAssessCancel(){
  store.state.managerStore.editStatus = false;
  editForm.code = "";
  useNotification('error','系统通知',t("editCancel"));
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>