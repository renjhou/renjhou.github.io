(window.webpackJsonp=window.webpackJsonp||[]).push([[50,8,13,15,17,21],{609:function(e,t,o){var content=o(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("411a447d",content,!0,{sourceMap:!1})},610:function(e,t,o){var content=o(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("1ddf586a",content,!0,{sourceMap:!1})},611:function(e,t,o){var content=o(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("51162e4c",content,!0,{sourceMap:!1})},612:function(e,t,o){"use strict";o.r(t);o(231);var l={props:{value:{type:[String,Array,Number],default:""},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},allowCreate:{type:Boolean,default:!1},placeholder:{type:String,default:"請選擇"},filterable:{type:Boolean,default:!1}}},r=o(615),n=o(7);var component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("el-select",{class:e.$style.select,attrs:{value:e.value,filterable:e.filterable,multiple:e.multiple,"allow-create":e.allowCreate,"default-first-option":e.allowCreate,placeholder:e.placeholder,disabled:e.disabled,clearable:""},on:{input:function(t){return e.$emit("input",t)}}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports},613:function(e,t,o){var content=o(629);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("02fd0413",content,!0,{sourceMap:!1})},615:function(e,t,o){"use strict";var l=o(609),r=o.n(l);o.d(t,"default",(function(){return r.a}))},616:function(e,t,o){var l=o(17)(!1);l.push([e.i,".select_oWp9J .el-input{height:inherit;font-size:inherit}.select_oWp9J input{height:inherit}.select_oWp9J .el-select__tags-text,.select_oWp9J .el-tag{font-size:inherit}",""]),l.locals={select:"select_oWp9J"},e.exports=l},618:function(e,t,o){"use strict";var l=o(610),r=o.n(l);o.d(t,"default",(function(){return r.a}))},619:function(e,t,o){var l=o(17)(!1);l.push([e.i,".date-picker_-Mwr9{display:inline-block;position:relative}.date-picker_-Mwr9 .el-date-editor{width:inherit;height:inherit;font-size:1.125rem}.date-picker_-Mwr9 input{padding-left:15px!important;width:inherit;height:inherit;font-size:inherit!important}.date-picker_-Mwr9 .el-date-editor--datetimerange{padding-left:70px}.date-picker_-Mwr9.has-icon_ykGcO input{padding-right:15px!important}.label_TxIZx{left:10px}.icon_CtwZa,.label_TxIZx{position:absolute;top:50%;transform:translateY(-50%)}.icon_CtwZa{right:10px}",""]),l.locals={"date-picker":"date-picker_-Mwr9","has-icon":"has-icon_ykGcO",label:"label_TxIZx",icon:"icon_CtwZa"},e.exports=l},620:function(e,t,o){"use strict";o.r(t);var l=o(10),r=(o(231),{props:{value:{type:[String,Number,Date,Array],default:null},type:{type:String,default:"date"},label:{type:String,default:""},icon:{type:Boolean,default:!0}}}),n=o(618),c=o(7);var component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:[e.$style["date-picker"],Object(l.a)({},e.$style["has-icon"],e.icon)]},[t("el-date-picker",{attrs:{value:e.value,type:e.type,placeholder:"選擇日期","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",clearable:!1,"prefix-icon":" ","range-separator":"~"},on:{input:function(t){return e.$emit("input",t)}}}),e._v(" "),e.label?t("div",{class:e.$style.label},[e._v(e._s(e.label))]):e._e(),e._v(" "),e.icon?t("fa-icon",{class:e.$style.icon,attrs:{icon:["far","calendar"]}}):e._e()],1)}),[],!1,(function(e){this.$style=n.default.locals||n.default}),null,null);t.default=component.exports},622:function(e,t,o){"use strict";o.d(t,"b",(function(){return l})),o.d(t,"a",(function(){return r}));o(12),o(109),o(40),o(87),o(232);var l=function(e){if(!e)return"0";var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},r=function(e){return new Intl.NumberFormat("zh-TW",{maximumSignificantDigits:10,style:"currency",currency:"NTD"}).format(e)}},623:function(e,t,o){"use strict";var l=o(611),r=o.n(l);o.d(t,"default",(function(){return r.a}))},624:function(e,t,o){var l=o(17)(!1);l.push([e.i,".wrap_S1tQE{display:flex;padding:0 2.813rem;height:7.5rem;align-items:center;justify-content:space-between;box-shadow:0 1px 2px rgba(0,0,0,.25)}.label_R9lRg{font-size:1.375rem}.btn_CW11\\+,.btn-wrap_bKATz{display:flex;align-items:center;justify-content:center}.btn_CW11\\+{width:8.438rem;height:2.813rem;border-radius:5px;font-size:1.25rem;cursor:pointer}.delete_SWdbB{margin-right:3.75rem;background:#c02020}.delete_SWdbB,.edit_7z6fF{color:#fff}.edit_7z6fF{background:#1961b6}.edit_7z6fF,.save_bAory{margin-right:1.25rem}.save_bAory{background:#fcaa4a}.cancel_LueNp{border:1px solid #8c8c8c}.icon_dvsNw{margin-right:.625rem;width:1.25rem;height:1.25rem}",""]),l.locals={wrap:"wrap_S1tQE",label:"label_R9lRg",btn:"btn_CW11+","btn-wrap":"btn-wrap_bKATz",delete:"delete_SWdbB btn_CW11+",edit:"edit_7z6fF btn_CW11+",save:"save_bAory btn_CW11+",cancel:"cancel_LueNp btn_CW11+",icon:"icon_dvsNw"},e.exports=l},625:function(e,t,o){"use strict";o.r(t);var l={props:{type:{type:String,default:"view"},label:{type:String,required:!0},noShowDelete:{type:Boolean,default:!1},noShowEdit:{type:Boolean,default:!1},noShowSave:{type:Boolean,default:!1}},computed:{isView:function(){return"view"===this.type},labelText:function(){return"view"===this.type?"檢視".concat(this.label):"add"===this.type?"新增".concat(this.label):"custom"===this.type?this.label:"編輯".concat(this.label)}}},r=o(623),n=o(7);var component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.wrap},[t("div",{class:e.$style.label},[e._v(e._s(e.labelText))]),e._v(" "),t("div",{class:e.$style["btn-wrap"]},[e.$slots.default?e._t("default"):[e.isView?[e.noShowDelete?e._e():t("div",{class:e.$style.delete,on:{click:function(t){return e.$emit("delete")}}},[t("fa-icon",{class:e.$style.icon,attrs:{icon:"trash"}}),e._v("\n                    刪除\n                ")],1),e._v(" "),e.noShowEdit?e._e():t("div",{class:e.$style.edit,on:{click:function(t){return e.$emit("edit")}}},[t("fa-icon",{class:e.$style.icon,attrs:{icon:"pen"}}),e._v("\n                    編輯\n                ")],1)]:e.noShowSave?e._e():t("div",{class:e.$style.save,on:{click:function(t){return e.$emit("save")}}},[e._v("\n                儲存\n            ")]),e._v(" "),t("div",{class:e.$style.cancel,on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n                取消\n            ")])]],2)])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports},628:function(e,t,o){"use strict";var l=o(613),r=o.n(l);o.d(t,"default",(function(){return r.a}))},629:function(e,t,o){var l=o(17)(!1);l.push([e.i,'.table_mY8UH{border:1px solid #8c8c8c}.table_mY8UH .el-radio{margin-right:10px}.table_mY8UH .el-radio__label{padding-left:5px}.table_mY8UH .el-input--suffix .el-input__inner{padding-right:15px!important}.table_mY8UH .el-checkbox__inner{width:1.25rem;height:1.25rem;border:1px solid #2a2a2a;border-radius:1px;background-color:transparent;background-color:initial}.table_mY8UH .el-checkbox__inner:after{top:50%;left:25%;width:.3rem;height:.7rem}.table_mY8UH .el-checkbox__input.is-checked .el-checkbox__inner:after{transform:rotate(45deg) scaleY(1) translate(-50%,-50%)}.table_mY8UH .el-checkbox__input.is-indeterminate .el-checkbox__inner:before{top:50%}.table_mY8UH .sort-caret.ascending,.table_mY8UH .sort-caret.descending{border:initial;left:auto;right:auto}.table_mY8UH .sort-caret.ascending{position:absolute;top:47%;left:6px;width:1px;height:30%;background:#333;transform:translateY(-50%)}.table_mY8UH .sort-caret.ascending:before{content:"";position:absolute;top:-1px;left:-2.5px;border-color:transparent transparent #333;border-style:solid;border-width:0 3px 3px}.table_mY8UH .sort-caret.descending{position:absolute;top:47%;left:13px;width:1px;height:30%;background:#333;transform:translateY(-50%)}.table_mY8UH .sort-caret.descending:after{content:"";position:absolute;left:-2.5px;bottom:-1px;border-color:#333 transparent transparent;border-style:solid;border-width:3px 3px 0}.table_mY8UH th{font-weight:400}.icon_gkwIt{margin:0 1.813rem;width:1.25rem;height:1.25rem;text-align:center;transform:rotate(-45deg)}.left-icon_DaE\\+U{transform:rotate(45deg)}.options-icon_wrHhb{margin-right:1rem;width:1.25rem;height:1.25rem;cursor:pointer}.options-icon_wrHhb:last-child{margin-right:1.25rem}.options-icon_wrHhb.view-icon_Z9iCc{width:1.375rem;height:1rem}.options-icon_wrHhb.delete-icon_FbuLQ{width:1.125rem}.operate_x05ot{justify-content:flex-end;font-size:1rem}.empty_gJfXa,.operate_x05ot{display:flex;align-items:center}.empty_gJfXa{justify-content:center;font-size:1.5rem}.btn_3jk-A,.options_McJ7b{cursor:pointer}.btn_3jk-A{display:flex;max-width:6rem;height:2.25rem;border-radius:.375rem;color:#fff;font-size:1rem;align-items:center;justify-content:center}.yet_6utED{background:#c02020}.done_aj33C,.yet_6utED{}.done_aj33C{background:#4d8831}.remove_qv16R{width:2rem;height:2rem;background:#c02020}.remove_qv16R>svg{color:#fff}.plus_bHaj8{width:2rem;height:2rem;background:#4d8831}.plus_bHaj8>svg{color:#fff}.input_CQA1Z{width:100%;height:3rem}',""]),l.locals={table:"table_mY8UH",icon:"icon_gkwIt","left-icon":"left-icon_DaE+U icon_gkwIt","options-icon":"options-icon_wrHhb","view-icon":"view-icon_Z9iCc","delete-icon":"delete-icon_FbuLQ",operate:"operate_x05ot",empty:"empty_gJfXa",btn:"btn_3jk-A",options:"options_McJ7b",yet:"yet_6utED btn_3jk-A",done:"done_aj33C btn_3jk-A",remove:"remove_qv16R btn_3jk-A",plus:"plus_bHaj8 btn_3jk-A",input:"input_CQA1Z"},e.exports=l},632:function(e,t,o){"use strict";o.r(t);var l=o(622),r=o(107),n=o(612),c=o(620),d={components:{FieldInput:r.default,FieldSelect:n.default,FieldDatePick:c.default},props:{tableData:{type:Array,default:function(){return[]}},column:{type:Array,default:function(){return[]}},selection:{type:Boolean,default:!1},typeLabel:{type:String,default:""},border:{type:Boolean,default:!0},emptyIconLeft:{type:Boolean,default:!1},fit:{type:Boolean,default:!0}},methods:{toCurrency:l.b,headerCellStyle:function(e){var t=e.row,o=e.columnIndex,l="function"===this.column[this.column.length-1].prop;return"selection"===t[o].type||l&&o>t.length-3?{color:"#333",borderColor:"#333",borderRight:0}:{color:"#333",borderColor:"#333"}}}},f=o(628),_=o(7);var component=Object(_.a)(d,(function(){var e=this,t=e._self._c;return t("el-table",{class:e.$style.table,attrs:{data:e.tableData,height:"100%",stripe:"",border:e.border,size:"mini","header-cell-style":e.headerCellStyle,"row-style":{height:"3.125rem",background:"#E0E0E0"},"cell-style":{borderRight:0},fit:e.fit},on:{"selection-change":function(t){return e.$emit("selectionChange",t)}},scopedSlots:e._u([{key:"empty",fn:function(){return[e.typeLabel?t("div",{class:e.$style.empty},[e.emptyIconLeft?t("fa-icon",{class:e.$style["left-icon"],attrs:{icon:"arrow-left"}}):e._e(),e._v("\n            "+e._s("動手新增".concat(e.typeLabel,"吧！"))+"\n            "),e.emptyIconLeft?e._e():t("fa-icon",{class:e.$style.icon,attrs:{icon:"arrow-right"}})],1):e._e()]},proxy:!0}])},[e._v(" "),e.selection?t("el-table-column",{attrs:{type:"selection","cell-style":{borderRight:0},width:"50"}}):e._e(),e._v(" "),e._l(e.column,(function(o){return t("el-table-column",{key:o.prop,attrs:{prop:o.prop,label:o.label,sortable:o.sortable,width:o.width},scopedSlots:e._u([{key:"default",fn:function(l){var r;return["remove"===o.prop&&l.row.isHideRemove?[t("div",{class:e.$style.remove,on:{click:function(e){return o.func(l.row)}}},[t("fa-icon",{attrs:{icon:"times"}})],1)]:"add"===o.prop?[t("div",{class:l.row.id?e.$style.plus:e.$style.remove,on:{click:function(e){return o.func(l.row,l.$index)}}},[t("fa-icon",{attrs:{icon:l.row.id?"plus":"minus"}})],1)]:"index"===o.prop?[e._v("\n                "+e._s(l.$index+1)+"\n            ")]:"function"===o.prop?[t("div",{class:e.$style.operate},e._l(o.detail,(function(o){return t("div",{key:"options-".concat(o.key),class:e.$style.options,on:{click:function(e){return o.func(l.row)}}},[o.icon?[l.row.isHideEdit&&"edit"===o.key||l.row.isHideDelete&&"delete"===o.key||l.row.isHideCheck&&"check"===o.key?void 0:t("img",{class:[e.$style["options-icon"],e.$style["".concat(o.key,"-icon")]],attrs:{src:"/".concat(o.key,".png")}})]:t("div",[e._v("\n                            "+e._s(o.label)+"\n                        ")])],2)})),0)]:"purchases_status_name"===o.prop&&0===l.row.inspections_status?[t("div",{class:0===l.row.purchases_status?e.$style.yet:e.$style.done,on:{click:function(e){return o.func(l.row)}}},[e._v("\n                    "+e._s(l.row.purchases_status_name)+"\n                ")])]:o.isInput||null!==(r=o.isInputFun)&&void 0!==r&&r.call(o,l.row)?[t("FieldInput",{class:e.$style.input,attrs:{value:l.row[o.prop]},on:{input:function(t){e.$set(l.row,o.prop,t),"amount"===o.prop&&(l.row.subtotal=l.row[o.prop]*l.row.cost)}}})]:o.isSelect?[t("FieldSelect",{class:e.$style.input,attrs:{options:o.options},model:{value:l.row[o.prop],callback:function(t){e.$set(l.row,o.prop,t)},expression:"scope.row[item.prop]"}})]:o.isDatePicker?[t("FieldDatePick",{class:e.$style.input,attrs:{icon:!1},model:{value:l.row[o.prop],callback:function(t){e.$set(l.row,o.prop,t)},expression:"scope.row[item.prop]"}})]:o.isRadio?e._l(o.options,(function(option){return t("el-radio",{key:option.value,attrs:{label:option.value},model:{value:l.row[o.prop],callback:function(t){e.$set(l.row,o.prop,t)},expression:"scope.row[item.prop]"}},[e._v("\n                    "+e._s(option.label)+"\n                ")])})):[e._v("\n                "+e._s(o.isNumber?e.toCurrency(l.row[o.prop]):l.row[o.prop])+"\n            ")]]}}],null,!0)})}))],2)}),[],!1,(function(e){this.$style=f.default.locals||f.default}),null,null);t.default=component.exports},690:function(e,t,o){var content=o(781);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("7c6a95a4",content,!0,{sourceMap:!1})},780:function(e,t,o){"use strict";var l=o(690),r=o.n(l);o.d(t,"default",(function(){return r.a}))},781:function(e,t,o){var l=o(17)(!1);l.push([e.i,".wrap_hZhYN{flex:1;display:flex;flex-direction:column;box-sizing:border-box}.content-block_wCl9U{display:flex;padding:4.375rem 2.813rem;flex-direction:column;height:100%}.content_\\+KT\\+f{margin-bottom:2rem;border:1px solid #000}.mutli-field_RGT0r{display:flex;border-bottom:1px solid #000}.mutli-field_RGT0r:last-child{border-bottom:initial}.field_rgL1y{display:flex;width:25%;padding:1.75rem .75rem;align-items:center;font-size:1.125rem;border-right:1px solid #000;box-sizing:border-box}.field_rgL1y:last-child{border-right:initial}.field_rgL1y.cargo-name_qZrjG{width:75%}.label_cz422{margin-right:1.25rem;width:6rem;color:#124178}.table-wrap_6Gn2p{position:relative;height:100%;border-top:1px solid #000}.table_dh-jH{position:absolute;width:100%;height:100%;border:initial}.table_dh-jH,.text_J\\+fav{font-size:1.125rem}.text_J\\+fav{margin-bottom:1rem}",""]),l.locals={wrap:"wrap_hZhYN","content-block":"content-block_wCl9U",content:"content_+KT+f","mutli-field":"mutli-field_RGT0r",field:"field_rgL1y","cargo-name":"cargo-name_qZrjG",label:"label_cz422","table-wrap":"table-wrap_6Gn2p",table:"table_dh-jH",text:"text_J+fav"},e.exports=l},808:function(e,t,o){"use strict";o.r(t);o(26),o(21),o(28),o(12),o(34),o(22),o(35);var l=o(10),r=o(13),n=o(625),c=o(632);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{EditBar:n.default,FieldTable:c.default},data:function(){return{id:this.$route.params.id,data:{},column:[{prop:"index",label:"項次",width:"100"},{prop:"production_batch",label:"生產批號"},{prop:"production_date",label:"生產日"},{prop:"expiry_date",label:"到期日"},{prop:"amount",label:"庫存量"}],rowData:[]}},mounted:function(){this.onSearch()},methods:f(f({},Object(r.b)(["actionSetToast"])),{},{onSearch:function(){var e=this;this.$axios.$get("/api/warehouseCargo/".concat(this.id)).then((function(t){t.success&&(e.data=t.data,e.rowData=e.data.detail)}))},onBack:function(){this.$router.push("/storingStatus")}})},h=o(780),y=o(7);var component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.wrap},[t("EditBar",{attrs:{label:"庫存","no-show-delete":"","no-show-edit":"","no-show-save":""},on:{cancel:e.onBack}}),e._v(" "),t("div",{class:e.$style["content-block"]},[t("div",{class:e.$style.content},[t("div",{class:e.$style["mutli-field"]},[t("div",{class:[e.$style.field,e.$style.sku]},[t("div",{class:e.$style.label},[e._v("商品編號")]),e._v(" "),t("div",[e._v(e._s(e.data.SKU))])]),e._v(" "),t("div",{class:[e.$style.field,e.$style["cargo-name"]]},[t("div",{class:e.$style.label},[e._v("商品名稱")]),e._v(" "),t("div",[e._v(e._s(e.data.cargo_name))])])]),e._v(" "),t("div",{class:e.$style["mutli-field"]},[t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("存放儲位")]),e._v(" "),t("div",[e._v(e._s(e.data.warehouse_name))])]),e._v(" "),t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("即期天數")]),e._v(" "),t("div",[e._v(e._s(e.data.spot_days))])]),e._v(" "),t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("安全庫存")]),e._v(" "),t("div",[e._v(e._s(e.data.safety_stock))])]),e._v(" "),t("div",{class:e.$style.field},[t("div",{class:e.$style.label},[e._v("庫存總量")]),e._v(" "),t("div",[e._v(e._s(e.data.stock))])])])]),e._v(" "),t("div",{class:e.$style.text},[e._v("庫存紀錄")]),e._v(" "),t("div",{class:e.$style["table-wrap"]},[t("FieldTable",{class:e.$style.table,attrs:{border:!1,"table-data":e.rowData,column:e.column}})],1)])],1)}),[],!1,(function(e){this.$style=h.default.locals||h.default}),null,null);t.default=component.exports}}]);