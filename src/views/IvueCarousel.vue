<template>
      <div v-highlight v-html="IvueIconMdContent"></div>
</template>

<script>
import IvueCarouselMd from '../markdown/IvueCarousel.md';

export default {
      name: 'ivue-carousel',
      computed: {
            IvueCarouselMdContent () {
                  return IvueCarouselMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
