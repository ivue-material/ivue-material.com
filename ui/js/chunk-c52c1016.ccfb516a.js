(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c52c1016"],{"24af":function(t,e,n){},"502e":function(t,e,n){},5558:function(t,e,n){"use strict";n("7fe9")},"572f":function(t,e,n){"use strict";n("502e")},6765:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Badge 徽标")]),n("p",[t._v("主要用于通知未读数的角标，提醒用户点击。")]),n("h2",[t._v("基本用法")]),n("p",[t._v("基本用法，最简单的使用方法。")]),n("DocMarkdown",{attrs:{code:t.code.base,jsfiddle:"//jsfiddle.net/qq282126990/t8oxrh7j/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/badge/Default.vue"}},[n("Default",{attrs:{slot:"demo"},slot:"demo"})],1),n("h2",[t._v("小红点")]),t._m(0),n("DocMarkdown",{attrs:{code:t.code.dot,jsfiddle:"//jsfiddle.net/qq282126990/rh1u4sb9/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/badge/Dot.vue"}},[n("Dot",{attrs:{slot:"demo"},slot:"demo"})],1),n("h2",[t._v("封顶数字")]),t._m(1),n("DocMarkdown",{attrs:{code:t.code.overflowCount,jsfiddle:"//jsfiddle.net/qq282126990/g9rcf8Ls/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/badge/OverflowCount.vue"}},[n("OverflowCount",{attrs:{slot:"demo"},slot:"demo"})],1),n("h2",[t._v("是否展示徽标")]),t._m(2),n("DocMarkdown",{attrs:{code:t.code.show,jsfiddle:"//jsfiddle.net/qq282126990/8uy0vaxj/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/badge/Show.vue"}},[n("Show",{attrs:{slot:"demo"},slot:"demo"})],1),n("h2",[t._v("API")]),n("h3",[t._v("props")]),t._m(3)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" 设置属性 "),n("code",[t._v("dot")]),t._v("可以吧为徽标设置为小红点 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" 通过设置 "),n("code",[t._v("overflow-count")]),t._v(" 属性设置一个封顶值，当超过时，会显示 "),n("code",[t._v("${overflowCount}+")]),t._v(" 。 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" 设置属性 "),n("code",[t._v("show")]),t._v(" 是否为true或者false，来显示徽标。 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("count")]),n("td",[t._v("显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏")]),n("td",[t._v("Number")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("overflow-count")]),n("td",[t._v("展示封顶的数字值")]),n("td",[t._v("Number， String")]),n("td",[t._v("99")])]),n("tr",[n("td",[t._v("dot")]),n("td",[t._v("不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("offset")]),n("td",[t._v("设置状态点的位置偏移，格式为 [x, y]")]),n("td",[t._v("Array")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("show-zero")]),n("td",[t._v("当数值为 0 时，是否展示 Badge")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("text")]),n("td",[t._v("自定义内容")]),n("td",[t._v("String")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("color")]),n("td",[t._v("设置badge的颜色")]),n("td",[t._v("String")]),n("td",[t._v("#ed4014")])]),n("tr",[n("td",[t._v("show")]),n("td",[t._v("是否显示badge")]),n("td",[t._v("Boolean")]),n("td",[t._v("true")])])])])])}],a=n("97e5"),d={base:'\n<template>\n      <div>\n            <IvueBadge :count="3">\n                  <a href="#" class="demo-badge"></a>\n            </IvueBadge>\n      </div>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n\n<style lang="scss" scoped>\n      .demo-badge {\n            width: 42px;\n            height: 42px;\n            background: #eee;\n            border-radius: 6px;\n            display: inline-block;\n      }\n</style>\n',dot:'\n<template>\n      <div>\n            <IvueBadge dot>\n                  <a href="#" class="demo-badge"></a>\n            </IvueBadge>\n\n            <IvueBadge dot>\n                  <ivue-icon class="demo-badge">notifications</ivue-icon>\n            </IvueBadge>\n      </div>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n\n<style lang="scss" scoped>\n      .badge {\n            display: table;\n            margin-right: 40px;\n      }\n      .demo-badge {\n            width: 42px;\n            height: 42px;\n            background: #eee;\n            border-radius: 6px;\n            display: inline-block;\n      }\n</style>\n',overflowCount:'\n<template>\n      <div>\n            <IvueBadge :count="100">\n                  <a href="#" class="demo-badge"></a>\n            </IvueBadge>\n\n            <IvueBadge :count="1000" overflow-count="999">\n                  <a href="#" class="demo-badge"></a>\n            </IvueBadge>\n      </div>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n\n<style lang="scss" scoped>\n      .demo-badge {\n            width: 42px;\n            height: 42px;\n            background: #eee;\n            border-radius: 6px;\n            display: inline-block;\n      }\n</style>\n',show:'\n<template>\n      <div>\n            <IvueBadge :count="3" :show="show">\n                  <a href="#" class="demo-badge"></a>\n            </IvueBadge>\n\n            <button @click="onShow">show</button>\n      </div>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        show: true\n                  }\n            },\n            methods: {\n                  onShow () {\n                        this.show = !this.show\n                  }\n            }\n      }\n<\/script>\n\n<style lang="scss" scoped>\n      .ivue-badge {\n            margin-right: 10px;\n      }\n      .demo-badge {\n            width: 42px;\n            height: 42px;\n            background: #eee;\n            border-radius: 6px;\n            display: inline-block;\n      }\n</style>\n'},i=d,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("IvueBadge",{attrs:{count:3}},[n("a",{staticClass:"demo-badge",attrs:{href:"#"}})])],1)},r=[],l={},u=l,v=(n("5558"),n("2877")),h=Object(v["a"])(u,c,r,!1,null,"da8405de",null),f=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("IvueBadge",{staticClass:"badge",attrs:{dot:""}},[n("a",{staticClass:"demo-badge",attrs:{href:"#"}})]),n("IvueBadge",{staticClass:"badge",attrs:{dot:""}},[n("ivue-icon",{staticClass:"demo-badge"},[t._v("notifications")])],1)],1)},g=[],_={},m=_,p=(n("a174"),Object(v["a"])(m,b,g,!1,null,"4127fe08",null)),w=p.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("IvueBadge",{attrs:{count:100}},[n("a",{staticClass:"demo-badge",attrs:{href:"#"}})]),n("IvueBadge",{attrs:{count:1e3,"overflow-count":"999"}},[n("a",{staticClass:"demo-badge",attrs:{href:"#"}})])],1)},k=[],x={},B=x,j=(n("7f9b"),Object(v["a"])(B,C,k,!1,null,"304d606a",null)),I=j.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("IvueBadge",{attrs:{count:3,show:t.show}},[n("a",{staticClass:"demo-badge",attrs:{href:"#"}})]),n("button",{on:{click:t.onShow}},[t._v("show")])],1)},q=[],S={data:function(){return{show:!0}},methods:{onShow:function(){this.show=!this.show}}},$=S,D=(n("572f"),Object(v["a"])($,y,q,!1,null,"5135d85c",null)),O=D.exports,E={name:"ivue-badge",data:function(){return{code:i}},components:{DocMarkdown:a["a"],Default:f,Dot:w,OverflowCount:I,Show:O}},M=E,J=Object(v["a"])(M,o,s,!1,null,null,null);e["default"]=J.exports},"7f9b":function(t,e,n){"use strict";n("24af")},"7fe9":function(t,e,n){},"97e5":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"docMarkdown",staticClass:"doc-markdown ivue-elevation-2"},[n("nav",{staticClass:"doc-markdown-header"},[n("div",{staticClass:"doc-markdown-header--content"},[n("ivue-button",{attrs:{icon:"",flat:""},on:{click:t.clickJsfiddle}},[n("svg",{attrs:{width:"25px",height:"25px",viewBox:"0 0 46 33"}},[n("g",{attrs:{"stroke-width":"3",fill:"none","fill-rule":"evenodd",stroke:"#000"}},[n("path",{attrs:{d:"M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473",id:"Oval-1","stroke-linecap":"round"}}),n("path",{attrs:{d:"M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603",id:"Oval-1-Copy","stroke-linecap":"round"}}),n("path",{attrs:{d:"M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z","stroke-linejoin":"round"}})])])]),n("ivue-button",{attrs:{icon:"",flat:""},on:{click:t.clickGithub}},[n("svg",{staticClass:"octicon octicon-mark-github",attrs:{width:"20px",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),n("ivue-button",{attrs:{icon:"",flat:""},on:{click:function(e){t.showCode=!t.showCode}}},[n("ivue-icon",[t._v("code")])],1)],1)]),n("transition",{attrs:{name:"code"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"doc-markdown-code"},[n("div",{staticClass:"doc-markdown-code--content"},[n("pre",[n("code",{ref:"code",staticClass:"hljs xml"},[t._v(t._s(t.code))])])])])]),n("div",{staticClass:"doc-markdown-content"},[t._t("demo")],2)],1)},s=[],a=n("1487"),d=n.n(a),i={props:{jsfiddle:String,github:String,code:String},data:function(){return{showCode:!1}},mounted:function(){d.a.highlightBlock(this.$refs.code)},methods:{clickJsfiddle:function(){window.open(this.jsfiddle)},clickGithub:function(){window.open(this.github)}}},c=i,r=(n("e93f"),n("2877")),l=Object(r["a"])(c,o,s,!1,null,"175dae70",null);e["a"]=l.exports},a174:function(t,e,n){"use strict";n("cebf")},a623:function(t,e,n){},cebf:function(t,e,n){},e93f:function(t,e,n){"use strict";n("a623")}}]);
//# sourceMappingURL=chunk-c52c1016.ccfb516a.js.map