<template>
      <div v-highlight v-html="IvueSwitchMdContent"></div>
</template>

<script>
import IvueSwitchMd from '../markdown/IvueSwitch.md';

export default {
      name: 'ivue-switch',
      computed: {
           IvueSwitchMdContent () {
                  return IvueSwitchMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
