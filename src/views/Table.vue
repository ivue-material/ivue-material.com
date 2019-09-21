<template>
    <div class="table">
        <h1>Table 表格</h1>
        <p>用于显示表格数据。功能包括行选择，多选，分页等</p>
        <h2>基本用法</h2>
        <p>表格的最简单用法。</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/2uzpowh6/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>边框</h2>
        <p>
            通过设置
            <code>border</code>属性使表格呈现边框
        </p>
        <DocMarkdown
            :code="code.border"
            jsfiddle="//jsfiddle.net/qq282126990/ngojrvu9/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Border.vue"
        >
            <Border slot="demo"></Border>
        </DocMarkdown>
        <h2>颜色</h2>
        <p>给表格设置不同的颜色。</p>
        <p>
            头部：通过
            <code>headerColor</code>可自定义表头颜色。
        </p>
        <p>
            单元格：通过设置
            <code>tableData</code>中的
            <code>cellClassName</code>，可以给任意一个单元格指定样式
        </p>
        <p>
            列:通过设置
            <code>tableHeader</code>中的
            <code>className</code>，可以给某一列指定一个样式,
        </p>
        <p>
            行：通过属性
            <code>row-class-name</code>可以给某一行指定一个样式名称。
        </p>
        <DocMarkdown
            :code="code.color"
            jsfiddle="//jsfiddle.net/qq282126990/jx5kLrtp/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Color.vue"
        >
            <Color slot="demo"></Color>
        </DocMarkdown>
        <h2>高度</h2>
        <p>
            通过设置
            <code>height</code>给表格指定高度，表头将自动固定
        </p>
        <DocMarkdown
            :code="code.height"
            jsfiddle="//jsfiddle.net/qq282126990/srde4k8w/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Height.vue"
        >
            <Height slot="demo"></Height>
        </DocMarkdown>
        <h2>固定列</h2>
        <p>
            通过给数据
            <code>tableHeader</code>设置
            <code>fixed</code>为
            <code>left</code>或
            <code>right</code>，可以固定需要的列
        </p>
        <DocMarkdown
            :code="code.fixed"
            jsfiddle="//jsfiddle.net/qq282126990/Lajkypxu/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Fixed.vue"
        >
            <Fixed slot="demo"></Fixed>
        </DocMarkdown>
        <h2>宽度</h2>
        <p>
            通过设置
            <code>width</code>、
            <code>height</code>和
            <code>tableData</code>中设置
            <code>width</code>，使表格固定宽度，当数据过多时自动出现滚动条
        </p>
        <DocMarkdown
            :code="code.width"
            jsfiddle="//jsfiddle.net/qq282126990/3kaw62c9/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Width.vue"
        >
            <Width slot="demo"></Width>
        </DocMarkdown>
        <h2>单选</h2>
        <p>
            通过设置
            <code>highlight-row</code>
            开启单选。
        </p>
        <p>
            可以选中某一行,
            通过监听
            <code>on-current-row</code>可获取点击后返回的值，
            <code>currentRow 和 oldCurrentRow</code>，分别为当前行的数据和上一次选择的数据。
        </p>
        <p>
            调用
            <code>clearCurrentRow</code>可主动清除选中项。
        </p>
        <DocMarkdown
            :code="code.highlight"
            jsfiddle="//jsfiddle.net/qq282126990/h3zmpcy7/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Highlight.vue"
        >
            <Highlight slot="demo"></Highlight>
        </DocMarkdown>
        <h2>多选</h2>
        <p>
            通过给
            <code>tableHeader</code>数据设置，
            <code>type: 'selection'</code>即可开启多选。
        </p>
        <p>
            给
            <code>tableData</code>设置
            <code>_checked:true</code>可以默认选中当前选项。
        </p>
        <p>
            给
            <code>tableData</code>设置
            <code>_disabled:true</code>可以禁用当前选项。
        </p>
        <p>
            通过给
            <code>tableHeader</code>、
            <code>tableData</code>，数据设置
            <code>checkBoxColor</code>，可设置选项框的颜色。
        </p>
        <p>
            主动调用表单的
            <code>this.$refs.table.selectAll(true)</code>
            可设置全选状态。
        </p>
        <p>点击选择将返回一下事件：</p>
        <ul>
            <li>
                <code>@on-select-change</code>，只要选中项发生变化时就会触发，返回值为
                <code>selection</code>，已选项。
            </li>
            <li>
                <code>@on-select-all</code>，点击全选时触发，返回值为
                <code>selection</code>，已选项。
            </li>
            <li>
                <code>@on-select-cancel</code>，取消选中某一项时触发，返回值为
                <code>selection</code>，已选项。
                <code>oldSelection</code>，取消选择的选项数据
            </li>
        </ul>
        <DocMarkdown
            :code="code.selection"
            jsfiddle="//jsfiddle.net/qq282126990/smey4fh7/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Selection.vue"
        >
            <Selection slot="demo"></Selection>
        </DocMarkdown>
        <h2>自定义模板数据</h2>
        <p>
            通过给
            <code>tableData</code>数据设置
            <code>render</code>，函数可自定义当前列，
            <code>render</code>函数传入两个参数，第一个是
            <code>h</code>，第二个是对象，包含
            <code>row</code>、
            <code>column</code>、
            <code>index</code>，分别是当前行数据，当前列数据，当前是第几行
        </p>
        <DocMarkdown
            :code="code.isRender"
            jsfiddle="//jsfiddle.net/qq282126990/18akef7x/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/IsRender.vue"
        >
            <IsRender slot="demo"></IsRender>
        </DocMarkdown>
        <h2>slot-scope</h2>
        <p>
            在
            <code>tableHeader</code>数据中设置数据
            <code>slot</code>，即可在
            <code>IvueTable</code>中使用
            <code>slot-scope</code>。
        </p>
        <p>
            <code>slot-scope</code>参数包含3个：当前行数据
            <code>row</code>、当前列数据
            <code>column</code>、当前行序号
            <code>index</code>。
        </p>
        <DocMarkdown
            :code="code.slotScope"
            jsfiddle="//jsfiddle.net/qq282126990/yu6q0Ls2/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/SlotScope.vue"
        >
            <SlotScope slot="demo"></SlotScope>
        </DocMarkdown>
        <h2>可展开</h2>
        <p>当表格内容较多不能一次性完全展示时使用。</p>
        <p>
            通过给
            <code>tableHeader</code>，数据设置
            <code>type: 'expand'</code>，即可开启扩展功能，给
            <code>tableData</code>，数据设置
            <code>_expanded:true</code>可默认展开当前行
        </p>
        <p>
            使用
            <code>render</code>函数，定义展开的内容。
        </p>
        <DocMarkdown
            :code="code.expand"
            jsfiddle="//jsfiddle.net/qq282126990/p2d6oe4a/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Expand.vue"
        >
            <Expand slot="demo"></Expand>
        </DocMarkdown>
        <h2>Loading</h2>
        <p>
            通过设置
            <code>loading</code>属性让表格处于加载状态，用于异步请求数据。
        </p>
        <DocMarkdown
            :code="code.loading"
            jsfiddle="//jsfiddle.net/qq282126990/2pLk6w91/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/table/Loading.vue"
        >
            <Loading slot="demo"></Loading>
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
                        <td>table-data</td>
                        <td>
                            需要显示的结构化数据，其中，字段
                            <code>cellClassName</code>，用于设置任意单元格的样式名称，因此数据不能使用该字段。
                        </td>
                        <td>Arrya</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>table-header</td>
                        <td>表格列的配置，表格头部。</td>
                        <td>Arrya</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>header-color</td>
                        <td>自定义表格头部颜色</td>
                        <td>Arrya</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>border</td>
                        <td>是否显示表格边框</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>show-header</td>
                        <td>是否显示表格头部</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>width</td>
                        <td>设置表格的宽度，单位 px</td>
                        <td>Number, String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>设置表格高度，单位 px，如果数据过多时，表格头部将自动固定在顶部。</td>
                        <td>Number, String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>loading</td>
                        <td>是否开启加载中动画，用于数据正在加载中</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>highlight-row</td>
                        <td>
                            开启单选行，选中时当前行将高亮，可通过监听
                            <code>on-current-row</code>，获取点击后返回的值，
                            <code>currentRow</code>和
                            <code>oldCurrentRow</code>，分别为当前行的数据和上一次选择的数据。
                        </td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>row-class-name</td>
                        <td>
                            可设置某一行的样式，回调参数为，
                            <code>row</code>当前行的数据，
                            <code>index</code>当前行的索引。
                        </td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>events</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>on-current-row</td>
                        <td>
                            开启
                            <code>highlight-row</code>，后有效，当点击当前行时会触发。
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <code>currentRow</code>，当前行的数据
                                </li>
                                <li>
                                    <code>oldCurrentRow</code>，上一次选择的数据
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>on-select-change</td>
                        <td>开启多选时有效，选中某一项时触发</td>
                        <td>
                            <ul>
                                <li>
                                    <code>selection</code>，已选项
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>on-select-all</td>
                        <td>开启多选时有效，点击全选时触发</td>
                        <td>
                            <ul>
                                <li>
                                    <code>selection</code>，返回所有选择项
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>on-select-cancel</td>
                        <td>开启多选时有效，取消选中某一项时触发</td>
                        <td>
                            <ul>
                                <li>
                                    <code>selection</code>，返回已选项
                                </li>
                                <li>
                                    <code>oldSelection</code>，取消选中的选项数据
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>slot</h3>
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
                        <td>loading</td>
                        <td>修改加载中的内容</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>methods</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>方法名</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>clearCurrentRow</td>
                        <td>
                            清除高亮项，仅在开启
                            <code>highlight-row</code>时可用
                        </td>
                        <td>无</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>table-header</h3>
        <p>列描述数据对象中的一项</p>
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
                        <td>type</td>
                        <td>
                            列的类型，可选值为
                            <code>index</code>、
                            <code>selection</code>、
                            <code>expand</code>
                        </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>列头部显示的文字</td>
                        <td>String</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>width</td>
                        <td>列的宽度</td>
                        <td>Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>align</td>
                        <td>
                            内容对齐方式，可选值为
                            <code>left</code>左对齐、
                            <code>center</code>居中对齐、
                            <code>right</code>右对齐
                        </td>
                        <td>String</td>
                        <td>left</td>
                    </tr>
                    <tr>
                        <td>fixed</td>
                        <td>
                            列固定的方向
                            <code>left</code>左固定、
                            <code>right</code>右固定
                        </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>renderHeader</td>
                        <td>
                            自定义列头显示内容，第一个参数为
                            <code>h</code>，第二个参数为对象，包含
                            <code>column</code>、
                            <code>index</code>，分别为当前列数据，当前列索引。
                        </td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>render</td>
                        <td>
                            自定义渲染列显示的内容，第一个参数为
                            <code>h</code>，第二个参数为对象，包含
                            <code>row</code>、
                            <code>column</code>、
                            <code>index</code>，分别为当前行数据、当前列数据，当前列索引。
                        </td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>indexMethod</td>
                        <td>
                            type 为
                            <code>index</code>时可用，用于自定义序号，参数为
                            <code>row</code>，为当前行内容。
                        </td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>table-data</h3>
        <p>行描述数据对象中的一项</p>
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
                        <td>cellClassName</td>
                        <td>
                            设置任意单元格的样式名称，对象的
                            <code>key</code>为当前数据的
                            <code>key</code>
                        </td>
                        <td>Object</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>_checked</td>
                        <td>
                            仅在开启多选时有效，设置为
                            <code>true</code>，即可让选项默认选中。
                        </td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>checkBoxColor</td>
                        <td>可为每一个选项的选择框设置一个颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>_disabled</td>
                        <td>
                            仅在开启多选时有效，设置为
                            <code>true</code>，即可禁止选择当前选项。
                        </td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>_expanded</td>
                        <td>
                            仅在开启扩展时有效，设置为
                            <code>true</code>，即可让选项默认展开扩展。
                        </td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>_highlight</td>
                        <td>
                            设置为
                            <code>true</code>，即可高亮当前行
                        </td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/table';

import Default from './components/table/Default.vue';
import Border from './components/table/Border.vue';
import Color from './components/table/Color.vue';
import Height from './components/table/Height.vue';
import Fixed from './components/table/Fixed.vue';
import Width from './components/table/Width.vue';
import Highlight from './components/table/Highlight.vue';
import Selection from './components/table/Selection.vue';
import IsRender from './components/table/IsRender.vue';
import SlotScope from './components/table/SlotScope.vue';
import Expand from './components/table/Expand.vue';
import Loading from './components/table/Loading.vue';

export default {
    name: 'ivue-table',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Border,
        Color,
        Height,
        Fixed,
        Width,
        Highlight,
        Selection,
        IsRender,
        SlotScope,
        Expand,
        Loading
    }
}
</script>


<style lang="scss" scope>
.table {
  li {
    list-style: square;
  }
  ul {
    margin-left: 50px;
  }
}

.table {
  table {
    table-layout: fixed !important;
    width: auto;
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
</style>
