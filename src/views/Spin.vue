<template>
    <div>
        <h1>Spin 加载中</h1>
        <p>用于正在获取数据中，适当的等待动画可以提升用户体验。</p>
        <h2>基本用法</h2>
        <p>
            最简单使用
            <code>IvueSpin</code>的方法。
        </p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/d7bvsmjf/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/spin/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>尺寸</h2>
        <p>
            通过设置
            <code>size</code>属性为
            <code>large(大)</code>和
            <code>small(小)</code>将
            <code>IvueSpin</code>设置不同的尺寸，不设置为默认（中）尺寸
        </p>
        <DocMarkdown
            :code="code.size"
            jsfiddle="//jsfiddle.net/qq282126990/devf6258/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/spin/Size.vue"
        >
            <Size slot="demo"></Size>
        </DocMarkdown>
        <h2>居中固定</h2>
        <p>
            通过设置属性
            <code>fix</code>使
            <code>IvueSpin</code>居中。
            <strong>（注意:在容器内部垂直居中固定，需要父级有relative或absolute）</strong>
        </p>
        <DocMarkdown
            :code="code.fix"
            jsfiddle="//jsfiddle.net/qq282126990/7b28z1fj/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/spin/Fix.vue"
        >
            <Fix slot="demo"></Fix>
        </DocMarkdown>
        <h2>自定义内容</h2>
        <p>可以是简单的文字，也可以是很复杂的动画。自定义内容</p>
        <DocMarkdown
            :code="code.content"
            jsfiddle="//jsfiddle.net/qq282126990/m5oex0j7/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/spin/Content.vue"
        >
            <Content slot="demo"></Content>
        </DocMarkdown>
        <h2>整页加载</h2>
        <p>
            使用内置的
            <code>$IvueSpin</code>方法可以全局加载。
        </p>
        <DocMarkdown
            :code="code.loading"
            jsfiddle="//jsfiddle.net/qq282126990/mfny9vco/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/spin/Loading.vue"
        >
            <Loading slot="demo"></Loading>
        </DocMarkdown>
        <h2>API</h2>
        <h3>props</h3>
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
                        <td>size</td>
                        <td>
                            可选值为
                            <code>large</code>和
                            <code>small</code>或者不设置
                        </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>fix</td>
                        <td>
                            是否居中固定，需要父级有
                            <code>relative</code>或
                            <code>absolute</code>
                        </td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>slot</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>default</td>
                        <td>自定义的内容，设置后，默认的样式不生效</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/spin';

import Default from './components/spin/Default.vue';
import Size from './components/spin/Size.vue';
import Fix from './components/spin/Fix.vue';
import Content from './components/spin/Content.vue';
import Loading from './components/spin/Loading.vue';

export default {
    name: 'ivue-spin',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Size,
        Fix,
        Content,
        Loading
    }
}
</script>
