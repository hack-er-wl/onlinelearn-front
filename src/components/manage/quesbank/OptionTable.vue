<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
        <el-table-column prop="option_id" label="题目ID" />
        <el-table-column prop="test_id" label="测试ID" />
        <el-table-column prop="option_key" label="分值" />
        <el-table-column prop="option_answer" label="答案" />
        <el-table-column prop="option_contain" label="题干" />
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
const store = useStore();
const search = ref('');
const filterTableData = computed(() =>
    store.state.managerStore.options.filter(
        (data) =>
            !search.value ||
            data.option_id.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onStatus = (row)=>{
  console.log(row);
}
const onDelete = (row)=>{
  console.log(row);
}
</script>
