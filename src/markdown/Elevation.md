# Elevation 海拔

阴影提供有关物体深度和方向运动的重要视觉线索。它们是唯一的视觉提示，表明表面之间的分离量。对象的 Elevation 确定其阴影的外观。Elevation值在“Z-空间”和范围映射出0到24的深度。你可以在 ```class``` 里面引入 ```ivue-elevation-[size]``` 设置显示的深度。

## 首先引入CSS
```
import 'ivue-material/dist/styles/elevation.css';
```

## 代码示例
<iframe width="100%" height="500" src="//jsfiddle.net/qq282126990/hq8ytvzx/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API    
<br>

#### class

| 名称                   | 说明                                                           |
| ---------------------- | :------------------------------------------------------------- |
| ivue-elevation-[size] | 向目标元素添加深度 ,大小可以是1到24.例如：ivue-elevation-4 |
