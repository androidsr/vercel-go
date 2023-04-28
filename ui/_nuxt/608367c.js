(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{322:function(e,t,l){"use strict";l.r(t);l(45),l(33),l(30),l(12),l(51),l(28),l(52);var r=l(21),o=l(214),n=l(213);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{PaasSelect:o.a,PaasPageSelect:n.a},mounted:function(){},data:function(){var e=this;return{projectName:"",tableName:"",dataType:[],datas:[],widgetTypeData:[],columns:[{title:"描述",prop:"cnName"},{title:"数据类型",prop:"dataType",render:function(t){return e.StaticFunc.reader(e,"DataType",t.dataType)}},{title:"字段",prop:"enName"},{title:"非空",prop:"isNull"},{title:"项目名称",prop:"projectName"},{title:"地址",prop:"selectUrl"},{title:"库表名称",prop:"tableName"},{title:"组件类型",prop:"widgetType",render:this.renderWidgetType}]}},methods:{loadData:function(){var e=this;this.projectName&&this.tableName&&this.$store.dispatch("loadData",{queryData:{projectName:this.projectName,tableName:this.tableName},page:{current:1,size:1e4}}).then((function(data){e.datas=data.data}))},addColumn:function(){this.datas.push({cnName:"",dataType:"",enName:"",id:"",isAuto:"",isNull:"",isPk:"",projectName:"",selectUrl:"",showHandle:"",showQuery:"",showTable:"",tableName:"",widgetType:""})},confirm:function(){var e=this;this.$axios.put(this.$store.state.menus.current+"/edit",d(d({},{projectName:this.projectName,tableName:this.tableName}),{datas:this.datas})).then((function(t){"0000"==t.data.code&&e.loadData(),e.$Message.info(t.data.msg)}))},del:function(data){var e=this;this.$axios.delete(this.$store.state.menus.current+"/"+data.id).then((function(t){t.data;"0000"==t.data.code&&e.loadData()}))},projectChange:function(data){var e=this;this.$axios.get("/srproject/"+data.keyId).then((function(t){"oracle"==t.data.dbType?e.$store.dispatch("getParams","OracleDataType").then((function(data){e.dataType=data})):e.$store.dispatch("getParams","MysqlDataType").then((function(data){e.dataType=data}))})),this.$axios.post("/sitemplates/select",{projectId:this.projectName}).then((function(t){e.widgetTypeData=t.data.data}))}}},h=l(5),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"h-panel"},[t("PaasIndexBar"),e._v(" "),t("div",{staticClass:"h-panel-bar"},[t("Row",{attrs:{space:10}},[t("Cell",{attrs:{width:8}},[t("PaasPageSelect",{attrs:{label:"项目名称",prop:"projectName",url:"/srproject/select"},on:{change:e.projectChange},model:{value:e.projectName,callback:function(t){e.projectName=t},expression:"projectName"}})],1),e._v(" "),t("Cell",{attrs:{width:8}},[t("PaasPageSelect",{attrs:{label:"库表名称",prop:"tableName",of:e.projectName,url:"/srmodular/select"},on:{change:e.loadData},model:{value:e.tableName,callback:function(t){e.tableName=t},expression:"tableName"}})],1)],1),e._v(" "),t("Row",{attrs:{space:10}},[t("Cell",{attrs:{width:3}},[t("b",[e._v("字段名称")])]),e._v(" "),t("Cell",{attrs:{width:3}},[t("b",[e._v("数据类型")])]),e._v(" "),t("Cell",{attrs:{width:3}},[t("b",[e._v("中文描述")])]),e._v(" "),t("Cell",{attrs:{width:1}},[t("b",[e._v("主键")])]),e._v(" "),t("Cell",{attrs:{width:1}},[t("b",[e._v("非空")])]),e._v(" "),t("Cell",{attrs:{width:1}},[t("b",[e._v("列表")])]),e._v(" "),t("Cell",{attrs:{width:1}},[t("b",[e._v("编辑")])]),e._v(" "),t("Cell",{attrs:{width:1}},[t("b",[e._v("查询")])]),e._v(" "),t("Cell",{attrs:{width:2}},[t("b",[e._v("组件类型")])]),e._v(" "),t("Cell",[t("b",[e._v("组件地址")])])],1)],1),e._v(" "),t("div",{staticClass:"h-panel-body bottom-line"},e._l(e.datas,(function(l,i){return t("Row",{key:i,attrs:{space:5}},[t("input",{directives:[{name:"model",rawName:"v-model",value:l.id,expression:"item.id"},{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text"},domProps:{value:l.id},on:{input:function(t){t.target.composing||e.$set(l,"id",t.target.value)}}}),e._v(" "),t("Cell",{attrs:{width:3}},[t("input",{directives:[{name:"model",rawName:"v-model",value:l.enName,expression:"item.enName"}],attrs:{type:"text",placeholder:"字段"},domProps:{value:l.enName},on:{input:function(t){t.target.composing||e.$set(l,"enName",t.target.value)}}})]),e._v(" "),t("Cell",{attrs:{width:3}},[t("AutoComplete",{attrs:{datas:e.dataType,type:"title","must-match":!1},on:{change:function(e){l.dataType=e.title}},model:{value:l.dataType,callback:function(t){e.$set(l,"dataType",t)},expression:"item.dataType"}})],1),e._v(" "),t("Cell",{attrs:{width:3}},[t("input",{directives:[{name:"model",rawName:"v-model",value:l.cnName,expression:"item.cnName"}],attrs:{type:"text",placeholder:"描述"},domProps:{value:l.cnName},on:{input:function(t){t.target.composing||e.$set(l,"cnName",t.target.value)}}})]),e._v(" "),t("Cell",{attrs:{width:1}},[t("Checkbox",{attrs:{trueValue:"1",falseValue:"0"},model:{value:l.isPk,callback:function(t){e.$set(l,"isPk",t)},expression:"item.isPk"}})],1),e._v(" "),t("Cell",{attrs:{width:1}},[t("Checkbox",{attrs:{trueValue:"1",falseValue:"0"},model:{value:l.isNull,callback:function(t){e.$set(l,"isNull",t)},expression:"item.isNull"}})],1),e._v(" "),t("Cell",{attrs:{width:1}},[t("Checkbox",{attrs:{trueValue:"1",falseValue:"0"},model:{value:l.showTable,callback:function(t){e.$set(l,"showTable",t)},expression:"item.showTable"}})],1),e._v(" "),t("Cell",{attrs:{width:1}},[t("Checkbox",{attrs:{trueValue:"1",falseValue:"0"},model:{value:l.showHandle,callback:function(t){e.$set(l,"showHandle",t)},expression:"item.showHandle"}})],1),e._v(" "),t("Cell",{attrs:{width:1}},[t("Checkbox",{attrs:{trueValue:"1",falseValue:"0"},model:{value:l.showQuery,callback:function(t){e.$set(l,"showQuery",t)},expression:"item.showQuery"}})],1),e._v(" "),t("Cell",{attrs:{width:2}},[t("Select",{attrs:{placeholder:"组件类型",datas:e.widgetTypeData},model:{value:l.widgetType,callback:function(t){e.$set(l,"widgetType",t)},expression:"item.widgetType"}})],1),e._v(" "),t("Cell",[t("input",{directives:[{name:"model",rawName:"v-model",value:l.selectUrl,expression:"item.selectUrl"}],attrs:{type:"text",placeholder:"地址",url:"/sysparams/select/SelectUrl"},domProps:{value:l.selectUrl},on:{input:function(t){t.target.composing||e.$set(l,"selectUrl",t.target.value)}}}),e._v(" "),t("Poptip",{attrs:{content:"确认删除?"},on:{confirm:function(t){return e.del(l)}}},[t("button",{staticClass:"h-btn h-btn-text-primary h-btn-no-border"},[t("i",{staticClass:"h-icon-trash"})])])],1)],1)})),1),e._v(" "),t("div",{staticClass:"h-panel-bar"},[e.projectName&&e.tableName?t("Button",{attrs:{icon:"h-icon-plus"},on:{click:e.addColumn}},[e._v("新建")]):e._e(),e._v(" "),e.projectName&&e.tableName?t("Button",{attrs:{color:"primary",icon:"h-icon-completed"},on:{click:e.confirm}},[e._v("保存")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);