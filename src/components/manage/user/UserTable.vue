<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="user_id" label="用户ID" />
      <el-table-column prop="user_name" label="昵称" />
        <el-table-column prop="user_head" label="用户头像" width="85%">
            <template #default="scope">
                <el-image :src="scope.row.user_head"/>
            </template>
        </el-table-column>
      <el-table-column prop="e_mail" label="邮箱" />
      <el-table-column prop="user_like" label="兴趣" />
      <el-table-column prop="user_add" label="地址" />
      <el-table-column prop="user_money" label="余额" />
        <el-table-column prop="user_role" label="角色"/>
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
    store.state.managerStore.users.filter(
        (data) =>
            !search.value ||
            data.user_name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onStatus = (row)=>{
    ElMessage({message:'由于用户信息由用户发布，请联系该用户进行调整!',type:'warning'});
    console.log(row);
}
const onDelete = (row)=>{
    ElMessage({message:'请谨慎执行删除操作!',type:'error'});
    console.log(row);
}
</script>
