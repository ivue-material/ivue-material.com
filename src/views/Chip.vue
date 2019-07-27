<template>
    <div>
        <h2>基本用法</h2>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/8x9b7eok/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/collapse/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Chip from '@/code/chip';

import Default from './components/chip/Default.vue';

export default {
    name: 'ivue-chip',
    data () {
        return {
            code: Chip
        }
    },
    components: {
        DocMarkdown,
        Default
    }
}
</script>

<style lang="scss" scope>
</style>
