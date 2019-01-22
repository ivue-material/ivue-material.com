<template>
      <div>
            <h1>Badge 徽标</h1>
            <p>主要用于通知未读数的角标，提醒用户点击。</p>
            <h2>基本用法</h2>
            <p>基本用法，最简单的使用方法。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/t8oxrh7j/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/badge/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>小红点</h2>
            <p>
                  设置属性
                  <code>dot</code>可以吧为徽标设置为小红点
            </p>
            <DocMarkdown
                  :code="code.dot"
                  jsfiddle="//jsfiddle.net/qq282126990/rh1u4sb9/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/badge/Dot.vue"
            >
                  <Dot slot="demo"></Dot>
            </DocMarkdown>
            <h2>封顶数字</h2>
            <p>
                  通过设置
                  <code>overflow-count</code> 属性设置一个封顶值，当超过时，会显示
                  <code>${overflowCount}+</code> 。
            </p>
            <DocMarkdown
                  :code="code.overflowCount"
                  jsfiddle="//jsfiddle.net/qq282126990/g9rcf8Ls/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/badge/OverflowCount.vue"
            >
                  <OverflowCount slot="demo"></OverflowCount>
            </DocMarkdown>
            <h2>是否展示徽标</h2>
            <p>
                  设置属性
                  <code>show</code> 是否为true或者false，来显示徽标。
            </p>
            <DocMarkdown
                  :code="code.show"
                  jsfiddle="//jsfiddle.net/qq282126990/8uy0vaxj/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/badge/Show.vue"
            >
                  <Show slot="demo"></Show>
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
                                    <td>count</td>
                                    <td>显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏</td>
                                    <td>Number</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>overflow-count</td>
                                    <td>展示封顶的数字值</td>
                                    <td>Number， String</td>
                                    <td>99</td>
                              </tr>
                              <tr>
                                    <td>dot</td>
                                    <td>不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>offset</td>
                                    <td>设置状态点的位置偏移，格式为 [x, y]</td>
                                    <td>Array</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>show-zero</td>
                                    <td>当数值为 0 时，是否展示 Badge</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>text</td>
                                    <td>自定义内容</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>color</td>
                                    <td>设置badge的颜色</td>
                                    <td>String</td>
                                    <td>#ed4014</td>
                              </tr>
                              <tr>
                                    <td>show</td>
                                    <td>是否显示badge</td>
                                    <td>Boolean</td>
                                    <td>true</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/badge';

import Default from './components/badge/Default.vue';
import Dot from './components/badge/Dot.vue';
import OverflowCount from './components/badge/OverflowCount.vue';
import Show from './components/badge/Show.vue';

export default {
      name: 'ivue-badge',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Dot,
            OverflowCount,
            Show
      }
}
</script>

<style lang="scss" scope>
</style>
