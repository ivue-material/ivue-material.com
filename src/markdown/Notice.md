# Notice 通知提醒

在界面右上角显示可关闭的全局通知，常用于以下场景：

* 通知内容带有描述信息
* 系统主动推送

## 基本用法

基本用法，默认在```4.5秒```后关闭。如果 ```desc``` 参数为空或不填，则自动应用仅标题模式下的样式。

建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/qcmva7tz/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 提醒类型

带有状态图标的提醒。不同的提示状态：信息、成功、警告、错误

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/5z2o6ruf/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义延迟时间

为 0 则不关闭，也可以使用```IvueNotice.config```全局配置，详情见API。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/x2bzd6oa/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Render 函数

你可以自定义```Render```函数来代替```desc```

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/z8sLmgpv/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API
<br>

### instance     

通过直接调用以下方法来使用组件：

* ```this.$IvueNotice.open(config)```
* ```this.$IvueNotice.info(config)```
* ```this.$IvueNotice.success(config)```
* ```this.$IvueNotice.warning(config)```
* ```this.$IvueNotice.error(config)```      

参数 ```config``` 为对象，具体说明如下：     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| title    | 通知提醒的标题 | String | -      |          
| desc    | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式 | String | -      |          
| render    | 自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容 | Function | -      |          
| duration    | 自动关闭的延时，单位秒，不关闭可以写 0 | Number | 4.5      |          
| name    | 当前通知的唯一标识 | String | 自动      |            
| onClose    | 关闭时的回调 | Function | -      |              


另外提供了全局配置、全局关闭某个通知和全局销毁的方法：        

* ```this.$IvueNotice.config(options)```
* ```this.$IvueNotice.close(options)```
* ```this.$IvueNotice.destroy()```

```javascript
this.$IvueNotice.config({
    top: 50,
    duration: 3
});
```     

  
| 属性      | 说明                     | 类型    | 默认值 |
| --------- | :----------------------- | :------ | :----- |       
| top | 通知组件距离顶端的距离，单位像素 | Number | 24  |      
| duration | 默认自动关闭的延时，单位秒 | Number | 4.5  |      
