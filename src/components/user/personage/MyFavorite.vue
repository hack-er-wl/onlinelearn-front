<template>
  <el-card class="person_box_card" shadow="hover">
    <template #header>
      <div class="person_card_header">
        <h4><i style="color: red" class="bi bi-star-half"/> 我的收藏</h4>
      </div>
    </template>
    <div style="display: flex;height: 100%;flex-wrap: wrap">
      <FavoriteCard v-for="(n,i) in store.state.layoutStore.myCollect"
                    :key="i"
                    :isLast="i==3?true:false"
                    :course="n"
                    @click="router.push('/course')"
                    style="cursor: pointer"/>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </el-card>
</template>

<script setup>
import FavoriteCard from "./FavoriteCard.vue";
import router from "../../../router";
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import {getUser} from "@/api/user";
const store = useStore();
onMounted(async () => {
  store.state.layoutStore.recCourses = [];
  await store.dispatch("handleQueryMyCollect", toRaw({userid:getUser().user_id})).then((res) => {
    console.log(res);
    store.state.layoutStore.myCollect = res;
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