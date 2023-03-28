<template>
  <NoticeCard v-for="(n,i) in store.state.layoutStore.notices.no_accept" :key="i" :isNew="true" :notice="n"/>
  <NoticeCard v-for="(n,i) in store.state.layoutStore.notices.accept" :key="i" :isNew="false" :notice="n"/>
</template>
<script setup>
import NoticeCard from "./NoticeCard.vue";
import {useStore} from "vuex";
const store = useStore();
</script>
<style scoped>
</style>