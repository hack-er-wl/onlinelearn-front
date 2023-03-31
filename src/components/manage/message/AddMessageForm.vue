<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddMessage" style="display: flex;justify-content: space-between">
      <el-form-item label="通知内容" style="margin-top: 10px">
        <el-input v-model="formAddMessage.content" placeholder="请输入通知内容···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">发布通知</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
const emit = defineEmits(['submit']);
const formAddMessage = reactive({
  content: "",
})
const onSubmit = () => {
  emit('submit',formAddMessage);
}
</script>