<template>
      <div>
            <h1>Input 输入框</h1>
            <p>
                  基本输入框组件，支持
                  <code>input</code> 和
                  <code>textarea</code>，并在原生控件基础上进行了功能扩展。
            </p>
            <h2>基本用法</h2>
            <p>
                  基本用法，可以使用
                  <code>v-model</code> 实现数据的双向绑定。可以直接设置
                  <code>style</code> 来改变输入框的宽度，默认
                  <code>100%</code>。
            </p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/nhvo4utL/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/input/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>可清除</h2>
            <p>
                  通过设置属性
                  <code>clearable</code> 开启可显示清空按钮。
            </p>
            <DocMarkdown
                  :code="code.clearable"
                  jsfiddle="//jsfiddle.net/qq282126990/vrp3kd5L/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/input/Clearable.vue"
            >
                  <Clearable slot="demo"></Clearable>
            </DocMarkdown>
            <h2>输入框图标</h2>
            <p>
                  通过设置
                  <code>prefix</code> 和
                  <code>suffix</code> 以及
                  <code>slot</code> 设置前缀和后缀图标。
            </p>
            <DocMarkdown
                  :code="code.icon"
                  jsfiddle="//jsfiddle.net/qq282126990/tpygk04m/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/input/Icon.vue"
            >
                  <Icon slot="demo"></Icon>
            </DocMarkdown>
            <h2>文本域</h2>
            <p>
                  通过设置属性
                  <code>type</code> 为
                  <code>textarea</code> 来使用文本域，用于多行输入。
            </p>
            <p>
                  通过设置属性
                  <code>rows</code> 控制文本域默认显示的行数。
            </p>
            <DocMarkdown
                  :code="code.textarea"
                  jsfiddle="//jsfiddle.net/qq282126990/tj10dpr9/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/input/Textarea.vue"
            >
                  <Textarea slot="demo"></Textarea>
            </DocMarkdown>
            <h2>禁用</h2>
            <p>
                  通过设置属性
                  <code>disabled</code>，使组件状态为不可用。
            </p>
            <DocMarkdown
                  :code="code.disabled"
                  jsfiddle="//jsfiddle.net/qq282126990/nh6r2kxb/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/input/Disabled.vue"
            >
                  <Disabled slot="demo"></Disabled>
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
                                    <td>type</td>
                                    <td>
                                          输入框类型，可选值为
                                          <code>text、password、textarea、url、email、date</code>
                                    </td>
                                    <td>String</td>
                                    <td>text</td>
                              </tr>
                              <tr>
                                    <td>value</td>
                                    <td>绑定的值，可使用 v-model 双向绑定</td>
                                    <td>String，Number</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>placeholder</td>
                                    <td>占位文本</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>clearable</td>
                                    <td>是否显示清空按钮</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>clear-icon</td>
                                    <td>
                                          清空按钮图标,通常与图标库
                                          <a
                                                target="_blank"
                                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                          >material.io</a>一起使用
                                    </td>
                                    <td>String</td>
                                    <td>cancel</td>
                              </tr>
                              <tr>
                                    <td>disabled</td>
                                    <td>设置输入框为禁用状态</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>readonly</td>
                                    <td>设置输入框为只读</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>maxlength</td>
                                    <td>设置输入框最大输入长度</td>
                                    <td>Number</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>spellcheck</td>
                                    <td>原生的 spellcheck 属性</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>autocomplete</td>
                                    <td>原生的自动完成功能，可选值为 off 和 on</td>
                                    <td>String</td>
                                    <td>off</td>
                              </tr>
                              <tr>
                                    <td>autofocus</td>
                                    <td>自动获取焦点</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>number</td>
                                    <td>将用户的输入转换为 Number 类型</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>rows</td>
                                    <td>文本域默认行数，仅在 textarea 类型下有效</td>
                                    <td>Number</td>
                                    <td>2</td>
                              </tr>
                              <tr>
                                    <td>prefix</td>
                                    <td>输入框头部图标</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>suffix</td>
                                    <td>输入框尾部图标</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>autosize</td>
                                    <td>自适应内容高度,仅在 textarea 类型下有效,可传入对象,如 { minRows: 2, maxRows: 6 }</td>
                                    <td>Boolean , Object</td>
                                    <td>false</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>events</h3>
            <div class="table">
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
                                    <td>on-enter</td>
                                    <td>按下回车键时触发</td>
                                    <td>event</td>
                              </tr>
                              <tr>
                                    <td>on-keydown</td>
                                    <td>原生的 keydown 事件</td>
                                    <td>event</td>
                              </tr>
                              <tr>
                                    <td>on-keypress</td>
                                    <td>原生的 keypress 事件</td>
                                    <td>event</td>
                              </tr>
                              <tr>
                                    <td>on-keyup</td>
                                    <td>原生的 keyup 事件</td>
                                    <td>event</td>
                              </tr>
                              <tr>
                                    <td>on-focus</td>
                                    <td>输入框聚焦时触发</td>
                                    <td>event</td>
                              </tr>
                              <tr>
                                    <td>on-blur</td>
                                    <td>输入框失去焦点时触发</td>
                                    <td>event</td>
                              </tr>
                              <tr>
                                    <td>on-change</td>
                                    <td>数据改变时触发</td>
                                    <td>event</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/input';
import Default from './components/input/Default.vue';
import Clearable from './components/input/Clearable.vue';
import Icon from './components/input/Icon.vue';
import Textarea from './components/input/Textarea.vue';
import Disabled from './components/input/Disabled.vue';

export default {
      name: 'ivue-input',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Clearable,
            Icon,
            Textarea,
            Disabled
      }
}
</script>

<style lang="scss" scope>
</style>
