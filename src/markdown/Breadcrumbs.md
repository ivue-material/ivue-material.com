# IvueBreadcrumbs面包屑


```IvueBreadcrumbsItem```组件是一个页面导航辅助器。它可以接受一个```Material Icons```图标或字符作为分隔符。一个包含字段```href```，```text```和```disabled```的对象数组传递给组件```items```。此外，还有一个常规插槽用于更多地控制面包屑的使用```IvueBreadcrumbsItem```      


## 基础

默认情况下，面包屑使用文本分隔符。也可以是任何字符串。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/18mLr0vh/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 图标分隔符

面包屑可以使```Material Icons```中的任何图标作为分隔符

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/qkw5gz1j/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 选项插槽

常规插槽用于更多地控制面包屑的使用

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/g5mde61p/embedded//result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API

### props       
      
| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |      
| divider    | 分隔符 | String | /     |      
| justify-center    | 中间对齐面包屑 | Boolean | -     |       
| justify-end    | 尾部对齐面包屑 | Boolean | -     |      

### slots       
      
| 属性          | 说明                             |      
| ------------- | :------------------------------- |     
| default    | Vue默认原生插槽|      


### IvueBreadcrumbsItem 面包屑子项

用于更多地控制面包屑的使用

API

### props       
      
| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |       
| disabled    | 当前面包屑是否处于禁用状态 | Boolean | false     |     
| tag    | ```IvueBreadcrumbsItem```渲染的标签tag | String | a     |       
| to    | ```vue-router```导航 | String,Object | -     |       
| href    | ```a```标签链接跳转 | String,Object | -     |      
| target    | 用于设置```a``` 链接的 ```target``` 属性 | String | _self    |      
| replace    | 调用 ```router.replace()``` | Boolean | -    |      
| nuxt    | 启用nuxt.js的导航 (前提是使用了nuxt.js ) | Boolean | -    |      
| exact-active-class    |  当链接被精确匹配的时候应该激活的```class``` | String | -    |       
| append    |  在当前 (相对) 路径前添加基路径 | Boolean | -    |       
| active-class    | 链接激活时使用的 CSS 类名  | String | -    |       
| exact    | "是否激活" 默认类名的依据是 inclusive match (全包含匹配)。 举个例子，如果当前的路径是 /a 开头的，那么 ```<router-link to="/a">``` 也会被设置 CSS 类名。  | Boolean | -    |        

### slots       
      
| 属性          | 说明                             |
| ------------- | :------------------------------- | 
| default    | Vue默认原生插槽|

