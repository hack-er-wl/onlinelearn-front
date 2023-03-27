<template>
  <el-card>
    <template #header>
      <div class="person_card_header">
        <h4><i style="color:#11cef8" class="bi bi-cloud-arrow-up-fill"/> 我发布的课程</h4>
      </div>
    </template>
    <div style="display: flex;height: 100%;flex-wrap: wrap">
      <MyPostCard v-for="(n,i) in store.state.teacherStore.postCourses" :key="i" :course="n" :isLast="i==3?true:false"/>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </el-card>
</template>

<script setup>
import MyPostCard from "@/components/teacher/thome/MyPostCard.vue";
import {useStore} from "vuex";
const store = useStore();
</script>

<style scoped>
.pagination{
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>