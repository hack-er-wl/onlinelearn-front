<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="order_id" label="订单ID" />
      <el-table-column prop="order_title" label="订单名称" />
      <el-table-column prop="order_fee" label="订单费用" />
        <el-table-column prop="create_time" label="创建时间" />
      <el-table-column prop="pay_time" label="支付时间" />
      <el-table-column prop="pay_status" label="支付状态" />
      <el-table-column prop="pay_way" label="支付方式" />
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
    store.state.managerStore.orders.filter(
        (data) =>
            !search.value ||
            data.test_id.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onStatus = (row)=>{
  ElMessage({message:'由于订单是由用户生成，请联系该用户进行调整!',type:'warning'});
  console.log(row);
}
const onDelete = (row)=>{
  ElMessage({message:'请谨慎执行删除操作!',type:'error'});
  console.log(row);
}
</script>
