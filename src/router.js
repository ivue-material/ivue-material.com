import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Install from './views/Install.vue'
import StartUse from './views/StartUse.vue'
import Color from './views/Color.vue'
import Elevation from './views/Elevation.vue'
import Layout from './views/Layout.vue'
import IvueContent from './views/IvueContent.vue'
import IvueButton from './views/IvueButton.vue'
import IvueIcon from './views/IvueIcon.vue'
import IvueList from './views/IvueList.vue'
import IvueCarousel from './views/IvueCarousel.vue'

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 路径错误时跳转
    {
      path: '/home',
      name: 'error',
      alias: '*',
      component: Home
    },
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
    },
    // elevation
    {
      path: '/components/elevation',
      name: 'elevation',
      component: Elevation
    },
    // Layout
    {
      path: '/components/layout',
      name: 'layout',
      component: Layout
    },
    // content
    {
      path: '/components/ivue-content',
      name: 'ivue-content',
      component: IvueContent
    },
    // button
    {
      path: '/components/ivue-button',
      name: 'ivue-button',
      component: IvueButton
    },
    // icon
    {
      path: '/components/ivue-icon',
      name: 'ivue-icon',
      component: IvueIcon
    },
    // IvueList
    {
      path: '/components/ivue-list',
      name: 'ivue-list',
      component: IvueList
    },
    // IvueCarousel
    {
      path: '/components/ivue-carousel',
      name: 'ivue-carousel',
      component: IvueCarousel
    }
  ]
})
