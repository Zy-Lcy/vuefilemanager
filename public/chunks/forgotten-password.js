(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+bxy":function(t,e,a){var o=a("N0FG");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(t.exports=o.locals)},"/qpS":function(t,e,a){"use strict";a.r(e);var o=a("o0o1"),r=a.n(o),n=a("bDRN"),i=a("A5+z"),s=a("j8qy"),d=a("ASoH"),l=a("TJPC"),p=a("L2JU"),c=a("vDqi"),u=a.n(c);function f(t,e,a,o,r,n,i){try{var s=t[n](i),d=s.value}catch(t){return void a(t)}s.done?e(d):Promise.resolve(d).then(o,r)}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b={name:"ForgottenPassword",components:{AuthContentWrapper:n.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,AuthContent:s.a,AuthButton:d.a,required:l.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(p.b)(["config"])),data:function(){return{isLoading:!1,recoverEmail:""}},methods:{goToAuthPage:function(t){this.$refs.auth.$children.forEach((function(e){e.isVisible=!1,e.$props.name===t&&(e.isVisible=!0)}))},forgottenPassword:function(){var t,e=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.forgotten_password.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:e.isLoading=!0,u.a.post("/api/password/email",{email:e.recoverEmail}).then((function(){e.isLoading=!1,e.goToAuthPage("password-reset-link-sended")})).catch((function(t){422==t.response.status&&e.$refs.forgotten_password.setErrors({"E-Mail":t.response.data.message}),e.isLoading=!1}));case 7:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(o,r){var n=t.apply(e,a);function i(t){f(n,o,r,i,s,"next",t)}function s(t){f(n,o,r,i,s,"throw",t)}i(void 0)}))})()}}},h=(a("chTB"),a("KHd+")),g=Object(h.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AuthContentWrapper",{ref:"auth"},[a("AuthContent",{attrs:{name:"forgotten-password",visible:!0}},[t.config.app_logo?a("img",{staticClass:"logo",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():a("b",{staticClass:"auth-logo-text"},[t._v(t._s(t.config.app_name))]),t._v(" "),a("h1",[t._v(t._s(t.$t("page_forgotten_password.title")))]),t._v(" "),a("h2",[t._v(t._s(t.$t("page_forgotten_password.subtitle")))]),t._v(" "),a("ValidationObserver",{ref:"forgotten_password",staticClass:"form inline-form",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),t.forgottenPassword(e)}},scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"E-Mail",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.recoverEmail,expression:"recoverEmail"}],class:{"is-error":o[0]},attrs:{placeholder:t.$t("page_login.placeholder_email"),type:"email"},domProps:{value:t.recoverEmail},on:{input:function(e){e.target.composing||(t.recoverEmail=e.target.value)}}}),t._v(" "),o[0]?a("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)}),t._v(" "),a("AuthButton",{attrs:{icon:"chevron-right",text:t.$t("page_forgotten_password.button_get_link"),loading:t.isLoading,disabled:t.isLoading}})]}}])}),t._v(" "),a("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_forgotten_password.password_remember_text"))+"\n            "),a("router-link",{attrs:{to:{name:"SignIn"}}},[t._v("\n                "+t._s(t.$t("page_forgotten_password.password_remember_button"))+"\n            ")])],1)],1),t._v(" "),a("AuthContent",{attrs:{name:"password-reset-link-sended",visible:!1}},[t.config.app_logo?a("img",{staticClass:"logo",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():a("b",{staticClass:"auth-logo-text"},[t._v(t._s(t.config.app_name))]),t._v(" "),a("h1",[t._v(t._s(t.$t("page_forgotten_password.pass_sennded_title")))]),t._v(" "),a("h2",[t._v(t._s(t.$t("page_forgotten_password.pass_sennded_subtitle")))]),t._v(" "),a("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_forgotten_password.password_remember_text"))+"\n            "),a("router-link",{attrs:{to:{name:"SignIn"}}},[t._v("\n                "+t._s(t.$t("page_forgotten_password.password_remember_button"))+"\n            ")])],1)])],1)}),[],!1,null,"110e9796",null);e.default=g.exports},"65wA":function(t,e,a){var o=a("aRY6");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(t.exports=o.locals)},"6jdO":function(t,e,a){"use strict";var o=a("+bxy");a.n(o).a},ASoH:function(t,e,a){"use strict";var o={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=(a("6jdO"),a("KHd+")),n=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button outline"},[a("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"e546fc60",null);e.a=n.exports},N0FG:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".button[data-v-e546fc60]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-e546fc60]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-e546fc60]{margin-left:12px;font-size:1em}.button.solid[data-v-e546fc60]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-e546fc60]{color:#fff}.button.outline[data-v-e546fc60]{border:2px solid #1b2539}.button.outline .text-label[data-v-e546fc60]{color:#1b2539}.button.outline .icon path[data-v-e546fc60]{fill:#00bc7e}.button.outline[data-v-e546fc60]:hover{border-color:#00bc7e}.button.outline:hover .text-label[data-v-e546fc60]{color:#00bc7e}@media (prefers-color-scheme:dark){.button.outline[data-v-e546fc60]{background:#111314;border-color:#bec6cf}.button.outline .text-label[data-v-e546fc60]{color:#bec6cf}}.sync-alt[data-v-e546fc60]{-webkit-animation:spin-data-v-e546fc60 1s linear infinite;animation:spin-data-v-e546fc60 1s linear infinite}@-webkit-keyframes spin-data-v-e546fc60{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-e546fc60{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},QDSw:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"#auth[data-v-64ace855]{height:100%;width:100%;display:table}",""])},aRY6:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".form.inline-form[data-v-110e9796]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-110e9796]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-110e9796]{position:absolute;left:0}.form.block-form.create-new-password .block-wrapper label[data-v-110e9796]{width:280px}.form.block-form .block-wrapper[data-v-110e9796]{display:flex;align-items:center;margin-top:25px;justify-content:center}.form.block-form .block-wrapper[data-v-110e9796]:first-child{margin-top:0}.form.block-form .block-wrapper label[data-v-110e9796]{white-space:nowrap;font-size:1.125em;font-weight:700;padding-right:20px;width:200px;text-align:right!important;color:#1b2539;text-align:right}.form.block-form .button[data-v-110e9796]{margin-top:50px}.input-wrapper .error-message[data-v-110e9796]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-110e9796]{width:100%}input[type=email][data-v-110e9796],input[type=password][data-v-110e9796],input[type=text][data-v-110e9796],textarea[data-v-110e9796]{background:#f4f5f6;border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}input[type=email].is-error[data-v-110e9796],input[type=password].is-error[data-v-110e9796],input[type=text].is-error[data-v-110e9796],textarea.is-error[data-v-110e9796]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}input[type=email][data-v-110e9796]::-moz-placeholder,input[type=password][data-v-110e9796]::-moz-placeholder,input[type=text][data-v-110e9796]::-moz-placeholder,textarea[data-v-110e9796]::-moz-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-110e9796]:-ms-input-placeholder,input[type=password][data-v-110e9796]:-ms-input-placeholder,input[type=text][data-v-110e9796]:-ms-input-placeholder,textarea[data-v-110e9796]:-ms-input-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-110e9796]::placeholder,input[type=password][data-v-110e9796]::placeholder,input[type=text][data-v-110e9796]::placeholder,textarea[data-v-110e9796]::placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-110e9796]:focus,input[type=password][data-v-110e9796]:focus,input[type=text][data-v-110e9796]:focus,textarea[data-v-110e9796]:focus{border-color:#00bc7e;box-shadow:0 0 7px rgba(0,188,126,.3)}input[type=email][disabled][data-v-110e9796],input[type=password][disabled][data-v-110e9796],input[type=text][disabled][data-v-110e9796],textarea[disabled][data-v-110e9796]{color:#a4adb6;cursor:not-allowed}.additional-link[data-v-110e9796]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-110e9796],.additional-link b[data-v-110e9796]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-110e9796]:hover,.additional-link b[data-v-110e9796]:hover{text-decoration:underline}@media only screen and (max-width:960px){.form .button[data-v-110e9796]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-110e9796],.form textarea[data-v-110e9796]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-110e9796]{display:block}.form.block-form .block-wrapper label[data-v-110e9796]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-110e9796]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-110e9796]{display:block}.form.inline-form .input-wrapper .error-message[data-v-110e9796]{position:relative;bottom:0}.form .button[data-v-110e9796]{padding:14px 32px}input[type=email][data-v-110e9796],input[type=password][data-v-110e9796],input[type=text][data-v-110e9796],textarea[data-v-110e9796]{padding:14px 20px}}@media (prefers-color-scheme:dark){.form.block-form .block-wrapper label[data-v-110e9796]{color:#bec6cf}input[type=email][data-v-110e9796],input[type=password][data-v-110e9796],input[type=text][data-v-110e9796],textarea[data-v-110e9796]{background:#1e2024;color:#bec6cf}input[type=email][data-v-110e9796]::-moz-placeholder,input[type=password][data-v-110e9796]::-moz-placeholder,input[type=text][data-v-110e9796]::-moz-placeholder,textarea[data-v-110e9796]::-moz-placeholder{color:#7d858c}input[type=email][data-v-110e9796]:-ms-input-placeholder,input[type=password][data-v-110e9796]:-ms-input-placeholder,input[type=text][data-v-110e9796]:-ms-input-placeholder,textarea[data-v-110e9796]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-110e9796]::placeholder,input[type=password][data-v-110e9796]::placeholder,input[type=text][data-v-110e9796]::placeholder,textarea[data-v-110e9796]::placeholder{color:#7d858c}input[type=email][disabled][data-v-110e9796],input[type=password][disabled][data-v-110e9796],input[type=text][disabled][data-v-110e9796],textarea[disabled][data-v-110e9796]{color:#7d858c}}.auth-logo-text[data-v-110e9796]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-110e9796]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-110e9796]{min-width:310px}.auth-form .additional-link a[data-v-110e9796]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-110e9796]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-110e9796]{width:120px;margin-bottom:20px}.auth-form h1[data-v-110e9796]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-110e9796]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-110e9796]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-110e9796]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-110e9796]{width:100%}.auth-form h1[data-v-110e9796]{font-size:1.875em}.auth-form h2[data-v-110e9796]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-110e9796]{font-size:1.375em}.auth-form h2[data-v-110e9796]{font-size:1.125em}.auth-form input[data-v-110e9796]{min-width:0}.auth-form .additional-link[data-v-110e9796]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-110e9796],.auth-form h1[data-v-110e9796],.auth-form h2[data-v-110e9796]{color:#bec6cf}}",""])},aqie:function(t,e,a){"use strict";var o=a("nkey");a.n(o).a},bDRN:function(t,e,a){"use strict";var o={name:"AuthContentWrapper"},r=(a("aqie"),a("KHd+")),n=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"64ace855",null);e.a=n.exports},chTB:function(t,e,a){"use strict";var o=a("65wA");a.n(o).a},j8qy:function(t,e,a){"use strict";var o={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=a("KHd+"),n=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.isVisible?e("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);e.a=n.exports},nkey:function(t,e,a){var o=a("QDSw");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(t.exports=o.locals)}}]);