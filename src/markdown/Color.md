# 色彩 

所有包含在 [Material Design 规范](https://material.io/design/color/#tools-for-picking-colors)中的所有色彩都可以通过 ```stylus``` 得到应用。
这些值可以在您的样式表、组建文件和实际组件中通过color类 中使用。

## 类

规范中的每种色彩都会被转换为背景和文本颜色以便在应用程序中通过一个类进行样式化，比如：```<div class="red">``` 或者 ```<span class="red--text">``` 。这些类的色彩定义在[这里](https://github.com/qq282126990/ivue-ui/blob/master/src/styles/theme/color.scss)。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/6kzt3rg5/4/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 引入颜色包

通常在 ```webpack``` 入口页面 ```main.js``` 中如下配置：

```
import 'ivue-material/dist/styles/color.css';
```

## Material 色彩表
