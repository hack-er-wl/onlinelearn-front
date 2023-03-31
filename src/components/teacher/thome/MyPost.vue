<template>
  <el-card>
    <template #header>
      <div class="person_card_header">
        <h4><i style="color:#11cef8" class="bi bi-cloud-arrow-up-fill"/> 我发布的课程</h4>
      </div>
    </template>
    <div style="display: flex;height: 100%;flex-wrap: wrap">
      <el-empty v-if="store.state.teacherStore.postCourses.checked == 0" :image-size="200" />
      <MyPostCard v-else v-for="(n,i) in store.state.teacherStore.postCourses.checked" :key="i" :course="n" :isFirst="(i+1) <= 4 ? true : false" :isLast="(i+1) % 4 == 0 ? true : false" @click="handleClick(n.course_id)"/>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </el-card>
</template>

<script setup>
import MyPostCard from "@/components/teacher/thome/MyPostCard.vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
const store = useStore();
const router = useRouter();
const handleClick = (course_id)=>{
    router.push({path:'/subscriber',query: {key: course_id}})
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