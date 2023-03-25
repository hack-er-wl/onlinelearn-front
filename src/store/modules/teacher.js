import {checkTeacher} from "@/api/teacher";

export default {
    state: {

    },
    actions: {
        async handleCheckTeacher({commit, dispatch}, data) {
            // 发送登录的网络请求
            try {
                const res = await checkTeacher(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
}