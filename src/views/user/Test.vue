<template>
  <el-container class="container">
    <!--头部区域-->
    <el-header>
      <Header/>
    </el-header>
    <!--内容区域-->
    <el-scrollbar>
      <el-main class="test_main" id="el-main">
        <el-container>
          <el-aside width="25%" style="margin: 2% 2% 0 2%">
            <AnswerCard :test="test"/>
          </el-aside>
          <el-main style="margin-top: 2%">
            <Paper :test="test"/>
            <ButtonCard @submit="handleSubmit" @cancel="handleCancel" btn-a="提交" btn-b="退出" />
          </el-main>
          <el-aside width="25%" style="margin: 2% 2% 0 2%">
            <TimeCard :test="test"/>
            <ProgressCard :test="test"/>
          </el-aside>
        </el-container>
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
import AnswerCard from "../../components/user/test/AnswerCard.vue";
import Paper from "../../components/user/test/Paper.vue";
import Footer from "../../components/user/common/Footer.vue";
import ButtonCard from "../../components/user/test/ButtonCard.vue";
import TimeCard from "@/components/user/test/TimeCard.vue";
import ProgressCard from "@/components/user/test/ProgressCard.vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import qs from "qs";
import {onMounted, toRaw} from "vue";
import useNotification from "@/hooks/useNotification";
import {getUser} from "@/api/user";
const store = useStore();
const route = useRoute();
const router = useRouter();
const test = qs.parse(route.query.key);
const handleSubmit = async () => {
    if (store.state.userStore.done == test.ques_num) {
        await store.dispatch("handleParticipateTest", toRaw({userid:getUser().user_id,testid:test.test_id,score:store.state.userStore.score})).then((res) => {
            if (res) {
                useNotification('success', '系统通知', "测试成功！");
                router.go(-1);
            } else {
                useNotification('success', '系统通知', "测试失败！");
            }
        })
    }
}
const handleCancel = ()=>{
    store.state.userStore.score = 0;
    store.state.userStore.done = 0;
    router.go(-1);
}
onMounted(()=>{
  store.state.userStore.score = 0;
  store.state.userStore.done = 0;
  store.state.userStore.time = test.use_time * 60000;
})
</script>
<style lang="scss" scoped>
.test_main{
  background-color: rgb(242,242,245);
}
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
  padding: 0;
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