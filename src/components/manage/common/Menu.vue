<template>
  <el-scrollbar>
    <el-menu
        router
        style="height: 100vh;width: 100%"
        default-active="2"
        class="el-menu-vertical-demo"
        :unique-opened="true"
        :collapse-transition="false"
        :collapse="store.state.managerStore.isCollapse">
      <el-menu-item style="pointer-events: none">
        <img src="../../../assets/img/logo.png" style="width: 30px;height: 30px">
        <h3 style="margin-left: 15px">在线学习平台</h3>
      </el-menu-item>
      <el-sub-menu index="0">
        <template #title>
          <el-icon><PieChart /></el-icon>
          <span>后台数据</span>
        </template>
        <el-menu-item index="/mhome/userdata">
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>用户数据</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/mhome/coursedata">
          <template #title>
            <el-icon><Histogram /></el-icon>
            <span>课程数据</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/mhome/manageuser">
        <el-icon><User /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
            <el-icon><DataAnalysis /></el-icon>
          <span>授课管理</span>
        </template>
        <el-menu-item index="/mhome/managecourse">
          <template #title>
            <el-icon><Platform /></el-icon>
            <span>课程管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/mhome/managefield">
          <template #title>
            <el-icon><Flag /></el-icon>
            <span>领域管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/mhome/manageclass">
          <template #title>
            <el-icon><Grid /></el-icon>
            <span>分类管理</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/mhome/managetest">
        <el-icon><Document /></el-icon>
        <template #title>测试管理</template>
      </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-icon><Avatar /></el-icon>
                <span>师资管理</span>
            </template>
            <el-menu-item index="/mhome/manageteacher">
                <el-icon><UserFilled /></el-icon>
                <template #title>讲师管理</template>
            </el-menu-item>
            <el-menu-item index="/mhome/managerule">
                <el-icon><List /></el-icon>
                <template #title>守则管理</template>
            </el-menu-item>
        </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Files /></el-icon>
          <span>资源管理</span>
        </template>
        <el-menu-item index="/mhome/manageslider">
          <template #title>
            <el-icon><PictureFilled /></el-icon>
            <span>轮播管理</span>
          </template>
        </el-menu-item>
          <el-menu-item index="/mhome/manageavatar">
              <template #title>
                  <el-icon><CameraFilled /></el-icon>
                  <span>头像管理</span>
              </template>
          </el-menu-item>
      </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <el-icon><FolderOpened /></el-icon>
                <span>题库管理</span>
            </template>
            <el-menu-item index="/mhome/managechoose">
                <template #title>
                    <el-icon><QuestionFilled /></el-icon>
                    <span>选择题</span>
                </template>
            </el-menu-item>
            <el-menu-item index="/mhome/manageoption">
                <template #title>
                    <el-icon><CircleCheckFilled /></el-icon>
                    <span>判断题</span>
                </template>
            </el-menu-item>
        </el-sub-menu>
      <el-menu-item index="/mhome/managemessage">
        <el-icon><MessageBox /></el-icon>
        <template #title>消息管理</template>
      </el-menu-item>
      <el-menu-item index="/mhome/managemenu">
        <el-icon><Finished /></el-icon>
        <template #title>菜单管理</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import {useStore} from "vuex";
const store = useStore();
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
}
</style>