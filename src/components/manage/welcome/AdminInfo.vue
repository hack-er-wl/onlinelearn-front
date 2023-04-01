<template>
    <el-card class="person_box_card" shadow="hover">
            <div class="person_card_header">
                <div style="display: flex;flex-direction: column;align-items: center">
                    <el-avatar :size="50" style="margin-top: 8px" icon="UserFilled" :src="getAdmin().user_head"/>
                    <div style="display:flex;margin-top: 3px;margin-right: 4px">
                        <div style="display: flex">
                            <i class="bi bi-person"/>
                            <h4 style="color: white;margin-left: 4px">{{getAdmin().user_name}}</h4>
                        </div>
                        <div style="display:flex;margin-left: 4px;margin-top: 3px">
                            <el-icon><Coin /></el-icon>
                            <h6 style="color: white;margin-left: 4px">{{getAdmin().user_money+'￥'}}</h6>
                        </div>
                    </div>
                    <div style="display:flex;margin-bottom: 12px">
                        <el-icon><Message /></el-icon>
                        <h6 style="color: white;margin-left: 4px">{{getAdmin().e_mail}}</h6>
                    </div>
                </div>
            </div>
        <div class="person_card_bottom">
            <p style="font-size: 16px;font-weight: bold;color: gray;">管理员你好，欢迎回来！</p>
            <p style="font-size: 15px;color: gray;margin-top: 10%">请注意天气变化，祝你工作愉快！</p>
        </div>
    </el-card>
</template>

<script setup>
import {getAdmin} from "@/api/manager";
</script>

<style lang="css" scoped>
.person_card_header{
    background-color: rgb(64,158,255);
    border-radius: 4px;
}
.person_card_bottom{
    margin-top: 10%;
    display: flex;
    flex-direction: column;
}
</style>