(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85428bd6"],{1851:function(e,t,s){"use strict";s("2296")},2296:function(e,t,s){},"6a35":function(e,t,s){"use strict";s("c28a")},"8b24":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container app-theme-white"},[s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("Header")],1),s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("Sidebar")],1),s("div",{staticClass:"app-main__outer"},[s("div",{staticClass:"app-main__inner"},[e._t("default")],2),s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("Footer")],1)],1),s("b-modal",{attrs:{id:"modal1",title:"Bootstrap-Vue"}},[s("p",{staticClass:"my-4"},[e._v("Hello from modal!")])]),s("b-modal",{attrs:{id:"modallg",size:"lg",title:"Large Modal"}},[e._v("\n        Hello Modal!\n    ")]),s("b-modal",{attrs:{id:"modalsm",size:"sm",title:"Small Modal"}},[e._v("\n        Hello Modal!\n    ")])],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-header header-shadow"},[s("div",{staticClass:"logo-src"}),s("div",{staticClass:"app-header__content"},[s("div",{staticClass:"app-header-left"},[s("SearchBox")],1),s("div",{staticClass:"app-header-right"},[s("UserArea")],1)]),s("div",{staticClass:"app-header__mobile-menu"},[s("div",[s("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleMobile("closed-sidebar-open")}}},[e._m(0)])])]),s("div",{staticClass:"app-header__menu"},[s("span",[s("b-button",{staticClass:"btn-icon btn-icon-only",class:{active:e.isOpenMobileMenu},attrs:{variant:"primary",size:"sm"},on:{click:function(t){return e.toggleMobile2("header-menu-open")}}},[s("div",{staticClass:"btn-icon-wrapper"},[s("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])],1)])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"hamburger-box"},[s("span",{staticClass:"hamburger-inner"})])}],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"search-wrapper",class:{active:e.searchOpen}},[s("div",{staticClass:"input-holder"},[s("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"Type to search"}}),s("button",{staticClass:"search-icon",on:{click:function(t){e.searchOpen=!e.searchOpen}}},[s("span")])]),s("button",{staticClass:"close",on:{click:function(t){e.searchOpen=!e.searchOpen}}})])])},l=[],d={data:function(){return{searchOpen:!1}}},c=d,p=s("2877"),u=Object(p["a"])(c,o,l,!1,null,null,null),h=u.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex"},[a("div",{staticClass:"header-btn-lg pr-0"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("b-dropdown",{attrs:{"toggle-class":"p-0 mr-2","menu-class":"dropdown-menu-lg",variant:"link",right:""}},[a("div",{staticClass:"widget-content-left  ml-3 header-user-info"},[e.MyConst.user?a("div",{staticClass:"widget-heading"},[e._v(e._s(e.MyConst.user))]):e._e(),a("div",{staticClass:"widget-subheading"},[e._v("System Admin")])]),a("span",{attrs:{slot:"button-content"},slot:"button-content"},[a("div",{staticClass:"icon-wrapper icon-wrapper-alt rounded-circle"},[a("img",{staticClass:"rounded-circle",attrs:{width:"42",src:s("e445"),alt:""}})])]),a("div",{staticClass:"dropdown-divider",attrs:{tabindex:"-1"}}),e.MyConst.user?a("span",[a("a",{staticClass:"dropdown-item",attrs:{href:e.MyConst.appPrefix+"/auth/logout",type:"button",tabindex:"0"}},[e._v("Logout")])]):a("span",[a("a",{staticClass:"dropdown-item",attrs:{href:e.MyConst.appPrefix+"/auth/logout"}},[e._v("Login")])])])],1)])])])])},b=[],f=(s("96cf"),s("3b8d")),g=s("ecee"),v=s("c074"),C=s("d166");g["c"].add(v["a"],v["t"],v["Q"],v["u"],v["D"],v["x"],v["F"],v["G"],v["E"],v["A"]);var w={components:{},computed:{},data:function(){return{MyFlags:C["c"],MyConst:C["a"]}},methods:{logout:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("LogOut");case 2:this.$router.push("auth/login");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},_=w,x=Object(p["a"])(_,m,b,!1,null,null,null),y=x.exports,M=s("ad3d");g["c"].add(v["B"]);var O={name:"Header",components:{SearchBox:h,UserArea:y,"font-awesome-icon":M["a"]},data:function(){return{isOpen:!1,isOpenMobileMenu:!1}},props:{},mounted:function(e){},methods:{toggleMobile:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleMobile2:function(e){var t=document.body;this.isOpenMobileMenu=!this.isOpenMobileMenu,this.isOpenMobileMenu?t.classList.add(e):t.classList.remove(e)}}},k=O,S=Object(p["a"])(k,n,r,!1,null,null,null),L=S.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-sidebar sidebar-shadow",on:{mouseover:function(t){return e.toggleSidebarHover("add","closed-sidebar-open")},mouseleave:function(t){return e.toggleSidebarHover("remove","closed-sidebar-open")}}},[s("div",{staticClass:"app-header__logo"},[s("div",{staticClass:"logo-src"}),s("div",{staticClass:"header__pane ml-auto"},[s("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleBodyClass("closed-sidebar")}}},[e._m(0)])])]),s("div",{staticClass:"app-sidebar-content"},[e._m(1)],1)])},E=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"hamburger-box"},[s("span",{staticClass:"hamburger-inner"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("VuePerfectScrollbar",{staticClass:"app-sidebar-scroll"},[s("sidebar-menu",{attrs:{showOneChild:"",menu:e.menu,hideToggle:"true"}})],1)}],A=s("4776"),W=s("9d63"),$=s.n(W);function P(e){var t=null;return e.filter((function(e){return 1==e.header?(t=e,!0):(e.child&&(e.child=P(e.child),e.enabled=e.child.length>0),(!1===e.disabled||!0===e.enabled)&&(t&&(t.enabled=!0),!0))})).filter((function(e){return!1===e.disabled||!0===e.enabled}))}var T={components:{SidebarMenu:A["SidebarMenu"],VuePerfectScrollbar:$.a},data:function(){return{isOpen:!1,sidebarActive:!1,menu:P([{header:!0,title:"Dashboards"},{title:"Summary",icon:"pe-7s-graph3 fa fa-chart-bar",href:"/",enabled:!0},{header:!0,title:"Reports"},{title:"Sessions",icon:"pe-7s-chat fa fa-chalkboard-teacher",href:"/app/reports/sessions",enabled:!0},{title:"Taxonomy",icon:"fa fa-tags",href:"/app/reports/taxonomy",enabled:!0},{header:!0,title:"Moderator"},{title:"Import Chat",icon:"pe-7s-chat fa fa-file-import",enabled:!0,href:"/app/moderate/import-chat"},{header:!0,title:"Admin"},{title:"Users",icon:"pe-7s-users fa fa-user-friends",enabled:!0,href:"/app/admins/agents"},{title:"Agents",icon:"pe-7s-users fa fa-user-friends",enabled:!1,href:"/app/admins/agents/list"},{enabled:!1,icon:"pe-7s-add-user",href:"/app/admins/agents/add",title:"Add Agent"},{enabled:!0,href:"/app/admins/agents/teams",title:"Teams",icon:"pe-7s-network fa fa-users"},{title:"Templates",icon:"pe-7s-browser fa fa-edit",enabled:!0,child:[{enabled:!0,href:"/app/admins/tmpl/quickreplies",title:"Quick Replies"},{enabled:!0,href:"/app/admins/tmpl/quickactions",title:"Quick Actions"},{enabled:!0,href:"/app/admins/tmpl/quicklabels",title:"Quick Labels"},{enabled:!0,href:"/app/admins/tmpl/quickmedia",title:"Quick Media"},{href:"/pages/register-boxed",title:"Register Boxed"},{href:"/pages/forgot-password-boxed",title:"Forgot Password Boxed"}]},{header:!0,title:"Setup"},{enabled:!0,href:"/app/setup/agent-panel",title:"Agent Panel",icon:"pe-7s-network fa fa-tools"},{title:"Dashboards",icon:"pe-7s-rocket",child:[{enabled:!1,href:"/demo/dashboard/analytics",title:"Analytics"}]},{title:"Pages",icon:"pe-7s-browser",child:[{enabled:!1,href:"/pages/login-boxed",title:"Login Boxed"},{href:"/pages/register-boxed",title:"Register Boxed"},{href:"/pages/forgot-password-boxed",title:"Forgot Password Boxed"}]},{header:!0,title:"UI Components"},{icon:"pe-7s-diamond",title:"Elements",child:[{title:"Buttons",child:[{title:"Standard",href:"/elements/buttons-standard"}]},{enabled:!1,title:"Dropdowns",href:"/elements/dropdowns"},{title:"Icons",href:"/elements/icons"},{title:"Badges",href:"/elements/badges-labels"},{title:"Cards",href:"/elements/cards"},{title:"List Groups",href:"/elements/list-group"},{title:"Timeline",enabled:!1,href:"/elements/timelines"},{title:"Utilities",href:"/elements/utilities"}]},{icon:"pe-7s-car",title:"Components",child:[{title:"Tabs",href:"/components/tabs"},{title:"Accordions",href:"/components/accordions"},{enabled:!1,title:"Modals",href:"/app/admins/components/modals"},{title:"Progress Bar",href:"/components/progress-bar"},{title:"Tooltips & Popovers",href:"/components/tooltips-popovers"},{title:"Carousel",href:"/components/carousel"},{title:"Pagination",href:"/components/pagination"},{title:"Maps",href:"/components/maps"}]},{icon:"pe-7s-display2",title:"Tables",child:[{title:"Regular Tables",href:"/tables/regular-tables"}]},{header:!0,title:"Dashboard Boxes"},{icon:"pe-7s-graph2",title:"Chart Boxes",enabled:!1,href:"/widgets/chart-boxes-3"},{header:!0,title:"Forms"},{icon:"pe-7s-light",title:"Elements",child:[{enabled:!1,title:"Controls",href:"/forms/controls"},{title:"Layouts",href:"/forms/layouts"}]},{header:!0,title:"Charts"},{enabled:!1,icon:"pe-7s-graph2",title:"ChartJS",href:"/charts/chartjs"}]),collapsed:!0,windowWidth:0}},props:{sidebarbg:String},methods:{toggleBodyClass:function(e){var t=document.body;this.isOpen=!0,//!this.isOpen;
this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleSidebarHover:function(e,t){var s=document.body;this.sidebarActive=!this.sidebarActive,this.windowWidth=document.documentElement.clientWidth,this.windowWidth>"992"&&("add"===e?s.classList.add(t):s.classList.remove(t))},getWindowWidth:function(){var e=document.body;this.windowWidth=document.documentElement.clientWidth,this.windowWidth,e.classList.add("closed-sidebar","closed-sidebar-md")}},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}))},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},H=T,R=(s("1851"),s("6a35"),Object(p["a"])(H,B,E,!1,null,"305b7b8c",null)),j=R.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-footer"},[s("div",{staticClass:"app-footer__inner text-center"},[e._v("\n        Copyright © 2021 Mehery SocCom - All Rights Reserved\n    ")])])}];g["c"].add(v["B"]);var D={name:"Footer",components:{}},Q=D,U=Object(p["a"])(Q,F,z,!1,null,null,null),q=U.exports;g["c"].add(v["z"]);var V={name:"app",components:{Header:L,Sidebar:j,Footer:q,VuePerfectScrollbar:$.a,"font-awesome-icon":M["a"]},methods:{}},I=V,J=Object(p["a"])(I,a,i,!1,null,null,null);t["default"]=J.exports},c28a:function(e,t,s){}}]);