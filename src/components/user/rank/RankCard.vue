<template>
  <el-card class="test_box_card">
    <div class="card-header">
      <div style="display: flex">
        <h4 :style="data.index.value == 1 ? {color: 'red'}:{color: 'yellow'}">{{data.index.value}}</h4>
        <h6 style="margin-left: 15px">{{data.user.value.user_name}}</h6>
      </div>
      <p style="font-size: 5px;color: gray">{{data.user.value.use_time}}</p>
      <p style="font-size: 5px;color: gray">{{data.user.value.score}}</p>
    </div>
  </el-card>
</template>
<script setup>
import {toRefs} from "vue";
import {defineProps} from "vue"
const props = defineProps({
  user:Object,
  index:Number
})
const data = toRefs(props)

</script>
<style lang="scss" scoped>

.test_box_card {
  width: 95.6%;
  margin:1% 2% 1% 2%;
  .card-header{
    display: flex;
    justify-content: space-between;
  }
}
</style>
