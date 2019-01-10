<template>
      <div v-highlight v-html="ContentMdContent"></div>
</template>

<script>
import ContentMd from '../markdown/Content.md';

export default {
      name: 'ivue-content',
      computed: {
            ContentMdContent () {
                  return ContentMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
