<template>
  <el-container class="container">
    <!--头部区域-->
    <el-header>
      <Header/>
    </el-header>
    <!--内容区域-->
    <el-scrollbar>
      <el-main id="el-main" style="background-color: rgb(242,242,245)">
        <div style="margin: 2%;width: 25%">
          <NoticeLeft/>
        </div>
        <div style="margin: 2% 2% 2% 0;width: 75%">
          <NoticeShow/>
        </div>
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
import NoticeLeft from "../../components/user/notice/NoticeLeft.vue";
import NoticeShow from "../../components/user/notice/NoticeShow.vue";
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import {getUser} from "@/api/user";
const store = useStore();
onMounted(async () => {
  store.state.layoutStore.isDot = false;
  for(let i in store.state.layoutStore.notices.no_accept){
    await store.dispatch("handleSetAccept", toRaw({noticeid: store.state.layoutStore.notices.no_accept[i].notice_id,userid:getUser().user_id}));
  }
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
  .el-main {
    width: 100%;
    padding:0;
    display: flex;
    --el-main-padding: 0;
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