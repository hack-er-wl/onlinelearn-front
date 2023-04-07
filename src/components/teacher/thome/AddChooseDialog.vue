<template>
  <el-dialog title="发布选择题">
    <el-form :model="chooseForm" ref="chooseFormRef" :rules="chooseFormRules">
        <el-form-item label="测试名称" prop="testid">
            <el-select style="width: 100%" suffix-icon="Folder" v-model="chooseForm.testid" placeholder="请选择测试名称···">
                <el-option
                        v-for="item in store.state.teacherStore.tests"
                        :key="item.test_id"
                        :label="item.test_name"
                        :value="item.test_id"
                />
            </el-select>
        </el-form-item>
        <el-form-item label="选项内容" prop="opcontain">
            <el-input prefix-icon="Edit" v-model="chooseForm.opcontain" placeholder="请输入选项内容···"/>
        </el-form-item>
        <div style="display: flex;justify-content: space-between">
            <el-form-item style="width: 50%;margin-right: 8px" label="选项答案" prop="opanswer">
                <el-input prefix-icon="Opportunity" v-model="chooseForm.opanswer" placeholder="请输入选项答案···"/>
            </el-form-item>
            <el-form-item label="选项分值" prop="opkey">
                <el-input prefix-icon="Coin" v-model="chooseForm.opkey" placeholder="请输入选项分值···"/>
            </el-form-item>
        </div>
        <el-form-item label="选项A" prop="optiona">
            <el-input v-model="chooseForm.optiona" placeholder="请输入选项A···"/>
        </el-form-item>
        <el-form-item label="选项B" prop="optionb">
            <el-input v-model="chooseForm.optionb" placeholder="请输入选项B···"/>
        </el-form-item>
        <el-form-item label="选项C" prop="optionc">
            <el-input v-model="chooseForm.optionc" placeholder="请输入选项C···"/>
        </el-form-item>
        <el-form-item label="选项D" prop="optiond">
            <el-input v-model="chooseForm.optiond" placeholder="请输入选项D···"/>
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
const { t } = useI18n();
const store = useStore();
const chooseFormRef = ref(null);
const chooseForm = reactive({
    opcontain:"",
    opanswer:"",
    opkey:"",
    optiona:"",
    optionb:"",
    optionc:"",
    optiond:"",
    testid:""
})
const chooseFormRules = reactive({
    opcontain: [{ required: true, message: "请输入选项内容", trigger: "blur" }],
    opanswer: [{ required: true, message: "请输入选项答案", trigger: "blur" }],
    opkey: [{ required: true, message: "请输入分值", trigger: "blur" }],
    optiona: [{ required: true, message: "请输入答案A", trigger: "blur" }],
    optionb: [{ required: true, message: "请输入答案B", trigger: "blur" }],
    optionc: [{ required: true, message: "请输入答案C", trigger: "blur" }],
    optiond: [{ required: true, message: "请输入答案D", trigger: "blur" }],
    testid: [{ required: true, message: "请选择测试名称", trigger: ["blur",'change']}]
});

async function postAssessConfirm() {
    console.log(toRaw(chooseForm));
    await chooseFormRef.value.validate(async (valid, fields) => {
        if (valid) {
            await store.dispatch("handlePostChoose", toRaw(chooseForm)).then((res) => {
                if (res) {
                    useNotification('success', '系统通知', "选择题发布成功！");
                    store.state.teacherStore.addChoose = false;
                } else {
                    useNotification('success', '系统通知', "选择题发布失败！");
                }
            })
        } else {
            console.log(fields);
        }
    });
}
function postAssessCancel(){
    store.state.teacherStore.addChoose = false;
    useNotification('error','系统通知',t("editCancel"));
}
onMounted(async () => {
    store.state.teacherStore.tests = await store.dispatch("handleQueryTestByTeacher", toRaw({teachid:store.state.teacherStore.teacher.teach_id}));
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
