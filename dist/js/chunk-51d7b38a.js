(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d7b38a"],{"8f06":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,actions:e.actions},on:{action:e.onAction}}),n("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[n("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:e.teams,fields:e.fields,"tbody-tr-class":e.rowClass},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.deleteItem(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"trash",title:"Delete"}})],1),e._v("\n                   \n                  "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.editItem(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"eye",title:"View"}})],1)]}}])})],1),e.newItem?n("b-modal",{attrs:{id:e.modelName,title:(e.newItem.id?"Edit":"Add")+" Quick Media ",size:"lg"},on:{hidden:e.cancelItem},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"text-center form-group"},[n("button",{staticClass:"btn btn-warning",on:{click:e.cancelItem}},[e._v("Cancel")]),e._v("\n \n                        "),e.newItem.name?n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isChanged},on:{click:e.updateItem}},[e._v("Update")]):e._e(),e._v("\n \n                        "),e.newItem.name?e._e():n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isChangedAndAdded},on:{click:e.createItem}},[e._v("Upload")])])]},proxy:!0}],null,!1,3955569238)},[n("ValidationObserver",{ref:"form"},[n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Category")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.category,expression:"newItem.category"}],staticClass:"form-control",attrs:{name:"category",id:"examplePassword",placeholder:"greeting",type:"text"},domProps:{value:e.newItem.category},on:{input:function(t){t.target.composing||e.$set(e.newItem,"category",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,1801807966)})],1),n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.title,expression:"newItem.title"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"Hello User",type:"text"},domProps:{value:e.newItem.title},on:{input:function(t){t.target.composing||e.$set(e.newItem,"title",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,3637740269)})],1),e.newItem.name?n("div",{staticClass:"row"},[n("img",{staticClass:"position-relative form-group col-md-12",attrs:{src:e.newItem.url}})]):e._e(),e.newItem.name?e._e():n("div",{staticClass:"row"},[n("div",{staticClass:"position-relative form-group col-md-12"},[n("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:e.dropzoneOptions},on:{"vdropzone-sending":e.sendingEvent,"vdropzone-file-added":e.fileAdded,"vdropzone-queue-complete":e.fileUploaded}})],1)])])],1):e._e()],1)},a=[],s=(n("7f7f"),n("96cf"),n("3b8d")),r=n("d51b"),o=n("ecee"),c=n("c074"),l=n("ad3d"),u=n("9dbb"),d=n.n(u),m=n("92c3"),p=n.n(m),h=(n("1e3f"),n("d166"));function f(){return{category:"",title:"",template:"",url:""}}o["c"].add(c["X"],c["W"],c["P"],c["C"]);var g={components:{PageTitle:r["a"],"font-awesome-icon":l["a"],vueDropzone:p.a},data:function(){return{heading:"Quick Media",subheading:"Once created, can be used by Agent",icon:"pe-7s-browser icon-gradient bg-tempting-azure",actions:[{label:"Add Quick Media",icon:"plus",name:"ADD_ITEM"}],fields:[{key:"category",label:"Category"},{key:"title",label:"Title"},{key:"actions",label:"Actions"}],newItem:f(),sample:{contact:{name:"John Doe",phone:"919876543210",email:"John.Doe@company.com"}},modelName:"MODAL_ADD_QUICK_MEDIA",dropzoneOptions:{url:h["a"].context+"/api/tmpl/quickmedia",thumbnailWidth:150,maxFilesize:.5,maxFiles:1,autoProcessQueue:!1},addedFileCount:0}},computed:{teams:function(e){var t=this;return(this.$store.getters.StateQMeds||[]).map((function(e){return e.message=d.a.render(e.template||e.message||e.title||"",t.sample)||e.title,e}))},templatePreview:function(e){if(!this.newItem.template)return this.newItem.template;try{return d.a.render(this.newItem.template,this.sample)}catch(t){return this.newItem.template}},isChanged:function(e){return this.oldHash!==JSON.stringify(this.newItem)},isChangedAndAdded:function(e){return this.newItem.title&&this.newItem.category&&this.addedFileCount>0&&this.$refs.myVueDropzone.getQueuedFiles().length}},created:function(e){this.loadItems()},methods:{loadItems:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetQuickMeds");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fileAdded:function(e){this.addedFileCount++},sendingEvent:function(e,t,n){n.append("category",this.newItem.category),n.append("title",this.newItem.title),n.append("content",this.newItem.title)},fileUploaded:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadItems();case 2:this.newItem=f(),this.$refs.form.reset(),this.onAction({name:"CANCEL"});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate();case 2:if(t=e.sent,!0!==t){e.next=9;break}return e.next=6,this.$store.dispatch("CreatQuickMeds",this.newItem);case 6:this.newItem=f(),this.$refs.form.reset(),this.onAction({name:"CANCEL"});case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate();case 2:if(t=e.sent,!0!==t){e.next=6;break}return e.next=6,this.$refs.myVueDropzone.processQueue();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeleteQuickMeds",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=f(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=f(),this.newItem.name=t.name,this.newItem.category=t.category,this.newItem.title=t.title,this.newItem.message=t.message,this.newItem.template=t.template,this.newItem.url=t.url,this.onAction({name:"EDIT_ITEM"});case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),rowClass:function(e,t){if(e&&"row"===t)return this.newItem.name==e.name?"table-success":void 0},onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}}}},w=g,v=n("2877"),b=Object(v["a"])(w,i,a,!1,null,null,null);t["default"]=b.exports},d51b:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:e.icon})]),n("div",[e._v("\n                "+e._s(e.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[e._v("\n                    "+e._s(e.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},e._l(e.actions,(function(t){return n("span",[t.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{tag:"button",to:t.link,type:"button"}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}),e._v("\n                    "+e._s(t.label)+" \n                ")],1):n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",on:{click:function(n){return e.clickAction(t)}}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}),e._v("\n                    "+e._s(t.label)+" \n                ")],1)],1)})),0)])])},a=[],s=n("ecee"),r=n("c074"),o=n("ad3d");s["c"].add(r["N"],r["H"]);var c={components:{"font-awesome-icon":o["a"]},props:{icon:String,heading:String,subheading:String,actions:Array},methods:{clickAction:function(e){this.$emit("action",e)}}},l=c,u=n("2877"),d=Object(u["a"])(l,i,a,!1,null,null,null);t["a"]=d.exports}}]);