!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t){$(document).ready((function(){var e=$(".cd-collection"),t=$(".search-artist"),r=$("#cd-template").html(),n=Handlebars.compile(r),o={url:"http://localhost:3000/php-ajax-dischi/json-script.php",method:"GET"};$.ajax(o).done((function(t){for(var r=0;r<t.length;r++){var o=t[r],a={poster:o.poster,author:o.author,year:o.year,title:o.title},i=n(a);e.append(i)}})).fail((function(e){console.log("Errore chiamata cd",e.status)})),function(e,t,r,n){e.keyup((function(){$(".cd").remove();var o=e.val().trim().toLowerCase();$.ajax(t).done((function(e){for(var t=0;t<e.length;t++){var a=e[t],i=a.author;if(""===o){var u=r(a);n.append(u)}else if(i.toLowerCase()===o){u=r(a);n.append(u)}}})).fail((function(e){console.log("Errore chiamata artisti",e.status)}))}))}(t,o,n,e)}))},function(e,t){}]);