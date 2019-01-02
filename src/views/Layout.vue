<template>
      <div v-highlight v-html="LayoutMdContent"></div>
</template>

<script>
import LayoutMd from '../markdown/Layout.md';

export default {
      name: 'start-use',
      computed: {
            LayoutMdContent () {
                  return LayoutMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
