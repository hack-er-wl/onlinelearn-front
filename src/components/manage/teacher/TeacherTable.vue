<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="teach_id" label="讲师ID" />
      <el-table-column prop="teach_field" label="讲课领域" />
      <el-table-column prop="teach_class" label="讲课分类" />
      <el-table-column prop="user_tel" label="讲师手机" />
      <el-table-column prop="user_age" label="讲师年龄" />
      <el-table-column prop="user_tage" label="讲课年龄" />
      <el-table-column prop="user_sex" label="讲师性别" />
        <el-table-column prop="check_status" label="审核状态" />
      <el-table-column align="right" width="200px">
        <template #header>
          <el-input v-model="search" size="small" placeholder="请输入···"/>
        </template>
        <template #default="scope">
            <el-button type="success" size="small" @click="onCheck(scope.row)">审核</el-button>
          <el-button type="primary" size="small" @click="onStatus(scope.row)">编辑</el-button>
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
    store.state.managerStore.teachers.filter(
        (data) =>
            !search.value ||
            data.teach_id.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onStatus = (row)=>{
    ElMessage({message:'请联系该讲师进行调整!',type:'warning'});
    console.log(row);
}
const onCheck = (row)=>{
    store.state.managerStore.checkStatus = true;
    store.state.managerStore.editTeacher = row;
    console.log(row);
}
const onDelete = (row)=>{
    ElMessage({message:'请谨慎执行删除操作!',type:'error'});
    console.log(row);
}
</script>