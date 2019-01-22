<template>
      <div class="message">
            <h1>Message 全局提示</h1>
            <p>轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。</p>
            <h2>基本用法</h2>
            <p>基本用法，组件默认在1.5秒后消失</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/mj3po5L6/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/message/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>类型</h2>
            <p>带有状态图标的提醒。不同的提示状态：信息、成功、警告、错误</p>
            <DocMarkdown
                  :code="code.type"
                  jsfiddle="//jsfiddle.net/qq282126990/drwfyqso/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/message/Type.vue"
            >
                  <Type slot="demo"></Type>
            </DocMarkdown>
            <h2>加载中</h2>
            <p>
                  当前提示现实为
                  <code>Loading</code> 的状态，并异步在某个时机移除。
            </p>
            <DocMarkdown
                  :code="code.loading"
                  jsfiddle="//jsfiddle.net/qq282126990/4n2efhs5/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/message/Loading.vue"
            >
                  <Loading slot="demo"></Loading>
            </DocMarkdown>
            <h2>自定义延迟时间</h2>
            <p>
                  为 0 则不关闭，也可以使用
                  <code>IvueMessage.config</code> 全局配置，详情见API。
            </p>
            <DocMarkdown
                  :code="code.duration"
                  jsfiddle="//jsfiddle.net/qq282126990/6y5o2g4q/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/message/Duration.vue"
            >
                  <Duration slot="demo"></Duration>
            </DocMarkdown>
            <h2>可关闭</h2>
            <p>
                  将参数设置为一个对象，并指定
                  <code>closable</code> 为
                  <code>true</code> 后可以手动关闭提示，完整参数详见API。
            </p>
            <DocMarkdown
                  :code="code.closable"
                  jsfiddle="//jsfiddle.net/qq282126990/s3ay4umb/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/message/Closable.vue"
            >
                  <Closable slot="demo"></Closable>
            </DocMarkdown>
            <h2>Render 函数</h2>
            <p>
                  使用
                  <code>Render</code> 函数自定义内容。
            </p>
            <DocMarkdown
                  :code="code.render"
                  jsfiddle="//jsfiddle.net/qq282126990/93yjqrb8/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/message/Render.vue"
            >
                  <Render slot="demo"></Render>
            </DocMarkdown>
            <h2>API</h2>
            <h3>instance</h3>
            <p>通过直接调用以下方法来使用组件：</p>
            <ul>
                  <li>
                        <code>this.$IvueMessage.info(config)</code>
                  </li>
                  <li>
                        <code>this.$IvueMessage.success(config)</code>
                  </li>
                  <li>
                        <code>this.$IvueMessage.warning(config)</code>
                  </li>
                  <li>
                        <code>this.$IvueMessage.error(config)</code>
                  </li>
                  <li>
                        <code>this.$IvueMessage.loading(config)</code>
                  </li>
            </ul>
            <p>
                  参数
                  <code>config</code> 为对象，具体说明如下：
            </p>
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
                                    <td>content</td>
                                    <td>提示内容</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>render</td>
                                    <td>自定义描述内容，使用 Vue 的 Render 函数</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>closable</td>
                                    <td>是否显示关闭按钮</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>duration</td>
                                    <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
                                    <td>Number</td>
                                    <td>1.5</td>
                              </tr>
                              <tr>
                                    <td>onClose</td>
                                    <td>关闭时的回调</td>
                                    <td>Function</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <br>
            <p>另外提供了全局配置和全局销毁的方法：</p>
            <ul>
                  <li>
                        <code>this.$IvueMessage.config(options)</code>
                  </li>
                  <li>
                        <code>this.$IvueMessage.destroy()</code>
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
                                    <td>top</td>
                                    <td>通知组件距离顶端的距离，单位像素</td>
                                    <td>Number</td>
                                    <td>24</td>
                              </tr>
                              <tr>
                                    <td>duration</td>
                                    <td>默认自动关闭的延时，单位秒</td>
                                    <td>Number</td>
                                    <td>1.5</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import Hljs from 'highlight.js';

import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/message';

import Default from './components/message/Default.vue';
import Type from './components/message/Type.vue';
import Loading from './components/message/Loading.vue';
import Duration from './components/message/Duration.vue';
import Closable from './components/message/Closable.vue';
import Render from './components/message/Render.vue';

export default {
      name: 'ivue-message',
      data () {
            return {
                  code: Code
            }
      },
      mounted () {
            Hljs.highlightBlock(this.$refs.config);
      },
      components: {
            DocMarkdown,
            Default,
            Type,
            Loading,
            Duration,
            Closable,
            Render
      }
}
</script>

<style lang="scss" scope>
.message {
      li {
            list-style: square;
      }
      ul {
            margin-left: 20px;
      }
}
</style>
