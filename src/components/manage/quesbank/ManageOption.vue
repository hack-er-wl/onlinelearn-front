<template>
    <div className="data">
        <OptionTable/>
    </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import OptionTable from "@/components/manage/quesbank/OptionTable.vue";

const store = useStore();
onMounted(async () => {
    store.state.managerStore.options = [];
    await store.dispatch("handleQueryOptionAll", toRaw({})).then((options) => {
        store.state.managerStore.options = options;
    })
})
</script>

<style lang="scss" scoped>
.data {
  height: 100vh;
}
</style>