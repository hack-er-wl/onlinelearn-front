<template>
    <el-container class="container">
      <!--头部区域-->
      <el-header>
        <Header/>
      </el-header>
      <!--内容区域-->
      <el-scrollbar>
        <el-main class="course_main" id="el-main">
          <el-container style="margin:2%">
            <el-aside width="70%" >
              <Videoplayer :video-url="store.state.layoutStore.videoUrl"/>
            </el-aside>
            <el-main style="margin: 0 0 0 2%">
              <Chapters :course="course"/>
            </el-main>
          </el-container>
          <div style="display: flex;margin: 2%">
            <Summary style="margin-right: 2%"/>
            <Author/>
          </div>
          <div style="margin: 2%">
            <AssessCard/>
          </div>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-scrollbar>
    </el-container>
  <AssessDialog v-model="store.state.layoutStore.Hide"/>
  <ReplyDialog v-model="store.state.layoutStore.isHide"/>
  <el-backtop :visibility-height="100" target=".container .el-scrollbar__wrap" :right="30" :bottom="30" />
</template>
<script setup>
import Header from "../../components/user/common/Header.vue";
import Videoplayer from "../../components/user/course/VideoPlayer.vue";
import Chapters from "../../components/user/course/Chapters.vue";
import Author from "../../components/user/course/Author.vue";
import Summary from "../../components/user/course/Summary.vue";
import AssessCard from "../../components/user/course/AssessCard.vue";
import AssessDialog from "../../components/user/course/AssessDialog.vue";
import ReplyDialog from "../../components/user/course/ReplyDialog.vue";
import {useStore} from "vuex";
import Footer from "../../components/user/common/Footer.vue";
import {onMounted, toRaw} from "vue";
import {getUser} from "@/api/user";
import {useRoute} from "vue-router";
import qs from "qs";
const store = useStore();
const route = useRoute();
const course = qs.parse(route.query.key);
onMounted(async () => {
  store.state.layoutStore.course = course;
  await store.dispatch("handleQueryTeacherByCourse", toRaw({courseid: course.course_id})).then((res) => {
    store.state.layoutStore.teacher = res;
  })
  await store.dispatch("handleQueryCollect", toRaw({userid: getUser().user_id, courseid: course.course_id})).then((res) => {
    if (res)
      store.state.Like = true
    else
      store.state.Like = false
  })
  await store.dispatch("handleQuerySubscribeCourse", toRaw({userid: getUser().user_id, courseid: course.course_id})).then((res) => {
    if (res)
      store.state.userStore.Subscribe = true;
    else
      store.state.userStore.Subscribe = false;
  })
  store.state.layoutStore.assesses = [];
  await store.dispatch("handleQueryAssess", toRaw({courseid: course.course_id})).then(async (assesses) => {
    store.state.layoutStore.assesses = assesses;
  })
  store.state.layoutStore.chapters = [];
  await store.dispatch("handleQueryChapter", toRaw({courseid: course.course_id})).then((chapters) => {
    store.state.layoutStore.chapters = chapters.sort((a, b) => {return a.chapter_order - b.chapter_order});
  })
})
</script>
<style lang="scss" scoped>
.container{
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
  }

  .el-main {
    width: 100%;
    padding: 0;
  }
  .el-footer{
    --el-footer-padding:0;
  }
}
.course_main{
  background-color: rgb(242,242,245);
}
.el-header {
   --el-header-padding: 0 px;
   --el-header-height:0 px;
  padding: var(--el-header-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
}
</style>