<template>
      <div v-highlight v-html="InstallMdContent"></div>
</template>

<script>
import InstallMd from '../markdown/Install.md';

export default {
      name: 'install',
      computed: {
            InstallMdContent () {
                  return InstallMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
