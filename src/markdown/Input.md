# Input 输入框

基本输入框组件，支持 ```input``` 和 ```textarea```，并在原生控件基础上进行了功能扩展。

## 基本用法

可以使用 ```v-model```实现数据的双向绑定。可以直接设置 ```style``` 来改变输入框的宽度，默认 ```100%```。
<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/nhvo4utL/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 可清除

开启属性```clearable```可显示清空按钮。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/vrp3kd5L/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 输入框前缀和后缀图标

可以通过设置```prefix```和```suffix```以及```slot```设置前缀和后缀图标

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/tpygk04m/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 文本域

通过设置属性 ```type``` 为 ```textarea``` 来使用文本域，用于多行输入。    
通过设置属性 ```rows``` 控制文本域默认显示的行数。   

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/tj10dpr9/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 禁用

通过添加```disabled```属性可设置为不可用状态。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/br7ya05v/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>



## API

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| type    | 输入框类型，可选值为 ```text、password、textarea、url、email、date``` | String | text  |    
| value| 绑定的值，可使用 v-model 双向绑定 |  String，Number  | -  |      
| placeholder | 占位文本	 |  String  | -  |       
| clearable | 是否显示清空按钮	 |  Boolean  | false  | 
| clear-icon  | 清空按钮图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用	 |  String  | cancel  |         
| disabled  | 设置输入框为禁用状态	 |  Boolean  | false  |         
| readonly  | 设置输入框为只读	 |  Boolean  | false  |         
| maxlength  | 设置输入框最大输入长度	 |  Number  | -  |         
| spellcheck  | 原生的 spellcheck 属性	 |  Boolean  | -  |         
| autocomplete  | 原生的自动完成功能，可选值为 off 和 on	 |  String  | off  |         
| autofocus  | 自动获取焦点	 |  Boolean  | false  |         
| number  | 将用户的输入转换为 Number 类型	 |  Boolean  | false  |         
| rows  | 文本域默认行数，仅在 textarea 类型下有效	 |  Number  | 2  |         
| prefix  | 输入框头部图标	 |  String  | -  |         
| suffix  | 输入框尾部图标	 |  String  | -  |         
| autosize  | 自适应内容高度,仅在 textarea 类型下有效,可传入对象,如 { minRows: 2, maxRows: 6 }	|  Boolean , Object  | false  |         


### events      
  
| 事件      | 说明                     |  返回值 |
| --------- | :----------------------- |  :----- |
| on-enter | 按下回车键时触发 | event   |
| on-keydown | 原生的 keydown 事件 | event   |
| on-keypress | 原生的 keypress 事件 | event   |
| on-keyup | 原生的 keyup 事件 | event   |
| on-focus | 输入框聚焦时触发 | event   |
| on-blur | 输入框失去焦点时触发 | event   |
| on-change | 数据改变时触发 | event   |
    