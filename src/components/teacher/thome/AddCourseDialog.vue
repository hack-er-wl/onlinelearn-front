<template>
  <el-dialog title="发布课程">
    <el-form :model="courseForm" ref="courseFormRef" :rules="courseFormRules">
      <div style="display: flex;justify-content: space-between">
        <el-form-item style="width: 50%;margin-right: 5px" label="课程名称" prop="coursename">
          <el-input prefix-icon="User" v-model="courseForm.coursename" placeholder="请输入课程名称···"/>
        </el-form-item>
          <el-form-item style="width: 40%" label="课程分类" prop="courseid">
              <el-select style="width: 100%" suffix-icon="Calendar" v-model="courseForm.classid" placeholder="请选择课程分类">
                  <el-option
                          v-for="item in store.state.teacherStore.classes"
                          :key="item.value"
                          :label="item.value"
                          :value="item.classid"
                  />
              </el-select>
          </el-form-item>
      </div>
      <div style="display: flex;justify-content: space-between">
        <el-form-item style="width: 50%;margin-right: 5px" label="课程费用" prop="coursefee">
          <el-input prefix-icon="Iphone" v-model="courseForm.coursefee" placeholder="请输入课程费用···"/>
        </el-form-item>
        <el-form-item style="width: 40%" label="课程封面" prop="coursecover">
          <UploadCard/>
        </el-form-item>
      </div>
      <el-form-item label="课程简介" prop="coursebrief">
        <el-input v-model="courseForm.coursebrief" :rows="2" type="textarea" placeholder="请输入课程简介···"/>
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
import UploadCard from "@/components/teacher/thome/UploadCard.vue";
const courseFormRef = ref(null);
const { t } = useI18n();
const store = useStore();
const courseForm = reactive({
    classid:"",
    teachid:"",
    coursename:"",
    coursefee:"",
    coursecover:"",
    coursebrief:""
})
const courseFormRules = reactive({
    classid: [{ required: true, message: "选择入课程分类", trigger: ["blur",'change']}],
    coursename: [{ required: true, message: "请输入课程名称", trigger: "blur" }],
    coursefee: [{ required: true, message: "请输入课程费用", trigger: "blur" }],
    coursebrief: [{ required: true, message: "请输入课程简介", trigger: "blur" }],
});
async function postAssessConfirm() {
    courseForm.teachid = store.state.teacherStore.teacher.teach_id;
    courseForm.coursecover = store.state.teacherStore.course_url;
    await courseFormRef.value.validate(async (valid, fields) => {
        if (valid) {
            await store.dispatch("handlePostCourse", toRaw(courseForm)).then((res)=>{
                if(res){
                    useNotification('success', '系统通知', "课程发布成功！");
                    store.state.teacherStore.addCouHide = false;
                    location.reload();
                }else{
                    useNotification('success', '系统通知',"课程发布失败！");
                }
            })
        } else {
            console.log(fields);
        }
    });
}
function postAssessCancel(){
  useNotification('success','系统通知',t("editCancel"));
}
onMounted(async () => {
    await store.dispatch("handleQueryClassAll", toRaw({status: 0})).then((res) => {
        if (res) {
            for (let i in res) {
                store.state.teacherStore.classes.push({
                    value: res[i].class_name,
                    classid: res[i].class_id,
                })
            }
        }
    })
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
