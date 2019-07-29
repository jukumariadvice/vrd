(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"64bbc":function(t,a,r){"use strict";var o=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("b-card",{staticClass:"mr-md-3",attrs:{title:t.contract.title,"sub-title":t.contract.company_name}},[r("b-card-text",{staticClass:"mb-0"},[r("strong",[t._v("NIT:")]),r("span",{staticClass:"ml-1",domProps:{textContent:t._s(t.contract.nit)}})]),r("b-card-text",{staticClass:"mb-0"},[r("strong",[t._v("FECHA FIRMADA:")]),r("span",{staticClass:"ml-1",domProps:{textContent:t._s(t.contract.date_signed)}})]),r("b-card-text",{staticClass:"mb-0"},[r("strong",[t._v("FECHA FINAL:")]),r("span",{staticClass:"ml-1",domProps:{textContent:t._s(t.contract.end_date)}})]),r("b-card-text",{staticClass:"mb-0"},[r("strong",[t._v("MONTO:")]),r("span",{staticClass:"ml-1",domProps:{textContent:t._s(t.contract.amount+" "+t.contract.currency)}})]),r("b-button",{staticClass:"mt-1",attrs:{href:"https://www.google.com"}},[t._v("Descargar el contrato")])],1)},e=[],s={props:{contract:{type:Object,required:!0}}},n=s,c=r("2877"),b=Object(c["a"])(n,o,e,!1,null,null,null);a["a"]=b.exports},dce4:function(t,a,r){"use strict";r.r(a);var o=function(){var t=this,a=t.$createElement,r=t._self._c||a;return t.loading?t._e():r("div",{staticClass:"home"},[r("b-jumbotron",{attrs:{header:t.countContracts+" Obras",lead:"Gobierno Autonomo Departamental de La Paz","bg-variant":"light"}},[r("span",{staticClass:"badge badge-primary mr-1"},[t._v("Enero")]),r("span",{staticClass:"badge badge-primary mr-1"},[t._v("Febrero")]),r("span",{staticClass:"badge badge-primary"},[t._v("Marzo")]),r("h4",{staticClass:"mt-md-1"},[t._v(t._s(t._f("currency")(t.totalCost,"Bs. ")))]),r("contracts"),r("b-row",{staticClass:"mt-md-1"},[r("b-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[r("chartjs-polar-area",{attrs:{height:500,scalesdisplay:!1,labels:t.onlyLabels,data:t.onlySubtotal,backgroundcolor:t.backgroundcolor,bordercolor:t.bordercolor,option:t.myoption,hoverbackgroundcolor:t.hoverbordercolor}})],1),r("b-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[r("b-list-group",t._l(t.limitBy(t.sumByAmount,20),function(a,o){return r("b-list-group-item",{key:a.companyName,domProps:{textContent:t._s(o+1+". "+a.companyName)}})}),1)],1)],1)],1)],1)},e=[],s=r("cebc"),n=r("2f62"),c=r("a7c6"),b=r.n(c),l=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("b-row",{staticClass:"about"},[r("b-col",{staticClass:"text-center",attrs:{cols:"12",md:"7"}},[r("GmapMap",{ref:"mapRef",staticStyle:{width:"100%",height:"350px"},attrs:{center:t.center,zoom:t.zoom,"map-type-id":"terrain",id:"googleMap"}},t._l(t.contracts,function(a,o){return r("GmapMarker",{key:o,attrs:{title:a.title,position:t._f("position")(a.milestones),clickable:!0,draggable:!1},on:{click:function(r){return t.displayInfo(a)}}})}),1)],1),r("b-col",{staticClass:"text-center",attrs:{cols:"12",md:"5"}},[t.currentContract?r("card-map",{attrs:{contract:t.currentContract}}):t._e()],1)],1)},i=[],g=(r("28a5"),r("64bbc")),m={mounted:function(){this.markers=[{title:"Marker 1",position:{lat:-16.2311,lng:-68.9303}},{title:"Marker 2",position:{lat:-16.211222,lng:-68.9203}},{title:"Marker 3",position:{lat:-16.5134022,lng:-68.1265506}}]},components:{CardMap:g["a"]},data:function(){return{zoom:13,markers:[],center:{lat:-16.4957409,lng:-68.1356726},currentContract:null}},methods:Object(s["a"])({displayInfo:function(t){var a=t.milestones.split(",");this.center={lat:parseFloat(a[0])+1e-4*Math.random(),lng:parseFloat(a[1])+1e-4*Math.random()},this.zoom=18+1e-4*Math.random(),this.currentContract=t}},Object(n["b"])("contracts",["fetchContracts"])),computed:Object(s["a"])({},Object(n["d"])("contracts",["contracts"]))},d=m,p=r("2877"),u=Object(p["a"])(d,l,i,!1,null,null,null),C=u.exports,h={mixins:[b.a.mixin],name:"Top20Companies",mounted:function(){this.fetchContracts()},components:{Contracts:C},data:function(){return{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],data:[100,40,60,200,100,40,60,200,100,40,60,200,100,40,60,205.5,100,40,60,200],backgroundcolor:["rgba(26,188,156,0.3)","rgba(46,204,113,0.75)","rgba(52,152,219,0.75)","rgba(155,89,182,0.75)","rgba(52,73,94,0.75)","rgba(22,160,133,0.75)","rgba(39,174,96,0.75)","rgba(41,128,185,0.75)","rgba(142,68,173,0.75)","rgba(44,62,80,0.75)","rgba(241,196,15,0.75)","rgba(230,126,34,0.75)","rgba(231,76,60,0.75)","rgba(149,165,166,0.75)","rgba(243,156,18,0.75)","rgba(211,84,0,0.75)","rgba(192,57,43,0.75)","rgba(0,88,88,0.75)","rgba(75,192,0,0.75)","rgba(75,192,192,0.3)"],bordercolor:["rgba(255,255,255,0.1)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],hoverbordercolor:["rgba(26,188,156,0.5)","rgba(46,204,113,1)","rgba(52,152,219,1)","rgba(155,89,182,1)","rgba(52,73,94,1)","rgba(22,160,133,1)","rgba(39,174,96,1)","rgba(41,128,185,1)","rgba(142,68,173,1)","rgba(44,62,80,1)","rgba(241,196,15,1)","rgba(230,126,34,1)","rgba(231,76,60,1)","rgba(149,165,166,1)","rgba(243,156,18,1)","rgba(211,84,0,1)","rgba(192,57,43,1)","rgba(0,88,88,1)","rgba(75,192,0,1)","rgba(75,192,192,0.5)"],myoption:{responsive:!0,maintainAspectRatio:!0,title:{display:!0,position:"bottom",text:"En Bolivianos"},legend:{display:!0,position:"bottom"}}}},methods:Object(s["a"])({},Object(n["b"])("contracts",["fetchContracts"])),computed:Object(s["a"])({},Object(n["c"])("contracts",["totalCost","sumByAmount","countContracts","onlyLabels","onlySubtotal"]),Object(n["d"])(["loading"]))},_=h,f=Object(p["a"])(_,o,e,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=home.7992dabd.js.map