import {
    queryClassAll, queryTestAll,
    queryCourseAll, queryMenuAll,
    queryMessageAll, queryRuleAll,
    querySliderAll,
    queryTeacherAll,
    queryUserAll, login
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
        tests:[],
        editStatus:false,
        editCheck:false,
        editCourse:{},
        messages:[],
        sliders:[],
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
        }
    }
}