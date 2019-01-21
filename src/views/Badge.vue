<template>
      <div>
            <h1>Badge 徽标</h1>
            <p>主要用于通知未读数的角标，提醒用户点击。</p>
            <h2>基本用法</h2>
            <p>基本用法，最简单的使用方法。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/t8oxrh7j/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/bottom-nav/Default.vue"
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
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/bottom-nav/Dot.vue"
            >
                  <Dot slot="demo"></Dot>
            </DocMarkdown>
            <div v-highlight v-html="BadgeMdContent"></div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/badge';

import Default from './components/badge/Default.vue';
import Dot from './components/badge/Dot.vue';

import BadgeMd from '../markdown/Badge.md';

export default {
      name: 'ivue-badge',
      data () {
            return {
                  code: Code
            }
      },
      computed: {
            BadgeMdContent () {
                  return BadgeMd;
            }
      },
      components: {
            DocMarkdown,
            Default,
            Dot
      }
}
</script>

<style lang="scss" scope>
</style>
