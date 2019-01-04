<template>
      <div v-highlight v-html="IvueIconMdContent"></div>
</template>

<script>
import IvueIconMd from '../markdown/IvueIcon.md';

export default {
      name: 'start-use',
      computed: {
            IvueIconMdContent () {
                  return IvueIconMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
