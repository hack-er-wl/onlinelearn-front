<template>
  <MessageCard v-for="(n,i) in store.state.layoutStore.notices" :key="i" :notice="n"/>
</template>
<script setup>
import MessageCard from "./NoticeCard.vue";
import {useStore} from "vuex";
const store = useStore();
</script>
<style scoped>
</style>