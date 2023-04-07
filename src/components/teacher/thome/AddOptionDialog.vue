<template>
    <el-dialog title="发布判断题">
        <el-form :model="optionForm" ref="optionFormRef" :rules="optionFormRules">
            <el-form-item label="测试名称" prop="testid">
                <el-select style="width: 100%" suffix-icon="Folder" v-model="optionForm.testid" placeholder="请选择测试名称···">
                    <el-option
                            v-for="item in store.state.teacherStore.tests"
                            :key="item.test_id"
                            :label="item.test_name"
                            :value="item.test_id"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="选项内容" prop="opcontain">
                <el-input prefix-icon="Edit" v-model="optionForm.opcontain" placeholder="请输入选项内容···"/>
            </el-form-item>
            <div style="display: flex;justify-content: space-between">
                <el-form-item style="width: 50%;margin-right: 8px" label="选项答案" prop="opanswer">
                    <el-input prefix-icon="Opportunity" v-model="optionForm.opanswer" placeholder="请输入选项答案···"/>
                </el-form-item>
                <el-form-item label="选项分值" prop="opkey">
                    <el-input prefix-icon="Coin" v-model="optionForm.opkey" placeholder="请输入选项分值···"/>
                </el-form-item>
            </div>
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
const optionFormRef = ref(null);
const optionForm = reactive({
    opcontain:"",
    opanswer:"",
    opkey:"",
    testid:""
})
const optionFormRules = reactive({
    opcontain: [{ required: true, message: "请输入选项内容", trigger: "blur" }],
    opanswer: [{ required: true, message: "请输入选项答案", trigger: "blur" }],
    opkey: [{ required: true, message: "请输入分值", trigger: "blur" }],
    testid: [{ required: true, message: "请选择测试名称", trigger: ["blur",'change']}]
});

async function postAssessConfirm() {
    console.log(toRaw(optionForm));
    await optionFormRef.value.validate(async (valid, fields) => {
        if (valid) {
            await store.dispatch("handlePostOption", toRaw(optionForm)).then((res) => {
                if (res) {
                    useNotification('success', '系统通知', "判断题发布成功！");
                    store.state.teacherStore.addOption = false;
                } else {
                    useNotification('success', '系统通知', "判断题发布失败！");
                }
            })
        } else {
            console.log(fields);
        }
    });
}
function postAssessCancel(){
    store.state.teacherStore.addOption = false;
    useNotification('error','系统通知',t("editCancel"));
}
onMounted(async () => {
    store.state.teacherStore.tests.length == 0 ? store.state.teacherStore.tests.length = await store.dispatch("handleQueryTestByTeacher", toRaw({teachid:store.state.teacherStore.teacher.teach_id})):store.state.teacherStore.tests;
})
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
