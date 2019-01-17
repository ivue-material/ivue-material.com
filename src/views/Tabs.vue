<template>
      <div v-highlight v-html="TabsMdContent"></div>
</template>

<script>
import TabsMd from '../markdown/Tabs.md';

export default {
      name: 'ivue-tabs',
      computed: {
          TabsMdContent () {
                  return TabsMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
