(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fd066de"],{2048:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Page 分页")]),t._m(0),o("h2",[t._v("基本用法")]),t._m(1),o("DocMarkdown",{attrs:{code:t.code.base,jsfiddle:"//jsfiddle.net/qq282126990/nubmap8e/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/Default.vue"}},[o("Default",{attrs:{slot:"demo"},slot:"demo"})],1),o("h2",[t._v("每页数量")]),o("p",[t._v("切换每页显示的数量。")]),o("DocMarkdown",{attrs:{code:t.code.pageSize,jsfiddle:"//jsfiddle.net/qq282126990/jL3x68po/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/PageSize.vue"}},[o("PageSize",{attrs:{slot:"demo"},slot:"demo"})],1),o("h2",[t._v("电梯")]),t._m(2),o("DocMarkdown",{attrs:{code:t.code.elevator,jsfiddle:"//jsfiddle.net/qq282126990/0v75y1ec/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/Elevator.vue"}},[o("Elevator",{attrs:{slot:"demo"},slot:"demo"})],1),o("h2",[t._v("圆形")]),t._m(3),o("DocMarkdown",{attrs:{code:t.code.circle,jsfiddle:"//jsfiddle.net/qq282126990/x67352ny/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/Circle.vue"}},[o("Circles",{attrs:{slot:"demo"},slot:"demo"})],1),o("h2",[t._v("颜色")]),t._m(4),o("DocMarkdown",{attrs:{code:t.code.color,jsfiddle:"//jsfiddle.net/qq282126990/L52uxw7g/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/page/Color.vue"}},[o("Color",{attrs:{slot:"demo"},slot:"demo"})],1),o("h3",[t._v("page props")]),t._m(5),o("h3",[t._v("page event")]),t._m(6)],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" 当数据过多时，以便用户更容易使用信息，使用分页可以快速进行数据切换。要维护当前页数，只需提供一个 "),o("code",[t._v("v-model")]),t._v("属性。 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" 基本的分页，页数过多时会自动折叠。可以使用 "),o("code",[t._v("v-model")]),t._v("进行页数双向绑定， "),o("code",[t._v("prev")]),t._v("以及 "),o("code",[t._v("next")]),t._v("周围的按钮以帮助您导航 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" 通过设置 "),o("code",[t._v("showElevator")]),t._v("属性开启快速跳转到某一页，回车确认。 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" 通过设置 "),o("code",[t._v("circle")]),t._v("使列表展示成圆形 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" 通过设置 "),o("code",[t._v("bgList")]),t._v("改变页数背景颜色, "),o("code",[t._v("colorList")]),t._v("改变页数字体颜色。 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table"},[o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),o("th",[t._v("说明")]),o("th",[t._v("类型")]),o("th",[t._v("默认值")])])]),o("tbody",[o("tr",[o("td",[t._v("circle")]),o("td",[t._v("列表是否显示成圆形")]),o("td",[t._v("Boolean")]),o("td",[t._v("-")])]),o("tr",[o("td",[t._v("value")]),o("td",[t._v(" 可以使用 "),o("code",[t._v("v-model")]),t._v("双向绑定数据 ")]),o("td",[t._v("Number")]),o("td",[t._v("1")])]),o("tr",[o("td",[t._v("total")]),o("td",[t._v("数据总数")]),o("td",[t._v("Number")]),o("td",[t._v("0")])]),o("tr",[o("td",[t._v("page-size")]),o("td",[t._v("每页条数")]),o("td",[t._v("Number")]),o("td",[t._v("1")])]),o("tr",[o("td",[t._v("bg-list")]),o("td",[t._v("每页背景颜色")]),o("td",[t._v("Array")]),o("td",[t._v("[]")])]),o("tr",[o("td",[t._v("color-list")]),o("td",[t._v("每页字体颜色")]),o("td",[t._v("Array")]),o("td",[t._v("[]")])]),o("tr",[o("td",[t._v("page-size-opts")]),o("td",[t._v("页数选择选项列表")]),o("td",[t._v("Array")]),o("td",[t._v("[]")])]),o("tr",[o("td",[t._v("show-elevator")]),o("td",[t._v("是否显示电梯")]),o("td",[t._v("Boolean")]),o("td",[t._v("-")])]),o("tr",[o("td",[t._v("elevator-text")]),o("td",[t._v("电梯显示的文字")]),o("td",[t._v("Object")]),o("td",[t._v(" { go: '跳至', page: '页' } ")])]),o("tr",[o("td",[t._v("prev-icon")]),o("td",[t._v(" 上一页按钮图标,默认情况下,使用的是 "),o("a",{attrs:{target:"_blank",href:"https://material.io/tools/icons/?icon=mood_bad&style=baseline"}},[t._v("Material Icons")]),t._v("的图标 ")]),o("td",[t._v("String")]),o("td",[t._v("keyboard_arrow_left")])]),o("tr",[o("td",[t._v("next-icon")]),o("td",[t._v(" 下一页按钮图标,默认情况下,使用的是 "),o("a",{attrs:{target:"_blank",href:"https://material.io/tools/icons/?icon=mood_bad&style=baseline"}},[t._v("Material Icons")]),t._v("的图标 ")]),o("td",[t._v("String")]),o("td",[t._v("keyboard_arrow_right")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table"},[o("table",[o("thead",[o("tr",[o("th",[t._v("事件名")]),o("th",[t._v("说明")]),o("th",[t._v("返回值")])])]),o("tbody",[o("tr",[o("td",[t._v("on-change")]),o("td",[t._v("页数改变时的回调，返回改变后的页数")]),o("td",[t._v("page")])]),o("tr",[o("td",[t._v("on-change-page-size")]),o("td",[t._v("切换每页条数时的回调，返回切换后的每页条数")]),o("td",[t._v("page-size")])])])])])}],r=o("97e5"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v("当前页数:"+t._s(t.value))]),o("IvuePage",{attrs:{total:100},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},s=[],l={data:function(){return{value:1}}},d=l,c=o("2877"),v=Object(c["a"])(d,i,s,!1,null,null,null),u=v.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("IvuePage",{attrs:{total:100,pageSize:10,pageSizeOpts:[10,20,30]}})],1)},p=[],m={},h=m,f=Object(c["a"])(h,_,p,!1,null,null,null),g=f.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("IvuePage",{attrs:{total:100,showElevator:""}})],1)},w=[],C={},k=C,x=Object(c["a"])(k,b,w,!1,null,null,null),j=x.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("IvuePage",{attrs:{total:100,bgList:t.bgList,colorList:t.colorList}})],1)},E=[],L={data:function(){return{colorList:["#fff"],bgList:["#F41D74","orange","#FFC009","#6DBF07","#009FC7"]}}},P=L,I=Object(c["a"])(P,q,E,!1,null,null,null),$=I.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("IvuePage",{attrs:{total:100,circle:""}})],1)},S=[],D={},M=D,y=Object(c["a"])(M,z,S,!1,null,"36a12994",null),O=y.exports,F={base:'\n<template>\n    <div>\n        <p>当前页数:{{value}}</p>\n        <IvuePage :total="100" v-model="value"></IvuePage>\n    </div>\n</template>\n\n<script>\nexport default {\n    data () {\n        return {\n            value: 1\n        }\n    }\n}\n<\/script>\n',pageSize:'\n<template>\n    <div>\n        <IvuePage :total="100" :pageSize="10" :pageSizeOpts="[10,20,30]"></IvuePage>\n    </div>\n</template>\n\n<script>\nexport default {\n\n}\n<\/script>\n',elevator:'\n<template>\n    <div>\n        <IvuePage :total="100" showElevator></IvuePage>\n    </div>\n</template>\n\n<script>\nexport default {\n\n}\n<\/script>\n',color:"\n<template>\n    <div>\n        <IvuePage :total=\"100\" :bgList=\"bgList\" :colorList=\"colorList\"></IvuePage>\n    </div>\n</template>\n\n<script>\nexport default {\n    data () {\n        return {\n            colorList: ['#fff'],\n            bgList: ['#F41D74', 'orange', '#FFC009', '#6DBF07', '#009FC7']\n        }\n    }\n}\n<\/script>\n"},B=F,A={name:"ivue-page",data:function(){return{code:B}},components:{DocMarkdown:r["a"],Default:u,PageSize:g,Elevator:j,Color:$,Circles:O}},J=A,N=Object(c["a"])(J,n,a,!1,null,null,null);e["default"]=N.exports},"97e5":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"docMarkdown",staticClass:"doc-markdown ivue-elevation-2"},[o("nav",{staticClass:"doc-markdown-header"},[o("div",{staticClass:"doc-markdown-header--content"},[o("ivue-button",{attrs:{icon:"",flat:""},on:{click:t.clickJsfiddle}},[o("svg",{attrs:{width:"25px",height:"25px",viewBox:"0 0 46 33"}},[o("g",{attrs:{"stroke-width":"3",fill:"none","fill-rule":"evenodd",stroke:"#000"}},[o("path",{attrs:{d:"M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473",id:"Oval-1","stroke-linecap":"round"}}),o("path",{attrs:{d:"M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603",id:"Oval-1-Copy","stroke-linecap":"round"}}),o("path",{attrs:{d:"M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z","stroke-linejoin":"round"}})])])]),o("ivue-button",{attrs:{icon:"",flat:""},on:{click:t.clickGithub}},[o("svg",{staticClass:"octicon octicon-mark-github",attrs:{width:"20px",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),o("ivue-button",{attrs:{icon:"",flat:""},on:{click:function(e){t.showCode=!t.showCode}}},[o("ivue-icon",[t._v("code")])],1)],1)]),o("transition",{attrs:{name:"code"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"doc-markdown-code"},[o("div",{staticClass:"doc-markdown-code--content"},[o("pre",[o("code",{ref:"code",staticClass:"hljs xml"},[t._v(t._s(t.code))])])])])]),o("div",{staticClass:"doc-markdown-content"},[t._t("demo")],2)],1)},a=[],r=o("1487"),i=o.n(r),s={props:{jsfiddle:String,github:String,code:String},data:function(){return{showCode:!1}},mounted:function(){i.a.highlightBlock(this.$refs.code)},methods:{clickJsfiddle:function(){window.open(this.jsfiddle)},clickGithub:function(){window.open(this.github)}}},l=s,d=(o("e93f"),o("2877")),c=Object(d["a"])(l,n,a,!1,null,"175dae70",null);e["a"]=c.exports},a623:function(t,e,o){},e93f:function(t,e,o){"use strict";o("a623")}}]);
//# sourceMappingURL=chunk-2fd066de.6e2bad53.js.map