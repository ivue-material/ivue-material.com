<template>
      <div v-highlight v-html="StartUseMdContent" class="home"></div>
</template>

<script>
import StartUseMd from '../markdown/StartUse.md';

export default {
      name: 'start-use',
      computed: {
            StartUseMdContent () {
                  return StartUseMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
