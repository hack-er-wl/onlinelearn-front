<template>
  <el-dialog title="发布测试">
    <el-form :model="testForm" ref="testFormRef" :rules="testFormRules">
      <div style="display: flex;justify-content: space-between">
          <el-form-item style="width: 50%;margin-right: 5px" label="测试名称" prop="testname">
              <el-input prefix-icon="Document" v-model="testForm.testname" placeholder="请输入测试名称···"/>
          </el-form-item>
          <el-form-item label="考试用时" prop="usetime">
              <el-input prefix-icon="AlarmClock" v-model="testForm.usetime" placeholder="请输入考试用时···"/>
          </el-form-item>
      </div>
        <el-form-item label="课程名称" prop="courseid">
            <el-select style="width: 100%" suffix-icon="Folder" v-model="testForm.courseid" placeholder="请选择课程名称···">
                <el-option
                        v-for="item in store.state.teacherStore.postCourses.checked"
                        :key="item.course_id"
                        :label="item.course_name"
                        :value="item.course_id"
                />
            </el-select>
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
import {useStore} from "vuex";
import {reactive, ref, toRaw} from "vue";
import { useI18n } from "vue-i18n";
import useNotification from "@/hooks/useNotification";
const { t } = useI18n();
const store = useStore();
const testFormRef = ref(null);
const testForm = reactive({
    testname:"",
    usetime:"",
    courseid:"",
    teachid:""
})
const testFormRules = reactive({
    testname: [{ required: true, message: "请输入测试名称", trigger: "blur" }],
    usetime: [{ required: true, message: "请输入考试用时", trigger: "blur" }],
    courseid:[{ required: true, message: "请选择课程", trigger: ["blur",'change']}]
});

async function postAssessConfirm() {
    testForm.teachid = store.state.teacherStore.teacher.teach_id;
    console.log(toRaw(testForm));
    await testFormRef.value.validate(async (valid, fields) => {
        if (valid) {
            await store.dispatch("handlePostTest", toRaw(testForm)).then((res) => {
                if (res) {
                    useNotification('success', '系统通知', "测试发布成功！");
                    store.state.teacherStore.addTeHide = false;
                } else {
                    useNotification('success', '系统通知', "测试发布失败！");
                }
            })
        } else {
            console.log(fields);
        }
    });
}
function postAssessCancel(){
    store.state.teacherStore.addTeHide = false;
    testForm.teachid = "";
    testForm.usetime = "";
    testForm.testname = "";
    useNotification('error','系统通知',t("editCancel"));
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
