<template>
      <div>
            <h1>Collapse 折叠面板</h1>
            <p>将内容区域折叠/展开。</p>
            <h2>基本用法</h2>
            <p>基本用法，默认可以同时展开多个面板，可以设置默认展开第几个。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/8x9b7eok/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/collapse/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>手风琴效果</h2>
            <p>
                  通过设置属性
                  <code>accordion</code>开启手风琴模式，每次只能打开一个面板。
            </p>
            <DocMarkdown
                  :code="code.accordion"
                  jsfiddle="//jsfiddle.net/qq282126990/bv5qtcxL/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/collapse/Accordion.vue"
            >
                  <Accordion slot="demo"></Accordion>
            </DocMarkdown>
            <h2>折叠面板嵌套</h2>
            <p>折叠面板可以相互嵌套。</p>
            <DocMarkdown
                  :code="code.nesting"
                  jsfiddle="//jsfiddle.net/qq282126990/qcuv94ns/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/collapse/Nesting.vue"
            >
                  <Nesting slot="demo"></Nesting>
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
                                    <td>value</td>
                                    <td>当前激活的面板的 name，可以使用 v-model 双向绑定</td>
                                    <td>Array | String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>accordion</td>
                                    <td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                               <tr>
                                    <td>collapse-bg-color</td>
                                    <td>设置collapse背景颜色</td>
                                    <td>String</td>
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
                                    <td>切换面板时触发，返回当前已展开的面板的 key，格式为数组</td>
                                    <td>[]</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>collapse-panel props</h3>
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
                                    <td>ivue-disabled</td>
                                    <td>启用/禁用涟漪</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>collapse-panel slot</h3>
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
                                    <td>default</td>
                                    <td>头部内容</td>
                              </tr>
                              <tr>
                                    <td>header-icon</td>
                                    <td>设置头部图标</td>
                              </tr>
                              <tr>
                                    <td>content</td>
                                    <td>描述内容</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/collapse';

import Default from './components/collapse/Default.vue';
import Accordion from './components/collapse/Accordion.vue';
import Nesting from './components/collapse/Nesting.vue';

export default {
      name: 'collapse',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Accordion,
            Nesting
      }
}
</script>

<style scoped>
</style>