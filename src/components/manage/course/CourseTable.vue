<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="course_id" label="课程ID" />
      <el-table-column prop="course_name" label="课程名称" />
      <el-table-column prop="course_status" label="课程状态" />
      <el-table-column prop="course_fee" label="课程费用" />
      <el-table-column prop="subscribe_num" label="订阅数量" />
      <el-table-column align="right" width="180px">
        <template #header>
          <el-input v-model="search" size="small" placeholder="请输入···"/>
        </template>
        <template #default="scope">
          <el-button type="primary" size="small" @click="">编辑</el-button>
          <el-button size="small" type="danger" @click="">删除</el-button>
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
    store.state.managerStore.courses.filter(
        (data) =>
            !search.value ||
            data.course_name.toLowerCase().includes(search.value.toLowerCase())
    )
)
</script>

<style lang="scss" scoped>
.table-card{
  margin: 10px;
}
</style>