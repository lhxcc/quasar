webpackJsonp([23,94],{207:function(e,t,a){var n,s;n=a(386);var i=a(464);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,e.exports=n},386:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{page:1}}}},464:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("div",{staticClass:"layout-padding"},[t("div",{staticClass:"label bg-secondary text-white"},[e._v("\n      Model "),t("span",{staticClass:"right-detail"},[t("em",[e._v(e._s(e.page))])])]),e._v(" "),e._m(0),e._v(" "),t("q-pagination",{directives:[{name:"model",rawName:"v-model",value:e.page,expression:"page"}],attrs:{max:17},domProps:{value:e.page},on:{input:function(t){e.page=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Disabled State")]),e._v(" "),t("q-pagination",{directives:[{name:"model",rawName:"v-model",value:e.page,expression:"page"}],attrs:{max:17,disable:""},domProps:{value:e.page},on:{input:function(t){e.page=t}}})])])},staticRenderFns:[function(){var e=this,t=(e.$createElement,e._c);return t("p",{staticClass:"caption"},[e._v("\n      You can also\n      "),t("span",{staticClass:"desktop-only"},[e._v("click")]),e._v(" "),t("span",{staticClass:"mobile-only"},[e._v("tap")]),e._v("\n      on the Input box and type out another page number\n      then hit <ENTER>\n    ")])}]}}});