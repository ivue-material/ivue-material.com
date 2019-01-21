<template>
      <div>
            <h1>Progress 进度条</h1>
            <p>
                  展示操作或任务的当前进度，比如上传文件。使用
                  <code>ivue-progress-linear</code> 或者
                  <code>ivue-progress-circular</code> 可把进度条变成直线或者圆形。
            </p>
            <h2>直线进度条</h2>
            <p>
                  基本用法，处在不同状态下的进度条，当
                  <code>percent</code> 为
                  <code>100</code> 时，自动将状态置为
                  <code>success</code>。
            </p>
            <DocMarkdown
                  :code="code.linear"
                  jsfiddle="//jsfiddle.net/qq282126990/7xqoye2d/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/progress/Linear.vue"
            >
                  <Linear slot="demo"></Linear>
            </DocMarkdown>
            <h2>圆形进度条</h2>
            <p>
                  基本用法，使用
                  <code>ivue-progress-circular</code> 组件可以把进度条变为圆形。
            </p>
            <DocMarkdown
                  :code="code.circular"
                  jsfiddle="//jsfiddle.net/qq282126990/ow72mug6/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/progress/Circular.vue"
            >
                  <Circular slot="demo"></Circular>
            </DocMarkdown>
            <h2>旋转</h2>
            <p>
                  通过设置属性
                  <code>indeterminate</code> 使圆形进度条永久旋转。
            </p>
            <DocMarkdown
                  :code="code.indeterminate"
                  jsfiddle="//jsfiddle.net/qq282126990/ztrpho7e/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/progress/Indeterminate.vue"
            >
                  <Indeterminate slot="demo"></Indeterminate>
            </DocMarkdown>
            <h2>自定义样式</h2>
            <p>
                  通过自定义
                  <code>slot</code> 和属性
                  <code>height</code> 改变进度条效果。
            </p>
            <DocMarkdown
                  :code="code.customize"
                  jsfiddle="//jsfiddle.net/qq282126990/bvax6eh3/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/progress/Customize.vue"
            >
                  <Customize slot="demo"></Customize>
            </DocMarkdown>
            <h2>ivue-progress-linear</h2>
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
                              <td>状态，可选值为normal、active、wrong、success</td>
                              <td>String</td>
                              <td>normal</td>
                        </tr>
                        <tr>
                              <td>height</td>
                              <td>进度条的高度，单位 px</td>
                              <td>Number</td>
                              <td>10</td>
                        </tr>
                        <tr>
                              <td>percent</td>
                              <td>百分比</td>
                              <td>Number</td>
                              <td>0</td>
                        </tr>
                        <tr>
                              <td>success-percent</td>
                              <td>已完成的分段百分比</td>
                              <td>Number</td>
                              <td>0</td>
                        </tr>
                        <tr>
                              <td>hide-text</td>
                              <td>隐藏文字</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                  </tbody>
            </table>
            <h2>ivue-progress-circular</h2>
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
                              <td>状态，可选值为normal、active、wrong、success</td>
                              <td>String</td>
                              <td>normal</td>
                        </tr>
                        <tr>
                              <td>rotate</td>
                              <td>旋转角度</td>
                              <td>Number</td>
                              <td>0</td>
                        </tr>
                        <tr>
                              <td>size</td>
                              <td>圆圈大小，单位 px</td>
                              <td>Number</td>
                              <td>50</td>
                        </tr>
                        <tr>
                              <td>width</td>
                              <td>圆圈的宽度</td>
                              <td>Number</td>
                              <td>4</td>
                        </tr>
                        <tr>
                              <td>percent</td>
                              <td>百分比</td>
                              <td>Number</td>
                              <td>0</td>
                        </tr>
                        <tr>
                              <td>hide-text</td>
                              <td>隐藏文字</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>indeterminate</td>
                              <td>一个不确定的进度圆环永远循环动画</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/progress';

import Linear from './components/progress/Linear.vue';
import Circular from './components/progress/Circular.vue';
import Indeterminate from './components/progress/Indeterminate.vue';
import Customize from './components/progress/Customize.vue';

export default {
      name: 'ivue-progress',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Linear,
            Circular,
            Indeterminate,
            Customize
      }
}
</script>

<style lang="scss" scope>
</style>
