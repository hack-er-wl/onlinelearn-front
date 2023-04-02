<template>
    <el-upload v-model:file-list="fileList"
            class="upload-demo"
            action="/api/teacher/upload/img"
            multiple
            :on-success="handleSuccess"
            :limit="1">
        <el-button icon="UploadFilled">上传封面</el-button>
    </el-upload>
</template>
<script setup>
import { ref } from 'vue'
import {useStore} from "vuex";
const store = useStore();
const fileList = ref([])
const handleSuccess = (res)=>{
    store.state.teacherStore.course_url = res;
}
</script>
