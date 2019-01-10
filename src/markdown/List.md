# IvueList 列表

列表将多个行项垂直显示为单个连续元素。    
组件用于显示信息，它可以包含一个头像、内容、操作、列表组标题等等。列表也可以包含子元素并在侧边栏（sidebar）使用。     
列表项可以包含交互事件，例如click和mousedown事件。

## List

头像和列表项标题的组合

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/z89qvrbo/embedded/result,html,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

头像和三行的组合

对于3行的列表，列表项副标题内容占两行的时候如果超出范围则以省略号形式截断文字。
<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/bwu71t50/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 列表操作

列表项将根据给定的交互类型呈现不同的类型。    

如果传递```href```属性，该项将自动呈现```a```

如果您传递其中一个事件，该选项将自动呈现```button```：

* click
* dblclick
* mousedown
* mouseup

<iframe width="100%" height="320" src="//jsfiddle.net/qq282126990/k0ba14nh/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 列表扩展

列表可以使用扩展面板来显示更多选项

<iframe width="100%" height="250" src="//jsfiddle.net/qq282126990/2stxwznv/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API
<br>

### props    

| 名称             | 说明                                                                                                                          | 类型    | 默认  |
| ---------------- | :---------------------------------------------------------------------------------------------------------------------------- | ------- | :---- |
| ivue-expand-single | 如果设置为true,则一次最多可扩展一个扩展列表项。扩展后的列表将在展开另一个列表时折叠，前提是 IvueListItem 开启了 ivue-expand | Boolean | false |


### IvueListItem 列表项 API

列表项将根据给定的交互类型呈现不同的标记。      

如果您传递其中一个事件，该项目将自动呈现button：
* click   
* dblclick   
* mousedown   
* mouseup    

如果传递```href```属性，该项将自动呈现```a```标记。    

```router-link```可以在这里使用。这将呈现一个```a``标签。

API

##### props      

| 名称          | 说明                                                   | 类型    | 默认  |
| ------------- | :----------------------------------------------------- | ------- | :---- |
| ivue-expand   | 启用扩展面板                                          | Boolean | false |
| ivue-expanded | 显示/隐藏扩展面板的道具。应与```.sync```修饰符一起使用 | Boolean | false |
