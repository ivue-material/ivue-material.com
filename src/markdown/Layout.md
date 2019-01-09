# Layout 布局

响应式布局适应任何可能的屏幕尺寸。此UI指南包括一个灵活的网格，可确保布局之间的一致性，有关内容如何在不同屏幕上回流的断点详细信息，以及应用程序如何从小屏幕扩展到超大屏幕的说明。    

默认情况下，您可以创建无装饰布局或使网格系统计算每个屏幕大小的最佳边距大小。     

布局系统使用行和列的概念。您可以创建大小的列。您将能够为每个列设置大小，即使在嵌套列上也是如此。

<br>

| 名称   | 说明                                                            | size        |
| ------ | :-------------------------------------------------------------- | ----------- |
| xsmall | 适用于宽度最大为600px的屏幕。适用于肖像中的小型，中型和大型手机 | **<600px**  |
| small  | 适用于宽度介于600px和960px之间的屏幕                            | **960px**   |
| medium | 适用于宽度介于960px和1280px之间的屏幕                           | **1280px**  |
| large  | 适用于宽度介于1280像素到1920像素之间的屏幕                      | **1920px**  |
| xlarge | 适用于宽度超过1920px的屏幕                                      | **>1920px** |


## 列布局

要开始使用布局，您需要做的是创建一个ivue-layout父元素，它将包含一个列表ivue-layout-item。您可以设置所需的列数：

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/s5cu8qhr/1/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<br>
<br>

默认情况下，布局之间没有空格，这对于常规布局有点不好，例如卡片列表,您可以使用 ```ivue-gutter``` 为自动计算元素之间的空间，这些空间基于屏幕宽度：

| 屏幕尺寸 | 间隔 |
| -------- | :--- |
| xsmall   | 8px  |
| small    | 16px |
| medium   | 24px |
| large    | 48px |

<br>

查看这段代码并调整浏览器大小以查看更改：
<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/eqxaf0g3/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<br>

同时列布局也适用于嵌套布局：

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/qr6v4eux/1/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 对齐

使用 ```ivue-alignment-[horizontal]-[vertical]``` 类，例如 ```ivue-alignment-top-center``` 。对齐适用于父元素，并将影响所有子项的位置.

<iframe width="100%" height="400" src="//jsfiddle.net/qq282126990/8m1eadnf/17/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 尺寸

布局系统根据项目数量计算子项大小。但是如果你想为每个项目设置尺寸。只需在项目中设置一个 ```ivue-size-[amount]``` ，例如ivue-size-30。总是以％表示的大小可以是5的倍数，也可以接受值33和66。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/m1a2y3Lx/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 响应

使用流体布局，你可以根据断点名称更改它们，加入类 ```ivue-[breakpoint]-size-[amount]``` 布局引擎将发挥神奇作用。尝试调整浏览器的大小：


<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/t80v61o3/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


### 隐藏元素

在较小的屏幕上隐藏元素的需求是相当普遍的。你可以使用这些 ```ivue-[breakpoint]-hide``` 类来做到这一点：

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/ufb5vj0q/2/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## API

<br>

### ivue-layout

以下类可以应用于任何HTML元素：

| 名称                   | 说明                                                                                                                                                                                   |
| ---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ivue-gutter            | 在布局项之间启用自动装订线空间                                                                                                                                                         |
| ivue-layout-nowrap     | 默认情况下，布局项将始终包装在父布局下。如果要禁用此行为，请使用此类，但响应性将不起作用                                                                                               |
| ivue-alignment-[x]-[y] | 根据每个坐标的值设置所有子项的对齐方式。只有当x和y都存在时，对齐才有效ivue-alignment-top-center。可能的值是：```top```  ```center``` ```left``` ```space-around``` ```space-between``` |


### ivue-layout-item

以下类可以应用于以下任何HTML元素直接子级 ```ivue-layout``` ：

| 名称                            | 说明                                                                                                                |
| ------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| ivue-size-[amount]              | 设置特定item的大小。数量可以是五的倍数， 例如ivue-size-25。还可以接受33,66和100以便于原型设计                       |
| ivue-[breakpoint]-size-[amount] | 将大小设置为特定 breakpoint 上的特定项。可能的值是：```xsmall```  ```small``` ```medium``` ```large``` ```xlarge``` |


### ivue-hide

以下类可以应用于任何HTML元素：

| 名称                   | 说明                                                                                                          |
| ---------------------- | :------------------------------------------------------------------------------------------------------------ |
| ivue-[breakpoint]-hide | 隐藏特定断点上的特定元素。可能的值是：```xsmall``` 、 ```small``` 、 ```medium``` 、 ```large``` 、 ```xlarge``` |
