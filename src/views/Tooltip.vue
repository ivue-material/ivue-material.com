<template>
    <div>
        <h1>Tooltip 提示</h1>
        <p>
            对于用户悬停在元素上时传递信息很有用。您也可以通过一个
            <code>v-model</code>以编程方式控制提示组件的显示或者通过
            <code>always</code>控制组件是否显示
        </p>
        <h2>基本用法</h2>
        <p>
            最简单的用法。注意
            <code>Tooltip</code>可以包装任何元素。
        </p>
        <p>
            注意：Tooltip 内的文本使用了
            <code>white-space: nowrap;</code>，即不自动换行，如需展示很多内容并自动换行时，建议给内容
            <code>slot</code>增加样式
            <code>white-space: normal;</code>。
        </p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/3kmngsza/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tooltip/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>位置</h2>
        <p>
            <code>Tooltip</code>可以与元素的四个边中的任何一个对齐
        </p>
        <DocMarkdown
            :code="code.placement"
            jsfiddle="//jsfiddle.net/qq282126990/1hxkL8w6/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tooltip/Placement.vue"
        >
            <Placement slot="demo"></Placement>
        </DocMarkdown>
        <h2>自定义内容</h2>
        <p>通过自定义 slot 显示内容。</p>
        <DocMarkdown
            :code="code.slot"
            jsfiddle="//jsfiddle.net/qq282126990/hye8176j/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tooltip/Slot.vue"
        >
            <Content slot="demo"></Content>
        </DocMarkdown>
        <h2>v-model</h2>
        <p>
            <code>Tooltip</code>的可见性可以使用
            <code>v-model</code>以编程的方式改变。
        </p>
        <p>
            注意：开启使用
            <code>v-model</code>后鼠标悬浮显示效果将不再生效。
        </p>
        <DocMarkdown
            :code="code.slot"
            jsfiddle="//jsfiddle.net/qq282126990/hye8176j/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/tooltip/Model.vue"
        >
            <Model slot="demo"></Model>
        </DocMarkdown>
        <h2>API</h2>
        <h3>props</h3>
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
                        <td>content</td>
                        <td>需要显示的内容</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>placement</td>
                        <td>
                            提示框出现的位置，可传入
                            <code>left</code>、
                            <code>right</code>、
                            <code>top</code>、
                            <code>bottom</code>
                        </td>
                        <td>String</td>
                        <td>bottom</td>
                    </tr>
                    <tr>
                        <td>arrow</td>
                        <td>是否显示提示箭头</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>rounded</td>
                        <td>是否开启提示框显示成圆角</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>delay</td>
                        <td>提示框显示延迟时间</td>
                        <td>Number</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>always</td>
                        <td>提示框是否一直显示</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>控制提示框显示隐藏</td>
                        <td>String, Number, Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>max-width</td>
                        <td>最大宽度，超出最大值后，文本将自动换行，并两端对齐</td>
                        <td>String, Number</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>slot</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>default</td>
                        <td>默认原生插槽</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>
                            提示框的内容，定义此
                            <code>slot</code>时，会覆盖 props
                            <code>content。</code>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>events</h3>
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
                        <td>on-popper-show</td>
                        <td>在提示框显示时触发</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>on-popper-hide</td>
                        <td>在提示框消失时触发</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Default from './components/tooltip/Default.vue';
import Placement from './components/tooltip/Placement.vue';
import Content from './components/tooltip/Slot.vue';
import Model from './components/tooltip/Model.vue';
import Code from '@/code/tooltip';

export default {
    name: 'ivue-directives-tooltip',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Placement,
        Content,
        Model
    }
}
</script>

<style lang="scss" scoped>
</style>
