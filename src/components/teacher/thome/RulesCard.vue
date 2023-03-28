<template>
  <el-card>
    <template #header>
      <div class="person_card_header">
        <h4><i style="color: gray" class="bi bi-info-circle-fill"/> 讲师守则</h4>
      </div>
    </template>
    <p style="color: gray" v-for="(n,i) in store.state.teacherStore.rules" :key="i">{{i+1 + '.' + n.rule_content}}</p>
  </el-card>
</template>
<script setup>
import {useStore} from "vuex";

const store = useStore();
</script>

<style scoped>

</style>