<template>
  <el-card class="table-card" style="margin-bottom: 2%">
    <el-form :model="formAddAvatar" style="display: flex">
      <el-form-item label="上传头像">
          <UploadImgCard :type="'avatar'"/>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
import UploadImgCard from "@/components/manage/resource/UploadImgCard.vue";
const formAddAvatar = reactive({
  avatarurl: "",
})
</script>
<style scoped lang="css">
.el-form-item{
    margin-bottom: 0;
}
</style>