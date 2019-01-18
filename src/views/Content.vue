<template>
      <div>
            <h1>Content 内容</h1>
            <p>内容组件通常用于类似一张纸。</p>
            <h2>基本用法</h2>
            <p>基本用法，最普通的显示。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/dkwLf2m0/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/content/Defalut.vue"
            >
                  <Defalut slot="demo"></Defalut>
            </DocMarkdown>
            <h2>标签</h2>
            <p>
                  通过设置属性
                  <code>ivue-tag</code>，让组件输出其他标签，如：a标签
            </p>
            <DocMarkdown
                  :code="code.tag"
                  jsfiddle="//jsfiddle.net/qq282126990/uy0eorLb/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/content/Tag.vue"
            >
                  <Tag slot="demo"></Tag>
            </DocMarkdown>
            <h2>API</h2>
            <h3>props</h3>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th align="left">说明</th>
                              <th>类型</th>
                              <th>默认</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>ivue-tag</td>
                              <td align="left">输出标签。例如，当你想创建一个部分而不是div时很有用</td>
                              <td>String</td>
                              <td>div</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/content';

import Defalut from './components/content/Default.vue';
import Tag from './components/content/Tag.vue';

export default {
      name: 'ivue-content',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Defalut,
            Tag
      }
}
</script>

<style lang="scss" scope>
</style>
