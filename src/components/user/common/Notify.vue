<template>
  <div class="notify">
    <el-tooltip content="消息中心" :offset="10">
      <el-badge :is-dot="store.state.layoutStore.isDot" @click="this.$router.push('/notice')">
        <el-icon><Bell/></el-icon>
      </el-badge>
    </el-tooltip>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {toRaw, watch} from "vue";
import {data} from "@/api/socket";
import {getUser} from "@/api/user";
const router = useRouter();
const store = useStore();
watch(data.notices,async () => {
  store.state.layoutStore.isDot = true;
  store.state.layoutStore.notices = {accept: [], no_accept: []};
  await store.dispatch("handleQueryNotices", toRaw({userid: getUser().user_id})).then((res) => {
    if (res.no_accept.length != 0) {
      store.state.layoutStore.isDot = true;
    }
    store.state.layoutStore.notices.accept = res.accept;
    store.state.layoutStore.notices.no_accept = res.no_accept;
  })
})
</script>

<style lang="scss" scoped>
@import "../../../style/mixin";

.notify {
  cursor: pointer;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    @include hover_bg_color();
  }
}
</style>