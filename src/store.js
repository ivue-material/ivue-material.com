import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const HIDE_MENU = 'HIDE_MENU'

export default new Vuex.Store({
  state: {
    /**
     * 是否显示菜单导航
     * 
     * @type {Boolean}
     */
    hideMenu: false
  },
  mutations: {
    [HIDE_MENU] (state, HIDE_MENU) {
      state.hideMenu = HIDE_MENU;
      console.log(state)
    }
  },
  actions: {
    setHideMenu ({ commit }, state) {
      commit(HIDE_MENU, state);
    }
  }
})
