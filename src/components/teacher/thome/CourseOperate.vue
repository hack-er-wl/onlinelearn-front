<template>
  <el-card>
    <template #header>
      <div class="person_card_header">
        <h4><i style="color:gray" class="bi bi-gear-fill"/> 课程操作</h4>
      </div>
    </template>
    <div class="operate">
      <el-button type="primary" plain round @click="store.state.teacherStore.addCouHide = true">发布课程</el-button>
      <el-button type="primary" plain round style="margin-top: 8px"  @click="store.state.teacherStore.addChapHide = true">发布章节</el-button>
      <el-button type="primary" plain round style="margin-top: 8px"  @click="store.state.teacherStore.addBarHide = true">发布小节</el-button>
    </div>
  </el-card>
</template>

<script setup>
import {useStore} from "vuex";
const store = useStore();
</script>

<style scoped>
.operate{
  display: flex;
  flex-direction: column;
}
 .el-button+.el-button {
   margin-left: 0px;
 }
</style>