<template>
      <div v-highlight v-html="InstallMdContent"></div>
</template>

<script>
import InstallMd from '../markdown/Install.md';

export default {
      name: 'home',
      data () {
            return {
            }
      },
      computed: {
            InstallMdContent () {
                  return InstallMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
