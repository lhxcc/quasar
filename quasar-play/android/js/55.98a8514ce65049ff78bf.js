webpackJsonp([55,94],{156:function(e,t,i){var a,s;a=i(349);var l=i(477);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=l.render,s.staticRenderFns=l.staticRenderFns,e.exports=a},349:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{checked:!1,option:"opt1",select:"fb",multipleSelect:["goog","twtr"],selectOptions:[{label:"Google",value:"goog"},{label:"Facebook",value:"fb"},{label:"Twitter",value:"twtr"},{label:"Apple Inc.",value:"appl"},{label:"Oracle",value:"ora"}],range:20,doubleRange:{min:10,max:35},timestamp:"2016-09-18T10:45:00.000Z"}}}},477:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("div",{staticClass:"layout-padding"},[t("p",{staticClass:"caption"},[e._v("Checkboxes")]),e._v(" "),t("div",{staticClass:"list"},[t("label",{staticClass:"item"},[t("div",{staticClass:"item-primary"},[t("q-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],domProps:{value:e.checked},on:{input:function(t){e.checked=t}}})]),e._v(" "),t("div",{staticClass:"item-content"},[e._v("\n          Notifications\n        ")])]),e._v(" "),t("label",{staticClass:"item two-lines"},[t("div",{staticClass:"item-primary"},[t("q-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],domProps:{value:e.checked},on:{input:function(t){e.checked=t}}})]),e._v(" "),e._m(0)]),e._v(" "),t("label",{staticClass:"item three-lines"},[t("div",{staticClass:"item-primary"},[t("q-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],domProps:{value:e.checked},on:{input:function(t){e.checked=t}}})]),e._v(" "),e._m(1)])]),e._v(" "),t("p",{staticClass:"caption"},[e._v("Radios")]),e._v(" "),t("div",{staticClass:"list"},[t("label",{staticClass:"item"},[t("div",{staticClass:"item-primary"},[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.option,expression:"option"}],attrs:{val:"opt1"},domProps:{value:e.option},on:{input:function(t){e.option=t}}})]),e._v(" "),t("div",{staticClass:"item-content"},[e._v("\n          Option 1\n        ")])]),e._v(" "),t("label",{staticClass:"item two-lines"},[t("div",{staticClass:"item-primary"},[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.option,expression:"option"}],attrs:{val:"opt2"},domProps:{value:e.option},on:{input:function(t){e.option=t}}})]),e._v(" "),e._m(2)]),e._v(" "),t("label",{staticClass:"item three-lines"},[t("div",{staticClass:"item-primary"},[t("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.option,expression:"option"}],attrs:{val:"opt3"},domProps:{value:e.option},on:{input:function(t){e.option=t}}})]),e._v(" "),e._m(3)])]),e._v(" "),t("p",{staticClass:"caption"},[e._v("Toggles")]),e._v(" "),t("div",{staticClass:"list"},[t("label",{staticClass:"item"},[t("div",{staticClass:"item-content has-secondary"},[e._v("\n          Events and reminders\n        ")]),e._v(" "),t("div",{staticClass:"item-secondary"},[t("q-toggle",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],domProps:{value:e.checked},on:{input:function(t){e.checked=t}}})])]),e._v(" "),t("label",{staticClass:"item two-lines"},[e._m(4),e._v(" "),t("div",{staticClass:"item-secondary"},[t("q-toggle",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"purple",domProps:{value:e.checked},on:{input:function(t){e.checked=t}}})])]),e._v(" "),t("label",{staticClass:"item three-lines"},[e._m(5),e._v(" "),t("div",{staticClass:"item-secondary"},[t("q-toggle",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"red",domProps:{value:e.checked},on:{input:function(t){e.checked=t}}})])])]),e._v(" "),t("p",{staticClass:"caption"},[e._v("Select")]),e._v(" "),t("div",{staticClass:"list"},[t("div",{staticClass:"list-label"},[e._v("Single Selection")]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("supervisor_account")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],staticClass:"full-width",attrs:{type:"radio",options:e.selectOptions,"ok-label":"Pick","cancel-label":"Neah",title:"Company"},domProps:{value:e.select},on:{input:function(t){e.select=t}}})])]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"list-label"},[e._v("Multiple Selection")]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("supervisor_account")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],staticClass:"full-width",attrs:{type:"checkbox",options:e.selectOptions,"ok-label":"Pick",title:"Companies"},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}})])]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("supervisor_account")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-select",{directives:[{name:"model",rawName:"v-model",value:e.multipleSelect,expression:"multipleSelect"}],staticClass:"full-width",attrs:{type:"toggle",options:e.selectOptions,"ok-label":"Pick",title:"Companies"},domProps:{value:e.multipleSelect},on:{input:function(t){e.multipleSelect=t}}})])])]),e._v(" "),t("p",{staticClass:"caption"},[e._v("Ranges")]),e._v(" "),t("div",{staticClass:"list"},[t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("volume_up")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-range",{directives:[{name:"model",rawName:"v-model",value:e.range,expression:"range"}],attrs:{min:0,max:50,label:""},domProps:{value:e.range},on:{input:function(t){e.range=t}}})])]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("brightness_medium")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-range",{directives:[{name:"model",rawName:"v-model",value:e.range,expression:"range"}],attrs:{min:0,max:50,label:""},domProps:{value:e.range},on:{input:function(t){e.range=t}}})])]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"list-label"},[e._v("Double Range")]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("local_atm")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-double-range",{directives:[{name:"model",rawName:"v-model",value:e.doubleRange,expression:"doubleRange"}],attrs:{min:0,max:50,label:""},domProps:{value:e.doubleRange},on:{input:function(t){e.doubleRange=t}}})])]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("euro_symbol")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-double-range",{directives:[{name:"model",rawName:"v-model",value:e.doubleRange,expression:"doubleRange"}],attrs:{min:0,max:50,label:""},domProps:{value:e.doubleRange},on:{input:function(t){e.doubleRange=t}}})])])]),e._v(" "),t("p",{staticClass:"caption"},[e._v("Date and Time")]),e._v(" "),t("div",{staticClass:"list"},[t("div",{staticClass:"list-label"},[e._v("Date or Time")]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("access_time")]),e._v(" "),t("div",{staticClass:"item-content"},[t("q-datetime",{directives:[{name:"model",rawName:"v-model",value:e.timestamp,expression:"timestamp"}],staticClass:"full-width",attrs:{type:"time"},domProps:{value:e.timestamp},on:{input:function(t){e.timestamp=t}}})])]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("update")]),e._v(" "),t("div",{staticClass:"item-content row items-baseline"},[t("q-datetime",{directives:[{name:"model",rawName:"v-model",value:e.timestamp,expression:"timestamp"}],staticClass:"full-width",attrs:{type:"date"},domProps:{value:e.timestamp},on:{input:function(t){e.timestamp=t}}})])]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"list-label"},[e._v("Date & Time")]),e._v(" "),t("div",{staticClass:"item two-lines"},[t("i",{staticClass:"item-primary"},[e._v("notifications")]),e._v(" "),t("div",{staticClass:"item-content row items-baseline"},[t("q-datetime",{directives:[{name:"model",rawName:"v-model",value:e.timestamp,expression:"timestamp"}],staticClass:"full-width",attrs:{type:"datetime"},domProps:{value:e.timestamp},on:{input:function(t){e.timestamp=t}}})])])])])])},staticRenderFns:[function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"item-content"},[t("div",[e._v("Notifications")]),e._v(" "),t("div",[e._v("Allow notifications")])])},function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"item-content"},[t("div",[e._v("Notifications")]),e._v(" "),t("div",[e._v("Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications ")])])},function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"item-content"},[t("div",[e._v("Option 2")]),e._v(" "),t("div",[e._v("Allows notifications")])])},function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"item-content"},[t("div",[e._v("Option 3")]),e._v(" "),t("div",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])},function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"item-content has-secondary"},[t("div",[e._v("Events and reminders")]),e._v(" "),t("div",[e._v("Lorem ipsum")])])},function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"item-content has-secondary"},[t("div",[e._v("Events and reminders")]),e._v(" "),t("div",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])}]}}});