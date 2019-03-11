<template>
    <div>
        <h1>Cascader 级联选择器</h1>
        <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
        <h2>基本用法</h2>
        <p>有两种触发子菜单的方式(click, hover)</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/cascader/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>禁用选项</h2>
        <p>通过在数据源中设置 disabled 字段来声明该选项是禁用</p>
        <DocMarkdown
            :code="code.disabled"
            jsfiddle
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/cascader/Disabled.vue"
        >
            <Disabled slot="demo"></Disabled>
        </DocMarkdown>
        <h2>选择即改变</h2>
        <p>点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。</p>
         <DocMarkdown
            :code="code.changeOnSelect"
            jsfiddle
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/cascader/ChangeOnSelect.vue"
        >
            <ChangeOnSelect slot="demo"></ChangeOnSelect>
        </DocMarkdown>
        <h2>动态加载次级选项</h2>
        <p>当选中某一级时，动态加载该级下的选项。</p>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/cascader';

import Default from './components/cascader/Default.vue';
import Disabled from './components/cascader/Disabled.vue';
import ChangeOnSelect from './components/cascader/ChangeOnSelect.vue';

export default {
    name: 'ivue-affix',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Disabled,
        ChangeOnSelect
    }
}
</script>
