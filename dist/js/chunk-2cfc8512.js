(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cfc8512"],{"1da5":function(t,e,s){},"3e84":function(t,e,s){"use strict";e["a"]={name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"},useHidden:{type:Boolean,default:!0}},data:function(){return{style:{},initial:!1,hidden:!1}},watch:{active:function(){this.layout()}},render:function(t){return t(this.tag,{style:this.style,attrs:this.attrs,ref:"container",on:{transitionend:this.onTransitionEnd}},this.$slots.default)},mounted:function(){this.layout(),this.initial=!0},created:function(){this.hidden=!this.active},computed:{el:function(){return this.$refs.container},attrs:function(){var t={"aria-hidden":!this.active,"aria-expanded":this.active};return this.useHidden&&(t.hidden=this.hidden),t}},methods:{layout:function(){var t=this;this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",(function(){return t.el.scrollHeight+"px"}))):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",(function(){return"0px"})))},asap:function(t){this.initial?this.$nextTick(t):t()},setHeight:function(t,e){var s=this;this.style={height:t},this.asap((function(){s.__=s.el.scrollHeight,s.style={height:e(),overflow:"hidden","transition-property":"height","transition-duration":s.duration+"ms"}}))},onTransitionEnd:function(t){t.target===this.el&&(this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end")))}}}},"457f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,daterange:t.input.daterange},on:{dateRangeOnUpdate:t.dateRangeOnUpdate}}),s("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":t.sessions.perPage,"current-page":t.sessions.currentPage,items:t.sessions.items,fields:t.sessions.fields},scopedSlots:t._u([{key:"cell(assignedToAgent)",fn:function(e){return["BOT"==e.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):t._e(),"AGENT"==e.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):t._e(),t._v("\n                 "+t._s(e.item.assignedToAgent)+"\n            ")]}},{key:"cell(contactId)",fn:function(e){return[s("i",{staticClass:"fab",class:t.MyDict.socialPrefix(e.item.contactId)}),t._v("\n                "+t._s(e.item.contactName||e.item.contactId)+"\n            ")]}},{key:"cell(startSessionStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.startSessionStamp))+"\n            ")]}},{key:"cell(fistResponseStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.fistResponseStamp))+" \n            ")]}},{key:"cell(closeSessionStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.closeSessionStamp))+"\n                "),e.item.active?s("font-awesome-icon",{style:{color:"green"},attrs:{icon:"circle"}}):t._e()]}},{key:"cell(actions)",fn:function(e){return[s("span",{staticClass:"far fa-comment-alt",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.showChat(e.item,e.index,s.target)}}}),t._v("\n                 \n\n                "),"IMPORT"==e.item.channel?s("span",{staticClass:"fa fa-trash",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.deleteChat(e.item,e.index,s.target)}}}):t._e()]}}])}),s("b-pagination",{attrs:{"total-rows":t.sessions.rows,"per-page":t.sessions.perPage,"aria-controls":"agent-session-list"},model:{value:t.sessions.currentPage,callback:function(e){t.$set(t.sessions,"currentPage",e)},expression:"sessions.currentPage"}}),s("div",{staticClass:"chat_archive",class:{closed:!t.session}},[t.session?s("agent-chat",{key:t.session.sessionId,attrs:{session:t.session},on:{close:t.hideChat}}):t._e()],1)],1)},a=[],i=(s("96cf"),s("3b8d")),r=s("bd86"),o=s("a391"),c=s("d166"),l=s("df4b"),u=s("ecee"),h=s("c074"),d=s("ad3d");u["c"].add(h["Q"],h["u"],h["a"],h["d"],h["O"],h["t"],h["w"],h["J"],h["R"]);var p={components:{PageTitle:o["a"],"font-awesome-icon":d["a"],AgentChat:l["a"]},data:function(){var t;return t={MyFlags:c["c"],MyDict:c["b"],MyConst:c["a"],heading:"Chat Sessions",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",input:{daterange:{startDate:null,endDate:null}},sessions:{fields:[{key:"assignedToAgent",label:"Assigned"},{key:"contactId",label:"Contact"},{key:"actions",label:"Action"},{key:"startSessionStamp",label:"Start@"},{key:"fistResponseStamp",label:"Agent@"},{key:"closeSessionStamp",label:"Closed@"}],items:[],perPage:25,currentPage:1,rows:0}},Object(r["a"])(t,"input",{daterange:{startDate:null,endDate:null}}),Object(r["a"])(t,"session",null),t},mounted:function(t){this.dateRangeOnUpdate()},methods:{getSessions:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetSessions",{agent:"TEAM",contactType:"MESSAGE_TWITTER",startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 2:e=t.sent,this.sessions.items=e.results,this.sessions.rows=this.sessions.items.length,console.log("sessions",e,this.sessions);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dateRangeOnUpdate:function(t){console.log("dateRangeOnUpdate",t),this.input.daterange.startDate=this.input.daterange.startDate.getTime(),this.input.daterange.endDate=this.input.daterange.endDate.getTime(),this.getSessions()},deleteChat:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("DeleteSessionChats",e);case 2:t.sent,this.sessions.items.splice(s,1);case 4:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}(),hideChat:function(t){this.session=null},showChat:function(t){this.session&&this.session.sessionId==t.sessionId?this.session=null:this.session=t}}},f=p,g=(s("6436"),s("2877")),m=Object(g["a"])(f,n,a,!1,null,"5b6deacf",null);e["default"]=m.exports},"489f":function(t,e,s){},6436:function(t,e,s){"use strict";s("489f")},"9dbb":function(t,e,s){(function(e,s){t.exports=s()})(0,(function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function s(t){return"function"===typeof t}function n(t){return e(t)?"array":typeof t}function a(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(t,e){return null!=t&&"object"===typeof t&&e in t}function r(t,e){return null!=t&&"object"!==typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var o=RegExp.prototype.test;function c(t,e){return o.call(t,e)}var l=/\S/;function u(t){return!c(l,t)}var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function d(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return h[t]}))}var p=/\s*/,f=/\s+/,g=/\s*=/,m=/\s*\}/,v=/#|\^|\/|>|\{|&|=|!/;function _(t,s){if(!t)return[];var n,i,r,o=!1,c=[],l=[],h=[],d=!1,_=!1,b="",x=0;function S(){if(d&&!_)while(h.length)delete l[h.pop()];else h=[];d=!1,_=!1}function T(t){if("string"===typeof t&&(t=t.split(f,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);n=new RegExp(a(t[0])+"\\s*"),i=new RegExp("\\s*"+a(t[1])),r=new RegExp("\\s*"+a("}"+t[1]))}T(s||k.tags);var O,P,D,M,R,E,I=new C(t);while(!I.eos()){if(O=I.pos,D=I.scanUntil(n),D)for(var j=0,U=D.length;j<U;++j)M=D.charAt(j),u(M)?(h.push(l.length),b+=M):(_=!0,o=!0,b+=" "),l.push(["text",M,O,O+1]),O+=1,"\n"===M&&(S(),b="",x=0,o=!1);if(!I.scan(n))break;if(d=!0,P=I.scan(v)||"name",I.scan(p),"="===P?(D=I.scanUntil(g),I.scan(g),I.scanUntil(i)):"{"===P?(D=I.scanUntil(r),I.scan(m),I.scanUntil(i),P="&"):D=I.scanUntil(i),!I.scan(i))throw new Error("Unclosed tag at "+I.pos);if(R=">"==P?[P,D,O,I.pos,b,x,o]:[P,D,O,I.pos],x++,l.push(R),"#"===P||"^"===P)c.push(R);else if("/"===P){if(E=c.pop(),!E)throw new Error('Unopened section "'+D+'" at '+O);if(E[1]!==D)throw new Error('Unclosed section "'+E[1]+'" at '+O)}else"name"===P||"{"===P||"&"===P?_=!0:"="===P&&T(D)}if(S(),E=c.pop(),E)throw new Error('Unclosed section "'+E[1]+'" at '+I.pos);return w(y(l))}function y(t){for(var e,s,n=[],a=0,i=t.length;a<i;++a)e=t[a],e&&("text"===e[0]&&s&&"text"===s[0]?(s[1]+=e[1],s[3]=e[3]):(n.push(e),s=e));return n}function w(t){for(var e,s,n=[],a=n,i=[],r=0,o=t.length;r<o;++r)switch(e=t[r],e[0]){case"#":case"^":a.push(e),i.push(e),a=e[4]=[];break;case"/":s=i.pop(),s[5]=e[2],a=i.length>0?i[i.length-1][4]:n;break;default:a.push(e)}return n}function C(t){this.string=t,this.tail=t,this.pos=0}function b(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function x(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}C.prototype.eos=function(){return""===this.tail},C.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var s=e[0];return this.tail=this.tail.substring(s.length),this.pos+=s.length,s},C.prototype.scanUntil=function(t){var e,s=this.tail.search(t);switch(s){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,s),this.tail=this.tail.substring(s)}return this.pos+=e.length,e},b.prototype.push=function(t){return new b(t,this)},b.prototype.lookup=function(t){var e,n=this.cache;if(n.hasOwnProperty(t))e=n[t];else{var a,o,c,l=this,u=!1;while(l){if(t.indexOf(".")>0){a=l.view,o=t.split("."),c=0;while(null!=a&&c<o.length)c===o.length-1&&(u=i(a,o[c])||r(a,o[c])),a=a[o[c++]]}else a=l.view[t],u=i(l.view,t);if(u){e=a;break}l=l.parent}n[t]=e}return s(e)&&(e=e.call(this.view)),e},x.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(t,e){var s=this.templateCache,n=t+":"+(e||k.tags).join(":"),a="undefined"!==typeof s,i=a?s.get(n):void 0;return void 0==i&&(i=_(t,e),a&&s.set(n,i)),i},x.prototype.render=function(t,e,s,n){var a=this.getConfigTags(n),i=this.parse(t,a),r=e instanceof b?e:new b(e,void 0);return this.renderTokens(i,r,s,t,n)},x.prototype.renderTokens=function(t,e,s,n,a){for(var i,r,o,c="",l=0,u=t.length;l<u;++l)o=void 0,i=t[l],r=i[0],"#"===r?o=this.renderSection(i,e,s,n,a):"^"===r?o=this.renderInverted(i,e,s,n,a):">"===r?o=this.renderPartial(i,e,s,a):"&"===r?o=this.unescapedValue(i,e):"name"===r?o=this.escapedValue(i,e,a):"text"===r&&(o=this.rawValue(i)),void 0!==o&&(c+=o);return c},x.prototype.renderSection=function(t,n,a,i,r){var o=this,c="",l=n.lookup(t[1]);function u(t){return o.render(t,n,a,r)}if(l){if(e(l))for(var h=0,d=l.length;h<d;++h)c+=this.renderTokens(t[4],n.push(l[h]),a,i,r);else if("object"===typeof l||"string"===typeof l||"number"===typeof l)c+=this.renderTokens(t[4],n.push(l),a,i,r);else if(s(l)){if("string"!==typeof i)throw new Error("Cannot use higher-order sections without the original template");l=l.call(n.view,i.slice(t[3],t[5]),u),null!=l&&(c+=l)}else c+=this.renderTokens(t[4],n,a,i,r);return c}},x.prototype.renderInverted=function(t,s,n,a,i){var r=s.lookup(t[1]);if(!r||e(r)&&0===r.length)return this.renderTokens(t[4],s,n,a,i)},x.prototype.indentPartial=function(t,e,s){for(var n=e.replace(/[^ \t]/g,""),a=t.split("\n"),i=0;i<a.length;i++)a[i].length&&(i>0||!s)&&(a[i]=n+a[i]);return a.join("\n")},x.prototype.renderPartial=function(t,e,n,a){if(n){var i=this.getConfigTags(a),r=s(n)?n(t[1]):n[t[1]];if(null!=r){var o=t[6],c=t[5],l=t[4],u=r;0==c&&l&&(u=this.indentPartial(r,l,o));var h=this.parse(u,i);return this.renderTokens(h,e,n,u,a)}}},x.prototype.unescapedValue=function(t,e){var s=e.lookup(t[1]);if(null!=s)return s},x.prototype.escapedValue=function(t,e,s){var n=this.getConfigEscape(s)||k.escape,a=e.lookup(t[1]);if(null!=a)return"number"===typeof a&&n===k.escape?String(a):n(a)},x.prototype.rawValue=function(t){return t[1]},x.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"===typeof t?t.tags:void 0},x.prototype.getConfigEscape=function(t){return t&&"object"===typeof t&&!e(t)?t.escape:void 0};var k={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){S.templateCache=t},get templateCache(){return S.templateCache}},S=new x;return k.clearCache=function(){return S.clearCache()},k.parse=function(t,e){return S.parse(t,e)},k.render=function(t,e,s,a){if("string"!==typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+n(t)+'" was given as the first argument for mustache#render(template, view, partials)');return S.render(t,e,s,a)},k.escape=d,k.Scanner=C,k.Context=b,k.Writer=x,k}))},d800:function(t,e,s){"use strict";s("1da5")},df4b:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-shadow chat_box_wrapper"},[s("div",{staticClass:"card-header msg_head chat-head"},[s("div",{staticClass:"d-flex bd-highlight chat-header-left"},[t.activeChat?s("div",{staticClass:"img_cont",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("img",{staticClass:"rounded-circle user_img",attrs:{src:t.activeChat.profilePic||t.MyDict.profilePic}}),s("span",{staticClass:"online_icon",attrs:{hidden:""}})]):t._e(),t.activeChat?s("div",{staticClass:"user_info",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("span",{staticClass:"user_name"},[t._v(t._s(t.activeChat.name))]),t.activeChat.ilastmsg?s("p",{staticClass:"user_text"},[t._v(t._s(t._f("formatDate")(t.activeChat.ilastmsg.timestamp))+" ")]):t._e()]):t._e(),s("div",{staticClass:"video_cam"},[t._m(0),t._m(1),s("span",{attrs:{hidden:""},on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("i",{staticClass:"fas fa-history"})])])]),s("div",{staticClass:"chat-header-right"},[s("div",{staticClass:"video_cam"},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Close",expression:"'Close'"}],staticStyle:{cursor:"pointer"},on:{click:t.closeBox}},[s("i",{staticClass:"fa fa-close"})])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showMediaOptions,expression:"!showMediaOptions"}],staticClass:"card-body msg_card_body"},[s("div",{staticClass:"msg_card_body-bubbles"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots",opacity:.3,"is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),t.activeChat?t.activeChat?t._l(t.activeChat.messages,(function(e){return s("div",["I"==e.type||"Ii"==e.type?s("div",{staticClass:"d-flex justify-content-start mb-4 chat-bubble",attrs:{title:e.tags?e.tags.categories:null}},[s("div",{staticClass:"msg_cotainer"},[s("span",[t._v(t._s(t._f("newlines")(t._f("striphtml")(e.text))))])]),s("span",{staticClass:"msg_time"},[s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))]),t._v("  "+t._s(t._f("formatDate")(e.timestamp)))])]):"O"==e.type||"Oi"==e.type?s("div",{staticClass:"d-flex justify-content-end mb-4 chat-bubble",attrs:{"data-local-id":"m.localId","data-message-id":e.messageId}},[e.messageId?t._e():s("i",{staticClass:"sending fa fa-spinner fa-spin"},[t._v(" ")]),s("div",{staticClass:"msg_cotainer_send"},[s("span",[t._v(t._s(t._f("newlines")(t._f("striphtml")(e.text))))]),e.attachments?s("div",[s("span",{staticClass:"fa fa-paperclip"}),t._v(" "+t._s(e.template)+" \n                "),s("div",{staticClass:"input-group my-attachments",staticStyle:{"max-width":"200px"}},t._l(e.attachments,(function(e){return s("img",{staticStyle:{"max-width":"200px"},attrs:{src:t._f("thumburl")(e.mediaURL)}})})),0)]):e.template?s("div",{staticClass:"my-msg-template-tag"},[s("span",{staticClass:"fa fa-tag"}),t._v(" "+t._s(e.template)+"\n            ")]):t._e(),e.logs?s("i",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.logs+"",expression:"m.logs+''"}],staticClass:"log_icon fa fa-exclamation-triangle float-right"}):t._e(),s("span",{staticClass:"msg_time_send"},[t._v(t._s(t._f("formatDate")(e.timestamp))+"  "),s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))])])])]):"A"==e.type||"L"==e.type?s("div",{staticClass:"d-flex justify-content-center chat-bubble chat-bubble-note",attrs:{"data-local-id":"m.localId","data-message-id":e.messageId}},[e.messageId?t._e():s("i",{staticClass:"sending fa fa-spinner fa-spin"},[t._v(" ")]),s("div",{staticClass:"msg_cotainer_action"},[t._v("\n            "+t._s(t._f("formatDate")(e.timestamp))+"  "),s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))]),t._v(" "),s("span",{staticClass:"fa fa-long-arrow-alt-right"}),t._v(" "+t._s(t._f("newlines")(t._f("striphtml")(e.action)))+"\n\n            "),t._l(e.logs,(function(n){return e.logs?s("i",{staticClass:"prepend-comma"},[t._v("\n                 "+t._s(t._f("newlines")(t._f("striphtml")(t._f("log_option")(n,e.action)))))]):t._e()}))],2)]):t._e()])})):t._e():s("div",{staticClass:"msg_card_body-logo"},[s("span",{})])],2)]),s("div",{staticClass:"card-footer"})])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-video"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-phone"})])}],i=(s("96cf"),s("3b8d")),r=(s("ecee"),s("ad3d")),o=s("d166"),c=s("9062"),l=s.n(c),u=(s("9dbb"),s("3e84")),h={components:{"font-awesome-icon":r["a"],Loading:l.a,SlideUpDown:u["a"]},props:{session:Object},computed:{},data:function(){return{message_text:"",quickReplies:null,selectedMedia:null,showMediaOptions:!1,showChatOptions:!1,lastMessageId:null,ilastMessageId:null,MyDict:o["b"],MyFlags:o["c"],MyConst:o["a"],isLoading:!1,showQuickActions:!1,activeChat:{messages:null}}},created:function(){console.log("created")},updated:function(){console.log("updated")},mounted:function(){this.loadMessages(),this.loadQuickLabels()},beforeUnmount:function(){},methods:{loadMessages:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("GetSessionChats..."),this.isLoading=!0,t.next=4,this.$store.dispatch("GetSessionChats",this.session);case 4:e=t.sent,console.log("resp",e),this.activeChat=e,this.isLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closeBox:function(t){this.$emit("close")},loadQuickLabels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("LoadQuickLabels");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},d=h,p=(s("d800"),s("2877")),f=Object(p["a"])(d,n,a,!1,null,"3054a364",null);e["a"]=f.exports}}]);