(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{111:function(e,a,t){var n=t(342);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},12:function(e,a,t){"use strict";var n={name:"InfoBox",props:["type"]},i=(t(227),t(0)),o=Object(i.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);a.a=o.exports},13:function(e,a,t){"use strict";var n={name:"FormLabel",components:{Edit2Icon:t(1).m}},i=(t(229),t(0)),o=Object(i.a)(n,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=o.exports},15:function(e,a,t){"use strict";var n={name:"PageTab",props:["isLoading"],components:{Spinner:t(19).a}},i=(t(233),t(0)),o=Object(i.a)(n,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"page-tab"},[this.isLoading?a("div",{attrs:{id:"loader"}},[a("Spinner")],1):this._e(),this._v(" "),this.isLoading?this._e():this._t("default")],2)}),[],!1,null,"cb8ef734",null);a.a=o.exports},16:function(e,a,t){"use strict";var n={name:"PageTabGroup"},i=(t(231),t(0)),o=Object(i.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);a.a=o.exports},227:function(e,a,t){"use strict";var n=t(53);t.n(n).a},228:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},229:function(e,a,t){"use strict";var n=t(54);t.n(n).a},230:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},231:function(e,a,t){"use strict";var n=t(55);t.n(n).a},232:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".page-tab-group[data-v-1bb470e4] {\n  margin-bottom: 65px;\n}\n",""])},233:function(e,a,t){"use strict";var n=t(56);t.n(n).a},234:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,"",""])},243:function(e,a,t){"use strict";var n=t(61);t.n(n).a},244:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".progress-bar[data-v-9f98bf3e] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 5px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-9f98bf3e] {\n  background: #00BC7E;\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-9f98bf3e] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-9f98bf3e] {\n    background: #1e2024;\n}\n}\n",""])},245:function(e,a,t){"use strict";var n=t(62);t.n(n).a},246:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".setup-box[data-v-664a78dc] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.setup-box .title[data-v-664a78dc] {\n  font-size: 1.3125em;\n  margin-bottom: 5px;\n  display: block;\n  font-weight: 700;\n}\n.setup-box .description[data-v-664a78dc] {\n  font-size: 0.9375em;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n.setup-box.base[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger .title[data-v-664a78dc] {\n  color: #fd397a;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n.setup-box[data-v-664a78dc] input .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .form {\n  margin-top: 20px;\n}\n.setup-box[data-v-664a78dc] .form.block-form {\n  max-width: 450px;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n  display: flex;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n  margin-left: 20px;\n}\n@media only screen and (max-width: 960px) {\n.setup-box[data-v-664a78dc] .form.block-form {\n    max-width: 100%;\n}\n.setup-box[data-v-664a78dc] .form input {\n    min-width: initial;\n}\n}\n@media only screen and (max-width: 690px) {\n.setup-box[data-v-664a78dc] {\n    padding: 15px;\n}\n.setup-box .title[data-v-664a78dc] {\n    font-size: 1.0625em;\n    margin-bottom: 10px;\n}\n.setup-box .description[data-v-664a78dc] {\n    font-size: 0.875em;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n    display: block;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n    margin-left: 0;\n    margin-top: 10px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.setup-box.base[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box.danger[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n  .setup-box[data-v-664a78dc] input .input-area {\n    background: #111314;\n}\n.setup-box[data-v-664a78dc] .input-area {\n    background: #111314;\n}\n}\n",""])},25:function(e,a,t){"use strict";var n={name:"SetupBox",props:["title","description","theme"]},i=(t(245),t(0)),o=Object(i.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"setup-box",class:e.theme},[t("b",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),t("p",{staticClass:"description"},[e._v(e._s(e.description))]),e._v(" "),e._t("default")],2)}),[],!1,null,"664a78dc",null);a.a=o.exports},251:function(e,a,t){"use strict";var n=t(65);t.n(n).a},252:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".dropzone[data-v-24846626] {\n  border: 1px dashed #a1abc2;\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  min-height: 175px;\n}\n.dropzone.is-error[data-v-24846626] {\n  border: 2px dashed rgba(253, 57, 122, 0.3);\n}\n.dropzone.is-error .dropzone-title[data-v-24846626] {\n  color: #fd397a;\n}\n.dropzone.is-error .icon-upload rect[data-v-24846626], .dropzone.is-error .icon-upload circle[data-v-24846626], .dropzone.is-error .icon-upload polyline[data-v-24846626] {\n  stroke: #fd397a;\n}\n.dropzone input[type='file'][data-v-24846626] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-24846626] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  left: 0;\n  padding: 25px;\n  display: block;\n}\n.dropzone .image-preview.fit-image[data-v-24846626] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.dropzone .dropzone-message[data-v-24846626] {\n  padding: 50px 0;\n  width: 100%;\n}\n.dropzone .dropzone-message .icon-upload rect[data-v-24846626], .dropzone .dropzone-message .icon-upload circle[data-v-24846626], .dropzone .dropzone-message .icon-upload polyline[data-v-24846626] {\n  stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-title[data-v-24846626] {\n  font-size: 1em;\n  font-weight: 700;\n  display: block;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-24846626] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n@media (prefers-color-scheme: dark) {\n.dropzone[data-v-24846626] {\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.dropzone .dropzone-message .icon-upload path[data-v-24846626], .dropzone .dropzone-message .icon-upload polyline[data-v-24846626], .dropzone .dropzone-message .icon-upload line[data-v-24846626] {\n    stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-24846626] {\n    color: #7d858c;\n}\n}\n",""])},253:function(e,a,t){"use strict";var n=t(66);t.n(n).a},254:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,".detail-storage-item[data-v-56af1b6e] {\n  margin-bottom: 35px;\n}\n.detail-storage-item.disk .icon path[data-v-56af1b6e], .detail-storage-item.disk .icon line[data-v-56af1b6e], .detail-storage-item.disk .icon polyline[data-v-56af1b6e], .detail-storage-item.disk .icon rect[data-v-56af1b6e], .detail-storage-item.disk .icon circle[data-v-56af1b6e], .detail-storage-item.disk .icon polygon[data-v-56af1b6e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.disk .storage-progress[data-v-56af1b6e] span {\n  background: #1B2539;\n}\n.detail-storage-item.images .icon path[data-v-56af1b6e], .detail-storage-item.images .icon line[data-v-56af1b6e], .detail-storage-item.images .icon polyline[data-v-56af1b6e], .detail-storage-item.images .icon rect[data-v-56af1b6e], .detail-storage-item.images .icon circle[data-v-56af1b6e], .detail-storage-item.images .icon polygon[data-v-56af1b6e] {\n  stroke: #9D66FE;\n}\n.detail-storage-item.images .storage-progress[data-v-56af1b6e] span {\n  background: #9D66FE;\n}\n.detail-storage-item.videos .icon path[data-v-56af1b6e], .detail-storage-item.videos .icon line[data-v-56af1b6e], .detail-storage-item.videos .icon polyline[data-v-56af1b6e], .detail-storage-item.videos .icon rect[data-v-56af1b6e], .detail-storage-item.videos .icon circle[data-v-56af1b6e], .detail-storage-item.videos .icon polygon[data-v-56af1b6e] {\n  stroke: #FFBD2D;\n}\n.detail-storage-item.videos .storage-progress[data-v-56af1b6e] span {\n  background: #FFBD2D;\n}\n.detail-storage-item.audios .icon path[data-v-56af1b6e], .detail-storage-item.audios .icon line[data-v-56af1b6e], .detail-storage-item.audios .icon polyline[data-v-56af1b6e], .detail-storage-item.audios .icon rect[data-v-56af1b6e], .detail-storage-item.audios .icon circle[data-v-56af1b6e], .detail-storage-item.audios .icon polygon[data-v-56af1b6e] {\n  stroke: #FE66A1;\n}\n.detail-storage-item.audios .storage-progress[data-v-56af1b6e] span {\n  background: #FE66A1;\n}\n.detail-storage-item.documents .icon path[data-v-56af1b6e], .detail-storage-item.documents .icon line[data-v-56af1b6e], .detail-storage-item.documents .icon polyline[data-v-56af1b6e], .detail-storage-item.documents .icon rect[data-v-56af1b6e], .detail-storage-item.documents .icon circle[data-v-56af1b6e], .detail-storage-item.documents .icon polygon[data-v-56af1b6e] {\n  stroke: #FE6057;\n}\n.detail-storage-item.documents .storage-progress[data-v-56af1b6e] span {\n  background: #FE6057;\n}\n.detail-storage-item.others .icon path[data-v-56af1b6e], .detail-storage-item.others .icon line[data-v-56af1b6e], .detail-storage-item.others .icon polyline[data-v-56af1b6e], .detail-storage-item.others .icon rect[data-v-56af1b6e], .detail-storage-item.others .icon circle[data-v-56af1b6e], .detail-storage-item.others .icon polygon[data-v-56af1b6e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.others .storage-progress[data-v-56af1b6e] span {\n  background: #1B2539;\n}\n.header-storage-item[data-v-56af1b6e] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.header-storage-item .icon[data-v-56af1b6e] {\n  width: 35px;\n}\n.header-storage-item .type[data-v-56af1b6e] {\n  font-size: 0.9375em;\n  color: #1B2539;\n}\n.header-storage-item .total-size[data-v-56af1b6e] {\n  font-size: 0.625em;\n  display: block;\n  color: rgba(27, 37, 57, 0.7);\n}\n@media (prefers-color-scheme: dark) {\n.header-storage-item .type[data-v-56af1b6e] {\n    color: #bec6cf;\n}\n.header-storage-item .total-size[data-v-56af1b6e] {\n    color: #7d858c;\n}\n.detail-storage-item.others .icon path[data-v-56af1b6e], .detail-storage-item.others .icon line[data-v-56af1b6e], .detail-storage-item.others .icon polyline[data-v-56af1b6e], .detail-storage-item.others .icon rect[data-v-56af1b6e], .detail-storage-item.others .icon circle[data-v-56af1b6e], .detail-storage-item.others .icon polygon[data-v-56af1b6e], .detail-storage-item.disk .icon path[data-v-56af1b6e], .detail-storage-item.disk .icon line[data-v-56af1b6e], .detail-storage-item.disk .icon polyline[data-v-56af1b6e], .detail-storage-item.disk .icon rect[data-v-56af1b6e], .detail-storage-item.disk .icon circle[data-v-56af1b6e], .detail-storage-item.disk .icon polygon[data-v-56af1b6e] {\n    stroke: #41454e;\n}\n.detail-storage-item.others .storage-progress[data-v-56af1b6e] span, .detail-storage-item.disk .storage-progress[data-v-56af1b6e] span {\n    background: #41454e;\n}\n}\n",""])},28:function(e,a,t){"use strict";var n=t(2),i=t.n(n),o={name:"ImageInput",props:["image","error"],components:{ImageIcon:{name:"ImageIcon",props:{size:{type:String,default:"24",validator:function(e){return!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}}},functional:!0,render:function(e,a){var t="x"===a.props.size.slice(-1)?a.props.size.slice(0,a.props.size.length-1)+"em":parseInt(a.props.size)+"px",n=a.data.attrs||{};return n.width=n.width||t,n.height=n.height||t,a.data.attrs=n,e("svg",i()([{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},class:"feather feather-image"},a.data]),[e("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}}),e("circle",{attrs:{cx:"8.5",cy:"8.5",r:"1.5"}}),e("polyline",{attrs:{points:"21 15 16 10 5 21"}})])}}},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{showImagePreview:function(e){var a=this,t=e.target.files[0].name,n=t.substring(t.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(n)){var i=e.target.files[0],o=new FileReader;o.onload=function(){return a.imagePreview=o.result},o.readAsDataURL(i),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},r=(t(251),t(0)),s=Object(r.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"dropzone",class:{"is-error":e.error}},[t("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(a){return e.showImagePreview(a)}}}),e._v(" "),e.imagePreview?t("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[t("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),e._v(" "),t("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),t("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"24846626",null);a.a=s.exports},29:function(e,a,t){"use strict";var n=t(69),i=t(1),o={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.v,FileTextIcon:i.r,ProgressBar:n.a,MusicIcon:i.H,VideoIcon:i.W,ImageIcon:i.x,FileIcon:i.q}},r=(t(253),t(0)),s=Object(r.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("article",{staticClass:"detail-storage-item",class:e.type},[t("div",{staticClass:"header-storage-item"},[t("div",{staticClass:"icon"},["images"==e.type?t("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?t("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?t("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?t("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?t("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?t("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),t("div",{staticClass:"title"},[t("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),t("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),t("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"56af1b6e",null);a.a=s.exports},341:function(e,a,t){"use strict";var n=t(111);t.n(n).a},342:function(e,a,t){(e.exports=t(5)(!1)).push([e.i,'.form[data-v-7e367779] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-7e367779] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-7e367779] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-7e367779] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-7e367779] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-7e367779] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-7e367779] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-7e367779] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-7e367779]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-7e367779] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-7e367779] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-7e367779] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-7e367779] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-7e367779] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-7e367779] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-7e367779] {\n  margin-left: 20px;\n}\n.error-message[data-v-7e367779] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-7e367779] {\n  width: 100%;\n}\ntextarea[data-v-7e367779],\ninput[type="password"][data-v-7e367779],\ninput[type="text"][data-v-7e367779],\ninput[type="number"][data-v-7e367779],\ninput[type="email"][data-v-7e367779] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-7e367779],\ninput[type="password"].is-error[data-v-7e367779],\ninput[type="text"].is-error[data-v-7e367779],\ninput[type="number"].is-error[data-v-7e367779],\ninput[type="email"].is-error[data-v-7e367779] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-7e367779]::-webkit-input-placeholder, input[type="password"][data-v-7e367779]::-webkit-input-placeholder, input[type="text"][data-v-7e367779]::-webkit-input-placeholder, input[type="number"][data-v-7e367779]::-webkit-input-placeholder, input[type="email"][data-v-7e367779]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7e367779]::-moz-placeholder, input[type="password"][data-v-7e367779]::-moz-placeholder, input[type="text"][data-v-7e367779]::-moz-placeholder, input[type="number"][data-v-7e367779]::-moz-placeholder, input[type="email"][data-v-7e367779]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7e367779]:-ms-input-placeholder, input[type="password"][data-v-7e367779]:-ms-input-placeholder, input[type="text"][data-v-7e367779]:-ms-input-placeholder, input[type="number"][data-v-7e367779]:-ms-input-placeholder, input[type="email"][data-v-7e367779]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7e367779]::-ms-input-placeholder, input[type="password"][data-v-7e367779]::-ms-input-placeholder, input[type="text"][data-v-7e367779]::-ms-input-placeholder, input[type="number"][data-v-7e367779]::-ms-input-placeholder, input[type="email"][data-v-7e367779]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7e367779]::placeholder,\ninput[type="password"][data-v-7e367779]::placeholder,\ninput[type="text"][data-v-7e367779]::placeholder,\ninput[type="number"][data-v-7e367779]::placeholder,\ninput[type="email"][data-v-7e367779]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7e367779]:focus,\ninput[type="password"][data-v-7e367779]:focus,\ninput[type="text"][data-v-7e367779]:focus,\ninput[type="number"][data-v-7e367779]:focus,\ninput[type="email"][data-v-7e367779]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-7e367779],\ninput[type="password"][disabled][data-v-7e367779],\ninput[type="text"][disabled][data-v-7e367779],\ninput[type="number"][disabled][data-v-7e367779],\ninput[type="email"][disabled][data-v-7e367779] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-7e367779] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-7e367779], .additional-link a[data-v-7e367779] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-7e367779]:hover, .additional-link a[data-v-7e367779]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-7e367779] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-7e367779] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-7e367779], .form textarea[data-v-7e367779] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-7e367779] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-7e367779] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-7e367779] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-7e367779] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-7e367779] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-7e367779] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-7e367779] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-7e367779] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-7e367779],\n  input[type="password"][data-v-7e367779],\n  input[type="number"][data-v-7e367779],\n  input[type="text"][data-v-7e367779],\n  input[type="email"][data-v-7e367779] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-7e367779] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-7e367779] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-7e367779] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-7e367779] {\n    color: #bec6cf;\n}\ntextarea[data-v-7e367779],\n  input[type="password"][data-v-7e367779],\n  input[type="text"][data-v-7e367779],\n  input[type="number"][data-v-7e367779],\n  input[type="email"][data-v-7e367779] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-7e367779]::-webkit-input-placeholder, input[type="password"][data-v-7e367779]::-webkit-input-placeholder, input[type="text"][data-v-7e367779]::-webkit-input-placeholder, input[type="number"][data-v-7e367779]::-webkit-input-placeholder, input[type="email"][data-v-7e367779]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-7e367779]::-moz-placeholder, input[type="password"][data-v-7e367779]::-moz-placeholder, input[type="text"][data-v-7e367779]::-moz-placeholder, input[type="number"][data-v-7e367779]::-moz-placeholder, input[type="email"][data-v-7e367779]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-7e367779]:-ms-input-placeholder, input[type="password"][data-v-7e367779]:-ms-input-placeholder, input[type="text"][data-v-7e367779]:-ms-input-placeholder, input[type="number"][data-v-7e367779]:-ms-input-placeholder, input[type="email"][data-v-7e367779]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-7e367779]::-ms-input-placeholder, input[type="password"][data-v-7e367779]::-ms-input-placeholder, input[type="text"][data-v-7e367779]::-ms-input-placeholder, input[type="number"][data-v-7e367779]::-ms-input-placeholder, input[type="email"][data-v-7e367779]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-7e367779]::placeholder,\n  input[type="password"][data-v-7e367779]::placeholder,\n  input[type="text"][data-v-7e367779]::placeholder,\n  input[type="number"][data-v-7e367779]::placeholder,\n  input[type="email"][data-v-7e367779]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-7e367779],\n  input[type="password"][disabled][data-v-7e367779],\n  input[type="text"][disabled][data-v-7e367779],\n  input[type="number"][disabled][data-v-7e367779],\n  input[type="email"][disabled][data-v-7e367779] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-7e367779] {\n  max-width: 100%;\n}\n',""])},53:function(e,a,t){var n=t(228);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},54:function(e,a,t){var n=t(230);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},55:function(e,a,t){var n=t(232);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},56:function(e,a,t){var n=t(234);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},568:function(e,a,t){"use strict";t.r(a);var n=t(9),i=t.n(n),o=t(8),r=t(29),s=t(16),d=t(14),l=t(28),p=t(13),c=t(11),m=t(25),u=t(15),v=t(12),f=t(10),b=t(3),g=t(4),h=t.n(g);function x(e,a,t,n,i,o,r){try{var s=e[o](r),d=s.value}catch(e){return void t(e)}s.done?a(d):Promise.resolve(d).then(n,i)}var y={name:"AppAppearance",components:{ValidationObserver:o.ValidationObserver,ValidationProvider:o.ValidationProvider,StorageItemDetail:r.a,PageTabGroup:s.a,SelectInput:d.a,ImageInput:l.a,ButtonBase:c.a,FormLabel:p.a,SetupBox:m.a,required:f.a,PageTab:u.a,InfoBox:v.a},data:function(){return{isLoading:!1,isSendingRequest:!1,encryptionList:[{label:"TLS",value:"tls"},{label:"SSL",value:"ssl"}],mail:{driver:"",host:"",port:"",username:"",password:"",encryption:""}}},methods:{EmailSetupSubmit:function(){var e,a=this;return(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$refs.EmailSetup.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:a.isSendingRequest=!0,h.a.put("/api/settings/email",a.mail).then((function(){b.a.$emit("toaster",{type:"success",message:a.$t("toaster.email_set")})})).catch((function(){b.a.$emit("alert:open",{title:a.$t("popup_error.title"),message:a.$t("popup_error.message")})})).finally((function(){a.isSendingRequest=!1}));case 7:case"end":return e.stop()}}),e)})),function(){var a=this,t=arguments;return new Promise((function(n,i){var o=e.apply(a,t);function r(e){x(o,n,i,r,s,"next",e)}function s(e){x(o,n,i,r,s,"throw",e)}r(void 0)}))})()}}},w=(t(341),t(0)),_=Object(w.a)(y,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":e.isLoading}},[t("PageTabGroup",[t("ValidationObserver",{ref:"EmailSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),e.EmailSetupSubmit(a)}},scopedSlots:e._u([{key:"default",fn:function(a){a.invalid;return[t("FormLabel",[e._v(e._s(e.$t("admin_settings.email.section_email")))]),e._v(" "),t("InfoBox",[t("p",{domProps:{innerHTML:e._s(e.$t("admin_settings.email.email_disclaimer"))}})]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.driver"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Driver",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.driver,expression:"mail.driver"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.email.driver_plac"),type:"text"},domProps:{value:e.mail.driver},on:{input:function(a){a.target.composing||e.$set(e.mail,"driver",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.host"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Host",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.host,expression:"mail.host"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.email.host_plac"),type:"text"},domProps:{value:e.mail.host},on:{input:function(a){a.target.composing||e.$set(e.mail,"host",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.port"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Port",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.port,expression:"mail.port"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.email.port_plac"),type:"text"},domProps:{value:e.mail.port},on:{input:function(a){a.target.composing||e.$set(e.mail,"port",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.username"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.username,expression:"mail.username"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.email.username_plac"),type:"text"},domProps:{value:e.mail.username},on:{input:function(a){a.target.composing||e.$set(e.mail,"username",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.password"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.password,expression:"mail.password"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.email.password_plac"),type:"text"},domProps:{value:e.mail.password},on:{input:function(a){a.target.composing||e.$set(e.mail,"password",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.encryption"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Encryption",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("SelectInput",{attrs:{options:e.encryptionList,placeholder:e.$t("admin_settings.email.encryption_plac"),isError:n[0]},model:{value:e.mail.encryption,callback:function(a){e.$set(e.mail,"encryption",a)},expression:"mail.encryption"}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("ButtonBase",{staticClass:"submit-button",attrs:{loading:e.isSendingRequest,disabled:e.isSendingRequest,type:"submit","button-style":"theme"}},[e._v("\n                "+e._s(e.$t("admin_settings.email.save_button"))+"\n            ")])]}}])})],1)],1)}),[],!1,null,"7e367779",null);a.default=_.exports},61:function(e,a,t){var n=t(244);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},62:function(e,a,t){var n=t(246);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},65:function(e,a,t){var n=t(252);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},66:function(e,a,t){var n=t(254);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,i);n.locals&&(e.exports=n.locals)},69:function(e,a,t){"use strict";var n={name:"ProgressBar",props:["progress"]},i=(t(243),t(0)),o=Object(i.a)(n,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"progress-bar"},[a("span",{style:{width:this.progress+"%"}})])}),[],!1,null,"9f98bf3e",null);a.a=o.exports}}]);