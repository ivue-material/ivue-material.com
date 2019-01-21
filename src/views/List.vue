<template>
      <div class="list">
            <h1>List 列表</h1>
            <p>列表将多个行项垂直显示为单个连续元素。</p>
            <p>组件用于显示信息，它可以包含一个头像、内容、操作、列表组标题等等。列表也可以包含子元素并在侧边栏（sidebar）使用。</p>
            <p>列表项可以包含交互事件，例如 click 和 mousedown 事件。</p>

            <h2>基本用法</h2>
            <p>基本用法，头像和列表项标题的组合</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/g3Lf8m6h/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/list/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <br>
            <h2>头像和三行的组合</h2>
            <p>对于3行的列表，列表项副标题内容占两行的时候如果超出范围则以省略号形式截断文字。</p>
            <DocMarkdown
                  :code="code.combination"
                  jsfiddle="//jsfiddle.net/qq282126990/hksuoL1v/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/list/Combination.vue"
            >
                  <Combination slot="demo"></Combination>
            </DocMarkdown>
            <h2>列表操作</h2>
            <p>列表项将根据给定的交互类型呈现不同的类型。</p>
            <p>
                  如果传递
                  <code>href</code> 属性，该项将自动呈现 a
            </p>
            <p>如果您传递其中一个事件，该选项将自动呈现 button ：</p>
            <ul>
                  <li>click</li>
                  <li>dblclick</li>
                  <li>mousedown</li>
                  <li>mouseup</li>
            </ul>
            <br>
            <DocMarkdown
                  :code="code.expand"
                  jsfiddle="//jsfiddle.net/qq282126990/r4dscwuo/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/list/Complex.vue"
            >
                  <Complex slot="demo"></Complex>
            </DocMarkdown>
            <h2>列表扩展</h2>
            <p>列表可以使用扩展面板来显示更多选项</p>
            <DocMarkdown
                  :code="code.expand"
                  jsfiddle="//jsfiddle.net/qq282126990/2stxwznv/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/list/Expand.vue"
            >
                  <Expand slot="demo"></Expand>
            </DocMarkdown>
            <h2>API</h2>
            <h3>props</h3>
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
                              <td>ivue-expand-single</td>
                              <td>
                                    如果设置为 true ，则一次最多可扩展一个扩展列表项。扩展后的列表将在展开另一个列表时折叠，前提是
                                    <code>ivue-list-item</code> 开启了
                                    <code>ivue-expand</code>
                              </td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                  </tbody>
            </table>
            <h2>ivue-list-item 列表项</h2>
            <p>列表项将根据给定的交互类型呈现不同的标记。</p>
            <p>如果您传递其中一个事件，该项目将自动呈现 button ：</p>
            <ul>
                  <li>click</li>
                  <li>dblclick</li>
                  <li>mousedown</li>
                  <li>mouseup</li>
            </ul>
            <p>
                  如果传递 href 属性，该项将自动呈现
                  <code>a</code> 标记。
            </p>
            <p>
                  <code>router-link</code>可以在这里使用。这将呈现一个
                  <code>a</code>标签。
            </p>
            <h3>props</h3>
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
                              <td>ivue-expand</td>
                              <td>启用扩展面板</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>ivue-expanded</td>
                              <td>
                                    显示/隐藏扩展面板的道具。应与
                                    <code>.sync</code>修饰符一起使用
                              </td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/list';

import Default from './components/list/Default.vue';
import Combination from './components/list/Combination.vue';
import Complex from './components/list/Complex.vue';
import Expand from './components/list/Expand.vue';

export default {
      name: 'ivue-list',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Combination,
            Complex,
            Expand
      }
}
</script>

<style lang="scss" scope>
.list {
      li {
            list-style: square;
      }
      ul {
            margin-left: 20px;
      }
}

.ivue-list {
      margin: 0 !important;
      li {
            list-style: none;
      }
}
</style>
