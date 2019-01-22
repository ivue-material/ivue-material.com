<template>
      <div>
            <h1>Breadcrumbs 面包屑</h1>
            <p>
                  <code>ivue-breadcrumbs-item</code>组件是一个页面导航辅助器。
            </p>
            <p>
                  它可以接受一个
                  <a
                        target="_blank"
                        href="https://material.io/tools/icons/?icon=mood_bad&amp;style=baseline"
                  >Material Icons</a> 图标或字符作为分隔符，一个包含字段 href ， text 和 disabled 的对象数组传递给组件 items 。此外，还有一个常规插槽用于更多地控制面包屑的使用
                  <code>ivue-breadcrumbs-item</code>
            </p>
            <h2>基本用法</h2>
            <p>基本用法，面包屑使用文本分隔符，也可以是任何字符串。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/18mLr0vh/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/breadcrumbs/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>图标分隔符</h2>
            <p>
                  面包屑可以使
                  <a
                        target="_blank"
                        href="https://material.io/tools/icons/?icon=mood_bad&amp;style=baseline"
                  >Material Icons</a>中的任何图标作为分隔符。
            </p>
            <DocMarkdown
                  :code="code.icon"
                  jsfiddle="//jsfiddle.net/qq282126990/qkw5gz1j/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/breadcrumbs/Icon.vue"
            >
                  <Icon slot="demo"></Icon>
            </DocMarkdown>
            <h2>选项插槽</h2>
            <p>
                  使用
                  <code>ivue-breadcrumbs-item</code>，你可以更多地控制面包屑的使用。
            </p>
            <DocMarkdown
                  :code="code.item"
                  jsfiddle="//jsfiddle.net/qq282126990/g5mde61p/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/breadcrumbs/Item.vue"
            >
                  <Item slot="demo"></Item>
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
                                    <td>divider</td>
                                    <td>分隔符</td>
                                    <td>String</td>
                                    <td>/</td>
                              </tr>
                              <tr>
                                    <td>justify-center</td>
                                    <td>中间对齐面包屑</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>justify-end</td>
                                    <td>尾部对齐面包屑</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>slots</h3>
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
            <h2>ivue-breadcrumbs-item</h2>
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
                                    <td>disabled</td>
                                    <td>当前面包屑是否处于禁用状态</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>tag</td>
                                    <td>
                                          <code>ivue-breadcrumbs-item</code> 渲染的标签tag
                                    </td>
                                    <td>String</td>
                                    <td>a</td>
                              </tr>
                              <tr>
                                    <td>to</td>
                                    <td>
                                          <code>vue-router</code> 导航
                                    </td>
                                    <td>String,Object</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>href</td>
                                    <td>
                                          <code>a</code>标签链接跳转
                                    </td>
                                    <td>String,Object</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>target</td>
                                    <td>
                                          用于设置
                                          <code>a</code> 链接的
                                          <code>target</code> 属性
                                    </td>
                                    <td>String</td>
                                    <td>_self</td>
                              </tr>
                              <tr>
                                    <td>replace</td>
                                    <td>
                                          调用
                                          <code>router.replace()</code>
                                    </td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>nuxt</td>
                                    <td>启用nuxt.js的导航 (前提是使用了nuxt.js )</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>exact-active-class</td>
                                    <td>
                                          当链接被精确匹配的时候应该激活的
                                          <code>class</code>
                                    </td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>append</td>
                                    <td>在当前 (相对) 路径前添加基路径</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>active-class</td>
                                    <td>链接激活时使用的 CSS 类名</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>exact</td>
                                    <td>
                                          "是否激活" 默认类名的依据是 inclusive match (全包含匹配)。 举个例子，如果当前的路径是 /a 开头的，那么
                                          <code>&lt;router-link to="/a"&gt;</code> 也会被设置 CSS 类名。
                                    </td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h3>slots</h3>
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
import Code from '@/code/breadcrumbs';

import Default from './components/breadcrumbs/Default.vue';
import Icon from './components/breadcrumbs/Icon.vue';
import Item from './components/breadcrumbs/Item.vue';

export default {
      name: 'ivue-breadcrumbs',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Icon,
            Item
      }
}
</script>

<style lang="scss" scope>
</style>
