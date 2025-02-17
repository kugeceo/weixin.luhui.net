/* Zepto v1.1.3 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[T.call(t)]||"object"}function Z(t){return"function"==L(t)}function $(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function R(t){return D(t)&&!$(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function U(n,i,r){for(e in i)r&&(R(i[e])||A(i[e]))?(R(i[e])&&!R(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),U(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function B(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},T=j.toString,S={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),R(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(S.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){U(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return _(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=L,n.isFunction=Z,n.isWindow=$,n.isArray=A,n.isPlainObject=R,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return B(e,t)},parent:function(t){return B(N(this.pluck("parentNode")),t)},children:function(t){return B(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return B(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(e,n){return e=P[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=J(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?Y(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=J(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?$(s)?s["inner"+i]:_(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null,r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,a),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=N,S.deserializeValue=Y,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function T(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(T(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=T(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n),n.cache===!1&&(n.url=w(n.url,"_="+Date.now()));var s=n.dataType,a=/\?.+=\?/.test(n.url);if("jsonp"==s||a)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var T="async"in n?n.async:!0;d.open(n.type,n.url,T,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var touch = {},
    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
    longTapDelay = 750,
    gesture

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  function longTap() {
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function isPrimaryTouch(event){
    return (event.pointerType == 'touch' ||
      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
      && event.isPrimary
  }

  function isPointerEventType(e, type){
    return (e.type == 'pointer'+type ||
      e.type.toLowerCase() == 'mspointer'+type)
  }

  $(document).ready(function(){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

    if ('MSGesture' in window) {
      gesture = new MSGesture()
      gesture.target = document.body
    }

    $(document)
      .bind('MSGestureEnd', function(e){
        var swipeDirectionFromVelocity =
          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe')
          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
        }
      })
      .on('touchstart MSPointerDown pointerdown', function(e){
        if((_isPointerType = isPointerEventType(e, 'down')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        if (e.touches && e.touches.length === 1 && touch.x2) {
          // Clear out touch movement data if we have it sticking around
          // This can occur if touchcancel doesn't fire due to preventDefault, etc.
          touch.x2 = undefined
          touch.y2 = undefined
        }
        now = Date.now()
        delta = now - (touch.last || now)
        touch.el = $('tagName' in firstTouch.target ?
          firstTouch.target : firstTouch.target.parentNode)
        touchTimeout && clearTimeout(touchTimeout)
        touch.x1 = firstTouch.pageX
        touch.y1 = firstTouch.pageY
        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
        touch.last = now
        longTapTimeout = setTimeout(longTap, longTapDelay)
        // adds the current touch contact for IE gesture recognition
        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
      })
      .on('touchmove MSPointerMove pointermove', function(e){
        if((_isPointerType = isPointerEventType(e, 'move')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        cancelLongTap()
        touch.x2 = firstTouch.pageX
        touch.y2 = firstTouch.pageY

        deltaX += Math.abs(touch.x1 - touch.x2)
        deltaY += Math.abs(touch.y1 - touch.y2)
      })
      .on('touchend MSPointerUp pointerup', function(e){
        if((_isPointerType = isPointerEventType(e, 'up')) &&
          !isPrimaryTouch(e)) return
        cancelLongTap()

        // swipe
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

          swipeTimeout = setTimeout(function() {
            touch.el.trigger('swipe')
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
            touch = {}
          }, 0)

        // normal tap
        else if ('last' in touch)
          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < 30 && deltaY < 30) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function() {

              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap')
              event.cancelTouch = cancelAll
              touch.el.trigger(event)

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                if (touch.el) touch.el.trigger('doubleTap')
                touch = {}
              }

              // trigger single tap after 250ms of inactivity
              else {
                touchTimeout = setTimeout(function(){
                  touchTimeout = null
                  if (touch.el) touch.el.trigger('singleTap')
                  touch = {}
                }, 250)
              }
            }, 0)
          } else {
            touch = {}
          }
          deltaX = deltaY = 0

      })
      // when the browser window loses focus,
      // for example when a modal dialog is shown,
      // cancel all ongoing events
      .on('touchcancel MSPointerCancel pointercancel', cancelAll)

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll)
  })

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })
})(Zepto)
window.onload = function () {

	var content = {
		titleBg : [{img: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBNheRFFzPbvGgTcXRlic2keEJmMEoopc82RYKfCVg9fUYKGCJTD0Ecvw/0"}, {img: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBoXWsBxFLzdWqicvqAC3szuMibmYwgtk0O5kYhnBV0FKaU0zyGMNicG4tA/0"}],
		select : {q: "选择性别，开始测试喽~", male: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBGDY8hbXicpI1mDxxibJia3GPUX1tA7UGM6neuZkYw81oGn5blydu3brMQ/0", female: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBWk74G5RVggTsSqIyxdZk5zy12GbiaictolI64743icWib4pbuzGZMd82RA/0", next: 1},
		question : [{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBImXmcy5iaBn9yicoQ0SQAsjicEY0Lb6v309BohUpcftEZiaJ0iaw41bhMkA/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBCiaEJaX8kSNRbecaErgX09mAVV3X4cwUzFZQ5dGwIibE6TBnLSMzQPmQ/0", q: "1. 你会把自己比喻成哪种花香？", a1: {con: "浓郁的花香", next: 2}, a2: {con: "清淡的花香", next: 3}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBwY6jQjzbgvEDTv0hANoJG2rO6icPoRgLSJ0CiaAm1kp9fOvYTCxXqvAw/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBr61uQxz3C4HCfcz0dZPcBxEjXMHVTtiajaib3n4ToZ0jsf9mHmK2N4zw/0", q: "2. 你会选择哪种香味的润唇膏？", a1: {con: "水果味", next: 4}, a2: {con: "薄荷味", next: 5}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEB1rZU81L8rWic8YgBic7a8q7CTyCjeFw7UWxzUZy9dX3WV5FCZCGCydkA/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBn5lcJOsJWyUVbKnGWwrnaiaH1bVKLWLHVfcFWPcjpLuld2PpXiaW1JXQ/0", q: "3. 你会把自己比喻为哪种花束？", a1: {con: "红色系的花束(如红色/粉红色/橙色)", next: 2}, a2: {con: "非红色系的花束(如白色/蓝色/紫色)", next: 5}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBSCJdAh5ySGdVxYUw2DulDJJBHnjboSBjRd4gSmMvVv8G8sIW3Y9ibEQ/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBiaicekyPFBWYVc3NXo2I3SfKAkkHQIeDQNCayd9ZgHVg8Nb6BOwicbSYg/0", q: "4. 你跟意中人首次约会用什么香水？", a1: {con: "带有甜味的花香", next: 6}, a2: {con: "清爽的水果香味", next: 7}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBW1Jd4YMDmwpEWqrwfcRwkwqZNSx2ibAa4nBh8aG1Qe2tz7FDsehVCKg/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBRJgN8ksxBysfwT0icGcEB725A1QVo3g211ygah5llRko6QBqiabngAew/0", q: "5. 你较喜欢哪种味道？", a1: {con: "盛夏干燥的草味", next: 4}, a2: {con: "雨后湿淋淋的草味", next: 7}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBicQib9rOWhydYVHddvtSLrP4qibBVltOM4Kz6I68zFczKHUnxwVWr2gzA/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBEPJSyndPeuTib8a2ovlWGrPt6EnnAPoXbziakxkaTRgWkbue0dp9nn8g/0", q: "6. 玫瑰和百合，你较喜欢哪种香味？", a1: {con: "玫瑰", next: 8}, a2: {con: "百合", next: 9}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBRpLyWKtSCq25icELnoM7CTTJswY5xQbSzcuFIejqUxicYy3mQjZJhK6g/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBT3K3YAdnicuPhsYlBVfeuyQRqxpxHsB3adLYTf64pkrrId1u87dt5Sg/0", q: "7. 你刚发现一瓶新款洗头水，你十分喜欢它的味道，那瓶子的形状是怎样？", a1: {con: "圆形 ", next: 6}, a2: {con: "长身形 ", next: 10}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBaGISlIJiauw8iakSgTf7Oj3iaIJPW6Cq4c8Zj1MqqFxrMIEibUKSgEZzSQ/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBL0mDApGY3slWdASSaJYfgGHHwDyyLLKlgTnJc2b0mKTa2B9jJJ8G4g/0", q: "8. 当你情绪低落时，哪种味道最能抚慰你的心灵？", a1: {con: "花香", next: 11}, a2: {con: "森林的味道", next: 12}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEB9vGticZIlWQlticiaEQKMANQQesBEh2j9g3zfxlQ4eRA0qlEr3jIibDl9g/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBY0vbkLDZ9cibdee8wMANCTCSrU7e7AtGNGtpDENwPpx04U1jNlskzSw/0", q: "9. 你在收视超高的剧集中看见一个香包，它是什么颜色？", a1: {con: "紫色", next: 8}, a2: {con: "红色", next: 12}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBZBqfyHVc9kjeb2Nf4gLJ2ibk8uFo92eSTFTj7gkib8RqlUM3nqcwH9eg/0", img2: "", q: "10. 市面刚推出了一种全新的香草味雪糕，你的看法是什么？", a1: {con: "相当引人注意", next: 9}, a2: {con: "不太引人注意", next: 13}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEB9RSyVibQb8DgYTG0Sicb3yCzMVU3RYgyTZB5JgGzbNwfYADcpIEyo1ww/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBoibsFOM6rt0bdiaPCMibYVupYRy5rm7ibbHpaicWwUO6vUXpvnqibL7bOIuw/0", q: "11. 下列哪种味道会勾起你怀念的感觉？", a1: {con: "面包香味", next: 14}, a2: {con: "大自然的味道", next: 15}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBOjJHk4fzXBgzcbMGLcHCiaFfDGRGggBmTf2I6ibPgKf05BDZ3KtmCiclA/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBlAABBnmXibs3c0BRhzo3O0fy6iagG5aW7C3rG9N3dZyzWm00MsbFXhOA/0", q: "12. 如果月亮的光辉会发出味道，你嗅到後会联想起下列哪组形容词？", a1: {con: "刺激/灿烂夺目/香味四溢", next: 11}, a2: {con: "沉郁/弧独/踏实/安静", next: 15}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBAIcclWqBZbLYgbJR3icF6OribltPFIgB88YavPbUP4K7KWMibziaBVnscA/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBygosl3pefKysxbiapkN8RfGIoydYo2EwibfB21v2dSC43bcNqBl4zJzg/0", q: "13. 你较喜欢哪种香味？", a1: {con: "香料", next: 12}, a2: {con: "茶香", next: 16}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBXpjxnjuW9cziavfl5HzKAj5M6zWJuk7n8qg1q0ajONMDic9ExIuwibr6w/0", img2: "", q: "14. 你对体味的看法是？", a1: {con: "非常讨厌", next: 17}, a2: {con: "如果是自己喜欢的味道就没有关系", next: 18}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEB8UNFxDIia2yy5dMkkQywJb7uG4ibdWDpqG8W3QJc14OaD1SIhZmqgUGg/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBCGtKA11iavjwzzIfVmOfFAy2eFnMRRiauBq46UqraGeD6Lc5sImeztHg/0", q: "15. 你觉得什么香味较有助提神？", a1: {con: "柑橘香", next: 14}, a2: {con: "薄荷香", next: 18}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBwIeTibBpibWY3CCmLdDGib1sUz5gtOSaHFaj2IsnicgmNjW10yroAQb7uA/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBpSOkPgbzyAbfxdD8ENck9nyUXXFTfTqBicR4uo0juoJClnPvAibEicVbA/0", q: "16. 你喜欢异性身上有哪种香味？", a1: {con: "香水味", next: "15"}, a2: {con: "自然香皂味", next: 19}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBDgzCUVbUeic8iaDic2AONv4fkW0TwMYOROdmQ37S2lDYxiaOzf6KlGD9yg/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBBgZ8vu0op58UqGg0dtHC3knrjicpeVZKvmabyNazaLvbbCbZnyuxMug/0", q: "17. 想起游乐场，你会想起哪种味道？", a1: {con: "牛奶及葡萄", next: "20"}, a2: {con: "甜甜的糖果", next: "21"}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBnCEd751yfegJp4FAicgtyjojGTYHRb5rSicWgMJCZDmM3zISFj20icNfg/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBJOkntTRfJHcSV5VzsibVRPb4zRrrlTrHwPL5nSPR1e8tPdJAVtiaibkow/0", q: "18. 如果要在房间燃点香薰，你喜欢哪一种形状的香薰？", a1: {con: "三角锥形", next: "17"}, a2: {con: "棒状", next: "21"}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBV7m0a33ufohLaWp6pibSIPufmu6fnKs8iaTLjg4Hj7aAicC6RicNqKgNWA/0", img2: "", q: "19. 你对於香水的看法是？", a1: {con: "非常喜欢 ", next: "18"}, a2: {con: "不算十分喜欢", next: "22"}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBj3NkTemgucCRALcpfHibApICkUo7cLR1Xo0X3sGlPV0QmNicblPh0Gew/0", img2: "", q: "20. 对於婴儿使用的肥皂系列香味有什么看法？", a1: {con: "喜欢", next: "A"}, a2: {con: "不是特别喜欢", next: "B"}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBXFf9vSceXVkefRWSMLyCbMLlFnGBSSynbibGkGpfyqMRq2ibvey12VpA/0", img2: "", q: "21. 你知道自己的味道吗？", a1: {con: "不知道 ", next: "20"}, a2: {con: "知道", next: "C"}},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBsdWcSE70ojE8yVDuFibiaibOoCKymLPVPD3yQviaM6aELsalutic68hPLPA/0", img2: "", q: "22. 喜欢皮革的味道吗？", a1: {con: "喜欢 ", next: "21"}, a2: {con: "讨厌", next: "D"}},],
		answer : [{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBExVeG8PMsUs6icAG8ibcJyoFxm3Acwfd80YAsny9nX3iaf7V8y9LJqTbw/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBlAzSKibbjcXQI9gdNlLPJnU0ibp0NwKHbfS9mcibWo3WXFibxILekKqEZg/0", title:"我属于自由愉悦的水果香型", con:"你充满自由愉悦的气息，总是沉溺在游乐场的氛围当中，像个天真无邪的孩子。有你在的地方，整个气氛都会兴奋起来，所以你是聚会中不可或缺的人物。你个性开朗，受到大部份人的喜爱，但你知道很少有人能够成为你最最亲密的朋友，因为你给人的印象总是在搞怪开心，有些人会觉得你有时爱给别人开玩笑，有时会过于依赖。事实上，你的性格中隐藏着成熟与稳重，正是因为透彻了解你的人不多，所以通常只有看到你成熟一面的人才会成为你真正的知己朋友。"},
			{img1:"http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBvWHII2ohqociaj4X5x5fskdQwERia1RPzybScRMLppuFGcXaLgzBPQMg/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEB14gpdRcQrXQ6Yl09DQdTUP1KgU2I5EFWZkcRBpicQNTf2ByXnaibK28w/0", title: "我属于神秘独立的东方花香型", con: "你拥有强烈的自我意识和自己的世界，你不会被他人玩弄于股掌之间，会利用自己的力量积极地达成愿望。你不会过于纠缠人际关系，再加上有时喜欢单独行动，围绕在你周遭的人会觉得你是一个“带有神秘色彩的人物”。 “神秘感”有时是相当有魅力的意思，但是有时又会让人觉得你有点清高孤傲，这会增加你与他人的距离感。事实上，真正的你其实是相当温柔的，但是除非是与你相当亲近的人，否则是无法注意到你的这一面的，而你也会选择性的向他人展现自己最温柔的一面。"},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBoHNmQolrh5307bU3VlZRfbRpm6WIm0XLcx7cmSn6Qq0ohE9ibcLsT4Q/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBY0PR22MwH7e7xI7ickMZ6yBgIopwD8L6yMWZfa22Ztb9oBDmmc2xEGg/0", title: "我属于坚强爽快的青草香型", con: "你拥有坚强的意志，不过于依赖他人，给人独立的印象。你拥有旺盛的好奇心与丰富的感受性，过着知性的生活。初次见你的人会觉得你稍有距离感，但跟你交谈后，便会知道你心地很好，很容易相处，等到交情加深之后，就更知道你其实拥有很爽快的个性。你所拥有的中性化魅力，让你不论在男性团体或女性团体都大受欢迎，不过你不喜欢让人看到你脆弱的一面。你外表上看来也许稍显冷静，但实际上内心却是热情如火，你对自己真正热爱的人或事充满了热情。无论是好朋友还是恋人，只有明白了你内在个性的人，才能够跟你天长地久地交往下去。"},
			{img1: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBZjhc6ickCcUJIcMRzia4jHN1WJAiaXVna329YJ9cW13YYS9gSufs2GsxQ/0", img2: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBvdH1mZcevsYCL1Dsm4VO0CIfkg9C2gG0ia3cRfMCPgYhLzLicfDGZFyQ/0", title: "我属于乐观优雅的太阳花香型", con: "你总是给人乐观、积极和勇于面对困难的感觉，而且温柔优雅，很懂得为他人设想，给人非常擅长维系人际关系的印象。这样的你让人感到善良又坚强，尤其是你那关怀体贴的包容力，更让人觉得你相当有魅力，很值得信赖。你总是给人一种“拜托做事绝不会拒绝”的印象，所以特别容易被那些依赖心强的围住，他们总是会向你寻求帮助。 甚至有时因为你太善良随和，可能被那些只顾自己利益的人所利用。事实上你也有脆弱并需要他人帮助与支持的一面，在这种时候，只有真正懂你的人才会感受到并耐心的陪伴在你的身边。"}],
		button : [{con: "把香味分享到朋友圈"}, {con: "再测一次"}, {con: "更多168源码的测试"}],
		shareGuide : {img: "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBEpzLibySuotVJX3rJCZ3Q6LvCuAVo6OeeJy2EQZmDkiayyhmjiaWIG5qQ/0"},
		introduction : "每个人的性格都有独特的味道，有人如水果香般自由愉悦，有人如东方花香般神秘独立，有的人如青草香般坚强爽快，有的人如太阳花香般乐观优雅，小伙伴快来测测在别人眼中的你是哪种味道吧~"
	};

	// 访问量
	var view = document.createElement("script");
	view.src = "";
	document.getElementsByTagName("body")[0].appendChild(view);

	var sex , type;
	function init() {

		// init title background
		refTitleBg(0);
		// empty mainContent
		var m = document.getElementById("mainContent");
		m && m.parentNode.removeChild(m);
		//if (m) m.remove();
		var mainContent = document.createElement("div");
		mainContent.id = "mainContent";
		document.getElementsByTagName("body")[0].appendChild(mainContent);

		// init desc 
		var p = document.createElement("div");
		p.id = "initIntro";
		p.innerHTML = content.introduction;
		mainContent.appendChild(p);

		// init select sex page
		var initQ = document.createElement("div");
		initQ.className = "content-question";
		initQ.innerHTML = content.select.q;
		mainContent.appendChild(initQ);

		var initSex = document.createElement("div");
		initSex.id = "initSex";
		// male 
		var male = document.createElement("img");
		male.className = "male";
		male.src = content.select.male;
		initSex.appendChild(male);
		//male.addEventListener("touchend", function(){
		$(male).tap(function(){	
			sex = 0;
			refreshContent(1);
		});
		//female
		var female = document.createElement("img");
		female.className = "female";
		female.src = content.select.female;
		initSex.appendChild(female);
		//female.addEventListener("touchend", function(){
		$(female).tap(function(){
			sex = 1;
			refreshContent(1);
		});

		mainContent.appendChild(initSex);
	}
	function refTitleBg(idx) {

		var c = content.titleBg[idx];
		// change background
		var title = document.getElementById("title-img");
		title.src = c.img;
	}
	function refreshContent(idx) {
		//console.log("test");
		var c = content.question[idx-1];
		var q = refreshQuestion(idx, c);

		var anBtn1, anBtn2, anImg1, anImg2;
		var handler1 = function(){
		
			switch (c.a1.next) {
				case "A" : 
					refreshAnswer(0);
					break;
				case "B" :
					refreshAnswer(1);
					break;
				case "C" :
					refreshAnswer(2);
					break;
				case "D" :
					refreshAnswer(3);
					break;
				default :
					refreshContent(c.a1.next);
			}
			$(anBtn1).off("tap", handler1);
			$(anBtn2).off("tap", handler2);
			$(anImg1).off("tap", handler1);
			$(anImg2).off("tap", handler2);
		};
		var handler2 = function(){
			switch (c.a2.next) {
				case "A" : 
					refreshAnswer(0);
					break;
				case "B" :
					refreshAnswer(1);
					break;
				case "C" :
					refreshAnswer(2);
					break;
				case "D" :
					refreshAnswer(3);
					break;
				default :
					refreshContent(c.a2.next);
			}
			$(anBtn1).off("tap", handler1);
			$(anBtn2).off("tap", handler2);
			$(anImg1).off("tap", handler1);
			$(anImg2).off("tap", handler2);
		};

		if (idx === 1) {
			var t = document.getElementById("initSex");
			t && t.parentNode.removeChild(t);
			var i = document.getElementById("initIntro");
			i && i.parentNode.removeChild(i);

			// select answer
			var selAn = document.createElement("div");
			selAn.id = "select-answer";

			// answer one
			anImg1 = document.createElement("img");
			anImg1.id = "anImg1";
			anImg1.src = c.img1;
			$(anImg1).tap(handler1);
			selAn.appendChild(anImg1);

			anBtn1 = document.createElement("div");
			anBtn1.className = "anBtn";
			anBtn1.id = "anBtn1";
			anBtn1.innerHTML = c.a1.con;
			$(anBtn1).tap(handler1);
			selAn.appendChild(anBtn1);

			// answer two
			anImg2 = document.createElement("img");
			anImg2.id = "anImg2";
			anImg2.src = c.img2;
			$(anImg2).tap(handler2);
			selAn.appendChild(anImg2);

			anBtn2 = document.createElement("div");
			anBtn2.className = "anBtn";
			anBtn2.id = "anBtn2";
			anBtn2.innerHTML = c.a2.con;
			$(anBtn2).tap(handler2);
			selAn.appendChild(anBtn2);

			document.getElementById("mainContent").appendChild(selAn);
		} else {

			anImg1 = document.getElementById("anImg1");
			anImg1.src = c.img1;
			if (c.img2 !== "") {
				$(anImg1).tap(handler1);
			}
			anBtn1 = document.getElementById("anBtn1");
		    $(anBtn1).tap(handler1);
			anBtn1.innerHTML = c.a1.con;

			var anImg2 = document.getElementById("anImg2");
			anImg2.src = c.img2;
			$(anImg2).tap(handler2);
			if (c.img2 === "") {
				$(anImg2).hide();
				$($(".anBtn")[1]).css("margin-top","20px")
			} else {
				$(anImg2).show();
				$($(".anBtn")[1]).css("margin-top","5px")
			}
			anBtn2 = document.getElementById("anBtn2");
			$(anBtn2).tap(handler2);
			anBtn2.innerHTML = c.a2.con;
		}

	}
	function refreshQuestion(idx, c) {
		// add className for content-question
		// because need different style
		var el = document.getElementsByClassName("content-question");
		el[0].className = "content-question titQuention";
		if (el.length !== 1) {
			//return false;
		} else {
			el[0].innerHTML = c.q;
			//return true;
		}
	}	
	function refreshAnswer(idx) {

		// 使用量
		if (isNaN(sex)) sex = 0;
		var use = document.createElement("script");
		use.src = "";
		document.getElementsByTagName("body")[0].appendChild(use);

		refTitleBg(1);
		var mainContent = document.getElementById("mainContent");
		var c = content.answer[idx];
		// remove old dom
		var t = document.getElementById("select-answer");
		t && t.parentNode.removeChild(t);
		var q = document.getElementsByClassName("content-question")[0];
		q && q.parentNode.removeChild(q);

		// add answer type 
		var t = document.createElement("img");
		t.className = "answerType";
		t.src = c.img1;
		mainContent.appendChild(t);

		// add answer img
		var i = document.createElement("img");
		i.className = "answerImg";
		i.src = c.img2;
		mainContent.appendChild(i);

		// add content
		var p = document.createElement("p");
		p.className = "introduce";
		p.innerHTML = c.con;
		mainContent.appendChild(p);

		// add three btn
		// 分享到朋友圈
		var share = document.createElement("div");
		share.className = "shareToFre resBtn";
		share.innerHTML = content.button[0].con;
		mainContent.appendChild(share);

		shareToFre(c.title);

		share.addEventListener("tap", showGuide);

		// 再来一次
		var again = document.createElement("div");
		again.className = "againPlay resBtn";
		again.innerHTML = content.button[1].con;
		mainContent.appendChild(again);
		//anBtn2.addEventListener("touchend", handler);
		again.addEventListener("tap", function(){
			init();
		});

		// 关注PICOOC
		var follow = document.createElement("div");
		follow.className = "followPICO resBtn";
		var a = document.createElement("a");
		a.className = "followHref";
		a.href = "http://weixin.luhui.net";
		a.innerHTML = content.button[2].con;
		follow.appendChild(a);
		mainContent.appendChild(follow);

	}

	function showGuide () {

		var main = document.getElementById("mainContent")
		var layer = document.createElement("div");
		layer.id = "guideLayer";
		main.appendChild(layer);
		layer.addEventListener("tap", function () {
			this.parentNode.removeChild(this);
			var s = document.getElementById("shareGuide");
			s && s.parentNode.removeChild(s);
		});

		var g = document.createElement("img");
		g.id = "shareGuide";
		g.src = content.shareGuide.img;
		main.appendChild(g);
	}
	function shareToFre(desc) {

		if (!desc) {
			desc = "小伙伴快来测测别人眼中你是哪种味道吧！";
		} else {
			desc = desc + "，小伙伴快来测你是哪种味道吧！";
		}
		// 朋友圈
		var data = {
            "imgUrl" : "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBJIHIwTJhibYRdMbThxUsjw0Bl3QOXRkzIcPicOnRQbcKGBSvYUdcA4mQ/0",
            "link": "http://wx.vbaitong.com/game/weidao/",
            "desc": desc,
            "title": "每个人的性格都有独特的味道，有人如水果香般自由愉悦，有人如东方花香般神秘独立，有的人如青草香般坚强爽快，有的人如太阳花香般乐观优雅，小伙伴快来测测在别人眼中的你是哪种味道吧~"
		};

		// share to frends
		var data = data;
		var callbacks = {};
		callbacks.ok = function() {
			if (isNaN(sex)) sex = 0;
			var share = document.createElement("script");
			share.src = "";
			document.getElementsByTagName("body")[0].appendChild(share);
		    //this.removeEventListener("touchend",shareToFre);
		};
		
		// 分享给朋友
		var data2 = {
            "imgUrl" : "http://mmbiz.qpic.cn/mmbiz/2ryTJ7znBT4DeVahSsiaPRdibzxnSWhWEBJIHIwTJhibYRdMbThxUsjw0Bl3QOXRkzIcPicOnRQbcKGBSvYUdcA4mQ/0",
            "link": "http://wx.vbaitong.com/game/weidao/",   
            "desc": "每个人的性格都有独特的味道，有人如水果香般自由愉悦，有人如东方花香般神秘独立，有的人如青草香般坚强爽快，有的人如太阳花香般乐观优雅，小伙伴快来测测在别人眼中的你是哪种味道吧~",
            "title": desc
		};

		weixinShareTimeline(data, callbacks);

		weixinSendAppMessage(data2, callbacks);		
	}
	document.addEventListener('WeixinJSBridgeReady', function(){
		shareToFre();
	}, false);


	// 分享到朋友圈
	function weixinShareTimeline(data, callbacks) {
        callbacks = callbacks || {};
        var shareTimeline = function (theData) {
            WeixinJSBridge.invoke('shareTimeline', {
                "appid":theData.appId ? theData.appId : '',
                "img_url":theData.imgUrl,
                "link":theData.link,
                "desc":theData.title,
                "title":theData.desc, // 注意这里要分享出去的内容是desc
                "img_width":"120",
                "img_height":"120"
            }, function (resp) {
                switch (resp.err_msg) {
                    // share_timeline:cancel 用户取消
                    case 'share_timeline:cancel':
                        callbacks.cancel && callbacks.cancel(resp);
                        break;
                    // share_timeline:fail　发送失败
                    case 'share_timeline:fail':
                        callbacks.fail && callbacks.fail(resp);
                        break;
                    // share_timeline:confirm 发送成功
                    case 'share_timeline:confirm':
                        callbacks.confirm && callbacks.confirm(resp);
                        break;
                    // 发送成功
                    case 'share_timeline:ok':
                        callbacks.ok && callbacks.ok(resp);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp);
            });
        };
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            if (callbacks.async && callbacks.ready) {
                if(!callbacks.__dataLoadedFuncInited) {
                    var loadedCb = callbacks.dataLoaded || new Function();
                    callbacks.dataLoaded = function (newData) {
                        loadedCb(newData);
                        shareTimeline(newData);
                    };
                    callbacks.__dataLoadedFuncInited = true;
                }
                // 然后就绪
                callbacks.ready && callbacks.ready(argv);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(argv);
                shareTimeline(data);
            }
        });
    }
	
    // 分享给朋友
    function weixinSendAppMessage(data, callbacks) {
        callbacks = callbacks || {};
        var sendAppMessage = function (theData) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid":theData.appId ? theData.appId : '',
                "img_url":theData.imgUrl,
                "link":theData.link,
                "desc":theData.desc,
                "title":theData.title,
                "img_width":"120",
                "img_height":"120"
            }, function (resp) {
                switch (resp.err_msg) {
                    // send_app_msg:cancel 用户取消
                    case 'send_app_msg:cancel':
                        callbacks.cancel && callbacks.cancel(resp);
                        break;
                    // send_app_msg:fail　发送失败
                    case 'send_app_msg:fail':
                        callbacks.fail && callbacks.fail(resp);
                        break;
                    // send_app_msg:confirm 发送成功
                    case 'send_app_msg:confirm':
                        callbacks.confirm && callbacks.confirm(resp);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp);
            });
        };
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            if (callbacks.async && callbacks.ready) {
                if(!callbacks.__dataLoadedFuncInited) {
                    var loadedCb = callbacks.dataLoaded || new Function();
                    callbacks.dataLoaded = function (newData) {
                        loadedCb(newData);
                        sendAppMessage(newData);
                    };
                    callbacks.__dataLoadedFuncInited = true;
                }
                // 然后就绪
                callbacks.ready && callbacks.ready(argv);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(argv);
                sendAppMessage(data);
            }
        });
    }

	init();
};