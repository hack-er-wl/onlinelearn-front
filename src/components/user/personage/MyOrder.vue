<template>
  <el-card class="person_box_card" shadow="hover">
    <template #header>
      <div class="person_card_header">
        <h4><i style="color: red" class="bi bi-cart-check"/> 我的订单</h4>
      </div>
    </template>
    <div style="display: flex;height: 100%;flex-wrap: wrap">
      <OrderCard v-for="(n,i) in store.state.layoutStore.myOrder" :key="i" :order="n"/>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </el-card>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import OrderCard from "@/components/user/personage/OrderCard.vue";
import {getUser} from "@/api/user";
const store = useStore();
onMounted(async () => {
    store.state.layoutStore.recCourses = [];
    await store.dispatch("handleQueryMyOrder", toRaw({userid:getUser().user_id})).then((res) => {
        console.log(res);
        store.state.layoutStore.myOrder = res;
    })
})
</script>

<style scoped>
.pagination{
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>