import {
    checkTeacher,
    postBar,
    postChapter,
    postCourse,
    queryCourseTeacher,
    queryRules,
    querySubscriber
} from "@/api/teacher";
import {queryChapter} from "@/api/user";
export default {
    state: {
        tpreHide:false,//讲师编辑
        addCouHide:false,
        addTeHide:false,
        addChapHide:false,
        addBarHide:false,
        course_url:"",
        video_url:"",
        teacher: {},
        classes:[],
        rules:[],
        courseChapter:[],
        subscribers:[],
        postCourses:{}
    },
    actions: {
        async handleCheckTeacher({commit, dispatch}, data) {
            // 发送登录的网络请求
            try {
                const res = await checkTeacher(data);
                return res.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryCourseTeacher({commit, dispatch}, data) {
            // 发送登录的网络请求
            try {
                const res = await queryCourseTeacher(data);
                return res.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryRule({commit, dispatch}, data) {
            // 发送登录的网络请求
            try {
                const res = await queryRules(data);
                return res.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQuerySubscriber({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await querySubscriber(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlePostCourse({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postCourse(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlePostChapter({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postChapter(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlePostBar({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postBar(data);
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