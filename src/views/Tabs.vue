<template>
      <div>
            <h1>Tabs 标签页</h1>
            <p>组件用于隐藏可选项目后面的内容。这也可以用作页面的伪导航</p>
            <h2>基本用法</h2>
            <p>基本用法，作为页面的伪导航。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/1n356yjx/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tabs/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>固定选项卡</h2>
            <p>
                  通过设置属性
                  <code>fixed-tabs</code> 设置一个较小的宽度，并将一个新的最大宽度应用于
                  <code>ivue-tab-item</code> 。选项卡标签
                  <code>ivue-tab</code> 将自动居中。
            </p>
            <DocMarkdown
                  :code="code.fixedTabs"
                  jsfiddle="//jsfiddle.net/qq282126990/871rpd9g/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tabs/FixedTabs.vue"
            >
                  <FixedTabs slot="demo"></FixedTabs>
            </DocMarkdown>
            <h2>标签右对齐</h2>
            <p>
                  通过设置属性
                  <code>right</code> 将标签向右对齐
            </p>
            <DocMarkdown
                  :code="code.right"
                  jsfiddle="//jsfiddle.net/qq282126990/783koq94/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tabs/Right.vue"
            >
                  <Right slot="demo"></Right>
            </DocMarkdown>
            <h2>分页</h2>
            <p>如果选项卡标签溢出它们的容器，分页控件将会出现</p>
            <DocMarkdown
                  :code="code.pagination"
                  jsfiddle="//jsfiddle.net/qq282126990/r4fp1gLw/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tabs/Pagination.vue"
            >
                  <Pagination slot="demo"></Pagination>
            </DocMarkdown>
            <h2>自定义图标</h2>
            <p>
                  <code>prev-icon</code> 和
                  <code>next-icon</code> 可以用来设置分页器的自定义图标
            </p>
            <DocMarkdown
                  :code="code.icon"
                  jsfiddle="//jsfiddle.net/qq282126990/tbhdwaq9/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tabs/Icon.vue"
            >
                  <Icon slot="demo"></Icon>
            </DocMarkdown>
            <h2>API</h2>
            <h3>ivue-tabs</h3>
            <h4>props</h4>
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
                                    <td>value</td>
                                    <td>当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据</td>
                                    <td>String | Number</td>
                                    <td>默认为第一项</td>
                              </tr>
                              <tr>
                                    <td>height</td>
                                    <td>导航高度</td>
                                    <td>String | Number</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>centered</td>
                                    <td>导航内容居中</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>right</td>
                                    <td>导航内容向右</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>slider-color</td>
                                    <td>滑动条颜色</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>hide-slider</td>
                                    <td>滑动条隐藏</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>show-arrows</td>
                                    <td>是否显示导航栏箭头</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>next-icon</td>
                                    <td>
                                          导航栏箭头右边图标,通常与图标库
                                          <a
                                                target="_blank"
                                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                          >material.io</a>一起使用
                                    </td>
                                    <td>String</td>
                                    <td>chevron_right</td>
                              </tr>
                              <tr>
                                    <td>prev-icon</td>
                                    <td>
                                          导航栏箭头左边图标,通常与图标库
                                          <a
                                                target="_blank"
                                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                          >material.io</a>一起使用
                                    </td>
                                    <td>String</td>
                                    <td>chevron_left</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>ivue-tab</h3>
            <h4>props</h4>
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
                                    <td>disabled</td>
                                    <td>是否禁用当前项</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>ripple-disabled</td>
                                    <td>是否禁用涟漪效果</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>ripple-centered</td>
                                    <td>是否居中涟漪效果</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>ivue-tabs-slider</h3>
            <h4>props</h4>
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
                                    <td>color</td>
                                    <td>滑动条颜色</td>
                                    <td>String</td>
                                    <td>#fff</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>ivue-tab-item</h3>
            <h4>props</h4>
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
                                    <td>transition</td>
                                    <td>滑动动画</td>
                                    <td>String</td>
                                    <td>tab-transition</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/tabs';

import Default from './components/tabs/Default.vue';
import FixedTabs from './components/tabs/FixedTabs.vue';
import Right from './components/tabs/Right.vue';
import Pagination from './components/tabs/Pagination.vue';
import Icon from './components/tabs/Icon.vue';

export default {
      name: 'ivue-tabs',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            FixedTabs,
            Right,
            Pagination,
            Icon
      }
}
</script>

<style lang="scss" scope>
</style>
