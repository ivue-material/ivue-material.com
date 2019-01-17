<template>
      <div v-highlight v-html="AutoCompleteMdContent"></div>
</template>

<script>
import AutoCompleteMd from '../markdown/AutoComplete.md';

export default {
      name: 'ivue-auto-complete',
      computed: {
           AutoCompleteMdContent () {
                  return AutoCompleteMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
