(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fc8f4c2"],{"3e84":function(t,e,n){"use strict";e["a"]={name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"},useHidden:{type:Boolean,default:!0}},data:function(){return{style:{},initial:!1,hidden:!1}},watch:{active:function(){this.layout()}},render:function(t){return t(this.tag,{style:this.style,attrs:this.attrs,ref:"container",on:{transitionend:this.onTransitionEnd}},this.$slots.default)},mounted:function(){this.layout(),this.initial=!0},created:function(){this.hidden=!this.active},computed:{el:function(){return this.$refs.container},attrs:function(){var t={"aria-hidden":!this.active,"aria-expanded":this.active};return this.useHidden&&(t.hidden=this.hidden),t}},methods:{layout:function(){var t=this;this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",(function(){return t.el.scrollHeight+"px"}))):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",(function(){return"0px"})))},asap:function(t){this.initial?this.$nextTick(t):t()},setHeight:function(t,e){var n=this;this.style={height:t},this.asap((function(){n.__=n.el.scrollHeight,n.style={height:e(),overflow:"hidden","transition-property":"height","transition-duration":n.duration+"ms"}}))},onTransitionEnd:function(t){t.target===this.el&&(this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end")))}}}},5647:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card card-shadow chat_box_wrapper"},[n("div",{staticClass:"card-header msg_head chat-head"},[n("div",{staticClass:"d-flex bd-highlight chat-header-left"},[t.activeChat?n("div",{staticClass:"img_cont",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[n("img",{staticClass:"rounded-circle user_img",attrs:{src:t.activeChat.profilePic||t.MyDict.profilePic}}),n("span",{staticClass:"online_icon",attrs:{hidden:""}})]):t._e(),t.activeChat?n("div",{staticClass:"user_info",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[n("span",{staticClass:"user_name"},[t._v(t._s(t.contact))]),n("br"),n("span",{staticClass:"user_text"},[t._v(t._s(t._f("formatDate")(t.activeChat.startSessionStamp))+" - "+t._s(t._f("formatDate")(t.activeChat.closeSessionStamp)))])]):t._e(),n("div",{staticClass:"video_cam"},[t._m(0),t._m(1),n("span",{attrs:{hidden:""},on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[n("i",{staticClass:"fas fa-history"})])])]),n("div",{staticClass:"chat-header-right"},[n("div",{staticClass:"video_cam"},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Close",expression:"'Close'"}],staticStyle:{cursor:"pointer"},on:{click:t.closeBox}},[n("i",{staticClass:"fa fa-close"})])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showMediaOptions,expression:"!showMediaOptions"}],staticClass:"card-body msg_card_body"},[n("div",{staticClass:"msg_card_body-bubbles"},[n("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots",opacity:.3,"is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),t.activeChat?t.activeChat?t._l(t.activeChat.messages,(function(e){return n("div",[e.sender==t.contact?n("div",{staticClass:"d-flex justify-content-start mb-4 chat-bubble",attrs:{title:e.tags?e.tags.categories:null}},[n("div",{staticClass:"msg_cotainer"},[n("span",[t._v(t._s(t._f("newlines")(t._f("striphtml")(e.text))))]),e.attachments?n("div",[n("span",{staticClass:"fa fa-photo"}),t._v(" "+t._s(e.template)+" \n                "),n("div",{staticClass:"input-group my-attachments",staticStyle:{"max-width":"200px"}},t._l(e.attachments,(function(e){return n("img",{staticStyle:{"max-width":"200px"},attrs:{src:t._f("thumburl")(e.mediaURL)}})})),0)]):t._e()]),n("span",{staticClass:"msg_time"},[n("span",{staticClass:"msg_user"},[t._v(t._s(e.sender))]),t._v("  "+t._s(t._f("formatDate")(e.timestamp)))])]):e.sender==t.sender?n("div",{staticClass:"d-flex justify-content-end mb-4 chat-bubble",attrs:{"data-local-id":"m.localId","data-message-id":e.messageId}},[n("div",{staticClass:"msg_cotainer_send"},[n("span",[t._v(t._s(t._f("newlines")(t._f("striphtml")(e.text))))]),e.attachments?n("div",[n("span",{staticClass:"fa fa-photo"}),t._v(" "+t._s(e.template)+" \n                "),n("div",{staticClass:"input-group my-attachments",staticStyle:{"max-width":"200px"}},t._l(e.attachments,(function(e){return n("img",{staticStyle:{"max-width":"200px"},attrs:{src:t._f("thumburl")(e.mediaURL)}})})),0)]):e.template?n("div",{staticClass:"my-msg-template-tag"},[n("span",{staticClass:"fa fa-tag"}),t._v(" "+t._s(e.template)+"\n            ")]):t._e(),e.logs?n("i",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.logs+"",expression:"m.logs+''"}],staticClass:"log_icon fa fa-exclamation-triangle float-right"}):t._e(),n("span",{staticClass:"msg_time_send"},[t._v(t._s(t._f("formatDate")(e.timestamp))+"  "),n("span",{staticClass:"msg_user"},[t._v(t._s(e.sender))])])])]):t._e()])})):t._e():n("div",{staticClass:"msg_card_body-logo"},[n("span",{})])],2)]),n("div",{staticClass:"card-footer"})])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{hidden:""}},[n("i",{staticClass:"fas fa-video"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{hidden:""}},[n("i",{staticClass:"fas fa-phone"})])}],i=(n("96cf"),n("3b8d")),r=(n("ecee"),n("ad3d")),o=n("d166"),c=n("9062"),l=n.n(c),u=(n("9dbb"),n("3e84")),d={components:{"font-awesome-icon":r["a"],Loading:l.a,SlideUpDown:u["a"]},props:{session:Object,sender:String,contact:String},computed:{activeChat:function(t){return this.session}},data:function(){return{message_text:"",quickReplies:null,selectedMedia:null,showMediaOptions:!1,showChatOptions:!1,lastMessageId:null,ilastMessageId:null,MyDict:o["b"],MyFlags:o["c"],MyConst:o["a"],isLoading:!1,showQuickActions:!1}},created:function(){console.log("created")},updated:function(){console.log("updated")},mounted:function(){this.loadMessages(),this.loadQuickLabels()},beforeUnmount:function(){},methods:{loadMessages:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("GetSessionChats...",this.session),this.isLoading=!0,this.isLoading=!1;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closeBox:function(t){this.$emit("close")},loadQuickLabels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("LoadQuickLabels");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},h=d,p=(n("75a9"),n("2877")),f=Object(p["a"])(h,a,s,!1,null,"434cd529",null);e["a"]=f.exports},"748d":function(t,e,n){"use strict";n("d584")},"75a9":function(t,e,n){"use strict";n("7b00")},"7b00":function(t,e,n){},"9dbb":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function n(t){return"function"===typeof t}function a(t){return e(t)?"array":typeof t}function s(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(t,e){return null!=t&&"object"===typeof t&&e in t}function r(t,e){return null!=t&&"object"!==typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var o=RegExp.prototype.test;function c(t,e){return o.call(t,e)}var l=/\S/;function u(t){return!c(l,t)}var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function h(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return d[t]}))}var p=/\s*/,f=/\s+/,g=/\s*=/,v=/\s*\}/,m=/#|\^|\/|>|\{|&|=|!/;function _(t,n){if(!t)return[];var a,i,r,o=!1,c=[],l=[],d=[],h=!1,_=!1,C="",x=0;function D(){if(h&&!_)while(d.length)delete l[d.pop()];else d=[];h=!1,_=!1}function S(t){if("string"===typeof t&&(t=t.split(f,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);a=new RegExp(s(t[0])+"\\s*"),i=new RegExp("\\s*"+s(t[1])),r=new RegExp("\\s*"+s("}"+t[1]))}S(n||k.tags);var E,U,j,M,T,$,R=new b(t);while(!R.eos()){if(E=R.pos,j=R.scanUntil(a),j)for(var O=0,P=j.length;O<P;++O)M=j.charAt(O),u(M)?(d.push(l.length),C+=M):(_=!0,o=!0,C+=" "),l.push(["text",M,E,E+1]),E+=1,"\n"===M&&(D(),C="",x=0,o=!1);if(!R.scan(a))break;if(h=!0,U=R.scan(m)||"name",R.scan(p),"="===U?(j=R.scanUntil(g),R.scan(g),R.scanUntil(i)):"{"===U?(j=R.scanUntil(r),R.scan(v),R.scanUntil(i),U="&"):j=R.scanUntil(i),!R.scan(i))throw new Error("Unclosed tag at "+R.pos);if(T=">"==U?[U,j,E,R.pos,C,x,o]:[U,j,E,R.pos],x++,l.push(T),"#"===U||"^"===U)c.push(T);else if("/"===U){if($=c.pop(),!$)throw new Error('Unopened section "'+j+'" at '+E);if($[1]!==j)throw new Error('Unclosed section "'+$[1]+'" at '+E)}else"name"===U||"{"===U||"&"===U?_=!0:"="===U&&S(j)}if(D(),$=c.pop(),$)throw new Error('Unclosed section "'+$[1]+'" at '+R.pos);return w(y(l))}function y(t){for(var e,n,a=[],s=0,i=t.length;s<i;++s)e=t[s],e&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(a.push(e),n=e));return a}function w(t){for(var e,n,a=[],s=a,i=[],r=0,o=t.length;r<o;++r)switch(e=t[r],e[0]){case"#":case"^":s.push(e),i.push(e),s=e[4]=[];break;case"/":n=i.pop(),n[5]=e[2],s=i.length>0?i[i.length-1][4]:a;break;default:s.push(e)}return a}function b(t){this.string=t,this.tail=t,this.pos=0}function C(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function x(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}b.prototype.eos=function(){return""===this.tail},b.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},b.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},C.prototype.push=function(t){return new C(t,this)},C.prototype.lookup=function(t){var e,a=this.cache;if(a.hasOwnProperty(t))e=a[t];else{var s,o,c,l=this,u=!1;while(l){if(t.indexOf(".")>0){s=l.view,o=t.split("."),c=0;while(null!=s&&c<o.length)c===o.length-1&&(u=i(s,o[c])||r(s,o[c])),s=s[o[c++]]}else s=l.view[t],u=i(l.view,t);if(u){e=s;break}l=l.parent}a[t]=e}return n(e)&&(e=e.call(this.view)),e},x.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(t,e){var n=this.templateCache,a=t+":"+(e||k.tags).join(":"),s="undefined"!==typeof n,i=s?n.get(a):void 0;return void 0==i&&(i=_(t,e),s&&n.set(a,i)),i},x.prototype.render=function(t,e,n,a){var s=this.getConfigTags(a),i=this.parse(t,s),r=e instanceof C?e:new C(e,void 0);return this.renderTokens(i,r,n,t,a)},x.prototype.renderTokens=function(t,e,n,a,s){for(var i,r,o,c="",l=0,u=t.length;l<u;++l)o=void 0,i=t[l],r=i[0],"#"===r?o=this.renderSection(i,e,n,a,s):"^"===r?o=this.renderInverted(i,e,n,a,s):">"===r?o=this.renderPartial(i,e,n,s):"&"===r?o=this.unescapedValue(i,e):"name"===r?o=this.escapedValue(i,e,s):"text"===r&&(o=this.rawValue(i)),void 0!==o&&(c+=o);return c},x.prototype.renderSection=function(t,a,s,i,r){var o=this,c="",l=a.lookup(t[1]);function u(t){return o.render(t,a,s,r)}if(l){if(e(l))for(var d=0,h=l.length;d<h;++d)c+=this.renderTokens(t[4],a.push(l[d]),s,i,r);else if("object"===typeof l||"string"===typeof l||"number"===typeof l)c+=this.renderTokens(t[4],a.push(l),s,i,r);else if(n(l)){if("string"!==typeof i)throw new Error("Cannot use higher-order sections without the original template");l=l.call(a.view,i.slice(t[3],t[5]),u),null!=l&&(c+=l)}else c+=this.renderTokens(t[4],a,s,i,r);return c}},x.prototype.renderInverted=function(t,n,a,s,i){var r=n.lookup(t[1]);if(!r||e(r)&&0===r.length)return this.renderTokens(t[4],n,a,s,i)},x.prototype.indentPartial=function(t,e,n){for(var a=e.replace(/[^ \t]/g,""),s=t.split("\n"),i=0;i<s.length;i++)s[i].length&&(i>0||!n)&&(s[i]=a+s[i]);return s.join("\n")},x.prototype.renderPartial=function(t,e,a,s){if(a){var i=this.getConfigTags(s),r=n(a)?a(t[1]):a[t[1]];if(null!=r){var o=t[6],c=t[5],l=t[4],u=r;0==c&&l&&(u=this.indentPartial(r,l,o));var d=this.parse(u,i);return this.renderTokens(d,e,a,u,s)}}},x.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},x.prototype.escapedValue=function(t,e,n){var a=this.getConfigEscape(n)||k.escape,s=e.lookup(t[1]);if(null!=s)return"number"===typeof s&&a===k.escape?String(s):a(s)},x.prototype.rawValue=function(t){return t[1]},x.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"===typeof t?t.tags:void 0},x.prototype.getConfigEscape=function(t){return t&&"object"===typeof t&&!e(t)?t.escape:void 0};var k={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){D.templateCache=t},get templateCache(){return D.templateCache}},D=new x;return k.clearCache=function(){return D.clearCache()},k.parse=function(t,e){return D.parse(t,e)},k.render=function(t,e,n,s){if("string"!==typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+a(t)+'" was given as the first argument for mustache#render(template, view, partials)');return D.render(t,e,n,s)},k.escape=h,k.Scanner=b,k.Context=C,k.Writer=x,k}))},d51b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:t.icon})]),n("div",[t._v("\n                "+t._s(t.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[t._v("\n                    "+t._s(t.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},[t._l(t.actions,(function(e){return e.hidden?t._e():n("span",[e.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},attrs:{tag:"button",to:e.link,type:"button"}},[e.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}):t._e(),t._v("\n                    "+t._s(e.label)+" \n                ")],1):n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},on:{click:function(n){return t.clickAction(e)}}},[e.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}):t._e(),t._v("\n                    "+t._s(e.label)+" \n                ")],1)],1)})),t.dateranegeinput&&t.dateranegeinput.hidden?n("date-range-picker",{attrs:{opens:"left","time-picker":!1,ranges:t.dateranegeinput.ranges},on:{select:t.onDateRangeSelect,update:t.onDateRangeUpdate},scopedSlots:t._u([{key:"input",fn:function(e){return[t._v("\n              "+t._s(t._f("date")(e.startDate))+" - "+t._s(t._f("date")(e.endDate))+"\n            ")]}}],null,!1,3768211459),model:{value:t.dateranegeinput.range,callback:function(e){t.$set(t.dateranegeinput,"range",e)},expression:"dateranegeinput.range"}}):t._e()],2)])])},s=[],i=n("ecee"),r=n("c074"),o=n("ad3d"),c=n("bbf5"),l=n.n(c),u=(n("53b4"),n("2ead"),n("c1df")),d=n.n(u);function h(t){return t.hour(0).minute(0).seconds(0).milliseconds(0)}function p(t){return t.hour(23).minute(59).seconds(59).milliseconds(999)}i["c"].add(r["N"],r["H"]);var f={components:{"font-awesome-icon":o["a"],DateRangePicker:l.a},data:function(){var t=this;return{dateranegeinput:function(){if(!t.daterange)return null;var e=t.daterange.startDate||h(d()()).toDate(),n=t.daterange.endDate||p(d()()).toDate();return{range:{startDate:e,endDate:n},ranges:{Today:[h(d()()).toDate(),p(d()()).toDate()],Yesterday:[h(d()().subtract(1,"day")).toDate(),p(d()().subtract(1,"day")).toDate()],"This month":[h(d()().date(1)).toDate(),p(d()()).toDate()],"Last month":[h(d()().subtract(1,"month").date(1)).toDate(),p(d()().date(0)).toDate()],"This year":[h(d()().month(0).date(1)).toDate(),p(d()()).toDate()],"Last year":[h(d()().subtract(1,"year").month(0).date(1)).toDate(),p(d()().month(0).date(0)).toDate()]}}}()}},filters:{date:function(t){return t?t.toLocaleString():""}},created:function(t){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=h(d()()).toDate()),this.daterange.endDate||(this.daterange.endDate=p(d()()).toDate()))},methods:{onDateRangeSelect:function(t){console.log("select",t)},onDateRangeUpdate:function(t){console.log("c_update",t),this.daterange&&(this.daterange.startDate=t.startDate,this.daterange.endDate=t.endDate,this.$emit("dateRangeOnUpdate",t))},clickAction:function(t){this.$emit("action",t)}},props:{icon:String,heading:String,subheading:String,actions:Array,daterange:{type:Object}}},g=f,v=(n("748d"),n("2877")),m=Object(v["a"])(g,a,s,!1,null,null,null);e["a"]=m.exports},d584:function(t,e,n){}}]);