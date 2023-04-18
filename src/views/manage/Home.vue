<template>
    <el-container class="common-layout">
        <el-aside id="el-aside">
          <Menu/>
        </el-aside>
        <el-container class="right">
          <el-header>
            <Header/>
          </el-header>
         <el-scrollbar>
           <el-main id="el-main">
             <router-view/>
           </el-main>
         </el-scrollbar>
        </el-container>
    </el-container>
  <EditStatus v-model="store.state.managerStore.editStatus"/>
  <EditCheck v-model="store.state.managerStore.editCheck"/>
  <CheckStatus v-model="store.state.managerStore.checkStatus"/>
  <EditClassStatus v-model="store.state.managerStore.editClassStatus"/>
  <EditRule v-model="store.state.managerStore.isEditRule"/>
</template>

<script setup>
import Menu from "../../components/manage/common/Menu.vue";
import Header from "../../components/manage/common/Header.vue";
import EditStatus from "@/components/manage/course/EditStatus.vue";
import EditCheck from "@/components/manage/course/EditCheck.vue";
import {useStore} from "vuex";
import {onMounted, toRaw} from "vue";
import CheckStatus from "@/components/manage/teacher/CheckStatus.vue";
import EditFieldStatus from "@/components/manage/course/EditClassStatus.vue";
import EditRule from "@/components/manage/teacher/EditRule.vue";
const store = useStore();
onMounted(async () => {
    store.state.managerStore.users = [];
    await store.dispatch("handleQueryUserAll", toRaw({})).then((users) => {
        store.state.managerStore.users = users;
    })
    store.state.managerStore.teachers = [];
    await store.dispatch("handleQueryTeacherAll", toRaw({})).then((teachers) => {
        store.state.managerStore.teachers = teachers;
    })
})
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  .el-aside {
    height: 100%;
    width: 16.4%;
  }
  .right{
    height: 100vh;
    .el-main {
      width: 100%;
      overflow: unset;
      background-color: rgb(240,242,245);
      padding: 2%;
    }
    .el-header {
      display: flex;
      align-items: center;
      padding: 0;
    }
  }
}
</style>
