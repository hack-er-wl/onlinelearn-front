<template>
  <el-card class="table-card">
    <el-form :model="formAddCourse" style="display: flex;justify-content: space-between">
      <el-form-item label="课程名称" style="margin-top: 10px">
        <el-input v-model="formAddCourse.fieldname" placeholder="请输入课程···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加课程</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
const emit = defineEmits(['submit']);
const formAddCourse = reactive({
  coursename: "",
})
const onSubmit = () => {
  emit('submit',formAddCourse);
}
</script>

<style lang="scss" scoped>
.table-card{
  margin: 10px;
}
</style>