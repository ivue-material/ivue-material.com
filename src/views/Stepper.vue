<template>
      <div>
            <h1>Stepper 步骤条</h1>
            <p>组件用于显示步骤进度，引导用户按流程完成任务。</p>
            <h2>基本用法</h2>
            <p>
                  基本用法，组件会根据
                  <code>current</code>值自动判断各步骤状态。
            </p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/9uztm7pL/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/stepper/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>垂直方向</h2>
            <p>
                  通过设置属性
                  <code>direction</code> 为
                  <code>vertical</code>可以使组件在垂直方向展示。
            </p>
            <DocMarkdown
                  :code="code.vertical"
                  jsfiddle="//jsfiddle.net/qq282126990/a3vhr2sc/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/stepper/Vertical.vue"
            >
                  <Vertical slot="demo"></Vertical>
            </DocMarkdown>

            <h2>带图标的步骤条</h2>
            <p>
                  通过设置
                  <code>ivue-stepper-step</code> 的
                  <code>icon</code> 属性可以自定义图标
            </p>
            <DocMarkdown
                  :code="code.icon"
                  jsfiddle="//jsfiddle.net/qq282126990/3fbeaqvn/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/stepper/Icon.vue"
            >
                  <Icon slot="demo"></Icon>
            </DocMarkdown>
            <h2>切换步骤</h2>
            <p>通过点击下一步按钮，切换当前进度状态。</p>
            <DocMarkdown
                  :code="code.next"
                  jsfiddle="//jsfiddle.net/qq282126990/ftoapr2L/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/stepper/Next.vue"
            >
                  <Next slot="demo"></Next>
            </DocMarkdown>
            <h2>点击步骤进行下一步</h2>
            <p>
                  通过设置属性
                  <code>editable</code>，使
                  <code>ivue-stepper-step</code>可以通过点击切换当前进度状态。
            </p>
            <DocMarkdown
                  :code="code.clickStep"
                  jsfiddle="//jsfiddle.net/qq282126990/ho7waj06/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/stepper/ClickStep.vue"
            >
                  <ClickStep slot="demo"></ClickStep>
            </DocMarkdown>
            <h2>错误</h2>
            <p>
                  通过设置
                  <code>ivue-stepper</code> 或者
                  <code>ivue-stepper-step</code> 的属性
                  <code>status</code> 为
                  <code>error</code> 指定当前步骤状态为错误。
            </p>
            <DocMarkdown
                  :code="code.error"
                  jsfiddle="//jsfiddle.net/qq282126990/mxgq0u81/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/stepper/Error.vue"
            >
                  <Error slot="demo"></Error>
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
                              <td>current-step</td>
                              <td>当前步骤，从 0 开始计数</td>
                              <td>Number</td>
                              <td>0</td>
                        </tr>
                        <tr>
                              <td>direction</td>
                              <td>
                                    步骤条方向，可选值为
                                    <code>horizontal</code>（水平）或
                                    <code>vertical</code>（垂直）
                              </td>
                              <td>String</td>
                              <td>horizontal</td>
                        </tr>
                        <tr>
                              <td>status</td>
                              <td>
                                    当前步骤的状态，可选值为
                                    <code>wait</code> | 
                                    <code>process</code> | 
                                    <code>finish</code> | 
                                    <code>error</code>
                              </td>
                              <td>String</td>
                              <td>process</td>
                        </tr>
                  </tbody>
            </table>
            <h2>ivue-stepper-step</h2>
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
                              <td>status</td>
                              <td>
                                    当前步骤的状态，可选值为
                                    <code>wait</code> | 
                                    <code>process</code> | 
                                    <code>finish</code> | 
                                    <code>error</code>
                              </td>
                              <td>String</td>
                              <td>process</td>
                        </tr>
                        <tr>
                              <td>title</td>
                              <td>标题</td>
                              <td>String</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>content</td>
                              <td>内容</td>
                              <td>String</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>icon</td>
                              <td>步骤图标</td>
                              <td>String</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>editable</td>
                              <td>当前步骤是否是否可以通过点击进行下一步</td>
                              <td>String</td>
                              <td>-</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/stepper';

import Default from './components/stepper/Default.vue';
import Vertical from './components/stepper/Vertical.vue';
import Icon from './components/stepper/Icon.vue';
import Next from './components/stepper/Next.vue';
import ClickStep from './components/stepper/ClickStep.vue';
import Error from './components/stepper/Error.vue';

export default {
      name: 'ivue-stepper',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Vertical,
            Icon,
            Next,
            ClickStep,
            Error
      }
}
</script>

<style lang="scss" scope>
</style>
