(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"9Nw5":function(e,t,a){"use strict";a("UP53")},KnjL:function(e,t,a){"use strict";var o={name:"InfoBox",props:["type"]},r=(a("twCh"),a("KHd+")),n=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"384ec59e",null);t.a=n.exports},RTIO:function(e,t,a){"use strict";a("hBLZ")},Rbea:function(e,t,a){"use strict";var o={props:["label","name","avatar","info","error"],data:function(){return{imagePreview:void 0}},watch:{imagePreview:function(e){this.$store.commit("UPDATE_AVATAR",e)}},methods:{showImagePreview:function(e){var t=this,a=e.target.files[0].name,o=a.substring(a.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg"].includes(o)){var r=e.target.files[0],n=new FileReader;n.onload=function(){return t.imagePreview=n.result},n.readAsDataURL(r),this.$updateImage("/user/settings","avatar",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.avatar&&(this.imagePreview=this.avatar)}},r=(a("9Nw5"),a("KHd+")),n=Object(r.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropzone",class:{"is-error":e.error}},[a("input",{ref:"file",staticClass:"dummy",attrs:{type:"file",name:e.name},on:{change:function(t){return e.showImagePreview(t)}}}),e._v(" "),e.imagePreview?a("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),e.imagePreview?a("img",{ref:"image",staticClass:"image-preview blurred",attrs:{src:e.imagePreview}}):e._e()])}),[],!1,null,"d0446cc6",null);t.a=n.exports},UP53:function(e,t,a){var o=a("xMa7");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(e.exports=o.locals)},XPoF:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form[data-v-8ca1f9fe]{max-width:700px}.form.inline-form[data-v-8ca1f9fe]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-8ca1f9fe]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-8ca1f9fe]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-8ca1f9fe]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-8ca1f9fe]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-8ca1f9fe]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-8ca1f9fe]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-8ca1f9fe]:last-child{margin-bottom:0}.form.block-form .button[data-v-8ca1f9fe]{margin-top:50px}.form .inline-wrapper[data-v-8ca1f9fe]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-8ca1f9fe]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-8ca1f9fe]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-8ca1f9fe]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-8ca1f9fe]{display:flex}.single-line-form .submit-button[data-v-8ca1f9fe]{margin-left:20px}.error-message[data-v-8ca1f9fe]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-8ca1f9fe]{width:100%}input[type=email][data-v-8ca1f9fe],input[type=number][data-v-8ca1f9fe],input[type=password][data-v-8ca1f9fe],input[type=text][data-v-8ca1f9fe],textarea[data-v-8ca1f9fe]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-8ca1f9fe],input[type=number].is-error[data-v-8ca1f9fe],input[type=password].is-error[data-v-8ca1f9fe],input[type=text].is-error[data-v-8ca1f9fe],textarea.is-error[data-v-8ca1f9fe]{border-color:#fd397a}input[type=email][data-v-8ca1f9fe]::-moz-placeholder,input[type=number][data-v-8ca1f9fe]::-moz-placeholder,input[type=password][data-v-8ca1f9fe]::-moz-placeholder,input[type=text][data-v-8ca1f9fe]::-moz-placeholder,textarea[data-v-8ca1f9fe]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-8ca1f9fe]:-ms-input-placeholder,input[type=number][data-v-8ca1f9fe]:-ms-input-placeholder,input[type=password][data-v-8ca1f9fe]:-ms-input-placeholder,input[type=text][data-v-8ca1f9fe]:-ms-input-placeholder,textarea[data-v-8ca1f9fe]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-8ca1f9fe]::placeholder,input[type=number][data-v-8ca1f9fe]::placeholder,input[type=password][data-v-8ca1f9fe]::placeholder,input[type=text][data-v-8ca1f9fe]::placeholder,textarea[data-v-8ca1f9fe]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-8ca1f9fe],input[type=number][disabled][data-v-8ca1f9fe],input[type=password][disabled][data-v-8ca1f9fe],input[type=text][disabled][data-v-8ca1f9fe],textarea[disabled][data-v-8ca1f9fe]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-8ca1f9fe]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-8ca1f9fe]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-8ca1f9fe],.additional-link b[data-v-8ca1f9fe]{cursor:pointer}.additional-link a[data-v-8ca1f9fe]:hover,.additional-link b[data-v-8ca1f9fe]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-8ca1f9fe]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-8ca1f9fe]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-8ca1f9fe],.form textarea[data-v-8ca1f9fe]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-8ca1f9fe]{display:block}.form.block-form .block-wrapper label[data-v-8ca1f9fe]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-8ca1f9fe]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-8ca1f9fe]{display:block}.form.inline-form .input-wrapper .error-message[data-v-8ca1f9fe]{position:relative;bottom:0}.form .button[data-v-8ca1f9fe]{padding:14px 32px}.single-line-form[data-v-8ca1f9fe]{display:block}.single-line-form .submit-button[data-v-8ca1f9fe]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-8ca1f9fe],input[type=number][data-v-8ca1f9fe],input[type=password][data-v-8ca1f9fe],input[type=text][data-v-8ca1f9fe],textarea[data-v-8ca1f9fe]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-8ca1f9fe]{display:block}}.dark-mode .form .input-help[data-v-8ca1f9fe]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-8ca1f9fe],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-8ca1f9fe]{color:#bec6cf}.dark-mode input[type=email][data-v-8ca1f9fe],.dark-mode input[type=number][data-v-8ca1f9fe],.dark-mode input[type=password][data-v-8ca1f9fe],.dark-mode input[type=text][data-v-8ca1f9fe],.dark-mode textarea[data-v-8ca1f9fe]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-8ca1f9fe]::-moz-placeholder,.dark-mode input[type=number][data-v-8ca1f9fe]::-moz-placeholder,.dark-mode input[type=password][data-v-8ca1f9fe]::-moz-placeholder,.dark-mode input[type=text][data-v-8ca1f9fe]::-moz-placeholder,.dark-mode textarea[data-v-8ca1f9fe]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-8ca1f9fe]:-ms-input-placeholder,.dark-mode input[type=number][data-v-8ca1f9fe]:-ms-input-placeholder,.dark-mode input[type=password][data-v-8ca1f9fe]:-ms-input-placeholder,.dark-mode input[type=text][data-v-8ca1f9fe]:-ms-input-placeholder,.dark-mode textarea[data-v-8ca1f9fe]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-8ca1f9fe]::placeholder,.dark-mode input[type=number][data-v-8ca1f9fe]::placeholder,.dark-mode input[type=password][data-v-8ca1f9fe]::placeholder,.dark-mode input[type=text][data-v-8ca1f9fe]::placeholder,.dark-mode textarea[data-v-8ca1f9fe]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-8ca1f9fe],.dark-mode input[type=number][disabled][data-v-8ca1f9fe],.dark-mode input[type=password][disabled][data-v-8ca1f9fe],.dark-mode input[type=text][disabled][data-v-8ca1f9fe],.dark-mode textarea[disabled][data-v-8ca1f9fe]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-8ca1f9fe],.dark-mode .popup-wrapper input[type=number][data-v-8ca1f9fe],.dark-mode .popup-wrapper input[type=password][data-v-8ca1f9fe],.dark-mode .popup-wrapper input[type=text][data-v-8ca1f9fe],.dark-mode .popup-wrapper textarea[data-v-8ca1f9fe]{background:#25272c}.tokens-wrapper[data-v-8ca1f9fe]{margin-top:0!important}.tokens-wrapper .token-item[data-v-8ca1f9fe]{display:flex;justify-content:space-between;width:100%;padding:10px 0;border-bottom:1px solid #ebebeb;align-items:center}.tokens-wrapper .token-item[data-v-8ca1f9fe]:first-child{padding-top:0}.tokens-wrapper .token-item[data-v-8ca1f9fe]:last-child{border-bottom:0 solid transparent;padding-bottom:0}.tokens-wrapper .tokens-details .name[data-v-8ca1f9fe]{font-size:1em}.tokens-wrapper .tokens-details .last-used[data-v-8ca1f9fe]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;display:block}.tokens-wrapper .tokens-destroyer[data-v-8ca1f9fe]{margin-top:10px}.tokens-wrapper .tokens-destroyer .close-icon[data-v-8ca1f9fe]{opacity:.2}.tokens-wrapper .tokens-destroyer .close-icon[data-v-8ca1f9fe]:hover{opacity:1}.tokens-wrapper .tokens-destroyer .close-icon:hover line[data-v-8ca1f9fe]{color:inherit}.tokens-wrapper .tokens-destroyer[data-v-8ca1f9fe]{cursor:pointer}@media only screen and (max-width:960px){.form .button-base[data-v-8ca1f9fe]{width:100%;margin-top:0;text-align:center}}@media only screen and (max-width:690px){.form .button-block[data-v-8ca1f9fe]{display:block}.form .button-block .popup-button[data-v-8ca1f9fe]{margin-top:15px}}.dark-mode .tokens-wrapper[data-v-8ca1f9fe]{margin-top:0!important}.dark-mode .tokens-wrapper .token-item[data-v-8ca1f9fe]{border-color:#25272c}.dark-mode .tokens-wrapper .tokens-details .last-used[data-v-8ca1f9fe]{color:#7d858c}",""])},aoJh:function(e,t,a){"use strict";a.r(t);var o=a("o0o1"),r=a.n(o),n=a("A5+z"),i=a("gahf"),s=a("Rbea"),p=a("xxrA"),d=a("eZ9V"),c=a("D62o"),l=a("Nv84"),f=a("qefO"),u=a("KnjL"),m=a("2Sb1"),v=a("owoR"),b=a("TJPC"),w=a("CjXH"),h=a("L2JU"),g=a("xCqy"),k=a("vDqi"),x=a.n(k);function _(e,t,a,o,r,n,i){try{var s=e[n](i),p=s.value}catch(e){return void a(e)}s.done?t(p):Promise.resolve(p).then(o,r)}function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C={name:"Password",components:{PageTabGroup:i.a,FormLabel:d.a,PageTab:f.a,InfoBox:u.a,XIcon:w.qb,ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,UserImageInput:s.a,SwitchInput:p.a,MobileHeader:c.a,PageHeader:m.a,ButtonBase:l.a,ThemeLabel:v.a,required:b.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){P(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(h.b)(["user"])),data:function(){return{newPasswordConfirmation:"",newPassword:"",isLoading:!1,tokens:[]}},methods:{formatDate:function(e){return new Intl.DateTimeFormat("en").format(new Date(e))},confirmDeleteToken:function(e){g.a.$emit("confirm:open",{title:this.$t("popup_delete_personal_token.title"),message:this.$t("popup_delete_personal_token.description"),action:{id:e.id,operation:"delete-personal-access-token"}})},deleteToken:function(e){var t=this;x.a.delete("/api/user/tokens/".concat(e)).then((function(){t.tokens=t.tokens.filter((function(t){return t.id!==e})),g.a.$emit("toaster",{type:"success",message:t.$t("personal_token.token_deleted")})})).catch((function(){return t.$isSomethingWrong()}))},resetPassword:function(){var e,t=this;return(e=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.password.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:x.a.post(t.$store.getters.api+"/user/password",{password:t.newPassword,password_confirmation:t.newPasswordConfirmation}).then((function(){t.newPassword="",t.newPasswordConfirmation="",t.$refs.password.reset(),g.a.$emit("success:open",{title:t.$t("popup_pass_changed.title"),message:t.$t("popup_pass_changed.message")})})).catch((function(e){422==e.response.status&&e.response.data.errors.password&&t.$refs.password.setErrors({"New Password":e.response.data.errors.password})}));case 6:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(o,r){var n=e.apply(t,a);function i(e){_(n,o,r,i,s,"next",e)}function s(e){_(n,o,r,i,s,"throw",e)}i(void 0)}))})()},getPersonalAccessTokens:function(){var e=this;x.a.get("/api/user/tokens").then((function(t){e.tokens=t.data})).catch((function(){return e.$isSomethingWrong()}))},open2faPopup:function(){g.a.$emit("popup:open",{name:"two-factor-authentication-confirm"})},showRecoveryCodes:function(){g.a.$emit("popup:open",{name:"two-factor-recovery-codes"})},openCreateTokenPopup:function(){g.a.$emit("popup:open",{name:"create-personal-token"})}},created:function(){var e=this;this.getPersonalAccessTokens(),g.a.$on("action:confirmed",(function(t){"delete-personal-access-token"===t.operation&&e.deleteToken(t.id)})),g.a.$on("reload-personal-access-tokens",(function(){return e.getPersonalAccessTokens()}))}},$=(a("RTIO"),a("KHd+")),z=Object($.a)(C,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageTab",[a("PageTabGroup",[a("ValidationObserver",{ref:"password",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.resetPassword(t)}},scopedSlots:e._u([{key:"default",fn:function(t){t.invalid;return[a("FormLabel",[e._v(e._s(e.$t("user_password.title")))]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_create_password.label_new_pass"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"New Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:e.$t("page_create_password.label_new_pass"),type:"password"},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}}),e._v(" "),o[0]?a("span",{staticClass:"error-message"},[e._v(e._s(o[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_create_password.label_confirm_pass"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Confirm Your Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPasswordConfirmation,expression:"newPasswordConfirmation"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:e.$t("page_create_password.label_confirm_pass"),type:"password"},domProps:{value:e.newPasswordConfirmation},on:{input:function(t){t.target.composing||(e.newPasswordConfirmation=t.target.value)}}}),e._v(" "),o[0]?a("span",{staticClass:"error-message"},[e._v(e._s(o[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("ButtonBase",{staticClass:"confirm-form",attrs:{type:"submit","button-style":"theme"}},[e._v("\n                        "+e._s(e.$t("profile.store_pass"))+"\n                    ")])],1)]}}])})],1),e._v(" "),a("PageTabGroup",{staticClass:"form block-form"},[a("FormLabel",{attrs:{icon:"smartphone"}},[e._v(e._s(e.$t("2fa.settings.title")))]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("div",{staticClass:"input-wrapper"},[a("div",{staticClass:"inline-wrapper"},[a("div",{staticClass:"switch-label"},[a("label",{staticClass:"input-label"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.$t("popup_2fa.switch_title"))+"\n\t\t\t\t\t\t\t")]),e._v(" "),a("small",{staticClass:"input-help",domProps:{innerHTML:e._s(e.$t("popup_2fa.switch_info"))}})]),e._v(" "),a("SwitchInput",{staticClass:"switch",attrs:{state:e.user.data.attributes.two_factor_authentication},nativeOn:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.open2faPopup(t)}}})],1)])]),e._v(" "),e.user&&e.user.data.attributes.two_factor_authentication?a("div",{staticClass:"block-wrapper"},[a("div",{staticClass:"input-wrapper"},[a("div",{staticClass:"inline-wrapper button-block"},[a("div",{staticClass:"switch-label"},[a("label",{staticClass:"input-label"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.$t("popup_2fa.codes_title"))+"\n\t\t\t\t\t\t\t")]),e._v(" "),a("small",{staticClass:"input-help"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.$t("popup_2fa.codes_info"))+"\n\t\t\t\t\t\t\t")])]),e._v(" "),a("ButtonBase",{staticClass:"popup-button",attrs:{"button-style":"secondary"},nativeOn:{click:function(t){return e.showRecoveryCodes(t)}}},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.$t("popup_2fa.codes_button"))+"\n\t\t\t\t\t\t")])],1)])]):e._e()],1),e._v(" "),a("PageTabGroup",{staticClass:"form block-form"},[a("FormLabel",{attrs:{icon:"key"}},[e._v(e._s(e.$t("personal_token.section_title")))]),e._v(" "),0===e.tokens.length?a("InfoBox",[a("p",[e._v(e._s(e.$t("personal_token.section_description")))])]):e._e(),e._v(" "),e.tokens.length>0?a("InfoBox",[a("ul",{staticClass:"tokens-wrapper"},e._l(e.tokens,(function(t){return a("li",{key:t.id,staticClass:"token-item"},[a("div",{staticClass:"tokens-details"},[a("b",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" "),a("time",{staticClass:"last-used"},[e._v(e._s(e.$t("last_used"))+": "+e._s(t.last_used_at?e.formatDate(t.last_used_at):e.$t("never")))])]),e._v(" "),a("div",{staticClass:"tokens-destroyer",on:{click:function(a){return e.confirmDeleteToken(t)}}},[a("x-icon",{staticClass:"close-icon hover-text-theme",attrs:{size:"16"}})],1)])})),0)]):e._e(),e._v(" "),a("ButtonBase",{staticClass:"confirm-form",attrs:{type:"submit","button-style":"theme"},nativeOn:{click:function(t){return e.openCreateTokenPopup(t)}}},[e._v("\n\t\t\t\t"+e._s(e.$t("personal_token.create_token"))+"\n\t\t\t")])],1)],1)}),[],!1,null,"8ca1f9fe",null);t.default=z.exports},e8Dw:function(e,t,a){var o=a("pwHZ");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(e.exports=o.locals)},fcKV:function(e,t,a){"use strict";a("e8Dw")},hBLZ:function(e,t,a){var o=a("XPoF");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(e.exports=o.locals)},pwHZ:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".input-wrapper[data-v-d1e6199a]{display:flex;width:100%}.input-wrapper .input-label[data-v-d1e6199a]{color:#1b2539}.input-wrapper .switch-content[data-v-d1e6199a]{width:100%}.input-wrapper .switch-content[data-v-d1e6199a]:last-child{width:80px}.switch[data-v-d1e6199a]{width:50px;height:28px;background:#f1f1f5;position:relative}.switch[data-v-d1e6199a],.switch .switch-button[data-v-d1e6199a]{border-radius:50px;display:block;transition:all .3s ease}.switch .switch-button[data-v-d1e6199a]{width:22px;height:22px;background:#fff;position:absolute;top:3px;left:3px;box-shadow:0 2px 4px rgba(37,38,94,.1);cursor:pointer}.switch.active .switch-button[data-v-d1e6199a]{left:25px}.dark-mode .switch[data-v-d1e6199a]{background:#1e2024}.dark-mode .popup-wrapper .switch[data-v-d1e6199a]{background:#25272c}",""])},qmhD:function(e,t,a){var o=a("z7Fm");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(e.exports=o.locals)},twCh:function(e,t,a){"use strict";a("qmhD")},xMa7:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".dropzone[data-v-d0446cc6]{position:relative;line-height:0}.dropzone input[type=file][data-v-d0446cc6]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;width:100%;cursor:pointer}.dropzone .image-preview[data-v-d0446cc6]{width:62px;height:62px;-o-object-fit:cover;object-fit:cover;border-radius:8px;z-index:1;position:relative}.dropzone .blurred[data-v-d0446cc6]{position:absolute;left:0;top:2px;z-index:0;filter:blur(8px);opacity:.5}",""])},xxrA:function(e,t,a){"use strict";var o={name:"SwitchInput",props:["label","name","state","info"],data:function(){return{isSwitched:void 0}},methods:{changeState:function(){this.isSwitched=!this.isSwitched,this.$emit("input",this.isSwitched)}},mounted:function(){this.isSwitched=this.state}},r=(a("fcKV"),a("KHd+")),n=Object(r.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-wrapper"},[a("div",{staticClass:"switch-content"},[e.label?a("label",{staticClass:"input-label"},[e._v(e._s(e.label)+":")]):e._e(),e._v(" "),e.info?a("small",{staticClass:"input-info"},[e._v(e._s(e.info))]):e._e()]),e._v(" "),a("div",{staticClass:"switch-content text-right"},[a("div",{staticClass:"switch",class:{active:e.isSwitched},on:{click:e.changeState}},[a("div",{staticClass:"switch-button"})])])])}),[],!1,null,"d1e6199a",null);t.a=n.exports},z7Fm:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".info-box[data-v-384ec59e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-384ec59e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-384ec59e],.info-box.error p[data-v-384ec59e]{color:#fd397a}.info-box.error a[data-v-384ec59e]{text-decoration:underline}.info-box p[data-v-384ec59e]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-384ec59e],.info-box p[data-v-384ec59e] a{font-size:15px}.info-box p[data-v-384ec59e] b{font-size:15px;font-weight:700}.info-box a[data-v-384ec59e],.info-box b[data-v-384ec59e]{font-weight:700}.info-box a[data-v-384ec59e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-384ec59e]{margin-top:15px}.info-box ul[data-v-384ec59e],.info-box ul li[data-v-384ec59e],.info-box ul li a[data-v-384ec59e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-384ec59e]{padding:15px}}.dark-mode .info-box[data-v-384ec59e]{background:#1e2024}.dark-mode .info-box p[data-v-384ec59e],.dark-mode .info-box ul li[data-v-384ec59e]{color:#bec6cf}",""])}}]);