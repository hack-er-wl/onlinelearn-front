<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddClass" ref="formAddClassRef" :rules="formAddClassRules" style="display: flex;justify-content: space-between">
      <el-form-item label="分类名称" prop="classname" style="margin-top: 10px">
        <el-input v-model="formAddClass.classname" placeholder="请输入分类···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加分类</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive, ref} from "vue";
const formAddClassRef = ref(null);
const emit = defineEmits(['submit']);
const formAddClass = reactive({
    classname: "",
})
const formAddClassRules = reactive({
    classname: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
});
const onSubmit = async () => {
    await formAddClassRef.value.validate(async (valid, fields) => {
        if (valid) {
            emit('submit', formAddClass);
        } else {
            console.log(fields)
        }
    })
}
</script>