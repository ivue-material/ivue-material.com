<template>
      <div v-highlight v-html="BreadcrumbsMdContent"></div>
</template>

<script>
import BreadcrumbsMd from '../markdown/Breadcrumbs.md';

export default {
      name: 'ivue-breadcrumbs',
      computed: {
            BreadcrumbsMdContent () {
                  return BreadcrumbsMd;
            }
      }
}
</script>

<style lang="scss" scope>
    
</style>
