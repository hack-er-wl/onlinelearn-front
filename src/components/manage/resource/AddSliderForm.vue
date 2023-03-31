<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddSlider" style="display: flex;justify-content: space-between">
      <el-form-item label="图片地址" style="margin-top: 10px">
        <el-input v-model="formAddSlider.sliderurl" placeholder="请输入url···"/>
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
const formAddSlider = reactive({
  sliderurl: "",
})
const onSubmit = () => {
  emit('submit',formAddSlider);
}
</script>