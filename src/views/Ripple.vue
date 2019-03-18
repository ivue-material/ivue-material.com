<template>
    <div>
        <h1>Ripple 波纹指令</h1>
        <p>
            <code>v-ripple</code>
            指令被用于显示用户的操作。 它可以应用于任何块级元素。许多组件都带有内置的波纹指令。比如
            <code>ivue-button</code>、
            <code>ivue-tab</code>等等。
        </p>
        <h2>基本用法</h2>
        <p>
            只需在组件或HTML元素上使用
            <code>v-ripple</code>指令即可启用基本纹波功能
        </p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/Lapxvrd7/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/button/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>Center 波纹居中</h2>
        <p>
            通过设置属性
            <code>center</code>，使纹波始终来自目标的中心。
        </p>
        <DocMarkdown
            :code="code.center"
            jsfiddle="//jsfiddle.net/qq282126990/jx4Lvqsf/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/button/Center.vue"
        >
            <Center slot="demo"></Center>
        </DocMarkdown>
        <h2>Color 自定义波纹颜色</h2>
        <p>
            通过设置属性
            <code>class</code>，改变波纹颜色
        </p>
        <DocMarkdown
            :code="code.center"
            jsfiddle="//jsfiddle.net/qq282126990/ns6ef2uc/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/button/Color.vue"
        >
            <Color slot="demo"></Color>
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
                        <td>
                           可传入 <code>center</code>、<code>class</code>、<code>Boolean</code>
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
import Default from './directives/ripple/Default.vue';
import Center from './directives/ripple/Center.vue';
import Color from './directives/ripple/Color.vue';
import Code from '@/code/ripple';

export default {
    name: 'ivue-directives-ripple',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Center,
        Color
    }
}
</script>

<style scoped>
</style>
