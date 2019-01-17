# UpLoad 上传

用于文件选择上传和拖拽上传控件。

## 基本用法

点击上传，一次选择一个文件。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/nejtqkab/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## 多选

设置属性```multiple```，可以选择多个文件。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/qmba2ot6/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 手动上传

绑定 ```before-upload```，并返回```false```，可以阻止默认上传流程，手动控制文件上传。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/xq2udraj/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 拖拽上传

设置属性 ```type``` 为 ```drag```，可以拖拽上传。

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/a8me7r25/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 自定义上传列表

可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙。

设置属性 ``` show-upload-list``` 为 ```false```，可以不显示默认的上传列表。     
设置属性 ```default-file-list``` 设置默认已上传的列表。     
通过 ```on-success``` 等属性来控制完整的上传过程，详见API。     

<iframe width="100%" height="300" src="//jsfiddle.net/qq282126990/w2e91hco/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## API     

<br>

### props     

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | :------------------------------- | :----- | :----- |       
| upload-url    | 文件上传地址,必填 | String | -      |                  
| show-upload-list    | 是否显示文件已上传列表 | Boolean | true      |                  
| type    | 上传控件的类型，可选值为 ```select```（点击选择），```drag```（支持拖拽） | String | select      |                  
| name    | 上传文件字段名 | String | file      |                  
| multiple    | 是否支持多选文件 | Boolean | false      |                  
| accept    | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | String | -      |                  
| with-credentials    | 支持发送 cookie 凭证信息 | Boolean | false      |                  
| before-upload    | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传 | Function | -      |   
| default-file-list    | 默认已上传的文件列表 | Array | -      |                  
| max-size    | 文件大小限制，单位 kb | Number | -      |       
| format    | 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用	 | Array | []      |       
| ajax-data    | 上传时附带的额外参数| Object | -      |       
| ajax-headers    | 设置上传的请求头部 | Object | {}      |       
| on-progress    | 文件上传时的钩子，返回字段为 event, file, fileList | Function | -      |                  
| on-success    | 文件上传成功时的钩子，返回字段为 response, file, fileList | Function | -      |                  
| on-error    |文件上传失败时的钩子，返回字段为 error, file, fileList | Function | -      |                  
| on-fileData    | 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据 | Function | -      |                  
| on-remove    | 文件列表移除文件时的钩子，返回字段为 file, fileList | Function | -      |                  
| on-exceeded-size    | 文件超出指定大小限制时的钩子，返回字段为 file, fileList  | Function | -      |       
| on-format-error    | 文件格式验证失败时的钩子，返回字段为 file, fileList | Function | -      |       
           

##### methods     

| 方法名          | 说明                             |  默认值 |          
| ------------- | :------------------------------- |  :----- |        
| clear-files    | 清空已上传的文件列表 | -      |      
   