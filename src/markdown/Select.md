# IvueSelect选择器

使用模拟的增强下拉选择器来代替浏览器原生的选择器。选择器支持单选、多选、搜索，以及键盘快捷操作。 ```ivue-select```选择器应该与```ivue-option```或者```ivue-option-group```组件一起使用。选择将始终对```v-model``` ```prop```的变化做出反应。

## 基础

使用```v-model```双向绑定数据，单选,```value```只支持字符串或数字类型，多选，只支持数组类型，组件根据```ivue-option```的```value```返回数据。在展开选择器后，可以使用键盘的```up```和```down```快速上下选择，按下```enter```选择选项，按下```esc```收起选择器。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/g4z3a2hv/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 多选

通过设置属性```multiple```可以开启多选模式。多选模式下，```model``` 接受数组类型的数据，所返回的也是数组。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/86ho4k03/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 可搜索

通过设置```filterable```可以开启搜索框，单选和多选都支持搜索模式。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/79d4zxoe/3/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 禁用

通过给```ivue-select```设置属性```disabled```禁用整个选项器。     
通过给```ivue-option```设置属性```disabled```可以禁用某个选项。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/fw8od6v0/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 分组

使用```ivue-option-group```可将选项进行分组。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/cf1r93wh/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API

### props       
      
| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |      
| value    | 指定选中选项的```value```值，可以使用```v-modul```双向绑定数据。单项选择只接受 ```String```和```Number```,多选时只接受```Array``` | String, Number, Array | -     |      
|  multiple   | 是否开启多选 | Boolean | false    |       
|  label-and-value   | 在返回选项时，是否将label和value一起返回，默认只返回 value | Boolean | false    |       
|  disabled   | 是否禁用该组件 | Boolean | false    |       
|  clearable   | 是否可以清空选项，只在单选时有效 | Boolean | false    |  
|  not-find-text   | 选项列表没有找到数据时的提示 | String | 无匹配数据    |   
|  filterable   | 是否开启搜索 | Boolean | false    |         
|  arrow-down-icon   | 下拉选项图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用 | String | keyboard_arrow_down    |       
|  reset-select-icon   | 重置选择选项图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用| String | cancel    |         
|  multiple-close-icon   | 多项选择选项关闭图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用 | String | close    |        


### events      
  
| 事件      | 说明                     | 类型    | 返回值 |
| --------- | :----------------------- | :------ | :----- |
| on-menu-open | 下拉框展开或收起时触发 | Boolean | -  |
| on-filter-query-change | 搜索词改变时触发 | String | -  |
| on-change | 选中的Option变化时触发,如需返回```label```,请设置```labelAndValue```选项 | String | -  |
| on-clear | 点击清空按钮时触发 | - | -  |


### ivue-option

API

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |            
| disabled-ripple    | 启用/禁用涟漪 | Booelan | true     |         
| value| 选项值，默认根据此属性值进行筛选，必填 | String, Number | -      |        
| label| 选择显示的内容，默认会读取 slot,无 slot 时，优先读取该 label 的值,无 label 时，读取 value。 | String, Number | -      |             
| disabled| 是否禁用当前选项 | Boolean | false      |        
 

### ivue-option-group

API

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |            
| label| 分组的组名 | String | -      |        
 



