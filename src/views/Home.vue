<template>
      <div class="home">
            <div class="home-header">
                  <div class="home-header-wrapper">
                        <div class="home-header-img">
                              <img src="https://cn.vuejs.org/images/logo.png">
                              <p class="text">IVue</p>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>

export default {
      name: 'home',
      components: {
      }
}
</script>

<style lang="scss" scoped>
$name: "home";

.#{$name} {
      margin: 60px 0 20px 0;
      height: 100%;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      &-header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 60px;
            background-color: #FFB3CD;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                  0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                  0px 1px 10px 0px rgba(0, 0, 0, 0.12);
            &-wrapper {
                  display: flex;
                  align-items: center;
                  width: 95%;
                  height: 100%;
                  margin: 0 auto;
            }
            &-img {
                  display: flex;
                  img {
                        height: 40px;
                  }
                  .text {
                        margin-left: 20px;
                        font-size: 26px;
                        color:#fff;
                  }
            }
      }
}
</style>
