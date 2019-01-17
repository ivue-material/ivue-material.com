# Stepper 步骤条    

组件用于显示步骤进度，引导用户按流程完成任务。       


## 基本用法

组件会根据```current```值自动判断各步骤状态。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/9uztm7pL/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 带图标的步骤条

通过设置```ivue-stepper-step```的```icon```属性可以自定义图标

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/qaevrc30/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 切换步骤

点击下一步按钮可以切换当前进度状态。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/ftoapr2L/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 点击进行下一步

通过点击```ivue-stepper-step```切换当前进度状态

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/ho7waj06/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 垂直方向 

设置属性```direction```为```vertical```在垂直方向展示。

<iframe width="100%" height="400" src="//jsfiddle.net/qq282126990/a3vhr2sc/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 步骤运行错误

设置```ivue-stepper```或者```ivue-stepper-step```的属性```status```为```error```指定当前步骤状态。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/z0mjphc9/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API

<br>

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |         
| current-step    | 当前步骤,从 0 开始计数 | Number | 0      |           
| direction    | 步骤条方向,可选值为```horizontal```（水平）或 ```vertical```（垂直） | String | horizontal      |           
| status    | 当前步骤的状态，可选值为 ```wait```、```process```、```finish```、```error``` | String | process      |           

### ivue-stepper-step 步骤条子组件

通常与```IvueStepper```一起使用

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| status    | 当前步骤的状态，可选值为 ```wait```、```process```、```finish```、```error``` | String | process      |           
| title    | 标题 | String | -      |           
| content    | 内容 | String | -      |           
| icon    | 步骤图标 | String | -      |           
| editable    | 当前步骤是否是否可以通过点击进行下一步 | String | -      |           

