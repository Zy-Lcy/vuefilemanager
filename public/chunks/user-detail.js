(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"+Pqb":function(t,e,a){"use strict";var i={name:"ProgressBar",props:["progress"]},o=(a("IOJe"),a("KHd+")),r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress-bar"},[e("span",{style:{width:this.progress+"%"}})])}),[],!1,null,"f2acb080",null);e.a=r.exports},"13Td":function(t,e,a){"use strict";var i={name:"SetupBox",props:["title","description","theme"]},o=(a("q7ZV"),a("KHd+")),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setup-box",class:t.theme},[a("b",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),t._t("default")],2)}),[],!1,null,"78182d46",null);e.a=r.exports},"23b/":function(t,e,a){"use strict";a.r(e);var i=a("o0o1"),o=a.n(i),r=a("KnjL"),d=a("gahf"),s=a("qefO"),n=a("A5+z"),l=a("xnZf"),c=a("4TWA"),p=a("eZ9V"),f=a("Nv84"),u=a("13Td"),v=a("TJPC"),m=a("L2JU"),b=a("xCqy"),g=a("vDqi"),x=a.n(g);function h(t,e,a,i,o,r,d){try{var s=t[r](d),n=s.value}catch(t){return void a(t)}s.done?e(n):Promise.resolve(n).then(i,o)}function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function _(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var k={name:"UserDetail",props:["user"],components:{PageTabGroup:d.a,PageTab:s.a,InfoBox:r.a,FormLabel:p.a,ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,StorageItemDetail:l.a,SelectInput:c.a,ButtonBase:f.a,SetupBox:u.a,required:v.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){_(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(m.b)(["roles","config"])),data:function(){return{isLoading:!1,isSendingRequest:!1,userRole:void 0}},methods:{changeRole:function(){var t,e=this;return(t=o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.changeRole.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:e.isSendingRequest=!0,x.a.post(e.$store.getters.api+"/users/"+e.$route.params.id+"/role",{attributes:{role:e.userRole},_method:"patch"}).then((function(){e.$refs.changeRole.reset(),e.isSendingRequest=!1,e.$emit("reload-user"),b.a.$emit("toaster",{type:"success",message:e.$t("toaster.changed_user")})})).catch((function(){e.isSendingRequest=!1,b.a.$emit("alert:open",{title:e.$t("popup_error.title"),message:e.$t("popup_error.message")})}));case 7:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(i,o){var r=t.apply(e,a);function d(t){h(r,i,o,d,s,"next",t)}function s(t){h(r,i,o,d,s,"throw",t)}d(void 0)}))})()}}},w=(a("5NBh"),a("KHd+")),C=Object(w.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageTab",{staticClass:"form-fixed-width"},[a("PageTabGroup",[a("FormLabel",[t._v("\n            "+t._s(t.$t("user_box_role.title"))+"\n        ")]),t._v(" "),a("InfoBox",[a("p",[t._v(t._s(t.$t("user_box_role.description")))])]),t._v(" "),a("ValidationObserver",{ref:"changeRole",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),t.changeRole(e)}},scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[a("ValidationProvider",{staticClass:"block-wrapper",attrs:{tag:"div",mode:"passive",name:"Role",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("label",[t._v(t._s(t.$t("admin_page_user.select_role"))+":")]),t._v(" "),a("div",{staticClass:"single-line-form"},[a("SelectInput",{attrs:{options:t.roles,placeholder:t.$t("admin_page_user.select_role"),isError:i[0]},model:{value:t.userRole,callback:function(e){t.userRole=e},expression:"userRole"}}),t._v(" "),a("ButtonBase",{staticClass:"submit-button",attrs:{loading:t.isSendingRequest,disabled:t.isSendingRequest,type:"submit","button-style":"theme"}},[t._v("\n                        "+t._s(t.$t("admin_page_user.save_role"))+"\n                    ")])],1),t._v(" "),i[0]?a("span",{staticClass:"error-message"},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})]}}])})],1),t._v(" "),a("PageTabGroup",[a("div",{staticClass:"form block-form"},[a("FormLabel",[t._v(t._s(t.$t("admin_page_user.label_person_info")))]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("page_registration.label_email")))]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{placeholder:t.$t("page_registration.placeholder_email"),type:"email",disabled:""},domProps:{value:t.user.data.attributes.email}})])]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("page_registration.label_name")))]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{placeholder:t.$t("page_registration.placeholder_name"),type:"text",disabled:""},domProps:{value:t.user.data.attributes.name}})])])],1)]),t._v(" "),t.config.isSaaS?a("PageTabGroup",[a("div",{staticClass:"form block-form"},[a("FormLabel",[t._v(t._s(t.$t("user_settings.title_billing")))]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("user_settings.name"))+":")]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{type:"text",disabled:""},domProps:{value:t.user.relationships.settings.data.attributes.billing_name}})])]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("user_settings.address"))+":")]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{type:"text",disabled:""},domProps:{value:t.user.relationships.settings.data.attributes.billing_address}})])]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("user_settings.country"))+":")]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{type:"text",disabled:""},domProps:{value:t.user.relationships.settings.data.attributes.billing_country}})])]),t._v(" "),a("div",{staticClass:"wrapper-inline"},[a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("user_settings.city"))+":")]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{type:"text",disabled:""},domProps:{value:t.user.relationships.settings.data.attributes.billing_city}})])]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("user_settings.postal_code"))+":")]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{type:"text",disabled:""},domProps:{value:t.user.relationships.settings.data.attributes.billing_postal_code}})])])]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("user_settings.state"))+":")]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{type:"text",disabled:""},domProps:{value:t.user.relationships.settings.data.attributes.billing_state}})])]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v(t._s(t.$t("user_settings.phone_number"))+":")]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{type:"text",disabled:""},domProps:{value:t.user.relationships.settings.data.attributes.billing_phone_number}})])])],1)]):t._e()],1)}),[],!1,null,"1d1ff680",null);e.default=C.exports},"2t7t":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"",""])},"3xcg":function(t,e,a){"use strict";var i=a("ZPo1");a.n(i).a},"5NBh":function(t,e,a){"use strict";var i=a("qOEg");a.n(i).a},"64pX":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".form-label[data-v-68dacc2c]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-68dacc2c]{margin-right:10px}.form-label .icon path[data-v-68dacc2c]{stroke:#00bc7e}.form-label .label[data-v-68dacc2c]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-68dacc2c]{color:#bec6cf}}",""])},"6puq":function(t,e,a){var i=a("Scmj");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(t.exports=i.locals)},"9Gqu":function(t,e,a){var i=a("xbTq");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(t.exports=i.locals)},DRpa:function(t,e,a){var i=a("64pX");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(t.exports=i.locals)},FChJ:function(t,e,a){"use strict";var i=a("6puq");a.n(i).a},"G9/n":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".progress-bar[data-v-f2acb080]{width:100%;height:5px;background:#f4f5f6;margin-top:5px;border-radius:10px}.progress-bar span[data-v-f2acb080]{background:#00bc7e;display:block;height:100%;border-radius:10px;max-width:100%}@media (prefers-color-scheme:dark){.progress-bar[data-v-f2acb080]{background:#1e2024}}@media only screen and (min-width:680px) and (prefers-color-scheme:dark){.progress-bar[data-v-f2acb080]{background:#1e2024}}",""])},IOJe:function(t,e,a){"use strict";var i=a("OGj5");a.n(i).a},KnjL:function(t,e,a){"use strict";var i={name:"InfoBox",props:["type"]},o=(a("l3ga"),a("KHd+")),r=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"0cded0f2",null);e.a=r.exports},MOol:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".detail-storage-item[data-v-8c244edc]{margin-bottom:35px}.detail-storage-item.disk .icon circle[data-v-8c244edc],.detail-storage-item.disk .icon line[data-v-8c244edc],.detail-storage-item.disk .icon path[data-v-8c244edc],.detail-storage-item.disk .icon polygon[data-v-8c244edc],.detail-storage-item.disk .icon polyline[data-v-8c244edc],.detail-storage-item.disk .icon rect[data-v-8c244edc]{stroke:#1b2539}.detail-storage-item.disk .storage-progress[data-v-8c244edc] span{background:#1b2539}.detail-storage-item.images .icon circle[data-v-8c244edc],.detail-storage-item.images .icon line[data-v-8c244edc],.detail-storage-item.images .icon path[data-v-8c244edc],.detail-storage-item.images .icon polygon[data-v-8c244edc],.detail-storage-item.images .icon polyline[data-v-8c244edc],.detail-storage-item.images .icon rect[data-v-8c244edc]{stroke:#9d66fe}.detail-storage-item.images .storage-progress[data-v-8c244edc] span{background:#9d66fe}.detail-storage-item.videos .icon circle[data-v-8c244edc],.detail-storage-item.videos .icon line[data-v-8c244edc],.detail-storage-item.videos .icon path[data-v-8c244edc],.detail-storage-item.videos .icon polygon[data-v-8c244edc],.detail-storage-item.videos .icon polyline[data-v-8c244edc],.detail-storage-item.videos .icon rect[data-v-8c244edc]{stroke:#ffbd2d}.detail-storage-item.videos .storage-progress[data-v-8c244edc] span{background:#ffbd2d}.detail-storage-item.audios .icon circle[data-v-8c244edc],.detail-storage-item.audios .icon line[data-v-8c244edc],.detail-storage-item.audios .icon path[data-v-8c244edc],.detail-storage-item.audios .icon polygon[data-v-8c244edc],.detail-storage-item.audios .icon polyline[data-v-8c244edc],.detail-storage-item.audios .icon rect[data-v-8c244edc]{stroke:#fe66a1}.detail-storage-item.audios .storage-progress[data-v-8c244edc] span{background:#fe66a1}.detail-storage-item.documents .icon circle[data-v-8c244edc],.detail-storage-item.documents .icon line[data-v-8c244edc],.detail-storage-item.documents .icon path[data-v-8c244edc],.detail-storage-item.documents .icon polygon[data-v-8c244edc],.detail-storage-item.documents .icon polyline[data-v-8c244edc],.detail-storage-item.documents .icon rect[data-v-8c244edc]{stroke:#fe6057}.detail-storage-item.documents .storage-progress[data-v-8c244edc] span{background:#fe6057}.detail-storage-item.others .icon circle[data-v-8c244edc],.detail-storage-item.others .icon line[data-v-8c244edc],.detail-storage-item.others .icon path[data-v-8c244edc],.detail-storage-item.others .icon polygon[data-v-8c244edc],.detail-storage-item.others .icon polyline[data-v-8c244edc],.detail-storage-item.others .icon rect[data-v-8c244edc]{stroke:#1b2539}.detail-storage-item.others .storage-progress[data-v-8c244edc] span{background:#1b2539}.header-storage-item[data-v-8c244edc]{display:flex;align-items:flex-start;margin-bottom:10px}.header-storage-item .icon[data-v-8c244edc]{width:35px}.header-storage-item .type[data-v-8c244edc]{font-size:.9375em;color:#1b2539}.header-storage-item .total-size[data-v-8c244edc]{font-size:.625em;display:block;color:rgba(27,37,57,.7)}@media (prefers-color-scheme:dark){.header-storage-item .type[data-v-8c244edc]{color:#bec6cf}.header-storage-item .total-size[data-v-8c244edc]{color:#7d858c}.detail-storage-item.disk .icon circle[data-v-8c244edc],.detail-storage-item.disk .icon line[data-v-8c244edc],.detail-storage-item.disk .icon path[data-v-8c244edc],.detail-storage-item.disk .icon polygon[data-v-8c244edc],.detail-storage-item.disk .icon polyline[data-v-8c244edc],.detail-storage-item.disk .icon rect[data-v-8c244edc],.detail-storage-item.others .icon circle[data-v-8c244edc],.detail-storage-item.others .icon line[data-v-8c244edc],.detail-storage-item.others .icon path[data-v-8c244edc],.detail-storage-item.others .icon polygon[data-v-8c244edc],.detail-storage-item.others .icon polyline[data-v-8c244edc],.detail-storage-item.others .icon rect[data-v-8c244edc]{stroke:#41454e}.detail-storage-item.disk .storage-progress[data-v-8c244edc] span,.detail-storage-item.others .storage-progress[data-v-8c244edc] span{background:#41454e}}",""])},OGj5:function(t,e,a){var i=a("G9/n");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(t.exports=i.locals)},POg4:function(t,e,a){"use strict";var i=a("DRpa");a.n(i).a},QjjE:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".setup-box[data-v-78182d46]{padding:20px;border-radius:8px;margin-bottom:30px}.setup-box .title[data-v-78182d46]{font-size:1.3125em;margin-bottom:5px;display:block;font-weight:700}.setup-box .description[data-v-78182d46]{font-size:.9375em;line-height:1.5;margin-bottom:20px}.setup-box.base[data-v-78182d46],.setup-box.danger[data-v-78182d46]{background:#f4f5f6}.setup-box.danger .title[data-v-78182d46]{color:#fd397a}.setup-box[data-v-78182d46] .input-area,.setup-box[data-v-78182d46] input .input-area,.setup-box[data-v-78182d46] input[type=number],.setup-box[data-v-78182d46] input[type=text]{background:#fff}.setup-box[data-v-78182d46] .form{margin-top:20px}.setup-box[data-v-78182d46] .form.block-form{max-width:450px}.setup-box[data-v-78182d46] .form.block-form .single-line-form{display:flex}.setup-box[data-v-78182d46] .form.block-form .single-line-form .submit-button{margin-left:20px}@media only screen and (max-width:960px){.setup-box[data-v-78182d46] .form.block-form{max-width:100%}.setup-box[data-v-78182d46] .form input{min-width:0}}@media only screen and (max-width:690px){.setup-box[data-v-78182d46]{padding:15px}.setup-box .title[data-v-78182d46]{font-size:1.0625em;margin-bottom:10px}.setup-box .description[data-v-78182d46]{font-size:.875em}.setup-box[data-v-78182d46] .form.block-form .single-line-form{display:block}.setup-box[data-v-78182d46] .form.block-form .single-line-form .submit-button{margin-left:0;margin-top:10px}}@media (prefers-color-scheme:dark){.setup-box.base[data-v-78182d46],.setup-box.danger[data-v-78182d46]{background:#1e2024}.setup-box[data-v-78182d46] .input-area,.setup-box[data-v-78182d46] input .input-area,.setup-box[data-v-78182d46] input[type=number],.setup-box[data-v-78182d46] input[type=text]{background:#111314}}",""])},Scmj:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".page-tab-group[data-v-0b65ec54]{margin-bottom:65px}",""])},ZPo1:function(t,e,a){var i=a("MOol");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(t.exports=i.locals)},eZ9V:function(t,e,a){"use strict";var i={name:"FormLabel",components:{Edit2Icon:a("CjXH").m}},o=(a("POg4"),a("KHd+")),r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-label"},[e("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),e("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"68dacc2c",null);e.a=r.exports},gahf:function(t,e,a){"use strict";var i={name:"PageTabGroup"},o=(a("FChJ"),a("KHd+")),r=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"0b65ec54",null);e.a=r.exports},l3ga:function(t,e,a){"use strict";var i=a("9Gqu");a.n(i).a},nVjG:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".form[data-v-1d1ff680]{max-width:700px}.form.inline-form[data-v-1d1ff680]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-1d1ff680]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-1d1ff680]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-1d1ff680]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-1d1ff680]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-1d1ff680]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-1d1ff680]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-1d1ff680]:last-child{margin-bottom:0}.form.block-form .button[data-v-1d1ff680]{margin-top:50px}.form .inline-wrapper[data-v-1d1ff680]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-1d1ff680]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-1d1ff680]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-1d1ff680]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-1d1ff680]{display:flex}.single-line-form .submit-button[data-v-1d1ff680]{margin-left:20px}.error-message[data-v-1d1ff680]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-1d1ff680]{width:100%}input[type=email][data-v-1d1ff680],input[type=number][data-v-1d1ff680],input[type=password][data-v-1d1ff680],input[type=text][data-v-1d1ff680],textarea[data-v-1d1ff680]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-1d1ff680],input[type=number].is-error[data-v-1d1ff680],input[type=password].is-error[data-v-1d1ff680],input[type=text].is-error[data-v-1d1ff680],textarea.is-error[data-v-1d1ff680]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-1d1ff680]::-moz-placeholder,input[type=number][data-v-1d1ff680]::-moz-placeholder,input[type=password][data-v-1d1ff680]::-moz-placeholder,input[type=text][data-v-1d1ff680]::-moz-placeholder,textarea[data-v-1d1ff680]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-1d1ff680]:-ms-input-placeholder,input[type=number][data-v-1d1ff680]:-ms-input-placeholder,input[type=password][data-v-1d1ff680]:-ms-input-placeholder,input[type=text][data-v-1d1ff680]:-ms-input-placeholder,textarea[data-v-1d1ff680]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-1d1ff680]::placeholder,input[type=number][data-v-1d1ff680]::placeholder,input[type=password][data-v-1d1ff680]::placeholder,input[type=text][data-v-1d1ff680]::placeholder,textarea[data-v-1d1ff680]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-1d1ff680]:focus,input[type=number][data-v-1d1ff680]:focus,input[type=password][data-v-1d1ff680]:focus,input[type=text][data-v-1d1ff680]:focus,textarea[data-v-1d1ff680]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-1d1ff680],input[type=number][disabled][data-v-1d1ff680],input[type=password][disabled][data-v-1d1ff680],input[type=text][disabled][data-v-1d1ff680],textarea[disabled][data-v-1d1ff680]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-1d1ff680]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-1d1ff680],.additional-link b[data-v-1d1ff680]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-1d1ff680]:hover,.additional-link b[data-v-1d1ff680]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-1d1ff680]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-1d1ff680]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-1d1ff680],.form textarea[data-v-1d1ff680]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-1d1ff680]{display:block}.form.block-form .block-wrapper label[data-v-1d1ff680]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-1d1ff680]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-1d1ff680]{display:block}.form.inline-form .input-wrapper .error-message[data-v-1d1ff680]{position:relative;bottom:0}.form .button[data-v-1d1ff680]{padding:14px 32px}.single-line-form[data-v-1d1ff680]{display:block}.single-line-form .submit-button[data-v-1d1ff680]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-1d1ff680],input[type=number][data-v-1d1ff680],input[type=password][data-v-1d1ff680],input[type=text][data-v-1d1ff680],textarea[data-v-1d1ff680]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-1d1ff680]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-1d1ff680]{color:#7d858c}.form.block-form .block-wrapper label[data-v-1d1ff680],.form .inline-wrapper .switch-label .input-label[data-v-1d1ff680]{color:#bec6cf}input[type=email][data-v-1d1ff680],input[type=number][data-v-1d1ff680],input[type=password][data-v-1d1ff680],input[type=text][data-v-1d1ff680],textarea[data-v-1d1ff680]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-1d1ff680]::-moz-placeholder,input[type=number][data-v-1d1ff680]::-moz-placeholder,input[type=password][data-v-1d1ff680]::-moz-placeholder,input[type=text][data-v-1d1ff680]::-moz-placeholder,textarea[data-v-1d1ff680]::-moz-placeholder{color:#7d858c}input[type=email][data-v-1d1ff680]:-ms-input-placeholder,input[type=number][data-v-1d1ff680]:-ms-input-placeholder,input[type=password][data-v-1d1ff680]:-ms-input-placeholder,input[type=text][data-v-1d1ff680]:-ms-input-placeholder,textarea[data-v-1d1ff680]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-1d1ff680]::placeholder,input[type=number][data-v-1d1ff680]::placeholder,input[type=password][data-v-1d1ff680]::placeholder,input[type=text][data-v-1d1ff680]::placeholder,textarea[data-v-1d1ff680]::placeholder{color:#7d858c}input[type=email][disabled][data-v-1d1ff680],input[type=number][disabled][data-v-1d1ff680],input[type=password][disabled][data-v-1d1ff680],input[type=text][disabled][data-v-1d1ff680],textarea[disabled][data-v-1d1ff680]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.block-form[data-v-1d1ff680]{max-width:100%}",""])},q7ZV:function(t,e,a){"use strict";var i=a("vrHz");a.n(i).a},qOEg:function(t,e,a){var i=a("nVjG");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(t.exports=i.locals)},qefO:function(t,e,a){"use strict";var i={name:"PageTab",props:["isLoading"],components:{Spinner:a("zTYo").a}},o=(a("wfzd"),a("KHd+")),r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-tab"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[e("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"6a2580fc",null);e.a=r.exports},vrHz:function(t,e,a){var i=a("QjjE");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(t.exports=i.locals)},wfzd:function(t,e,a){"use strict";var i=a("xrRQ");a.n(i).a},xbTq:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".info-box[data-v-0cded0f2]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-0cded0f2]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-0cded0f2],.info-box.error p[data-v-0cded0f2]{color:#fd397a}.info-box.error a[data-v-0cded0f2]{text-decoration:underline}.info-box p[data-v-0cded0f2]{font-size:.9375em;line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-0cded0f2] a{color:#00bc7e}.info-box a[data-v-0cded0f2],.info-box b[data-v-0cded0f2]{font-weight:700;color:#00bc7e}.info-box a[data-v-0cded0f2]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-0cded0f2]{margin-top:15px}.info-box ul[data-v-0cded0f2],.info-box ul li[data-v-0cded0f2],.info-box ul li a[data-v-0cded0f2]{display:block}@media only screen and (max-width:690px){.info-box[data-v-0cded0f2]{padding:15px}}@media (prefers-color-scheme:dark){.info-box[data-v-0cded0f2]{background:#1e2024}.info-box p[data-v-0cded0f2],.info-box ul li[data-v-0cded0f2]{color:#bec6cf}}",""])},xnZf:function(t,e,a){"use strict";var i=a("+Pqb"),o=a("CjXH"),r={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:o.v,FileTextIcon:o.r,ProgressBar:i.a,MusicIcon:o.H,VideoIcon:o.X,ImageIcon:o.x,FileIcon:o.q}},d=(a("3xcg"),a("KHd+")),s=Object(d.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"detail-storage-item",class:t.type},[a("div",{staticClass:"header-storage-item"},[a("div",{staticClass:"icon"},["images"==t.type?a("image-icon",{attrs:{size:"23"}}):t._e(),t._v(" "),"videos"==t.type?a("video-icon",{attrs:{size:"23"}}):t._e(),t._v(" "),"audios"==t.type?a("music-icon",{attrs:{size:"23"}}):t._e(),t._v(" "),"documents"==t.type?a("file-text-icon",{attrs:{size:"23"}}):t._e(),t._v(" "),"others"==t.type?a("file-icon",{attrs:{size:"23"}}):t._e(),t._v(" "),"disk"==t.type?a("hard-drive-icon",{attrs:{size:"23"}}):t._e()],1),t._v(" "),a("div",{staticClass:"title"},[a("b",{staticClass:"type"},[t._v(t._s(t.title))]),t._v(" "),a("span",{staticClass:"total-size"},[t._v(t._s(t.used))])])]),t._v(" "),a("ProgressBar",{staticClass:"storage-progress",attrs:{progress:t.percentage}})],1)}),[],!1,null,"8c244edc",null);e.a=s.exports},xrRQ:function(t,e,a){var i=a("2t7t");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(t.exports=i.locals)}}]);