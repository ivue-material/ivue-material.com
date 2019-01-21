<template>
      <div>
            <h1>Layout 布局</h1>
            <p>响应式布局适应任何可能的屏幕尺寸。此UI指南包括一个灵活的网格，可确保布局之间的一致性，有关内容如何在不同屏幕上回流的断点详细信息，以及应用程序如何从小屏幕扩展到超大屏幕的说明。</p>
            <p>默认情况下，您可以创建无装饰布局或使网格系统计算每个屏幕大小的最佳边距大小。</p>
            <p>布局系统使用行和列的概念。您可以创建大小的列。您将能够为每个列设置大小，即使在嵌套列上也是如此。</p>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th>说明</th>
                              <th>size</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>xsmall</td>
                              <td>适用于宽度最大为600px的屏幕。适用于肖像中的小型，中型和大型手机</td>
                              <td>
                                    <strong>&lt;600px</strong>
                              </td>
                        </tr>
                        <tr>
                              <td>small</td>
                              <td>适用于宽度介于600px和960px之间的屏幕</td>
                              <td>
                                    <strong>960px</strong>
                              </td>
                        </tr>
                        <tr>
                              <td>medium</td>
                              <td>适用于宽度介于960px和1280px之间的屏幕</td>
                              <td>
                                    <strong>1280px</strong>
                              </td>
                        </tr>
                        <tr>
                              <td>large</td>
                              <td>适用于宽度介于1280像素到1920像素之间的屏幕</td>
                              <td>
                                    <strong>1920px</strong>
                              </td>
                        </tr>
                        <tr>
                              <td>xlarge</td>
                              <td>适用于宽度超过1920px的屏幕</td>
                              <td>
                                    <strong>&gt;1920px</strong>
                              </td>
                        </tr>
                  </tbody>
            </table>
            <h2>列布局</h2>
            <p>
                  要开始使用布局，您需要做的是创建一个
                  <code>ivue-layout</code> 父元素，它将包含一个列表
                  <code>ivue-layout-item</code> 。您可以设置所需的列数：
            </p>
            <br>
            <table>
                  <thead>
                        <tr>
                              <th>屏幕尺寸</th>
                              <th>间隔</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>xsmall</td>
                              <td>8px</td>
                        </tr>
                        <tr>
                              <td>small</td>
                              <td>16px</td>
                        </tr>
                        <tr>
                              <td>medium</td>
                              <td>24px</td>
                        </tr>
                        <tr>
                              <td>large</td>
                              <td>48px</td>
                        </tr>
                  </tbody>
            </table>
            <br>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/0cem9wkq/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/layout/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <br>
            <p>
                  默认情况下，布局之间没有空格，这对于常规布局有点不好，例如卡片列表,您可以使用
                  <code>ivue-gutter</code> 为自动计算元素之间的空间，这些空间基于屏幕宽度：
            </p>
            <br>
            <p>查看这段代码并调整浏览器大小以查看更改：</p>
            <br>
            <DocMarkdown
                  :code="code.gutter"
                  jsfiddle="//jsfiddle.net/qq282126990/eqxaf0g3/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/layout/Gutter.vue"
            >
                  <Gutter slot="demo"></Gutter>
            </DocMarkdown>
            <br>
            <p>同时列布局也适用于嵌套布局：</p>
            <br>
            <DocMarkdown
                  :code="code.nested"
                  jsfiddle="//jsfiddle.net/qq282126990/qr6v4eux/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/layout/Nested.vue"
            >
                  <Nested slot="demo"></Nested>
            </DocMarkdown>
            <h2>对齐</h2>
            <p>
                  使用
                  <code>ivue-alignment-[horizontal]-[vertical]</code> 类，例如
                  <code>ivue-alignment-top-center</code> 。对齐适用于父元素，并将影响所有子项的位置.
            </p>
            <br>
            <DocMarkdown
                  :code="code.alignment"
                  jsfiddle="//jsfiddle.net/qq282126990/g4zbkdry/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/layout/Alignment.vue"
            >
                  <Alignment slot="demo"></Alignment>
            </DocMarkdown>
            <h2>尺寸</h2>
            <p>
                  布局系统根据项目数量计算子项大小。但是如果你想为每个项目设置尺寸。只需在项目中设置一个
                  <code>ivue-size-[amount]</code> ，例如
                  <code>ivue-size-30</code> 。总是以％表示的大小可以是5的倍数，也可以接受值33和66。
            </p>
            <br>
            <DocMarkdown
                  :code="code.size"
                  jsfiddle="//jsfiddle.net/qq282126990/m1a2y3Lx/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/layout/Size.vue"
            >
                  <Size slot="demo"></Size>
            </DocMarkdown>
            <h2>响应</h2>
            <p>
                  使用流体布局，你可以根据断点名称更改它们，加入类
                  <code>ivue-[breakpoint]-size-[amount]</code> 布局引擎将发挥神奇作用。尝试调整浏览器的大小：
            </p>
            <br>
            <DocMarkdown
                  :code="code.response"
                  jsfiddle="//jsfiddle.net/qq282126990/t80v61o3/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/layout/Response.vue"
            >
                  <Response slot="demo"></Response>
            </DocMarkdown>
            <h2>隐藏元素</h2>
            <p>
                  在较小的屏幕上隐藏元素的需求是相当普遍的。你可以使用这些
                  <code>ivue-[breakpoint]-hide</code> 类来做到这一点：
            </p>
            <br>
            <DocMarkdown
                  :code="code.hide"
                  jsfiddle="//jsfiddle.net/qq282126990/wmz2y6gr/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/layout/Hide.vue"
            >
                  <Hide slot="demo"></Hide>
            </DocMarkdown>
            <h2>API</h2>
            <h3>ivue-layout</h3>
            <h4>class</h4>
            <p>以下类可以应用于任何HTML元素：</p>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th>说明</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>ivue-gutter</td>
                              <td>在布局项之间启用自动装订线空间</td>
                        </tr>
                        <tr>
                              <td>ivue-layout-nowrap</td>
                              <td>默认情况下，布局项将始终包装在父布局下。如果要禁用此行为，请使用此类，但响应性将不起作用</td>
                        </tr>
                        <tr>
                              <td>ivue-alignment-[x]-[y]</td>
                              <td>
                                    根据每个坐标的值设置所有子项的对齐方式。只有当x和y都存在时，对齐才有效如：
                                    <code>ivue-alignment-top-center</code>。可能的值是：
                                    <code>top</code> |
                                    <code>center</code> |
                                    <code>left</code> |
                                    <code>space-around</code> |
                                    <code>space-between</code> |
                              </td>
                        </tr>
                  </tbody>
            </table>
            <h3>ivue-layout-item</h3>
            <h4>class</h4>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th>说明</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>ivue-size-[amount]</td>
                              <td
                                   
                              >设置特定item的大小。数量可以是五的倍数， 例如ivue-size-25。还可以接受33,66和100以便于原型设计</td>
                        </tr>
                        <tr>
                              <td>ivue-[breakpoint]-size-[amount]</td>
                              <td>
                                    将大小设置为特定 breakpoint 上的特定项。可能的值是：
                                    <code>xsmall</code> |
                                    <code>small</code> |
                                    <code>medium</code> |
                                    <code>large</code> |
                                    <code>xlarge</code> |
                              </td>
                        </tr>
                  </tbody>
            </table>
            <h3>ivue-hide</h3>
            <h4>class</h4>
            <p>以下类可以应用于任何HTML元素：</p>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th>说明</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>ivue-[breakpoint]-hide</td>
                              <td>
                                    隐藏特定断点上的特定元素。可能的值是：
                                    <code>xsmall</code> |
                                    <code>small</code> |
                                    <code>medium</code> |
                                    <code>large</code> |
                                    <code>xlarge</code>
                              </td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/layout';

import Default from './components/layout/Default.vue';
import Gutter from './components/layout/Gutter.vue';
import Nested from './components/layout/Nested.vue';
import Alignment from './components/layout/Alignment.vue';
import Size from './components/layout/Size.vue';
import Response from './components/layout/Response.vue';
import Hide from './components/layout/Hide.vue';

export default {
      name: 'layout',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Gutter,
            Nested,
            Alignment,
            Size,
            Response,
            Hide
      }
}
</script>

<style lang="scss" scope>
</style>
