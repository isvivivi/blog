(self.webpackChunkvivi_blog=self.webpackChunkvivi_blog||[]).push([[684],{35014:(n,t,i)=>{"use strict";var o,a=i(19755),e=(o=a)&&o.__esModule?o:{default:o};(0,e.default)(document).ready((function(){window.scrollTo(0,0),(0,e.default)(window).scroll((function(){var n=(0,e.default)(window).scrollTop();n*=.05,(0,e.default)(".planet").css({"-moz-transform":"rotate(-"+n+"deg)","-webkit-transform":"rotate(-"+n+"deg)","-o-transform":"rotate(-"+n+"deg)","-ms-transform":"rotate(-"+n+"deg)",transform:"rotate(-"+n+"deg)"})})),(0,e.default)(".ajfel").click((function(){window.scrollTo(0,0),(0,e.default)(".bus").removeClass("bus-bottom")})),(0,e.default)(".wash").click((function(){window.scrollTo(0,400),(0,e.default)(".bus").removeClass("bus-bottom")})),(0,e.default)(".rus").click((function(){window.scrollTo(0,950),(0,e.default)(".bus").removeClass("bus-forward"),(0,e.default)(".bus").addClass("bus-bottom")})),(0,e.default)(".build").click((function(){window.scrollTo(0,1350),(0,e.default)(".bus").removeClass("bus-bottom"),(0,e.default)(".bus").addClass("bus-top")})),(0,e.default)(".prus").click((function(){window.scrollTo(0,1800),(0,e.default)(".bus").removeClass("bus-top"),(0,e.default)(".bus").addClass("bus-back")})),(0,e.default)(".germ").click((function(){window.scrollTo(0,2400),(0,e.default)(".bus").removeClass("bus-back"),(0,e.default)(".bus").addClass("bus-forward")})),(0,e.default)(".crkv").click((function(){window.scrollTo(0,2910),(0,e.default)(".bus").removeClass("bus-forward"),(0,e.default)(".bus").addClass("bus-bottom")})),(0,e.default)(".krist").click((function(){window.scrollTo(0,3190),(0,e.default)(".bus").removeClass("bus-bottom"),(0,e.default)(".bus").addClass("bus-forward")})),(0,e.default)(".piramid").click((function(){window.scrollTo(0,3630),(0,e.default)(".bus").removeClass("bus-forward"),(0,e.default)(".bus").addClass("bus-bottom")})),(0,e.default)(".arab").click((function(){window.scrollTo(0,3990),(0,e.default)(".bus").removeClass("bus-bottom"),(0,e.default)(".bus").addClass("bus-back")})),(0,e.default)(".relg").click((function(){window.scrollTo(0,4360),(0,e.default)(".bus").removeClass("bus-back"),(0,e.default)(".bus").addClass("bus-top")})),(0,e.default)(".pope").click((function(){window.scrollTo(0,4700),(0,e.default)(".bus").removeClass("bus-top"),(0,e.default)(".bus").addClass("bus-bottom")})),(0,e.default)(".bigben").click((function(){window.scrollTo(0,4950),(0,e.default)(".bus").removeClass("bus-bottom"),(0,e.default)(".bus").addClass("bus-forward")})),(0,e.default)(".bridge").click((function(){window.scrollTo(0,5400),(0,e.default)(".bus").removeClass("bus-forward"),(0,e.default)(".bus").addClass("bus-bottom")})),(0,e.default)(".germ2").click((function(){window.scrollTo(0,5950),(0,e.default)(".bus").removeClass("bus-bottom"),(0,e.default)(".bus").addClass("bus-back")})),(0,e.default)(".rom").click((function(){window.scrollTo(0,6400),(0,e.default)(".bus").removeClass("bus-back"),(0,e.default)(".bus").addClass("bus-forward")})),(0,e.default)(".chrch").click((function(){window.scrollTo(0,6750),(0,e.default)(".bus").addClass("bus-back")}))}))},14481:(n,t,i)=>{"use strict";Object.defineProperty(t,"X",{value:!0}),t.Z={name:"indexComponent",components:{},props:{},computed:{},data:function(){return{}},watch:{},created:function(){},mounted:function(){i(35014)},beforeDestroy:function(){},methods:{}}},20222:(n,t,i)=>{(t=n.exports=i(9252)(!1)).push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,300);",""]),t.push([n.id,'/**\n * 变量样式\n */\n.planet-wrapper {\n  z-index: 99;\n  width: 100%;\n  height: 8000px;\n}\n.planet-wrapper span {\n  display: block;\n  width: 5px;\n  height: 5px;\n  transform: rotate(45deg);\n  border-right: 2px solid rgba(0, 0, 0, 0.2);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\n}\n.mouse-margin {\n  padding-top: 10px;\n  margin-left: -1px;\n}\n.unu {\n  margin-top: 6px;\n  -webkit-animation: mouse-scroll 1s infinite;\n  -moz-animation: mouse-scroll 1s infinite;\n}\n.doi,\n.trei {\n  -webkit-animation: mouse-scroll 1s infinite;\n  -moz-animation: mouse-scroll 1s infinite;\n}\n.unu {\n  -webkit-animation-delay: 0.1s;\n  -moz-animation-delay: 0.1s;\n  -webkit-animation-direction: alternate;\n}\n.doi {\n  -webkit-animation-delay: 0.2s;\n  -moz-animation-delay: 0.2s;\n  -webkit-animation-direction: alternate;\n}\n.trei {\n  -webkit-animation-delay: 0.3s;\n  -moz-animation-delay: 0.3s;\n  -webkit-animation-direction: alternate;\n}\n.mouse {\n  position: fixed;\n  bottom: 25px;\n  left: 50%;\n  margin-left: -7px;\n  height: 21px;\n  width: 14px;\n  border-radius: 10px;\n  transform: none;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n}\n.mouse-sign {\n  position: fixed;\n  bottom: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: rgba(0, 0, 0, 0.2);\n}\n.mouse-sign span {\n  margin-right: 8px;\n}\n.wheel {\n  height: 5px;\n  width: 2px;\n  display: block;\n  margin: 5px auto;\n  background: rgba(0, 0, 0, 0.2);\n  position: relative;\n  -webkit-animation: mouse-wheel 1.2s ease infinite;\n  -moz-animation: mouse-wheel 1.2s ease infinite;\n}\n.cloud-left {\n  position: fixed;\n  top: 100px;\n  left: 0;\n  width: 30%;\n}\n.cloud-right {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 40%;\n}\n.cloud-right2 {\n  position: fixed;\n  top: 200px;\n  right: 0;\n  width: 25%;\n  transform: rotate(180deg);\n}\n#clouds {\n  position: fixed;\n  top: 200px;\n  left: 0;\n  width: 100%;\n  height: 20%;\n}\n.cloud {\n  width: 200px;\n  height: 60px;\n  background: #fff;\n  border-radius: 200px;\n  -moz-border-radius: 200px;\n  -webkit-border-radius: 200px;\n  position: relative;\n}\n.cloud:before {\n  content: "";\n  background: #fff;\n  width: 100px;\n  height: 80px;\n  position: absolute;\n  top: -15px;\n  left: 10px;\n  border-radius: 100px;\n  -moz-border-radius: 100px;\n  -webkit-border-radius: 100px;\n  transform: rotate(30deg);\n  -moz-transform: rotate(30deg);\n}\n.cloud:after {\n  content: "";\n  background: #fff;\n  width: 100px;\n  height: 80px;\n  position: absolute;\n  top: -15px;\n  left: 10px;\n  border-radius: 100px;\n  -moz-border-radius: 100px;\n  -webkit-border-radius: 100px;\n  transform: rotate(30deg);\n  -moz-transform: rotate(30deg);\n  width: 120px;\n  height: 120px;\n  top: -55px;\n  left: auto;\n  right: 15px;\n}\n.cld1 {\n  -webkit-animation: moveclouds 25s linear infinite;\n  -moz-animation: moveclouds 25s linear infinite;\n  -o-animation: moveclouds 25s linear infinite;\n}\n.cld2 {\n  left: 200px;\n  transform: scale(0.6);\n  opacity: 0.6;\n  -webkit-animation: moveclouds 35s linear infinite;\n  -moz-animation: moveclouds 35s linear infinite;\n  -o-animation: moveclouds 35s linear infinite;\n}\n.cld3 {\n  left: -250px;\n  top: -200px;\n  transform: scale(0.8);\n  opacity: 0.8;\n  -webkit-animation: moveclouds 30s linear infinite;\n  -moz-animation: moveclouds 30s linear infinite;\n  -o-animation: moveclouds 30s linear infinite;\n}\n.cld4 {\n  left: 470px;\n  top: -250px;\n  transform: scale(0.75);\n  opacity: 0.75;\n  -webkit-animation: moveclouds 38s linear infinite;\n  -moz-animation: moveclouds 38s linear infinite;\n  -o-animation: moveclouds 38s linear infinite;\n}\n.cld5 {\n  left: -150px;\n  top: -150px;\n  transform: scale(0.8);\n  opacity: 0.8;\n  -webkit-animation: moveclouds 40s linear infinite;\n  -moz-animation: moveclouds 40s linear infinite;\n  -o-animation: moveclouds 40s linear infinite;\n}\n.cld6 {\n  left: 650px;\n  top: -50px;\n  transform: scale(0.8);\n  opacity: 0.8;\n  -webkit-animation: moveclouds 40s linear infinite;\n  -moz-animation: moveclouds 40s linear infinite;\n  -o-animation: moveclouds 40s linear infinite;\n}\n.planet {\n  position: fixed;\n  left: 50%;\n  margin-left: -750px;\n  margin-top: 75vh;\n  height: 1500px;\n  width: 1500px;\n  transform: rotate(0deg);\n  transition: all 1s ease-in-out;\n}\n@media all and (max-width: 1200px) {\n.planet {\n    margin-top: 80vh;\n}\n.planet .surface6,\n  .planet .surface5 {\n    box-shadow: none;\n}\n.planet .surface5,\n  .planet .surface4 {\n    background: #D4D0BA;\n}\n}\n@media all and (max-width: 1100px) {\n.planet {\n    margin-top: 85vh;\n}\n.planet .surface3 {\n    background: #D4D0BA;\n}\n.planet .surface4,\n  .planet .surface5 {\n    box-shadow: none;\n    background: #D4D0BA;\n}\n}\n@media all and (max-width: 900px) {\n.planet {\n    margin-top: 90vh;\n}\n.planet .surface3,\n  .planet .surface4,\n  .planet .surface5 {\n    box-shadow: none;\n    background: #5F3A2F;\n}\n}\n@media all and (max-width: 760px) {\n.planet {\n    margin-top: 95vh;\n}\n}\n@media all and (max-height: 970px) {\n.planet .surface6 {\n    box-shadow: none;\n}\n.planet .surface5 {\n    background: #D4D0BA;\n}\n}\n@media all and (max-height: 850px) {\n.planet {\n    margin-top: 85vh;\n}\n.planet .surface3,\n  .planet .surface4 {\n    box-shadow: none;\n    background: none;\n}\n}\n.planet-surface {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #5F3A2F;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px #5F3A2F;\n}\n.surface2 {\n  position: absolute;\n  top: 2.5%;\n  left: 2.5%;\n  width: 95%;\n  height: 95%;\n  border: dashed 10px #C2986C;\n  border-radius: 50%;\n}\n.surface3 {\n  position: absolute;\n  top: 6%;\n  left: 6%;\n  width: 88%;\n  height: 88%;\n  border-radius: 50%;\n  background: #0E979F;\n  box-shadow: inset 0px 0px 10px black;\n  transition: all 1s ease-in-out;\n}\n.surface4 {\n  position: absolute;\n  top: 8%;\n  left: 8%;\n  width: 84%;\n  height: 84%;\n  border-radius: 50%;\n  background: #F06C25;\n  box-shadow: inset 0px 0px 10px black;\n}\n.surface5 {\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  border-radius: 50%;\n  background: #F9B718;\n  box-shadow: inset 0px 0px 10px black;\n}\n.surface6 {\n  position: absolute;\n  top: 12%;\n  left: 12%;\n  width: 76%;\n  height: 76%;\n  border-radius: 50%;\n  background: #D4D0BA;\n  box-shadow: inset 0px 0px 10px black;\n}\n.bus {\n  position: fixed;\n  top: 75vh;\n  margin-top: -50px;\n  left: 50%;\n  margin-left: -100px;\n  width: 200px;\n  height: 120px;\n  border-bottom: 10px solid #BA1A1E;\n  transition: all 1s ease-in-out;\n  -webkit-animation: busupdown 0.8s linear infinite;\n  -moz-animation: busupdown 0.8s linear infinite;\n  -o-animation: busupdown 0.8s linear infinite;\n}\n.bus-forward {\n  margin-left: -80px;\n}\n.bus-back {\n  margin-left: -95px;\n}\n.bus-top {\n  margin-left: -110px;\n}\n.bus-bottom {\n  margin-left: -120px;\n}\n.bus-up {\n  position: relative;\n  width: 98%;\n  height: 34%;\n  background: #ED2226;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n  border-bottom-right-radius: 10px;\n  box-shadow: 0px -10px 40px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  text-align: center;\n  border-top: 2px solid #ED2226;\n}\n.bus-middle {\n  position: relative;\n  width: 92%;\n  height: 32%;\n  background: #ED2226;\n  padding-left: 5px;\n}\n.bus-down {\n  width: 100%;\n  height: 34%;\n  background: #ED2226;\n  border-top-right-radius: 15px;\n  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);\n}\n.tire-left {\n  width: 40px;\n  height: 40px;\n  background: #1A1417;\n  position: absolute;\n  bottom: -20px;\n  left: 10px;\n  border-radius: 50%;\n  border-bottom: 5px solid #0A0809;\n}\n.tire-right {\n  width: 40px;\n  height: 40px;\n  background: #1A1417;\n  position: absolute;\n  bottom: -20px;\n  right: 10px;\n  border-radius: 50%;\n  border-bottom: 5px solid #0A0809;\n}\n.tire-middle {\n  width: 15px;\n  height: 15px;\n  background: #F8E8CE;\n  position: absolute;\n  top: 12.5px;\n  left: 12.5px;\n  border-radius: 50%;\n}\n.tire-anim {\n  -webkit-animation: tireleft 0.8s linear infinite;\n  -moz-animation: tireleft 0.8s linear infinite;\n  -o-animation: tireleft 0.8s linear infinite;\n}\n.bus-window {\n  display: inline-block;\n  width: 20%;\n  height: 100%;\n  background: #EFEFEF;\n  border: 4px solid #ED2226;\n  border-right: 2px solid #ED2226;\n  border-left: 2px solid #ED2226;\n}\n.bus-door {\n  display: inline-block;\n  width: 12%;\n  height: 100%;\n  background: #EFEFEF;\n  border: 4px solid #ED2226;\n  border-right: 2px solid #ED2226;\n  border-left: 2px solid #ED2226;\n  float: right;\n  border-bottom-left-radius: 8px;\n  border-top-left-radius: 8px;\n}\n.bus-window-left {\n  border-bottom-left-radius: 8px;\n}\n.bus-window-right {\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.bus-window-topleft {\n  border-top-left-radius: 20px;\n}\n.bus-window-topright {\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 8px;\n}\n.bus-window-width {\n  width: 17%;\n}\n.bus-middle hr {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  background: #ED2226;\n  width: 88%;\n  height: 2px;\n  border: none;\n}\n.bus-up hr {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  background: #ED2226;\n  width: 100%;\n  height: 2px;\n  border: none;\n}\n.buildings {\n  transition: all 0.2s linear;\n}\n.buildings:hover {\n  cursor: pointer;\n  opacity: 0.5;\n}\n.piza {\n  position: absolute;\n  top: -260px;\n  left: 41%;\n  margin-left: -100px;\n}\n.ajfel {\n  position: absolute;\n  top: -380px;\n  left: 50%;\n  margin-left: -100px;\n}\n.amer {\n  position: absolute;\n  top: -190px;\n  left: 61%;\n  margin-left: -100px;\n}\n.wash {\n  position: absolute;\n  top: -150px;\n  right: 23%;\n  transform: rotate(0deg);\n}\n.rus {\n  position: absolute;\n  top: -5px;\n  right: -55px;\n  transform: rotate(-5deg);\n}\n.build {\n  position: absolute;\n  top: 320px;\n  right: -220px;\n  transform: rotate(2deg);\n}\n.prus {\n  position: absolute;\n  top: 40%;\n  right: -290px;\n  transform: rotate(97deg);\n}\n.germ {\n  position: absolute;\n  bottom: 11%;\n  right: -35px;\n  transform: rotate(7deg);\n}\n.crkv {\n  position: absolute;\n  bottom: -200px;\n  right: 100px;\n}\n.krist {\n  position: absolute;\n  bottom: -200px;\n  right: 300px;\n  transform: rotate(-10deg);\n}\n.piramid {\n  position: absolute;\n  bottom: -170px;\n  left: 38%;\n  transform: rotate(-2deg);\n}\n.arab {\n  position: absolute;\n  bottom: -230px;\n  left: 27%;\n  transform: rotate(5deg);\n}\n.relg {\n  position: absolute;\n  bottom: -140px;\n  left: 7.5%;\n  transform: rotate(10deg);\n}\n.pope {\n  position: absolute;\n  bottom: 50px;\n  left: -120px;\n  transform: rotate(16deg);\n}\n.bigben {\n  position: absolute;\n  bottom: 380px;\n  left: -230px;\n  transform: rotate(-15deg);\n}\n.bridge {\n  position: absolute;\n  top: 35%;\n  left: -230px;\n}\n.germ2 {\n  position: absolute;\n  top: 12%;\n  left: -260px;\n  transform: rotate(15deg);\n}\n.rom {\n  position: absolute;\n  top: 1%;\n  left: 128px;\n  transform: rotate(-10deg);\n}\n.chrch {\n  position: absolute;\n  top: -110px;\n  left: 370px;\n  transform: rotate(5deg);\n}\n.main {\n  position: fixed;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  height: 100%;\n  max-width: 1200px;\n}\n.main h1 {\n  margin-top: 70px;\n  font-size: 100px;\n  color: #cc8198;\n  text-align: center;\n}\n@media all and (max-width: 1210px) {\n.main h1 {\n    font-size: 90px;\n}\n}\n@media all and (max-width: 1090px) {\n.main h1 {\n    font-size: 80px;\n}\n}\n@media all and (max-width: 980px) {\n.main h1 {\n    font-size: 70px;\n}\n}\n.main h3 {\n  margin-top: -2.5em;\n  font-size: 4em;\n  color: #F06D24;\n  text-align: center;\n}\n@media all and (max-width: 1210px) {\n.main h3 {\n    font-size: 3.6em;\n}\n}\n@media all and (max-width: 1090px) {\n.main h3 {\n    font-size: 3.4em;\n}\n}\n@media all and (max-width: 980px) {\n.main h3 {\n    font-size: 2.6em;\n}\n}\n.main p {\n  font-size: 1.4em;\n  width: 600px;\n  margin: 0 auto;\n  margin-top: -0.8em;\n  text-align: center;\n}\n.scale {\n  z-index: 999;\n  transform: scale(1.1);\n}\n.opacity {\n  opacity: 0.5;\n}\n.main-read {\n  background: white;\n}\n@media all and (max-height: 850px) {\nspan,\n  .mouse,\n  .wheel {\n    border: 2px solid rgba(255, 255, 255, 0.2);\n}\n.mouse-sign {\n    bottom: 10px;\n    color: rgba(255, 255, 255, 0.2);\n}\n.bus {\n    top: 80vh;\n}\n}\n@media all and (max-width: 900px) {\nspan,\n  .mouse,\n  .wheel {\n    border: 2px solid rgba(255, 255, 255, 0.2);\n}\n.mouse-sign {\n    bottom: 10px;\n    color: rgba(255, 255, 255, 0.2);\n}\n.bus {\n    top: 70vh;\n}\n}\n@media all and (max-width: 1120px) {\n.bus {\n    top: 80vh;\n}\n}\n@media all and (max-width: 900px) {\n.bus {\n    top: 85vh;\n}\n}\n@media all and (max-width: 770px) {\n.bus {\n    top: 90vh;\n}\n}\n@-webkit-keyframes mouse-wheel {\n0% {\n    opacity: 1;\n    transform: translateY(0);\n}\n100% {\n    opacity: 0;\n    transform: translateY(6px);\n}\n}\n@-webkit-keyframes mouse-scroll {\n0% {\n    opacity: 0;\n}\n50% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes mouse-scroll {\n0% {\n    opacity: 0;\n}\n50% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes moveclouds {\n0% {\n    margin-left: 100%;\n}\n100% {\n    margin-left: -100%;\n}\n}\n@keyframes moveclouds {\n0% {\n    margin-left: 100%;\n}\n100% {\n    margin-left: -100%;\n}\n}\n@-webkit-keyframes busupdown {\n0% {\n    margin-top: -50px;\n}\n50% {\n    margin-top: -55px;\n}\n100% {\n    margin-top: -50px;\n}\n}\n@keyframes busupdown {\n0% {\n    margin-top: -50px;\n}\n50% {\n    margin-top: -55px;\n}\n100% {\n    margin-top: -50px;\n}\n}\n@-webkit-keyframes tireleft {\n0% {\n    bottom: -20px;\n}\n50% {\n    bottom: -28px;\n}\n100% {\n    bottom: -20px;\n}\n}\n@keyframes tireleft {\n0% {\n    bottom: -20px;\n}\n50% {\n    bottom: -28px;\n}\n100% {\n    bottom: -20px;\n}\n}\n',""])},14684:(n,t,i)=>{"use strict";i.r(t),i.d(t,{__esModule:()=>o.X,default:()=>e});var o=i(14481);const a=o.Z;i(65410);const e=(0,i(51900).Z)(a,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"planet-wrapper"},[n._m(0),n._v(" "),n._m(1),n._v(" "),i("div",{staticClass:"planet spin1"},[i("img",{staticClass:"amer",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/ajfel.png"}}),i("img",{staticClass:"amer",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/amer.png"}}),n._v(" "),i("img",{staticClass:"buildings wash",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/wash.png"},on:{click:function(t){return n.$router.push("/label/all")}}}),i("img",{staticClass:"buildings rus",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/rus.png"}}),i("img",{staticClass:"buildings build",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/build.png"}}),i("img",{staticClass:"buildings prus",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/prus.png"}}),i("img",{staticClass:"buildings germ",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/germ.png"}}),i("img",{staticClass:"buildings crkv",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/crkv.png"}}),i("img",{staticClass:"buildings krist",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/krist.png"}}),i("img",{staticClass:"buildings piramid",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/piramid.png"}}),i("img",{staticClass:"buildings arab",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/arab.png"}}),i("img",{staticClass:"buildings relg",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/relg.png"}}),i("img",{staticClass:"buildings pope",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/pope.png"}}),i("img",{staticClass:"buildings bigben",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/bigben.png"}}),i("img",{staticClass:"buildings bridge",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/bridge.png"}}),i("img",{staticClass:"buildings germ2",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/germ2.png"}}),i("img",{staticClass:"buildings rom",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/rom.png"}}),n._v(" "),i("img",{staticClass:"buildings chrch",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/chrch.png"},on:{click:function(t){return n.$router.push("/drawings")}}}),i("img",{staticClass:"piza",attrs:{src:"https://notbigmuzzy.github.io/codepen/example3/img/piza.png"}}),n._v(" "),n._m(2)]),n._v(" "),n._m(3),n._v(" "),n._m(4)])}),[function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"clouds"}},[i("div",{staticClass:"cloud cld1"}),n._v(" "),i("div",{staticClass:"cloud cld2"}),n._v(" "),i("div",{staticClass:"cloud cld3"}),n._v(" "),i("div",{staticClass:"cloud cld4"}),n._v(" "),i("div",{staticClass:"cloud cld5"}),n._v(" "),i("div",{staticClass:"cloud cld6"})])},function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"main"},[i("h1",[n._v("WELCOME TO VIVI'S PLANET")])])},function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"planet-surface"},[i("div",{staticClass:"surface2"}),n._v(" "),i("div",{staticClass:"surface3"}),n._v(" "),i("div",{staticClass:"surface4"}),n._v(" "),i("div",{staticClass:"surface5"}),n._v(" "),i("div",{staticClass:"surface6"})])},function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"bus"},[i("div",{staticClass:"bus-up"},[i("div",{staticClass:"bus-window bus-window-topleft bus-window-width"}),n._v(" "),i("div",{staticClass:"bus-window bus-window-width"}),n._v(" "),i("div",{staticClass:"bus-window bus-window-width"}),n._v(" "),i("div",{staticClass:"bus-window bus-window-width"}),n._v(" "),i("div",{staticClass:"bus-window bus-window-topright bus-window-width"}),n._v(" "),i("hr")]),n._v(" "),i("div",{staticClass:"bus-middle"},[i("div",{staticClass:"bus-window bus-window-left"}),n._v(" "),i("div",{staticClass:"bus-window"}),n._v(" "),i("div",{staticClass:"bus-window"}),n._v(" "),i("div",{staticClass:"bus-window bus-window-right"}),n._v(" "),i("div",{staticClass:"bus-door"}),n._v(" "),i("hr")]),n._v(" "),i("div",{staticClass:"bus-down"},[i("div",{staticClass:"tire-left tire-anim"},[i("div",{staticClass:"tire-middle"})]),n._v(" "),i("div",{staticClass:"tire-right tire-anim"},[i("div",{staticClass:"tire-middle"})])])])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"mouse-sign"},[t("div",{staticClass:"mouse"},[t("div",{staticClass:"wheel"},[t("div",{staticClass:"mouse-margin"},[t("span",{staticClass:"unu"}),t("span",{staticClass:"doi"}),t("span",{staticClass:"trei"})])])])])}],!1,null,null,null).exports},65410:(n,t,i)=>{var o=i(20222);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,i(45346).Z)("10efcac4",o,!0,{})}}]);