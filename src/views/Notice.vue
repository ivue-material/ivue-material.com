<template>
      <div v-highlight v-html="NoticeMdContent"></div>
</template>

<script>
import NoticeMd from '../markdown/Notice.md';

export default {
      name: 'ivue-notice',
      computed: {
            NoticeMdContent () {
                  return NoticeMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
