<template>
    <div className="data">
        <OrderTable/>
    </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import OrderTable from "@/components/manage/order/OrderTable.vue";

const store = useStore();
onMounted(async () => {
    store.state.managerStore.orders = [];
    await store.dispatch("handleQueryOrderAll", toRaw({})).then((orders) => {
        store.state.managerStore.orders = orders;
    })
})
</script>

<style lang="scss" scoped>
.data {
    height: 100vh;
}
</style>