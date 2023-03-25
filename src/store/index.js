import { createStore } from "vuex";
// 用户相关的store
import userStore from "../store/modules/user";
import layoutStore from "../store/modules/layout";
import managerStore from "../store/modules/manager";
import teacherStore from "../store/modules/teacher"
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userStore,
    layoutStore,
    managerStore,
    teacherStore
  },
});
