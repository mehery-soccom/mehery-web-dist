(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e87aa04"],{"474c":function(t,e,n){},"748d":function(t,e,n){"use strict";n("d584")},"7dad":function(t,e,n){"use strict";n("474c")},"889d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,actions:t.actions}}),n("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[n("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:t.agents,fields:t.fields},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return t.activateAgent(e.item,e.index,n.target)}}},["Y"==e.item.isactive?n("font-awesome-icon",{attrs:{icon:"user-check",title:"De-Activate"}}):t._e(),"Y"!=e.item.isactive?n("font-awesome-icon",{attrs:{icon:"user-slash",title:"Activate"}}):t._e()],1)]}}])})],1)],1)},i=[],s=(n("96cf"),n("3b8d")),r=n("d51b"),c=n("ecee"),o=n("c074"),d=n("ad3d");c["c"].add(o["V"],o["S"]);var l={components:{PageTitle:r["a"],"font-awesome-icon":d["a"]},data:function(){return{heading:"Agents",subheading:"View all Agents.",icon:"pe-7s-users icon-gradient bg-happy-itmeo",actions:[{label:"Add Agent",icon:"plus",link:"/app/admins/agents/add"}],fields:[{key:"dept.dept_name",label:"Dept"},{key:"agent_name",label:"Name"},{key:"agent_code",label:"Username"},{key:"agent_email",label:"Email"},{key:"agent_channels",label:"Channels",class:"upper-case"},{key:"actions",label:"Action"}]}},computed:{agents:function(t){return this.$store.getters.StateAgents}},created:function(t){this.loadAgents()},methods:{loadAgents:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetAgents");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),activateAgent:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("DeActivateAgent",e);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},u=l,g=(n("7dad"),n("2877")),p=Object(g["a"])(u,a,i,!1,null,null,null);e["default"]=p.exports},d51b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:t.icon})]),n("div",[t._v("\n                "+t._s(t.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[t._v("\n                    "+t._s(t.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},[t._l(t.actions,(function(e){return e.hidden?t._e():n("span",[e.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},attrs:{tag:"button",to:e.link,type:"button"}},[e.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}):t._e(),t._v("\n                    "+t._s(e.label)+" \n                ")],1):n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},on:{click:function(n){return t.clickAction(e)}}},[e.icon?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}):t._e(),t._v("\n                    "+t._s(e.label)+" \n                ")],1)],1)})),t.dateranegeinput&&t.dateranegeinput.hidden?n("date-range-picker",{attrs:{opens:"left","time-picker":!1,ranges:t.dateranegeinput.ranges},on:{select:t.onDateRangeSelect,update:t.onDateRangeUpdate},scopedSlots:t._u([{key:"input",fn:function(e){return[t._v("\n              "+t._s(t._f("date")(e.startDate))+" - "+t._s(t._f("date")(e.endDate))+"\n            ")]}}],null,!1,3768211459),model:{value:t.dateranegeinput.range,callback:function(e){t.$set(t.dateranegeinput,"range",e)},expression:"dateranegeinput.range"}}):t._e()],2)])])},i=[],s=n("ecee"),r=n("c074"),c=n("ad3d"),o=n("bbf5"),d=n.n(o),l=(n("53b4"),n("2ead"),n("c1df")),u=n.n(l);function g(t){return t.hour(0).minute(0).seconds(0).milliseconds(0)}function p(t){return t.hour(23).minute(59).seconds(59).milliseconds(999)}s["c"].add(r["N"],r["H"]);var h={components:{"font-awesome-icon":c["a"],DateRangePicker:d.a},data:function(){var t=this;return{dateranegeinput:function(){if(!t.daterange)return null;var e=t.daterange.startDate||g(u()()).toDate(),n=t.daterange.endDate||p(u()()).toDate();return{range:{startDate:e,endDate:n},ranges:{Today:[g(u()()).toDate(),p(u()()).toDate()],Yesterday:[g(u()().subtract(1,"day")).toDate(),p(u()().subtract(1,"day")).toDate()],"This month":[g(u()().date(1)).toDate(),p(u()()).toDate()],"Last month":[g(u()().subtract(1,"month").date(1)).toDate(),p(u()().date(0)).toDate()],"This year":[g(u()().month(0).date(1)).toDate(),p(u()()).toDate()],"Last year":[g(u()().subtract(1,"year").month(0).date(1)).toDate(),p(u()().month(0).date(0)).toDate()]}}}()}},filters:{date:function(t){return t?t.toLocaleString():""}},created:function(t){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=g(u()()).toDate()),this.daterange.endDate||(this.daterange.endDate=p(u()()).toDate()))},methods:{onDateRangeSelect:function(t){console.log("select",t)},onDateRangeUpdate:function(t){console.log("c_update",t),this.daterange&&(this.daterange.startDate=t.startDate,this.daterange.endDate=t.endDate,this.$emit("dateRangeOnUpdate",t))},clickAction:function(t){this.$emit("action",t)}},props:{icon:String,heading:String,subheading:String,actions:Array,daterange:{type:Object}}},f=h,b=(n("748d"),n("2877")),m=Object(b["a"])(f,a,i,!1,null,null,null);e["a"]=m.exports},d584:function(t,e,n){}}]);