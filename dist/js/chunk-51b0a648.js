(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51b0a648"],{cca6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,actions:t.actions}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"main-card mb-3 card"},[a("ValidationObserver",{ref:"form"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Agent Details")]),a("form",{},[a("div",{staticClass:"position-relative form-group"},[a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("label",{attrs:{for:"examplePassword"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_name,expression:"newAgent.agent_name"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"John Doe",type:"text"},domProps:{value:t.newAgent.agent_name},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_name",e.target.value)}}}),a("span",{staticClass:"v-input-error"},[t._v(t._s(e.errors[0]))])]}}])})],1),a("div",{staticClass:"position-relative form-group"},[a("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("label",{attrs:{for:"exampleEmail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_email,expression:"newAgent.agent_email"}],staticClass:"form-control",attrs:{name:"email",id:"exampleEmail",placeholder:"abc@xyz.com",type:"email"},domProps:{value:t.newAgent.agent_email},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_email",e.target.value)}}}),a("span",{staticClass:"v-input-error"},[t._v(t._s(e.errors[0]))])]}}])})],1),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleEmail"}},[t._v("Agent Code")]),a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("@")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_code,expression:"newAgent.agent_code"}],staticClass:"form-control",attrs:{placeholder:"john,sam2",type:"text"},domProps:{value:t.newAgent.agent_code},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_code",e.target.value)}}})])]),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"examplePassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_password,expression:"newAgent.agent_password"}],staticClass:"form-control",attrs:{name:"password",id:"examplePassword",placeholder:"password",type:"password"},domProps:{value:t.newAgent.agent_password},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_password",e.target.value)}}})])])])])],1)]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"main-card mb-3 card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Dashboard options")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleSelect"}},[t._v("Team")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.dept_id,expression:"newAgent.dept_id"}],staticClass:"form-control",attrs:{name:"select",id:"exampleSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newAgent,"dept_id",e.target.multiple?a:a[0])}}},t._l(t.teams,(function(e){return"Y"==e.isactive?a("option",{domProps:{value:e.dept_id}},[t._v("\n                                      "+t._s(e.dept_name))]):t._e()})),0)]),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleCustomMutlipleSelect"}},[t._v("Channels")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_channels_list,expression:"newAgent.agent_channels_list"}],staticClass:"custom-select",attrs:{multiple:"",type:"select",id:"exampleCustomMutlipleSelect",name:"customSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newAgent,"agent_channels_list",e.target.multiple?a:a[0])}}},[a("option",[t._v("WHATSAPP")]),a("option",[t._v("FACEBOOK")]),a("option",[t._v("TWITTER")]),a("option",[t._v("TELEGRAM")]),a("option",[t._v("WEBSITE")])])])]),t._m(0)])])]),t._m(1)])]),a("div",{staticClass:"main-card mb-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"mt-1 btn btn-primary float-right",on:{click:t.createAgent}},[t._v("Submit")])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6",attrs:{hidden:""}},[a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleCustomSelectDisabled"}},[t._v("Custom Select\n                                    Disabled")]),a("select",{staticClass:"custom-select",attrs:{type:"select",id:"exampleCustomSelectDisabled",name:"customSelect",disabled:""}},[a("option",{attrs:{value:""}},[t._v("Select")]),a("option",[t._v("Value 1")]),a("option",[t._v("Value 2")]),a("option",[t._v("Value 3")]),a("option",[t._v("Value 4")]),a("option",[t._v("Value 5")])])]),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleCustomMutlipleSelectDisabled"}},[t._v("Custom Multiple Select\n                                    Disabled")]),a("select",{staticClass:"custom-select",attrs:{multiple:"",type:"select",id:"exampleCustomMutlipleSelectDisabled",name:"customSelect",disabled:""}},[a("option",{attrs:{value:""}},[t._v("Select")]),a("option",[t._v("Value 1")]),a("option",[t._v("Value 2")]),a("option",[t._v("Value 3")]),a("option",[t._v("Value 4")]),a("option",[t._v("Value 5")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-card mb-3 card",attrs:{hidden:""}},[a("div",{staticClass:"card-body row"},[a("h5",{staticClass:"card-title"}),a("div",{staticClass:"position-relative form-group col-md-6"},[a("div",[a("div",{staticClass:"custom-checkbox custom-control"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox"}},[t._v("Active")])]),a("div",{staticClass:"custom-checkbox custom-control"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox2"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox2"}},[t._v("Send Email")])])])])])])}],i=(a("96cf"),a("3b8d")),o=a("d51b");function l(){return{agent_code:"",agent_email:"",agent_id:null,agent_channels_list:[],agent_channels:""}}var r={components:{PageTitle:o["a"]},data:function(){return{heading:"Add Agent",subheading:"Enter Details for new Agent, once created agent will recieve email to reset password",icon:"pe-7s-add-user icon-gradient bg-tempting-azure",actions:[],newAgent:l()}},computed:{teams:function(t){return this.$store.getters.StateTeams}},created:function(t){this.loadAgentTeams()},methods:{loadAgentTeams:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetTeams");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),createAgent:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("CreateAgent",this.newAgent);case 2:this.newAgent=l(),this.$refs.form.reset();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=r,u=a("2877"),d=Object(u["a"])(c,s,n,!1,null,null,null);e["default"]=d.exports},d51b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-page-title"},[a("div",{staticClass:"page-title-wrapper"},[a("div",{staticClass:"page-title-heading"},[a("div",{staticClass:"page-title-icon"},[a("i",{class:t.icon})]),a("div",[t._v("\n                "+t._s(t.heading)+"\n                "),a("div",{staticClass:"page-title-subheading"},[t._v("\n                    "+t._s(t.subheading)+"\n                ")])])]),a("div",{staticClass:"page-title-actions"},t._l(t.actions,(function(e){return a("span",[e.link?a("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{tag:"button",to:e.link,type:"button"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}),t._v("\n                    "+t._s(e.label)+" \n                ")],1):a("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",on:{click:function(a){return t.clickAction(e)}}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}),t._v("\n                    "+t._s(e.label)+" \n                ")],1)],1)})),0)])])},n=[],i=a("ecee"),o=a("c074"),l=a("ad3d");i["c"].add(o["N"],o["H"]);var r={components:{"font-awesome-icon":l["a"]},props:{icon:String,heading:String,subheading:String,actions:Array},methods:{clickAction:function(t){this.$emit("action",t)}}},c=r,u=a("2877"),d=Object(u["a"])(c,s,n,!1,null,null,null);e["a"]=d.exports}}]);