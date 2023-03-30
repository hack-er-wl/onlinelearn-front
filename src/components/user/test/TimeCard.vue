<template>
  <el-card style="padding: 0 !important">
    <template #header>
      <div class="card-header">
        <h4><i class="bi bi-alarm"/> 剩余时间</h4>
      </div>
    </template>
    <div style="display:flex;justify-content: space-between">
      <p style="font-size: 15px;padding-top: 7px">距离考试结束还有</p>
      <p style="padding-left:5px;font-size: 25px;color: rgb(64,158,255)">{{parseInt(store.state.userStore.time / 3600000) + ':' +
        parseInt((store.state.userStore.time % 3600000) / 60000) + ':' +
        parseInt(((store.state.userStore.time % 3600000) % 60000) / 1000)}}
      </p>
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
setInterval(()=>{
  store.state.userStore.time -= 1000;
},1000);
</script>
