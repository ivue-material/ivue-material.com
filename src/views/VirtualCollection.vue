<template>
      <div>
            <h1>VirtualCollection 无限滚动(块渲染)</h1>
            <p>
                  用于渲染大型数据收集的Vue组件。React版本
                  <a
                        href="https://github.com/bvaughn/react-virtualized"
                  >react-virtualize</a>。
            </p>
            <h2>基本用法</h2>
            <p>基本用法，渲染大型数据</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/w78apL4y/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/virtual-collection/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>滚动到底部加载</h2>
            <p>
                  通过监听
                  <code>on-reach-bottom</code> 事件实现滚动到底部加载更多。
            </p>
            <DocMarkdown
                  :code="code.scrollBottom"
                  jsfiddle="//jsfiddle.net/qq282126990/yok5bu3g/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/virtual-collection/ScrollBottom.vue"
            >
                  <ScrollBottom slot="demo"></ScrollBottom>
            </DocMarkdown>
            <h2>API</h2>
            <h3>Props</h3>
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
                                    <td>cellSizeAndPositionGetter</td>
                                    <td>Callback 负责返回给定单元格的大小和偏移/位置信息</td>
                                    <td>Function</td>
                                    <td>
                                          <pre><code ref="callback">{{code.callback}}</code></pre>
                                    </td>
                              </tr>
                              <tr>
                                    <td>collection</td>
                                    <td>要渲染的单元格的数据。数组中的每个对象都必须包含一个data属性，该属性将传递给slot作用域。</td>
                                    <td>Array</td>
                                    <td>
                                          <pre><code ref="collection">{{code.collection}}</code></pre>
                                    </td>
                              </tr>
                              <tr>
                                    <td>width</td>
                                    <td>组件宽度</td>
                                    <td>Number</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>height</td>
                                    <td>组件高度</td>
                                    <td>Number</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>section-size</td>
                                    <td>（可选）覆盖采集的单元格被拆分的部分的大小。这是一个高级选项，只应用于性能调整目的。</td>
                                    <td>Number</td>
                                    <td>300</td>
                              </tr>
                              <tr>
                                    <td>bottom-sensitivity</td>
                                    <td>设置滚动条到达底部的敏感度</td>
                                    <td>Number</td>
                                    <td>0</td>
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
                                    <td>on-reach-bottom</td>
                                    <td>滚动到底部</td>
                                    <td>event</td>
                              </tr>
                              <tr>
                                    <td>on-reach-top</td>
                                    <td>滚动到顶部</td>
                                    <td>event</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>Slots</h3>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>属性</th>
                                    <th>说明</th>
                                    <th>使用方法</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>cell</td>
                                    <td>组件插槽</td>
                                    <td>
                                          <pre><code ref="slot">{{code.slot}}</code></pre>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import Hljs from 'highlight.js';

import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/virtual-collection';

import Default from './components/virtual-collection/Default.vue';
import ScrollBottom from './components/virtual-collection/ScrollBottom.vue';

export default {
      name: 'virtual-collection',
      data () {
            return {
                  code: Code
            }
      },
      mounted () {
            Hljs.highlightBlock(this.$refs.callback);
            Hljs.highlightBlock(this.$refs.collection);
            Hljs.highlightBlock(this.$refs.slot);
      },
      components: {
            DocMarkdown,
            Default,
            ScrollBottom
      }
}
</script>
