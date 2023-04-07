<template>
  <el-dialog title="发布小节">
    <el-form :model="barForm" ref="barFormRef" :rules="barFormRules">
      <div style="display: flex;justify-content: space-between">
        <el-form-item style="width: 50%;margin-right: 5px" label="小节名称" prop="barname">
          <el-input prefix-icon="Edit" v-model="barForm.barname" placeholder="请输入小节名称···"/>
        </el-form-item>
          <el-form-item label="小节顺序" prop="barorder">
              <el-input prefix-icon="DataLine" v-model="barForm.barorder" placeholder="请输入章节顺序···"/>
          </el-form-item>
      </div>
      <div style="display: flex;justify-content: space-between">
          <el-form-item label="课程名称" prop="courseid">
              <el-select @change="handleChange" style="width: 100%" suffix-icon="Folder" v-model="barForm.courseid" placeholder="请选择课程名称···">
                  <el-option
                          v-for="item in store.state.teacherStore.postCourses.checked"
                          :key="item.course_id"
                          :label="item.course_name"
                          :value="item.course_id"
                  />
              </el-select>
          </el-form-item>
          <el-form-item label="课程地址" prop="barurl">
              <UploadVideoCard/>
          </el-form-item>
      </div>
        <el-form-item label="章节名称" prop="chapterid">
            <el-select style="width: 100%" suffix-icon="Folder" v-model="barForm.chapterid" placeholder="请选择章节名称···">
                <el-option
                        v-for="item in store.state.teacherStore.courseChapter"
                        :key="item.chapter_id"
                        :label="item.chapter_name"
                        :value="item.chapter_id"
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
import UploadCard from "@/components/teacher/thome/UploadImgCard.vue";
import UploadVideoCard from "@/components/teacher/thome/UploadVideoCard.vue";
const barFormRef = ref(null);
const { t } = useI18n();
const store = useStore();
const barForm = reactive({
    barname:"",
    barorder:"",
    courseid:"",
    chapterid:"",
    barurl:""
})
const barFormRules = reactive({
    barname: [{ required: true, message: "请输入小节名称", trigger: "blur" }],
    barorder: [{ required: true, message: "请输入小节顺序", trigger: "blur" }],
    barurl:[{ required: true, message: "请上传小节视频", trigger: "blur" }],
    courseid:[{ required: true, message: "请选择课程", trigger: ["blur",'change']}],
    chapterid:[{ required: true, message: "请选择章节", trigger: ["blur",'change']}]
});
async function postAssessConfirm() {
    console.log(toRaw(barForm));
    barForm.barurl = store.state.teacherStore.video_url;
    await barFormRef.value.validate(async (valid, fields) => {
        if (valid) {
            await store.dispatch("handlePostBar", toRaw({chapterid:barForm.chapterid,barorder:barForm.barorder,barname:barForm.barname,barurl:barForm.barurl})).then((res)=>{
                if(res){
                    useNotification('success', '系统通知', "小节发布成功！");
                    store.state.teacherStore.addBarHide = false;
                }else{
                    useNotification('error', '系统通知',"小节发布失败！");
                }
            })
        } else {
            console.log(fields);
        }
    });
}
function postAssessCancel(){
    store.state.teacherStore.addBarHide = false;
    barForm.barname = "";
    barForm.barorder = "";
    barForm.barurl = "";
  useNotification('error','系统通知',t("editCancel"));
}
const handleChange = async () => {
    if (barForm.courseid != "") {
        store.state.teacherStore.courseChapter = [];
        store.state.teacherStore.courseChapter = await store.dispatch("handleQueryChapter", toRaw({courseid: barForm.courseid}));
    }
}
onMounted(async () => {

})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
