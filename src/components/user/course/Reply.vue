<template>
  <div class="replay">
    <div style="display: flex">
      <el-avatar :size="25" :src="data.reply.value.user_head"/>
      <div style="margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between">
        <h6 style="color: gray;margin-bottom: 10px">{{data.reply.value.user_name}} <i class="bi bi-caret-right-fill" style="color:gray;"/> {{data.reply.value.accept_name}}</h6>
        <p style="font-size: 15px">{{data.reply.value.reply_content}}</p>
        <h6 style="color: gray;margin-top: 10px"><i class="bi bi-clock"/> {{data.reply.value.reply_time}}</h6>
      </div>
    </div>
    <div style="align-items: center;display: flex">
      <div>
        <el-button round size="small" style="margin-right: 10px" @click="handleClick">回复</el-button>
      </div>
      <div>
        <el-button class="point_btn" @click="handleLike(data.reply.value)" link>
          <i :id="'like'+ data.reply.value.reply_id" class="bi bi-hand-thumbs-up"/>
        </el-button>
      </div>
      <div style="margin-left: 10px">
        <p style="color: gray;font-size: 1px;align-items: center;padding:0px">{{data.reply.value.reply_pointer}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {defineProps, onMounted, toRaw, toRefs} from "vue";
import {getUser} from "@/api/user";
const store = useStore();
const props = defineProps({
  reply:Object
})
const data = toRefs(props);
const handleClick = () => {
  store.state.layoutStore.isHide = true
  store.state.layoutStore.acceptid = data.reply.value.user_id;
  store.state.layoutStore.assessid = data.reply.value.assess_id;
}
const handleLike = async (reply) => {
    if (document.getElementById('like' + reply.reply_id).style.color == "rgb(255, 136, 0)") {
        await store.dispatch("handleCancelReplyPoint", toRaw({replyid: data.reply.value.reply_id,userid:getUser().user_id})).then((res) => {
            console.log(res);
            if(res){
                document.getElementById('like' + reply.reply_id).className = "bi bi-hand-thumbs-up";
                document.getElementById('like' + reply.reply_id).style.color = "";
                reply.reply_pointer--;
            }
        })
        console.log("取消")
    } else {
        await store.dispatch("handleReplyPoint", toRaw({replyid: data.reply.value.reply_id, userid: getUser().user_id})).then((res) => {
            console.log(res);
            if (res) {
                document.getElementById('like' + reply.reply_id).className = "bi bi-hand-thumbs-up-fill";
                document.getElementById('like' + reply.reply_id).style.color = "#ff8800";
                reply.reply_pointer++;
            }
        })
        console.log("点赞")
    }
}
onMounted(async () => {
    await store.dispatch("handleQueryReplyPoint", toRaw({replyid: data.reply.value.reply_id,userid:getUser().user_id})).then((res) => {
        console.log(res);
        if(res){
            document.getElementById('like'+res.point_id).className = "bi bi-hand-thumbs-up-fill";
            document.getElementById('like'+res.point_id).style.color = "#ff8800";
        }
    })
})
</script>

<style scoped>
.replay{
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.el-button.is-link{
  padding: 0px;
}
</style>