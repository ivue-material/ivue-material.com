<template>
      <div class="loading-bar">
            <h1>LoadingBar 加载进度条</h1>
            <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。</p>
            <h2>说明</h2>
            <p>
                  <code>LoadingBar</code> 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，
                  <code>LoadingBar</code> 会模拟进度，当然也可以通过
                  <code>update()</code> 方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。
            </p>
            <h3>在路由中使用</h3>
            <pre><code ref="route">{{code.route}}</code></pre>

            <h3>在异步请求中使用</h3>
            <pre><code ref="ajax">{{code.ajax}}</code></pre>
            <h2>基本用法</h2>
            <p>
                  基本用法，点击
                  <code>Start</code> 开始进度，点击
                  <code>Finish</code> 结束。在调用
                  <code>start()</code>方法后，组件会自动模拟进度，当调用
                  <code>finish()</code>或
                  <code>error()</code>时，补全进度并自动消失。
            </p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/f6co38p7/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/loading-bar/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>API</h2>
            <h3>instance</h3>
            <p>通过直接调用以下方法来使用组件：</p>
            <ul>
                  <li>
                        <code>this.$IvueLoadingBar.start()</code>
                  </li>
                  <li>
                        <code>this.$IvueLoadingBar.finish()</code>
                  </li>
                  <li>
                        <code>this.$IvueLoadingBar.error()</code>
                  </li>
                  <li>
                        <code>this.$IvueLoadingBar.update(percent)</code>
                  </li>
            </ul>
            <p>具体说明如下：</p>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>属性</th>
                                    <th>说明</th>
                                    <th>参数</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>start</td>
                                    <td>开始从 0 显示进度条，并自动加载进度</td>
                                    <td>无</td>
                              </tr>
                              <tr>
                                    <td>finish</td>
                                    <td>结束进度条，自动补全剩余进度</td>
                                    <td>无</td>
                              </tr>
                              <tr>
                                    <td>error</td>
                                    <td>以错误的类型结束进度条，自动补全剩余进度</td>
                                    <td>无</td>
                              </tr>
                              <tr>
                                    <td>update</td>
                                    <td>精确加载到指定的进度</td>
                                    <td>percent，指定的进度百分比</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <br>
            <p>另外提供了全局配置和全局销毁的方法：</p>
            <ul>
                  <li>
                        <code>this.$IvueLoadingBar.config(options)</code>
                  </li>
                  <li>
                        <code>this.$IvueLoadingBar.destroy()</code>
                  </li>
            </ul>
            <pre><code ref="config">{{code.config}}</code></pre>
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
                                    <td>进度条的颜色</td>
                                    <td>String</td>
                                    <td>primary</td>
                              </tr>
                              <tr>
                                    <td>failedColor</td>
                                    <td>失败时的进度条颜色</td>
                                    <td>String</td>
                                    <td>error</td>
                              </tr>
                              <tr>
                                    <td>height</td>
                                    <td>进度条高度，单位 px</td>
                                    <td>Number</td>
                                    <td>2</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import Hljs from 'highlight.js';
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/loading-bar';

import Default from './components/loading-bar/Default.vue';

export default {
      name: 'ivue-loading-bar',
      data () {
            return {
                  code: Code
            }
      },
      mounted () {
            Hljs.highlightBlock(this.$refs.route);
            Hljs.highlightBlock(this.$refs.ajax);
            Hljs.highlightBlock(this.$refs.config);
      },
      components: {
            DocMarkdown,
            Default
      }
}
</script>

<style lang="scss" scope>
.loading-bar {
      li {
            list-style: square;
      }
      ul {
            margin-left: 20px;
      }
}
</style>
