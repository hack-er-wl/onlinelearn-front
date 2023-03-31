<template>
    <div className="data">
        <TestTable/>
    </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import TestTable from "./TestTable.vue";

const store = useStore();
onMounted(async () => {
    store.state.managerStore.tests = [];
    await store.dispatch("handleQueryTestAll", toRaw({})).then((tests) => {
        store.state.managerStore.tests = tests;
    })
})
</script>

<style lang="scss" scoped>
.data {
    height: 128.5vh;
}
</style>