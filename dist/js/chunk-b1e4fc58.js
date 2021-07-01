(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1e4fc58"],{"38a4":function(e,t,s){},"457f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,daterange:e.input.daterange},on:{dateRangeOnUpdate:e.dateRangeOnUpdate}}),s("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":e.sessions.perPage,"current-page":e.sessions.currentPage,items:e.sessions.items,fields:e.sessions.fields},scopedSlots:e._u([{key:"cell(assignedToAgent)",fn:function(t){return["BOT"==t.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):e._e(),"AGENT"==t.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):e._e(),e._v("\n                 "+e._s(t.item.assignedToAgent)+"\n            ")]}},{key:"cell(contactId)",fn:function(t){return[s("i",{staticClass:"fab",class:e.MyDict.socialPrefix(t.item.contactId)}),e._v("\n                "+e._s(t.item.contactName||t.item.contactId)+"\n\n                "),s("span",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"template-details-"+t.index}}),s("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+t.index,"custom-class":"message-preview"},scopedSlots:e._u([{key:"default",fn:function(){return[s("div",{staticClass:"message-text"},[e._v("Name : "+e._s(t.item.contactName))]),s("div",{staticClass:"message-text"},[e._v("Id : "+e._s(t.item.contactId))]),s("div",{staticClass:"message-text"},[e._v("Session : "+e._s(t.item.sessionId))])]},proxy:!0}],null,!0)})]}},{key:"cell(startSessionStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.startSessionStamp))+"\n            ")]}},{key:"cell(fistResponseStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.fistResponseStamp))+" \n            ")]}},{key:"cell(closeSessionStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.closeSessionStamp))+"\n                "),t.item.active?s("font-awesome-icon",{style:{color:"green"},attrs:{icon:"circle"}}):e._e()]}},{key:"cell(actions)",fn:function(t){return[s("span",{staticClass:"far fa-comment-alt",staticStyle:{cursor:"pointer"},on:{click:function(s){return e.showChat(t.item,t.index,s.target)}}}),e._v("\n                 \n            ")]}}])}),s("b-pagination",{attrs:{"total-rows":e.sessions.rows,"per-page":e.sessions.perPage,"aria-controls":"agent-session-list"},model:{value:e.sessions.currentPage,callback:function(t){e.$set(e.sessions,"currentPage",t)},expression:"sessions.currentPage"}}),s("div",{staticClass:"chat_archive",class:{closed:!e.session}},[e.session?s("agent-chat",{key:e.session.sessionId,attrs:{session:e.session},on:{close:e.hideChat}}):e._e()],1)],1)},n=[],i=(s("96cf"),s("3b8d")),o=s("bd86"),r=s("a391"),c=s("d166"),d=s("df4b"),l=s("ecee"),u=s("c074"),g=s("ad3d");l["c"].add(u["Q"],u["u"],u["a"],u["d"],u["O"],u["t"],u["w"],u["J"],u["R"]);var p={components:{PageTitle:r["a"],"font-awesome-icon":g["a"],AgentChat:d["a"]},data:function(){var e;return e={MyFlags:c["c"],MyDict:c["b"],MyConst:c["a"],heading:"Chat Sessions",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",input:{daterange:{startDate:null,endDate:null}},sessions:{fields:[{key:"assignedToAgent",label:"Assigned"},{key:"contactId",label:"Contact"},{key:"actions",label:"Action"},{key:"startSessionStamp",label:"Start@"},{key:"fistResponseStamp",label:"Agent@"},{key:"closeSessionStamp",label:"Closed@"}],items:[],perPage:25,currentPage:1,rows:0}},Object(o["a"])(e,"input",{daterange:{startDate:null,endDate:null}}),Object(o["a"])(e,"session",null),e},mounted:function(e){this.dateRangeOnUpdate()},methods:{getSessions:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetSessions",{agent:"TEAM",contactType:"MESSAGE_TWITTER",startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 2:t=e.sent,this.sessions.items=t.results,this.sessions.rows=this.sessions.items.length,console.log("sessions",t,this.sessions);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),dateRangeOnUpdate:function(e){console.log("dateRangeOnUpdate",e),this.input.daterange.startDate=this.input.daterange.startDate.getTime(),this.input.daterange.endDate=this.input.daterange.endDate.getTime(),this.getSessions()},deleteChat:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeleteSessionChats",t);case 2:e.sent,this.sessions.items.splice(s,1);case 4:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),hideChat:function(e){this.session=null},showChat:function(e){this.session&&this.session.sessionId==e.sessionId?this.session=null:this.session=e}}},f=p,m=(s("6487"),s("2877")),h=Object(m["a"])(f,a,n,!1,null,"7c3d8514",null);t["default"]=h.exports},"5a64":function(e,t,s){"use strict";s("a51c")},6487:function(e,t,s){"use strict";s("38a4")},a391:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-page-title"},[s("div",{staticClass:"page-title-wrapper"},[s("div",{staticClass:"page-title-heading"},[s("div",{staticClass:"page-title-icon"},[s("i",{class:e.icon})]),s("div",[e._v("\n                "+e._s(e.heading)+"\n                "),s("div",{staticClass:"page-title-subheading"},[e._v("\n                    "+e._s(e.subheading)+"\n                ")])])]),s("div",{staticClass:"page-title-actions"},[s("date-range-picker",{attrs:{opens:"left","time-picker":!1,ranges:e.ranges},on:{select:e.onSelect,update:e.onUpdate},scopedSlots:e._u([{key:"input",fn:function(t){return[e._v("\n              "+e._s(e._f("date")(t.startDate))+" - "+e._s(e._f("date")(t.endDate))+"\n            ")]}}]),model:{value:e.mydaterange,callback:function(t){e.mydaterange=t},expression:"mydaterange"}})],1)])])},n=[],i=s("ecee"),o=s("c074"),r=s("ad3d"),c=s("bbf5"),d=s.n(c),l=(s("53b4"),s("2ead"),s("c1df")),u=s.n(l);function g(e){return e.hour(0).minute(0).seconds(0).milliseconds(0)}function p(e){return e.hour(23).minute(59).seconds(59).milliseconds(999)}i["c"].add(o["N"],o["H"]);var f={name:"PageTitleDateRange",components:{"font-awesome-icon":r["a"],DateRangePicker:d.a},data:function(){var e=this.daterange.startDate||g(u()()).toDate(),t=this.daterange.endDate||p(u()()).toDate();return{mydaterange:{startDate:e,endDate:t},ranges:{Today:[g(u()()).toDate(),p(u()()).toDate()],Yesterday:[g(u()().subtract(1,"day")).toDate(),p(u()().subtract(1,"day")).toDate()],"This month":[g(u()().date(1)).toDate(),p(u()()).toDate()],"Last month":[g(u()().subtract(1,"month").date(1)).toDate(),p(u()().date(0)).toDate()],"This year":[g(u()().month(0).date(1)).toDate(),p(u()()).toDate()],"Last year":[g(u()().subtract(1,"year").month(0).date(1)).toDate(),p(u()().month(0).date(0)).toDate()]}}},filters:{date:function(e){return e?e.toLocaleString():""}},created:function(e){this.daterange.startDate||(this.daterange.startDate=g(u()()).toDate()),this.daterange.endDate||(this.daterange.endDate=p(u()()).toDate())},methods:{onSelect:function(e){console.log("select",e)},onUpdate:function(e){console.log("c_update",e),this.daterange.startDate=e.startDate,this.daterange.endDate=e.endDate,this.$emit("dateRangeOnUpdate",e)}},props:{icon:String,heading:String,subheading:String,daterange:{type:Object}}},m=f,h=(s("5a64"),s("2877")),D=Object(h["a"])(m,a,n,!1,null,null,null);t["a"]=D.exports},a51c:function(e,t,s){}}]);