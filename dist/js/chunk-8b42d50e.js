(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b42d50e"],{"3f3c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,actions:t.actions,daterange:t.input.daterange},on:{dateRangeOnUpdate:t.dateRangeOnUpdate}}),n("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":t.sessions.perPage,"current-page":t.sessions.currentPage,items:t.sessions.items,fields:t.sessions.fields},scopedSlots:t._u([{key:"cell(assignedToAgent)",fn:function(e){return["BOT"==e.item.mode?n("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):t._e(),"AGENT"==e.item.mode?n("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):t._e(),t._v("\n                 "+t._s(e.item.assignedToAgent)+"\n            ")]}},{key:"cell(contact)",fn:function(e){return[n("i",{staticClass:"fab",class:t.MyDict.socialPrefix(e.item.contactId)}),t._v("\n                "+t._s(e.item.contactName)+" "),n("small",[t._v("("+t._s(e.item.contact)+")")])]}},{key:"cell(createdStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.createdStamp))+"\n            ")]}},{key:"cell(actions)",fn:function(e){return[n("span",{staticClass:"far fa-file-alt",attrs:{"cursor-pointer":"",id:"file-details"+e.index}}),n("b-popover",{attrs:{triggers:"hover focus",target:"file-details"+e.index},scopedSlots:t._u([{key:"title",fn:function(){return[n("small",[n("div",{staticClass:"text-align-left"},[t._v(" Name : "+t._s(e.item.fileName))]),n("div",{staticClass:"text-align-left"},[t._v("MD5 : "),n("em",[t._v(t._s(e.item.fileMD5))])]),n("div",{staticClass:"text-align-left"},[t._v(" Size : "+t._s(e.item.fileSize)+" KB")])])]},proxy:!0}],null,!0)}),t._v("\n                 \n                "),"COMPLETED"==e.item.status?n("span",{staticClass:"fa fa-trash",staticStyle:{cursor:"pointer"},on:{click:function(n){return t.deleteItem(e.item,e.index,n.target)}}}):t._e()]}}])}),n("b-pagination",{attrs:{"total-rows":t.sessions.rows,"per-page":t.sessions.perPage,"aria-controls":"agent-session-list"},model:{value:t.sessions.currentPage,callback:function(e){t.$set(t.sessions,"currentPage",e)},expression:"sessions.currentPage"}})],1)},s=[],i=(n("96cf"),n("3b8d")),o=n("d51b"),r=n("d166"),c=n("df4b"),l=n("ecee"),d=n("c074"),u=n("ad3d");l["c"].add(d["Q"],d["u"],d["a"],d["d"],d["O"],d["t"],d["w"],d["J"],d["R"]);var g={components:{PageTitle:o["a"],"font-awesome-icon":u["a"],AgentChat:c["a"]},data:function(){return{MyFlags:r["c"],MyDict:r["b"],MyConst:r["a"],heading:"Imported Chats",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",actions:[{label:"Import Another chat",name:"PAST_IMPORTS",link:"/app/moderate/import-chat",type:"link"}],input:{daterangesss:{startDate:null,endDate:null}},sessions:{fields:[{key:"contact",label:"Contact"},{key:"countMessages",label:"Messages"},{key:"countSessions",label:"Sessions"},{key:"lane",label:"Account"},{key:"sender",label:"Agent"},{key:"createdBy",label:"by"},{key:"createdStamp",label:"@"},{key:"status",label:"Status"},{key:"actions",label:"Action"}],items:[],perPage:25,currentPage:1,rows:0},session:null}},mounted:function(t){this.getItems()},methods:{getItems:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetRequest",{url:"/api/message/session/import/logs",params:{contactType:"WHATSAPP"}});case 2:e=t.sent,this.sessions.items=e.results,this.sessions.rows=this.sessions.items.length,console.log("sessions",e,this.sessions);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dateRangeOnUpdate:function(t){console.log("dateRangeOnUpdate",t),this.input.daterange.startDate=this.input.daterange.startDate.getTime(),this.input.daterange.endDate=this.input.daterange.endDate.getTime(),this.getItems()},deleteItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("PostRequest",{url:"/api/message/session/import/trash",params:e});case 2:a=t.sent,this.sessions.items=a.results,this.sessions.rows=this.sessions.items.length;case 5:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),hideChat:function(t){this.session=null},showChat:function(t){this.session&&this.session.sessionId==t.sessionId?this.session=null:this.session=t}}},p=g,f=n("2877"),h=Object(f["a"])(p,a,s,!1,null,"0c73dc2d",null);e["default"]=h.exports},"748d":function(t,e,n){"use strict";n("d584")},d51b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:t.icon})]),n("div",[t._v("\n                "+t._s(t.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[t._v("\n                    "+t._s(t.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},[t._l(t.actions,(function(e){return e.hidden||!1===t.actionShow[e.name]?t._e():n("span",[e.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},attrs:{tag:"button",to:e.link,type:"button"}},[e.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}):t._e(),t._v("\n                    "+t._s(e.label)+" \n                ")],1):n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},on:{click:function(n){return t.clickAction(e)}}},[e.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}):t._e(),t._v("\n                    "+t._s(e.label)+" \n                ")],1)],1)})),t.dateranegeinput&&t.dateranegeinput.hidden?n("date-range-picker",{attrs:{opens:"left","time-picker":!1,ranges:t.dateranegeinput.ranges},on:{select:t.onDateRangeSelect,update:t.onDateRangeUpdate},scopedSlots:t._u([{key:"input",fn:function(e){return[t._v("\n              "+t._s(t._f("date")(e.startDate))+" - "+t._s(t._f("date")(e.endDate))+"\n            ")]}}],null,!1,3768211459),model:{value:t.dateranegeinput.range,callback:function(e){t.$set(t.dateranegeinput,"range",e)},expression:"dateranegeinput.range"}}):t._e()],2)])])},s=[],i=(n("7f7f"),n("ecee")),o=n("c074"),r=n("ad3d"),c=n("bbf5"),l=n.n(c),d=(n("53b4"),n("2ead"),n("c1df")),u=n.n(d);function g(t){return t.hour(0).minute(0).seconds(0).milliseconds(0)}function p(t){return t.hour(23).minute(59).seconds(59).milliseconds(999)}i["c"].add(o["N"],o["H"]);var f={components:{"font-awesome-icon":r["a"],DateRangePicker:l.a},data:function(){var t=this;return{dateranegeinput:function(){if(!t.daterange)return null;var e=t.daterange.startDate||g(u()()).toDate(),n=t.daterange.endDate||p(u()()).toDate();return{range:{startDate:e,endDate:n},ranges:{Today:[g(u()()).toDate(),p(u()()).toDate()],Yesterday:[g(u()().subtract(1,"day")).toDate(),p(u()().subtract(1,"day")).toDate()],"This month":[g(u()().date(1)).toDate(),p(u()()).toDate()],"Last month":[g(u()().subtract(1,"month").date(1)).toDate(),p(u()().date(0)).toDate()],"This year":[g(u()().month(0).date(1)).toDate(),p(u()()).toDate()],"Last year":[g(u()().subtract(1,"year").month(0).date(1)).toDate(),p(u()().month(0).date(0)).toDate()]}}}()}},filters:{date:function(t){return t?t.toLocaleString():""}},created:function(t){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=g(u()()).toDate()),this.daterange.endDate||(this.daterange.endDate=p(u()()).toDate()))},methods:{onDateRangeSelect:function(t){console.log("select",t)},onDateRangeUpdate:function(t){console.log("c_update",t),this.daterange&&(this.daterange.startDate=t.startDate,this.daterange.endDate=t.endDate,this.$emit("dateRangeOnUpdate",t))},clickAction:function(t){this.$emit("action",t)},action:function(t,e,n){for(var a in this.actions)if(this.actions[a].name==t){this.actions[a][e]=n;break}}},props:{icon:String,heading:String,subheading:String,actions:Array,daterange:{type:Object},actionShow:{type:Object,default:function(){return{message:"hello"}}}}},h=f,m=(n("748d"),n("2877")),b=Object(m["a"])(h,a,s,!1,null,null,null);e["a"]=b.exports},d584:function(t,e,n){}}]);