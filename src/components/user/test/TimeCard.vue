<template>
  <el-card style="padding: 0 !important">
    <template #header>
      <div class="card-header">
        <h4><i class="bi bi-alarm"/> 剩余时间</h4>
      </div>
    </template>
    <div style="display:flex;justify-content: space-between">
      <p style="font-size: 15px;padding-top: 7px">距离考试结束还有</p>
      <p style="padding-left:5px;font-size: 25px;color: rgb(64,158,255)">{{data.test.value.use_time < 60 ? '00:'+data.test.value.use_time+':00':'00:'+data.test.value.use_time+':00'}}</p>
    </div>
  </el-card>
</template>
<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({
  test:Object
})
const data = toRefs(props);
</script>
