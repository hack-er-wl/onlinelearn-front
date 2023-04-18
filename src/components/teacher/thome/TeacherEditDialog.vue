<template>
  <el-dialog title="编辑信息">
    <el-form :model="editForm" ref="editFormRef" :rules="editFormRules">
      <div style="display: flex">
        <el-form-item style="width: 60%;margin-right: 5px" label="昵称">
          <el-input prefix-icon="User" v-model="editForm.username" :placeholder="store.state.teacherStore.teacher.user_name"/>
        </el-form-item>
        <el-form-item style="width: 40%" label="年龄">
          <el-select style="width: 100%" suffix-icon="Calendar" v-model="editForm.userage" :placeholder="store.state.teacherStore.teacher.user_age.toString()">
            <el-option
                v-for="item in ages"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
      </div>
      <div style="display: flex">
        <el-form-item label="手机">
          <el-input prefix-icon="Iphone" v-model="editForm.usertel" :placeholder="store.state.teacherStore.teacher.user_tel"/>
        </el-form-item>
      </div>
        <div style="display: flex">
            <el-form-item style="width: 50%;margin-right: 5px" label="领域">
                <el-input prefix-icon="Flag" v-model="editForm.teachfield" :placeholder="store.state.teacherStore.teacher.teach_field"/>
            </el-form-item>
            <el-form-item style="width: 50%" label="分类">
                <el-input prefix-icon="CollectionTag" v-model="editForm.teachclass" :placeholder="store.state.teacherStore.teacher.teach_class"/>
            </el-form-item>
        </div>
      <div style="display: flex">
        <el-form-item style="width: 60%;margin-right: 5px" label="性别">
          <el-select style="width: 100%" suffix-icon="Male" v-model="editForm.usersex" :placeholder="store.state.teacherStore.teacher.user_sex == 0 ? '男':'女'">
            <el-option
                v-for="item in genders"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item style="width: 40%" label="教龄">
          <el-select style="width: 100%" suffix-icon="Calendar" v-model="editForm.usertage" :placeholder="store.state.teacherStore.teacher.user_tage.toString()">
            <el-option
                v-for="item in tages"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
      </div>
      <el-form-item label="兴趣">
        <el-input
            v-model="editForm.userbrief"
            :rows="5"
            type="textarea"
            :placeholder="store.state.teacherStore.teacher.user_brief"
        />
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
import {getUser} from "@/api/user";
const { t } = useI18n();
const store = useStore();
const editFormRef = ref(null);
const genders = [{value:'0',label:'男'},{value:'1',label:'女'}];
const ages = [{value:23,label:23},{value:24,label:24},{value:25,label:25},{value:26,label:26},{value:27,label:27},{value:28,label:28},
  {value:29,label:29},{value:30,label:30},{value:31,label:31},{value:32,label:32},{value:33,label:33}];
const tages = [{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:6,label:6},{value:7,label:7},{value:8,label:8},
  {value:9,label:9},{value:10,label:10},{value:11,label:11},{value:12,label:12},{value:13,label:13}];

const editForm = reactive({
    userid:"",
    username:"",
    teachid:"",
    usertel:"",
    teachfield:"",
    teachclass:"",
    userage:"",
    usertage:"",
    usersex:"",
    userbrief:""
})
const editFormRules = reactive({
    username: [{ required: true, message: "请输入课程名称", trigger: "blur" }],
    usertel: [{ required: true, message: "请上传课程封面", trigger: "blur" }],
    teachfield: [{ required: true, message: "请输入课程简介", trigger: "blur" }],
    teachclass: [{ required: true, message: "请输入课程名称", trigger: "blur" }],
    userage: [{ required: true, message: "请上传课程封面", trigger: "blur" }],
    usertage: [{ required: true, message: "请输入课程费用", trigger: "blur" }],
    usersex: [{ required: true, message: "请输入课程简介", trigger: "blur" }],
    userbrief: [{ required: true, message: "请输入课程名称", trigger: "blur" }],
});

async function postAssessConfirm() {
    editForm.userid = getUser().user_id;
    editForm.teachid = store.state.teacherStore.teacher.teach_id;
    let num = 0;
    if (editForm.username === "") {
        editForm.username = store.state.teacherStore.teacher.user_name;
        num++;
    }
    if (editForm.usertel === "") {
        editForm.usertel = store.state.teacherStore.teacher.user_tel;
        num++;
    }
    if (editForm.teachfield === "") {
        editForm.teachfield = store.state.teacherStore.teacher.teach_field
        num++;
    }
    if (editForm.teachclass === "") {
        editForm.teachclass = store.state.teacherStore.teacher.teach_class
        num++;
    }
    if (editForm.userage === "") {
        editForm.userage = store.state.teacherStore.teacher.user_age
        num++;
    }
    if (editForm.usertage === "") {
        editForm.usertage = store.state.teacherStore.teacher.user_tage
        num++;
    }
    if (editForm.usersex === "") {
        editForm.usersex = store.state.teacherStore.teacher.user_sex
        num++;
    }
    if (editForm.userbrief === "") {
        editForm.userbrief = store.state.teacherStore.teacher.user_brief
        num++;
    }
    console.log(toRaw(editForm));
    if (num == 8) {
        useNotification('error', '系统通知', '至少修改一个内容！');
    } else {
        await store.dispatch("handleUpdateTeacherInfo", toRaw(editForm)).then(async (res) => {
            if (res) {
                store.state.teacherStore.tperHide = false;
                useNotification('success', '系统通知', t("editSuccess"));
                store.state.teacherStore.teacher = await store.dispatch("handleCheckTeacher", toRaw({userid: getUser().user_id}));
            } else {
                useNotification('error', '系统通知', res.result);
            }
        })
    }
}
function postAssessCancel(){
    store.state.teacherStore.tperHide = false;
  useNotification('error','系统通知',t("editCancel"));
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
