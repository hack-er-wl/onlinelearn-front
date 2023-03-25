<template>
  <el-dialog title="修改密码">
    <el-form ref="editFormRef"
             :model="editForm"
             :rules="editRules">
      <el-form-item label="旧密码">
        <el-input prefix-icon="User" show-password v-model="editForm.old_pass" placeholder="请输入旧密码"/>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input prefix-icon="User" show-password v-model="editForm.new_pass" placeholder="请输入新密码"/>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input prefix-icon="User" show-password v-model="editForm.new_pass_again" placeholder="请输入新密码"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="postAssessCancel()">取消</el-button>
        <el-button type="primary" @click="postAssessConfirm()">发布</el-button>
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
  old_pass:"",
  new_pass:"",
  new_pass_again:""
});
const editRules = reactive({
  old_pass: [{ required: true, message: "请输入旧密码", trigger: "blur"}],
  new_pass: [{ required: true, message: "请输入新密码", trigger: "blur"}],
  new_pass_again: [{ required: true, message: "请确认新密码", trigger: "blur"}]
});
async function postAssessConfirm() {
  if(editForm.old_pass != editForm.new_pass && editForm.new_pass == editForm.new_pass_again){
    await store.dispatch("handleUpdatePass", toRaw({userid:editForm.userid,oldpass:editForm.old_pass,newpass:editForm.new_pass})).then((res) => {
      console.log(res);
      if (res) {
        store.state.layoutStore.pasHide = false;
        editForm.old_pass = "";
        editForm.new_pass = "";
        editForm.new_pass_again = "";
        useNotification('success', '系统通知', t("editSuccess"));
      } else {
        store.state.layoutStore.pasHide = true;
        useNotification('error', '系统通知', t("editFailed"));
      }
    })
  }else if(editForm.old_pass == editForm.new_pass){
    ElMessage({message: "新密码不能与旧密码相同", type: 'warning'});
  }else{
    ElMessage({message: "新密码不相同", type: 'warning'});
  }
}
function postAssessCancel(){
  store.state.layoutStore.pasHide = false;
  editForm.old_pass = "";
  editForm.new_pass = "";
  editForm.new_pass_again = "";
  useNotification('error','系统通知',t("editCancel"));
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>