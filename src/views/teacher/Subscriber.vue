<template>
    <el-container class="container">
        <!--头部区域-->
        <el-header>
            <Header/>
        </el-header>
        <!--内容区域-->
        <el-scrollbar>
            <el-main class="test_main" id="el-main">
                <SubscriberCard style="cursor: pointer" v-if="store.state.teacherStore.subscribers.length != 0" v-for="(n,i) in store.state.teacherStore.subscribers" :key="i" :user="n"/>
                <el-empty v-else description="空空如也~"><el-button type="primary" @click="handleClick">返回</el-button></el-empty>
            </el-main>
            <!--底部区域-->
            <el-footer>
                <Footer/>
            </el-footer>
        </el-scrollbar>
    </el-container>
</template>
<script setup>
import Header from "../../components/user/common/Header.vue";
import Footer from "../../components/user/common/Footer.vue";
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import SubscriberCard from "@/components/teacher/subscriber/SubscriberCard.vue";
const store = useStore();
const route = useRoute();
const router = useRouter();
const course_id = route.query.key;
onMounted(async () => {
    store.state.teacherStore.subscribers = [];
    await store.dispatch("handleQuerySubscriber", toRaw({courseid: course_id})).then((subscribers) => {
        store.state.teacherStore.subscribers = subscribers;
    })
})
const handleClick = ()=>{
    router.go(-1);
}
</script>
<style lang="scss" scoped>
.container {
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
  .test_main{
    --el-main-padding: 8px !important;
    background-color: rgb(242,242,245);
    height: 100vh;
  }
  .el-main {
    width: 100%;
    padding:0;
  }
  .el-footer{
    --el-footer-padding:0;
  }
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