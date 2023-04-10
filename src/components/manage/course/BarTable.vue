<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="bar_id" label="小节ID" />
      <el-table-column prop="chapter_id" label="章节ID" />
      <el-table-column prop="bar_order" label="小节顺序" />
      <el-table-column prop="bar_name" label="小节名称" />
      <el-table-column prop="bar_url" label="小节地址" />
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
import {ElMessage} from "element-plus";
const store = useStore();
const search = ref('');
const filterTableData = computed(() =>
    store.state.managerStore.bars.filter(
        (data) =>
            !search.value ||
            data.bar_name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onStatus = (row)=>{
  console.log(row);
}
const onDelete = (row)=>{
  ElMessage({message:'请谨慎执行删除操作!',type:'error'});
  console.log(row);
}
</script>