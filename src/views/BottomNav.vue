<template>
      <div>
            <h1>BottomNav 底部导航</h1>
            <p>
                  <code>ivue-bottom-nav</code>
                  组件是一个导航栏的替代方案。它主要用于移动端，并有两个变种，图标+文本和隐藏按钮文本直到被激活。
            </p>
            <h2>基本用法</h2>
            <p>
                  虽然底部导航用于与 vue-router 一起使用，但你也可以使用
                  <code>active.syncprop</code>
                  以编程方式控制按钮的活动状态。
            </p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/sr34v25c/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/bottom-nav/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>隐藏按钮文本</h2>
            <p>
                  通过设置属性
                  <code>shift</code>，隐藏按钮文本直到被激活
            </p>
            <DocMarkdown
                  :code="code.shift"
                  jsfiddle="//jsfiddle.net/qq282126990/6ou983nc/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/bottom-nav/Shift.vue"
            >
                  <Shift slot="demo"></Shift>
            </DocMarkdown>
            <h2>隐藏组件</h2>
            <p>
                  通过设置
                  <code>value</code>来显示组件，你也可以使用
                  <code>v-model</code>来控制显示状态。
            </p>
            <DocMarkdown
                  :code="code.hide"
                  jsfiddle="//jsfiddle.net/qq282126990/wkm90Lyb/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/bottom-nav/Hide.vue"
            >
                  <Hide slot="demo"></Hide>
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
                                    <td>active</td>
                                    <td>当前激活的导航</td>
                                    <td>Number, String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>height</td>
                                    <td>底部导航栏高度</td>
                                    <td>Number, String</td>
                                    <td>56</td>
                              </tr>
                              <tr>
                                    <td>value</td>
                                    <td>底部导航栏是否可见(注意：父级节点必须设置 overflow: hidden)</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>color</td>
                                    <td>底部导航栏背景颜色</td>
                                    <td>String</td>
                                    <td>null</td>
                              </tr>
                              <tr>
                                    <td>position</td>
                                    <td>
                                          底部导航栏定位(
                                          <code>absolute</code>
                                          <code>fixed</code>)
                                    </td>
                                    <td>String</td>
                                    <td>null</td>
                              </tr>
                              <tr>
                                    <td>shift</td>
                                    <td>不是激活状态时隐藏按钮上的文字</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h2>events</h2>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>属性</th>
                                    <th>说明</th>
                                    <th>用法</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>update:active</td>
                                    <td>设置激活那个导航</td>
                                    <td>this.$emit('update:active', item)</td>
                              </tr>
                              <tr>
                                    <td>on-change</td>
                                    <td>获取当前激活那个导航</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h2>slots</h2>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>属性</th>
                                    <th>说明</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>default</td>
                                    <td>Vue默认原生插槽</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/bottom-nav';

import Default from './components/bottom-nav/Default.vue';
import Shift from './components/bottom-nav/Shift.vue';
import Hide from './components/bottom-nav/Hide.vue';

export default {
      name: 'ivue-bottom-nav',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Shift,
            Hide
      }
}
</script>

<style lang="scss" scope>
</style>
