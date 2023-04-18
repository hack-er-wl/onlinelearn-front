CourseTable.vue<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="slider_id" label="轮播ID" />
        <el-table-column prop="slider_url" label="轮播图片" width="150%">
            <template #default="scope">
                <el-image :src="scope.row.slider_url"/>
            </template>
        </el-table-column>
      <el-table-column prop="slider_url" label="轮播地址" />
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
    store.state.managerStore.sliders.filter(
        (data) =>
            !search.value ||
            data.slider_id.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onDelete = (row)=>{
    ElMessage({message:'请谨慎执行删除操作!',type:'error'});
    console.log(row);
}
</script>