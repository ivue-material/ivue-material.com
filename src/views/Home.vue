<template>
      <div class="home">
            <div class="home-wrapper">
                  <h1 class="home-title">IVue</h1>
                  <h2>一套基于 Material Design 规范</h2>
                  <h2>UI组件库</h2>
                  <div class="button-wrapper">
                        <IvueButton class="button" color="primary" depressed @click="handleStartUse">开始使用</IvueButton>
                        <IvueButton class="button" color="primary" outline @click="handleGitHub">GitHub</IvueButton>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      methods: {
            handleStartUse () {
                  this.$router.push('/docs/install')
            },
            handleGitHub () {
                  window.open('https://github.com/qq282126990/ivue-ui');
            }
      }
}
</script>

<style lang="scss" scoped>
.home {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(../assets/home-bg.jpg) no-repeat;
      background-size: cover;
      &-wrapper {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            padding: 60px 0 0 90px;
            height: 100%;
      }
      &-title {
            margin: 0;
            display: block;
            font-size: 60px;
      }
}

.button-wrapper {
      margin-top: 50px;
      .button{
            margin: 0 20px 0 0;
            width: 100px;
            border-radius: 50px;
      }
}
</style>