(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b95512"],{"3fbe":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,actions:e.actions},on:{action:e.onAction}}),e._m(0),n("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[n("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:e.teams,fields:e.fields,"tbody-tr-class":e.rowClass},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.deleteReps(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"trash",title:"Delete"}})],1),e._v("\n                   \n                  "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.editReps(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"eye",title:"View"}})],1)]}}])})],1),e.newItem?n("b-modal",{attrs:{id:e.modelName,title:(e.newItem.id?"Edit":"Add")+" Quick Action "},on:{hidden:e.cancelReps},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"text-center form-group"},[n("button",{staticClass:"btn btn-warning",on:{click:e.cancelReps}},[e._v("Cancel")]),e._v("\n \n                  "),e.newItem.id?n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isChanged},on:{click:e.creatQuickReps}},[e._v("Update")]):e._e(),e._v("\n \n                  "),e.newItem.id?e._e():n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isChanged},on:{click:e.creatQuickReps}},[e._v("Create")])])]},proxy:!0}],null,!1,278637934)},[n("ValidationObserver",{ref:"form"},[n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Category")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.category,expression:"newItem.category"}],staticClass:"form-control",attrs:{name:"category",id:"examplePassword",placeholder:"transaction",type:"text"},domProps:{value:e.newItem.category},on:{input:function(t){t.target.composing||e.$set(e.newItem,"category",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,2684917819)})],1),n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.title,expression:"newItem.title"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"Send Last Invoice",type:"text"},domProps:{value:e.newItem.title},on:{input:function(t){t.target.composing||e.$set(e.newItem,"title",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,3041616985)})],1),n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Action Code")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.code,expression:"newItem.code"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"eg:- SEND_INVOICE",type:"text"},domProps:{value:e.newItem.code},on:{input:function(t){t.target.composing||e.$set(e.newItem,"code",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,2881021994)})],1)])],1):e._e()],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"main-card mb-3 card"})])])}],i=(n("7f7f"),n("96cf"),n("3b8d")),s=n("d51b"),o=n("ecee"),c=n("c074"),l=n("ad3d");n("9dbb");function u(){return{category:"",title:"",code:""}}o["c"].add(c["X"],c["W"],c["P"],c["C"]);var d={components:{PageTitle:s["a"],"font-awesome-icon":l["a"]},data:function(){return{heading:"Quick Actions",subheading:"are used by agents to trigger functionalty in core business app ",icon:"pe-7s-browser icon-gradient bg-tempting-azure fa fa-location-arrow",actions:[{label:"Add Quick Action",icon:"plus",name:"ADD_ITEM"}],fields:[{key:"category",label:"Category"},{key:"title",label:"Title"},{key:"code",label:"Action Code"},{key:"actions",label:"Options"}],newItem:u(),sample:{contact:{name:"John Doe",phone:"919876543210",email:"John.Doe@company.com"}},modelName:"MODAL_ADD_QUICK_ACTION"}},computed:{teams:function(e){return this.$store.getters.StateQAxns},isChanged:function(e){return this.oldHash!==JSON.stringify(this.newItem)}},created:function(e){this.loadQReps()},methods:{loadQReps:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetQuickAxns");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),creatQuickReps:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate();case 2:if(t=e.sent,!0!==t){e.next=9;break}return e.next=6,this.$store.dispatch("CreatQuickAxns",this.newItem);case 6:this.newItem=u(),this.$refs.form.reset(),this.onAction({name:"CANCEL"});case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteReps:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeleteQuickAxns",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelReps:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=u(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editReps:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=u(),this.newItem.id=t.id,this.newItem.category=t.category,this.newItem.title=t.title,this.newItem.code=t.code,this.onAction({name:"EDIT_ITEM"});case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),rowClass:function(e,t){if(e&&"row"===t)return this.newItem.id==e.id?"table-success":void 0},onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}}}},p=d,h=n("2877"),f=Object(h["a"])(p,a,r,!1,null,null,null);t["default"]=f.exports},"748d":function(e,t,n){"use strict";n("d584")},"9dbb":function(e,t,n){(function(t,n){e.exports=n()})(0,(function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"===typeof e}function a(e){return t(e)?"array":typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e,t){return null!=e&&"object"===typeof e&&t in e}function s(e,t){return null!=e&&"object"!==typeof e&&e.hasOwnProperty&&e.hasOwnProperty(t)}var o=RegExp.prototype.test;function c(e,t){return o.call(e,t)}var l=/\S/;function u(e){return!c(l,e)}var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function p(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return d[e]}))}var h=/\s*/,f=/\s+/,m=/\s*=/,g=/\s*\}/,v=/#|\^|\/|>|\{|&|=|!/;function w(e,n){if(!e)return[];var a,i,s,o=!1,c=[],l=[],d=[],p=!1,w=!1,C="",_=0;function x(){if(p&&!w)while(d.length)delete l[d.pop()];else d=[];p=!1,w=!1}function I(e){if("string"===typeof e&&(e=e.split(f,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);a=new RegExp(r(e[0])+"\\s*"),i=new RegExp("\\s*"+r(e[1])),s=new RegExp("\\s*"+r("}"+e[1]))}I(n||D.tags);var A,R,E,S,T,O,P=new k(e);while(!P.eos()){if(A=P.pos,E=P.scanUntil(a),E)for(var N=0,$=E.length;N<$;++N)S=E.charAt(N),u(S)?(d.push(l.length),C+=S):(w=!0,o=!0,C+=" "),l.push(["text",S,A,A+1]),A+=1,"\n"===S&&(x(),C="",_=0,o=!1);if(!P.scan(a))break;if(p=!0,R=P.scan(v)||"name",P.scan(h),"="===R?(E=P.scanUntil(m),P.scan(m),P.scanUntil(i)):"{"===R?(E=P.scanUntil(s),P.scan(g),P.scanUntil(i),R="&"):E=P.scanUntil(i),!P.scan(i))throw new Error("Unclosed tag at "+P.pos);if(T=">"==R?[R,E,A,P.pos,C,_,o]:[R,E,A,P.pos],_++,l.push(T),"#"===R||"^"===R)c.push(T);else if("/"===R){if(O=c.pop(),!O)throw new Error('Unopened section "'+E+'" at '+A);if(O[1]!==E)throw new Error('Unclosed section "'+O[1]+'" at '+A)}else"name"===R||"{"===R||"&"===R?w=!0:"="===R&&I(E)}if(x(),O=c.pop(),O)throw new Error('Unclosed section "'+O[1]+'" at '+P.pos);return y(b(l))}function b(e){for(var t,n,a=[],r=0,i=e.length;r<i;++r)t=e[r],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(a.push(t),n=t));return a}function y(e){for(var t,n,a=[],r=a,i=[],s=0,o=e.length;s<o;++s)switch(t=e[s],t[0]){case"#":case"^":r.push(t),i.push(t),r=t[4]=[];break;case"/":n=i.pop(),n[5]=t[2],r=i.length>0?i[i.length-1][4]:a;break;default:r.push(t)}return a}function k(e){this.string=e,this.tail=e,this.pos=0}function C(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function _(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}k.prototype.eos=function(){return""===this.tail},k.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},k.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},C.prototype.push=function(e){return new C(e,this)},C.prototype.lookup=function(e){var t,a=this.cache;if(a.hasOwnProperty(e))t=a[e];else{var r,o,c,l=this,u=!1;while(l){if(e.indexOf(".")>0){r=l.view,o=e.split("."),c=0;while(null!=r&&c<o.length)c===o.length-1&&(u=i(r,o[c])||s(r,o[c])),r=r[o[c++]]}else r=l.view[e],u=i(l.view,e);if(u){t=r;break}l=l.parent}a[e]=t}return n(t)&&(t=t.call(this.view)),t},_.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},_.prototype.parse=function(e,t){var n=this.templateCache,a=e+":"+(t||D.tags).join(":"),r="undefined"!==typeof n,i=r?n.get(a):void 0;return void 0==i&&(i=w(e,t),r&&n.set(a,i)),i},_.prototype.render=function(e,t,n,a){var r=this.getConfigTags(a),i=this.parse(e,r),s=t instanceof C?t:new C(t,void 0);return this.renderTokens(i,s,n,e,a)},_.prototype.renderTokens=function(e,t,n,a,r){for(var i,s,o,c="",l=0,u=e.length;l<u;++l)o=void 0,i=e[l],s=i[0],"#"===s?o=this.renderSection(i,t,n,a,r):"^"===s?o=this.renderInverted(i,t,n,a,r):">"===s?o=this.renderPartial(i,t,n,r):"&"===s?o=this.unescapedValue(i,t):"name"===s?o=this.escapedValue(i,t,r):"text"===s&&(o=this.rawValue(i)),void 0!==o&&(c+=o);return c},_.prototype.renderSection=function(e,a,r,i,s){var o=this,c="",l=a.lookup(e[1]);function u(e){return o.render(e,a,r,s)}if(l){if(t(l))for(var d=0,p=l.length;d<p;++d)c+=this.renderTokens(e[4],a.push(l[d]),r,i,s);else if("object"===typeof l||"string"===typeof l||"number"===typeof l)c+=this.renderTokens(e[4],a.push(l),r,i,s);else if(n(l)){if("string"!==typeof i)throw new Error("Cannot use higher-order sections without the original template");l=l.call(a.view,i.slice(e[3],e[5]),u),null!=l&&(c+=l)}else c+=this.renderTokens(e[4],a,r,i,s);return c}},_.prototype.renderInverted=function(e,n,a,r,i){var s=n.lookup(e[1]);if(!s||t(s)&&0===s.length)return this.renderTokens(e[4],n,a,r,i)},_.prototype.indentPartial=function(e,t,n){for(var a=t.replace(/[^ \t]/g,""),r=e.split("\n"),i=0;i<r.length;i++)r[i].length&&(i>0||!n)&&(r[i]=a+r[i]);return r.join("\n")},_.prototype.renderPartial=function(e,t,a,r){if(a){var i=this.getConfigTags(r),s=n(a)?a(e[1]):a[e[1]];if(null!=s){var o=e[6],c=e[5],l=e[4],u=s;0==c&&l&&(u=this.indentPartial(s,l,o));var d=this.parse(u,i);return this.renderTokens(d,t,a,u,r)}}},_.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},_.prototype.escapedValue=function(e,t,n){var a=this.getConfigEscape(n)||D.escape,r=t.lookup(e[1]);if(null!=r)return"number"===typeof r&&a===D.escape?String(r):a(r)},_.prototype.rawValue=function(e){return e[1]},_.prototype.getConfigTags=function(e){return t(e)?e:e&&"object"===typeof e?e.tags:void 0},_.prototype.getConfigEscape=function(e){return e&&"object"===typeof e&&!t(e)?e.escape:void 0};var D={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){x.templateCache=e},get templateCache(){return x.templateCache}},x=new _;return D.clearCache=function(){return x.clearCache()},D.parse=function(e,t){return x.parse(e,t)},D.render=function(e,t,n,r){if("string"!==typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+a(e)+'" was given as the first argument for mustache#render(template, view, partials)');return x.render(e,t,n,r)},D.escape=p,D.Scanner=k,D.Context=C,D.Writer=_,D}))},d51b:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:e.icon})]),n("div",[e._v("\n                "+e._s(e.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[e._v("\n                    "+e._s(e.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},[e._l(e.actions,(function(t){return t.hidden||!1===e.actionShow[t.name]?e._e():n("span",[t.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==t.type,"btn-success":!t.type||"button"==t.type},attrs:{tag:"button",to:t.link,type:"button"}},[t.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}):e._e(),e._v("\n                    "+e._s(t.label)+" \n                ")],1):n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==t.type,"btn-success":!t.type||"button"==t.type},on:{click:function(n){return e.clickAction(t)}}},[t.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}):e._e(),e._v("\n                    "+e._s(t.label)+" \n                ")],1)],1)})),e.dateranegeinput&&e.dateranegeinput.hidden?n("date-range-picker",{attrs:{opens:"left","time-picker":!1,ranges:e.dateranegeinput.ranges},on:{select:e.onDateRangeSelect,update:e.onDateRangeUpdate},scopedSlots:e._u([{key:"input",fn:function(t){return[e._v("\n              "+e._s(e._f("date")(t.startDate))+" - "+e._s(e._f("date")(t.endDate))+"\n            ")]}}],null,!1,3768211459),model:{value:e.dateranegeinput.range,callback:function(t){e.$set(e.dateranegeinput,"range",t)},expression:"dateranegeinput.range"}}):e._e()],2)])])},r=[],i=(n("7f7f"),n("ecee")),s=n("c074"),o=n("ad3d"),c=n("bbf5"),l=n.n(c),u=(n("53b4"),n("2ead"),n("c1df")),d=n.n(u);function p(e){return e.hour(0).minute(0).seconds(0).milliseconds(0)}function h(e){return e.hour(23).minute(59).seconds(59).milliseconds(999)}i["c"].add(s["N"],s["H"]);var f={components:{"font-awesome-icon":o["a"],DateRangePicker:l.a},data:function(){var e=this;return{dateranegeinput:function(){if(!e.daterange)return null;var t=e.daterange.startDate||p(d()()).toDate(),n=e.daterange.endDate||h(d()()).toDate();return{range:{startDate:t,endDate:n},ranges:{Today:[p(d()()).toDate(),h(d()()).toDate()],Yesterday:[p(d()().subtract(1,"day")).toDate(),h(d()().subtract(1,"day")).toDate()],"This month":[p(d()().date(1)).toDate(),h(d()()).toDate()],"Last month":[p(d()().subtract(1,"month").date(1)).toDate(),h(d()().date(0)).toDate()],"This year":[p(d()().month(0).date(1)).toDate(),h(d()()).toDate()],"Last year":[p(d()().subtract(1,"year").month(0).date(1)).toDate(),h(d()().month(0).date(0)).toDate()]}}}()}},filters:{date:function(e){return e?e.toLocaleString():""}},created:function(e){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=p(d()()).toDate()),this.daterange.endDate||(this.daterange.endDate=h(d()()).toDate()))},methods:{onDateRangeSelect:function(e){console.log("select",e)},onDateRangeUpdate:function(e){console.log("c_update",e),this.daterange&&(this.daterange.startDate=e.startDate,this.daterange.endDate=e.endDate,this.$emit("dateRangeOnUpdate",e))},clickAction:function(e){this.$emit("action",e)},action:function(e,t,n){for(var a in this.actions)if(this.actions[a].name==e){this.actions[a][t]=n;break}}},props:{icon:String,heading:String,subheading:String,actions:Array,daterange:{type:Object},actionShow:{type:Object,default:function(){return{message:"hello"}}}}},m=f,g=(n("748d"),n("2877")),v=Object(g["a"])(m,a,r,!1,null,null,null);t["a"]=v.exports},d584:function(e,t,n){}}]);