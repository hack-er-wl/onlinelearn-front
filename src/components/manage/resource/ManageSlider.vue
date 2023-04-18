<template>
  <div class="data">
    <AddSliderForm/>
    <SliderTable/>
  </div>
</template>

<script setup>
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
import SliderTable from "@/components/manage/resource/SliderTable.vue";
import AddSliderForm from "@/components/manage/resource/AddSliderForm.vue";
import useNotification from "@/hooks/useNotification";
const store = useStore();
onMounted(async () => {
  store.state.managerStore.sliders = [];
  await store.dispatch("handleQuerySliderAll", toRaw({})).then((sliders) => {
    store.state.managerStore.sliders = sliders;
  })
})
</script>

<style lang="scss" scoped>
.data{
  height: 100%;
}
</style>