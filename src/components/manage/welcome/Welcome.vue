<template>
    <div class="data">
        <div style="display: flex">
            <AdminInfo style="width: 30%"/>
            <WeatherCard style="width: 30%"/>
        </div>
    </div>
</template>

<script setup>
import AdminInfo from "@/components/manage/welcome/AdminInfo.vue";
import WeatherCard from "@/components/manage/welcome/WeatherCard.vue";
</script>

<style lang="scss" scoped>
.data{
    height: 100vh;
}
</style>