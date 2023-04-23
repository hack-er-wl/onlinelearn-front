<template>
  <el-card class="person_box_card" shadow="hover">
    <template #header>
      <div class="person_card_header">
        <h4><i style="color: red" class="bi bi-star-half"/> 我的收藏</h4>
      </div>
    </template>
      <div v-if="store.state.layoutStore.myCollect.length == 0" style="display: flex;align-items: center;justify-content: center">
          <el-empty :image-size="200"/>
      </div>
    <div v-else style="display: flex;height: 100%;flex-wrap: wrap">
      <FavoriteCard v-for="(n,i) in store.state.layoutStore.myCollect"
                    :key="i"
                    :isLast="(i+1) % 4 == 0 ? true:false"
                    :isFirst="(i+1) <= 4 ? true : false"
                    :course="n"
                    @click="handleClick(n)"
                    style="cursor: pointer"/>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </el-card>
</template>

<script setup>
import FavoriteCard from "./FavoriteCard.vue";
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import {getUser} from "@/api/user";
import qs from "qs";
import {useRouter} from "vue-router";
const store = useStore();
const router = useRouter();
onMounted(async () => {
  store.state.layoutStore.recCourses = [];
  await store.dispatch("handleQueryMyCollect", toRaw({userid:getUser().user_id})).then((res) => {
    console.log(res);
    store.state.layoutStore.myCollect = res;
  })
})
const handleClick = (course)=>{
    console.log(course);
    store.state.layoutStore.assesses = [];
    router.push({path: '/course', query: {key: qs.stringify(course)}})
}
</script>

<style scoped>
.pagination{
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>