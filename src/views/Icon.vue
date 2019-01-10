<template>
      <div v-highlight v-html="IconMdContent"></div>
</template>

<script>
import IconMd from '../markdown/Icon.md';

export default {
      name: 'ivue-icon',
      computed: {
            IconMdContent () {
                  return IconMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
