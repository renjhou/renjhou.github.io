(window.webpackJsonp=window.webpackJsonp||[]).push([[2,31],{626:function(t,e,n){var content=n(657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("953aef0e",content,!0,{sourceMap:!1})},645:function(t,e,n){var content=n(700);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("1bf3ac24",content,!0,{sourceMap:!1})},655:function(t,e,n){"use strict";n.r(e);n(12);var l={props:{value:{type:String,default:""}},data:function(){return{file:null}},methods:{preventDefault:function(t){t.preventDefault()},drop:function(t){t.preventDefault(),this.$refs["file-upload"].files=t.dataTransfer.files},upload:function(){this.$refs["file-upload"].click()},uploadImg:function(t){var e=this,n=new FileReader;n.readAsDataURL(t.target.files[0]),n.onload=function(){e.$emit("input",n.result)}}}},r=n(656),d=n(7);var component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("input",{ref:"file-upload",class:t.$style.hidden,attrs:{type:"file",accept:"image/*"},on:{change:t.uploadImg}}),t._v(" "),e("div",{class:t.$style.upload,on:{dragenter:t.preventDefault,dragover:t.preventDefault,drop:t.drop}},[t.value?[e("img",{class:t.$style.img,attrs:{src:t.value}})]:t._e(),t._v(" "),e("div",[e("fa-icon",{class:t.$style.icon,attrs:{icon:"image"}})],1),t._v(" "),e("div",[t._v("拖拉到這或")]),t._v(" "),e("div",[t._v("或")]),t._v(" "),e("div",{class:t.$style["select-img"],on:{click:t.upload}},[t._v("選擇圖檔")])],2),t._v(" "),e("div",{class:t.$style.tip,attrs:{slot:"tip"},slot:"tip"},[t._v("檔案大小請勿超過2MB")])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},656:function(t,e,n){"use strict";var l=n(626),r=n.n(l);n.d(e,"default",(function(){return r.a}))},657:function(t,e,n){var l=n(17)(!1);l.push([t.i,".upload_iLb0B{display:flex;position:relative;width:12.5rem;height:12.5rem;border:1px solid #8c8c8c;flex-direction:column;justify-content:center;align-items:center;text-align:center}.upload_iLb0B>div{margin-bottom:.625rem}.icon_2dEeK{width:2.5rem;height:1.875rem;color:#8c8c8c}.select-img_ZGpod{position:relative;display:inline-block;padding:.313rem;border:1px solid #8c8c8c;background:#fff;cursor:pointer}.hidden_4kB26{display:none}.img_sXoLi{position:absolute;width:100%;height:100%}.tip_rISP4{margin-top:.625rem;font-size:1.125rem}",""]),l.locals={upload:"upload_iLb0B",icon:"icon_2dEeK","select-img":"select-img_ZGpod",hidden:"hidden_4kB26",img:"img_sXoLi",tip:"tip_rISP4"},t.exports=l},672:function(t,e,n){var content=n(737);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("79974ee4",content,!0,{sourceMap:!1})},699:function(t,e,n){"use strict";var l=n(645),r=n.n(l);n.d(e,"default",(function(){return r.a}))},700:function(t,e,n){var l=n(17)(!1);l.push([t.i,".wrap_wYyAN{padding:1.875rem 2.5rem}.fields_Uw2t2{margin-top:1.188rem;font-size:1.125rem}.mutli-field_XG5ar{display:flex;margin-bottom:1rem}.mutli-field_XG5ar>div{display:flex;align-items:center}.mutli-field_XG5ar>div:last-child{border-right:0}.mutli-field_XG5ar .field-pid_leRcJ{flex:2}.field_e2968{display:flex;margin-bottom:1rem;align-items:center}.label_Aw5Ya{margin:1.75rem .75rem 1.75rem 2.063rem;width:5.8rem}.info_soPrz{margin-top:2.5rem;font-size:1.125rem}.info_soPrz>div{margin-bottom:1.25rem}.input_MERl3{width:12.5rem;height:3.438rem}.input_MERl3.long-input_vXT1s{width:53.875rem}.tip_cZX7Q{margin-left:.625rem}.select_2QII3{width:12.5rem;height:2.813rem}.img_GLgnu{display:block;padding:1.75rem 0}",""]),l.locals={wrap:"wrap_wYyAN",fields:"fields_Uw2t2","mutli-field":"mutli-field_XG5ar","field-pid":"field-pid_leRcJ",field:"field_e2968",label:"label_Aw5Ya",info:"info_soPrz",input:"input_MERl3","long-input":"long-input_vXT1s",tip:"tip_cZX7Q",select:"select_2QII3",img:"img_GLgnu"},t.exports=l},720:function(t,e,n){"use strict";n.r(e);var l=n(10),r=(n(231),{components:{Edit:n(721).default},props:{dataList:{type:Array,default:function(){return[]}},cargoType:{type:Number,default:null},kinds:{type:Array,default:function(){return[]}}},data:function(){return{curIndex:0}},computed:{disablePre:function(){return 0===this.curIndex},disableNext:function(){return this.curIndex>=this.kinds.length-1}},methods:{changeIndex:function(t){if("pre"!==t)this.disableNext||(this.curIndex+=1);else{if(this.disablePre)return;this.curIndex-=1}},updateData:function(t){this.$emit("input",{index:this.curIndex,value:t})}}}),d=n(736),c=n(7);var component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:t.$style.wrap},[e("div",{class:t.$style["side-bar"]},[e("div",{class:t.$style["side-title"],attrs:{required:""}},[t._v("款式（依序設定)")]),t._v(" "),t._l(t.kinds,(function(n,r){return e("div",{key:"kind-".concat(n),class:[t.$style.kind,Object(l.a)({},t.$style.active,r===t.curIndex)],on:{click:function(e){t.curIndex=r}}},[t._v("\n            "+t._s(n)+"\n        ")])}))],2),t._v(" "),e("div",{class:t.$style.content},[e("Edit",{attrs:{data:t.dataList[t.curIndex],"cargo-type":t.cargoType,kind:t.kinds[t.curIndex]},on:{input:t.updateData}}),t._v(" "),e("div",{class:t.$style["btn-wrap"]},[t.disablePre?t._e():e("div",{class:t.$style["pre-kind"],on:{click:function(e){return t.changeIndex("pre")}}},[t._v("\n                上一款\n            ")]),t._v(" "),t.disableNext?t._e():e("div",{class:t.$style["next-kind"],on:{click:function(e){return t.changeIndex("next")}}},[t._v("\n                下一款\n            ")])]),t._v(" "),e("div",{class:t.$style.tip},[t._v("\n            填寫完款式後才可執行完成新增\n        ")])],1)])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},721:function(t,e,n){"use strict";n.r(e);n(108),n(26),n(21),n(34),n(22),n(35);var l=n(10),r=(n(231),n(28),n(12),n(13)),d=n(107),c=n(612),o=n(655),v=n(620);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{FieldInput:d.default,FieldSelect:c.default,UploadFile:o.default,FieldDatePick:v.default},props:{data:{type:Object,default:function(){return{}}},cargoType:{type:Number,default:null},kind:{type:String,default:""}},data:function(){return{cargoName:""}},computed:_(_({},Object(r.c)("options",{smallUnitOption:"getSmallUnit",unitOption:"getUnit",cargoTypeOption:"getCargoType"})),{},{cashierLabel:function(){return isNaN(this.data.cost)||isNaN(this.data.cashier_conversion)?0:this.data.cost*this.data.cashier_conversion}}),mounted:function(){var t=this;this.cargoName=this.cargoTypeOption.filter((function(e){return e.value===t.cargoType}))[0].label},methods:{updateData:function(t,e){var n;switch(t){case"small_unit_id":this.$emit("input",_(_({},this.data),{},{small_unit_id:e})),e||this.$emit("input",_(_({},this.data),{},{conversion:""}));break;case"expiration_date":this.$emit("input",_(_({},this.data),{},{expiration_date:e||"9999-12-31"}));break;case"cost":case"cashier_conversion":var r=0;"cost"!==t||isNaN(e)||isNaN(this.data.cashier_conversion)||(r=(this.data.cashier_conversion||0)*e),"cashier_conversion"!==t||isNaN(e)||isNaN(this.data.cost)||(r=(this.data.cost||0)*e),this.$emit("input",_(_({},this.data),{},(n={},Object(l.a)(n,t,e),Object(l.a)(n,"cashier",r),n)));break;default:this.$emit("input",_(_({},this.data),{},Object(l.a)({},t,e)))}}}},h=n(699),y=n(7);var component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",{class:t.$style.wrap},[e("div",{class:t.$style.fields},[e("div",{class:t.$style["mutli-field"]},[e("div",[e("div",{class:t.$style.label,attrs:{required:""}},[t._v("商品編號")]),t._v(" "),e("FieldInput",{class:t.$style.input,attrs:{value:t.data.SKU,placeholder:"輸入SKU碼"},on:{input:function(e){return t.updateData("SKU",e)}}})],1),t._v(" "),e("div",{class:t.$style["field-pid"]},[e("div",{class:t.$style.label,attrs:{required:""}},[t._v("PID碼")]),t._v(" "),e("FieldInput",{class:t.$style.input,attrs:{value:t.data.PID,placeholder:"輸入PID碼"},on:{input:function(e){return t.updateData("PID",e)}}})],1)]),t._v(" "),e("div",{class:t.$style.field},[e("div",{class:t.$style.label},[t._v("名稱")]),t._v(" "),e("div",[t._v(t._s("".concat(t.cargoName,"-").concat(t.kind)))])]),t._v(" "),e("div",{class:t.$style.field},[e("div",{class:t.$style.label},[t._v("描述")]),t._v(" "),e("FieldInput",{class:[t.$style.input,t.$style["long-input"]],attrs:{value:t.data.describe,placeholder:"輸入此款式描述"},on:{input:function(e){return t.updateData("describe",e)}}})],1),t._v(" "),e("div",{class:t.$style.field},[e("div",{class:t.$style.label,attrs:{required:""}},[t._v("成本")]),t._v(" "),e("FieldInput",{class:t.$style.input,attrs:{value:t.data.cost,placeholder:"最多兩位小數點"},on:{input:function(e){return t.updateData("cost",e)}}})],1),t._v(" "),e("div",{class:t.$style["mutli-field"]},[e("div",[e("div",{class:t.$style.label,attrs:{required:""}},[t._v("批價轉換比")]),t._v(" "),e("FieldInput",{class:t.$style.input,attrs:{value:t.data.cashier_conversion,placeholder:"輸入批價轉換比"},on:{input:function(e){return t.updateData("cashier_conversion",e)}}})],1),t._v(" "),e("div",[e("div",{class:t.$style.label,attrs:{required:""}},[t._v("批價")]),t._v(" "),e("FieldInput",{class:t.$style.input,attrs:{value:t.data.cashier,placeholder:"系統換算"},on:{input:function(e){return t.updateData("cashier",e)}}}),t._v(" "),e("span",{class:t.$style.tip},[t._v("\n                    "+t._s("( 系統換算批價：".concat(t.cashierLabel," )"))+"\n                ")])],1)]),t._v(" "),e("div",{class:t.$style["mutli-field"]},[e("div",[e("div",{class:t.$style.label,attrs:{required:""}},[t._v("件數單位")]),t._v(" "),e("FieldSelect",{class:t.$style.select,attrs:{value:t.data.unit_id,options:t.unitOption,placeholder:"選擇單位"},on:{input:function(e){return t.updateData("unit_id",e)}}})],1),t._v(" "),e("div",[e("div",{class:t.$style.label},[t._v("最小單位")]),t._v(" "),e("FieldSelect",{class:t.$style.input,attrs:{value:t.data.small_unit_id,options:t.smallUnitOption,placeholder:"選擇單位"},on:{input:function(e){return t.updateData("small_unit_id",e)}}})],1)]),t._v(" "),t.data.small_unit_id?e("div",{class:t.$style.field},[e("div",{class:t.$style.label,attrs:{required:""}},[t._v("轉換係數")]),t._v(" "),e("div",[e("FieldInput",{class:t.$style.input,attrs:{value:t.data.conversion,placeholder:"輸入一件轉換單位值"},on:{input:function(e){return t.updateData("conversion",e)}}}),t._v(" "),e("span",{class:t.$style.tip},[t._v("\n                    ( 如一包24pcs，請輸入24 )\n                ")])],1)]):t._e(),t._v(" "),e("div",{class:t.$style.field},[e("div",{class:t.$style.label,attrs:{required:""}},[t._v("即期天數")]),t._v(" "),e("FieldInput",{class:t.$style.input,attrs:{value:t.data.spot_days,placeholder:"輸入天數"},on:{input:function(e){return t.updateData("spot_days",e)}}})],1),t._v(" "),e("div",{class:t.$style["mutli-field"]},[e("div",[e("div",{class:t.$style.label},[t._v("生效日期")]),t._v(" "),e("FieldDatePick",{class:t.$style.input,attrs:{value:t.data.effective_date,placeholder:"選擇日期"},on:{input:function(e){return t.updateData("effective_date",e)}}})],1),t._v(" "),e("div",[e("div",{class:t.$style.label},[t._v("失效日期")]),t._v(" "),e("FieldDatePick",{class:t.$style.input,attrs:{value:t.data.expiration_date,placeholder:"選擇日期"},on:{input:function(e){return t.updateData("expiration_date",e)}}}),t._v(" "),e("span",{class:t.$style.tip},[t._v("\n                    ( 未填失效日期，視為無期限 )\n                ")])],1)]),t._v(" "),e("div",{class:t.$style.field},[e("div",{class:t.$style.label},[t._v("供應商資訊")]),t._v(" "),e("FieldInput",{class:[t.$style.input,t.$style["long-input"]],attrs:{value:t.data.supplier_info,placeholder:"輸入供應商資訊"},on:{input:function(e){return t.updateData("supplier_info",e)}}})],1),t._v(" "),e("div",{class:t.$style.field},[e("div",{class:t.$style.label},[t._v("備註")]),t._v(" "),e("FieldInput",{class:[t.$style.input,t.$style["long-input"]],attrs:{value:t.data.remark,placeholder:"輸入備註"},on:{input:function(e){return t.updateData("remark",e)}}})],1),t._v(" "),e("div",{class:t.$style.field},[e("div",{class:t.$style.label},[t._v("圖片")]),t._v(" "),e("UploadFile",{attrs:{value:t.data.image},on:{input:function(e){return t.updateData("image",e)}}})],1)])])}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null);e.default=component.exports;installComponents(component,{UploadFile:n(655).default})},736:function(t,e,n){"use strict";var l=n(672),r=n.n(l);n.d(e,"default",(function(){return r.a}))},737:function(t,e,n){var l=n(17)(!1);l.push([t.i,".wrap_Oip09{display:flex;border-bottom:1px solid #8c8c8c}.side-bar_QpKpj{width:17.625rem;border-right:1px solid #8c8c8c}.side-title_VnPZO{margin-top:.625rem;margin-left:2.5rem}.kind_0Z8ck,.side-title_VnPZO{height:3.438rem;line-height:3.438rem;font-size:1.125rem}.kind_0Z8ck{margin-top:.313rem;padding-left:2.5rem;cursor:pointer}.kind_0Z8ck.active_a2MaE,.kind_0Z8ck:hover{color:#fff;background:#124178}.content_3mFhx{flex:1}.btn-wrap_bGv3v{display:flex;margin-right:2.5rem;margin-bottom:.75rem;justify-content:flex-end}.btn_qRm0T{display:flex;width:7.5rem;height:2.5rem;border-radius:5px;font-size:1.125rem;align-items:center;justify-content:center;cursor:pointer}.pre-kind_Qa1ha{margin-right:1.875rem;color:#4d8831;border:1px solid #4d8831}.next-kind_zHLCa{color:#fff;background:#4d8831}.tip_5YvAH{margin-right:3.625rem;margin-bottom:.75rem;text-align:right;font-size:1.125rem}",""]),l.locals={wrap:"wrap_Oip09","side-bar":"side-bar_QpKpj","side-title":"side-title_VnPZO",kind:"kind_0Z8ck",active:"active_a2MaE",content:"content_3mFhx","btn-wrap":"btn-wrap_bGv3v",btn:"btn_qRm0T","pre-kind":"pre-kind_Qa1ha btn_qRm0T","next-kind":"next-kind_zHLCa btn_qRm0T",tip:"tip_5YvAH"},t.exports=l}}]);