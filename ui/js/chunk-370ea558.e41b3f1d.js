(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-370ea558"],{"97e5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"docMarkdown",staticClass:"doc-markdown ivue-elevation-2"},[a("nav",{staticClass:"doc-markdown-header"},[a("div",{staticClass:"doc-markdown-header--content"},[a("ivue-button",{attrs:{icon:"",flat:""},on:{click:t.clickJsfiddle}},[a("svg",{attrs:{width:"25px",height:"25px",viewBox:"0 0 46 33"}},[a("g",{attrs:{"stroke-width":"3",fill:"none","fill-rule":"evenodd",stroke:"#000"}},[a("path",{attrs:{d:"M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473",id:"Oval-1","stroke-linecap":"round"}}),a("path",{attrs:{d:"M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603",id:"Oval-1-Copy","stroke-linecap":"round"}}),a("path",{attrs:{d:"M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z","stroke-linejoin":"round"}})])])]),a("ivue-button",{attrs:{icon:"",flat:""},on:{click:t.clickGithub}},[a("svg",{staticClass:"octicon octicon-mark-github",attrs:{width:"20px",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),a("ivue-button",{attrs:{icon:"",flat:""},on:{click:function(e){t.showCode=!t.showCode}}},[a("ivue-icon",[t._v("code")])],1)],1)]),a("transition",{attrs:{name:"code"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"doc-markdown-code"},[a("div",{staticClass:"doc-markdown-code--content"},[a("pre",[a("code",{ref:"code",staticClass:"hljs xml"},[t._v(t._s(t.code))])])])])]),a("div",{staticClass:"doc-markdown-content"},[t._t("demo")],2)],1)},o=[],l=a("1487"),d=a.n(l),r={props:{jsfiddle:String,github:String,code:String},data:function(){return{showCode:!1}},mounted:function(){d.a.highlightBlock(this.$refs.code)},methods:{clickJsfiddle:function(){window.open(this.jsfiddle)},clickGithub:function(){window.open(this.github)}}},s=r,i=(a("e93f"),a("2877")),v=Object(i["a"])(s,n,o,!1,null,"175dae70",null);e["a"]=v.exports},"9eb5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("AutoComplete 自动完成")]),a("p",[t._v("该组件提供简单灵活的预先输入功能。这在搜索大型数据集或甚至从API动态请求信息时非常有用。")]),a("h2",[t._v("基本用法")]),t._m(0),a("DocMarkdown",{attrs:{code:t.code.base,jsfiddle:"//jsfiddle.net/qq282126990/6akstmgj/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/auto-complete/Default.vue"}},[a("Default",{attrs:{slot:"demo"},slot:"demo"})],1),a("h1",[t._v("自定义选项")]),t._m(1),a("DocMarkdown",{attrs:{code:t.code.slot,jsfiddle:"//jsfiddle.net/qq282126990/zoyhq3Lf/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/auto-complete/Slot.vue"}},[a("SlotOption",{attrs:{slot:"demo"},slot:"demo"})],1),a("h1",[t._v("不区分大小写")]),t._m(2),a("DocMarkdown",{attrs:{code:t.code.noUpperCase,jsfiddle:"//jsfiddle.net/qq282126990/ejbznw5q/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/auto-complete/NoUpperCase.vue"}},[a("NoUpperCase",{attrs:{slot:"demo"},slot:"demo"})],1),a("h2",[t._v("API")]),a("h3",[t._v("props")]),t._m(3),a("h3",[t._v("events")]),t._m(4)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 基本用法，通过 "),a("code",[t._v("data")]),t._v(" 设置自动完成的数据源。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 除了使用 "),a("code",[t._v("data")]),t._v("，还可以直接传入 "),a("code",[t._v("ivue-option")]),t._v(" 组件作为 "),a("code",[t._v("slot")]),t._v(" 使用，这样可以自定义显示效果。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 不区分大小写的 "),a("code",[t._v("auto-complete")]),t._v("，及过滤的用法 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("value")]),a("td",[t._v("绑定的值，可使用 v-model 双向绑定")]),a("td",[t._v("String, Number")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("data")]),a("td",[t._v("自动完成的数据源")]),a("td",[t._v("Array")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("filter-method")]),a("td",[t._v("是否根据输入项进行筛选。当其为一个函数时，会接收 value 和 option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false")]),a("td",[t._v("Function, Boolean")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("placeholder")]),a("td",[t._v("输入框占位文本")]),a("td",[t._v("String")]),a("td",[t._v("请输入数据")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("输入框禁用输入")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("clearable")]),a("td",[t._v("是否显示清除按钮")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("clear-icon")]),a("td",[t._v(" 输入框清除图标,通常与图标库 "),a("a",{attrs:{target:"_blank",href:"https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline"}},[t._v("material.io")]),t._v("一起使用 ")]),a("td",[t._v("String")]),a("td",[t._v("cancel")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",[t._v("事件")]),a("th",[t._v("说明")]),a("th",[t._v("返回值")])])]),a("tbody",[a("tr",[a("td",[t._v("on-select")]),a("td",[t._v(" 被选中时调用，参数为选中项的 "),a("code",[t._v("value")]),t._v(" 值 ")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("on-focus")]),a("td",[t._v("获取焦点时触发")]),a("td",[t._v("event")])]),a("tr",[a("td",[t._v("on-blur")]),a("td",[t._v("失去焦点时触发")]),a("td",[t._v("event")])]),a("tr",[a("td",[t._v("on-search")]),a("td",[t._v("搜索补全项的时候调用")]),a("td",[t._v("value")])]),a("tr",[a("td",[t._v("on-change")]),a("td",[t._v(" 选中 "),a("code",[t._v("option")]),t._v("，或 "),a("code",[t._v("input")]),t._v(" 的 value 变化时，调用此函数 ")]),a("td",[t._v("value")])])])])])}],l=a("97e5"),d={base:'\n<template>\n      <IvueAutoComplete v-model="value" :data="data" @on-search="handleSearch"></IvueAutoComplete>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        value: \'\',\n                        data: []\n                  }\n            },\n            methods: {\n                  handleSearch (value) {\n                        this.data = !value ? [] : [\n                              value,\n                              value + value,\n                              value + value + value\n                        ];\n                  }\n            }\n      }\n<\/script>\n',slot:'\n<template>\n      <div>\n            <IvueAutoComplete v-model="value" :data="data" @on-search="handleSearch">\n                  <IvueOption v-for="item in data" :value="item" :key="item">\n                        <span>{{ item }}</span>\n                  </IvueOption>\n            </IvueAutoComplete>\n      </div>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        value: \'\',\n                        data: []\n                  }\n            },\n            methods: {\n                  handleSearch (value) {\n                        this.data = !value || value.indexOf(\'@\') >= 0 ? [] : [\n                              value + \'@qq.com\',\n                              value + \'@sina.com\',\n                              value + \'@163.com\'\n                        ];\n                  }\n            }\n      }\n<\/script>\n',noUpperCase:"\n<template>\n      <IvueAutoComplete :value=\"value\" :data=\"data\" :filter-method=\"filterMethod\"></IvueAutoComplete>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        value: '',\n                        data: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']\n                  }\n            },\n            methods: {\n                  filterMethod (value, option) {\n                        return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;\n                  },\n            }\n      }\n<\/script>\n"},r=d,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("IvueAutoComplete",{attrs:{data:t.data},on:{"on-search":t.handleSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},i=[],v={data:function(){return{value:"",data:[]}},methods:{handleSearch:function(t){this.data=t?[t,t+t,t+t+t]:[]}}},c=v,u=a("2877"),_=Object(u["a"])(c,s,i,!1,null,null,null),h=_.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("IvueAutoComplete",{attrs:{data:t.data},on:{"on-search":t.handleSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.data,(function(e){return a("IvueOption",{key:e,attrs:{value:e}},[a("span",[t._v(t._s(e))])])})),1)],1)},m=[],f={data:function(){return{value:"",data:[]}},methods:{handleSearch:function(t){this.data=!t||t.indexOf("@")>=0?[]:[t+"@qq.com",t+"@sina.com",t+"@163.com"]}}},C=f,b=Object(u["a"])(C,p,m,!1,null,null,null),w=b.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("IvueAutoComplete",{attrs:{value:t.value,data:t.data,"filter-method":t.filterMethod}})},g=[],x={data:function(){return{value:"",data:["Steve Jobs","Stephen Gary Wozniak","Jonathan Paul Ive"]}},methods:{filterMethod:function(t,e){return-1!==e.toUpperCase().indexOf(t.toUpperCase())}}},S=x,q=Object(u["a"])(S,k,g,!1,null,null,null),j=q.exports,I={name:"ivue-auto-complete",data:function(){return{code:r}},components:{DocMarkdown:l["a"],Default:h,SlotOption:w,NoUpperCase:j}},O=I,A=Object(u["a"])(O,n,o,!1,null,null,null);e["default"]=A.exports},a623:function(t,e,a){},e93f:function(t,e,a){"use strict";a("a623")}}]);
//# sourceMappingURL=chunk-370ea558.e41b3f1d.js.map