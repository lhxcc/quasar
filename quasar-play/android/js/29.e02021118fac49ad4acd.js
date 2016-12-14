webpackJsonp([29,94],{199:function(e,t,o){var i,s;i=o(379);var a=o(513);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=i},379:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{position:"bottom",reverse:!1,size:8,color:"#e21b0c",timeouts:[]}},computed:{computedSize:function(){return this.size+"px"}},methods:{trigger:function(){var e=this;this.$refs.bar.start(),setTimeout(function(){e.$refs.bar&&e.$refs.bar.stop()},5e3*Math.random()+2e3)}}}},513:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("q-ajax-bar",{ref:"bar",attrs:{position:e.position,reverse:e.reverse,size:e.computedSize,color:e.color}}),e._v(" "),t("div",{staticClass:"layout-padding",staticStyle:{"max-width":"600px"}},[t("p",{staticClass:"caption"},[e._v("Ajax Bar component captures Ajax calls automatically. This page here triggers events manually for demonstrating purposes only.")]),e._v(" "),t("div",{staticClass:"card",staticStyle:{"margin-top":"25px"}},[t("div",{staticClass:"card-title bg-primary text-center"},[t("button",{staticClass:"orange push",on:{click:function(t){e.trigger()}}},[e._v("Trigger Event")])]),e._v(" "),t("p",{staticClass:"caption text-center"},[e._v("Try out some combinations for Ajax Bar.")]),e._v(" "),t("div",{staticClass:"card-content group column"},[t("div",{staticClass:"auto column items-center"},[t("div",{staticClass:"flex"},[t("div",{staticClass:"column group"},[t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{val:"top"},domProps:{value:e.position},on:{input:function(t){e.position=t}}}),e._v("\n                Top\n              ")]),e._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{val:"bottom"},domProps:{value:e.position},on:{input:function(t){e.position=t}}}),e._v("\n                Bottom\n              ")])]),e._v(" "),t("div",{staticClass:"column group"},[t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{val:"right"},domProps:{value:e.position},on:{input:function(t){e.position=t}}}),e._v("\n                Right\n              ")]),e._v(" "),t("label",[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{val:"left"},domProps:{value:e.position},on:{input:function(t){e.position=t}}}),e._v("\n                Left\n              ")])])])]),e._v(" "),t("div",{staticClass:"row justify-center",staticStyle:{"margin-top":"15px"}},[t("label",{staticStyle:{"white-space":"nowrap"}},[t("q-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.reverse,expression:"reverse"}],domProps:{value:e.reverse},on:{input:function(t){e.reverse=t}}}),e._v("\n            Reverse Direction\n          ")])]),e._v(" "),t("div",[t("span",[e._v("Size ("),t("em",[e._v(e._s(e.size)+"px")]),e._v(")")]),e._v(" "),t("q-range",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],staticStyle:{"margin-top":"25px"},attrs:{min:2,max:20,"label-always":""},domProps:{value:e.size},on:{input:function(t){e.size=t}}})]),e._v(" "),t("div",{staticClass:"auto column items-center"},[t("div",{staticClass:"flex"},[t("div",{staticClass:"floating-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.color,expression:"color"}],attrs:{required:""},domProps:{value:e._s(e.color)},on:{input:function(t){t.target.composing||(e.color=t.target.value)}}}),e._v(" "),t("label",[e._v("Color")])])])])])])])])},staticRenderFns:[]}}});