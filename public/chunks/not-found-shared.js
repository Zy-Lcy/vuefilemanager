(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{132:function(n,t,a){var e=a(384);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(6)(e,o);e.locals&&(n.exports=e.locals)},17:function(n,t,a){"use strict";var e={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(a(235),a(0)),i=Object(o.a)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("button",{staticClass:"button outline"},[a("span",{staticClass:"text-label"},[n._v(n._s(n.text))]),n._v(" "),n.loading?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):n._e(),n._v(" "),!n.loading&&n.icon?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{attrs:{icon:n.icon}})],1):n._e()])}),[],!1,null,"59e2dfc0",null);t.a=i.exports},21:function(n,t,a){"use strict";var e={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=a(0),i=Object(o.a)(e,(function(){var n=this.$createElement,t=this._self._c||n;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=i.exports},22:function(n,t,a){"use strict";var e={name:"AuthContentWrapper"},o=(a(239),a(0)),i=Object(o.a)(e,(function(){var n=this.$createElement;return(this._self._c||n)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);t.a=i.exports},235:function(n,t,a){"use strict";var e=a(57);a.n(e).a},236:function(n,t,a){(n.exports=a(5)(!1)).push([n.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #111314;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},239:function(n,t,a){"use strict";var e=a(59);a.n(e).a},240:function(n,t,a){(n.exports=a(5)(!1)).push([n.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},383:function(n,t,a){"use strict";var e=a(132);a.n(e).a},384:function(n,t,a){(n.exports=a(5)(!1)).push([n.i,".auth-logo-text[data-v-dbcbae7c] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-dbcbae7c] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-dbcbae7c] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-dbcbae7c] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-dbcbae7c] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-dbcbae7c] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-dbcbae7c] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-dbcbae7c] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-dbcbae7c] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-dbcbae7c] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-dbcbae7c] {\n    width: 100%;\n}\n.auth-form h1[data-v-dbcbae7c] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-dbcbae7c] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-dbcbae7c] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-dbcbae7c] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-dbcbae7c] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-dbcbae7c] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-dbcbae7c], .auth-form h2[data-v-dbcbae7c], .auth-form .additional-link[data-v-dbcbae7c] {\n    color: #bec6cf;\n}\n}\n",""])},57:function(n,t,a){var e=a(236);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(6)(e,o);e.locals&&(n.exports=e.locals)},574:function(n,t,a){"use strict";a.r(t);var e=a(22),o=a(8),i=a(21),r=a(17),c=a(10),s=a(7);a(4);function d(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function l(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var u={name:"NotFoundShared",components:{AuthContentWrapper:e.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,AuthContent:i.a,AuthButton:r.a,required:c.a},computed:function(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){l(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}({},Object(s.b)(["config"])),data:function(){return{isLoading:!1}}},f=(a(383),a(0)),b=Object(f.a)(u,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("AuthContentWrapper",{ref:"auth"},[a("AuthContent",{attrs:{name:"not-found",visible:!0}},[n.config.app_logo?a("img",{staticClass:"logo",attrs:{src:n.config.app_logo,alt:n.config.app_name}}):n._e(),n._v(" "),n.config.app_logo?n._e():a("b",{staticClass:"auth-logo-text"},[n._v(n._s(n.config.app_name))]),n._v(" "),a("h1",[n._v(n._s(n.$t("page_shared_404.title")))]),n._v(" "),a("h2",[n._v(n._s(n.$t("page_shared_404.subtitle")))]),n._v(" "),a("span",{staticClass:"additional-link"},[n._v(n._s(n.$t("page_registration.have_an_account"))+"\n            "),a("router-link",{attrs:{to:{name:"SignIn"}}},[n._v("\n                "+n._s(n.$t("page_forgotten_password.password_remember_button"))+"\n            ")])],1)])],1)}),[],!1,null,"dbcbae7c",null);t.default=b.exports},59:function(n,t,a){var e=a(240);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(6)(e,o);e.locals&&(n.exports=e.locals)}}]);