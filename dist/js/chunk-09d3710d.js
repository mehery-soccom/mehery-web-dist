(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09d3710d"],{6682:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("page-title",{attrs:{heading:e.heading,icon:e.icon,actions:e.actions},scopedSlots:e._u([{key:"subheading",fn:function(){return[e.session?s("span",[e._v("\n          published by "+e._s(e.session.createdBy)+" @ "+e._s(e._f("formatDate")(e.session.createdStamp))+"\n        ")]):e._e()]},proxy:!0}])}),s("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":e.table.perPage,"current-page":e.table.currentPage,items:e.table.items,fields:e.table.fields},scopedSlots:e._u([{key:"cell(account)",fn:function(t){return[s("i",{staticClass:"fab",class:e.MyDict.socialPrefix(e.session.contactType)}),e._v("\n                  "+e._s(e.session.lane)+"\n            ")]}},{key:"cell(contact)",fn:function(t){return[s("i",{staticClass:"fab",class:e.MyDict.socialPrefix(e.session.contactType)}),e._v("\n                  "+e._s(t.item.contact.phone)+"\n            ")]}},{key:"cell(createdBy)",fn:function(t){return[e._v("\n                  "+e._s(t.item.sender)+"\n            ")]}},{key:"cell(sendType)",fn:function(t){return[e._v("\n                  "+e._s(t.item.meta.composeType)+"-"+e._s(t.item.meta.sendType)+"\n            ")]}},{key:"cell(template)",fn:function(t){return[s("span",{staticClass:"fa fa-comment",attrs:{"cursor-pointer":"",id:"template-details-"+t.index}}),e._v(" "+e._s(t.item.templateId)+"\n                "),s("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+t.index,"custom-class":"message-preview"},scopedSlots:e._u([{key:"default",fn:function(){return[s("div",{staticClass:"message-text"},[e._v(e._s(t.item.text))])]},proxy:!0}],null,!0)})]}},{key:"cell(initiated)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.stamps.INIT))+"\n            ")]}},{key:"cell(status)",fn:function(t){return[s("div",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"job-status-details-"+t.index}}),e._v("\n                  "+e._s(t.item.status)+"\n                "),t.item.logs?s("div",{staticClass:"fa fa-exclamation-triangle float-right",staticStyle:{"line-height":"21px"},attrs:{"cursor-pointer":"",id:"job-logs-details-"+t.index}}):e._e(),s("b-popover",{attrs:{triggers:"hover focus",target:"job-status-details-"+t.index},scopedSlots:e._u([{key:"title",fn:function(){return e._l(t.item.stamps,(function(t,n){return s("div",{staticClass:"text-align-left row",staticStyle:{width:"400px"}},[s("small",{staticClass:"col-2"},[e._v(" "+e._s(n)+" ")]),s("small",{staticClass:"col-10"},[e._v(":  "+e._s(e._f("formatDate")(t)))])])}))},proxy:!0}],null,!0)}),t.item.logs?s("b-popover",{attrs:{triggers:"hover focus",target:"job-logs-details-"+t.index},scopedSlots:e._u([{key:"title",fn:function(){return e._l(t.item.logs,(function(t,n){return s("small",{staticClass:"text-align-left"},[e._v(" \n                     "+e._s(t)+"\n                    ")])}))},proxy:!0}],null,!0)}):e._e()]}}])}),s("b-pagination",{attrs:{"total-rows":e.table.rows,"per-page":e.table.perPage,"aria-controls":"agent-session-list"},model:{value:e.table.currentPage,callback:function(t){e.$set(e.table,"currentPage",t)},expression:"table.currentPage"}})],1)},a=[],i=(s("96cf"),s("3b8d")),r=s("e492"),o=s("d166"),l=s("df4b"),c=s("ecee"),u=s("c074"),d=s("ad3d");c["c"].add(u["Q"],u["u"],u["a"],u["d"],u["O"],u["t"],u["w"],u["J"],u["R"]);var p={components:{PageTitle:r["a"],"font-awesome-icon":d["a"],AgentChat:l["a"]},data:function(){return{MyFlags:o["c"],MyDict:o["b"],MyConst:o["a"],heading:"Bulk Messages",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-mail-bulk",actions:[{label:"View Past Jobs",name:"BULK_PUSH_JOBS",link:"/app/moderate/bulk-push-jobs",type:"link"}],input:{daterange:{hidden:!0,startDate:null,endDate:null}},table:{fields:[{key:"messageId",label:"Id"},{key:"contact",label:"Contact"},{key:"sessionId",label:"SessionId"},{key:"template",label:"Template"},{key:"createdBy",label:"by"},{key:"initiated",label:"@"},{key:"sendType",label:"SendType"},{key:"status",label:"Status"}],items:[],perPage:25,currentPage:1,rows:0},session:null}},mounted:function(e){this.getItems()},methods:{getItems:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.submit("/api/message/bulk/push/messages",{contactType:"WHATSAPP",bulkSessionId:this.$route.params.bulkSessionId});case 2:t=e.sent,this.table.items=t.results,this.table.rows=this.table.items.length,this.session=t.meta,console.log("sessions",t,this.table);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,s){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("PostRequest",{url:"/api/message/session/import/trash",params:t});case 2:n=e.sent,this.sessions.items=n.results,this.sessions.rows=this.sessions.items.length;case 5:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),hideChat:function(e){this.session=null},showChat:function(e){this.session&&this.session.sessionId==e.sessionId?this.session=null:this.session=e}}},f=p,m=(s("a672"),s("2877")),g=Object(m["a"])(f,n,a,!1,null,"1e15cb41",null);t["default"]=g.exports},a672:function(e,t,s){"use strict";s("b264")},b264:function(e,t,s){}}]);