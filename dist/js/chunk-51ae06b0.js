(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51ae06b0"],{d51b:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:e.icon})]),n("div",[e._v("\n                "+e._s(e.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[e._v("\n                    "+e._s(e.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},e._l(e.actions,(function(t){return n("span",[t.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{tag:"button",to:t.link,type:"button"}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}),e._v("\n                    "+e._s(t.label)+" \n                ")],1):n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",on:{click:function(n){return e.clickAction(t)}}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}),e._v("\n                    "+e._s(t.label)+" \n                ")],1)],1)})),0)])])},s=[],i=n("ecee"),r=n("c074"),l=n("ad3d");i["c"].add(r["N"],r["H"]);var o={components:{"font-awesome-icon":l["a"]},props:{icon:String,heading:String,subheading:String,actions:Array},methods:{clickAction:function(e){this.$emit("action",e)}}},c=o,m=n("2877"),u=Object(m["a"])(c,a,s,!1,null,null,null);t["a"]=u.exports},fa17:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,actions:e.actions},on:{action:e.onAction}}),n("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[n("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:e.items,fields:e.fields},scopedSlots:e._u([{key:"cell(channels)",fn:function(t){return e._l(t.item.channels,(function(t){return t?n("span",{staticClass:"fab",class:e.MyDict.socialPrefix(t)},[e._v(" ")]):e._e()}))}},{key:"cell(actions)",fn:function(t){return[n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Y"==t.item.isactive?"De-Activate":"Activate",expression:"row.item.isactive == 'Y' ? 'De-Activate' : 'Activate'"}],staticClass:"fa-stack fa-1x",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.enableItem(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-user fa-stack-1x"}),"Y"!=t.item.isactive?n("i",{staticClass:"fas fa-slash fa-stack-1x",staticStyle:{color:"Tomato"}}):e._e()]),e._v(" \n              "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.admin?"Remove Admin Access":"Make Admin",expression:"!row.item.admin ? 'Make Admin' : 'Remove Admin Access'"}],staticClass:"fa-stack fa-1x",attrs:{size:"sm",variant:"outline-primary",acitve:"false"},on:{click:function(n){return e.enableItemAdmin(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-user-cog fa-stack-1x"}),t.item.admin?e._e():n("i",{staticClass:"fas fa-slash fa-stack-1x",staticStyle:{color:"Tomato"}})]),e._v(" \n             "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Make Default Assignee",expression:"'Make Default Assignee'"}],staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(n){return e.setItemDefault(t.item,t.index,n.target)}}},[t.item.defaultValue?e._e():n("span",{staticClass:"far fa-star"}),t.item.defaultValue?n("span",{staticClass:"fas fa-star"}):e._e()]),e._v(" \n              "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.editItem(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"eye",title:"View"}})],1)]}}])})],1),e._m(0),e.newItem?n("b-modal",{attrs:{id:e.modelName,title:(e.newItem.id?"Edit":"Add")+" User ",size:"lg"},on:{hidden:e.cancelItem},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"position-relative form-group"},[n("button",{staticClass:"form-control btn btn-primary",attrs:{name:"password",id:"examplePassword",disabled:!(e.isChanged&&e.isValid)},on:{click:e.createItem}},[e._v("Create")])])]},proxy:!0}],null,!1,1701182966)},[n("ValidationObserver",{ref:"form"},[n("div",{staticClass:"row"},[n("div",{staticClass:"position-relative form-group col-md-6"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.name,expression:"newItem.name"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"John Doe",type:"text"},domProps:{value:e.newItem.name},on:{input:function(t){t.target.composing||e.$set(e.newItem,"name",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,1618159028)})],1),n("div",{staticClass:"position-relative form-group col-md-6"},[n("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"exampleEmail"}},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.agent_email,expression:"newItem.agent_email"}],staticClass:"form-control",attrs:{name:"email",id:"exampleEmail",placeholder:"abc@xyz.com",type:"email"},domProps:{value:e.newItem.agent_email},on:{input:function(t){t.target.composing||e.$set(e.newItem,"agent_email",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,1218837978)})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"position-relative form-group col-md-6"},[n("label",{attrs:{for:"exampleEmail"}},[e._v("Username")]),n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[e._v("@")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.code,expression:"newItem.code"}],staticClass:"form-control",attrs:{placeholder:"john,sam2",type:"text",readonly:e.newItem.id},domProps:{value:e.newItem.code},on:{input:function(t){t.target.composing||e.$set(e.newItem,"code",t.target.value)}}})])]),n("div",{staticClass:"position-relative form-group col-md-6"},[n("label",{attrs:{for:"examplePassword"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.agent_password,expression:"newItem.agent_password"}],staticClass:"form-control",attrs:{name:"password",id:"examplePassword",placeholder:"password",type:"password"},domProps:{value:e.newItem.agent_password},on:{input:function(t){t.target.composing||e.$set(e.newItem,"agent_password",t.target.value)}}})])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"position-relative form-group"},[n("label",{attrs:{for:"exampleSelect"}},[e._v("Team")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newItem.dept_id,expression:"newItem.dept_id"}],staticClass:"form-control",attrs:{name:"select",id:"exampleSelect"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newItem,"dept_id",t.target.multiple?n:n[0])}}},e._l(e.teams,(function(t){return"Y"==t.isactive?n("option",{domProps:{value:t.id}},[e._v("\n                                    "+e._s(t.name))]):e._e()})),0)]),n("div",{staticClass:"form-check form-switch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.admin,expression:"newItem.admin"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckDefault"},domProps:{checked:Array.isArray(e.newItem.admin)?e._i(e.newItem.admin,null)>-1:e.newItem.admin},on:{change:function(t){var n=e.newItem.admin,a=t.target,s=!!a.checked;if(Array.isArray(n)){var i=null,r=e._i(n,i);a.checked?r<0&&e.$set(e.newItem,"admin",n.concat([i])):r>-1&&e.$set(e.newItem,"admin",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.newItem,"admin",s)}}}),n("label",{staticClass:"form-check-label",attrs:{for:"flexSwitchCheckDefault"}},[e._v("Admin Access")])])]),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"position-relative form-group"},[n("label",{attrs:{for:"exampleCustomMutlipleSelect"}},[e._v("Channels")]),n("label",{staticClass:"float-right",attrs:{for:"select-all-channel"}},[e._v("Select All\n                                    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.isSelectAllChannel,expression:"isSelectAllChannel"}],attrs:{type:"checkbox",name:"select-all-channel"},domProps:{checked:Array.isArray(e.isSelectAllChannel)?e._i(e.isSelectAllChannel,null)>-1:e.isSelectAllChannel},on:{change:[function(t){var n=e.isSelectAllChannel,a=t.target,s=!!a.checked;if(Array.isArray(n)){var i=null,r=e._i(n,i);a.checked?r<0&&(e.isSelectAllChannel=n.concat([i])):r>-1&&(e.isSelectAllChannel=n.slice(0,r).concat(n.slice(r+1)))}else e.isSelectAllChannel=s},e.selectAllChannel]}})]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newItem.channels,expression:"newItem.channels"}],staticClass:"custom-select",attrs:{multiple:"",type:"select",id:"exampleCustomMutlipleSelect",name:"customSelect"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newItem,"channels",t.target.multiple?n:n[0])},e.selectChannel]}},e._l(e.channels,(function(t){return n("option",[e._v(e._s(t))])})),0)])])])])],1):e._e()],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"main-card mb-3 card"})])])}],i=(n("96cf"),n("3b8d")),r=(n("7f7f"),n("d51b")),l=n("d166"),o=n("ecee"),c=n("c074"),m=n("ad3d");function u(){return{name:null,agent_email:"",dept_id:null,channels:[],agent_channels:"",admin:!1}}o["c"].add(c["V"],c["R"],c["U"],c["T"],c["C"],c["K"]);var d={components:{PageTitle:r["a"],"font-awesome-icon":m["a"],MyDict:l["b"]},data:function(){return{MyFlags:l["c"],MyDict:l["b"],MyConst:l["a"],heading:"Users",subheading:"Add edit users",icon:"pe-7s-users icon-gradient bg-happy-itmeo fa fa-user-friends",actions:[{label:"Add User",icon:"plus",name:"ADD_ITEM"}],fields:[{key:"dept.name",label:"Team"},{key:"name",label:"Name"},{key:"code",label:"Username"},{key:"agent_email",label:"Email"},{key:"channels",label:"Channels",class:"upper-case"},{key:"actions",label:"Action"}],channels:["WHATSAPP","FACEBOOK","TWITTER","TELEGRAM","WEBSITE"],newItem:u(),modelName:"MODAL_ADD_USERS",isSelectAllChannel:!1}},computed:{items:function(e){return this.$store.getters.StateAgents},teams:function(e){return this.$store.getters.StateTeams},isChanged:function(e){return this.oldHash!==JSON.stringify(this.newItem)},isValid:function(e){return this.newItem.name&&this.newItem.code&&this.newItem.agent_email}},created:function(e){this.loadAgents(),this.loadAgentTeams()},methods:{loadAgents:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetAgents");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadAgentTeams:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetTeams");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate();case 2:if(t=e.sent,!0!==t){e.next=9;break}return e.next=6,this.$store.dispatch("CreateAgent",this.newItem);case 6:this.newItem=u(),this.$refs.form.reset(),this.onAction({name:"CANCEL"});case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),enableItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeActivateAgent",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),enableItemAdmin:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeAdminAgent",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setItemDefault:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("SetAgentDefault",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=u(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in this.newItem=u(),t)this.newItem[n]=t[n];this.isSelectAllChannel=this.newItem.channels.length==this.channels.length,this.onAction({name:"EDIT_ITEM"});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.newItem),this.selectChannel(),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}},selectAllChannel:function(e){this.newItem.channels=this.isSelectAllChannel?this.channels.map((function(e){return e})):[]},selectChannel:function(){this.isSelectAllChannel=this.newItem.channels.length==this.channels.length}}},p=d,h=n("2877"),f=Object(h["a"])(p,a,s,!1,null,null,null);t["default"]=f.exports}}]);