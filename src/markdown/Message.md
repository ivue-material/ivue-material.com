# Message 全局提示

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

## 基本用法

基本用法，默认在1.5秒后消失

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/mj3po5L6/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 提醒类型

带有状态图标的提醒。不同的提示状态：信息、成功、警告、错误

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/drwfyqso/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 加载中

当前提示现实为 ```Loading``` 的状态，并异步在某个时机移除。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/4n2efhs5/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义延迟时间

为 0 则不关闭，也可以使用```IvueMessage.config```全局配置，详情见API。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/6y5o2g4q/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 可关闭

将参数设置为一个对象，并指定 ```closable``` 为 ```true``` 后可以手动关闭提示，完整参数详见API。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/s3ay4umb/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Render 函数

使用 Render 函数自定义内容。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/93yjqrb8/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API
<br>

### instance     

通过直接调用以下方法来使用组件：

* ```this.$IvueMessage.info(config)```
* ```this.$IvueMessage.success(config)```
* ```this.$IvueMessage.warning(config)```
* ```this.$IvueMessage.error(config)```      
* ```this.$IvueMessage.loading(config)```      


参数 config 为对象，具体说明如下：     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| content    | 	提示内容 | String | -      |          
| render    | 自定义描述内容，使用 Vue 的 Render 函数 | Function | -      |          
| closable    | 是否显示关闭按钮	 | Boolean | false      |              
| duration    | 自动关闭的延时，单位秒，不关闭可以写 0 | Number | 1.5      |          
| onClose    | 关闭时的回调 | Function | -      |              


另外提供了全局配置和全局销毁的方法：        

* ```this.$IvueMessage.config(options)```
* ```this.$IvueMessage.destroy()```

```javascript
this.$IvueMessage.config({
    top: 50,
    duration: 3
});
```     
  
| 属性      | 说明                     | 类型    | 默认值 |
| --------- | :----------------------- | :------ | :----- |       
| top | 通知组件距离顶端的距离，单位像素 | Number | 24  |      
| duration | 默认自动关闭的延时，单位秒 | Number | 1.5  |      
    

