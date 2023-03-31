<template>
    <div class="header">
    <!-- 右侧区域-->
    <div class="header_left">
      <div class="header_left_logo">
        <img src="../../../assets/img/logo.png"/>
      </div>
      <div class="header_left_title">
        <h3>{{$t('title')}}</h3>
      </div>
    </div>
    <!--中间区域-->
    <div class="header_center">
      <div class="header_center_menu">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            router
            :default-active="this.$router.path">
          <el-menu-item v-for="(n,i) in store.state.layoutStore.menus" :key="i" :index="n.menu_path">{{n.menu_name}}</el-menu-item>
        </el-menu>
      </div>
      <div class="header_center_search">
        <Search />
      </div>
    </div>
    <!-- 左侧区域-->
    <div class="header_right">
      <Theme />
      <Notify />
      <Language />
      <UserDropDown />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Search from "./Search.vue";
import Notify from "./Notify.vue";
import Language from "./Language.vue";
import UserDropDown from "./UserDropDown.vue";
import Theme from "./Theme.vue";
import {useI18n} from "vue-i18n";
import {onMounted, toRaw} from "vue";
import {getUser} from "@/api/user";
const store = useStore();
const { t } = useI18n();
onMounted(async () => {
  store.state.layoutStore.menus = await store.dispatch("handleMenu", toRaw({role: getUser().user_role}));
})
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  margin: 0 2% 0 2%;
  .header_left {
    display: flex;
    align-items: center;
  }
  .header_left_logo{
    align-items: center;
  }
  .header_left_logo img{
    height: 35px;
    padding-top: 5px;
  }
  .header_left_title{
    padding-left: 8px;
    text-align: center;
  }
  .header_center{
    display: flex;
    flex: fit-content;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .header_center_menu{
    width: 36%;
  }
  .header_right {
    display: flex;
    align-items: center;
  }
  .el-menu--horizontal{
    border-bottom:none;
  }
}
</style>