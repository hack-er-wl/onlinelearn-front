import {
    queryClassAll,
    queryTestAll,
    queryCourseAll,
    queryMenuAll,
    queryMessageAll,
    queryRuleAll,
    querySliderAll,
    queryTeacherAll,
    queryUserAll,
    login,
    queryChooseAll,
    queryOptionAll,
    queryChapterAll,
    queryBarAll,
    queryAvatarAll,
    addField,
    broadNotice, handleUpdateTeacher, addRule
} from "@/api/manager";

export default {
    state: {
        isCollapse:false,
        icon:false,
        users:[],
        teachers:[],
        fields:[],
        classes:[],
        courses:[],
        chapters:[],
        bars:[],
        tests:[],
        chooses:[],
        options:[],
        editStatus:false,
        editCheck:false,
        checkStatus:false,
        editCourse:{},
        editTeacher:{},
        messages:[],
        sliders:[],
        avatars:[],
        menus:[],
        rules:[]
    },
    actions:{
        // 处理登录的业务逻辑
        async handleAdminLogin({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await login(data);
                if (res.code == 200) {
                    //commit("setTooken", res.list.token);
                    commit("setLoginState",true);
                    let admin = JSON.stringify(res.data);
                    localStorage.setItem('admin',admin);
                    localStorage.setItem('VUE_ADMIN_ISLOGIN','true');
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryClassAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryClassAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryCourseAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryCourseAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryChapterAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryChapterAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryBarAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryBarAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryTestAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryTestAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryChooseAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryChooseAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryOptionAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryOptionAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryUserAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryUserAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryTeacherAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryTeacherAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryMenuAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryMenuAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryRuleAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryRuleAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryMessageAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryMessageAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQuerySliderAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await querySliderAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleQueryAvatarAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryAvatarAll(data);
                if (res.code == 200) {
                    return res.data;
                } else {
                    return false;
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
        async handleAddRule({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await addRule(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleBroadNotice({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await broadNotice(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleUpdateTeacher({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await handleUpdateTeacher(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
    }
}