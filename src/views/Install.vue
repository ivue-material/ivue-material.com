<template>
      <div>
            <h1>Install 安装</h1>
            <h2>浏览器支持</h2>
            <p>
                  <font>
                        <font>IVue支持所有</font>
                  </font>
                  <strong>
                        <font>
                              <font>现代浏览器</font>
                        </font>
                  </strong>
                  <font>
                        <font>，包括IE11和Safari 9+（使用polyfill）。</font>
                  </font>
            </p>
            <p>
                  <font>
                        <font>IVue利用ES2015 / 2017的功能，需要在 Internet Explorer 11和Safari 9/10中使用 polyfill。</font>
                        <font>如果您使用的是vue-cli-3，则会自动为您完成。</font>
                        <font>否则，在项目目录中，您可以安装 babel-polyfill ：</font>
                  </font>
            </p>
            <pre><code ref="polyfill">{{code.polyfill}}</code></pre>
            <p>在 index.js 文件中插入 babel-polyfill 。</p>
            <pre><code ref="index">{{code.index}}</code></pre>
            <p>
                  <font>
                        <font>建议您使用</font>
                  </font>
                  <code>babel-preset-env</code>
                  <font>
                        <font>相应的 polyfill，以确保只将必要的 polyfill 添加到您的应用程序中。</font>
                        <font>有关更多信息</font>
                  </font>
                  <code>babel-present-env</code>
                  <font>
                        <font>，请访问文档</font>
                  </font>
            </p>
            <pre><code ref="preset">{{code.preset}}</code></pre>
            <p>
                  安装完成后，将
                  <code>preset</code> 添加到您的
                  <code>.babelrc</code> 或
                  <code>babel.config.js</code>
            </p>
            <pre><code ref="babelrc">{{code.babelrc}}</code></pre>
            <p>
                  <font>
                        <font>遗憾的是</font>
                  </font>
                  <code>vue-cli-3</code>
                  <font>
                        <font>，不会自动带来IE11兼容性，您可能会遇到各种错误（例如未定义Symbol）。</font>
                        <font>为了帮助解决这些错误，您可能需要手动添加</font>
                  </font>
                  <code>transpileDependencies</code>
                  <font>
                        <font>参数到</font>
                  </font>
                  <code>vue.config.js</code>
            </p>
            <pre><code ref="config">{{code.config}}</code></pre>
            <h2>CDN 引入</h2>
            <p>
                  你可以通过
                  <a
                        target="_blank"
                        href="https://unpkg.com/ivue-material/"
                  >unpkg.com/ivue-material</a> 看到最新的版本资源，你也可以切换版本选择需要的资源：
            </p>
            <pre><code ref="cdn">{{code.cdn}}</code></pre>
            <h2>示例</h2>
            <p>通过 CDN 引入快速使用 ivue-material 写出一个示例。</p>
            <DocMarkdown
                  :code="code.example"
                  jsfiddle="//jsfiddle.net/qq282126990/68guqzk3/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/install/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>NPM</h2>
            <p>
                  NPM 能很好地和诸如
                  <code>webpack</code> 或
                  <code>Browserify</code> 模块打包器配合使用
            </p>
            <pre><code ref="npm">{{code.npm}}</code></pre>
      </div>
</template>

<script>
import Hljs from 'highlight.js';
import Code from '@/code/install';
import DocMarkdown from '@/components/DocMarkdown';
import Default from './components/install/Default.vue';

export default {
      name: 'install',
      data () {
            return {
                  code: Code
            }
      },
      mounted () {
            Hljs.highlightBlock(this.$refs.polyfill);
            Hljs.highlightBlock(this.$refs.index);
            Hljs.highlightBlock(this.$refs.preset);
            Hljs.highlightBlock(this.$refs.babelrc);
            Hljs.highlightBlock(this.$refs.config);
            Hljs.highlightBlock(this.$refs.cdn);
            Hljs.highlightBlock(this.$refs.npm);
      },
      components: {
            DocMarkdown,
            Default
      }
}
</script>

<style lang="scss" scope>
</style>
