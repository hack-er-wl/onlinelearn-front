<template>
  <el-card class="question_box_card">
    <template #header>
      <div class="card-header">
        <h6><el-tag class="ml-2" type="warning">判断</el-tag>{{data.index.value+1}}.{{data.option.value.option_contain}}</h6>
        <p style="color: gray;font-size: small">{{'本题'+data.option.value.option_key+'分'}}</p>
      </div>
    </template>
      <el-radio-group v-model="radio" @change="handle()" class="answer_group">
        <el-radio label="true" size="small">A.对</el-radio>
        <el-radio label="false" size="small">B.错</el-radio>
      </el-radio-group>
  </el-card>
</template>
<script setup>
import {ref,toRefs} from "vue";
import {useStore} from "vuex";
const props = defineProps({
  index:Number,
  option:Object
})
const store = useStore();
const data = toRefs(props)
const radio = ref('');
let myDone = false;
const handle = ()=>{
  if(!myDone) {
    store.state.userStore.done++;
    data.option.value.option_answer == radio.value ? store.state.userStore.score+=parseInt(data.option.value.option_key):store.state.userStore.score;
    myDone = true;
  }
  console.log(radio.value);
  console.log(store.state.userStore.score);
  console.log(store.state.userStore.done);
}
</script>
<style lang="scss" scoped>
.question_box_card {
  width: 99.6%;
  margin:0 0 4% 0;
  .card-header{
    display: flex;
    justify-content: space-between;
  }
}
.answer_group{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>