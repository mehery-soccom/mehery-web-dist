(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df9b950e"],{"02fc":function(t,e,n){"use strict";n("3170")},3170:function(t,e,n){},"457f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,daterange:t.input.daterange},on:{dateRangeOnUpdate:t.dateRangeOnUpdate}}),n("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":t.sessions.perPage,"current-page":t.sessions.currentPage,items:t.sessions.items,fields:t.sessions.fields},scopedSlots:t._u([{key:"cell(assignedToAgent)",fn:function(e){return["BOT"==e.item.mode?n("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):t._e(),"AGENT"==e.item.mode?n("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):t._e(),t._v("\n                 "+t._s(e.item.assignedToAgent)+"\n            ")]}},{key:"cell(contactId)",fn:function(e){return[n("i",{staticClass:"fab",class:t.MyDict.socialPrefix(e.item.contactId)}),t._v("\n                "+t._s(e.item.contactName||e.item.contactId)+"\n\n                "),n("span",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"template-details-"+e.index}}),n("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+e.index,"custom-class":"message-preview"},scopedSlots:t._u([{key:"default",fn:function(){return[n("div",{staticClass:"message-text"},[t._v("Name : "+t._s(e.item.contactName))]),n("div",{staticClass:"message-text"},[t._v("Id : "+t._s(e.item.contactId))]),n("div",{staticClass:"message-text"},[t._v("Session : "+t._s(e.item.sessionId))])]},proxy:!0}],null,!0)})]}},{key:"cell(startSessionStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.startSessionStamp))+"\n            ")]}},{key:"cell(fistResponseStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.fistResponseStamp))+" \n            ")]}},{key:"cell(closeSessionStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.closeSessionStamp))+"\n                "),e.item.active?n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"circle"}}):t._e()]}},{key:"cell(actions)",fn:function(e){return[n("span",{staticClass:"far fa-comment-alt",staticStyle:{cursor:"pointer"},on:{click:function(n){return t.showChat(e.item,e.index,n.target)}}}),t._v("\n                 \n            ")]}}])}),n("b-pagination",{attrs:{"total-rows":t.sessions.rows,"per-page":t.sessions.perPage,"aria-controls":"agent-session-list"},model:{value:t.sessions.currentPage,callback:function(e){t.$set(t.sessions,"currentPage",e)},expression:"sessions.currentPage"}}),n("div",{staticClass:"chat_archive",class:{closed:!t.session}},[t.session?n("agent-chat",{key:t.session.sessionId,attrs:{session:t.session},on:{close:t.hideChat}}):t._e()],1)],1)},s=[],o=(n("96cf"),n("3b8d")),a=n("bd86"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:t.icon})]),n("div",[t._v("\n                "+t._s(t.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[t._t("subheading",(function(){return[t._v("\n                        "+t._s(t.subheading)+"\n                    ")]}))],2)])]),n("div",{staticClass:"page-title-actions"},[t._l(t.actions,(function(e){return e.hidden||!1===t.actionShow[e.name]?t._e():n("span",{staticClass:"action-wrapper"},[e.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},attrs:{tag:"button",to:e.link,type:"button"}},[e.icon?n("i",{staticClass:"mr-2",class:e.icon}):t._e(),t._v("\n                    "+t._s(e.label)+" \n                ")]):"lane"==e.type?n("div",{staticClass:"d-inline-flex align-items-center",staticStyle:{"min-width":"220px"}},[n("v-select",{staticClass:"w-100",attrs:{options:t.input.lane.options,searchable:!1,clearable:!1,placeholder:"Select Account"},on:{input:function(n){return t.clickAction(e)}},scopedSlots:t._u([{key:"selected-option",fn:function(e){return[n("div",{},[n("span",{staticClass:"contact_type contact_type-24 fab",class:t.MyDict.social[e.contactType]}),t._v("  "+t._s(e.lane))])]}},{key:"open-indicator",fn:function(e){var i=e.attributes;return[n("span",t._b({staticClass:"fa fa-caret-down"},"span",i,!1))]}},{key:"option",fn:function(e){var i=e.contactType,s=e.lane;return[n("span",{staticClass:"contact_type contact_type-24 fab",class:t.MyDict.social[i]}),t._v("  "+t._s(s))]}}],null,!0),model:{value:t.input.lane.value,callback:function(e){t.$set(t.input.lane,"value",e)},expression:"input.lane.value"}})],1):"search"==e.type?n("div",{staticClass:"d-inline-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.search.value,expression:"input.search.value"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:t.input.search.value},on:{input:function(e){e.target.composing||t.$set(t.input.search,"value",e.target.value)}}})]):"apply"==e.type?n("div",{staticClass:"d-inline-flex"},[n("button",{staticClass:"btn-shadow  align-items-center btn btn-success",on:{click:function(n){return t.clickAction(e)}}},[e.icon?n("i",{staticClass:"mr-2",attrs:{icon:e.icon}}):t._e(),t._v("\n                        "+t._s(e.label)+" \n                    ")])]):n("div",{staticClass:"d-inline-flex"},[n("button",{staticClass:"btn-shadow  align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},on:{click:function(n){return t.clickAction(e)}}},[e.icon?n("i",{staticClass:"mr-2",class:e.icon}):t._e(),t._v("\n                        "+t._s(e.label)+" \n                    ")])])],1)})),t.dateranegeinput&&!t.dateranegeinput.hidden?n("date-range-picker",{attrs:{opens:"left","time-picker":!1,ranges:t.dateranegeinput.ranges},on:{select:t.onDateRangeSelect,update:t.onDateRangeUpdate},scopedSlots:t._u([{key:"input",fn:function(e){return[t._v("\n              "+t._s(t._f("date")(e.startDate))+" - "+t._s(t._f("date")(e.endDate))+"\n            ")]}}],null,!1,3768211459),model:{value:t.dateranegeinput.range,callback:function(e){t.$set(t.dateranegeinput,"range",e)},expression:"dateranegeinput.range"}}):t._e()],2)])])},l=[],c=(n("7f7f"),n("bbf5")),u=n.n(c),d=(n("53b4"),n("2ead"),n("c1df")),p=n.n(d),h=n("4a7a"),f=n.n(h),g=(n("6dfc"),n("d166"));function m(t){return t.hour(0).minute(0).seconds(0).milliseconds(0)}function v(t){return t.hour(23).minute(59).seconds(59).milliseconds(999)}var b={components:{DateRangePicker:u.a,vSelect:f.a},data:function(){var t=this;return{MyFlags:g["c"],MyDict:g["b"],MyConst:g["a"],dateranegeinput:function(){if(!t.daterange)return null;var e=t.daterange.startDate||m(p()()).toDate(),n=t.daterange.endDate||v(p()()).toDate();return{range:{startDate:e,endDate:n},ranges:{Today:[m(p()()).toDate(),v(p()()).toDate()],Yesterday:[m(p()().subtract(1,"day")).toDate(),v(p()().subtract(1,"day")).toDate()],"This month":[m(p()().date(1)).toDate(),v(p()()).toDate()],"Last month":[m(p()().subtract(1,"month").date(1)).toDate(),v(p()().date(0)).toDate()],"This year":[m(p()().month(0).date(1)).toDate(),v(p()()).toDate()],"Last year":[m(p()().subtract(1,"year").month(0).date(1)).toDate(),v(p()().month(0).date(0)).toDate()]}}}(),input:{lane:{options:[],value:null,sender:""},search:{value:null},contacts:""}}},computed:{},filters:{date:function(t){return t?t.toLocaleString():""}},created:function(t){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=m(p()()).toDate()),this.daterange.endDate||(this.daterange.endDate=v(p()()).toDate()),this.sanitizeDateRange(this.daterange)),this.loadLanes()},methods:{sanitizeDateRange:function(t){var e=p()(t.startDate),n=p()(t.endDate);return t.startDate=m(e).toDate(),t.endDate=v(n).toDate(),t},loadLanes:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.getX("/api/options/lanes");case 2:t.sent,this.input.lane.options=this.$store.getters.StateApi.OptionsLanes;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onDateRangeSelect:function(t){console.log("select",t);var e=this.sanitizeDateRange(t);this.dateranegeinput.range.startDate=e.startDate,this.dateranegeinput.range.endDate=e.endDate},onDateRangeUpdate:function(t){console.log("c_update",t),this.daterange&&(this.daterange.startDate=t.startDate,this.daterange.endDate=t.endDate,this.$emit("dateRangeOnUpdate",t))},clickAction:function(t){this.$emit("action",t)},action:function(t,e,n){for(var i in this.actions)if(this.actions[i].name==t){this.actions[i][e]=n;break}},getInput:function(t){var e;return null===(e=this.input[t])||void 0===e?void 0:e.value}},props:{icon:String,heading:String,subheading:String,actions:Array,daterange:{type:Object,default:function(){return null}},actionShow:{type:Object,default:function(){return{message:"hello"}}}}},y=b,_=(n("02fc"),n("fb11"),n("2877")),w=Object(_["a"])(y,r,l,!1,null,null,null),O=w.exports,S=n("df4b"),D=n("ecee"),C=n("c074"),x=n("ad3d");D["c"].add(C["Q"],C["u"],C["a"],C["d"],C["O"],C["t"],C["w"],C["J"],C["R"]);var k={components:{PageTitle:O,"font-awesome-icon":x["a"],AgentChat:S["a"]},data:function(){var t;return t={MyFlags:g["c"],MyDict:g["b"],MyConst:g["a"],heading:"Chat Sessions",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",input:{daterange:{startDate:null,endDate:null}},sessions:{fields:[{key:"assignedToAgent",label:"Assigned"},{key:"contactId",label:"Contact"},{key:"actions",label:"Action"},{key:"startSessionStamp",label:"Start@"},{key:"fistResponseStamp",label:"Agent@"},{key:"closeSessionStamp",label:"Closed@"}],items:[],perPage:25,currentPage:1,rows:0}},Object(a["a"])(t,"input",{daterange:{startDate:null,endDate:null}}),Object(a["a"])(t,"session",null),t},mounted:function(t){this.dateRangeOnUpdate()},methods:{getSessions:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetSessions",{agent:"TEAM",contactType:"MESSAGE_TWITTER",startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 2:e=t.sent,this.sessions.items=e.results,this.sessions.rows=this.sessions.items.length,console.log("sessions",e,this.sessions);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dateRangeOnUpdate:function(t){console.log("dateRangeOnUpdate",t),this.input.daterange.startDate=this.input.daterange.startDate.getTime(),this.input.daterange.endDate=this.input.daterange.endDate.getTime(),this.getSessions()},deleteChat:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("DeleteSessionChats",e);case 2:t.sent,this.sessions.items.splice(n,1);case 4:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),hideChat:function(t){this.session=null},showChat:function(t){this.session&&this.session.sessionId==t.sessionId?this.session=null:this.session=t}}},A=k,P=(n("68b3"),Object(_["a"])(A,i,s,!1,null,"62a12cfb",null));e["default"]=P.exports},"4a7a":function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){var i=n(4),s=n(5),o=n(6);t.exports=function(t){return i(t)||s(t)||o()}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";var i=n(2);n.n(i).a},function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),o=n(1),a=n.n(o),r=n(3),l=n.n(r),c={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),i=e.getBoundingClientRect(),s=i.top,o=i.bottom,a=i.height;if(s<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(o>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-a)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.select(t)}}},d={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function p(t,e,n,i,s,o,a,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var h={Deselect:p({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:p({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},f={inserted:function(t,e,n){var i=n.context;if(i.appendToBody){var s=i.$refs.toggle.getBoundingClientRect(),o=s.height,a=s.top,r=s.left,l=s.width,c=window.scrollX||window.pageXOffset,u=window.scrollY||window.pageYOffset;t.unbindPosition=i.calculatePosition(t,i,{width:l+"px",left:c+r+"px",top:u+a+o+"px"}),document.body.appendChild(t)}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}},g=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n]})),JSON.stringify(e)},m=0,v=function(){return++m};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={components:y({},h),mixins:[c,u,d],directives:{appendToBody:f},props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return!0}},getOptionLabel:{type:Function,default:function(t){return"object"===a()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==a()(t))return t;try{return t.hasOwnProperty("id")?t.id:g(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return(e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var i=n.getOptionLabel(t);return"number"==typeof i&&(i=i.toString()),n.filterBy(t,i,e)}))}},createOption:{type:Function,default:function(t){return"object"===a()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return["function","boolean"].includes(a()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var i=n.width,s=n.top,o=n.left;t.style.top=s,t.style.left=o,t.style.width=i}},dropdownShouldOpen:{type:Function,default:function(t){var e=t.noDrop,n=t.open,i=t.mutableLoading;return!e&&n&&!i}}},data:function(){return{uid:v(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)},multiple:function(){this.clearSelection()},open:function(t){this.$emit(t?"open":"close")}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t)},select:function(t){this.$emit("option:selecting",t),this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t),this.$emit("option:selected",t)),this.onAfterSelect(t)},deselect:function(t){var e=this;this.$emit("option:deselecting",t),this.updateValue(this.selectedValue.filter((function(n){return!e.optionComparator(n,t)}))),this.$emit("option:deselected",t)},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(t){var e=this;void 0===this.value&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t)},toggleDropdown:function(t){var e=t.target!==this.searchEl;e&&t.preventDefault();var n=[].concat(s()(this.$refs.deselectButtons||[]),s()([this.$refs.clearButton]||!1));void 0===this.searchEl||n.filter(Boolean).some((function(e){return e.contains(t.target)||e===t.target}))?t.preventDefault():this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(s()(this.options),s()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=s()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t)}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return"object"===a()(t)?t:l()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.clearSearchOnSelect,e=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},i={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return i[t]=n}));var s=this.mapKeydown(i,this);if("function"==typeof s[t.keyCode])return s[t.keyCode](t)}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:y({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:y({},e,{deselect:this.deselect}),footer:y({},e,{deselect:this.deselect})}},childComponents:function(){return y({},h,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||e.unshift(n)}return e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},w=(n(7),p(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+t.uid+"__combobox",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":"vs"+t.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(e){return t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button",title:"Deselect "+t.getOptionLabel(e),"aria-label":"Deselect "+t.getOptionLabel(e)},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs"+t.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+t.uid+"__listbox",role:"listbox",tabindex:"-1"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(e,i){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":i===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{role:"option",id:"vs"+t.uid+"__option-"+i,"aria-selected":i===t.typeAheadPointer||null},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=i)},mousedown:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)})),t._v(" "),0===t.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")],null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),O={ajax:d,pointer:u,pointerScroll:c};n.d(e,"VueSelect",(function(){return w})),n.d(e,"mixins",(function(){return O})),e.default=w}])}))},"68b3":function(t,e,n){"use strict";n("6f6a")},"6dfc":function(t,e,n){},"6f6a":function(t,e,n){},"7f7f":function(t,e,n){var i=n("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in s||n("9e1e")&&i(s,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},da41:function(t,e,n){},fb11:function(t,e,n){"use strict";n("da41")}}]);