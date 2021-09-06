(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d34b5"],{"5bc5":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("notifications"),e("side-bar",{attrs:{logo:t.$config.PROP_LOGO_BG_X_LOGO_B}},[e("template",{slot:"links"},[e("sidebar-item",{attrs:{link:{name:"Dashboard",path:"/app/dashboard",icon:"ni ni-tv-2 text-primary"}}}),e("sidebar-item",{attrs:{link:{name:"Icons",path:"/app/icons",icon:"ni ni-planet text-blue"}}}),e("sidebar-item",{attrs:{link:{name:"Maps",path:"/app/maps",icon:"ni ni-pin-3 text-orange"}}}),e("sidebar-item",{attrs:{link:{name:"User Profile",path:"/app/profile",icon:"ni ni-single-02 text-yellow"}}}),e("sidebar-item",{attrs:{link:{name:"Tables",path:"/app/tables",icon:"ni ni-bullet-list-67 text-red"}}}),e("sidebar-item",{attrs:{link:{name:"Login",path:"/app/login",icon:"ni ni-key-25 text-info"}}}),e("sidebar-item",{attrs:{link:{name:"Register",path:"/app/register",icon:"ni ni-circle-08 text-pink"}}})],1),e("template",{slot:"links-after"},[e("hr",{staticClass:"my-3"}),e("h6",{staticClass:"navbar-heading p-0 text-muted"},[t._v("Documentation")]),e("b-nav",{staticClass:"navbar-nav mb-md-3"},[e("b-nav-item",{attrs:{href:"https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard"}},[e("i",{staticClass:"ni ni-spaceship"}),e("b-nav-text",{staticClass:"p-0"},[t._v("Getting started")])],1),e("b-nav-item",{attrs:{href:"https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard"}},[e("i",{staticClass:"ni ni-palette"}),e("b-nav-text",{staticClass:"p-0"},[t._v("Foundation")])],1),e("b-nav-item",{attrs:{href:"https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard"}},[e("i",{staticClass:"ni ni-ui-04"}),e("b-nav-text",{staticClass:"p-0"},[t._v("Components")])],1)],1)],1)],2),e("div",{staticClass:"main-content"},[e("dashboard-navbar",{attrs:{type:t.$route.meta.navbarType}}),e("div",{on:{click:function(a){return t.$sidebar.displaySidebar(!1)}}},[e("fade-transition",{attrs:{duration:200,origin:"center top",mode:"out-in"}},[e("router-view")],1)],1),t.$route.meta.hideFooter?t._e():e("content-footer")],1)],1)},n=[],s=(e("f559"),e("b7f5")),r=(e("7da8"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-nav",{staticClass:"navbar-top navbar-expand",class:{"navbar-dark":"default"===t.type},attrs:{"container-classes":"container-fluid"}},[e("a",{staticClass:"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block active router-link-active",attrs:{href:"#","aria-current":"page"}},[t._v(" "+t._s(t.$route.name)+" ")]),e("b-navbar-nav",{staticClass:"align-items-center ml-md-auto"},[e("li",{staticClass:"nav-item d-sm-none"},[e("a",{staticClass:"nav-link",attrs:{href:"#","data-action":"search-show","data-target":"#navbar-search-main"}},[e("i",{staticClass:"ni ni-zoom-split-in"})])])]),e("b-navbar-nav",{staticClass:"align-items-center ml-auto ml-md-0"},[e("b-form",{staticClass:"navbar-search form-inline mr-sm-3",class:{"navbar-search-dark":"default"===t.type,"navbar-search-light":"light"===t.type},attrs:{id:"navbar-search-main"}},[e("b-form-group",{staticClass:"mb-0"},[e("b-input-group",{staticClass:"input-group-alternative input-group-merge"},[e("b-form-input",{attrs:{placeholder:"Search",type:"text"}}),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-search"})])])],1)],1)],1),e("base-dropdown",{staticClass:"nav-item",attrs:{"menu-on-right":"",tag:"li","title-tag":"a","title-classes":"nav-link pr-0"}},[e("a",{staticClass:"nav-link pr-0",attrs:{slot:"title-container",href:"#"},on:{click:function(t){t.preventDefault()}},slot:"title-container"},[e("b-media",{staticClass:"align-items-center",attrs:{"no-body":""}},[e("span",{staticClass:"avatar avatar-sm rounded-circle"},[e("img",{attrs:{alt:"Image placeholder",src:"/argon/img/theme/team-4.jpg"}})]),e("b-media-body",{staticClass:"ml-2 d-none d-lg-block"},[e("span",{staticClass:"mb-0 text-sm  font-weight-bold"},[t._v("John Snow")])])],1)],1),[e("b-dropdown-header",{staticClass:"noti-title"},[e("h6",{staticClass:"text-overflow m-0"},[t._v("Welcome!")])]),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-single-02"}),e("span",[t._v("My profile")])]),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-settings-gear-65"}),e("span",[t._v("Settings")])]),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-calendar-grid-58"}),e("span",[t._v("Activity")])]),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-support-16"}),e("span",[t._v("Support")])]),e("div",{staticClass:"dropdown-divider"}),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-user-run"}),e("span",[t._v("Logout")])])]],2)],1)],1)}),o=[],l=(e("7f7f"),e("7c76")),c=e("57bd"),p={components:{CollapseTransition:l["a"],BaseNav:c["a"],Modal:c["c"]},props:{type:{type:String,default:"default",description:"Look of the dashboard navbar. Default (Green) or light (gray)"}},computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)}},data:function(){return{activeNotifications:!1,showMenu:!1,searchModalVisible:!1,searchQuery:""}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1}}},m=p,d=e("2877"),b=Object(d["a"])(m,r,o,!1,null,null,null),v=b.exports,u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer px-4"},[e("b-row",{staticClass:"justify-content-lg-between",attrs:{"align-v":"center"}},[e("b-col",{attrs:{lg:"6"}},[e("div",{staticClass:"copyright text-center text-lg-left text-muted"},[t._v("\n        © "+t._s(t.year)+" "),e("a",{staticClass:"font-weight-bold ml-1",attrs:{href:"https://www.creative-tim.com",target:"_blank"}},[t._v("Creative Tim")])])]),e("b-col",{attrs:{lg:"6"}},[e("b-nav",{staticClass:"nav-footer justify-content-lg-end",attrs:{align:"center"}},[e("b-nav-item",{attrs:{href:"https://www.creative-tim.com",target:"_blank"}},[t._v("\n          Creative Tim\n        ")]),e("b-nav-item",{attrs:{href:"https://www.creative-tim.com/presentation",target:"_blank"}},[t._v("\n         About Us\n        ")]),e("b-nav-item",{attrs:{href:"http://blog.creative-tim.com",target:"_blank"}},[t._v("\n          Blog\n        ")]),e("b-nav-item",{attrs:{href:"https://www.creative-tim.com/license",target:"_blank"}},[t._v("\n          License\n        ")])],1)],1)],1)],1)},h=[],f={data:function(){return{year:(new Date).getFullYear()}}},g=f,w=Object(d["a"])(g,u,h,!1,null,null,null),C=w.exports,_=e("941e");function k(t){return document.getElementsByClassName(t).length>0}function x(t){k(t)?new s["a"](".".concat(t)):setTimeout((function(){x(t)}),100)}var y={components:{DashboardNavbar:v,ContentFooter:C,DashboardContent:_["a"],FadeTransition:l["b"]},methods:{initScrollbar:function(){var t=navigator.platform.startsWith("Win");t&&x("sidenav")}},mounted:function(){this.initScrollbar()}},D=y,N=Object(d["a"])(D,i,n,!1,null,null,null);a["default"]=N.exports}}]);