<template>
  <el-container class="common-layout">
    <!-- 头部区域 -->
    <el-header>
      <Header />
    </el-header>
    <!-- 滚动条 -->
    <el-scrollbar>
      <!-- 内容区域-->
      <el-main id="el-main" style="background-color: rgb(242,242,245)">
        <ResultShow style="margin: 2%;height: 100vh"/>
        <el-pagination class="pagination" layout="prev, pager, next" :total="50" />
      </el-main>
      <!-- 底部区域 -->
      <el-footer>
        <Footer/>
      </el-footer>
    </el-scrollbar>
  </el-container>
</template>

<script setup>
import Header from "../../components/user/common/Header.vue";
import Footer from "../../components/user/common/Footer.vue";
import ResultShow from "../../components/user/result/ResultShow.vue";
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
    padding:0;
  }
  .el-footer{
    --el-footer-padding:0;
  }
  .pagination{
    margin-bottom: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
