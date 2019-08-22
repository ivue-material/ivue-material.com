<template>
    <div>
        <h1>CheckBox 多选框</h1>
        <p>主要用于可选项多项选择</p>
        <h2>基本用法</h2>
        <p>使用 v-model 双向绑定数据。</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/7exkonc9/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/checkbox/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>组合使用</h2>
        <p>
            使用
            <code>IvueCheckboxGroup</code>
            配合数组生成组合,组合会自动使用
            <code>IvueCheckbox</code>的
            <code>label</code>
            属性来自动判断当前选项是否选中，每个
            <code>IvueCheckbox</code>的内容都是自定义的，如果不定义内容，那么
            <code>IvueCheckbox</code>
            将自动使用
            <code>label</code>
            的值作为内容
        </p>
        <DocMarkdown
            :code="code.guop"
            jsfiddle="//jsfiddle.net/qq282126990/fzt214ab/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/checkbox/Gruop.vue"
        >
            <Gruop slot="demo"></Gruop>
        </DocMarkdown>
        <h2>不可用</h2>
        <p>
            通过设置
            <code>disabled</code>属性禁用单选框
        </p>
        <DocMarkdown
            :code="code.disabled"
            jsfiddle="//jsfiddle.net/qq282126990/n58Ldjh7/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/checkbox/Disabled.vue"
        >
            <Disabled slot="demo"></Disabled>
        </DocMarkdown>
        <h2>不确定选项</h2>
        <p>
            在实现全选时，可以使用
            <code>indeterminate</code>属性，展示未全选时的效果
        </p>
        <DocMarkdown
            :code="code.indeterminate"
            jsfiddle="//jsfiddle.net/qq282126990/L4xo50t1/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/checkbox/Indeterminate.vue"
        >
            <Indeterminate slot="demo"></Indeterminate>
        </DocMarkdown>
        <h2>尺寸</h2>
        <p>
            通过设置
            <code>size</code>为
            <code>large</code>或
            <code>small</code>将按钮样式设置为大/小尺寸，不设置为默认尺寸。
        </p>
        <DocMarkdown
            :code="code.size"
            jsfiddle="//jsfiddle.net/qq282126990/3egbhyk9/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/checkbox/Size.vue"
        >
            <Size slot="demo"></Size>
        </DocMarkdown>
        <h3>checkbox props</h3>
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
                        <td>value</td>
                        <td>
                            可以使用
                            <code>v-model</code>双向绑定数据
                        </td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>
                            只有在使用
                            <code>IvueCheckboxGroup</code>时有效。指定当前选项的
                            <code>value</code>值，
                            <code>IvueCheckboxGroup</code>会判断需要激活的项目
                        </td>
                        <td>String | Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>indeterminate</td>
                        <td>
                            设置
                            <code>indeterminate</code>不确定状态，只控制样式
                        </td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>是否禁用当前项</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>
                            尺寸，可选值为
                            <code>large</code>、
                            <code>small</code>、
                            <code>default</code>
                        </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>true-value</td>
                        <td>当前选择的值，当使用类似 1 和 0 来判断是否选中时会很有用，需要配合 value 去完成</td>
                        <td>String, Number, Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>false-value</td>
                        <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用，需要配合 value 去完成</td>
                        <td>String, Number, Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>text-color</td>
                        <td>设置当前内容的颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>设置当前复选框背景颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>checkbox event</h3>
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
                        <td>只在单独使用时有效, 在选项状态发生改变时触发，返回当前状态。</td>
                        <td>value</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>checkbox group props</h3>
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
                        <td>value</td>
                        <td>
                            指定选中的选项，可以使用
                            <code>v-model</code>双向绑定数据
                        </td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>checkbox group event</h3>
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
                        <td>在选项状态发生改变时触发，返回当前状态。</td>
                        <td>value</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Default from './components/checkbox/Default.vue';
import Gruop from './components/checkbox/Gruop.vue';
import Disabled from './components/checkbox/Disabled.vue';
import Size from './components/checkbox/Size.vue';
import Indeterminate from './components/checkbox/Indeterminate.vue';

import Code from '@/code/checkbox';

export default {
    name: 'ivue-component-radio',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Gruop,
        Disabled,
        Size,
        Indeterminate
    }
}
</script>

<style scoped>
</style>
