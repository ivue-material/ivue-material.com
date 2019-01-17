### Progress 进度条

展示操作或任务的当前进度，比如上传文件。使用```ivue-progress-linear```或者```ivue-progress-circular```可把进度条变成直线或者圆形。

## 直线进度条

基本用法，处在不同状态下的进度条，当 ```percent``` 为 ```100``` 时，自动将状态置为 ```success```。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/7xqoye2d/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 圆形进度条

基本用法，使用```ivue-progress-circular```组件可以把进度条变为圆形。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/ow72mug6/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 旋转

通过设置属性```indeterminate```使圆形进度条永久旋转。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/ztrpho7e/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 自定义样式

通过自定义```slot```和属性```height```改变进度条效果。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/bvax6eh3/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>



## ivue-progress-linear  API
<br>

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| status    | 状态，可选值为normal、active、wrong、success | String | normal      |               
| height    | 进度条的高度，单位 px | Number | 10      |          
| percent    | 百分比 | Number | 0      |         
| success-percent    | 已完成的分段百分比 | Number | 0      |         
| hide-text    | 隐藏文字 | Boolean | false      |           


## ivue-progress-circular  API
<br>

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| status    | 状态，可选值为normal、active、wrong、success | String | normal      |               
| rotate    | 旋转角度 | Number | 0      |          
| size    | 圆圈大小，单位 px | Number | 50      |          
| width    | 圆圈的宽度 | Number | 4      |          
| percent    | 百分比 | Number | 0      |          
| hide-text    | 隐藏文字 | Boolean | false      |           
| indeterminate    | 一个不确定的进度圆环永远循环动画 | Boolean | false      |           
           
