(function(t){function e(e){for(var r,o,a=e[0],l=e[1],c=e[2],h=0,d=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],r=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/SimonGame/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("h1",{staticClass:"title",attrs:{title:t.title}},[t._v(t._s(t.title))]),i("div",{staticClass:"menu"},[i("div",{staticClass:"input__group"},[i("label",{attrs:{for:"easy"}},[t._v("Легкий "),i("input",{attrs:{type:"radio",name:"radio",id:"easy",disabled:!t.disabled,checked:""},on:{click:function(e){t.turnTime=1500}}})]),i("label",{attrs:{for:"medium"}},[t._v("Средний "),i("input",{attrs:{type:"radio",name:"radio",id:"medium",disabled:!t.disabled},on:{click:function(e){t.turnTime=1e3}}})]),i("label",{attrs:{for:"hard"}},[t._v("Сложный "),i("input",{attrs:{type:"radio",name:"radio",id:"hard",disabled:!t.disabled},on:{click:function(e){t.turnTime=400}}})])])]),i("div",{staticClass:"simon"},[i("button",{staticClass:"green",style:{backgroundColor:t.green},attrs:{value:"4"},on:{click:t.greenClick}}),i("button",{staticClass:"red",style:{backgroundColor:t.red},attrs:{value:"2"},on:{click:t.redClick}}),i("button",{staticClass:"yellow",style:{backgroundColor:t.yellow},attrs:{value:"3"},on:{click:t.yellowClick}}),i("button",{staticClass:"blue",style:{backgroundColor:t.blue},attrs:{value:"1"},on:{click:t.blueClick}})]),i("label",{staticClass:"strict",attrs:{for:"strict"}},[t._v("Strict "),i("input",{attrs:{type:"checkbox",name:"strict",id:"strict",disabled:!t.disabled},on:{click:function(e){t.strict=!t.strict}}})]),i("button",{staticClass:"start",attrs:{disabled:!t.disabled},on:{click:t.start}},[t._v("Start")])])},s=[],o={name:"App",components:{},data:function(){return{order:[],playerOrder:[],flash:"",turn:0,good:"",compTurn:"",intervalId:null,noise:!0,win:Boolean,green:"green",red:"red",yellow:"goldenrod",blue:"darkblue",title:"Simon Game",turnTime:1500,disabled:Boolean,strict:!1,started:!1}},methods:{selfRandom:function(){return Math.floor(4*Math.random())+1},start:function(){this.disabled=!this.disabled,this.win&&(this.started=!0,this.play())},play:function(){this.win=!1,this.order=[],this.playerOrder=[],this.flash=0,this.intervalId=0,this.turn=1,this.good=!0,this.compTurn=!0;for(var t=0;t<20;t++)this.order.push(this.selfRandom());this.intervalId=setInterval(this.gameTurn,this.turnTime),console.log(this.strict),console.log(this.order)},gameTurn:function(){var t=this;this.flash==this.turn&&(clearInterval(this.intervalId),this.compTurn=!1,this.clearColor()),this.compTurn&&(this.clearColor(),setTimeout((function(){1==t.order[t.flash]&&t.one(),2==t.order[t.flash]&&t.two(),3==t.order[t.flash]&&t.three(),4==t.order[t.flash]&&t.four(),t.flash++}),200))},one:function(){if(this.noise){var t=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");t.play()}this.noise=!0,this.green="lightgreen"},two:function(){if(this.noise){var t=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");t.play()}this.noise=!0,this.red="darkred"},three:function(){if(this.noise){var t=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");t.play()}this.noise=!0,this.yellow="yellow"},four:function(){if(this.noise){var t=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");t.play()}this.noise=!0,this.blue="lightskyblue"},clearColor:function(){this.green="green",this.red="red",this.yellow="goldenrod",this.blue="darkblue"},flashColor:function(){this.green="lightgreen",this.red="lightred",this.yellow="yellow",this.blue="lightskyblue"},greenClick:function(){var t=this;this.started?(this.playerOrder.push(1),this.check(),this.one()):(this.one(),setTimeout((function(){t.clearColor()}),400)),this.win||setTimeout((function(){t.clearColor()}),400)},redClick:function(){var t=this;this.started?(this.playerOrder.push(2),this.check(),this.two()):(this.two(),setTimeout((function(){t.clearColor()}),400)),this.win||setTimeout((function(){t.clearColor()}),400)},yellowClick:function(){var t=this;this.started?(this.playerOrder.push(3),this.check(),this.three()):(this.three(),setTimeout((function(){t.clearColor()}),400)),this.win||setTimeout((function(){t.clearColor()}),400)},blueClick:function(){var t=this;this.started?(this.playerOrder.push(4),this.check(),this.four()):(this.four(),setTimeout((function(){t.clearColor()}),400)),this.win||setTimeout((function(){t.clearColor()}),400)},check:function(){var t=this;this.playerOrder[this.playerOrder.length-1]!==this.order[this.playerOrder.length-1]&&(this.good=!1),20==this.playerOrder.length&&1==this.good&&this.winGame(),0==this.good&&(!0===this.started&&(this.flashColor(),this.title="WRONG!",this.strict&&(this.disabled=!0)),setTimeout((function(){t.title="Simon Game",t.compTurn=!0,t.flash=0,t.playerOrder=[],t.good=!0,t.strict?(t.win=!0,t.started=!1):t.intervalId=setInterval(t.gameTurn,t.turnTime)}),this.turnTime)),this.turn==this.playerOrder.length&&this.good&&!this.win&&(this.turn++,this.playerOrder=[],this.compTurn=!0,this.flash=0,this.intervalId=setInterval(this.gameTurn,this.turnTime))},winGame:function(){this.flashColor(),this.title="WIN!",this.win=!0}}},a=o,l=(i("034f"),i("2877")),c=Object(l["a"])(a,n,s,!1,null,null,null),u=c.exports;i("78a7");r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({render:function(t){return t(u)}}).$mount("#app")},"78a7":function(t,e,i){},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.74d43053.js.map