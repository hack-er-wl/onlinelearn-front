<template>
  <el-card class="person_box_card" shadow="hover">
    <template #header>
      <div class="person_card_header">
        <h4><i style="color: red" class="bi bi-journal-bookmark-fill"/> 我的课程</h4>
      </div>
    </template>
    <div style="display: flex;flex-direction: column;align-items: center">
      <CourseCard v-for="(n,i) in store.state.layoutStore.subCourse" :key="i" :isLast="i==3?true:false" :course="n"/>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </el-card>
</template>

<script setup>
import CourseCard from "./CourseCard.vue"
import {useStore} from "vuex";
import {onMounted, toRaw} from "vue";
import {getUser} from "@/api/user";
const store = useStore();
onMounted(async () => {
    store.state.layoutStore.subCourse = [];
    await store.dispatch("handleQueryMySubCourse", toRaw({userid:getUser().user_id})).then((res) => {
        console.log(res);
        store.state.layoutStore.subCourse = res;
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