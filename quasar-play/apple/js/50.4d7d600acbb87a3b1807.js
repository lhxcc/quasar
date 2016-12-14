webpackJsonp([50,94],{174:function(a,e,t){var n,s;n=t(357);var l=t(471);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=l.render,s.staticRenderFns=l.staticRenderFns,a.exports=n},357:function(a,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{standalone:20,step:30,label:5,snap:2,marker:6}}}},471:function(a,e){a.exports={render:function(){var a=this,e=(a.$createElement,a._c);return e("div",[e("div",{staticClass:"layout-padding"},[e("p",{staticClass:"caption"},[a._v("\n      Standalone\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.standalone))]),a._v("   (0 to 50)")])])]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],attrs:{min:0,max:50},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Step\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.step))]),a._v("   (0 to 45, step 5)")])])]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.step,expression:"step"}],attrs:{min:0,max:45,step:5},domProps:{value:a.step},on:{input:function(e){a.step=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Label\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.label))]),a._v("   (-20 to 20, step 4)")])])]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.label,expression:"label"}],attrs:{min:-20,max:20,step:4,label:""},domProps:{value:a.label},on:{input:function(e){a.label=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Snaps to Steps\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.snap))]),a._v("   (0 to 10, step 2)")])])]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.snap,expression:"snap"}],attrs:{min:0,max:10,step:2,label:"",snap:""},domProps:{value:a.snap},on:{input:function(e){a.snap=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Markers. Snaps to Steps\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.marker))]),a._v("   (0 to 10, step 2)")])])]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.marker,expression:"marker"}],attrs:{min:0,max:10,step:2,label:"",snap:"",markers:""},domProps:{value:a.marker},on:{input:function(e){a.marker=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Display Label Always\n      "),e("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),e("span",{staticClass:"right-detail"},[e("em",[a._v(a._s(a.label))]),a._v("   (-20 to 20, step 4)")])])]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.label,expression:"label"}],attrs:{min:-20,max:20,step:4,"label-always":""},domProps:{value:a.label},on:{input:function(e){a.label=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Disabled State")]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],attrs:{min:0,max:50,disable:""},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Error State")]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],staticClass:"has-error",attrs:{min:0,max:50},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Coloring")]),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],staticClass:"secondary",attrs:{min:0,max:50,label:""},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}}),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],staticClass:"orange",attrs:{min:0,max:50,label:""},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}}),a._v(" "),e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],staticClass:"dark",attrs:{min:0,max:50,label:""},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Inside of a List")]),a._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"item two-lines"},[e("i",{staticClass:"item-primary"},[a._v("volume_up")]),a._v(" "),e("div",{staticClass:"item-content"},[e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],attrs:{min:0,max:50,label:""},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}})])]),a._v(" "),e("div",{staticClass:"item two-lines"},[e("i",{staticClass:"item-primary"},[a._v("brightness_medium")]),a._v(" "),e("div",{staticClass:"item-content"},[e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],attrs:{min:0,max:50,label:""},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}})])]),a._v(" "),e("div",{staticClass:"item two-lines"},[e("i",{staticClass:"item-primary"},[a._v("mic")]),a._v(" "),e("div",{staticClass:"item-content"},[e("q-range",{directives:[{name:"model",rawName:"v-model",value:a.standalone,expression:"standalone"}],attrs:{min:0,max:50,label:""},domProps:{value:a.standalone},on:{input:function(e){a.standalone=e}}})])])])])])},staticRenderFns:[]}}});