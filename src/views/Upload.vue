<template>
      <div>
            <h1>UpLoad 上传</h1>
            <p>用于文件选择上传和拖拽上传控件。</p>
            <h2>基本用法</h2>
            <p>基本用法，点击上传，一次选择一个文件。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/nejtqkab/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/upload/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>多选</h2>
            <p>
                  通过设置属性
                  <code>multiple</code>，可以选择多个文件进行上传。
            </p>
            <DocMarkdown
                  :code="code.multiple"
                  jsfiddle="//jsfiddle.net/qq282126990/qmba2ot6/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/upload/Multiple.vue"
            >
                  <Multiple slot="demo"></Multiple>
            </DocMarkdown>
            <h2>手动上传</h2>
            <p>
                  绑定
                  <code>before-upload</code>，并返回
                  <code>false</code>，可以阻止默认上传流程，手动控制文件上传。
            </p>
            <DocMarkdown
                  :code="code.manualUpload"
                  jsfiddle="//jsfiddle.net/qq282126990/xq2udraj/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/upload/ManualUpload.vue"
            >
                  <ManualUpload slot="demo"></ManualUpload>
            </DocMarkdown>
            <h2>拖拽上传</h2>
            <p>
                  通过设置属性
                  <code>type</code> 为
                  <code>drag</code>，可以拖拽上传。
            </p>
            <DocMarkdown
                  :code="code.drag"
                  jsfiddle="//jsfiddle.net/qq282126990/a8me7r25/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/upload/Drag.vue"
            >
                  <Drag slot="demo"></Drag>
            </DocMarkdown>
            <h2>自定义上传列表</h2>
            <p>可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙。</p>
            <p>
                  设置属性
                  <code>show-upload-list</code> 为
                  <code>false</code>，可以不显示默认的上传列表。
            </p>
            <p>
                  设置属性
                  <code>default-file-list</code> 设置默认已上传的列表。
            </p>
            <p>
                  通过
                  <code>on-success</code> 等属性来控制完整的上传过程，详见API。
            </p>
            <DocMarkdown
                  :code="code.customize"
                  jsfiddle="//jsfiddle.net/qq282126990/w2e91hco/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/upload/Customize.vue"
            >
                  <Customize slot="demo"></Customize>
            </DocMarkdown>
            <h2>API</h2>
            <h3>props</h3>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>属性</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>默认值</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>upload-url</td>
                                    <td>文件上传地址,必填</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>show-upload-list</td>
                                    <td>是否显示文件已上传列表</td>
                                    <td>Boolean</td>
                                    <td>true</td>
                              </tr>
                              <tr>
                                    <td>type</td>
                                    <td>
                                          上传控件的类型，可选值为
                                          <code>select</code>（点击选择）|
                                          <code>drag</code>（支持拖拽）
                                    </td>
                                    <td>String</td>
                                    <td>select</td>
                              </tr>
                              <tr>
                                    <td>name</td>
                                    <td>上传文件字段名</td>
                                    <td>String</td>
                                    <td>file</td>
                              </tr>
                              <tr>
                                    <td>multiple</td>
                                    <td>是否支持多选文件</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>accept</td>
                                    <td>
                                          接受上传的
                                          <a
                                                target="_blank"
                                                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"
                                          >文件类型</a>
                                    </td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>with-credentials</td>
                                    <td>支持发送 cookie 凭证信息</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>before-upload</td>
                                    <td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>default-file-list</td>
                                    <td>默认已上传的文件列表</td>
                                    <td>Array</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>max-size</td>
                                    <td>文件大小限制，单位 kb</td>
                                    <td>Number</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>format</td>
                                    <td>支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用</td>
                                    <td>Array</td>
                                    <td>[]</td>
                              </tr>
                              <tr>
                                    <td>ajax-data</td>
                                    <td>上传时附带的额外参数</td>
                                    <td>Object</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>ajax-headers</td>
                                    <td>设置上传的请求头部</td>
                                    <td>Object</td>
                                    <td>{}</td>
                              </tr>
                              <tr>
                                    <td>on-progress</td>
                                    <td>文件上传时的钩子，返回字段为 event | file | fileList</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>on-success</td>
                                    <td>文件上传成功时的钩子，返回字段为 response | file | fileList</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>on-error</td>
                                    <td>文件上传失败时的钩子，返回字段为 error | file | fileList</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>on-fileData</td>
                                    <td>点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>on-remove</td>
                                    <td>文件列表移除文件时的钩子，返回字段为 file | fileList</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>on-exceeded-size</td>
                                    <td>文件超出指定大小限制时的钩子，返回字段为 file | fileList</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>on-format-error</td>
                                    <td>文件格式验证失败时的钩子，返回字段为 file | fileList</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>methods</h3>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>方法名</th>
                                    <th>说明</th>
                                    <th>默认值</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>clear-files</td>
                                    <td>清空已上传的文件列表</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/upload';

import Default from './components/upload/Default.vue';
import Multiple from './components/upload/Multiple.vue';
import ManualUpload from './components/upload/ManualUpload.vue';
import Drag from './components/upload/Drag.vue';
import Customize from './components/upload/Customize.vue';

export default {
      name: 'ivue-upload',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Multiple,
            ManualUpload,
            Drag,
            Customize
      }
}
</script>

<style lang="scss" scope>
</style>
