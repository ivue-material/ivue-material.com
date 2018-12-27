<template>
      <div class="home">
           asdasd
      </div>
</template>

<script>

export default {
      name: 'home',
      data () {
            return {
                  /**
                   * 路由导航
                   * 
                   * @type {Array}
                   */
                  routers: [
                        {
                              name: '安装',
                              route: '/install',
                              child: []
                        }
                  ]
            }
      },
      components: {
      }
}
</script>

<style lang="scss" scoped>
$name: "home";

.#{$name} {
    
}
</style>
