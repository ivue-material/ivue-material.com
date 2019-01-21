<template>
      <IvueCarousel v-model="value" autoplay :autoplay-speed="autoplaySpeed">
            <IvueCarouselItem>
                  <div class="demo-carousel">1</div>
            </IvueCarouselItem>
            <IvueCarouselItem>
                  <div class="demo-carousel">2</div>
            </IvueCarouselItem>
            <IvueCarouselItem>
                  <div class="demo-carousel">3</div>
            </IvueCarouselItem>
      </IvueCarousel>
</template>

<script>
export default {
      data () {
            return {
                  value: 0,
                  autoplaySpeed: 3000
            }
      }
}
</script>

<style lang="scss" scoped>
.demo-carousel {
      height: 200px;
      line-height: 200px;
      text-align: center;
      color: #fff;
      font-size: 20px;
      background: #506b9e;
}
</style>