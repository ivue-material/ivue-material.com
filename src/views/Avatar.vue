<template>
    <div>
        <h1>Avatar 头像</h1>
        <p>该组件通常用于显示圆形用户个人资料图片，组件允许你动态调整大小，添加图片，图标和文本。square 属性可以让头像呈现有圆角的正方形</p>
        <h2>基本用法</h2>
        <p>简单的图片在圆形容器中显示内容</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/5bfs8e7n/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/avatar/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>大小</h2>
        <p>
            通过设置
            <code>size</code>属性自由的设置头像大小，
            同时
            <code>size</code>也接收任意像素字符串,如：
            <code>12px</code>、
            <code>12rem</code>这意味着开发者可以更加自由的调整该组件大小
        </p>
        <DocMarkdown
            :code="code.size"
            jsfiddle="//jsfiddle.net/qq282126990/kt5orepu/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/avatar/Size.vue"
        >
            <Size slot="demo"></Size>
        </DocMarkdown>
        <h2>颜色</h2>
        <p>
            通过设置
            <code>color</code>
            属性自定义背景颜色
        </p>
        <DocMarkdown
            :code="code.color"
            jsfiddle="//jsfiddle.net/qq282126990/zpotwkya/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/avatar/Color.vue"
        >
            <Color slot="demo"></Color>
        </DocMarkdown>
        <h2>形状</h2>
        <p>
            通过设置
            <code>shape</code>
            使组件显示成不同的形状，默认圆形。
        </p>
        <DocMarkdown
            :code="code.shape"
            jsfiddle="//jsfiddle.net/qq282126990/v91f87cj/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/avatar/Shape.vue"
        >
            <Shape slot="demo"></Shape>
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
                        <td>shape</td>
                        <td>
                            指定组件的形状，可选值
                            <code>circle</code>、
                            <code>square</code>
                        </td>
                        <td>String</td>
                        <td>circle</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>
                            设置组件的大小，该属性同时接受带
                            <code>px</code>、
                            <code>rem</code>、
                            <code>em</code>等单位的字符串，如：12px、12rem、12em
                        </td>
                        <td>Number, String</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <td>src</td>
                        <td>图片资源地址</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>
                            图标类型，默认情况下使用的是
                            <a
                                target="_blank"
                                href="https://material.io/tools/icons/?icon=mood_bad&amp;style=baseline"
                            >Material Icons</a>图标,您必须使用下划线而不是空格来传递图标的名称。例如：
                            <code>thumb_up</code>、
                            <code>face</code>
                        </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icon-class</td>
                        <td>
                            自定义图标样式，用于覆盖
                            <code>i</code>标签默认样式，只有在使用
                            <code>icon</code>属性时才生效
                        </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>Slot</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>default</td>
                        <td>默认插槽</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/avatar';
import Default from './components/avatar/Default.vue';
import Size from './components/avatar/Size.vue';
import Color from './components/avatar/Color.vue';
import Shape from './components/avatar/Shape.vue';

export default {
    name: 'ivue-avatar',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Size,
        Color,
        Shape
    }
}
</script>

<style lang="scss" scope>
</style>
