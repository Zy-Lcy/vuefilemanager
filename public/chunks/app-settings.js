(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0991":function(t,e,a){"use strict";var i=a("ckMH");a.n(i).a},"2Sb1":function(t,e,a){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:a("CjXH").d}},n=(a("Z3t9"),a("KHd+")),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[t.canBack?a("div",{staticClass:"go-back",on:{click:function(e){return t.$router.back()}}},[a("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"c3ec4364",null);e.a=s.exports},Cpfc:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".text-label[data-v-6f520f3a]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}@media (prefers-color-scheme:dark){.text-label[data-v-6f520f3a]{color:#00bc7e}}",""])},IGm8:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".page-header[data-v-c3ec4364]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-c3ec4364]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-c3ec4364]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-c3ec4364]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-c3ec4364]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-c3ec4364]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-c3ec4364]{background:#111314}.page-header .title[data-v-c3ec4364]{color:#bec6cf}.page-header .icon path[data-v-c3ec4364]{fill:#00bc7e}}",""])},LD6W:function(t,e,a){var i=a("IGm8");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},OLOt:function(t,e,a){"use strict";a.r(e);var i=a("CjXH"),n=a("D62o"),s=a("THmQ"),r=a("2Sb1"),c=a("L2JU");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={name:"AppSettings",components:{HomeIcon:i.w,CreditCardIcon:i.j,CodeIcon:i.h,MailIcon:i.D,FileTextIcon:i.r,EyeIcon:i.o,UsersIcon:i.W,Trash2Icon:i.Q,SettingsIcon:i.N,SectionTitle:s.a,MobileHeader:n.a,PageHeader:r.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(c.b)(["config"]))},d=(a("iVII"),a("KHd+")),v=Object(d.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"single-page"}},[a("div",{attrs:{id:"page-content"}},[a("MobileHeader",{attrs:{title:t.$router.currentRoute.meta.title}}),t._v(" "),a("PageHeader",{attrs:{"can-back":!0,title:t.$router.currentRoute.meta.title}}),t._v(" "),a("div",{staticClass:"content-page"},[a("div",{staticClass:"menu-list-wrapper horizontal"},[a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppOthers"}}},[a("div",{staticClass:"icon"},[a("settings-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.others"))+"\n                    ")])]),t._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppAppearance"}}},[a("div",{staticClass:"icon"},[a("eye-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.appearance"))+"\n                    ")])]),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppBillings"}}},[a("div",{staticClass:"icon"},[a("file-text-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.billings"))+"\n                    ")])]):t._e(),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppPayments"}}},[a("div",{staticClass:"icon"},[a("credit-card-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.payments"))+"\n                    ")])]):t._e(),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppIndex"}}},[a("div",{staticClass:"icon"},[a("home-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        Homepage\n                    ")])]):t._e(),t._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppEmail"}}},[a("div",{staticClass:"icon"},[a("mail-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.email"))+"\n                    ")])])],1),t._v(" "),a("router-view")],1)],1)])}),[],!1,null,"3c42cc40",null);e.default=v.exports},THmQ:function(t,e,a){"use strict";var i={name:"SectionTitle"},n=(a("0991"),a("KHd+")),s=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"6f520f3a",null);e.a=s.exports},Z3t9:function(t,e,a){"use strict";var i=a("LD6W");a.n(i).a},ckMH:function(t,e,a){var i=a("Cpfc");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},iVII:function(t,e,a){"use strict";var i=a("zlM+");a.n(i).a},jQGq:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"",""])},"zlM+":function(t,e,a){var i=a("jQGq");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)}}]);