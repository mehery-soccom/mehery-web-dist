(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70c80984"],{"6df0":function(e,t,s){"use strict";s("d05e")},"8b24":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container app-theme-white"},[s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("Header")],1),s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("Sidebar")],1),s("div",{staticClass:"app-main__outer"},[s("div",{staticClass:"app-main__inner"},[e._t("default")],2),s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("Footer")],1)],1),s("b-modal",{attrs:{id:"modal1",title:"Bootstrap-Vue"}},[s("p",{staticClass:"my-4"},[e._v("Hello from modal!")])]),s("b-modal",{attrs:{id:"modallg",size:"lg",title:"Large Modal"}},[e._v("\n        Hello Modal!\n    ")]),s("b-modal",{attrs:{id:"modalsm",size:"sm",title:"Small Modal"}},[e._v("\n        Hello Modal!\n    ")])],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-header header-shadow"},[s("div",{staticClass:"logo-src"}),s("div",{staticClass:"app-header__content"},[s("div",{staticClass:"app-header-left"},[s("SearchBox")],1),s("div",{staticClass:"app-header-right"},[s("UserArea")],1)]),s("div",{staticClass:"app-header__mobile-menu"},[s("div",[s("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleMobile("closed-sidebar-open")}}},[e._m(0)])])]),s("div",{staticClass:"app-header__menu"},[s("span",[s("b-button",{staticClass:"btn-icon btn-icon-only",class:{active:e.isOpenMobileMenu},attrs:{variant:"primary",size:"sm"},on:{click:function(t){return e.toggleMobile2("header-menu-open")}}},[s("div",{staticClass:"btn-icon-wrapper"},[s("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])],1)])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"hamburger-box"},[s("span",{staticClass:"hamburger-inner"})])}],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"search-wrapper",class:{active:e.searchOpen}},[s("div",{staticClass:"input-holder"},[s("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"Type to search"}}),s("button",{staticClass:"search-icon",on:{click:function(t){e.searchOpen=!e.searchOpen}}},[s("span")])]),s("button",{staticClass:"close",on:{click:function(t){e.searchOpen=!e.searchOpen}}})])])},l=[],d={data:function(){return{searchOpen:!1}}},c=d,A=s("2877"),p=Object(A["a"])(c,o,l,!1,null,null,null),u=p.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex"},[a("div",{staticClass:"header-btn-lg pr-0"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("b-dropdown",{attrs:{"toggle-class":"p-0 mr-2","menu-class":"dropdown-menu-lg",variant:"link",right:""}},[a("div",{staticClass:"widget-content-left  ml-3 header-user-info"},[e.MyConst.user?a("div",{staticClass:"widget-heading"},[e._v(e._s(e.MyConst.user))]):e._e(),a("div",{staticClass:"widget-subheading"},[e._v("System Admin")])]),a("span",{attrs:{slot:"button-content"},slot:"button-content"},[a("div",{staticClass:"icon-wrapper icon-wrapper-alt rounded-circle"},[a("img",{staticClass:"rounded-circle",attrs:{width:"42",src:s("e445"),alt:""}})])]),a("div",{staticClass:"dropdown-divider",attrs:{tabindex:"-1"}}),e.MyConst.user?a("span",[a("a",{staticClass:"dropdown-item",attrs:{href:e.MyConst.appPrefix+"/auth/logout",type:"button",tabindex:"0"}},[e._v("Logout")])]):a("span",[a("a",{staticClass:"dropdown-item",attrs:{href:e.MyConst.appPrefix+"/auth/logout"}},[e._v("Login")])])])],1)])])])])},m=[],b=(s("96cf"),s("3b8d")),g=s("ecee"),f=s("c074"),C=s("d166");g["c"].add(f["a"],f["t"],f["P"],f["u"],f["D"],f["x"],f["F"],f["G"],f["E"],f["A"]);var v={components:{},computed:{},data:function(){return{MyFlags:C["c"],MyConst:C["a"]}},methods:{logout:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("LogOut");case 2:this.$router.push("auth/login");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},w=v,M=Object(A["a"])(w,h,m,!1,null,null,null),O=M.exports,B=s("ad3d");g["c"].add(f["B"]);var E={name:"Header",components:{SearchBox:u,UserArea:O,"font-awesome-icon":B["a"]},data:function(){return{isOpen:!1,isOpenMobileMenu:!1}},props:{},mounted:function(e){},methods:{toggleMobile:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleMobile2:function(e){var t=document.body;this.isOpenMobileMenu=!this.isOpenMobileMenu,this.isOpenMobileMenu?t.classList.add(e):t.classList.remove(e)}}},y=E,x=Object(A["a"])(y,n,r,!1,null,null,null),I=x.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-sidebar sidebar-shadow",on:{mouseover:function(t){return e.toggleSidebarHover("add","closed-sidebar-open")},mouseleave:function(t){return e.toggleSidebarHover("remove","closed-sidebar-open")}}},[s("div",{staticClass:"app-header__logo"},[s("div",{staticClass:"logo-src"}),s("div",{staticClass:"header__pane ml-auto"},[s("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleBodyClass("closed-sidebar")}}},[e._m(0)])])]),s("div",{staticClass:"app-sidebar-content"},[e._m(1)],1)])},L=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"hamburger-box"},[s("span",{staticClass:"hamburger-inner"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("VuePerfectScrollbar",{staticClass:"app-sidebar-scroll"},[s("sidebar-menu",{attrs:{showOneChild:"",menu:e.menu}})],1)}],G=s("4776"),T=s("9d63"),H=s.n(T);function P(e){var t=null;return e.filter((function(e){return 1==e.header?(t=e,!0):(e.child&&(e.child=P(e.child),e.enabled=e.child.length>0),(!1===e.disabled||!0===e.enabled)&&(t&&(t.enabled=!0),!0))})).filter((function(e){return!1===e.disabled||!0===e.enabled}))}var U={components:{SidebarMenu:G["SidebarMenu"],VuePerfectScrollbar:H.a},data:function(){return{isOpen:!1,sidebarActive:!1,menu:P([{header:!0,title:"Dashboards"},{title:"Summary",icon:"pe-7s-graph3",href:"/",enabled:!0},{header:!0,title:"Reports"},{title:"Sessions",icon:"pe-7s-chat",href:"/app/reports/sessions",enabled:!0},{header:!0,title:"Admin"},{title:"Users",icon:"pe-7s-users",enabled:!0,href:"/app/admins/agents"},{title:"Agents",icon:"pe-7s-users",enabled:!1,href:"/app/admins/agents/list"},{enabled:!1,icon:"pe-7s-add-user",href:"/app/admins/agents/add",title:"Add Agent"},{enabled:!0,href:"/app/admins/agents/teams",title:"Teams",icon:"pe-7s-network"},{title:"Templates",icon:"pe-7s-browser",enabled:!0,child:[{enabled:!0,href:"/app/admins/tmpl/quickreplies",title:"Quick Replies"},{enabled:!0,href:"/app/admins/tmpl/quickactions",title:"Quick Actions"},{enabled:!0,href:"/app/admins/tmpl/quicklabels",title:"Quick Labels"},{enabled:!0,href:"/app/admins/tmpl/quickmedia",title:"Quick Media"},{href:"/pages/register-boxed",title:"Register Boxed"},{href:"/pages/forgot-password-boxed",title:"Forgot Password Boxed"}]},{title:"Dashboards",icon:"pe-7s-rocket",child:[{enabled:!1,href:"/demo/dashboard/analytics",title:"Analytics"}]},{title:"Pages",icon:"pe-7s-browser",child:[{enabled:!1,href:"/pages/login-boxed",title:"Login Boxed"},{href:"/pages/register-boxed",title:"Register Boxed"},{href:"/pages/forgot-password-boxed",title:"Forgot Password Boxed"}]},{header:!0,title:"UI Components"},{icon:"pe-7s-diamond",title:"Elements",child:[{title:"Buttons",child:[{title:"Standard",href:"/elements/buttons-standard"}]},{enabled:!1,title:"Dropdowns",href:"/elements/dropdowns"},{title:"Icons",href:"/elements/icons"},{title:"Badges",href:"/elements/badges-labels"},{title:"Cards",href:"/elements/cards"},{title:"List Groups",href:"/elements/list-group"},{title:"Timeline",enabled:!1,href:"/elements/timelines"},{title:"Utilities",href:"/elements/utilities"}]},{icon:"pe-7s-car",title:"Components",child:[{title:"Tabs",href:"/components/tabs"},{title:"Accordions",href:"/components/accordions"},{enabled:!1,title:"Modals",href:"/app/admins/components/modals"},{title:"Progress Bar",href:"/components/progress-bar"},{title:"Tooltips & Popovers",href:"/components/tooltips-popovers"},{title:"Carousel",href:"/components/carousel"},{title:"Pagination",href:"/components/pagination"},{title:"Maps",href:"/components/maps"}]},{icon:"pe-7s-display2",title:"Tables",child:[{title:"Regular Tables",href:"/tables/regular-tables"}]},{header:!0,title:"Dashboard Boxes"},{icon:"pe-7s-graph2",title:"Chart Boxes",enabled:!1,href:"/widgets/chart-boxes-3"},{header:!0,title:"Forms"},{icon:"pe-7s-light",title:"Elements",child:[{enabled:!1,title:"Controls",href:"/forms/controls"},{title:"Layouts",href:"/forms/layouts"}]},{header:!0,title:"Charts"},{enabled:!1,icon:"pe-7s-graph2",title:"ChartJS",href:"/charts/chartjs"}]),collapsed:!0,windowWidth:0}},props:{sidebarbg:String},methods:{toggleBodyClass:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleSidebarHover:function(e,t){var s=document.body;this.sidebarActive=!this.sidebarActive,this.windowWidth=document.documentElement.clientWidth,this.windowWidth>"992"&&("add"===e?s.classList.add(t):s.classList.remove(t))},getWindowWidth:function(){var e=document.body;this.windowWidth=document.documentElement.clientWidth,this.windowWidth<"1350"?e.classList.add("closed-sidebar","closed-sidebar-md"):e.classList.remove("closed-sidebar","closed-sidebar-md")}},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}))},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},Q=U,S=(s("6df0"),Object(A["a"])(Q,W,L,!1,null,"59626192",null)),Z=S.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-footer"},[s("div",{staticClass:"app-footer__inner text-center"},[e._v("\n        Copyright © 2021 Mehery SocCom - All Rights Reserved\n    ")])])}];g["c"].add(f["B"]);var z={name:"Footer",components:{}},R=z,V=Object(A["a"])(R,k,j,!1,null,null,null),D=V.exports;g["c"].add(f["z"]);var N={name:"app",components:{Header:I,Sidebar:Z,Footer:D,VuePerfectScrollbar:H.a,"font-awesome-icon":B["a"]},methods:{}},_=N,J=Object(A["a"])(_,a,i,!1,null,null,null);t["default"]=J.exports},d05e:function(e,t,s){},e445:function(e,t){e.exports="data:image/png;base64,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"}}]);