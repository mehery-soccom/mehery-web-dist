(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c5686c"],{"2b15":function(e,t,n){},"748d":function(e,t,n){"use strict";n("d584")},"7d7b":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,actions:e.actions,daterange:e.input.daterange},on:{dateRangeOnUpdate:e.dateRangeOnUpdate}}),n("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":e.sessions.perPage,"current-page":e.sessions.currentPage,items:e.sessions.items,fields:e.sessions.fields},scopedSlots:e._u([{key:"cell(assignedToAgent)",fn:function(t){return["BOT"==t.item.mode?n("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):e._e(),"AGENT"==t.item.mode?n("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):e._e(),e._v("\n                 "+e._s(t.item.assignedToAgent)+"\n            ")]}},{key:"cell(contact)",fn:function(t){return[n("i",{staticClass:"fab",class:e.MyDict.socialPrefix(t.item.contactType)}),e._v("\n                  "+e._s(t.item.lane)+"\n            ")]}},{key:"cell(template)",fn:function(t){return[n("span",{staticClass:"fa fa-comment",attrs:{"cursor-pointer":"",id:"template-details-"+t.index}}),e._v(" "+e._s(t.item.templateId)+"\n                "),n("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+t.index,"custom-class":"message-preview"},scopedSlots:e._u([{key:"default",fn:function(){return[n("div",{staticClass:"message-text"},[e._v(e._s(t.item.message))])]},proxy:!0}],null,!0)})]}},{key:"cell(createdStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.createdStamp))+"\n            ")]}},{key:"cell(message)",fn:function(t){return[e._v("\n                "+e._s(t.item.messageCount)+" "),t.item.bulkSessionId?n("router-link",{attrs:{tag:"a",to:"/app/moderate/bulk-push-msgs/"+t.item.bulkSessionId}},[e._v("\n                  view\n                ")]):e._e()]}},{key:"cell(status)",fn:function(t){return[n("span",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"job-stats-details-"+t.index}}),e._v("\n                "+e._s(t.item.status)+"\n\n                "),n("b-popover",{attrs:{triggers:"hover focus",target:"job-stats-details-"+t.index},scopedSlots:e._u([{key:"title",fn:function(){return e._l(t.item.stats,(function(t,s){return n("div",{staticClass:"text-align-left"},[e._v(" \n                      "+e._s(s)+" : "+e._s(t)+"\n                    ")])}))},proxy:!0}],null,!0)})]}}])}),n("b-pagination",{attrs:{"total-rows":e.sessions.rows,"per-page":e.sessions.perPage,"aria-controls":"agent-session-list"},model:{value:e.sessions.currentPage,callback:function(t){e.$set(e.sessions,"currentPage",t)},expression:"sessions.currentPage"}})],1)},a=[],i=(n("96cf"),n("3b8d")),o=n("d51b"),r=n("d166"),c=n("df4b"),l=n("ecee"),d=n("c074"),u=n("ad3d");l["c"].add(d["Q"],d["u"],d["a"],d["d"],d["O"],d["t"],d["w"],d["J"],d["R"]);var g={components:{PageTitle:o["a"],"font-awesome-icon":u["a"],AgentChat:c["a"]},data:function(){return{MyFlags:r["c"],MyDict:r["b"],MyConst:r["a"],heading:"Bulk Messages",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-mail-bulk",actions:[{label:"Send New",name:"BULK_PUSH_NEW",link:"/app/moderate/bulk-push-new",type:"link"}],input:{daterange:{hidden:!0,startDate:null,endDate:null}},sessions:{fields:[{key:"contact",label:"Account"},{key:"bulkSessionId",label:"SessionId"},{key:"template",label:"Template"},{key:"createdBy",label:"by"},{key:"createdStamp",label:"@"},{key:"status",label:"Status"},{key:"message",label:"Messages"}],items:[],perPage:25,currentPage:1,rows:0},session:null}},mounted:function(e){this.getItems()},methods:{getItems:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.get("/api/message/bulk/push/logs",{contactType:"WHATSAPP",startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 2:t=e.sent,this.sessions.items=t.results,this.sessions.rows=this.sessions.items.length,console.log("sessions",t,this.sessions);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),dateRangeOnUpdate:function(e){console.log("dateRangeOnUpdate",e),this.input.daterange.startDate=this.input.daterange.startDate.getTime(),this.input.daterange.endDate=this.input.daterange.endDate.getTime(),this.getItems()},deleteItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("PostRequest",{url:"/api/message/session/import/trash",params:t});case 2:s=e.sent,this.sessions.items=s.results,this.sessions.rows=this.sessions.items.length;case 5:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),hideChat:function(e){this.session=null},showChat:function(e){this.session&&this.session.sessionId==e.sessionId?this.session=null:this.session=e}}},p=g,f=(n("ed1a"),n("2877")),m=Object(f["a"])(p,s,a,!1,null,"1bfd5b05",null);t["default"]=m.exports},d51b:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:e.icon})]),n("div",[e._v("\n                "+e._s(e.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[e._v("\n                    "+e._s(e.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},[e._l(e.actions,(function(t){return t.hidden||!1===e.actionShow[t.name]?e._e():n("span",[t.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==t.type,"btn-success":!t.type||"button"==t.type},attrs:{tag:"button",to:t.link,type:"button"}},[t.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}):e._e(),e._v("\n                    "+e._s(t.label)+" \n                ")],1):n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==t.type,"btn-success":!t.type||"button"==t.type},on:{click:function(n){return e.clickAction(t)}}},[t.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}):e._e(),e._v("\n                    "+e._s(t.label)+" \n                ")],1)],1)})),e.dateranegeinput&&e.dateranegeinput.hidden?n("date-range-picker",{attrs:{opens:"left","time-picker":!1,ranges:e.dateranegeinput.ranges},on:{select:e.onDateRangeSelect,update:e.onDateRangeUpdate},scopedSlots:e._u([{key:"input",fn:function(t){return[e._v("\n              "+e._s(e._f("date")(t.startDate))+" - "+e._s(e._f("date")(t.endDate))+"\n            ")]}}],null,!1,3768211459),model:{value:e.dateranegeinput.range,callback:function(t){e.$set(e.dateranegeinput,"range",t)},expression:"dateranegeinput.range"}}):e._e()],2)])])},a=[],i=(n("7f7f"),n("ecee")),o=n("c074"),r=n("ad3d"),c=n("bbf5"),l=n.n(c),d=(n("53b4"),n("2ead"),n("c1df")),u=n.n(d);function g(e){return e.hour(0).minute(0).seconds(0).milliseconds(0)}function p(e){return e.hour(23).minute(59).seconds(59).milliseconds(999)}i["c"].add(o["N"],o["H"]);var f={components:{"font-awesome-icon":r["a"],DateRangePicker:l.a},data:function(){var e=this;return{dateranegeinput:function(){if(!e.daterange)return null;var t=e.daterange.startDate||g(u()()).toDate(),n=e.daterange.endDate||p(u()()).toDate();return{range:{startDate:t,endDate:n},ranges:{Today:[g(u()()).toDate(),p(u()()).toDate()],Yesterday:[g(u()().subtract(1,"day")).toDate(),p(u()().subtract(1,"day")).toDate()],"This month":[g(u()().date(1)).toDate(),p(u()()).toDate()],"Last month":[g(u()().subtract(1,"month").date(1)).toDate(),p(u()().date(0)).toDate()],"This year":[g(u()().month(0).date(1)).toDate(),p(u()()).toDate()],"Last year":[g(u()().subtract(1,"year").month(0).date(1)).toDate(),p(u()().month(0).date(0)).toDate()]}}}()}},filters:{date:function(e){return e?e.toLocaleString():""}},created:function(e){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=g(u()()).toDate()),this.daterange.endDate||(this.daterange.endDate=p(u()()).toDate()))},methods:{onDateRangeSelect:function(e){console.log("select",e)},onDateRangeUpdate:function(e){console.log("c_update",e),this.daterange&&(this.daterange.startDate=e.startDate,this.daterange.endDate=e.endDate,this.$emit("dateRangeOnUpdate",e))},clickAction:function(e){this.$emit("action",e)},action:function(e,t,n){for(var s in this.actions)if(this.actions[s].name==e){this.actions[s][t]=n;break}}},props:{icon:String,heading:String,subheading:String,actions:Array,daterange:{type:Object},actionShow:{type:Object,default:function(){return{message:"hello"}}}}},m=f,h=(n("748d"),n("2877")),b=Object(h["a"])(m,s,a,!1,null,null,null);t["a"]=b.exports},d584:function(e,t,n){},ed1a:function(e,t,n){"use strict";n("2b15")}}]);