!function(e){function n(_){if(t[_])return t[_].exports;var o=t[_]={i:_,l:!1,exports:{}};return e[_].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,_){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(n.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(_,o,function(n){return e[n]}.bind(null,o));return _},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/server-status/",n(n.s="Pq/i")}({EHQy:function(e,n){"use strict";n.a={home:"home__UoRM-",title:"title__L5hTC",version:"version__4gqHp"}},"Hw+i":function(e,n,t){"use strict";(function(e){function _({value:n,onChange:t}){const[_,i]=Object(o.b)(n);Object(o.a)((()=>{i(n)}),[n]);return e("input",{type:"text",className:r.a.input,value:_,onBlur:()=>{i(n)},onInput:e=>i(e.target.value),onKeyDown:e=>{switch(e.key){case"Enter":return t(_),void document.activeElement.blur();case"Escape":case"Tab":document.activeElement.blur()}}})}t.d(n,"a",(function(){return _}));var o=t("QRet"),r=t("wX/T")}).call(this,t("hosL").h)},KdXF:function(e,n,t){"use strict";(function(e){function _(){const[n,t]=Object(o.b)("192.168.1.2");return console.log("address",n),e("div",{className:u.a.home},e("section",null,e("span",{className:u.a.title},"Server Status "),e("div",null,e(i.a,{value:n,onChange:e=>t(e)}))),e("section",null,e("div",null,e("label",{for:"pet-select"},"Choose a pet:"),e("select",{name:"pets",id:"pet-select"},e("option",{value:""},"Please choose an option"),e("option",{value:"dog"},"Dog"),e("option",{value:"cat"},"Cat"),e("option",{value:"hamster"},"Hamster"),e("option",{value:"parrot"},"Parrot"),e("option",{value:"spider"},"Spider"),e("option",{value:"goldfish"},"Goldfish")))),e("section",{className:u.a.version},e("span",null,`v${r.a}`)))}t.d(n,"a",(function(){return _}));var o=t("QRet"),r=t("QP3f"),i=t("Hw+i"),u=t("EHQy")}).call(this,t("hosL").h)},MV5A:function(){},"Pq/i":function(e,n,t){"use strict";t.r(n);var _=t("hosL");const{h:o,render:r,hydrate:i}=_,u=e=>e&&e.default?e.default:e,l=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(t.p)+"sw-esm.js"),"function"==typeof u(t("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,n=()=>{let n=u(t("QfWi")),_={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(_=JSON.parse(decodeURI(c.innerHTML)).preRenderData||_);const s={preRenderData:_},f=_.url?l(_.url):"";(i&&f===l(location.pathname)?i:r)(o(n,{CLI_DATA:s}),document.body,e)};0,n()}},QP3f:function(e){e.exports=JSON.parse('{"a":"0.1.3"}')},QRet:function(e,n,t){"use strict";function _(e,n){v.options.__h&&v.options.__h(p,e,y||n),y=0;var t=p.__H||(p.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:g}),t.__[e]}function o(e){return y=1,function(e,n,t){var o=_(a++,2);if(o.t=e,!o.__c&&(o.__=[t?t(n):f(void 0,n),function(e){var n=o.__N?o.__N[0]:o.__[0],t=o.t(n,e);n!==t&&(o.__N=[t,o.__[1]],o.__c.setState({}))}],o.__c=p,!p.u)){p.u=!0;var r=p.shouldComponentUpdate;p.shouldComponentUpdate=function(e,n,t){if(!o.__c.__H)return!0;var _=o.__c.__H.__.filter((function(e){return e.__c}));if(_.every((function(e){return!e.__N})))return!r||r.call(this,e,n,t);var i=!1;return _.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(i=!0)}})),!(!i&&o.__c.props===e)&&(!r||r.call(this,e,n,t))}}return o.__N||o.__}(f,e)}function r(e,n){var t=_(a++,3);!v.options.__s&&s(t.__H,n)&&(t.__=e,t.i=n,p.__H.__h.push(t))}function i(){for(var e;e=m.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(l),e.__H.__h.forEach(c),e.__H.__h=[]}catch(n){e.__H.__h=[],v.options.__e(n,e.__v)}}function u(e){var n,t=function(){clearTimeout(_),H&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);H&&(n=requestAnimationFrame(t))}function l(e){var n=p,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),p=n}function c(e){var n=p;e.__c=e.__(),p=n}function s(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function f(e,n){return"function"==typeof n?n(e):n}t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));var a,p,d,h,v=t("hosL"),y=0,m=[],g=[],b=v.options.__b,k=v.options.__r,C=v.options.diffed,x=v.options.__c,E=v.options.unmount;v.options.__b=function(e){p=null,b&&b(e)},v.options.__r=function(e){k&&k(e),a=0;var n=(p=e.__c).__H;n&&(d===p?(n.__h=[],p.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=g,e.__N=e.i=void 0}))):(n.__h.forEach(l),n.__h.forEach(c),n.__h=[])),d=p},v.options.diffed=function(e){C&&C(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==m.push(n)&&h===v.options.requestAnimationFrame||((h=v.options.requestAnimationFrame)||u)(i)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==g&&(e.__=e.__V),e.i=void 0,e.__V=g}))),d=p=null},v.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(l),e.__h=e.__h.filter((function(e){return!e.__||c(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],v.options.__e(t,e.__v)}})),x&&x(e,n)},v.options.unmount=function(e){E&&E(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{l(e)}catch(e){n=e}})),t.__H=void 0,n&&v.options.__e(n,t.__v))};var H="function"==typeof requestAnimationFrame},QfWi:function(e,n,t){"use strict";t.r(n),function(e){function _(){return e(o.a,null)}t.d(n,"default",(function(){return _}));var o=t("KdXF");t("xGyD"),t("MV5A")}.call(this,t("hosL").h)},hosL:function(e,n,t){"use strict";function _(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function r(e,n,t){var _,o,r,u={};for(r in n)"key"==r?_=n[r]:"ref"==r?o=n[r]:u[r]=n[r];if(arguments.length>2&&(u.children=arguments.length>3?L.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return i(e,u,_,o,null)}function i(e,n,t,_,o){var r={type:e,props:n,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++M:o};return null==o&&null!=U.vnode&&U.vnode(r),r}function u(){return{current:null}}function l(e){return e.children}function c(e,n){this.props=e,this.context=n}function s(e,n){if(null==n)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?s(e):null}function f(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return f(e)}}function a(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!p.__r++||F!==U.debounceRendering)&&((F=U.debounceRendering)||R)(p)}function p(){var e,n,t,o,r,i,u,l;for(W.sort((function(e,n){return e.__v.__b-n.__v.__b}));e=W.shift();)e.__d&&(n=W.length,o=void 0,r=void 0,u=(i=(t=e).__v).__e,(l=t.__P)&&(o=[],(r=_({},i)).__v=i.__v+1,x(l,i,r,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,o,null==u?s(i):u,i.__h),E(o,i),i.__e!=u&&f(i)),W.length>n&&W.sort((function(e,n){return e.__v.__b-n.__v.__b})));p.__r=0}function d(e,n,t,_,o,r,u,c,f,a){var p,d,v,g,b,k,C,E=_&&_.__k||Q,H=E.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(g=t.__k[p]=null==(g=n[p])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?i(null,g,null,null,g):Array.isArray(g)?i(l,{children:g},null,null,null):g.__b>0?i(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(v=E[p])||v&&g.key==v.key&&g.type===v.type)E[p]=void 0;else for(d=0;d<H;d++){if((v=E[d])&&g.key==v.key&&g.type===v.type){E[d]=void 0;break}v=null}x(e,g,v=v||I,o,r,u,c,f,a),b=g.__e,(d=g.ref)&&v.ref!=d&&(C||(C=[]),v.ref&&C.push(v.ref,null,g),C.push(d,g.__c||b,g)),null!=b?(null==k&&(k=b),"function"==typeof g.type&&g.__k===v.__k?g.__d=f=h(g,f,e):f=y(e,g,v,E,b,f),"function"==typeof t.type&&(t.__d=f)):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}for(t.__e=k,p=H;p--;)null!=E[p]&&("function"==typeof t.type&&null!=E[p].__e&&E[p].__e==t.__d&&(t.__d=m(_).nextSibling),S(E[p],E[p]));if(C)for(p=0;p<C.length;p++)P(C[p],C[++p],C[++p])}function h(e,n,t){for(var _,o=e.__k,r=0;o&&r<o.length;r++)(_=o[r])&&(_.__=e,n="function"==typeof _.type?h(_,n,t):y(t,_,_,o,_.__e,n));return n}function v(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,n)})):n.push(e)),n}function y(e,n,t,_,o,r){var i,u,l;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(null==t||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),i=null;else{for(u=r,l=0;(u=u.nextSibling)&&l<_.length;l+=1)if(u==o)break e;e.insertBefore(o,r),i=r}return void 0!==i?i:o.nextSibling}function m(e){var n,t,_;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(_=m(t)))return _;return null}function g(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||V.test(n)?t:t+"px"}function b(e,n,t,_,o){var r;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||g(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||g(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?_||e.addEventListener(n,r?C:k,r):e.removeEventListener(n,r?C:k,r);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&-1==n.indexOf("-")?e.removeAttribute(n):e.setAttribute(n,t))}}function k(e){return this.l[e.type+!1](U.event?U.event(e):e)}function C(e){return this.l[e.type+!0](U.event?U.event(e):e)}function x(e,n,t,o,r,i,u,s,f){var a,p,h,v,y,m,g,b,k,C,x,E,P,S,T,w=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(f=t.__h,s=n.__e=t.__e,n.__h=null,i=[s]),(a=U.__b)&&a(n);try{e:if("function"==typeof w){if(b=n.props,k=(a=w.contextType)&&o[a.__c],C=a?k?k.props.value:a.__:o,t.__c?g=(p=n.__c=t.__c).__=p.__E:("prototype"in w&&w.prototype.render?n.__c=p=new w(b,C):(n.__c=p=new c(b,C),p.constructor=w,p.render=N),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=w.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=_({},p.__s)),_(p.__s,w.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,p.__v=n,h)null==w.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||n.__v===t.__v){for(n.__v!==t.__v&&(p.props=b,p.state=p.__s,p.__d=!1),p.__e=!1,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),x=0;x<p._sb.length;x++)p.__h.push(p._sb[x]);p._sb=[],p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}if(p.context=C,p.props=b,p.__P=e,E=U.__r,P=0,"prototype"in w&&w.prototype.render){for(p.state=p.__s,p.__d=!1,E&&E(n),a=p.render(p.props,p.state,p.context),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[]}else do{p.__d=!1,E&&E(n),a=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++P<25);p.state=p.__s,null!=p.getChildContext&&(o=_(_({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),T=null!=a&&a.type===l&&null==a.key?a.props.children:a,d(e,Array.isArray(T)?T:[T],n,t,o,r,i,u,s,f),p.base=n.__e,n.__h=null,p.__h.length&&u.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=H(t.__e,n,t,o,r,i,u,f);(a=U.diffed)&&a(n)}catch(e){n.__v=null,(f||null!=i)&&(n.__e=s,n.__h=!!f,i[i.indexOf(s)]=null),U.__e(e,n,t)}}function E(e,n){U.__c&&U.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){U.__e(e,n.__v)}}))}function H(e,n,t,_,r,i,u,l){var c,f,a,p=t.props,h=n.props,v=n.type,y=0;if("svg"===v&&(r=!0),null!=i)for(;y<i.length;y++)if((c=i[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,i[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),i=null,l=!1}if(null===v)p===h||l&&e.data===h||(e.data=h);else{if(i=i&&L.call(e.childNodes),f=(p=t.props||I).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(a||f)&&(a&&(f&&a.__html==f.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,n,t,_,o){var r;for(r in t)"children"===r||"key"===r||r in n||b(e,r,null,t[r],_);for(r in n)o&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||b(e,r,n[r],t[r],_)}(e,h,p,r,l),a)n.__k=[];else if(y=n.props.children,d(e,Array.isArray(y)?y:[y],n,t,_,r&&"foreignObject"!==v,i,u,i?i[0]:t.__k&&s(t,0),l),null!=i)for(y=i.length;y--;)null!=i[y]&&o(i[y]);l||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&b(e,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&b(e,"checked",y,p.checked,!1))}return e}function P(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){U.__e(e,t)}}function S(e,n,t){var _,r;if(U.unmount&&U.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||P(_,null,n)),null!=(_=e.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(e){U.__e(e,n)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(r=0;r<_.length;r++)_[r]&&S(_[r],n,t||"function"!=typeof e.type);t||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function N(e,n,t){return this.constructor(e,t)}function T(e,n,t){var _,o,i;U.__&&U.__(e,n),o=(_="function"==typeof t)?null:t&&t.__k||n.__k,i=[],x(n,e=(!_&&t||n).__k=r(l,null,[e]),o||I,I,void 0!==n.ownerSVGElement,!_&&t?[t]:o?null:n.firstChild?L.call(n.childNodes):null,i,!_&&t?t:o?o.__e:n.firstChild,_),E(i,e)}function w(e,n){T(e,n,w)}function A(e,n,t){var o,r,u,l=_({},e.props);for(u in n)"key"==u?o=n[u]:"ref"==u?r=n[u]:l[u]=n[u];return arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):t),i(e.type,l,o||e.key,r||e.ref,null)}function D(e,n){var t={__c:n="__cC"+j++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some((function(e){e.__e=!0,a(e)}))},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"Component",(function(){return c})),t.d(n,"Fragment",(function(){return l})),t.d(n,"cloneElement",(function(){return A})),t.d(n,"createContext",(function(){return D})),t.d(n,"createElement",(function(){return r})),t.d(n,"createRef",(function(){return u})),t.d(n,"h",(function(){return r})),t.d(n,"hydrate",(function(){return w})),t.d(n,"isValidElement",(function(){return O})),t.d(n,"options",(function(){return U})),t.d(n,"render",(function(){return T})),t.d(n,"toChildArray",(function(){return v}));var L,U,M,O,W,F,R,j,I={},Q=[],V=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=Q.slice,U={__e:function(e,n,t,_){for(var o,r,i;n=n.__;)if((o=n.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),i=o.__d),i)return o.__E=o}catch(n){e=n}throw e}},M=0,O=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},t),this.props)),e&&_(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),a(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},c.prototype.render=l,W=[],R="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,j=0},"wX/T":function(e,n){"use strict";n.a={input:"input__Ibe0p"}},xGyD:function(){}});
//# sourceMappingURL=bundle.402d0.esm.js.map