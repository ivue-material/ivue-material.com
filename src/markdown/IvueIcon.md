# IvueIcon 图标字体


图标可以使用图标字体或外部SVG。此外，可以接受一些大小尺寸，如 ```2x, 3x, 4x and 5x``` . 默认情况下, IvueIcon 使用的是 [material io](https://material.io/tools/icons/?icon=mood_bad&style=baseline) 图标,您必须使用下划线而不是空格来传递图标的名称。例如：```<IvueIcon>thumb_up</IvueIcon>```


<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/79a13se8/4/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API
<br>

### props    

| 名称   | 说明                                                                  | value |
| ------ | :-------------------------------------------------------------------- | :---- |
| svg-src | svg图标的来源。请注意，对于外部domais上的图标，cors可能会影响其功能。 | null  |


### class

| 名称                  | 说明                                 | 例子         |
| --------------------- | :----------------------------------- | :----------- |
| ivue-size-[dimension] | 增加图标的大小。它接受2x，3x，4x或5x | ivue-size-3x |

### events    

| 名称        | 说明                    | value |
| ----------- | :---------------------- | :---- |
| svg-loaded | 在获取SVG图标后立即触发 | null  |