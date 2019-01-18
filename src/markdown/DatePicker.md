# DatePicker 日期/月份选择器

选择日期，支持年、月、日期类型，直观表示。       

<br>

日期选择器有两种方向变化，纵向（默认）和横向，通过设置```landscape```设置日期选择器横向。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/5szq12k6/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 颜色

可以使用```color```和```header-color```设置设置其他区域(日期，月份，年份)选择颜色和设置头部标签颜色，如果未提供```header-color```，则```header```将使用```color```值。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/tp7uvmgL/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 允许的日期

通过设置```allowed-dates```属性，您可以使用函数指定允许的日期。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/adtwr14z/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 多选

日期选择器现在可以通过设置```multiple```属性选择多个日期。 如果使用多个日期选择器，则期望其```v-model```为```Array```。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/z1wfLuyx/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 设置选择器宽度

通过设置```full-width```可以使选择器宽度设置为```100%```。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/8ag6j2yc/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 便签

通过设置```note```标记需要注意的日期，其期望是```Array```或```Function```，设置```note-color```改变标记需要注意的日期的颜色。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/rvtxe2f3/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 国际化

日期选择器通过 JavaScript Date 对象支持国际化。 使用```locale```指定 BCP 47 语言标记。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/0q2dv9p7/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 图标

你可以覆盖选择器中的默认图标。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/gzn5p6ow/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 只读

通过设置属性```readonly```禁用选择新日期。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/v4wax8n7/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 显示为月份

通过设置```type```为```month```，让选择器初始显示为月份

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/jLotfa1g/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 日期跟随改变

通过设置```reactive```为```true```，点击月份或年份让选择器日期跟随改变。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/zrg6dfc2/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 可选择最大/最小日期

通过设置```max```或```min```，设置最大/最小可选择日期。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/15hq2rf6/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义标题日期格式

通过设置```title-date-format```，自定义标题的日期显示，其期望是一个函数。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/56j42smu/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义标题年份格式

通过设置```title-year-format```，自定义标题年份格式显示，其期望是一个函数。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/rqjs9v4a/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义日期格式

通过设置```day-format```，自定义日期格式显示，其期望是一个函数。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/hxbod3wk/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义表头部日/月格式

通过设置```header-date-format```，自定义表头部日/月格式显示，其期望是一个函数。

<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/k6L3xcya/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API
<br>

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| landscape    | 日历方向,纵向（默认）和 横向 | Boolean | false     |
| full-width    | 指定```IvueDatePicker```的宽度是否为 100% | Boolean | false     |
| width    | 指定```IvueDatePicker```的宽度 | Number, String | 290     |
| multiple    | 可以选择多个月或者多个日,使用```multiple```那么 ```v-modul``` 或者 ```value``` 必须为数组 | Boolean | false     |
| type    | 日历显示的类型,```date```(默认日期) 和 ```month```(月期)| String | date     |
| value    | 设置需要显示的日期或者月期 | Array, String | -     |
| locale    | 指定BCP 47语言标记 | String | en-us   |
| min    | 设置最小可选择日期 | String | -   |
| max    | 设置最大可选择日期 | String | -   |
| show-current    | 是否显示当前日期 | Boolean, String | true   |
| note    |用于标记需要注意的日期 | Array, Function | -   |
| note-color    | 改变标记需要注意的日期的颜色 | String, Function, Object | warning   |
| first-day-of-week    | 设置日历一周的第一天 | String, Number | 0   |
| year-icon    | 为年份标题添加图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用 | Strin | -   |
| prev-icon    | 为月份选择按钮(左侧按钮)设置图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用| String | chevron_left  |
| next-icon    | 为月份选择按钮(右侧按钮)设置图标,通常与图标库 [material.io](https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline)一起使用| String | chevron_right  |
| readonly    | 设置日历是否只读，设置后所有操作将禁用 | Boolean | -   |
| reactive    | 点击月份或者年份时月份或年份是否跟随改变 | Boolean | -   |
| picker-date    | 您可以观察```pickerDate```，它是显示的月/年（取决于选择器类型和活动视图），以便在更改时执行某些操作 | String | -   |
| header-color    | 设置头部标签颜色 | String | -   |
| color    | 设置其他区域(日期，月份，年份)选择颜色 | String | -   |
| no-title    | 设置是否隐藏日历头部 | Boolean | -   |

### events      
  
| 事件      | 说明                     | 类型    | 返回值 |
| --------- | :----------------------- | :------ | :----- |
| input | 日历日期改变时触发 | String | -  |
    
### functions      
  
| 事件      | 说明                     | 类型    | 
| --------- | :----------------------- | :------ | 
| title-date-format | 自定义标题日期格式 | Function |
| title-year-format | 自定义标题年份格式 | Function |
| day-format    | 自定义日期格式| Function | -   |
| header-date-format    | 自定义表头部日/月格式| Function | -   |
| allowed-dates    | 使用函数指定允许选择的日期 | Function | -   |
