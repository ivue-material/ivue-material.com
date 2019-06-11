<template>
    <div>
        <h1>Touch 手指指令</h1>
        <p>
            <code>v-touch</code>
            指令允许您捕获轻扫手势。
        </p>
        <h2>基本用法</h2>
        <p>
            只需在组件或HTML元素上使用
            <code>v-touch</code>指令即可启用手势监听
        </p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/yahe7wq0/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/directives/touch/Default.vue"
        >
            <Default slot="demo"></Default>
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
                        <td>value</td>
                        <td>可传入
                            <code>left</code>、
                            <code>right</code>、
                            <code>up</code>、
                            <code>down</code>
                        </td>
                        <td>Object</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Default from './directives/touch/Default.vue';
import Code from '@/code/touch';

export default {
    name: 'ivue-directives-touch',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
    }
}
</script>

<style lang="scss" scoped>
</style>
