<template>
      <div v-highlight v-html="IvueButtonMdContent"></div>
</template>

<script>
import IvueButtonMd from '../markdown/IvueButton.md';

export default {
      name: 'start-use',
      computed: {
            IvueButtonMdContent () {
                  return IvueButtonMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
