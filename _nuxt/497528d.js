(window.webpackJsonp=window.webpackJsonp||[]).push([[51,9,30],{614:function(e,t,r){var content=r(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("575beeec",content,!0,{sourceMap:!1})},630:function(e,t,r){"use strict";var n=r(614),o=r.n(n);r.d(t,"default",(function(){return o.a}))},631:function(e,t,r){var n=r(17)(!1);n.push([e.i,".wrap_heLqv{display:flex;align-items:center;justify-content:space-between}.input_AVnx5{width:39.688rem;height:3.438rem;border:1px solid #8c8c8c}.user_WNE0P{position:relative;padding:1.063rem 1rem;cursor:pointer}.menu_ANbYz,.user_WNE0P{font-weight:400;font-size:1.125rem}.menu_ANbYz{position:absolute;top:100%;right:0;padding:1.375rem 9.313rem 1.375rem .938rem;width:100%;border-radius:5px;box-shadow:0 0 5px 1px rgba(0,0,0,.5)}",""]),n.locals={wrap:"wrap_heLqv",input:"input_AVnx5",user:"user_WNE0P",menu:"menu_ANbYz"},e.exports=n},633:function(e,t,r){"use strict";r.r(t);r(36),r(26),r(21),r(28),r(12),r(34),r(22),r(35);var n=r(10),o=(r(231),r(13));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={components:{FieldInput:r(107).default},props:{value:{type:[String,Number],default:""}},data:function(){return{isShowMenu:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({userInfo:"getUserInfo"})),methods:{logout:function(){var e=this;this.$axios.$post("/api/logout").then((function(t){t.success&&(localStorage.setItem("user",""),e.$axios.setToken("","Bearer"),e.$cookiz.set("token",""),e.$router.push("/login"))}))}}},f=l,d=r(630),h=r(7);var component=Object(h.a)(f,(function(){var e,t=this,r=t._self._c;return r("div",{class:t.$style.wrap},[r("FieldInput",{class:t.$style.input,attrs:{value:t.value,placeholder:"搜尋","suffix-icon":"el-icon-search"},on:{input:function(e){return t.$emit("input",e)}}}),t._v(" "),r("div",{class:t.$style.user,on:{click:function(e){t.isShowMenu=!t.isShowMenu}}},[t._v("\n        "+t._s("Hello ".concat(null===(e=t.userInfo)||void 0===e?void 0:e.name))+"\n        "),r("transition",{attrs:{name:"fade"}},[t.isShowMenu?r("div",{class:t.$style.menu,on:{click:function(e){return e.stopPropagation(),t.logout.apply(null,arguments)}}},[t._v("\n                登出\n            ")]):t._e()])],1)],1)}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null);t.default=component.exports},651:function(e,t,r){var content=r(713);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("3e748c0b",content,!0,{sourceMap:!1})},680:function(e,t,r){var content=r(761);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("324fa3c9",content,!0,{sourceMap:!1})},712:function(e,t,r){"use strict";var n=r(651),o=r.n(n);r.d(t,"default",(function(){return o.a}))},713:function(e,t,r){var n=r(17)(!1);n.push([e.i,".title_aYKAE{padding:16px 24px;font-size:1.375rem;font-weight:600;border-bottom:1px solid #000;color:#333}.content_um20e{padding:1.5rem 0}.field_W6hT3{display:flex;align-items:center;font-size:1.125rem}.label_hoEKD{margin:1.5rem .75rem 1.5rem 2.063rem;width:5rem;color:#124178}.btn-wrap_YCDsV{padding:1rem 1.5rem;border-top:1px solid #000;text-align:center;justify-content:flex-end}.btn_-n8SC,.btn-wrap_YCDsV,.btn-wrap_YCDsV>div{display:flex}.btn_-n8SC{width:9.375rem;height:3.125rem;border-radius:5px;font-size:1.125rem;font-weight:600;align-items:center;justify-content:center;color:#333;cursor:pointer}.close-btn_quQy3{border:1px solid #8c8c8c}.save-btn_x4baY{margin-left:1rem;background:#fcaa4a}.input_XO\\+uU{width:16rem;height:3.438rem}",""]),n.locals={title:"title_aYKAE",content:"content_um20e",field:"field_W6hT3",label:"label_hoEKD","btn-wrap":"btn-wrap_YCDsV",btn:"btn_-n8SC","close-btn":"close-btn_quQy3 btn_-n8SC","save-btn":"save-btn_x4baY btn_-n8SC",input:"input_XO+uU"},e.exports=n},726:function(e,t,r){"use strict";r.r(t);r(26),r(21),r(28),r(12),r(34),r(22),r(35);var n=r(10),o=(r(232),r(13)),c=r(71),l=r(107),f=r(233);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{CustomDialog:c.default,FieldInput:l.default,AlterDialog:f.default},props:{safeStockData:{type:Object,required:!0}},data:function(){return{data:{},errorMsg:""}},mounted:function(){this.data=h({},this.safeStockData)},methods:h(h({},Object(o.b)(["actionSetToast"])),{},{validField:function(){var e=[];return this.data.safety_stock||e.push("<div>◎請輸入安全庫存</div>"),!e.length||(this.errorMsg=e.join(""),!1)},onSave:function(){var e=this;this.validField()&&this.$axios.$post("/api/warehouseCargo/safetyStock/".concat(this.data.id),{safety_stock:this.data.safety_stock}).then((function(t){t.success&&(e.actionSetToast("修改成功"),e.$emit("reload"))}))}})},y=r(712),_=r(7);var component=Object(_.a)(v,(function(){var e=this,t=e._self._c;return t("CustomDialog",{attrs:{type:0},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{class:e.$style.title},[e._v("設定安全庫存")])]},proxy:!0},{key:"content",fn:function(){return[t("div",{class:e.$style.content},[t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("儲位編號")]),e._v(" "),t("div",[e._v(e._s(e.data.SKU))])]),e._v(" "),t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("商品編碼")]),e._v(" "),t("div",[e._v(e._s(e.data.cargo_name))])]),e._v(" "),t("div",{class:e.$style.field},[t("div",{class:e.$style.label,attrs:{required:""}},[e._v("安全庫存")]),e._v(" "),t("FieldInput",{class:e.$style.input,attrs:{placeholder:"庫存低於此數將提醒"},model:{value:e.data.safety_stock,callback:function(t){e.$set(e.data,"safety_stock",t)},expression:"data.safety_stock"}})],1)]),e._v(" "),t("div",{class:e.$style["btn-wrap"]},[t("div"),e._v(" "),t("div",{class:e.$style["close-btn"],on:{click:function(t){return e.$emit("close")}}},[e._v("取消")]),e._v(" "),t("div",{class:e.$style["save-btn"],on:{click:e.onSave}},[e._v("\n                確認\n            ")])]),e._v(" "),e.errorMsg?t("AlterDialog",{attrs:{msg:e.errorMsg},on:{close:function(t){e.errorMsg=""}}}):e._e()]},proxy:!0}])})}),[],!1,(function(e){this.$style=y.default.locals||y.default}),null,null);t.default=component.exports},760:function(e,t,r){"use strict";var n=r(680),o=r.n(n);r.d(t,"default",(function(){return o.a}))},761:function(e,t,r){var n=r(17)(!1);n.push([e.i,".wrap_ceJQB{flex:1;display:flex;padding:2rem 1.875rem 2.5rem;flex-direction:column;box-sizing:border-box}.search-wrap_tywwE{margin-top:1.25rem;height:2.813rem}.feature_lpnUL{display:flex;margin-top:.938rem;height:3.438rem;justify-content:flex-end;align-items:center}.select_M9uNo{width:21.875rem;height:2.813rem}",""]),n.locals={wrap:"wrap_ceJQB","search-wrap":"search-wrap_tywwE",feature:"feature_lpnUL",select:"select_M9uNo"},e.exports=n},796:function(e,t,r){"use strict";r.r(t);r(40),r(235),r(26),r(21),r(34),r(22),r(35);var n=r(27),o=r(10),c=(r(28),r(12),r(234),r(39),r(51),r(13)),l=r(660),f=r(633),d=r(612),h=r(726);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{TableArea:l.default,SearchBar:f.default,FieldSelect:d.default,SafeStockDialog:h.default},data:function(){return{search:{type:""},column:[{prop:"SKU",label:"商品編號"},{prop:"cargo_name",label:"商品名稱"},{prop:"cargo_type_name",label:"商品類型"},{prop:"safety_stock",label:"安全庫存"},{prop:"stock",label:"庫存總數量"},{prop:"warehouse_name",label:"存放儲位"},{prop:"function",label:"",detail:[{key:"view",icon:"eye",func:this.onView},{key:"other",label:"安全庫存設定",func:this.setSafeStock}]}],rowData:[],searchKeyWord:"",safeStock:null}},computed:y(y({},Object(c.c)("options",{warehouseOption:"getWarehouse"})),{},{tableData:function(){var e=this,t=this.rowData;return this.search.type&&(t=t.filter((function(t){return t.warehouse_id===e.search.type}))),this.searchKeyWord&&(t=t.filter((function(t){return Object.entries(t).some((function(t){var r=Object(n.a)(t,2),o=r[0],c=r[1];return!!e.column.some((function(e){return e.prop===o}))&&"".concat(c).includes(e.searchKeyWord)}))}))),t}}),mounted:function(){this.actionFetchWarehouse(),this.onSearch()},methods:y(y(y({},Object(c.b)(["actionSetToast"])),Object(c.b)("options",["actionFetchWarehouse"])),{},{onSearch:function(){var e=this;this.$axios.$get("/api/warehouseCargo").then((function(t){t.success&&(e.rowData=t.data)}))},onView:function(e){var t=e.id;this.$router.push("/storingStatus/".concat(t))},setSafeStock:function(e){this.safeStock={id:e.id,SKU:e.SKU,cargo_name:e.cargo_name}},close:function(){this.safeStock=null},reload:function(){this.close(),this.onSearch()}})},m=r(760),w=r(7);var component=Object(w.a)(_,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.wrap},[t("SearchBar",{model:{value:e.searchKeyWord,callback:function(t){e.searchKeyWord=t},expression:"searchKeyWord"}}),e._v(" "),t("div",{class:e.$style["search-wrap"]},[t("FieldSelect",{class:e.$style.select,attrs:{options:e.warehouseOption,placeholder:"選擇儲位"},model:{value:e.search.type,callback:function(t){e.$set(e.search,"type",t)},expression:"search.type"}})],1),e._v(" "),t("div",{class:e.$style.feature}),e._v(" "),t("TableArea",{attrs:{"table-data":e.tableData,column:e.column}}),e._v(" "),e.safeStock?t("SafeStockDialog",{attrs:{"safe-stock-data":e.safeStock},on:{close:e.close,reload:e.reload}}):e._e()],1)}),[],!1,(function(e){this.$style=m.default.locals||m.default}),null,null);t.default=component.exports}}]);