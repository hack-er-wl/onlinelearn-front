<template>
  <el-card class="answer_box_card">
    <template #header>
      <div class="card-header">
        <h5><i style="color: gray" class="bi bi-search-heart-fill"/> 单选题</h5>
      </div>
    </template>
    <el-button size="large" style="margin:4px" v-for="(n,i) in data.test.value.test_chooses" :key="i" circle >{{i+1}}</el-button>
  </el-card>
  <el-card class="answer_box_card">
    <template #header>
      <div class="card-header">
        <h5><i style="color: gray" class="bi bi-check-circle-fill"/> 判断题</h5>
      </div>
    </template>
    <el-button size="large" style="margin:4px" v-for="(n,i) in data.test.value.test_options" :key="i" circle >{{i+1}}</el-button>
  </el-card>
</template>
<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({
  test:Object
})
const data = toRefs(props);
</script>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.answer_box_card {
  width: 99%;
  margin-bottom: 6%;
}
</style>
