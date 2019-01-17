# StartUse 开始使用

## 引入 IVue Material

在 ```webpack``` 入口页面 ```main.js``` 中如下配置：

```
import Vue from 'vue';
import App from './App.vue';
import IvueMaterial from 'ivue-material';

Vue.use(IvueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
```

## 按需引入

需要加入插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 即可实现按需加载组件，减少文件体积。
安装并配置文件 ```.babelrc```：

```
npm install babel-plugin-import 

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
```
然后按需引入组件，减少项目体积

```
import {IvueButton} from 'ivue-material';

Vue.component('IvueButton',IvueButton);
```
      
## 引入样式

```
import 'ivue-material/dist/styles/ivue.css';
```