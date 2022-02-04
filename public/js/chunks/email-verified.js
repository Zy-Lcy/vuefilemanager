"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[777],{4850:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(3645),r=n.n(s)()((function(t){return t[1]}));r.push([t.id,".sync-alt[data-v-0c88a0f1]{-webkit-animation:spin-data-v-0c88a0f1 1s linear infinite;animation:spin-data-v-0c88a0f1 1s linear infinite}@-webkit-keyframes spin-data-v-0c88a0f1{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-0c88a0f1{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]);const a=r},7932:(t,e,n)=>{n.d(e,{Z:()=>c});var s=n(9101);const r={name:"AuthContent",props:["loading","icon","text"],components:{ChevronRightIcon:s.XCv,RefreshCwIcon:s.Iyk},data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};var a=n(3379),i=n.n(a),l=n(4850),o={insert:"head",singleton:!1};i()(l.Z,o);l.Z.locals;const c=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"group mx-auto inline-block flex items-center whitespace-nowrap rounded-lg border-2 border-black px-7 py-2.5 dark:border-gray-300"},[n("span",{staticClass:"pr-1 text-lg font-extrabold"},[t._v("\n        "+t._s(t.text)+"\n    ")]),t._v(" "),t.loading?n("refresh-cw-icon",{staticClass:"vue-feather text-theme sync-alt -mr-1",attrs:{size:"20"}}):t._e(),t._v(" "),!t.loading&&t.icon?n("chevron-right-icon",{staticClass:"vue-feather text-theme -mr-1",attrs:{size:"20"}}):t._e()],1)}),[],!1,null,"0c88a0f1",null).exports},4006:(t,e,n)=>{n.d(e,{Z:()=>r});const s={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};const r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isVisible?n("div",{staticClass:"w-full max-w-xl text-center"},[t._t("default")],2):t._e()}),[],!1,null,null,null).exports},6876:(t,e,n)=>{n.d(e,{Z:()=>r});const s={name:"AuthContentWrapper"};const r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex items-center justify-center px-5 md:px-0"},[t._t("default")],2)}),[],!1,null,null,null).exports},9474:(t,e,n)=>{n.d(e,{Z:()=>i});function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const a={name:"Headline",props:["description","title"],computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,n(629).Se)(["config"]))};const i=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-14"},[t._t("default"),t._v(" "),t.$slots.default?t._e():n("div",[t.config.app_logo?n("img",{staticClass:"mx-auto mb-6 w-28 md:w-32",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():n("b",{staticClass:"mb-10 block text-xl font-bold"},[t._v("\n            "+t._s(t.config.app_name)+"\n        ")])]),t._v(" "),n("h1",{staticClass:"mb-0.5 text-3xl font-extrabold md:text-4xl"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("h2",{staticClass:"text-xl font-normal md:text-2xl"},[t._v("\n        "+t._s(t.description)+"\n    ")])],2)}),[],!1,null,null,null).exports},8134:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var s=n(7318),r=n(826);const a={name:"SocialiteCallback",components:{Spinner:s.Z},created:function(){var t=this;axios.get("/api".concat(this.$route.fullPath)).then((function(){t.$store.commit("SET_AUTHORIZED",!0),t.$router.push({name:"Files"})})).catch((function(e){401===e.response.status?r.U.$emit("alert:open",{title:e.response.data.message}):t.$isSomethingWrong(),t.$router.push({name:"SignIn"})}))}};const i=(0,n(1900).Z)(a,(function(){var t=this.$createElement;return(this._self._c||t)("Spinner")}),[],!1,null,null,null).exports},9959:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var s=n(6876),r=n(4006),a=n(7932),i=n(9474);const l={name:"SuccessfullyEmailVerified",components:{AuthContentWrapper:s.Z,AuthContent:r.Z,AuthButton:a.Z,Headline:i.Z}};const o=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AuthContentWrapper",{staticClass:"h-screen"},[n("AuthContent",{attrs:{visible:!0}},[n("Headline",{attrs:{title:t.$t("page_email_successfully_verified.title"),description:t.$t("page_email_successfully_verified.subtitle")}}),t._v(" "),n("router-link",{attrs:{to:{name:"SignIn"}}},[n("AuthButton",{attrs:{icon:"chevron-right",text:t.$t("page_sign_in.button_log_in")}})],1)],1)],1)}),[],!1,null,null,null).exports},2951:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var s=n(6876),r=n(4006),a=n(7932),i=n(9474);const l={name:"SuccessfullySendEmail",components:{AuthContentWrapper:s.Z,AuthContent:r.Z,AuthButton:a.Z,Headline:i.Z}};const o=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AuthContentWrapper",{staticClass:"h-screen"},[n("AuthContent",{attrs:{visible:!0}},[n("Headline",{attrs:{title:t.$t("page_email_successfully_send.title"),description:t.$t("page_email_successfully_send.subtitle")}}),t._v(" "),n("span",{staticClass:"block"},[n("router-link",{staticClass:"text-theme font-bold",attrs:{to:{name:"Homepage"}}},[t._v("\n                "+t._s(t.$t("go_home"))+"\n            ")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);