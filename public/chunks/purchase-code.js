(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{12:function(e,a,n){"use strict";var t={name:"InfoBox",props:["type"]},o=(n(227),n(0)),i=Object(o.a)(t,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);a.a=i.exports},151:function(e,a,n){var t=n(422);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(t,o);t.locals&&(e.exports=t.locals)},17:function(e,a,n){"use strict";var t={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(n(235),n(0)),i=Object(o.a)(t,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("button",{staticClass:"button outline"},[n("span",{staticClass:"text-label"},[e._v(e._s(e.text))]),e._v(" "),e.loading?n("span",{staticClass:"icon"},[n("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):e._e(),e._v(" "),!e.loading&&e.icon?n("span",{staticClass:"icon"},[n("FontAwesomeIcon",{attrs:{icon:e.icon}})],1):e._e()])}),[],!1,null,"59e2dfc0",null);a.a=i.exports},21:function(e,a,n){"use strict";var t={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=n(0),i=Object(o.a)(t,(function(){var e=this.$createElement,a=this._self._c||e;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=i.exports},22:function(e,a,n){"use strict";var t={name:"AuthContentWrapper"},o=(n(239),n(0)),i=Object(o.a)(t,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=i.exports},227:function(e,a,n){"use strict";var t=n(53);n.n(t).a},228:function(e,a,n){(e.exports=n(5)(!1)).push([e.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},235:function(e,a,n){"use strict";var t=n(57);n.n(t).a},236:function(e,a,n){(e.exports=n(5)(!1)).push([e.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #111314;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},239:function(e,a,n){"use strict";var t=n(59);n.n(t).a},240:function(e,a,n){(e.exports=n(5)(!1)).push([e.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},421:function(e,a,n){"use strict";var t=n(151);n.n(t).a},422:function(e,a,n){(e.exports=n(5)(!1)).push([e.i,'.form.inline-form[data-v-72a7ef9e] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-72a7ef9e] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-72a7ef9e] {\n  position: absolute;\n  left: 0;\n  top: 50px;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-72a7ef9e] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-72a7ef9e] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-72a7ef9e]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-72a7ef9e] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-72a7ef9e] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-72a7ef9e] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-72a7ef9e] {\n  width: 100%;\n}\ntextarea[data-v-72a7ef9e],\ninput[type="password"][data-v-72a7ef9e],\ninput[type="text"][data-v-72a7ef9e],\ninput[type="email"][data-v-72a7ef9e] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-72a7ef9e],\ninput[type="password"].is-error[data-v-72a7ef9e],\ninput[type="text"].is-error[data-v-72a7ef9e],\ninput[type="email"].is-error[data-v-72a7ef9e] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-72a7ef9e]::-webkit-input-placeholder, input[type="password"][data-v-72a7ef9e]::-webkit-input-placeholder, input[type="text"][data-v-72a7ef9e]::-webkit-input-placeholder, input[type="email"][data-v-72a7ef9e]::-webkit-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-72a7ef9e]::-moz-placeholder, input[type="password"][data-v-72a7ef9e]::-moz-placeholder, input[type="text"][data-v-72a7ef9e]::-moz-placeholder, input[type="email"][data-v-72a7ef9e]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-72a7ef9e]:-ms-input-placeholder, input[type="password"][data-v-72a7ef9e]:-ms-input-placeholder, input[type="text"][data-v-72a7ef9e]:-ms-input-placeholder, input[type="email"][data-v-72a7ef9e]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-72a7ef9e]::-ms-input-placeholder, input[type="password"][data-v-72a7ef9e]::-ms-input-placeholder, input[type="text"][data-v-72a7ef9e]::-ms-input-placeholder, input[type="email"][data-v-72a7ef9e]::-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-72a7ef9e]::placeholder,\ninput[type="password"][data-v-72a7ef9e]::placeholder,\ninput[type="text"][data-v-72a7ef9e]::placeholder,\ninput[type="email"][data-v-72a7ef9e]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-72a7ef9e]:focus,\ninput[type="password"][data-v-72a7ef9e]:focus,\ninput[type="text"][data-v-72a7ef9e]:focus,\ninput[type="email"][data-v-72a7ef9e]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-72a7ef9e],\ninput[type="password"][disabled][data-v-72a7ef9e],\ninput[type="text"][disabled][data-v-72a7ef9e],\ninput[type="email"][disabled][data-v-72a7ef9e] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-72a7ef9e] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-72a7ef9e], .additional-link a[data-v-72a7ef9e] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-72a7ef9e]:hover, .additional-link a[data-v-72a7ef9e]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-72a7ef9e] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-72a7ef9e], .form textarea[data-v-72a7ef9e] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-72a7ef9e] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-72a7ef9e] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-72a7ef9e] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-72a7ef9e] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-72a7ef9e] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-72a7ef9e] {\n    padding: 14px 32px;\n}\ntextarea[data-v-72a7ef9e],\n  input[type="password"][data-v-72a7ef9e],\n  input[type="text"][data-v-72a7ef9e],\n  input[type="email"][data-v-72a7ef9e] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-72a7ef9e] {\n    color: #bec6cf;\n}\ntextarea[data-v-72a7ef9e],\n  input[type="password"][data-v-72a7ef9e],\n  input[type="text"][data-v-72a7ef9e],\n  input[type="email"][data-v-72a7ef9e] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-72a7ef9e]::-webkit-input-placeholder, input[type="password"][data-v-72a7ef9e]::-webkit-input-placeholder, input[type="text"][data-v-72a7ef9e]::-webkit-input-placeholder, input[type="email"][data-v-72a7ef9e]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-72a7ef9e]::-moz-placeholder, input[type="password"][data-v-72a7ef9e]::-moz-placeholder, input[type="text"][data-v-72a7ef9e]::-moz-placeholder, input[type="email"][data-v-72a7ef9e]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-72a7ef9e]:-ms-input-placeholder, input[type="password"][data-v-72a7ef9e]:-ms-input-placeholder, input[type="text"][data-v-72a7ef9e]:-ms-input-placeholder, input[type="email"][data-v-72a7ef9e]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-72a7ef9e]::-ms-input-placeholder, input[type="password"][data-v-72a7ef9e]::-ms-input-placeholder, input[type="text"][data-v-72a7ef9e]::-ms-input-placeholder, input[type="email"][data-v-72a7ef9e]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-72a7ef9e]::placeholder,\n  input[type="password"][data-v-72a7ef9e]::placeholder,\n  input[type="text"][data-v-72a7ef9e]::placeholder,\n  input[type="email"][data-v-72a7ef9e]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-72a7ef9e],\n  input[type="password"][disabled][data-v-72a7ef9e],\n  input[type="text"][disabled][data-v-72a7ef9e],\n  input[type="email"][disabled][data-v-72a7ef9e] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-72a7ef9e] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-72a7ef9e] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-72a7ef9e] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-72a7ef9e] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-72a7ef9e] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-72a7ef9e] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-72a7ef9e] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-72a7ef9e] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-72a7ef9e] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-72a7ef9e] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-72a7ef9e] {\n    width: 100%;\n}\n.auth-form h1[data-v-72a7ef9e] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-72a7ef9e] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-72a7ef9e] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-72a7ef9e] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-72a7ef9e] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-72a7ef9e] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-72a7ef9e], .auth-form h2[data-v-72a7ef9e], .auth-form .additional-link[data-v-72a7ef9e] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-72a7ef9e] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-72a7ef9e] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-72a7ef9e] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-72a7ef9e] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-72a7ef9e] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-72a7ef9e] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-72a7ef9e] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-72a7ef9e],\n.duplicator .duplicator-item textarea[data-v-72a7ef9e] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-72a7ef9e] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-72a7ef9e] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-72a7ef9e] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-72a7ef9e] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-72a7ef9e 5s linear infinite;\n          animation: spinner-data-v-72a7ef9e 5s linear infinite;\n}\n.title-icon circle[data-v-72a7ef9e], .title-icon path[data-v-72a7ef9e] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-72a7ef9e {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-72a7ef9e {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-72a7ef9e] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-72a7ef9e],\n  .duplicator .duplicator-item textarea[data-v-72a7ef9e] {\n    background: #111314;\n}\n}\n.additional-link .black-link[data-v-72a7ef9e] {\n  color: #1B2539;\n}\n.auth-form input[data-v-72a7ef9e] {\n  min-width: 380px;\n}\n@media (prefers-color-scheme: dark) {\n.additional-link .black-link[data-v-72a7ef9e] {\n    color: #bec6cf;\n}\n}\n',""])},53:function(e,a,n){var t=n(228);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(t,o);t.locals&&(e.exports=t.locals)},57:function(e,a,n){var t=n(236);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(t,o);t.locals&&(e.exports=t.locals)},581:function(e,a,n){"use strict";n.r(a);var t=n(9),o=n.n(t),i=n(22),r=n(8),d=n(12),l=n(21),p=n(17),s=n(1),f=n(10),c=n(4),u=n.n(c);function m(e,a,n,t,o,i,r){try{var d=e[i](r),l=d.value}catch(e){return void n(e)}d.done?a(l):Promise.resolve(l).then(t,o)}var v={name:"PurchaseCode",components:{AuthContentWrapper:i.a,ValidationProvider:r.ValidationProvider,ValidationObserver:r.ValidationObserver,SettingsIcon:s.M,AuthContent:l.a,AuthButton:p.a,required:f.a,InfoBox:d.a},data:function(){return{isLoading:!1,purchaseCode:""}},methods:{verifyPurchaseCode:function(){var e,a=this;return(e=o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$refs.verifyPurchaseCode.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:a.isLoading=!0,u.a.post("/api/setup/purchase-code",{purchaseCode:a.purchaseCode}).then((function(e){a.isLoading=!1,localStorage.setItem("purchase_code",a.purchaseCode),a.$router.push({name:"Database"})})).catch((function(e){a.isLoading=!1,400==e.response.status?a.$refs.verifyPurchaseCode.setErrors({"Purchase Code":["Purchase code is invalid."]}):404==e.response.status?a.$refs.verifyPurchaseCode.setErrors({"Purchase Code":["You may have misconfigured the app, please read the readme file and try it again."]}):a.$refs.verifyPurchaseCode.setErrors({"Purchase Code":["Something is wrong. Please try again."]})}));case 7:case"end":return e.stop()}}),e)})),function(){var a=this,n=arguments;return new Promise((function(t,o){var i=e.apply(a,n);function r(e){m(i,t,o,r,d,"next",e)}function d(e){m(i,t,o,r,d,"throw",e)}r(void 0)}))})()}}},h=(n(421),n(0)),b=Object(h.a)(v,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("AuthContentWrapper",{ref:"auth"},[n("AuthContent",{attrs:{name:"licence-verify",visible:!0}},[n("div",{staticClass:"content-headline"},[n("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),e._v(" "),n("h1",[e._v("Setup Wizard")]),e._v(" "),n("h2",[e._v("Please set your purchase code before continue to set up your application.")])],1),e._v(" "),n("ValidationObserver",{ref:"verifyPurchaseCode",staticClass:"form inline-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),e.verifyPurchaseCode(a)}},scopedSlots:e._u([{key:"default",fn:function(a){a.invalid;return[n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Purchase Code",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.purchaseCode,expression:"purchaseCode"}],class:{"is-error":t[0]},attrs:{placeholder:"Paste your purchase code",type:"text"},domProps:{value:e.purchaseCode},on:{input:function(a){a.target.composing||(e.purchaseCode=a.target.value)}}}),e._v(" "),t[0]?n("span",{staticClass:"error-message"},[e._v(e._s(t[0]))]):e._e()]}}],null,!0)}),e._v(" "),n("AuthButton",{attrs:{icon:"chevron-right",text:"Verify",loading:e.isLoading,disabled:e.isLoading}})]}}])}),e._v(" "),n("p",{staticClass:"additional-link"},[n("a",{attrs:{href:"https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-",target:"_blank"}},[e._v("\n                Where I can find purchase code?\n            ")]),e._v(" "),n("a",{staticClass:"black-link",attrs:{href:"https://codecanyon.net/item/vue-file-manager-with-laravel-backend/25815986",target:"_blank"}},[e._v("\n                Don’t have purchase code?\n            ")])])],1)],1)}),[],!1,null,"72a7ef9e",null);a.default=b.exports},59:function(e,a,n){var t=n(240);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(t,o);t.locals&&(e.exports=t.locals)}}]);