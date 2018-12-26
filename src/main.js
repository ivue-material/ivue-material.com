import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import IvueMaterial from 'ivue-material';

import 'ivue-material/dist/styles/ivue.css';
import 'ivue-material/dist/styles/elevation.css';

Vue.use(IvueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
