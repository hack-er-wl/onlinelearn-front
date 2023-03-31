<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddRule" style="display: flex;justify-content: space-between">
      <el-form-item label="守则内容" style="margin-top: 10px">
        <el-input v-model="formAddRule.rolecontent" placeholder="请输入守则内容···"/>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加菜单</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
const emit = defineEmits(['submit']);
const formAddRule = reactive({
  rolecontent: "",
})
const onSubmit = () => {
  emit('submit',formAddRule);
}
</script>