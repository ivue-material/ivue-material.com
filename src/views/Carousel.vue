<template>
      <div v-highlight v-html="CarouselMdContent"></div>
</template>

<script>
import CarouselMd from '../markdown/Carousel.md';

export default {
      name: 'ivue-carousel',
      computed: {
            CarouselMdContent () {
                  return CarouselMd;
            }
      }
}
</script>

<style lang="scss" scope>
</style>
