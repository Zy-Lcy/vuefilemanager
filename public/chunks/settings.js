(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{12:function(t,n,e){"use strict";var a={name:"InfoBox",props:["type"]},i=(e(227),e(0)),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);n.a=r.exports},140:function(t,n,e){var a=e(400);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},175:function(t,n,e){"use strict";var a={props:["label","name","avatar","info","error"],data:function(){return{imagePreview:void 0}},watch:{imagePreview:function(t){this.$store.commit("UPDATE_AVATAR",t)}},methods:{showImagePreview:function(t){var n=this,e=t.target.files[0].name,a=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg"].includes(a)){var i=t.target.files[0],r=new FileReader;r.onload=function(){return n.imagePreview=r.result},r.readAsDataURL(i),this.$updateImage("/user/profile","avatar",t.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.avatar&&(this.imagePreview=this.avatar)}},i=(e(281),e(0)),r=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dropzone",class:{"is-error":t.error}},[e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file",name:t.name},on:{change:function(n){return t.showImagePreview(n)}}}),t._v(" "),t.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:t.imagePreview}}):t._e(),t._v(" "),t.imagePreview?e("img",{ref:"image",staticClass:"image-preview blurred",attrs:{src:t.imagePreview}}):t._e()])}),[],!1,null,"fa58d4b2",null);n.a=r.exports},20:function(t,n,e){"use strict";var a={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e(1).d}},i=(e(237),e(0)),r=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-header"},[t.canBack?e("div",{staticClass:"go-back",on:{click:function(n){return t.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"aafe7e24",null);n.a=r.exports},227:function(t,n,e){"use strict";var a=e(53);e.n(a).a},228:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},237:function(t,n,e){"use strict";var a=e(58);e.n(a).a},238:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".page-header[data-v-aafe7e24] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-aafe7e24] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-aafe7e24] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-aafe7e24] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-aafe7e24] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-aafe7e24] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-aafe7e24] {\n    background: #111314;\n}\n.page-header .title[data-v-aafe7e24] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-aafe7e24] {\n    fill: #00BC7E;\n}\n}\n",""])},255:function(t,n,e){"use strict";var a=e(67);e.n(a).a},256:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".color-label[data-v-ffcb2882] {\n  text-transform: capitalize;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 4px 6px;\n}\n.color-label.purple[data-v-ffcb2882] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-ffcb2882] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-ffcb2882] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-ffcb2882] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n",""])},259:function(t,n,e){"use strict";var a=e(70);e.n(a).a},260:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".content-sidebar[data-v-5101d4ac] {\n  background: rgba(244, 245, 246, 0.6);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-top: 25px;\n  overflow-y: auto;\n  flex: 0 0 225px;\n}\n@media only screen and (max-width: 1024px) {\n.content-sidebar[data-v-5101d4ac] {\n    flex: 0 0 205px;\n}\n}\n@media only screen and (max-width: 690px) {\n.content-sidebar[data-v-5101d4ac] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.content-sidebar[data-v-5101d4ac] {\n    background: rgba(30, 32, 36, 0.2);\n}\n}\n",""])},261:function(t,n,e){"use strict";var a=e(71);e.n(a).a},262:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".text-label[data-v-4c36e0a9] {\n  padding-left: 25px;\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 1024px) {\n.text-label[data-v-4c36e0a9] {\n    padding-left: 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-4c36e0a9] {\n    color: #00BC7E;\n}\n}\n",""])},263:function(t,n,e){"use strict";var a=e(72);e.n(a).a},264:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".content-group[data-v-da1bd2b8] {\n  margin-bottom: 30px;\n}\n",""])},281:function(t,n,e){"use strict";var a=e(81);e.n(a).a},282:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".dropzone[data-v-fa58d4b2] {\n  position: relative;\n  line-height: 0;\n}\n.dropzone input[type='file'][data-v-fa58d4b2] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-fa58d4b2] {\n  width: 62px;\n  height: 62px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  z-index: 1;\n  position: relative;\n}\n.dropzone .blurred[data-v-fa58d4b2] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  opacity: 0.5;\n}\n",""])},30:function(t,n,e){"use strict";var a={name:"ColorLabel",props:["color"]},i=(e(255),e(0)),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"ffcb2882",null);n.a=r.exports},34:function(t,n,e){"use strict";var a={name:"TextLabel"},i=(e(261),e(0)),r={name:"ContentGroup",props:["title"],components:{TextLabel:Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"4c36e0a9",null).exports}},o=(e(263),Object(i.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"content-group"},[n("TextLabel",[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)}),[],!1,null,"da1bd2b8",null));n.a=o.exports},36:function(t,n,e){"use strict";var a={name:"ContentSidebar"},i=(e(259),e(0)),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"content-sidebar"},[this._t("default")],2)}),[],!1,null,"5101d4ac",null);n.a=r.exports},399:function(t,n,e){"use strict";var a=e(140);e.n(a).a},400:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".page-detail-headline[data-v-9436d546] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  margin-top: 30px;\n}\n.user-thumbnail[data-v-9436d546] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.user-thumbnail .avatar[data-v-9436d546] {\n  margin-right: 20px;\n}\n.user-thumbnail .avatar img[data-v-9436d546] {\n  line-height: 0;\n  width: 62px;\n  height: 62px;\n  border-radius: 12px;\n  z-index: 1;\n  position: relative;\n}\n.user-thumbnail .info .name[data-v-9436d546] {\n  display: block;\n  font-size: 1.0625em;\n  line-height: 1;\n}\n.user-thumbnail .info .email[data-v-9436d546] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.875em;\n}\n.message-box[data-v-9436d546] {\n  margin-top: -15px;\n}\n@media (prefers-color-scheme: dark) {\n.user-thumbnail .info .name[data-v-9436d546] {\n    color: #bec6cf;\n}\n.user-thumbnail .info .email[data-v-9436d546] {\n    color: #7d858c;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-detail-headline[data-v-9436d546] {\n    display: block;\n    margin-bottom: 30px;\n    margin-top: 10px;\n}\n.page-detail-headline .headline-actions[data-v-9436d546] {\n    margin-top: 20px;\n}\n.page-detail-headline .headline-actions .upgrade-button[data-v-9436d546] {\n    width: 100%;\n}\n}\n",""])},53:function(t,n,e){var a=e(228);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},58:function(t,n,e){var a=e(238);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},596:function(t,n,e){"use strict";e.r(n);var a=e(36),i=e(34),r=e(175),o=e(18),s=e(11),l=e(12),c=e(20),d=e(30),p=e(19),u=e(7),f=e(1);function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function b(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var m={name:"Settings",components:{ContentSidebar:a.a,CreditCardIcon:f.j,UserImageInput:r.a,HardDriveIcon:f.v,FileTextIcon:f.r,MobileHeader:o.a,ContentGroup:i.a,ButtonBase:s.a,ColorLabel:d.a,PageHeader:c.a,CloudIcon:f.g,UserIcon:f.T,LockIcon:f.C,Spinner:p.a,InfoBox:l.a},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(Object(e),!0).forEach((function(n){b(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},Object(u.b)(["user","config"]),{subscriptionStatus:function(){return this.user.data.attributes.subscription?this.$t("global.premium"):this.$t("global.free")},subscriptionColor:function(){return this.user.data.attributes.subscription?"green":"purple"},canShowSubscriptionSettings:function(){return this.config.isSaaS},canShowUpgradeWarning:function(){return this.config.storageLimit&&this.user.relationships.storage.data.attributes.used>95},canShowIncompletePayment:function(){return this.user.data.attributes.incomplete_payment}}),data:function(){return{avatar:void 0,isLoading:!1}}},g=(e(399),e(0)),h=Object(g.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"viewport"}},[e("ContentSidebar",[e("ContentGroup",{staticClass:"navigator",attrs:{title:"Menu"}},[e("div",{staticClass:"menu-list-wrapper vertical"},[e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Profile"}}},[e("div",{staticClass:"icon"},[e("user-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("menu.profile"))+"\n                    ")])]),t._v(" "),e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Storage"}}},[e("div",{staticClass:"icon"},[e("hard-drive-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("menu.storage"))+"\n                    ")])]),t._v(" "),e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Password"}}},[e("div",{staticClass:"icon"},[e("lock-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("menu.password"))+"\n                    ")])])],1)]),t._v(" "),t.canShowSubscriptionSettings?e("ContentGroup",{staticClass:"navigator",attrs:{title:"Subscription"}},[e("div",{staticClass:"menu-list-wrapper vertical"},[e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Subscription"}}},[e("div",{staticClass:"icon"},[e("cloud-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("menu.subscription"))+"\n                    ")])]),t._v(" "),e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"PaymentMethods"}}},[e("div",{staticClass:"icon"},[e("credit-card-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("menu.payment_cards"))+"\n                    ")])]),t._v(" "),e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Invoice"}}},[e("div",{staticClass:"icon"},[e("file-text-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("menu.invoices"))+"\n                    ")])])],1)]):t._e()],1),t._v(" "),t.user?e("div",{attrs:{id:"single-page"}},[t.isLoading?t._e():e("div",{staticClass:"medium-width",attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:t.$router.currentRoute.meta.title}}),t._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"page-detail-headline"},[e("div",{staticClass:"user-thumbnail"},[e("div",{staticClass:"avatar"},[e("UserImageInput",{attrs:{avatar:t.user.data.attributes.avatar},model:{value:t.avatar,callback:function(n){t.avatar=n},expression:"avatar"}})],1),t._v(" "),e("div",{staticClass:"info"},[e("b",{staticClass:"name"},[t._v("\n                                "+t._s(t.user.data.attributes.name)+"\n                                "),t.config.isSaaS?e("ColorLabel",{attrs:{color:t.subscriptionColor}},[t._v("\n                                    "+t._s(t.subscriptionStatus)+"\n                                ")]):t._e()],1),t._v(" "),e("span",{staticClass:"email"},[t._v(t._s(t.user.data.attributes.email))])])]),t._v(" "),t.config.storageLimit&&t.config.isSaaS&&t.config.app_payments_active&&!t.canShowIncompletePayment?e("div",{staticClass:"headline-actions"},[e("router-link",{attrs:{to:{name:"UpgradePlan"}}},[e("ButtonBase",{staticClass:"upgrade-button",attrs:{"button-style":"secondary",type:"button"}},[t._v("\n                                "+t._s(t.$t("global.upgrade_plan"))+"\n                            ")])],1)],1):t._e()]),t._v(" "),t.canShowIncompletePayment?e("InfoBox",{staticClass:"message-box",attrs:{type:"error"}},[e("i18n",{attrs:{path:"incomplete_payment.description",tag:"p"}},[e("a",{attrs:{href:t.user.data.attributes.incomplete_payment}},[t._v(t._s(t.$t("incomplete_payment.href")))])])],1):t._e(),t._v(" "),t.canShowUpgradeWarning&&!t.canShowIncompletePayment?e("InfoBox",{staticClass:"message-box",attrs:{type:"error"}},[e("p",[t._v(t._s(t.$t("upgrade_banner.title")))])]):t._e(),t._v(" "),e("router-view",{attrs:{user:t.user}})],1)],1),t._v(" "),t.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):t._e()]):t._e()],1)}),[],!1,null,"9436d546",null);n.default=h.exports},67:function(t,n,e){var a=e(256);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},70:function(t,n,e){var a=e(260);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},71:function(t,n,e){var a=e(262);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},72:function(t,n,e){var a=e(264);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)},81:function(t,n,e){var a=e(282);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(a,i);a.locals&&(t.exports=a.locals)}}]);