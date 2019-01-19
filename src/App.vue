<template>
      <div id="app">
            <!-- 头部 -->
            <div class="app-header">
                  <div class="app-header-wrapper">
                        <div class="app-header-img">
                              <img src="./assets/logo.png">
                              <p class="text">IVue</p>
                        </div>

                        <div class="app-header-github">
                              <a target="_blank" href="https://github.com/qq282126990/ivue-ui">
                                    <svg
                                          height="32"
                                          class="octicon octicon-mark-github"
                                          viewBox="0 0 16 16"
                                          version="1.1"
                                          width="32"
                                          aria-hidden="true"
                                    >
                                          <path
                                                fill-rule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                          ></path>
                                    </svg>
                              </a>
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
                                                },
                                                {
                                                      name: 'AutoComplete 输入框自动完成功能',
                                                      router: '/components/auto-complete'
                                                },
                                                {
                                                      name: 'Input 输入框',
                                                      router: '/components/input'
                                                },
                                                {
                                                      name: 'Stepper 步骤条',
                                                      router: '/components/stepper'
                                                },
                                                {
                                                      name: 'UpLoad 上传',
                                                      router: '/components/upLoad'
                                                },
                                                {
                                                      name: 'Progress 进度条',
                                                      router: '/components/progress'
                                                },
                                                {
                                                      name: 'Notice 通知提醒',
                                                      router: '/components/notice'
                                                },
                                                {
                                                      name: 'Message 全局提示',
                                                      router: '/components/message'
                                                },
                                                {
                                                      name: 'LoadingBar 加载进度条',
                                                      router: '/components/loading-bar'
                                                },
                                                {
                                                      name: 'Tabs 标签页',
                                                      router: '/components/tabs'
                                                },
                                                {
                                                      name: 'Badge 图钉',
                                                      router: '/components/badge'
                                                },
                                                {
                                                      name: 'DatePicker 日期/月份选择器',
                                                      router: '/components/date-picker'
                                                }
                                          ]
                                    },
                                    {
                                          name: '其他',
                                          menu: [
                                                {
                                                      name: 'Affix 图钉',
                                                      router: '/components/affix'
                                                }
                                          ]
                                    },
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
      },
      watch: {
            $route () {
                  window.scrollTo(0, 0)
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
            display: block;
            margin: 12px 0;
            color: #2c3e50;
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
      .hljs-deletion,
      .hljs-selector-tag {
            color: #4177f6;
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

      .hljs-attr,
      .hljs-keyword {
            color: #e77600;
      }

      .hljs-keyword + .hljs-comment,
      .hljs-template-variable {
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
            &-github {
                  display: flex;
                  width: 100%;
                  justify-content: flex-end;
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
                              ul {
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
