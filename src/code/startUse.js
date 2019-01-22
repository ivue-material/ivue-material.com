let code = {};


code.main = `import Vue from 'vue';
import App from './App.vue';
import IvueMaterial from 'ivue-material';

Vue.use(IvueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
`;

code.plugins = `npm install babel-plugin-import 

<!-- .babelrc -->

"plugins": [
      [
            "import",
            {
                  "libraryName": "ivue-material",
                  "libraryDirectory": "src/components"
            }
      ]
]
`;


code.import = `import {IvueButton} from 'ivue-material';

Vue.component('IvueButton',IvueButton);
`;

code.styles = `import 'ivue-material/dist/styles/ivue.css';`;

export default code;
