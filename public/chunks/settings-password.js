(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{13:function(a,t,e){"use strict";var n={name:"FormLabel",components:{Edit2Icon:e(1).m}},r=(e(229),e(0)),o=Object(r.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=o.exports},142:function(a,t,e){var n=e(404);"string"==typeof n&&(n=[[a.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,r);n.locals&&(a.exports=n.locals)},15:function(a,t,e){"use strict";var n={name:"PageTab",props:["isLoading"],components:{Spinner:e(19).a}},r=(e(233),e(0)),o=Object(r.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"page-tab"},[this.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):this._e(),this._v(" "),this.isLoading?this._e():this._t("default")],2)}),[],!1,null,"cb8ef734",null);t.a=o.exports},16:function(a,t,e){"use strict";var n={name:"PageTabGroup"},r=(e(231),e(0)),o=Object(r.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);t.a=o.exports},174:function(a,t,e){"use strict";var n={name:"TextLabel"},r=(e(283),e(0)),o=Object(r.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"theme-label"},[this._t("default")],2)}),[],!1,null,"4c650264",null);t.a=o.exports},175:function(a,t,e){"use strict";var n={props:["label","name","avatar","info","error"],data:function(){return{imagePreview:void 0}},watch:{imagePreview:function(a){this.$store.commit("UPDATE_AVATAR",a)}},methods:{showImagePreview:function(a){var t=this,e=a.target.files[0].name,n=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg"].includes(n)){var r=a.target.files[0],o=new FileReader;o.onload=function(){return t.imagePreview=o.result},o.readAsDataURL(r),this.$updateImage("/user/profile","avatar",a.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.avatar&&(this.imagePreview=this.avatar)}},r=(e(281),e(0)),o=Object(r.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dropzone",class:{"is-error":a.error}},[e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file",name:a.name},on:{change:function(t){return a.showImagePreview(t)}}}),a._v(" "),a.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:a.imagePreview}}):a._e(),a._v(" "),a.imagePreview?e("img",{ref:"image",staticClass:"image-preview blurred",attrs:{src:a.imagePreview}}):a._e()])}),[],!1,null,"fa58d4b2",null);t.a=o.exports},20:function(a,t,e){"use strict";var n={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e(1).d}},r=(e(237),e(0)),o=Object(r.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-header"},[a.canBack?e("div",{staticClass:"go-back",on:{click:function(t){return a.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);t.a=o.exports},229:function(a,t,e){"use strict";var n=e(54);e.n(n).a},230:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},231:function(a,t,e){"use strict";var n=e(55);e.n(n).a},232:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".page-tab-group[data-v-1bb470e4] {\n  margin-bottom: 65px;\n}\n",""])},233:function(a,t,e){"use strict";var n=e(56);e.n(n).a},234:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,"",""])},237:function(a,t,e){"use strict";var n=e(58);e.n(n).a},238:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".page-header[data-v-aafe7e24] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-aafe7e24] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-aafe7e24] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-aafe7e24] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-aafe7e24] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-aafe7e24] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-aafe7e24] {\n    background: #111314;\n}\n.page-header .title[data-v-aafe7e24] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-aafe7e24] {\n    fill: #00BC7E;\n}\n}\n",""])},281:function(a,t,e){"use strict";var n=e(81);e.n(n).a},282:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".dropzone[data-v-fa58d4b2] {\n  position: relative;\n  line-height: 0;\n}\n.dropzone input[type='file'][data-v-fa58d4b2] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-fa58d4b2] {\n  width: 62px;\n  height: 62px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  z-index: 1;\n  position: relative;\n}\n.dropzone .blurred[data-v-fa58d4b2] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  opacity: 0.5;\n}\n",""])},283:function(a,t,e){"use strict";var n=e(82);e.n(n).a},284:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".theme-label[data-v-4c650264] {\n  font-size: 0.875em;\n  color: #00BC7E;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 20px;\n}\n",""])},403:function(a,t,e){"use strict";var n=e(142);e.n(n).a},404:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,'.form[data-v-45c71fba] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-45c71fba] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-45c71fba] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-45c71fba] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-45c71fba] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-45c71fba] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-45c71fba] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-45c71fba] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-45c71fba]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-45c71fba] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-45c71fba] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-45c71fba] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-45c71fba] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-45c71fba] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-45c71fba] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-45c71fba] {\n  margin-left: 20px;\n}\n.error-message[data-v-45c71fba] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-45c71fba] {\n  width: 100%;\n}\ntextarea[data-v-45c71fba],\ninput[type="password"][data-v-45c71fba],\ninput[type="text"][data-v-45c71fba],\ninput[type="number"][data-v-45c71fba],\ninput[type="email"][data-v-45c71fba] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-45c71fba],\ninput[type="password"].is-error[data-v-45c71fba],\ninput[type="text"].is-error[data-v-45c71fba],\ninput[type="number"].is-error[data-v-45c71fba],\ninput[type="email"].is-error[data-v-45c71fba] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-45c71fba]::-webkit-input-placeholder, input[type="password"][data-v-45c71fba]::-webkit-input-placeholder, input[type="text"][data-v-45c71fba]::-webkit-input-placeholder, input[type="number"][data-v-45c71fba]::-webkit-input-placeholder, input[type="email"][data-v-45c71fba]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-45c71fba]::-moz-placeholder, input[type="password"][data-v-45c71fba]::-moz-placeholder, input[type="text"][data-v-45c71fba]::-moz-placeholder, input[type="number"][data-v-45c71fba]::-moz-placeholder, input[type="email"][data-v-45c71fba]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-45c71fba]:-ms-input-placeholder, input[type="password"][data-v-45c71fba]:-ms-input-placeholder, input[type="text"][data-v-45c71fba]:-ms-input-placeholder, input[type="number"][data-v-45c71fba]:-ms-input-placeholder, input[type="email"][data-v-45c71fba]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-45c71fba]::-ms-input-placeholder, input[type="password"][data-v-45c71fba]::-ms-input-placeholder, input[type="text"][data-v-45c71fba]::-ms-input-placeholder, input[type="number"][data-v-45c71fba]::-ms-input-placeholder, input[type="email"][data-v-45c71fba]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-45c71fba]::placeholder,\ninput[type="password"][data-v-45c71fba]::placeholder,\ninput[type="text"][data-v-45c71fba]::placeholder,\ninput[type="number"][data-v-45c71fba]::placeholder,\ninput[type="email"][data-v-45c71fba]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-45c71fba]:focus,\ninput[type="password"][data-v-45c71fba]:focus,\ninput[type="text"][data-v-45c71fba]:focus,\ninput[type="number"][data-v-45c71fba]:focus,\ninput[type="email"][data-v-45c71fba]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-45c71fba],\ninput[type="password"][disabled][data-v-45c71fba],\ninput[type="text"][disabled][data-v-45c71fba],\ninput[type="number"][disabled][data-v-45c71fba],\ninput[type="email"][disabled][data-v-45c71fba] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-45c71fba] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-45c71fba], .additional-link a[data-v-45c71fba] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-45c71fba]:hover, .additional-link a[data-v-45c71fba]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-45c71fba] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-45c71fba] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-45c71fba], .form textarea[data-v-45c71fba] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-45c71fba] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-45c71fba] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-45c71fba] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-45c71fba] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-45c71fba] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-45c71fba] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-45c71fba] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-45c71fba] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-45c71fba],\n  input[type="password"][data-v-45c71fba],\n  input[type="number"][data-v-45c71fba],\n  input[type="text"][data-v-45c71fba],\n  input[type="email"][data-v-45c71fba] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-45c71fba] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-45c71fba] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-45c71fba] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-45c71fba] {\n    color: #bec6cf;\n}\ntextarea[data-v-45c71fba],\n  input[type="password"][data-v-45c71fba],\n  input[type="text"][data-v-45c71fba],\n  input[type="number"][data-v-45c71fba],\n  input[type="email"][data-v-45c71fba] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-45c71fba]::-webkit-input-placeholder, input[type="password"][data-v-45c71fba]::-webkit-input-placeholder, input[type="text"][data-v-45c71fba]::-webkit-input-placeholder, input[type="number"][data-v-45c71fba]::-webkit-input-placeholder, input[type="email"][data-v-45c71fba]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-45c71fba]::-moz-placeholder, input[type="password"][data-v-45c71fba]::-moz-placeholder, input[type="text"][data-v-45c71fba]::-moz-placeholder, input[type="number"][data-v-45c71fba]::-moz-placeholder, input[type="email"][data-v-45c71fba]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-45c71fba]:-ms-input-placeholder, input[type="password"][data-v-45c71fba]:-ms-input-placeholder, input[type="text"][data-v-45c71fba]:-ms-input-placeholder, input[type="number"][data-v-45c71fba]:-ms-input-placeholder, input[type="email"][data-v-45c71fba]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-45c71fba]::-ms-input-placeholder, input[type="password"][data-v-45c71fba]::-ms-input-placeholder, input[type="text"][data-v-45c71fba]::-ms-input-placeholder, input[type="number"][data-v-45c71fba]::-ms-input-placeholder, input[type="email"][data-v-45c71fba]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-45c71fba]::placeholder,\n  input[type="password"][data-v-45c71fba]::placeholder,\n  input[type="text"][data-v-45c71fba]::placeholder,\n  input[type="number"][data-v-45c71fba]::placeholder,\n  input[type="email"][data-v-45c71fba]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-45c71fba],\n  input[type="password"][disabled][data-v-45c71fba],\n  input[type="text"][disabled][data-v-45c71fba],\n  input[type="number"][disabled][data-v-45c71fba],\n  input[type="email"][disabled][data-v-45c71fba] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-45c71fba] {\n  max-width: 100%;\n}\n@media only screen and (max-width: 960px) {\n.form .button-base[data-v-45c71fba] {\n    width: 100%;\n    margin-top: 0;\n    text-align: center;\n}\n}\n',""])},54:function(a,t,e){var n=e(230);"string"==typeof n&&(n=[[a.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,r);n.locals&&(a.exports=n.locals)},55:function(a,t,e){var n=e(232);"string"==typeof n&&(n=[[a.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,r);n.locals&&(a.exports=n.locals)},56:function(a,t,e){var n=e(234);"string"==typeof n&&(n=[[a.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,r);n.locals&&(a.exports=n.locals)},58:function(a,t,e){var n=e(238);"string"==typeof n&&(n=[[a.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,r);n.locals&&(a.exports=n.locals)},599:function(a,t,e){"use strict";e.r(t);var n=e(9),r=e.n(n),o=e(8),i=e(16),s=e(175),p=e(13),l=e(18),c=e(11),d=e(15),f=e(20),b=e(174),u=e(10),m=e(3),v=e(4),h=e.n(v);function w(a,t,e,n,r,o,i){try{var s=a[o](i),p=s.value}catch(a){return void e(a)}s.done?t(p):Promise.resolve(p).then(n,r)}var g={name:"Profile",components:{PageTabGroup:i.a,FormLabel:p.a,PageTab:d.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,UserImageInput:s.a,MobileHeader:l.a,PageHeader:f.a,ButtonBase:c.a,ThemeLabel:b.a,required:u.a},data:function(){return{newPasswordConfirmation:"",newPassword:"",isLoading:!1}},methods:{resetPassword:function(){var a,t=this;return(a=r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.password.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:h.a.post(t.$store.getters.api+"/user/password",{password:t.newPassword,password_confirmation:t.newPasswordConfirmation}).then((function(){t.newPassword="",t.newPasswordConfirmation="",t.$refs.password.reset(),m.a.$emit("success:open",{title:t.$t("popup_pass_changed.title"),message:t.$t("popup_pass_changed.message")})})).catch((function(a){422==a.response.status&&a.response.data.errors.password&&t.$refs.password.setErrors({"New Password":a.response.data.errors.password})}));case 6:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(n,r){var o=a.apply(t,e);function i(a){w(o,n,r,i,s,"next",a)}function s(a){w(o,n,r,i,s,"throw",a)}i(void 0)}))})()}}},x=(e(403),e(0)),y=Object(x.a)(g,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("PageTab",[e("PageTabGroup",[e("ValidationObserver",{ref:"password",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.resetPassword(t)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("FormLabel",[a._v(a._s(a.$t("user_password.title")))]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("page_create_password.label_new_pass"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"New Password",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.newPassword,expression:"newPassword"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("page_create_password.label_new_pass"),type:"password"},domProps:{value:a.newPassword},on:{input:function(t){t.target.composing||(a.newPassword=t.target.value)}}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("page_create_password.label_confirm_pass"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Confirm Your Password",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.newPasswordConfirmation,expression:"newPasswordConfirmation"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("page_create_password.label_confirm_pass"),type:"password"},domProps:{value:a.newPasswordConfirmation},on:{input:function(t){t.target.composing||(a.newPasswordConfirmation=t.target.value)}}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("ButtonBase",{staticClass:"confirm-form",attrs:{type:"submit","button-style":"theme"}},[a._v("\n                    "+a._s(a.$t("profile.store_pass"))+"\n                ")])],1)]}}])})],1)],1)}),[],!1,null,"45c71fba",null);t.default=y.exports},81:function(a,t,e){var n=e(282);"string"==typeof n&&(n=[[a.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,r);n.locals&&(a.exports=n.locals)},82:function(a,t,e){var n=e(284);"string"==typeof n&&(n=[[a.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,r);n.locals&&(a.exports=n.locals)}}]);