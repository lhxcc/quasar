webpackJsonp([51,94],{172:function(e,t,n){var a,i;a=n(355);var s=n(444);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},355:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{number:3,min:1,max:1017}}}},444:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("div",{staticClass:"layout-padding"},[t("div",{staticClass:"label bg-secondary text-white"},[e._v("\n      Model "),t("span",{staticClass:"right-detail"},[t("em",[e._v(e._s(e.number))]),e._v("   ("+e._s(e.min)+"-"+e._s(e.max)+")")])]),e._v(" "),t("p",{staticClass:"caption"},[e._v("Standalone")]),e._v(" "),t("q-numeric",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{min:e.min,max:e.max},domProps:{value:e.number},on:{input:function(t){e.number=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Disabled State")]),e._v(" "),t("q-numeric",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{min:e.min,max:e.max,disable:""},domProps:{value:e.number},on:{input:function(t){e.number=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Readonly State")]),e._v(" "),t("q-numeric",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{min:e.min,max:e.max,readonly:""},domProps:{value:e.number},on:{input:function(t){e.number=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Error State")]),e._v(" "),t("q-numeric",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],staticClass:"has-error",attrs:{min:e.min,max:e.max},domProps:{value:e.number},on:{input:function(t){e.number=t}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Inside of a List")]),e._v(" "),t("div",{staticClass:"list"},[t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("edit")]),e._v(" "),t("div",{staticClass:"item-content"},[t("span",{staticClass:"item-label"},[e._v("Number: ")]),e._v(" "),t("q-numeric",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{min:e.min,max:e.max},domProps:{value:e.number},on:{input:function(t){e.number=t}}})])]),e._v(" "),t("hr",{staticClass:"inset"}),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("edit")]),e._v(" "),t("div",{staticClass:"item-content"},[t("span",{staticClass:"item-label"},[e._v("Number: ")]),e._v(" "),t("q-numeric",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{min:e.min,max:e.max},domProps:{value:e.number},on:{input:function(t){e.number=t}}})])])])])])},staticRenderFns:[]}}});