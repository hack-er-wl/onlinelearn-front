<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddSlider" style="display: flex">
      <el-form-item label="上传轮播图">
          <UploadImgCard :type="'slider'"/>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
import UploadImgCard from "@/components/manage/resource/UploadImgCard.vue";
const formAddSlider = reactive({
  sliderurl: "",
})
</script>
<style scoped lang="css">
.el-form-item{
    margin-bottom: 0;
}
</style>