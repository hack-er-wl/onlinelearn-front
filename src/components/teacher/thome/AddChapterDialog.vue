<template>
  <el-dialog title="发布章节">
    <el-form :model="chapterForm" ref="chapterFormRef" :rules="chapterFormRules">
      <div style="display: flex;justify-content: space-between">
        <el-form-item style="width: 50%;margin-right: 5px" label="章节名称" prop="chaptername">
          <el-input prefix-icon="Edit" v-model="chapterForm.chaptername" placeholder="请输入章节名称···"/>
        </el-form-item>
        <el-form-item label="章节顺序" prop="chapterorder">
            <el-input prefix-icon="DataLine" v-model="chapterForm.chapterorder" placeholder="请输入章节顺序···"/>
        </el-form-item>
      </div>
        <el-form-item label="课程名称" prop="courseid">
            <el-select style="width: 100%" suffix-icon="Folder" v-model="chapterForm.courseid" placeholder="请选择课程名称···">
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
import {onMounted, reactive, ref, toRaw} from "vue";
import { useI18n } from "vue-i18n";
import useNotification from "@/hooks/useNotification";
const chapterFormRef = ref(null);
const { t } = useI18n();
const store = useStore();
const chapterForm = reactive({
    chaptername:"",
    chapterorder:"",
    courseid:""
})
const chapterFormRules = reactive({
    chaptername: [{ required: true, message: "请输入章节名称", trigger: "blur" }],
    chapterorder: [{ required: true, message: "请输入章节顺序", trigger: "blur" }],
    courseid:[{ required: true, message: "请选择课程", trigger: ["blur",'change']}]
});
async function postAssessConfirm() {
    console.log(toRaw(chapterForm));
    await chapterFormRef.value.validate(async (valid, fields) => {
        if (valid) {
            await store.dispatch("handlePostChapter", toRaw(chapterForm)).then((res)=>{
                if(res){
                    useNotification('success', '系统通知', "章节发布成功！");
                    store.state.teacherStore.addChapHide = false;
                }else{
                    useNotification('success', '系统通知',"章节发布失败！");
                }
            })
        } else {
            console.log(fields);
        }
    });
}
function postAssessCancel(){
    store.state.teacherStore.addChapHide = false;
    chapterForm.chaptername = "";
    chapterForm.chapterorder = "";
  useNotification('error','系统通知',t("editCancel"));
}
onMounted(async () => {

})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
