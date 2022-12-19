import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import IvueMaterial from 'ivue-material';

import Hljs from 'highlight.js';

import 'ivue-material/dist/styles/ivue.css';
import 'ivue-material/dist/styles/layout.css';
import 'ivue-material/dist/styles/elevation.css';
import 'ivue-material/dist/styles/color.css';
import 'highlight.js/styles/xcode.css';

import 'material-icons/iconfont/material-icons.css';

Vue.use(IvueMaterial);
Vue.config.productionTip = false;

Vue.directive('highlight', {
  inserted: function (e) {
    let blocks = e.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
  }
});


// 判断移动设备
let ua = navigator.userAgent;
let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
let isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
let isAndroid = ua.match(/(Android)\s+([\d.]+)/);
let isMobile = isIphone || isAndroid;

if (isMobile) {
  Vue.isMobile = true;
}
else {
  Vue.isMobile = false;
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
