(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{347:function(e,l,o){"use strict";o.r(l);var t={data:function(){return{model:{roleId:"",menuId:""},vRules:{required:[]}}},methods:{}},r=o(5),component=Object(r.a)(t,(function(){var e=this,l=e._self._c;return l("div",{staticClass:"h-panel"},[l("PaasTitleBar"),e._v(" "),l("div",{staticClass:"h-panel-body bottom-line"},[l("Form",{ref:"form",attrs:{validOnChange:!0,showErrorTip:!0,labelPosition:"true",labelWidth:110,rules:e.vRules,model:e.model,mode:"twocolumn"}},[l("FormPageSelect",{attrs:{label:"用户角色",prop:"roleId",url:"/sysroles/select"},model:{value:e.model.roleId,callback:function(l){e.$set(e.model,"roleId",l)},expression:"model.roleId"}}),e._v(" "),l("FormPageSelect",{attrs:{label:"用户编号",prop:"menuId",url:"/sysmenus/select"},model:{value:e.model.menuId,callback:function(l){e.$set(e.model,"menuId",l)},expression:"model.menuId"}})],1)],1),e._v(" "),l("PaasButtonBar")],1)}),[],!1,null,null,null);l.default=component.exports}}]);