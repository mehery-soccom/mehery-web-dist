(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c096b9bc"],{"1a01":function(a,t,r){"use strict";var e=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"app-page-title"},[r("div",{staticClass:"page-title-wrapper"},[r("div",{staticClass:"page-title-heading"},[r("div",{staticClass:"page-title-icon"},[r("i",{class:a.icon})]),r("div",[a._v("\n                "+a._s(a.heading)+"\n                "),r("div",{staticClass:"page-title-subheading"},[a._v("\n                    "+a._s(a.subheading)+"\n                ")])])]),r("div",{staticClass:"page-title-actions"},[r("button",{staticClass:"btn-shadow mr-3 btn btn-dark",attrs:{type:"button"}},[r("font-awesome-icon",{attrs:{icon:"star"}})],1),r("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),a._v("\n                Create New\n            ")],1)])])])},o=[],n=r("ecee"),i=r("c074"),s=r("ad3d");n["c"].add(i["M"],i["H"]);var d={components:{"font-awesome-icon":s["a"]},props:{icon:String,heading:String,subheading:String}},l=d,c=r("2877"),b=Object(c["a"])(l,e,o,!1,null,null,null);t["a"]=b.exports},ab9b:function(a,t,r){"use strict";r.r(t);var e=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",[r("page-title",{attrs:{heading:a.heading,subheading:a.subheading,icon:a.icon}}),r("div",{staticClass:"content"},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("b-card",{staticClass:"main-card mb-3",attrs:{title:"Doughnut"}},[r("doughnut")],1),r("b-card",{staticClass:"main-card mb-3",attrs:{title:"Radar"}},[r("radar")],1)],1),r("b-col",{attrs:{md:"6"}},[r("b-card",{staticClass:"main-card mb-3",attrs:{title:"Polar Area"}},[r("polar")],1),r("b-card",{staticClass:"main-card mb-3",attrs:{title:"Pie Chart"}},[r("pie")],1)],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("b-card",{staticClass:"main-card mb-3",attrs:{title:"Line Chart"}},[r("lineeg")],1),r("b-card",{staticClass:"main-card mb-3",attrs:{title:"Area Chart"}},[r("areaeg")],1)],1),r("b-col",{attrs:{md:"6"}},[r("b-card",{staticClass:"main-card mb-3",attrs:{title:"Vertical Bar Chart"}},[r("bar")],1),r("b-card",{staticClass:"main-card mb-3",attrs:{title:"Horizontal Bar Chart"}},[r("barhoriz")],1)],1)],1)],1)],1)},o=[],n=r("1a01"),i=r("1fca"),s={extends:i["b"],mounted:function(){this.renderChart({labels:["Cars","Trains","Airplanes"],datasets:[{data:[300,50,100],backgroundColor:["#8dace7","#71deb9","#ef869e"],hoverBackgroundColor:["#7097e1","#4dd6a7","#eb6886"]}]},{responsive:!0,maintainAspectRatio:!1})}},d={extends:i["g"],mounted:function(){this.renderChart({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},{responsive:!0,maintainAspectRatio:!1})}},l={extends:i["f"],mounted:function(){this.renderChart({datasets:[{data:[11,16,7,3,14],backgroundColor:["#8dace7","#4BC0C0","#ef869e","#E7E9ED","#71deb9"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},{responsive:!0,maintainAspectRatio:!1})}},c={extends:i["e"],mounted:function(){this.renderChart({labels:["Cars","Trains","Airplanes"],datasets:[{data:[300,50,100],backgroundColor:["#8dace7","#71deb9","#ef869e"],hoverBackgroundColor:["#8dace7","#71deb9","#ef869e"]}]},{responsive:!0,maintainAspectRatio:!1})}},b={extends:i["d"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"#ed0f51",borderColor:"#ed0f51",borderCapStyle:"round",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ed0f51",pointBackgroundColor:"#ffffff",pointBorderWidth:2,pointHoverRadius:10,pointHoverBackgroundColor:"#ed0f51",pointHoverBorderColor:"#ed0f51",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},{responsive:!0,maintainAspectRatio:!1})}},u={extends:i["d"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July"],options:{legend:{display:!1}},datasets:[{label:"My First dataset",fill:!0,lineTension:.1,backgroundColor:"rgba(237, 15, 81, .2)",borderColor:"#ed0f51",borderCapStyle:"round",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ed0f51",pointBackgroundColor:"#ffffff",pointBorderWidth:2,pointHoverRadius:10,pointHoverBackgroundColor:"#ed0f51",pointHoverBorderColor:"#ed0f51",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},{responsive:!0,maintainAspectRatio:!1})}},p={extends:i["a"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",borderCapStyle:"round",data:[65,59,80,81,56,55,40]}]},{responsive:!0,maintainAspectRatio:!1})}},g={extends:i["c"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",borderCapStyle:"round",data:[65,59,80,81,56,55,40]}]},{responsive:!0,maintainAspectRatio:!1})}},C={components:{PageTitle:n["a"],doughnut:s,radar:d,polar:l,pie:c,lineeg:b,areaeg:u,bar:p,barhoriz:g},data:function(){return{heading:"ChartJS",subheading:"Huge selection of charts created with the Vue ChartJS Plugin",icon:"pe-7s-bandaid icon-gradient bg-amy-crisp"}}},h=C,f=r("2877"),m=Object(f["a"])(h,e,o,!1,null,null,null);t["default"]=m.exports}}]);