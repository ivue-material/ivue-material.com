<template>
      <div>
            <h1>DatePicker 日期/月份选择器</h1>
            <p>选择日期，支持年、月、日期类型，直观的显示。</p>
            <h2>基本用法</h2>
            <p>基本用法，显示当前日期、月份。</p>
            <DocMarkdown
                  :code="code.base"
                  jsfiddle="//jsfiddle.net/qq282126990/6c9r8uoy/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Default.vue"
            >
                  <Default slot="demo"></Default>
            </DocMarkdown>
            <h2>显示为月份</h2>
            <p>
                  通过设置
                  <code>type</code> 为
                  <code>month</code> ，让选择器初始显示为月份
            </p>
            <DocMarkdown
                  :code="code.month"
                  jsfiddle="//jsfiddle.net/qq282126990/ms47zvy2/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Month.vue"
            >
                  <Month slot="demo"></Month>
            </DocMarkdown>
            <h2>方向</h2>
            <p>
                  日期选择器有两种方向变化，纵向（默认）和横向，通过设置
                  <code>landscape</code> 设置日期选择器横向。
            </p>
            <DocMarkdown
                  :code="code.landscape"
                  jsfiddle="//jsfiddle.net/qq282126990/w34s15tu/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Landscape.vue"
            >
                  <Landscape slot="demo"></Landscape>
            </DocMarkdown>
            <h2>颜色</h2>
            <p>
                  可以使用
                  <code>color</code> 和
                  <code>header-color</code> 设置设置其他区域(日期，月份，年份)选择颜色和设置头部标签颜色，如果未提供
                  <code>header-color</code> ，则
                  <code>header</code> 将使用
                  <code>color</code> 值。
            </p>
            <DocMarkdown
                  :code="code.color"
                  jsfiddle="//jsfiddle.net/qq282126990/tp7uvmgL/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Color.vue"
            >
                  <Color slot="demo"></Color>
            </DocMarkdown>
            <h2>允许选择的日期</h2>
            <p>
                  通过设置
                  <code>allowed-dates</code> 属性，您可以使用函数指定允许选择的日期。
            </p>
            <DocMarkdown
                  :code="code.allowedDates"
                  jsfiddle="//jsfiddle.net/qq282126990/adtwr14z/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/AllowedDates.vue"
            >
                  <AllowedDates slot="demo"></AllowedDates>
            </DocMarkdown>
            <h2>多选</h2>
            <p>
                  日期选择器现在可以通过设置
                  <code>multiple</code> 属性选择多个日期。 如果使用多个日期选择器，则期望其
                  <code>v-model</code> 为
                  <code>Array</code> 。
            </p>
            <DocMarkdown
                  :code="code.multiple"
                  jsfiddle="//jsfiddle.net/qq282126990/z1wfLuyx/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Multiple.vue"
            >
                  <Multiple slot="demo"></Multiple>
            </DocMarkdown>
            <h2>设置选择器宽度</h2>
            <p>
                  通过设置
                  <code>full-width</code> 可以使选择器宽度设置为
                  <code>100%</code>。
            </p>
            <DocMarkdown
                  :code="code.fullWidth"
                  jsfiddle="//jsfiddle.net/qq282126990/vb0aqujg/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/FullWidth.vue"
            >
                  <FullWidth slot="demo"></FullWidth>
            </DocMarkdown>
            <h2>便签</h2>
            <p>
                  通过设置
                  <code>note</code> 标记需要注意的日期，其期望是
                  <code>Array</code> 或
                  <code>Function</code> ，设置
                  <code>note-color</code> 改变标记需要注意的日期的颜色。
            </p>
            <DocMarkdown
                  :code="code.note"
                  jsfiddle="//jsfiddle.net/qq282126990/rvtxe2f3/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Note.vue"
            >
                  <Note slot="demo"></Note>
            </DocMarkdown>
            <h2>语言</h2>
            <p>
                  日期选择器通过 JavaScript Date 对象支持国际化。 使用
                  <code>locale</code> 指定 BCP 47 语言标记。
            </p>
            <DocMarkdown
                  :code="code.locale"
                  jsfiddle="//jsfiddle.net/qq282126990/0q2dv9p7/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Locale.vue"
            >
                  <Locale slot="demo"></Locale>
            </DocMarkdown>
            <h2>图标</h2>
            <p>
                  通过使用
                  <code>prev-icon</code>、
                  <code>next-icon</code>、
                  <code>year-icon</code>，F你可以覆盖选择器中的默认图标。
            </p>
            <DocMarkdown
                  :code="code.icon"
                  jsfiddle="//jsfiddle.net/qq282126990/gzn5p6ow/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Icon.vue"
            >
                  <Icon slot="demo"></Icon>
            </DocMarkdown>
            <h2>只读</h2>
            <p>
                  通过设置属性
                  <code>readonly</code>禁用选择新日期。
            </p>
            <DocMarkdown
                  :code="code.readonly"
                  jsfiddle="//jsfiddle.net/qq282126990/v4wax8n7/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Readonly.vue"
            >
                  <Readonly slot="demo"></Readonly>
            </DocMarkdown>
            <h2>日期跟随改变</h2>
            <p>
                  通过设置
                  <code>reactive</code> 为
                  <code>true</code>，点击月份或年份让选择器日期跟随改变。
            </p>
            <DocMarkdown
                  :code="code.reactive"
                  jsfiddle="//jsfiddle.net/qq282126990/zrg6dfc2/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/Reactive.vue"
            >
                  <Reactive slot="demo"></Reactive>
            </DocMarkdown>
            <h2>可选择最大/最小日期</h2>
            <p>
                  通过设置
                  <code>max</code> 或
                  <code>min</code> ，设置最大/最小可选择日期。
            </p>
            <DocMarkdown
                  :code="code.maxMin"
                  jsfiddle="//jsfiddle.net/qq282126990/15hq2rf6/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/MaxMin.vue"
            >
                  <MaxMin slot="demo"></MaxMin>
            </DocMarkdown>
            <h2>自定义标题日期格式</h2>
            <p>
                  通过设置
                  <code>title-date-format</code> ，自定义标题的日期显示，其期望是一个函数。
            </p>
            <DocMarkdown
                  :code="code.titleDateFormat"
                  jsfiddle="//jsfiddle.net/qq282126990/56j42smu/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/TitleDateFormat.vue"
            >
                  <TitleDateFormat slot="demo"></TitleDateFormat>
            </DocMarkdown>
            <h2>自定义标题年份格式</h2>
            <p>
                  通过设置
                  <code>title-year-format</code> ，自定义标题年份格式显示，其期望是一个函数。
            </p>
            <DocMarkdown
                  :code="code.titleYearFormat"
                  jsfiddle="//jsfiddle.net/qq282126990/rqjs9v4a/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/TitleYearFormat.vue"
            >
                  <TitleYearFormat slot="demo"></TitleYearFormat>
            </DocMarkdown>
            <h2>自定义日期格式</h2>
            <p>
                  通过设置
                  <code>day-format</code> ，自定义日期格式显示，其期望是一个函数。
            </p>
            <DocMarkdown
                  :code="code.dayFormat"
                  jsfiddle="//jsfiddle.net/qq282126990/hxbod3wk/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/DayFormat.vue"
            >
                  <DayFormat slot="demo"></DayFormat>
            </DocMarkdown>
            <h2>自定义表头部日/月格式</h2>
            <p>
                  通过设置
                  <code>header-date-format</code> ，自定义表头部日/月格式显示，其期望是一个函数。
            </p>
            <DocMarkdown
                  :code="code.headerDateFormat"
                  jsfiddle="//jsfiddle.net/qq282126990/k6L3xcya/"
                  github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/date-picker/HeaderDateFormat.vue"
            >
                  <HeaderDateFormat slot="demo"></HeaderDateFormat>
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
                                    <td>landscape</td>
                                    <td>日历方向，纵向（默认）和 横向</td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>full-width</td>
                                    <td>
                                          指定
                                          <code>ivue-date-picker</code>的宽度是否为 100%
                                    </td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>width</td>
                                    <td>
                                          指定
                                          <code>ivue-date-picker</code>的宽度
                                    </td>
                                    <td>Number | String</td>
                                    <td>290</td>
                              </tr>
                              <tr>
                                    <td>multiple</td>
                                    <td>
                                          可以选择多个月或者多个日,使用
                                          <code>multiple</code>那么
                                          <code>v-modul</code> 或者
                                          <code>value</code> 必须为数组
                                    </td>
                                    <td>Boolean</td>
                                    <td>false</td>
                              </tr>
                              <tr>
                                    <td>type</td>
                                    <td>
                                          日历显示的类型，
                                          <code>date</code>(默认日期) 和
                                          <code>month</code>(月期)
                                    </td>
                                    <td>String</td>
                                    <td>date</td>
                              </tr>
                              <tr>
                                    <td>value</td>
                                    <td>设置需要显示的日期或者月期</td>
                                    <td>Array | String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>locale</td>
                                    <td>指定BCP 47语言标记</td>
                                    <td>String</td>
                                    <td>en-us</td>
                              </tr>
                              <tr>
                                    <td>min</td>
                                    <td>设置最小可选择日期</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>max</td>
                                    <td>设置最大可选择日期</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>show-current</td>
                                    <td>是否显示当前日期</td>
                                    <td>Boolean | String</td>
                                    <td>true</td>
                              </tr>
                              <tr>
                                    <td>note</td>
                                    <td>用于标记需要注意的日期</td>
                                    <td>Array | Function</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>note-color</td>
                                    <td>改变标记需要注意的日期的颜色</td>
                                    <td>String | Function | Object</td>
                                    <td>warning</td>
                              </tr>
                              <tr>
                                    <td>first-day-of-week</td>
                                    <td>设置日历一周的第一天</td>
                                    <td>String | Number</td>
                                    <td>0</td>
                              </tr>
                              <tr>
                                    <td>year-icon</td>
                                    <td>
                                          为年份标题添加图标，通常与图标库
                                          <a
                                                target="_blank"
                                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                          >material.io</a> 一起使用
                                    </td>
                                    <td>Strin</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>prev-icon</td>
                                    <td>
                                          为月份选择按钮(左侧按钮)设置图标，通常与图标库
                                          <a
                                                target="_blank"
                                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                          >material.io</a> 一起使用
                                    </td>
                                    <td>String</td>
                                    <td>chevron_left</td>
                              </tr>
                              <tr>
                                    <td>next-icon</td>
                                    <td>
                                          为月份选择按钮(右侧按钮)设置图标，通常与图标库
                                          <a
                                                target="_blank"
                                                href="https://material.io/tools/icons/?icon=keyboard_arrow_left&amp;style=baseline"
                                          >material.io</a> 一起使用
                                    </td>
                                    <td>String</td>
                                    <td>chevron_right</td>
                              </tr>
                              <tr>
                                    <td>readonly</td>
                                    <td>设置日历是否只读，设置后所有操作将禁用</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>reactive</td>
                                    <td>点击月份或者年份时月份或年份是否跟随改变</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>picker-date</td>
                                    <td>
                                          您可以观察
                                          <code>pickerDate</code>，它是显示的月/年（取决于选择器类型和活动视图），以便在更改时执行某些操作
                                    </td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>header-color</td>
                                    <td>设置头部标签颜色</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>color</td>
                                    <td>设置其他区域(日期，月份，年份)选择颜色</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                              <tr>
                                    <td>no-title</td>
                                    <td>设置是否隐藏日历头部</td>
                                    <td>Boolean</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h2>events</h2>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>事件</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>返回值</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>input</td>
                                    <td>日历日期改变时触发</td>
                                    <td>String</td>
                                    <td>-</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <h2>functions</h2>
            <div class="table">
                  <table>
                        <thead>
                              <tr>
                                    <th>事件</th>
                                    <th>说明</th>
                                    <th>类型</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>title-date-format</td>
                                    <td>自定义标题日期格式</td>
                                    <td>Function</td>
                              </tr>
                              <tr>
                                    <td>title-year-format</td>
                                    <td>自定义标题年份格式</td>
                                    <td>Function</td>
                              </tr>
                              <tr>
                                    <td>day-format</td>
                                    <td>自定义日期格式</td>
                                    <td>Function</td>
                              </tr>
                              <tr>
                                    <td>header-date-format</td>
                                    <td>自定义表头部日/月格式</td>
                                    <td>Function</td>
                              </tr>
                              <tr>
                                    <td>allowed-dates</td>
                                    <td>使用函数指定允许选择的日期</td>
                                    <td>Function</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Code from '@/code/date-picker';

