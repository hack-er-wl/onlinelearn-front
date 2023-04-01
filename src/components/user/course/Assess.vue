<template>
  <div class="assess">
    <div style="display: flex">
      <el-avatar :size="30" :src="data.assess.value.user_head"/>
      <div style="margin-left: 10px">
        <h6 style="color: gray">{{data.assess.value.user_name}}</h6>
        <el-rate
            v-model="data.assess.value.assess_rate"
            disabled
            show-score
            text-color="#ff9900"/>
        <p style="font-size: 15px">{{data.assess.value.assess_content}}</p>
        <h6 style="color: gray;margin-top: 10px"><i class="bi bi-clock"/> {{data.assess.value.assess_time}}</h6>
      </div>
    </div>
    <div style="align-items: center;display: flex">
      <div>
        <el-button round size="small" style="margin-right: 10px" @click="handleClick">回复</el-button>
      </div>
      <div>
        <el-button class="point_btn" @click="handleLike(data.assess.value)" link>
          <i :id="'like'+data.assess.value.assess_id" class="bi bi-hand-thumbs-up"/>
        </el-button>
      </div>
      <div style="margin-left: 10px">
        <p style="color: gray;font-size: 1px;align-items: center;padding:0">{{data.assess.value.assess_pointer}}</p>
      </div>
    </div>
  </div>
  <div v-for="(t,i) in data.assess.value.replies" :key="i" :id="'replay' + i"  style="background-color: rgb(247,247,247);border-radius: 4px;margin-left: 4%">
    <Reply :reply="t"/>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {defineProps, onMounted, toRaw, toRefs} from "vue";
import Reply from "@/components/user/course/Reply.vue";
import {getUser} from "@/api/user";
const store = useStore();
const props = defineProps({
  assess:Object
})
const data = toRefs(props);
const handleClick = () => {
  store.state.layoutStore.isHide = true
  store.state.layoutStore.assessid = data.assess.value.assess_id;
  store.state.layoutStore.acceptid = data.assess.value.user_id;
}
const handleLike = async (assess) => {
    if (document.getElementById('like' + assess.assess_id).style.color == "rgb(255, 136, 0)") {
        await store.dispatch("handleCancelAssessPoint", toRaw({assessid: data.assess.value.assess_id,userid:getUser().user_id})).then((res) => {
            console.log(res);
            if(res){
                document.getElementById('like' + assess.assess_id).className = "bi bi-hand-thumbs-up";
                document.getElementById('like' + assess.assess_id).style.color = "";
                assess.assess_pointer--;
            }
        })
        console.log("取消")
    } else {
        await store.dispatch("handleAssessPoint", toRaw({assessid: data.assess.value.assess_id, userid: getUser().user_id})).then((res) => {
            console.log(res);
            if (res) {
                document.getElementById('like' + assess.assess_id).className = "bi bi-hand-thumbs-up-fill";
                document.getElementById('like' + assess.assess_id).style.color = "#ff8800";
                assess.assess_pointer++;
            }
        })
        console.log("点赞")
    }
}
onMounted(async () => {
    await store.dispatch("handleQueryAssessPoint", toRaw({assessid: data.assess.value.assess_id,userid:getUser().user_id})).then((res) => {
        console.log(res);
        if(res){
            document.getElementById('like'+res.point_id).className = "bi bi-hand-thumbs-up-fill";
            document.getElementById('like'+res.point_id).style.color = "#ff8800";
        }
    })
})
</script>

<style scoped>
.assess{
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-between;
  padding:1% 0 1% 0;
}
</style>