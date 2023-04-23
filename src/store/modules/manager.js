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
    broadNotice,
    handleUpdateTeacher,
    addRule,
    handleUpdateCourse,
    queryFields,
    handleUpdateClass,
    handleUpdateCourseStatus, handleDeleteRule, handleUpdateRule, addSlider, addAvatar, addMenu, queryOrderAll
} from "@/api/manager";

export default {
    state: {
        isLogin:localStorage.getItem("VUE_ADMIN_ISLOGIN") || false,
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
        isEditRule:false,
        editClassStatus:false,
        editCheck:false,
        checkStatus:false,
        editCourse:{},
        editClass:{},
        editTeacher:{},
        editRule:{},
        messages:[],
        sliders:[],
        avatars:[],
        menus:[],
        rules:[],
        orders:[],
        sliderUrl:"",
        avatarUrl:"",
        adminIsDark: localStorage.getItem("vueuse-admin-color-scheme") == "dark" ? true : false || false,
    },
    mutations:{
        setAdminIsDark(state, theme) {
            localStorage.setItem("vueuse-admin-color-scheme",theme ?"auto":"light");
            state.adminIsDark = theme;
        },
        // 设置登录状态
        setAdminLoginState(state, flag) {
            state.isLogin = flag;
            localStorage.setItem("VUE_ADMIN_ISLOGIN",flag);
        },
        mlogout(state) {
            state.isLogin = false;
            localStorage.removeItem("VUE_ADMIN_ISLOGIN");
            state.token = "";
            localStorage.removeItem(process.env.VUE_APP_TOKEN_NAME);
            localStorage.removeItem("admin");
            if(state.webSocket != null) state.webSocket.close();
        }
    },
    actions:{
        // 处理登录的业务逻辑
        async handleAdminLogin({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await login(data);
                if (res.code == 200) {
                    //commit("setTooken", res.list.token);
                    commit("setAdminLoginState",true);
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
        async handleQueryOrderAll({commit,dispatch},data){
            // 发送登录的网络请求
            try {
                const res = await queryOrderAll(data);
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
        async handlequeryFieldsAll({ commit, dispatch},data) {
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
        async handleAddMenu({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await addMenu(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleAddSlider({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await addSlider(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleAddAvatar({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await addAvatar(data);
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
        async handleUpdateCourse({ commit, dispatch},data) {
            // 发送登录的网络请求,审核课程
            try {
                const res = await handleUpdateCourse(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleUpdateCourseStatus({ commit, dispatch},data) {
            // 发送登录的网络请求,更新状态
            try {
                const res = await handleUpdateCourseStatus(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleUpdateClass({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await handleUpdateClass(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleUpdateRule({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await handleUpdateRule(data);
                if (res.code == 200) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async handleDeleteRule({ commit, dispatch},data) {
            // 发送登录的网络请求
            try {
                const res = await handleDeleteRule(data);
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