<template>
    <el-upload ref="uploadRef"
               class="upload-demo"
               action="/api/teacher/upload/img"
               :on-success="handleSuccess">
        <el-button icon="UploadFilled">上传封面</el-button>
    </el-upload>
</template>
<script setup>
import { ref } from 'vue'
import {useStore} from "vuex";
const store = useStore();
const uploadRef = ref(null)
const handleSuccess = (res)=>{
    store.state.teacherStore.course_url = res;
}
</script>
