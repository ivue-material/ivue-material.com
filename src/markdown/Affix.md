# Affix 图钉

使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。

## 基础用法

当元素不可见时，直接固定在最顶端。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/b0rdnjk8/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 顶部偏移

当滚动到一定距离时再固定。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/u7b5e4dw/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 固定在底部 

在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。

注意，```offset-top```和```offset-bottom```只可以设置一个，如果都设置，会使用```offset-top```。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/v1u28b3z/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 固定状态改变时的回调

当固定状态发生改变时，会触发事件。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/3brq1tkz/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| offset-top    | 距离窗口顶部达到指定偏移量后触发 | Number | 0      |
| offset-bottom | 距离窗口底部达到指定偏移量后触发 | Number | -      |
           
### events      
  
| 事件      | 说明                     | 类型    | 返回值 |
| --------- | :----------------------- | :------ | :----- |
| on-change | 在固定状态发生改变时触发 | Boolean | false  |
    