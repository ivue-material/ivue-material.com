<template>
      <div v-highlight v-html="SwitchMdContent"></div>
</template>

<script>
import SwitchMd from '../markdown/Switch.md';

export default {
      name: 'ivue-switch',
      computed: {
           SwitchMdContent () {
                  return SwitchMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
