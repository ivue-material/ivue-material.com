<template>
      <div v-highlight v-html="InputMdContent"></div>
</template>

<script>
import InputMd from '../markdown/Input.md';

export default {
      name: 'ivue-input',
      computed: {
            InputMdContent () {
                  return InputMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
