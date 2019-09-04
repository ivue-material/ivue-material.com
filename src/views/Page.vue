<template>
    <div>
        <h1>Page 分页</h1>
        <p>
            当数据过多时，以便用户更容易使用信息，使用分页可以快速进行数据切换。要维护当前页数，只需提供一个
            <code>v-model</code>属性。
        </p>
        <h2>基本用法</h2>
        <p>
            基本的分页，页数过多时会自动折叠。可以使用
            <code>v-model</code>进行页数双向绑定，
            <code>prev</code>以及
            <code>next</code>周围的按钮以帮助您导航
        </p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/nubmap8e/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>每页数量</h2>
        <p>切换每页显示的数量。</p>
        <DocMarkdown
            :code="code.pageSize"
            jsfiddle="//jsfiddle.net/qq282126990/jL3x68po/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/PageSize.vue"
        >
            <PageSize slot="demo"></PageSize>
        </DocMarkdown>
        <h2>电梯</h2>
        <p>
            通过设置
            <code>showElevator</code>属性开启快速跳转到某一页，回车确认。
        </p>
        <DocMarkdown
            :code="code.elevator"
            jsfiddle="//jsfiddle.net/qq282126990/0v75y1ec/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/Elevator.vue"
        >
            <Elevator slot="demo"></Elevator>
        </DocMarkdown>
        <h2>圆形</h2>
        <p>
            通过设置
            <code>circle</code>使列表展示成圆形
        </p>
        <DocMarkdown
            :code="code.circle"
            jsfiddle="//jsfiddle.net/qq282126990/x67352ny/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/Circle.vue"
        >
            <Circles slot="demo"></Circles>
        </DocMarkdown>
        <h2>颜色</h2>
        <p>
            通过设置
            <code>bgList</code>改变页数背景颜色,
            <code>colorList</code>改变页数字体颜色。
        </p>
        <DocMarkdown
            :code="code.color"
            jsfiddle="//jsfiddle.net/qq282126990/L52uxw7g/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/Color.vue"
        >
            <Color slot="demo"></Color>
        </DocMarkdown>
        <h3>page props</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>circle</td>
                        <td>列表是否显示成圆形</td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>
                            可以使用
                            <code>v-model</code>双向绑定数据
                        </td>
                        <td>Number</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>total</td>
                        <td>数据总数</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>page-size</td>
                        <td>每页条数</td>
                        <td>Number</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>bg-list</td>
                        <td>每页背景颜色</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>color-list</td>
                        <td>每页字体颜色</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>page-size-opts</td>
                        <td>页数选择选项列表</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>show-elevator</td>
                        <td>是否显示电梯</td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>elevator-text</td>
                        <td>电梯显示的文字</td>
                        <td>Object</td>
                        <td>
                            {
                            go: '跳至',
                            page: '页'
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>prev-icon</td>
                        <td>
                            上一页按钮图标,默认情况下,使用的是
                            <a
                                target="_blank"
                                href="https://material.io/tools/icons/?icon=mood_bad&amp;style=baseline"
                            >Material Icons</a>的图标
                        </td>
                        <td>String</td>
                        <td>keyboard_arrow_left</td>
                    </tr>
                    <tr>
                        <td>next-icon</td>
                        <td>
                            下一页按钮图标,默认情况下,使用的是
                            <a
                                target="_blank"
                                href="https://material.io/tools/icons/?icon=mood_bad&amp;style=baseline"
                            >Material Icons</a>的图标
                        </td>
                        <td>String</td>
                        <td>keyboard_arrow_right</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>page event</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>on-change</td>
                        <td>页数改变时的回调，返回改变后的页数</td>
                        <td>page</td>
                    </tr>
                    <tr>
                        <td>on-change-page-size</td>
                        <td>切换每页条数时的回调，返回切换后的每页条数</td>
                        <td>page-size</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Default from './components/page/Default.vue';
import PageSize from './components/page/PageSize.vue';
import Elevator from './components/page/Elevator.vue';
import Color from './components/page/Color.vue';
import Circles from './components/page/Circle.vue';

import Code from '@/code/page';

export default {
    name: 'ivue-page',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        PageSize,
        Elevator,
        Color,
        Circles
    }
}
</script>
