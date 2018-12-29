<template>
      <div id="app">
            <!-- 头部 -->
            <div class="app-header">
                  <div class="app-header-wrapper">
                        <div class="app-header-img">
                              <img src="./assets/logo.png">
                              <p class="text">IVue</p>
                        </div>
                  </div>
            </div>
            <div class="app-content">
                  <!-- 左导航 -->
                  <div class="app-content-left">
                        <ul class="router-lists">
                              <router-link
                                    class="router-lists-item"
                                    v-for="item in routers"
                                    :key="item.name"
                                    :to="item.route"
                              >
                                    {{item.name}}
                                    <ul v-if="item.child.length > 0">
                                          <li
                                                class="router-lists-item-child"
                                                v-for="child in item.child"
                                                :key="child.name"
                                          >{{child.name}}</li>
                                    </ul>
                              </router-link>
                        </ul>
                  </div>
                  <!-- 右内容 -->
                  <div class="app-content-right">
                        <router-view/>
                  </div>
            </div>
      </div>
</template>

<script>

export default {
      name: 'app',
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
                        },
                        {
                              name: '开始使用',
                              route: '/start-use',
                              child: []
                        },
                        {
                              name: '色彩',
                              route: '/color',
                              child: []
                        },
                         {
                              name: '组件',
                              route: '/component',
                              child: []
                        }
                  ]
            }
      }
}
</script>

<style lang="scss">
#app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;

      height: 500px;
      display: flex;
      flex-direction: column;
      background-color: #f5f5f5;
      font-size: 14px;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
            margin: 12px 0;
            display: inline-block;
            color: #2c3e50;
      }

      h1 {
            display: block;
      }

      .hljs {
            padding: 15px;
            border-radius: 5px;
            background-color: #f3f5f6;
      }

      .hljs-variable,
      .hljs-template-variable,
      .hljs-tag,
      .hljs-name,
      .hljs-selector-id,
      .hljs-selector-class,
      .hljs-regexp,
      .hljs-deletion {
            color: #fa3d58;
      }

      .hljs-string,
      .hljs-symbol,
      .hljs-bullet,
      .hljs-addition {
            color: #2aab51;
      }

      .hljs-comment,
      .hljs-quote {
            color: #abb8c6;
      }

      .hljs-attr {
            color: #e77600;
      }

      .hljs-keyword + .hljs-comment {
            color: black;
      }

      iframe {
            border-radius: 5px;
            background: url("./assets/loading.gif") no-repeat;
            background-size: cover;
            background-position: center;
      }

      .router-link-active {
            color: #2d8cf0;
      }
}

.app {
      /*头部*/
      &-header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 60px;
            background-color: #fff;
            box-shadow: 0 0 5px rgba(57, 70, 78, 0.2);
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
                        color: #000;
                  }
            }
            z-index: 100;
      }

      /*内容*/
      &-content {
            position: relative;
            margin-top: 60px;
            height: auto;
            zoom: 1;
            display: block;
            z-index: 50;
            background-color: #fff;
            /*左*/
            &-left {
                  position: relative;
                  display: block;
                  padding: 24px 26px;
                  width: 16.66666667%;
                  float: left;
                  flex: 0 0 auto;
                  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
                  border-right: 1px solid #e4e7e9;

                  .router-lists {
                        display: flex;
                        flex-direction: column;
                        &-item {
                              flex: 1;
                              margin-bottom: 8px;
                              text-align: left;
                              font-size: 16px;
                              font-weight: 500;
                              color: #7f8c8d;
                              height: 40px;
                              ul {
                                    padding-left: 13px;
                              }
                              &-child {
                                    margin-top: 7px;
                                    font-weight: initial;
                                    font-size: 14px;
                              }
                        }
                  }
            }
            /*右*/
            &-right {
                  position: relative;
                  text-align: left;
                  padding: 20px 20px 100px 20px;
                  float: left;
                  flex: 0 0 auto;
                  display: block;
                  width: 83.33333333%;
                  p {
                        margin: 5px;
                  }
            }
      }
}
</style>
