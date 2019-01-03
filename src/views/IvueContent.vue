<template>
      <div v-highlight v-html="IvueContentMdContent"></div>
</template>

<script>
import IvueContentMd from '../markdown/IvueContent.md';

export default {
      name: 'start-use',
      computed: {
            IvueContentMdContent () {
                  return IvueContentMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
