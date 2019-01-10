# IvueBottomNav 底部导航

```IvueBottomNav```组件是一个导航栏的替代方案。它主要用于移动端，并有两个变种，图标+文本和隐藏按钮文本直到被激活。    


## 基础

虽然底部导航用于与```vue-router```一起使用，但你也可以使用```active.syncprop```以编程方式控制按钮的活动状态。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/sr34v25c/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 转变

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/6ou983nc/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 开关
通过设置```value```来现实组件，你也可以使用```v-model```来控制显示状态。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/y6fcts59/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API

### props       
      
| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |     
| active    | 当前激活的导航 | Number, String | -      |     
| height | 底部导航栏高度 | Number, String | 56    |    
| value | 底部导航栏是否可见(注意：父级节点必须设置 overflow: hidden) | Boolean | false |      
| color | 底部导航栏背景颜色 | String | null |     
| position | 底部导航栏定位(```absolute``` ```fixed```) | String | null |      
| shift | 不是激活状态时隐藏按钮上的文字 | Boolean | false |      
        
### slots       
      
| 属性          | 说明                             |
| ------------- | :------------------------------- | 
| default    | Vue默认原生插槽|

### events       
      
| 属性          | 说明                             |用法   |     
| ------------- | :------------------------------- | :----- |      
| update:active    | 设置激活那个导航| this.$emit('update:active', item) |      
| on-change    | 获取当前激活那个导航 |  - |




