<template>
      <div v-highlight v-html="AffixMdContent"></div>
</template>

<script>
import AffixMd from '../markdown/Affix.md';

export default {
      name: 'ivue-affix',
      computed: {
            AffixMdContent () {
                  return AffixMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
