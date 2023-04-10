(self.webpackChunkvivi_blog=self.webpackChunkvivi_blog||[]).push([[576,733],{69603:(t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.colorList=["#EB6841","#3FB8AF","#464646","#FC9D9A","#EDC951","#C8C8A9","#83AF9B","#036564"]},40877:(t,n,e)=>{"use strict";Object.defineProperty(n,"X",{value:!0});var o=r(e(72733)),i=r(e(57010)),a=e(69603);function r(t){return t&&t.__esModule?t:{default:t}}n.Z={name:"comment-editor",components:{InputBox:o.default,EmojiPicker:i.default},data:function(){return{inputContent:"",nickname:""}},props:{},computed:{},destroyed:function(){},mounted:function(){},methods:{handlerSubmit:function(){if(!this.inputContent)return!1;var t={content:this.inputContent,nickname:this.nickname,createTime:(new Date).getTime()+"",headerColor:a.colorList[Math.floor(7*Math.random())]};this.$emit("submit",t)},handlerEmojiSelected:function(t){this.$refs.inputBox.focus();var n=t.target.cloneNode(!0);n.style.verticalAlign="text-top",document.execCommand("insertHTML",!1,n.outerHTML)},handleReset:function(){this.$refs.inputBox.reset(),this.inputContent="",this.nickname=""}}}},33630:(t,n,e)=>{"use strict";Object.defineProperty(n,"X",{value:!0});var o,i=e(52945),a=(o=i)&&o.__esModule?o:{default:o};n.Z={name:"input-box",props:{},data:function(){return{}},computed:{listeners:function(){return(0,a.default)({},this.$listeners,{input:function(t){var n=t.target.innerHTML;this.$emit("input",n)}.bind(this)})}},mounted:function(){},methods:{focus:function(){this.$refs.richText.focus()},reset:function(){this.$refs.richText.innerHTML=""}}}},76088:(t,n,e)=>{(t.exports=e(9252)(!1)).push([t.id,"/**\n * 变量样式\n */\n.comment-editor[data-v-d473ffb0] {\n  width: 100%;\n  padding: 24px 48px;\n}\n.comment-editor .input-wrapper.inline[data-v-d473ffb0] {\n  display: flex;\n}\n.comment-editor .input-wrapper.inline .input-box[data-v-d473ffb0] {\n  flex: 1;\n  margin-right: 14px;\n}\n.comment-editor .footer-action[data-v-d473ffb0] {\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n}\n.comment-editor .footer-action input[data-v-d473ffb0] {\n  margin-left: auto;\n  margin-right: 24px;\n  height: 32px;\n  border: none;\n  border: 1px solid #16151A;\n  border-radius: 20px;\n  padding-left: 12px;\n  outline: none;\n  box-shadow: 4px 3px 3px gainsboro;\n}\n.comment-editor .footer-action input[data-v-d473ffb0]::placeholder {\n  color: #16151A;\n}\n.comment-editor .footer-action .submit-tiptext[data-v-d473ffb0] {\n  margin-right: 4px;\n  font-size: 14px;\n  color: #16151A;\n}\n.comment-editor .footer-action .submit-button[data-v-d473ffb0] {\n  align-self: flex-end;\n  transition: all 0.2s;\n  background: #409eff;\n  border-radius: 4px;\n  display: inline-block;\n  cursor: pointer;\n  padding: 6px 10px;\n  color: white;\n  user-select: none;\n}\n.comment-editor .footer-action .submit-button.button-enter[data-v-d473ffb0],\n.comment-editor .footer-action .submit-button.button-leave-to[data-v-d473ffb0] {\n  margin-left: -40px;\n  transform: scale(0, 0);\n}\n.comment-editor .footer-action .submit-button[disabled][data-v-d473ffb0] {\n  cursor: not-allowed;\n  background: #66b1ff;\n}\n.comment-editor .footer-action .submit-button[data-v-d473ffb0]:hover {\n  background: #66b1ff;\n}\n.comment-editor .footer-action .submit-button[data-v-d473ffb0]:not([disabled]):active {\n  background: #3a8ee6;\n}\n",""])},51771:(t,n,e)=>{(t.exports=e(9252)(!1)).push([t.id,"/**\n * 变量样式\n */\n.input-box-wrapper[data-v-092631a5] {\n  position: relative;\n}\n.content[data-v-092631a5] {\n  max-height: 200px;\n  overflow: auto;\n  border: 1px solid gainsboro;\n  box-shadow: 4px 3px 3px gainsboro;\n  border-radius: 12px;\n  padding: 7px 10px;\n  padding-right: 30px;\n  position: relative;\n}\n.content[data-v-092631a5]::-webkit-scrollbar {\n  width: 0;\n}\n.content.textarea[data-v-092631a5] {\n  min-height: 100px;\n}\n.content.text[data-v-092631a5] {\n  min-height: 80px;\n}\n.content[data-v-092631a5]:empty:before {\n  content: attr(placeholder);\n  color: #16151A;\n  position: absolute;\n  left: 12px;\n  top: 8px;\n}\n.content.focused[data-v-092631a5] {\n  border: #66b1ff 1px solid;\n  cursor: text;\n}\n.content[data-v-092631a5]:focus {\n  outline: none;\n}\n.append-wrapper[data-v-092631a5] {\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  bottom: 1px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n}\n",""])},43576:(t,n,e)=>{"use strict";e.r(n),e.d(n,{__esModule:()=>o.X,default:()=>a});var o=e(40877);const i=o.Z;e(15531);const a=(0,e(51900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"container",staticClass:"comment-editor"},[e("div",{staticClass:"input-wrapper"},[e("input-box",{ref:"inputBox",staticClass:"input-box",attrs:{placeholder:"说点什么吧......"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:n.ctrlKey?n.shiftKey||n.altKey||n.metaKey?null:t.handlerSubmit.apply(null,arguments):null}},model:{value:t.inputContent,callback:function(n){t.inputContent=n},expression:"inputContent"}})],1),t._v(" "),e("div",{staticClass:"footer-action"},[e("emoji-picker",{attrs:{"trigger-pick":"click"},on:{activated:function(n){return t.$refs.inputBox.focus()},selected:t.handlerEmojiSelected}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"你的昵称",maxlength:"10"},domProps:{value:t.nickname},on:{input:function(n){n.target.composing||(t.nickname=n.target.value)}}}),t._v(" "),e("span",{staticClass:"submit-tiptext"},[t._v("Ctrl + Enter")]),t._v(" "),e("div",{staticClass:"submit-button",attrs:{disabled:!t.inputContent},on:{click:t.handlerSubmit}},[t._v("\n      提交\n    ")])],1)])}),[],!1,null,"d473ffb0",null).exports},72733:(t,n,e)=>{"use strict";e.r(n),e.d(n,{__esModule:()=>o.X,default:()=>a});var o=e(33630);const i=o.Z;e(8287);const a=(0,e(51900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"input-box-wrapper",attrs:{type:"text"}},[e("div",t._g(t._b({ref:"richText",staticClass:"content textarea",attrs:{contenteditable:!0}},"div",t.$attrs,!1),t.listeners)),t._v(" "),e("div",{staticClass:"append-wrapper"},[t._t("append")],2)])}),[],!1,null,"092631a5",null).exports},15531:(t,n,e)=>{var o=e(76088);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(45346).Z)("e5719a1a",o,!0,{})},8287:(t,n,e)=>{var o=e(51771);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(45346).Z)("041ce388",o,!0,{})}}]);