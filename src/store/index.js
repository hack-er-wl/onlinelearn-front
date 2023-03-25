import { createStore } from "vuex";
// 用户相关的store
import userStore from "../store/modules/user";
import layoutStore from "../store/modules/layout";
import managerStore from "../store/modules/manager"
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userStore,
    layoutStore,
    managerStore
  },
});
