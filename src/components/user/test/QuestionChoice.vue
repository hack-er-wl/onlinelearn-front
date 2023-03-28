<template>
  <el-card class="question_box_card">
    <template #header>
      <div class="card-header">
        <h6><el-tag class="ml-2">单选</el-tag>{{data.index.value+1}}.{{data.option.value.option_contain}}()</h6>
      </div>
    </template>
      <el-radio-group v-model="radio" class="answer_group">
        <el-radio label="1" size="small">A.{{data.option.value.option_a}}</el-radio>
        <el-radio label="2" size="small">B.{{data.option.value.option_b}}</el-radio>
        <el-radio label="3" size="small">C.{{data.option.value.option_c}}</el-radio>
        <el-radio label="4" size="small">D.{{data.option.value.option_d}}</el-radio>
      </el-radio-group>
  </el-card>
</template>
<script setup>
import {ref,toRefs} from "vue";
const props = defineProps({
  index:Number,
  option:Object
})
const data = toRefs(props)
const radio = ref('');
</script>
<style scoped>
.question_box_card {
  width: 99.6%;
  margin:0 0 4% 0;
}
.answer_group{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
