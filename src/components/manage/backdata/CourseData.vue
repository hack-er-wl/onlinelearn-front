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
    <CourseEchartCard/>
  </div>
</template>

<script setup>
import DataCard from "./DataCard.vue";
import CourseEchartCard from "./CourseEchartCard.vue";
import {onMounted, reactive, toRaw} from "vue";
import {useStore} from "vuex";
const store = useStore();
onMounted(async () => {
    store.state.managerStore.courses = [];
    await store.dispatch("handleQueryCourseAll", toRaw({})).then((courses) => {
      store.state.managerStore.courses = courses;
    })
    store.state.managerStore.fields = [];
    await store.dispatch("handlequeryFields", toRaw({})).then((fields) => {
      store.state.managerStore.fields = fields;
    })
    store.state.managerStore.classes = [];
    await store.dispatch("handleQueryClassAll", toRaw({})).then((classes) => {
      store.state.managerStore.classes = classes;
    })
    store.state.managerStore.tests = [];
    await store.dispatch("handleQueryTestAll", toRaw({})).then((tests) => {
        store.state.managerStore.tests = tests;
    })
})
const data = reactive([{
    title:"所有课程",
    value:store.state.managerStore.courses.length,
    content:"所有课程数量",
    foot:"比昨天增加",
    num:24,
    color:"rgb(238,102,102)",
    margin:"0"
},
    {
        title:"所有领域",
        value:store.state.managerStore.fields.length,
        content:"所有课程领域数量",
        foot:"比昨天增加",
        num:10,
        color:"rgb(250,200,88)",
        margin:"0 0 2% 2%"
    },{
        title:"所有分类",
        value:store.state.managerStore.classes.length,
        content:"所有课程分类数量",
        foot:"比昨天增加",
        num:20,
        color:"rgb(145,204,117)",
        margin:"0 0 2% 2%"
    },{
        title:"所有测试",
        value:store.state.managerStore.tests.length,
        content:"所有测试数量",
        foot:"比昨天增加",
        num:5,
        color: "rgb(84,112,198)",
        margin:"0 0 2% 2%"
    }])
</script>

<style scoped>
.data{
    height: 201vh;
}
</style>