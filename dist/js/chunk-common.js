(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){e.exports=n("56d7")},2864:function(e,t,n){"use strict";n("672d")},"3ef3":function(e,t,n){"use strict";n("ac6a"),n("456d"),n("28a5");var a=n("7618"),r=(n("4917"),n("a481"),n("6b54"),n("a026")),s=n("c1df"),o=n.n(s),i=n("6612"),c=n.n(i),u={},d=function(e){var t=new Date;return e.getDate()==t.getDate()&&e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()};function l(e,t){if(!e)return"";var n=new Date,a=new Date(e),r=o()(n).diff(a,"day");return r<1&&d(a)?o()(a).format("h:mm a"):r<3?o()(a).format("hh:mm a ddd"):r<7?o()(a).format("h:mm a ddd"):o()(a).format("h:mm a DD MMM YY")}function f(e,t){var n=new Date(e);return o()(n).format("h:mm a DD MMM YY")}var A=3600,p=24*A,m=7*p;function b(e){return e<60?c()(e).format("0.0")+" sec":e<A?c()(e/60).format("0.0")+" min":e<p?c()(e/3600).format("0.0")+" hrs":e<m?c()(e/p).format("0.0")+" days":e>=m?c()(e/m).format("0.0a")+" wks":o()(e).format("0.0").toLowerCase()}function g(e){e=e||"";for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t}function h(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}function j(e){return!!/^\d{10}$/.test(e)||(!!/^[1-9]{1}[0-9]{3,14}$/.test(e)||(!!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e)||(!!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(e)||(!!/^(\+\d{1,3}( )?)?((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$/.test(e)||(!!/^(\d{3}[- .]?){2}\d{4}$/.test(e)||!!/^((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$/.test(e))))))}var w={validators:["phone","phoneML","email"],instance:function(e){},addContactLabels:function(e){for(var t in e)u[e[t].id]=e[t]},timespan:b,hexacode:function(e){return h(g(e))},contactLabels:function(e){return u[e]||{id:e,title:e}},isEmpty:function(e){return null===e||void 0===e||""===e||"null"===e},nullify:function(e){return null===e||void 0===e||""===e||"null"===e?null:e},guid:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},https:function(e){return e?e.replace("http://","https://"):e},thumburl:function(e){if(!e)return e;var t=e.match(/(.+)\/(res.cloudinary.com)\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9]+)\/(upload)\/([a-zA-Z0-9,_-]+)\/(.*)/);if(t&&t.length)return t[6]="w_100,h_100",t.slice(1).join("/");var n=e.match(/(.+)\/(.+).(s3.amazonaws.com)\/(.+)/);return n&&n.length?"https://ik.imagekit.io/meherysoccom/".concat(n[2],"/").concat(n[4],"?tr=w-100,h-100"):e},https_thumburl:function(e){return this.thumburl(this.https(e))},keys:function e(t,n){n=n||"";var r=[];for(var s in t)"object"!=Object(a["a"])(t[s])?r.push(n+s):r=r.concat(e(t[s],n+s+"."));return r},map_from_string:function(e){var t=";",n=":";return(e||"").split(t).reduce((function(e,t){var a=(t||"").split(n),r=(a[0]||"").trim();return r&&(e[r]=a[1]),e}),{})},message_form_options:function(e){var t=[],n=[];return Object.keys(e).map((function(a){if(0==a.indexOf("form-input-")){var r=(e[a]||"").split("\\|");t.push({name:a.replace("form-input-",""),label:r[0]||"",type:r[0]||""})}else if(0==a.indexOf("actions-button-")){r=(e[a]||"").split("\\|");n.push({name:a.replace("actions-button-",""),label:r[0]||"",type:r[0]||""})}})),e["inputs"]=t,e["buttons"]=n,e},email:function(e){if(/^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}/.test(e))return"Enter valid email address eg you@company.com"},phone:function(e){return!!j(e)||(!!j(e.replace(/[\ \+]/g,""))||"Enter valid mobile number eg +91 XXXXX XXXXX")},phoneML:function(e){var t=e.match(/[^\r\n\,]+/g);for(var n in t)if(t[n]&&!j(t[n])&&!j(t[n].replace(/[\ \+]/g,"")))return"Enter valid mobile number eg 91XXXXXXXXXX per line";return!0},init:function(){var e=this;r["default"].filter("formatDate",l),r["default"].filter("formatStamp",f),r["default"].filter("newlines",(function(e){return e.trim()})),r["default"].filter("number",(function(e,t){var n=t||"0,0a";return c()(e).format(n).toUpperCase()})),r["default"].filter("timespan",b),r["default"].filter("striphtml",(function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.textContent||t.innerText||"";return n})),r["default"].filter("https",(function(t){return e.https(t)})),r["default"].filter("thumburl",(function(t){return e.thumburl(t)})),r["default"].filter("contact_label",(function(t){return e.contactLabels(t).title})),r["default"].filter("display",(function(e,t,n){var a=(t||[]).filter((function(t){return t.value==e}))[0]||{};return a&&void 0!==a.label&&null!==a.label?a.label:e})),r["default"].filter("log_option",(function(t,n){switch(n){case"LABEL_ADDED":case"LABEL_REMOVED":return e.contactLabels(t).title;default:return t}})),r["default"].filter("hexacode",(function(t){return e.hexacode(t)}))}};w.init(),t["a"]=w},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"53da":function(e,t,n){var a={"./app-account/router":["8d5b","chunk-2d0e93ef"],"./app-admin/router":["0c7d","chunk-2d0aed76"],"./app-agent/router":["9e03","chunk-2d0f0b45"],"./app-customer/router":["aaac","chunk-2d213138"],"./app-dev/router":["3494","chunk-2d0b9a32"],"./app-front/router":["e18a","chunk-2d22498b"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="53da",e.exports=r},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("adcf");var a=n("a026"),r=n("f6c6"),s=n("2f62"),o=(n("0e44"),n("96cf"),n("3b8d")),i=n("bc3a"),c=n.n(i),u={api:{}},d={StateApi:function(e){return e.api}},l={UpdateApiStore:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,r={},r[n.pathKey]=n.data,a("setApiStore",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},f={setApiStore:function(e,t){for(var n in t)e.api[n]=t[n]}},A={state:u,getters:d,actions:l,mutations:f};a["default"].use(s["a"]);var p=new s["a"].Store({modules:{apiStore:A}}),m=(n("a481"),n("28a5"),n("6b54"),n("aef6"),n("6172")),b=c.a.interceptors.response.use((function(e){if(e.request.responseURL.endsWith("/auth/login")){console.log("===>",e.request.responseURL);var t=new URL(e.request.responseURL);t.searchParams.append("referer",encodeURIComponent(window.location.href)),window.location.href=t.toString()}return e.data&&e.data.message&&(console.log("===>",e.data.message),a["default"].$toast&&a["default"].$toast.success&&a["default"].$toast.success(e.data.message)),e}),(function(e,t){var n=e.response;return n.data&&n.data.message&&(console.log("===>",n.data.message),a["default"].$toast&&a["default"].$toast.error&&a["default"].$toast.error(n.data.message)),Promise.reject(e)}));function g(e){return e.replace(/\/$/,"").replace(/^\//,"").replace(/^api\//,"").split(/[\/\_]/).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}function h(e,t){var n=null===e||void 0===e?void 0:e._processor;if(n&&m["a"][n]&&t.results)for(var a in t.results)t.results[a]=m["a"][n](t.results[a]);return t}var j={dispatch:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",p.dispatch(t,n,a));case 1:case"end":return e.stop()}}),e)})));function t(t,n,a){return e.apply(this,arguments)}return t}(),getX:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=g(t),!p.getters.StateApi[a]){e.next=3;break}return e.abrupt("return",p.getters.StateApi[a]);case 3:return e.next=5,c.a.get(t,{params:n});case 5:return r=e.sent,s=h(n,r.data),0==t.indexOf("/api/")&&(console.log("getX",r.data),p.dispatch("UpdateApiStore",{pathKey:a,data:s.results})),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),get:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(t,{params:n});case 2:return a=e.sent,e.abrupt("return",h(n,a.data));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),post:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.post(t,n);case 2:return a=e.sent,e.abrupt("return",h(n,a.data));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in a=new FormData,n)a.append(r,n[r]);return e.next=4,c.a.post(t,a);case 4:return s=e.sent,e.abrupt("return",h(n,s.data));case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),delete:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.delete(t,{params:n,data:n});case 2:return a=e.sent,e.abrupt("return",h(n,a.data));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),config:function(e){switch(e){case"DISABLE_RESPONSE_INTERCEPTOR":c.a.interceptors.response.eject(b);break}}};a["default"].prototype.$service=j;var w=j,v=n("5f5b"),O=n("b1e0"),T=n("9062"),C=n.n(T),S=(n("e40d"),n("e37d")),E=n("b079"),N=n.n(E),P=(n("4238"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",attrs:{id:"app"}},[n(e.app,{tag:"component"})],1)}),k=[],I={name:"AppWrapper",computed:{app:function(){return"app-"+window.CONST.APP}}},y=I,R=(n("2864"),n("2877")),L=Object(R["a"])(y,P,k,!1,null,null,null),x=L.exports;c.a.defaults.withCredentials=!0,c.a.defaults.baseURL=function(){var e=window.location.origin;return window.CONST&&window.CONST.APP_CONTEXT?e+window.CONST.APP_CONTEXT:e}(),console.log("baseURL====",c.a.defaults.baseURL),console.log("location.pathname====",location.pathname),a["default"].config.productionTip=!1,a["default"].use(v["a"]),a["default"].use(O["a"]),a["default"].use(C.a),a["default"].use(S["a"]),S["a"].options.defaultClass="my-tooltip",S["a"].options.defaultTemplate='<div class="foo" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',a["default"].use(N.a),function(e,t){var s=e[t]||e.dev;console.log("ALWAYS",t,s),"function"==typeof s.beforeLoad&&s.beforeLoad(),a["default"].component("app-".concat(t),s.component),n("53da")("./app-".concat(t,"/router")).then((function(e){new a["default"]({el:"#app",store:p,service:w,router:r["a"].router(),template:"<AppWrapper/>",components:{AppWrapper:x}})}))}({admin:{component:function(){return Promise.all([n.e("chunk-0bb2fd9a"),n.e("chunk-6d710795")]).then(n.bind(null,"ae03"))}},agent:{component:function(){return Promise.all([n.e("chunk-6df36f9d"),n.e("chunk-be878aa6")]).then(n.bind(null,"95be"))}},customer:{component:function(){return Promise.all([n.e("chunk-2d225814"),n.e("chunk-6df36f9d"),n.e("chunk-1c33ba79")]).then(n.bind(null,"bb9d"))}},account:{beforeLoad:function(){},component:function(){return Promise.all([n.e("chunk-93d2f1fe"),n.e("chunk-1c5fb068"),n.e("chunk-0bb2fd9a"),n.e("chunk-4d005b12")]).then(n.bind(null,"a124"))}},front:{component:function(){return n.e("chunk-8df26024").then(n.bind(null,"bd6c"))}},dev:{component:function(){return n.e("chunk-474825fe").then(n.bind(null,"f3ce"))}}},window.CONST.APP)},6172:function(e,t,n){"use strict";n("4917"),n("a481");var a=n("3ef3"),r=n("d166");function s(e,t){if(!e||!e)return 0;e=e.replace(/([_-])/g," "),t=t.replace(/([_-])/g," ");var n=e.score(t)+t.score(e);return console.log("str1=str2",e,t,"====>",n),n}t["a"]={session:function(e){e._stamp=(new Date).getTime();var t=e._stamp-r["a"].config.chatSessionTimeout;return e.expired=e.expired||e.lastInComingStamp<t,e.active=e.active&&!e.expired,e._assignedToMe=r["a"].agent==e.assignedToAgent&&!e.resolved,e.assignedToAgent!=r["a"].agent&&e.assignedToAgent?e.assignedToAgent!=r["a"].agent&&e.assignedToAgent&&(e._tab="TEAM"):e._tab="ME",e.lastmsg&&("I"==e.lastmsg.type?e.lastInComingStamp=Math.max(e.lastInComingStamp,e.lastmsg.timestamp):"O"==e.lastmsg.type&&(e.lastResponseStamp=Math.max(e.lastInComingStamp,e.lastmsg.timestamp))),e._gracestamp=e._stamp-r["a"].config.chatIdleTimeout,e._waitingSinceStamp=Math.max(e.lastResponseStamp,e.agentSessionStamp),e._waiting=e.lastResponseStamp<e.lastInComingStamp,e._waitingstamp_en=a["a"].timespan((e._stamp-e._waitingSinceStamp)/1e3),e._attention=e._waiting&&e.lastResponseStamp<e._gracestamp,e._new=e._waiting&&e.lastInComingStamp>r["a"].sessionLoadStamp&&(!e._lastReadStamp||e._lastReadStamp<e.lastInComingStamp),e},quickReply:function(e,t){var n=t.text,a=t.categories;e.title=e.title||"",e.title_len=e.title.length||1,e.template=e.template||"",e.matchIndex=n?e.title.toLowerCase().indexOf(n):-1,e.match=a.indexOf(e.category)>-1;var r=(e.match?.5:0)+s(a.join(" "),e.category)/2;e.matchScore=(0==e.matchIndex?1:0)+(e.matchIndex>0?e.matchIndex/e.title_len:0)+r+s(n,e.title)+s(n,e.template)}}},"672d":function(e,t,n){},adce:function(e,t){e.exports="data:image/png;base64,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"},adcf:function(e,t,n){window.CONST&&window.CONST.CDN_URL&&(n.p=window.CONST.CDN_URL+"/"),window.CONST=window.CONST||{},window.CONST.APP=window.CONST.APP||"admin";var a=location.pathname;/^\/[a-z]+\/plugin\/customer\/.*$/.test(a)?window.CONST.APP="customer":0==a.indexOf("/admin")?window.CONST.APP="admin":0==a.indexOf("/agent")?window.CONST.APP="agent":0==a.indexOf("/dev")&&(window.CONST.APP="dev")},d166:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c}));var a,r=n("bd86");window.CONST.dev="false"!=window.CONST.dev;var s=(a={some:"Settings",app:window.CONST.APP,cdn:window.CONST.CDN_URL,appPrefix:"/"+window.CONST.APP,context:window.CONST.CONTEXT,user:window.CONST.APP_USER,dept:window.CONST.APP_DEPT,agent:window.CONST.APP_USER},Object(r["a"])(a,"agent",window.CONST.APP_USER),Object(r["a"])(a,"config",Object.assign({chatSessionTimeout:864e5,chatIdleTimeout:3e5,agentSessionTimeout:6e5,CHAT_TAG_ENABLED:!0,AGENT_CHAT_INIT:!1},window.CONST.CONFIG||window.CONST.CONFG,window.CONST.dev?{CHAT_TAG_ENABLED:!0,AGENT_CHAT_INIT:!0}:{})),Object(r["a"])(a,"logo",{full:window.CONST.CDN_URL+"/logo/logo-long.png",full_inverse:window.CONST.CDN_URL+"/logo/logo-long-o.png",short:window.CONST.CDN_URL+"/logo/logo-short.png",short_inverse:window.CONST.CDN_URL+"/logo/logo-short-o.png"}),Object(r["a"])(a,"sessionLoadStamp",(new Date).getTime()),a),o={showSidebar:!1,showContactProfile:!0,agent:{showProfile:!0,showProfileAllowed:!1,showContactSearch:!1,profileView:"history",contactsTab:"ME",mvu:"CONTACTS"}},i={social:{FACEBOOK:"fa fa-facebook",WEBSITE:"fa-chrome",TELEGRAM:"fab fa-telegram-plane",TWITTER:"fa-twitter",WHATSAPP:"fa-whatsapp"},chatStatus:{UNASSIGNED:{label:"UNASSIGNED"},OPEN:{label:"OPEN",editable:!0},ATTENTION:{label:"ATTENTION",editable:!0},URGENT:{label:"URGENT",editable:!0},ONHOLD:{label:"ONHOLD",editable:!0},EXPIRED:{label:"EXPIRED"},RESOLVED:{label:"RESOLVED",editable:!0},CLOSED:{label:"CLOSED"}},socialPrefix:function(e){return e=e||"",this.social[e]?this.social[e]:0==e.indexOf("tw")?this.social.TWITTER:0==e.indexOf("tg")?this.social.TELEGRAM:0==e.indexOf("fb")?this.social.FACEBOOK:0==e.indexOf("wa")?this.social.WHATSAPP:this.social.WEBSITE},profilePic:n("adce")},c={isInbound:function(e){return["I","Ii"].indexOf(e)>-1},isOutbound:function(e){return["O","Oi"].indexOf(e)>-1}}},f6c6:function(e,t,n){"use strict";var a=n("a026"),r=n("8c4f");a["default"].use(r["a"]),t["a"]={options:{},route:function(e){console.log(1,e,window.CONST.APP),e.app==window.CONST.APP&&(this.options=e)},router:function(){return console.log(2,this.options,window.CONST.APP),new r["a"]({mode:"history",base:this.options.base,scrollBehavior:this.options.scrollBehavior||function(){return window.scrollTo({top:0,behavior:"smooth"})},routes:this.options.routes})}}}}]);