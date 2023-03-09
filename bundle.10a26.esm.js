!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(n){return t[n]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/server-status/",n(n.s="Pq/i")}({"0CKn":function(t,n,e){"use strict";function r(t,n){const e=Object(i.c)();Object(i.b)((()=>{e.current=t}),[t]),Object(i.b)((()=>{if(null!==n){const t=setInterval((function(){e.current()}),n);return()=>clearInterval(t)}}),[t,n])}function o(t,n){const[e,r]=Object(i.d)((()=>{const e=window.localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(n){console.error("localStorage error:",t,e,n)}return window.localStorage.setItem(t,JSON.stringify(n)),n}));return Object(i.b)((()=>{window.localStorage.setItem(t,JSON.stringify(e))}),[t,e]),[e,r]}function _(){const[t,n]=Object(i.d)("visible"===document.visibilityState),e=Object(i.a)((()=>{n("visible"===document.visibilityState)}),[]);return Object(i.b)((()=>(document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)})),[e]),t}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return _}));var i=e("QRet")},"5O3x":function(t,n,e){"use strict";(function(t,r){function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function _(t,n,e){return(n=function(t){var n=function(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}async function i(t,n){try{const e=`http://${t}:${n}/status`,r=await fetch(e);return function(t){const n=Object.keys(t).sort();return n.map((n=>{const e=t[n],{currentState:r,currentTrack:i,volume:u}=e;return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){_(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({name:n,state:r,volume:u},function(t,n){if("playing"!==t)return{};console.log("TRACK",n);const{album:e,artist:r,duration:o,title:_}=n;return{album:e,artist:r,duration:o,title:_}}(r,i))}))}(await r.json())}catch(t){return console.error(`Fetch error (${t})`),null}}function u(n){return n.title?t(r,null,t("div",{className:"indent-2"},t("span",null,n.title," "),t("span",null,function(t){const n=Math.floor(t/60),e=Math.floor(n/60),r=t-60*n,o=e>0?2:1,_=(n-60*e).toFixed(0).padStart(o,"0"),i=r.toFixed(0).padStart(2,"0");return e>0?`${e}:${_}:${i}`:`${_}:${i}`}(n.duration))),t("div",{className:"indent-2"},t("span",null,n.artist," / "),t("span",null,n.album))):null}function l(n){return n?t("div",null,n.map((n=>t("div",{key:n.name},function(n){const e=f()({playing:n.title});return t("div",{className:"indent-1"},t("b",null,n.name," "),t("span",{className:e},n.state," "),t("span",null,`(${n.volume})`))}(n),u(n))))):null}function c({address:n,port:e}){const[r,o]=Object(s.d)(),_=Object(p.c)()?2e3:null;return Object(p.a)((()=>{(async()=>{o(await i(n,e))})()}),_),t("section",null,t("span",{className:"title"},"Sonos Server"),l(r))}e.d(n,"a",(function(){return c}));var s=e("QRet"),a=e("8Jek"),f=e.n(a),p=e("0CKn")}).call(this,e("hosL").h,e("hosL").Fragment)},"8Jek":function(t,n){var e;!function(){"use strict";function r(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var _=typeof e;if("string"===_||"number"===_)t.push(e);else if(Array.isArray(e)){if(e.length){var i=r.apply(null,e);i&&t.push(i)}}else if("object"===_){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var u in e)o.call(e,u)&&e[u]&&t.push(u)}}}return t.join(" ")}var o={}.hasOwnProperty;t.exports?(r.default=r,t.exports=r):void 0===(e=function(){return r}.apply(n,[]))||(t.exports=e)}()},"Hw+i":function(t,n,e){"use strict";(function(t){function r({value:n,onChange:e}){const[r,_]=Object(o.d)(n);return t("input",{type:"text",value:r,onInput:t=>_(t.target.value),onChange:t=>e(t.target.value)})}e.d(n,"a",(function(){return r}));var o=e("QRet")}).call(this,e("hosL").h)},KdXF:function(t,n,e){"use strict";(function(t){function r(){const[n,e]=Object(o.b)("stAddress","192.168.1.2");return t("div",{className:"home"},t(u.a,{address:n,setAddress:e}),t(i.a,{address:n,port:5555}),t("section",{className:"version"},t("span",null,`v${_.a}`)))}e.d(n,"a",(function(){return r}));var o=e("0CKn"),_=e("QP3f"),i=e("5O3x"),u=e("n+Oy")}).call(this,e("hosL").h)},MV5A:function(){},"Pq/i":function(t,n,e){"use strict";e.r(n);var r=e("hosL");const{h:o,render:_,hydrate:i}=r,u=t=>t&&t.default?t.default:t,l=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(e.p)+"sw-esm.js"),"function"==typeof u(e("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,n=()=>{let n=u(e("QfWi")),r={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(r=JSON.parse(decodeURI(i.innerHTML)).preRenderData||r);const c={preRenderData:r};r.url&&l(r.url);_(o(n,{CLI_DATA:c}),document.body,t)};0,n()}},QP3f:function(t){t.exports=JSON.parse('{"a":"0.3.0"}')},QRet:function(t,n,e){"use strict";function r(t,n){b.options.__h&&b.options.__h(v,t,g||n),g=0;var e=v.__H||(v.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:O}),e.__[t]}function o(t){return g=1,function(t,n,e){var o=r(h++,2);if(o.t=t,!o.__c&&(o.__=[e?e(n):d(void 0,n),function(t){var n=o.__N?o.__N[0]:o.__[0],e=o.t(n,t);n!==e&&(o.__N=[e,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.u)){v.u=!0;var _=v.shouldComponentUpdate;v.shouldComponentUpdate=function(t,n,e){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter((function(t){return t.__c}));if(r.every((function(t){return!t.__N})))return!_||_.call(this,t,n,e);var i=!1;return r.forEach((function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(i=!0)}})),!(!i&&o.__c.props===t)&&(!_||_.call(this,t,n,e))}}return o.__N||o.__}(d,t)}function _(t,n){var e=r(h++,3);!b.options.__s&&p(e.__H,n)&&(e.__=t,e.i=n,v.__H.__h.push(e))}function i(t){return g=5,u((function(){return{current:t}}),[])}function u(t,n){var e=r(h++,7);return p(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function l(t,n){return g=8,u((function(){return t}),n)}function c(){for(var t;t=k.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(a),t.__H.__h.forEach(f),t.__H.__h=[]}catch(n){t.__H.__h=[],b.options.__e(n,t.__v)}}function s(t){var n,e=function(){clearTimeout(r),C&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);C&&(n=requestAnimationFrame(e))}function a(t){var n=v,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),v=n}function f(t){var n=v;t.__c=t.__(),v=n}function p(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}function d(t,n){return"function"==typeof n?n(t):n}e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return _})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return o}));var h,v,y,m,b=e("hosL"),g=0,k=[],O=[],S=b.options.__b,j=b.options.__r,w=b.options.diffed,x=b.options.__c,P=b.options.unmount;b.options.__b=function(t){v=null,S&&S(t)},b.options.__r=function(t){j&&j(t),h=0;var n=(v=t.__c).__H;n&&(y===v?(n.__h=[],v.__h=[],n.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=O,t.__N=t.i=void 0}))):(n.__h.forEach(a),n.__h.forEach(f),n.__h=[])),y=v},b.options.diffed=function(t){w&&w(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==k.push(n)&&m===b.options.requestAnimationFrame||((m=b.options.requestAnimationFrame)||s)(c)),n.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==O&&(t.__=t.__V),t.i=void 0,t.__V=O}))),y=v=null},b.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(a),t.__h=t.__h.filter((function(t){return!t.__||f(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],b.options.__e(e,t.__v)}})),x&&x(t,n)},b.options.unmount=function(t){P&&P(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach((function(t){try{a(t)}catch(t){n=t}})),e.__H=void 0,n&&b.options.__e(n,e.__v))};var C="function"==typeof requestAnimationFrame},QfWi:function(t,n,e){"use strict";e.r(n),function(t){function r(){return t(o.a,null)}e.d(n,"default",(function(){return r}));var o=e("KdXF");e("xGyD"),e("MV5A")}.call(this,e("hosL").h)},hosL:function(t,n,e){"use strict";function r(t,n){for(var e in n)t[e]=n[e];return t}function o(t){var n=t.parentNode;n&&n.removeChild(t)}function _(t,n,e){var r,o,_,u={};for(_ in n)"key"==_?r=n[_]:"ref"==_?o=n[_]:u[_]=n[_];if(arguments.length>2&&(u.children=arguments.length>3?D.call(arguments,2):e),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===u[_]&&(u[_]=t.defaultProps[_]);return i(t,u,r,o,null)}function i(t,n,e,r,o){var _={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=T.vnode&&T.vnode(_),_}function u(){return{current:null}}function l(t){return t.children}function c(t,n){this.props=t,this.context=n}function s(t,n){if(null==n)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?s(t):null}function a(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return a(t)}}function f(t){(!t.__d&&(t.__d=!0)&&M.push(t)&&!p.__r++||U!==T.debounceRendering)&&((U=T.debounceRendering)||R)(p)}function p(){var t,n,e,o,_,i,u,l;for(M.sort((function(t,n){return t.__v.__b-n.__v.__b}));t=M.shift();)t.__d&&(n=M.length,o=void 0,_=void 0,u=(i=(e=t).__v).__e,(l=e.__P)&&(o=[],(_=r({},i)).__v=i.__v+1,S(l,i,_,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,o,null==u?s(i):u,i.__h),j(o,i),i.__e!=u&&a(i)),M.length>n&&M.sort((function(t,n){return t.__v.__b-n.__v.__b})));p.__r=0}function d(t,n,e,r,o,_,u,c,a,f){var p,d,v,b,g,k,O,j=r&&r.__k||$,w=j.length;for(e.__k=[],p=0;p<n.length;p++)if(null!=(b=e.__k[p]=null==(b=n[p])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?i(null,b,null,null,b):Array.isArray(b)?i(l,{children:b},null,null,null):b.__b>0?i(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=e,b.__b=e.__b+1,null===(v=j[p])||v&&b.key==v.key&&b.type===v.type)j[p]=void 0;else for(d=0;d<w;d++){if((v=j[d])&&b.key==v.key&&b.type===v.type){j[d]=void 0;break}v=null}S(t,b,v=v||I,o,_,u,c,a,f),g=b.__e,(d=b.ref)&&v.ref!=d&&(O||(O=[]),v.ref&&O.push(v.ref,null,b),O.push(d,b.__c||g,b)),null!=g?(null==k&&(k=g),"function"==typeof b.type&&b.__k===v.__k?b.__d=a=h(b,a,t):a=y(t,b,v,j,g,a),"function"==typeof e.type&&(e.__d=a)):a&&v.__e==a&&a.parentNode!=t&&(a=s(v))}for(e.__e=k,p=w;p--;)null!=j[p]&&("function"==typeof e.type&&null!=j[p].__e&&j[p].__e==e.__d&&(e.__d=m(r).nextSibling),P(j[p],j[p]));if(O)for(p=0;p<O.length;p++)x(O[p],O[++p],O[++p])}function h(t,n,e){for(var r,o=t.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=t,n="function"==typeof r.type?h(r,n,e):y(e,r,r,o,r.__e,n));return n}function v(t,n){return n=n||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,n)})):n.push(t)),n}function y(t,n,e,r,o,_){var i,u,l;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(null==e||o!=_||null==o.parentNode)t:if(null==_||_.parentNode!==t)t.appendChild(o),i=null;else{for(u=_,l=0;(u=u.nextSibling)&&l<r.length;l+=1)if(u==o)break t;t.insertBefore(o,_),i=_}return void 0!==i?i:o.nextSibling}function m(t){var n,e,r;if(null==t.type||"string"==typeof t.type)return t.__e;if(t.__k)for(n=t.__k.length-1;n>=0;n--)if((e=t.__k[n])&&(r=m(e)))return r;return null}function b(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||V.test(n)?e:e+"px"}function g(t,n,e,r,o){var _;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||b(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||b(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+_]=e,e?r||t.addEventListener(n,_?O:k,_):t.removeEventListener(n,_?O:k,_);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&-1==n.indexOf("-")?t.removeAttribute(n):t.setAttribute(n,e))}}function k(t){return this.l[t.type+!1](T.event?T.event(t):t)}function O(t){return this.l[t.type+!0](T.event?T.event(t):t)}function S(t,n,e,o,_,i,u,s,a){var f,p,h,v,y,m,b,g,k,O,S,j,x,P,N,E=n.type;if(void 0!==n.constructor)return null;null!=e.__h&&(a=e.__h,s=n.__e=e.__e,n.__h=null,i=[s]),(f=T.__b)&&f(n);try{t:if("function"==typeof E){if(g=n.props,k=(f=E.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,e.__c?b=(p=n.__c=e.__c).__=p.__E:("prototype"in E&&E.prototype.render?n.__c=p=new E(g,O):(n.__c=p=new c(g,O),p.constructor=E,p.render=C),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,h=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,E.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,p.__v=n,h)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||n.__v===e.__v){for(n.__v!==e.__v&&(p.props=g,p.state=p.__s,p.__d=!1),p.__e=!1,n.__e=e.__e,n.__k=e.__k,n.__k.forEach((function(t){t&&(t.__=n)})),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&u.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}if(p.context=O,p.props=g,p.__P=t,j=T.__r,x=0,"prototype"in E&&E.prototype.render){for(p.state=p.__s,p.__d=!1,j&&j(n),f=p.render(p.props,p.state,p.context),P=0;P<p._sb.length;P++)p.__h.push(p._sb[P]);p._sb=[]}else do{p.__d=!1,j&&j(n),f=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++x<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),N=null!=f&&f.type===l&&null==f.key?f.props.children:f,d(t,Array.isArray(N)?N:[N],n,e,o,_,i,u,s,a),p.base=n.__e,n.__h=null,p.__h.length&&u.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=w(e.__e,n,e,o,_,i,u,a);(f=T.diffed)&&f(n)}catch(t){n.__v=null,(a||null!=i)&&(n.__e=s,n.__h=!!a,i[i.indexOf(s)]=null),T.__e(t,n,e)}}function j(t,n){T.__c&&T.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){T.__e(t,n.__v)}}))}function w(t,n,e,r,_,i,u,l){var c,a,f,p=e.props,h=n.props,v=n.type,y=0;if("svg"===v&&(_=!0),null!=i)for(;y<i.length;y++)if((c=i[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,i[y]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),i=null,l=!1}if(null===v)p===h||l&&t.data===h||(t.data=h);else{if(i=i&&D.call(t.childNodes),a=(p=e.props||I).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(f||a)&&(f&&(a&&f.__html==a.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,n,e,r,o){var _;for(_ in e)"children"===_||"key"===_||_ in n||g(t,_,null,e[_],r);for(_ in n)o&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||e[_]===n[_]||g(t,_,n[_],e[_],r)}(t,h,p,_,l),f)n.__k=[];else if(y=n.props.children,d(t,Array.isArray(y)?y:[y],n,e,r,_&&"foreignObject"!==v,i,u,i?i[0]:e.__k&&s(e,0),l),null!=i)for(y=i.length;y--;)null!=i[y]&&o(i[y]);l||("value"in h&&void 0!==(y=h.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&g(t,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==t.checked&&g(t,"checked",y,p.checked,!1))}return t}function x(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){T.__e(t,e)}}function P(t,n,e){var r,_;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||x(r,null,n)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,n)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(_=0;_<r.length;_++)r[_]&&P(r[_],n,e||"function"!=typeof t.type);e||null==t.__e||o(t.__e),t.__=t.__e=t.__d=void 0}function C(t,n,e){return this.constructor(t,e)}function N(t,n,e){var r,o,i;T.__&&T.__(t,n),o=(r="function"==typeof e)?null:e&&e.__k||n.__k,i=[],S(n,t=(!r&&e||n).__k=_(l,null,[t]),o||I,I,void 0!==n.ownerSVGElement,!r&&e?[e]:o?null:n.firstChild?D.call(n.childNodes):null,i,!r&&e?e:o?o.__e:n.firstChild,r),j(i,t)}function E(t,n){N(t,n,E)}function A(t,n,e){var o,_,u,l=r({},t.props);for(u in n)"key"==u?o=n[u]:"ref"==u?_=n[u]:l[u]=n[u];return arguments.length>2&&(l.children=arguments.length>3?D.call(arguments,2):e),i(t.type,l,o||t.key,_||t.ref,null)}function H(t,n){var e={__c:n="__cC"+W++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,r;return this.getChildContext||(e=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some((function(t){t.__e=!0,f(t)}))},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}e.r(n),e.d(n,"Component",(function(){return c})),e.d(n,"Fragment",(function(){return l})),e.d(n,"cloneElement",(function(){return A})),e.d(n,"createContext",(function(){return H})),e.d(n,"createElement",(function(){return _})),e.d(n,"createRef",(function(){return u})),e.d(n,"h",(function(){return _})),e.d(n,"hydrate",(function(){return E})),e.d(n,"isValidElement",(function(){return F})),e.d(n,"options",(function(){return T})),e.d(n,"render",(function(){return N})),e.d(n,"toChildArray",(function(){return v}));var D,T,L,F,M,U,R,W,I={},$=[],V=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;D=$.slice,T={__e:function(t,n,e,r){for(var o,_,i;n=n.__;)if((o=n.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(t)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),i=o.__d),i)return o.__E=o}catch(n){t=n}throw t}},L=0,F=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},e),this.props)),t&&r(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=l,M=[],R="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,W=0},"n+Oy":function(t,n,e){"use strict";(function(t){function r(t){return new Date(t).toLocaleTimeString()}function o({address:n,setAddress:e}){const[o,l]=Object(_.d)(r(Date.now())),c=Object(i.c)()?1e3:null;return Object(i.a)((()=>{l(r(Date.now()))}),[c]),t("section",null,t("span",{className:"title"},"Server Status "),t("span",null,o),t("div",{className:"indent-1"},t(u.a,{value:n,onChange:t=>e(t)})))}e.d(n,"a",(function(){return o}));var _=e("QRet"),i=e("0CKn"),u=e("Hw+i")}).call(this,e("hosL").h)},xGyD:function(){}});
//# sourceMappingURL=bundle.10a26.esm.js.map