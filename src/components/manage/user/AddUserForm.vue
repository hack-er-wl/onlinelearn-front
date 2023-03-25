<template>
  <el-card class="table-card">
    <el-form :model="formAddUser" style="display: flex;justify-content: space-between">
      <el-form-item label="用户名称" style="margin-top: 10px">
        <el-input v-model="formAddUser.username" placeholder="请输入用户名称···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加用户</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
const emit = defineEmits(['submit']);
const formAddUser = reactive({
  username: "",
})
const onSubmit = () => {
  emit('submit',formAddUser);
}
</script>

<style lang="scss" scoped>
.table-card{
  margin: 10px;
}
</style>