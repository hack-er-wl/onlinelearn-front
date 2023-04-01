<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddAvatar" style="display: flex;justify-content: space-between">
      <el-form-item label="图片地址" style="margin-top: 10px">
        <el-input v-model="formAddAvatar.avatarurl" placeholder="请输入url···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加头像</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
const emit = defineEmits(['submit']);
const formAddAvatar = reactive({
  avatarurl: "",
})
const onSubmit = () => {
  emit('submit',formAddAvatar);
}
</script>