<template>
  <el-container class="container">
    <!--头部区域-->
    <el-header>
      <Header/>
    </el-header>
    <!--内容区域-->
    <el-scrollbar>
      <el-main class="test_main" id="el-main">
        <div style="display: flex;justify-content: space-between">
          <p style="margin:2% 2% 0 2.8%;color: gray">排名 / 昵称</p>
          <p style="margin:2% 2% 0 0;color: gray">用时</p>
          <p style="margin:2% 3.5% 0 0;color: gray">分数</p>
        </div>
        <RankCard style="cursor: pointer" v-for="(n,i) in user" :key="i" :index="i+1" :user="n"/>
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
import {onMounted} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import RankCard from "@/components/user/rank/RankCard.vue";
const store = useStore();
const route = useRoute();
const router = useRouter();
const user = [{user_name:'admin',score:80,use_time:'15'},{user_name:'root',score:85,use_time:'16'}].sort((a,b)=>{return b.score-a.score});
onMounted(async () => {

})
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