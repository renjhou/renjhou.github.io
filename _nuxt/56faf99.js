(window.webpackJsonp=window.webpackJsonp||[]).push([[47,9,11,16,26,27],{614:function(e,t,r){var content=r(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("575beeec",content,!0,{sourceMap:!1})},617:function(e,t,r){var content=r(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("60cda17f",content,!0,{sourceMap:!1})},621:function(e,t,r){var content=r(644);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("37466e0f",content,!0,{sourceMap:!1})},630:function(e,t,r){"use strict";var n=r(614),o=r.n(n);r.d(t,"default",(function(){return o.a}))},631:function(e,t,r){var n=r(17)(!1);n.push([e.i,".wrap_heLqv{display:flex;align-items:center;justify-content:space-between}.input_AVnx5{width:39.688rem;height:3.438rem;border:1px solid #8c8c8c}.user_WNE0P{position:relative;padding:1.063rem 1rem;cursor:pointer}.menu_ANbYz,.user_WNE0P{font-weight:400;font-size:1.125rem}.menu_ANbYz{position:absolute;top:100%;right:0;padding:1.375rem 9.313rem 1.375rem .938rem;width:100%;border-radius:5px;box-shadow:0 0 5px 1px rgba(0,0,0,.5)}",""]),n.locals={wrap:"wrap_heLqv",input:"input_AVnx5",user:"user_WNE0P",menu:"menu_ANbYz"},e.exports=n},633:function(e,t,r){"use strict";r.r(t);r(36),r(26),r(21),r(28),r(12),r(34),r(22),r(35);var n=r(10),o=(r(231),r(13));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={components:{FieldInput:r(107).default},props:{value:{type:[String,Number],default:""}},data:function(){return{isShowMenu:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({userInfo:"getUserInfo"})),methods:{logout:function(){var e=this;this.$axios.$post("/api/logout").then((function(t){t.success&&(localStorage.setItem("user",""),e.$axios.setToken("","Bearer"),e.$cookiz.set("token",""),e.$router.push("/login"))}))}}},d=c,f=r(630),h=r(7);var component=Object(h.a)(d,(function(){var e,t=this,r=t._self._c;return r("div",{class:t.$style.wrap},[r("FieldInput",{class:t.$style.input,attrs:{value:t.value,placeholder:"搜尋","suffix-icon":"el-icon-search"},on:{input:function(e){return t.$emit("input",e)}}}),t._v(" "),r("div",{class:t.$style.user,on:{click:function(e){t.isShowMenu=!t.isShowMenu}}},[t._v("\n        "+t._s("Hello ".concat(null===(e=t.userInfo)||void 0===e?void 0:e.name))+"\n        "),r("transition",{attrs:{name:"fade"}},[t.isShowMenu?r("div",{class:t.$style.menu,on:{click:function(e){return e.stopPropagation(),t.logout.apply(null,arguments)}}},[t._v("\n                登出\n            ")]):t._e()])],1)],1)}),[],!1,(function(e){this.$style=f.default.locals||f.default}),null,null);t.default=component.exports},634:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(161);var o=r(237),l=r(110);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(o.a)(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},637:function(e,t,r){var content=r(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("57bb7cb1",content,!0,{sourceMap:!1})},638:function(e,t,r){var content=r(669);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("430af9cd",content,!0,{sourceMap:!1})},639:function(e,t,r){"use strict";var n=r(617),o=r.n(n);r.d(t,"default",(function(){return o.a}))},640:function(e,t,r){var n=r(17)(!1);n.push([e.i,".button_5mDZh{font-size:1.125rem}.button_5mDZh.add_miUKL{background:#1961b6;color:#fff}.button_5mDZh.cancel_MiCbF{color:#333;border-color:#8c8c8c}.button_5mDZh.cancel_MiCbF:hover{background:#fff}.button_5mDZh.next_HTSP8{background:#fcaa4a;color:#333}.button_5mDZh:hover{opacity:.9}",""]),n.locals={button:"button_5mDZh",add:"add_miUKL",cancel:"cancel_MiCbF",next:"next_HTSP8"},e.exports=n},641:function(e,t,r){"use strict";r.r(t);var n={props:{type:{type:String,default:""},disabled:{type:Boolean,default:!1},size:{type:String,default:""}}},o=r(639),l=r(7);var component=Object(l.a)(n,(function(){var e=this;return(0,e._self._c)("el-button",{class:[e.$style.button,e.$style[e.type]],attrs:{type:e.type,disabled:e.disabled,size:e.size},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},643:function(e,t,r){"use strict";var n=r(621),o=r.n(n);r.d(t,"default",(function(){return o.a}))},644:function(e,t,r){var n=r(17)(!1);n.push([e.i,".title_-1DpY{margin-bottom:.75rem;font-size:1.125rem}.border_GAV8k,.icon_HojRk{width:.875rem;height:.875rem}.border_GAV8k{display:flex;border-radius:50%;border:2px solid;border-color:inherit;justify-content:center;align-items:center}.border_GAV8k .icon_HojRk{width:.5rem;height:.5rem}",""]),n.locals={title:"title_-1DpY",border:"border_GAV8k",icon:"icon_HojRk"},e.exports=n},648:function(e,t,r){var content=r(707);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("d48a33c8",content,!0,{sourceMap:!1})},649:function(e,t,r){var content=r(709);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("7a23da3d",content,!0,{sourceMap:!1})},654:function(e,t,r){"use strict";r.r(t);r(231);var n={props:{active:{type:Number,default:1},options:{type:Array,default:function(){return[]}}}},o=r(643),l=r(7);var component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.steps},[t("el-steps",{attrs:{active:e.active,space:"150px"}},e._l(e.options,(function(r,n){return t("el-step",{key:n,scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{class:e.$style.title},[e._v(e._s(r.label))])]},proxy:!0},{key:"icon",fn:function(){return[e.active===n+1?t("div",{class:e.$style.border},[t("fa-icon",{class:e.$style.icon,attrs:{icon:"circle"}})],1):e.active>n+1?t("fa-icon",{class:e.$style.icon,attrs:{icon:"check"}}):t("div",{class:e.$style.border})]},proxy:!0}],null,!0)})})),1)],1)}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},666:function(e,t,r){"use strict";var n=r(637),o=r.n(n);r.d(t,"default",(function(){return o.a}))},667:function(e,t,r){var n=r(17)(!1);n.push([e.i,".content_H-Ude{padding:1.875rem 2.5rem}.field_Dtux4{display:flex;margin-bottom:2.5rem;align-items:center}.label_Jgr0d{width:6.25rem}.input_dG-i-,.label_Jgr0d{font-size:1.125rem}.input_dG-i-{width:12.5rem;height:3.438rem}.input_dG-i-.email_pftji{width:37.5rem}",""]),n.locals={content:"content_H-Ude",field:"field_Dtux4",label:"label_Jgr0d",input:"input_dG-i-",email:"email_pftji"},e.exports=n},668:function(e,t,r){"use strict";var n=r(638),o=r.n(n);r.d(t,"default",(function(){return o.a}))},669:function(e,t,r){var n=r(17)(!1);n.push([e.i,".content_3yojL{padding:1.875rem 2.5rem}.field_vZ0N5{display:flex;margin-bottom:2.5rem;align-items:center}.label_Hcrg-{width:6.25rem}.label_Hcrg-,.select_oPYcF{font-size:1.125rem}.select_oPYcF{width:12.5rem;height:2.813rem}",""]),n.locals={content:"content_3yojL",field:"field_vZ0N5",label:"label_Hcrg-",select:"select_oPYcF"},e.exports=n},678:function(e,t,r){var content=r(757);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("f6709b46",content,!0,{sourceMap:!1})},695:function(e,t,r){"use strict";r.r(t);r(36);var n={components:{FieldInput:r(107).default},props:{name:{type:String,default:""},phone:{type:String,default:""},email:{type:String,default:""}}},o=r(666),l=r(7);var component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.content},[t("div",{class:e.$style.field},[t("div",{class:e.$style.label,attrs:{required:""}},[e._v("中文姓名")]),e._v(" "),t("FieldInput",{class:e.$style.input,attrs:{value:e.name,placeholder:"輸入中文"},on:{input:function(t){return e.$emit("update:name",t)}}})],1),e._v(" "),t("div",{class:e.$style.field},[t("div",{class:e.$style.label,attrs:{required:""}},[e._v("手機")]),e._v(" "),t("FieldInput",{class:e.$style.input,attrs:{value:e.phone,placeholder:"格式:0912345678"},on:{input:function(t){return e.$emit("update:phone",t)}}})],1),e._v(" "),t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("電子信箱")]),e._v(" "),t("FieldInput",{class:[e.$style.input,e.$style.email],attrs:{value:e.email,placeholder:"輸入有效電子信箱"},on:{input:function(t){return e.$emit("update:email",t)}}})],1)])}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},696:function(e,t,r){"use strict";r.r(t);r(26),r(21),r(28),r(12),r(34),r(22),r(35);var n=r(10),o=(r(231),r(13));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={components:{FieldSelect:r(612).default},props:{storeId:{type:[String,Number],default:""},storeBrancheId:{type:[String,Number],default:""}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)("options",{storeOptions:"getStore",riverBirdOptions:"getRiverBird"}))},d=c,f=r(668),h=r(7);var component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.content},[t("div",{class:e.$style.field},[t("div",{class:e.$style.label,attrs:{required:""}},[e._v("公司")]),e._v(" "),t("FieldSelect",{class:e.$style.select,attrs:{value:e.storeId,options:e.storeOptions},on:{input:function(t){return e.$emit("update:storeId",t)}}})],1),e._v(" "),e.storeId&&1!==e.storeId?t("div",{class:e.$style.field},[t("div",{class:e.$style.label,attrs:{required:""}},[e._v("店別")]),e._v(" "),t("FieldSelect",{class:e.$style.select,attrs:{value:e.storeBrancheId,options:e.riverBirdOptions},on:{input:function(t){return e.$emit("update:storeBrancheId",t)}}})],1):e._e()])}),[],!1,(function(e){this.$style=f.default.locals||f.default}),null,null);t.default=component.exports},706:function(e,t,r){"use strict";var n=r(648),o=r.n(n);r.d(t,"default",(function(){return o.a}))},707:function(e,t,r){var n=r(17)(!1);n.push([e.i,".dialog_wGECF{min-width:360px;overflow:hidden}.dialog_wGECF .el-dialog__title{font-size:1.375rem}.dialog_wGECF .el-dialog__body{padding:0}.steps_9ScQv{padding:1.875rem;border-bottom:1px solid #8c8c8c}.btn-wrap_ydolA{padding-right:2.5rem;padding-bottom:2.375rem;justify-content:flex-end}.btn_y518u,.btn-wrap_ydolA{display:flex;align-items:center}.btn_y518u{width:7.5rem;height:3.125rem;border-radius:5px;font-size:1.25rem;color:#333;justify-content:center;cursor:pointer}.cancel_-NqQ7{border:1px solid #8c8c8c}.cancel_-NqQ7,.next_LBM2z,.save_8bDMI{margin-right:1.875rem}.next_LBM2z,.save_8bDMI{background:#fcaa4a}.pre_RUipA{margin-right:1.875rem;color:#cd8229;border:1px solid #cd8229}",""]),n.locals={dialog:"dialog_wGECF",steps:"steps_9ScQv","btn-wrap":"btn-wrap_ydolA",btn:"btn_y518u",cancel:"cancel_-NqQ7 btn_y518u",next:"next_LBM2z btn_y518u",save:"save_8bDMI btn_y518u",pre:"pre_RUipA btn_y518u"},e.exports=n},708:function(e,t,r){"use strict";var n=r(649),o=r.n(n);r.d(t,"default",(function(){return o.a}))},709:function(e,t,r){var n=r(17)(!1);n.push([e.i,".dialog_g1Pxf .el-dialog__body,.dialog_g1Pxf .el-dialog__header{padding:0}.content_6kyS\\+{padding-top:6.063rem;flex-direction:column}.content_6kyS\\+,.icon_VTIhg{display:flex;align-items:center}.icon_VTIhg{margin-bottom:2.75rem;width:4rem;height:4rem;background:#4d8831;border-radius:50%;justify-content:center;color:#fff}.icon_VTIhg>svg{width:2.125rem;height:1.5rem}.label_NuVOR{font-size:1.375rem}.label_NuVOR>span{color:#1961b6}.btn_EHvsl{display:flex;margin:2.5rem 0 5.625rem;width:7.5rem;height:2.5rem;color:#fff;background:#1961b6;align-items:center;justify-content:center;border-radius:5px;cursor:pointer}",""]),n.locals={dialog:"dialog_g1Pxf",content:"content_6kyS+",icon:"icon_VTIhg",label:"label_NuVOR",btn:"btn_EHvsl"},e.exports=n},723:function(e,t,r){"use strict";r.r(t);r(36),r(26),r(21),r(28),r(12),r(34),r(22),r(35);var n=r(10),o=(r(232),r(13)),l=r(70),c=r(654),d=r(233),f=r(695),h=r(696);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{FieldDialog:l.default,FieldSteps:c.default,StepOne:f.default,StepTwo:h.default,AlterDialog:d.default},props:{data:{type:Object,default:function(){return{}}},editType:{type:String,default:""}},data:function(){return{active:1,name:"",phone:"",email:"",errorMsg:"",storeId:null,storeBrancheId:null,stepOptions:[{label:"基本資訊"},{label:"職務/差勤"}]}},methods:_(_({},Object(o.b)(["actionSetToast"])),{},{validFields:function(){var e=[];return 1===this.active&&(this.name||e.push("<div>◎請輸入中文姓名</div>"),this.phone||e.push("<div>◎請輸入手機</div>")),2===this.active&&(this.storeId||e.push("<div>◎請選擇公司</div>"),2!==this.storeId||this.storeBrancheId||e.push("<div>◎請選擇店別</div>")),!e.length||(this.errorMsg=e.join(""),!1)},goNext:function(){this.validFields()&&(this.active=2)},onSave:function(){var e=this;this.validFields()&&this.$axios.$post("/api/user",{name:this.name,phone:this.phone,email:this.email,store_branche_id:this.storeBrancheId,store_id:this.storeId}).then((function(t){t.success&&(e.actionSetToast("新增成功"),e.$emit("reload",t.data.safetyCode))}))}})},m=r(706),O=r(7);var component=Object(O.a)(y,(function(){var e=this,t=e._self._c;return t("FieldDialog",{attrs:{title:"新增員工","custom-class":e.$style.dialog,width:"86.25rem"},on:{close:function(t){return e.$emit("close")}}},[t("FieldSteps",{class:e.$style.steps,attrs:{active:e.active,options:e.stepOptions}}),e._v(" "),1===e.active?t("StepOne",{attrs:{name:e.name,phone:e.phone,email:e.email},on:{"update:name":function(t){e.name=t},"update:phone":function(t){e.phone=t},"update:email":function(t){e.email=t}}}):2===e.active?t("StepTwo",{attrs:{"store-id":e.storeId,"store-branche-id":e.storeBrancheId},on:{"update:storeId":function(t){e.storeId=t},"update:store-id":function(t){e.storeId=t},"update:storeBrancheId":function(t){e.storeBrancheId=t},"update:store-branche-id":function(t){e.storeBrancheId=t}}}):e._e(),e._v(" "),t("div",{class:e.$style["btn-wrap"]},[t("div",{class:e.$style.cancel,on:{click:function(t){return e.$emit("close")}}},[e._v("\n            取消\n        ")]),e._v(" "),1===e.active?[t("div",{key:"next-btn",class:e.$style.next,on:{click:e.goNext}},[e._v("\n                下一步\n            ")])]:[t("div",{class:e.$style.pre,on:{click:function(t){e.active=1}}},[e._v("\n                上一步\n            ")]),e._v(" "),t("div",{class:e.$style.save,on:{click:e.onSave}},[e._v("\n                完成\n            ")])]],2),e._v(" "),e.errorMsg?t("AlterDialog",{attrs:{msg:e.errorMsg},on:{close:function(t){e.errorMsg=""}}}):e._e()],1)}),[],!1,(function(e){this.$style=m.default.locals||m.default}),null,null);t.default=component.exports},724:function(e,t,r){"use strict";r.r(t);var n={components:{FieldDialog:r(70).default},props:{safetyCode:{type:String,required:!0}}},o=r(708),l=r(7);var component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("FieldDialog",{class:e.$style.dialog,attrs:{width:"25rem","show-close":!1}},[t("div",{class:e.$style.content},[t("div",{class:e.$style.icon},[t("fa-icon",{attrs:{icon:"check"}})],1),e._v(" "),t("div",{class:e.$style.label},[e._v("\n            安全碼："),t("span",[e._v(e._s(e.safetyCode))])]),e._v(" "),t("div",{class:e.$style.btn,on:{click:function(t){return e.$emit("close")}}},[e._v("\n            確定\n        ")])])])}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},756:function(e,t,r){"use strict";var n=r(678),o=r.n(n);r.d(t,"default",(function(){return o.a}))},757:function(e,t,r){var n=r(17)(!1);n.push([e.i,".wrap_--sTz{flex:1;display:flex;padding:2rem 1.875rem 2.5rem;flex-direction:column;box-sizing:border-box}.search-wrap_EE9XJ{margin-top:1.25rem}.select_2GOr2{width:12.5rem;height:2.813rem;font-size:1.125rem}.select_2GOr2:first-child{margin-right:1.25rem}.feature_MPofg{display:flex;margin-top:.938rem;justify-content:flex-end;align-items:center}.add-btn_xYk-T{padding:.938rem 1.938rem;font-size:1.375rem}",""]),n.locals={wrap:"wrap_--sTz","search-wrap":"search-wrap_EE9XJ",select:"select_2GOr2",feature:"feature_MPofg","add-btn":"add-btn_xYk-T"},e.exports=n},793:function(e,t,r){"use strict";r.r(t);r(40),r(235),r(26),r(21),r(34),r(22),r(35);var n=r(27),o=r(634),l=r(10),c=(r(108),r(28),r(12),r(234),r(39),r(51),r(13)),d=r(612),f=r(641),h=r(660),v=r(723),_=r(633),y=r(724),m=r(236);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={components:{FieldSelect:d.default,FieldButton:f.default,TableArea:h.default,AddDialog:v.default,SearchBar:_.default,SafetyCodeDialog:y.default,DeleteDialog:m.default},data:function(){var e=this;return{showDialog:!1,curDeleteId:!1,search:{store_branch_id:"",store:""},column:[{prop:"id",label:"項次",width:"70"},{prop:"storeName",label:"公司",sortable:!0},{prop:"userCode",label:"員工編號",sortable:!0},{prop:"name",label:"姓名",sortable:!0},{prop:"function",label:"",detail:[{key:"view",icon:"eye",func:this.onView},{key:"edit",icon:"pen",func:this.onEdit},{key:"delete",icon:"trash",func:function(t){var r=t.id;e.curDeleteId=r}}]}],rowData:[],safetyCode:"",searchKeyWord:""}},computed:w(w({},Object(c.c)("options",{stores:"getStore",riverBirds:"getRiverBird"})),{},{storeOptions:function(){return[{value:"",label:"不分公司"}].concat(Object(o.a)(this.stores))},riverBirdOptions:function(){return[{value:"",label:"不分店別"}].concat(Object(o.a)(this.riverBirds))},tableData:function(){var e=this,t=this.rowData.filter((function(t){var r=!0;return e.search.store&&(r=t.store_id===e.search.store),e.search.store_branch_id&&r&&(r=t.store_branche_id===e.search.store_branch_id),r}));return this.searchKeyWord&&(t=t.filter((function(t){return Object.entries(t).some((function(t){var r=Object(n.a)(t,2),o=r[0],l=r[1];return!!e.column.some((function(e){return e.prop===o}))&&"".concat(l).includes(e.searchKeyWord)}))}))),t}}),mounted:function(){this.actionFetchBranch(),this.actionFetchStore(),this.onSearch()},methods:w(w(w({},Object(c.b)(["actionSetToast"])),Object(c.b)("options",["actionFetchBranch","actionFetchStore"])),{},{onSearch:function(){var e=this;this.$axios.$get("/api/user").then((function(t){t.success&&(e.rowData=t.data)}))},onAdd:function(){this.showDialog=!0},onView:function(e){var t=e.id;this.$router.push("/staff/".concat(t,"?type=view"))},onEdit:function(e){var t=e.id;this.$router.push("/staff/".concat(t,"?type=edit"))},onDelete:function(){var e=this;this.$axios.$delete("/api/user/".concat(this.curDeleteId)).then((function(t){t.success&&(e.actionSetToast("删除成功"),e.onSearch(),e.curDeleteId=null)}))},close:function(){this.showDialog=!1},reload:function(code){var e=this;this.onSearch(),this.close(),this.$nextTick((function(){e.safetyCode=code}))}})},x=r(756),$=r(7);var component=Object($.a)(j,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.wrap},[t("SearchBar",{model:{value:e.searchKeyWord,callback:function(t){e.searchKeyWord=t},expression:"searchKeyWord"}}),e._v(" "),t("div",{class:e.$style["search-wrap"]},[t("FieldSelect",{class:e.$style.select,attrs:{options:e.storeOptions},model:{value:e.search.store,callback:function(t){e.$set(e.search,"store",t)},expression:"search.store"}}),e._v(" "),t("FieldSelect",{class:e.$style.select,attrs:{options:e.riverBirdOptions},model:{value:e.search.store_branch_id,callback:function(t){e.$set(e.search,"store_branch_id",t)},expression:"search.store_branch_id"}})],1),e._v(" "),t("div",{class:e.$style.feature},[t("FieldButton",{class:e.$style["add-btn"],attrs:{type:"add"},on:{click:e.onAdd}},[e._v("\n            新增員工\n        ")])],1),e._v(" "),t("TableArea",{attrs:{"type-label":"員工","table-data":e.tableData,column:e.column,"show-all-btn":!1}}),e._v(" "),e.showDialog?t("AddDialog",{on:{close:e.close,reload:e.reload}}):e._e(),e._v(" "),e.safetyCode?t("SafetyCodeDialog",{attrs:{"safety-code":e.safetyCode},on:{close:function(t){e.safetyCode=""}}}):e._e(),e._v(" "),e.curDeleteId?t("DeleteDialog",{on:{delete:e.onDelete,close:function(t){e.curDeleteId=null}}}):e._e()],1)}),[],!1,(function(e){this.$style=x.default.locals||x.default}),null,null);t.default=component.exports}}]);