<template>
  <el-dialog title="我要充值">
    <el-form ref="editFormRef"
             :model="editForm"
             :rules="editRules">
      <el-form-item label="金额">
        <el-input prefix-icon="Coin" v-model="editForm.money" placeholder="请输入充值金额"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="postAssessCancel()">取消</el-button>
        <el-button type="primary" @click="postAssessConfirm()">充值</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {reactive, ref, toRaw} from "vue";
import { useI18n } from "vue-i18n";
import useNotification from "@/hooks/useNotification";
import {getUser} from "@/api/user";
import {useStore} from "vuex";
import {ElMessage} from "element-plus";
const { t } = useI18n();
const store = useStore();
const editFormRef = ref('');
const editForm = reactive({
  userid:getUser().user_id,
  money:"",
});
const editRules = reactive({
  money: [{ required: true, message: "请输入充值金额", trigger: "blur"}],
});
async function postAssessConfirm() {
  if(editForm.money != ""){
    useNotification('success', '系统通知', t("editSuccess"));
  }else{
    ElMessage({message: "金额不能为空", type: 'warning'});
  }
}
function postAssessCancel(){
  store.state.layoutStore.moneyHide = false;
  editForm.money = "";
  useNotification('error','系统通知',t("editCancel"));
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>