<template>
    <div>
        <h1>Cascader 级联选择器</h1>
        <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
        <h2>基本用法</h2>
        <p>有两种触发子菜单的方式(click, hover)</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="http://jsfiddle.net/qq282126990/s19bLok2/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/cascader/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>禁用选项</h2>
        <p>通过在数据源中设置 disabled 字段来声明该选项是禁用</p>
        <DocMarkdown
            :code="code.disabled"
            jsfiddle="http://jsfiddle.net/qq282126990/fuybaep9/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/cascader/Disabled.vue"
        >
            <Disabled slot="demo"></Disabled>
        </DocMarkdown>
        <h2>选择即改变</h2>
        <p>点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。</p>
        <DocMarkdown
            :code="code.changeOnSelect"
            jsfiddle="http://jsfiddle.net/qq282126990/617xysh0/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/cascader/ChangeOnSelect.vue"
        >
            <ChangeOnSelect slot="demo"></ChangeOnSelect>
        </DocMarkdown>
        <h2>动态加载次级选项</h2>
        <p>当选中某一级时，动态加载该级下的选项并显示loading效果。</p>
        <DocMarkdown
            :code="code.load"
            jsfiddle="http://jsfiddle.net/qq282126990/vqhp107d/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/cascader/Load.vue"
        >
            <Load slot="demo"></Load>
        </DocMarkdown>
        <h2>可搜索</h2>
        <p>通过设置 filterable 选项可以快捷地搜索选项并选择。</p>
        <DocMarkdown
            :code="code.filterable"
            jsfiddle="http://jsfiddle.net/qq282126990/cp1usz2q/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/cascader/Filterable.vue"
        >
            <Filterable slot="demo"></Filterable>
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
                        <td>arrow-down-icon</td>
                        <td>
                            菜单下拉图标,通常和
                            <a
                                target="_blank"
                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                            >material.io</a>一起使用
                        </td>
                        <td>String</td>
                        <td>keyboard_arrow_down</td>
                    </tr>
                    <tr>
                        <td>children-icon</td>
                        <td>
                            菜单子选项后的扩展图标,通常和
                            <a
                                target="_blank"
                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                            >material.io</a>一起使用
                        </td>
                        <td>String</td>
                        <td>keyboard_arrow_right</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            可选项数据源，键名可通过
                            <code>props</code>属性配置
                        </td>
                        <td>array</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>clearable</td>
                        <td>是否显示清除按钮</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>props</td>
                        <td>配置选项,具体见下表</td>
                        <td>object</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>选中项绑定值</td>
                        <td>array</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>separator</td>
                        <td>选项分隔符</td>
                        <td>String</td>
                        <td>'/'</td>
                    </tr>
                    <tr>
                        <td>change-on-select</td>
                        <td>是否允许选择任意一级的选项</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>filterable</td>
                        <td>是否开启可搜索选项</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>debounce</td>
                        <td>搜索关键词输入的去抖延迟，毫秒</td>
                        <td>number</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>no-data-placeholder</td>
                        <td>没有搜索到数据时显示的提示</td>
                        <td>String</td>
                        <td>无匹配数据</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>输入框 placeholder</td>
                        <td>String</td>
                        <td>请选择</td>
                    </tr>
                    <tr>
                        <td>loading</td>
                        <td>当前选项是否加载中</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>props 选项配置</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>类型</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>value</td>
                        <td>指定选项的值为选项对象的某个属性值</td>
                        <td>String</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>指定选项标签为选项对象的某个属性值</td>
                        <td>String</td>
                    </tr>
                    <tr>
                        <td>children</td>
                        <td>指定选项的子选项为选项对象的某个属性值</td>
                        <td>String</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>指定选项的禁用为选项对象的某个属性值</td>
                        <td>String</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>events</h3>
        <div class="table">
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
                        <td>change</td>
                        <td>当绑定值变化时触发的事件</td>
                        <td>当前值</td>
                    </tr>
                    <tr>
                        <td>active-item-change</td>
                        <td>
                            当父级选项变化时触发的事件，仅在
                            <code>change-on-select</code>为
                            <code>false</code>时可用
                        </td>
                        <td>oldValue, value</td>
                    </tr>
                    <tr>
                        <td>visible-change</td>
                        <td>下拉框出现/隐藏时触发</td>
                        <td>出现则为 true，隐藏则为 false</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/cascader';

import Default from './components/cascader/Default.vue';
import Disabled from './components/cascader/Disabled.vue';
import ChangeOnSelect from './components/cascader/ChangeOnSelect.vue';
import Load from './components/cascader/Load.vue';
import Filterable from './components/cascader/Filterable.vue';

export default {
    name: 'ivue-affix',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Disabled,
        ChangeOnSelect,
        Load,
        Filterable
    }
}
</script>
