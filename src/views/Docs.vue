<template>
      <div class="docs-content">
            <div class="docs-content-left">
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
            <div class="docs-content-right">
                  <keep-alive>
                        <router-view/>
                  </keep-alive>
            </div>
      </div>
</template>

<script>
export default {
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
                              router: '/docs/install',
                              child: []
                        },
                        {
                              name: '开始使用',
                              router: '/docs/start-use',
                              child: []
                        },
                        {
                              name: '色彩',
                              router: '/docs/color',
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

<style lang="scss" >
.docs {
      /*内容*/
      &-content {
            position: relative;
            top: 80px;
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
                                    &:hover {
                                          color: #2d8cf0;
                                    }
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

                  .table {
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
}
</style>