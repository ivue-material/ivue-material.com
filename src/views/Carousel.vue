<template>
      <div>
            <h1>Carousel 走马灯</h1>
            <p>常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</p>
            <h2>基本用法</h2>
            <p>基本用法，最简单的显示。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/5826g1cm/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/carousel/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>自动切换</h2>
            <p>
                  通过设置属性
                  <code>autoplay</code>可以自动轮播,同时可以设置属性
                  <code>autoplay-speed</code>改变自动轮播的时间。
            </p>
            <DocMarkdown
                  :code="code.autoplay"
                  jsfiddle="//jsfiddle.net/qq282126990/0t1oehLs/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/carousel/Autoplay.vue"
            >
                  <Autoplay slot="demo"></Autoplay>
            </DocMarkdown>
            <h2>综合设置</h2>
            <p>多个属性的综合应用</p>
            <DocMarkdown
                  :code="code.complex"
                  jsfiddle="//jsfiddle.net/qq282126990/p8k590bx/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/carousel/Complex.vue"
            >
                  <Complex slot="demo"></Complex>
            </DocMarkdown>
            <h2>API</h2>
            <h3>props</h3>
            <table>
                  <thead>
                        <tr>
                              <th>名称</th>
                              <th>说明</th>
                              <th>类型</th>
                              <th>默认</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>arrow</td>
                              <td>切换箭头显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）</td>
                              <td>String</td>
                              <td>hover</td>
                        </tr>
                        <tr>
                              <td>left-arrow</td>
                              <td>
                                    用于改变←左切换箭头图片，通常与图标库
                                    <a
                                          target="_blank"
                                          href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                    >material.io</a> 一起使用
                              </td>
                              <td>String</td>
                              <td>keyboard_arrow_left</td>
                        </tr>
                        <tr>
                              <td>right-arrow</td>
                              <td>
                                    用于改变→右切换箭头图片，通常与图标库
                                    <a
                                          target="_blank"
                                          href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                    >material.io</a> 一起使用
                              </td>
                              <td>String</td>
                              <td>keyboard_arrow_right</td>
                        </tr>
                        <tr>
                              <td>easing</td>
                              <td>改变走马灯切换的动画效果</td>
                              <td>String</td>
                              <td>ease</td>
                        </tr>
                        <tr>
                              <td>loop</td>
                              <td>是否开启循环,用于无缝循环</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>height</td>
                              <td>走马灯高度，可填 auto 或具体高度数值，单位 px</td>
                              <td>String</td>
                              <td>auto</td>
                        </tr>
                        <tr>
                              <td>value</td>
                              <td>幻灯片的索引</td>
                              <td>Number</td>
                              <td>0</td>
                        </tr>
                        <tr>
                              <td>autoplay</td>
                              <td>是否自动切换</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>autoplay-speed</td>
                              <td>自动切换的时间间隔，单位为毫秒</td>
                              <td>Number</td>
                              <td>2000</td>
                        </tr>
                        <tr>
                              <td>dots</td>
                              <td>指示器(dots)的位置，可选值为 inside （内部），outside（外部），none（不显示）</td>
                              <td>String</td>
                              <td>inside</td>
                        </tr>
                        <tr>
                              <td>radius-dot</td>
                              <td>是否显示圆形指示器(dots)</td>
                              <td>Boolean</td>
                              <td>false</td>
                        </tr>
                        <tr>
                              <td>trigger</td>
                              <td>指示器(dots)的触发方式，可选值为 click（点击），hover（悬停）</td>
                              <td>String</td>
                              <td>click</td>
                        </tr>
                  </tbody>
            </table>
            <h3>events</h3>
            <table>
                  <thead>
                        <tr>
                              <th>事件名称</th>
                              <th>说明</th>
                              <th>返回值</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>on-change</td>
                              <td>幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引</td>
                              <td>oldValue, value</td>
                        </tr>
                        <tr>
                              <td>current-index</td>
                              <td>当前激活的幻灯片的索引</td>
                              <td>currentIndex</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/carousel';

import Default from './components/carousel/Default.vue';
import Autoplay from './components/carousel/Autoplay.vue';
import Complex from './components/carousel/Complex.vue';

export default {
      name: 'ivue-carousel',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Autoplay,
            Complex
      }
}
</script>

<style lang="scss" scope>
</style>
