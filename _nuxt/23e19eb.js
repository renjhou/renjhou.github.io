(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{652:function(e,t,r){var content=r(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("14fe010a",content,!0,{sourceMap:!1})},714:function(e,t,r){"use strict";var n=r(652),c=r.n(n);r.d(t,"default",(function(){return c.a}))},715:function(e,t,r){var n=r(17)(!1);n.push([e.i,".wrap_Z5TYb{width:100%}.content_SIW6N{padding:1.063rem 2.813rem}.content_SIW6N table{border-collapse:collapse;width:100%}.content_SIW6N tr{height:4.875rem}.content_SIW6N td{border:1px solid #8c8c8c}.field_3ebqx{display:flex;padding-left:.813rem}.field_3ebqx.week_1X7Rb{padding-top:1.75rem;padding-bottom:1.813rem}.label_wbu2E{margin-right:1.25rem;color:#124178}.week_1X7Rb{display:flex;margin-bottom:2.063rem}.week_1X7Rb:last-child{margin-bottom:0}.title_2LyNk{margin-right:3.125rem}.info_CpiXT{margin-top:2.5rem;font-size:1.125rem}.info_CpiXT>div{margin-bottom:1.25rem}",""]),n.locals={wrap:"wrap_Z5TYb",content:"content_SIW6N",field:"field_3ebqx",week:"week_1X7Rb",label:"label_wbu2E",title:"title_2LyNk",info:"info_CpiXT"},e.exports=n},728:function(e,t,r){"use strict";r.r(t);r(36);var n=r(10),c=r(27),o=(r(12),r(22),r(234),r(108),r(57),r(26),r(21),r(28),r(34),r(35),r(13)),l=r(653),d=r(625),v=r(236);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{EditBar:d.default,DeleteDialog:v.default},props:{curData:{type:Object,required:!0},curBusiness:{type:Object,required:!0}},data:function(){return{displayDelDialog:!1,weekList:[{key:"monday",title:"星期一"},{key:"tuesday",title:"星期二"},{key:"wednesday",title:"星期三"},{key:"thursday",title:"星期四"},{key:"friday",title:"星期五"},{key:"saturday",title:"星期六"},{key:"sunday",title:"星期日"}]}},computed:{businessData:function(){var e={};return Object.entries(this.curBusiness).forEach((function(t){var r=Object(c.a)(t,2),n=r[0],o=r[1];e[n]="close"===o?"店休":"".concat(o.slice(0,2),":").concat(o.slice(2,4)," ~ ").concat(o.slice(5,7),":").concat(o.slice(7,9))})),e},createUser:function(){if(!this.curData.create_records)return"";var e=this.curData.create_records,t=e.user,r=e.created_at,n=Object(l.a)(new Date(r),"yyyy/MM/dd HH:mm:ss");return"".concat(t.name," ").concat(n)},updateUser:function(){if(!this.curData.update_records)return"";var e=this.curData.update_records,t=e.user,r=e.created_at,n=Object(l.a)(new Date(r),"yyyy/MM/dd HH:mm:ss");return"".concat(t.name," ").concat(n)}},methods:_(_({},Object(o.b)(["actionSetToast"])),{},{getFranchiseStoreType:function(e){return 0===e?"直營":"加盟"},deleteStore:function(){var e=this;this.$axios.$delete("/api/store/riverBird/".concat(this.$route.params.id)).then((function(t){t.success&&(e.actionSetToast("删除成功"),e.$router.push("/retails"))}))}})},m=r(714),h=r(7);var component=Object(h.a)(y,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.wrap},[t("EditBar",{attrs:{type:"view",label:"分店"},on:{cancel:function(t){return e.$router.push("/retails")},edit:function(t){return e.$router.push("/retails/".concat(e.$route.params.id,"?mode=edit"))},delete:function(t){e.displayDelDialog=!0}}}),e._v(" "),t("div",{class:e.$style.content},[t("table",[t("tr",[t("td",[t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("分店店號")]),e._v(" "),t("div",[e._v(e._s(e.curData.store_number))])])]),e._v(" "),t("td",[t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("分店名稱")]),e._v(" "),t("div",[e._v(e._s(e.curData.name))])])]),e._v(" "),t("td",[t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("分店電話")]),e._v(" "),t("div",[e._v(e._s(e.curData.phone))])])])]),e._v(" "),t("tr",[t("td",{attrs:{colspan:3}},[t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("分店地址")]),e._v(" "),t("div",[e._v(e._s(e.curData.address))])])])]),e._v(" "),t("tr",[t("td",{attrs:{colspan:3}},[t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("經營模式")]),e._v(" "),t("div",[e._v(e._s(e.getFranchiseStoreType(e.curData.franchise_store)))])])])]),e._v(" "),t("tr",[t("td",{attrs:{colspan:3}},[t("div",{class:[e.$style.field,e.$style.week]},[t("div",{class:e.$style.label},[e._v("營業時間")]),e._v(" "),t("div",e._l(e.weekList,(function(r){return t("div",{key:r.key,class:e.$style.week},[t("div",{class:e.$style.title},[e._v("\n                                    "+e._s(r.title)+"\n                                ")]),e._v(" "),t("div",{class:e.$style["open-time"]},[e._v("\n                                    "+e._s(e.businessData[r.key])+"\n                                ")])])})),0)])])])]),e._v(" "),t("div",{class:e.$style.info},[t("div",[e._v("建檔人員 : "+e._s(e.createUser))]),e._v(" "),t("div",[e._v("異動人員 : "+e._s(e.updateUser))])])]),e._v(" "),e.displayDelDialog?t("DeleteDialog",{on:{delete:e.deleteStore,close:function(t){e.displayDelDialog=!1}}}):e._e()],1)}),[],!1,(function(e){this.$style=m.default.locals||m.default}),null,null);t.default=component.exports},806:function(e,t,r){"use strict";r.r(t);r(26),r(12),r(57);var n=r(787),c=r(728),o={components:{EditStore:n.default,ViewStore:c.default},data:function(){return{storeId:this.$route.params.id,mode:this.$route.query.mode,store:"",businessHours:""}},computed:{curBusinessData:function(){var e=this.businessHours;return"ViewStore"===this.curMode?e:Object.keys(e).reduce((function(t,r){return t[r]={},t[r].close="close"===e[r],t[r].time=[["00","00"],["00","00"]],"close"!==e[r]&&(t[r].time=[[e[r].slice(0,2),e[r].slice(2,4)],[e[r].slice(5,7),e[r].slice(7,9)]]),t}),{})},curMode:function(){return"edit"===this.$route.query.mode?"EditStore":"ViewStore"}},created:function(){this.getStore()},methods:{getStore:function(){var e=this;this.$axios.$get("api/store/riverBird/".concat(this.storeId)).then((function(t){if(t.success){e.store=t.data;var r=JSON.parse(t.data.business_hours);e.businessHours=r}}))}}},l=r(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return e.curMode&&Object.keys(e.curBusinessData).length?t(e.curMode,{tag:"component",attrs:{"cur-data":e.store,"cur-business":e.curBusinessData}}):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);