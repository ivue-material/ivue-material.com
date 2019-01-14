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
                              <li v-for="item in routers" :key="item.name" class="router-lists-li">
                                    <router-link
                                          :to="item.router"
                                          v-if="item.router"
                                          class="router-lists-item"
                                    >{{item.name}}</router-link>
                                    <div v-else>
                                          <p class="router-lists--child-header">{{item.name}}</p>
                                          <div
                                                v-if="item.child.length > 0"
                                                v-for="child in item.child"
                                                :key="child.name"
                                                class="router-lists--child-group"
                                          >
                                                <p class="router-lists--child">{{child.name}}</p>
                                                <ul>
                                                      <router-link
                                                            v-for="menu in child.menu"
                                                            :to="menu.router"
                                                            :key="menu.name"
                                                            class="router-lists--child-item"
                                                      >{{menu.name}}</router-link>
                                                </ul>
                                          </div>
                                    </div>
                              </li>
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
                              router: '/install',
                              child: []
                        },
                        {
                              name: '开始使用',
                              router: '/start-use',
                              child: []
                        },
                        {
                              name: '色彩',
                              router: '/color',
                              child: []
                        },
                        {
                              name: '组件',
                              child: [
                                    {
                                          name: '基础',
                                          menu: [
                                                {
                                                      name: 'content 内容',
                                                      router: '/components/content'
                                                },
                                                {
                                                      name: 'button 按钮',
                                                      router: '/components/button'
                                                },
                                                {
                                                      name: 'icon 图标',
                                                      router: '/components/icon'
                                                }
                                          ]
                                    },
                                    {
                                          name: '布局',
                                          menu: [
                                                {
                                                      name: 'Elevation',
                                                      router: '/components/elevation'
                                                },
                                                {
                                                      name: 'Layout',
                                                      router: '/components/layout'
                                                }
                                          ]
                                    },
                                    {
                                          name: 'UI',
                                          menu: [
                                                {
                                                      name: 'List 列表',
                                                      router: '/components/list'
                                                },
                                                {
                                                      name: 'Carousel 走马灯',
                                                      router: '/components/carousel'
                                                },
                                                {
                                                      name: 'Switch 开关',
                                                      router: '/components/switch'
                                                },
                                                 {
                                                      name: 'BottomNav 底部导航',
                                                      router: '/components/bottom-nav'
                                                },
                                                {
                                                      name: 'Breadcrumbs 面包屑',
                                                      router: '/components/breadcrumbs'
                                                },
                                                {
                                                      name: 'Select 选择器',
                                                      router: '/components/select'
                                                }
                                          ]
                                    }
                              ]
                        }
                  ]
            }
      },
      created () {
            let route = this.$route;
            if (route.name === 'error') {
                  this.$router.replace({
                        name: 'error',
                        params: '/home'
                  });
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

      code {
            background-color: #f3f5f6;
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
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                              font-size: 14px;
                  .router-lists {
                        display: flex;
                        flex-direction: column;
                        margin: 0;
                        &-li {
                              display: block;
                              flex: 1;
                              margin-bottom: 8px;
                              text-align: left;
                              color: #7f8c8d;
                              min-height: 40px;
                        }
                        &-item {
                              display: block;
                              flex: 1;
                              text-align: left;
                              font-weight: 500;
                              color: #7f8c8d;
                              line-height: 40px;
                              cursor: pointer;
                              transition: color 0.5s;
                              &:hover {
                                    color: #2d8cf0;
                              }
                        }
                        &--child-header {
                              font-size: 16px;
                              line-height: 40px;
                        }
                        &--child-group {
                              line-height: normal;
                              ul{
                                    margin-left: 15px;
                              }
                        }
                        &--child {
                              padding-left: 8px;
                              font-weight: initial;
                              font-size: 14px;
                              line-height: 40px;
                              &-item {
                                    display: block;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    list-style: none;
                                    font-size: 14px;
                                    font-weight: normal;
                                    color: inherit;
                                    line-height: 40px;
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
                  table {
                        width: 100%;
                        table-layout: auto;
                        border-collapse: collapse;
                        border-spacing: 0;
                        font-size: 13px;
                        line-height: 18px;
                  }
                  thead {
                        background-color: #eee;
                  }
                  th,
                  td {
                        padding: 8px 16px;
                        border: 1px solid #e0e0e0;
                        text-align: left;
                        vertical-align: middle;
                  }
            }
      }
}
</style>
