(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-commodity~pages-public-company"],{"13ee":function(t,e,i){var n=i("9f6b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("46ed292a",n,!0,{sourceMap:!1,shadowMode:!1})},"1a57":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uRow:i("5629").default,uCol:i("3f72").default,uImage:i("48b3").default,uButton:i("82cc").default,uIcon:i("0191").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"wrap",staticStyle:{position:"fixed",bottom:"0",width:"100%","background-color":"#F8F8FF","z-index":"998"}},[i("u-row",{staticStyle:{padding:"10upx 20upx",border:"2upx solid #ebedf0"},attrs:{gutter:"16"}},[i("u-col",{attrs:{span:"2"}},[i("v-uni-view",{staticClass:"demo-layout bg-purple"},[i("u-image",{attrs:{width:"94rpx",height:"88rpx",src:t.image}})],1)],1),i("u-col",{staticStyle:{height:"74upx"},attrs:{span:"6"}},[i("v-uni-view",{staticClass:"demo-layout bg-purple-light"},[i("div",[t._v("中模云商城APP火热来袭！")]),i("div",{staticStyle:{"font-size":"12px",color:"#969799"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popShow.apply(void 0,arguments)}}},[t._v("点击急速下载")])])],1),i("u-col",{attrs:{span:"4"}},[i("v-uni-view",{staticClass:"demo-layout bg-purple-dark"},[i("u-button",{staticStyle:{margin:"0",width:"80%","font-size":"14px"},attrs:{type:"success",size:"medium",ripple:!0,"ripple-bg-color":"#909399",plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popShow.apply(void 0,arguments)}}},[t._v("点击下载")]),i("u-icon",{staticClass:"closeI",attrs:{name:"close",size:"14"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1)],1)],1)],1):t._e()},a=[]},"21a3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"foot",data:function(){return{image:"https://test.mouldc.com/images/logo3.png",show:!0}},methods:{onClick:function(){this.show=!1},popShow:function(){this.$emit("returnDate",!0)}},created:function(){}};e.default=n},"26d3":function(t,e,i){"use strict";i.r(e);var n=i("21a3"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"4e0d":function(t,e,i){"use strict";i.r(e);var n=i("8743"),r=i("f1ea");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o,u=i("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"3e17328c",null,!1,n["a"],o);e["default"]=c.exports},"5c38":function(t,e,i){var n=i("c70e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("aea51568",n,!0,{sourceMap:!1,shadowMode:!1})},"6e07":function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=n},"744a":function(t,e,i){"use strict";i.r(e);var n=i("c5ab"),r=i("f0e2");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("daa9");var o,u=i("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"b5a02ffc",null,!1,n["a"],o);e["default"]=c.exports},8743:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("a665").default,uIcon:i("0191").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-navbar",{attrs:{"back-text":"返回","back-icon-size":"25",title:"中模云商城",height:"50",enable:t.enablel}},[i("div",{attrs:{slot:"right"},slot:"right"},[i("u-icon",{staticStyle:{"margin-right":"30upx"},attrs:{name:"download",color:"#000",size:"50"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downTop.apply(void 0,arguments)}}})],1)])],1)},a=[]},"9f6b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* uni.scss */.u-swiper-wrap[data-v-b5a02ffc]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-b5a02ffc]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-b5a02ffc]{padding:0 %?24?%;position:absolute;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-b5a02ffc]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-b5a02ffc]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-b5a02ffc]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-b5a02ffc]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-b5a02ffc]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:initial;position:relative}.u-swiper-title[data-v-b5a02ffc]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-b5a02ffc]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},c5ab:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=n?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=n?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=n?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(n)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":n==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":n==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":n==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},a=[]},c70e:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* uni.scss */.closeI[data-v-c59a87b2]{float:right;position:relative;bottom:0;z-index:10}',""]),t.exports=e},d58e:function(t,e,i){"use strict";i.r(e);var n=i("1a57"),r=i("26d3");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("fcf3");var o,u=i("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"c59a87b2",null,!1,n["a"],o);e["default"]=c.exports},daa9:function(t,e,i){"use strict";var n=i("13ee"),r=i.n(n);r.a},f0e2:function(t,e,i){"use strict";i.r(e);var n=i("6e07"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},f1ea:function(t,e,i){"use strict";i.r(e);var n=i("fd7e"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},fcf3:function(t,e,i){"use strict";var n=i("5c38"),r=i.n(n);r.a},fd7e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"one",data:function(){return{enablel:!0}},created:function(){this.enablel=!0},methods:{downTop:function(){this.$emit("returnDate",!0)}},onHide:function(){this.enablel=!1}};e.default=n}}]);