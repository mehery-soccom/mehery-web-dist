(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aaf63582"],{"10c7":function(e,t,n){},"457f":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,daterange:e.input.daterange},on:{dateRangeOnUpdate:e.dateRangeOnUpdate}}),n("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":e.sessions.perPage,"current-page":e.sessions.currentPage,items:e.sessions.items,fields:e.sessions.fields},scopedSlots:e._u([{key:"cell(assignedToAgent)",fn:function(t){return["BOT"==t.item.mode?n("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):e._e(),"AGENT"==t.item.mode?n("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):e._e(),e._v("\n                 "+e._s(t.item.assignedToAgent)+"\n            ")]}},{key:"cell(contactId)",fn:function(t){return[n("i",{staticClass:"fab",class:e.MyDict.socialPrefix(t.item.contactId)}),e._v("\n                "+e._s(t.item.contactName||t.item.contactId)+"\n            ")]}},{key:"cell(startSessionStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.startSessionStamp))+"\n            ")]}},{key:"cell(fistResponseStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.fistResponseStamp))+" \n            ")]}},{key:"cell(closeSessionStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.closeSessionStamp))+"\n                "),t.item.active?n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"circle"}}):e._e()]}},{key:"cell(actions)",fn:function(t){return[n("span",{staticClass:"far fa-comment-alt",staticStyle:{cursor:"pointer"},on:{click:function(n){return e.showChat(t.item,t.index,n.target)}}}),e._v("\n                 \n            ")]}}])}),n("b-pagination",{attrs:{"total-rows":e.sessions.rows,"per-page":e.sessions.perPage,"aria-controls":"agent-session-list"},model:{value:e.sessions.currentPage,callback:function(t){e.$set(e.sessions,"currentPage",t)},expression:"sessions.currentPage"}}),n("div",{staticClass:"chat_archive",class:{closed:!e.session}},[e.session?n("agent-chat",{key:e.session.sessionId,attrs:{session:e.session},on:{close:e.hideChat}}):e._e()],1)],1)},a=[],i=(n("96cf"),n("3b8d")),o=n("bd86"),r=n("a391"),c=n("d166"),d=n("df4b"),l=n("ecee"),u=n("c074"),g=n("ad3d");l["c"].add(u["Q"],u["u"],u["a"],u["d"],u["O"],u["t"],u["w"],u["J"],u["R"]);var p={components:{PageTitle:r["a"],"font-awesome-icon":g["a"],AgentChat:d["a"]},data:function(){var e;return e={MyFlags:c["c"],MyDict:c["b"],MyConst:c["a"],heading:"Chat Sessions",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",input:{daterange:{startDate:null,endDate:null}},sessions:{fields:[{key:"assignedToAgent",label:"Assigned"},{key:"contactId",label:"Contact"},{key:"actions",label:"Action"},{key:"startSessionStamp",label:"Start@"},{key:"fistResponseStamp",label:"Agent@"},{key:"closeSessionStamp",label:"Closed@"}],items:[],perPage:25,currentPage:1,rows:0}},Object(o["a"])(e,"input",{daterange:{startDate:null,endDate:null}}),Object(o["a"])(e,"session",null),e},mounted:function(e){this.dateRangeOnUpdate()},methods:{getSessions:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetSessions",{agent:"TEAM",contactType:"MESSAGE_TWITTER",startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 2:t=e.sent,this.sessions.items=t.results,this.sessions.rows=this.sessions.items.length,console.log("sessions",t,this.sessions);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),dateRangeOnUpdate:function(e){console.log("dateRangeOnUpdate",e),this.input.daterange.startDate=this.input.daterange.startDate.getTime(),this.input.daterange.endDate=this.input.daterange.endDate.getTime(),this.getSessions()},deleteChat:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeleteSessionChats",t);case 2:e.sent,this.sessions.items.splice(n,1);case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),hideChat:function(e){this.session=null},showChat:function(e){this.session&&this.session.sessionId==e.sessionId?this.session=null:this.session=e}}},f=p,h=(n("8eff"),n("2877")),m=Object(h["a"])(f,s,a,!1,null,"200fe9fe",null);t["default"]=m.exports},"5a64":function(e,t,n){"use strict";n("a51c")},"8eff":function(e,t,n){"use strict";n("10c7")},a391:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:e.icon})]),n("div",[e._v("\n                "+e._s(e.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[e._v("\n                    "+e._s(e.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},[n("date-range-picker",{attrs:{opens:"left","time-picker":!1,ranges:e.ranges},on:{select:e.onSelect,update:e.onUpdate},scopedSlots:e._u([{key:"input",fn:function(t){return[e._v("\n              "+e._s(e._f("date")(t.startDate))+" - "+e._s(e._f("date")(t.endDate))+"\n            ")]}}]),model:{value:e.mydaterange,callback:function(t){e.mydaterange=t},expression:"mydaterange"}})],1)])])},a=[],i=n("ecee"),o=n("c074"),r=n("ad3d"),c=n("bbf5"),d=n.n(c),l=(n("53b4"),n("2ead"),n("c1df")),u=n.n(l);function g(e){return e.hour(0).minute(0).seconds(0).milliseconds(0)}function p(e){return e.hour(23).minute(59).seconds(59).milliseconds(999)}i["c"].add(o["N"],o["H"]);var f={name:"PageTitleDateRange",components:{"font-awesome-icon":r["a"],DateRangePicker:d.a},data:function(){var e=this.daterange.startDate||g(u()()).toDate(),t=this.daterange.endDate||p(u()()).toDate();return{mydaterange:{startDate:e,endDate:t},ranges:{Today:[g(u()()).toDate(),p(u()()).toDate()],Yesterday:[g(u()().subtract(1,"day")).toDate(),p(u()().subtract(1,"day")).toDate()],"This month":[g(u()().date(1)).toDate(),p(u()()).toDate()],"Last month":[g(u()().subtract(1,"month").date(1)).toDate(),p(u()().date(0)).toDate()],"This year":[g(u()().month(0).date(1)).toDate(),p(u()()).toDate()],"Last year":[g(u()().subtract(1,"year").month(0).date(1)).toDate(),p(u()().month(0).date(0)).toDate()]}}},filters:{date:function(e){return e?e.toLocaleString():""}},created:function(e){this.daterange.startDate||(this.daterange.startDate=g(u()()).toDate()),this.daterange.endDate||(this.daterange.endDate=p(u()()).toDate())},methods:{onSelect:function(e){console.log("select",e)},onUpdate:function(e){console.log("c_update",e),this.daterange.startDate=e.startDate,this.daterange.endDate=e.endDate,this.$emit("dateRangeOnUpdate",e)}},props:{icon:String,heading:String,subheading:String,daterange:{type:Object}}},h=f,m=(n("5a64"),n("2877")),D=Object(m["a"])(h,s,a,!1,null,null,null);t["a"]=D.exports},a51c:function(e,t,n){}}]);