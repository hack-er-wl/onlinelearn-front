<template>
  <el-card  class="table-card">
    <el-table :data="filterTableData" border>
      <el-table-column type="index" width="55px" label="编号"/>
      <el-table-column prop="rule_id" label="守则ID" />
      <el-table-column prop="rule_content" label="守则内容" />
      <el-table-column align="right" width="205px">
        <template #header>
          <el-input v-model="search" size="small" placeholder="请输入···"/>
        </template>
        <template #default="scope">
          <el-button type="primary" size="small" @click="onEdit(scope.row)">编辑</el-button>
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
import {computed, ref, toRaw} from "vue";
import {useStore} from "vuex";
import {ElMessage, ElMessageBox} from "element-plus";
import useNotification from "@/hooks/useNotification";
import {handleUpdateRule} from "@/api/manager";
const store = useStore();
const search = ref('');
const filterTableData = computed(() =>
    store.state.managerStore.rules.filter(
        (data) =>
            !search.value ||
            data.rule_content.toLowerCase().includes(search.value.toLowerCase())
    )
)
const onEdit = async (row) => {
    store.state.managerStore.isEditRule = true;
    store.state.managerStore.editRule = row;
    console.log(row);
}
const onDelete = async (row) => {
    ElMessageBox.confirm(
        '请谨慎执行删除操作，该过程不可逆！',
        '提醒', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',}
    ).then(async () => {
        await store.dispatch("handleDeleteRule", toRaw({ruleid: row.rule_id})).then(async (res) => {
            if (res) {
                ElMessage({type: 'success', message: '删除成功',})
                store.state.managerStore.rules = [];
                await store.dispatch("handleQueryRuleAll", toRaw({})).then((rules) => {
                    store.state.managerStore.rules = rules;
                })
            } else {
                ElMessage({type: 'error', message: res.result,})
            }
        });
    }).catch(async () => {
        ElMessage({
            type: 'error',
            message: '删除取消',
        })
    })
    console.log(row);
}
</script>
