import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Install from './views/Install.vue'
import StartUse from './views/StartUse.vue'
import Color from './views/Color.vue'
import Elevation from './views/Elevation.vue'
import Layout from './views/Layout.vue'
import Content from './views/Content.vue'
import Button from './views/Button.vue'
import Icon from './views/Icon.vue'
import List from './views/List.vue'
import Carousel from './views/Carousel.vue'
import Switch from './views/Switch.vue'
import BottomNav from './views/BottomNav.vue'
import Breadcrumbs from './views/Breadcrumbs.vue'
import Select from './views/Select.vue'

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
      path: '/components/content',
      name: 'content',
      component: Content
    },
    // button
    {
      path: '/components/button',
      name: 'button',
      component: Button
    },
    // icon
    {
      path: '/components/icon',
      name: 'icon',
      component: Icon
    },
    // list
    {
      path: '/components/list',
      name: 'list',
      component: List
    },
    // carousel
    {
      path: '/components/carousel',
      name: 'carousel',
      component: Carousel
    },
    // Switch
    {
      path: '/components/switch',
      name: 'switch',
      component: Switch
    },
    // BottomNav
    {
      path: '/components/bottom-nav',
      name: 'bottom-nav',
      component: BottomNav
    },
    // Breadcrumbs
    {
      path: '/components/breadcrumbs',
      name: 'breadcrumbs',
      component: Breadcrumbs
    },
    // Select
    {
      path: '/components/select',
      name: 'select',
      component: Select
    }
  ]
})
