# IvueSwitch 开关

开/关切换用于切换单个设置选项的状态。 

## 基本用法

状态切换时会触发事件

<iframe width="100%" height="250" src="//jsfiddle.net/qq282126990/q4t6ks9b/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 尺寸

设置```size```为```large```或者```small```使开关变大或变小

<iframe width="100%" height="100" src="//jsfiddle.net/qq282126990/t8sj1n3h/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 文字图标

开关支持自定义内容，建议如果使用2个汉字，将开关尺寸设置为 ```large```

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/mbsp9ogu/embedded/result,html,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 不可用

禁用开关

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/h43e2wmj/2/embedded/result,html,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 加载中

开关操作正在执行中

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/sxyp4wjo/embedded/result,html,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API     

<br>

### props      

| 名称          | 说明                                                   | 类型    | 默认  |      
| ------------- | :----------------------------------------------------- | ------- | :---- |     
| disabled   | 是否禁用开关                                          | Boolean | false |     
| loading   | 加载中的开关                                          | Boolean | false |     
| true-value   | 选中时的值   | String,Number,Boolean | true |     
| false-value   | 没有选中时的值  | String,Number,Boolean | false |  f  
| value   |  指定当前是否开启，可以使用 v-model 双向绑定数据  | String,Number,Boolean | false |    
| size   | 开关的尺寸，可选值为large、small、default或者不写。建议如果使用了2个汉字的文字，使用 large | String,Number,Boolean | - |      


### events        

| 事件名称          | 说明                                                   | 返回值    |        
| ------------- | :----------------------------------------------------- | ------- |         
| on-change   | 开关变化时触发，返回当前的状态           | true or false |       

### slot      

| 名称          | 说明                                                   |      
| ------------- | :----------------------------------------------------- |     
| open   | 自定义显示打开时的内容          |          
| close   | 自定义显示关闭时的内容          |   

