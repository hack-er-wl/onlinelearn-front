import {
    checkTeacher,
    postBar,
    postChapter, postChoose,
    postCourse, postOption, postTest,
    queryCourseTeacher,
    queryRules,
    querySubscriber, queryTestByTeacher
} from "@/api/teacher";
export default {
    state: {
        tpreHide:false,//讲师编辑
        addCouHide:false,
        addTeHide:false,
        addChapHide:false,
        addBarHide:false,
        addChoose:false,
        addOption:false,
        course_url:"",
        video_url:"",
        teacher: {},
        classes:[],
        rules:[],
        tests:[],
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
        },
        async handlePostTest({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postTest(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlePostChoose({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postChoose(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlePostOption({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postOption(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryTestByTeacher({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryTestByTeacher(data);
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