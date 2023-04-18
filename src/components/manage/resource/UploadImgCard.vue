<template>
    <el-upload ref="uploadRef"
               class="upload-demo"
               action="/api/admin/upload/img"
               :on-success="handleSuccess">
        <el-button icon="UploadFilled">上传封面</el-button>
    </el-upload>
</template>
<script setup>
import {defineProps, ref, toRaw, toRefs} from 'vue'
import {useStore} from "vuex";
import useNotification from "@/hooks/useNotification";
import {useI18n} from "vue-i18n";
const store = useStore();
const { t } = useI18n();
const uploadRef = ref(null)
const props = defineProps({
    type:String
})
const data = toRefs(props);
const handleSuccess = async (result) => {
    if (data.type.value == "slider") {
        const res = await store.dispatch("handleAddSlider", toRaw({sliderurl:result}));
        if (res) {
            useNotification("success", "系统通知", t("editSuccess"));
            store.state.managerStore.sliders = [];
            await store.dispatch("handleQuerySliderAll", toRaw({})).then((sliders) => {
                store.state.managerStore.sliders = sliders;
            })
        } else {
            useNotification("error", "系统通知", res.result);
        }
    } else if(data.type.value == "avatar") {
        const res = await store.dispatch("handleAddAvatar", toRaw({avatarurl:result}));
        if (res) {
            useNotification("success", "系统通知", t("editSuccess"));
            store.state.managerStore.avatars = [];
            await store.dispatch("handleQueryAvatarAll", toRaw({})).then((avatars) => {
                store.state.managerStore.avatars = avatars;
            })
        } else {
            useNotification("error", "系统通知", res.result);
        }
    }
}
</script>
