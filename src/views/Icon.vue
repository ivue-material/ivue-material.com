<template>
    <div>
        <h1>Icon 图标字体</h1>
        <p>
            图标可以使用图标字体或外部SVG。此外，可以接受一些大小尺寸，如
            <code>2x, 3x, 4x and 5x</code>
            。默认情况下,
            <code>ivue-icon</code> 使用的是
            <a
                target="_blank"
                href="https://material.io/tools/icons/?icon=mood_bad&amp;style=baseline"
            >Material Icons</a> 图标,您必须使用下划线而不是空格来传递图标的名称。例如：
            <code>&lt;ivue-icon&gt;thumb_up&lt;/ivue-icon&gt;</code>
        </p>
        <p>
            如不能使用图标请使用
            <code>npm</code>安装，
            <code>npm install material-icons@latest</code>
        </p>
        <p>
            然后在
            <code>main.js</code>中添加
            <code>import 'material-icons/iconfont/material-icons.css';</code>
        </p>
        <p>
            或者在
            <code>style</code>中添加
        </p>
        <p>
            <code>@import 'material-icons/iconfont/material-icons.css';</code>
        </p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/ec2bzyjs/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/icon/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>API</h2>
        <h3>props</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                        <th>value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>svg-src</td>
                        <td>svg图标的来源。请注意，对于外部domais上的图标，cors可能会影响其功能。</td>
                        <td>null</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>class</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                        <th>例子</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ivue-size-[dimension]</td>
                        <td>增加图标的大小。它接受 2x，3x，4x 或 5x</td>
                        <td>ivue-size-3x</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>events</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                        <th>value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>svg-loaded</td>
                        <td>在获取SVG图标后立即触发</td>
                        <td>null</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Default from './components/icon/Default.vue';
import Code from '@/code/icon';

export default {
    name: 'ivue-icon',
    data() {
        return {
            code: Code,
        };
    },
    components: {
        Default,
        DocMarkdown,
    },
};
</script>

<style lang="scss" scope>
</style>
