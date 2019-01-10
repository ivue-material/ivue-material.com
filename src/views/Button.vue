<template>
      <div v-highlight v-html="ButtonMdContent"></div>
</template>

<script>
import ButtonMd from '../markdown/Button.md';

export default {
      name: 'ivue-button',
      computed: {
            ButtonMdContent () {
                  return ButtonMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
