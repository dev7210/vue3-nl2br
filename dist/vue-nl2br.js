!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueNl2br=t():e.vueNl2br=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return z})),n.d(t,"f",(function(){return W})),n.d(t,"g",(function(){return G})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return Z})),n.d(t,"j",(function(){return q})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return D})),n.d(t,"m",(function(){return H})),n.d(t,"n",(function(){return k})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return o})),n.d(t,"q",(function(){return p})),n.d(t,"r",(function(){return I})),n.d(t,"s",(function(){return j})),n.d(t,"t",(function(){return P})),n.d(t,"u",(function(){return O})),n.d(t,"v",(function(){return L})),n.d(t,"w",(function(){return B})),n.d(t,"x",(function(){return d})),n.d(t,"y",(function(){return c})),n.d(t,"z",(function(){return T})),n.d(t,"A",(function(){return M})),n.d(t,"B",(function(){return h})),n.d(t,"C",(function(){return b})),n.d(t,"D",(function(){return r})),n.d(t,"E",(function(){return f})),n.d(t,"F",(function(){return s})),n.d(t,"G",(function(){return C})),n.d(t,"H",(function(){return K})),n.d(t,"I",(function(){return R}));const o=r("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl");const i="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c=r(i);function s(e){if(k(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=s(T(r)?u(r):r);if(o)for(const e in o)t[e]=o[e]}return t}if(P(e))return e}const l=/;(?![^(]*\))/g,a=/:(.+)/;function u(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(a);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(T(e))t=e;else if(k(e))for(let n=0;n<e.length;n++)t+=f(e[n])+" ";else if(P(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p=r("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),d=r("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");function h(e,t){if(e===t)return!0;let n=E(e),r=E(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=k(e),r=k(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=h(e[r],t[r]);return n}(e,t);if(n=P(e),r=P(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!h(e[n],t[n]))return!1}}return String(e)===String(t)}function b(e,t){return e.findIndex(e=>h(e,t))}const g={},v=[],m=()=>{},_=()=>!1,y=/^on[^a-z]/,O=e=>y.test(e),j=e=>e.startsWith("onUpdate:"),S=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},w=Object.prototype.hasOwnProperty,x=(e,t)=>w.call(e,t),k=Array.isArray,E=e=>e instanceof Date,A=e=>"function"==typeof e,T=e=>"string"==typeof e,M=e=>"symbol"==typeof e,P=e=>null!==e&&"object"==typeof e,L=e=>P(e)&&A(e.then)&&A(e.catch),N=Object.prototype.toString,F=e=>N.call(e),R=e=>F(e).slice(8,-1),I=e=>T(e)&&"-"!==e[0]&&""+parseInt(e,10)===e,B=r("key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),U=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},$=/-(\w)/g,z=U(e=>e.replace($,(e,t)=>t?t.toUpperCase():"")),V=/\B([A-Z])/g,D=U(e=>e.replace(V,"-$1").toLowerCase()),W=U(e=>e.charAt(0).toUpperCase()+e.slice(1)),q=(e,t)=>e!==t&&(e==e||t==t),H=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},G=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},K=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let J;const Z=()=>J||(J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{})}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0);const o=new WeakMap,i=[];let c;const s=Symbol(""),l=Symbol("");function a(e,t=r.b){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!i.includes(n)){p(n);try{return h.push(d),d=!0,i.push(n),c=n,e()}finally{i.pop(),g(),c=i[i.length-1]}}};return n.id=f++,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function u(e){e.active&&(p(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let f=0;function p(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let d=!0;const h=[];function b(){h.push(d),d=!1}function g(){const e=h.pop();d=void 0===e||e}function v(e,t,n){if(!d||void 0===c)return;let r=o.get(e);r||o.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(c)||(i.add(c),c.deps.push(i))}function m(e,t,n,i,a,u){const f=o.get(e);if(!f)return;const p=new Set,d=e=>{e&&e.forEach(e=>{e!==c&&p.add(e)})};if("clear"===t)f.forEach(d);else if("length"===n&&Object(r.n)(e))f.forEach((e,t)=>{("length"===t||t>=i)&&d(e)});else{void 0!==n&&d(f.get(n));const o="add"===t&&(!Object(r.n)(e)||Object(r.r)(n))||"delete"===t&&!Object(r.n)(e);(o||"set"===t&&e instanceof Map)&&d(f.get(Object(r.n)(e)?"length":s)),o&&e instanceof Map&&d(f.get(l))}p.forEach(e=>{e.options.scheduler?e.options.scheduler(e):e()})}const _=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r.A)),y=w(),O=w(!1,!0),j=w(!0),S=w(!0,!0),C={};function w(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&i===(e?X:Q).get(n))return n;const c=Object(r.n)(n);if(c&&Object(r.k)(C,o))return Reflect.get(C,o,i);const s=Reflect.get(n,o,i);if(Object(r.A)(o)?_.has(o):"__proto__"===o||"__v_isRef"===o)return s;if(e||v(n,0,o),t)return s;if(ce(s)){return!c||!Object(r.r)(o)?s.value:s}return Object(r.t)(s)?e?ee(s):Y(s):s}}["includes","indexOf","lastIndexOf"].forEach(e=>{C[e]=function(...t){const n=ie(this);for(let e=0,t=this.length;e<t;e++)v(n,0,e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(ie)):r}});const x=E(),k=E(!0);function E(e=!1){return function(t,n,o,i){const c=t[n];if(!e&&(o=ie(o),!Object(r.n)(t)&&ce(c)&&!ce(o)))return c.value=o,!0;const s=Object(r.n)(t)&&Object(r.r)(n)?Number(n)<t.length:Object(r.k)(t,n),l=Reflect.set(t,n,o,i);return t===ie(i)&&(s?Object(r.j)(o,c)&&m(t,"set",n,o):m(t,"add",n,o)),l}}const A={get:y,set:x,deleteProperty:function(e,t){const n=Object(r.k)(e,t),o=(e[t],Reflect.deleteProperty(e,t));return o&&n&&m(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return Object(r.A)(t)&&_.has(t)||v(e,0,t),n},ownKeys:function(e){return v(e,0,s),Reflect.ownKeys(e)}},T={get:j,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},M=(Object(r.h)({},A,{get:O,set:k}),Object(r.h)({},T,{get:S}),e=>Object(r.t)(e)?Y(e):e),P=e=>Object(r.t)(e)?ee(e):e,L=e=>e,N=e=>Reflect.getPrototypeOf(e);function F(e,t,n=!1,r=!1){const o=ie(e=e.__v_raw),i=ie(t);t!==i&&!n&&v(o,0,t),!n&&v(o,0,i);const{has:c}=N(o),s=n?P:r?L:M;return c.call(o,t)?s(e.get(t)):c.call(o,i)?s(e.get(i)):void 0}function R(e,t=!1){const n=this.__v_raw,r=ie(n),o=ie(e);return e!==o&&!t&&v(r,0,e),!t&&v(r,0,o),e===o?n.has(e):n.has(e)||n.has(o)}function I(e,t=!1){return e=e.__v_raw,!t&&v(ie(e),0,s),Reflect.get(e,"size",e)}function B(e){e=ie(e);const t=ie(this),n=N(t),r=n.has.call(t,e),o=n.add.call(t,e);return r||m(t,"add",e,e),o}function U(e,t){t=ie(t);const n=ie(this),{has:o,get:i,set:c}=N(n);let s=o.call(n,e);s||(e=ie(e),s=o.call(n,e));const l=i.call(n,e),a=c.call(n,e,t);return s?Object(r.j)(t,l)&&m(n,"set",e,t):m(n,"add",e,t),a}function $(e){const t=ie(this),{has:n,get:r,delete:o}=N(t);let i=n.call(t,e);i||(e=ie(e),i=n.call(t,e));r&&r.call(t,e);const c=o.call(t,e);return i&&m(t,"delete",e,void 0),c}function z(){const e=ie(this),t=0!==e.size,n=N(e).clear.call(e);return t&&m(e,"clear",void 0,void 0),n}function V(e,t){return function(n,r){const o=this,i=o.__v_raw,c=ie(i),l=e?P:t?L:M;return!e&&v(c,0,s),i.forEach((e,t)=>n.call(r,l(e),l(t),o))}}function D(e,t,n){return function(...r){const o=this.__v_raw,i=ie(o),c=i instanceof Map,a="entries"===e||e===Symbol.iterator&&c,u="keys"===e&&c,f=o[e](...r),p=t?P:n?L:M;return!t&&v(i,0,u?l:s),{next(){const{value:e,done:t}=f.next();return t?{value:e,done:t}:{value:a?[p(e[0]),p(e[1])]:p(e),done:t}},[Symbol.iterator](){return this}}}}function W(e){return function(...t){return"delete"!==e&&this}}const q={get(e){return F(this,e)},get size(){return I(this)},has:R,add:B,set:U,delete:$,clear:z,forEach:V(!1,!1)},H={get(e){return F(this,e,!1,!0)},get size(){return I(this)},has:R,add:B,set:U,delete:$,clear:z,forEach:V(!1,!0)},G={get(e){return F(this,e,!0)},get size(){return I(this,!0)},has(e){return R.call(this,e,!0)},add:W("add"),set:W("set"),delete:W("delete"),clear:W("clear"),forEach:V(!0,!1)};function K(e,t){const n=t?H:e?G:q;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(Object(r.k)(n,o)&&o in t?n:t,o,i)}["keys","values","entries",Symbol.iterator].forEach(e=>{q[e]=D(e,!1,!1),G[e]=D(e,!0,!1),H[e]=D(e,!1,!0)});const J={get:K(!1,!1)},Z=(K(!1,!0),{get:K(!0,!1)});const Q=new WeakMap,X=new WeakMap;function Y(e){return e&&e.__v_isReadonly?e:te(e,!1,A,J)}function ee(e){return te(e,!0,T,Z)}function te(e,t,n,o){if(!Object(r.t)(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=t?X:Q,c=i.get(e);if(c)return c;const s=(l=e).__v_skip||!Object.isExtensible(l)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Object(r.I)(l));var l;if(0===s)return e;const a=new Proxy(e,2===s?o:n);return i.set(e,a),a}function ne(e){return re(e)?ne(e.__v_raw):!(!e||!e.__v_isReactive)}function re(e){return!(!e||!e.__v_isReadonly)}function oe(e){return ne(e)||re(e)}function ie(e){return e&&ie(e.__v_raw)||e}function ce(e){return Boolean(e&&!0===e.__v_isRef)}function se(e,t,n,r){let o;try{o=r?e(...r):e()}catch(e){ae(e,t,n)}return o}function le(e,t,n,o){if(Object(r.o)(e)){const i=se(e,t,n,o);return i&&Object(r.v)(i)&&i.catch(e=>{ae(e,t,n)}),i}const i=[];for(let r=0;r<e.length;r++)i.push(le(e[r],t,n,o));return i}function ae(e,t,n){t&&t.vnode;if(t){let r=t.parent;const o=t.proxy,i=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(t[n](e,o,i))return;r=r.parent}const c=t.appContext.config.errorHandler;if(c)return void se(c,null,10,[e,o,i])}!function(e,t,n){console.error(e)}(e)}let ue=!1,fe=!1;const pe=[];let de=0;const he=[];let be=null,ge=0;const ve=[];let me=null,_e=0;const ye=Promise.resolve();let Oe=null,je=null;function Se(e){const t=Oe||ye;return e?t.then(e):t}function Ce(e){pe.length&&pe.includes(e,ue&&e.allowRecurse?de+1:de)||e===je||(pe.push(e),we())}function we(){ue||fe||(fe=!0,Oe=ye.then(Me))}function xe(e,t,n,o){Object(r.n)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),we()}function ke(e){xe(e,me,ve,_e)}function Ee(e,t=null){if(he.length){for(je=t,be=[...new Set(he)],he.length=0,ge=0;ge<be.length;ge++)be[ge]();be=null,ge=0,je=null,Ee(e,t)}}function Ae(e){if(ve.length){const e=[...new Set(ve)];if(ve.length=0,me)return void me.push(...e);for(me=e,me.sort((e,t)=>Te(e)-Te(t)),_e=0;_e<me.length;_e++)me[_e]();me=null,_e=0}}const Te=e=>null==e.id?1/0:e.id;function Me(e){fe=!1,ue=!0,Ee(e),pe.sort((e,t)=>Te(e)-Te(t));try{for(de=0;de<pe.length;de++){const e=pe[de];e&&se(e,null,14)}}finally{de=0,pe.length=0,Ae(),ue=!1,Oe=null,(pe.length||ve.length)&&Me(e)}}new Set;new Map;let Pe=null;function Le(e,t){t&&!t.isResolved?Object(r.n)(e)?t.effects.push(...e):t.effects.push(e):ke(e)}let Ne=0;const Fe=e=>Ne+=e;let Re=null;const Ie=Symbol();const Be=Symbol(void 0),Ue=Symbol(void 0),$e=Symbol(void 0);Symbol(void 0);let ze=null;let Ve=1;function De(e){return!!e&&!0===e.__v_isVNode}function We(e,t){return e.type===t.type&&e.key===t.key}const qe=({key:e})=>null!=e?e:null,He=({ref:e})=>null!=e?Object(r.n)(e)?e:[Pe,e]:null,Ge=Ke;function Ke(e,t=null,n=null,o=0,i=null,c=!1){if(e&&e!==Ie||(e=$e),De(e)){const r=Je(e,t);return n&&Qe(r,n),r}if(Object(r.o)(e)&&"__vccOpts"in e&&(e=e.__vccOpts),t){(oe(t)||"__vInternal"in t)&&(t=Object(r.h)({},t));let{class:e,style:n}=t;e&&!Object(r.z)(e)&&(t.class=Object(r.E)(e)),Object(r.t)(n)&&(oe(n)&&!Object(r.n)(n)&&(n=Object(r.h)({},n)),t.style=Object(r.F)(n))}const s=Object(r.z)(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:Object(r.t)(e)?4:Object(r.o)(e)?2:0;const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qe(t),ref:t&&He(t),scopeId:Re,children:null,component:null,suspense:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return Qe(l,n),Ve>0&&!c&&ze&&(o>0||6&s)&&32!==o&&ze.push(l),l}function Je(e,t){const{props:n,patchFlag:o}=e,i=t?function(...e){const t=Object(r.h)({},e[0]);for(let n=1;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=Object(r.E)([t.class,o.class]));else if("style"===e)t.style=Object(r.F)([t.style,o.style]);else if(Object(r.u)(e)){const n=t[e],r=o[e];n!==r&&(t[e]=n?[].concat(n,o[e]):r)}else t[e]=o[e]}return t}(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&qe(i),ref:t&&t.ref?He(t):e.ref,scopeId:e.scopeId,children:e.children,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,el:e.el,anchor:e.anchor}}function Ze(e=" ",t=0){return Ge(Ue,null,e,t)}function Qe(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(Object(r.n)(t))n=16;else if("object"==typeof t){if(1&o||64&o){const n=t.default;return void(n&&(n._c&&Fe(1),Qe(e,n()),n._c&&Fe(-1)))}{n=32;const r=t._;r||"__vInternal"in t?3===r&&Pe&&(1024&Pe.vnode.patchFlag?(t._=2,e.patchFlag|=1024):t._=1):t._ctx=Pe}}else Object(r.o)(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),64&o?(n=16,t=[Ze(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xe(e,t,n=At,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;b(),Mt(n);const o=le(t,n,e,r);return Mt(null),g(),o});return r?o.unshift(i):o.push(i),i}}const Ye=e=>(t,n=At)=>!Pt&&Xe(e,t,n),et=Ye("bm"),tt=Ye("m"),nt=Ye("bu"),rt=(Ye("u"),Ye("bum"));Ye("um"),Ye("rtg"),Ye("rtc");function ot(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tt(()=>{e.isMounted=!0}),rt(()=>{e.isUnmounting=!0}),e}const it=[Function,Array],ct={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},setup(e,{slots:t}){const n=Tt(),r=ot();let o;return()=>{const i=t.default&&pt(t.default(),!0);if(!i||!i.length)return;const c=ie(e),{mode:s}=c;const l=i[0];if(r.isLeaving)return at(l);const a=ut(l);if(!a)return at(l);const u=a.transition=lt(a,c,r,n),f=n.subTree,p=f&&ut(f);let d=!1;const{getTransitionKey:h}=a.type;if(h){const e=h();void 0===o?o=e:e!==o&&(o=e,d=!0)}if(p&&p.type!==$e&&(!We(a,p)||d)){const e=lt(p,c,r,n);if(ft(p,e),"out-in"===s)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},at(l);"in-out"===s&&(e.delayLeave=(e,t,n)=>{st(r,p)[String(p.key)]=p,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return l}}};function st(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function lt(e,{appear:t,persisted:n=!1,onBeforeEnter:r,onEnter:o,onAfterEnter:i,onEnterCancelled:c,onBeforeLeave:s,onLeave:l,onAfterLeave:a,onLeaveCancelled:u,onBeforeAppear:f,onAppear:p,onAfterAppear:d,onAppearCancelled:h},b,g){const v=String(e.key),m=st(b,e),_=(e,t)=>{e&&le(e,g,9,t)},y={persisted:n,beforeEnter(n){let o=r;if(!b.isMounted){if(!t)return;o=f||r}n._leaveCb&&n._leaveCb(!0);const i=m[v];i&&We(e,i)&&i.el._leaveCb&&i.el._leaveCb(),_(o,[n])},enter(e){let n=o,r=i,s=c;if(!b.isMounted){if(!t)return;n=p||o,r=d||i,s=h||c}let l=!1;const a=e._enterCb=t=>{l||(l=!0,_(t?s:r,[e]),y.delayedLeave&&y.delayedLeave(),e._enterCb=void 0)};n?(n(e,a),n.length<=1&&a()):a()},leave(t,n){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),b.isUnmounting)return n();_(s,[t]);let o=!1;const i=t._leaveCb=i=>{o||(o=!0,n(),_(i?u:a,[t]),t._leaveCb=void 0,m[r]===e&&delete m[r])};m[r]=e,l?(l(t,i),l.length<=1&&i()):i()}};return y}function at(e){if(dt(e))return(e=Je(e)).children=null,e}function ut(e){return dt(e)?e.children?e.children[0]:void 0:e}function ft(e,t){6&e.shapeFlag&&e.component?ft(e.component.subTree,t):e.transition=t}function pt(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const i=e[o];i.type===Be?(128&i.patchFlag&&r++,n=n.concat(pt(i.children,t))):(t||i.type!==$e)&&n.push(i)}if(r>1)for(let e=0;e<n.length;e++)n[e].patchFlag=-2;return n}const dt=e=>e.type.__isKeepAlive;RegExp,RegExp;function ht(e){return e.displayName||e.name}function bt(e,t){return Object(r.n)(e)?e.some(e=>bt(e,t)):Object(r.z)(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function gt(e){let t=e.shapeFlag;256&t&&256,512&t&&512,e.shapeFlag=t}function vt(){return{app:null,config:{isNativeTag:r.c,performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:r.c,errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}const mt=Le;function _t(e,t,n,r=null){le(e,t,7,[n,r])}const yt={};function Ot(e,t,n){return jt(e,t,n)}function jt(e,t,{immediate:n,deep:o,flush:i,onTrack:c,onTrigger:s}=r.b,l=At){let f;const p=ce(e);if(p?f=()=>e.value:ne(e)?(f=()=>e,o=!0):f=Object(r.n)(e)?()=>e.map(e=>ce(e)?e.value:ne(e)?Ct(e):Object(r.o)(e)?se(e,l,2):void 0):Object(r.o)(e)?t?()=>se(e,l,2):()=>{if(!l||!l.isUnmounted)return d&&d(),se(e,l,3,[h])}:r.d,t&&o){const e=f;f=()=>Ct(e())}let d;const h=e=>{d=m.options.onStop=()=>{se(e,l,4)}};let b=Object(r.n)(e)?[]:yt;const g=()=>{if(m.active)if(t){const e=m();(o||p||Object(r.j)(e,b))&&(d&&d(),le(t,l,3,[e,b===yt?void 0:b,h]),b=e)}else m()};let v;g.allowRecurse=!!t,"sync"===i?v=g:"pre"===i?(g.id=-1,v=()=>{!l||l.isMounted?function(e){xe(e,be,he,ge)}(g):g()}):v=()=>mt(g,l&&l.suspense);const m=a(f,{lazy:!0,onTrack:c,onTrigger:s,scheduler:v});return Lt(m),t?n?g():b=m():m(),()=>{u(m),l&&Object(r.G)(l.effects,m)}}function St(e,t,n){const o=this.proxy;return jt(Object(r.z)(e)?()=>o[e]:e.bind(o),t.bind(o),n,this)}function Ct(e,t=new Set){if(!Object(r.t)(e)||t.has(e))return e;if(t.add(e),ce(e))Ct(e.value,t);else if(Object(r.n)(e))for(let n=0;n<e.length;n++)Ct(e[n],t);else if(e instanceof Map)e.forEach((n,r)=>{Ct(e.get(r),t)});else if(e instanceof Set)e.forEach(e=>{Ct(e,t)});else for(const n in e)Ct(e[n],t);return e}let wt=!1;function xt(e,t,n){const o=n.appContext.config.optionMergeStrategies;for(const i in t)o&&Object(r.k)(o,i)?e[i]=o[i](e[i],t[i],n.proxy,i):Object(r.k)(e,i)||(e[i]=t[i]);const{mixins:i,extends:c}=t;c&&xt(e,c,n),i&&i.forEach(t=>xt(e,t,n))}const kt=Object(r.h)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>e.parent&&e.parent.proxy,$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?function(e){const t=e.type,{__merged:n,mixins:r,extends:o}=t;if(n)return n;const i=e.appContext.mixins;if(!i.length&&!r&&!o)return t;const c={};return xt(c,t,e),i.forEach(t=>xt(c,t,e)),t.__merged=c}(e):e.type,$forceUpdate:e=>()=>Ce(e.update),$nextTick:()=>Se,$watch:e=>__VUE_OPTIONS_API__?St.bind(e):r.d}),Et={get({_:e},t){const{ctx:n,setupState:o,data:i,props:c,accessCache:s,type:l,appContext:a}=e;if("__v_skip"===t)return!0;let u;if("$"!==t[0]){const l=s[t];if(void 0!==l)switch(l){case 0:return o[t];case 1:return i[t];case 3:return n[t];case 2:return c[t]}else{if(o!==r.b&&Object(r.k)(o,t))return s[t]=0,o[t];if(i!==r.b&&Object(r.k)(i,t))return s[t]=1,i[t];if((u=e.propsOptions[0])&&Object(r.k)(u,t))return s[t]=2,c[t];if(n!==r.b&&Object(r.k)(n,t))return s[t]=3,n[t];__VUE_OPTIONS_API__&&wt||(s[t]=4)}}const f=kt[t];let p,d;return f?("$attrs"===t&&v(e,0,t),f(e)):(p=l.__cssModules)&&(p=p[t])?p:n!==r.b&&Object(r.k)(n,t)?(s[t]=3,n[t]):(d=a.config.globalProperties,Object(r.k)(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:o,setupState:i,ctx:c}=e;if(i!==r.b&&Object(r.k)(i,t))i[t]=n;else if(o!==r.b&&Object(r.k)(o,t))o[t]=n;else if(t in e.props)return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(c[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:c}},s){let l;return void 0!==n[s]||e!==r.b&&Object(r.k)(e,s)||t!==r.b&&Object(r.k)(t,s)||(l=c[0])&&Object(r.k)(l,s)||Object(r.k)(o,s)||Object(r.k)(kt,s)||Object(r.k)(i.config.globalProperties,s)}};Object(r.h)({},Et,{get(e,t){if(t!==Symbol.unscopables)return Et.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!Object(r.p)(t)});vt();let At=null;const Tt=()=>At||Pe,Mt=e=>{At=e};let Pt=!1;function Lt(e){At&&(At.effects||(At.effects=[])).push(e)}function Nt(e,t,n){const o=arguments.length;return 2===o?Object(r.t)(t)&&!Object(r.n)(t)?De(t)?Ge(e,null,[t]):Ge(e,t):Ge(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&De(n)&&(n=[n]),Ge(e,t,n))}Symbol("");const Ft="http://www.w3.org/2000/svg",Rt="undefined"!=typeof document?document:null;let It,Bt;const Ut={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n)=>t?Rt.createElementNS(Ft,e):Rt.createElement(e,n?{is:n}:void 0),createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode:e=>e.cloneNode(!0),insertStaticContent(e,t,n,r){const o=r?Bt||(Bt=Rt.createElementNS(Ft,"svg")):It||(It=Rt.createElement("div"));o.innerHTML=e;const i=o.firstChild;let c=i,s=c;for(;c;)s=c,Ut.insert(c,t,n),c=o.firstChild;return[i,s]}};const $t=/\s*!important$/;function zt(e,t,n){if(Object(r.n)(n))n.forEach(n=>zt(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const o=function(e,t){const n=Dt[t];if(n)return n;let o=Object(r.e)(t);if("filter"!==o&&o in e)return Dt[t]=o;o=Object(r.f)(o);for(let n=0;n<Vt.length;n++){const r=Vt[n]+o;if(r in e)return Dt[t]=r}return t}(e,t);$t.test(n)?e.setProperty(Object(r.l)(o),n.replace($t,""),"important"):e[o]=n}}const Vt=["Webkit","Moz","ms"],Dt={};const Wt="http://www.w3.org/1999/xlink";let qt=Date.now;"undefined"!=typeof document&&qt()>document.createEvent("Event").timeStamp&&(qt=()=>performance.now());let Ht=0;const Gt=Promise.resolve(),Kt=()=>{Ht=0};function Jt(e,t,n,r){e.addEventListener(t,n,r)}function Zt(e,t,n,o,i=null){const c=e._vei||(e._vei={}),s=c[t];if(o&&s)s.value=o;else{const[n,l]=function(e){let t;if(Qt.test(e)){let n;for(t={};n=e.match(Qt);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e.slice(2).toLowerCase(),t]}(t);if(o){Jt(e,n,c[t]=function(e,t){const n=e=>{(e.timeStamp||qt())>=n.attached-1&&le(function(e,t){if(Object(r.n)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>Ht||(Gt.then(Kt),Ht=qt()))(),n}(o,i),l)}else s&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,s,l),c[t]=void 0)}}const Qt=/(?:Once|Passive|Capture)$/;const Xt=/^on[a-z]/;const Yt=(e,{slots:t})=>Nt(ct,tn(e),t);Yt.displayName="Transition";const en={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yt.props=Object(r.h)({},ct.props,en);function tn(e){let{name:t="v",type:n,css:o=!0,duration:i,enterFromClass:c=t+"-enter-from",enterActiveClass:s=t+"-enter-active",enterToClass:l=t+"-enter-to",appearFromClass:a=c,appearActiveClass:u=s,appearToClass:f=l,leaveFromClass:p=t+"-leave-from",leaveActiveClass:d=t+"-leave-active",leaveToClass:h=t+"-leave-to"}=e;const b={};for(const t in e)t in en||(b[t]=e[t]);if(!o)return b;const g=function(e){if(null==e)return null;if(Object(r.t)(e))return[nn(e.enter),nn(e.leave)];{const t=nn(e);return[t,t]}}(i),v=g&&g[0],m=g&&g[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:O,onLeave:j,onLeaveCancelled:S,onBeforeAppear:C=_,onAppear:w=y,onAppearCancelled:x=O}=b,k=(e,t,n)=>{on(e,t?f:l),on(e,t?u:s),n&&n()},E=(e,t)=>{on(e,h),on(e,d),t&&t()},A=e=>(t,r)=>{const o=e?w:y,i=()=>k(t,e,r);o&&o(t,i),cn(()=>{on(t,e?a:c),rn(t,e?f:l),o&&o.length>1||(v?setTimeout(i,v):sn(t,n,i))})};return Object(r.h)(b,{onBeforeEnter(e){_&&_(e),rn(e,s),rn(e,c)},onBeforeAppear(e){C&&C(e),rn(e,u),rn(e,a)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const r=()=>E(e,t);rn(e,d),rn(e,p),cn(()=>{on(e,p),rn(e,h),j&&j.length>1||(m?setTimeout(r,m):sn(e,n,r))}),j&&j(e,r)},onEnterCancelled(e){k(e,!1),O&&O(e)},onAppearCancelled(e){k(e,!0),x&&x(e)},onLeaveCancelled(e){E(e),S&&S(e)}})}function nn(e){return Object(r.H)(e)}function rn(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function on(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function cn(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}function sn(e,t,n){const{type:r,timeout:o,propCount:i}=ln(e,t);if(!r)return n();const c=r+"end";let s=0;const l=()=>{e.removeEventListener(c,a),n()},a=t=>{t.target===e&&++s>=i&&l()};setTimeout(()=>{s<i&&l()},o+1),e.addEventListener(c,a)}function ln(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r("transitionDelay"),i=r("transitionDuration"),c=an(o,i),s=r("animationDelay"),l=r("animationDuration"),a=an(s,l);let u=null,f=0,p=0;"transition"===t?c>0&&(u="transition",f=c,p=i.length):"animation"===t?a>0&&(u="animation",f=a,p=l.length):(f=Math.max(c,a),u=f>0?c>a?"transition":"animation":null,p=u?"transition"===u?i.length:l.length:0);return{type:u,timeout:f,propCount:p,hasTransform:"transition"===u&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}function an(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>un(t)+un(e[n])))}function un(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}new WeakMap,new WeakMap;Object(r.h)({patchProp:(e,t,n,o,i=!1,c,s,l,a)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}(e,o,i);break;case"style":!function(e,t,n){const o=e.style;if(n)if(Object(r.z)(n))t!==n&&(o.cssText=n);else{for(const e in n)zt(o,e,n[e]);if(t&&!Object(r.z)(t))for(const e in t)null==n[e]&&zt(o,e,"")}else e.removeAttribute("style")}(e,n,o);break;default:Object(r.u)(t)?Object(r.s)(t)||Zt(e,t,0,o,s):function(e,t,n,o){if(o)return"innerHTML"===t||!!(t in e&&Xt.test(t)&&Object(r.o)(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t&&"string"==typeof n)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if(Xt.test(t)&&Object(r.z)(n))return!1;return t in e}(e,t,o,i)?function(e,t,n,r,o,i,c){if("innerHTML"===t||"textContent"===t)return r&&c(r,o,i),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName)if(""===n&&"boolean"==typeof e[t])e[t]=!0;else if(null==n&&"string"==typeof e[t])e[t]="",e.removeAttribute(t);else try{e[t]=n}catch(e){0}else{e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t)}}(e,t,o,c,s,l,a):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),function(e,t,n,o){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Wt,t.slice(6,t.length)):e.setAttributeNS(Wt,t,n);else{const o=Object(r.y)(t);null==n||o&&!1===n?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}(e,t,o,i))}},forcePatchProp:(e,t)=>"value"===t},Ut);var fn={functional:!0,props:{tag:{type:String,required:!1,default:"p"},text:{type:String,required:!0},class:{type:String,required:!1,default:""}},setup:function(e){return function(){return Nt(e.tag,{class:e.class},e.text.split("\n").reduce((function(e,t){return Array.isArray(e)?e.concat([Nt("br"),t]):[e,Nt("br"),t]}),[]))}}};t.default=fn}])}));