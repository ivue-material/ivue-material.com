<template>
      <div>
            <h1>StartUse 开始使用</h1>
            <h2>引入 IVue Material</h2>
            <p>
                  在
                  <code>webpack</code> 入口页面
                  <code>main.js</code> 中如下配置：
            </p>
            <pre><code ref="main">{{code.main}}</code></pre>
            <h2>按需引入</h2>
            <p>
                  需要加入插件
                  <a
                        target="_blank"
                        href="https://github.com/ant-design/babel-plugin-import"
                  >babel-plugin-import</a> 即可实现按需加载组件，减少文件体积。
                  安装并配置文件
                  <code>.babelrc</code>：
            </p>
            <pre><code ref="plugins">{{code.plugins}}</code></pre>
            <p>然后按需引入组件，减少项目体积：</p>
            <pre><code ref="import">{{code.import}}</code></pre>
            <h2>引入样式</h2>
            <pre><code ref="styles">{{code.styles}}</code></pre>
      </div>
</template>

<script>
import Hljs from 'highlight.js';

import Code from '@/code/startUse';

export default {
      name: 'start-use',
      data () {
            return {
                  code: Code
            }
      },
      mounted () {
            Hljs.highlightBlock(this.$refs.main);
            Hljs.highlightBlock(this.$refs.plugins);
            Hljs.highlightBlock(this.$refs.import);
            Hljs.highlightBlock(this.$refs.styles);
      }
}
</script>

<style lang="scss" scope>
</style>
