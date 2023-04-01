<template>
  <el-card
      :body-style="{padding: '0px',display:'flex'}"
      shadow="hover"
      class="course_card"
      style="width: 100%"
      :style="{marginBottom:data.isLast.value?'0px':'4px'}">
    <el-image :src="data.order.value.order_head" class="image" :style="{height:'117px',width:'20%',borderRadius:'4px'}"/>
    <div style="padding:3px;width: 100%;display: flex;flex-direction: column">
        <div style="margin-left: 8px;margin-right:8px;margin-top: 8px;display: flex;justify-content: space-between">
            <h4>{{data.order.value.order_title}}</h4>
            <p style="font-size: 15px;font-weight: bold;color: gray">￥{{data.order.value.order_fee}}</p>
        </div>
        <div style="display: flex;margin-left: 8px;margin-right:8px">
            <p class="orderid">订单号:{{data.order.value.order_id}}</p>
            <p class="payway">支付方式:{{data.order.value.pay_way}}</p>
        </div>
      <div style="margin:8px;display: flex;justify-content: space-between">
        <div class="left">
          <div style="display: flex">
              <p style="font-size:12px;color:gray;margin-right: 24px">下单时间:{{data.order.value.create_time}}</p>
              <p style="font-size:12px;color:gray;margin-right: 24px">支付时间:{{data.order.value.pay_time}}</p>
              <p style="font-size:12px;color:gray">支付状态:{{data.order.value.pay_status}}</p>
          </div>
        </div>
        <div class="right">
            <el-button size="small" type="warning" @click="" round icon="CloseBold">取消订单</el-button>
            <el-button size="small" type="primary" @click="" round icon="Select">确认收货</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import {toRefs} from "vue";
import {defineProps} from "vue";
const props = defineProps({
    isLast:Boolean,
    order:Object
})
const data = toRefs(props)
</script>

<style lang="css" scoped>
.orderid{
    color: gray;
    font-size: 12px;
    margin: 2% 2% 2% 0;
    border-radius: 4px;
    width: 23%;
}
.payway{
    margin: 2% 2% 2% 0;
    font-size:12px;
    color:gray;
}
.right{
  display: flex;
}
</style>