<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="chapter_id" label="章节ID" />
      <el-table-column prop="course_id" label="课程ID" />
      <el-table-column prop="chapter_order" label="章节顺序" />
      <el-table-column prop="chapter_name" label="章节名称" />
      <el-table-column align="right" width="200px">
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
    store.state.managerStore.chapters.filter(
        (data) =>
            !search.value ||
            data.chapter_name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onCheck = (row)=>{
  console.log(row);
}
const onStatus = (row)=>{
  console.log(row);
}
const onDelete = (row)=>{
  console.log(row);
}
</script>