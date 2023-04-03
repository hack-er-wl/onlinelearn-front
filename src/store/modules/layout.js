export default {
    state: {
        menus:[],
        isExpand: true,
        isReg:false,
        Hide:false,
        isHide:false,
        perHide:false,//用户编辑
        pasHide:false,//修改密码
        moneyHide:false,//充值
        callHide:false,
        isDot:false,
        show:[false,true,true,true],
        videoUrl:'',
        slider:[],
        fields:[],
        hotCourse:[],
        newCourse:[],
        results:[],
        course:{},
        teacher:{},
        chapters:[],
        recCourses:[],
        subCourse:[],
        myCollect:[],
        myOrder:[],
        assesses:[],
        notices:{accept:[],no_accept:[]},
        tests:[],
        ranks:[],
        assessid:'',
        acceptid:'',
        isDark: localStorage.getItem("vueuse-color-scheme") == "dark" ? true : false || false,},
    mutations: {
        updateIsExpand(state, flag) {
            state.isExpand = flag;
        },
        setIsDark(state, theme) {
            state.isDark = theme;
        },
    },
};