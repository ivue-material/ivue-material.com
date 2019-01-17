# AutoComplete 自动完成

该组件提供简单灵活的预先输入功能。这在搜索大型数据集或甚至从API动态请求信息时非常有用。

## 基本用法

通过 ```data``` 设置自动完成的数据源。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/6akstmgj/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义选项

除了使用 ```data```，还可以直接传入 ```ivue-option``` 组件作为 ```slot``` 使用，这样可以自定义显示效果。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/zoyhq3Lf/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 不区分大小写

不区分大小写的 ```AutoComplete```，及过滤的用法。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/ejbznw5q/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API
<br>

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| value    | 绑定的值，可使用 v-model 双向绑定 | String, Number | -      |           
| data    | 自动完成的数据源 | Array | -      |                  
| filter-method    | 是否根据输入项进行筛选。当其为一个函数时，会接收 value 和 option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | Function, Boolean | -      |                  
| placeholder    | 输入框占位文本	 | String | 请输入数据      |                  
| disabled    | 输入框禁用输入	 | Boolean | false      |                  
| clearable    | 是否显示清除按钮	 | Boolean | false      |                  
| clear-icon    | 输入框清除图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用	 | String | cancel      |                  

### events      
  
| 事件      | 说明                     |  返回值 |
| --------- | :----------------------- | :----- |
| on-select | 被选中时调用，参数为选中项的 ```value``` 值 |  false  |
| on-focus| 获取焦点时触发 |  event  |
| on-blur| 失去焦点时触发 |  event  |
| on-search | 搜索补全项的时候调用 |  value  |
| on-change | 选中 ```option```，或 ```input``` 的 value 变化时，调用此函数 |  value  |
    
