# IvueButton 按钮

按钮传达用户触摸它们时将发生的操作。它们可以是平坦的，凸起的，任何色彩辅助类都可以用来改变背景或文字的颜色。

## 用法


<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/jw1ofmqk/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Flat

平面按钮没有框阴影，也没有背景。仅在悬停时显示按钮的背景

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/kwhoceqr/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Raised

凸陷的按钮具有单击时增加的框阴影。这是默认样式

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/3uLksapr/1/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## Depressed

凹陷的按钮仍然保持其背景颜色，但没有框阴影

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/vxuo3dtw/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## Outline

轮廓按钮从应用的当前颜色继承其边框

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/nkabx7js/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Link

按钮将变成一个 ```a``` 连接跳转到 ```href``` 指定的地址

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/bjadq6or/2/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Icon

按钮显示为圆形图标

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/2r3qLe4t/4/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<br>

## API

<br>

##### props   

| 名称             | 说明                                                          | 类型           | 默认      |
| ---------------- | :------------------------------------------------------------ | -------------- | :-------- |
| href             | 在按钮上创建一个锚点。在这种情况下，生成的标签将是 ```<a> ``` | String         | null      |
| type             | 将 type 应用于按钮 - 它不会影响链接                             | String         | button    |
| disabled         | 禁用该按钮并阻止其操作                                        | Boolean        | false     |
| ivue-ripple      | 启用/禁用涟漪效应                                             | Boolean        | false     |
| color            | 定义按钮颜色                                                  | String        | null      |
| flat             | 是否扁平按钮                                                  | Boolean        | -         |
| depressed        | 凹陷的按钮依然保持其背景色，但没有框阴影                      | Boolean        | -         |
| icon             | 按钮显示为圆形图标                                            | Boolean        | -         |
| outline          | 轮廓按钮从当前色彩应用继承他们的边框颜色                      | Boolean        | -         |
| to               | router-link                                                   | String,Object | -         |
| replace          | router-link                                                   | Boolean       | -         |
| append           | router-link                                                   | Boolean       | -         |
| tag              | router-link                                                   | String         | -         |
| active-class      | router-link                                                   | String         | -         |
| exact            | router-link                                                   | Boolean        | undefined |
| event            | router-link                                                   | String, Array  | -         |
| exact-active-class | router-link                                                   | String         | -         |
| href             | router-link                                                   | String, Object | -         |
| disabled         | router-link                                                   | Boolean        | -         |
| nuxt             | router-link                                                   | Boolean        | -         |
| target           | router-link                                                   | String         | -         |

##### event

| 名称  | 说明           |
| ----- | :------------- |
| click | 单击鼠标后触发 |
  

##### slot

| 名称      | 说明     |
| --------- | :------- |
| ivue-icon | 添加图标 |