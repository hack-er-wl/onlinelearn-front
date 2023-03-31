<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddTeacher" style="display: flex;justify-content: space-between">
      <el-form-item label="讲师名称" style="margin-top: 10px">
        <el-input v-model="formAddTeacher.teachername" placeholder="请输入讲师名称···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加讲师</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
const emit = defineEmits(['submit']);
const formAddTeacher = reactive({
  teachername: "",
})
const onSubmit = () => {
  emit('submit',formAddTeacher);
}
</script>