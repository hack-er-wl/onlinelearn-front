<template>
  <el-card class="test_box_card">
    <template #header>
      <div class="card-header">
        <h6><i class="bi bi-pencil" style="color: gray"/> {{data.test.value.test_id}}</h6>
        <p style="font-size: 5px;color: gray">{{data.test.value.test_time}}</p>
      </div>
    </template>
    <div style="display: flex;justify-content: space-between">
      <div>{{data.test.value.use_time}}分钟</div>
      <div><el-button :type="done?'primary':'warning'" size="small" @click="handleClick(data.test.value,done)">{{done?'查看排名':'参加考试'}}</el-button></div>
    </div>
  </el-card>
</template>
<script setup>
import {toRefs} from "vue";
import {defineProps} from "vue"
import qs from "qs";
import {useRouter} from "vue-router";
const router = useRouter();
const done = true;
const props = defineProps({
  test:Object
})
const data = toRefs(props)
const handleClick = (test,done) => {
  if(!done)
    router.push({path:'/test',query: {key: qs.stringify(test)}})
  else
    router.push({path:'/rank',query: {key: test.test_id}})
}
</script>
<style lang="scss" scoped>

.test_box_card {
  width: 95.6%;
  margin:2%;
  .card-header{
    display: flex;
    justify-content: space-between;
  }
}
</style>
