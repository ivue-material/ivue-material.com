<template>
      <div v-highlight v-html="SelectMdContent"></div>
</template>

<script>
import SelectMd from '../markdown/Select.md';

export default {
      name: 'layout',
      computed: {
           SelectMdContent () {
                  return SelectMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
