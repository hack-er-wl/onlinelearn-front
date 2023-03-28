<template>
  <el-card class="table-card">
    <el-form :model="formAddMenu" style="display: flex;justify-content: space-between">
      <el-form-item label="菜单名称" style="margin-top: 10px">
        <el-input v-model="formAddMenu.menuname" placeholder="请输入菜单名称···"/>
      </el-form-item>
      <el-form-item label="菜单路径" style="margin-top: 10px">
        <el-input v-model="formAddMenu.menupath" placeholder="请输入菜单路径···"/>
      </el-form-item>
      <el-form-item label="菜单角色" style="margin-top: 10px">
        <el-select v-model="formAddMenu.role" class="m-2" placeholder="请输入菜单角色···">
          <el-option
              v-for="item in roles"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">添加菜单</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from "vue";
const emit = defineEmits(['submit']);
const formAddMenu = reactive({
  menuname: "",
  menupath:"",
  role:""
})
const roles = [{label:0,value:0},{label:1,value:1},{label:2,value:2}]
const onSubmit = () => {
  emit('submit',formAddMenu);
}
</script>

<style lang="scss" scoped>
.table-card{
  margin: 10px;
}
</style>