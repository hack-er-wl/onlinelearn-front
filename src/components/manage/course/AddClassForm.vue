<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddClass" style="display: flex;justify-content: space-between">
      <el-form-item label="分类名称" style="margin-top: 10px">
        <el-input v-model="formAddClass.fieldname" placeholder="请输入分类···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加分类</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
const emit = defineEmits(['submit']);
const formAddClass = reactive({
  fieldname: "",
})
const onSubmit = () => {
  emit('submit',formAddClass);
}
</script>