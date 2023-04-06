<template>
  <el-card>
    <template #header>
      <div class="person_card_header">
        <h4><i style="color:gray" class="bi bi-person-fill-gear"/> 测试操作</h4>
      </div>
    </template>
    <div class="operate">
      <el-button type="primary" plain round @click="store.state.teacherStore.addTeHide = true">发布测试</el-button>
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