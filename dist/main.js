!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(3),c=n.n(o),u=(n(7),n(0)),i=n.n(u),a=n(6),l=n.n(a);var s=function(){return i.a.createElement("button",{href:"#",onClick:function(e){e.preventDefault(),console.log("The link was clicked.")}},"Click here")},f=n(4),p=n.n(f);var d=function(){return i.a.createElement("button",{href:"#",onClick:function(e){e.preventDefault(),console.log("The link was clicked.")}},"About")},b=n(1);var m=function(){return i.a.createElement("button",{href:"#",onClick:function(e){e.preventDefault(),console.log("The link was clicked.")}},"Contact")},v=n(2);var h=[{component:function(e){var t=e.route;return i.a.createElement("div",null,i.a.createElement(b.Link,{to:"/about/"},"About")," ",i.a.createElement(b.Link,{to:"/contact/"},"Contact"),Object(v.renderRoutes)(t.routes))},routes:[{path:"/",exact:!0,component:s},{path:"/about",exact:!0,component:d},{path:"/contact",exact:!0,component:m}]}],x=c()();x.use(c.a.static("dist")),x.use(p.a.json()),x.use(p.a.urlencoded({extended:!0})),x.get("*",function(e,t){var n=l.a.renderToString(i.a.createElement(r.StaticRouter,{location:e.path,context:{}},i.a.createElement("div",null,Object(v.renderRoutes)(h)))),o="\n  <!doctype html>\n    <html>\n    <head>\n      <script>window.__INITIAL__DATA__ = ".concat(JSON.stringify({name:"Marvelous Wololo"}),'<\/script>\n    </head>\n    <body>\n    <div id="root">').concat(n,'</div>\n     <script src="http://localhost:3000/client.js"><\/script>\n  </body>\n  </html>');t.send(o)}),x.listen(3e3)}]);