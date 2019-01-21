<template>
      <div>
            <h1>Select 选择器</h1>
            <p>使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>
            <p>
                  选择器支持单选、多选、搜索，以及键盘快捷操作。
                  <code>ivue-select</code> 选择器应该与
                  <code>ivue-option</code>或者
                  <code>ivue-option-group</code>组件一起使用。选择将始终对
                  <code>v-model</code>的变化做出反应。
            </p>
            <h2>基本用法</h2>
            <p>
                  使用
                  <code>v-model</code>双向绑定数据，单选, value 只支持字符串或数字类型，多选，只支持数组类型，组件根据
                  <code>ivue-option</code> 的
                  <code>value</code> 返回数据。在展开选择器后，可以使用键盘的
                  <code>up</code> 和
                  <code>down</code> 快速上下选择，按下
                  <code>enter</code> 选择选项，按下
                  <code>esc</code> 收起选择器。
            </p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/g4z3a2hv/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>多选</h2>
            <p>
                  通过设置属性
                  <code>multiple</code>可以开启多选模式。多选模式下，
                  <code>model</code> 接受数组类型的数据，所返回的也是数组。
            </p>
            <DocMarkdown
                  :code="code.mltiple"
                  jsfiddle="//jsfiddle.net/qq282126990/86ho4k03/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Mltiple.vue"
            >
                  <Mltiple slot="demo"></Mltiple>
            </DocMarkdown>
            <h2>可搜索</h2>
            <p>
                  通过设置
                  <code>filterable</code>可以开启搜索框，单选和多选都支持搜索模式。
            </p>
            <DocMarkdown
                  :code="code.filterable"
                  jsfiddle="//jsfiddle.net/qq282126990/dgay715v/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Filterable.vue"
            >
                  <Filterable slot="demo"></Filterable>
            </DocMarkdown>
            <h2>禁用</h2>
            <p>
                  通过给
                  <code>ivue-select</code>设置属性
                  <code>disabled</code>禁用整个选项器。
            </p>
            <p>
                  通过给
                  <code>ivue-option</code>设置属性
                  <code>disabled</code>可以禁用某个选项。
            </p>
            <DocMarkdown
                  :code="code.disabled"
                  jsfiddle="//jsfiddle.net/qq282126990/94ufpn6a/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Disabled.vue"
            >
                  <Disabled slot="demo"></Disabled>
            </DocMarkdown>
            <h2>分组</h2>
            <p>
                  使用
                  <code>ivue-option-group</code>可将选项进行分组。
            </p>
            <DocMarkdown
                  :code="code.group"
                  jsfiddle="//jsfiddle.net/qq282126990/cf1r93wh/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Group.vue"
            >
                  <Group slot="demo"></Group>
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
                              <td>
                                    指定选中选项的
                                    <code>value</code>值，可以使用
                                    <code>v-modul</code>双向绑定数据。单项选择只接受
                                    <code>String</code>和
                                    <code>Number</code>,多选时只接受
                                    <code>Array</code>
                              </td>
                              <td>String | Number | Array</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>multiple</td>
                              <td>是否开启多选</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>label-and-value</td>
                              <td>在返回选项时，是否将label和value一起返回，默认只返回 value</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>disabled</td>
                              <td>是否禁用该组件</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>clearable</td>
                              <td>是否可以清空选项，只在单选时有效</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>not-find-text</td>
                              <td>选项列表没有找到数据时的提示</td>
                              <td>String</td>
                              <td>无匹配数据</td>
                        </tr>
                        <tr>
                              <td>filterable</td>
                              <td>是否开启搜索</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>arrow-down-icon</td>
                              <td>
                                    下拉选项图标,通常与图标库
                                    <a
                                          target="_blank"
                                          href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                    >material.io</a> 一起使用
                              </td>
                              <td>String</td>
                              <td>keyboard_arrow_down</td>
                        </tr>
                        <tr>
                              <td>reset-select-icon</td>
                              <td>
                                    重置选择选项图标,通常与图标库
                                    <a
                                          target="_blank"
                                          href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                    >material.io</a> 一起使用
                              </td>
                              <td>String</td>
                              <td>cancel</td>
                        </tr>
                        <tr>
                              <td>multiple-close-icon</td>
                              <td>
                                    多项选择选项关闭图标,通常与图标库
                                    <a
                                          target="_blank"
                                          href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                    >material.io</a> 一起使用
                              </td>
                              <td>String</td>
                              <td>close</td>
                        </tr>
                  </tbody>
            </table>
            <h2>ivue-option</h2>
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
                              <td>disabled-ripple</td>
                              <td>启用/禁用涟漪</td>
                              <td>Booelan</td>
                              <td>true</td>
                        </tr>
                        <tr>
                              <td>value</td>
                              <td>选项值，默认根据此属性值进行筛选，必填</td>
                              <td>String | Number</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>label</td>
                              <td>选择显示的内容，默认会读取 slot,无 slot 时，优先读取该 label 的值,无 label 时，读取 value。</td>
                              <td>String | Number</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>disabled</td>
                              <td>是否禁用当前选项</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                  </tbody>
            </table>
            <h2>ivue-option-group</h2>
            <h3>props</h3>
            <table>
                  <thead>
                        <tr>
                              <th>属性</th>
                              <th >说明</th>
                              <th >类型</th>
                              <th >默认值</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>label</td>
                              <td >分组的组名</td>
                              <td >String</td>
                              <td >-</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/select';

import Default from './components/select/Default.vue';
import Mltiple from './components/select/Mltiple.vue';
import Filterable from './components/select/Filterable.vue';
import Disabled from './components/select/Disabled.vue';
import Group from './components/select/Group.vue';

export default {
      name: 'ivue-select',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Mltiple,
            Filterable,
            Disabled,
            Group
      }
}
</script>

<style lang="scss" scope>
</style>
