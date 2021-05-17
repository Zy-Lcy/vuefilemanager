(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{KnjL:function(a,t,e){"use strict";var o={name:"InfoBox",props:["type"]},r=(e("pFam"),e("KHd+")),i=Object(r.a)(o,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);t.a=i.exports},"Qqv+":function(a,t,e){var o=e("biqn");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},RjSB:function(a,t,e){"use strict";e.r(t);var o=e("o0o1"),r=e.n(o),i=e("bDRN"),n=e("A5+z"),d=e("KnjL"),p=e("j8qy"),f=e("ASoH"),l=e("CjXH"),s=e("TJPC"),c=e("vDqi"),b=e.n(c);function u(a,t,e,o,r,i,n){try{var d=a[i](n),p=d.value}catch(a){return void e(a)}d.done?t(p):Promise.resolve(p).then(o,r)}var m={name:"PurchaseCode",components:{AuthContentWrapper:i.a,ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,SettingsIcon:l.Y,AuthContent:p.a,AuthButton:f.a,required:s.a,InfoBox:d.a},data:function(){return{isLoading:!1,purchaseCode:""}},methods:{verifyPurchaseCode:function(){var a,t=this;return(a=r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.verifyPurchaseCode.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:t.isLoading=!0,b.a.post("/api/setup/purchase-code",{purchaseCode:t.purchaseCode}).then((function(a){t.isLoading=!1,localStorage.setItem("purchase_code",t.purchaseCode),t.$router.push({name:"Database"})})).catch((function(a){t.isLoading=!1,400==a.response.status?t.$refs.verifyPurchaseCode.setErrors({"Purchase Code":["Purchase code is invalid."]}):404==a.response.status?t.$refs.verifyPurchaseCode.setErrors({"Purchase Code":["You may have misconfigured the app, please read the readme file and try it again."]}):t.$refs.verifyPurchaseCode.setErrors({"Purchase Code":["Something is wrong. Please try again."]})}));case 7:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(o,r){var i=a.apply(t,e);function n(a){u(i,o,r,n,d,"next",a)}function d(a){u(i,o,r,n,d,"throw",a)}n(void 0)}))})()}}},v=(e("Zwai"),e("KHd+")),h=Object(v.a)(m,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"licence-verify",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),e("h1",[a._v("Setup Wizard")]),a._v(" "),e("h2",[a._v("Please set your purchase code before continue to set up your application.")])],1),a._v(" "),e("ValidationObserver",{ref:"verifyPurchaseCode",staticClass:"form inline-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.verifyPurchaseCode(t)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Purchase Code",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.purchaseCode,expression:"purchaseCode"}],class:{"is-error":o[0]},attrs:{placeholder:"Paste your purchase code",type:"text"},domProps:{value:a.purchaseCode},on:{input:function(t){t.target.composing||(a.purchaseCode=t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)}),a._v(" "),e("AuthButton",{attrs:{icon:"chevron-right",text:"Verify",loading:a.isLoading,disabled:a.isLoading}})]}}])}),a._v(" "),e("p",{staticClass:"additional-link"},[e("a",{attrs:{href:"https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-",target:"_blank"}},[a._v("\n                Where I can find purchase code?\n            ")]),a._v(" "),e("a",{staticClass:"black-link",attrs:{href:"https://codecanyon.net/item/vue-file-manager-with-laravel-backend/25815986",target:"_blank"}},[a._v("\n                Don’t have purchase code?\n            ")])])],1)],1)}),[],!1,null,"2bf63a74",null);t.default=h.exports},Z1zV:function(a,t,e){var o=e("p8Nm");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},Zwai:function(a,t,e){"use strict";e("Z1zV")},biqn:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".info-box[data-v-8e7c42f6]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-8e7c42f6]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-8e7c42f6],.info-box.error p[data-v-8e7c42f6]{color:#fd397a}.info-box.error a[data-v-8e7c42f6]{text-decoration:underline}.info-box p[data-v-8e7c42f6]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-8e7c42f6],.info-box p[data-v-8e7c42f6] a{font-size:15px}.info-box p[data-v-8e7c42f6] b{font-size:15px;font-weight:700}.info-box a[data-v-8e7c42f6],.info-box b[data-v-8e7c42f6]{font-weight:700}.info-box a[data-v-8e7c42f6]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-8e7c42f6]{margin-top:15px}.info-box ul[data-v-8e7c42f6],.info-box ul li[data-v-8e7c42f6],.info-box ul li a[data-v-8e7c42f6]{display:block}@media only screen and (max-width:690px){.info-box[data-v-8e7c42f6]{padding:15px}}@media (prefers-color-scheme:dark){.info-box[data-v-8e7c42f6]{background:#1e2024}.info-box p[data-v-8e7c42f6],.info-box ul li[data-v-8e7c42f6]{color:#bec6cf}}",""])},p8Nm:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form.inline-form[data-v-2bf63a74]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-2bf63a74]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-2bf63a74]{position:absolute;left:0}.form.block-form.create-new-password .block-wrapper label[data-v-2bf63a74]{width:280px}.form.block-form .block-wrapper[data-v-2bf63a74]{display:flex;align-items:center;margin-top:25px;justify-content:center}.form.block-form .block-wrapper[data-v-2bf63a74]:first-child{margin-top:0}.form.block-form .block-wrapper label[data-v-2bf63a74]{white-space:nowrap;font-size:1.125em;font-weight:700;padding-right:20px;width:200px;text-align:right!important;color:#1b2539;text-align:right}.form.block-form .button[data-v-2bf63a74]{margin-top:50px}.input-wrapper .error-message[data-v-2bf63a74]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-2bf63a74]{width:100%}input[type=email][data-v-2bf63a74],input[type=password][data-v-2bf63a74],input[type=text][data-v-2bf63a74],textarea[data-v-2bf63a74]{background:#f4f5f6;border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}input[type=email].is-error[data-v-2bf63a74],input[type=password].is-error[data-v-2bf63a74],input[type=text].is-error[data-v-2bf63a74],textarea.is-error[data-v-2bf63a74]{border-color:#fd397a}input[type=email][data-v-2bf63a74]::-moz-placeholder,input[type=password][data-v-2bf63a74]::-moz-placeholder,input[type=text][data-v-2bf63a74]::-moz-placeholder,textarea[data-v-2bf63a74]::-moz-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-2bf63a74]:-ms-input-placeholder,input[type=password][data-v-2bf63a74]:-ms-input-placeholder,input[type=text][data-v-2bf63a74]:-ms-input-placeholder,textarea[data-v-2bf63a74]:-ms-input-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-2bf63a74]::placeholder,input[type=password][data-v-2bf63a74]::placeholder,input[type=text][data-v-2bf63a74]::placeholder,textarea[data-v-2bf63a74]::placeholder{color:#a4adb6;font-size:1em}input[type=email][disabled][data-v-2bf63a74],input[type=password][disabled][data-v-2bf63a74],input[type=text][disabled][data-v-2bf63a74],textarea[disabled][data-v-2bf63a74]{color:#a4adb6;cursor:not-allowed}.additional-link[data-v-2bf63a74]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-2bf63a74],.additional-link b[data-v-2bf63a74]{cursor:pointer}.additional-link a[data-v-2bf63a74]:hover,.additional-link b[data-v-2bf63a74]:hover{text-decoration:underline}@media only screen and (max-width:960px){.form .button[data-v-2bf63a74]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-2bf63a74],.form textarea[data-v-2bf63a74]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-2bf63a74]{display:block}.form.block-form .block-wrapper label[data-v-2bf63a74]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-2bf63a74]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-2bf63a74]{display:block}.form.inline-form .input-wrapper .error-message[data-v-2bf63a74]{position:relative;bottom:0}.form .button[data-v-2bf63a74]{padding:14px 32px}input[type=email][data-v-2bf63a74],input[type=password][data-v-2bf63a74],input[type=text][data-v-2bf63a74],textarea[data-v-2bf63a74]{padding:14px 20px}}@media (prefers-color-scheme:dark){.form.block-form .block-wrapper label[data-v-2bf63a74]{color:#bec6cf}input[type=email][data-v-2bf63a74],input[type=password][data-v-2bf63a74],input[type=text][data-v-2bf63a74],textarea[data-v-2bf63a74]{background:#1e2024;color:#bec6cf}input[type=email][data-v-2bf63a74]::-moz-placeholder,input[type=password][data-v-2bf63a74]::-moz-placeholder,input[type=text][data-v-2bf63a74]::-moz-placeholder,textarea[data-v-2bf63a74]::-moz-placeholder{color:#7d858c}input[type=email][data-v-2bf63a74]:-ms-input-placeholder,input[type=password][data-v-2bf63a74]:-ms-input-placeholder,input[type=text][data-v-2bf63a74]:-ms-input-placeholder,textarea[data-v-2bf63a74]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-2bf63a74]::placeholder,input[type=password][data-v-2bf63a74]::placeholder,input[type=text][data-v-2bf63a74]::placeholder,textarea[data-v-2bf63a74]::placeholder{color:#7d858c}input[type=email][disabled][data-v-2bf63a74],input[type=password][disabled][data-v-2bf63a74],input[type=text][disabled][data-v-2bf63a74],textarea[disabled][data-v-2bf63a74]{color:#7d858c}}.auth-logo-text[data-v-2bf63a74]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-2bf63a74]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-2bf63a74]{min-width:310px}.auth-form .additional-link a[data-v-2bf63a74]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-2bf63a74]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-2bf63a74]{width:120px;margin-bottom:20px}.auth-form h1[data-v-2bf63a74]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-2bf63a74]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-2bf63a74]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-2bf63a74]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-2bf63a74]{width:100%}.auth-form h1[data-v-2bf63a74]{font-size:1.875em}.auth-form h2[data-v-2bf63a74]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-2bf63a74]{font-size:1.375em}.auth-form h2[data-v-2bf63a74]{font-size:1.125em}.auth-form input[data-v-2bf63a74]{min-width:0}.auth-form .additional-link[data-v-2bf63a74]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-2bf63a74],.auth-form h1[data-v-2bf63a74],.auth-form h2[data-v-2bf63a74]{color:#bec6cf}}.content-headline[data-v-2bf63a74]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-2bf63a74]{min-width:0}.duplicator .duplicator-add-button[data-v-2bf63a74]{width:100%}.duplicator .duplicator-item[data-v-2bf63a74]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-2bf63a74]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-2bf63a74]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-2bf63a74]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-2bf63a74],.duplicator .duplicator-item textarea[data-v-2bf63a74]{box-shadow:none;background:#fafafa}.form[data-v-2bf63a74]{max-width:580px;text-align:left}.submit-wrapper[data-v-2bf63a74]{text-align:right}.submit-wrapper .button[data-v-2bf63a74]{margin:58px 0 50px;width:100%}.title-icon[data-v-2bf63a74]{margin-bottom:10px;-webkit-animation:spinner-data-v-2bf63a74 5s linear infinite;animation:spinner-data-v-2bf63a74 5s linear infinite}.title-icon circle[data-v-2bf63a74],.title-icon path[data-v-2bf63a74]{color:inherit}@-webkit-keyframes spinner-data-v-2bf63a74{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-2bf63a74{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (prefers-color-scheme:dark){.duplicator .duplicator-item[data-v-2bf63a74]{background:#1e2024}.duplicator .duplicator-item input[data-v-2bf63a74],.duplicator .duplicator-item textarea[data-v-2bf63a74]{background:#131414}}.additional-link .black-link[data-v-2bf63a74]{color:#1b2539}.auth-form input[data-v-2bf63a74]{min-width:380px}@media (prefers-color-scheme:dark){.additional-link .black-link[data-v-2bf63a74]{color:#bec6cf}}",""])},pFam:function(a,t,e){"use strict";e("Qqv+")}}]);