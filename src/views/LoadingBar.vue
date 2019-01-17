<template>
      <div v-highlight v-html="LoadingBarMdContent"></div>
</template>

<script>
import LoadingBarMd from '../markdown/LoadingBar.md';

export default {
      name: 'ivue-loading-bar',
      computed: {
           LoadingBarMdContent () {
                  return LoadingBarMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
