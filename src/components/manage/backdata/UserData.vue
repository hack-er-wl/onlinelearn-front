<template>
  <div class="data">
    <div style="display: flex">
      <DataCard v-for="(n,i) in data" :key="i"
                :title="n.title"
                :value="n.value"
                :content="n.content"
                :foot="n.foot"
                :color="n.color"
                :num="n.num"
      :margin="n.margin"/>
    </div>
    <UserEchartCard/>
  </div>
</template>

<script setup>
import DataCard from "./DataCard.vue";
import UserEchartCard from "./UserEchartCard.vue";
import {useStore} from "vuex";
import {reactive} from "vue";
const store = useStore();
let nums = 0;
for(let i in store.state.managerStore.users){
    if(store.state.managerStore.users[i].user_role == 0){
        nums++;
    }
}
const data = reactive([{
  title:"注册用户",
  value:store.state.managerStore.users.length,
  content:"所有注册用户数量",
  foot:"比昨天增加",
  num:24,
  color:"rgb(238,102,102)",
    margin: "0"
},
  {
    title:"讲师用户",
    value:store.state.managerStore.teachers.length,
    content:"申请并成为讲师的用户数量",
    foot:"比昨天增加",
    num:10,
    color:"rgb(250,200,88)",
      margin:"0 0 2% 2%"
  },{
    title:"访问游客",
    value:10,
    content:"访问却没有注册的用户数量",
    foot:"比昨天增加",
    num:20,
    color:"rgb(145,204,117)",
        margin:"0 0 2% 2%"
  },{
    title:"管理用户",
    value:nums,
    content:"管理员用户的数量",
    foot:"比昨天增加",
    num:1,
    color: "rgb(84,112,198)",
        margin:"0 0 2% 2%"
  }])
</script>

<style scoped>
.data{
  height: 128.5vh;
}
</style>