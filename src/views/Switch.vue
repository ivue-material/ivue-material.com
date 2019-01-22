<template>
      <div>
            <h1>Switch 开关</h1>
            <p>开/关切换用于切换单个设置选项的状态。</p>
            <h2>基本用法</h2>
            <p>基本用法，状态切换时会触发事件。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/bgzx5tw3/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/switch/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>尺寸</h2>
            <p>
                  设置
                  <code>size</code> 为
                  <code>large</code> 或者
                  <code>small</code> 使开关变大或变小。
            </p>
            <DocMarkdown
                  :code="code.size"
                  jsfiddle="//jsfiddle.net/qq282126990/t8sj1n3h/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/switch/Size.vue"
            >
                  <Size slot="demo"></Size>
            </DocMarkdown>
            <h2>文字图标</h2>
            <p>
                  开关支持自定义内容，建议如果使用2个汉字，将开关尺寸设置为
                  <code>large</code>。
            </p>
            <DocMarkdown
                  :code="code.text"
                  jsfiddle="//jsfiddle.net/qq282126990/mbsp9ogu/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/switch/Text.vue"
            >
                  <TextIcon slot="demo"></TextIcon>
            </DocMarkdown>
            <h2>不可用</h2>
            <p>
                  设置属性
                  <code>disabled</code>可禁用组件。
            </p>
            <DocMarkdown
                  :code="code.disabled"
                  jsfiddle="//jsfiddle.net/qq282126990/h43e2wmj/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/switch/Disabled.vue"
            >
                  <Disabled slot="demo"></Disabled>
            </DocMarkdown>
            <h2>加载中</h2>
            <p>开关操作正在执行中。</p>
            <DocMarkdown
                  :code="code.loading"
                  jsfiddle="//jsfiddle.net/qq282126990/sxyp4wjo/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/switch/Loading.vue"
            >
                  <Loading slot="demo"></Loading>
            </DocMarkdown>
            <h2>API</h2>
            <h3>props</h3>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>名称</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>默认</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>disabled</td>
                                    <td>是否禁用开关</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>loading</td>
                                    <td>加载中的开关</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>true-value</td>
                                    <td>选中时的值</td>
                                    <td>String | Number | Boolean</td>
                                    <td>true</td>
                              </tr>
                              <tr>
                                    <td>false-value</td>
                                    <td>没有选中时的值</td>
                                    <td>String | Number | Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>value</td>
                                    <td>指定当前是否开启，可以使用 v-model 双向绑定数据</td>
                                    <td>String | Number | Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>size</td>
                                    <td>开关的尺寸，可选值为large | small | default或者不写。建议如果使用了2个汉字的文字，使用 large</td>
                                    <td>String | Number | Boolean</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>events</h3>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>事件名称</th>
                                    <th>说明</th>
                                    <th>返回值</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>on-change</td>
                                    <td>开关变化时触发，返回当前的状态</td>
                                    <td>true or false</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>slot</h3>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>名称</th>
                                    <th>说明</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>open</td>
                                    <td>自定义显示打开时的内容</td>
                              </tr>
                              <tr>
                                    <td>close</td>
                                    <td>自定义显示关闭时的内容</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/switch';

import Default from './components/switch/Default.vue';
import Size from './components/switch/Size.vue';
import TextIcon from './components/switch/Text.vue';
import Disabled from './components/switch/Disabled.vue';
import Loading from './components/switch/Loading.vue';

export default {
      name: 'ivue-switch',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Size,
            TextIcon,
            Disabled,
            Loading
      }
}
</script>

<style lang="scss" scope>
</style>
