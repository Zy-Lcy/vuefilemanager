(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"+rRx":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".page-header[data-v-3a05f200]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-3a05f200]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-3a05f200]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-3a05f200]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-3a05f200]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-3a05f200]{display:none}}.dark-mode .page-header[data-v-3a05f200]{background:#131414}.dark-mode .page-header .title[data-v-3a05f200]{color:#bec6cf}.dark-mode .page-header .icon path[data-v-3a05f200]{fill:#00bc7e}",""])},"/S+B":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".plan[data-v-1634031c]{text-align:center;flex:0 0 33%;padding:0 25px;margin-bottom:45px}.plan .plan-wrapper[data-v-1634031c]{box-shadow:0 7px 20px 5px rgba(26,36,55,.03);padding:25px;border-radius:8px;transition:all .3s ease}.plan .plan-wrapper[data-v-1634031c]:hover{transform:translateY(-20px) scale(1.05);box-shadow:0 15px 25px 5px rgba(26,36,55,.08)}.plan .plan-header .icon circle[data-v-1634031c],.plan .plan-header .icon line[data-v-1634031c],.plan .plan-header .icon path[data-v-1634031c],.plan .plan-header .icon polyline[data-v-1634031c],.plan .plan-header .icon rect[data-v-1634031c]{color:inherit}.plan .plan-header .title[data-v-1634031c]{font-size:1.375em;font-weight:800}.plan .plan-header .description[data-v-1634031c]{font-size:.875em;font-weight:600}.plan .plan-features[data-v-1634031c]{margin:65px 0}.plan .plan-features .storage-size[data-v-1634031c]{font-size:3em;font-weight:900;line-height:1.1}.plan .plan-features .storage-description[data-v-1634031c]{display:block;font-size:.9375em;font-weight:800}.plan .plan-footer .sign-in-button[data-v-1634031c]{width:100%;text-align:center}.plan .plan-footer .price[data-v-1634031c]{font-size:1.125em;display:block;margin-bottom:20px}.plan .plan-footer .price .vat-disclaimer[data-v-1634031c]{font-size:.6875em;color:#1b2539;display:block;font-weight:300;opacity:.45;margin-top:5px}.plans-wrapper[data-v-1634031c]{display:flex;flex-wrap:wrap;margin:0 -25px;justify-content:center}@media only screen and (max-width:960px){.plans-wrapper[data-v-1634031c]{display:block;margin:0}}.dark-mode .plan .plan-wrapper[data-v-1634031c]{background:#1e2024}.dark-mode .plan .plan-header .title[data-v-1634031c]{color:#bec6cf}.dark-mode .plan .plan-header .description[data-v-1634031c]{color:#7d858c}.dark-mode .plan .plan-features .storage-description[data-v-1634031c],.dark-mode .plan .plan-features .storage-size[data-v-1634031c]{color:#bec6cf}.dark-mode .plan .plan-footer .sign-in-button[data-v-1634031c]{background:rgba(0,188,126,.1)}.dark-mode .plan .plan-footer .sign-in-button[data-v-1634031c] .content{color:#00bc7e}.dark-mode .plan .plan-footer .price .vat-disclaimer[data-v-1634031c]{color:#bec6cf}",""])},"2Sb1":function(a,t,e){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").h}},d=(e("5AGk"),e("KHd+")),o=Object(d.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-header"},[a.canBack?e("div",{staticClass:"go-back",on:{click:function(t){return a.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"3a05f200",null);t.a=o.exports},"4H2H":function(a,t,e){"use strict";e("qg1G")},"4eR2":function(a,t,e){var i=e("+rRx");"string"==typeof i&&(i=[[a.i,i,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,d);i.locals&&(a.exports=i.locals)},"4zU4":function(a,t,e){"use strict";e.r(t);var i=e("wz3J"),d=e("D62o"),o=e("2Sb1"),r=e("zTYo"),n=e("CjXH"),l=(e("vDqi"),{name:"UpgradePlan",components:{PlanPricingTables:i.a,MobileHeader:d.a,PageHeader:o.a,CloudIcon:n.k,Spinner:r.a},data:function(){return{isLoading:!0}},methods:{onLoadPricingTables:function(a){this.isLoading=a},onSelectTable:function(a){this.$store.commit("STORE_REQUESTED_PLAN",a)}},beforeMount:function(){var a=document.createElement("script");a.setAttribute("src","https://js.stripe.com/v3/"),document.head.appendChild(a)},mounted:function(){this.$store.dispatch("getAppData")}}),p=(e("4H2H"),e("KHd+")),s=Object(p.a)(l,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"single-page"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:a.$t(a.$router.currentRoute.meta.title)}}),a._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"plan-title"},[e("cloud-icon",{staticClass:"title-icon text-theme",attrs:{size:"42"}}),a._v(" "),e("h1",[a._v(a._s(a.$t("page_pricing_tables.title")))]),a._v(" "),e("h2",[a._v(a._s(a.$t("page_pricing_tables.description")))])],1),a._v(" "),e("PlanPricingTables",{on:{load:a.onLoadPricingTables,"selected-plan":a.onSelectTable}})],1)],1),a._v(" "),a.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):a._e()])}),[],!1,null,"6d8606b9",null);t.default=s.exports},"5AGk":function(a,t,e){"use strict";e("4eR2")},"69Ve":function(a,t,e){var i=e("m2iI");"string"==typeof i&&(i=[[a.i,i,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,d);i.locals&&(a.exports=i.locals)},D62o:function(a,t,e){"use strict";var i=e("xCqy"),d=e("CjXH"),o={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:d.h,MenuIcon:d.P},methods:{showMobileNavigation:function(){i.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},r=(e("pTcH"),e("KHd+")),n=Object(r.a)(o,(function(){var a=this.$createElement,t=this._self._c||a;return t("header",{staticClass:"mobile-header"},[t("div",{staticClass:"go-back",on:{click:this.goBack}},[t("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),t("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),t("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[t("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"c5a69c44",null);t.a=n.exports},Hyll:function(a,t,e){"use strict";e("eKI3")},eKI3:function(a,t,e){var i=e("/S+B");"string"==typeof i&&(i=[[a.i,i,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,d);i.locals&&(a.exports=i.locals)},m2iI:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".mobile-header[data-v-c5a69c44]{padding:10px 0;text-align:center;background:#fff;position:sticky;display:none;z-index:6;top:0}.mobile-header>div[data-v-c5a69c44]{flex-grow:1;align-self:center;white-space:nowrap}.mobile-header .go-back[data-v-c5a69c44]{text-align:left}.mobile-header .location-name[data-v-c5a69c44]{line-height:1;text-align:center;width:100%;vertical-align:middle;font-size:.9375em;color:#1b2539;font-weight:700;max-width:220px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.mobile-header .mobile-menu[data-v-c5a69c44]{text-align:right}.mobile-header .icon[data-v-c5a69c44]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:690px){.mobile-header[data-v-c5a69c44]{display:flex;margin-bottom:15px}}.dark-mode .mobile-header[data-v-c5a69c44]{background:#131414}.dark-mode .mobile-header .location-name[data-v-c5a69c44]{color:#bec6cf}",""])},pTcH:function(a,t,e){"use strict";e("69Ve")},qg1G:function(a,t,e){var i=e("thaK");"string"==typeof i&&(i=[[a.i,i,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,d);i.locals&&(a.exports=i.locals)},thaK:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form[data-v-6d8606b9]{max-width:700px}.form.inline-form[data-v-6d8606b9]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-6d8606b9]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-6d8606b9]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-6d8606b9]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-6d8606b9]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-6d8606b9]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-6d8606b9]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-6d8606b9]:last-child{margin-bottom:0}.form.block-form .button[data-v-6d8606b9]{margin-top:50px}.form .inline-wrapper[data-v-6d8606b9]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-6d8606b9]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-6d8606b9]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-6d8606b9]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-6d8606b9]{display:flex}.single-line-form .submit-button[data-v-6d8606b9]{margin-left:20px}.error-message[data-v-6d8606b9]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-6d8606b9]{width:100%}input[type=email][data-v-6d8606b9],input[type=number][data-v-6d8606b9],input[type=password][data-v-6d8606b9],input[type=text][data-v-6d8606b9],textarea[data-v-6d8606b9]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-6d8606b9],input[type=number].is-error[data-v-6d8606b9],input[type=password].is-error[data-v-6d8606b9],input[type=text].is-error[data-v-6d8606b9],textarea.is-error[data-v-6d8606b9]{border-color:#fd397a}input[type=email][data-v-6d8606b9]::-moz-placeholder,input[type=number][data-v-6d8606b9]::-moz-placeholder,input[type=password][data-v-6d8606b9]::-moz-placeholder,input[type=text][data-v-6d8606b9]::-moz-placeholder,textarea[data-v-6d8606b9]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-6d8606b9]:-ms-input-placeholder,input[type=number][data-v-6d8606b9]:-ms-input-placeholder,input[type=password][data-v-6d8606b9]:-ms-input-placeholder,input[type=text][data-v-6d8606b9]:-ms-input-placeholder,textarea[data-v-6d8606b9]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-6d8606b9]::placeholder,input[type=number][data-v-6d8606b9]::placeholder,input[type=password][data-v-6d8606b9]::placeholder,input[type=text][data-v-6d8606b9]::placeholder,textarea[data-v-6d8606b9]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-6d8606b9],input[type=number][disabled][data-v-6d8606b9],input[type=password][disabled][data-v-6d8606b9],input[type=text][disabled][data-v-6d8606b9],textarea[disabled][data-v-6d8606b9]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-6d8606b9]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-6d8606b9]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-6d8606b9],.additional-link b[data-v-6d8606b9]{cursor:pointer}.additional-link a[data-v-6d8606b9]:hover,.additional-link b[data-v-6d8606b9]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-6d8606b9]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-6d8606b9]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-6d8606b9],.form textarea[data-v-6d8606b9]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-6d8606b9]{display:block}.form.block-form .block-wrapper label[data-v-6d8606b9]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-6d8606b9]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-6d8606b9]{display:block}.form.inline-form .input-wrapper .error-message[data-v-6d8606b9]{position:relative;bottom:0}.form .button[data-v-6d8606b9]{padding:14px 32px}.single-line-form[data-v-6d8606b9]{display:block}.single-line-form .submit-button[data-v-6d8606b9]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-6d8606b9],input[type=number][data-v-6d8606b9],input[type=password][data-v-6d8606b9],input[type=text][data-v-6d8606b9],textarea[data-v-6d8606b9]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-6d8606b9]{display:block}}.dark-mode .form .input-help[data-v-6d8606b9]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-6d8606b9],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-6d8606b9]{color:#bec6cf}.dark-mode input[type=email][data-v-6d8606b9],.dark-mode input[type=number][data-v-6d8606b9],.dark-mode input[type=password][data-v-6d8606b9],.dark-mode input[type=text][data-v-6d8606b9],.dark-mode textarea[data-v-6d8606b9]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-6d8606b9]::-moz-placeholder,.dark-mode input[type=number][data-v-6d8606b9]::-moz-placeholder,.dark-mode input[type=password][data-v-6d8606b9]::-moz-placeholder,.dark-mode input[type=text][data-v-6d8606b9]::-moz-placeholder,.dark-mode textarea[data-v-6d8606b9]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-6d8606b9]:-ms-input-placeholder,.dark-mode input[type=number][data-v-6d8606b9]:-ms-input-placeholder,.dark-mode input[type=password][data-v-6d8606b9]:-ms-input-placeholder,.dark-mode input[type=text][data-v-6d8606b9]:-ms-input-placeholder,.dark-mode textarea[data-v-6d8606b9]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-6d8606b9]::placeholder,.dark-mode input[type=number][data-v-6d8606b9]::placeholder,.dark-mode input[type=password][data-v-6d8606b9]::placeholder,.dark-mode input[type=text][data-v-6d8606b9]::placeholder,.dark-mode textarea[data-v-6d8606b9]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-6d8606b9],.dark-mode input[type=number][disabled][data-v-6d8606b9],.dark-mode input[type=password][disabled][data-v-6d8606b9],.dark-mode input[type=text][disabled][data-v-6d8606b9],.dark-mode textarea[disabled][data-v-6d8606b9]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-6d8606b9],.dark-mode .popup-wrapper input[type=number][data-v-6d8606b9],.dark-mode .popup-wrapper input[type=password][data-v-6d8606b9],.dark-mode .popup-wrapper input[type=text][data-v-6d8606b9],.dark-mode .popup-wrapper textarea[data-v-6d8606b9]{background:#25272c}.plan-title[data-v-6d8606b9]{text-align:center;max-width:600px;margin:0 auto 80px}.plan-title circle[data-v-6d8606b9],.plan-title line[data-v-6d8606b9],.plan-title path[data-v-6d8606b9],.plan-title polyline[data-v-6d8606b9],.plan-title rect[data-v-6d8606b9]{color:inherit}.plan-title h1[data-v-6d8606b9]{font-size:2.375em;font-weight:800;margin-bottom:5px}.plan-title h2[data-v-6d8606b9]{font-size:1.25em;font-weight:500}.dark-mode .plan-title h1[data-v-6d8606b9]{color:#bec6cf}.dark-mode .plan-title h2[data-v-6d8606b9]{color:#7d858c}",""])},wz3J:function(a,t,e){"use strict";var i=e("Nv84"),d=e("CjXH"),o=e("L2JU"),r=e("vDqi"),n=e.n(r);function l(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function p(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var s={name:"PlanPricingTables",components:{HardDriveIcon:d.F,ButtonBase:i.a},props:["customRoute"],data:function(){return{plans:void 0}},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){p(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(o.b)(["user"])),methods:{selectPlan:function(a){this.$emit("selected-plan",a);var t=this.customRoute?this.customRoute:"UpgradeBilling";this.$router.push({name:t})}},created:function(){var a=this;n.a.get("/api/pricing").then((function(t){a.plans=t.data.filter((function(t){return t.data.attributes.capacity>a.user.data.attributes.storage_capacity})),a.$emit("load",!1)}))}},c=(e("Hyll"),e("KHd+")),b=Object(c.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.plans?e("div",{staticClass:"plans-wrapper"},a._l(a.plans,(function(t,i){return e("article",{key:i,staticClass:"plan"},[e("div",{staticClass:"plan-wrapper"},[e("header",{staticClass:"plan-header"},[e("div",{staticClass:"icon"},[e("hard-drive-icon",{staticClass:"text-theme",attrs:{size:"26"}})],1),a._v(" "),e("h1",{staticClass:"title"},[a._v(a._s(t.data.attributes.name))]),a._v(" "),e("h2",{staticClass:"description"},[a._v(a._s(t.data.attributes.description))])]),a._v(" "),e("section",{staticClass:"plan-features"},[e("b",{staticClass:"storage-size"},[a._v(a._s(t.data.attributes.capacity_formatted))]),a._v(" "),e("span",{staticClass:"storage-description"},[a._v(a._s(a.$t("page_pricing_tables.storage_capacity")))])]),a._v(" "),e("footer",{staticClass:"plan-footer"},[e("b",{staticClass:"price text-theme"},[a._v("\n                    "+a._s(t.data.attributes.price)+"/"+a._s(a.$t("global.monthly_ac"))+"\n                    "),t.data.attributes.tax_rates.length>0?e("small",{staticClass:"vat-disclaimer"},[a._v(a._s(a.$t("page_pricing_tables.vat_excluded")))]):a._e()]),a._v(" "),e("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(e){return a.selectPlan(t)}}},[a._v("\n                    "+a._s(a.$t("global.get_it"))+"\n                ")])],1)])])})),0):a._e()}),[],!1,null,"1634031c",null);t.a=b.exports}}]);