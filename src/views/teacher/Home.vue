<template>
  <el-container class="common-layout">
    <!-- 头部区域 -->
    <el-header>
      <Header />
    </el-header>
    <!-- 内容区 -->
    <el-scrollbar>
      <el-main id="el-main" style="background-color: rgb(242,242,245)">
        <TMain/>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-scrollbar>
  </el-container>
  <TeacherEditDialog v-model="store.state.teacherStore.tperHide"/>
  <AddCourseDialog v-model="store.state.teacherStore.addCouHide"/>
  <AddTestDialog v-model="store.state.teacherStore.addTeHide"/>
  <AddChapterDialog v-model="store.state.teacherStore.addChapHide"/>
  <AddBarDialog v-model="store.state.teacherStore.addBarHide"/>
  <AddChooseDialog v-model="store.state.teacherStore.addChoose"/>
  <AddOptionDialog v-model="store.state.teacherStore.addOption"/>
</template>

<script setup>
import Header from "../../components/user/common/Header.vue";
import Footer from "../../components/user/common/Footer.vue";
import TMain from "../../components/teacher/thome/TMain.vue";
import {useStore} from "vuex";
import TeacherEditDialog from "../../components/teacher/thome/TeacherEditDialog.vue";
import AddCourseDialog from "../../components/teacher/thome/AddCourseDialog.vue";
import AddTestDialog from "../../components/teacher/thome/AddTestDialog.vue";
import {onMounted, toRaw} from "vue";
import {getUser} from "@/api/user";
import AddChapterDialog from "@/components/teacher/thome/AddChapterDialog.vue";
import AddBarDialog from "@/components/teacher/thome/AddBarDialog.vue";
import AddChooseDialog from "@/components/teacher/thome/AddChooseDialog.vue";
import AddOptionDialog from "@/components/teacher/thome/AddOptionDialog.vue";
const store = useStore();
onMounted(async () => {
  store.state.teacherStore.teacher = await store.dispatch("handleCheckTeacher", toRaw({userid: getUser().user_id}));
  store.state.teacherStore.rules = await store.dispatch("handleQueryRule", toRaw({}));
  store.state.teacherStore.postCourses = await store.dispatch("handleQueryCourseTeacher", toRaw({teachid: store.state.teacherStore.teacher.teach_id}));
})
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  .el-aside {
    transition: width 0.3s ease-out;
    .logo {
      height: 60px;
      line-height: 60px;
      color: #fff;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
  .el-header {
    display: flex;
    align-items: center;
    padding: 0;
  }
  .el-main {
    width: 100%;
    padding: 0;
  }
  .el-footer{
    --el-footer-padding:0;
  }
}
</style>
