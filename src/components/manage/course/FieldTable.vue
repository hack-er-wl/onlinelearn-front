<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="field_id" label="领域ID" />
      <el-table-column prop="field_name" label="领域名称" />
      <el-table-column align="right" width="205px">
        <template #header>
          <el-input v-model="search" size="small" placeholder="请输入···"/>
        </template>
        <template #default="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
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
    store.state.managerStore.fields.filter(
        (data) =>
            !search.value ||
            data.field_name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (field)=>{
    ElMessage({message:'请谨慎执行编辑操作!',type:'warning'});
    console.log(field);
}
const handleDelete = (field)=>{
  ElMessage({message:'请谨慎执行删除操作!',type:'error'});
    console.log(field);
}
</script>