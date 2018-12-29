import Vue from 'vue'
import Router from 'vue-router'
import Install from './views/Install.vue'
import StartUse from './views/StartUse.vue'
import Color from './views/Color.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // 安装
    {
      path: '/',
      alias: '/install',
      name: 'install',
      component: Install
    },
    // 开始使用
    {
      path: '/start-use',
      name: 'start-use',
      component: StartUse
    },
    // 颜色
    {
      path: '/color',
      name: 'color',
      component: Color
    }
  ]
})
