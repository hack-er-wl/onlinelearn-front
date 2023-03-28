<template>
  <el-card class="message_box_card" shadow="hover">
    <template #header>
      <div class="card-header">
        <h6><i class="bi bi-gear-wide-connected" style="color: rgb(91,192,248)"/> {{data.notice.value.from_user=='0000000000'?'系统消息':data.notice.value.from_user}}</h6>
        <p style="font-size: 5px;color: gray">{{data.notice.value.notice_time}}</p>
      </div>
    </template>
    <div style="display: flex;justify-content: space-between">
      <div class="notice_text">
        {{data.notice.value.notice_content}}
      </div>
      <div class="new_icon" :hidden="!data.isNew.value">
        <svg t="1680014668115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31760" width="25" height="25"><path d="M326.6 550.2l28-47h347.8l-1.4 4 3.7-4h53.6c-9.2-85.1-52-145-85.4-166.3 1 6.8 18.8 134.4-10.7 156.9S676.4 256 457.8 110.3C440.6 387.6 353 358.5 258.7 503.1h60.9l7 47.1z m413.9 206.3H622.9l3.2-10.7-9.7 10.7H235.7l-7.8-50.7-11.5 19.3C239.9 833.1 351.5 915 485.9 915c25.8 0 50.6-3.2 74.2-8.8l12.3 1.3h0.5c-0.1 0-0.2 0.1-0.3 0.1h-0.3 0.3c41.3-9.1 80.3-26.6 112.5-52.8 41.2-33.6 68.3-79.2 83.9-129.8l-28.5 31.5z m0 0" fill="#D81E06" p-id="31761"></path><path d="M316.2 721.3h-43.8l-17.5-113c-0.9-5.9-1.3-10.6-1.1-14.2h-0.7c-2.8 6-8 15.3-15.5 27.9l-59.3 99.4h-40.5l104.3-174.7h46.6L305 656.6c1.1 7.3 1.6 11.9 1.7 13.9h0.7c1.6-4.2 6-12.3 13.1-24.1l59.4-99.6h40.5L316.2 721.3z m165.4 0H362.8l104.3-174.7h114.1L563.1 577h-71.4l-24.6 41.2h66.3l-18.1 30.3H449l-25.3 42.3h76l-18.1 30.5z m402.3-174.8L726.1 721.3h-47.5l33.8-113.9c1.9-6.2 4.6-12.6 8.3-19.3h-0.5c-5.5 7.8-10.6 14.2-15.1 19.3l-103 113.9h-49.4l50.8-174.7h46.9L609.5 665c-1.8 5.2-4.8 11.7-9 19.6h0.9c4.1-6.2 9.5-12.9 16.1-20.2l107.7-117.9h45.5l-37.3 119.4c-1.4 4.7-4.1 10.9-7.8 18.5h0.7c4.2-6.5 9.1-12.9 14.4-19.2l100-118.7h43.2z m0 0" fill="#D81E06" p-id="31762"></path><path d="M316.2 721.3h-43.8l-17.5-113c-0.9-5.9-1.3-10.6-1.1-14.2h-0.7c-2.8 6-8 15.3-15.5 27.9l-59.3 99.4h-40.5l104.3-174.7h46.6L305 656.6c1.1 7.3 1.6 11.9 1.7 13.9h0.7c1.6-4.2 6-12.3 13.1-24.1l59.4-99.6h40.5L316.2 721.3z m165.4 0H362.8l104.3-174.7h114.1L563.1 577h-71.4l-24.6 41.2h66.3l-18.1 30.3H449l-25.3 42.3h76l-18.1 30.5z m402.3-174.8L726.1 721.3h-47.5l33.8-113.9c1.9-6.2 4.6-12.6 8.3-19.3h-0.5c-5.5 7.8-10.6 14.2-15.1 19.3l-103 113.9h-49.4l50.8-174.7h46.9L609.5 665c-1.8 5.2-4.8 11.7-9 19.6h0.9c4.1-6.2 9.5-12.9 16.1-20.2l107.7-117.9h45.5l-37.3 119.4c-1.4 4.7-4.1 10.9-7.8 18.5h0.7c4.2-6.5 9.1-12.9 14.4-19.2l100-118.7h43.2z m0 0" fill="#D81E06" p-id="31763"></path></svg>
      </div>
    </div>
  </el-card>
</template>
<script setup>
import {toRefs} from "vue";
import {defineProps} from "vue"
const props = defineProps({
  notice:Object,
  isNew:Boolean
})
const data = toRefs(props)

</script>
<style lang="scss" scoped>

.message_box_card {
  width: 100%;
  margin:0 0 10px 0;
    .card-header{
        display: flex;
      justify-content: space-between;
    }
  .icon{
    margin: 0;
    padding: 0;
  }
}
</style>
