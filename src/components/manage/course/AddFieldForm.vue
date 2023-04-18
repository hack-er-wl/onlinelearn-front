<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddField" ref="formAddFieldRef" :rules="formAddFieldRules" style="display: flex;justify-content: space-between">
      <el-form-item prop="fieldname" label="领域名称" style="margin-top: 10px">
        <el-input v-model="formAddField.fieldname" placeholder="请输入领域名称···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加领域</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive, ref} from "vue";
const formAddFieldRef = ref(null);
const emit = defineEmits(['submit']);
const formAddField = reactive({
  fieldname: "",
})
const formAddFieldRules = reactive({
    fieldname: [{ required: true, message: "请输入领域名称", trigger: "blur" }],
});
const onSubmit = async () => {
    await formAddFieldRef.value.validate(async (valid, fields) => {
        if(valid) {
            emit('submit', formAddField);
        }else {
            console.log(fields)
        }
    })
}
</script>
