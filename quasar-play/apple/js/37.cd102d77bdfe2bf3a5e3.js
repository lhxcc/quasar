webpackJsonp([37,94],{188:function(t,e,a){var s,n;s=a(371);var o=a(454);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=s},371:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(116),o=s(n);e.default={data:function(){return{store:o.default.state}}}},454:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("q-layout",[e("div",{staticClass:"toolbar",slot:"header"},[e("button",{directives:[{name:"go-back",rawName:"v-go-back.single",value:t.store.backRoute,expression:"store.backRoute",modifiers:{single:!0}}],staticClass:"within-iframe-hide"},[e("i",[t._v("arrow_back")])]),t._v(" "),e("q-toolbar-title",{attrs:{padding:1}},[e("i",{directives:[{name:"show",rawName:"v-show",value:t.store.icon,expression:"store.icon"}],staticStyle:{"font-size":"2rem","margin-right":"5px"}},[t._v("\n        "+t._s(t.store.icon)+"\n      ")]),t._v("\n      "+t._s(t.store.title)+"\n    ")])]),t._v(" "),t.store.tabs.length>0?e("q-tabs",{staticClass:"within-iframe-hide",slot:"navigation"},t._l(t.store.tabs,function(a){return e("q-tab",{attrs:{icon:a.icon,route:"/showcase"+t.store.hash+"/"+a.hash,exact:"",replace:""}},[t._v("\n      "+t._s(a.label)+"\n    ")])})):t._e(),t._v(" "),e("router-view",{staticClass:"layout-view"})])},staticRenderFns:[]}}});