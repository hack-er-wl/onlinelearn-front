<template>
    <div className="data">
        <ChooseTable/>
    </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import ChooseTable from "@/components/manage/quesbank/ChooseTable.vue";

const store = useStore();
onMounted(async () => {
    store.state.managerStore.chooses = [];
    await store.dispatch("handleQueryChooseAll", toRaw({})).then((chooses) => {
        store.state.managerStore.chooses = chooses;
    })
})
</script>

<style lang="scss" scoped>
.data {
  height: 128.5vh;
}
</style>