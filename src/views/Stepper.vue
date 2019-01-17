<template>
      <div v-highlight v-html="StepperMdContent"></div>
</template>

<script>
import StepperMd from '../markdown/Stepper.md';

export default {
      name: 'ivue-stepper',
      computed: {
            StepperMdContent () {
                  return StepperMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
