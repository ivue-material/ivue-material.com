<template>
      <div>
            <h1>Affix 图钉</h1>
            <p>使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。</p>
            <h2>基础用法</h2>
            <p>基础用法，当元素不可见时，直接固定在最顶端。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/b0rdnjk8/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/affix/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>顶部偏移</h2>
            <p>
                  通过设置属性
                  <code>offset-top</code>，当滚动到一定距离时再固定。
            </p>
            <DocMarkdown
                  :code="code.offsetTop"
                  jsfiddle="//jsfiddle.net/qq282126990/u7b5e4dw/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/affix/OffsetTop.vue"
            >
                  <OffsetTop slot="demo"></OffsetTop>
            </DocMarkdown>
            <h2>固定在底部</h2>
            <p>在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。</p>
            <p>
                  注意，
                  <code>offset-top</code> 和
                  <code>offset-bottom</code> 只可以设置一个，如果都设置，会使用
                  <code>offset-top</code>。
            </p>
            <DocMarkdown
                  :code="code.offsetBottom"
                  jsfiddle="//jsfiddle.net/qq282126990/v1u28b3z/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/affix/OffsetBottom.vue"
            >
                  <OffsetBottom slot="demo"></OffsetBottom>
            </DocMarkdown>
            <h2>固定状态改变时的回调</h2>
            <p>当固定状态发生改变时，会触发事件。</p>
            <DocMarkdown
                  :code="code.change"
                  jsfiddle="//jsfiddle.net/qq282126990/ms64fukL/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/affix/Change.vue"
            >
                  <Change slot="demo"></Change>
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
                                    <td>offset-top</td>
                                    <td>距离窗口顶部达到指定偏移量后触发</td>
                                    <td>Number</td>
                                    <td>0</td>
                              </tr>
                              <tr>
                                    <td>offset-bottom</td>
                                    <td>距离窗口底部达到指定偏移量后触发</td>
                                    <td>Number</td>
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
                                    <th>事件</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>返回值</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>on-change</td>
                                    <td>在固定状态发生改变时触发</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>                 

<script>

import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/affix';

import Default from './components/affix/Default.vue';
import OffsetTop from './components/affix/OffsetTop.vue';
import OffsetBottom from './components/affix/OffsetBottom.vue';
import Change from './components/affix/Change.vue';

export default {
      name: 'ivue-affix',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            OffsetTop,
            OffsetBottom,
            Change
      }
}
</script>

<style lang="scss" scope>
</style>
