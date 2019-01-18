<template>
      <div>
            <h1>Icon 图标字体</h1>
            <p>
                  图标可以使用图标字体或外部SVG。此外，可以接受一些大小尺寸，如
                  <code>2x, 3x, 4x and 5x</code>
                  。默认情况下, IvueIcon 使用的是
                  <a
                        target="_blank"
                        href="https://material.io/tools/icons/?icon=mood_bad&amp;style=baseline"
                  >material io</a> 图标,您必须使用下划线而不是空格来传递图标的名称。例如：
                  <code>&lt;ivue-icon&gt;thumb_up&lt;/ivue-icon&gt;</code>
            </p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/ec2bzyjs/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/icon/Defalut.vue"
            >
                  <Defalut slot="demo"></Defalut>
            </DocMarkdown>
            <h2>API</h2>
            <h3>props</h3>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th align="left">说明</th>
                              <th align="left">value</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>svg-src</td>
                              <td align="left">svg图标的来源。请注意，对于外部domais上的图标，cors可能会影响其功能。</td>
                              <td align="left">null</td>
                        </tr>
                  </tbody>
            </table>
            <h3>class</h3>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th align="left">说明</th>
                              <th align="left">例子</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>ivue-size-[dimension]</td>
                              <td align="left">增加图标的大小。它接受2x，3x，4x或5x</td>
                              <td align="left">ivue-size-3x</td>
                        </tr>
                  </tbody>
            </table>
            <h3>events</h3>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th align="left">说明</th>
                              <th align="left">value</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>svg-loaded</td>
                              <td align="left">在获取SVG图标后立即触发</td>
                              <td align="left">null</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Defalut from './components/icon/Default.vue';
import Code from '@/code/icon';

import IconMd from '../markdown/Icon.md';

export default {
      name: 'ivue-icon',
      data () {
            return {
                  code: Code
            }
      },
      computed: {
            IconMdContent () {
                  return IconMd;
            }
      },
      components: {
            Defalut,
            DocMarkdown
      }
}
</script>

<style lang="scss" scope>
</style>
