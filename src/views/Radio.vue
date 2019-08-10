<template>
    <div>
        <h1>Radio 单选框</h1>
        <p>可选项单项选择,切换单选选择状态</p>
        <h2>基本用法</h2>
        <p>使用 v-model 双向绑定数据。</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/mg4a90bt/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/radio/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Default from './components/radio/Default.vue';
import Code from '@/code/radio';

export default {
    name: 'ivue-component-radio',
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

<style scoped>
</style>
