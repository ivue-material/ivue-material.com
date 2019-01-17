# Tabs 标签页

组件用于隐藏可选项目后面的内容。这也可以用作页面的伪导航     

## 基本用法

基本用法，作为页面的伪导航。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/1n356yjx/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 固定选项卡

通过设置属性```fixed-tabs```设置一个较小的宽度，并将一个新的最大宽度应用于```ivue-tab-item```。选项卡标签```ivue-tab```将自动居中。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/871rpd9g/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 标签右对齐

通过设置属性```right```将标签向右对齐

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/783koq94/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 分页

如果选项卡标签溢出它们的容器，分页控件将会出现

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/r4fp1gLw/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义图标

```prev-icon```和```next-icon```可以用来设置分页器的自定义图标

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/tbhdwaq9/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API
<br>

### ivue-tabs props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| value    | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据 | String,Number | 默认为第一项     |
| height   | 导航高度  | String,Number | -    |
| centered   | 导航内容居中  | Boolean | -    |
| right   | 导航内容向右  | Boolean | -    |
| slider-color   | 滑动条颜色  | String | -    |
| hide-slider   | 滑动条隐藏  | Boolean | -    |
| show-arrows   | 是否显示导航栏箭头  | Boolean | -    |
| next-icon   | 导航栏箭头右边图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用  | String | chevron_right    |
| prev-icon   | 导航栏箭头左边图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用  | String | chevron_left    |


### ivue-tab props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| disabled    | 是否禁用当前项 | Boolean | false      |
| ripple-disabled    | 是否禁用涟漪效果 | Boolean | false      |
| ripple-centered    | 是否居中涟漪效果 | Boolean | false      |
        

### ivue-tabs-slider props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| color    | 滑动条颜色 | String | #fff      |
        
### ivue-tab-item props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| transition    | 滑动动画 | String | tab-transition      |
        