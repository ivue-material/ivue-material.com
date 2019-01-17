<template>
      <div v-highlight v-html="BadgeMdContent"></div>
</template>

<script>
import BadgeMd from '../markdown/Badge.md';

export default {
      name: 'ivue-bottom-nav',
      computed: {
            BadgeMdContent () {
                  return BadgeMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
