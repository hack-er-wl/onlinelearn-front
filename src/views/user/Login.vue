<template>
  <div class="login-container" id="login_id">
    <div class="container">
      <div class="left_box"
           v-motion
           :initial="{ opacity: 0, x: -100}"
           :enter="{ opacity: 1, x: 0,scale:1}"
           :hovered="{scale:1.1}"
           :delay="200">
        <img src="../../assets/img/left.png"/>
      </div>
      <div class="right_box">
        <h3
            class="title"
            v-motion
            :initial="{ opacity: 0, y: -100 }"
            :enter="{ opacity: 1, y: 0, scale: 1}"
            :hovered="{ scale: 1.1 }"
            :delay="200">
          {{$t('title')}}
        </h3>
        <div class="form-container">
          <el-form
              ref="loginFormRef"
              :model="loginForm"
              :rules="loginRules"
              label-width="120px"
              class="demo-ruleForm"
              size="large"
              status-icon>
            <el-form-item
                label=""
                prop="email"
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 300 }}">
              <el-input
                  v-model="loginForm.email"
                  :placeholder="$t('emailPlaceholder')">>
                <template #prefix>
                  <el-icon><Promotion /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item
                label=""
                prop="password"
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 400 }}">
              <el-input
                  type="password"
                  show-password
                  :placeholder="$t('passPlaceholder')"
                  v-model="loginForm.password">
                <template #prefix>
                  <el-icon><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-form>
          <!-- 提交表单 -->
          <div style="width: 100%;display: flex"
               v-motion
               :initial="{ opacity: 0, y: 100 }"
               :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }">
            <el-button
                style="height: 38px"
                type="primary"
                @click="handleLogin()"
                :loading="btnLogLoading">
              {{$t('signIn')}}
            </el-button>
            <el-button icon="Switch" @click="this.$router.replace({name:'register'})" circle style="height: 39px;width: 45px"/>
          </div>
          <div style="width: 100%;display: flex;margin-top: 15px;justify-content: center"
               v-motion
               :initial="{ opacity: 0, y: 100 }"
               :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }">
            <el-button circle @click="weiboLogin()" size="small" style="height: 30px;width: 30px" class="bi bi-sina-weibo"/>
            <el-button circle @click="qqLogin()" size="small" style="height: 30px;width: 30px" class="bi bi-tencent-qq"/>
            <el-button circle @click="githubLogin()" size="small" style="height: 30px;width: 30px" class="bi bi-github"/>
          </div>
        </div>
        <!-- 国际化 -->
        <Language class="language" />
        <!-- 主题切换 -->
        <Theme class="theme" />
      </div>
    </div>
    <div style="color: gray;text-align: center;font-size: 12px">
      <p>Copyright © 2023 在线学习平台</p>
      <p>作者：Wali</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRaw } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Language from "../../components/user/common/Language.vue";
import Theme from "../../components/user/common/Theme.vue";
import {useI18n} from "vue-i18n";
import useNotification from "@/hooks/useNotification";
import {initWebSocket} from "@/api/socket";
import {getUser} from "@/api/user";

const router = useRouter();
const store = useStore();
const { t } = useI18n();
// 获取到表单元素
const loginFormRef = ref(null);

// 登录的表单数据
const loginForm = reactive({
  email: "1369778414@qq.com",
  password: "admin888",
});
// 登录按钮的加载loading
const btnLogLoading = ref(false);

// 登录表单的校验规则
const loginRules = reactive({
  email: [{ required: true, message: t("userError"), trigger: "blur" }],
  password: [
    { required: true, message: t("PWError"), trigger: "blur" },
    { min: 3, max: 8, message: t("PWSubError"), trigger: "blur" },
  ]
});

//注册事件
// 点击登录按钮，处理登录
async function handleLogin() {
  // 1、表单校验
  await loginFormRef.value.validate(async (valid, fields) => {
    if (valid) {
      // 开启loading状态
      btnLogLoading.value = true;
      // 用通过vuex发送网络请求
      const res = await store.dispatch("handleLogin", toRaw(loginForm));
      if (res) {
        useNotification('success','系统通知',t("signInSuccess"));
        store.state.layoutStore.menus = await store.dispatch("handleMenu", toRaw({role: getUser().user_role}));
        store.state.userStore.webSocket = initWebSocket();
        await router.push({path: "/"});
      } else {
        btnLogLoading.value = false;
      }
    } else {
      // 校验不通过
      console.log("error submit!", fields);
    }
  });
}
function weiboLogin(){
  useNotification('success','系统通知',"微博登录功能还未实现");
}
function qqLogin(){
  useNotification('success','系统通知',"QQ登录功能还未实现");
}
function githubLogin(){
  useNotification('success','系统通知',"Github登录功能还未实现");
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin";

.login-container {
  height: 100vh;
  width: 100%;
  background-color: rgb(240,242,245);
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .container {
    background-color: var(--el-bg-color);
    width: 670px;
    height: 400px;
    display: flex;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 5px 20px 2px rgba(255, 255, 255, 0.1);

    .left_box {
      width: 286px;

      img {
        height: 100%;
      }
    }

    .right_box {
      width: 344px;
      padding: 20px;
      position: relative;

      .title {
        font-size: 26px;
        [class="light"] & {
          color: $dark-bg-color;
        }

        [class="dark"] & {
          color: $light-bg-color;
        }
        margin: 20px auto 30px auto;
        text-align: center;
        font-weight: 700;
      }

      .form-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .el-form {
          width: 100%;

          /* vue3中的样式穿透 */
          ::v-deep(.el-form-item__content) {
            margin-left: 0px !important;
          }
        }

        .el-button {
          width: 100%;
        }
      }

      .language {
        width: 38px;
        height: 40px;
        position: absolute;
        right: 0px;
        top: 0px;
      }

      .theme {
        width: 38px;
        height: 40px;
        position: absolute;
        right: 38px;
        top: 0px;
      }
    }
  }
}
</style>