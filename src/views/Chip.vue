<template>
    <div>
        <h1>Chip 芯片</h1>
        <p>用于传递小块信息。使用close属性，允许用户交互。</p>
        <h2>基本用法</h2>
        <p>Chip 有以下几种状态：默认，可关闭，边框，正方形。默认插槽将接受所有内容。</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/3k6c9wpb/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/chip/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>图标</h2>
        <p>Chip 可以使用 Material 图标字体库中的文本或任何图标</p>
        <DocMarkdown
            :code="code.icon"
            jsfiddle="//jsfiddle.net/qq282126990/8hqvkmfz/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/chip/Icon.vue"
        >
            <Icon slot="demo"></Icon>
        </DocMarkdown>
        <h2>轮廓</h2>
        <p>Chip 从当前的文字颜色继承它们的边框颜色。</p>
        <DocMarkdown
            :code="code.outline"
            jsfiddle="//jsfiddle.net/qq282126990/ac41fpkj/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/chip/Outline.vue"
        >
            <Outline slot="demo"></Outline>
        </DocMarkdown>
        <h2>正方形</h2>
        <p>
            通过使用
            <code>square</code>可以使边框变为直角
        </p>
        <DocMarkdown
            :code="code.square"
            jsfiddle="//jsfiddle.net/qq282126990/81m6adLu/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/chip/Square.vue"
        >
            <Square slot="demo"></Square>
        </DocMarkdown>
        <h2>可关闭</h2>
        <p>
            通过使用
            <code>v-model</code>控制可关闭的 Chip。
        </p>
        <DocMarkdown
            :code="code.close"
            jsfiddle="//jsfiddle.net/qq282126990/23zf7gjy/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/chip/Close.vue"
        >
            <Close slot="demo"></Close>
        </DocMarkdown>
        <h2>API</h2>
        <h3>props</h3>
        <div class="table">
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
                        <td>disabled</td>
                        <td>是否禁用</td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>outline</td>
                        <td>是否显示轮廓</td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>square</td>
                        <td>是否显示正方形边框</td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>
                            可通过配合
                            <code>v-modul</code>控制显示/隐藏
                        </td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>是否显示可关闭按钮</td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>close-icon</td>
                        <td>
                            自定义关闭图标,通常和
                            <a
                                target="_blank"
                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                            >material.io</a>一起使用
                        </td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>背景颜色</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>text-color</td>
                        <td>字体颜色</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Chip from '@/code/chip';

import Default from './components/chip/Default.vue';
import Icon from './components/chip/Icon.vue';
import Outline from './components/chip/Outline.vue';
import Square from './components/chip/Square.vue';
import Close from './components/chip/Close.vue';

export default {
    name: 'ivue-chip',
    data () {
        return {
            code: Chip
        }
    },
    components: {
        DocMarkdown,
        Default,
        Icon,
        Outline,
        Square,
        Close
    }
}
</script>

<style lang="scss" scope>
</style>
