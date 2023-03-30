<template>
  <LearnCenter :hidden="store.state.layoutStore.show[0]"/>
  <MyCourse :hidden="store.state.layoutStore.show[1]"/>
  <MyFavorite :hidden="store.state.layoutStore.show[2]"/>
  <MyOrder :hidden="store.state.layoutStore.show[3]"/>
</template>
<script setup>
import LearnCenter from "./LearnCenter.vue";
import MyCourse from "./MyCourse.vue";
import MyFavorite from "./MyFavorite.vue";
import {useStore} from "vuex";
import MyOrder from "@/components/user/personage/MyOrder.vue";
const store = useStore();
</script>
