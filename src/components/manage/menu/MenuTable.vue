<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="menu_id" label="菜单ID" />
      <el-table-column prop="menu_name" label="菜单名称" />
      <el-table-column prop="menu_path" label="菜单路径" />
      <el-table-column prop="role" label="角色权限" />
      <el-table-column align="right" width="180px">
        <template #header>
          <el-input v-model="search" size="small" placeholder="请输入···"/>
        </template>
        <template #default="scope">
          <el-button size="small" type="danger" @click="onDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex;justify-content: center;margin-top: 20px">
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </el-card>
</template>

<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {ElMessage} from "element-plus";
const store = useStore();
const search = ref('');
const filterTableData = computed(() =>
    store.state.managerStore.menus.filter(
        (data) =>
            !search.value ||
            data.menu_name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onDelete = (row)=>{
    ElMessage({message:'请谨慎执行删除操作!',type:'error'});
    console.log(row);
}
</script>