import Default from './components/date-picker/Default.vue';
import Landscape from './components/date-picker/Landscape.vue';
import Color from './components/date-picker/Color.vue';
import AllowedDates from './components/date-picker/AllowedDates.vue';
import Multiple from './components/date-picker/Multiple.vue';
import FullWidth from './components/date-picker/FullWidth.vue';
import Note from './components/date-picker/Note.vue';
import Locale from './components/date-picker/Locale.vue';
import Icon from './components/date-picker/Icon.vue';
import Readonly from './components/date-picker/Readonly.vue';
import Month from './components/date-picker/Month.vue';
import Reactive from './components/date-picker/Reactive.vue';
import MaxMin from './components/date-picker/MaxMin.vue';
import TitleDateFormat from './components/date-picker/TitleDateFormat.vue';
import TitleYearFormat from './components/date-picker/TitleYearFormat.vue';
import DayFormat from './components/date-picker/DayFormat.vue';
import HeaderDateFormat from './components/date-picker/HeaderDateFormat.vue';

export default {
      name: 'ivue-date-picker',
      data () {
            return {
                  code: Code
            }
      },
      components: {
            DocMarkdown,
            Default,
            Landscape,
            Color,
            AllowedDates,
            Multiple,
            FullWidth,
            Note,
            Locale,
            Icon,
            Readonly,
            Month,
            Reactive,
            MaxMin,
            TitleDateFormat,
            TitleYearFormat,
            DayFormat,
            HeaderDateFormat
      }
}
</script>

<style lang="scss" scope>
.ivue-picker {
      margin-right: 20px;
}
.ivue-date-picker-date {
      text-align: center;
}
</style>
