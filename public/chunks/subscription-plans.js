(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{12:function(t,n,e){"use strict";var a={name:"InfoBox",props:["type"]},i=(e(227),e(0)),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);n.a=r.exports},13:function(t,n,e){"use strict";var a={name:"FormLabel",components:{Edit2Icon:e(1).m}},i=(e(229),e(0)),r=Object(i.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"form-label"},[n("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),n("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);n.a=r.exports},157:function(t,n,e){var a=e(434);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},17:function(t,n,e){"use strict";var a={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(e(235),e(0)),r=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"button outline"},[e("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"59e2dfc0",null);n.a=r.exports},21:function(t,n,e){"use strict";var a={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=e(0),r=Object(i.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return this.isVisible?n("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);n.a=r.exports},22:function(t,n,e){"use strict";var a={name:"AuthContentWrapper"},i=(e(239),e(0)),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);n.a=r.exports},227:function(t,n,e){"use strict";var a=e(53);e.n(a).a},228:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},229:function(t,n,e){"use strict";var a=e(54);e.n(a).a},230:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},235:function(t,n,e){"use strict";var a=e(57);e.n(a).a},236:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #111314;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},239:function(t,n,e){"use strict";var a=e(59);e.n(a).a},240:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},433:function(t,n,e){"use strict";var a=e(157);e.n(a).a},434:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,'.form[data-v-392fd7e4] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-392fd7e4] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-392fd7e4] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-392fd7e4] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-392fd7e4] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-392fd7e4] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-392fd7e4] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-392fd7e4] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-392fd7e4]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-392fd7e4] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-392fd7e4] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-392fd7e4] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-392fd7e4] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-392fd7e4] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-392fd7e4] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-392fd7e4] {\n  margin-left: 20px;\n}\n.error-message[data-v-392fd7e4] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-392fd7e4] {\n  width: 100%;\n}\ntextarea[data-v-392fd7e4],\ninput[type="password"][data-v-392fd7e4],\ninput[type="text"][data-v-392fd7e4],\ninput[type="number"][data-v-392fd7e4],\ninput[type="email"][data-v-392fd7e4] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-392fd7e4],\ninput[type="password"].is-error[data-v-392fd7e4],\ninput[type="text"].is-error[data-v-392fd7e4],\ninput[type="number"].is-error[data-v-392fd7e4],\ninput[type="email"].is-error[data-v-392fd7e4] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-392fd7e4]::-webkit-input-placeholder, input[type="password"][data-v-392fd7e4]::-webkit-input-placeholder, input[type="text"][data-v-392fd7e4]::-webkit-input-placeholder, input[type="number"][data-v-392fd7e4]::-webkit-input-placeholder, input[type="email"][data-v-392fd7e4]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392fd7e4]::-moz-placeholder, input[type="password"][data-v-392fd7e4]::-moz-placeholder, input[type="text"][data-v-392fd7e4]::-moz-placeholder, input[type="number"][data-v-392fd7e4]::-moz-placeholder, input[type="email"][data-v-392fd7e4]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392fd7e4]:-ms-input-placeholder, input[type="password"][data-v-392fd7e4]:-ms-input-placeholder, input[type="text"][data-v-392fd7e4]:-ms-input-placeholder, input[type="number"][data-v-392fd7e4]:-ms-input-placeholder, input[type="email"][data-v-392fd7e4]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392fd7e4]::-ms-input-placeholder, input[type="password"][data-v-392fd7e4]::-ms-input-placeholder, input[type="text"][data-v-392fd7e4]::-ms-input-placeholder, input[type="number"][data-v-392fd7e4]::-ms-input-placeholder, input[type="email"][data-v-392fd7e4]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392fd7e4]::placeholder,\ninput[type="password"][data-v-392fd7e4]::placeholder,\ninput[type="text"][data-v-392fd7e4]::placeholder,\ninput[type="number"][data-v-392fd7e4]::placeholder,\ninput[type="email"][data-v-392fd7e4]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392fd7e4]:focus,\ninput[type="password"][data-v-392fd7e4]:focus,\ninput[type="text"][data-v-392fd7e4]:focus,\ninput[type="number"][data-v-392fd7e4]:focus,\ninput[type="email"][data-v-392fd7e4]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-392fd7e4],\ninput[type="password"][disabled][data-v-392fd7e4],\ninput[type="text"][disabled][data-v-392fd7e4],\ninput[type="number"][disabled][data-v-392fd7e4],\ninput[type="email"][disabled][data-v-392fd7e4] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-392fd7e4] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-392fd7e4], .additional-link a[data-v-392fd7e4] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-392fd7e4]:hover, .additional-link a[data-v-392fd7e4]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-392fd7e4] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-392fd7e4] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-392fd7e4], .form textarea[data-v-392fd7e4] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-392fd7e4] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-392fd7e4] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-392fd7e4] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-392fd7e4] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-392fd7e4] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-392fd7e4] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-392fd7e4] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-392fd7e4] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-392fd7e4],\n  input[type="password"][data-v-392fd7e4],\n  input[type="number"][data-v-392fd7e4],\n  input[type="text"][data-v-392fd7e4],\n  input[type="email"][data-v-392fd7e4] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-392fd7e4] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-392fd7e4] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-392fd7e4] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-392fd7e4] {\n    color: #bec6cf;\n}\ntextarea[data-v-392fd7e4],\n  input[type="password"][data-v-392fd7e4],\n  input[type="text"][data-v-392fd7e4],\n  input[type="number"][data-v-392fd7e4],\n  input[type="email"][data-v-392fd7e4] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-392fd7e4]::-webkit-input-placeholder, input[type="password"][data-v-392fd7e4]::-webkit-input-placeholder, input[type="text"][data-v-392fd7e4]::-webkit-input-placeholder, input[type="number"][data-v-392fd7e4]::-webkit-input-placeholder, input[type="email"][data-v-392fd7e4]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-392fd7e4]::-moz-placeholder, input[type="password"][data-v-392fd7e4]::-moz-placeholder, input[type="text"][data-v-392fd7e4]::-moz-placeholder, input[type="number"][data-v-392fd7e4]::-moz-placeholder, input[type="email"][data-v-392fd7e4]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-392fd7e4]:-ms-input-placeholder, input[type="password"][data-v-392fd7e4]:-ms-input-placeholder, input[type="text"][data-v-392fd7e4]:-ms-input-placeholder, input[type="number"][data-v-392fd7e4]:-ms-input-placeholder, input[type="email"][data-v-392fd7e4]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-392fd7e4]::-ms-input-placeholder, input[type="password"][data-v-392fd7e4]::-ms-input-placeholder, input[type="text"][data-v-392fd7e4]::-ms-input-placeholder, input[type="number"][data-v-392fd7e4]::-ms-input-placeholder, input[type="email"][data-v-392fd7e4]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-392fd7e4]::placeholder,\n  input[type="password"][data-v-392fd7e4]::placeholder,\n  input[type="text"][data-v-392fd7e4]::placeholder,\n  input[type="number"][data-v-392fd7e4]::placeholder,\n  input[type="email"][data-v-392fd7e4]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-392fd7e4],\n  input[type="password"][disabled][data-v-392fd7e4],\n  input[type="text"][disabled][data-v-392fd7e4],\n  input[type="number"][disabled][data-v-392fd7e4],\n  input[type="email"][disabled][data-v-392fd7e4] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-392fd7e4] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-392fd7e4] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-392fd7e4] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-392fd7e4] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-392fd7e4] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-392fd7e4] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-392fd7e4] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-392fd7e4] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-392fd7e4] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-392fd7e4] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-392fd7e4] {\n    width: 100%;\n}\n.auth-form h1[data-v-392fd7e4] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-392fd7e4] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-392fd7e4] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-392fd7e4] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-392fd7e4] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-392fd7e4] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-392fd7e4], .auth-form h2[data-v-392fd7e4], .auth-form .additional-link[data-v-392fd7e4] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-392fd7e4] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-392fd7e4] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-392fd7e4] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-392fd7e4] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-392fd7e4] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-392fd7e4] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-392fd7e4] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-392fd7e4],\n.duplicator .duplicator-item textarea[data-v-392fd7e4] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-392fd7e4] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-392fd7e4] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-392fd7e4] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-392fd7e4] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-392fd7e4 5s linear infinite;\n          animation: spinner-data-v-392fd7e4 5s linear infinite;\n}\n.title-icon circle[data-v-392fd7e4], .title-icon path[data-v-392fd7e4] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-392fd7e4 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-392fd7e4 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-392fd7e4] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-392fd7e4],\n  .duplicator .duplicator-item textarea[data-v-392fd7e4] {\n    background: #111314;\n}\n}\n',""])},53:function(t,n,e){var a=e(228);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},54:function(t,n,e){var a=e(230);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},563:function(t,n,e){"use strict";e.r(n);var a=e(9),i=e.n(a),r=e(8),o=e(22),d=e(14),l=e(13),s=e(11),p=e(12),c=e(21),f=e(17),u=e(1),m=e(10),v=e(4),b=e.n(v);function h(t,n,e,a,i,r,o){try{var d=t[r](o),l=d.value}catch(t){return void e(t)}d.done?n(l):Promise.resolve(l).then(a,i)}var x={name:"subscriptionPlans",components:{AuthContentWrapper:o.a,ValidationProvider:r.ValidationProvider,ValidationObserver:r.ValidationObserver,SettingsIcon:u.M,SelectInput:d.a,AuthContent:c.a,ButtonBase:s.a,AuthButton:f.a,FormLabel:l.a,required:m.a,InfoBox:p.a,XIcon:u.X},computed:{submitButtonText:function(){return this.isLoading?"Creating Subscription Stripe Plans":"Save and Go Next"}},data:function(){return{isLoading:!1,isError:!1,errorMessage:"",subscriptionPlans:[{id:1,type:"plan",attributes:{name:"",description:"",price:"",capacity:""}}]}},methods:{subscriptionPlansSubmit:function(){var t,n=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$refs.subscriptionPlans.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:n.isLoading=!0,n.isError=!1,b.a.post("/api/setup/stripe-plans",{plans:n.subscriptionPlans}).then((function(){n.$router.push({name:"EnvironmentSetup"})})).catch((function(t){(t.response.status=500)&&(n.isError=!0,n.errorMessage=t.response.data.message)})).finally((function(){n.isLoading=!1}));case 8:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(a,i){var r=t.apply(n,e);function o(t){h(r,a,i,o,d,"next",t)}function d(t){h(r,a,i,o,d,"throw",t)}o(void 0)}))})()},addRow:function(){this.subscriptionPlans.push({id:Math.floor(1e7*Math.random()),type:"plans",attributes:{name:"",description:"",price:"",capacity:""}})},removeRow:function(t){this.subscriptionPlans=this.subscriptionPlans.filter((function(n){return n.id!==t.id}))}},created:function(){this.$scrollTop()}},g=(e(433),e(0)),y=Object(g.a)(x,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),t._v(" "),e("h1",[t._v("Setup Wizard")]),t._v(" "),e("h2",[t._v("Set up plans for your customers.")])],1),t._v(" "),e("ValidationObserver",{ref:"subscriptionPlans",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(n){return n.preventDefault(),t.subscriptionPlansSubmit(n)}},scopedSlots:t._u([{key:"default",fn:function(n){n.invalid;return[e("FormLabel",[t._v("Create your plans")]),t._v(" "),e("InfoBox",[e("p",[t._v("Your plans will be "),e("b",[t._v("sorted automatically")]),t._v(" in ascent order by plan price. All plans is automatically created as monthly plans.")])]),t._v(" "),e("div",{staticClass:"duplicator"},[t._l(t.subscriptionPlans,(function(n,a){return e("div",{key:a++,staticClass:"plan-item duplicator-item"},[1!==a?e("x-icon",{staticClass:"delete-item",attrs:{size:"22"},on:{click:function(e){return t.removeRow(n)}}}):t._e(),t._v(" "),e("b",{staticClass:"duplicator-title"},[t._v(t._s(a)+". Plan")]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Name:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:n.attributes.name,expression:"plan.attributes.name"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your plan name",type:"text"},domProps:{value:n.attributes.name},on:{input:function(e){e.target.composing||t.$set(n.attributes,"name",e.target.value)}}}),t._v(" "),i[0]?e("span",{staticClass:"error-message"},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Description (optional):")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Description"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.attributes.description,expression:"plan.attributes.description"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your plan description"},domProps:{value:n.attributes.description},on:{input:function(e){e.target.composing||t.$set(n.attributes,"description",e.target.value)}}}),t._v(" "),i[0]?e("span",{staticClass:"error-message"},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Price:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Price",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:n.attributes.price,expression:"plan.attributes.price"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your plan price",type:"number",step:"0.01",min:"1",max:"99999"},domProps:{value:n.attributes.price},on:{input:function(e){e.target.composing||t.$set(n.attributes,"price",e.target.value)}}}),t._v(" "),i[0]?e("span",{staticClass:"error-message"},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v("Storage Capacity:")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Storage Capacity",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:n.attributes.capacity,expression:"plan.attributes.capacity"}],class:{"is-error":i[0]},attrs:{min:"1",max:"999999999",placeholder:"Type storage capacity in GB",type:"number"},domProps:{value:n.attributes.capacity},on:{input:function(e){e.target.composing||t.$set(n.attributes,"capacity",e.target.value)}}}),t._v(" "),i[0]?e("span",{staticClass:"error-message"},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1)],1)})),t._v(" "),e("ButtonBase",{staticClass:"duplicator-add-button",attrs:{"button-style":"theme-solid"},nativeOn:{click:function(n){return t.addRow(n)}}},[t._v("Add New Plan\n                ")])],2),t._v(" "),t.isError?e("InfoBox",{staticStyle:{"margin-top":"40px"},attrs:{type:"error"}},[e("p",[t._v(t._s(t.errorMessage))])]):t._e(),t._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:t.submitButtonText,loading:t.isLoading,disabled:t.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"392fd7e4",null);n.default=y.exports},57:function(t,n,e){var a=e(236);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},59:function(t,n,e){var a=e(240);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)}}]);