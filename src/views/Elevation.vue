<template>
      <div>
            <h1>Elevation 海拔</h1>
            <p>
                  阴影提供有关物体深度和方向运动的重要视觉线索。它们是唯一的视觉提示，表明表面之间的分离量。
                  <code>Elevation</code> 确定其阴影的外观。
                  <code>Elevation</code>值在“Z-空间”和范围映射出0到24的深度。你可以在
                  <code>class</code> 里面引入
                  <code>ivue-elevation-[size]</code> 设置显示的深度。
            </p>
            <h2>首先引入CSS</h2>
            <pre><code class="hljs actionscript"><span class="hljs-meta"><span class="hljs-keyword">import</span> 'ivue-material/dist/styles/elevation.css';</span></code></pre>
            <h2>基本用法</h2>
            <p>基本用法，最简单的显示。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/jh8m79fb/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/elevation/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>API</h2>
            <h3>class</h3>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th>说明</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>ivue-elevation-[size]</td>
                              <td>向目标元素添加深度 ,大小可以是1到24.例如：
                                    <code>ivue-elevation-4</code>
                              </td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/elevation';

import Default from './components/elevation/Default.vue';

export default {
      name: 'ivue-elevation',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default
      }
}
</script>

<style lang="scss" scope>
</style>
