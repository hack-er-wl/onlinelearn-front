<template>
  <el-card style="padding: 0 !important;margin-top: 6%">
    <template #header>
      <div class="card-header">
        <h4><i class="bi bi-pie-chart"/> 当前进度</h4>
      </div>
    </template>
    <div style="display:flex;justify-content: space-between">
      <p style="font-size: 15px">你已完成</p>
      <el-progress style="padding-left: 5px;width: 70%" :percentage="parseInt((store.state.userStore.done/data.test.value.ques_num)*100)" :format="format"/>
    </div>
  </el-card>
</template>
<script setup>
import {defineProps, toRefs} from "vue";
import {useStore} from "vuex";
const props = defineProps({
  test:Object
})
const data = toRefs(props);
const store = useStore();
const format = (percentage) => (`${percentage}%`)
</script>
