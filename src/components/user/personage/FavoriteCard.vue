<template>
  <el-card
      :body-style="{padding: '0px'}"
      shadow="hover"
      class="favorite_card"
      :style="{margin:data.isFirst.value?data.isLast.value?'0':'0 1.4% 0 0':data.isLast.value?'1% 0 0 0':'1% 1.4% 0 0'}">
    <el-image :src="data.course.value.course_cover" class="image" :style="{height:'180px',width:'100%',borderRadius:'4px'}"/>
    <div class="tags" style="padding:3px">
      <h5>{{data.course.value.course_name}}</h5>
      <div class="card_bottom">
        <h6 style="color: gray">主讲老师：{{data.course.value.teach_name}}</h6>
        <el-button class="like_btn" round size="small">
          <h6 style="color: gray;margin-right: 2px">已收藏</h6>
          <i class="bi bi-star-fill" style="color:#ff8800"/>
        </el-button>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import {useStore} from "vuex";
import {toRefs} from "vue";
import {defineProps} from "vue";
const props = defineProps({
  isLast:Boolean,
  isFirst:Boolean,
  course:Object
})
const data = toRefs(props)
const store = useStore();
</script>

<style>
.favorite_card{
  height:15%;
  width:23.7%;
}
.card_bottom {
  margin-top: 10px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  width: 100%;
  display: block;
}
</style>
