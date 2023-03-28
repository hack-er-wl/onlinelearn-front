<template>
    <QuestionChoice v-for="(n,i) in data.test.value.test_chooses" :key="i" :option="n" :index="i"/>
    <QuestionJudge v-for="(n,i) in data.test.value.test_options" :key="i" :option="n" :index="i"/>
</template>
<script setup>
import QuestionChoice from "./QuestionChoice.vue";
import QuestionJudge from "./QuestionJudge.vue";
import {defineProps, toRefs} from "vue";
const props = defineProps({
  test:Object
})
const data = toRefs(props);
</script>