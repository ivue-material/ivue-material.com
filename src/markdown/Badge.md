# Badge 徽标

主要用于通知未读数的角标，提醒用户点击。

## 基本用法

最简单的使用方法。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/t8oxrh7j/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 小红点

设置属性```dot```可以吧为徽标设置为小红点

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/rh1u4sb9/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 封顶数字

通过设置```overflow-count```属性设置一个封顶值，当超过时，会显示```${overflowCount}+```。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/g9rcf8Ls/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 是否展示 Badge

设置属性```show```是否为true或者false，来显示徽标。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/8uy0vaxj/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>




## API

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |
| count    | 显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏 | Number | -      |
| overflow-count    | 展示封顶的数字值 | Number， String	 | 99      |
| dot    | 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0 | Boolean	 | false      |
| offset    | 设置状态点的位置偏移，格式为 [x, y] |Array	 | -      |
| show-zero    | 当数值为 0 时，是否展示 Badge  |Boolean	 | false     |
| text    | 自定义内容  | String	 | -     |
| color    | 设置badge的颜色  | String	 | #ed4014     |
| show    | 是否显示badge  | Boolean	 | true     |

