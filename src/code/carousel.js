let code = {};


code.base = `
<template>
      <IvueCarousel v-model="value">
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
                        value: 0
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
`;

code.autoplay = `
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
`;


code.complex = `
<template>
      <div>
            <div class="switch">开启loop
                  <IvueSwitch @on-change="handleChange">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                  </IvueSwitch>
            </div>
            <div class="switch">开启自动切换
                  <IvueSwitch @on-change="handleAutoPlay">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                  </IvueSwitch>
            </div>
            <div class="switch">圆形指示器
                  <IvueSwitch @on-change="handleRadiusDot">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                  </IvueSwitch>
            </div>
            <div class="switch">
                  箭头显示时机
                  <input type="radio" id="hover" value="hover" v-model="arrow">
                  <label for="hover">悬停时显示</label>
                  <input type="radio" id="always" value="always" v-model="arrow">
                  <label for="always">一直显示</label>
                  <input type="radio" id="never" value="never" v-model="arrow">
                  <label for="never">不显示</label>
            </div>

            <div class="switch">
                  指示器(dots)的位置
                  <input type="radio" id="inside" value="inside" v-model="dots">
                  <label for="inside">内部</label>
                  <input type="radio" id="outside" value="outside" v-model="dots">
                  <label for="outside">外部</label>
                  <input type="radio" id="none" value="none" v-model="dots">
                  <label for="none">不显示</label>
            </div>

            <div class="switch">
                  指示器(dots)的触发方式
                  <input type="radio" id="click" value="click" v-model="trigger">
                  <label for="click">点击</label>
                  <input type="radio" id="hover" value="hover" v-model="trigger">
                  <label for="hover">悬停</label>
            </div>

            <IvueCarousel
                  v-model="value"
                  :loop="loop"
                  :autoplay="autoplay"
                  :radius-dot="radiusDot"
                  :arrow="arrow"
                  :dots="dots"
                  :trigger="trigger"
            >
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
      </div>
</template>

<script>
      export default {
            data () {
                  return {
                        value: 0,
                        loop: false,
                        autoplay: false,
                        radiusDot: false,
                        arrow: 'hover',
                        dots: 'inside',
                        trigger: 'click'
                  }
            },
            methods: {
                  handleChange () {
                        this.loop = !this.loop
                  },
                  handleAutoPlay () {
                        this.autoplay = !this.autoplay
                  },
                  handleRadiusDot () {
                        this.radiusDot = !this.radiusDot
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

      .switch {
            margin: 10px 0;
      }
</style>
`;

export default code;
