<template>
      <div>
            <h1>AutoComplete 自动完成</h1>
            <p>该组件提供简单灵活的预先输入功能。这在搜索大型数据集或甚至从API动态请求信息时非常有用。</p>
            <h2>基本用法</h2>
            <p>
                  基本用法，通过
                  <code>data</code> 设置自动完成的数据源。
            </p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/6akstmgj/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/auto-complete/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h1>自定义选项</h1>
            <p>
                  除了使用
                  <code>data</code>，还可以直接传入
                  <code>ivue-option</code> 组件作为
                  <code>slot</code> 使用，这样可以自定义显示效果。
            </p>
            <DocMarkdown
                  :code="code.slot"
                  jsfiddle="//jsfiddle.net/qq282126990/zoyhq3Lf/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/auto-complete/Slot.vue"
            >
                  <SlotOption slot="demo"></SlotOption>
            </DocMarkdown>
            <h1>不区分大小写</h1>
            <p>
                  不区分大小写的
                  <code>auto-complete</code>，及过滤的用法
            </p>
            <DocMarkdown
                  :code="code.noUpperCase"
                  jsfiddle="//jsfiddle.net/qq282126990/ejbznw5q/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/auto-complete/NoUpperCase.vue"
            >
                  <NoUpperCase slot="demo"></NoUpperCase>
            </DocMarkdown>
            <h2>API</h2>
            <h3>props</h3>
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
                              <td>value</td>
                              <td>绑定的值，可使用 v-model 双向绑定</td>
                              <td>String, Number</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>data</td>
                              <td>自动完成的数据源</td>
                              <td>Array</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>filter-method</td>
                              <td>是否根据输入项进行筛选。当其为一个函数时，会接收 value 和 option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false</td>
                              <td>Function, Boolean</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>placeholder</td>
                              <td>输入框占位文本</td>
                              <td>String</td>
                              <td>请输入数据</td>
                        </tr>
                        <tr>
                              <td>disabled</td>
                              <td>输入框禁用输入</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>clearable</td>
                              <td>是否显示清除按钮</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>clear-icon</td>
                              <td>
                                    输入框清除图标,通常与图标库
                                    <a
                                          target="_blank"
                                          href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                    >material.io</a>一起使用
                              </td>
                              <td>String</td>
                              <td>cancel</td>
                        </tr>
                  </tbody>
            </table>
            <h3>events</h3>
            <table>
                  <thead>
                        <tr>
                              <th>事件</th>
                              <th>说明</th>
                              <th>返回值</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>on-select</td>
                              <td>被选中时调用，参数为选中项的
                                    <code>value</code> 值
                              </td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>on-focus</td>
                              <td>获取焦点时触发</td>
                              <td>event</td>
                        </tr>
                        <tr>
                              <td>on-blur</td>
                              <td>失去焦点时触发</td>
                              <td>event</td>
                        </tr>
                        <tr>
                              <td>on-search</td>
                              <td>搜索补全项的时候调用</td>
                              <td>value</td>
                        </tr>
                        <tr>
                              <td>on-change</td>
                              <td>选中
                                    <code>option</code>，或
                                    <code>input</code> 的 value 变化时，调用此函数
                              </td>
                              <td>value</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/auto-complete';

import Default from './components/auto-complete/Default.vue';
import SlotOption from './components/auto-complete/Slot.vue';
import NoUpperCase from './components/auto-complete/NoUpperCase.vue';

export default {
      name: 'ivue-auto-complete',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            SlotOption,
            NoUpperCase
      }
}
</script>

<style lang="scss" scope>
</style>
