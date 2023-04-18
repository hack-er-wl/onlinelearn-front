<template>
  <el-dialog title="分类状态">
    <el-form ref="editFormRef"
             :model="editForm"
             :rules="editRules">
      <el-form-item label="分类ID">
        <el-input disabled :placeholder="store.state.managerStore.editClass.class_id" style="width: 150px"/>
      </el-form-item>
      <el-form-item label="状态码">
        <el-select v-model="editForm.code" class="m-2" placeholder="请选择状态码(0:热门,1:非热门)">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              suffix-icon="Key"
          />
        </el-select>
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
    classid:"",
    code:"",
});
const editRules = reactive({
  code: [{ required: true, message: "请选择状态码", trigger: ["blur",'change']}],
});
const options = [{label:0,value:0},{label:1,value:1}]
async function postAssessConfirm() {
    editForm.classid = store.state.managerStore.editClass.class_id;
  if(editForm.code === ""){
      ElMessage({message: "状态码不能为空", type: 'warning'});
  }else{
      await store.dispatch("handleUpdateClass", toRaw(editForm)).then(async (res) => {
          if (res) {
              useNotification('success', '系统通知', t("editSuccess"));
              store.state.managerStore.editClassStatus = false;
              store.state.managerStore.classes = [];
              await store.dispatch("handleQueryClassAll", toRaw({})).then((classes) => {
                  store.state.managerStore.classes = classes;
              })
          }else{
              useNotification('success', '系统通知', res.result);
          }
      });
  }
}
function postAssessCancel(){
  store.state.managerStore.editClassStatus = false;
  editForm.code = "";
  useNotification('error','系统通知',t("editCancel"));
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>