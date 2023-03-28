<template>
  <el-card class="test_box_card" shadow="hover">
    <template #header>
      <div class="card-header">
        <h6><i class="bi bi-gear-wide-connected" style="color: rgb(91,192,248)"/> {{data.test.value.test_id}}</h6>
        <p style="font-size: 5px;color: gray">{{data.test.value.test_time}}</p>
      </div>
    </template>
    {{data.test.value.use_time}}
  </el-card>
</template>
<script setup>
import {toRefs} from "vue";
import {defineProps} from "vue"
const props = defineProps({
  test:Object
})
const data = toRefs(props)

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
