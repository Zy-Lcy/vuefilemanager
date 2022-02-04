"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6707],{4850:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(3645),r=a.n(n)()((function(t){return t[1]}));r.push([t.id,".sync-alt[data-v-0c88a0f1]{-webkit-animation:spin-data-v-0c88a0f1 1s linear infinite;animation:spin-data-v-0c88a0f1 1s linear infinite}@-webkit-keyframes spin-data-v-0c88a0f1{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-0c88a0f1{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]);const i=r},3429:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(3645),r=a.n(n)()((function(t){return t[1]}));r.push([t.id,".auth-logo-text[data-v-0045aa30]{display:block;font-size:1.375em;font-weight:800;margin-bottom:40px}.auth-form .additional-link a[data-v-0045aa30]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-0045aa30]{border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2);height:100px;margin-bottom:20px;-o-object-fit:cover;object-fit:cover;width:100px}.auth-form .block-form[data-v-0045aa30]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-0045aa30]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-0045aa30]{width:100%}}@media only screen and (max-width:490px){.auth-form input[data-v-0045aa30]{min-width:auto}.auth-form .additional-link[data-v-0045aa30]{font-size:.9375em}}.dark .auth-form .additional-link[data-v-0045aa30],.dark .auth-form h1[data-v-0045aa30],.dark .auth-form h2[data-v-0045aa30]{color:#bec6cf}",""]);const i=r},7932:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(9101);const r={name:"AuthContent",props:["loading","icon","text"],components:{ChevronRightIcon:n.XCv,RefreshCwIcon:n.Iyk},data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};var i=a(3379),o=a.n(i),s=a(4850),l={insert:"head",singleton:!1};o()(s.Z,l);s.Z.locals;const c=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"group mx-auto inline-block flex items-center whitespace-nowrap rounded-lg border-2 border-black px-7 py-2.5 dark:border-gray-300"},[a("span",{staticClass:"pr-1 text-lg font-extrabold"},[t._v("\n        "+t._s(t.text)+"\n    ")]),t._v(" "),t.loading?a("refresh-cw-icon",{staticClass:"vue-feather text-theme sync-alt -mr-1",attrs:{size:"20"}}):t._e(),t._v(" "),!t.loading&&t.icon?a("chevron-right-icon",{staticClass:"vue-feather text-theme -mr-1",attrs:{size:"20"}}):t._e()],1)}),[],!1,null,"0c88a0f1",null).exports},4006:(t,e,a)=>{a.d(e,{Z:()=>r});const n={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};const r=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isVisible?a("div",{staticClass:"w-full max-w-xl text-center"},[t._t("default")],2):t._e()}),[],!1,null,null,null).exports},6876:(t,e,a)=>{a.d(e,{Z:()=>r});const n={name:"AuthContentWrapper"};const r=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex items-center justify-center px-5 md:px-0"},[t._t("default")],2)}),[],!1,null,null,null).exports},9474:(t,e,a)=>{a.d(e,{Z:()=>o});function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const i={name:"Headline",props:["description","title"],computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,a(629).Se)(["config"]))};const o=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-14"},[t._t("default"),t._v(" "),t.$slots.default?t._e():a("div",[t.config.app_logo?a("img",{staticClass:"mx-auto mb-6 w-28 md:w-32",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():a("b",{staticClass:"mb-10 block text-xl font-bold"},[t._v("\n            "+t._s(t.config.app_name)+"\n        ")])]),t._v(" "),a("h1",{staticClass:"mb-0.5 text-3xl font-extrabold md:text-4xl"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),a("h2",{staticClass:"text-xl font-normal md:text-2xl"},[t._v("\n        "+t._s(t.description)+"\n    ")])],2)}),[],!1,null,null,null).exports},2183:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var n=a(6876),r=a(4006),i=a(7932),o=a(9474);const s={name:"NotFound",components:{AuthContentWrapper:n.Z,AuthContent:r.Z,AuthButton:i.Z,Headline:o.Z}};var l=a(3379),c=a.n(l),u=a(3429),d={insert:"head",singleton:!1};c()(u.Z,d);u.Z.locals;const f=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AuthContentWrapper",{ref:"auth"},[a("AuthContent",{attrs:{visible:!0}},[a("Headline",{attrs:{title:t.$t("Temporary Unavailable"),description:t.$t("Unfortunately, this shared link is temporary unavailable. Please try it later.")}}),t._v(" "),a("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_registration.have_an_account"))+"\n            "),a("router-link",{attrs:{to:{name:"SignIn"}}},[t._v("\n                "+t._s(t.$t("page_forgotten_password.password_remember_button"))+"\n            ")])],1)],1)],1)}),[],!1,null,"0045aa30",null).exports}}]);