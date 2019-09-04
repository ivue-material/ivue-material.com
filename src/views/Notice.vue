<template>
    <div class="notice">
        <h1>Notice 通知提醒</h1>
        <p>在界面右上角显示可关闭的全局通知，常用于以下场景：</p>
        <ul>
            <li>通知内容带有描述信息</li>
            <li>系统主动推送</li>
        </ul>
        <h2>基本用法</h2>
        <p>
            基本用法，默认在
            <code>4.5秒</code>后关闭。如果
            <code>desc</code>参数为空或不填，则自动应用仅标题模式下的样式。
        </p>
        <p>建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/qcmva7tz/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/notice/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>类型</h2>
        <p>带有状态图标的提醒。不同的提示状态：信息、成功、警告、错误</p>
        <DocMarkdown
            :code="code.type"
            jsfiddle="//jsfiddle.net/qq282126990/5z2o6ruf/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/notice/Type.vue"
        >
            <Type slot="demo"></Type>
        </DocMarkdown>
        <h2>自定义延迟时间</h2>
        <p>
            为 0 则不关闭，也可以使用
            <code>IvueNotice.config</code>全局配置，详情见API。
        </p>
        <DocMarkdown
            :code="code.duration"
            jsfiddle="//jsfiddle.net/qq282126990/x2bzd6oa/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/notice/Duration.vue"
        >
            <Duration slot="demo"></Duration>
        </DocMarkdown>
        <h2>Render 函数</h2>
        <p>
            你可以自定义
            <code>Render</code>函数来代替
            <code>desc</code>
        </p>
        <DocMarkdown
            :code="code.render"
            jsfiddle="//jsfiddle.net/qq282126990/z8sLmgpv/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/notice/Render.vue"
        >
            <Render slot="demo"></Render>
        </DocMarkdown>
        <h2>API</h2>
        <h3>instance</h3>
        <p>通过直接调用以下方法来使用组件：</p>
        <ul>
            <li>
                <code>this.$IvueNotice.open(config)</code>
            </li>
            <li>
                <code>this.$IvueNotice.info(config)</code>
            </li>
            <li>
                <code>this.$IvueNotice.success(config)</code>
            </li>
            <li>
                <code>this.$IvueNotice.warning(config)</code>
            </li>
            <li>
                <code>this.$IvueNotice.error(config)</code>
            </li>
        </ul>
        <p>
            参数
            <code>config</code>为对象，具体说明如下：
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
                        <td>title</td>
                        <td>通知提醒的标题</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>desc</td>
                        <td>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>render</td>
                        <td>自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容</td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>duration</td>
                        <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
                        <td>Number</td>
                        <td>4.5</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>当前通知的唯一标识</td>
                        <td>String</td>
                        <td>自动</td>
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
        <p>另外提供了全局配置、全局关闭某个通知和全局销毁的方法：</p>
        <ul>
            <li>
                <code>this.$IvueNotice.config(options)</code>
            </li>
            <li>
                <code>this.$IvueNotice.close(options)</code>
            </li>
            <li>
                <code>this.$IvueNotice.destroy()</code>
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
                        <td>4.5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Hljs from 'highlight.js';

import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/notice';

import Default from './components/notice/Default.vue';
import Type from './components/notice/Type.vue';
import Duration from './components/notice/Duration.vue';
import Render from './components/notice/Render.vue';

export default {
    name: 'ivue-notice',
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
        Duration,
        Render
    }
}
</script>

<style lang="scss" scope>
.notice {
  li {
    list-style: square;
  }
  ul {
    margin-left: 20px;
  }
}
</style>
