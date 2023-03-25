<template>
  <el-dialog title="完善信息">
    <el-form ref="editFormRef"
             :model="editForm"
             :rules="editRules">
      <el-form-item label="地址">
        <el-input prefix-icon="LocationFilled" v-model="editForm.address" :placeholder="getUser().user_add != '' ? getUser().user_add:'请输入地址'"/>
      </el-form-item>
      <el-form-item label="兴趣">
        <el-select style="width: 100%" suffix-icon="Flag" v-model="editForm.like" :placeholder="getUser().user_like != '' ? getUser().user_like:'请选择兴趣'">
          <el-option
              v-for="item in likes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="postAssessCancel()">取消</el-button>
        <el-button type="primary" :disabled="getUser().user_add != '' && getUser().user_like != '' ? true : false" @click="postAssessConfirm()">发布</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import {reactive, ref, toRaw} from "vue";
import { useI18n } from "vue-i18n";
import useNotification from "@/hooks/useNotification";
import {useStore} from "vuex";
import {getUser} from "@/api/user";
const { t } = useI18n();
const editFormRef = ref(null);
const store = useStore();
const likes = [{value:"数据结构",label:"数据结构"},{value:"Java程序设计",label:"Java程序设计"}];

const editForm = reactive({
  userid:getUser().user_id,
  address:"",
  like:""
});
const editRules = reactive({
  address: [{ required: true, message: "请输入地址", trigger: "blur"}],
  like: [{ required: true, message: "请选择兴趣", trigger: ["blur",'change']}],
});

async function postAssessConfirm() {
  await store.dispatch("handlePostUserInfo", toRaw(editForm)).then((res) => {
    console.log(res);
    if(res){
      store.state.layoutStore.perHide = false;
      useNotification('success', '系统通知', t("editSuccess"));
    }else{
      store.state.layoutStore.perHide = true;
      useNotification('error', '系统通知', t("editFailed"));
    }
  })
}
function postAssessCancel(){
  store.state.layoutStore.perHide = false;
  useNotification('error','系统通知',t("editCancel"));
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
