<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="test_id" label="测试ID" />
      <el-table-column prop="course_id" label="课程ID" />
      <el-table-column prop="teach_id" label="讲师ID" />
        <el-table-column prop="test_name" label="测试名称" />
      <el-table-column prop="ques_num" label="题目总数" />
      <el-table-column prop="test_time" label="发布时间" />
      <el-table-column prop="use_time" label="测试时间" />
      <el-table-column align="right" width="180px">
        <template #header>
          <el-input v-model="search" size="small" placeholder="请输入···"/>
        </template>
        <template #default="scope">
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
    store.state.managerStore.tests.filter(
        (data) =>
            !search.value ||
            data.test_id.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onStatus = (row)=>{
  ElMessage({message:'由于测试内容由讲师发布，请联系该讲师进行调整!',type:'warning'});
  console.log(row);
}
const onDelete = (row)=>{
  ElMessage({message:'请谨慎执行删除操作!',type:'error'});
  console.log(row);
}
</script>
