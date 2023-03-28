import {
    addCollect,
    addField,
    cancelCollect,
    cancelSubscribeCourse,
    code,
    getSliders,
    handleApply, handleMenu,
    login,
    postApply,
    postAssess,
    postReply,
    postUserInfo,
    queryAssess, queryChapter,
    queryClasses,
    queryClassesByStatus,
    queryCollect,
    queryCourseByClassId,
    queryCourseByClassName,
    queryCourseByCourseId,
    queryCourseByStatus,
    queryFields,
    queryMyCollect, queryNotices,
    queryRecommend,
    queryReply,
    querySubscribeCourse,
    queryTeacherByCourseId, queryTests,
    regist, setAccept,
    subscribeCourse,
    updatePass
} from "../../api/user";
export default {
    state: {
        isLogin: localStorage.getItem("VUE_ADMIN_ISLOGIN") || false,
        Point:false,
        Like:false,
        Subscribe:false,
        webSocket:null,
        token: localStorage.getItem(process.env.VUE_APP_TOKEN_NAME) || "",
        // 是否动态添加路由
        isDynamicAddedRoute: false,
    },
    mutations: {
        // 设置token
        setTooken(state, data) {
            state.token = data;
            localStorage.setItem(process.env.VUE_APP_TOKEN_NAME, data);
        },
        // 设置登录状态
        setLoginState(state, flag) {
            state.isLogin = flag;
            localStorage.setItem("VUE_ADMIN_ISLOGIN",flag);
        },
        // 处理退出登录
        logout(state) {
            state.isLogin = false;
            localStorage.removeItem("VUE_ADMIN_ISLOGIN");
            state.token = "";
            localStorage.removeItem(process.env.VUE_APP_TOKEN_NAME);
            localStorage.removeItem("user");
            if(state.webSocket != null) state.webSocket.close();
        }
    },
    actions: {
        // 处理登录的业务逻辑
        async handleLogin({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await login(data);
                if (res.code == 200) {
                    //commit("setTooken", res.list.token);
                    commit("setLoginState",true);
                    let user = JSON.stringify(res.data);
                    localStorage.setItem('user',user);
                    localStorage.setItem('VUE_ADMIN_ISLOGIN','true');
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleMenu({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await handleMenu(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleRegist({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await regist(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleGetCode({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await code(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return Promise.reject(res.msg);
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleSlider({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await getSliders(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return Promise.reject(res.msg);
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleAddField({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await addField(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlequeryFields({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryFields(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlequeryClassesByStatus({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryClassesByStatus(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlequeryCourseByStatus({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryCourseByStatus(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlequeryCourseByCourseId({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryCourseByCourseId(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlequeryCourseByClassId({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryCourseByClassId(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlequeryCourseByClassName({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryCourseByClassName(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryTeacherByCourse({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryTeacherByCourseId(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleAddCollect({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await addCollect(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryCollect({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryCollect(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleCancelCollect({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await cancelCollect(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleSubscribeCourse({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await subscribeCourse(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleCancelSubscribeCourse({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await cancelSubscribeCourse(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQuerySubscribeCourse({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await querySubscribeCourse(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleAddAssess({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postAssess(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryAssess({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryAssess(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryChapter({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryChapter(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryTests({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryTests(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleAddReply({ commit, dispatch},data) {
            try {
            // 发送登录的网络请求
                const res = await postReply(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleRecommend({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryRecommend(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleApply({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postApply(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryMyCollect({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryMyCollect(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handlePostUserInfo({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await postUserInfo(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleUpdatePass({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await updatePass(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryNotices({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await queryNotices(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleSetAccept({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await setAccept(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        }
    },
};