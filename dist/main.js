!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports=JSON.parse('{"mainIntro":"Zach\'s Borgers is a cutesie-style borger restaurant located in Hell, Michigan. The locals say it is the best (and only) borger place they\'ve ever been to.","mainWhatIsBorger":"Zach gets this question a lot, it\'s asked a lot by many customers, in fact. The fact of the matter is that it\'s not important what a borger is. They taste good, so why ask? Nobody has ever gotten sick from a borger, and nobody is allergic to them either. It\'s impossible to say any of those things has happened. So please, just calm down and eat your borger."}')},function(e,t,n){"use strict";n.r(t);const o=n(0);(()=>{document.getElementById("tabs");const e=document.getElementById("content");let t=[];const n=document.createElement("img");n.setAttribute("src","burger.jpeg"),n.setAttribute("alt","Juicy borgers!"),n.id="borger-pic",t.push(n);const r=document.createElement("h1");r.textContent="Zach's Borgers",t.push(r);const a=document.createElement("p");a.textContent=o.mainIntro,t.push(a);const s=document.createElement("h2");s.textContent="What is a Borger?",t.push(s);const i=document.createElement("p");i.textContent=o.mainWhatIsBorger,t.push(i),function(e,t){for(let n in t)e.appendChild(t[n])}(e,t)})()}]);