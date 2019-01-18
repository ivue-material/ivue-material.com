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

Vue.use(IvueMaterial);
Vue.config.productionTip = false;

Vue.directive('highlight', {
  inserted: function (e) {
    let blocks = e.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
