# IvueCarousel 走马灯

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。


## 基本用法


<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/5826g1cm/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自动切换

通过设置属性```autoplay```可以自动轮播,同时可以设置属性```autoplaySpeed```改变自动轮播的时间

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/0t1oehLs/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 综合设置

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/p8k590bx/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API

<br>

### props      

| 名称  | 说明                                                                          | 类型    | 默认  |
| ----- | :---------------------------------------------------------------------------- | ------- | :---- |
| arrow | 切换箭头显示时机，可选值为 hover（悬停），always（一直显示），never（不显示） | String | hover |      
| left-arrow | 用于改变←左切换箭头图片，通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline) 一起使用 | String | keyboard_arrow_left |         
| right-arrow | 用于改变→右切换箭头图片，通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline) 一起使用  | String | keyboard_arrow_right |       
| easing | 改变走马灯切换的动画效果 | String | ease |      
| loop |是否开启循环,用于无缝循环 | Boolean | false |      
| height | 走马灯高度，可填 auto 或具体高度数值，单位 px | String | auto |      
| value | 幻灯片的索引 |  Number | 0 |      
| autoplay | 是否自动切换 |  Boolean | false |      
| autoplay-speed | 自动切换的时间间隔，单位为毫秒 |  Number | 2000 |      
| dots |  指示器(dots)的位置，可选值为 inside （内部），outside（外部），none（不显示） |  String | inside |      
| radius-dot |  是否显示圆形指示器(dots) |  Boolean | false |       
| trigger | 指示器(dots)的触发方式，可选值为 click（点击），hover（悬停） |  String | click |        


### events      

| 事件名称          | 说明                                                   | 返回值    |       
| ------------- | :----------------------------------------------------- | ------- |      
| on-change   | 幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引           | oldValue, value |         
| current-index   | 当前激活的幻灯片的索引          | currentIndex |       



