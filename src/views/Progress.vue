<template>
      <div v-highlight v-html="ProgressMdContent"></div>
</template>

<script>
import ProgressMd from '../markdown/Progress.md';

export default {
      name: 'ivue-progress',
      computed: {
           ProgressMdContent () {
                  return ProgressMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
