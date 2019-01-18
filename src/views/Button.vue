<template>
      <div>
            <h1>Button 按钮</h1>
            <p>按钮传达用户触摸它们时将发生的操作。它们可以是平坦的，凸起的，任何色彩辅助类都可以用来改变背景或文字的颜色。</p>
            <h2>基本用法</h2>
            <p>基本用法，凸陷的按钮具有单击时增加的框阴影，这是默认样式。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/jw1ofmqk/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/button/Defalut.vue"
            >
                  <Defalut slot="demo"></Defalut>
            </DocMarkdown>
            <h2>平面</h2>
            <p>
                  通过设置属性
                  <code>flat</code> 使按钮没有框阴影，也没有背景。仅在悬停时显示按钮的背景
            </p>
            <DocMarkdown
                  :code="code.flat"
                  jsfiddle="//jsfiddle.net/qq282126990/kwhoceqr/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/button/Flat.vue"
            >
                  <Flat slot="demo"></Flat>
            </DocMarkdown>
            <h2>凹陷</h2>
            <p>
                  通过设置属性
                  <code>depressed</code> 使按钮仍然保持其背景颜色，但没有框阴影
            </p>
            <DocMarkdown
                  :code="code.depressed"
                  jsfiddle="//jsfiddle.net/qq282126990/jax7510u/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/button/Depressed.vue"
            >
                  <Depressed slot="demo"></Depressed>
            </DocMarkdown>
            <h2>轮廓</h2>
            <p>
                  通过设置属性
                  <code>outline</code> 使按钮继承其当前边框颜色
            </p>
            <DocMarkdown
                  :code="code.outline"
                  jsfiddle="//jsfiddle.net/qq282126990/7ek59mfx/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/button/Outline.vue"
            >
                  <Outline slot="demo"></Outline>
            </DocMarkdown>



            <div v-highlight v-html="ButtonMdContent"></div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/button';

import Defalut from './components/button/Default.vue';
import Flat from './components/button/Flat.vue';
import Depressed from './components/button/Depressed.vue';
import Outline from './components/button/Outline.vue';

import ButtonMd from '../markdown/Button.md';

export default {
      name: 'ivue-button',
      data () {
            return {
                  code: Code
            }
      },
      computed: {
            ButtonMdContent () {
                  return ButtonMd;
            }
      },
      components: {
            DocMarkdown,
            Defalut,
            Flat,
            Depressed,
            Outline
      }
}
</script>

<style lang="scss" scope>
</style>
