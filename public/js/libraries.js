/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y){'use strict';function G(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.5.11/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function la(a){if(null==a||Ya(a))return!1;if(I(a)||D(a)||F&&a instanceof
F)return!0;var b="length"in Object(a)&&a.length;return ba(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(C(a))for(c in a)"prototype"===c||"length"===c||"name"===c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(I(a)||la(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(xc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===
typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function yc(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function zc(a){return function(b,d){a(d,b)}}function ke(){return++sb}function Rb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(E(g)||C(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&E(n)?ja(n)?a[m]=new Date(n.valueOf()):
Za(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Sb(n)?a[m]=n.clone():(E(a[m])||(a[m]=I(n)?[]:{}),Rb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Rb(a,va.call(arguments,1),!1)}function le(a){return Rb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Tb(a,b){return R(Object.create(a),b)}function w(){}function $a(a){return a}function ha(a){return function(){return a}}function Ac(a){return C(a.toString)&&a.toString!==ma}function z(a){return"undefined"===
typeof a}function x(a){return"undefined"!==typeof a}function E(a){return null!==a&&"object"===typeof a}function xc(a){return null!==a&&"object"===typeof a&&!Bc(a)}function D(a){return"string"===typeof a}function ba(a){return"number"===typeof a}function ja(a){return"[object Date]"===ma.call(a)}function C(a){return"function"===typeof a}function Za(a){return"[object RegExp]"===ma.call(a)}function Ya(a){return a&&a.window===a}function ab(a){return a&&a.$evalAsync&&a.$watch}function Ka(a){return"boolean"===
typeof a}function me(a){return a&&ba(a.length)&&ne.test(ma.call(a))}function Sb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function oe(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function bb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function sa(a,b){function d(a,b){var d=b.$$hashKey,e;if(I(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(xc(a))for(e in a)b[e]=c(a[e]);else if(a&&
"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!E(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Ya(a)||ab(a))throw xa("cpws");var b=!1,c=f(a);void 0===c&&(c=I(a)?[]:Object.create(Bc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(C(a.cloneNode))return a.cloneNode(!0)}
var e=[],g=[];if(b){if(me(b)||"[object ArrayBuffer]"===ma.call(b))throw xa("cpta");if(a===b)throw xa("cpi");I(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ja(a))return ja(b)?na(a.getTime(),
b.getTime()):!1;if(Za(a))return Za(b)?a.toString()===b.toString():!1;if(ab(a)||ab(b)||Ya(a)||Ya(b)||I(b)||ja(b)||Za(b))return!1;d=V();for(c in a)if("$"!==c.charAt(0)&&!C(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!C(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(va.call(b,d))}function db(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!C(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function pe(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Ya(b)?d="$WINDOW":b&&y.document===b?d="$DOCUMENT":ab(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return ba(b)||(b=b?2:null),JSON.stringify(a,pe,b)}function Cc(a){return D(a)?JSON.parse(a):a}function Dc(a,b){a=a.replace(qe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return ia(d)?b:d}function Ub(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Dc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===La?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function Ec(a){try{return decodeURIComponent(a)}catch(b){}}function Fc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Ec(f),x(f)&&(e=x(e)?Ec(e):!0,ua.call(b,f)?I(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Vb(a){var b=[];q(a,function(a,c){I(a)?q(a,function(a){b.push(oa(c,!0)+(!0===a?"":"="+oa(a,!0)))}):b.push(oa(c,!0)+(!0===a?"":"="+oa(a,!0)))});return b.length?b.join("&"):""}function tb(a){return oa(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function oa(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function re(a,b){var d,c,f=Oa.length;for(c=0;c<f;++c)if(d=Oa[c]+b,D(d=a.getAttribute(d)))return d;return null}function se(a,b){var d,c,f={};q(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Oa,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(te?(f.strictDi=null!==re(d,"strict-di"),
b(d,c?[c]:[],f)):y.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Gc(a,b,d){E(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===y.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;y&&f.test(y.name)&&(d.debugInfoEnabled=!0,y.name=y.name.replace(f,""));if(y&&!e.test(y.name))return c();y.name=y.name.replace(e,"");$.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};C($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function ue(){y.name=
"NG_ENABLE_DEBUG_INFO!"+y.name;y.location.reload()}function ve(a){a=$.element(a).injector();if(!a)throw xa("test");return a.get("$$testability")}function Hc(a,b){b=b||"_";return a.replace(we,function(a,c){return(c?b:"")+a.toLowerCase()})}function xe(){var a;if(!Ic){var b=ub();(za=z(b)?y.jQuery:b?y[b]:void 0)&&za.fn.on?(F=za,R(za.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=za.cleanData,za.cleanData=function(b){for(var c,
f=0,e;null!=(e=b[f]);f++)(c=za._data(e,"events"))&&c.$destroy&&za(e).triggerHandler("$destroy");a(b)}):F=W;$.element=F;Ic=!0}}function gb(a,b,d){if(!a)throw xa("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&I(a)&&(a=a[a.length-1]);gb(C(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function Jc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
b[g],a&&(a=(f=a)[c]);return!d&&C(a)?db(f,a):a}function vb(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=F(va.call(a,0,f))),c.push(b);return c||a}function V(){return Object.create(null)}function ye(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=G("$injector"),c=G("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||G;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&
(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return H}}function b(a,d){return function(b,f){f&&C(f)&&(f.$$moduleName=e);c.push([a,d,arguments]);return H}}if(!g)throw d("nomod",e);var c=[],f=[],r=[],s=a("$injector","invoke","push",f),H={_invokeQueue:c,_configBlocks:f,_runBlocks:r,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:s,run:function(a){r.push(a);return this}};h&&s(h);return H})}})}function ka(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(E(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];
return b||a}function ze(a){R(a,{bootstrap:Gc,copy:sa,extend:R,merge:le,equals:na,element:F,forEach:q,injector:fb,noop:w,bind:db,toJson:eb,fromJson:Cc,identity:$a,isUndefined:z,isDefined:x,isString:D,isFunction:C,isObject:E,isNumber:ba,isElement:Sb,isArray:I,version:Ae,isDate:ja,lowercase:Q,uppercase:wb,callbacks:{$$counter:0},getTestability:ve,$$minErr:G,$$csp:da,reloadWithDebugInfo:ue});Wb=ye(y);Wb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Be});a.provider("$compile",Kc).directive({a:Ce,
input:Lc,textarea:Lc,form:De,script:Ee,select:Fe,option:Ge,ngBind:He,ngBindHtml:Ie,ngBindTemplate:Je,ngClass:Ke,ngClassEven:Le,ngClassOdd:Me,ngCloak:Ne,ngController:Oe,ngForm:Pe,ngHide:Qe,ngIf:Re,ngInclude:Se,ngInit:Te,ngNonBindable:Ue,ngPluralize:Ve,ngRepeat:We,ngShow:Xe,ngStyle:Ye,ngSwitch:Ze,ngSwitchWhen:$e,ngSwitchDefault:af,ngOptions:bf,ngTransclude:cf,ngModel:df,ngList:ef,ngChange:ff,pattern:Mc,ngPattern:Mc,required:Nc,ngRequired:Nc,minlength:Oc,ngMinlength:Oc,maxlength:Pc,ngMaxlength:Pc,ngValue:gf,
ngModelOptions:hf}).directive({ngInclude:jf}).directive(xb).directive(Qc);a.provider({$anchorScroll:kf,$animate:lf,$animateCss:mf,$$animateJs:nf,$$animateQueue:of,$$AnimateRunner:pf,$$animateAsyncRun:qf,$browser:rf,$cacheFactory:sf,$controller:tf,$document:uf,$exceptionHandler:vf,$filter:Rc,$$forceReflow:wf,$interpolate:xf,$interval:yf,$http:zf,$httpParamSerializer:Af,$httpParamSerializerJQLike:Bf,$httpBackend:Cf,$xhrFactory:Df,$jsonpCallbacks:Ef,$location:Ff,$log:Gf,$parse:Hf,$rootScope:If,$q:Jf,
$$q:Kf,$sce:Lf,$sceDelegate:Mf,$sniffer:Nf,$templateCache:Of,$templateRequest:Pf,$$testability:Qf,$timeout:Rf,$window:Sf,$$rAF:Tf,$$jqLite:Uf,$$HashMap:Vf,$$cookieReader:Wf})}])}function hb(a){return a.replace(Xf,function(a,d,c,f){return f?c.toUpperCase():c}).replace(Yf,"Moz$1")}function Sc(a){a=a.nodeType;return 1===a||!a||9===a}function Tc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if(Xb.test(a)){d=f.appendChild(b.createElement("div"));c=(Zf.exec(a)||["",""])[1].toLowerCase();c=pa[c]||pa._default;
d.innerHTML=c[1]+a.replace($f,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=cb(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function Uc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function W(a){if(a instanceof W)return a;var b;D(a)&&(a=Y(a),b=!0);if(!(this instanceof W)){if(b&&"<"!==a.charAt(0))throw Yb("nosel");return new W(a)}if(b){b=y.document;var d;a=(d=ag.exec(a))?
[b.createElement(d[1])]:(d=Tc(a,b))?d.childNodes:[]}Vc(this,a)}function Zb(a){return a.cloneNode(!0)}function yb(a,b){b||ib(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)ib(d[c])}function Wc(a,b,d,c){if(x(c))throw Yb("offargs");var f=(c=zb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];x(d)&&bb(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,e,!1),delete f[b])};q(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in f)"$destroy"!==
b&&a.removeEventListener(b,e,!1),delete f[b]}function ib(a,b){var d=a.ng339,c=d&&jb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Wc(a)),delete jb[d],a.ng339=void 0))}function zb(a,b){var d=a.ng339,d=d&&jb[d];b&&!d&&(a.ng339=d=++bg,d=jb[d]={events:{},data:{},handle:void 0});return d}function $b(a,b,d){if(Sc(a)){var c=x(d),f=!c&&b&&!E(b),e=!b;a=(a=zb(a,!f))&&a.data;if(c)a[b]=d;else{if(e)return a;if(f)return a&&a[b];R(a,b)}}}function Bb(a,b){return a.getAttribute?
-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",Y((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Y(b)+" "," ")))})}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=Y(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",Y(d))}}function Vc(a,b){if(b)if(b.nodeType)a[a.length++]=
b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Xc(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(x(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Yc(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}
function cg(a,b){b=b||y;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",a)}function Zc(a,b){var d=Gb[b.toLowerCase()];return d&&$c[wa(a)]&&d}function dg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(z(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||eg;1<g&&(e=ka(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function eg(a,b,d){d.call(a,b)}function fg(a,b,d){var c=b.relatedTarget;c&&(c===a||gg.call(a,c))||d.call(a,b)}function Uf(){this.$get=function(){return R(W,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);
return Cb(a,b)}})}}function Aa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ke)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function ad(a){a=(Function.prototype.toString.call(a)+" ").replace(hg,"");return a.match(ig)||a.match(jg)}function kg(a){return(a=ad(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,
c){if(E(b))q(b,zc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(C(b)||I(b))b=r.instantiate(b);if(!b.$get)throw Ba("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=u.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){gb(z(a)||I(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,
!0);try{D(a)?(c=Wb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(r.invoke(a)):I(a)?b.push(r.invoke(a)):Qa(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=
c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=11>=Ia?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,
c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(e),service:d(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,ha(b),!1)}),constant:d(function(a,b){Ra(a,"constant");
n[a]=b;s[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=u.invoke(d,c);return u.invoke(b,null,{$delegate:a})}}}},r=n.$injector=h(n,function(a,b){$.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},H=h(s,function(a,b){var c=r.get(a+"Provider",b);return u.invoke(c.$get,c,void 0,a)}),u=H;n.$injectorProvider={$get:ha(H)};var p=g(a),u=H.get("$injector");u.strictDi=b;q(p,function(a){a&&u.invoke(a)});return u}function kf(){var a=!0;this.disableAutoScrolling=
function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():Sb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):ba(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=D(a)?a:ba(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?
e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||cg(function(){c.$evalAsync(g)})});return g}]}function kb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function lg(a){D(a)&&(a=a.split(" "));var b=V();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ca(a){return E(a)?a:{}}function mg(a,b,d,c){function f(a){try{a.apply(null,
va.call(arguments,1))}finally{if(H--,0===H)for(;u.length;)try{u.pop()()}catch(b){d.error(b)}}}function e(){N=null;g();h()}function g(){p=L();p=z(p)?null:p;na(p,J)&&(p=J);J=p}function h(){if(A!==k.url()||K!==p)A=k.url(),K=p,q(O,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,r=a.clearTimeout,s={};k.isMock=!1;var H=0,u=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){H++};k.notifyWhenNoOutstandingRequests=function(a){0===H?a():u.push(a)};var p,
K,A=l.href,v=b.find("base"),N=null,L=c.history?function(){try{return m.state}catch(a){}}:w;g();K=p;k.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=K===e;if(A===b&&(!c.history||f))return k;var h=A&&Ga(A)===Ga(b);A=b;K=e;!c.history||h&&f?(h||(N=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(N=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),K=p);N&&(N=b);return k}return N||l.href.replace(/%27/g,
"'")};k.state=function(){return p};var O=[],M=!1,J=null;k.onUrlChange=function(b){if(!M){if(c.history)F(a).on("popstate",e);F(a).on("hashchange",e);M=!0}O.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=v.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};k.defer=function(a,b){var c;H++;c=n(function(){delete s[c];f(a)},b||0);s[c]=!0;return c};k.defer.cancel=function(a){return s[a]?(delete s[a],r(a),
f(w),!0):!1}}function rf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new mg(a,c,b,d)}]}function sf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(r?r===a&&(r=a.n):r=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw G("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=V(),l=c&&c.capacity||Number.MAX_VALUE,m=V(),n=null,r=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]=
{key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(r.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===r&&(r=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=V();g=0;m=V();n=r=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};
a.get=function(a){return b[a]};return a}}function Of(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Kc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=V();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||
b!==Q(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!I(b)&&E(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=oe("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=V();this.directive=function A(b,d){gb(b,"name");Ra(b,"directive");D(b)?(c(b),gb(d,"directiveFactory"),e.hasOwnProperty(b)||
(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);C(h)?h={compile:ha(h)}:!h.compile&&h.link&&(h.compile=ha(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!D(l)||!/[EACM]/.test(l)))throw fa("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,zc(A));return this};this.component=function(a,b){function c(a){function e(b){return C(b)||
I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:ng(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,C(d)&&(d[b]=a))});c.$inject=["$injector"];
return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var r=!0;this.debugInfoEnabled=function(a){return x(a)?(r=a,this):r};var s=!0;this.preAssignBindingsEnabled=function(a){return x(a)?(s=a,this):s};var H=10;this.onChangesTtl=function(a){return arguments.length?(H=a,this):
H};var u=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};var p=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(p=a,this):p};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,f,n,M,J,B,T,S){function P(){try{if(!--xa)throw da=void 0,fa("infchng",H);J.$apply(function(){for(var a=[],b=0,c=da.length;b<c;++b)try{da[b]()}catch(d){a.push(d)}da=
void 0;if(a.length)throw a;})}finally{xa++}}function t(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function qa(a,b,c){ta.innerHTML="<span "+b+">";b=ta.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Ja(a,b){try{a.addClass(b)}catch(c){}}function ca(a,b,c,d,e){a instanceof F||(a=F(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===La&&k.nodeValue.match(f)&&
Uc(k,a[g]=y.document.createElement("span"))}var l=Ma(a,b,a,c,d,e);ca.$$addScopeClass(a);var m=null;return function(b,c,d){gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?F(ha(m,F("<div>").append(a).html())):c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+
h+"Controller",g[h].instance);ca.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,s,A;if(p)for(A=Array(c.length),m=0;m<h.length;m+=3)f=h[m],A[f]=c[f];else A=c;m=0;for(n=h.length;m<n;)k=A[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ca.$$addScopeInfo(F(k),l)):l=a,s=c.transcludeOnThisElement?G(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?G(a,b):null,c(f,l,k,d,s)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,n,p,s=0;s<a.length;s++){k=
new t;l=cc(a[s],[],k,0===s?d:void 0,e);(f=l.length?W(l,a[s],k,b,c,null,[],[],f):null)&&f.scope&&ca.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[s].childNodes)||!m.length?null:Ma(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(s,f,k),n=!0,p=p||f;f=null}return n?g:null}function G(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=V(),
f;for(f in b.$$slots)e[f]=b.$$slots[f]?G(a,b.$$slots[f],c):null;return d}function cc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=wa(a);U(b,Da(g),"E",d,e);for(var k,l,m,n,p=a.attributes,s=0,A=p&&p.length;s<A;s++){var r=!1,u=!1;k=p[s];l=k.name;m=Y(k.value);k=Da(l);(n=Ga.test(k))&&(l=l.replace(bd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ha))&&Z(k[1])&&(r=l,u=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Da(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=
m,Zc(a,k)&&(c[k]=!0);pa(a,b,m,k,n);U(b,k,"A",d,e,r,u)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Fa)break;f=a.className;E(f)&&(f=f.animVal);if(D(f)&&""!==f)for(;a=h.exec(f);)k=Da(a[2]),U(b,k,"C",d,e)&&(c[k]=Y(a[3])),f=f.substr(a.index+a[0].length);break;case La:if(11===Ia)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===La;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ka(b,a.nodeValue);break;case 8:if(!Ea)break;
Ta(a,b,c,d,e)}b.sort(ja);return b}function Ta(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Da(f[1]);U(b,h,"M",d,e)&&(c[h]=Y(f[2]))}}catch(k){}}function cd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function dd(a,b,c){return function(d,e,f,g,h){e=cd(e[0],b,c);return a(d,e,f,g,h)}}function dc(a,b,c,d,e,f){var g;return a?
ca(b,c,d,e,f):function(){g||(g=ca(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function W(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=dd(a,c,d));a.require=v.require;a.directiveName=S;if(u===v||v.$$isolateScope)a=ra(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=dd(b,c,d));b.require=v.require;b.directiveName=S;if(u===v||v.$$isolateScope)b=ra(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;ab(a)||(d=c,c=b,b=a,a=void 0);H&&(e=J);c||(c=H?P.parent():P);if(d){var f=
l.$$slots[d];if(f)return f(a,b,e,c,qa);if(z(f))throw fa("noslot",d,ya(P));}else return l(a,b,e,c,qa)}var p,v,B,M,T,J,S,P;b===f?(g=d,P=d.$$element):(P=F(f),g=new t(P,d));T=e;u?M=e.$new(!0):A&&(T=e.$parent);l&&(S=m,S.$$boundTransclude=l,S.isSlotFilled=function(a){return!!l.$$slots[a]});r&&(J=ba(P,g,S,r,M,e,u));u&&(ca.$$addScopeInfo(P,M,!0,!(O&&(O===u||O===u.$$originalDirective))),ca.$$addScopeClass(P,!0),M.$$isolateBindings=u.$$isolateBindings,v=la(e,g,M,M.$$isolateBindings,u),v.removeWatches&&M.$on("$destroy",
v.removeWatches));for(p in J){v=r[p];B=J[p];var L=v.$$bindings.bindToController;if(s){B.bindingInfo=L?la(T,g,B.instance,L,v):{};var ac=B();ac!==B.instance&&(B.instance=ac,P.data("$"+v.name+"Controller",ac),B.bindingInfo.removeWatches&&B.bindingInfo.removeWatches(),B.bindingInfo=la(T,g,B.instance,L,v))}else B.instance=B(),P.data("$"+v.name+"Controller",B.instance),B.bindingInfo=la(T,g,B.instance,L,v)}q(r,function(a,b){var c=a.require;a.bindToController&&!I(c)&&E(c)&&R(J[b].instance,X(b,c,P,J))});q(J,
function(a){var b=a.instance;if(C(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(C(b.$onInit))try{b.$onInit()}catch(e){c(e)}C(b.$doCheck)&&(T.$watch(function(){b.$doCheck()}),b.$doCheck());C(b.$onDestroy)&&T.$on("$destroy",function(){b.$onDestroy()})});p=0;for(v=h.length;p<v;p++)B=h[p],sa(B,B.isolateScope?M:e,P,g,B.require&&X(B.directiveName,B.require,P,J),S);var qa=e;u&&(u.template||null===u.templateUrl)&&(qa=M);a&&a(qa,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)B=
k[p],sa(B,B.isolateScope?M:e,P,g,B.require&&X(B.directiveName,B.require,P,J),S);q(J,function(a){a=a.instance;C(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,A=l.newScopeDirective,r=l.controllerDirectives,u=l.newIsolateScopeDirective,O=l.templateDirective,M=l.nonTlbTranscludeDirective,T=!1,J=!1,H=l.hasElementTranscludeDirective,B=d.$$element=F(b),v,S,P,L=e,qa,x=!1,Ja=!1,w,y=0,D=a.length;y<D;y++){v=a[y];var Ta=v.$$start,Ma=v.$$end;Ta&&(B=cd(b,Ta,Ma));P=void 0;if(p>v.priority)break;
if(w=v.scope)v.templateUrl||(E(w)?($("new/isolated scope",u||A,v,B),u=v):$("new/isolated scope",u,v,B)),A=A||v;S=v.name;if(!x&&(v.replace&&(v.templateUrl||v.template)||v.transclude&&!v.$$tlb)){for(w=y+1;x=a[w++];)if(x.transclude&&!x.$$tlb||x.replace&&(x.templateUrl||x.template)){Ja=!0;break}x=!0}!v.templateUrl&&v.controller&&(r=r||V(),$("'"+S+"' controller",r[S],v,B),r[S]=v);if(w=v.transclude)if(T=!0,v.$$tlb||($("transclusion",M,v,B),M=v),"element"===w)H=!0,p=v.priority,P=B,B=d.$$element=F(ca.$$createComment(S,
d[S])),b=B[0],ga(f,va.call(P,0),b),P[0].$$parentNode=P[0].parentNode,L=dc(Ja,P,e,p,g&&g.name,{nonTlbTranscludeDirective:M});else{var G=V();P=F(Zb(b)).contents();if(E(w)){P=[];var Q=V(),bc=V();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;G[b]=null;bc[b]=c});q(B.contents(),function(a){var b=Q[Da(wa(a))];b?(bc[b]=!0,G[b]=G[b]||[],G[b].push(a)):P.push(a)});q(bc,function(a,b){if(!a)throw fa("reqslot",b);});for(var U in G)G[U]&&(G[U]=dc(Ja,G[U],e))}B.empty();L=dc(Ja,P,e,void 0,
void 0,{needsNewScope:v.$$isolateScope||v.$$newScope});L.$$slots=G}if(v.template)if(J=!0,$("template",O,v,B),O=v,w=C(v.template)?v.template(B,d):v.template,w=Ca(w),v.replace){g=v;P=Xb.test(w)?ed(ha(v.templateNamespace,Y(w))):[];b=P[0];if(1!==P.length||1!==b.nodeType)throw fa("tplrt",S,"");ga(f,B,b);D={$attr:{}};w=cc(b,[],D);var og=a.splice(y+1,a.length-(y+1));(u||A)&&aa(w,u,A);a=a.concat(w).concat(og);ea(d,D);D=a.length}else B.html(w);if(v.templateUrl)J=!0,$("template",O,v,B),O=v,v.replace&&(g=v),
n=ia(a.splice(y,a.length-y),B,d,f,T&&L,h,k,{controllerDirectives:r,newScopeDirective:A!==v&&A,newIsolateScopeDirective:u,templateDirective:O,nonTlbTranscludeDirective:M}),D=a.length;else if(v.compile)try{qa=v.compile(B,d,L);var Z=v.$$originalDirective||v;C(qa)?m(null,db(Z,qa),Ta,Ma):qa&&m(db(Z,qa.pre),db(Z,qa.post),Ta,Ma)}catch(da){c(da,ya(B))}v.terminal&&(n.terminal=!0,p=Math.max(p,v.priority))}n.scope=A&&!0===A.scope;n.transcludeOnThisElement=T;n.templateOnThisElement=J;n.transclude=L;l.hasElementTranscludeDirective=
H;return n}function X(a,b,c,d){var e;if(D(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(I(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=X(a,b[g],c,d);else E(b)&&(e={},q(b,function(b,f){e[f]=X(a,b,c,d)}));return e||null}function ba(a,b,c,d,e,f,g){var h=V(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,
$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=M(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Tb(a[d],{$$isolateScope:b,$$newScope:c})}function U(b,c,f,g,h,k,l){if(c===h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Tb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var s=
m=c,r=c.name,v={isolateScope:null,bindToController:null};E(s.scope)&&(!0===s.bindToController?(v.bindToController=d(s.scope,r,!0),v.isolateScope={}):v.isolateScope=d(s.scope,r,!1));E(s.bindToController)&&(v.bindToController=d(s.bindToController,r,!0));if(v.bindToController&&!s.controller)throw fa("noctrl",r);m=m.$$bindings=v;E(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=
c[d],b.multiElement)return!0;return!1}function ea(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ia(a,b,c,d,e,g,h,k){var l=[],m,n,p=b[0],s=a.shift(),A=Tb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),r=C(s.templateUrl)?s.templateUrl(b,c):s.templateUrl,v=s.templateNamespace;
b.empty();f(r).then(function(f){var u,B;f=Ca(f);if(s.replace){f=Xb.test(f)?ed(ha(v,Y(f))):[];u=f[0];if(1!==f.length||1!==u.nodeType)throw fa("tplrt",s.name,r);f={$attr:{}};ga(d,b,u);var O=cc(u,[],f);E(s.scope)&&aa(O,!0);a=O.concat(a);ea(c,f)}else u=p,b.html(f);a.unshift(A);m=W(a,u,c,e,b,s,g,h,k);q(d,function(a,c){a===u&&(d[c]=b[0])});for(n=Ma(b[0].childNodes,e);l.length;){f=l.shift();B=l.shift();var M=l.shift(),T=l.shift(),O=b[0];if(!f.$$destroyed){if(B!==p){var J=B.className;k.hasElementTranscludeDirective&&
s.replace||(O=Zb(u));ga(M,F(B),O);Ja(F(O),J)}B=m.transcludeOnThisElement?G(f,m.transclude,T):T;m(n,f,O,d,B)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=G(b,m.transclude,e)),m(n,b,c,d,a)))}}function ja(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),
a,ya(d));}function ka(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ca.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ca.$$addBindingClass(e);ca.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=y.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===
b)return B.HTML;var c=wa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return B.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b)return B.RESOURCE_URL}function pa(a,c,d,e,f){var g=oa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===wa(a))throw fa("selmulti",ya(a));c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=V());if(m.test(e))throw fa("nodomevents");var k=f[e];k!==d&&(l=
k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ga(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=y.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);
F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ra(a,b){return R(function(){return a.apply(null,arguments)},a,b)}function sa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function la(a,c,d,e,f){function g(b,c,e){!C(d.$onChanges)||c===e||c!==c&&e!==e||(da||(a.$$postDigest(P),da=[]),m||(m={},da.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Hb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],
l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,s,A,r,u;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(D(a)||Ka(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;s=c[m];D(s)?d[h]=b(s)(a):Ka(s)&&(d[h]=s);l[h]=new Hb(ec,d[h]);k.push(p);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);u=A.literal?na:function(a,b){return a===b||a!==a&&b!==b};r=A.assign||function(){s=d[h]=A(a);throw fa("nonassign",c[m],m,f.name);};s=
d[h]=A(a);p=function(b){u(b,d[h])||(u(b,s)?r(a,b=d[h]):d[h]=b);return s=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,A.literal);k.push(p);break;case "<":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);var B=A.literal,M=d[h]=A(a);l[h]=new Hb(ec,d[h]);p=a.$watch(A,function(a,b){if(b===a){if(b===M||B&&na(b,M))return;b=M}g(h,a,b);d[h]=a},B);k.push(p);break;case "&":A=c.hasOwnProperty(m)?n(c[m]):w;if(A===w&&p)break;d[h]=function(b){return A(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var za=/^\w/,ta=y.document.createElement("div"),Ea=u,Fa=p,xa=H,da;t.prototype={$normalize:Da,$addClass:function(a){a&&0<a.length&&T.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&T.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=fd(a,b);c&&c.length&&T.addClass(this.$$element,c);(c=fd(b,a))&&c.length&&T.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
Zc(this.$$element[0],a),g=gd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Hc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=S(b,"src"===a);else if("img"===f&&"srcset"===a&&x(b)){for(var f="",g=Y(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+S(Y(g[m]),!0),f=f+(" "+Y(g[m+1]));g=Y(g[2*
l]).split(/\s/);f+=S(Y(g[0]),!0);2===g.length&&(f+=" "+Y(g[1]));this[a]=b=f}!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):za.test(e)?this.$$element.attr(e,b):qa(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=V()),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){bb(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),
Ca="{{"===Aa&&"}}"===Ba?$a:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ba)},Ga=/^ngAttr[A-Z]/,Ha=/^(.+)Start$/;ca.$$addBindingInfo=r?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;ca.$$addBindingClass=r?function(a){Ja(a,"ng-binding")}:w;ca.$$addScopeInfo=r?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;ca.$$addScopeClass=r?function(a,b){Ja(a,b?"ng-isolate-scope":"ng-scope")}:w;ca.$$createComment=function(a,
b){var c="";r&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return y.document.createComment(c)};return ca}]}function Hb(a,b){this.previousValue=a;this.currentValue=b}function Da(a){return hb(a.replace(bd,""))}function fd(a,b){var d="",c=a.split(/\s+/),f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function ed(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===La&&""===d.nodeValue.trim())&&
pg.call(a,b,1)}return a}function ng(a,b){if(b&&D(b))return b;if(D(a)){var d=hd.exec(a);if(d)return d[3]}}function tf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");E(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!E(a.$scope))throw G("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&D(k)&&(n=k);if(D(e)){k=e.match(hd);
if(!k)throw id("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Jc(g.$scope,m,!0)||(b?Jc(c,m,!0):void 0);if(!e)throw id("ctrlreg",m);Qa(e,m,!0)}if(h)return h=(I(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,l,m||e.name),R(function(){var a=d.invoke(e,l,g,m);a!==l&&(E(a)||C(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function uf(){this.$get=["$window",function(a){return F(a.document)}]}function vf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function fc(a){return E(a)?ja(a)?a.toISOString():eb(a):a}function Af(){this.$get=function(){return function(a){if(!a)return"";var b=[];yc(a,function(a,c){null===a||z(a)||(I(a)?q(a,function(a){b.push(oa(c)+"="+oa(fc(a)))}):b.push(oa(c)+"="+oa(fc(a))))});return b.join("&")}}}function Bf(){this.$get=function(){return function(a){function b(a,f,e){null===a||z(a)||(I(a)?q(a,function(a,c){b(a,f+"["+(E(a)?c:"")+"]")}):E(a)&&!ja(a)?yc(a,
function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(oa(f)+"="+oa(fc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function gc(a,b){if(D(a)){var d=a.replace(qg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(jd))||(c=(c=d.match(rg))&&sg[c[0]].test(d));c&&(a=Cc(d))}}return a}function kd(a){var b=V(),d;D(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=Q(Y(a.substr(0,d)));a=Y(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):E(a)&&q(a,function(a,d){var e=Q(d),g=Y(a);e&&
(b[e]=b[e]?b[e]+", "+g:g)});return b}function ld(a){var b;return function(d){b||(b=kd(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function md(a,b,d,c){if(C(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function zf(){var a=this.defaults={transformResponse:[gc],transformRequest:[function(a){return E(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ka(hc),put:ka(hc),
patch:ka(hc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(f,e,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;
return a}function e(a,b){var c,d={};q(a,function(a,e){C(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=R({},a);b.data=md(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!E(b))throw G("$http")("badreq",b);if(!D(b.url))throw G("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=R({},b.headers),
f,g,h,c=R({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,ka(b))}(b);g.method=wb(g.method);g.paramSerializer=D(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],s=k.when(g);q(H,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,a.responseError)});s=c(s,h);s=s.then(function(b){var c=b.headers,d=md(b.data,ld(c),void 0,b.transformRequest);z(d)&&
q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f)});s=c(s,m);d?(s.success=function(a){Qa(a,"fn");s.then(function(b){a(b.data,b.status,b.headers,g)});return s},s.error=function(a){Qa(a,"fn");s.then(null,function(b){a(b.data,b.status,b.headers,g)});return s}):(s.success=nd("success"),s.error=nd("error"));return s}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}
b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}J&&(200<=a&&300>a?J.put(S,[a,c,kd(d),e]):J.remove(S));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:ld(d),config:c,statusText:e})}function H(a){n(a.data,a.status,ka(a.headers()),a.statusText)}function L(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var O=k.defer(),M=O.promise,
J,B,T=c.headers,S=r(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);M.then(L,L);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=E(c.cache)?c.cache:E(a.cache)?a.cache:s);J&&(B=J.get(S),x(B)?B&&C(B.then)?B.then(H,H):I(B)?n(B[1],B[0],ka(B[2]),B[3]):n(B,200,{},"OK"):J.put(S,M));z(B)&&((B=od(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(T[c.xsrfHeaderName||a.xsrfHeaderName]=B),f(c.method,S,d,l,T,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return M}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}var s=g("$http");a.paramSerializer=D(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var H=[];q(c,function(a){H.unshift(D(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(R({},d||{},
{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function Df(){this.$get=function(){return function(){return new y.XMLHttpRequest}}}function Cf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return tg(a,c,a.defer,b,d[0])}]}function tg(a,b,d,c,f){function e(a,b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m,!1);e.removeEventListener("error",
m,!1);f.body.removeChild(e);e=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};e.addEventListener("load",m,!1);e.addEventListener("error",m,!1);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,r,s,H,u){function p(){v&&v();N&&N.abort()}function K(b,c,e,f,g){x(O)&&d.cancel(O);v=N=null;b(c,e,f,g);a.$$completeOutstandingRequest(w)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===Q(f))var A=c.createCallback(h),
v=e(h,A,function(a,b){var d=200===a&&c.getResponse(A);K(l,a,d,"",b);c.removeCallback(A)});else{var N=b(f,h);N.open(f,h,!0);q(m,function(a,b){x(a)&&N.setRequestHeader(b,a)});N.onload=function(){var a=N.statusText||"",b="response"in N?N.response:N.responseText,c=1223===N.status?204:N.status;0===c&&(c=b?200:"file"===ta(h).protocol?404:0);K(l,c,b,N.getAllResponseHeaders(),a)};f=function(){K(l,-1,null,null,"")};N.onerror=f;N.onabort=f;N.ontimeout=f;q(H,function(a,b){N.addEventListener(b,a)});q(u,function(a,
b){N.upload.addEventListener(b,a)});r&&(N.withCredentials=!0);if(s)try{N.responseType=s}catch(L){if("json"!==s)throw L;}N.send(z(k)?null:k)}if(0<n)var O=d(p,n);else n&&C(n.then)&&n.then(p)}}function xf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(r,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();
return d(a)},b,c);return e}function k(e,k,n,p){function r(a){try{var b=a;a=n?f.getTrusted(n,b):f.valueOf(b);var d;if(p&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=eb(a)}d=a}return d}catch(g){c(Ha.interr(e,g))}}if(!e.length||-1===e.indexOf(a)){var A;k||(k=g(e),A=ha(k),A.exp=e,A.expressions=[],A.$$watchDelegate=h);return A}p=!!p;var v,q,L=0,O=[],M=[];A=e.length;for(var J=[],B=[];L<A;)if(-1!==(v=e.indexOf(a,L))&&-1!==(q=e.indexOf(b,v+
l)))L!==v&&J.push(g(e.substring(L,v))),L=e.substring(v+l,q),O.push(L),M.push(d(L,r)),L=q+m,B.push(J.length),J.push("");else{L!==A&&J.push(g(e.substring(L)));break}n&&1<J.length&&Ha.throwNoconcat(e);if(!k||O.length){var T=function(a){for(var b=0,c=O.length;b<c;b++){if(p&&z(a[b]))return;J[B[b]]=a[b]}return J.join("")};return R(function(a){var b=0,d=O.length,f=Array(d);try{for(;b<d;b++)f[b]=M[b](a);return T(f)}catch(g){c(Ha.interr(e,g))}},{exp:e,expressions:O,$$watchDelegate:function(a,b){var c;return a.$watchGroup(M,
function(d,e){var f=T(d);C(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),r=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function yf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){r?e.apply(null,s):e(p)}var r=4<arguments.length,s=r?va.call(arguments,4):[],H=b.setInterval,u=b.clearInterval,p=0,K=x(m)&&!m,A=(K?c:d).defer(),
v=A.promise;l=x(l)?l:0;v.$$intervalId=H(function(){K?f.defer(n):a.$evalAsync(n);A.notify(p++);0<l&&p>=l&&(A.resolve(p),u(v.$$intervalId),delete g[v.$$intervalId]);K||a.$apply()},k);g[v.$$intervalId]=A;return v}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function ic(a){a=a.split("/");for(var b=a.length;b--;)a[b]=tb(a[b]);return a.join("/")}function pd(a,b){var d=ta(a);b.$$protocol=
d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||ug[d.protocol]||null}function qd(a,b){if(vg.test(a))throw lb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=ta(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Fc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ra(a,b){if(b.slice(0,a.length)===a)return b.substr(a.length)}function Ga(a){var b=a.indexOf("#");return-1===
b?a:a.substr(0,b)}function mb(a){return a.replace(/(#.+)|#$/,"$1")}function jc(a,b,d){this.$$html5=!0;d=d||"";pd(a,this);this.$$parse=function(a){var d=ra(b,a);if(!D(d))throw lb("ipthprfx",a,b);qd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Vb(this.$$search),d=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=ic(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),
!0;var e,g;x(e=ra(a,c))?(g=e,g=d&&x(e=ra(d,e))?b+(ra("/",e)||e):a+g):x(e=ra(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function kc(a,b,d){pd(a,this);this.$$parse=function(c){var f=ra(a,c)||ra(b,c),e;z(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",z(f)&&(a=c,this.replace())):(e=ra(d,f),z(e)&&(e=f));qd(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;e.slice(0,f.length)===f&&(e=e.replace(f,""));g.exec(e)||(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Vb(this.$$search),f=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=ic(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ga(a)===Ga(b)?(this.$$parse(b),!0):!1}}function rd(a,b,d){this.$$html5=!0;kc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;a===Ga(c)?e=c:(g=ra(b,c))?e=a+d+g:b===c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Vb(this.$$search),
f=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=ic(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url}}function Ib(a){return function(){return this[a]}}function sd(a,b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Ff(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){if(Ka(a))return b.enabled=a,this;if(E(a)){Ka(a.enabled)&&(b.enabled=a.enabled);Ka(a.requireBase)&&
(b.requireBase=a.requireBase);if(Ka(a.rewriteLinks)||D(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),r;if(b.enabled){if(!m&&b.requireBase)throw lb("nobase");
r=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?jc:rd}else r=Ga(n),m=kc;var s=r.substr(0,Ga(r).lastIndexOf("/")+1);l=new m(r,s,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var H=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=F(a.target);"a"!==wa(h[0]);)if(h[0]===e[0]||!(h=h.parent())[0])return;if(!D(f)||!z(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");
E(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=ta(f.animVal).href);H.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});mb(l.absUrl())!==mb(n)&&c.url(l.absUrl(),!0);var u=!0;c.onUrlChange(function(a,b){z(ra(s,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=mb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;
l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(u=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=mb(c.url()),b=mb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(u||m)u=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=e):(m&&h(b,g,e===l.$$state?null:l.$$state),k(a,e)))});l.$$replace=!1});return l}]}function Gf(){var a=!0,b=
this;this.debugEnabled=function(b){return x(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||w;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),
info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ea("isecfld",b);return a}function wg(a){return a+""}function Ea(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a.window===a)throw ea("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ea("isecdom",b);if(a===
Object)throw ea("isecobj",b);}return a}function td(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a===xg||a===yg||a===zg)throw ea("isecff",b);}}function Jb(a,b){if(a&&(a===ud||a===vd||a===wd||a===xd||a===yd||a===zd||a===Ag||a===Bg||a===Kb||a===Cg||a===Ad||a===Dg))throw ea("isecaf",b);}function Eg(a,b){return"undefined"!==typeof a?a:b}function Bd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function X(a,b){var d,c,f;switch(a.type){case t.Program:d=!0;q(a.body,function(a){X(a.expression,
b);d=d&&a.expression.constant});a.constant=d;break;case t.Literal:a.constant=!0;a.toWatch=[];break;case t.UnaryExpression:X(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case t.BinaryExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case t.LogicalExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case t.ConditionalExpression:X(a.test,
b);X(a.alternate,b);X(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case t.Identifier:a.constant=!1;a.toWatch=[a];break;case t.MemberExpression:X(a.object,b);a.computed&&X(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case t.CallExpression:d=f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=f?c:[a];break;case t.AssignmentExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case t.ArrayExpression:d=!0;c=[];q(a.elements,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case t.ObjectExpression:d=!0;c=[];q(a.properties,function(a){X(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case t.ThisExpression:a.constant=
!1;a.toWatch=[];break;case t.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Cd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Dd(a){return a.type===t.Identifier||a.type===t.MemberExpression}function Ed(a){if(1===a.body.length&&Dd(a.body[0].expression))return{type:t.AssignmentExpression,left:a.body[0].expression,right:{type:t.NGValueParameter},operator:"="}}function Fd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===
t.Literal||a.body[0].expression.type===t.ArrayExpression||a.body[0].expression.type===t.ObjectExpression)}function Gd(a,b){this.astBuilder=a;this.$filter=b}function Hd(a,b){this.astBuilder=a;this.$filter=b}function Lb(a){return"constructor"===a}function lc(a){return C(a.valueOf)?a.valueOf():Fg.call(a)}function Hf(){var a=V(),b=V(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,f;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;f=b;return this};this.$get=["$filter",
function(e){function g(c,d,f){var g,k,H;f=f||K;switch(typeof c){case "string":H=c=c.trim();var q=f?b:a;g=q[H];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=f?p:u;var B=new mc(g);g=(new nc(B,e,g)).parse(c);g.constant?g.$$watchDelegate=r:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);f&&(g=h(g));q[H]=g}return s(g,d);case "function":return s(c,d);default:return s(w,d)}}function h(a){function b(c,d,e,f){var g=K;K=!0;try{return a(c,d,e,f)}finally{K=g}}if(!a)return a;
b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=lc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&lc(b));return g},b,c,e)}for(var l=[],
m=[],n=0,s=f.length;n<s;n++)l[n]=k,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&lc(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){x(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},
function(a,c,d){g=a;C(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function r(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function s(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?
a.inputs:[a]);return c}var H=da().noUnsafeEval,u={csp:H,expensiveChecks:!1,literals:sa(d),isIdentifierStart:C(c)&&c,isIdentifierContinue:C(f)&&f},p={csp:H,expensiveChecks:!0,literals:sa(d),isIdentifierStart:C(c)&&c,isIdentifierContinue:C(f)&&f},K=!1;g.$$runningExpensiveChecks=function(){return K};return g}]}function Jf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return Id(function(b){a.$evalAsync(b)},b)}]}function Kf(){this.$get=["$browser","$exceptionHandler",function(a,b){return Id(function(b){a.defer(b)},
b)}]}function Id(a,b){function d(){var a=new g;a.resolve=f(a,a.resolve);a.reject=f(a,a.reject);a.notify=f(a,a.notify);return a}function c(){this.$$state={status:0}}function f(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{C(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),
b(h)}}}))}function g(){this.promise=new c}function h(a){var b=new g;b.reject(a);return b.promise}function k(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return h(e)}return d&&C(d.then)?d.then(function(){return b(a)},h):b(a)}function l(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)}function m(a){if(!C(a))throw n("norslvr",a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise}var n=G("$q",TypeError);R(c.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;
var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,r,a)},function(b){return k(b,h,a)},b)}});R(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(n("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function c(a){k||(k=!0,h.$$resolve(a))}function d(a){k||
(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(E(a)||C(a))g=a&&a.then;C(g)?(this.promise.$$state.status=-1,g.call(a,c,d,f(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){d(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(C(a)?a(c):c)}catch(h){b(h)}}})}});var r=l;m.prototype=c.prototype;m.defer=d;m.reject=h;m.when=l;m.resolve=r;m.all=function(a){var b=new g,c=0,d=I(a)?[]:{};q(a,function(a,e){c++;l(a).then(function(a){d[e]=a;--c||b.resolve(d)},function(a){b.reject(a)})});0===c&&b.resolve(d);return b.promise};m.race=function(a){var b=d();q(a,function(a){l(a).then(b.resolve,b.reject)});return b.promise};return m}function Tf(){this.$get=
["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function If(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=
0;this.$id=++sb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=G("$rootScope"),c=null,f=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ia&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++sb;this.$$phase=
this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(K.$$phase)throw d("inprog",K.$$phase);K.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function H(){}function u(){for(;t.length;)try{t.shift()()}catch(a){e(a)}f=
null}function p(){null===f&&(f=h.defer(function(){K.$apply(u)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,
f,a);var h=this,k=h.$$watchers,l={fn:b,last:H,get:f,exp:e||a,eq:!!d};c=null;C(b)||(l.fn=w);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;r(this,1);return function(){var a=bb(k,l);0<=a&&(r(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(E(e))if(la(e))for(f!==n&&(f=n,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},s=0,l++);a=0;for(b in e)ua.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)ua.call(e,b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],r={},p=!0,s=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(E(e))if(la(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,r,p,s=b,q,t=[],N,x;n("$digest");
h.$$checkUrlChange();this===K&&null!==f&&(h.defer.cancel(f),u());c=null;do{p=!1;q=this;for(r=0;r<A.length;r++){try{x=A[r],x.scope.$eval(x.expression,x.locals)}catch(z){e(z)}c=null}A.length=0;a:do{if(r=q.$$watchers)for(r.$$digestWatchIndex=r.length;r.$$digestWatchIndex--;)try{if(a=r[r.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?na(g,k):ia(g)&&ia(k)))p=!0,c=a,a.last=a.eq?sa(g,null):g,l=a.fn,l(g,k===H?g:k,q),5>s&&(N=4-s,t[N]||(t[N]=[]),t[N].push({msg:C(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,newVal:g,oldVal:k}));else if(a===c){p=!1;break a}}catch(w){e(w)}if(!(r=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(r=q.$$nextSibling);)q=q.$parent}while(q=r);if((p||A.length)&&!s--)throw K.$$phase=null,d("infdig",b,t);}while(p||A.length);for(K.$$phase=null;L<v.length;)try{v[L++]()}catch(y){e(y)}v.length=L=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===K&&h.$$applicationDestroyed();r(this,
-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners=
{};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){K.$$phase||A.length||h.defer(function(){A.length&&K.$digest()});A.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){v.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{K.$$phase=null}}catch(b){e(b)}finally{try{K.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);a=g(a);p()},$on:function(a,b){var c=
this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,s(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<
m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=cb([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var K=new m,A=K.$$asyncQueue=[],v=K.$$postDigestQueue=[],t=K.$$applyAsyncQueue=[],L=0;return K}]}function Be(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var f=c?b:a,e;e=ta(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function Gg(a){if("self"===a)return a;if(D(a)){if(-1<a.indexOf("***"))throw Fa("iwcard",a);a=Jd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Za(a))return new RegExp("^"+a.source+"$");throw Fa("imatcher");}function Kd(a){var b=[];x(a)&&q(a,function(a){b.push(Gg(a))});return b}function Mf(){this.SCE_CONTEXTS=ga;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=Kd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Kd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?od(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw Fa("unsafe");
};d.has("$sanitize")&&(e=d.get("$sanitize"));var g=f(),h={};h[ga.HTML]=f(g);h[ga.CSS]=f(g);h[ga.URL]=f(g);h[ga.JS]=f(g);h[ga.RESOURCE_URL]=f(h[ga.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Fa("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Fa("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===ga.RESOURCE_URL){var g=
ta(f.toString()),n,r,s=!1;n=0;for(r=a.length;n<r;n++)if(c(a[n],g)){s=!0;break}if(s)for(n=0,r=b.length;n<r;n++)if(c(b[n],g)){s=!1;break}if(s)return f;throw Fa("insecurl",f.toString());}if(d===ga.HTML)return e(f);throw Fa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Lf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ia)throw Fa("iequirks");var c=ka(ga);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=$a);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,e=c.getTrusted,g=c.trustAs;q(ga,function(a,b){var d=Q(b);c[hb("parse_as_"+d)]=function(b){return f(a,b)};c[hb("get_trusted_"+d)]=function(b){return e(a,b)};c[hb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Nf(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=Z((/android (\d+)/.exec(Q((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var r in l)if(m=k.exec(r)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||
h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!f||m&&n||(m=D(l.webkitTransition),n=D(l.webkitAnimation))}return{history:!(!c||4>f||e),hasEvent:function(a){if("input"===a&&11>=Ia)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:da(),vendorPrefix:h,transitions:m,animations:n,android:f}}]}function Pf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,f){function e(g,h){e.totalPendingRequests++;
if(!D(g)||z(b.get(g)))g=f.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;I(k)?k=k.filter(function(a){return a!==gc}):k===gc&&(k=null);return d.get(g,R({cache:b,transformResponse:k},a))["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw Hg("tpload",g,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function Qf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=$.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Jd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Rf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){C(e)||(l=k,k=e,e=w);var m=va.call(arguments,3),n=x(l)&&!l,r=(n?c:d).defer(),s=r.promise,q;q=b.defer(function(){try{r.resolve(e.apply(null,m))}catch(b){r.reject(b),f(b)}finally{delete g[s.$$timeoutId]}n||a.$apply()},k);s.$$timeoutId=q;g[q]=r;return s}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),
delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return e}]}function ta(a){Ia&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,""):"",hostname:aa.hostname,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function od(a){a=D(a)?ta(a):a;return a.protocol===Ld.protocol&&a.host===Ld.host}
function Sf(){this.$get=ha(y)}function Md(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),z(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Wf(){this.$get=Md}function Rc(a){function b(d,c){if(E(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",
c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Nd);b("date",Od);b("filter",Ig);b("json",Jg);b("limitTo",Kg);b("lowercase",Lg);b("number",Pd);b("orderBy",Qd);b("uppercase",Mg)}function Ig(){return function(a,b,d,c){if(!la(a)){if(null==a)return a;throw G("filter")("notarray",a);}c=c||"$";var f;switch(oc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Ng(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,
b)}}function Ng(a,b,d,c){var f=E(a)&&d in a;!0===b?b=na:C(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(E(b)||E(a)&&!Ac(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!E(e)?Na(e,a[d],b,d,!1):Na(e,a,b,d,c)}}function Na(a,b,d,c,f,e){var g=oc(a),h=oc(b);if("string"===h&&"!"===b.charAt(0))return!Na(a,b.substring(1),d,c,f);if(I(a))return a.some(function(a){return Na(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==
k.charAt(0)&&Na(a[k],b,d,c,!0))return!0;return e?!1:Na(a,b,d,c,!1)}if("object"===h){for(k in b)if(e=b[k],!C(e)&&!z(e)&&(g=k===c,!Na(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function oc(a){return null===a?"null":typeof a}function Nd(a){var b=a.NUMBER_FORMATS;return function(a,c,f){z(c)&&(c=b.CURRENCY_SYM);z(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Rd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Pd(a){var b=
a.NUMBER_FORMATS;return function(a,c){return null==a?a:Rd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Og(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Sd))&&(a=a.replace(Sd,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===pc;f++);if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===pc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Td&&(d=d.splice(0,Td-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Pg(a,b,d,c){var f=a.d,e=
f.length-a.i;b=z(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,d));for(var g=d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Rd(a,b,d,c,f){if(!D(a)&&!ba(a)||isNaN(a))return"";var e=
!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Og(h);Pg(g,f,b.minFrac,b.maxFrac);k=g.d;h=g.i;f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+
k+b.posSuf}function Mb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<b;)a=pc+a;d&&(a=a.substr(a.length-b));return f+a}function U(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Mb(e,b,c,f)}}function nb(a,b,d){return function(c,f){var e=c["get"+a](),g=wb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Ud(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Vd(a){return function(b){var d=
Ud(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Mb(b,a)}}function qc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Od(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));e=Z(b[4]||0)-e;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||
0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;D(c)&&(c=Qg.test(c)?Z(c):b(c));ba(c)&&(c=new Date(c));if(!ja(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Rg.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Dc(e,m),c=Ub(c,e,!0));q(h,function(b){k=Sg[b];g+=k?k(c,a.DATETIME_FORMATS,m):
"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Jg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Kg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(ia(b))return a;ba(a)&&(a=a.toString());if(!la(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?rc(a,d,d+b):0===d?rc(a,b,a.length):rc(a,Math.max(0,d+b),d)}}function rc(a,b,d){return D(a)?a.slice(b,d):va.call(a,b,d)}function Qd(a){function b(b){return b.map(function(b){var c=
1,d=$a;if(C(b))d=b;else if(D(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(E(k)&&(k=a.index),E(l)&&(l=b.index));k!==l&&(c=
k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!la(a))throw G("orderBy")("notarray",a);I(e)||(e=[e]);0===e.length&&(e=["+"]);var k=b(e),l=g?-1:1,m=C(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(C(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Ac(e)&&(e=e.toString(),d(e))}return{value:e,type:c,
index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Va(a){C(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ha(a)}function Wd(a,b,d,c,f){var e=this,g=[];e.$error={};e.$$success={};e.$pending=void 0;e.$name=f(b.name||b.ngForm||"")(d);e.$dirty=!1;e.$pristine=!0;e.$valid=!0;e.$invalid=!1;e.$submitted=!1;e.$$parentForm=
Nb;e.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};e.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};e.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(e[a.$name]=a);a.$$parentForm=e};e.$$renameControl=function(a,b){var c=a.$name;e[c]===a&&delete e[c];e[b]=a;a.$name=b};e.$removeControl=function(a){a.$name&&e[a.$name]===a&&delete e[a.$name];q(e.$pending,function(b,c){e.$setValidity(c,null,a)});q(e.$error,function(b,c){e.$setValidity(c,null,
a)});q(e.$$success,function(b,c){e.$setValidity(c,null,a)});bb(g,a);a.$$parentForm=Nb};Xd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},$animate:c});e.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Ob);e.$dirty=!0;e.$pristine=!1;e.$$parentForm.$setDirty()};e.$setPristine=function(){c.setClass(a,Wa,Ob+" ng-submitted");e.$dirty=!1;e.$pristine=!0;e.$submitted=!1;q(g,function(a){a.$setPristine()})};
e.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};e.$setSubmitted=function(){c.addClass(a,"ng-submitted");e.$submitted=!0;e.$$parentForm.$setSubmitted()}}function sc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Xa(a,b,d,c,f,e){var g=Q(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===
g||d.ngTrim&&"false"===d.ngTrim||(f=Y(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Yd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=
this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Pb(a,b){return function(d,c){var f,e;if(ja(d))return d;if(D(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Tg.test(d))return new Date(d);a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),
mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function ob(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return x(a)&&!ja(a)?d(a)||void 0:a}tc(f,e,g,h);Xa(f,e,g,h,k,l);var s=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;
if(b.test(a))return a=d(a,q),s&&(a=Ub(a,s)),a});h.$formatters.push(function(a){if(a&&!ja(a))throw pb("datefmt",a);if(n(a))return(q=a)&&s&&(q=Ub(q,s,!0)),m("date")(a,c,s);q=null;return""});if(x(g.min)||g.ngMin){var u;h.$validators.min=function(a){return!n(a)||z(u)||d(a)>=u};g.$observe("min",function(a){u=r(a);h.$validate()})}if(x(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!n(a)||z(p)||d(a)<=p};g.$observe("max",function(a){p=r(a);h.$validate()})}}}function tc(a,b,d,c){(c.$$hasNativeValidators=
E(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Zd(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Ug.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!ba(b))throw pb("numfmt",b);b=b.toString()}return b})}function qb(a){x(a)&&!ba(a)&&(a=parseFloat(a));return ia(a)?void 0:a}function uc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>
a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function $d(a,b,d,c,f){if(x(c)){a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return f}function vc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var f=a[d],m=0;m<b.length;m++)if(f===b[m])continue a;c.push(f)}return c}function f(a){var b=[];return I(a)?(q(a,function(a){b=b.concat(f(a))}),b):D(a)?a.split(" "):E(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
link:function(e,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||V(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(e.$index&1)===b){var c=f(a||[]);if(!r)k(c);else if(!na(a,r)){var d=f(r);m(d,c)}}r=I(a)?a.map(function(a){return ka(a)}):ka(a)}
var r;h.$observe("class",function(b){n(e.$eval(h[a]))});"ngClass"!==a&&e.$watch("$index",function(a,c){var d=a&1;if(d!==(c&1)){var e=f(r);d===b?k(e):(d=l(e,-1),h.$removeClass(d))}});e.$watch(h[a],n,!0)}}}]}function Xd(a){function b(a,b){b&&!e[a]?(k.addClass(f,a),e[a]=!0):!b&&e[a]&&(k.removeClass(f,a),e[a]=!1)}function d(a,c){a=a?"-"+Hc(a,"-"):"";b(rb+a,!0===c);b(ae+a,!1===c)}var c=a.ctrl,f=a.$element,e={},g=a.set,h=a.unset,k=a.$animate;e[ae]=!(e[rb]=f.hasClass(rb));c.$setValidity=function(a,e,f){z(e)?
(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),be(c.$pending)&&(c.$pending=void 0));Ka(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(ce,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(ce,!1),c.$valid=be(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;
return!0}var Vg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Q=function(a){return D(a)?a.toLowerCase():a},wb=function(a){return D(a)?a.toUpperCase():a},Ia,F,za,va=[].slice,pg=[].splice,Wg=[].push,ma=Object.prototype.toString,Bc=Object.getPrototypeOf,xa=G("ng"),$=y.angular||(y.angular={}),Wb,sb=0;Ia=y.document.documentMode;var ia=Number.isNaN||function(a){return a!==a};w.$inject=[];$a.$inject=[];var I=Array.isArray,ne=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
Y=function(a){return D(a)?a.trim():a},Jd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},da=function(){if(!x(da.rules)){var a=y.document.querySelector("[ng-csp]")||y.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");da.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=da;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,
noInlineStyle:!1}}}return da.rules},ub=function(){if(x(ub.name_))return ub.name_;var a,b,d=Oa.length,c,f;for(b=0;b<d;++b)if(c=Oa[b],a=y.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+"jq");break}return ub.name_=f},qe=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],te=function(a){var b=a.currentScript,b=b&&b.getAttribute("src");if(!b)return!0;var d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;
default:return!1}}(y.document),we=/[A-Z]/g,Ic=!1,La=3,Ae={full:"1.5.11",major:1,minor:5,dot:11,codeName:"princely-quest"};W.expando="ng339";var jb=W.cache={},bg=1;W._data=function(a){return this.cache[a[this.expando]]||{}};var Xf=/([:\-_]+(.))/g,Yf=/^moz([A-Z])/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},Yb=G("jqLite"),ag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Xb=/<|&#?\w+;/,Zf=/<([\w:-]+)/,$f=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,pa={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};pa.optgroup=pa.option;pa.tbody=pa.tfoot=pa.colgroup=pa.caption=pa.thead;pa.th=pa.td;var gg=y.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=W.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===y.document.readyState?y.setTimeout(b):
(this.on("DOMContentLoaded",b),W(y).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Wg,sort:[].sort,splice:[].splice},Gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[Q(a)]=a});var $c={};q("input select option textarea button form details".split(" "),function(a){$c[a]=!0});var gd={ngMinlength:"minlength",ngMaxlength:"maxlength",
ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:$b,removeData:ib,hasData:function(a){for(var b in jb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)ib(a[b])}},function(a,b){W[b]=a});q({data:$b,inheritedData:Eb,scope:function(a){return F.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:Xc,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=hb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==La&&2!==c&&8!==c)if(c=Q(b),Gb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||w).specified?c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=d;else return a[b]},text:function(){function a(a,
d){if(z(d)){var c=a.nodeType;return 1===c||c===La?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:Yc},function(a,b){W.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==Yc&&z(2===a.length&&a!==Bb&&a!==Xc?b:c)){if(E(b)){for(f=0;f<g;f++)if(a===
$b)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=z(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],b,c);return this}});q({removeData:ib,on:function(a,b,d,c){if(x(c))throw Yb("onargs");if(Sc(a)){c=zb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=dg(a,f));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e,!1));
h.push(d)};g--;)b=c[g],Ab[b]?(h(Ab[b],fg),h(b,void 0,!0)):h(b)}},off:Wc,one:function(a,b,d){a=F(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);q(new W(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===
d){b=new W(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new W(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Uc(a,F(b).eq(0).clone()[0])},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new W(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;z(f)&&
(f=!Bb(a,b));(f?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Zb,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:e,target:a},b.type&&(c=R(c,b)),b=ka(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,f)})}},function(a,b){W.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<h;g++)z(e)?(e=a(this[g],b,c,f),x(e)&&(e=F(e))):Vc(e,a(this[g],b,c,f));return x(e)?e:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;Sa.prototype={put:function(a,
b){this[Aa(a,this.nextUid)]=b},get:function(a){return this[Aa(a,this.nextUid)]},remove:function(a){var b=this[a=Aa(a,this.nextUid)];delete this[a];return b}};var Vf=[function(){this.$get=[function(){return Sa}]}],ig=/^([^(]+?)=>/,jg=/^[^(]*\(\s*([^)]*)\)/m,Xg=/,/,Yg=/^\s*(_?)(\S+?)\1\s*$/,hg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=G("$injector");fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw D(d)&&d||(d=a.name||kg(a)),Ba("strictdi",d);b=
ad(a);q(b[1].split(Xg),function(a){a.replace(Yg,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var de=G("$animate"),nf=function(){this.$get=w},of=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=D(b)?b.split(" "):I(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=lg(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.remove(b)}});b.length=0}return{enabled:w,on:w,off:w,pin:w,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(e);g=new d;g.complete();return g}}}]},lf=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw de("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw de("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,e,g,h){e=e&&F(e);g=g&&F(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",Ca(h))},move:function(f,e,g,h){e=e&&F(e);g=g&&F(g);e=e||g.parent();b(f,e,g);return a.push(f,"move",Ca(h))},leave:function(b,c){return a.push(b,"leave",Ca(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ca(g);g.addClass=kb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ca(g);g.removeClass=kb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ca(h);h.addClass=kb(h.addClass,c);h.removeClass=kb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ca(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=kb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],qf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},pf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return e}]},mf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=sa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},fa=G("$compile"),ec=new function(){};
Kc.$inject=["$provide","$$sanitizeUriProvider"];Hb.prototype.isFirstChange=function(){return this.previousValue===ec};var bd=/^((?:x|data)[:\-_])/i,id=G("$controller"),hd=/^(\S+)(\s+as\s+([\w$]+))?$/,wf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},jd="application/json",hc={"Content-Type":jd+";charset=utf-8"},rg=/^\[|^\{(?!\{)/,sg={"[":/]$/,"{":/}$/},qg=/^\)]\}',?\n/,Zg=G("$http"),nd=function(a){return function(){throw Zg("legacy",
a);}},Ha=$.$interpolateMinErr=G("$interpolate");Ha.throwNoconcat=function(a){throw Ha("noconcat",a);};Ha.interr=function(a,b){return Ha("interr",a,b.toString())};var Ef=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},
removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},$g=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,ug={http:80,https:443,ftp:21},lb=G("$location"),vg=/^\s*[\\/]{2,}/,ah={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=$g.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:sd("$$path",function(a){a=
null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a)||ba(a))a=a.toString(),this.$$search=Fc(a);else if(E(a))a=sa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw lb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:sd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
q([rd,kc,jc],function(a){a.prototype=Object.create(ah);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==jc||!this.$$html5)throw lb("nostate");this.$$state=z(b)?null:b;return this}});var ea=G("$parse"),ud=[].constructor,vd=(!1).constructor,wd=Function.constructor,xd=(0).constructor,yd={}.constructor,zd="".constructor,Ag=ud.prototype,Bg=vd.prototype,Kb=wd.prototype,Cg=xd.prototype,Ad=yd.prototype,Dg=zd.prototype,xg=Kb.call,yg=Kb.apply,zg=Kb.bind,Fg=Ad.valueOf,Qb=V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),
function(a){Qb[a]=!0});var bh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},mc=function(a){this.options=a};mc.prototype={constructor:mc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,
text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],f=Qb[d];Qb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===
typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},
isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=
x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ea("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,
text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+
1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=bh[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var t=function(a,b){this.lexer=a;this.options=b};t.Program="Program";t.ExpressionStatement="ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression=
"ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal="Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.LocalsExpression="LocalsExpression";t.NGValueParameter="NGValueParameter";t.prototype={ast:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:t.Program,body:a}},expressionStatement:function(){return{type:t.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},
expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Dd(a))throw ea("lval");a={type:t.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:t.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,
operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:t.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:t.BinaryExpression,operator:b.text,
left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:t.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=sa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:t.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:t.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:t.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:t.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:t.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());
return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:t.Identifier,name:a.text}},constant:function(){return{type:t.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");
return{type:t.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:t.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),
b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:t.ObjectExpression,properties:a}},throwError:function(a,b){throw ea("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ea("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ea("ueoe",
this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:t.ThisExpression},$locals:{type:t.LocalsExpression}}};Gd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},
expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};X(c,d.$filter);var f="",e;this.stage="assign";if(e=Ed(c))this.state.computing="assign",f=this.nextId(),this.recurse(e,f),this.return_(f),f="fn.assign="+this.generateFunction("assign","s,v,l");e=Cd(c.body);d.stage="inputs";q(e,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing=
"fn";this.stage="main";this.recurse(c);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",f))(this.$filter,Ua,Ea,td,wg,Jb,Eg,Bd,a);this.state=this.stage=void 0;f.literal=Fd(c);f.constant=c.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=
[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+
";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||w;if(!e&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case t.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case t.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;
case t.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case t.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case t.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);
k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case t.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case t.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||
"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Lb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case t.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){f&&1!==f&&k.addEnsureSafeAssignContext(g);if(a.computed)h=
k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Lb(a.property.name))m=k.ensureSafeObject(m);
k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!f);break;case t.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});
g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case t.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,
g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case t.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case t.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===t.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,
h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===t.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case t.ThisExpression:this.assign(b,"s");c("s");break;case t.LocalsExpression:this.assign(b,"l");c("l");break;case t.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||
(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},
getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(D(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+
"'";if(ba(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ea("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Hd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;X(c,d.$filter);var f,e;if(f=Ed(c))e=this.recurse(f);f=Cd(c.body);
var g;f&&(g=[],q(f,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});f=0===c.body.length?w:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};e&&(f.assign=function(a,b,c){return e(a,c,b)});g&&(f.inputs=g);f.literal=Fd(c);f.constant=c.constant;return f},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case t.Literal:return this.value(a.value,
b);case t.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,b);case t.BinaryExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case t.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case t.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case t.Identifier:return Ua(a.name,e.expression),e.identifier(a.name,
e.expensiveChecks||Lb(a.name),b,d,e.expression);case t.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,e.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,f,b,d,e.expression):this.nonComputedMember(c,f,e.expensiveChecks,b,d,e.expression);case t.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?
function(a,c,d,e){for(var n=[],r=0;r<g.length;++r)n.push(g[r](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=f(a,c,d,m),r;if(null!=n.value){Ea(n.context,e.expression);td(n.value,e.expression);r=[];for(var s=0;s<g.length;++s)r.push(Ea(g[s](a,c,d,m),e.expression));r=Ea(n.value.apply(n.context,r),e.expression)}return b?{value:r}:r};case t.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,g,m){var n=c(a,
d,g,m);a=f(a,d,g,m);Ea(n.value,e.expression);Jb(n.context);n.context[n.name]=a;return b?{value:a}:a};case t.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],r=0;r<g.length;++r)f.push(g[r](a,c,d,e));return b?{value:f}:f};case t.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):g.push({key:a.key.type===t.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),
function(a,c,d,e){for(var f={},r=0;r<g.length;++r)g[r].computed?f[g[r].key(a,c,d,e)]=g[r].value(a,c,d,e):f[g[r].key]=g[r].value(a,c,d,e);return b?{value:f}:f};case t.ThisExpression:return function(a){return b?{value:a}:a};case t.LocalsExpression:return function(a,c){return b?{value:c}:c};case t.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,
e){d=a(d,c,f,e);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=Bd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=(x(h)?h:0)-(x(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=
a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,f){return function(e,g,h,k){e=g&&a in g?g:e;c&&1!==c&&e&&!e[a]&&(e[a]={});g=e?e[a]:void 0;b&&Ea(g,f);return d?{context:e,name:a,
value:g}:g}},computedMember:function(a,b,d,c,f){return function(e,g,h,k){var l=a(e,g,h,k),m,n;null!=l&&(m=b(e,g,h,k),m+="",Ua(m,f),c&&1!==c&&(Jb(l),l&&!l[m]&&(l[m]={})),n=l[m],Ea(n,f));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,f,e){return function(g,h,k,l){g=a(g,h,k,l);f&&1!==f&&(Jb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Lb(b))&&Ea(h,e);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,f,e){return e?e[b]:a(d,c,f)}}};var nc=
function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new t(a,d);this.astCompiler=d.csp?new Hd(this.ast,b):new Gd(this.ast,b)};nc.prototype={constructor:nc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var Fa=G("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Hg=G("$compile"),aa=y.document.createElement("a"),Ld=ta(y.location.href);Md.$inject=["$document"];Rc.$inject=["$provide"];var Td=22,Sd=".",pc="0";Nd.$inject=["$locale"];
Pd.$inject=["$locale"];var Sg={yyyy:U("FullYear",4,0,!1,!0),yy:U("FullYear",2,0,!0,!0),y:U("FullYear",1,0,!1,!0),MMMM:nb("Month"),MMM:nb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),LLLL:nb("Month",!1,!0),dd:U("Date",2),d:U("Date",1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:nb("Day"),EEE:nb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,
b,d){a=-1*d;return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))},ww:Vd(2),w:Vd(1),G:qc,GG:qc,GGG:qc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Rg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Qg=/^-?\d+$/;Od.$inject=["$locale"];var Lg=ha(Q),Mg=ha(wb);Qd.$inject=["$parse"];var Ce=ha({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var f=
"[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),xb={};q(Gb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Da("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});xb[c]=function(){return{restrict:"A",priority:100,link:f}}}});q(gd,function(a,b){xb[b]=function(){return{priority:100,link:function(a,c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&
(c=f.ngPattern.match(Vg))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Da("ng-"+a);xb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",e=null);f.$observe(b,function(b){b?(f.$set(g,b),Ia&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});var Nb={$addControl:w,$$renameControl:function(a,
b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Wd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var ee=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Wd,compile:function(d,e){d.addClass(Wa).addClass(rb);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var r=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",r,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",r,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):w;g&&(s(a,n),e.$observe(g,function(b){n.$name!==b&&(s(a,void 0),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);s(a,void 0);R(n,Nb)})}}}}}]},De=
ee(),Pe=ee(!0),Tg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,ch=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,dh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Ug=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,fe=/^(\d{4,})-(\d{2})-(\d{2})$/,ge=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
wc=/^(\d{4,})-W(\d\d)$/,he=/^(\d{4,})-(\d\d)$/,ie=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Yd=V();q(["date","datetime-local","month","time","week"],function(a){Yd[a]=!0});var je={text:function(a,b,d,c,f,e){Xa(a,b,d,c,f,e);sc(c)},date:ob("date",fe,Pb(fe,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ge,Pb(ge,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",ie,Pb(ie,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",wc,function(a,b){if(ja(a))return a;
if(D(a)){wc.lastIndex=0;var d=wc.exec(a);if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Ud(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:ob("month",he,Pb(he,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){tc(a,b,d,c);Xa(a,b,d,c,f,e);Zd(c);var g,h;if(x(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||z(g)||a>=g},d.$observe("min",function(a){g=qb(a);c.$validate()});
if(x(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||z(h)||a<=h},d.$observe("max",function(a){h=qb(a);c.$validate()})},url:function(a,b,d,c,f,e){Xa(a,b,d,c,f,e);sc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||ch.test(d)}},email:function(a,b,d,c,f,e){Xa(a,b,d,c,f,e);sc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||dh.test(d)}},radio:function(a,b,d,c){z(d.name)&&b.attr("name",++sb);b.on("click",
function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=qb(a);ia(c.$modelValue)||(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){r=qb(a);ia(c.$modelValue)||(m?(a=b.val(),r<a&&(b.val(r),a=r<n?n:r),c.$setViewValue(a)):c.$validate())}function l(a){s=qb(a);ia(c.$modelValue)||(m&&c.$viewValue!==
b.val()?c.$setViewValue(b.val()):c.$validate())}tc(a,b,d,c);Zd(c);Xa(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,r=m?100:void 0,s=m?1:void 0,q=b[0].validity;a=x(d.min);f=x(d.max);e=x(d.step);var u=c.$render;c.$render=m&&x(q.rangeUnderflow)&&x(q.rangeOverflow)?function(){u();c.$setViewValue(b.val())}:u;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||
z(r)||b<=r},g("max",k));e&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){var d;if(!(d=c.$isEmpty(b)||z(s))){d=n||0;var e=s,f=Number(b);if((f|0)!==f||(d|0)!==d||(e|0)!==e){var g=Math.max(uc(f),uc(d),uc(e)),g=Math.pow(10,g),f=f*g;d*=g;e*=g}d=0===(f-d)%e}return d},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=$d(h,a,"ngTrueValue",d.ngTrueValue,!0),l=$d(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=
c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Lc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){if(h[0]){var k=Q(g.type);"range"!==k||g.hasOwnProperty("ngInputRange")||(k="text");(je[k]||je.text)(f,e,g,h[0],b,a,d,c)}}}}}],eh=/^(true|false|\d+)$/,gf=function(){return{restrict:"A",
priority:100,compile:function(a,b){return eh.test(b.ngValue)?function(a,b,f){f.$set("value",a.$eval(f.ngValue))}:function(a,b,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},He=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=z(a)?"":a})}}}}],Je=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,
d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Ie=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,function(){var d=e(b);c.html(a.getTrustedHtml(d)||"")})}}}}],ff=ha({restrict:"A",require:"ngModel",
link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ke=vc("",!0),Me=vc("Odd",0),Le=vc("Even",1),Ne=Va({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Oe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Qc={},fh={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Da("ng-"+a);
Qc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};fh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Re=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=b.$$createComment("end ngIf",
f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=vb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Se=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,r){var q=0,t,u,p,z=function(){u&&(u.remove(),u=null);t&&(t.$destroy(),t=null);
p&&(d.leave(p).done(function(a){!1!==a&&(u=null)}),u=p,p=null)};c.$watch(e,function(e){var m=function(a){!1===a||!x(h)||h&&!c.$eval(h)||b()},u=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&u===q){var b=c.$new();n.template=a;a=r(b,function(a){z();d.enter(a,null,f).done(m)});t=b;p=a;t.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||u!==q||(z(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(z(),n.template=null)})}}}}],jf=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,f){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Tc(f.template,y.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Te=Va({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),ef=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=b.attr(d.$attr.ngList)||", ",e="false"!==d.ngTrim,g=e?Y(f):f;c.$parsers.push(function(a){if(!z(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(e?Y(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},rb="ng-valid",ae="ng-invalid",Wa="ng-pristine",Ob="ng-dirty",ce="ng-pending",pb=G("ngModel"),gh=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,f,e,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Nb;var m=f(d.ngModel),n=m.assign,r=m,s=n,t=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=f(d.ngModel+"()"),e=f(d.ngModel+"($$$p)");r=function(a){var c=m(a);C(c)&&(c=b(a));
return c};s=function(a,b){C(m(a))?e(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw pb("nonassign",d.ngModel,ya(c));};this.$render=w;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){p.$isEmpty(a)?(e.removeClass(c,"ng-not-empty"),e.addClass(c,"ng-empty")):(e.removeClass(c,"ng-empty"),e.addClass(c,"ng-not-empty"))};var y=0;Xd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:e});this.$setPristine=function(){p.$dirty=
!1;p.$pristine=!0;e.removeClass(c,Ob);e.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;e.removeClass(c,Wa);e.addClass(c,Ob);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;e.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;e.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!ia(p.$modelValue)){var a=
p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:void 0,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!C(h.then))throw pb("nopromise",
h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},w):g(!0)}function f(a,b){h===y&&p.$setValidity(a,b)}function g(a){h===y&&c(a)}y++;var h=y;(function(){var a=p.$$parserName||"parse";if(z(u))f(a,null);else return u||(q(p.$validators,function(a,b){f(b,null)}),q(p.$asyncValidators,function(a,b){f(b,null)})),f(a,u),u;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(t);if(p.$$lastCommittedViewValue!==
a||""===a&&p.$$hasNativeValidators)p.$$updateEmptyClasses(a),p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(u=z(b)?void 0:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),z(b)){u=!1;break}ia(p.$modelValue)&&(p.$modelValue=r(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,
p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:void 0,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);q(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&x(d.debounce)&&(d=d.debounce,ba(d)?c=d:ba(d[b])?c=d[b]:ba(d["default"])&&(c=d["default"]));
g.cancel(t);c?t=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=r(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;u=void 0;for(var c=p.$formatters,d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$$updateEmptyClasses(e),p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(p.$modelValue,p.$viewValue,w))}return b})}],df=["$rootScope",function(a){return{restrict:"A",
require:["ngModel","^?form","^?ngModelOptions"],controller:gh,priority:1,compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(rb);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;g.$$setOptions(e[2]&&e[2].$options);b.$addControl(g);f.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){var g=e[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,
function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],hh=/(\s+|^)default(\s+|$)/,hf=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=sa(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=Y(this.$options.updateOn.replace(hh,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=
!0}]}},Ue=Va({terminal:!0,priority:1E3}),ih=G("ngOptions"),jh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,bf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&la(a))b=a;else{b=
[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(jh);if(!n)throw ih("iexp",a,ya(b));var r=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var t=n[9];b=d(n[2]?n[1]:r);var u=a&&d(a)||b,p=t&&d(t),x=t?function(a,b){return p(c,b)}:function(a){return Aa(a)},A=function(a,b){return x(a,C(a,b))},v=d(n[2]||n[1]),z=d(n[3]||""),L=d(n[4]||""),w=d(n[8]),y={},C=q?function(a,b){y[q]=b;y[r]=a;return y}:function(a){y[r]=a;return y};return{trackBy:t,getTrackByValue:A,getWatchables:d(w,
function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=C(l,h),l=x(l,h);b.push(l);if(n[2]||n[1])l=v(c,h),b.push(l);n[4]&&(h=L(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=w(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],r=C(d[p],p),q=u(c,r),p=x(q,r),s=v(c,r),y=z(c,r),r=L(c,r),q=new e(p,q,s,y,r);a.push(q);b[p]=q}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[A(a)]},getViewValueFromOption:function(a){return t?
sa(a.viewValue):a.viewValue}}}}}var f=y.document.createElement("option"),e=y.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function n(){var a=w&&r.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];x(c.group)?Fb(c.element.parentNode):
Fb(c.element)}w=C.getOptions();var d={};A&&h.prepend(u);w.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),D.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=D,c=f.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(D);s.$render();s.$isEmpty(a)||(b=r.readValue(),(C.trackBy||t?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],t=k.multiple,u;l=0;for(var p=h.children(),z=p.length;l<z;l++)if(""===p[l].value){u=
p.eq(l);break}var A=!!u,v=!1,y=F(f.cloneNode(!1));y.val("?");var w,C=c(k.ngOptions,h,d),D=b[0].createDocumentFragment(),E=function(){A?v&&u.removeAttr("selected"):u.remove()};t?(s.$isEmpty=function(a){return!a||0===a.length},r.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=w.getOptionFromViewValue(a))a.element.selected=!0})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&!a.disabled&&b.push(w.getViewValueFromOption(a))});
return b},C.trackBy&&d.$watchCollection(function(){if(I(s.$viewValue))return s.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=function(a){var b=w.selectValueMap[h.val()],c=w.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(y.remove(),E(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):null===a||A?(y.remove(),A||h.prepend(u),h.val(""),v&&(u.prop("selected",
!0),u.attr("selected",!0))):(E(),h.prepend(y),h.val("?"),y.prop("selected",!0),y.attr("selected",!0))},r.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(E(),y.remove(),w.getViewValueFromOption(a)):null},C.trackBy&&d.$watch(function(){return C.getTrackByValue(s.$viewValue)},function(){s.$render()}));A?(u.remove(),a(u)(d),8===u[0].nodeType?(v=!1,r.registerOption=function(a,b){""===b.val()&&(v=!0,u=b,u.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){u=void 0;
v=!1}))}):(u.removeClass("ng-scope"),v=!0)):u=F(f.cloneNode(!1));h.empty();n();d.$watchCollection(C.getWatchables,n)}}}}],Ve=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,r=e.$eval(m)||{},s={},t=b.startSymbol(),u=b.endSymbol(),p=t+l+"-"+n+u,x=$.noop,A;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),r[c]=g.attr(h.$attr[b]))});q(r,
function(a,d){s[d]=b(a.replace(c,p))});e.$watch(l,function(b){var c=parseFloat(b),f=ia(c);f||c in r||(c=a.pluralCat(c-n));c===A||f&&ia(A)||(x(),f=s[c],z(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),x=w,k()):x=e.$watch(f,k),A=c)})}}}],We=["$parse","$animate","$compile",function(a,b,d){var c=G("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,
transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],r=l[3],s=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],u=l[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw c("badident",
r);var p,x,A,v,w={$id:Aa};s?p=a(s):(A=function(a,b){return Aa(b)},v=function(a){return a});return function(a,d,e,g,l){p&&(x=function(b,c,d){u&&(w[u]=b);w[t]=c;w.$index=d;return p(a,w)});var m=V();a.$watchCollection(n,function(e){var g,n,p=d[0],s,w=V(),z,y,C,D,F,E,G;r&&(a[r]=e);if(la(e))F=e,n=x||A;else for(G in n=x||v,F=[],e)ua.call(e,G)&&"$"!==G.charAt(0)&&F.push(G);z=F.length;G=Array(z);for(g=0;g<z;g++)if(y=e===F?g:F[g],C=e[y],D=n(y,C,g),m[D])E=m[D],delete m[D],w[D]=E,G[g]=E;else{if(w[D])throw q(G,
function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,D,C);G[g]={id:D,scope:void 0,clone:void 0};w[D]=!0}for(s in m){E=m[s];D=vb(E.clone);b.leave(D);if(D[0].parentNode)for(g=0,n=D.length;g<n;g++)D[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<z;g++)if(y=e===F?g:F[g],C=e[y],E=G[g],E.scope){s=p;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);E.clone[0]!==s&&b.move(vb(E.clone),null,p);p=E.clone[E.clone.length-1];f(E.scope,g,t,C,u,y,z)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
null,p);p=d;E.clone=a;w[E.id]=E;f(E.scope,g,t,C,u,y,z)});m=w})}}}}],Xe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Qe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ye=Va(function(a,b,d){a.$watch(d.ngStyle,function(a,
d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ze=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var t=vb(h[d].clone);l[d].$destroy();(k[d]=a.leave(t)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&
q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],$e=Va({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),af=Va({transclude:"element",
priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),kh=G("ngTransclude"),cf=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw kh("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){a.length?
b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&k()}}}}],Ee=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],lh={$setViewValue:w,$render:w},mh=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=lh;d.unknownOption=F(y.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Aa(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",
function(){d.renderUnknownOption=w});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;
c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,f){c.$set("value",a);f!==a&&d.removeOption(f);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",
function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],Fe=function(){return{restrict:"E",require:["select","?ngModel"],controller:mh,priority:1,link:{pre:function(a,b,d,c){var f=c[1];if(f){var e=c[0];e.ngModelCtrl=f;b.on("change",function(){a.$apply(function(){f.$setViewValue(e.readValue())})});if(d.multiple){e.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};e.writeValue=function(a){var c=new Sa(a);q(b.find("option"),function(a){a.selected=
x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==f.$viewValue||na(g,f.$viewValue)||(g=ka(f.$viewValue),f.$render());h=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},Ge=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,f;x(d.ngValue)?c=!0:x(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",b.text());return function(a,b,d){var k=
b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Nc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Mc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",function(a){D(a)&&0<a.length&&(a=
new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||z(f)||f.test(b)}}}}},Pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=Z(a);f=ia(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>f||c.$isEmpty(b)||b.length<=f}}}}},Oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,
d,c){if(c){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};y.angular.bootstrap?y.console&&console.log("WARNING: Tried to load angular more than once."):(xe(),ze($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==
e?"one":"other"}})}]),F(y.document).ready(function(){se(y.document,Gc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.4.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return T(new(T(function(){},{prototype:a})),b)}function e(a){return S(arguments,function(b){b!==a&&S(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return S(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=d<0?Math.ceil(d):Math.floor(d),d<0&&(d+=c);d<c;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return T({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return S(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return S(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)h(c,d)==-1&&(b[d]=a[d]);return b}function n(a,b){var c=R(a),d=c?[]:{};return S(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=R(a)?[]:{};return S(a,function(a,d){c[d]=b(a,d)}),c}function p(a){return a.then(c,function(){})&&a}function q(a,b){var d=1,f=2,i={},j=[],k=i,l=T(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(t[c]!==f){if(s.push(c),t[c]===d)throw s.splice(0,h(s,c)),new Error("Cyclic dependency: "+s.join(" -> "));if(t[c]=d,P(a))r.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);S(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),r.push(c,a,e)}s.pop(),t[c]=f}}function o(a){return Q(a)&&a.then&&a.$$promises}if(!Q(i))throw new Error("'invocables' must be an object");var q=g(i||{}),r=[],s=[],t={};return S(i,n),i=s=t=null,function(d,f,g){function h(){--v||(w||e(u,f.$$values),s.$$values=u,s.$$promises=s.$$promises||!0,delete s.$$inheritedValues,n.resolve(u))}function i(a){s.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!N(s.$$failure))try{l.resolve(b.invoke(e,g,u)),l.promise.then(function(a){u[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;S(f,function(a){t.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,t[a].then(function(b){u[a]=b,--m||k()},j))}),m||k(),t[c]=p(l.promise)}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!Q(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),s=p(n.promise),t=s.$$promises={},u=T({},d),v=1+r.length/3,w=!1;if(p(s),N(f.$$failure))return i(f.$$failure),s;f.$$inheritedValues&&e(u,m(f.$$inheritedValues,q)),T(t,f.$$promises),f.$$values?(w=e(u,m(f.$$values,q)),s.$$inheritedValues=m(f.$$values,q),h()):(f.$$inheritedValues&&(s.$$inheritedValues=m(f.$$inheritedValues,q)),f.then(h,i));for(var x=0,y=r.length;x<y;x+=3)d.hasOwnProperty(r[x])?h():j(r[x],r[x+1],r[x+2]);return s}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function r(){var a=b.version.minor<3;this.shouldUnsafelyUseHttp=function(b){a=!!b},this.$get=["$http","$templateCache","$injector",function(b,c,d){return new s(b,c,d,a)}]}function s(a,b,c,d){this.fromConfig=function(a,b,c){return N(a.template)?this.fromString(a.template,b):N(a.templateUrl)?this.fromUrl(a.templateUrl,b):N(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return O(a)?a(b):a},this.fromUrl=function(e,f){return O(e)&&(e=e(f)),null==e?null:d?a.get(e,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data}):c.get("$templateRequest")(e)},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function t(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new W.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=W.type(h)||d(W.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=T({params:{}},Q(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new W.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function u(a){T(this,a)}function v(){function a(a){return null!=a?a.toString().replace(/(~|\/)/g,function(a){return{"~":"~~","/":"~2F"}[a]}):a}function e(a){return null!=a?a.toString().replace(/(~~|~2F)/g,function(a){return{"~~":"~","~2F":"/"}[a]}):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return O(a)||R(a)&&O(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name],l.invoke(a.def))}}function k(a){T(this,a||{})}W=this;var l,m=!1,p=!0,q=!1,r={},s=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!N(a)||"string"==typeof a},pattern:/[^\/]*/},int:{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return a!==c&&null!==a&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};v.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return N(a)&&(m=a),m},this.strictMode=function(a){return N(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!N(a))return q;if(a!==!0&&a!==!1&&!P(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new t(a,T(f(),b))},this.isMatcher=function(a){if(!Q(a))return!1;var b=!0;return S(t.prototype,function(c,d){O(c)&&(b=b&&N(a[d])&&O(a[d]))}),b},this.type=function(a,b,c){if(!N(b))return r[a];if(r.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return r[a]=new u(T({name:a},b)),c&&(w.push({name:a,def:c}),s||j()),this},S(x,function(a,b){r[b]=new u(T({name:b},a))}),r=d(r,{}),this.$get=["$injector",function(a){return l=a,s=!1,j(),S(x,function(a,b){r[b]||(r[b]=new u(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=Q(a)?g(a):[],c=h(b,"value")===-1&&h(b,"type")===-1&&h(b,"squash")===-1&&h(b,"array")===-1;return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?r[c.type]:c.type instanceof u?c.type:new u(c.type):"config"===e?r.any:r.string}function m(){var b={array:"search"===f&&"auto"},c=a.match(/\[\]$/)?{array:!0}:{};return T(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!N(c)||null==c)return q;if(c===!0||P(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function s(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=R(a.replace)?a.replace:[],P(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return h(g,a.from)===-1}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),N(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=s(e,y,z,A);T(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,T(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),S(b,function(b){S(g(b),function(b){h(a,b)===-1&&h(d,b)===-1&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return S(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return S(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function w(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return!N(d)||d}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return!!b&&(P(b)&&d.replace().url(b),!0)}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;e<g;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!O(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(P(a)){var b=a;a=function(){return b}}else if(!O(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=P(b);if(P(a)&&(a=d.compile(a)),!h&&!O(b)&&!R(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),T(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:P(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),T(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function x(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=P(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;i<j;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=A[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){B[a]||(B[a]=[]),B[a].push(b)}function q(a){for(var b=B[a]||[];b.length;)r(b.shift())}function r(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!P(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(A.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=c.indexOf(".")!==-1?c.substring(0,c.lastIndexOf(".")):P(b.parent)?b.parent:Q(b.parent)&&P(b.parent.name)?b.parent.name:"";if(e&&!A[e])return n(e,b.self);for(var f in D)O(D[f])&&(b[f]=D[f](b,D.$delegates[f]));return A[c]=b,!b[C]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){z.$current.navigable==b&&j(a,c)||z.transitionTo(b,a,{inherit:!0,location:!1})}]),q(c),b}function s(a){return a.indexOf("*")>-1}function t(a){for(var b=a.split("."),c=z.$current.name.split("."),d=0,e=b.length;d<e;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length==c.length&&c.join("")===b.join("")}function u(a,b){return P(a)&&!N(b)?D[a]:O(b)&&P(a)?(D[a]&&!D.$delegates[a]&&(D.$delegates[a]=D[a]),D[a]=b,this):this}function v(a,b){return Q(a)?b=a:b.name=a,r(b),this}function w(a,e,f,h,j,l,n,q,r){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return n.update(),E;if(!g.retry)return null;if(f.$retry)return n.update(),F;var h=z.transition=e.when(g.retry);return h.then(function(){return h!==z.transition?(a.$broadcast("$stateChangeCancel",b.to,b.toParams,c,d),B):(b.options.$retry=!0,z.transitionTo(b.to,b.toParams,b.options))},function(){return E}),n.update(),h}function v(a,c,d,g,i,l){function m(){var c=[];return S(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:l.notify})||""}],c.push(j.resolve(g,i.globals,i.resolve,a).then(function(c){if(O(d.controllerProvider)||R(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=j.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var w=new Error("transition superseded"),B=p(e.reject(w)),D=p(e.reject(new Error("transition prevented"))),E=p(e.reject(new Error("transition aborted"))),F=p(e.reject(new Error("transition failed")));return y.locals={resolve:null,globals:{$stateParams:{}}},z={params:{},current:y.self,$current:y,transition:null},z.reload=function(a){return z.transitionTo(z.current,l,{reload:a||!0,inherit:!1,notify:!0})},z.go=function(a,b,c){return z.transitionTo(a,b,T({inherit:!0,relative:z.$current},c))},z.transitionTo=function(b,c,f){c=c||{},f=T({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=z.$current,o=z.params,q=j.path,r=m(b,f.relative),s=c["#"];if(!N(r)){var t={to:b,toParams:c,options:f},A=u(t,j.self,o,f);if(A)return A;if(b=t.to,c=t.toParams,f=t.options,r=m(b,f.relative),!N(r)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(r[C])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(l,c||{},z.$current,r)),!r.params.$$validates(c))return F;c=r.params.$$values(c),b=r;var E=b.path,G=0,H=E[G],I=y.locals,J=[];if(f.reload){if(P(f.reload)||Q(f.reload)){if(Q(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var K=f.reload===!0?q[0]:m(f.reload);if(f.reload&&!K)throw new Error("No such reload state '"+(P(f.reload)?f.reload:f.reload.name)+"'");for(;H&&H===q[G]&&H!==K;)I=J[G]=H.locals,G++,H=E[G]}}else for(;H&&H===q[G]&&H.ownParams.$$equals(c,o);)I=J[G]=H.locals,G++,H=E[G];if(x(b,c,j,o,I,f))return s&&(c["#"]=s),z.params=c,U(z.params,l),U(k(b.params.$$keys(),l),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(n.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),n.update(!0)),z.transition=null,e.when(z.current);if(c=k(b.params.$$keys(),c||{}),s&&(c["#"]=s),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,o,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),null==z.transition&&n.update(),D;for(var L=e.when(I),M=G;M<E.length;M++,H=E[M])I=J[M]=d(I),L=v(H,c,H===b,L,I,f);var O=z.transition=L.then(function(){var d,e,g;if(z.transition!==O)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B;for(d=q.length-1;d>=G;d--)g=q[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=G;d<E.length;d++)e=E[d],e.locals=J[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return z.transition!==O?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B):(z.$current=b,z.current=b.self,z.params=c,U(z.params,l),z.transition=null,f.location&&b.navigable&&n.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,o),n.update(!0),z.current)}).then(null,function(d){return d===w?B:z.transition!==O?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B):(z.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,o,d),g.defaultPrevented||n.update(),e.reject(d))});return p(O),O},z.is=function(a,b,d){d=T({relative:z.$current},d||{});var e=m(a,d.relative);return N(e)?z.$current===e&&(!b||g(b).reduce(function(a,c){var d=e.params[c];return a&&!d||d.type.equals(l[c],b[c])},!0)):c},z.includes=function(a,b,d){if(d=T({relative:z.$current},d||{}),P(a)&&s(a)){if(!t(a))return!1;a=z.$current.name}var e=m(a,d.relative);if(!N(e))return c;if(!N(z.$current.includes[e.name]))return!1;if(!b)return!0;for(var f=g(b),h=0;h<f.length;h++){var i=f[h],j=e.params[i];if(j&&!j.type.equals(l[i],b[i]))return!1}return g(b).reduce(function(a,c){var d=e.params[c];return a&&!d||d.type.equals(l[c],b[c])},!0)},z.href=function(a,b,d){d=T({lossy:!0,inherit:!0,absolute:!1,relative:z.$current},d||{});var e=m(a,d.relative);if(!N(e))return null;d.inherit&&(b=i(l,b||{},z.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?n.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},z.get=function(a,b){if(0===arguments.length)return o(g(A),function(a){return A[a].self});var c=m(a,b||z.$current);return c&&c.self?c.self:null},z}function x(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new W.ParamSet(f);return g.$$equals(b,c)}if(!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b)))return!0}var y,z,A={},B={},C="abstract",D={parent:function(a){if(N(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):y},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(P(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||y).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new W.ParamSet;return S(a.params||{},function(a,c){b[c]||(b[c]=new W.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?T(a.parent.params.$$new(),b):new W.ParamSet},views:function(a){var b={};return S(N(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?T({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};y=r({name:"",url:"^",views:null,abstract:!0}),y.navigable=null,this.decorator=u,this.state=v,this.$get=w,w.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function y(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=T(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function z(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function A(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(a){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=C(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function B(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return f.empty?f.empty():f[0].innerHTML=null,function(f,h,i){var j=d.$current,k=C(f,i,h,e),l=j&&j.locals[k];if(!l)return h.html(g),void a(h.contents())(f);h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),O(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}function C(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function D(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function E(a){var b=a.parent().inheritedData("$uiView");if(b&&b.state&&b.state.name)return b.state}function F(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function G(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function H(a,b){return{relative:E(a)||b.$current,inherit:!0}}function I(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=D(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=F(e),l=g[1]||g[0],m=null;j.options=T(H(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=G(e,a,c,k,function(){return j}),e[e.on?"on":"bind"]("click",h),d.$on("$destroy",function(){e[e.off?"off":"unbind"]("click",h)}))}}}function J(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=F(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=G(d,a,b,i,function(){return m}),d[d.on?"on":"bind"]("click",h),c.$on("$destroy",function(){d[d.off?"off":"unbind"]("click",h)}))}}}function K(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,E(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);a!==-1&&p.splice(a,1)}}function h(a,c){if(!P(a))throw new Error("state should be a string");return Q(c)?a+V(c):(c=b.$eval(c),Q(c)?a+V(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(a){}o=o||c(e.uiSrefActive||"",!1)(b),Q(o)&&S(o,function(c,d){if(P(c)){var e=D(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(Q(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function L(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function M(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var N=b.isDefined,O=b.isFunction,P=b.isString,Q=b.isObject,R=b.isArray,S=b.forEach,T=b.extend,U=b.copy,V=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),q.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",q),b.module("ui.router.util").provider("$templateFactory",r);var W;t.prototype.concat=function(a,b){var c={caseInsensitive:W.caseInsensitive(),strict:W.strictMode(),squash:W.defaultSquashPolicy()};return new t(this.sourcePath+a+this.sourceSearch,T(c,b),this)},t.prototype.toString=function(){return this.source},t.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;e<j;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),N(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;e<i;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);N(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},t.prototype.parameters=function(a){return N(a)?this.params[a]||null:this.$$paramNames},t.prototype.validates=function(a){return this.params.$$validates(a)},t.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;f<i;f++){var k=f<h,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=!!p&&m.squash,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=R(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else P(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(R(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},u.prototype.is=function(a,b){return!0},u.prototype.encode=function(a,b){return a},u.prototype.decode=function(a,b){return a},u.prototype.equals=function(a,b){return a==b},u.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},u.prototype.pattern=/.*/,u.prototype.toString=function(){return"{Type:"+this.name+"}"},u.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},u.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return R(a)?a:N(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(R(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;
for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",v),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",w),x.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",x).run(["$injector",function(a){a.get("$state.runtime").autoinject&&a.get("$state")}]),y.$inject=[],b.module("ui.router.state").provider("$view",y),b.module("ui.router.state").provider("$uiViewScroll",z),A.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],B.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",A),b.module("ui.router.state").directive("uiView",B),I.$inject=["$state","$timeout"],J.$inject=["$state","$timeout"],K.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",I).directive("uiSrefActive",K).directive("uiSrefActiveEq",K).directive("uiState",J),L.$inject=["$state"],M.$inject=["$state"],b.module("ui.router.state").filter("isState",L).filter("includedByState",M)}(window,window.angular);
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.multiMap","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(){r=!!("horizontal"in g),r?(s={width:""},t={width:"0"}):(s={height:""},t={height:"0"}),d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css(s)}function i(a){return r?{width:a.scrollWidth+"px"}:{height:a.scrollHeight+"px"}}function j(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(n(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",css:{overflow:"hidden"},to:i(f[0])}).start()["finally"](k):a.addClass(f,"in",{css:{overflow:"hidden"},to:i(f[0])}).then(k)},angular.noop)}function k(){f.removeClass("collapsing").addClass("collapse").css(s),o(d)}function l(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(p(d)).then(function(){f.css(i(f[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:t}).start()["finally"](m):a.removeClass(f,"in",{to:t}).then(m)},angular.noop):m()}function m(){f.css(t),f.removeClass("collapsing").addClass("collapse"),q(d)}var n=c(g.expanding),o=c(g.expanded),p=c(g.collapsing),q=c(g.collapsed),r=!1,s={},t={};h(),d.$watch(g.uibCollapse,function(a){a?l():j()})}}}]),angular.module("ui.bootstrap.tabindex",[]).directive("uibTabindexToggle",function(){return{restrict:"A",link:function(a,b,c){c.$observe("disabled",function(a){c.$set("tabindex",a?-1:null)})}}}),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse","ui.bootstrap.tabindex"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){b.addClass("panel"),d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){function a(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(b,c,d,e){b.$watch(function(){return e[d.uibAccordionTransclude]},function(b){if(b){var d=angular.element(c[0].querySelector(a()));d.html(""),d.append(b)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$element","$attrs","$interpolate","$timeout",function(a,b,c,d,e){a.closeable=!!c.close,b.addClass("alert"),c.$set("role","alert"),a.closeable&&b.addClass("alert-dismissible");var f=angular.isDefined(c.dismissOnTimeout)?d(c.dismissOnTimeout)(a.$parent):null;f&&e(function(){a.close()},parseInt(f,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,scope:{close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(a){for(var b=0;b<p.length;b++)p[b].slide.active=b===a}function g(c,d,g){if(!s){if(angular.extend(c,{direction:g}),angular.extend(p[r].slide||{},{direction:g}),e.enabled(b)&&!a.$currentTransition&&p[d].element&&o.slides.length>1){p[d].element.data(q,c.direction);var h=o.getCurrentIndex();angular.isNumber(h)&&p[h].element&&p[h].element.data(q,c.direction),a.$currentTransition=!0,e.on("addClass",p[d].element,function(b,c){"close"===c&&(a.$currentTransition=null,e.off("addClass",b))})}a.active=c.index,r=c.index,f(d),k()}}function h(a){for(var b=0;b<p.length;b++)if(p[b].slide===a)return b}function i(){m&&(c.cancel(m),m=null)}function j(b){b.length||(a.$currentTransition=null)}function k(){i();var b=+a.interval;!isNaN(b)&&b>0&&(m=c(l,b))}function l(){var b=+a.interval;n&&!isNaN(b)&&b>0&&p.length?a.next():a.pause()}var m,n,o=this,p=o.slides=a.slides=[],q="uib-slideDirection",r=a.active,s=!1;b.addClass("carousel"),o.addSlide=function(b,c){p.push({slide:b,element:c}),p.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===p.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),r=b.index,a.active=b.index,f(r),o.select(p[h(b)]),1===p.length&&a.play())},o.getCurrentIndex=function(){for(var a=0;a<p.length;a++)if(p[a].slide.index===r)return a},o.next=a.next=function(){var b=(o.getCurrentIndex()+1)%p.length;return 0===b&&a.noWrap()?void a.pause():o.select(p[b],"next")},o.prev=a.prev=function(){var b=o.getCurrentIndex()-1<0?p.length-1:o.getCurrentIndex()-1;return a.noWrap()&&b===p.length-1?void a.pause():o.select(p[b],"prev")},o.removeSlide=function(b){var c=h(b);p.splice(c,1),p.length>0&&r===c?c>=p.length?(r=p.length-1,a.active=r,f(r),o.select(p[p.length-1])):(r=c,a.active=r,f(r),o.select(p[c])):r>c&&(r--,a.active=r),0===p.length&&(r=null,a.active=null)},o.select=a.select=function(b,c){var d=h(b.slide);void 0===c&&(c=d>o.getCurrentIndex()?"next":"prev"),b.slide.index===r||a.$currentTransition||g(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===p.length-1&&a.noWrap()},a.pause=function(){a.noPause||(n=!1,i())},a.play=function(){n||(n=!0,k())},b.on("mouseenter",a.pause),b.on("mouseleave",a.play),a.$on("$destroy",function(){s=!0,i()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",k),a.$watchCollection("slides",j),a.$watch("active",function(a){if(angular.isNumber(a)&&r!==a){for(var b=0;b<p.length;b++)if(p[b].slide.index===a){a=b;break}var c=p[a];c&&(f(a),o.select(p[a]),r=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,controller:"UibCarouselController",controllerAs:"carousel",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",["$animate",function(a){return{require:"^uibCarousel",restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(b,c,d,e){c.addClass("item"),e.addSlide(b,c),b.$on("$destroy",function(){e.removeSlide(b)}),b.$watch("active",function(b){a[b?"addClass":"removeClass"](c,"active")})}}}]).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter","filterFilter",function(a,b,c,d,e){function f(a){return e(s,{key:a},!0)[0]}function g(a){var b=[],c=a.split(""),e=a.indexOf("'");if(e>-1){var f=!1;a=a.split("");for(var g=e;g<a.length;g++)f?("'"===a[g]&&(g+1<a.length&&"'"===a[g+1]?(a[g+1]="$",c[g+1]=""):(c[g]="",f=!1)),a[g]="$"):"'"===a[g]&&(a[g]="$",c[g]="",f=!0);a=a.join("")}return angular.forEach(s,function(d){var e=a.indexOf(d.key);if(e>-1){a=a.split(""),c[e]="("+d.regex+")",a[e]="$";for(var f=e+1,g=e+d.key.length;g>f;f++)c[f]="",a[f]="$";a=a.join(""),b.push({index:e,key:d.key,apply:d.apply,matcher:d.regex})}}),{regex:new RegExp("^"+c.join("")+"$"),map:d(b,"index")}}function h(a){for(var b,c,d=[],e=0;e<a.length;)if(angular.isNumber(c)){if("'"===a.charAt(e))(e+1>=a.length||"'"!==a.charAt(e+1))&&(d.push(i(a,c,e)),c=null);else if(e===a.length)for(;c<a.length;)b=j(a,c),d.push(b),c=b.endIdx;e++}else"'"!==a.charAt(e)?(b=j(a,e),d.push(b.parser),e=b.endIdx):(c=e,e++);return d}function i(a,b,c){return function(){return a.substr(b+1,c-b-1)}}function j(a,b){for(var c=a.substr(b),d=0;d<s.length;d++)if(new RegExp("^"+s[d].key).test(c)){var e=s[d];return{endIdx:b+e.key.length,parser:e.formatter}}return{endIdx:b+1,parser:function(){return c.charAt(0)}}}function k(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}function l(a){return parseInt(a,10)}function m(a,b){return a&&b?q(a,b):a}function n(a,b){return a&&b?q(a,b,!0):a}function o(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function p(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function q(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset(),e=o(b,d);return p(a,c*(e-d))}var r,s,t=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){r=b.id,this.parsers={},this.formatters={},s=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){var b=a.getMonth();return/^[0-9]$/.test(b)?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){var b=a.getDate();return/^[1-9]$/.test(b)?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=l(c+d),this.minutes+=l(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}],angular.version.major>=1&&angular.version.minor>4&&s.push({key:"LLLL",regex:b.DATETIME_FORMATS.STANDALONEMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.STANDALONEMONTH.indexOf(a)},formatter:function(a){return c(a,"LLLL")}})},this.init(),this.getParser=function(a){var b=f(a);return b&&b.apply||null},this.overrideParser=function(a,b){var c=f(a);c&&angular.isFunction(b)&&(this.parsers={},c.apply=b)}.bind(this),this.filter=function(a,c){if(!angular.isDate(a)||isNaN(a)||!c)return"";c=b.DATETIME_FORMATS[c]||c,b.id!==r&&this.init(),this.formatters[c]||(this.formatters[c]=h(c));var d=this.formatters[c];return d.reduce(function(b,c){return b+c(a)},"")},this.parse=function(c,d,e){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(t,"\\$&"),b.id!==r&&this.init(),this.parsers[d]||(this.parsers[d]=g(d,"apply"));var f=this.parsers[d],h=f.regex,i=f.map,j=c.match(h),l=!1;if(j&&j.length){var m,n;angular.isDate(e)&&!isNaN(e.getTime())?m={year:e.getFullYear(),month:e.getMonth(),date:e.getDate(),hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}:(e&&a.warn("dateparser:","baseDate is not a valid date"),m={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var o=1,p=j.length;p>o;o++){var q=i[o-1];"Z"===q.matcher&&(l=!0),q.apply&&q.apply.call(m,j[o])}var s=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return k(m.year,m.month,m.date)&&(!angular.isDate(e)||isNaN(e.getTime())||l?(n=new Date(0),s.call(n,m.year,m.month,m.date),u.call(n,m.hours||0,m.minutes||0,m.seconds||0,m.milliseconds||0)):(n=new Date(e),s.call(n,m.year,m.month,m.date),u.call(n,m.hours,m.minutes,m.seconds,m.milliseconds))),n}},this.toTimezone=m,this.fromTimezone=n,this.timezoneToOffset=o,this.addDateMinutes=p,this.convertTimezoneToLocal=q}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){var d=a.scope.$eval(m);return d===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",monthColumns:3,ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$element","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}function n(b){var c;if(angular.version.minor<6)c=b.$options||a.datepickerOptions.ngModelOptions||i.ngModelOptions||{},c.getOption=function(a){return c[a]};else{var d=b.$options.getOption("timezone")||(a.datepickerOptions.ngModelOptions?a.datepickerOptions.ngModelOptions.timezone:null)||(i.ngModelOptions?i.ngModelOptions.timezone:null);c=b.$options.createChild(i.ngModelOptions).createChild(a.datepickerOptions.ngModelOptions).createChild(b.$options).createChild({timezone:d})}return c}var o=this,p={$setViewValue:angular.noop},q={},r=[];b.addClass("uib-datepicker"),c.$set("role","application"),a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","monthColumns","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:i.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":o[b]=angular.isDefined(a.datepickerOptions[b])?e(a.datepickerOptions[b])(a.$parent):i[b];break;case"monthColumns":case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":o[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:i[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?o.startingDay=a.datepickerOptions.startingDay:angular.isNumber(i.startingDay)?o.startingDay=i.startingDay:o.startingDay=(f.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?o[b]=l.fromTimezone(new Date(a),q.getOption("timezone")):(j&&g.warn("Literal date support has been deprecated, please switch to date object usage"),o[b]=new Date(h(a,"medium"))):o[b]=i[b]?l.fromTimezone(new Date(i[b]),q.getOption("timezone")):null,o.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){o[b]=a[b]=angular.isDefined(c)?c:a.datepickerOptions[b],("minMode"===b&&o.modes.indexOf(a.datepickerOptions.datepickerMode)<o.modes.indexOf(o[b])||"maxMode"===b&&o.modes.indexOf(a.datepickerOptions.datepickerMode)>o.modes.indexOf(o[b]))&&(a.datepickerMode=o[b],a.datepickerOptions.datepickerMode=o[b])}):o[b]=a[b]=i[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(c.disabled)||!1,angular.isDefined(c.ngDisabled)&&r.push(a.$parent.$watch(c.ngDisabled,function(b){a.disabled=b,o.refreshView()})),a.isActive=function(b){return 0===o.compare(b.date,o.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(b){p=b,q=n(p),a.datepickerOptions.initDate?(o.activeDate=l.fromTimezone(a.datepickerOptions.initDate,q.getOption("timezone"))||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(p.$isEmpty(p.$modelValue)||p.$invalid)&&(o.activeDate=l.fromTimezone(a,q.getOption("timezone")),o.refreshView())})):o.activeDate=new Date;var c=p.$modelValue?new Date(p.$modelValue):new Date;this.activeDate=isNaN(c)?l.fromTimezone(new Date,q.getOption("timezone")):l.fromTimezone(c,q.getOption("timezone")),p.$render=function(){o.render()}},this.render=function(){if(p.$viewValue){var a=new Date(p.$viewValue),b=!isNaN(a);b?this.activeDate=l.fromTimezone(a,q.getOption("timezone")):k||g.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=p.$viewValue?new Date(p.$viewValue):null;b=l.fromTimezone(b,q.getOption("timezone")),p.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=p.$viewValue?new Date(p.$viewValue):null;d=l.fromTimezone(d,q.getOption("timezone"));var e=new Date;e=l.fromTimezone(e,q.getOption("timezone"));var f=this.compare(b,e),g={date:b,label:l.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),o.activeDate&&0===this.compare(g.date,o.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===o.minMode){var c=p.$viewValue?l.fromTimezone(new Date(p.$viewValue),q.getOption("timezone")):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=l.toTimezone(c,q.getOption("timezone")),p.$setViewValue(c),p.$render()}else o.activeDate=b,m(o.modes[o.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=o.activeDate.getFullYear()+a*(o.step.years||0),c=o.activeDate.getMonth()+a*(o.step.months||0);o.activeDate.setFullYear(b,c,1),o.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===o.maxMode&&1===b||a.datepickerMode===o.minMode&&-1===b||(m(o.modes[o.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var s=function(){o.element[0].focus()};a.$on("uib:datepicker.focus",s),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),o.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(o.isDisabled(o.activeDate))return;a.select(o.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(o.handleKeyDown(c,b),o.refreshView()):a.toggleMode("up"===c?1:-1)},b.on("keydown",function(b){a.$apply(function(){a.keydown(b)})}),a.$on("$destroy",function(){for(;r.length;)r.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,this.monthColumns),a.yearHeaderColspan=this.monthColumns>3?this.monthColumns-2:1},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=this.monthColumns;else if("right"===a)c+=1;else if("down"===a)c+=this.monthColumns;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],restrict:"A",controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},
require:["^uibDatepicker","uibDaypicker"],restrict:"A",controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],restrict:"A",controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],restrict:"A",controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){function d(a){return"static"===(b.getComputedStyle(a).position||"static")}c=this.getRawNode(c);for(var e=c.offsetParent||a[0].documentElement;e&&e!==a[0].documentElement&&d(e);)e=e.offsetParent;return e||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=e!==!1;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),b?a[2]=!0:a[2]=!1,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},adjustTop:function(a,b,c,d){return-1!==a.indexOf("top")&&c!==d?{top:b.top-d+"px"}:void 0},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,x,a.date);if(isNaN(c))for(var d=0;d<J.length;d++)if(c=l.parse(b,J[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.toTimezone(b,H.getOption("timezone"))}return H.getOption("allowInvalid")?a:void 0}function s(a,b){var d=a||b;return c.ngRequired||d?(angular.isNumber(d)&&(d=new Date(d)),d?angular.isDate(d)&&!isNaN(d)?!0:angular.isString(d)?!isNaN(q(d)):!1:!0):!0}function t(c){if(a.isOpen||!a.disabled){var d=I[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(I[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,z);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}function w(a){var b;return angular.version.minor<6?(b=angular.isObject(a.$options)?a.$options:{timezone:null},b.getOption=function(a){return b[a]}):b=a.$options,b}var x,y,z,A,B,C,D,E,F,G,H,I,J,K=!1,L=[];this.init=function(e){if(G=e,H=w(G),y=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,z=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,A=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,B=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,C=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,J=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(x=m.html5Types[c.type],K=!0):(x=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==x&&(x=c,G.$modelValue=null,!x))throw new Error("uibDatepickerPopup must have a date format specified.")})),!x)throw new Error("uibDatepickerPopup must have a date format specified.");if(K&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");D=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),D.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":B}),E=angular.element(D.children()[0]),E.attr("template-url",C),a.datepickerOptions||(a.datepickerOptions={}),K&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),E.attr("datepicker-options","datepickerOptions"),K?G.$formatters.push(function(b){return a.date=l.fromTimezone(b,H.getOption("timezone")),b}):(G.$$parserName="date",G.$validators.date=s,G.$parsers.unshift(r),G.$formatters.push(function(b){return G.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,H.getOption("timezone")),l.filter(a.date,x))})),G.$viewChangeListeners.push(function(){a.date=q(G.$viewValue)}),b.on("keydown",u),I=d(D)(a),D.remove(),z?h.find("body").append(I):b.after(I),a.$on("$destroy",function(){for(a.isOpen===!0&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),I.remove(),b.off("keydown",u),h.off("click",t),F&&F.off("scroll",v),angular.element(g).off("resize",v);L.length;)L.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,H.getOption("timezone")));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=new Date(a.datepickerOptions[b]):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){a.date=c;var d=a.date?l.filter(a.date,x):null;b.val(d),G.$setViewValue(d),y&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):(b=l.fromTimezone(d,H.getOption("timezone")),b.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&L.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),A&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;z||j.parsePlacement(d)[2]?(F=F||angular.element(j.scrollParent(b)),F&&F.on("scroll",v)):F=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),F&&F.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.multiMap",[]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.multiMap","ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope","$$multiMap",function(a,b,c){var d=null,e=c.createNew();this.isOnlyOpen=function(a,b){var c=e.get(b);if(c){var d=c.reduce(function(b,c){return c.scope===a?c:b},{});if(d)return 1===c.length}return!1},this.open=function(b,c,g){if(d||a.on("click",f),d&&d!==b&&(d.isOpen=!1),d=b,g){var h=e.get(g);if(h){var i=h.map(function(a){return a.scope});-1===i.indexOf(b)&&e.put(g,{scope:b})}else e.put(g,{scope:b})}},this.close=function(b,c,g){if(d===b&&(a.off("click",f),a.off("keydown",this.keybindFilter),d=null),g){var h=e.get(g);if(h){var i=h.reduce(function(a,c){return c.scope===b?c:a},{});i&&e.remove(g,i)}}};var f=function(a){if(d&&d.isOpen&&!(a&&"disabled"===d.getAutoClose()||a&&3===a.which)){var c=d.getToggleElement();if(!(a&&c&&c[0].contains(a.target))){var e=d.getDropdownElement();a&&"outsideClick"===d.getAutoClose()&&e&&e[0].contains(a.target)||(d.focusToggleElement(),d.isOpen=!1,b.$$phase||d.$apply())}}};this.keybindFilter=function(a){if(d){var b=d.getDropdownElement(),c=d.getToggleElement(),e=b&&b[0].contains(a.target),g=c&&c[0].contains(a.target);27===a.which?(a.stopPropagation(),d.focusToggleElement(),f()):d.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&d.isOpen&&(e||g)&&(a.preventDefault(),a.stopPropagation(),d.focusDropdownEntry(a.which))}}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){function l(){b.append(o.dropdownMenu)}var m,n,o=this,p=a.$new(),q=e.appendToOpenClass,r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=i.find("body");b.addClass("dropdown"),this.init=function(){c.isOpen&&(n=d(c.isOpen),s=n.assign,a.$watch(n,function(a){p.isOpen=!!a})),u=angular.isDefined(c.keyboardNav)},this.toggle=function(a){return p.isOpen=arguments.length?!!a:!p.isOpen,angular.isFunction(s)&&s(p,p.isOpen),p.isOpen},this.isOpen=function(){return p.isOpen},p.getToggleElement=function(){return o.toggleElement},p.getAutoClose=function(){return c.autoClose||"always"},p.getElement=function(){return b},p.isKeynavEnabled=function(){return u},p.focusDropdownEntry=function(a){var c=o.dropdownMenu?angular.element(o.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(o.selectedOption)?o.selectedOption=o.selectedOption===c.length-1?o.selectedOption:o.selectedOption+1:o.selectedOption=0;break;case 38:angular.isNumber(o.selectedOption)?o.selectedOption=0===o.selectedOption?0:o.selectedOption-1:o.selectedOption=c.length-1}c[o.selectedOption].focus()},p.getDropdownElement=function(){return o.dropdownMenu},p.focusToggleElement=function(){o.toggleElement&&o.toggleElement[0].focus()},p.$watch("isOpen",function(e,n){var u=null,w=!1;if(angular.isDefined(c.dropdownAppendTo)){var x=d(c.dropdownAppendTo)(p);x&&(u=angular.element(x))}if(angular.isDefined(c.dropdownAppendToBody)){var y=d(c.dropdownAppendToBody)(p);y!==!1&&(w=!0)}if(w&&!u&&(u=v),u&&o.dropdownMenu&&(e?(u.append(o.dropdownMenu),b.on("$destroy",l)):(b.off("$destroy",l),l())),u&&o.dropdownMenu){var z,A,B,C=h.positionElements(b,o.dropdownMenu,"bottom-left",!0),D=0;if(z={top:C.top+"px",display:e?"block":"none"},A=o.dropdownMenu.hasClass("dropdown-menu-right"),A?(z.left="auto",B=h.scrollbarPadding(u),B.heightOverflow&&B.scrollbarWidth&&(D=B.scrollbarWidth),z.right=window.innerWidth-D-(C.left+b.prop("offsetWidth"))+"px"):(z.left=C.left+"px",z.right="auto"),!w){var E=h.offset(u);z.top=C.top-E.top+"px",A?z.right=window.innerWidth-(C.left-E.left+b.prop("offsetWidth"))+"px":z.left=C.left-E.left+"px"}o.dropdownMenu.css(z)}var F=u?u:b,G=u?q:r,H=F.hasClass(G),I=f.isOnlyOpen(a,u);if(H===!e){var J;J=u?I?"removeClass":"addClass":e?"addClass":"removeClass",g[J](F,G).then(function(){angular.isDefined(e)&&e!==n&&t(a,{open:!!e})})}if(e)o.dropdownMenuTemplateUrl?k(o.dropdownMenuTemplateUrl).then(function(a){m=p.$new(),j(a.trim())(m,function(a){var b=a;o.dropdownMenu.replaceWith(b),o.dropdownMenu=b,i.on("keydown",f.keybindFilter)})}):i.on("keydown",f.keybindFilter),p.focusToggleElement(),f.open(p,b,u);else{if(f.close(p,b,u),o.dropdownMenuTemplateUrl){m&&m.$destroy();var K=angular.element('<ul class="dropdown-menu"></ul>');o.dropdownMenu.replaceWith(K),o.dropdownMenu=K}o.selectedOption=null}angular.isFunction(s)&&s(a,e)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.on("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.off("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.pop()},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.multiMap","ui.bootstrap.stackedMap","ui.bootstrap.position"]).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{restrict:"A",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();e.$$postDigest(function(){h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",["$animate",function(a){return{link:function(b,c,d,e,f){f(b.$parent,function(b){c.empty(),a.enter(b,c)})}}}]).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){var b="-";return a.replace(E,function(a,c){return(c?b:"")+a.toLowerCase()})}function k(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function l(){for(var a=-1,b=x.keys(),c=0;c<b.length;c++)x.get(b[c]).value.backdrop&&(a=c);return a>-1&&A>a&&(a=A),a}function m(a,b){var c=x.get(a).value,d=c.appendTo;x.remove(a),B=x.top(),B&&(A=parseInt(B.value.modalDomEl.attr("index"),10)),p(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||w;y.remove(b,a);var e=y.hasKey(b);d.toggleClass(b,e),!e&&v&&v.heightOverflow&&v.scrollbarWidth&&(v.originalRight?d.css({paddingRight:v.originalRight+"px"}):d.css({paddingRight:""}),v=null),n(!0)},c.closedDeferred),o(),b&&b.focus?b.focus():d.focus&&d.focus()}function n(a){var b;x.length()>0&&(b=x.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function o(){if(t&&-1===l()){var a=u;p(t,u,function(){a=null}),t=void 0,u=void 0}}function p(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){d&&d(),b.remove(),e&&e.resolve()}),c.$destroy())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(z.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function q(a){if(a.isDefaultPrevented())return a;var b=x.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){z.dismiss(b.key,"escape key press")}));break;case 9:var c=z.loadFocusElementList(b),d=!1;a.shiftKey?(z.isFocusInFirstItem(a,c)||z.isModalFocused(a,b))&&(d=z.focusLastFocusableElement(c)):z.isFocusInLastItem(a,c)&&(d=z.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function r(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}function s(){Array.prototype.forEach.call(document.querySelectorAll("["+C+"]"),function(a){var b=parseInt(a.getAttribute(C),10),c=b-1;a.setAttribute(C,c),c||(a.removeAttribute(C),a.removeAttribute("aria-hidden"))})}var t,u,v,w="modal-open",x=h.createNew(),y=g.createNew(),z={NOW_CLOSING_EVENT:"modal.stack.now-closing"},A=0,B=null,C="data-bootstrap-modal-aria-hidden-count",D="a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",E=/[A-Z]/g;return e.$watch(l,function(a){u&&(u.index=a)}),c.on("keydown",q),e.$on("$destroy",function(){c.off("keydown",q)}),z.open=function(b,f){function g(a){function b(a){var b=a.parent()?a.parent().children():[];return Array.prototype.filter.call(b,function(b){return b!==a[0]})}if(a&&"BODY"!==a[0].tagName)return b(a).forEach(function(a){var b="true"===a.getAttribute("aria-hidden"),c=parseInt(a.getAttribute(C),10);c||(c=b?1:0),a.setAttribute(C,c+1),a.setAttribute("aria-hidden","true")}),g(a.parent())}var h=c[0].activeElement,k=f.openedClass||w;n(!1),B=x.top(),x.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),y.put(k,b);var m=f.appendTo,o=l();o>=0&&!t&&(u=e.$new(!0),u.modalOptions=f,u.index=o,t=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),t.attr({"class":"modal-backdrop","ng-style":"{'z-index': 1040 + (index && 1 || 0) + index*10}","uib-modal-animation-class":"fade","modal-in-class":"in"}),f.backdropClass&&t.addClass(f.backdropClass),f.animation&&t.attr("modal-animation","true"),d(t)(u),a.enter(t,m),i.isScrollable(m)&&(v=i.scrollbarPadding(m),v.heightOverflow&&v.scrollbarWidth&&m.css({paddingRight:v.right+"px"})));var p;f.component?(p=document.createElement(j(f.component.name)),p=angular.element(p),p.attr({resolve:"$resolve","modal-instance":"$uibModalInstance",close:"$close($value)",dismiss:"$dismiss($value)"})):p=f.content,A=B?parseInt(B.value.modalDomEl.attr("index"),10)+1:0;var q=angular.element('<div uib-modal-window="modal-window"></div>');q.attr({"class":"modal","template-url":f.windowTemplateUrl,"window-top-class":f.windowTopClass,role:"dialog","aria-labelledby":f.ariaLabelledBy,"aria-describedby":f.ariaDescribedBy,size:f.size,index:A,animate:"animate","ng-style":"{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",tabindex:-1,"uib-modal-animation-class":"fade","modal-in-class":"in"}).append(p),f.windowClass&&q.addClass(f.windowClass),f.animation&&q.attr("modal-animation","true"),m.addClass(k),f.scope&&(f.scope.$$topModalIndex=A),a.enter(d(q)(f.scope),m),x.top().value.modalDomEl=q,x.top().value.modalOpener=h,g(q)},z.close=function(a,b){var c=x.get(a);return s(),c&&r(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),m(a,c.value.modalOpener),!0):!c},z.dismiss=function(a,b){var c=x.get(a);return s(),c&&r(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),m(a,c.value.modalOpener),!0):!c},z.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},z.getTop=function(){return x.top()},z.modalRendered=function(a){var b=x.get(a);b&&b.value.renderDeferred.resolve()},z.focusFirstFocusableElement=function(a){return a.length>0?(a[0].focus(),!0):!1},z.focusLastFocusableElement=function(a){return a.length>0?(a[a.length-1].focus(),!0):!1},z.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},z.isFocusInFirstItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[0]:!1},z.isFocusInLastItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[b.length-1]:!1},z.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll(D);return c?Array.prototype.filter.call(c,function(a){return k(a)}):c}}},z}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return q}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.appendTo.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");if(!e.component&&!e.template&&!e.templateUrl)throw new Error("One of component or template or templateUrl options is required.");var q;q=e.component?c.when(g.resolve(e.resolve,{},null,null)):c.all([i(e),g.resolve(e.resolve,{},null,null)]);var r;return r=k=c.all([k]).then(j,j).then(function(a){function c(b,c,d,e){b.$scope=g,b.$scope.$resolve={},d?b.$scope.$uibModalInstance=p:b.$uibModalInstance=p;var f=c?a[1]:a;angular.forEach(f,function(a,c){e&&(b[c]=a),b.$scope.$resolve[c]=a})}var d=e.scope||b,g=d.$new();g.$close=p.close,g.$dismiss=p.dismiss,g.$on("$destroy",function(){g.$$uibDestructionScheduled||g.$dismiss("$uibUnscheduledDestruction")});var i,j,k={scope:g,deferred:l,renderDeferred:o,closedDeferred:n,animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,ariaLabelledBy:e.ariaLabelledBy,ariaDescribedBy:e.ariaDescribedBy,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo},q={},r={};e.component?(c(q,!1,!0,!1),q.name=e.component,k.component=q):e.controller&&(c(r,!0,!1,!0),j=f(e.controller,r,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(i=j.instance,i.$close=g.$close,i.$dismiss=g.$dismiss,angular.extend(i,{$resolve:r.$scope.$resolve},d)),i=j(),angular.isFunction(i.$onInit)&&i.$onInit()),e.component||(k.content=a[0]),h.open(p,k),m.resolve(!0)},function(a){m.reject(a),l.reject(a)})["finally"](function(){k===r&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){
b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault();var e=!c.ngDisabled||!d;e&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],restrict:"A",controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},link:function(b,c,d,e){c.addClass("pager");var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),e=d+i-1,e>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o)}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,b.$set("role","menu"),d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],restrict:"A",controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},link:function(a,c,d,e){c.addClass("pagination");var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),b=null)}}var o=m.createNew();return h.on("keyup",n),k.$on("$destroy",function(){h.off("keyup",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'origin-scope="origScope" class="uib-position-measure '+k+'" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){P.isOpen?q():m()}function m(){O&&!a.$eval(d[k+"Enable"])||(u(),x(),P.popupDelay?H||(H=g(r,P.popupDelay,!1)):r())}function q(){s(),P.popupCloseDelay?I||(I=g(t,P.popupCloseDelay,!1)):t()}function r(){return s(),u(),P.content?(v(),void P.$evalAsync(function(){P.isOpen=!0,y(!0),U()})):angular.noop}function s(){H&&(g.cancel(H),H=null),J&&(g.cancel(J),J=null)}function t(){P&&P.$evalAsync(function(){P&&(P.isOpen=!1,y(!1),P.animation?G||(G=g(w,150,!1)):w())})}function u(){I&&(g.cancel(I),I=null),G&&(g.cancel(G),G=null)}function v(){E||(F=P.$new(),E=c(F,function(a){M?h.find("body").append(a):b.after(a)}),o.add(P,{close:t}),z())}function w(){s(),u(),A(),E&&(E.remove(),E=null,K&&g.cancel(K)),o.remove(P),F&&(F.$destroy(),F=null)}function x(){P.title=d[k+"Title"],S?P.content=S(a):P.content=d[e],P.popupClass=d[k+"Class"],P.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(P.placement);L=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);P.popupDelay=isNaN(c)?n.popupDelay:c,P.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){R&&angular.isFunction(R.assign)&&R.assign(a,b)}function z(){T.length=0,S?(T.push(a.$watch(S,function(a){P.content=a,!a&&P.isOpen&&t()})),T.push(F.$watch(function(){Q||(Q=!0,F.$$postDigest(function(){Q=!1,P&&P.isOpen&&U()}))}))):T.push(d.$observe(e,function(a){P.content=a,!a&&P.isOpen?t():U()})),T.push(d.$observe(k+"Title",function(a){P.title=a,P.isOpen&&U()})),T.push(d.$observe(k+"Placement",function(a){P.placement=a?a:n.placement,P.isOpen&&U()}))}function A(){T.length&&(angular.forEach(T,function(a){a()}),T.length=0)}function B(a){P&&P.isOpen&&E&&(b[0].contains(a.target)||E[0].contains(a.target)||q())}function C(a){27===a.which&&q()}function D(){var c=[],e=[],f=a.$eval(d[k+"Trigger"]);V(),angular.isObject(f)?(Object.keys(f).forEach(function(a){c.push(a),e.push(f[a])}),N={show:c,hide:e}):N=p(f),"none"!==N.show&&N.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===N.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(N.hide[c],q)),b.on("keypress",C)})}var E,F,G,H,I,J,K,L,M=angular.isDefined(n.appendToBody)?n.appendToBody:!1,N=p(void 0),O=angular.isDefined(d[k+"Enable"]),P=a.$new(!0),Q=!1,R=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,S=n.useContentExp?l(d[e]):!1,T=[],U=function(){E&&E.html()&&(J||(J=g(function(){var a=i.positionElements(b,E,P.placement,M),c=angular.isDefined(E.offsetHeight)?E.offsetHeight:E.prop("offsetHeight"),d=M?i.offset(b):i.position(b);E.css({top:a.top+"px",left:a.left+"px"});var e=a.placement.split("-");E.hasClass(e[0])||(E.removeClass(L.split("-")[0]),E.addClass(e[0])),E.hasClass(n.placementClassPrefix+a.placement)||(E.removeClass(n.placementClassPrefix+L),E.addClass(n.placementClassPrefix+a.placement)),K=g(function(){var a=angular.isDefined(E.offsetHeight)?E.offsetHeight:E.prop("offsetHeight"),b=i.adjustTop(e,d,c,a);b&&E.css(b),K=null},0,!1),E.hasClass("uib-position-measure")?(i.positionArrow(E,a.placement),E.removeClass("uib-position-measure")):L!==a.placement&&i.positionArrow(E,a.placement),L=a.placement,J=null},0,!1)))};P.origScope=a,P.isOpen=!1,P.contentExp=function(){return P.content},d.$observe("disabled",function(a){a&&s(),a&&P.isOpen&&t()}),R&&a.$watch(R,function(a){P&&!a===P.isOpen&&j()});var V=function(){N.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j)),b.off("keypress",C)}),N.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};D();var W=a.$eval(d[k+"Animation"]);P.animation=angular.isDefined(W)?!!W:n.animation;var X,Y=k+"AppendToBody";X=Y in d&&void 0===d[Y]?!0:a.$eval(d[Y]),M=angular.isDefined(X)?X:M,a.$on("$destroy",function(){V(),w(),P=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{restrict:"A",scope:{content:"@"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{restrict:"A",scope:{contentExp:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{restrict:"A",scope:{uibTitle:"@",contentExp:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&",uibTitle:"@"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{restrict:"A",scope:{uibTitle:"@",content:"@"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],restrict:"A",scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours,c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===y[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes,c=b>=0&&60>b;return c&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),x.$setViewValue(new Date(v)),n(a)}function m(){s&&s.$setValidity("hours",!0),t&&t.$setValidity("minutes",!0),u&&u.$setValidity("seconds",!0),x.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(x.$modelValue){var c=v.getHours(),d=v.getMinutes(),e=v.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!z),"m"!==b&&(a.minutes=k(d)),a.meridian=v.getHours()<12?y[0]:y[1],"s"!==b&&(a.seconds=k(e)),a.meridian=v.getHours()<12?y[0]:y[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=y[0]}function o(a){v=q(v,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s,t,u,v=new Date,w=[],x={$setViewValue:angular.noop},y=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,z=angular.isDefined(c.padHours)?a.$parent.$eval(c.padHours):!0;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){x=b,x.$render=this.render,x.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2);s=e.controller("ngModel"),t=f.controller("ngModel"),u=h.controller("ngModel");var i=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;i&&this.setupMousewheelEvents(e,f,h);var j=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;j&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var A=g.hourStep;c.hourStep&&w.push(a.$parent.$watch(d(c.hourStep),function(a){A=+a}));var B=g.minuteStep;c.minuteStep&&w.push(a.$parent.$watch(d(c.minuteStep),function(a){B=+a}));var C;w.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);C=isNaN(b)?void 0:b}));var D;w.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);D=isNaN(b)?void 0:b}));var E=!1;c.ngDisabled&&w.push(a.$parent.$watch(d(c.ngDisabled),function(a){E=a})),a.noIncrementHours=function(){var a=p(v,60*A);return E||a>D||v>a&&C>a},a.noDecrementHours=function(){var a=p(v,60*-A);return E||C>a||a>v&&a>D},a.noIncrementMinutes=function(){var a=p(v,B);return E||a>D||v>a&&C>a},a.noDecrementMinutes=function(){var a=p(v,-B);return E||C>a||a>v&&a>D},a.noIncrementSeconds=function(){var a=q(v,F);return E||a>D||v>a&&C>a},a.noDecrementSeconds=function(){var a=q(v,-F);return E||C>a||a>v&&a>D},a.noToggleMeridian=function(){return v.getHours()<12?E||p(v,720)>D:E||p(v,-720)<C};var F=g.secondStep;c.secondStep&&w.push(a.$parent.$watch(d(c.secondStep),function(a){F=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&w.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&w.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,x.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(v.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){x.$setViewValue(null),x.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b,s&&s.$setValidity("hours",!1)),angular.isDefined(c)&&(a.invalidMinutes=c,t&&t.$setValidity("minutes",!1)),angular.isDefined(d)&&(a.invalidSeconds=d,u&&u.$setValidity("seconds",!1))};a.updateHours=function(){var a=h(),b=i();x.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(v.setHours(a),v.setMinutes(b),C>v||v>D?e(!0):l("h")):e(!0)},b.on("blur",function(b){x.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!z)})}),a.updateMinutes=function(){var a=i(),b=h();x.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(v.setHours(b),v.setMinutes(a),C>v||v>D?e(void 0,!0):l("m")):e(void 0,!0)},c.on("blur",function(b){x.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();x.$setDirty(),angular.isDefined(a)?(v.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.on("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=x.$viewValue;isNaN(b)?(x.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(v=b),C>v||v>D?(x.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*A*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-A*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*B)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-B)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(F)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-F)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(v.getHours()<12?60:-60)):a.meridian=a.meridian===y[0]?y[1]:y[0])},a.blur=function(){x.$setTouched()},a.$on("$destroy",function(){for(;w.length;)w.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],restrict:"A",controller:"UibTimepickerController",controllerAs:"timepicker",scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){P.moveInProgress||(P.moveInProgress=!0,P.$digest()),$()}function o(){P.position=F?l.offset(b):l.position(b),P.position.top+=b.prop("offsetHeight")}function p(a){var b;return angular.version.minor<6?(b=a.$options||{},b.getOption=function(a){return b[a]}):b=a.$options,b}var q,r,s=[9,13,27,38,40],t=200,u=a.$eval(c.typeaheadMinLength);u||0===u||(u=1),a.$watch(c.typeaheadMinLength,function(a){u=a||0===a?a:1});var v=a.$eval(c.typeaheadWaitMs)||0,w=a.$eval(c.typeaheadEditable)!==!1;a.$watch(c.typeaheadEditable,function(a){w=a!==!1});var x,y,z=e(c.typeaheadLoading).assign||angular.noop,A=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},B=e(c.typeaheadOnSelect),C=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,D=e(c.typeaheadNoResults).assign||angular.noop,E=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,F=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,G=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,H=a.$eval(c.typeaheadFocusFirst)!==!1,I=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,J=e(c.typeaheadIsOpen).assign||angular.noop,K=a.$eval(c.typeaheadShowHint)||!1,L=e(c.ngModel),M=e(c.ngModel+"($$$p)"),N=function(b,c){return angular.isFunction(L(a))&&r.getOption("getterSetter")?M(b,{$$$p:c}):L.assign(b,c)},O=m.parse(c.uibTypeahead),P=a.$new(),Q=a.$on("$destroy",function(){P.$destroy()});P.$on("$destroy",Q);var R="typeahead-"+P.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":R});var S,T;K&&(S=angular.element("<div></div>"),S.css("position","relative"),b.after(S),T=b.clone(),T.attr("placeholder",""),T.attr("tabindex","-1"),T.val(""),T.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),T.attr("id")&&T.removeAttr("id"),S.append(T),T.after(b));var U=angular.element("<div uib-typeahead-popup></div>");U.attr({id:R,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&U.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&U.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var V=function(){K&&T.val("")},W=function(){P.matches=[],P.activeIdx=-1,b.attr("aria-expanded",!1),V()},X=function(a){return R+"-option-"+a};P.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",X(a))});var Y=function(a,b){return P.matches.length>b&&a?a.toUpperCase()===P.matches[b].label.toUpperCase():!1},Z=function(c,d){var e={$viewValue:c};z(a,!0),D(a,!1),f.when(O.source(a,e)).then(function(f){var g=c===q.$viewValue;if(g&&x)if(f&&f.length>0){P.activeIdx=H?0:-1,D(a,!1),P.matches.length=0;for(var h=0;h<f.length;h++)e[O.itemName]=f[h],P.matches.push({id:X(h),label:O.viewMapper(P,e),model:f[h]});if(P.query=c,o(),b.attr("aria-expanded",!0),I&&1===P.matches.length&&Y(c,0)&&(angular.isNumber(P.debounceUpdate)||angular.isObject(P.debounceUpdate)?k(function(){P.select(0,d)},angular.isNumber(P.debounceUpdate)?P.debounceUpdate:P.debounceUpdate["default"]):P.select(0,d)),K){var i=P.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?T.val(c+i.slice(c.length)):T.val("")}}else W(),D(a,!0);g&&z(a,!1)},function(){W(),z(a,!1),D(a,!0)})};F&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var $=k(function(){P.matches.length&&o(),P.moveInProgress=!1},t);P.moveInProgress=!1,P.query=void 0;var _,aa=function(a){_=g(function(){Z(a)},v)},ba=function(){_&&g.cancel(_)};W(),P.assignIsOpen=function(b){J(a,b)},P.select=function(d,e){var f,h,i={};y=!0,i[O.itemName]=h=P.matches[d].model,f=O.modelMapper(a,i),N(a,f),q.$setValidity("editable",!0),q.$setValidity("parse",!0),B(a,{$item:h,$model:f,$label:O.viewMapper(a,i),$event:e}),W(),P.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==P.matches.length&&-1!==s.indexOf(b.which)){var c=A(a,{$event:b});if(-1===P.activeIdx&&c||9===b.which&&b.shiftKey)return W(),void P.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),W(),a.$digest();break;case 38:P.activeIdx=(P.activeIdx>0?P.activeIdx:P.matches.length)-1,P.$digest(),d=U[0].querySelectorAll(".uib-typeahead-match")[P.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:P.activeIdx=(P.activeIdx+1)%P.matches.length,P.$digest(),d=U[0].querySelectorAll(".uib-typeahead-match")[P.activeIdx],
d.parentNode.scrollTop=d.offsetTop;break;default:c&&P.$apply(function(){angular.isNumber(P.debounceUpdate)||angular.isObject(P.debounceUpdate)?k(function(){P.select(P.activeIdx,b)},angular.isNumber(P.debounceUpdate)?P.debounceUpdate:P.debounceUpdate["default"]):P.select(P.activeIdx,b)})}}}),b.on("focus",function(a){x=!0,0!==u||q.$viewValue||g(function(){Z(q.$viewValue,a)},0)}),b.on("blur",function(a){C&&P.matches.length&&-1!==P.activeIdx&&!y&&(y=!0,P.$apply(function(){angular.isObject(P.debounceUpdate)&&angular.isNumber(P.debounceUpdate.blur)?k(function(){P.select(P.activeIdx,a)},P.debounceUpdate.blur):P.select(P.activeIdx,a)})),!w&&q.$error.editable&&(q.$setViewValue(),P.$apply(function(){q.$setValidity("editable",!0),q.$setValidity("parse",!0)}),b.val("")),x=!1,y=!1});var ca=function(c){b[0]!==c.target&&3!==c.which&&0!==P.matches.length&&(W(),j.$$phase||a.$digest())};h.on("click",ca),a.$on("$destroy",function(){h.off("click",ca),(F||G)&&da.remove(),F&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),U.remove(),K&&S.remove()});var da=d(U)(P);F?h.find("body").append(da):G?angular.element(G).eq(0).append(da):b.after(da),this.init=function(b){q=b,r=p(q),P.debounceUpdate=e(r.getOption("debounce"))(a),q.$parsers.unshift(function(b){return x=!0,0===u||b&&b.length>=u?v>0?(ba(),aa(b)):Z(b):(z(a,!1),ba(),W()),w?b:b?void q.$setValidity("editable",!1):(q.$setValidity("editable",!0),null)}),q.$formatters.push(function(b){var c,d,e={};return w||q.$setValidity("editable",!0),E?(e.$model=b,E(a,e)):(e[O.itemName]=b,c=O.viewMapper(a,e),e[O.itemName]=void 0,d=O.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","uibTypeahead"],link:function(a,b,c,d){d[1].init(d[0])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e["default"]):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion-group.html",'<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n  <h4 class="panel-title">\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n  </h4>\n</div>\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n  <div class="panel-body" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("uib/template/alert/alert.html",'<button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n  <span aria-hidden="true">&times;</span>\n  <span class="sr-only">Close</span>\n</button>\n<div ng-transclude></div>\n')}]),angular.module("uib/template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/carousel.html",'<div class="carousel-inner" ng-transclude></div>\n<a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n  <span class="sr-only">previous</span>\n</a>\n<a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n  <span class="sr-only">next</span>\n</a>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>\n')}]),angular.module("uib/template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/slide.html",'<div class="text-center" ng-transclude></div>\n')}]),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/datepicker.html",'<div ng-switch="datepickerMode">\n  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker"></div>\n  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker"></div>\n  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker"></div>\n</div>\n')}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index" role="row">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::yearHeaderColspan}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepickerPopup/popup.html",'<ul role="presentation" class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n  <li ng-transclude></li>\n  <li ng-if="showButtonBar" class="uib-button-bar">\n    <span class="btn-group pull-left">\n      <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n    </span>\n    <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/window.html","<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n")}]),angular.module("uib/template/pager/pager.html",[]).run(["$templateCache",function(a){a.put("uib/template/pager/pager.html",'<li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n')}]),angular.module("uib/template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("uib/template/pagination/pagination.html",'<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'first\')}}</a></li>\n<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li role="menuitem" ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a></li>\n<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a></li>\n')}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n')}]),angular.module("uib/template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-html.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-template.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content"\n      uib-tooltip-template-transclude="contentExp()"\n      tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind="content"></div>\n</div>\n')}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("uib/template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')}]),angular.module("uib/template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tab.html",'<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("uib/template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("uib/template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/timepicker/timepicker.html",'<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-match.html",'<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')}]),angular.module("uib/template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li class="uib-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0});
angular.module("cgBusy",[]),angular.module("cgBusy").factory("_cgBusyTrackerFactory",["$timeout","$q",function(a,b){return function(){var c={};c.promises=[],c.delayPromise=null,c.durationPromise=null,c.delayJustFinished=!1,c.reset=function(b){c.minDuration=b.minDuration,c.promises=[],angular.forEach(b.promises,function(a){a&&!a.$cgBusyFulfilled&&d(a)}),0!==c.promises.length&&(c.delayJustFinished=!1,b.delay&&(c.delayPromise=a(function(){c.delayPromise=null,c.delayJustFinished=!0},parseInt(b.delay,10))),b.minDuration&&(c.durationPromise=a(function(){c.durationPromise=null},parseInt(b.minDuration,10)+(b.delay?parseInt(b.delay,10):0))))},c.isPromise=function(a){var b=a&&(a.then||a.$then||a.$promise&&a.$promise.then);return"undefined"!=typeof b},c.callThen=function(a,c,d){var e;a.then||a.$then?e=a:a.$promise?e=a.$promise:a.denodeify&&(e=b.when(a));var f=e.then||e.$then;f.call(e,c,d)};var d=function(a){if(!c.isPromise(a))throw new Error("cgBusy expects a promise (or something that has a .promise or .$promise");-1===c.promises.indexOf(a)&&(c.promises.push(a),c.callThen(a,function(){a.$cgBusyFulfilled=!0,-1!==c.promises.indexOf(a)&&c.promises.splice(c.promises.indexOf(a),1)},function(){a.$cgBusyFulfilled=!0,-1!==c.promises.indexOf(a)&&c.promises.splice(c.promises.indexOf(a),1)}))};return c.active=function(){return c.delayPromise?!1:c.delayJustFinished?(c.delayJustFinished=!1,0===c.promises.length&&(c.durationPromise=null),c.promises.length>0):c.durationPromise?!0:c.promises.length>0},c}}]),angular.module("cgBusy").value("cgBusyDefaults",{}),angular.module("cgBusy").directive("cgBusy",["$compile","$templateCache","cgBusyDefaults","$http","_cgBusyTrackerFactory",function(a,b,c,d,e){return{restrict:"A",link:function(f,g,h){var i=g.css("position");("static"===i||""===i||"undefined"==typeof i)&&g.css("position","relative");var j,k,l,m,n,o=e(),p={templateUrl:"angular-busy.html",delay:0,minDuration:0,backdrop:!0,message:"Please Wait...",wrapperClass:"cg-busy cg-busy-animation"};angular.extend(p,c),f.$watchCollection(h.cgBusy,function(c){if(c||(c={promise:null}),angular.isString(c))throw new Error("Invalid value for cg-busy. cgBusy no longer accepts string ids to represent promises/trackers.");(angular.isArray(c)||o.isPromise(c))&&(c={promise:c}),c=angular.extend(angular.copy(p),c),c.templateUrl||(c.templateUrl=p.templateUrl),angular.isArray(c.promise)||(c.promise=[c.promise]),m||(m=f.$new()),m.$message=c.message,angular.equals(o.promises,c.promise)||o.reset({promises:c.promise,delay:c.delay,minDuration:c.minDuration}),m.$cgBusyIsActive=function(){return o.active()},j&&l===c.templateUrl&&n===c.backdrop||(j&&j.remove(),k&&k.remove(),l=c.templateUrl,n=c.backdrop,d.get(l,{cache:b}).then(function(b){if(c.backdrop="undefined"==typeof c.backdrop?!0:c.backdrop,c.backdrop){var d='<div class="cg-busy cg-busy-backdrop cg-busy-backdrop-animation ng-hide" ng-show="$cgBusyIsActive()"></div>';k=a(d)(m),g.append(k)}var e='<div class="'+c.wrapperClass+' ng-hide" ng-show="$cgBusyIsActive()">'+b.data+"</div>";j=a(e)(m),angular.element(j.children()[0]).css("position","absolute").css("top",0).css("left",0).css("right",0).css("bottom",0),g.append(j)},function(a){throw new Error("Template specified for cgBusy ("+c.templateUrl+") could not be loaded. "+a)}))},!0)}}}]),angular.module("cgBusy").run(["$templateCache",function(a){"use strict";a.put("angular-busy.html",'<div class="cg-busy-default-wrapper">\n\n   <div class="cg-busy-default-sign">\n\n      <div class="cg-busy-default-spinner">\n         <div class="bar1"></div>\n         <div class="bar2"></div>\n         <div class="bar3"></div>\n         <div class="bar4"></div>\n         <div class="bar5"></div>\n         <div class="bar6"></div>\n         <div class="bar7"></div>\n         <div class="bar8"></div>\n         <div class="bar9"></div>\n         <div class="bar10"></div>\n         <div class="bar11"></div>\n         <div class="bar12"></div>\n      </div>\n\n      <div class="cg-busy-default-text">{{$message}}</div>\n\n   </div>\n\n</div>')}]);
/*! ngstorage 0.3.6 | Copyright (c) 2015 Gias Kay Lee | MIT License */!function(a,b){"use strict";return"function"==typeof define&&define.amd?void define("ngStorage",["angular"],function(a){return b(a)}):b(a)}("undefined"==typeof angular?null:angular,function(a){"use strict";function b(b){return["$rootScope","$window","$log","$timeout",function(c,d,e,f){function g(a){var b;try{b=d[a]}catch(c){b=!1}if(b&&"localStorage"===a){var e="__"+Math.round(1e7*Math.random());try{localStorage.setItem(e,e),localStorage.removeItem(e)}catch(c){b=!1}}return b}var h,i,j=g(b)||(e.warn("This browser does not support Web Storage!"),{setItem:function(){},getItem:function(){}}),k={$default:function(b){for(var c in b)a.isDefined(k[c])||(k[c]=b[c]);return k},$reset:function(a){for(var b in k)"$"===b[0]||delete k[b]&&j.removeItem("ngStorage-"+b);return k.$default(a)}};try{j=d[b],j.length}catch(l){e.warn("This browser does not support Web Storage!"),j={}}for(var m,n=0,o=j.length;o>n;n++)(m=j.key(n))&&"ngStorage-"===m.slice(0,10)&&(k[m.slice(10)]=a.fromJson(j.getItem(m)));return h=a.copy(k),c.$watch(function(){var b;i||(i=f(function(){if(i=null,!a.equals(k,h)){b=a.copy(h),a.forEach(k,function(c,d){a.isDefined(c)&&"$"!==d[0]&&j.setItem("ngStorage-"+d,a.toJson(c)),delete b[d]});for(var c in b)j.removeItem("ngStorage-"+c);h=a.copy(k)}},100,!1))}),"localStorage"===b&&d.addEventListener&&d.addEventListener("storage",function(b){"ngStorage-"===b.key.slice(0,10)&&(b.newValue?k[b.key.slice(10)]=a.fromJson(b.newValue):delete k[b.key.slice(10)],h=a.copy(k),c.$apply())}),k}]}a.module("ngStorage",[]).factory("$localStorage",b("localStorage")).factory("$sessionStorage",b("sessionStorage"))});
/*! Embedly jQuery - v3.1.1 - 2013-06-05
 * https://github.com/embedly/embedly-jquery
 * Copyright (c) 2013 Sean Creeley
 * Licensed BSD
 */ 
(function(t){var e={key:null,endpoint:"oembed",secure:null,query:{},method:"replace",addImageStyles:!0,wrapElement:"div",className:"embed",batch:20,urlRe:null},i=/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,r=function(t){return null===t||void 0===t},n=function(e,i){var r=[],n=[];return t.each(e,function(t,e){n.push(e),n.length===i&&(r.push(n),n=[])}),0!==n.length&&r.push(n),r},s=function(e){return r(e)?[]:t.isArray(e)?e:[e]},o=function(e){return t.map(e[0],function(i,r){return[t.map(e,function(t){return t[r]})]})},a=function(t,e,i){this.init(t,e,i)};a.prototype={init:function(e){this.urls=e,this.count=0,this.results={},this._deferred=t.Deferred()},notify:function(e){if(this.results[e.original_url]=e,this.count++,this._deferred.notify.apply(this._deferred,[e]),this.count===this.urls.length){var i=this,r=t.map(this.urls,function(t){return i.results[t]});this._deferred.resolve(r)}return this},state:function(){return this._deferred.state.apply(this._deferred,arguments)}},window.Keeper=a;var l=function(){};l.prototype={defaults:{},log:function(t,e){r(window.console)||r(window.console[t])||window.console[t].apply(window.console,[e])},build:function(e,i,n){n=r(n)?{}:n;var s=n.secure;r(s)&&(s="https:"===window.location.protocol?!0:!1);var o=(s?"https":"http")+"://api.embed.ly/"+("objectify"===e?"2/":"1/")+e,a=r(n.query)?{}:n.query;return a.key=n.key,o+="?"+t.param(a),o+="&urls="+t.map(i,encodeURIComponent).join(",")},ajax:function(l,h,u){if(u=t.extend({},e,t.embedly.defaults,"object"==typeof u&&u),r(u.key))return this.log("error","Embedly jQuery requires an API Key. Please sign up for one at http://embed.ly"),null;h=s(h);var d,p=new a(h),c=[],f=[];t.each(h,function(t,e){d=!1,i.test(e)&&(d=!0,null!==u.urlRe&&u.urlRe.test&&!u.urlRe.test(e)&&(d=!1)),d===!0?c.push(e):f.push({url:e,original_url:e,error:!0,invalid:!0,type:"error",error_message:'Invalid URL "'+e+'"'})});var y=n(c,u.batch),m=this;return t.each(y,function(e,i){t.ajax({url:m.build(l,i,u),dataType:"jsonp",success:function(e){t.each(o([i,e]),function(t,e){var i=e[1];i.original_url=e[0],i.invalid=!1,p.notify(i)})}})}),f.length&&setTimeout(function(){t.each(f,function(t,e){p.notify(e)})},1),p._deferred},oembed:function(t,e){return this.ajax("oembed",t,e)},preview:function(t,e){return this.ajax("preview",t,e)},objectify:function(t,e){return this.ajax("objectify",t,e)},extract:function(t,e){return this.ajax("extract",t,e)}};var h=function(){};h.prototype={build:function(e,i,n){n=t.extend({},t.embedly.defaults,"object"==typeof n&&n);var s=n.secure;r(s)&&(s="https:"===window.location.protocol?!0:!1);var o=(s?"https":"http")+"://i.embed.ly/"+("display"===e?"1/":"1/display/")+e,a=r(n.query)?{}:n.query;return a.key=n.key,o+="?"+t.param(a),o+="&url="+encodeURIComponent(i)},display:function(t,e){return this.build("display",t,e)},resize:function(t,e){return this.build("resize",t,e)},fill:function(t,e){return this.build("fill",t,e)},crop:function(t,e){return this.build("crop",t,e)}};var u=function(t,e,i){this.init(t,e,i)};u.prototype={init:function(e,i,r){this.elem=e,this.$elem=t(e),this.original_url=i,this.options=r,this.loaded=t.Deferred();var n=this;this.loaded.done(function(){n.$elem.trigger("loaded",[n])}),this.$elem.trigger("initialized",[this])},progress:function(e){t.extend(this,e),this.options.display?this.options.display.apply(this.elem,[this,this.elem]):"oembed"===this.options.endpoint&&this.display(),this.loaded.resolve(this)},imageStyle:function(){var t,e=[];return this.options.addImageStyles&&(this.options.query.maxwidth&&(t=isNaN(parseInt(this.options.query.maxwidth,10))?"":"px",e.push("max-width: "+this.options.query.maxwidth+t)),this.options.query.maxheight&&(t=isNaN(parseInt(this.options.query.maxheight,10))?"":"px",e.push("max-height: "+this.options.query.maxheight+t))),e.join(";")},display:function(){if("error"===this.type)return!1;this.style=this.imageStyle();var t;"photo"===this.type?(t="<a href='"+this.original_url+"' target='_blank'>",t+="<img style='"+this.style+"' src='"+this.url+"' alt='"+this.title+"' /></a>"):"video"===this.type||"rich"===this.type?t=this.html:(this.title=this.title||this.url,t=this.thumbnail_url?"<img src='"+this.thumbnail_url+"' class='thumb' style='"+this.style+"'/>":"",t+="<a href='"+this.original_url+"'>"+this.title+"</a>",t+=this.provider_name?"<a href='"+this.provider_url+"' class='provider'>"+this.provider_name+"</a>":"",t+=this.description?'<div class="description">'+this.description+"</div>":""),this.options.wrapElement&&(t="<"+this.options.wrapElement+' class="'+this.options.className+'">'+t+"</"+this.options.wrapElement+">"),this.code=t,"replace"===this.options.method?this.$elem.replaceWith(this.code):"after"===this.options.method?this.$elem.after(this.code):"afterParent"===this.options.method?this.$elem.parent().after(this.code):"replaceParent"===this.options.method&&this.$elem.parent().replaceWith(this.code),this.$elem.trigger("displayed",[this])}},t.embedly=new l,t.embedly.display=new h,t.fn.embedly=function(i){if(void 0===i||"object"==typeof i){if(i=t.extend({},e,t.embedly.defaults,"object"==typeof i&&i),r(i.key))return t.embedly.log("error","Embedly jQuery requires an API Key. Please sign up for one at http://embed.ly"),this.each(t.noop);var n={},s=function(e){if(!t.data(t(e),"embedly")){var r=t(e).attr("href"),s=new u(e,r,i);t.data(e,"embedly",s),n.hasOwnProperty(r)?n[r].push(s):n[r]=[s]}},o=this.each(function(){r(t(this).attr("href"))?t(this).find("a").each(function(){r(t(this).attr("href"))||s(this)}):s(this)}),a=t.embedly.ajax(i.endpoint,t.map(n,function(t,e){return e}),i).progress(function(e){t.each(n[e.original_url],function(t,i){i.progress(e)})});return i.progress&&a.progress(i.progress),i.done&&a.done(i.done),o}},t.expr[":"].embedly=function(e){return!r(t(e).data("embedly"))},t.fn.display=function(i,n){if(r(i)&&(i="display"),void 0===n||"object"==typeof n){if(n=t.extend({},e,t.embedly.defaults,"object"==typeof n&&n),r(n.key))return t.embedly.log("error","Embedly jQuery requires an API Key. Please sign up for one at http://embed.ly/display"),this.each(t.noop);var s=function(e){var r=t(e);if(!r.data("display")){var s=r.data("src")||r.attr("href"),o={original_url:s,url:t.embedly.display.build(i,s,n)};r.data("display",o),r.trigger("initialized",[e]);var a="<img src='"+o.url+"' />";r.is("a")?r.append(a):r.replaceWith(a)}},o=function(e){return r(t(e).data("src"))&&r(t(e).attr("href"))?!1:!0},a=this.each(function(){o(this)?s(this):t(this).find("img,a").each(function(){o(this)&&s(this)})});return a}},t.expr[":"].display=function(e){return!r(t(e).data("display"))}})(jQuery,window);
/*! ngTagsInput v3.2.0 License: MIT */!function(){"use strict";var a={backspace:8,tab:9,enter:13,escape:27,space:32,up:38,down:40,left:37,right:39,"delete":46,comma:188},b=9007199254740991,c=["text","email","url"],d=angular.module("ngTagsInput",[]);d.directive("tagsInput",["$timeout","$document","$window","$q","tagsInputConfig","tiUtil",function(d,e,f,g,h,i){function j(a,b,c,d){var e,f,h,j,k={};return e=function(b){return i.safeToString(b[a.displayProperty])},f=function(b,c){b[a.displayProperty]=c},h=function(b){var d=e(b),f=d&&d.length>=a.minLength&&d.length<=a.maxLength&&a.allowedTagsPattern.test(d)&&!i.findInObjectArray(k.items,b,a.keyProperty||a.displayProperty);return g.when(f&&c({$tag:b})).then(i.promisifyValue)},j=function(a){return g.when(d({$tag:a})).then(i.promisifyValue)},k.items=[],k.addText=function(a){var b={};return f(b,a),k.add(b)},k.add=function(c){var d=e(c);return a.replaceSpacesWithDashes&&(d=i.replaceSpacesWithDashes(d)),f(c,d),h(c).then(function(){k.items.push(c),b.trigger("tag-added",{$tag:c})})["catch"](function(){d&&b.trigger("invalid-tag",{$tag:c})})},k.remove=function(a){var c=k.items[a];return j(c).then(function(){return k.items.splice(a,1),k.clearSelection(),b.trigger("tag-removed",{$tag:c}),c})},k.select=function(a){0>a?a=k.items.length-1:a>=k.items.length&&(a=0),k.index=a,k.selected=k.items[a]},k.selectPrior=function(){k.select(--k.index)},k.selectNext=function(){k.select(++k.index)},k.removeSelected=function(){return k.remove(k.index)},k.clearSelection=function(){k.selected=null,k.index=-1},k.getItems=function(){return a.useStrings?k.items.map(e):k.items},k.clearSelection(),k}function k(a){return-1!==c.indexOf(a)}return{restrict:"E",require:"ngModel",scope:{tags:"=ngModel",text:"=?",templateScope:"=?",tagClass:"&",onTagAdding:"&",onTagAdded:"&",onInvalidTag:"&",onTagRemoving:"&",onTagRemoved:"&",onTagClicked:"&"},replace:!1,transclude:!0,templateUrl:"ngTagsInput/tags-input.html",controller:["$scope","$attrs","$element",function(a,c,d){a.events=i.simplePubSub(),h.load("tagsInput",a,c,{template:[String,"ngTagsInput/tag-item.html"],type:[String,"text",k],placeholder:[String,"Add a tag"],tabindex:[Number,null],removeTagSymbol:[String,String.fromCharCode(215)],replaceSpacesWithDashes:[Boolean,!0],minLength:[Number,3],maxLength:[Number,b],addOnEnter:[Boolean,!0],addOnSpace:[Boolean,!1],addOnComma:[Boolean,!0],addOnBlur:[Boolean,!0],addOnPaste:[Boolean,!1],pasteSplitPattern:[RegExp,/,/],allowedTagsPattern:[RegExp,/.+/],enableEditingLastTag:[Boolean,!1],minTags:[Number,0],maxTags:[Number,b],displayProperty:[String,"text"],keyProperty:[String,""],allowLeftoverText:[Boolean,!1],addFromAutocompleteOnly:[Boolean,!1],spellcheck:[Boolean,!0],useStrings:[Boolean,!1]}),a.tagList=new j(a.options,a.events,i.handleUndefinedResult(a.onTagAdding,!0),i.handleUndefinedResult(a.onTagRemoving,!0)),this.registerAutocomplete=function(){d.find("input");return{addTag:function(b){return a.tagList.add(b)},getTags:function(){return a.tagList.items},getCurrentTagText:function(){return a.newTag.text()},getOptions:function(){return a.options},getTemplateScope:function(){return a.templateScope},on:function(b,c){return a.events.on(b,c,!0),this}}},this.registerTagItem=function(){return{getOptions:function(){return a.options},removeTag:function(b){a.disabled||a.tagList.remove(b)}}}}],link:function(b,c,g,h){var j,k,l=[a.enter,a.comma,a.space,a.backspace,a["delete"],a.left,a.right],m=b.tagList,n=b.events,o=b.options,p=c.find("input"),q=["minTags","maxTags","allowLeftoverText"];j=function(){h.$setValidity("maxTags",m.items.length<=o.maxTags),h.$setValidity("minTags",m.items.length>=o.minTags),h.$setValidity("leftoverText",b.hasFocus||o.allowLeftoverText?!0:!b.newTag.text())},k=function(){d(function(){p[0].focus()})},h.$isEmpty=function(a){return!a||!a.length},b.newTag={text:function(a){return angular.isDefined(a)?(b.text=a,void n.trigger("input-change",a)):b.text||""},invalid:null},b.track=function(a){return a[o.keyProperty||o.displayProperty]},b.getTagClass=function(a,c){var d=a===m.selected;return[b.tagClass({$tag:a,$index:c,$selected:d}),{selected:d}]},b.$watch("tags",function(a){if(a){if(m.items=i.makeObjectArray(a,o.displayProperty),o.useStrings)return;b.tags=m.items}else m.items=[]}),b.$watch("tags.length",function(){j(),h.$validate()}),g.$observe("disabled",function(a){b.disabled=a}),b.eventHandlers={input:{keydown:function(a){n.trigger("input-keydown",a)},focus:function(){b.hasFocus||(b.hasFocus=!0,n.trigger("input-focus"))},blur:function(){d(function(){var a=e.prop("activeElement"),d=a===p[0],f=c[0].contains(a);(d||!f)&&(b.hasFocus=!1,n.trigger("input-blur"))})},paste:function(a){a.getTextData=function(){var b=a.clipboardData||a.originalEvent&&a.originalEvent.clipboardData;return b?b.getData("text/plain"):f.clipboardData.getData("Text")},n.trigger("input-paste",a)}},host:{click:function(){b.disabled||k()}},tag:{click:function(a){n.trigger("tag-clicked",{$tag:a})}}},n.on("tag-added",b.onTagAdded).on("invalid-tag",b.onInvalidTag).on("tag-removed",b.onTagRemoved).on("tag-clicked",b.onTagClicked).on("tag-added",function(){b.newTag.text("")}).on("tag-added tag-removed",function(){b.tags=m.getItems(),h.$setDirty(),k()}).on("invalid-tag",function(){b.newTag.invalid=!0}).on("option-change",function(a){-1!==q.indexOf(a.name)&&j()}).on("input-change",function(){m.clearSelection(),b.newTag.invalid=null}).on("input-focus",function(){c.triggerHandler("focus"),h.$setValidity("leftoverText",!0)}).on("input-blur",function(){o.addOnBlur&&!o.addFromAutocompleteOnly&&m.addText(b.newTag.text()),c.triggerHandler("blur"),j()}).on("input-keydown",function(c){var d,e,f,g,h=c.keyCode,j={};i.isModifierOn(c)||-1===l.indexOf(h)||(j[a.enter]=o.addOnEnter,j[a.comma]=o.addOnComma,j[a.space]=o.addOnSpace,d=!o.addFromAutocompleteOnly&&j[h],e=(h===a.backspace||h===a["delete"])&&m.selected,g=h===a.backspace&&0===b.newTag.text().length&&o.enableEditingLastTag,f=(h===a.backspace||h===a.left||h===a.right)&&0===b.newTag.text().length&&!o.enableEditingLastTag,d?m.addText(b.newTag.text()):g?(m.selectPrior(),m.removeSelected().then(function(a){a&&b.newTag.text(a[o.displayProperty])})):e?m.removeSelected():f&&(h===a.left||h===a.backspace?m.selectPrior():h===a.right&&m.selectNext()),(d||f||e||g)&&c.preventDefault())}).on("input-paste",function(a){if(o.addOnPaste){var b=a.getTextData(),c=b.split(o.pasteSplitPattern);c.length>1&&(c.forEach(function(a){m.addText(a)}),a.preventDefault())}})}}}]),d.directive("tiTagItem",["tiUtil",function(a){return{restrict:"E",require:"^tagsInput",template:'<ng-include src="$$template"></ng-include>',scope:{$scope:"=scope",data:"="},link:function(b,c,d,e){var f=e.registerTagItem(),g=f.getOptions();b.$$template=g.template,b.$$removeTagSymbol=g.removeTagSymbol,b.$getDisplayText=function(){return a.safeToString(b.data[g.displayProperty])},b.$removeTag=function(){f.removeTag(b.$index)},b.$watch("$parent.$index",function(a){b.$index=a})}}}]),d.directive("autoComplete",["$document","$timeout","$sce","$q","tagsInputConfig","tiUtil",function(b,c,d,e,f,g){function h(a,b,c){var d,f,h,i={};return h=function(){return b.tagsInput.keyProperty||b.tagsInput.displayProperty},d=function(a,c){return a.filter(function(a){return!g.findInObjectArray(c,a,h(),function(a,c){return b.tagsInput.replaceSpacesWithDashes&&(a=g.replaceSpacesWithDashes(a),c=g.replaceSpacesWithDashes(c)),g.defaultComparer(a,c)})})},i.reset=function(){f=null,i.items=[],i.visible=!1,i.index=-1,i.selected=null,i.query=null},i.show=function(){b.selectFirstMatch?i.select(0):i.selected=null,i.visible=!0},i.load=g.debounce(function(c,j){i.query=c;var k=e.when(a({$query:c}));f=k,k.then(function(a){k===f&&(a=g.makeObjectArray(a.data||a,h()),a=d(a,j),i.items=a.slice(0,b.maxResultsToShow),i.items.length>0?i.show():i.reset())})},b.debounceDelay),i.selectNext=function(){i.select(++i.index)},i.selectPrior=function(){i.select(--i.index)},i.select=function(a){0>a?a=i.items.length-1:a>=i.items.length&&(a=0),i.index=a,i.selected=i.items[a],c.trigger("suggestion-selected",a)},i.reset(),i}function i(a,b){var c=a.find("li").eq(b),d=c.parent(),e=c.prop("offsetTop"),f=c.prop("offsetHeight"),g=d.prop("clientHeight"),h=d.prop("scrollTop");h>e?d.prop("scrollTop",e):e+f>g+h&&d.prop("scrollTop",e+f-g)}return{restrict:"E",require:"^tagsInput",scope:{source:"&",matchClass:"&"},templateUrl:"ngTagsInput/auto-complete.html",controller:["$scope","$element","$attrs",function(a,b,c){a.events=g.simplePubSub(),f.load("autoComplete",a,c,{template:[String,"ngTagsInput/auto-complete-match.html"],debounceDelay:[Number,100],minLength:[Number,3],highlightMatchedText:[Boolean,!0],maxResultsToShow:[Number,10],loadOnDownArrow:[Boolean,!1],loadOnEmpty:[Boolean,!1],loadOnFocus:[Boolean,!1],selectFirstMatch:[Boolean,!0],displayProperty:[String,""]}),a.suggestionList=new h(a.source,a.options,a.events),this.registerAutocompleteMatch=function(){return{getOptions:function(){return a.options},getQuery:function(){return a.suggestionList.query}}}}],link:function(b,c,d,e){var f,h=[a.enter,a.tab,a.escape,a.up,a.down],j=b.suggestionList,k=e.registerAutocomplete(),l=b.options,m=b.events;l.tagsInput=k.getOptions(),f=function(a){return a&&a.length>=l.minLength||!a&&l.loadOnEmpty},b.templateScope=k.getTemplateScope(),b.addSuggestionByIndex=function(a){j.select(a),b.addSuggestion()},b.addSuggestion=function(){var a=!1;return j.selected&&(k.addTag(angular.copy(j.selected)),j.reset(),a=!0),a},b.track=function(a){return a[l.tagsInput.keyProperty||l.tagsInput.displayProperty]},b.getSuggestionClass=function(a,c){var d=a===j.selected;return[b.matchClass({$match:a,$index:c,$selected:d}),{selected:d}]},k.on("tag-added tag-removed invalid-tag input-blur",function(){j.reset()}).on("input-change",function(a){f(a)?j.load(a,k.getTags()):j.reset()}).on("input-focus",function(){var a=k.getCurrentTagText();l.loadOnFocus&&f(a)&&j.load(a,k.getTags())}).on("input-keydown",function(c){var d=c.keyCode,e=!1;if(!g.isModifierOn(c)&&-1!==h.indexOf(d))return j.visible?d===a.down?(j.selectNext(),e=!0):d===a.up?(j.selectPrior(),e=!0):d===a.escape?(j.reset(),e=!0):(d===a.enter||d===a.tab)&&(e=b.addSuggestion()):d===a.down&&b.options.loadOnDownArrow&&(j.load(k.getCurrentTagText(),k.getTags()),e=!0),e?(c.preventDefault(),c.stopImmediatePropagation(),!1):void 0}),m.on("suggestion-selected",function(a){i(c,a)})}}}]),d.directive("tiAutocompleteMatch",["$sce","tiUtil",function(a,b){return{restrict:"E",require:"^autoComplete",template:'<ng-include src="$$template"></ng-include>',scope:{$scope:"=scope",data:"="},link:function(c,d,e,f){var g=f.registerAutocompleteMatch(),h=g.getOptions();c.$$template=h.template,c.$index=c.$parent.$index,c.$highlight=function(c){return h.highlightMatchedText&&(c=b.safeHighlight(c,g.getQuery())),a.trustAsHtml(c)},c.$getDisplayText=function(){return b.safeToString(c.data[h.displayProperty||h.tagsInput.displayProperty])}}}}]),d.directive("tiTranscludeAppend",function(){return function(a,b,c,d,e){e(function(a){b.append(a)})}}),d.directive("tiAutosize",["tagsInputConfig",function(a){return{restrict:"A",require:"ngModel",link:function(b,c,d,e){var f,g,h=a.getTextAutosizeThreshold();f=angular.element('<span class="input"></span>'),f.css("display","none").css("visibility","hidden").css("width","auto").css("white-space","pre"),c.parent().append(f),g=function(a){var b,e=a;return angular.isString(e)&&0===e.length&&(e=d.placeholder),e&&(f.text(e),f.css("display",""),b=f.prop("offsetWidth"),f.css("display","none")),c.css("width",b?b+h+"px":""),a},e.$parsers.unshift(g),e.$formatters.unshift(g),d.$observe("placeholder",function(a){e.$modelValue||g(a)})}}}]),d.directive("tiBindAttrs",function(){return function(a,b,c){a.$watch(c.tiBindAttrs,function(a){angular.forEach(a,function(a,b){c.$set(b,a)})},!0)}}),d.provider("tagsInputConfig",function(){var a={},b={},c=3;this.setDefaults=function(b,c){return a[b]=c,this},this.setActiveInterpolation=function(a,c){return b[a]=c,this},this.setTextAutosizeThreshold=function(a){return c=a,this},this.$get=["$interpolate",function(d){var e={};return e[String]=function(a){return a},e[Number]=function(a){return parseInt(a,10)},e[Boolean]=function(a){return"true"===a.toLowerCase()},e[RegExp]=function(a){return new RegExp(a)},{load:function(c,f,g,h){var i=function(){return!0};f.options={},angular.forEach(h,function(h,j){var k,l,m,n,o,p;k=h[0],l=h[1],m=h[2]||i,n=e[k],o=function(){var b=a[c]&&a[c][j];return angular.isDefined(b)?b:l},p=function(a){f.options[j]=a&&m(a)?n(a):o()},b[c]&&b[c][j]?g.$observe(j,function(a){p(a),f.events.trigger("option-change",{name:j,newValue:a})}):p(g[j]&&d(g[j])(f.$parent))})},getTextAutosizeThreshold:function(){return c}}}]}),d.factory("tiUtil",["$timeout","$q",function(a,b){var c={};return c.debounce=function(b,c){var d;return function(){var e=arguments;a.cancel(d),d=a(function(){b.apply(null,e)},c)}},c.makeObjectArray=function(a,b){if(!angular.isArray(a)||0===a.length||angular.isObject(a[0]))return a;var c=[];return a.forEach(function(a){var d={};d[b]=a,c.push(d)}),c},c.findInObjectArray=function(a,b,d,e){var f=null;return e=e||c.defaultComparer,a.some(function(a){return e(a[d],b[d])?(f=a,!0):void 0}),f},c.defaultComparer=function(a,b){return c.safeToString(a).toLowerCase()===c.safeToString(b).toLowerCase()},c.safeHighlight=function(a,b){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}if(a=c.encodeHTML(a),b=c.encodeHTML(b),!b)return a;var e=new RegExp("&[^;]+;|"+d(b),"gi");return a.replace(e,function(a){return a.toLowerCase()===b.toLowerCase()?"<em>"+a+"</em>":a})},c.safeToString=function(a){return angular.isUndefined(a)||null==a?"":a.toString().trim()},c.encodeHTML=function(a){return c.safeToString(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},c.handleUndefinedResult=function(a,b){return function(){var c=a.apply(null,arguments);return angular.isUndefined(c)?b:c}},c.replaceSpacesWithDashes=function(a){return c.safeToString(a).replace(/\s/g,"-")},c.isModifierOn=function(a){return a.shiftKey||a.ctrlKey||a.altKey||a.metaKey},c.promisifyValue=function(a){return a=angular.isUndefined(a)?!0:a,b[a?"when":"reject"]()},c.simplePubSub=function(){var a={};return{on:function(b,c,d){return b.split(" ").forEach(function(b){a[b]||(a[b]=[]);var e=d?[].unshift:[].push;e.call(a[b],c)}),this},trigger:function(b,d){var e=a[b]||[];return e.every(function(a){return c.handleUndefinedResult(a,!0)(d)}),this}}},c}]),d.run(["$templateCache",function(a){a.put("ngTagsInput/tags-input.html",'<div class="host" tabindex="-1" ng-click="eventHandlers.host.click()" ti-transclude-append><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="getTagClass(tag, $index)" ng-click="eventHandlers.tag.click(tag)"><ti-tag-item scope="templateScope" data="::tag"></ti-tag-item></li></ul><input class="input" autocomplete="off" ng-model="newTag.text" ng-model-options="{getterSetter: true}" ng-keydown="eventHandlers.input.keydown($event)" ng-focus="eventHandlers.input.focus($event)" ng-blur="eventHandlers.input.blur($event)" ng-paste="eventHandlers.input.paste($event)" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ng-disabled="disabled" ti-bind-attrs="{type: options.type, placeholder: options.placeholder, tabindex: options.tabindex, spellcheck: options.spellcheck}" ti-autosize></div></div>'),a.put("ngTagsInput/tag-item.html",'<span ng-bind="$getDisplayText()"></span> <a class="remove-button" ng-click="$removeTag()" ng-bind="::$$removeTagSymbol"></a>'),a.put("ngTagsInput/auto-complete.html",'<div class="autocomplete" ng-if="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="getSuggestionClass(item, $index)" ng-click="addSuggestionByIndex($index)" ng-mouseenter="suggestionList.select($index)"><ti-autocomplete-match scope="templateScope" data="::item"></ti-autocomplete-match></li></ul></div>'),a.put("ngTagsInput/auto-complete-match.html",'<span ng-bind-html="$highlight($getDisplayText())"></span>')}])}();
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("angular"));
  else if(typeof define === 'function' && define.amd)
    define(["angular"], factory);
  else if(typeof exports === 'object')
    exports["imageCropper"] = factory(require("angular"));
  else
    root["imageCropper"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  var angular = __webpack_require__(1);
  
  var ngModule = angular.module('imageCropper', []);
  
  var Cropper = __webpack_require__(2);
  __webpack_require__(3)(angular, Cropper);
  
  module.exports = 'imageCropper';

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = Cropper;
  
  /**
   * Cropper.
   * @param options
   * @returns {Cropper}
   * @constructor
   */
  function Cropper(options) {
  
    if (!options.imageUrl) {
      throw new Error('Cropper: No image url given.');
    }
  
    this.isReady = false;
    this.originalUrl = options.imageUrl;
  
    // Default options.
    var defaults = {
      checkCrossOrigin: false,
      apiCallback: undefined,
      cropCallback: undefined,
      width: 400,
      height: 300,
      imageUrl: undefined,
      target: undefined,
      showControls: true,
      fitOnInit: false,
      centerOnInit: false,
      zoomStep: 0.1,
      actionLabels: {
        rotateLeft: ' < ',
        rotateRight: ' > ',
        zoomIn: ' + ',
        zoomOut: ' - ',
        fit: '(fit)',
        crop: '[crop]'
      }
    };
  
    // Setup options.
    this.options = this.extend(defaults, options);
  
    // Setup gesture events.
    this.gesture = {};
    this.gesture.events = {
      start: 'touchstart mousedown',
      move: 'touchmove mousemove',
      stop: 'touchend mouseup'
    };
  
    this.pointerPosition = undefined;
  
    // Setup basic elements.
    this.elements = {
      target: options.target,
      body: document.getElementsByTagName('body')[0]
    };
  
    this.buildDOM();
    this.useHardwareAccelerate(this.elements.image);
  
    // API Setup:
    var api = {
      crop: this.cropImage.bind(this),
      fit: this.applyFit.bind(this),
      rotate: this.applyRotation.bind(this),
      zoom: this.applyZoom.bind(this),
      remove: this.remove.bind(this)
    };
  
    /**
     * Initialization of the Cropper (dimensions, event binding...).
     */
    this.events.on('ImageReady', this.initialize.bind(this));
  
    /**
     * Execute callback function when cropped.
     */
    if (this.options.cropCallback) {
      this.events.on('Cropped', function(base64) {
        this.options.cropCallback(base64);
      }.bind(this));
    }
  
    /**
     * Send API when image is ready if readyCallback is true.
     */
    if (this.options.apiCallback) {
      this.events.on('ImageReady', function() {
        this.options.apiCallback(api);
      }.bind(this));
    }
  }
  
  Cropper.prototype.initialize = function() {
    this.setDimensions();
  
    if (this.imageHasToFit()) {
      this.fitImage();
      this.centerImage();
    }
    this.initializeGesture();
  
    if (this.options.centerOnInit) {
      this.centerImage();
    }
  
    if (this.options.showControls) {
      this.bindControls();
    }
  };
  
  Cropper.prototype.bindControls = function() {
    var self = this;
    this.elements.controls.rotateLeft.addEventListener('click', function() {
      self.applyRotation(-90);
    });
    this.elements.controls.rotateRight.addEventListener('click', function() {
      self.applyRotation(90);
    });
    this.elements.controls.zoomIn.addEventListener('click', function() {
      self.applyZoom(self.zoomInFactor);
    });
    this.elements.controls.zoomOut.addEventListener('click', function() {
      self.applyZoom(self.zoomOutFactor);
    });
    this.elements.controls.fit.addEventListener('click', this.applyFit.bind(this));
    this.elements.controls.crop.addEventListener('click', this.cropImage.bind(this));
  };
  
  Cropper.prototype.applyRotation = function(degree) {
    this.rotateImage(degree);
  };
  
  Cropper.prototype.applyZoom = function(zoom) {
    this.zoomImage(zoom);
  };
  
  Cropper.prototype.applyFit = function() {
    this.fitImage();
    this.centerImage();
  };
  
  Cropper.prototype.imageHasToFit = function() {
    return this.elements.image.naturalWidth < this.options.width ||
      this.elements.image.naturalHeight < this.options.height ||
      this.width < 1 || this.height < 1 || // 1 means 100%.
      this.options.fitOnInit;
  };
  
  /**
   * Build DOM element for the Cropper appended in the targeted element.
   */
  Cropper.prototype.buildDOM = function() {
    var _elements;
    _elements = this.elements;
  
    // Wrapper.
    _elements.wrapper = document.createElement('div');
    _elements.wrapper.className = 'imgCropper-wrapper';
  
    // Container.
    _elements.container = document.createElement('div');
    _elements.container.className = 'imgCropper-container';
  
    // Image.
    _elements.image = document.createElement('img');
    _elements.image.className = 'imgCropper-image';
  
  
    // Target -> Wrapper -> Container -> Image
    _elements.container.appendChild(_elements.image);
    _elements.wrapper.appendChild(_elements.container);
    _elements.target.appendChild(_elements.wrapper);
  
    if (!this.options.showControls) {
      return this.loadImage();
    }
  
    // Controls.
    _elements.controls = {};
    _elements.controls.wrapper = document.createElement('div');
    _elements.controls.wrapper.className = 'imgCropper-controls';
  
    _elements.controls.rotateLeft = document.createElement('button');
    _elements.controls.rotateLeft.innerHTML = this.options.actionLabels.rotateLeft;
    _elements.controls.rotateRight = document.createElement('button');
    _elements.controls.rotateRight.innerHTML = this.options.actionLabels.rotateRight;
    _elements.controls.zoomIn = document.createElement('button');
    _elements.controls.zoomIn.innerHTML = this.options.actionLabels.zoomIn;
    _elements.controls.zoomOut = document.createElement('button');
    _elements.controls.zoomOut.innerHTML = this.options.actionLabels.zoomOut;
    _elements.controls.fit = document.createElement('button');
    _elements.controls.fit.innerHTML = this.options.actionLabels.fit;
  
    _elements.controls.crop = document.createElement('button');
    _elements.controls.crop.innerHTML = this.options.actionLabels.crop;
  
    // Target -> Wrapper -> buttons
    _elements.controls.wrapper.appendChild(_elements.controls.rotateLeft);
    _elements.controls.wrapper.appendChild(_elements.controls.zoomOut);
    _elements.controls.wrapper.appendChild(_elements.controls.fit);
    _elements.controls.wrapper.appendChild(_elements.controls.crop);
    _elements.controls.wrapper.appendChild(_elements.controls.zoomIn);
    _elements.controls.wrapper.appendChild(_elements.controls.rotateRight);
    _elements.target.appendChild(_elements.controls.wrapper);
  
    this.loadImage();
  };
  
  /**
   * Remove all DOM element parts of the Cropper.
   */
  Cropper.prototype.remove = function() {
    var elements = this.elements;
    elements.target.removeChild(elements.wrapper);
    elements.target.removeChild(elements.controls.wrapper);
  };
  
  Cropper.prototype.loadImage = function() {
    var self = this;
    var xhr;
  
    // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari.
    if (/^data\:/.test(this.originalUrl)) {
      this.originalBase64 = this.originalUrl;
      return this.setupImageSRC();
    }
  
    xhr = new XMLHttpRequest();
    xhr.onerror = xhr.onabort = function(response) {
      self.originalBase64 = self.originalUrl;
      self.setupImageSRC();
    };
  
    // Need to have proper sets of 'Access-Control-Allow-Origin' on the requested resource server.
    xhr.onload = function() {
      self.originalArrayBuffer = this.response;
      self.originalBase64 = 'data:image/jpeg;base64,' + self.base64ArrayBuffer(this.response);
      self.setupImageSRC();
    };
    xhr.open('get', this.originalUrl, true);
    //xhr.setRequestHeader('Content-Type', 'image/jpg'); // TODO: Auto determine the image MIME's type.
    xhr.responseType = 'arraybuffer';
    xhr.send();
  };
  
  /**
   * Check crossOrigins and setup image src.
   */
  Cropper.prototype.setupImageSRC = function() {
    var _image = this.elements.image;
  
    if (this.options.checkCrossOrigin && this.isCrossOrigin(this.originalUrl)) {
      this.crossOrigin = _image.crossOrigin;
  
      if (this.crossOrigin) {
        this.crossOrigin = this.originalUrl;
      } else {
        this.crossOrigin = 'anonymous';
  
        // Bust cache with a timestamp.
        this.crossOriginUrl = this.addTimestamp(this.originalUrl);
      }
    }
  
    if (this.crossOrigin) {
      this.elements.image.crossOrigin = this.crossOrigin;
    }
  
    // Setup image src.
    this.elements.image.src = this.crossOriginUrl || this.originalUrl; // Need to verify.
    //this.elements.image.src = this.originalBase64; // Need to verify.
  
    // Waiting the image as loaded to trigger event.
    this.elements.image.onload = function() {
      this.events.triggerHandler('ImageReady');
    }.bind(this);
  };
  
  /**
   * Set dimensions.
   */
  Cropper.prototype.setDimensions = function() {
    this.zoomInFactor = 1 + this.options.zoomStep;
    this.zoomOutFactor = 1 / this.zoomInFactor;
  
    this.imageRatio = this.options.height / this.options.width;
    this.width = this.elements.image.naturalWidth / this.options.width;
    this.height = this.elements.image.naturalHeight / this.options.height;
    this.left = 0;
    this.top = 0;
    this.angle = 0;
    this.data = {
      scale: 1,
      degrees: 0,
      x: 0,
      y: 0,
      w: this.options.width,
      h: this.options.height
    };
  
    // Container.
    this.elements.container.style.width = this.width * 100 + '%';
    this.elements.container.style.height = this.height * 100 + '%';
    this.elements.container.style.top = 0;
    this.elements.container.style.left = 0;
  
    // Wrapper.
    this.elements.wrapper.style.height = 'auto';
    this.elements.wrapper.style.width = '100%';
    this.elements.wrapper.style.paddingTop = (this.imageRatio * 100) + '%';
  
    this.isReady = true;
  };
  
  /**
   * Image should be already loaded.
   */
  Cropper.prototype.initializeGesture = function() {
    var self = this;
    this.addEventListeners(this.elements.image, this.gesture.events.start, function(event) {
      if (self.isReady && self.isValidEvent(event)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        self.pointerPosition = self.getPointerPosition(event);
        bind();
      }
    });
  
    var bind = function() {
      self.elements.body.classList.add('imgCropper-dragging');
      self.addEventListeners(self.elements.body, self.gesture.events.move, drag);
      self.addEventListeners(self.elements.body, self.gesture.events.stop, unbind);
    };
  
    var unbind = function() {
      self.elements.body.classList.remove('imgCropper-dragging');
      self.removeEventListeners(self.elements.body, self.gesture.events.move, drag);
      self.removeEventListeners(self.elements.body, self.gesture.events.stop, unbind);
    };
  
    var drag = function(event) {
      self.dragging.call(self, event);
    };
  };
  
  /**
   * Dragging action.
   * @param event
   */
  Cropper.prototype.dragging = function(event) {
    var dx, dy, left, p, top;
    event.preventDefault();
    event.stopImmediatePropagation();
  
    p = this.getPointerPosition(event); // Cursor position after moving.
  
    dx = p.x - this.pointerPosition.x; // Difference (cursor movement) on X axes.
    dy = p.y - this.pointerPosition.y; // Difference (cursor movement) on Y axes.
  
    this.pointerPosition = p; // Update cursor position.
  
    /**
     * dx > 0 if moving right.
     * dx / clientWidth is the percentage of the wrapper's width it moved over X.
     */
    left = (dx === 0)? null : this.left - dx / this.elements.wrapper.clientWidth;
  
    /**
     * dy > 0 if moving down.
     * dy / clientHeight is the percentage of the wrapper's width it moved over Y.
     */
    top = (dy === 0)? null : this.top - dy / this.elements.wrapper.clientHeight;
  
    // Move.
    this.setOffset(left, top);
  };
  
  /**
   * Set image offset manipulations.
   * @param left {number} is a relative number.
   * @param top {number} is a relative number.
   */
  Cropper.prototype.setOffset = function(left, top) {
    /**
     * Offset left.
     */
    if (left || left === 0) {
      if (left < 0) { left = 0; }
      if (left > this.width - 1) { left = this.width - 1; }
  
      this.elements.container.style.left = (-left * 100).toFixed(2) + '%';
      this.left = left;
      this.data.x = Math.round(left * this.options.width);
    }
  
    /**
     * Offset top.
     */
    if (top || top === 0) {
      if (top < 0) { top = 0; }
      if (top > this.height - 1) { top = this.height - 1; }
  
      this.elements.container.style.top = (-top * 100).toFixed(2) + '%';
      this.top = top;
      this.data.y = Math.round(top * this.options.height);
    }
  };
  
  Cropper.prototype.fitImage = function() {
    var prevWidth, relativeRatio;
  
    prevWidth = this.width;
    relativeRatio = this.height / this.width;
  
    if (relativeRatio > 1) {
      this.width = 1;
      this.height = relativeRatio;
    } else {
      this.width = 1 / relativeRatio;
      this.height = 1;
    }
  
    this.elements.container.style.width = (this.width * 100).toFixed(2) + '%';
    this.elements.container.style.height = (this.height * 100).toFixed(2) + '%';
  
    this.data.scale *= this.width / prevWidth;
  };
  
  Cropper.prototype.centerImage = function() {
    this.setOffset((this.width - 1) / 2, (this.height - 1) / 2);
  };
  
  /**
   * Do a rotation on the image with degrees given.
   * @param degrees
   */
  Cropper.prototype.rotateImage = function(degrees) {
    // Only rotate of 90°.
    if (!(degrees !== 0 && degrees % 90 === 0)) {
      throw new Error('Cropper: Support only multiple of 90° for rotation.');
    }
  
    // Smallest positive equivalent angle (total rotation).
    this.angle = (this.angle + degrees) % 360;
    if (this.angle < 0) {
      this.angle += 360;
    }
  
    // Dimensions are changed?
    if (degrees % 180 !== 0) {
      /**
       * Switch canvas dimensions (as percentages).
       * canvasWidth = @width * this.options.width; canvasHeight = @height * this.options.height
       * To make canvasWidth = canvasHeight (to switch dimensions):
       * => newWidth * this.options.width = @height * this.options.height
       * => newWidth = @height * this.options.height / this.options.width
       * => newWidth = @height * this.imageRatio
       */
      var tempW = this.height * this.imageRatio;
      var tempH = this.width / this.imageRatio;
      this.width = tempW;
      this.height = tempH;
      if (this.width >= 1 && this.height >= 1) {
        this.elements.container.style.width = this.width * 100 + '%';
        this.elements.container.style.height = this.height * 100 + '%';
      } else {
        this.fitImage();
      }
    }
  
    var newWidth = 1;
    var newHeight = 1;
  
    // Adjust element's (image) dimensions inside the container.
    if (this.angle % 180 !== 0) {
      var ratio = this.height / this.width * this.imageRatio;
      newWidth = ratio;
      newHeight = 1 / ratio;
    }
  
    this.elements.image.style.width = newWidth * 100 + '%';
    this.elements.image.style.height = newHeight * 100 + '%';
    this.elements.image.style.left = (1 - newWidth) / 2 * 100 + '%';
    this.elements.image.style.top = (1 - newHeight) / 2 * 100 + '%';
  
  
    this.elements.image.style.transform = 'rotate(' + this.angle + 'deg)';
    this.elements.image.style.webkitTransform = 'rotate(' + this.angle + 'deg)';
    this.elements.image.style.mozTransform = 'rotate(' + this.angle + 'deg)';
    this.elements.image.style.msTransform = 'rotate(' + this.angle + 'deg)';
    this.elements.image.style.oTransform = 'rotate(' + this.angle + 'deg)';
  
    this.centerImage();
    this.data.degrees = this.angle;
  };
  
  Cropper.prototype.zoomImage = function(factor) {
    if (factor <= 0 || factor == 1) {
      return;
    }
  
    var originalWidth = this.width;
  
    if (this.width * factor > 1 && this.height * factor > 1) {
      this.height *= factor;
      this.width *= factor;
      this.elements.container.style.height = (this.height * 100).toFixed(2) + '%';
      this.elements.container.style.width = (this.width * 100).toFixed(2) + '%';
      this.data.scale *= factor;
    } else {
      this.fitImage();
      factor = this.width / originalWidth;
    }
  
    /**
     * Keep window center.
     * The offsets are the distances between the image point in the center of the wrapper
     * and each edge of the image, less half the size of the window.
     * Percentage offsets are relative to the container (the wrapper), so half the wrapper
     * is 50% (0.5) and when zooming the distance between any two points in the image
     * grows by 'factor', so the new offsets are:
     *
     * offset = (prev-center-to-edge) * factor - half-window
     *
     */
    var left = (this.left + 0.5) * factor - 0.5;
    var top = (this.top + 0.5) * factor - 0.5;
  
    this.setOffset(left, top);
  };
  
  Cropper.prototype.cropImage = function() {
    return this.cropHandler();
  };
  
  Cropper.prototype.cropHandler = function() {
    var canvas, context;
  
    canvas = document.createElement('canvas');
    canvas.height = this.options.height;
    canvas.width = this.options.width;
  
    var cx = -canvas.width / 2;
    var cy = -canvas.height / 2;
  
    context = canvas.getContext('2d');
    context.translate(-cx,-cy); //move to centre of canvas
    context.rotate(this.data.degrees * Math.PI/180);
    context.scale(this.data.scale, this.data.scale);
  
    if(this.data.degrees == 0) { // simple offsets from canvas centre & scale
      context.drawImage(this.elements.image,
        (cx - this.data.x) / this.data.scale,
        (cy - this.data.y) / this.data.scale
      );
    } else if(this.data.degrees == 90) { // swap axis and reverse the new y origin
      context.drawImage(this.elements.image,
        (cy - this.data.y) / this.data.scale,
        (-1 * this.elements.image.naturalHeight) + ((-cx + this.data.x) / this.data.scale)
      );
    } else if(this.data.degrees == 180) { // reverse both origins
      context.drawImage(this.elements.image,
        (-1 * this.elements.image.naturalWidth) + ((-cx + this.data.x) / this.data.scale),
        (-1 * this.elements.image.naturalHeight) + ((-cy + this.data.y) / this.data.scale)
      );
    } else if(this.data.degrees == 270) { // swap axis and reverse the new x origin
      context.drawImage(this.elements.image,
        (-1 * this.elements.image.naturalWidth) + ((-cy + this.data.y) / this.data.scale),
        (cx - this.data.x) / this.data.scale
      );
    }
  
    var base64 = canvas.toDataURL('image/jpeg');
    this.events.triggerHandler('Cropped', base64);
    return base64;
  };
  
  Cropper.prototype.useHardwareAccelerate = function(element) {
    element.style.perspective = '1000px';
    element.style.backfaceVisibility = 'hidden';
  };
  
  Cropper.prototype.extend = function(defaults, options) {
    var target = defaults;
    var defaultsKeys = Object.keys(defaults);
  
    defaultsKeys.forEach(function(key, index, keysArray) {
      if (options[key] !== undefined) {
        target[key] = options[key];
      }
    });
  
    return target;
  };
  
  /**
   * Helper for adding new event listener on element given.
   * @param element
   * @param eventNames
   * @param func
   * @param context
   */
  Cropper.prototype.addEventListeners = function(element, eventNames, func, context) {
    eventNames.split(' ').forEach(function(eventName) {
      if (context) {
        element.addEventListener(eventName, func.bind(context), false);
      } else {
        element.addEventListener(eventName, func, false);
      }
    });
  };
  
  /**
   * Helper for removing event listener in element given.
   * @param element
   * @param eventNames
   * @param func
   * @param context
   */
  Cropper.prototype.removeEventListeners = function(element, eventNames, func, context) {
    eventNames.split(' ').forEach(function(eventName) {
      if (context) {
        element.removeEventListener(eventName, func.bind(context), false);
      } else {
        element.removeEventListener(eventName, func, false);
      }
    });
  };
  
  /**
   * Helper for setting pointer position.
   * @param {object} event
   * @returns {{x: *, y: *}}
   */
  Cropper.prototype.getPointerPosition = function(event) {
    if (this.isTouchEvent(event)) {
      event = event.touches[0];
    }
    return {
      x: event.pageX,
      y: event.pageY
    };
  };
  /**
   * Helper for testing if the event is valid.
   * TODO: Comment this magic thing.
   * @param event
   * @returns {boolean}
   */
  Cropper.prototype.isValidEvent = function(event) {
    if (this.isTouchEvent(event)) {
      return event.changedTouches.length === 1;
    }
    return event.which === 1;
  };
  
  /**
   * Helper for testing if the event is touch.
   * @param event
   * @returns {boolean}
   */
  Cropper.prototype.isTouchEvent = function(event) {
    return /touch/i.test(event.type);
  };
  
  /**
   * Helper for adding a timestamp at the end of an URL.
   * @param url
   * @returns {string}
   */
  Cropper.prototype.addTimestamp = function(url) {
    var timestamp = 'timestamp=' + (new Date()).getTime();
    var sign = '?';
  
    if (url.indexOf('?') !== -1) {
      sign = '&';
    }
  
    return url.concat(sign, timestamp);
  };
  /**
   * Helper for checking if the given url is cross origin.
   * @param url
   * @returns {boolean}
   */
  Cropper.prototype.isCrossOrigin = function(url) {
    var parts = url.match();
  
    return Boolean(parts && (
        parts[1] !== location.protocol ||
        parts[2] !== location.hostname ||
        parts[3] !== location.port
      ));
  };
  
  /**
   * Helper for converting arrayBuffer to base64.
   * @param arrayBuffer
   * @returns {string}
   */
  Cropper.prototype.base64ArrayBuffer = function(arrayBuffer) {
    var base64 = '';
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;
    var a, b, c, d;
    var chunk;
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
      d = chunk & 63;               // 63       = 2^6 - 1
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength];
      a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
      // Set the 4 least significant bits to zero
      b = (chunk & 3) << 4; // 3   = 2^2 - 1
      base64 += encodings[a] + encodings[b] + '==';
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
      a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4
      // Set the 2 least significant bits to zero
      c = (chunk & 15) << 2; // 15    = 2^4 - 1
      base64 += encodings[a] + encodings[b] + encodings[c] + '=';
    }
    return base64;
  };
  
  /**
   * Helper for events handler.
   */
  Cropper.prototype.events = new function() {
    var _triggers = {};
  
    this.on = function(event, callback) {
      if (!_triggers[event]) {
        _triggers[event] = [];
      }
      _triggers[event].push(callback);
    };
  
    this.triggerHandler = function(event, params) {
      if (_triggers[event]) {
        for (var i in _triggers[event]) {
          _triggers[event][i](params);
        }
      }
    };
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  if (false) {
    require('./imageCropperDirective.test.js')(angular);
  }
  
  module.exports = function(angular, Cropper) {
    __webpack_require__(4);
    angular
      .module('imageCropper')
      .directive('imageCropper', function() {
        return {
          restrict: 'E',
          scope: {
            centerOnInit: '@',
            checkCrossOrigin: '@',
            cropCallback: '&',
            api: '&',
            fitOnInit: '@',
            height: '@',
            imageUrl: '@',
            showControls: '@',
            width: '@',
            zoomStep: '@',
            actionLabels: '&'
          },
          bindToController: true,
          controllerAs: 'vm',
          controller: function() {
            var self = this;
  
            // Get action labels.
            this.actionLabels = this.actionLabels();
  
            // Get callback.
            this.apiCallback = this.api();
            this.cropCallback = this.cropCallback();
  
            // Eval for boolean values.
            this.fitOnInit = eval(this.fitOnInit);
            this.centerOnInit = eval(this.centerOnInit);
            this.checkCrossOrigin = eval(this.checkCrossOrigin);
            this.showControls = eval(this.showControls);
  
            this.init = function() {
              this.target = this.element;
              this.api = new Cropper(self);
            }
          },
          'link': function(scope, element, attributes, controller) {
            controller.element = element[0];
            controller.init();
          }
        };
      });
  };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(5);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(7)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
    // When the styles change, update the <style> tags
    if(!content.locals) {
      module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./angular-image-cropper.scss", function() {
        var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./angular-image-cropper.scss");
        if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
        update(newContent);
      });
    }
    // When the module is disposed, remove the <style> tags
    module.hot.dispose(function() { update(); });
  }

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(6)();
  // imports
  
  
  // module
  exports.push([module.id, "body.imgCropper-dragging, body.imgCropper-dragging * {\n  cursor: move !important;\n  cursor: -webkit-grabbing !important;\n  cursor: -moz-grabbing !important;\n  cursor: grabbing !important;\n  cursor: grabbing, move;\n  /* IE hack */ }\n\n.imgCropper-wrapper {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n  cursor: grab, move;\n  /* IE hack */ }\n\n.imgCropper-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-align: center;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: none !important; }\n\n.imgCropper-container > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  max-width: none;\n  max-height: none;\n  width: 100%;\n  height: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: none !important; }\n\n.imgCropper-sample {\n  position: absolute !important;\n  top: -100000px     !important;\n  left: -100000px    !important;\n  width: auto        !important;\n  height: auto       !important; }\n", ""]);
  
  // exports


/***/ },
/* 6 */
/***/ function(module, exports) {

  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
    var list = [];
  
    // return the list of modules as css string
    list.toString = function toString() {
      var result = [];
      for(var i = 0; i < this.length; i++) {
        var item = this[i];
        if(item[2]) {
          result.push("@media " + item[2] + "{" + item[1] + "}");
        } else {
          result.push(item[1]);
        }
      }
      return result.join("");
    };
  
    // import a list of modules into the list
    list.i = function(modules, mediaQuery) {
      if(typeof modules === "string")
        modules = [[null, modules, ""]];
      var alreadyImportedModules = {};
      for(var i = 0; i < this.length; i++) {
        var id = this[i][0];
        if(typeof id === "number")
          alreadyImportedModules[id] = true;
      }
      for(i = 0; i < modules.length; i++) {
        var item = modules[i];
        // skip already imported module
        // this implementation is not 100% perfect for weird media query combinations
        //  when a module is imported multiple times with different media queries.
        //  I hope this will never occur (Hey this way we have smaller bundles)
        if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
          if(mediaQuery && !item[2]) {
            item[2] = mediaQuery;
          } else if(mediaQuery) {
            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
          }
          list.push(item);
        }
      }
    };
    return list;
  };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  var stylesInDom = {},
    memoize = function(fn) {
      var memo;
      return function () {
        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
        return memo;
      };
    },
    isOldIE = memoize(function() {
      return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }),
    getHeadElement = memoize(function () {
      return document.head || document.getElementsByTagName("head")[0];
    }),
    singletonElement = null,
    singletonCounter = 0,
    styleElementsInsertedAtTop = [];
  
  module.exports = function(list, options) {
    if(false) {
      if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
    }
  
    options = options || {};
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (typeof options.singleton === "undefined") options.singleton = isOldIE();
  
    // By default, add <style> tags to the bottom of <head>.
    if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
  
    var styles = listToStyles(list);
    addStylesToDom(styles, options);
  
    return function update(newList) {
      var mayRemove = [];
      for(var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
      if(newList) {
        var newStyles = listToStyles(newList);
        addStylesToDom(newStyles, options);
      }
      for(var i = 0; i < mayRemove.length; i++) {
        var domStyle = mayRemove[i];
        if(domStyle.refs === 0) {
          for(var j = 0; j < domStyle.parts.length; j++)
            domStyle.parts[j]();
          delete stylesInDom[domStyle.id];
        }
      }
    };
  }
  
  function addStylesToDom(styles, options) {
    for(var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];
      if(domStyle) {
        domStyle.refs++;
        for(var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j](item.parts[j]);
        }
        for(; j < item.parts.length; j++) {
          domStyle.parts.push(addStyle(item.parts[j], options));
        }
      } else {
        var parts = [];
        for(var j = 0; j < item.parts.length; j++) {
          parts.push(addStyle(item.parts[j], options));
        }
        stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
      }
    }
  }
  
  function listToStyles(list) {
    var styles = [];
    var newStyles = {};
    for(var i = 0; i < list.length; i++) {
      var item = list[i];
      var id = item[0];
      var css = item[1];
      var media = item[2];
      var sourceMap = item[3];
      var part = {css: css, media: media, sourceMap: sourceMap};
      if(!newStyles[id])
        styles.push(newStyles[id] = {id: id, parts: [part]});
      else
        newStyles[id].parts.push(part);
    }
    return styles;
  }
  
  function insertStyleElement(options, styleElement) {
    var head = getHeadElement();
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
    if (options.insertAt === "top") {
      if(!lastStyleElementInsertedAtTop) {
        head.insertBefore(styleElement, head.firstChild);
      } else if(lastStyleElementInsertedAtTop.nextSibling) {
        head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
      } else {
        head.appendChild(styleElement);
      }
      styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === "bottom") {
      head.appendChild(styleElement);
    } else {
      throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
    }
  }
  
  function removeStyleElement(styleElement) {
    styleElement.parentNode.removeChild(styleElement);
    var idx = styleElementsInsertedAtTop.indexOf(styleElement);
    if(idx >= 0) {
      styleElementsInsertedAtTop.splice(idx, 1);
    }
  }
  
  function createStyleElement(options) {
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    insertStyleElement(options, styleElement);
    return styleElement;
  }
  
  function createLinkElement(options) {
    var linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    insertStyleElement(options, linkElement);
    return linkElement;
  }
  
  function addStyle(obj, options) {
    var styleElement, update, remove;
  
    if (options.singleton) {
      var styleIndex = singletonCounter++;
      styleElement = singletonElement || (singletonElement = createStyleElement(options));
      update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
      remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
    } else if(obj.sourceMap &&
      typeof URL === "function" &&
      typeof URL.createObjectURL === "function" &&
      typeof URL.revokeObjectURL === "function" &&
      typeof Blob === "function" &&
      typeof btoa === "function") {
      styleElement = createLinkElement(options);
      update = updateLink.bind(null, styleElement);
      remove = function() {
        removeStyleElement(styleElement);
        if(styleElement.href)
          URL.revokeObjectURL(styleElement.href);
      };
    } else {
      styleElement = createStyleElement(options);
      update = applyToTag.bind(null, styleElement);
      remove = function() {
        removeStyleElement(styleElement);
      };
    }
  
    update(obj);
  
    return function updateStyle(newObj) {
      if(newObj) {
        if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
          return;
        update(obj = newObj);
      } else {
        remove();
      }
    };
  }
  
  var replaceText = (function () {
    var textStore = [];
  
    return function (index, replacement) {
      textStore[index] = replacement;
      return textStore.filter(Boolean).join('\n');
    };
  })();
  
  function applyToSingletonTag(styleElement, index, remove, obj) {
    var css = remove ? "" : obj.css;
  
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = replaceText(index, css);
    } else {
      var cssNode = document.createTextNode(css);
      var childNodes = styleElement.childNodes;
      if (childNodes[index]) styleElement.removeChild(childNodes[index]);
      if (childNodes.length) {
        styleElement.insertBefore(cssNode, childNodes[index]);
      } else {
        styleElement.appendChild(cssNode);
      }
    }
  }
  
  function applyToTag(styleElement, obj) {
    var css = obj.css;
    var media = obj.media;
    var sourceMap = obj.sourceMap;
  
    if(media) {
      styleElement.setAttribute("media", media)
    }
  
    if(styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      while(styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild);
      }
      styleElement.appendChild(document.createTextNode(css));
    }
  }
  
  function updateLink(linkElement, obj) {
    var css = obj.css;
    var media = obj.media;
    var sourceMap = obj.sourceMap;
  
    if(sourceMap) {
      // http://stackoverflow.com/a/26603875
      css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
    }
  
    var blob = new Blob([css], { type: "text/css" });
  
    var oldSrc = linkElement.href;
  
    linkElement.href = URL.createObjectURL(blob);
  
    if(oldSrc)
      URL.revokeObjectURL(oldSrc);
  }


/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-image-cropper.js.map
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.6.0
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Chart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/* MIT license */
var colorNames = require(6);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"6":6}],3:[function(require,module,exports){
/* MIT license */
var convert = require(5);
var string = require(2);

var Color = function (obj) {
  if (obj instanceof Color) {
    return obj;
  }
  if (!(this instanceof Color)) {
    return new Color(obj);
  }

  this.valid = false;
  this.values = {
    rgb: [0, 0, 0],
    hsl: [0, 0, 0],
    hsv: [0, 0, 0],
    hwb: [0, 0, 0],
    cmyk: [0, 0, 0, 0],
    alpha: 1
  };

  // parse Color() argument
  var vals;
  if (typeof obj === 'string') {
    vals = string.getRgba(obj);
    if (vals) {
      this.setValues('rgb', vals);
    } else if (vals = string.getHsla(obj)) {
      this.setValues('hsl', vals);
    } else if (vals = string.getHwb(obj)) {
      this.setValues('hwb', vals);
    }
  } else if (typeof obj === 'object') {
    vals = obj;
    if (vals.r !== undefined || vals.red !== undefined) {
      this.setValues('rgb', vals);
    } else if (vals.l !== undefined || vals.lightness !== undefined) {
      this.setValues('hsl', vals);
    } else if (vals.v !== undefined || vals.value !== undefined) {
      this.setValues('hsv', vals);
    } else if (vals.w !== undefined || vals.whiteness !== undefined) {
      this.setValues('hwb', vals);
    } else if (vals.c !== undefined || vals.cyan !== undefined) {
      this.setValues('cmyk', vals);
    }
  }
};

Color.prototype = {
  isValid: function () {
    return this.valid;
  },
  rgb: function () {
    return this.setSpace('rgb', arguments);
  },
  hsl: function () {
    return this.setSpace('hsl', arguments);
  },
  hsv: function () {
    return this.setSpace('hsv', arguments);
  },
  hwb: function () {
    return this.setSpace('hwb', arguments);
  },
  cmyk: function () {
    return this.setSpace('cmyk', arguments);
  },

  rgbArray: function () {
    return this.values.rgb;
  },
  hslArray: function () {
    return this.values.hsl;
  },
  hsvArray: function () {
    return this.values.hsv;
  },
  hwbArray: function () {
    var values = this.values;
    if (values.alpha !== 1) {
      return values.hwb.concat([values.alpha]);
    }
    return values.hwb;
  },
  cmykArray: function () {
    return this.values.cmyk;
  },
  rgbaArray: function () {
    var values = this.values;
    return values.rgb.concat([values.alpha]);
  },
  hslaArray: function () {
    var values = this.values;
    return values.hsl.concat([values.alpha]);
  },
  alpha: function (val) {
    if (val === undefined) {
      return this.values.alpha;
    }
    this.setValues('alpha', val);
    return this;
  },

  red: function (val) {
    return this.setChannel('rgb', 0, val);
  },
  green: function (val) {
    return this.setChannel('rgb', 1, val);
  },
  blue: function (val) {
    return this.setChannel('rgb', 2, val);
  },
  hue: function (val) {
    if (val) {
      val %= 360;
      val = val < 0 ? 360 + val : val;
    }
    return this.setChannel('hsl', 0, val);
  },
  saturation: function (val) {
    return this.setChannel('hsl', 1, val);
  },
  lightness: function (val) {
    return this.setChannel('hsl', 2, val);
  },
  saturationv: function (val) {
    return this.setChannel('hsv', 1, val);
  },
  whiteness: function (val) {
    return this.setChannel('hwb', 1, val);
  },
  blackness: function (val) {
    return this.setChannel('hwb', 2, val);
  },
  value: function (val) {
    return this.setChannel('hsv', 2, val);
  },
  cyan: function (val) {
    return this.setChannel('cmyk', 0, val);
  },
  magenta: function (val) {
    return this.setChannel('cmyk', 1, val);
  },
  yellow: function (val) {
    return this.setChannel('cmyk', 2, val);
  },
  black: function (val) {
    return this.setChannel('cmyk', 3, val);
  },

  hexString: function () {
    return string.hexString(this.values.rgb);
  },
  rgbString: function () {
    return string.rgbString(this.values.rgb, this.values.alpha);
  },
  rgbaString: function () {
    return string.rgbaString(this.values.rgb, this.values.alpha);
  },
  percentString: function () {
    return string.percentString(this.values.rgb, this.values.alpha);
  },
  hslString: function () {
    return string.hslString(this.values.hsl, this.values.alpha);
  },
  hslaString: function () {
    return string.hslaString(this.values.hsl, this.values.alpha);
  },
  hwbString: function () {
    return string.hwbString(this.values.hwb, this.values.alpha);
  },
  keyword: function () {
    return string.keyword(this.values.rgb, this.values.alpha);
  },

  rgbNumber: function () {
    var rgb = this.values.rgb;
    return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
  },

  luminosity: function () {
    // http://www.w3.org/TR/WCAG20/#relativeluminancedef
    var rgb = this.values.rgb;
    var lum = [];
    for (var i = 0; i < rgb.length; i++) {
      var chan = rgb[i] / 255;
      lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
    }
    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
  },

  contrast: function (color2) {
    // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
    var lum1 = this.luminosity();
    var lum2 = color2.luminosity();
    if (lum1 > lum2) {
      return (lum1 + 0.05) / (lum2 + 0.05);
    }
    return (lum2 + 0.05) / (lum1 + 0.05);
  },

  level: function (color2) {
    var contrastRatio = this.contrast(color2);
    if (contrastRatio >= 7.1) {
      return 'AAA';
    }

    return (contrastRatio >= 4.5) ? 'AA' : '';
  },

  dark: function () {
    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
    var rgb = this.values.rgb;
    var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return yiq < 128;
  },

  light: function () {
    return !this.dark();
  },

  negate: function () {
    var rgb = [];
    for (var i = 0; i < 3; i++) {
      rgb[i] = 255 - this.values.rgb[i];
    }
    this.setValues('rgb', rgb);
    return this;
  },

  lighten: function (ratio) {
    var hsl = this.values.hsl;
    hsl[2] += hsl[2] * ratio;
    this.setValues('hsl', hsl);
    return this;
  },

  darken: function (ratio) {
    var hsl = this.values.hsl;
    hsl[2] -= hsl[2] * ratio;
    this.setValues('hsl', hsl);
    return this;
  },

  saturate: function (ratio) {
    var hsl = this.values.hsl;
    hsl[1] += hsl[1] * ratio;
    this.setValues('hsl', hsl);
    return this;
  },

  desaturate: function (ratio) {
    var hsl = this.values.hsl;
    hsl[1] -= hsl[1] * ratio;
    this.setValues('hsl', hsl);
    return this;
  },

  whiten: function (ratio) {
    var hwb = this.values.hwb;
    hwb[1] += hwb[1] * ratio;
    this.setValues('hwb', hwb);
    return this;
  },

  blacken: function (ratio) {
    var hwb = this.values.hwb;
    hwb[2] += hwb[2] * ratio;
    this.setValues('hwb', hwb);
    return this;
  },

  greyscale: function () {
    var rgb = this.values.rgb;
    // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
    var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
    this.setValues('rgb', [val, val, val]);
    return this;
  },

  clearer: function (ratio) {
    var alpha = this.values.alpha;
    this.setValues('alpha', alpha - (alpha * ratio));
    return this;
  },

  opaquer: function (ratio) {
    var alpha = this.values.alpha;
    this.setValues('alpha', alpha + (alpha * ratio));
    return this;
  },

  rotate: function (degrees) {
    var hsl = this.values.hsl;
    var hue = (hsl[0] + degrees) % 360;
    hsl[0] = hue < 0 ? 360 + hue : hue;
    this.setValues('hsl', hsl);
    return this;
  },

  /**
   * Ported from sass implementation in C
   * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
   */
  mix: function (mixinColor, weight) {
    var color1 = this;
    var color2 = mixinColor;
    var p = weight === undefined ? 0.5 : weight;

    var w = 2 * p - 1;
    var a = color1.alpha() - color2.alpha();

    var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    var w2 = 1 - w1;

    return this
      .rgb(
        w1 * color1.red() + w2 * color2.red(),
        w1 * color1.green() + w2 * color2.green(),
        w1 * color1.blue() + w2 * color2.blue()
      )
      .alpha(color1.alpha() * p + color2.alpha() * (1 - p));
  },

  toJSON: function () {
    return this.rgb();
  },

  clone: function () {
    // NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
    // making the final build way to big to embed in Chart.js. So let's do it manually,
    // assuming that values to clone are 1 dimension arrays containing only numbers,
    // except 'alpha' which is a number.
    var result = new Color();
    var source = this.values;
    var target = result.values;
    var value, type;

    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        value = source[prop];
        type = ({}).toString.call(value);
        if (type === '[object Array]') {
          target[prop] = value.slice(0);
        } else if (type === '[object Number]') {
          target[prop] = value;
        } else {
          console.error('unexpected color value:', value);
        }
      }
    }

    return result;
  }
};

Color.prototype.spaces = {
  rgb: ['red', 'green', 'blue'],
  hsl: ['hue', 'saturation', 'lightness'],
  hsv: ['hue', 'saturation', 'value'],
  hwb: ['hue', 'whiteness', 'blackness'],
  cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
  rgb: [255, 255, 255],
  hsl: [360, 100, 100],
  hsv: [360, 100, 100],
  hwb: [360, 100, 100],
  cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
  var values = this.values;
  var vals = {};

  for (var i = 0; i < space.length; i++) {
    vals[space.charAt(i)] = values[space][i];
  }

  if (values.alpha !== 1) {
    vals.a = values.alpha;
  }

  // {r: 255, g: 255, b: 255, a: 0.4}
  return vals;
};

Color.prototype.setValues = function (space, vals) {
  var values = this.values;
  var spaces = this.spaces;
  var maxes = this.maxes;
  var alpha = 1;
  var i;

  this.valid = true;

  if (space === 'alpha') {
    alpha = vals;
  } else if (vals.length) {
    // [10, 10, 10]
    values[space] = vals.slice(0, space.length);
    alpha = vals[space.length];
  } else if (vals[space.charAt(0)] !== undefined) {
    // {r: 10, g: 10, b: 10}
    for (i = 0; i < space.length; i++) {
      values[space][i] = vals[space.charAt(i)];
    }

    alpha = vals.a;
  } else if (vals[spaces[space][0]] !== undefined) {
    // {red: 10, green: 10, blue: 10}
    var chans = spaces[space];

    for (i = 0; i < space.length; i++) {
      values[space][i] = vals[chans[i]];
    }

    alpha = vals.alpha;
  }

  values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

  if (space === 'alpha') {
    return false;
  }

  var capped;

  // cap values of the space prior converting all values
  for (i = 0; i < space.length; i++) {
    capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
    values[space][i] = Math.round(capped);
  }

  // convert to all the other color spaces
  for (var sname in spaces) {
    if (sname !== space) {
      values[sname] = convert[space][sname](values[space]);
    }
  }

  return true;
};

Color.prototype.setSpace = function (space, args) {
  var vals = args[0];

  if (vals === undefined) {
    // color.rgb()
    return this.getValues(space);
  }

  // color.rgb(10, 10, 10)
  if (typeof vals === 'number') {
    vals = Array.prototype.slice.call(args);
  }

  this.setValues(space, vals);
  return this;
};

Color.prototype.setChannel = function (space, index, val) {
  var svalues = this.values[space];
  if (val === undefined) {
    // color.red()
    return svalues[index];
  } else if (val === svalues[index]) {
    // color.red(color.red())
    return this;
  }

  // color.red(100)
  svalues[index] = val;
  this.setValues(space, svalues);

  return this;
};

if (typeof window !== 'undefined') {
  window.Color = Color;
}

module.exports = Color;

},{"2":2,"5":5}],4:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],5:[function(require,module,exports){
var conversions = require(4);

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"4":4}],6:[function(require,module,exports){
module.exports = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
},{}],7:[function(require,module,exports){
/**
 * @namespace Chart
 */
var Chart = require(28)();

require(26)(Chart);
require(40)(Chart);
require(22)(Chart);
require(25)(Chart);
require(30)(Chart);
require(21)(Chart);
require(23)(Chart);
require(24)(Chart);
require(29)(Chart);
require(32)(Chart);
require(33)(Chart);
require(31)(Chart);
require(27)(Chart);
require(34)(Chart);

require(35)(Chart);
require(36)(Chart);
require(37)(Chart);
require(38)(Chart);

require(46)(Chart);
require(44)(Chart);
require(45)(Chart);
require(47)(Chart);
require(48)(Chart);
require(49)(Chart);

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);
require(16)(Chart);
require(17)(Chart);
require(18)(Chart);
require(19)(Chart);
require(20)(Chart);

require(8)(Chart);
require(9)(Chart);
require(10)(Chart);
require(11)(Chart);
require(12)(Chart);
require(13)(Chart);
require(14)(Chart);

// Loading built-it plugins
var plugins = [];

plugins.push(
    require(41)(Chart),
    require(42)(Chart),
    require(43)(Chart)
);

Chart.plugins.register(plugins);

module.exports = Chart;
if (typeof window !== 'undefined') {
  window.Chart = Chart;
}

},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"34":34,"35":35,"36":36,"37":37,"38":38,"40":40,"41":41,"42":42,"43":43,"44":44,"45":45,"46":46,"47":47,"48":48,"49":49,"8":8,"9":9}],8:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  Chart.Bar = function(context, config) {
    config.type = 'bar';

    return new Chart(context, config);
  };

};

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  Chart.Bubble = function(context, config) {
    config.type = 'bubble';
    return new Chart(context, config);
  };

};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  Chart.Doughnut = function(context, config) {
    config.type = 'doughnut';

    return new Chart(context, config);
  };

};

},{}],11:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  Chart.Line = function(context, config) {
    config.type = 'line';

    return new Chart(context, config);
  };

};

},{}],12:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  Chart.PolarArea = function(context, config) {
    config.type = 'polarArea';

    return new Chart(context, config);
  };

};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  Chart.Radar = function(context, config) {
    config.type = 'radar';

    return new Chart(context, config);
  };

};

},{}],14:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var defaultConfig = {
    hover: {
      mode: 'single'
    },

    scales: {
      xAxes: [{
        type: 'linear', // scatter should not use a category axis
        position: 'bottom',
        id: 'x-axis-1' // need an ID so datasets can reference the scale
      }],
      yAxes: [{
        type: 'linear',
        position: 'left',
        id: 'y-axis-1'
      }]
    },

    tooltips: {
      callbacks: {
        title: function() {
          // Title doesn't make sense for scatter since we format the data as a point
          return '';
        },
        label: function(tooltipItem) {
          return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
        }
      }
    }
  };

  // Register the default config for this type
  Chart.defaults.scatter = defaultConfig;

  // Scatter charts use line controllers
  Chart.controllers.scatter = Chart.controllers.line;

  Chart.Scatter = function(context, config) {
    config.type = 'scatter';
    return new Chart(context, config);
  };

};

},{}],15:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.defaults.bar = {
    hover: {
      mode: 'label'
    },

    scales: {
      xAxes: [{
        type: 'category',

        // Specific to Bar Controller
        categoryPercentage: 0.8,
        barPercentage: 0.9,

        // grid line settings
        gridLines: {
          offsetGridLines: true
        }
      }],
      yAxes: [{
        type: 'linear'
      }]
    }
  };

  Chart.controllers.bar = Chart.DatasetController.extend({

    dataElementType: Chart.elements.Rectangle,

    initialize: function() {
      var me = this;
      var meta;

      Chart.DatasetController.prototype.initialize.apply(me, arguments);

      meta = me.getMeta();
      meta.stack = me.getDataset().stack;
      meta.bar = true;
    },

    update: function(reset) {
      var me = this;
      var elements = me.getMeta().data;
      var i, ilen;

      me._ruler = me.getRuler();

      for (i = 0, ilen = elements.length; i < ilen; ++i) {
        me.updateElement(elements[i], i, reset);
      }
    },

    updateElement: function(rectangle, index, reset) {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var dataset = me.getDataset();
      var custom = rectangle.custom || {};
      var rectangleOptions = chart.options.elements.rectangle;

      rectangle._xScale = me.getScaleForId(meta.xAxisID);
      rectangle._yScale = me.getScaleForId(meta.yAxisID);
      rectangle._datasetIndex = me.index;
      rectangle._index = index;

      rectangle._model = {
        datasetLabel: dataset.label,
        label: chart.data.labels[index],
        borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleOptions.borderSkipped,
        backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleOptions.backgroundColor),
        borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleOptions.borderColor),
        borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleOptions.borderWidth)
      };

      me.updateElementGeometry(rectangle, index, reset);

      rectangle.pivot();
    },

    /**
     * @private
     */
    updateElementGeometry: function(rectangle, index, reset) {
      var me = this;
      var model = rectangle._model;
      var vscale = me.getValueScale();
      var base = vscale.getBasePixel();
      var horizontal = vscale.isHorizontal();
      var ruler = me._ruler || me.getRuler();
      var vpixels = me.calculateBarValuePixels(me.index, index);
      var ipixels = me.calculateBarIndexPixels(me.index, index, ruler);

      model.horizontal = horizontal;
      model.base = reset? base : vpixels.base;
      model.x = horizontal? reset? base : vpixels.head : ipixels.center;
      model.y = horizontal? ipixels.center : reset? base : vpixels.head;
      model.height = horizontal? ipixels.size : undefined;
      model.width = horizontal? undefined : ipixels.size;
    },

    /**
     * @private
     */
    getValueScaleId: function() {
      return this.getMeta().yAxisID;
    },

    /**
     * @private
     */
    getIndexScaleId: function() {
      return this.getMeta().xAxisID;
    },

    /**
     * @private
     */
    getValueScale: function() {
      return this.getScaleForId(this.getValueScaleId());
    },

    /**
     * @private
     */
    getIndexScale: function() {
      return this.getScaleForId(this.getIndexScaleId());
    },

    /**
     * Returns the effective number of stacks based on groups and bar visibility.
     * @private
     */
    getStackCount: function(last) {
      var me = this;
      var chart = me.chart;
      var scale = me.getIndexScale();
      var stacked = scale.options.stacked;
      var ilen = last === undefined? chart.data.datasets.length : last + 1;
      var stacks = [];
      var i, meta;

      for (i = 0; i < ilen; ++i) {
        meta = chart.getDatasetMeta(i);
        if (meta.bar && chart.isDatasetVisible(i) &&
          (stacked === false ||
          (stacked === true && stacks.indexOf(meta.stack) === -1) ||
          (stacked === undefined && (meta.stack === undefined || stacks.indexOf(meta.stack) === -1)))) {
          stacks.push(meta.stack);
        }
      }

      return stacks.length;
    },

    /**
     * Returns the stack index for the given dataset based on groups and bar visibility.
     * @private
     */
    getStackIndex: function(datasetIndex) {
      return this.getStackCount(datasetIndex) - 1;
    },

    /**
     * @private
     */
    getRuler: function() {
      var me = this;
      var scale = me.getIndexScale();
      var options = scale.options;
      var stackCount = me.getStackCount();
      var fullSize = scale.isHorizontal()? scale.width : scale.height;
      var tickSize = fullSize / scale.ticks.length;
      var categorySize = tickSize * options.categoryPercentage;
      var fullBarSize = categorySize / stackCount;
      var barSize = fullBarSize * options.barPercentage;

      barSize = Math.min(
        helpers.getValueOrDefault(options.barThickness, barSize),
        helpers.getValueOrDefault(options.maxBarThickness, Infinity));

      return {
        stackCount: stackCount,
        tickSize: tickSize,
        categorySize: categorySize,
        categorySpacing: tickSize - categorySize,
        fullBarSize: fullBarSize,
        barSize: barSize,
        barSpacing: fullBarSize - barSize,
        scale: scale
      };
    },

    /**
     * Note: pixel values are not clamped to the scale area.
     * @private
     */
    calculateBarValuePixels: function(datasetIndex, index) {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var scale = me.getValueScale();
      var datasets = chart.data.datasets;
      var value = Number(datasets[datasetIndex].data[index]);
      var stacked = scale.options.stacked;
      var stack = meta.stack;
      var start = 0;
      var i, imeta, ivalue, base, head, size;

      if (stacked || (stacked === undefined && stack !== undefined)) {
        for (i = 0; i < datasetIndex; ++i) {
          imeta = chart.getDatasetMeta(i);

          if (imeta.bar &&
            imeta.stack === stack &&
            imeta.controller.getValueScaleId() === scale.id &&
            chart.isDatasetVisible(i)) {

            ivalue = Number(datasets[i].data[index]);
            if ((value < 0 && ivalue < 0) || (value >= 0 && ivalue > 0)) {
              start += ivalue;
            }
          }
        }
      }

      base = scale.getPixelForValue(start);
      head = scale.getPixelForValue(start + value);
      size = (head - base) / 2;

      return {
        size: size,
        base: base,
        head: head,
        center: head + size / 2
      };
    },

    /**
     * @private
     */
    calculateBarIndexPixels: function(datasetIndex, index, ruler) {
      var me = this;
      var scale = ruler.scale;
      var isCombo = me.chart.isCombo;
      var stackIndex = me.getStackIndex(datasetIndex);
      var base = scale.getPixelForValue(null, index, datasetIndex, isCombo);
      var size = ruler.barSize;

      base -= isCombo? ruler.tickSize / 2 : 0;
      base += ruler.fullBarSize * stackIndex;
      base += ruler.categorySpacing / 2;
      base += ruler.barSpacing / 2;

      return {
        size: size,
        base: base,
        head: base + size,
        center: base + size / 2
      };
    },

    draw: function() {
      var me = this;
      var chart = me.chart;
      var elements = me.getMeta().data;
      var dataset = me.getDataset();
      var ilen = elements.length;
      var i = 0;
      var d;

      helpers.canvas.clipArea(chart.ctx, chart.chartArea);

      for (; i<ilen; ++i) {
        d = dataset.data[i];
        if (d !== null && d !== undefined && !isNaN(d)) {
          elements[i].draw();
        }
      }

      helpers.canvas.unclipArea(chart.ctx);
    },

    setHoverStyle: function(rectangle) {
      var dataset = this.chart.data.datasets[rectangle._datasetIndex];
      var index = rectangle._index;
      var custom = rectangle.custom || {};
      var model = rectangle._model;

      model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
      model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
      model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
    },

    removeHoverStyle: function(rectangle) {
      var dataset = this.chart.data.datasets[rectangle._datasetIndex];
      var index = rectangle._index;
      var custom = rectangle.custom || {};
      var model = rectangle._model;
      var rectangleElementOptions = this.chart.options.elements.rectangle;

      model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
      model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
      model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
    }
  });


  // including horizontalBar in the bar file, instead of a file of its own
  // it extends bar (like pie extends doughnut)
  Chart.defaults.horizontalBar = {
    hover: {
      mode: 'label'
    },

    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }],
      yAxes: [{
        position: 'left',
        type: 'category',

        // Specific to Horizontal Bar Controller
        categoryPercentage: 0.8,
        barPercentage: 0.9,

        // grid line settings
        gridLines: {
          offsetGridLines: true
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: 'left'
      }
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItems, data) {
          // Pick first xLabel for now
          var title = '';

          if (tooltipItems.length > 0) {
            if (tooltipItems[0].yLabel) {
              title = tooltipItems[0].yLabel;
            } else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
              title = data.labels[tooltipItems[0].index];
            }
          }

          return title;
        },
        label: function(tooltipItem, data) {
          var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + tooltipItem.xLabel;
        }
      }
    }
  };

  Chart.controllers.horizontalBar = Chart.controllers.bar.extend({
    /**
     * @private
     */
    getValueScaleId: function() {
      return this.getMeta().xAxisID;
    },

    /**
     * @private
     */
    getIndexScaleId: function() {
      return this.getMeta().yAxisID;
    }
  });
};

},{}],16:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.defaults.bubble = {
    hover: {
      mode: 'single'
    },

    scales: {
      xAxes: [{
        type: 'linear', // bubble should probably use a linear scale by default
        position: 'bottom',
        id: 'x-axis-0' // need an ID so datasets can reference the scale
      }],
      yAxes: [{
        type: 'linear',
        position: 'left',
        id: 'y-axis-0'
      }]
    },

    tooltips: {
      callbacks: {
        title: function() {
          // Title doesn't make sense for scatter since we format the data as a point
          return '';
        },
        label: function(tooltipItem, data) {
          var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
          var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return datasetLabel + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ', ' + dataPoint.r + ')';
        }
      }
    }
  };

  Chart.controllers.bubble = Chart.DatasetController.extend({

    dataElementType: Chart.elements.Point,

    update: function(reset) {
      var me = this;
      var meta = me.getMeta();
      var points = meta.data;

      // Update Points
      helpers.each(points, function(point, index) {
        me.updateElement(point, index, reset);
      });
    },

    updateElement: function(point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var xScale = me.getScaleForId(meta.xAxisID);
      var yScale = me.getScaleForId(meta.yAxisID);

      var custom = point.custom || {};
      var dataset = me.getDataset();
      var data = dataset.data[index];
      var pointElementOptions = me.chart.options.elements.point;
      var dsIndex = me.index;

      helpers.extend(point, {
        // Utility
        _xScale: xScale,
        _yScale: yScale,
        _datasetIndex: dsIndex,
        _index: index,

        // Desired view properties
        _model: {
          x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex, me.chart.isCombo),
          y: reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex),
          // Appearance
          radius: reset ? 0 : custom.radius ? custom.radius : me.getRadius(data),

          // Tooltip
          hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
        }
      });

      // Trick to reset the styles of the point
      Chart.DatasetController.prototype.removeHoverStyle.call(me, point, pointElementOptions);

      var model = point._model;
      model.skip = custom.skip ? custom.skip : (isNaN(model.x) || isNaN(model.y));

      point.pivot();
    },

    getRadius: function(value) {
      return value.r || this.chart.options.elements.point.radius;
    },

    setHoverStyle: function(point) {
      var me = this;
      Chart.DatasetController.prototype.setHoverStyle.call(me, point);

      // Radius
      var dataset = me.chart.data.datasets[point._datasetIndex];
      var index = point._index;
      var custom = point.custom || {};
      var model = point._model;
      model.radius = custom.hoverRadius ? custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, me.chart.options.elements.point.hoverRadius)) + me.getRadius(dataset.data[index]);
    },

    removeHoverStyle: function(point) {
      var me = this;
      Chart.DatasetController.prototype.removeHoverStyle.call(me, point, me.chart.options.elements.point);

      var dataVal = me.chart.data.datasets[point._datasetIndex].data[point._index];
      var custom = point.custom || {};
      var model = point._model;

      model.radius = custom.radius ? custom.radius : me.getRadius(dataVal);
    }
  });
};

},{}],17:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers,
    defaults = Chart.defaults;

  defaults.doughnut = {
    animation: {
      // Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,
      // Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false
    },
    aspectRatio: 1,
    hover: {
      mode: 'single'
    },
    legendCallback: function(chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend">');

      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;

      if (datasets.length) {
        for (var i = 0; i < datasets[0].data.length; ++i) {
          text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
          if (labels[i]) {
            text.push(labels[i]);
          }
          text.push('</li>');
        }
      }

      text.push('</ul>');
      return text.join('');
    },
    legend: {
      labels: {
        generateLabels: function(chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function(label, i) {
              var meta = chart.getDatasetMeta(0);
              var ds = data.datasets[0];
              var arc = meta.data[i];
              var custom = arc && arc.custom || {};
              var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
              var arcOpts = chart.options.elements.arc;
              var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
              var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
              var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

              return {
                text: label,
                fillStyle: fill,
                strokeStyle: stroke,
                lineWidth: bw,
                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

                // Extra data used for toggling the correct item
                index: i
              };
            });
          }
          return [];
        }
      },

      onClick: function(e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i);
          // toggle visibility of index if exists
          if (meta.data[index]) {
            meta.data[index].hidden = !meta.data[index].hidden;
          }
        }

        chart.update();
      }
    },

    // The percentage of the chart that we cut out of the middle.
    cutoutPercentage: 50,

    // The rotation of the chart, where the first data arc begins.
    rotation: Math.PI * -0.5,

    // The total circumference of the chart.
    circumference: Math.PI * 2.0,

    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function() {
          return '';
        },
        label: function(tooltipItem, data) {
          var dataLabel = data.labels[tooltipItem.index];
          var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

          if (helpers.isArray(dataLabel)) {
            // show value on first line of multiline label
            // need to clone because we are changing the value
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }

          return dataLabel;
        }
      }
    }
  };

  defaults.pie = helpers.clone(defaults.doughnut);
  helpers.extend(defaults.pie, {
    cutoutPercentage: 0
  });


  Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({

    dataElementType: Chart.elements.Arc,

    linkScales: helpers.noop,

    // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
    getRingIndex: function(datasetIndex) {
      var ringIndex = 0;

      for (var j = 0; j < datasetIndex; ++j) {
        if (this.chart.isDatasetVisible(j)) {
          ++ringIndex;
        }
      }

      return ringIndex;
    },

    update: function(reset) {
      var me = this;
      var chart = me.chart,
        chartArea = chart.chartArea,
        opts = chart.options,
        arcOpts = opts.elements.arc,
        availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth,
        availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth,
        minSize = Math.min(availableWidth, availableHeight),
        offset = {
          x: 0,
          y: 0
        },
        meta = me.getMeta(),
        cutoutPercentage = opts.cutoutPercentage,
        circumference = opts.circumference;

      // If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
      if (circumference < Math.PI * 2.0) {
        var startAngle = opts.rotation % (Math.PI * 2.0);
        startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
        var endAngle = startAngle + circumference;
        var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
        var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
        var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
        var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
        var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
        var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
        var cutout = cutoutPercentage / 100.0;
        var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
        var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
        var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
        minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
        offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
      }

      chart.borderWidth = me.getMaxBorderWidth(meta.data);
      chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
      chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
      chart.offsetX = offset.x * chart.outerRadius;
      chart.offsetY = offset.y * chart.outerRadius;

      meta.total = me.calculateTotal();

      me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
      me.innerRadius = Math.max(me.outerRadius - chart.radiusLength, 0);

      helpers.each(meta.data, function(arc, index) {
        me.updateElement(arc, index, reset);
      });
    },

    updateElement: function(arc, index, reset) {
      var me = this;
      var chart = me.chart,
        chartArea = chart.chartArea,
        opts = chart.options,
        animationOpts = opts.animation,
        centerX = (chartArea.left + chartArea.right) / 2,
        centerY = (chartArea.top + chartArea.bottom) / 2,
        startAngle = opts.rotation, // non reset case handled later
        endAngle = opts.rotation, // non reset case handled later
        dataset = me.getDataset(),
        circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
        innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius,
        outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius,
        valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;

      helpers.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,

        // Desired view properties
        _model: {
          x: centerX + chart.offsetX,
          y: centerY + chart.offsetY,
          startAngle: startAngle,
          endAngle: endAngle,
          circumference: circumference,
          outerRadius: outerRadius,
          innerRadius: innerRadius,
          label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
        }
      });

      var model = arc._model;
      // Resets the visual styles
      this.removeHoverStyle(arc);

      // Set correct angles if not resetting
      if (!reset || !animationOpts.animateRotate) {
        if (index === 0) {
          model.startAngle = opts.rotation;
        } else {
          model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
        }

        model.endAngle = model.startAngle + model.circumference;
      }

      arc.pivot();
    },

    removeHoverStyle: function(arc) {
      Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
    },

    calculateTotal: function() {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var total = 0;
      var value;

      helpers.each(meta.data, function(element, index) {
        value = dataset.data[index];
        if (!isNaN(value) && !element.hidden) {
          total += Math.abs(value);
        }
      });

      /* if (total === 0) {
        total = NaN;
      }*/

      return total;
    },

    calculateCircumference: function(value) {
      var total = this.getMeta().total;
      if (total > 0 && !isNaN(value)) {
        return (Math.PI * 2.0) * (value / total);
      }
      return 0;
    },

    // gets the max border or hover width to properly scale pie charts
    getMaxBorderWidth: function(elements) {
      var max = 0,
        index = this.index,
        length = elements.length,
        borderWidth,
        hoverWidth;

      for (var i = 0; i < length; i++) {
        borderWidth = elements[i]._model ? elements[i]._model.borderWidth : 0;
        hoverWidth = elements[i]._chart ? elements[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;

        max = borderWidth > max ? borderWidth : max;
        max = hoverWidth > max ? hoverWidth : max;
      }
      return max;
    }
  });
};

},{}],18:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.defaults.line = {
    showLines: true,
    spanGaps: false,

    hover: {
      mode: 'label'
    },

    scales: {
      xAxes: [{
        type: 'category',
        id: 'x-axis-0'
      }],
      yAxes: [{
        type: 'linear',
        id: 'y-axis-0'
      }]
    }
  };

  function lineEnabled(dataset, options) {
    return helpers.getValueOrDefault(dataset.showLine, options.showLines);
  }

  Chart.controllers.line = Chart.DatasetController.extend({

    datasetElementType: Chart.elements.Line,

    dataElementType: Chart.elements.Point,

    update: function(reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var options = me.chart.options;
      var lineElementOptions = options.elements.line;
      var scale = me.getScaleForId(meta.yAxisID);
      var i, ilen, custom;
      var dataset = me.getDataset();
      var showLine = lineEnabled(dataset, options);

      // Update Line
      if (showLine) {
        custom = line.custom || {};

        // Compatibility: If the properties are defined with only the old name, use those values
        if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
          dataset.lineTension = dataset.tension;
        }

        // Utility
        line._scale = scale;
        line._datasetIndex = me.index;
        // Data
        line._children = points;
        // Model
        line._model = {
          // Appearance
          // The default behavior of lines is to break at null values, according
          // to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
          // This option gives lines the ability to span gaps
          spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
          tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
          backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
          borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
          borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
          borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
          borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
          borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
          borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
          fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
          steppedLine: custom.steppedLine ? custom.steppedLine : helpers.getValueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
          cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.getValueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
        };

        line.pivot();
      }

      // Update Points
      for (i=0, ilen=points.length; i<ilen; ++i) {
        me.updateElement(points[i], i, reset);
      }

      if (showLine && line._model.tension !== 0) {
        me.updateBezierControlPoints();
      }

      // Now pivot the point for animation
      for (i=0, ilen=points.length; i<ilen; ++i) {
        points[i].pivot();
      }
    },

    getPointBackgroundColor: function(point, index) {
      var backgroundColor = this.chart.options.elements.point.backgroundColor;
      var dataset = this.getDataset();
      var custom = point.custom || {};

      if (custom.backgroundColor) {
        backgroundColor = custom.backgroundColor;
      } else if (dataset.pointBackgroundColor) {
        backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
      } else if (dataset.backgroundColor) {
        backgroundColor = dataset.backgroundColor;
      }

      return backgroundColor;
    },

    getPointBorderColor: function(point, index) {
      var borderColor = this.chart.options.elements.point.borderColor;
      var dataset = this.getDataset();
      var custom = point.custom || {};

      if (custom.borderColor) {
        borderColor = custom.borderColor;
      } else if (dataset.pointBorderColor) {
        borderColor = helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
      } else if (dataset.borderColor) {
        borderColor = dataset.borderColor;
      }

      return borderColor;
    },

    getPointBorderWidth: function(point, index) {
      var borderWidth = this.chart.options.elements.point.borderWidth;
      var dataset = this.getDataset();
      var custom = point.custom || {};

      if (!isNaN(custom.borderWidth)) {
        borderWidth = custom.borderWidth;
      } else if (!isNaN(dataset.pointBorderWidth)) {
        borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
      } else if (!isNaN(dataset.borderWidth)) {
        borderWidth = dataset.borderWidth;
      }

      return borderWidth;
    },

    updateElement: function(point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var datasetIndex = me.index;
      var value = dataset.data[index];
      var yScale = me.getScaleForId(meta.yAxisID);
      var xScale = me.getScaleForId(meta.xAxisID);
      var pointOptions = me.chart.options.elements.point;
      var x, y;
      var labels = me.chart.data.labels || [];
      var includeOffset = (labels.length === 1 || dataset.data.length === 1) || me.chart.isCombo;

      // Compatibility: If the properties are defined with only the old name, use those values
      if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
        dataset.pointRadius = dataset.radius;
      }
      if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
        dataset.pointHitRadius = dataset.hitRadius;
      }

      x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex, includeOffset);
      y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

      // Utility
      point._xScale = xScale;
      point._yScale = yScale;
      point._datasetIndex = datasetIndex;
      point._index = index;

      // Desired view properties
      point._model = {
        x: x,
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
        pointStyle: custom.pointStyle || helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
        backgroundColor: me.getPointBackgroundColor(point, index),
        borderColor: me.getPointBorderColor(point, index),
        borderWidth: me.getPointBorderWidth(point, index),
        tension: meta.dataset._model ? meta.dataset._model.tension : 0,
        steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
        // Tooltip
        hitRadius: custom.hitRadius || helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
      };
    },

    calculatePointY: function(value, index, datasetIndex) {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var yScale = me.getScaleForId(meta.yAxisID);
      var sumPos = 0;
      var sumNeg = 0;
      var i, ds, dsMeta;

      if (yScale.options.stacked) {
        for (i = 0; i < datasetIndex; i++) {
          ds = chart.data.datasets[i];
          dsMeta = chart.getDatasetMeta(i);
          if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
            var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
            if (stackedRightValue < 0) {
              sumNeg += stackedRightValue || 0;
            } else {
              sumPos += stackedRightValue || 0;
            }
          }
        }

        var rightValue = Number(yScale.getRightValue(value));
        if (rightValue < 0) {
          return yScale.getPixelForValue(sumNeg + rightValue);
        }
        return yScale.getPixelForValue(sumPos + rightValue);
      }

      return yScale.getPixelForValue(value);
    },

    updateBezierControlPoints: function() {
      var me = this;
      var meta = me.getMeta();
      var area = me.chart.chartArea;
      var points = (meta.data || []);
      var i, ilen, point, model, controlPoints;

      // Only consider points that are drawn in case the spanGaps option is used
      if (meta.dataset._model.spanGaps) {
        points = points.filter(function(pt) {
          return !pt._model.skip;
        });
      }

      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }

      if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
        helpers.splineCurveMonotone(points);
      } else {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          point = points[i];
          model = point._model;
          controlPoints = helpers.splineCurve(
            helpers.previousItem(points, i)._model,
            model,
            helpers.nextItem(points, i)._model,
            meta.dataset._model.tension
          );
          model.controlPointPreviousX = controlPoints.previous.x;
          model.controlPointPreviousY = controlPoints.previous.y;
          model.controlPointNextX = controlPoints.next.x;
          model.controlPointNextY = controlPoints.next.y;
        }
      }

      if (me.chart.options.elements.line.capBezierPoints) {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;
          model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
          model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
          model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
          model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
        }
      }
    },

    draw: function() {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var points = meta.data || [];
      var area = chart.chartArea;
      var ilen = points.length;
      var i = 0;

      Chart.canvasHelpers.clipArea(chart.ctx, area);

      if (lineEnabled(me.getDataset(), chart.options)) {
        meta.dataset.draw();
      }

      Chart.canvasHelpers.unclipArea(chart.ctx);

      // Draw the points
      for (; i<ilen; ++i) {
        points[i].draw(area);
      }
    },

    setHoverStyle: function(point) {
      // Point
      var dataset = this.chart.data.datasets[point._datasetIndex];
      var index = point._index;
      var custom = point.custom || {};
      var model = point._model;

      model.radius = custom.hoverRadius || helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
      model.backgroundColor = custom.hoverBackgroundColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
      model.borderColor = custom.hoverBorderColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
      model.borderWidth = custom.hoverBorderWidth || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
    },

    removeHoverStyle: function(point) {
      var me = this;
      var dataset = me.chart.data.datasets[point._datasetIndex];
      var index = point._index;
      var custom = point.custom || {};
      var model = point._model;

      // Compatibility: If the properties are defined with only the old name, use those values
      if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
        dataset.pointRadius = dataset.radius;
      }

      model.radius = custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
      model.backgroundColor = me.getPointBackgroundColor(point, index);
      model.borderColor = me.getPointBorderColor(point, index);
      model.borderWidth = me.getPointBorderWidth(point, index);
    }
  });
};

},{}],19:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.defaults.polarArea = {

    scale: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      gridLines: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      ticks: {
        beginAtZero: true
      }
    },

    // Boolean - Whether to animate the rotation of the chart
    animation: {
      animateRotate: true,
      animateScale: true
    },

    startAngle: -0.5 * Math.PI,
    aspectRatio: 1,
    legendCallback: function(chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend">');

      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;

      if (datasets.length) {
        for (var i = 0; i < datasets[0].data.length; ++i) {
          text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
          if (labels[i]) {
            text.push(labels[i]);
          }
          text.push('</li>');
        }
      }

      text.push('</ul>');
      return text.join('');
    },
    legend: {
      labels: {
        generateLabels: function(chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function(label, i) {
              var meta = chart.getDatasetMeta(0);
              var ds = data.datasets[0];
              var arc = meta.data[i];
              var custom = arc.custom || {};
              var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
              var arcOpts = chart.options.elements.arc;
              var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
              var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
              var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

              return {
                text: label,
                fillStyle: fill,
                strokeStyle: stroke,
                lineWidth: bw,
                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

                // Extra data used for toggling the correct item
                index: i
              };
            });
          }
          return [];
        }
      },

      onClick: function(e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i);
          meta.data[index].hidden = !meta.data[index].hidden;
        }

        chart.update();
      }
    },

    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function() {
          return '';
        },
        label: function(tooltipItem, data) {
          return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
        }
      }
    }
  };

  Chart.controllers.polarArea = Chart.DatasetController.extend({

    dataElementType: Chart.elements.Arc,

    linkScales: helpers.noop,

    update: function(reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var meta = me.getMeta();
      var opts = chart.options;
      var arcOpts = opts.elements.arc;
      var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
      chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
      chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

      me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
      me.innerRadius = me.outerRadius - chart.radiusLength;

      meta.count = me.countVisibleElements();

      helpers.each(meta.data, function(arc, index) {
        me.updateElement(arc, index, reset);
      });
    },

    updateElement: function(arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var opts = chart.options;
      var animationOpts = opts.animation;
      var scale = chart.scale;
      var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
      var labels = chart.data.labels;

      var circumference = me.calculateCircumference(dataset.data[index]);
      var centerX = scale.xCenter;
      var centerY = scale.yCenter;

      // If there is NaN data before us, we need to calculate the starting angle correctly.
      // We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
      var visibleCount = 0;
      var meta = me.getMeta();
      for (var i = 0; i < index; ++i) {
        if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
          ++visibleCount;
        }
      }

      // var negHalfPI = -0.5 * Math.PI;
      var datasetStartAngle = opts.startAngle;
      var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var startAngle = datasetStartAngle + (circumference * visibleCount);
      var endAngle = startAngle + (arc.hidden ? 0 : circumference);

      var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);

      helpers.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
        _scale: scale,

        // Desired view properties
        _model: {
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius: reset ? resetRadius : distance,
          startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
          endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
          label: getValueAtIndexOrDefault(labels, index, labels[index])
        }
      });

      // Apply border and fill style
      me.removeHoverStyle(arc);

      arc.pivot();
    },

    removeHoverStyle: function(arc) {
      Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
    },

    countVisibleElements: function() {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var count = 0;

      helpers.each(meta.data, function(element, index) {
        if (!isNaN(dataset.data[index]) && !element.hidden) {
          count++;
        }
      });

      return count;
    },

    calculateCircumference: function(value) {
      var count = this.getMeta().count;
      if (count > 0 && !isNaN(value)) {
        return (2 * Math.PI) / count;
      }
      return 0;
    }
  });
};

},{}],20:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.defaults.radar = {
    aspectRatio: 1,
    scale: {
      type: 'radialLinear'
    },
    elements: {
      line: {
        tension: 0 // no bezier in radar
      }
    }
  };

  Chart.controllers.radar = Chart.DatasetController.extend({

    datasetElementType: Chart.elements.Line,

    dataElementType: Chart.elements.Point,

    linkScales: helpers.noop,

    update: function(reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data;
      var custom = line.custom || {};
      var dataset = me.getDataset();
      var lineElementOptions = me.chart.options.elements.line;
      var scale = me.chart.scale;

      // Compatibility: If the properties are defined with only the old name, use those values
      if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
        dataset.lineTension = dataset.tension;
      }

      helpers.extend(meta.dataset, {
        // Utility
        _datasetIndex: me.index,
        _scale: scale,
        // Data
        _children: points,
        _loop: true,
        // Model
        _model: {
          // Appearance
          tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
          backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
          borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
          borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
          fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
          borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
          borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
          borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
          borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
        }
      });

      meta.dataset.pivot();

      // Update Points
      helpers.each(points, function(point, index) {
        me.updateElement(point, index, reset);
      }, me);

      // Update bezier control points
      me.updateBezierControlPoints();
    },
    updateElement: function(point, index, reset) {
      var me = this;
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var scale = me.chart.scale;
      var pointElementOptions = me.chart.options.elements.point;
      var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

      // Compatibility: If the properties are defined with only the old name, use those values
      if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
        dataset.pointRadius = dataset.radius;
      }
      if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
        dataset.pointHitRadius = dataset.hitRadius;
      }

      helpers.extend(point, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
        _scale: scale,

        // Desired view properties
        _model: {
          x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
          y: reset ? scale.yCenter : pointPosition.y,

          // Appearance
          tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, me.chart.options.elements.line.tension),
          radius: custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
          backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
          borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
          borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
          pointStyle: custom.pointStyle ? custom.pointStyle : helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),

          // Tooltip
          hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointElementOptions.hitRadius)
        }
      });

      point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
    },
    updateBezierControlPoints: function() {
      var chartArea = this.chart.chartArea;
      var meta = this.getMeta();

      helpers.each(meta.data, function(point, index) {
        var model = point._model;
        var controlPoints = helpers.splineCurve(
          helpers.previousItem(meta.data, index, true)._model,
          model,
          helpers.nextItem(meta.data, index, true)._model,
          model.tension
        );

        // Prevent the bezier going outside of the bounds of the graph
        model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
        model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);

        model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
        model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);

        // Now pivot the point for animation
        point.pivot();
      });
    },

    setHoverStyle: function(point) {
      // Point
      var dataset = this.chart.data.datasets[point._datasetIndex];
      var custom = point.custom || {};
      var index = point._index;
      var model = point._model;

      model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
      model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
      model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
      model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
    },

    removeHoverStyle: function(point) {
      var dataset = this.chart.data.datasets[point._datasetIndex];
      var custom = point.custom || {};
      var index = point._index;
      var model = point._model;
      var pointElementOptions = this.chart.options.elements.point;

      model.radius = custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius);
      model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
      model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
      model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
    }
  });
};

},{}],21:[function(require,module,exports){
/* global window: false */
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.defaults.global.animation = {
    duration: 1000,
    easing: 'easeOutQuart',
    onProgress: helpers.noop,
    onComplete: helpers.noop
  };

  Chart.Animation = Chart.Element.extend({
    chart: null, // the animation associated chart instance
    currentStep: 0, // the current animation step
    numSteps: 60, // default number of steps
    easing: '', // the easing to use for this animation
    render: null, // render function used by the animation service

    onAnimationProgress: null, // user specified callback to fire on each step of the animation
    onAnimationComplete: null, // user specified callback to fire when the animation finishes
  });

  Chart.animationService = {
    frameDuration: 17,
    animations: [],
    dropFrames: 0,
    request: null,

    /**
     * @param {Chart} chart - The chart to animate.
     * @param {Chart.Animation} animation - The animation that we will animate.
     * @param {Number} duration - The animation duration in ms.
     * @param {Boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
     */
    addAnimation: function(chart, animation, duration, lazy) {
      var animations = this.animations;
      var i, ilen;

      animation.chart = chart;

      if (!lazy) {
        chart.animating = true;
      }

      for (i=0, ilen=animations.length; i < ilen; ++i) {
        if (animations[i].chart === chart) {
          animations[i] = animation;
          return;
        }
      }

      animations.push(animation);

      // If there are no animations queued, manually kickstart a digest, for lack of a better word
      if (animations.length === 1) {
        this.requestAnimationFrame();
      }
    },

    cancelAnimation: function(chart) {
      var index = helpers.findIndex(this.animations, function(animation) {
        return animation.chart === chart;
      });

      if (index !== -1) {
        this.animations.splice(index, 1);
        chart.animating = false;
      }
    },

    requestAnimationFrame: function() {
      var me = this;
      if (me.request === null) {
        // Skip animation frame requests until the active one is executed.
        // This can happen when processing mouse events, e.g. 'mousemove'
        // and 'mouseout' events will trigger multiple renders.
        me.request = helpers.requestAnimFrame.call(window, function() {
          me.request = null;
          me.startDigest();
        });
      }
    },

    /**
     * @private
     */
    startDigest: function() {
      var me = this;
      var startTime = Date.now();
      var framesToDrop = 0;

      if (me.dropFrames > 1) {
        framesToDrop = Math.floor(me.dropFrames);
        me.dropFrames = me.dropFrames % 1;
      }

      me.advance(1 + framesToDrop);

      var endTime = Date.now();

      me.dropFrames += (endTime - startTime) / me.frameDuration;

      // Do we have more stuff to animate?
      if (me.animations.length > 0) {
        me.requestAnimationFrame();
      }
    },

    /**
     * @private
     */
    advance: function(count) {
      var animations = this.animations;
      var animation, chart;
      var i = 0;

      while (i < animations.length) {
        animation = animations[i];
        chart = animation.chart;

        animation.currentStep = (animation.currentStep || 0) + count;
        animation.currentStep = Math.min(animation.currentStep, animation.numSteps);

        helpers.callback(animation.render, [chart, animation], chart);
        helpers.callback(animation.onAnimationProgress, [animation], chart);

        if (animation.currentStep >= animation.numSteps) {
          helpers.callback(animation.onAnimationComplete, [animation], chart);
          chart.animating = false;
          animations.splice(i, 1);
        } else {
          ++i;
        }
      }
    }
  };

  /**
   * Provided for backward compatibility, use Chart.Animation instead
   * @prop Chart.Animation#animationObject
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */
  Object.defineProperty(Chart.Animation.prototype, 'animationObject', {
    get: function() {
      return this;
    }
  });

  /**
   * Provided for backward compatibility, use Chart.Animation#chart instead
   * @prop Chart.Animation#chartInstance
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */
  Object.defineProperty(Chart.Animation.prototype, 'chartInstance', {
    get: function() {
      return this.chart;
    },
    set: function(value) {
      this.chart = value;
    }
  });

};

},{}],22:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
  // Global Chart canvas helpers object for drawing items to canvas
  var helpers = Chart.canvasHelpers = {};

  helpers.drawPoint = function(ctx, pointStyle, radius, x, y) {
    var type, edgeLength, xOffset, yOffset, height, size;

    if (typeof pointStyle === 'object') {
      type = pointStyle.toString();
      if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
        ctx.drawImage(pointStyle, x - pointStyle.width / 2, y - pointStyle.height / 2, pointStyle.width, pointStyle.height);
        return;
      }
    }

    if (isNaN(radius) || radius <= 0) {
      return;
    }

    switch (pointStyle) {
    // Default includes circle
    default:
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      break;
    case 'triangle':
      ctx.beginPath();
      edgeLength = 3 * radius / Math.sqrt(3);
      height = edgeLength * Math.sqrt(3) / 2;
      ctx.moveTo(x - edgeLength / 2, y + height / 3);
      ctx.lineTo(x + edgeLength / 2, y + height / 3);
      ctx.lineTo(x, y - 2 * height / 3);
      ctx.closePath();
      ctx.fill();
      break;
    case 'rect':
      size = 1 / Math.SQRT2 * radius;
      ctx.beginPath();
      ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
      ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
      break;
    case 'rectRounded':
      var offset = radius / Math.SQRT2;
      var leftX = x - offset;
      var topY = y - offset;
      var sideSize = Math.SQRT2 * radius;
      Chart.helpers.drawRoundedRectangle(ctx, leftX, topY, sideSize, sideSize, radius / 2);
      ctx.fill();
      break;
    case 'rectRot':
      size = 1 / Math.SQRT2 * radius;
      ctx.beginPath();
      ctx.moveTo(x - size, y);
      ctx.lineTo(x, y + size);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x, y - size);
      ctx.closePath();
      ctx.fill();
      break;
    case 'cross':
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y - radius);
      ctx.moveTo(x - radius, y);
      ctx.lineTo(x + radius, y);
      ctx.closePath();
      break;
    case 'crossRot':
      ctx.beginPath();
      xOffset = Math.cos(Math.PI / 4) * radius;
      yOffset = Math.sin(Math.PI / 4) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x - xOffset, y + yOffset);
      ctx.lineTo(x + xOffset, y - yOffset);
      ctx.closePath();
      break;
    case 'star':
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y - radius);
      ctx.moveTo(x - radius, y);
      ctx.lineTo(x + radius, y);
      xOffset = Math.cos(Math.PI / 4) * radius;
      yOffset = Math.sin(Math.PI / 4) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x - xOffset, y + yOffset);
      ctx.lineTo(x + xOffset, y - yOffset);
      ctx.closePath();
      break;
    case 'line':
      ctx.beginPath();
      ctx.moveTo(x - radius, y);
      ctx.lineTo(x + radius, y);
      ctx.closePath();
      break;
    case 'dash':
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + radius, y);
      ctx.closePath();
      break;
    }

    ctx.stroke();
  };

  helpers.clipArea = function(ctx, clipArea) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(clipArea.left, clipArea.top, clipArea.right - clipArea.left, clipArea.bottom - clipArea.top);
    ctx.clip();
  };

  helpers.unclipArea = function(ctx) {
    ctx.restore();
  };

  helpers.lineTo = function(ctx, previous, target, flip) {
    if (target.steppedLine) {
      if (target.steppedLine === 'after') {
        ctx.lineTo(previous.x, target.y);
      } else {
        ctx.lineTo(target.x, previous.y);
      }
      ctx.lineTo(target.x, target.y);
      return;
    }

    if (!target.tension) {
      ctx.lineTo(target.x, target.y);
      return;
    }

    ctx.bezierCurveTo(
      flip? previous.controlPointPreviousX : previous.controlPointNextX,
      flip? previous.controlPointPreviousY : previous.controlPointNextY,
      flip? target.controlPointNextX : target.controlPointPreviousX,
      flip? target.controlPointNextY : target.controlPointPreviousY,
      target.x,
      target.y);
  };

  Chart.helpers.canvas = helpers;
};

},{}],23:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;
  var plugins = Chart.plugins;
  var platform = Chart.platform;

  // Create a dictionary of chart types, to allow for extension of existing types
  Chart.types = {};

  // Store a reference to each instance - allowing us to globally resize chart instances on window resize.
  // Destroy method on the chart will remove the instance of the chart from this reference.
  Chart.instances = {};

  // Controllers available for dataset visualization eg. bar, line, slice, etc.
  Chart.controllers = {};

  /**
   * Initializes the given config with global and chart default values.
   */
  function initConfig(config) {
    config = config || {};

    // Do NOT use configMerge() for the data object because this method merges arrays
    // and so would change references to labels and datasets, preventing data updates.
    var data = config.data = config.data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];

    config.options = helpers.configMerge(
      Chart.defaults.global,
      Chart.defaults[config.type],
      config.options || {});

    return config;
  }

  /**
   * Updates the config of the chart
   * @param chart {Chart} chart to update the options for
   */
  function updateConfig(chart) {
    var newOptions = chart.options;

    // Update Scale(s) with options
    if (newOptions.scale) {
      chart.scale.options = newOptions.scale;
    } else if (newOptions.scales) {
      newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions) {
        chart.scales[scaleOptions.id].options = scaleOptions;
      });
    }

    // Tooltip
    chart.tooltip._options = newOptions.tooltips;
  }

  function positionIsHorizontal(position) {
    return position === 'top' || position === 'bottom';
  }

  helpers.extend(Chart.prototype, /** @lends Chart */ {
    /**
     * @private
     */
    construct: function(item, config) {
      var me = this;

      config = initConfig(config);

      var context = platform.acquireContext(item, config);
      var canvas = context && context.canvas;
      var height = canvas && canvas.height;
      var width = canvas && canvas.width;

      me.id = helpers.uid();
      me.ctx = context;
      me.canvas = canvas;
      me.config = config;
      me.width = width;
      me.height = height;
      me.aspectRatio = height? width / height : null;
      me.options = config.options;
      me._bufferedRender = false;

      /**
       * Provided for backward compatibility, Chart and Chart.Controller have been merged,
       * the "instance" still need to be defined since it might be called from plugins.
       * @prop Chart#chart
       * @deprecated since version 2.6.0
       * @todo remove at version 3
       * @private
       */
      me.chart = me;
      me.controller = me;  // chart.chart.controller #inception

      // Add the chart instance to the global namespace
      Chart.instances[me.id] = me;

      // Define alias to the config data: `chart.data === chart.config.data`
      Object.defineProperty(me, 'data', {
        get: function() {
          return me.config.data;
        },
        set: function(value) {
          me.config.data = value;
        }
      });

      if (!context || !canvas) {
        // The given item is not a compatible context2d element, let's return before finalizing
        // the chart initialization but after setting basic chart / controller properties that
        // can help to figure out that the chart is not valid (e.g chart.canvas !== null);
        // https://github.com/chartjs/Chart.js/issues/2807
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }

      me.initialize();
      me.update();
    },

    /**
     * @private
     */
    initialize: function() {
      var me = this;

      // Before init plugin notification
      plugins.notify(me, 'beforeInit');

      helpers.retinaScale(me);

      me.bindEvents();

      if (me.options.responsive) {
        // Initial resize before chart draws (must be silent to preserve initial animations).
        me.resize(true);
      }

      // Make sure scales have IDs and are built before we build any controllers.
      me.ensureScalesHaveIDs();
      me.buildScales();
      me.initToolTip();

      // After init plugin notification
      plugins.notify(me, 'afterInit');

      return me;
    },

    clear: function() {
      helpers.clear(this);
      return this;
    },

    stop: function() {
      // Stops any current animation loop occurring
      Chart.animationService.cancelAnimation(this);
      return this;
    },

    resize: function(silent) {
      var me = this;
      var options = me.options;
      var canvas = me.canvas;
      var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;

      // the canvas render width and height will be casted to integers so make sure that
      // the canvas display style uses the same integer values to avoid blurring effect.
      var newWidth = Math.floor(helpers.getMaximumWidth(canvas));
      var newHeight = Math.floor(aspectRatio? newWidth / aspectRatio : helpers.getMaximumHeight(canvas));

      if (me.width === newWidth && me.height === newHeight) {
        return;
      }

      canvas.width = me.width = newWidth;
      canvas.height = me.height = newHeight;
      canvas.style.width = newWidth + 'px';
      canvas.style.height = newHeight + 'px';

      helpers.retinaScale(me);

      if (!silent) {
        // Notify any plugins about the resize
        var newSize = {width: newWidth, height: newHeight};
        plugins.notify(me, 'resize', [newSize]);

        // Notify of resize
        if (me.options.onResize) {
          me.options.onResize(me, newSize);
        }

        me.stop();
        me.update(me.options.responsiveAnimationDuration);
      }
    },

    ensureScalesHaveIDs: function() {
      var options = this.options;
      var scalesOptions = options.scales || {};
      var scaleOptions = options.scale;

      helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
        xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
      });

      helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
        yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
      });

      if (scaleOptions) {
        scaleOptions.id = scaleOptions.id || 'scale';
      }
    },

    /**
     * Builds a map of scale ID to scale object for future lookup.
     */
    buildScales: function() {
      var me = this;
      var options = me.options;
      var scales = me.scales = {};
      var items = [];

      if (options.scales) {
        items = items.concat(
          (options.scales.xAxes || []).map(function(xAxisOptions) {
            return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
          }),
          (options.scales.yAxes || []).map(function(yAxisOptions) {
            return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
          })
        );
      }

      if (options.scale) {
        items.push({
          options: options.scale,
          dtype: 'radialLinear',
          isDefault: true,
          dposition: 'chartArea'
        });
      }

      helpers.each(items, function(item) {
        var scaleOptions = item.options;
        var scaleType = helpers.getValueOrDefault(scaleOptions.type, item.dtype);
        var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
        if (!scaleClass) {
          return;
        }

        if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }

        var scale = new scaleClass({
          id: scaleOptions.id,
          options: scaleOptions,
          ctx: me.ctx,
          chart: me
        });

        scales[scale.id] = scale;

        // TODO(SB): I think we should be able to remove this custom case (options.scale)
        // and consider it as a regular scale part of the "scales"" map only! This would
        // make the logic easier and remove some useless? custom code.
        if (item.isDefault) {
          me.scale = scale;
        }
      });

      Chart.scaleService.addScalesToLayout(this);
    },

    buildOrUpdateControllers: function() {
      var me = this;
      var types = [];
      var newControllers = [];

      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
        var meta = me.getDatasetMeta(datasetIndex);
        if (!meta.type) {
          meta.type = dataset.type || me.config.type;
        }

        types.push(meta.type);

        if (meta.controller) {
          meta.controller.updateIndex(datasetIndex);
        } else {
          var ControllerClass = Chart.controllers[meta.type];
          if (ControllerClass === undefined) {
            throw new Error('"' + meta.type + '" is not a chart type.');
          }

          meta.controller = new ControllerClass(me, datasetIndex);
          newControllers.push(meta.controller);
        }
      }, me);

      if (types.length > 1) {
        for (var i = 1; i < types.length; i++) {
          if (types[i] !== types[i - 1]) {
            me.isCombo = true;
            break;
          }
        }
      }

      return newControllers;
    },

    /**
     * Reset the elements of all datasets
     * @private
     */
    resetElements: function() {
      var me = this;
      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
        me.getDatasetMeta(datasetIndex).controller.reset();
      }, me);
    },

    /**
    * Resets the chart back to it's state before the initial animation
    */
    reset: function() {
      this.resetElements();
      this.tooltip.initialize();
    },

    update: function(animationDuration, lazy) {
      var me = this;

      updateConfig(me);

      if (plugins.notify(me, 'beforeUpdate') === false) {
        return;
      }

      // In case the entire data object changed
      me.tooltip._data = me.data;

      // Make sure dataset controllers are updated and new controllers are reset
      var newControllers = me.buildOrUpdateControllers();

      // Make sure all dataset controllers have correct meta data counts
      helpers.each(me.data.datasets, function(dataset, datasetIndex) {
        me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
      }, me);

      me.updateLayout();

      // Can only reset the new controllers after the scales have been updated
      helpers.each(newControllers, function(controller) {
        controller.reset();
      });

      me.updateDatasets();

      // Do this before render so that any plugins that need final scale updates can use it
      plugins.notify(me, 'afterUpdate');

      if (me._bufferedRender) {
        me._bufferedRequest = {
          lazy: lazy,
          duration: animationDuration
        };
      } else {
        me.render(animationDuration, lazy);
      }
    },

    /**
     * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
     * hook, in which case, plugins will not be called on `afterLayout`.
     * @private
     */
    updateLayout: function() {
      var me = this;

      if (plugins.notify(me, 'beforeLayout') === false) {
        return;
      }

      Chart.layoutService.update(this, this.width, this.height);

      /**
       * Provided for backward compatibility, use `afterLayout` instead.
       * @method IPlugin#afterScaleUpdate
       * @deprecated since version 2.5.0
       * @todo remove at version 3
       * @private
       */
      plugins.notify(me, 'afterScaleUpdate');
      plugins.notify(me, 'afterLayout');
    },

    /**
     * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
     * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
     * @private
     */
    updateDatasets: function() {
      var me = this;

      if (plugins.notify(me, 'beforeDatasetsUpdate') === false) {
        return;
      }

      for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
        me.updateDataset(i);
      }

      plugins.notify(me, 'afterDatasetsUpdate');
    },

    /**
     * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
     * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
     * @private
     */
    updateDataset: function(index) {
      var me = this;
      var meta = me.getDatasetMeta(index);
      var args = {
        meta: meta,
        index: index
      };

      if (plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
        return;
      }

      meta.controller.update();

      plugins.notify(me, 'afterDatasetUpdate', [args]);
    },

    render: function(duration, lazy) {
      var me = this;

      if (plugins.notify(me, 'beforeRender') === false) {
        return;
      }

      var animationOptions = me.options.animation;
      var onComplete = function(animation) {
        plugins.notify(me, 'afterRender');
        helpers.callback(animationOptions && animationOptions.onComplete, [animation], me);
      };

      if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
        var animation = new Chart.Animation({
          numSteps: (duration || animationOptions.duration) / 16.66, // 60 fps
          easing: animationOptions.easing,

          render: function(chart, animationObject) {
            var easingFunction = helpers.easingEffects[animationObject.easing];
            var currentStep = animationObject.currentStep;
            var stepDecimal = currentStep / animationObject.numSteps;

            chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
          },

          onAnimationProgress: animationOptions.onProgress,
          onAnimationComplete: onComplete
        });

        Chart.animationService.addAnimation(me, animation, duration, lazy);
      } else {
        me.draw();

        // See https://github.com/chartjs/Chart.js/issues/3781
        onComplete(new Chart.Animation({numSteps: 0, chart: me}));
      }

      return me;
    },

    draw: function(easingValue) {
      var me = this;

      me.clear();

      if (easingValue === undefined || easingValue === null) {
        easingValue = 1;
      }

      me.transition(easingValue);

      if (plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
        return;
      }

      // Draw all the scales
      helpers.each(me.boxes, function(box) {
        box.draw(me.chartArea);
      }, me);

      if (me.scale) {
        me.scale.draw();
      }

      me.drawDatasets(easingValue);

      // Finally draw the tooltip
      me.tooltip.draw();

      plugins.notify(me, 'afterDraw', [easingValue]);
    },

    /**
     * @private
     */
    transition: function(easingValue) {
      var me = this;

      for (var i=0, ilen=(me.data.datasets || []).length; i<ilen; ++i) {
        if (me.isDatasetVisible(i)) {
          me.getDatasetMeta(i).controller.transition(easingValue);
        }
      }

      me.tooltip.transition(easingValue);
    },

    /**
     * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
     * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
     * @private
     */
    drawDatasets: function(easingValue) {
      var me = this;

      if (plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
        return;
      }

      // Draw datasets reversed to support proper line stacking
      for (var i=(me.data.datasets || []).length - 1; i >= 0; --i) {
        if (me.isDatasetVisible(i)) {
          me.drawDataset(i, easingValue);
        }
      }

      plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
    },

    /**
     * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
     * hook, in which case, plugins will not be called on `afterDatasetDraw`.
     * @private
     */
    drawDataset: function(index, easingValue) {
      var me = this;
      var meta = me.getDatasetMeta(index);
      var args = {
        meta: meta,
        index: index,
        easingValue: easingValue
      };

      if (plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
        return;
      }

      meta.controller.draw(easingValue);

      plugins.notify(me, 'afterDatasetDraw', [args]);
    },

    // Get the single element that was clicked on
    // @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
    getElementAtEvent: function(e) {
      return Chart.Interaction.modes.single(this, e);
    },

    getElementsAtEvent: function(e) {
      return Chart.Interaction.modes.label(this, e, {intersect: true});
    },

    getElementsAtXAxis: function(e) {
      return Chart.Interaction.modes['x-axis'](this, e, {intersect: true});
    },

    getElementsAtEventForMode: function(e, mode, options) {
      var method = Chart.Interaction.modes[mode];
      if (typeof method === 'function') {
        return method(this, e, options);
      }

      return [];
    },

    getDatasetAtEvent: function(e) {
      return Chart.Interaction.modes.dataset(this, e, {intersect: true});
    },

    getDatasetMeta: function(datasetIndex) {
      var me = this;
      var dataset = me.data.datasets[datasetIndex];
      if (!dataset._meta) {
        dataset._meta = {};
      }

      var meta = dataset._meta[me.id];
      if (!meta) {
        meta = dataset._meta[me.id] = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,     // See isDatasetVisible() comment
          xAxisID: null,
          yAxisID: null
        };
      }

      return meta;
    },

    getVisibleDatasetCount: function() {
      var count = 0;
      for (var i = 0, ilen = this.data.datasets.length; i<ilen; ++i) {
        if (this.isDatasetVisible(i)) {
          count++;
        }
      }
      return count;
    },

    isDatasetVisible: function(datasetIndex) {
      var meta = this.getDatasetMeta(datasetIndex);

      // meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
      // the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
      return typeof meta.hidden === 'boolean'? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
    },

    generateLegend: function() {
      return this.options.legendCallback(this);
    },

    destroy: function() {
      var me = this;
      var canvas = me.canvas;
      var meta, i, ilen;

      me.stop();

      // dataset controllers need to cleanup associated data
      for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
        meta = me.getDatasetMeta(i);
        if (meta.controller) {
          meta.controller.destroy();
          meta.controller = null;
        }
      }

      if (canvas) {
        me.unbindEvents();
        helpers.clear(me);
        platform.releaseContext(me.ctx);
        me.canvas = null;
        me.ctx = null;
      }

      plugins.notify(me, 'destroy');

      delete Chart.instances[me.id];
    },

    toBase64Image: function() {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },

    initToolTip: function() {
      var me = this;
      me.tooltip = new Chart.Tooltip({
        _chart: me,
        _chartInstance: me,            // deprecated, backward compatibility
        _data: me.data,
        _options: me.options.tooltips
      }, me);
      me.tooltip.initialize();
    },

    /**
     * @private
     */
    bindEvents: function() {
      var me = this;
      var listeners = me._listeners = {};
      var listener = function() {
        me.eventHandler.apply(me, arguments);
      };

      helpers.each(me.options.events, function(type) {
        platform.addEventListener(me, type, listener);
        listeners[type] = listener;
      });

      // Responsiveness is currently based on the use of an iframe, however this method causes
      // performance issues and could be troublesome when used with ad blockers. So make sure
      // that the user is still able to create a chart without iframe when responsive is false.
      // See https://github.com/chartjs/Chart.js/issues/2210
      if (me.options.responsive) {
        listener = function() {
          me.resize();
        };

        platform.addEventListener(me, 'resize', listener);
        listeners.resize = listener;
      }
    },

    /**
     * @private
     */
    unbindEvents: function() {
      var me = this;
      var listeners = me._listeners;
      if (!listeners) {
        return;
      }

      delete me._listeners;
      helpers.each(listeners, function(listener, type) {
        platform.removeEventListener(me, type, listener);
      });
    },

    updateHoverStyle: function(elements, mode, enabled) {
      var method = enabled? 'setHoverStyle' : 'removeHoverStyle';
      var element, i, ilen;

      for (i=0, ilen=elements.length; i<ilen; ++i) {
        element = elements[i];
        if (element) {
          this.getDatasetMeta(element._datasetIndex).controller[method](element);
        }
      }
    },

    /**
     * @private
     */
    eventHandler: function(e) {
      var me = this;
      var tooltip = me.tooltip;

      if (plugins.notify(me, 'beforeEvent', [e]) === false) {
        return;
      }

      // Buffer any update calls so that renders do not occur
      me._bufferedRender = true;
      me._bufferedRequest = null;

      var changed = me.handleEvent(e);
      changed |= tooltip && tooltip.handleEvent(e);

      plugins.notify(me, 'afterEvent', [e]);

      var bufferedRequest = me._bufferedRequest;
      if (bufferedRequest) {
        // If we have an update that was triggered, we need to do a normal render
        me.render(bufferedRequest.duration, bufferedRequest.lazy);
      } else if (changed && !me.animating) {
        // If entering, leaving, or changing elements, animate the change via pivot
        me.stop();

        // We only need to render at this point. Updating will cause scales to be
        // recomputed generating flicker & using more memory than necessary.
        me.render(me.options.hover.animationDuration, true);
      }

      me._bufferedRender = false;
      me._bufferedRequest = null;

      return me;
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event the event to handle
     * @return {Boolean} true if the chart needs to re-render
     */
    handleEvent: function(e) {
      var me = this;
      var options = me.options || {};
      var hoverOptions = options.hover;
      var changed = false;

      me.lastActive = me.lastActive || [];

      // Find Active Elements for hover and tooltips
      if (e.type === 'mouseout') {
        me.active = [];
      } else {
        me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
      }

      // On Hover hook
      if (hoverOptions.onHover) {
        // Need to call with native event here to not break backwards compatibility
        hoverOptions.onHover.call(me, e.native, me.active);
      }

      if (e.type === 'mouseup' || e.type === 'click') {
        if (options.onClick) {
          // Use e.native here for backwards compatibility
          options.onClick.call(me, e.native, me.active);
        }
      }

      // Remove styling for last active (even if it may still be active)
      if (me.lastActive.length) {
        me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
      }

      // Built in hover styling
      if (me.active.length && hoverOptions.mode) {
        me.updateHoverStyle(me.active, hoverOptions.mode, true);
      }

      changed = !helpers.arrayEquals(me.active, me.lastActive);

      // Remember Last Actives
      me.lastActive = me.active;

      return changed;
    }
  });

  /**
   * Provided for backward compatibility, use Chart instead.
   * @class Chart.Controller
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */
  Chart.Controller = Chart;
};

},{}],24:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

  /**
   * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
   * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
   * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
   */
  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);
      return;
    }

    Object.defineProperty(array, '_chartjs', {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [listener]
      }
    });

    arrayEvents.forEach(function(key) {
      var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
      var base = array[key];

      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value: function() {
          var args = Array.prototype.slice.call(arguments);
          var res = base.apply(this, args);

          helpers.each(array._chartjs.listeners, function(object) {
            if (typeof object[method] === 'function') {
              object[method].apply(object, args);
            }
          });

          return res;
        }
      });
    });
  }

  /**
   * Removes the given array event listener and cleanup extra attached properties (such as
   * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
   */
  function unlistenArrayEvents(array, listener) {
    var stub = array._chartjs;
    if (!stub) {
      return;
    }

    var listeners = stub.listeners;
    var index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length > 0) {
      return;
    }

    arrayEvents.forEach(function(key) {
      delete array[key];
    });

    delete array._chartjs;
  }

  // Base class for all dataset controllers (line, bar, etc)
  Chart.DatasetController = function(chart, datasetIndex) {
    this.initialize(chart, datasetIndex);
  };

  helpers.extend(Chart.DatasetController.prototype, {

    /**
     * Element type used to generate a meta dataset (e.g. Chart.element.Line).
     * @type {Chart.core.element}
     */
    datasetElementType: null,

    /**
     * Element type used to generate a meta data (e.g. Chart.element.Point).
     * @type {Chart.core.element}
     */
    dataElementType: null,

    initialize: function(chart, datasetIndex) {
      var me = this;
      me.chart = chart;
      me.index = datasetIndex;
      me.linkScales();
      me.addElements();
    },

    updateIndex: function(datasetIndex) {
      this.index = datasetIndex;
    },

    linkScales: function() {
      var me = this;
      var meta = me.getMeta();
      var dataset = me.getDataset();

      if (meta.xAxisID === null) {
        meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
      }
      if (meta.yAxisID === null) {
        meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
      }
    },

    getDataset: function() {
      return this.chart.data.datasets[this.index];
    },

    getMeta: function() {
      return this.chart.getDatasetMeta(this.index);
    },

    getScaleForId: function(scaleID) {
      return this.chart.scales[scaleID];
    },

    reset: function() {
      this.update(true);
    },

    /**
     * @private
     */
    destroy: function() {
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
    },

    createMetaDataset: function() {
      var me = this;
      var type = me.datasetElementType;
      return type && new type({
        _chart: me.chart,
        _datasetIndex: me.index
      });
    },

    createMetaData: function(index) {
      var me = this;
      var type = me.dataElementType;
      return type && new type({
        _chart: me.chart,
        _datasetIndex: me.index,
        _index: index
      });
    },

    addElements: function() {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data || [];
      var metaData = meta.data;
      var i, ilen;

      for (i=0, ilen=data.length; i<ilen; ++i) {
        metaData[i] = metaData[i] || me.createMetaData(i);
      }

      meta.dataset = meta.dataset || me.createMetaDataset();
    },

    addElementAndReset: function(index) {
      var element = this.createMetaData(index);
      this.getMeta().data.splice(index, 0, element);
      this.updateElement(element, index, true);
    },

    buildOrUpdateElements: function() {
      var me = this;
      var dataset = me.getDataset();
      var data = dataset.data || (dataset.data = []);

      // In order to correctly handle data addition/deletion animation (an thus simulate
      // real-time charts), we need to monitor these data modifications and synchronize
      // the internal meta data accordingly.
      if (me._data !== data) {
        if (me._data) {
          // This case happens when the user replaced the data array instance.
          unlistenArrayEvents(me._data, me);
        }

        listenArrayEvents(data, me);
        me._data = data;
      }

      // Re-sync meta data in case the user replaced the data array or if we missed
      // any updates and so make sure that we handle number of datapoints changing.
      me.resyncElements();
    },

    update: helpers.noop,

    transition: function(easingValue) {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;

      for (; i<ilen; ++i) {
        elements[i].transition(easingValue);
      }

      if (meta.dataset) {
        meta.dataset.transition(easingValue);
      }
    },

    draw: function() {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;

      if (meta.dataset) {
        meta.dataset.draw();
      }

      for (; i<ilen; ++i) {
        elements[i].draw();
      }
    },

    removeHoverStyle: function(element, elementOpts) {
      var dataset = this.chart.data.datasets[element._datasetIndex],
        index = element._index,
        custom = element.custom || {},
        valueOrDefault = helpers.getValueAtIndexOrDefault,
        model = element._model;

      model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
      model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
      model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
    },

    setHoverStyle: function(element) {
      var dataset = this.chart.data.datasets[element._datasetIndex],
        index = element._index,
        custom = element.custom || {},
        valueOrDefault = helpers.getValueAtIndexOrDefault,
        getHoverColor = helpers.getHoverColor,
        model = element._model;

      model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
      model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
      model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
    },

    /**
     * @private
     */
    resyncElements: function() {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data;
      var numMeta = meta.data.length;
      var numData = data.length;

      if (numData < numMeta) {
        meta.data.splice(numData, numMeta - numData);
      } else if (numData > numMeta) {
        me.insertElements(numMeta, numData - numMeta);
      }
    },

    /**
     * @private
     */
    insertElements: function(start, count) {
      for (var i=0; i<count; ++i) {
        this.addElementAndReset(start + i);
      }
    },

    /**
     * @private
     */
    onDataPush: function() {
      this.insertElements(this.getDataset().data.length-1, arguments.length);
    },

    /**
     * @private
     */
    onDataPop: function() {
      this.getMeta().data.pop();
    },

    /**
     * @private
     */
    onDataShift: function() {
      this.getMeta().data.shift();
    },

    /**
     * @private
     */
    onDataSplice: function(start, count) {
      this.getMeta().data.splice(start, count);
      this.insertElements(start, arguments.length - 2);
    },

    /**
     * @private
     */
    onDataUnshift: function() {
      this.insertElements(0, arguments.length);
    }
  });

  Chart.DatasetController.extend = helpers.inherits;
};

},{}],25:[function(require,module,exports){
'use strict';

var color = require(3);

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  function interpolate(start, view, model, ease) {
    var keys = Object.keys(model);
    var i, ilen, key, actual, origin, target, type, c0, c1;

    for (i=0, ilen=keys.length; i<ilen; ++i) {
      key = keys[i];

      target = model[key];

      // if a value is added to the model after pivot() has been called, the view
      // doesn't contain it, so let's initialize the view to the target value.
      if (!view.hasOwnProperty(key)) {
        view[key] = target;
      }

      actual = view[key];

      if (actual === target || key[0] === '_') {
        continue;
      }

      if (!start.hasOwnProperty(key)) {
        start[key] = actual;
      }

      origin = start[key];

      type = typeof(target);

      if (type === typeof(origin)) {
        if (type === 'string') {
          c0 = color(origin);
          if (c0.valid) {
            c1 = color(target);
            if (c1.valid) {
              view[key] = c1.mix(c0, ease).rgbString();
              continue;
            }
          }
        } else if (type === 'number' && isFinite(origin) && isFinite(target)) {
          view[key] = origin + (target - origin) * ease;
          continue;
        }
      }

      view[key] = target;
    }
  }

  Chart.elements = {};

  Chart.Element = function(configuration) {
    helpers.extend(this, configuration);
    this.initialize.apply(this, arguments);
  };

  helpers.extend(Chart.Element.prototype, {

    initialize: function() {
      this.hidden = false;
    },

    pivot: function() {
      var me = this;
      if (!me._view) {
        me._view = helpers.clone(me._model);
      }
      me._start = {};
      return me;
    },

    transition: function(ease) {
      var me = this;
      var model = me._model;
      var start = me._start;
      var view = me._view;

      // No animation -> No Transition
      if (!model || ease === 1) {
        me._view = model;
        me._start = null;
        return me;
      }

      if (!view) {
        view = me._view = {};
      }

      if (!start) {
        start = me._start = {};
      }

      interpolate(start, view, model, ease);

      return me;
    },

    tooltipPosition: function() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },

    hasValue: function() {
      return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
    }
  });

  Chart.Element.extend = helpers.inherits;
};

},{"3":3}],26:[function(require,module,exports){
/* global window: false */
/* global document: false */
'use strict';

var color = require(3);

module.exports = function(Chart) {
  // Global Chart helpers object for utility methods and classes
  var helpers = Chart.helpers = {};

  // -- Basic js utility methods
  helpers.each = function(loopable, callback, self, reverse) {
    // Check to see if null or undefined firstly.
    var i, len;
    if (helpers.isArray(loopable)) {
      len = loopable.length;
      if (reverse) {
        for (i = len - 1; i >= 0; i--) {
          callback.call(self, loopable[i], i);
        }
      } else {
        for (i = 0; i < len; i++) {
          callback.call(self, loopable[i], i);
        }
      }
    } else if (typeof loopable === 'object') {
      var keys = Object.keys(loopable);
      len = keys.length;
      for (i = 0; i < len; i++) {
        callback.call(self, loopable[keys[i]], keys[i]);
      }
    }
  };
  helpers.clone = function(obj) {
    var objClone = {};
    helpers.each(obj, function(value, key) {
      if (helpers.isArray(value)) {
        objClone[key] = value.slice(0);
      } else if (typeof value === 'object' && value !== null) {
        objClone[key] = helpers.clone(value);
      } else {
        objClone[key] = value;
      }
    });
    return objClone;
  };
  helpers.extend = function(base) {
    var setFn = function(value, key) {
      base[key] = value;
    };
    for (var i = 1, ilen = arguments.length; i < ilen; i++) {
      helpers.each(arguments[i], setFn);
    }
    return base;
  };
  // Need a special merge function to chart configs since they are now grouped
  helpers.configMerge = function(_base) {
    var base = helpers.clone(_base);
    helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
      helpers.each(extension, function(value, key) {
        var baseHasProperty = base.hasOwnProperty(key);
        var baseVal = baseHasProperty ? base[key] : {};

        if (key === 'scales') {
          // Scale config merging is complex. Add our own function here for that
          base[key] = helpers.scaleMerge(baseVal, value);
        } else if (key === 'scale') {
          // Used in polar area & radar charts since there is only one scale
          base[key] = helpers.configMerge(baseVal, Chart.scaleService.getScaleDefaults(value.type), value);
        } else if (baseHasProperty
            && typeof baseVal === 'object'
            && !helpers.isArray(baseVal)
            && baseVal !== null
            && typeof value === 'object'
            && !helpers.isArray(value)) {
          // If we are overwriting an object with an object, do a merge of the properties.
          base[key] = helpers.configMerge(baseVal, value);
        } else {
          // can just overwrite the value in this case
          base[key] = value;
        }
      });
    });

    return base;
  };
  helpers.scaleMerge = function(_base, extension) {
    var base = helpers.clone(_base);

    helpers.each(extension, function(value, key) {
      if (key === 'xAxes' || key === 'yAxes') {
        // These properties are arrays of items
        if (base.hasOwnProperty(key)) {
          helpers.each(value, function(valueObj, index) {
            var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
            var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
            if (index >= base[key].length || !base[key][index].type) {
              base[key].push(helpers.configMerge(axisDefaults, valueObj));
            } else if (valueObj.type && valueObj.type !== base[key][index].type) {
              // Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
              base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
            } else {
              // Type is the same
              base[key][index] = helpers.configMerge(base[key][index], valueObj);
            }
          });
        } else {
          base[key] = [];
          helpers.each(value, function(valueObj) {
            var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
            base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
          });
        }
      } else if (base.hasOwnProperty(key) && typeof base[key] === 'object' && base[key] !== null && typeof value === 'object') {
        // If we are overwriting an object with an object, do a merge of the properties.
        base[key] = helpers.configMerge(base[key], value);

      } else {
        // can just overwrite the value in this case
        base[key] = value;
      }
    });

    return base;
  };
  helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
    if (value === undefined || value === null) {
      return defaultValue;
    }

    if (helpers.isArray(value)) {
      return index < value.length ? value[index] : defaultValue;
    }

    return value;
  };
  helpers.getValueOrDefault = function(value, defaultValue) {
    return value === undefined ? defaultValue : value;
  };
  helpers.indexOf = Array.prototype.indexOf?
    function(array, item) {
      return array.indexOf(item);
    }:
    function(array, item) {
      for (var i = 0, ilen = array.length; i < ilen; ++i) {
        if (array[i] === item) {
          return i;
        }
      }
      return -1;
    };
  helpers.where = function(collection, filterCallback) {
    if (helpers.isArray(collection) && Array.prototype.filter) {
      return collection.filter(filterCallback);
    }
    var filtered = [];

    helpers.each(collection, function(item) {
      if (filterCallback(item)) {
        filtered.push(item);
      }
    });

    return filtered;
  };
  helpers.findIndex = Array.prototype.findIndex?
    function(array, callback, scope) {
      return array.findIndex(callback, scope);
    } :
    function(array, callback, scope) {
      scope = scope === undefined? array : scope;
      for (var i = 0, ilen = array.length; i < ilen; ++i) {
        if (callback.call(scope, array[i], i, array)) {
          return i;
        }
      }
      return -1;
    };
  helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
    // Default to start of the array
    if (startIndex === undefined || startIndex === null) {
      startIndex = -1;
    }
    for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
      var currentItem = arrayToSearch[i];
      if (filterCallback(currentItem)) {
        return currentItem;
      }
    }
  };
  helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
    // Default to end of the array
    if (startIndex === undefined || startIndex === null) {
      startIndex = arrayToSearch.length;
    }
    for (var i = startIndex - 1; i >= 0; i--) {
      var currentItem = arrayToSearch[i];
      if (filterCallback(currentItem)) {
        return currentItem;
      }
    }
  };
  helpers.inherits = function(extensions) {
    // Basic javascript inheritance based on the model created in Backbone.js
    var me = this;
    var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
      return me.apply(this, arguments);
    };

    var Surrogate = function() {
      this.constructor = ChartElement;
    };
    Surrogate.prototype = me.prototype;
    ChartElement.prototype = new Surrogate();

    ChartElement.extend = helpers.inherits;

    if (extensions) {
      helpers.extend(ChartElement.prototype, extensions);
    }

    ChartElement.__super__ = me.prototype;

    return ChartElement;
  };
  helpers.noop = function() {};
  helpers.uid = (function() {
    var id = 0;
    return function() {
      return id++;
    };
  }());
  // -- Math methods
  helpers.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  helpers.almostEquals = function(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
  };
  helpers.almostWhole = function(x, epsilon) {
    var rounded = Math.round(x);
    return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
  };
  helpers.max = function(array) {
    return array.reduce(function(max, value) {
      if (!isNaN(value)) {
        return Math.max(max, value);
      }
      return max;
    }, Number.NEGATIVE_INFINITY);
  };
  helpers.min = function(array) {
    return array.reduce(function(min, value) {
      if (!isNaN(value)) {
        return Math.min(min, value);
      }
      return min;
    }, Number.POSITIVE_INFINITY);
  };
  helpers.sign = Math.sign?
    function(x) {
      return Math.sign(x);
    } :
    function(x) {
      x = +x; // convert to a number
      if (x === 0 || isNaN(x)) {
        return x;
      }
      return x > 0 ? 1 : -1;
    };
  helpers.log10 = Math.log10?
    function(x) {
      return Math.log10(x);
    } :
    function(x) {
      return Math.log(x) / Math.LN10;
    };
  helpers.toRadians = function(degrees) {
    return degrees * (Math.PI / 180);
  };
  helpers.toDegrees = function(radians) {
    return radians * (180 / Math.PI);
  };
  // Gets the angle from vertical upright to the point about a centre.
  helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
    var distanceFromXCenter = anglePoint.x - centrePoint.x,
      distanceFromYCenter = anglePoint.y - centrePoint.y,
      radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

    var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

    if (angle < (-0.5 * Math.PI)) {
      angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    }

    return {
      angle: angle,
      distance: radialDistanceFromCenter
    };
  };
  helpers.distanceBetweenPoints = function(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
  };
  helpers.aliasPixel = function(pixelWidth) {
    return (pixelWidth % 2 === 0) ? 0 : 0.5;
  };
  helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html

    // This function must also respect "skipped" points

    var previous = firstPoint.skip ? middlePoint : firstPoint,
      current = middlePoint,
      next = afterPoint.skip ? middlePoint : afterPoint;

    var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
    var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

    var s01 = d01 / (d01 + d12);
    var s12 = d12 / (d01 + d12);

    // If all points are the same, s01 & s02 will be inf
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;

    var fa = t * s01; // scaling factor for triangle Ta
    var fb = t * s12;

    return {
      previous: {
        x: current.x - fa * (next.x - previous.x),
        y: current.y - fa * (next.y - previous.y)
      },
      next: {
        x: current.x + fb * (next.x - previous.x),
        y: current.y + fb * (next.y - previous.y)
      }
    };
  };
  helpers.EPSILON = Number.EPSILON || 1e-14;
  helpers.splineCurveMonotone = function(points) {
    // This function calculates Bézier control points in a similar way than |splineCurve|,
    // but preserves monotonicity of the provided data and ensures no local extremums are added
    // between the dataset discrete points due to the interpolation.
    // See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

    var pointsWithTangents = (points || []).map(function(point) {
      return {
        model: point._model,
        deltaK: 0,
        mK: 0
      };
    });

    // Calculate slopes (deltaK) and initialize tangents (mK)
    var pointsLen = pointsWithTangents.length;
    var i, pointBefore, pointCurrent, pointAfter;
    for (i = 0; i < pointsLen; ++i) {
      pointCurrent = pointsWithTangents[i];
      if (pointCurrent.model.skip) {
        continue;
      }

      pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
      pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
      if (pointAfter && !pointAfter.model.skip) {
        var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

        // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
        pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
      }

      if (!pointBefore || pointBefore.model.skip) {
        pointCurrent.mK = pointCurrent.deltaK;
      } else if (!pointAfter || pointAfter.model.skip) {
        pointCurrent.mK = pointBefore.deltaK;
      } else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
        pointCurrent.mK = 0;
      } else {
        pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
      }
    }

    // Adjust tangents to ensure monotonic properties
    var alphaK, betaK, tauK, squaredMagnitude;
    for (i = 0; i < pointsLen - 1; ++i) {
      pointCurrent = pointsWithTangents[i];
      pointAfter = pointsWithTangents[i + 1];
      if (pointCurrent.model.skip || pointAfter.model.skip) {
        continue;
      }

      if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
        pointCurrent.mK = pointAfter.mK = 0;
        continue;
      }

      alphaK = pointCurrent.mK / pointCurrent.deltaK;
      betaK = pointAfter.mK / pointCurrent.deltaK;
      squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
      if (squaredMagnitude <= 9) {
        continue;
      }

      tauK = 3 / Math.sqrt(squaredMagnitude);
      pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
      pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
    }

    // Compute control points
    var deltaX;
    for (i = 0; i < pointsLen; ++i) {
      pointCurrent = pointsWithTangents[i];
      if (pointCurrent.model.skip) {
        continue;
      }

      pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
      pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
      if (pointBefore && !pointBefore.model.skip) {
        deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
        pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
        pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
      }
      if (pointAfter && !pointAfter.model.skip) {
        deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
        pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
        pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
      }
    }
  };
  helpers.nextItem = function(collection, index, loop) {
    if (loop) {
      return index >= collection.length - 1 ? collection[0] : collection[index + 1];
    }
    return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
  };
  helpers.previousItem = function(collection, index, loop) {
    if (loop) {
      return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
    }
    return index <= 0 ? collection[0] : collection[index - 1];
  };
  // Implementation of the nice number algorithm used in determining where axis labels will go
  helpers.niceNum = function(range, round) {
    var exponent = Math.floor(helpers.log10(range));
    var fraction = range / Math.pow(10, exponent);
    var niceFraction;

    if (round) {
      if (fraction < 1.5) {
        niceFraction = 1;
      } else if (fraction < 3) {
        niceFraction = 2;
      } else if (fraction < 7) {
        niceFraction = 5;
      } else {
        niceFraction = 10;
      }
    } else if (fraction <= 1.0) {
      niceFraction = 1;
    } else if (fraction <= 2) {
      niceFraction = 2;
    } else if (fraction <= 5) {
      niceFraction = 5;
    } else {
      niceFraction = 10;
    }

    return niceFraction * Math.pow(10, exponent);
  };
  // Easing functions adapted from Robert Penner's easing equations
  // http://www.robertpenner.com/easing/
  var easingEffects = helpers.easingEffects = {
    linear: function(t) {
      return t;
    },
    easeInQuad: function(t) {
      return t * t;
    },
    easeOutQuad: function(t) {
      return -1 * t * (t - 2);
    },
    easeInOutQuad: function(t) {
      if ((t /= 1 / 2) < 1) {
        return 1 / 2 * t * t;
      }
      return -1 / 2 * ((--t) * (t - 2) - 1);
    },
    easeInCubic: function(t) {
      return t * t * t;
    },
    easeOutCubic: function(t) {
      return 1 * ((t = t / 1 - 1) * t * t + 1);
    },
    easeInOutCubic: function(t) {
      if ((t /= 1 / 2) < 1) {
        return 1 / 2 * t * t * t;
      }
      return 1 / 2 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function(t) {
      return t * t * t * t;
    },
    easeOutQuart: function(t) {
      return -1 * ((t = t / 1 - 1) * t * t * t - 1);
    },
    easeInOutQuart: function(t) {
      if ((t /= 1 / 2) < 1) {
        return 1 / 2 * t * t * t * t;
      }
      return -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function(t) {
      return 1 * (t /= 1) * t * t * t * t;
    },
    easeOutQuint: function(t) {
      return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
    },
    easeInOutQuint: function(t) {
      if ((t /= 1 / 2) < 1) {
        return 1 / 2 * t * t * t * t * t;
      }
      return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function(t) {
      return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
    },
    easeOutSine: function(t) {
      return 1 * Math.sin(t / 1 * (Math.PI / 2));
    },
    easeInOutSine: function(t) {
      return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
    },
    easeInExpo: function(t) {
      return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
    },
    easeOutExpo: function(t) {
      return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
    },
    easeInOutExpo: function(t) {
      if (t === 0) {
        return 0;
      }
      if (t === 1) {
        return 1;
      }
      if ((t /= 1 / 2) < 1) {
        return 1 / 2 * Math.pow(2, 10 * (t - 1));
      }
      return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    easeInCirc: function(t) {
      if (t >= 1) {
        return t;
      }
      return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
    },
    easeOutCirc: function(t) {
      return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
    },
    easeInOutCirc: function(t) {
      if ((t /= 1 / 2) < 1) {
        return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
      }
      return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if ((t /= 1) === 1) {
        return 1;
      }
      if (!p) {
        p = 1 * 0.3;
      }
      if (a < Math.abs(1)) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
    },
    easeOutElastic: function(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if ((t /= 1) === 1) {
        return 1;
      }
      if (!p) {
        p = 1 * 0.3;
      }
      if (a < Math.abs(1)) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
    },
    easeInOutElastic: function(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if ((t /= 1 / 2) === 2) {
        return 1;
      }
      if (!p) {
        p = 1 * (0.3 * 1.5);
      }
      if (a < Math.abs(1)) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
      }
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
    },
    easeInBack: function(t) {
      var s = 1.70158;
      return 1 * (t /= 1) * t * ((s + 1) * t - s);
    },
    easeOutBack: function(t) {
      var s = 1.70158;
      return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
    },
    easeInOutBack: function(t) {
      var s = 1.70158;
      if ((t /= 1 / 2) < 1) {
        return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
      }
      return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
    },
    easeInBounce: function(t) {
      return 1 - easingEffects.easeOutBounce(1 - t);
    },
    easeOutBounce: function(t) {
      if ((t /= 1) < (1 / 2.75)) {
        return 1 * (7.5625 * t * t);
      } else if (t < (2 / 2.75)) {
        return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
      } else if (t < (2.5 / 2.75)) {
        return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
      }
      return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
    },
    easeInOutBounce: function(t) {
      if (t < 1 / 2) {
        return easingEffects.easeInBounce(t * 2) * 0.5;
      }
      return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
    }
  };
  // Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
  helpers.requestAnimFrame = (function() {
    if (typeof window === 'undefined') {
      return function(callback) {
        callback();
      };
    }
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
  }());
  // -- DOM methods
  helpers.getRelativePosition = function(evt, chart) {
    var mouseX, mouseY;
    var e = evt.originalEvent || evt,
      canvas = evt.currentTarget || evt.srcElement,
      boundingRect = canvas.getBoundingClientRect();

    var touches = e.touches;
    if (touches && touches.length > 0) {
      mouseX = touches[0].clientX;
      mouseY = touches[0].clientY;

    } else {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    // Scale mouse coordinates into canvas coordinates
    // by following the pattern laid out by 'jerryj' in the comments of
    // http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
    var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
    var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
    var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
    var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
    var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
    var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

    // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
    // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
    mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
    mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

    return {
      x: mouseX,
      y: mouseY
    };

  };
  helpers.addEvent = function(node, eventType, method) {
    if (node.addEventListener) {
      node.addEventListener(eventType, method);
    } else if (node.attachEvent) {
      node.attachEvent('on' + eventType, method);
    } else {
      node['on' + eventType] = method;
    }
  };
  helpers.removeEvent = function(node, eventType, handler) {
    if (node.removeEventListener) {
      node.removeEventListener(eventType, handler, false);
    } else if (node.detachEvent) {
      node.detachEvent('on' + eventType, handler);
    } else {
      node['on' + eventType] = helpers.noop;
    }
  };

  // Private helper function to convert max-width/max-height values that may be percentages into a number
  function parseMaxStyle(styleValue, node, parentProperty) {
    var valueInPixels;
    if (typeof(styleValue) === 'string') {
      valueInPixels = parseInt(styleValue, 10);

      if (styleValue.indexOf('%') !== -1) {
        // percentage * size in dimension
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
      }
    } else {
      valueInPixels = styleValue;
    }

    return valueInPixels;
  }

  /**
   * Returns if the given value contains an effective constraint.
   * @private
   */
  function isConstrainedValue(value) {
    return value !== undefined && value !== null && value !== 'none';
  }

  // Private helper to get a constraint dimension
  // @param domNode : the node to check the constraint on
  // @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
  // @param percentageProperty : property of parent to use when calculating width as a percentage
  // @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
  function getConstraintDimension(domNode, maxStyle, percentageProperty) {
    var view = document.defaultView;
    var parentNode = domNode.parentNode;
    var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
    var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
    var hasCNode = isConstrainedValue(constrainedNode);
    var hasCContainer = isConstrainedValue(constrainedContainer);
    var infinity = Number.POSITIVE_INFINITY;

    if (hasCNode || hasCContainer) {
      return Math.min(
        hasCNode? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
        hasCContainer? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
    }

    return 'none';
  }
  // returns Number or undefined if no constraint
  helpers.getConstraintWidth = function(domNode) {
    return getConstraintDimension(domNode, 'max-width', 'clientWidth');
  };
  // returns Number or undefined if no constraint
  helpers.getConstraintHeight = function(domNode) {
    return getConstraintDimension(domNode, 'max-height', 'clientHeight');
  };
  helpers.getMaximumWidth = function(domNode) {
    var container = domNode.parentNode;
    var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
    var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
    var w = container.clientWidth - paddingLeft - paddingRight;
    var cw = helpers.getConstraintWidth(domNode);
    return isNaN(cw)? w : Math.min(w, cw);
  };
  helpers.getMaximumHeight = function(domNode) {
    var container = domNode.parentNode;
    var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
    var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
    var h = container.clientHeight - paddingTop - paddingBottom;
    var ch = helpers.getConstraintHeight(domNode);
    return isNaN(ch)? h : Math.min(h, ch);
  };
  helpers.getStyle = function(el, property) {
    return el.currentStyle ?
      el.currentStyle[property] :
      document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
  };
  helpers.retinaScale = function(chart) {
    var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;
    if (pixelRatio === 1) {
      return;
    }

    var canvas = chart.canvas;
    var height = chart.height;
    var width = chart.width;

    canvas.height = height * pixelRatio;
    canvas.width = width * pixelRatio;
    chart.ctx.scale(pixelRatio, pixelRatio);

    // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575
    canvas.style.height = height + 'px';
    canvas.style.width = width + 'px';
  };
  // -- Canvas methods
  helpers.clear = function(chart) {
    chart.ctx.clearRect(0, 0, chart.width, chart.height);
  };
  helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
  };
  helpers.longestText = function(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    var data = cache.data = cache.data || {};
    var gc = cache.garbageCollect = cache.garbageCollect || [];

    if (cache.font !== font) {
      data = cache.data = {};
      gc = cache.garbageCollect = [];
      cache.font = font;
    }

    ctx.font = font;
    var longest = 0;
    helpers.each(arrayOfThings, function(thing) {
      // Undefined strings and arrays should not be measured
      if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
        longest = helpers.measureText(ctx, data, gc, longest, thing);
      } else if (helpers.isArray(thing)) {
        // if it is an array lets measure each element
        // to do maybe simplify this function a bit so we can do this more recursively?
        helpers.each(thing, function(nestedThing) {
          // Undefined strings and arrays should not be measured
          if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
            longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
          }
        });
      }
    });

    var gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
      for (var i = 0; i < gcLen; i++) {
        delete data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
    return longest;
  };
  helpers.measureText = function(ctx, data, gc, longest, string) {
    var textWidth = data[string];
    if (!textWidth) {
      textWidth = data[string] = ctx.measureText(string).width;
      gc.push(string);
    }
    if (textWidth > longest) {
      longest = textWidth;
    }
    return longest;
  };
  helpers.numberOfLabelLines = function(arrayOfThings) {
    var numberOfLines = 1;
    helpers.each(arrayOfThings, function(thing) {
      if (helpers.isArray(thing)) {
        if (thing.length > numberOfLines) {
          numberOfLines = thing.length;
        }
      }
    });
    return numberOfLines;
  };
  helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };

  helpers.color = !color?
    function(value) {
      console.error('Color.js not found!');
      return value;
    } :
    function(value) {
      /* global CanvasGradient */
      if (value instanceof CanvasGradient) {
        value = Chart.defaults.global.defaultColor;
      }

      return color(value);
    };

  helpers.isArray = Array.isArray?
    function(obj) {
      return Array.isArray(obj);
    } :
    function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  // ! @see http://stackoverflow.com/a/14853974
  helpers.arrayEquals = function(a0, a1) {
    var i, ilen, v0, v1;

    if (!a0 || !a1 || a0.length !== a1.length) {
      return false;
    }

    for (i = 0, ilen=a0.length; i < ilen; ++i) {
      v0 = a0[i];
      v1 = a1[i];

      if (v0 instanceof Array && v1 instanceof Array) {
        if (!helpers.arrayEquals(v0, v1)) {
          return false;
        }
      } else if (v0 !== v1) {
        // NOTE: two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }

    return true;
  };
  helpers.callback = function(fn, args, thisArg) {
    if (fn && typeof fn.call === 'function') {
      fn.apply(thisArg, args);
    }
  };
  helpers.getHoverColor = function(colorValue) {
    /* global CanvasPattern */
    return (colorValue instanceof CanvasPattern) ?
      colorValue :
      helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
  };

  /**
   * Provided for backward compatibility, use Chart.helpers#callback instead.
   * @function Chart.helpers#callCallback
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */
  helpers.callCallback = helpers.callback;
};

},{"3":3}],27:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
  var helpers = Chart.helpers;

  /**
   * Helper function to get relative position for an event
   * @param {Event|IEvent} event - The event to get the position for
   * @param {Chart} chart - The chart
   * @returns {Point} the event position
   */
  function getRelativePosition(e, chart) {
    if (e.native) {
      return {
        x: e.x,
        y: e.y
      };
    }

    return helpers.getRelativePosition(e, chart);
  }

  /**
   * Helper function to traverse all of the visible elements in the chart
   * @param chart {chart} the chart
   * @param handler {Function} the callback to execute for each visible item
   */
  function parseVisibleItems(chart, handler) {
    var datasets = chart.data.datasets;
    var meta, i, j, ilen, jlen;

    for (i = 0, ilen = datasets.length; i < ilen; ++i) {
      if (!chart.isDatasetVisible(i)) {
        continue;
      }

      meta = chart.getDatasetMeta(i);
      for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
        var element = meta.data[j];
        if (!element._view.skip) {
          handler(element);
        }
      }
    }
  }

  /**
   * Helper function to get the items that intersect the event position
   * @param items {ChartElement[]} elements to filter
   * @param position {Point} the point to be nearest to
   * @return {ChartElement[]} the nearest items
   */
  function getIntersectItems(chart, position) {
    var elements = [];

    parseVisibleItems(chart, function(element) {
      if (element.inRange(position.x, position.y)) {
        elements.push(element);
      }
    });

    return elements;
  }

  /**
   * Helper function to get the items nearest to the event position considering all visible items in teh chart
   * @param chart {Chart} the chart to look at elements from
   * @param position {Point} the point to be nearest to
   * @param intersect {Boolean} if true, only consider items that intersect the position
   * @param distanceMetric {Function} Optional function to provide the distance between
   * @return {ChartElement[]} the nearest items
   */
  function getNearestItems(chart, position, intersect, distanceMetric) {
    var minDistance = Number.POSITIVE_INFINITY;
    var nearestItems = [];

    if (!distanceMetric) {
      distanceMetric = helpers.distanceBetweenPoints;
    }

    parseVisibleItems(chart, function(element) {
      if (intersect && !element.inRange(position.x, position.y)) {
        return;
      }

      var center = element.getCenterPoint();
      var distance = distanceMetric(position, center);

      if (distance < minDistance) {
        nearestItems = [element];
        minDistance = distance;
      } else if (distance === minDistance) {
        // Can have multiple items at the same distance in which case we sort by size
        nearestItems.push(element);
      }
    });

    return nearestItems;
  }

  function indexMode(chart, e, options) {
    var position = getRelativePosition(e, chart);
    var distanceMetric = function(pt1, pt2) {
      return Math.abs(pt1.x - pt2.x);
    };
    var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
    var elements = [];

    if (!items.length) {
      return [];
    }

    chart.data.datasets.forEach(function(dataset, datasetIndex) {
      if (chart.isDatasetVisible(datasetIndex)) {
        var meta = chart.getDatasetMeta(datasetIndex),
          element = meta.data[items[0]._index];

        // don't count items that are skipped (null data)
        if (element && !element._view.skip) {
          elements.push(element);
        }
      }
    });

    return elements;
  }

  /**
   * @interface IInteractionOptions
   */
  /**
   * If true, only consider items that intersect the point
   * @name IInterfaceOptions#boolean
   * @type Boolean
   */

  /**
   * Contains interaction related functions
   * @namespace Chart.Interaction
   */
  Chart.Interaction = {
    // Helper function for different modes
    modes: {
      single: function(chart, e) {
        var position = getRelativePosition(e, chart);
        var elements = [];

        parseVisibleItems(chart, function(element) {
          if (element.inRange(position.x, position.y)) {
            elements.push(element);
            return elements;
          }
        });

        return elements.slice(0, 1);
      },

      /**
       * @function Chart.Interaction.modes.label
       * @deprecated since version 2.4.0
       * @todo remove at version 3
       * @private
       */
      label: indexMode,

      /**
       * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
       * @function Chart.Interaction.modes.index
       * @since v2.4.0
       * @param chart {chart} the chart we are returning items from
       * @param e {Event} the event we are find things at
       * @param options {IInteractionOptions} options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      index: indexMode,

      /**
       * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect is false, we find the nearest item and return the items in that dataset
       * @function Chart.Interaction.modes.dataset
       * @param chart {chart} the chart we are returning items from
       * @param e {Event} the event we are find things at
       * @param options {IInteractionOptions} options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      dataset: function(chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false);

        if (items.length > 0) {
          items = chart.getDatasetMeta(items[0]._datasetIndex).data;
        }

        return items;
      },

      /**
       * @function Chart.Interaction.modes.x-axis
       * @deprecated since version 2.4.0. Use index mode and intersect == true
       * @todo remove at version 3
       * @private
       */
      'x-axis': function(chart, e) {
        return indexMode(chart, e, true);
      },

      /**
       * Point mode returns all elements that hit test based on the event position
       * of the event
       * @function Chart.Interaction.modes.intersect
       * @param chart {chart} the chart we are returning items from
       * @param e {Event} the event we are find things at
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      point: function(chart, e) {
        var position = getRelativePosition(e, chart);
        return getIntersectItems(chart, position);
      },

      /**
       * nearest mode returns the element closest to the point
       * @function Chart.Interaction.modes.intersect
       * @param chart {chart} the chart we are returning items from
       * @param e {Event} the event we are find things at
       * @param options {IInteractionOptions} options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      nearest: function(chart, e, options) {
        var position = getRelativePosition(e, chart);
        var nearestItems = getNearestItems(chart, position, options.intersect);

        // We have multiple items at the same distance from the event. Now sort by smallest
        if (nearestItems.length > 1) {
          nearestItems.sort(function(a, b) {
            var sizeA = a.getArea();
            var sizeB = b.getArea();
            var ret = sizeA - sizeB;

            if (ret === 0) {
              // if equal sort by dataset index
              ret = a._datasetIndex - b._datasetIndex;
            }

            return ret;
          });
        }

        // Return only 1 item
        return nearestItems.slice(0, 1);
      },

      /**
       * x mode returns the elements that hit-test at the current x coordinate
       * @function Chart.Interaction.modes.x
       * @param chart {chart} the chart we are returning items from
       * @param e {Event} the event we are find things at
       * @param options {IInteractionOptions} options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      x: function(chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;

        parseVisibleItems(chart, function(element) {
          if (element.inXRange(position.x)) {
            items.push(element);
          }

          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        });

        // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing
        if (options.intersect && !intersectsItem) {
          items = [];
        }
        return items;
      },

      /**
       * y mode returns the elements that hit-test at the current y coordinate
       * @function Chart.Interaction.modes.y
       * @param chart {chart} the chart we are returning items from
       * @param e {Event} the event we are find things at
       * @param options {IInteractionOptions} options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      y: function(chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;

        parseVisibleItems(chart, function(element) {
          if (element.inYRange(position.y)) {
            items.push(element);
          }

          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        });

        // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing
        if (options.intersect && !intersectsItem) {
          items = [];
        }
        return items;
      }
    }
  };
};

},{}],28:[function(require,module,exports){
'use strict';

module.exports = function() {

  // Occupy the global variable of Chart, and create a simple base class
  var Chart = function(item, config) {
    this.construct(item, config);
    return this;
  };

  // Globally expose the defaults to allow for user updating/changing
  Chart.defaults = {
    global: {
      responsive: true,
      responsiveAnimationDuration: 0,
      maintainAspectRatio: true,
      events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      hover: {
        onHover: null,
        mode: 'nearest',
        intersect: true,
        animationDuration: 400
      },
      onClick: null,
      defaultColor: 'rgba(0,0,0,0.1)',
      defaultFontColor: '#666',
      defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      defaultFontSize: 12,
      defaultFontStyle: 'normal',
      showLines: true,

      // Element defaults defined in element extensions
      elements: {},

      // Legend callback string
      legendCallback: function(chart) {
        var text = [];
        text.push('<ul class="' + chart.id + '-legend">');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
          if (chart.data.datasets[i].label) {
            text.push(chart.data.datasets[i].label);
          }
          text.push('</li>');
        }
        text.push('</ul>');

        return text.join('');
      }
    }
  };

  Chart.Chart = Chart;

  return Chart;
};

},{}],29:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  function filterByPosition(array, position) {
    return helpers.where(array, function(v) {
      return v.position === position;
    });
  }

  function sortByWeight(array, reverse) {
    array.forEach(function(v, i) {
      v._tmpIndex_ = i;
      return v;
    });
    array.sort(function(a, b) {
      var v0 = reverse ? b : a;
      var v1 = reverse ? a : b;
      return v0.weight === v1.weight ?
        v0._tmpIndex_ - v1._tmpIndex_ :
        v0.weight - v1.weight;
    });
    array.forEach(function(v) {
      delete v._tmpIndex_;
    });
  }

  /**
   * @interface ILayoutItem
   * @prop {String} position - The position of the item in the chart layout. Possible values are
   * 'left', 'top', 'right', 'bottom', and 'chartArea'
   * @prop {Number} weight - The weight used to sort the item. Higher weights are further away from the chart area
   * @prop {Boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
   * @prop {Function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
   * @prop {Function} update - Takes two parameters: width and height. Returns size of item
   * @prop {Function} getPadding -  Returns an object with padding on the edges
   * @prop {Number} width - Width of item. Must be valid after update()
   * @prop {Number} height - Height of item. Must be valid after update()
   * @prop {Number} left - Left edge of the item. Set by layout system and cannot be used in update
   * @prop {Number} top - Top edge of the item. Set by layout system and cannot be used in update
   * @prop {Number} right - Right edge of the item. Set by layout system and cannot be used in update
   * @prop {Number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
   */

  // The layout service is very self explanatory.  It's responsible for the layout within a chart.
  // Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
  // It is this service's responsibility of carrying out that layout.
  Chart.layoutService = {
    defaults: {},

    /**
     * Register a box to a chart.
     * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
     * @param {Chart} chart - the chart to use
     * @param {ILayoutItem} item - the item to add to be layed out
     */
    addBox: function(chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      }

      // initialize item with default values
      item.fullWidth = item.fullWidth || false;
      item.position = item.position || 'top';
      item.weight = item.weight || 0;

      chart.boxes.push(item);
    },

    /**
     * Remove a layoutItem from a chart
     * @param {Chart} chart - the chart to remove the box from
     * @param {Object} layoutItem - the item to remove from the layout
     */
    removeBox: function(chart, layoutItem) {
      var index = chart.boxes? chart.boxes.indexOf(layoutItem) : -1;
      if (index !== -1) {
        chart.boxes.splice(index, 1);
      }
    },

    /**
     * Sets (or updates) options on the given `item`.
     * @param {Chart} chart - the chart in which the item lives (or will be added to)
     * @param {Object} item - the item to configure with the given options
     * @param {Object} options - the new item options.
     */
    configure: function(chart, item, options) {
      var props = ['fullWidth', 'position', 'weight'];
      var ilen = props.length;
      var i = 0;
      var prop;

      for (; i<ilen; ++i) {
        prop = props[i];
        if (options.hasOwnProperty(prop)) {
          item[prop] = options[prop];
        }
      }
    },

    /**
     * Fits boxes of the given chart into the given size by having each box measure itself
     * then running a fitting algorithm
     * @param {Chart} chart - the chart
     * @param {Number} width - the width to fit into
     * @param {Number} height - the height to fit into
     */
    update: function(chart, width, height) {
      if (!chart) {
        return;
      }

      var layoutOptions = chart.options.layout;
      var padding = layoutOptions ? layoutOptions.padding : null;

      var leftPadding = 0;
      var rightPadding = 0;
      var topPadding = 0;
      var bottomPadding = 0;

      if (!isNaN(padding)) {
        // options.layout.padding is a number. assign to all
        leftPadding = padding;
        rightPadding = padding;
        topPadding = padding;
        bottomPadding = padding;
      } else {
        leftPadding = padding.left || 0;
        rightPadding = padding.right || 0;
        topPadding = padding.top || 0;
        bottomPadding = padding.bottom || 0;
      }

      var leftBoxes = filterByPosition(chart.boxes, 'left');
      var rightBoxes = filterByPosition(chart.boxes, 'right');
      var topBoxes = filterByPosition(chart.boxes, 'top');
      var bottomBoxes = filterByPosition(chart.boxes, 'bottom');
      var chartAreaBoxes = filterByPosition(chart.boxes, 'chartArea');

      // Sort boxes by weight. A higher weight is further away from the chart area
      sortByWeight(leftBoxes, true);
      sortByWeight(rightBoxes, false);
      sortByWeight(topBoxes, true);
      sortByWeight(bottomBoxes, false);

      // Essentially we now have any number of boxes on each of the 4 sides.
      // Our canvas looks like the following.
      // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
      // B1 is the bottom axis
      // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
      // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
      // an error will be thrown.
      //
      // |----------------------------------------------------|
      // |                  T1 (Full Width)                   |
      // |----------------------------------------------------|
      // |    |    |                 T2                  |    |
      // |    |----|-------------------------------------|----|
      // |    |    | C1 |                           | C2 |    |
      // |    |    |----|                           |----|    |
      // |    |    |                                     |    |
      // | L1 | L2 |           ChartArea (C0)            | R1 |
      // |    |    |                                     |    |
      // |    |    |----|                           |----|    |
      // |    |    | C3 |                           | C4 |    |
      // |    |----|-------------------------------------|----|
      // |    |    |                 B1                  |    |
      // |----------------------------------------------------|
      // |                  B2 (Full Width)                   |
      // |----------------------------------------------------|
      //
      // What we do to find the best sizing, we do the following
      // 1. Determine the minimum size of the chart area.
      // 2. Split the remaining width equally between each vertical axis
      // 3. Split the remaining height equally between each horizontal axis
      // 4. Give each layout the maximum size it can be. The layout will return it's minimum size
      // 5. Adjust the sizes of each axis based on it's minimum reported size.
      // 6. Refit each axis
      // 7. Position each axis in the final location
      // 8. Tell the chart the final location of the chart area
      // 9. Tell any axes that overlay the chart area the positions of the chart area

      // Step 1
      var chartWidth = width - leftPadding - rightPadding;
      var chartHeight = height - topPadding - bottomPadding;
      var chartAreaWidth = chartWidth / 2; // min 50%
      var chartAreaHeight = chartHeight / 2; // min 50%

      // Step 2
      var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

      // Step 3
      var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

      // Step 4
      var maxChartAreaWidth = chartWidth;
      var maxChartAreaHeight = chartHeight;
      var minBoxSizes = [];

      function getMinimumBoxSize(box) {
        var minSize;
        var isHorizontal = box.isHorizontal();

        if (isHorizontal) {
          minSize = box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
          maxChartAreaHeight -= minSize.height;
        } else {
          minSize = box.update(verticalBoxWidth, chartAreaHeight);
          maxChartAreaWidth -= minSize.width;
        }

        minBoxSizes.push({
          horizontal: isHorizontal,
          minSize: minSize,
          box: box,
        });
      }

      helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

      // If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
      var maxHorizontalLeftPadding = 0;
      var maxHorizontalRightPadding = 0;
      var maxVerticalTopPadding = 0;
      var maxVerticalBottomPadding = 0;

      helpers.each(topBoxes.concat(bottomBoxes), function(horizontalBox) {
        if (horizontalBox.getPadding) {
          var boxPadding = horizontalBox.getPadding();
          maxHorizontalLeftPadding = Math.max(maxHorizontalLeftPadding, boxPadding.left);
          maxHorizontalRightPadding = Math.max(maxHorizontalRightPadding, boxPadding.right);
        }
      });

      helpers.each(leftBoxes.concat(rightBoxes), function(verticalBox) {
        if (verticalBox.getPadding) {
          var boxPadding = verticalBox.getPadding();
          maxVerticalTopPadding = Math.max(maxVerticalTopPadding, boxPadding.top);
          maxVerticalBottomPadding = Math.max(maxVerticalBottomPadding, boxPadding.bottom);
        }
      });

      // At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
      // be if the axes are drawn at their minimum sizes.
      // Steps 5 & 6
      var totalLeftBoxesWidth = leftPadding;
      var totalRightBoxesWidth = rightPadding;
      var totalTopBoxesHeight = topPadding;
      var totalBottomBoxesHeight = bottomPadding;

      // Function to fit a box
      function fitBox(box) {
        var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
          return minBox.box === box;
        });

        if (minBoxSize) {
          if (box.isHorizontal()) {
            var scaleMargin = {
              left: Math.max(totalLeftBoxesWidth, maxHorizontalLeftPadding),
              right: Math.max(totalRightBoxesWidth, maxHorizontalRightPadding),
              top: 0,
              bottom: 0
            };

            // Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
            // on the margin. Sometimes they need to increase in size slightly
            box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
          } else {
            box.update(minBoxSize.minSize.width, maxChartAreaHeight);
          }
        }
      }

      // Update, and calculate the left and right margins for the horizontal boxes
      helpers.each(leftBoxes.concat(rightBoxes), fitBox);

      helpers.each(leftBoxes, function(box) {
        totalLeftBoxesWidth += box.width;
      });

      helpers.each(rightBoxes, function(box) {
        totalRightBoxesWidth += box.width;
      });

      // Set the Left and Right margins for the horizontal boxes
      helpers.each(topBoxes.concat(bottomBoxes), fitBox);

      // Figure out how much margin is on the top and bottom of the vertical boxes
      helpers.each(topBoxes, function(box) {
        totalTopBoxesHeight += box.height;
      });

      helpers.each(bottomBoxes, function(box) {
        totalBottomBoxesHeight += box.height;
      });

      function finalFitVerticalBox(box) {
        var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
          return minSize.box === box;
        });

        var scaleMargin = {
          left: 0,
          right: 0,
          top: totalTopBoxesHeight,
          bottom: totalBottomBoxesHeight
        };

        if (minBoxSize) {
          box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
        }
      }

      // Let the left layout know the final margin
      helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

      // Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
      totalLeftBoxesWidth = leftPadding;
      totalRightBoxesWidth = rightPadding;
      totalTopBoxesHeight = topPadding;
      totalBottomBoxesHeight = bottomPadding;

      helpers.each(leftBoxes, function(box) {
        totalLeftBoxesWidth += box.width;
      });

      helpers.each(rightBoxes, function(box) {
        totalRightBoxesWidth += box.width;
      });

      helpers.each(topBoxes, function(box) {
        totalTopBoxesHeight += box.height;
      });
      helpers.each(bottomBoxes, function(box) {
        totalBottomBoxesHeight += box.height;
      });

      // We may be adding some padding to account for rotated x axis labels
      var leftPaddingAddition = Math.max(maxHorizontalLeftPadding - totalLeftBoxesWidth, 0);
      totalLeftBoxesWidth += leftPaddingAddition;
      totalRightBoxesWidth += Math.max(maxHorizontalRightPadding - totalRightBoxesWidth, 0);

      var topPaddingAddition = Math.max(maxVerticalTopPadding - totalTopBoxesHeight, 0);
      totalTopBoxesHeight += topPaddingAddition;
      totalBottomBoxesHeight += Math.max(maxVerticalBottomPadding - totalBottomBoxesHeight, 0);

      // Figure out if our chart area changed. This would occur if the dataset layout label rotation
      // changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
      // without calling `fit` again
      var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
      var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

      if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
        helpers.each(leftBoxes, function(box) {
          box.height = newMaxChartAreaHeight;
        });

        helpers.each(rightBoxes, function(box) {
          box.height = newMaxChartAreaHeight;
        });

        helpers.each(topBoxes, function(box) {
          if (!box.fullWidth) {
            box.width = newMaxChartAreaWidth;
          }
        });

        helpers.each(bottomBoxes, function(box) {
          if (!box.fullWidth) {
            box.width = newMaxChartAreaWidth;
          }
        });

        maxChartAreaHeight = newMaxChartAreaHeight;
        maxChartAreaWidth = newMaxChartAreaWidth;
      }

      // Step 7 - Position the boxes
      var left = leftPadding + leftPaddingAddition;
      var top = topPadding + topPaddingAddition;

      function placeBox(box) {
        if (box.isHorizontal()) {
          box.left = box.fullWidth ? leftPadding : totalLeftBoxesWidth;
          box.right = box.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth;
          box.top = top;
          box.bottom = top + box.height;

          // Move to next point
          top = box.bottom;

        } else {

          box.left = left;
          box.right = left + box.width;
          box.top = totalTopBoxesHeight;
          box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

          // Move to next point
          left = box.right;
        }
      }

      helpers.each(leftBoxes.concat(topBoxes), placeBox);

      // Account for chart width and height
      left += maxChartAreaWidth;
      top += maxChartAreaHeight;

      helpers.each(rightBoxes, placeBox);
      helpers.each(bottomBoxes, placeBox);

      // Step 8
      chart.chartArea = {
        left: totalLeftBoxesWidth,
        top: totalTopBoxesHeight,
        right: totalLeftBoxesWidth + maxChartAreaWidth,
        bottom: totalTopBoxesHeight + maxChartAreaHeight
      };

      // Step 9
      helpers.each(chartAreaBoxes, function(box) {
        box.left = chart.chartArea.left;
        box.top = chart.chartArea.top;
        box.right = chart.chartArea.right;
        box.bottom = chart.chartArea.bottom;

        box.update(maxChartAreaWidth, maxChartAreaHeight);
      });
    }
  };
};

},{}],30:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.defaults.global.plugins = {};

  /**
   * The plugin service singleton
   * @namespace Chart.plugins
   * @since 2.1.0
   */
  Chart.plugins = {
    /**
     * Globally registered plugins.
     * @private
     */
    _plugins: [],

    /**
     * This identifier is used to invalidate the descriptors cache attached to each chart
     * when a global plugin is registered or unregistered. In this case, the cache ID is
     * incremented and descriptors are regenerated during following API calls.
     * @private
     */
    _cacheId: 0,

    /**
     * Registers the given plugin(s) if not already registered.
     * @param {Array|Object} plugins plugin instance(s).
     */
    register: function(plugins) {
      var p = this._plugins;
      ([]).concat(plugins).forEach(function(plugin) {
        if (p.indexOf(plugin) === -1) {
          p.push(plugin);
        }
      });

      this._cacheId++;
    },

    /**
     * Unregisters the given plugin(s) only if registered.
     * @param {Array|Object} plugins plugin instance(s).
     */
    unregister: function(plugins) {
      var p = this._plugins;
      ([]).concat(plugins).forEach(function(plugin) {
        var idx = p.indexOf(plugin);
        if (idx !== -1) {
          p.splice(idx, 1);
        }
      });

      this._cacheId++;
    },

    /**
     * Remove all registered plugins.
     * @since 2.1.5
     */
    clear: function() {
      this._plugins = [];
      this._cacheId++;
    },

    /**
     * Returns the number of registered plugins?
     * @returns {Number}
     * @since 2.1.5
     */
    count: function() {
      return this._plugins.length;
    },

    /**
     * Returns all registered plugin instances.
     * @returns {Array} array of plugin objects.
     * @since 2.1.5
     */
    getAll: function() {
      return this._plugins;
    },

    /**
     * Calls enabled plugins for `chart` on the specified hook and with the given args.
     * This method immediately returns as soon as a plugin explicitly returns false. The
     * returned value can be used, for instance, to interrupt the current action.
     * @param {Object} chart - The chart instance for which plugins should be called.
     * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
     * @param {Array} [args] - Extra arguments to apply to the hook call.
     * @returns {Boolean} false if any of the plugins return false, else returns true.
     */
    notify: function(chart, hook, args) {
      var descriptors = this.descriptors(chart);
      var ilen = descriptors.length;
      var i, descriptor, plugin, params, method;

      for (i=0; i<ilen; ++i) {
        descriptor = descriptors[i];
        plugin = descriptor.plugin;
        method = plugin[hook];
        if (typeof method === 'function') {
          params = [chart].concat(args || []);
          params.push(descriptor.options);
          if (method.apply(plugin, params) === false) {
            return false;
          }
        }
      }

      return true;
    },

    /**
     * Returns descriptors of enabled plugins for the given chart.
     * @returns {Array} [{ plugin, options }]
     * @private
     */
    descriptors: function(chart) {
      var cache = chart._plugins || (chart._plugins = {});
      if (cache.id === this._cacheId) {
        return cache.descriptors;
      }

      var plugins = [];
      var descriptors = [];
      var config = (chart && chart.config) || {};
      var defaults = Chart.defaults.global.plugins;
      var options = (config.options && config.options.plugins) || {};

      this._plugins.concat(config.plugins || []).forEach(function(plugin) {
        var idx = plugins.indexOf(plugin);
        if (idx !== -1) {
          return;
        }

        var id = plugin.id;
        var opts = options[id];
        if (opts === false) {
          return;
        }

        if (opts === true) {
          opts = helpers.clone(defaults[id]);
        }

        plugins.push(plugin);
        descriptors.push({
          plugin: plugin,
          options: opts || {}
        });
      });

      cache.descriptors = descriptors;
      cache.id = this._cacheId;
      return descriptors;
    }
  };

  /**
   * Plugin extension hooks.
   * @interface IPlugin
   * @since 2.1.0
   */
  /**
   * @method IPlugin#beforeInit
   * @desc Called before initializing `chart`.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#afterInit
   * @desc Called after `chart` has been initialized and before the first update.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#beforeUpdate
   * @desc Called before updating `chart`. If any plugin returns `false`, the update
   * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   * @returns {Boolean} `false` to cancel the chart update.
   */
  /**
   * @method IPlugin#afterUpdate
   * @desc Called after `chart` has been updated and before rendering. Note that this
   * hook will not be called if the chart update has been previously cancelled.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#beforeDatasetsUpdate
   * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
   * the datasets update is cancelled until another `update` is triggered.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   * @returns {Boolean} false to cancel the datasets update.
   * @since version 2.1.5
   */
  /**
   * @method IPlugin#afterDatasetsUpdate
   * @desc Called after the `chart` datasets have been updated. Note that this hook
   * will not be called if the datasets update has been previously cancelled.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   * @since version 2.1.5
   */
  /**
   * @method IPlugin#beforeDatasetUpdate
   * @desc Called before updating the `chart` dataset at the given `args.index`. If any plugin
   * returns `false`, the datasets update is cancelled until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {Object} args - The call arguments.
   * @param {Object} args.index - The dataset index.
   * @param {Number} args.meta - The dataset metadata.
   * @param {Object} options - The plugin options.
   * @returns {Boolean} `false` to cancel the chart datasets drawing.
   */
  /**
   * @method IPlugin#afterDatasetUpdate
   * @desc Called after the `chart` datasets at the given `args.index` has been updated. Note
   * that this hook will not be called if the datasets update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {Object} args - The call arguments.
   * @param {Object} args.index - The dataset index.
   * @param {Number} args.meta - The dataset metadata.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#beforeLayout
   * @desc Called before laying out `chart`. If any plugin returns `false`,
   * the layout update is cancelled until another `update` is triggered.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   * @returns {Boolean} `false` to cancel the chart layout.
   */
  /**
   * @method IPlugin#afterLayout
   * @desc Called after the `chart` has been layed out. Note that this hook will not
   * be called if the layout update has been previously cancelled.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#beforeRender
   * @desc Called before rendering `chart`. If any plugin returns `false`,
   * the rendering is cancelled until another `render` is triggered.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   * @returns {Boolean} `false` to cancel the chart rendering.
   */
  /**
   * @method IPlugin#afterRender
   * @desc Called after the `chart` has been fully rendered (and animation completed). Note
   * that this hook will not be called if the rendering has been previously cancelled.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#beforeDraw
   * @desc Called before drawing `chart` at every animation frame specified by the given
   * easing value. If any plugin returns `false`, the frame drawing is cancelled until
   * another `render` is triggered.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
   * @param {Object} options - The plugin options.
   * @returns {Boolean} `false` to cancel the chart drawing.
   */
  /**
   * @method IPlugin#afterDraw
   * @desc Called after the `chart` has been drawn for the specific easing value. Note
   * that this hook will not be called if the drawing has been previously cancelled.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#beforeDatasetsDraw
   * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
   * the datasets drawing is cancelled until another `render` is triggered.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
   * @param {Object} options - The plugin options.
   * @returns {Boolean} `false` to cancel the chart datasets drawing.
   */
  /**
   * @method IPlugin#afterDatasetsDraw
   * @desc Called after the `chart` datasets have been drawn. Note that this hook
   * will not be called if the datasets drawing has been previously cancelled.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#beforeDatasetDraw
   * @desc Called before drawing the `chart` dataset at the given `args.index` (datasets
   * are drawn in the reverse order). If any plugin returns `false`, the datasets drawing
   * is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {Object} args - The call arguments.
   * @param {Object} args.index - The dataset index.
   * @param {Number} args.meta - The dataset metadata.
   * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
   * @param {Object} options - The plugin options.
   * @returns {Boolean} `false` to cancel the chart datasets drawing.
   */
  /**
   * @method IPlugin#afterDatasetDraw
   * @desc Called after the `chart` datasets at the given `args.index` have been drawn
   * (datasets are drawn in the reverse order). Note that this hook will not be called
   * if the datasets drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {Object} args - The call arguments.
   * @param {Object} args.index - The dataset index.
   * @param {Number} args.meta - The dataset metadata.
   * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#beforeEvent
   * @desc Called before processing the specified `event`. If any plugin returns `false`,
   * the event will be discarded.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {IEvent} event - The event object.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#afterEvent
   * @desc Called after the `event` has been consumed. Note that this hook
   * will not be called if the `event` has been previously discarded.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {IEvent} event - The event object.
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#resize
   * @desc Called after the chart as been resized.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
   * @param {Object} options - The plugin options.
   */
  /**
   * @method IPlugin#destroy
   * @desc Called after the chart as been destroyed.
   * @param {Chart.Controller} chart - The chart instance.
   * @param {Object} options - The plugin options.
   */

  /**
   * Provided for backward compatibility, use Chart.plugins instead
   * @namespace Chart.pluginService
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */
  Chart.pluginService = Chart.plugins;

  /**
   * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
   * effect, instead simply create/register plugins via plain JavaScript objects.
   * @interface Chart.PluginBase
   * @deprecated since version 2.5.0
   * @todo remove at version 3
   * @private
   */
  Chart.PluginBase = Chart.Element.extend({});
};

},{}],31:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.defaults.scale = {
    display: true,
    position: 'left',

    // grid line settings
    gridLines: {
      display: true,
      color: 'rgba(0, 0, 0, 0.1)',
      lineWidth: 1,
      drawBorder: true,
      drawOnChartArea: true,
      drawTicks: true,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: 'rgba(0,0,0,0.25)',
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0.0,
      offsetGridLines: false,
      borderDash: [],
      borderDashOffset: 0.0
    },

    // scale label
    scaleLabel: {
      // actual label
      labelString: '',

      // display property
      display: false
    },

    // label settings
    ticks: {
      beginAtZero: false,
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      padding: 0,
      reverse: false,
      display: true,
      autoSkip: true,
      autoSkipPadding: 0,
      labelOffset: 0,
      // We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
      callback: Chart.Ticks.formatters.values
    }
  };

  function computeTextSize(context, tick, font) {
    return helpers.isArray(tick) ?
      helpers.longestText(context, font, tick) :
      context.measureText(tick).width;
  }

  function parseFontOptions(options) {
    var getValueOrDefault = helpers.getValueOrDefault;
    var globalDefaults = Chart.defaults.global;
    var size = getValueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
    var style = getValueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle);
    var family = getValueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily);

    return {
      size: size,
      style: style,
      family: family,
      font: helpers.fontString(size, style, family)
    };
  }

  Chart.Scale = Chart.Element.extend({
    /**
     * Get the padding needed for the scale
     * @method getPadding
     * @private
     * @returns {Padding} the necessary padding
     */
    getPadding: function() {
      var me = this;
      return {
        left: me.paddingLeft || 0,
        top: me.paddingTop || 0,
        right: me.paddingRight || 0,
        bottom: me.paddingBottom || 0
      };
    },

    // These methods are ordered by lifecyle. Utilities then follow.
    // Any function defined here is inherited by all scale types.
    // Any function can be extended by the scale type

    beforeUpdate: function() {
      helpers.callback(this.options.beforeUpdate, [this]);
    },
    update: function(maxWidth, maxHeight, margins) {
      var me = this;

      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();

      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = helpers.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      me.longestTextCache = me.longestTextCache || {};

      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();

      // Data min/max
      me.beforeDataLimits();
      me.determineDataLimits();
      me.afterDataLimits();

      // Ticks
      me.beforeBuildTicks();
      me.buildTicks();
      me.afterBuildTicks();

      me.beforeTickToLabelConversion();
      me.convertTicksToLabels();
      me.afterTickToLabelConversion();

      // Tick Rotation
      me.beforeCalculateTickRotation();
      me.calculateTickRotation();
      me.afterCalculateTickRotation();
      // Fit
      me.beforeFit();
      me.fit();
      me.afterFit();
      //
      me.afterUpdate();

      return me.minSize;

    },
    afterUpdate: function() {
      helpers.callback(this.options.afterUpdate, [this]);
    },

    //

    beforeSetDimensions: function() {
      helpers.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function() {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;

        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }

      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;
    },
    afterSetDimensions: function() {
      helpers.callback(this.options.afterSetDimensions, [this]);
    },

    // Data limits
    beforeDataLimits: function() {
      helpers.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: helpers.noop,
    afterDataLimits: function() {
      helpers.callback(this.options.afterDataLimits, [this]);
    },

    //
    beforeBuildTicks: function() {
      helpers.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: helpers.noop,
    afterBuildTicks: function() {
      helpers.callback(this.options.afterBuildTicks, [this]);
    },

    beforeTickToLabelConversion: function() {
      helpers.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function() {
      var me = this;
      // Convert ticks to strings
      var tickOpts = me.options.ticks;
      me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback);
    },
    afterTickToLabelConversion: function() {
      helpers.callback(this.options.afterTickToLabelConversion, [this]);
    },

    //

    beforeCalculateTickRotation: function() {
      helpers.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function() {
      var me = this;
      var context = me.ctx;
      var tickOpts = me.options.ticks;

      // Get the width of each grid by calculating the difference
      // between x offsets between 0 and 1.
      var tickFont = parseFontOptions(tickOpts);
      context.font = tickFont.font;

      var labelRotation = tickOpts.minRotation || 0;

      if (me.options.display && me.isHorizontal()) {
        var originalLabelWidth = helpers.longestText(context, tickFont.font, me.ticks, me.longestTextCache);
        var labelWidth = originalLabelWidth;
        var cosRotation;
        var sinRotation;

        // Allow 3 pixels x2 padding either side for label readability
        var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;

        // Max label rotation can be set or default to 90 - also act as a loop counter
        while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
          var angleRadians = helpers.toRadians(labelRotation);
          cosRotation = Math.cos(angleRadians);
          sinRotation = Math.sin(angleRadians);

          if (sinRotation * originalLabelWidth > me.maxHeight) {
            // go back one step
            labelRotation--;
            break;
          }

          labelRotation++;
          labelWidth = cosRotation * originalLabelWidth;
        }
      }

      me.labelRotation = labelRotation;
    },
    afterCalculateTickRotation: function() {
      helpers.callback(this.options.afterCalculateTickRotation, [this]);
    },

    //

    beforeFit: function() {
      helpers.callback(this.options.beforeFit, [this]);
    },
    fit: function() {
      var me = this;
      // Reset
      var minSize = me.minSize = {
        width: 0,
        height: 0
      };

      var opts = me.options;
      var tickOpts = opts.ticks;
      var scaleLabelOpts = opts.scaleLabel;
      var gridLineOpts = opts.gridLines;
      var display = opts.display;
      var isHorizontal = me.isHorizontal();

      var tickFont = parseFontOptions(tickOpts);
      var scaleLabelFontSize = parseFontOptions(scaleLabelOpts).size * 1.5;
      var tickMarkLength = opts.gridLines.tickMarkLength;

      // Width
      if (isHorizontal) {
        // subtract the margins to line up with the chartArea if we are a full width scale
        minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
      } else {
        minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
      }

      // height
      if (isHorizontal) {
        minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
      } else {
        minSize.height = me.maxHeight; // fill all the height
      }

      // Are we showing a title for the scale?
      if (scaleLabelOpts.display && display) {
        if (isHorizontal) {
          minSize.height += scaleLabelFontSize;
        } else {
          minSize.width += scaleLabelFontSize;
        }
      }

      // Don't bother fitting the ticks if we are not showing them
      if (tickOpts.display && display) {
        var largestTextWidth = helpers.longestText(me.ctx, tickFont.font, me.ticks, me.longestTextCache);
        var tallestLabelHeightInLines = helpers.numberOfLabelLines(me.ticks);
        var lineSpace = tickFont.size * 0.5;

        if (isHorizontal) {
          // A horizontal axis is more constrained by the height.
          me.longestLabelWidth = largestTextWidth;

          var angleRadians = helpers.toRadians(me.labelRotation);
          var cosRotation = Math.cos(angleRadians);
          var sinRotation = Math.sin(angleRadians);

          // TODO - improve this calculation
          var labelHeight = (sinRotation * largestTextWidth)
            + (tickFont.size * tallestLabelHeightInLines)
            + (lineSpace * tallestLabelHeightInLines);

          minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight);
          me.ctx.font = tickFont.font;

          var firstTick = me.ticks[0];
          var firstLabelWidth = computeTextSize(me.ctx, firstTick, tickFont.font);

          var lastTick = me.ticks[me.ticks.length - 1];
          var lastLabelWidth = computeTextSize(me.ctx, lastTick, tickFont.font);

          // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
          // by the font height
          if (me.labelRotation !== 0) {
            me.paddingLeft = opts.position === 'bottom'? (cosRotation * firstLabelWidth) + 3: (cosRotation * lineSpace) + 3; // add 3 px to move away from canvas edges
            me.paddingRight = opts.position === 'bottom'? (cosRotation * lineSpace) + 3: (cosRotation * lastLabelWidth) + 3;
          } else {
            me.paddingLeft = firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
            me.paddingRight = lastLabelWidth / 2 + 3;
          }
        } else {
          // A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
          // Account for padding

          if (tickOpts.mirror) {
            largestTextWidth = 0;
          } else {
            largestTextWidth += me.options.ticks.padding;
          }
          minSize.width = Math.min(me.maxWidth, minSize.width + largestTextWidth);
          me.paddingTop = tickFont.size / 2;
          me.paddingBottom = tickFont.size / 2;
        }
      }

      me.handleMargins();

      me.width = minSize.width;
      me.height = minSize.height;
    },

    /**
     * Handle margins and padding interactions
     * @private
     */
    handleMargins: function() {
      var me = this;
      if (me.margins) {
        me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
        me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
        me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
        me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
      }
    },

    afterFit: function() {
      helpers.callback(this.options.afterFit, [this]);
    },

    // Shared Methods
    isHorizontal: function() {
      return this.options.position === 'top' || this.options.position === 'bottom';
    },
    isFullWidth: function() {
      return (this.options.fullWidth);
    },

    // Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
    getRightValue: function(rawValue) {
      // Null and undefined values first
      if (rawValue === null || typeof(rawValue) === 'undefined') {
        return NaN;
      }
      // isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
      if (typeof(rawValue) === 'number' && !isFinite(rawValue)) {
        return NaN;
      }
      // If it is in fact an object, dive in one more level
      if (typeof(rawValue) === 'object') {
        if ((rawValue instanceof Date) || (rawValue.isValid)) {
          return rawValue;
        }
        return this.getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
      }

      // Value is good, return it
      return rawValue;
    },

    // Used to get the value to display in the tooltip for the data at the given index
    // function getLabelForIndex(index, datasetIndex)
    getLabelForIndex: helpers.noop,

    // Used to get data value locations.  Value can either be an index or a numerical value
    getPixelForValue: helpers.noop,

    // Used to get the data value from a given pixel. This is the inverse of getPixelForValue
    getValueForPixel: helpers.noop,

    // Used for tick location, should
    getPixelForTick: function(index, includeOffset) {
      var me = this;
      if (me.isHorizontal()) {
        var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
        var tickWidth = innerWidth / Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
        var pixel = (tickWidth * index) + me.paddingLeft;

        if (includeOffset) {
          pixel += tickWidth / 2;
        }

        var finalVal = me.left + Math.round(pixel);
        finalVal += me.isFullWidth() ? me.margins.left : 0;
        return finalVal;
      }
      var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
      return me.top + (index * (innerHeight / (me.ticks.length - 1)));
    },

    // Utility for getting the pixel location of a percentage of scale
    getPixelForDecimal: function(decimal /* , includeOffset*/) {
      var me = this;
      if (me.isHorizontal()) {
        var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
        var valueOffset = (innerWidth * decimal) + me.paddingLeft;

        var finalVal = me.left + Math.round(valueOffset);
        finalVal += me.isFullWidth() ? me.margins.left : 0;
        return finalVal;
      }
      return me.top + (decimal * me.height);
    },

    getBasePixel: function() {
      return this.getPixelForValue(this.getBaseValue());
    },

    getBaseValue: function() {
      var me = this;
      var min = me.min;
      var max = me.max;

      return me.beginAtZero ? 0:
        min < 0 && max < 0? max :
        min > 0 && max > 0? min :
        0;
    },

    // Actually draw the scale on the canvas
    // @param {rectangle} chartArea : the area of the chart to draw full grid lines on
    draw: function(chartArea) {
      var me = this;
      var options = me.options;
      if (!options.display) {
        return;
      }

      var context = me.ctx;
      var globalDefaults = Chart.defaults.global;
      var optionTicks = options.ticks;
      var gridLines = options.gridLines;
      var scaleLabel = options.scaleLabel;

      var isRotated = me.labelRotation !== 0;
      var skipRatio;
      var useAutoskipper = optionTicks.autoSkip;
      var isHorizontal = me.isHorizontal();

      // figure out the maximum number of gridlines to show
      var maxTicks;
      if (optionTicks.maxTicksLimit) {
        maxTicks = optionTicks.maxTicksLimit;
      }

      var tickFontColor = helpers.getValueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
      var tickFont = parseFontOptions(optionTicks);

      var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;

      var scaleLabelFontColor = helpers.getValueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
      var scaleLabelFont = parseFontOptions(scaleLabel);

      var labelRotationRadians = helpers.toRadians(me.labelRotation);
      var cosRotation = Math.cos(labelRotationRadians);
      var longestRotatedLabel = me.longestLabelWidth * cosRotation;

      // Make sure we draw text in the correct color and font
      context.fillStyle = tickFontColor;

      var itemsToDraw = [];

      if (isHorizontal) {
        skipRatio = false;

        if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
          skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
        }

        // if they defined a max number of optionTicks,
        // increase skipRatio until that number is met
        if (maxTicks && me.ticks.length > maxTicks) {
          while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
            if (!skipRatio) {
              skipRatio = 1;
            }
            skipRatio += 1;
          }
        }

        if (!useAutoskipper) {
          skipRatio = false;
        }
      }


      var xTickStart = options.position === 'right' ? me.left : me.right - tl;
      var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
      var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
      var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;

      helpers.each(me.ticks, function(label, index) {
        // If the callback returned a null or undefined value, do not draw this line
        if (label === undefined || label === null) {
          return;
        }

        var isLastTick = me.ticks.length === index + 1;

        // Since we always show the last tick,we need may need to hide the last shown one before
        var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
        if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
          return;
        }

        var lineWidth, lineColor, borderDash, borderDashOffset;
        if (index === (typeof me.zeroLineIndex !== 'undefined' ? me.zeroLineIndex : 0)) {
          // Draw the first index specially
          lineWidth = gridLines.zeroLineWidth;
          lineColor = gridLines.zeroLineColor;
          borderDash = gridLines.zeroLineBorderDash;
          borderDashOffset = gridLines.zeroLineBorderDashOffset;
        } else {
          lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, index);
          lineColor = helpers.getValueAtIndexOrDefault(gridLines.color, index);
          borderDash = helpers.getValueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
          borderDashOffset = helpers.getValueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);
        }

        // Common properties
        var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
        var textAlign = 'middle';
        var textBaseline = 'middle';

        if (isHorizontal) {

          if (options.position === 'bottom') {
            // bottom
            textBaseline = !isRotated? 'top':'middle';
            textAlign = !isRotated? 'center': 'right';
            labelY = me.top + tl;
          } else {
            // top
            textBaseline = !isRotated? 'bottom':'middle';
            textAlign = !isRotated? 'center': 'left';
            labelY = me.bottom - tl;
          }

          var xLineValue = me.getPixelForTick(index) + helpers.aliasPixel(lineWidth); // xvalues for grid lines
          labelX = me.getPixelForTick(index, gridLines.offsetGridLines) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)

          tx1 = tx2 = x1 = x2 = xLineValue;
          ty1 = yTickStart;
          ty2 = yTickEnd;
          y1 = chartArea.top;
          y2 = chartArea.bottom;
        } else {
          var isLeft = options.position === 'left';
          var tickPadding = optionTicks.padding;
          var labelXOffset;

          if (optionTicks.mirror) {
            textAlign = isLeft ? 'left' : 'right';
            labelXOffset = tickPadding;
          } else {
            textAlign = isLeft ? 'right' : 'left';
            labelXOffset = tl + tickPadding;
          }

          labelX = isLeft ? me.right - labelXOffset : me.left + labelXOffset;

          var yLineValue = me.getPixelForTick(index); // xvalues for grid lines
          yLineValue += helpers.aliasPixel(lineWidth);
          labelY = me.getPixelForTick(index, gridLines.offsetGridLines);

          tx1 = xTickStart;
          tx2 = xTickEnd;
          x1 = chartArea.left;
          x2 = chartArea.right;
          ty1 = ty2 = y1 = y2 = yLineValue;
        }

        itemsToDraw.push({
          tx1: tx1,
          ty1: ty1,
          tx2: tx2,
          ty2: ty2,
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          labelX: labelX,
          labelY: labelY,
          glWidth: lineWidth,
          glColor: lineColor,
          glBorderDash: borderDash,
          glBorderDashOffset: borderDashOffset,
          rotation: -1 * labelRotationRadians,
          label: label,
          textBaseline: textBaseline,
          textAlign: textAlign
        });
      });

      // Draw all of the tick labels, tick marks, and grid lines at the correct places
      helpers.each(itemsToDraw, function(itemToDraw) {
        if (gridLines.display) {
          context.save();
          context.lineWidth = itemToDraw.glWidth;
          context.strokeStyle = itemToDraw.glColor;
          if (context.setLineDash) {
            context.setLineDash(itemToDraw.glBorderDash);
            context.lineDashOffset = itemToDraw.glBorderDashOffset;
          }

          context.beginPath();

          if (gridLines.drawTicks) {
            context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
            context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
          }

          if (gridLines.drawOnChartArea) {
            context.moveTo(itemToDraw.x1, itemToDraw.y1);
            context.lineTo(itemToDraw.x2, itemToDraw.y2);
          }

          context.stroke();
          context.restore();
        }

        if (optionTicks.display) {
          context.save();
          context.translate(itemToDraw.labelX, itemToDraw.labelY);
          context.rotate(itemToDraw.rotation);
          context.font = tickFont.font;
          context.textBaseline = itemToDraw.textBaseline;
          context.textAlign = itemToDraw.textAlign;

          var label = itemToDraw.label;
          if (helpers.isArray(label)) {
            for (var i = 0, y = 0; i < label.length; ++i) {
              // We just make sure the multiline element is a string here..
              context.fillText('' + label[i], 0, y);
              // apply same lineSpacing as calculated @ L#320
              y += (tickFont.size * 1.5);
            }
          } else {
            context.fillText(label, 0, 0);
          }
          context.restore();
        }
      });

      if (scaleLabel.display) {
        // Draw the scale label
        var scaleLabelX;
        var scaleLabelY;
        var rotation = 0;

        if (isHorizontal) {
          scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
          scaleLabelY = options.position === 'bottom' ? me.bottom - (scaleLabelFont.size / 2) : me.top + (scaleLabelFont.size / 2);
        } else {
          var isLeft = options.position === 'left';
          scaleLabelX = isLeft ? me.left + (scaleLabelFont.size / 2) : me.right - (scaleLabelFont.size / 2);
          scaleLabelY = me.top + ((me.bottom - me.top) / 2);
          rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
        }

        context.save();
        context.translate(scaleLabelX, scaleLabelY);
        context.rotate(rotation);
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = scaleLabelFontColor; // render in correct colour
        context.font = scaleLabelFont.font;
        context.fillText(scaleLabel.labelString, 0, 0);
        context.restore();
      }

      if (gridLines.drawBorder) {
        // Draw the line at the edge of the axis
        context.lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, 0);
        context.strokeStyle = helpers.getValueAtIndexOrDefault(gridLines.color, 0);
        var x1 = me.left,
          x2 = me.right,
          y1 = me.top,
          y2 = me.bottom;

        var aliasPixel = helpers.aliasPixel(context.lineWidth);
        if (isHorizontal) {
          y1 = y2 = options.position === 'top' ? me.bottom : me.top;
          y1 += aliasPixel;
          y2 += aliasPixel;
        } else {
          x1 = x2 = options.position === 'left' ? me.right : me.left;
          x1 += aliasPixel;
          x2 += aliasPixel;
        }

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
      }
    }
  });
};

},{}],32:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.scaleService = {
    // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
    // use the new chart options to grab the correct scale
    constructors: {},
    // Use a registration function so that we can move to an ES6 map when we no longer need to support
    // old browsers

    // Scale config defaults
    defaults: {},
    registerScaleType: function(type, scaleConstructor, defaults) {
      this.constructors[type] = scaleConstructor;
      this.defaults[type] = helpers.clone(defaults);
    },
    getScaleConstructor: function(type) {
      return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
    },
    getScaleDefaults: function(type) {
      // Return the scale defaults merged with the global settings so that we always use the latest ones
      return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
    },
    updateScaleDefaults: function(type, additions) {
      var defaults = this.defaults;
      if (defaults.hasOwnProperty(type)) {
        defaults[type] = helpers.extend(defaults[type], additions);
      }
    },
    addScalesToLayout: function(chart) {
      // Adds each scale to the chart.boxes array to be sized accordingly
      helpers.each(chart.scales, function(scale) {
        // Set ILayoutItem parameters for backwards compatibility
        scale.fullWidth = scale.options.fullWidth;
        scale.position = scale.options.position;
        scale.weight = scale.options.weight;
        Chart.layoutService.addBox(chart, scale);
      });
    }
  };
};

},{}],33:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  /**
   * Namespace to hold static tick generation functions
   * @namespace Chart.Ticks
   */
  Chart.Ticks = {
    /**
     * Namespace to hold generators for different types of ticks
     * @namespace Chart.Ticks.generators
     */
    generators: {
      /**
       * Interface for the options provided to the numeric tick generator
       * @interface INumericTickGenerationOptions
       */
      /**
       * The maximum number of ticks to display
       * @name INumericTickGenerationOptions#maxTicks
       * @type Number
       */
      /**
       * The distance between each tick.
       * @name INumericTickGenerationOptions#stepSize
       * @type Number
       * @optional
       */
      /**
       * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
       * @name INumericTickGenerationOptions#min
       * @type Number
       * @optional
       */
      /**
       * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
       * @name INumericTickGenerationOptions#max
       * @type Number
       * @optional
       */

      /**
       * Generate a set of linear ticks
       * @method Chart.Ticks.generators.linear
       * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
       * @param dataRange {IRange} the range of the data
       * @returns {Array<Number>} array of tick values
       */
      linear: function(generationOptions, dataRange) {
        var ticks = [];
        // To get a "nice" value for the tick spacing, we will use the appropriately named
        // "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
        // for details.

        var spacing;
        if (generationOptions.stepSize && generationOptions.stepSize > 0) {
          spacing = generationOptions.stepSize;
        } else {
          var niceRange = helpers.niceNum(dataRange.max - dataRange.min, false);
          spacing = helpers.niceNum(niceRange / (generationOptions.maxTicks - 1), true);
        }
        var niceMin = Math.floor(dataRange.min / spacing) * spacing;
        var niceMax = Math.ceil(dataRange.max / spacing) * spacing;

        // If min, max and stepSize is set and they make an evenly spaced scale use it.
        if (generationOptions.min && generationOptions.max && generationOptions.stepSize) {
          // If very close to our whole number, use it.
          if (helpers.almostWhole((generationOptions.max - generationOptions.min) / generationOptions.stepSize, spacing / 1000)) {
            niceMin = generationOptions.min;
            niceMax = generationOptions.max;
          }
        }

        var numSpaces = (niceMax - niceMin) / spacing;
        // If very close to our rounded value, use it.
        if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
          numSpaces = Math.round(numSpaces);
        } else {
          numSpaces = Math.ceil(numSpaces);
        }

        // Put the values into the ticks array
        ticks.push(generationOptions.min !== undefined ? generationOptions.min : niceMin);
        for (var j = 1; j < numSpaces; ++j) {
          ticks.push(niceMin + (j * spacing));
        }
        ticks.push(generationOptions.max !== undefined ? generationOptions.max : niceMax);

        return ticks;
      },

      /**
       * Generate a set of logarithmic ticks
       * @method Chart.Ticks.generators.logarithmic
       * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
       * @param dataRange {IRange} the range of the data
       * @returns {Array<Number>} array of tick values
       */
      logarithmic: function(generationOptions, dataRange) {
        var ticks = [];
        var getValueOrDefault = helpers.getValueOrDefault;

        // Figure out what the max number of ticks we can support it is based on the size of
        // the axis area. For now, we say that the minimum tick spacing in pixels must be 50
        // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
        // the graph
        var tickVal = getValueOrDefault(generationOptions.min, Math.pow(10, Math.floor(helpers.log10(dataRange.min))));

        var endExp = Math.floor(helpers.log10(dataRange.max));
        var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
        var exp;
        var significand;

        if (tickVal === 0) {
          exp = Math.floor(helpers.log10(dataRange.minNotZero));
          significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

          ticks.push(tickVal);
          tickVal = significand * Math.pow(10, exp);
        } else {
          exp = Math.floor(helpers.log10(tickVal));
          significand = Math.floor(tickVal / Math.pow(10, exp));
        }

        do {
          ticks.push(tickVal);

          ++significand;
          if (significand === 10) {
            significand = 1;
            ++exp;
          }

          tickVal = significand * Math.pow(10, exp);
        } while (exp < endExp || (exp === endExp && significand < endSignificand));

        var lastTick = getValueOrDefault(generationOptions.max, tickVal);
        ticks.push(lastTick);

        return ticks;
      }
    },

    /**
     * Namespace to hold formatters for different types of ticks
     * @namespace Chart.Ticks.formatters
     */
    formatters: {
      /**
       * Formatter for value labels
       * @method Chart.Ticks.formatters.values
       * @param value the value to display
       * @return {String|Array} the label to display
       */
      values: function(value) {
        return helpers.isArray(value) ? value : '' + value;
      },

      /**
       * Formatter for linear numeric ticks
       * @method Chart.Ticks.formatters.linear
       * @param tickValue {Number} the value to be formatted
       * @param index {Number} the position of the tickValue parameter in the ticks array
       * @param ticks {Array<Number>} the list of ticks being converted
       * @return {String} string representation of the tickValue parameter
       */
      linear: function(tickValue, index, ticks) {
        // If we have lots of ticks, don't use the ones
        var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

        // If we have a number like 2.5 as the delta, figure out how many decimal places we need
        if (Math.abs(delta) > 1) {
          if (tickValue !== Math.floor(tickValue)) {
            // not an integer
            delta = tickValue - Math.floor(tickValue);
          }
        }

        var logDelta = helpers.log10(Math.abs(delta));
        var tickString = '';

        if (tickValue !== 0) {
          var numDecimal = -1 * Math.floor(logDelta);
          numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
          tickString = tickValue.toFixed(numDecimal);
        } else {
          tickString = '0'; // never show decimal places for 0
        }

        return tickString;
      },

      logarithmic: function(tickValue, index, ticks) {
        var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));

        if (tickValue === 0) {
          return '0';
        } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
          return tickValue.toExponential();
        }
        return '';
      }
    }
  };
};

},{}],34:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  /**
   * Helper method to merge the opacity into a color
   */
  function mergeOpacity(colorString, opacity) {
    var color = helpers.color(colorString);
    return color.alpha(opacity * color.alpha()).rgbaString();
  }

  Chart.defaults.global.tooltips = {
    enabled: true,
    custom: null,
    mode: 'nearest',
    position: 'average',
    intersect: true,
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleFontStyle: 'bold',
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleFontColor: '#fff',
    titleAlign: 'left',
    bodySpacing: 2,
    bodyFontColor: '#fff',
    bodyAlign: 'left',
    footerFontStyle: 'bold',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFontColor: '#fff',
    footerAlign: 'left',
    yPadding: 6,
    xPadding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    multiKeyBackground: '#fff',
    displayColors: true,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    callbacks: {
      // Args are: (tooltipItems, data)
      beforeTitle: helpers.noop,
      title: function(tooltipItems, data) {
        // Pick first xLabel for now
        var title = '';
        var labels = data.labels;
        var labelCount = labels ? labels.length : 0;

        if (tooltipItems.length > 0) {
          var item = tooltipItems[0];

          if (item.xLabel) {
            title = item.xLabel;
          } else if (labelCount > 0 && item.index < labelCount) {
            title = labels[item.index];
          }
        }

        return title;
      },
      afterTitle: helpers.noop,

      // Args are: (tooltipItems, data)
      beforeBody: helpers.noop,

      // Args are: (tooltipItem, data)
      beforeLabel: helpers.noop,
      label: function(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';

        if (label) {
          label += ': ';
        }
        label += tooltipItem.yLabel;
        return label;
      },
      labelColor: function(tooltipItem, chart) {
        var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
        var activeElement = meta.data[tooltipItem.index];
        var view = activeElement._view;
        return {
          borderColor: view.borderColor,
          backgroundColor: view.backgroundColor
        };
      },
      afterLabel: helpers.noop,

      // Args are: (tooltipItems, data)
      afterBody: helpers.noop,

      // Args are: (tooltipItems, data)
      beforeFooter: helpers.noop,
      footer: helpers.noop,
      afterFooter: helpers.noop
    }
  };

  // Helper to push or concat based on if the 2nd parameter is an array or not
  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (helpers.isArray(toPush)) {
        // base = base.concat(toPush);
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }

    return base;
  }

  // Private helper to create a tooltip item model
  // @param element : the chart element (point, arc, bar) to create the tooltip item for
  // @return : new tooltip item
  function createTooltipItem(element) {
    var xScale = element._xScale;
    var yScale = element._yScale || element._scale; // handle radar || polarArea charts
    var index = element._index,
      datasetIndex = element._datasetIndex;

    return {
      xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
      yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
      index: index,
      datasetIndex: datasetIndex,
      x: element._model.x,
      y: element._model.y
    };
  }

  /**
   * Helper to get the reset model for the tooltip
   * @param tooltipOpts {Object} the tooltip options
   */
  function getBaseModel(tooltipOpts) {
    var globalDefaults = Chart.defaults.global;
    var getValueOrDefault = helpers.getValueOrDefault;

    return {
      // Positioning
      xPadding: tooltipOpts.xPadding,
      yPadding: tooltipOpts.yPadding,
      xAlign: tooltipOpts.xAlign,
      yAlign: tooltipOpts.yAlign,

      // Body
      bodyFontColor: tooltipOpts.bodyFontColor,
      _bodyFontFamily: getValueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
      _bodyFontStyle: getValueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
      _bodyAlign: tooltipOpts.bodyAlign,
      bodyFontSize: getValueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
      bodySpacing: tooltipOpts.bodySpacing,

      // Title
      titleFontColor: tooltipOpts.titleFontColor,
      _titleFontFamily: getValueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
      _titleFontStyle: getValueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
      titleFontSize: getValueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
      _titleAlign: tooltipOpts.titleAlign,
      titleSpacing: tooltipOpts.titleSpacing,
      titleMarginBottom: tooltipOpts.titleMarginBottom,

      // Footer
      footerFontColor: tooltipOpts.footerFontColor,
      _footerFontFamily: getValueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
      _footerFontStyle: getValueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
      footerFontSize: getValueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
      _footerAlign: tooltipOpts.footerAlign,
      footerSpacing: tooltipOpts.footerSpacing,
      footerMarginTop: tooltipOpts.footerMarginTop,

      // Appearance
      caretSize: tooltipOpts.caretSize,
      cornerRadius: tooltipOpts.cornerRadius,
      backgroundColor: tooltipOpts.backgroundColor,
      opacity: 0,
      legendColorBackground: tooltipOpts.multiKeyBackground,
      displayColors: tooltipOpts.displayColors,
      borderColor: tooltipOpts.borderColor,
      borderWidth: tooltipOpts.borderWidth
    };
  }

  /**
   * Get the size of the tooltip
   */
  function getTooltipSize(tooltip, model) {
    var ctx = tooltip._chart.ctx;

    var height = model.yPadding * 2; // Tooltip Padding
    var width = 0;

    // Count of all lines in the body
    var body = model.body;
    var combinedBodyLength = body.reduce(function(count, bodyItem) {
      return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
    }, 0);
    combinedBodyLength += model.beforeBody.length + model.afterBody.length;

    var titleLineCount = model.title.length;
    var footerLineCount = model.footer.length;
    var titleFontSize = model.titleFontSize,
      bodyFontSize = model.bodyFontSize,
      footerFontSize = model.footerFontSize;

    height += titleLineCount * titleFontSize; // Title Lines
    height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
    height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
    height += combinedBodyLength * bodyFontSize; // Body Lines
    height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
    height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
    height += footerLineCount * (footerFontSize); // Footer Lines
    height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

    // Title width
    var widthPadding = 0;
    var maxLineWidth = function(line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };

    ctx.font = helpers.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
    helpers.each(model.title, maxLineWidth);

    // Body width
    ctx.font = helpers.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
    helpers.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

    // Body lines may include some extra width due to the color box
    widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
    helpers.each(body, function(bodyItem) {
      helpers.each(bodyItem.before, maxLineWidth);
      helpers.each(bodyItem.lines, maxLineWidth);
      helpers.each(bodyItem.after, maxLineWidth);
    });

    // Reset back to 0
    widthPadding = 0;

    // Footer width
    ctx.font = helpers.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
    helpers.each(model.footer, maxLineWidth);

    // Add padding
    width += 2 * model.xPadding;

    return {
      width: width,
      height: height
    };
  }

  /**
   * Helper to get the alignment of a tooltip given the size
   */
  function determineAlignment(tooltip, size) {
    var model = tooltip._model;
    var chart = tooltip._chart;
    var chartArea = tooltip._chart.chartArea;
    var xAlign = 'center';
    var yAlign = 'center';

    if (model.y < size.height) {
      yAlign = 'top';
    } else if (model.y > (chart.height - size.height)) {
      yAlign = 'bottom';
    }

    var lf, rf; // functions to determine left, right alignment
    var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
    var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
    var midX = (chartArea.left + chartArea.right) / 2;
    var midY = (chartArea.top + chartArea.bottom) / 2;

    if (yAlign === 'center') {
      lf = function(x) {
        return x <= midX;
      };
      rf = function(x) {
        return x > midX;
      };
    } else {
      lf = function(x) {
        return x <= (size.width / 2);
      };
      rf = function(x) {
        return x >= (chart.width - (size.width / 2));
      };
    }

    olf = function(x) {
      return x + size.width > chart.width;
    };
    orf = function(x) {
      return x - size.width < 0;
    };
    yf = function(y) {
      return y <= midY ? 'top' : 'bottom';
    };

    if (lf(model.x)) {
      xAlign = 'left';

      // Is tooltip too wide and goes over the right side of the chart.?
      if (olf(model.x)) {
        xAlign = 'center';
        yAlign = yf(model.y);
      }
    } else if (rf(model.x)) {
      xAlign = 'right';

      // Is tooltip too wide and goes outside left edge of canvas?
      if (orf(model.x)) {
        xAlign = 'center';
        yAlign = yf(model.y);
      }
    }

    var opts = tooltip._options;
    return {
      xAlign: opts.xAlign ? opts.xAlign : xAlign,
      yAlign: opts.yAlign ? opts.yAlign : yAlign
    };
  }

  /**
   * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
   */
  function getBackgroundPoint(vm, size, alignment) {
    // Background Position
    var x = vm.x;
    var y = vm.y;

    var caretSize = vm.caretSize,
      caretPadding = vm.caretPadding,
      cornerRadius = vm.cornerRadius,
      xAlign = alignment.xAlign,
      yAlign = alignment.yAlign,
      paddingAndSize = caretSize + caretPadding,
      radiusAndPadding = cornerRadius + caretPadding;

    if (xAlign === 'right') {
      x -= size.width;
    } else if (xAlign === 'center') {
      x -= (size.width / 2);
    }

    if (yAlign === 'top') {
      y += paddingAndSize;
    } else if (yAlign === 'bottom') {
      y -= size.height + paddingAndSize;
    } else {
      y -= (size.height / 2);
    }

    if (yAlign === 'center') {
      if (xAlign === 'left') {
        x += paddingAndSize;
      } else if (xAlign === 'right') {
        x -= paddingAndSize;
      }
    } else if (xAlign === 'left') {
      x -= radiusAndPadding;
    } else if (xAlign === 'right') {
      x += radiusAndPadding;
    }

    return {
      x: x,
      y: y
    };
  }

  Chart.Tooltip = Chart.Element.extend({
    initialize: function() {
      this._model = getBaseModel(this._options);
    },

    // Get the title
    // Args are: (tooltipItem, data)
    getTitle: function() {
      var me = this;
      var opts = me._options;
      var callbacks = opts.callbacks;

      var beforeTitle = callbacks.beforeTitle.apply(me, arguments),
        title = callbacks.title.apply(me, arguments),
        afterTitle = callbacks.afterTitle.apply(me, arguments);

      var lines = [];
      lines = pushOrConcat(lines, beforeTitle);
      lines = pushOrConcat(lines, title);
      lines = pushOrConcat(lines, afterTitle);

      return lines;
    },

    // Args are: (tooltipItem, data)
    getBeforeBody: function() {
      var lines = this._options.callbacks.beforeBody.apply(this, arguments);
      return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
    },

    // Args are: (tooltipItem, data)
    getBody: function(tooltipItems, data) {
      var me = this;
      var callbacks = me._options.callbacks;
      var bodyItems = [];

      helpers.each(tooltipItems, function(tooltipItem) {
        var bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
        pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
        pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));

        bodyItems.push(bodyItem);
      });

      return bodyItems;
    },

    // Args are: (tooltipItem, data)
    getAfterBody: function() {
      var lines = this._options.callbacks.afterBody.apply(this, arguments);
      return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
    },

    // Get the footer and beforeFooter and afterFooter lines
    // Args are: (tooltipItem, data)
    getFooter: function() {
      var me = this;
      var callbacks = me._options.callbacks;

      var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
      var footer = callbacks.footer.apply(me, arguments);
      var afterFooter = callbacks.afterFooter.apply(me, arguments);

      var lines = [];
      lines = pushOrConcat(lines, beforeFooter);
      lines = pushOrConcat(lines, footer);
      lines = pushOrConcat(lines, afterFooter);

      return lines;
    },

    update: function(changed) {
      var me = this;
      var opts = me._options;

      // Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
      // that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
      // which breaks any animations.
      var existingModel = me._model;
      var model = me._model = getBaseModel(opts);
      var active = me._active;

      var data = me._data;

      // In the case where active.length === 0 we need to keep these at existing values for good animations
      var alignment = {
        xAlign: existingModel.xAlign,
        yAlign: existingModel.yAlign
      };
      var backgroundPoint = {
        x: existingModel.x,
        y: existingModel.y
      };
      var tooltipSize = {
        width: existingModel.width,
        height: existingModel.height
      };
      var tooltipPosition = {
        x: existingModel.caretX,
        y: existingModel.caretY
      };

      var i, len;

      if (active.length) {
        model.opacity = 1;

        var labelColors = [];
        tooltipPosition = Chart.Tooltip.positioners[opts.position](active, me._eventPosition);

        var tooltipItems = [];
        for (i = 0, len = active.length; i < len; ++i) {
          tooltipItems.push(createTooltipItem(active[i]));
        }

        // If the user provided a filter function, use it to modify the tooltip items
        if (opts.filter) {
          tooltipItems = tooltipItems.filter(function(a) {
            return opts.filter(a, data);
          });
        }

        // If the user provided a sorting function, use it to modify the tooltip items
        if (opts.itemSort) {
          tooltipItems = tooltipItems.sort(function(a, b) {
            return opts.itemSort(a, b, data);
          });
        }

        // Determine colors for boxes
        helpers.each(tooltipItems, function(tooltipItem) {
          labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
        });

        // Build the Text Lines
        model.title = me.getTitle(tooltipItems, data);
        model.beforeBody = me.getBeforeBody(tooltipItems, data);
        model.body = me.getBody(tooltipItems, data);
        model.afterBody = me.getAfterBody(tooltipItems, data);
        model.footer = me.getFooter(tooltipItems, data);

        // Initial positioning and colors
        model.x = Math.round(tooltipPosition.x);
        model.y = Math.round(tooltipPosition.y);
        model.caretPadding = opts.caretPadding;
        model.labelColors = labelColors;

        // data points
        model.dataPoints = tooltipItems;

        // We need to determine alignment of the tooltip
        tooltipSize = getTooltipSize(this, model);
        alignment = determineAlignment(this, tooltipSize);
        // Final Size and Position
        backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment);
      } else {
        model.opacity = 0;
      }

      model.xAlign = alignment.xAlign;
      model.yAlign = alignment.yAlign;
      model.x = backgroundPoint.x;
      model.y = backgroundPoint.y;
      model.width = tooltipSize.width;
      model.height = tooltipSize.height;

      // Point where the caret on the tooltip points to
      model.caretX = tooltipPosition.x;
      model.caretY = tooltipPosition.y;

      me._model = model;

      if (changed && opts.custom) {
        opts.custom.call(me, model);
      }

      return me;
    },
    drawCaret: function(tooltipPoint, size) {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);

      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    },
    getCaretPosition: function(tooltipPoint, size, vm) {
      var x1, x2, x3;
      var y1, y2, y3;
      var caretSize = vm.caretSize;
      var cornerRadius = vm.cornerRadius;
      var xAlign = vm.xAlign,
        yAlign = vm.yAlign;
      var ptX = tooltipPoint.x,
        ptY = tooltipPoint.y;
      var width = size.width,
        height = size.height;

      if (yAlign === 'center') {
        y2 = ptY + (height / 2);

        if (xAlign === 'left') {
          x1 = ptX;
          x2 = x1 - caretSize;
          x3 = x1;

          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          x3 = x1;

          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
      } else {
        if (xAlign === 'left') {
          x2 = ptX + cornerRadius + (caretSize);
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else if (xAlign === 'right') {
          x2 = ptX + width - cornerRadius - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          x2 = ptX + (width / 2);
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        }
        if (yAlign === 'top') {
          y1 = ptY;
          y2 = y1 - caretSize;
          y3 = y1;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          y3 = y1;
          // invert drawing order
          var tmp = x3;
          x3 = x1;
          x1 = tmp;
        }
      }
      return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
    },
    drawTitle: function(pt, vm, ctx, opacity) {
      var title = vm.title;

      if (title.length) {
        ctx.textAlign = vm._titleAlign;
        ctx.textBaseline = 'top';

        var titleFontSize = vm.titleFontSize,
          titleSpacing = vm.titleSpacing;

        ctx.fillStyle = mergeOpacity(vm.titleFontColor, opacity);
        ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

        var i, len;
        for (i = 0, len = title.length; i < len; ++i) {
          ctx.fillText(title[i], pt.x, pt.y);
          pt.y += titleFontSize + titleSpacing; // Line Height and spacing

          if (i + 1 === title.length) {
            pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
          }
        }
      }
    },
    drawBody: function(pt, vm, ctx, opacity) {
      var bodyFontSize = vm.bodyFontSize;
      var bodySpacing = vm.bodySpacing;
      var body = vm.body;

      ctx.textAlign = vm._bodyAlign;
      ctx.textBaseline = 'top';

      var textColor = mergeOpacity(vm.bodyFontColor, opacity);
      ctx.fillStyle = textColor;
      ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

      // Before Body
      var xLinePadding = 0;
      var fillLineOfText = function(line) {
        ctx.fillText(line, pt.x + xLinePadding, pt.y);
        pt.y += bodyFontSize + bodySpacing;
      };

      // Before body lines
      helpers.each(vm.beforeBody, fillLineOfText);

      var drawColorBoxes = vm.displayColors;
      xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;

      // Draw body lines now
      helpers.each(body, function(bodyItem, i) {
        helpers.each(bodyItem.before, fillLineOfText);

        helpers.each(bodyItem.lines, function(line) {
          // Draw Legend-like boxes if needed
          if (drawColorBoxes) {
            // Fill a white rect so that colours merge nicely if the opacity is < 1
            ctx.fillStyle = mergeOpacity(vm.legendColorBackground, opacity);
            ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

            // Border
            ctx.strokeStyle = mergeOpacity(vm.labelColors[i].borderColor, opacity);
            ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

            // Inner square
            ctx.fillStyle = mergeOpacity(vm.labelColors[i].backgroundColor, opacity);
            ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);

            ctx.fillStyle = textColor;
          }

          fillLineOfText(line);
        });

        helpers.each(bodyItem.after, fillLineOfText);
      });

      // Reset back to 0 for after body
      xLinePadding = 0;

      // After body lines
      helpers.each(vm.afterBody, fillLineOfText);
      pt.y -= bodySpacing; // Remove last body spacing
    },
    drawFooter: function(pt, vm, ctx, opacity) {
      var footer = vm.footer;

      if (footer.length) {
        pt.y += vm.footerMarginTop;

        ctx.textAlign = vm._footerAlign;
        ctx.textBaseline = 'top';

        ctx.fillStyle = mergeOpacity(vm.footerFontColor, opacity);
        ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

        helpers.each(footer, function(line) {
          ctx.fillText(line, pt.x, pt.y);
          pt.y += vm.footerFontSize + vm.footerSpacing;
        });
      }
    },
    drawBackground: function(pt, vm, ctx, tooltipSize, opacity) {
      ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
      ctx.strokeStyle = mergeOpacity(vm.borderColor, opacity);
      ctx.lineWidth = vm.borderWidth;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var x = pt.x;
      var y = pt.y;
      var width = tooltipSize.width;
      var height = tooltipSize.height;
      var radius = vm.cornerRadius;

      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      if (yAlign === 'top') {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      if (yAlign === 'center' && xAlign === 'right') {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      if (yAlign === 'bottom') {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      if (yAlign === 'center' && xAlign === 'left') {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();

      ctx.fill();

      if (vm.borderWidth > 0) {
        ctx.stroke();
      }
    },
    draw: function() {
      var ctx = this._chart.ctx;
      var vm = this._view;

      if (vm.opacity === 0) {
        return;
      }

      var tooltipSize = {
        width: vm.width,
        height: vm.height
      };
      var pt = {
        x: vm.x,
        y: vm.y
      };

      // IE11/Edge does not like very small opacities, so snap to 0
      var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

      // Truthy/falsey value for empty tooltip
      var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

      if (this._options.enabled && hasTooltipContent) {
        // Draw Background
        this.drawBackground(pt, vm, ctx, tooltipSize, opacity);

        // Draw Title, Body, and Footer
        pt.x += vm.xPadding;
        pt.y += vm.yPadding;

        // Titles
        this.drawTitle(pt, vm, ctx, opacity);

        // Body
        this.drawBody(pt, vm, ctx, opacity);

        // Footer
        this.drawFooter(pt, vm, ctx, opacity);
      }
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     * @returns {Boolean} true if the tooltip changed
     */
    handleEvent: function(e) {
      var me = this;
      var options = me._options;
      var changed = false;

      me._lastActive = me._lastActive || [];

      // Find Active Elements for tooltips
      if (e.type === 'mouseout') {
        me._active = [];
      } else {
        me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
      }

      // Remember Last Actives
      changed = !helpers.arrayEquals(me._active, me._lastActive);

      // If tooltip didn't change, do not handle the target event
      if (!changed) {
        return false;
      }

      me._lastActive = me._active;

      if (options.enabled || options.custom) {
        me._eventPosition = {
          x: e.x,
          y: e.y
        };

        var model = me._model;
        me.update(true);
        me.pivot();

        // See if our tooltip position changed
        changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
      }

      return changed;
    }
  });

  /**
   * @namespace Chart.Tooltip.positioners
   */
  Chart.Tooltip.positioners = {
    /**
     * Average mode places the tooltip at the average position of the elements shown
     * @function Chart.Tooltip.positioners.average
     * @param elements {ChartElement[]} the elements being displayed in the tooltip
     * @returns {Point} tooltip position
     */
    average: function(elements) {
      if (!elements.length) {
        return false;
      }

      var i, len;
      var x = 0;
      var y = 0;
      var count = 0;

      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];
        if (el && el.hasValue()) {
          var pos = el.tooltipPosition();
          x += pos.x;
          y += pos.y;
          ++count;
        }
      }

      return {
        x: Math.round(x / count),
        y: Math.round(y / count)
      };
    },

    /**
     * Gets the tooltip position nearest of the item nearest to the event position
     * @function Chart.Tooltip.positioners.nearest
     * @param elements {Chart.Element[]} the tooltip elements
     * @param eventPosition {Point} the position of the event in canvas coordinates
     * @returns {Point} the tooltip position
     */
    nearest: function(elements, eventPosition) {
      var x = eventPosition.x;
      var y = eventPosition.y;

      var nearestElement;
      var minDistance = Number.POSITIVE_INFINITY;
      var i, len;
      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];
        if (el && el.hasValue()) {
          var center = el.getCenterPoint();
          var d = helpers.distanceBetweenPoints(eventPosition, center);

          if (d < minDistance) {
            minDistance = d;
            nearestElement = el;
          }
        }
      }

      if (nearestElement) {
        var tp = nearestElement.tooltipPosition();
        x = tp.x;
        y = tp.y;
      }

      return {
        x: x,
        y: y
      };
    }
  };
};

},{}],35:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers,
    globalOpts = Chart.defaults.global;

  globalOpts.elements.arc = {
    backgroundColor: globalOpts.defaultColor,
    borderColor: '#fff',
    borderWidth: 2
  };

  Chart.elements.Arc = Chart.Element.extend({
    inLabelRange: function(mouseX) {
      var vm = this._view;

      if (vm) {
        return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
      }
      return false;
    },
    inRange: function(chartX, chartY) {
      var vm = this._view;

      if (vm) {
        var pointRelativePosition = helpers.getAngleFromPoint(vm, {
            x: chartX,
            y: chartY
          }),
          angle = pointRelativePosition.angle,
          distance = pointRelativePosition.distance;

        // Sanitise angle range
        var startAngle = vm.startAngle;
        var endAngle = vm.endAngle;
        while (endAngle < startAngle) {
          endAngle += 2.0 * Math.PI;
        }
        while (angle > endAngle) {
          angle -= 2.0 * Math.PI;
        }
        while (angle < startAngle) {
          angle += 2.0 * Math.PI;
        }

        // Check if within the range of the open/close angle
        var betweenAngles = (angle >= startAngle && angle <= endAngle),
          withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

        return (betweenAngles && withinRadius);
      }
      return false;
    },
    getCenterPoint: function() {
      var vm = this._view;
      var halfAngle = (vm.startAngle + vm.endAngle) / 2;
      var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
      return {
        x: vm.x + Math.cos(halfAngle) * halfRadius,
        y: vm.y + Math.sin(halfAngle) * halfRadius
      };
    },
    getArea: function() {
      var vm = this._view;
      return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
    },
    tooltipPosition: function() {
      var vm = this._view;

      var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
        rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
      return {
        x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
        y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
      };
    },
    draw: function() {

      var ctx = this._chart.ctx,
        vm = this._view,
        sA = vm.startAngle,
        eA = vm.endAngle;

      ctx.beginPath();

      ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
      ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

      ctx.closePath();
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = vm.borderWidth;

      ctx.fillStyle = vm.backgroundColor;

      ctx.fill();
      ctx.lineJoin = 'bevel';

      if (vm.borderWidth) {
        ctx.stroke();
      }
    }
  });
};

},{}],36:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;
  var globalDefaults = Chart.defaults.global;

  Chart.defaults.global.elements.line = {
    tension: 0.4,
    backgroundColor: globalDefaults.defaultColor,
    borderWidth: 3,
    borderColor: globalDefaults.defaultColor,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    capBezierPoints: true,
    fill: true, // do we fill in the area between the line and its base axis
  };

  Chart.elements.Line = Chart.Element.extend({
    draw: function() {
      var me = this;
      var vm = me._view;
      var ctx = me._chart.ctx;
      var spanGaps = vm.spanGaps;
      var points = me._children.slice(); // clone array
      var globalOptionLineElements = globalDefaults.elements.line;
      var lastDrawnIndex = -1;
      var index, current, previous, currentVM;

      // If we are looping, adding the first point again
      if (me._loop && points.length) {
        points.push(points[0]);
      }

      ctx.save();

      // Stroke Line Options
      ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

      // IE 9 and 10 do not support line dash
      if (ctx.setLineDash) {
        ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
      }

      ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
      ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
      ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
      ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

      // Stroke Line
      ctx.beginPath();
      lastDrawnIndex = -1;

      for (index = 0; index < points.length; ++index) {
        current = points[index];
        previous = helpers.previousItem(points, index);
        currentVM = current._view;

        // First point moves to it's starting position no matter what
        if (index === 0) {
          if (!currentVM.skip) {
            ctx.moveTo(currentVM.x, currentVM.y);
            lastDrawnIndex = index;
          }
        } else {
          previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

          if (!currentVM.skip) {
            if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
              // There was a gap and this is the first point after the gap
              ctx.moveTo(currentVM.x, currentVM.y);
            } else {
              // Line to next point
              helpers.canvas.lineTo(ctx, previous._view, current._view);
            }
            lastDrawnIndex = index;
          }
        }
      }

      ctx.stroke();
      ctx.restore();
    }
  });
};

},{}],37:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers,
    globalOpts = Chart.defaults.global,
    defaultColor = globalOpts.defaultColor;

  globalOpts.elements.point = {
    radius: 3,
    pointStyle: 'circle',
    backgroundColor: defaultColor,
    borderWidth: 1,
    borderColor: defaultColor,
    // Hover
    hitRadius: 1,
    hoverRadius: 4,
    hoverBorderWidth: 1
  };

  function xRange(mouseX) {
    var vm = this._view;
    return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
  }

  function yRange(mouseY) {
    var vm = this._view;
    return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
  }

  Chart.elements.Point = Chart.Element.extend({
    inRange: function(mouseX, mouseY) {
      var vm = this._view;
      return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
    },

    inLabelRange: xRange,
    inXRange: xRange,
    inYRange: yRange,

    getCenterPoint: function() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    },
    getArea: function() {
      return Math.PI * Math.pow(this._view.radius, 2);
    },
    tooltipPosition: function() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y,
        padding: vm.radius + vm.borderWidth
      };
    },
    draw: function(chartArea) {
      var vm = this._view;
      var model = this._model;
      var ctx = this._chart.ctx;
      var pointStyle = vm.pointStyle;
      var radius = vm.radius;
      var x = vm.x;
      var y = vm.y;
      var color = Chart.helpers.color;
      var errMargin = 1.01; // 1.01 is margin for Accumulated error. (Especially Edge, IE.)
      var ratio = 0;

      if (vm.skip) {
        return;
      }

      ctx.strokeStyle = vm.borderColor || defaultColor;
      ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, globalOpts.elements.point.borderWidth);
      ctx.fillStyle = vm.backgroundColor || defaultColor;

      // Cliping for Points.
      // going out from inner charArea?
      if ((chartArea !== undefined) && ((model.x < chartArea.left) || (chartArea.right*errMargin < model.x) || (model.y < chartArea.top) || (chartArea.bottom*errMargin < model.y))) {
        // Point fade out
        if (model.x < chartArea.left) {
          ratio = (x - model.x) / (chartArea.left - model.x);
        } else if (chartArea.right*errMargin < model.x) {
          ratio = (model.x - x) / (model.x - chartArea.right);
        } else if (model.y < chartArea.top) {
          ratio = (y - model.y) / (chartArea.top - model.y);
        } else if (chartArea.bottom*errMargin < model.y) {
          ratio = (model.y - y) / (model.y - chartArea.bottom);
        }
        ratio = Math.round(ratio*100) / 100;
        ctx.strokeStyle = color(ctx.strokeStyle).alpha(ratio).rgbString();
        ctx.fillStyle = color(ctx.fillStyle).alpha(ratio).rgbString();
      }

      Chart.canvasHelpers.drawPoint(ctx, pointStyle, radius, x, y);
    }
  });
};

},{}],38:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var globalOpts = Chart.defaults.global;

  globalOpts.elements.rectangle = {
    backgroundColor: globalOpts.defaultColor,
    borderWidth: 0,
    borderColor: globalOpts.defaultColor,
    borderSkipped: 'bottom'
  };

  function isVertical(bar) {
    return bar._view.width !== undefined;
  }

  /**
   * Helper function to get the bounds of the bar regardless of the orientation
   * @private
   * @param bar {Chart.Element.Rectangle} the bar
   * @return {Bounds} bounds of the bar
   */
  function getBarBounds(bar) {
    var vm = bar._view;
    var x1, x2, y1, y2;

    if (isVertical(bar)) {
      // vertical
      var halfWidth = vm.width / 2;
      x1 = vm.x - halfWidth;
      x2 = vm.x + halfWidth;
      y1 = Math.min(vm.y, vm.base);
      y2 = Math.max(vm.y, vm.base);
    } else {
      // horizontal bar
      var halfHeight = vm.height / 2;
      x1 = Math.min(vm.x, vm.base);
      x2 = Math.max(vm.x, vm.base);
      y1 = vm.y - halfHeight;
      y2 = vm.y + halfHeight;
    }

    return {
      left: x1,
      top: y1,
      right: x2,
      bottom: y2
    };
  }

  Chart.elements.Rectangle = Chart.Element.extend({
    draw: function() {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var left, right, top, bottom, signX, signY, borderSkipped;
      var borderWidth = vm.borderWidth;

      if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
      } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
      }

      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;

      // Corner points, from bottom-left to bottom-right clockwise
      // | 1 2 |
      // | 0 3 |
      var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
      ];

      // Find first (starting) corner with fallback to 'bottom'
      var borders = ['bottom', 'left', 'top', 'right'];
      var startCorner = borders.indexOf(borderSkipped, 0);
      if (startCorner === -1) {
        startCorner = 0;
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4];
      }

      // Draw rectangle from 'startCorner'
      var corner = cornerAt(0);
      ctx.moveTo(corner[0], corner[1]);

      for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        ctx.lineTo(corner[0], corner[1]);
      }

      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    },
    height: function() {
      var vm = this._view;
      return vm.base - vm.y;
    },
    inRange: function(mouseX, mouseY) {
      var inRange = false;

      if (this._view) {
        var bounds = getBarBounds(this);
        inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
      }

      return inRange;
    },
    inLabelRange: function(mouseX, mouseY) {
      var me = this;
      if (!me._view) {
        return false;
      }

      var inRange = false;
      var bounds = getBarBounds(me);

      if (isVertical(me)) {
        inRange = mouseX >= bounds.left && mouseX <= bounds.right;
      } else {
        inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
      }

      return inRange;
    },
    inXRange: function(mouseX) {
      var bounds = getBarBounds(this);
      return mouseX >= bounds.left && mouseX <= bounds.right;
    },
    inYRange: function(mouseY) {
      var bounds = getBarBounds(this);
      return mouseY >= bounds.top && mouseY <= bounds.bottom;
    },
    getCenterPoint: function() {
      var vm = this._view;
      var x, y;
      if (isVertical(this)) {
        x = vm.x;
        y = (vm.y + vm.base) / 2;
      } else {
        x = (vm.x + vm.base) / 2;
        y = vm.y;
      }

      return {x: x, y: y};
    },
    getArea: function() {
      var vm = this._view;
      return vm.width * Math.abs(vm.y - vm.base);
    },
    tooltipPosition: function() {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y
      };
    }
  });

};

},{}],39:[function(require,module,exports){
'use strict';

// Chart.Platform implementation for targeting a web browser
module.exports = function(Chart) {
  var helpers = Chart.helpers;

  // DOM event types -> Chart.js event types.
  // Note: only events with different types are mapped.
  // https://developer.mozilla.org/en-US/docs/Web/Events
  var eventTypeMap = {
    // Touch events
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',

    // Pointer events
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
  };

  /**
   * The "used" size is the final value of a dimension property after all calculations have
   * been performed. This method uses the computed style of `element` but returns undefined
   * if the computed style is not expressed in pixels. That can happen in some cases where
   * `element` has a size relative to its parent and this last one is not yet displayed,
   * for example because of `display: none` on a parent node.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
   * @returns {Number} Size in pixels or undefined if unknown.
   */
  function readUsedSize(element, property) {
    var value = helpers.getStyle(element, property);
    var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches? Number(matches[1]) : undefined;
  }

  /**
   * Initializes the canvas style and render size without modifying the canvas display size,
   * since responsiveness is handled by the controller.resize() method. The config is used
   * to determine the aspect ratio to apply in case no explicit height has been specified.
   */
  function initCanvas(canvas, config) {
    var style = canvas.style;

    // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
    // returns null or '' if no explicit value has been set to the canvas attribute.
    var renderHeight = canvas.getAttribute('height');
    var renderWidth = canvas.getAttribute('width');

    // Chart.js modifies some canvas values that we want to restore on destroy
    canvas._chartjs = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    };

    // Force canvas to display as block to avoid extra space caused by inline
    // elements, which would interfere with the responsive resize process.
    // https://github.com/chartjs/Chart.js/issues/2538
    style.display = style.display || 'block';

    if (renderWidth === null || renderWidth === '') {
      var displayWidth = readUsedSize(canvas, 'width');
      if (displayWidth !== undefined) {
        canvas.width = displayWidth;
      }
    }

    if (renderHeight === null || renderHeight === '') {
      if (canvas.style.height === '') {
        // If no explicit render height and style height, let's apply the aspect ratio,
        // which one can be specified by the user but also by charts as default option
        // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
        canvas.height = canvas.width / (config.options.aspectRatio || 2);
      } else {
        var displayHeight = readUsedSize(canvas, 'height');
        if (displayWidth !== undefined) {
          canvas.height = displayHeight;
        }
      }
    }

    return canvas;
  }

  function createEvent(type, chart, x, y, nativeEvent) {
    return {
      type: type,
      chart: chart,
      native: nativeEvent || null,
      x: x !== undefined? x : null,
      y: y !== undefined? y : null,
    };
  }

  function fromNativeEvent(event, chart) {
    var type = eventTypeMap[event.type] || event.type;
    var pos = helpers.getRelativePosition(event, chart);
    return createEvent(type, chart, pos.x, pos.y, event);
  }

  function createResizer(handler) {
    var iframe = document.createElement('iframe');
    iframe.className = 'chartjs-hidden-iframe';
    iframe.style.cssText =
      'display:block;'+
      'overflow:hidden;'+
      'border:0;'+
      'margin:0;'+
      'top:0;'+
      'left:0;'+
      'bottom:0;'+
      'right:0;'+
      'height:100%;'+
      'width:100%;'+
      'position:absolute;'+
      'pointer-events:none;'+
      'z-index:-1;';

    // Prevent the iframe to gain focus on tab.
    // https://github.com/chartjs/Chart.js/issues/3090
    iframe.tabIndex = -1;

    // If the iframe is re-attached to the DOM, the resize listener is removed because the
    // content is reloaded, so make sure to install the handler after the iframe is loaded.
    // https://github.com/chartjs/Chart.js/issues/3521
    helpers.addEvent(iframe, 'load', function() {
      helpers.addEvent(iframe.contentWindow || iframe, 'resize', handler);

      // The iframe size might have changed while loading, which can also
      // happen if the size has been changed while detached from the DOM.
      handler();
    });

    return iframe;
  }

  function addResizeListener(node, listener, chart) {
    var stub = node._chartjs = {
      ticking: false
    };

    // Throttle the callback notification until the next animation frame.
    var notify = function() {
      if (!stub.ticking) {
        stub.ticking = true;
        helpers.requestAnimFrame.call(window, function() {
          if (stub.resizer) {
            stub.ticking = false;
            return listener(createEvent('resize', chart));
          }
        });
      }
    };

    // Let's keep track of this added iframe and thus avoid DOM query when removing it.
    stub.resizer = createResizer(notify);

    node.insertBefore(stub.resizer, node.firstChild);
  }

  function removeResizeListener(node) {
    if (!node || !node._chartjs) {
      return;
    }

    var resizer = node._chartjs.resizer;
    if (resizer) {
      resizer.parentNode.removeChild(resizer);
      node._chartjs.resizer = null;
    }

    delete node._chartjs;
  }

  return {
    acquireContext: function(item, config) {
      if (typeof item === 'string') {
        item = document.getElementById(item);
      } else if (item.length) {
        // Support for array based queries (such as jQuery)
        item = item[0];
      }

      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      }

      // To prevent canvas fingerprinting, some add-ons undefine the getContext
      // method, for example: https://github.com/kkapsner/CanvasBlocker
      // https://github.com/chartjs/Chart.js/issues/2807
      var context = item && item.getContext && item.getContext('2d');

      // `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
      // inside an iframe or when running in a protected environment. We could guess the
      // types from their toString() value but let's keep things flexible and assume it's
      // a sufficient condition if the item has a context2D which has item as `canvas`.
      // https://github.com/chartjs/Chart.js/issues/3887
      // https://github.com/chartjs/Chart.js/issues/4102
      // https://github.com/chartjs/Chart.js/issues/4152
      if (context && context.canvas === item) {
        initCanvas(item, config);
        return context;
      }

      return null;
    },

    releaseContext: function(context) {
      var canvas = context.canvas;
      if (!canvas._chartjs) {
        return;
      }

      var initial = canvas._chartjs.initial;
      ['height', 'width'].forEach(function(prop) {
        var value = initial[prop];
        if (value === undefined || value === null) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });

      helpers.each(initial.style || {}, function(value, key) {
        canvas.style[key] = value;
      });

      // The canvas render size might have been changed (and thus the state stack discarded),
      // we can't use save() and restore() to restore the initial state. So make sure that at
      // least the canvas context is reset to the default state by setting the canvas width.
      // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
      canvas.width = canvas.width;

      delete canvas._chartjs;
    },

    addEventListener: function(chart, type, listener) {
      var canvas = chart.canvas;
      if (type === 'resize') {
        // Note: the resize event is not supported on all browsers.
        addResizeListener(canvas.parentNode, listener, chart);
        return;
      }

      var stub = listener._chartjs || (listener._chartjs = {});
      var proxies = stub.proxies || (stub.proxies = {});
      var proxy = proxies[chart.id + '_' + type] = function(event) {
        listener(fromNativeEvent(event, chart));
      };

      helpers.addEvent(canvas, type, proxy);
    },

    removeEventListener: function(chart, type, listener) {
      var canvas = chart.canvas;
      if (type === 'resize') {
        // Note: the resize event is not supported on all browsers.
        removeResizeListener(canvas.parentNode, listener);
        return;
      }

      var stub = listener._chartjs || {};
      var proxies = stub.proxies || {};
      var proxy = proxies[chart.id + '_' + type];
      if (!proxy) {
        return;
      }

      helpers.removeEvent(canvas, type, proxy);
    }
  };
};

},{}],40:[function(require,module,exports){
'use strict';

// By default, select the browser (DOM) platform.
// @TODO Make possible to select another platform at build time.
var implementation = require(39);

module.exports = function(Chart) {
  /**
   * @namespace Chart.platform
   * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
   * @since 2.4.0
   */
  Chart.platform = {
    /**
     * Called at chart construction time, returns a context2d instance implementing
     * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
     * @param {*} item - The native item from which to acquire context (platform specific)
     * @param {Object} options - The chart options
     * @returns {CanvasRenderingContext2D} context2d instance
     */
    acquireContext: function() {},

    /**
     * Called at chart destruction time, releases any resources associated to the context
     * previously returned by the acquireContext() method.
     * @param {CanvasRenderingContext2D} context - The context2d instance
     * @returns {Boolean} true if the method succeeded, else false
     */
    releaseContext: function() {},

    /**
     * Registers the specified listener on the given chart.
     * @param {Chart} chart - Chart from which to listen for event
     * @param {String} type - The ({@link IEvent}) type to listen for
     * @param {Function} listener - Receives a notification (an object that implements
     * the {@link IEvent} interface) when an event of the specified type occurs.
     */
    addEventListener: function() {},

    /**
     * Removes the specified listener previously registered with addEventListener.
     * @param {Chart} chart -Chart from which to remove the listener
     * @param {String} type - The ({@link IEvent}) type to remove
     * @param {Function} listener - The listener function to remove from the event target.
     */
    removeEventListener: function() {}
  };

  /**
   * @interface IPlatform
   * Allows abstracting platform dependencies away from the chart
   * @borrows Chart.platform.acquireContext as acquireContext
   * @borrows Chart.platform.releaseContext as releaseContext
   * @borrows Chart.platform.addEventListener as addEventListener
   * @borrows Chart.platform.removeEventListener as removeEventListener
   */

  /**
   * @interface IEvent
   * @prop {String} type - The event type name, possible values are:
   * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
   * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
   * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
   * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
   * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
   */

  Chart.helpers.extend(Chart.platform, implementation(Chart));
};

},{"39":39}],41:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
  /**
   * Plugin based on discussion from the following Chart.js issues:
   * @see https://github.com/chartjs/Chart.js/issues/2380#issuecomment-279961569
   * @see https://github.com/chartjs/Chart.js/issues/2440#issuecomment-256461897
   */
  Chart.defaults.global.plugins.filler = {
    propagate: true
  };

  var defaults = Chart.defaults;
  var helpers = Chart.helpers;
  var mappers = {
    dataset: function(source) {
      var index = source.fill;
      var chart = source.chart;
      var meta = chart.getDatasetMeta(index);
      var visible = meta && chart.isDatasetVisible(index);
      var points = (visible && meta.dataset._children) || [];

      return !points.length? null : function(point, i) {
        return points[i]._view || null;
      };
    },

    boundary: function(source) {
      var boundary = source.boundary;
      var x = boundary? boundary.x : null;
      var y = boundary? boundary.y : null;

      return function(point) {
        return {
          x: x === null? point.x : x,
          y: y === null? point.y : y,
        };
      };
    }
  };

  // @todo if (fill[0] === '#')
  function decodeFill(el, index, count) {
    var model = el._model || {};
    var fill = model.fill;
    var target;

    if (fill === undefined) {
      fill = !!model.backgroundColor;
    }

    if (fill === false || fill === null) {
      return false;
    }

    if (fill === true) {
      return 'origin';
    }

    target = parseFloat(fill, 10);
    if (isFinite(target) && Math.floor(target) === target) {
      if (fill[0] === '-' || fill[0] === '+') {
        target = index + target;
      }

      if (target === index || target < 0 || target >= count) {
        return false;
      }

      return target;
    }

    switch (fill) {
    // compatibility
    case 'bottom':
      return 'start';
    case 'top':
      return 'end';
    case 'zero':
      return 'origin';
    // supported boundaries
    case 'origin':
    case 'start':
    case 'end':
      return fill;
    // invalid fill values
    default:
      return false;
    }
  }

  function computeBoundary(source) {
    var model = source.el._model || {};
    var scale = source.el._scale || {};
    var fill = source.fill;
    var target = null;
    var horizontal;

    if (isFinite(fill)) {
      return null;
    }

    // Backward compatibility: until v3, we still need to support boundary values set on
    // the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
    // controllers might still use it (e.g. the Smith chart).

    if (fill === 'start') {
      target = model.scaleBottom === undefined? scale.bottom : model.scaleBottom;
    } else if (fill === 'end') {
      target = model.scaleTop === undefined? scale.top : model.scaleTop;
    } else if (model.scaleZero !== undefined) {
      target = model.scaleZero;
    } else if (scale.getBasePosition) {
      target = scale.getBasePosition();
    } else if (scale.getBasePixel) {
      target = scale.getBasePixel();
    }

    if (target !== undefined && target !== null) {
      if (target.x !== undefined && target.y !== undefined) {
        return target;
      }

      if (typeof target === 'number' && isFinite(target)) {
        horizontal = scale.isHorizontal();
        return {
          x: horizontal? target : null,
          y: horizontal? null : target
        };
      }
    }

    return null;
  }

  function resolveTarget(sources, index, propagate) {
    var source = sources[index];
    var fill = source.fill;
    var visited = [index];
    var target;

    if (!propagate) {
      return fill;
    }

    while (fill !== false && visited.indexOf(fill) === -1) {
      if (!isFinite(fill)) {
        return fill;
      }

      target = sources[fill];
      if (!target) {
        return false;
      }

      if (target.visible) {
        return fill;
      }

      visited.push(fill);
      fill = target.fill;
    }

    return false;
  }

  function createMapper(source) {
    var fill = source.fill;
    var type = 'dataset';

    if (fill === false) {
      return null;
    }

    if (!isFinite(fill)) {
      type = 'boundary';
    }

    return mappers[type](source);
  }

  function isDrawable(point) {
    return point && !point.skip;
  }

  function drawArea(ctx, curve0, curve1, len0, len1) {
    var i;

    if (!len0 || !len1) {
      return;
    }

    // building first area curve (normal)
    ctx.moveTo(curve0[0].x, curve0[0].y);
    for (i=1; i<len0; ++i) {
      helpers.canvas.lineTo(ctx, curve0[i-1], curve0[i]);
    }

    // joining the two area curves
    ctx.lineTo(curve1[len1-1].x, curve1[len1-1].y);

    // building opposite area curve (reverse)
    for (i=len1-1; i>0; --i) {
      helpers.canvas.lineTo(ctx, curve1[i], curve1[i-1], true);
    }
  }

  function doFill(ctx, points, mapper, view, color, loop) {
    var count = points.length;
    var span = view.spanGaps;
    var curve0 = [];
    var curve1 = [];
    var len0 = 0;
    var len1 = 0;
    var i, ilen, index, p0, p1, d0, d1;

    ctx.beginPath();

    for (i = 0, ilen = (count + !!loop); i < ilen; ++i) {
      index = i%count;
      p0 = points[index]._view;
      p1 = mapper(p0, index, view);
      d0 = isDrawable(p0);
      d1 = isDrawable(p1);

      if (d0 && d1) {
        len0 = curve0.push(p0);
        len1 = curve1.push(p1);
      } else if (len0 && len1) {
        if (!span) {
          drawArea(ctx, curve0, curve1, len0, len1);
          len0 = len1 = 0;
          curve0 = [];
          curve1 = [];
        } else {
          if (d0) {
            curve0.push(p0);
          }
          if (d1) {
            curve1.push(p1);
          }
        }
      }
    }

    drawArea(ctx, curve0, curve1, len0, len1);

    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  return {
    id: 'filler',

    afterDatasetsUpdate: function(chart, options) {
      var count = (chart.data.datasets || []).length;
      var propagate = options.propagate;
      var sources = [];
      var meta, i, el, source;

      for (i = 0; i < count; ++i) {
        meta = chart.getDatasetMeta(i);
        el = meta.dataset;
        source = null;

        if (el && el._model && el instanceof Chart.elements.Line) {
          source = {
            visible: chart.isDatasetVisible(i),
            fill: decodeFill(el, i, count),
            chart: chart,
            el: el
          };
        }

        meta.$filler = source;
        sources.push(source);
      }

      for (i=0; i<count; ++i) {
        source = sources[i];
        if (!source) {
          continue;
        }

        source.fill = resolveTarget(sources, i, propagate);
        source.boundary = computeBoundary(source);
        source.mapper = createMapper(source);
      }
    },

    beforeDatasetDraw: function(chart, args) {
      var meta = args.meta.$filler;
      if (!meta) {
        return;
      }

      var el = meta.el;
      var view = el._view;
      var points = el._children || [];
      var mapper = meta.mapper;
      var color = view.backgroundColor || defaults.global.defaultColor;

      if (mapper && color && points.length) {
        doFill(chart.ctx, points, mapper, view, color, el._loop);
      }
    }
  };
};

},{}],42:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;
  var layout = Chart.layoutService;
  var noop = helpers.noop;

  Chart.defaults.global.legend = {
    display: true,
    position: 'top',
    fullWidth: true,
    reverse: false,
    weight: 1000,

    // a callback that will handle
    onClick: function(e, legendItem) {
      var index = legendItem.datasetIndex;
      var ci = this.chart;
      var meta = ci.getDatasetMeta(index);

      // See controller.isDatasetVisible comment
      meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;

      // We hid a dataset ... rerender the chart
      ci.update();
    },

    onHover: null,

    labels: {
      boxWidth: 40,
      padding: 10,
      // Generates labels shown in the legend
      // Valid properties to return:
      // text : text to display
      // fillStyle : fill of coloured box
      // strokeStyle: stroke of coloured box
      // hidden : if this legend item refers to a hidden item
      // lineCap : cap style for line
      // lineDash
      // lineDashOffset :
      // lineJoin :
      // lineWidth :
      generateLabels: function(chart) {
        var data = chart.data;
        return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
          return {
            text: dataset.label,
            fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
            hidden: !chart.isDatasetVisible(i),
            lineCap: dataset.borderCapStyle,
            lineDash: dataset.borderDash,
            lineDashOffset: dataset.borderDashOffset,
            lineJoin: dataset.borderJoinStyle,
            lineWidth: dataset.borderWidth,
            strokeStyle: dataset.borderColor,
            pointStyle: dataset.pointStyle,

            // Below is extra data used for toggling the datasets
            datasetIndex: i
          };
        }, this) : [];
      }
    }
  };

  /**
   * Helper function to get the box width based on the usePointStyle option
   * @param labelopts {Object} the label options on the legend
   * @param fontSize {Number} the label font size
   * @return {Number} width of the color box area
   */
  function getBoxWidth(labelOpts, fontSize) {
    return labelOpts.usePointStyle ?
      fontSize * Math.SQRT2 :
      labelOpts.boxWidth;
  }

  Chart.Legend = Chart.Element.extend({

    initialize: function(config) {
      helpers.extend(this, config);

      // Contains hit boxes for each dataset (in dataset order)
      this.legendHitBoxes = [];

      // Are we in doughnut mode which has a different data type
      this.doughnutMode = false;
    },

    // These methods are ordered by lifecycle. Utilities then follow.
    // Any function defined here is inherited by all legend types.
    // Any function can be extended by the legend type

    beforeUpdate: noop,
    update: function(maxWidth, maxHeight, margins) {
      var me = this;

      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();

      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins;

      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();
      // Labels
      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels();

      // Fit
      me.beforeFit();
      me.fit();
      me.afterFit();
      //
      me.afterUpdate();

      return me.minSize;
    },
    afterUpdate: noop,

    //

    beforeSetDimensions: noop,
    setDimensions: function() {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;

        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }

      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;

      // Reset minSize
      me.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: noop,

    //

    beforeBuildLabels: noop,
    buildLabels: function() {
      var me = this;
      var labelOpts = me.options.labels;
      var legendItems = labelOpts.generateLabels.call(me, me.chart);

      if (labelOpts.filter) {
        legendItems = legendItems.filter(function(item) {
          return labelOpts.filter(item, me.chart.data);
        });
      }

      if (me.options.reverse) {
        legendItems.reverse();
      }

      me.legendItems = legendItems;
    },
    afterBuildLabels: noop,

    //

    beforeFit: noop,
    fit: function() {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var display = opts.display;

      var ctx = me.ctx;

      var globalDefault = Chart.defaults.global,
        itemOrDefault = helpers.getValueOrDefault,
        fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
        fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
        fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
        labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

      // Reset hit boxes
      var hitboxes = me.legendHitBoxes = [];

      var minSize = me.minSize;
      var isHorizontal = me.isHorizontal();

      if (isHorizontal) {
        minSize.width = me.maxWidth; // fill all the width
        minSize.height = display ? 10 : 0;
      } else {
        minSize.width = display ? 10 : 0;
        minSize.height = me.maxHeight; // fill all the height
      }

      // Increase sizes here
      if (display) {
        ctx.font = labelFont;

        if (isHorizontal) {
          // Labels

          // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
          var lineWidths = me.lineWidths = [0];
          var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;

          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';

          helpers.each(me.legendItems, function(legendItem, i) {
            var boxWidth = getBoxWidth(labelOpts, fontSize);
            var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

            if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
              totalHeight += fontSize + (labelOpts.padding);
              lineWidths[lineWidths.length] = me.left;
            }

            // Store the hitbox width and height here. Final position will be updated in `draw`
            hitboxes[i] = {
              left: 0,
              top: 0,
              width: width,
              height: fontSize
            };

            lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
          });

          minSize.height += totalHeight;

        } else {
          var vPadding = labelOpts.padding;
          var columnWidths = me.columnWidths = [];
          var totalWidth = labelOpts.padding;
          var currentColWidth = 0;
          var currentColHeight = 0;
          var itemHeight = fontSize + vPadding;

          helpers.each(me.legendItems, function(legendItem, i) {
            var boxWidth = getBoxWidth(labelOpts, fontSize);
            var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

            // If too tall, go to new column
            if (currentColHeight + itemHeight > minSize.height) {
              totalWidth += currentColWidth + labelOpts.padding;
              columnWidths.push(currentColWidth); // previous column width

              currentColWidth = 0;
              currentColHeight = 0;
            }

            // Get max width
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight;

            // Store the hitbox width and height here. Final position will be updated in `draw`
            hitboxes[i] = {
              left: 0,
              top: 0,
              width: itemWidth,
              height: fontSize
            };
          });

          totalWidth += currentColWidth;
          columnWidths.push(currentColWidth);
          minSize.width += totalWidth;
        }
      }

      me.width = minSize.width;
      me.height = minSize.height;
    },
    afterFit: noop,

    // Shared Methods
    isHorizontal: function() {
      return this.options.position === 'top' || this.options.position === 'bottom';
    },

    // Actually draw the legend on the canvas
    draw: function() {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var globalDefault = Chart.defaults.global,
        lineDefault = globalDefault.elements.line,
        legendWidth = me.width,
        lineWidths = me.lineWidths;

      if (opts.display) {
        var ctx = me.ctx,
          cursor,
          itemOrDefault = helpers.getValueOrDefault,
          fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor),
          fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
          fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
          fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
          labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

        // Canvas setup
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = fontColor; // for strikethrough effect
        ctx.fillStyle = fontColor; // render in correct colour
        ctx.font = labelFont;

        var boxWidth = getBoxWidth(labelOpts, fontSize),
          hitboxes = me.legendHitBoxes;

        // current position
        var drawLegendBox = function(x, y, legendItem) {
          if (isNaN(boxWidth) || boxWidth <= 0) {
            return;
          }

          // Set the ctx for the box
          ctx.save();

          ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
          ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
          ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
          ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
          ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
          ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
          var isLineWidthZero = (itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);

          if (ctx.setLineDash) {
            // IE 9 and 10 do not support line dash
            ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash));
          }

          if (opts.labels && opts.labels.usePointStyle) {
            // Recalculate x and y for drawPoint() because its expecting
            // x and y to be center of figure (instead of top left)
            var radius = fontSize * Math.SQRT2 / 2;
            var offSet = radius / Math.SQRT2;
            var centerX = x + offSet;
            var centerY = y + offSet;

            // Draw pointStyle as legend symbol
            Chart.canvasHelpers.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
          } else {
            // Draw box as legend symbol
            if (!isLineWidthZero) {
              ctx.strokeRect(x, y, boxWidth, fontSize);
            }
            ctx.fillRect(x, y, boxWidth, fontSize);
          }

          ctx.restore();
        };
        var fillText = function(x, y, legendItem, textWidth) {
          ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y);

          if (legendItem.hidden) {
            // Strikethrough the text if hidden
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(boxWidth + (fontSize / 2) + x, y + (fontSize / 2));
            ctx.lineTo(boxWidth + (fontSize / 2) + x + textWidth, y + (fontSize / 2));
            ctx.stroke();
          }
        };

        // Horizontal
        var isHorizontal = me.isHorizontal();
        if (isHorizontal) {
          cursor = {
            x: me.left + ((legendWidth - lineWidths[0]) / 2),
            y: me.top + labelOpts.padding,
            line: 0
          };
        } else {
          cursor = {
            x: me.left + labelOpts.padding,
            y: me.top + labelOpts.padding,
            line: 0
          };
        }

        var itemHeight = fontSize + labelOpts.padding;
        helpers.each(me.legendItems, function(legendItem, i) {
          var textWidth = ctx.measureText(legendItem.text).width,
            width = boxWidth + (fontSize / 2) + textWidth,
            x = cursor.x,
            y = cursor.y;

          if (isHorizontal) {
            if (x + width >= legendWidth) {
              y = cursor.y += itemHeight;
              cursor.line++;
              x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
            }
          } else if (y + itemHeight > me.bottom) {
            x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
            y = cursor.y = me.top + labelOpts.padding;
            cursor.line++;
          }

          drawLegendBox(x, y, legendItem);

          hitboxes[i].left = x;
          hitboxes[i].top = y;

          // Fill the actual label
          fillText(x, y, legendItem, textWidth);

          if (isHorizontal) {
            cursor.x += width + (labelOpts.padding);
          } else {
            cursor.y += itemHeight;
          }

        });
      }
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     * @return {Boolean} true if a change occured
     */
    handleEvent: function(e) {
      var me = this;
      var opts = me.options;
      var type = e.type === 'mouseup' ? 'click' : e.type;
      var changed = false;

      if (type === 'mousemove') {
        if (!opts.onHover) {
          return;
        }
      } else if (type === 'click') {
        if (!opts.onClick) {
          return;
        }
      } else {
        return;
      }

      // Chart event already has relative position in it
      var x = e.x,
        y = e.y;

      if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
        // See if we are touching one of the dataset boxes
        var lh = me.legendHitBoxes;
        for (var i = 0; i < lh.length; ++i) {
          var hitBox = lh[i];

          if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
            // Touching an element
            if (type === 'click') {
              // use e.native for backwards compatibility
              opts.onClick.call(me, e.native, me.legendItems[i]);
              changed = true;
              break;
            } else if (type === 'mousemove') {
              // use e.native for backwards compatibility
              opts.onHover.call(me, e.native, me.legendItems[i]);
              changed = true;
              break;
            }
          }
        }
      }

      return changed;
    }
  });

  function createNewLegendAndAttach(chart, legendOpts) {
    var legend = new Chart.Legend({
      ctx: chart.ctx,
      options: legendOpts,
      chart: chart
    });

    layout.configure(chart, legend, legendOpts);
    layout.addBox(chart, legend);
    chart.legend = legend;
  }

  return {
    id: 'legend',

    beforeInit: function(chart) {
      var legendOpts = chart.options.legend;

      if (legendOpts) {
        createNewLegendAndAttach(chart, legendOpts);
      }
    },

    beforeUpdate: function(chart) {
      var legendOpts = chart.options.legend;
      var legend = chart.legend;

      if (legendOpts) {
        legendOpts = helpers.configMerge(Chart.defaults.global.legend, legendOpts);

        if (legend) {
          layout.configure(chart, legend, legendOpts);
          legend.options = legendOpts;
        } else {
          createNewLegendAndAttach(chart, legendOpts);
        }
      } else if (legend) {
        layout.removeBox(chart, legend);
        delete chart.legend;
      }
    },

    afterEvent: function(chart, e) {
      var legend = chart.legend;
      if (legend) {
        legend.handleEvent(e);
      }
    }
  };
};

},{}],43:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;
  var layout = Chart.layoutService;
  var noop = helpers.noop;

  Chart.defaults.global.title = {
    display: false,
    position: 'top',
    fullWidth: true,
    weight: 2000,        // by default greater than legend (1000) to be above
    fontStyle: 'bold',
    padding: 10,

    // actual title
    text: ''
  };

  Chart.Title = Chart.Element.extend({
    initialize: function(config) {
      var me = this;
      helpers.extend(me, config);

      // Contains hit boxes for each dataset (in dataset order)
      me.legendHitBoxes = [];
    },

    // These methods are ordered by lifecycle. Utilities then follow.

    beforeUpdate: noop,
    update: function(maxWidth, maxHeight, margins) {
      var me = this;

      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();

      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins;

      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();
      // Labels
      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels();

      // Fit
      me.beforeFit();
      me.fit();
      me.afterFit();
      //
      me.afterUpdate();

      return me.minSize;

    },
    afterUpdate: noop,

    //

    beforeSetDimensions: noop,
    setDimensions: function() {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;

        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }

      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;

      // Reset minSize
      me.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: noop,

    //

    beforeBuildLabels: noop,
    buildLabels: noop,
    afterBuildLabels: noop,

    //

    beforeFit: noop,
    fit: function() {
      var me = this,
        valueOrDefault = helpers.getValueOrDefault,
        opts = me.options,
        globalDefaults = Chart.defaults.global,
        display = opts.display,
        fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
        minSize = me.minSize;

      if (me.isHorizontal()) {
        minSize.width = me.maxWidth; // fill all the width
        minSize.height = display ? fontSize + (opts.padding * 2) : 0;
      } else {
        minSize.width = display ? fontSize + (opts.padding * 2) : 0;
        minSize.height = me.maxHeight; // fill all the height
      }

      me.width = minSize.width;
      me.height = minSize.height;

    },
    afterFit: noop,

    // Shared Methods
    isHorizontal: function() {
      var pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    },

    // Actually draw the title block on the canvas
    draw: function() {
      var me = this,
        ctx = me.ctx,
        valueOrDefault = helpers.getValueOrDefault,
        opts = me.options,
        globalDefaults = Chart.defaults.global;

      if (opts.display) {
        var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
          fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle),
          fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily),
          titleFont = helpers.fontString(fontSize, fontStyle, fontFamily),
          rotation = 0,
          titleX,
          titleY,
          top = me.top,
          left = me.left,
          bottom = me.bottom,
          right = me.right,
          maxWidth;

        ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
        ctx.font = titleFont;

        // Horizontal
        if (me.isHorizontal()) {
          titleX = left + ((right - left) / 2); // midpoint of the width
          titleY = top + ((bottom - top) / 2); // midpoint of the height
          maxWidth = right - left;
        } else {
          titleX = opts.position === 'left' ? left + (fontSize / 2) : right - (fontSize / 2);
          titleY = top + ((bottom - top) / 2);
          maxWidth = bottom - top;
          rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
        }

        ctx.save();
        ctx.translate(titleX, titleY);
        ctx.rotate(rotation);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(opts.text, 0, 0, maxWidth);
        ctx.restore();
      }
    }
  });

  function createNewTitleBlockAndAttach(chart, titleOpts) {
    var title = new Chart.Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart: chart
    });

    layout.configure(chart, title, titleOpts);
    layout.addBox(chart, title);
    chart.titleBlock = title;
  }

  return {
    id: 'title',

    beforeInit: function(chart) {
      var titleOpts = chart.options.title;

      if (titleOpts) {
        createNewTitleBlockAndAttach(chart, titleOpts);
      }
    },

    beforeUpdate: function(chart) {
      var titleOpts = chart.options.title;
      var titleBlock = chart.titleBlock;

      if (titleOpts) {
        titleOpts = helpers.configMerge(Chart.defaults.global.title, titleOpts);

        if (titleBlock) {
          layout.configure(chart, titleBlock, titleOpts);
          titleBlock.options = titleOpts;
        } else {
          createNewTitleBlockAndAttach(chart, titleOpts);
        }
      } else if (titleBlock) {
        Chart.layoutService.removeBox(chart, titleBlock);
        delete chart.titleBlock;
      }
    }
  };
};

},{}],44:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;
  // Default config for a category scale
  var defaultConfig = {
    position: 'bottom'
  };

  var DatasetScale = Chart.Scale.extend({
    /**
    * Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
    * else fall back to data.labels
    * @private
    */
    getLabels: function() {
      var data = this.chart.data;
      return (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
    },

    determineDataLimits: function() {
      var me = this;
      var labels = me.getLabels();
      me.minIndex = 0;
      me.maxIndex = labels.length - 1;
      var findIndex;

      if (me.options.ticks.min !== undefined) {
        // user specified min value
        findIndex = helpers.indexOf(labels, me.options.ticks.min);
        me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
      }

      if (me.options.ticks.max !== undefined) {
        // user specified max value
        findIndex = helpers.indexOf(labels, me.options.ticks.max);
        me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
      }

      me.min = labels[me.minIndex];
      me.max = labels[me.maxIndex];
    },

    buildTicks: function() {
      var me = this;
      var labels = me.getLabels();
      // If we are viewing some subset of labels, slice the original array
      me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
    },

    getLabelForIndex: function(index, datasetIndex) {
      var me = this;
      var data = me.chart.data;
      var isHorizontal = me.isHorizontal();

      if (data.yLabels && !isHorizontal) {
        return me.getRightValue(data.datasets[datasetIndex].data[index]);
      }
      return me.ticks[index - me.minIndex];
    },

    // Used to get data value locations.  Value can either be an index or a numerical value
    getPixelForValue: function(value, index, datasetIndex, includeOffset) {
      var me = this;
      // 1 is added because we need the length but we have the indexes
      var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);

      // If value is a data object, then index is the index in the data array,
      // not the index of the scale. We need to change that.
      var valueCategory;
      if (value !== undefined && value !== null) {
        valueCategory = me.isHorizontal() ? value.x : value.y;
      }
      if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
        var labels = me.getLabels();
        value = valueCategory || value;
        var idx = labels.indexOf(value);
        index = idx !== -1 ? idx : index;
      }

      if (me.isHorizontal()) {
        var valueWidth = me.width / offsetAmt;
        var widthOffset = (valueWidth * (index - me.minIndex));

        if (me.options.gridLines.offsetGridLines && includeOffset || me.maxIndex === me.minIndex && includeOffset) {
          widthOffset += (valueWidth / 2);
        }

        return me.left + Math.round(widthOffset);
      }
      var valueHeight = me.height / offsetAmt;
      var heightOffset = (valueHeight * (index - me.minIndex));

      if (me.options.gridLines.offsetGridLines && includeOffset) {
        heightOffset += (valueHeight / 2);
      }

      return me.top + Math.round(heightOffset);
    },
    getPixelForTick: function(index, includeOffset) {
      return this.getPixelForValue(this.ticks[index], index + this.minIndex, null, includeOffset);
    },
    getValueForPixel: function(pixel) {
      var me = this;
      var value;
      var offsetAmt = Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
      var horz = me.isHorizontal();
      var valueDimension = (horz ? me.width : me.height) / offsetAmt;

      pixel -= horz ? me.left : me.top;

      if (me.options.gridLines.offsetGridLines) {
        pixel -= (valueDimension / 2);
      }

      if (pixel <= 0) {
        value = 0;
      } else {
        value = Math.round(pixel / valueDimension);
      }

      return value;
    },
    getBasePixel: function() {
      return this.bottom;
    }
  });

  Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);

};

},{}],45:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  var defaultConfig = {
    position: 'left',
    ticks: {
      callback: Chart.Ticks.formatters.linear
    }
  };

  var LinearScale = Chart.LinearScaleBase.extend({

    determineDataLimits: function() {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var data = chart.data;
      var datasets = data.datasets;
      var isHorizontal = me.isHorizontal();
      var DEFAULT_MIN = 0;
      var DEFAULT_MAX = 1;

      function IDMatches(meta) {
        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
      }

      // First Calculate the range
      me.min = null;
      me.max = null;

      var hasStacks = opts.stacked;
      if (hasStacks === undefined) {
        helpers.each(datasets, function(dataset, datasetIndex) {
          if (hasStacks) {
            return;
          }

          var meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
            meta.stack !== undefined) {
            hasStacks = true;
          }
        });
      }

      if (opts.stacked || hasStacks) {
        var valuesPerStack = {};

        helpers.each(datasets, function(dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          var key = [
            meta.type,
            // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
            ((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
            meta.stack
          ].join('.');

          if (valuesPerStack[key] === undefined) {
            valuesPerStack[key] = {
              positiveValues: [],
              negativeValues: []
            };
          }

          // Store these per type
          var positiveValues = valuesPerStack[key].positiveValues;
          var negativeValues = valuesPerStack[key].negativeValues;

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            helpers.each(dataset.data, function(rawValue, index) {
              var value = +me.getRightValue(rawValue);
              if (isNaN(value) || meta.data[index].hidden) {
                return;
              }

              positiveValues[index] = positiveValues[index] || 0;
              negativeValues[index] = negativeValues[index] || 0;

              if (opts.relativePoints) {
                positiveValues[index] = 100;
              } else if (value < 0) {
                negativeValues[index] += value;
              } else {
                positiveValues[index] += value;
              }
            });
          }
        });

        helpers.each(valuesPerStack, function(valuesForType) {
          var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
          var minVal = helpers.min(values);
          var maxVal = helpers.max(values);
          me.min = me.min === null ? minVal : Math.min(me.min, minVal);
          me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
        });

      } else {
        helpers.each(datasets, function(dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            helpers.each(dataset.data, function(rawValue, index) {
              var value = +me.getRightValue(rawValue);
              if (isNaN(value) || meta.data[index].hidden) {
                return;
              }

              if (me.min === null) {
                me.min = value;
              } else if (value < me.min) {
                me.min = value;
              }

              if (me.max === null) {
                me.max = value;
              } else if (value > me.max) {
                me.max = value;
              }
            });
          }
        });
      }

      me.min = isFinite(me.min) ? me.min : DEFAULT_MIN;
      me.max = isFinite(me.max) ? me.max : DEFAULT_MAX;

      // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
      this.handleTickRangeOptions();
    },
    getTickLimit: function() {
      var maxTicks;
      var me = this;
      var tickOpts = me.options.ticks;

      if (me.isHorizontal()) {
        maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
      } else {
        // The factor of 2 used to scale the font size has been experimentally determined.
        var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, Chart.defaults.global.defaultFontSize);
        maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
      }

      return maxTicks;
    },
    // Called after the ticks are built. We need
    handleDirectionalChanges: function() {
      if (!this.isHorizontal()) {
        // We are in a vertical orientation. The top value is the highest. So reverse the array
        this.ticks.reverse();
      }
    },
    getLabelForIndex: function(index, datasetIndex) {
      return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
    },
    // Utils
    getPixelForValue: function(value) {
      // This must be called after fit has been run so that
      // this.left, this.top, this.right, and this.bottom have been defined
      var me = this;
      var start = me.start;

      var rightValue = +me.getRightValue(value);
      var pixel;
      var range = me.end - start;

      if (me.isHorizontal()) {
        pixel = me.left + (me.width / range * (rightValue - start));
        return Math.round(pixel);
      }

      pixel = me.bottom - (me.height / range * (rightValue - start));
      return Math.round(pixel);
    },
    getValueForPixel: function(pixel) {
      var me = this;
      var isHorizontal = me.isHorizontal();
      var innerDimension = isHorizontal ? me.width : me.height;
      var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
      return me.start + ((me.end - me.start) * offset);
    },
    getPixelForTick: function(index) {
      return this.getPixelForValue(this.ticksAsNumbers[index]);
    }
  });
  Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);

};

},{}],46:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers,
    noop = helpers.noop;

  Chart.LinearScaleBase = Chart.Scale.extend({
    handleTickRangeOptions: function() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;

      // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
      // do nothing since that would make the chart weird. If the user really wants a weird chart
      // axis, they can manually override it
      if (tickOpts.beginAtZero) {
        var minSign = helpers.sign(me.min);
        var maxSign = helpers.sign(me.max);

        if (minSign < 0 && maxSign < 0) {
          // move the top up to 0
          me.max = 0;
        } else if (minSign > 0 && maxSign > 0) {
          // move the bottom down to 0
          me.min = 0;
        }
      }

      if (tickOpts.min !== undefined) {
        me.min = tickOpts.min;
      } else if (tickOpts.suggestedMin !== undefined) {
        if (me.min === null) {
          me.min = tickOpts.suggestedMin;
        } else {
          me.min = Math.min(me.min, tickOpts.suggestedMin);
        }
      }

      if (tickOpts.max !== undefined) {
        me.max = tickOpts.max;
      } else if (tickOpts.suggestedMax !== undefined) {
        if (me.max === null) {
          me.max = tickOpts.suggestedMax;
        } else {
          me.max = Math.max(me.max, tickOpts.suggestedMax);
        }
      }

      if (me.min === me.max) {
        me.max++;

        if (!tickOpts.beginAtZero) {
          me.min--;
        }
      }
    },
    getTickLimit: noop,
    handleDirectionalChanges: noop,

    buildTicks: function() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;

      // Figure out what the max number of ticks we can support it is based on the size of
      // the axis area. For now, we say that the minimum tick spacing in pixels must be 50
      // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
      // the graph. Make sure we always have at least 2 ticks
      var maxTicks = me.getTickLimit();
      maxTicks = Math.max(2, maxTicks);

      var numericGeneratorOptions = {
        maxTicks: maxTicks,
        min: tickOpts.min,
        max: tickOpts.max,
        stepSize: helpers.getValueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
      };
      var ticks = me.ticks = Chart.Ticks.generators.linear(numericGeneratorOptions, me);

      me.handleDirectionalChanges();

      // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale
      me.max = helpers.max(ticks);
      me.min = helpers.min(ticks);

      if (tickOpts.reverse) {
        ticks.reverse();

        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }
    },
    convertTicksToLabels: function() {
      var me = this;
      me.ticksAsNumbers = me.ticks.slice();
      me.zeroLineIndex = me.ticks.indexOf(0);

      Chart.Scale.prototype.convertTicksToLabels.call(me);
    }
  });
};

},{}],47:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  var defaultConfig = {
    position: 'left',

    // label settings
    ticks: {
      callback: Chart.Ticks.formatters.logarithmic
    }
  };

  var LogarithmicScale = Chart.Scale.extend({
    determineDataLimits: function() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;
      var chart = me.chart;
      var data = chart.data;
      var datasets = data.datasets;
      var getValueOrDefault = helpers.getValueOrDefault;
      var isHorizontal = me.isHorizontal();
      function IDMatches(meta) {
        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
      }

      // Calculate Range
      me.min = null;
      me.max = null;
      me.minNotZero = null;

      var hasStacks = opts.stacked;
      if (hasStacks === undefined) {
        helpers.each(datasets, function(dataset, datasetIndex) {
          if (hasStacks) {
            return;
          }

          var meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
            meta.stack !== undefined) {
            hasStacks = true;
          }
        });
      }

      if (opts.stacked || hasStacks) {
        var valuesPerStack = {};

        helpers.each(datasets, function(dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          var key = [
            meta.type,
            // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
            ((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
            meta.stack
          ].join('.');

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            if (valuesPerStack[key] === undefined) {
              valuesPerStack[key] = [];
            }

            helpers.each(dataset.data, function(rawValue, index) {
              var values = valuesPerStack[key];
              var value = +me.getRightValue(rawValue);
              if (isNaN(value) || meta.data[index].hidden) {
                return;
              }

              values[index] = values[index] || 0;

              if (opts.relativePoints) {
                values[index] = 100;
              } else {
                // Don't need to split positive and negative since the log scale can't handle a 0 crossing
                values[index] += value;
              }
            });
          }
        });

        helpers.each(valuesPerStack, function(valuesForType) {
          var minVal = helpers.min(valuesForType);
          var maxVal = helpers.max(valuesForType);
          me.min = me.min === null ? minVal : Math.min(me.min, minVal);
          me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
        });

      } else {
        helpers.each(datasets, function(dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            helpers.each(dataset.data, function(rawValue, index) {
              var value = +me.getRightValue(rawValue);
              if (isNaN(value) || meta.data[index].hidden) {
                return;
              }

              if (me.min === null) {
                me.min = value;
              } else if (value < me.min) {
                me.min = value;
              }

              if (me.max === null) {
                me.max = value;
              } else if (value > me.max) {
                me.max = value;
              }

              if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
                me.minNotZero = value;
              }
            });
          }
        });
      }

      me.min = getValueOrDefault(tickOpts.min, me.min);
      me.max = getValueOrDefault(tickOpts.max, me.max);

      if (me.min === me.max) {
        if (me.min !== 0 && me.min !== null) {
          me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
          me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
        } else {
          me.min = 1;
          me.max = 10;
        }
      }
    },
    buildTicks: function() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;

      var generationOptions = {
        min: tickOpts.min,
        max: tickOpts.max
      };
      var ticks = me.ticks = Chart.Ticks.generators.logarithmic(generationOptions, me);

      if (!me.isHorizontal()) {
        // We are in a vertical orientation. The top value is the highest. So reverse the array
        ticks.reverse();
      }

      // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale
      me.max = helpers.max(ticks);
      me.min = helpers.min(ticks);

      if (tickOpts.reverse) {
        ticks.reverse();

        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }
    },
    convertTicksToLabels: function() {
      this.tickValues = this.ticks.slice();

      Chart.Scale.prototype.convertTicksToLabels.call(this);
    },
    // Get the correct tooltip label
    getLabelForIndex: function(index, datasetIndex) {
      return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
    },
    getPixelForTick: function(index) {
      return this.getPixelForValue(this.tickValues[index]);
    },
    getPixelForValue: function(value) {
      var me = this;
      var innerDimension;
      var pixel;

      var start = me.start;
      var newVal = +me.getRightValue(value);
      var range;
      var opts = me.options;
      var tickOpts = opts.ticks;

      if (me.isHorizontal()) {
        range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
        if (newVal === 0) {
          pixel = me.left;
        } else {
          innerDimension = me.width;
          pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
        }
      } else {
        // Bottom - top since pixels increase downward on a screen
        innerDimension = me.height;
        if (start === 0 && !tickOpts.reverse) {
          range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
          if (newVal === start) {
            pixel = me.bottom;
          } else if (newVal === me.minNotZero) {
            pixel = me.bottom - innerDimension * 0.02;
          } else {
            pixel = me.bottom - innerDimension * 0.02 - (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
          }
        } else if (me.end === 0 && tickOpts.reverse) {
          range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
          if (newVal === me.end) {
            pixel = me.top;
          } else if (newVal === me.minNotZero) {
            pixel = me.top + innerDimension * 0.02;
          } else {
            pixel = me.top + innerDimension * 0.02 + (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
          }
        } else if (newVal === 0) {
          pixel = tickOpts.reverse ? me.top : me.bottom;
        } else {
          range = helpers.log10(me.end) - helpers.log10(start);
          innerDimension = me.height;
          pixel = me.bottom - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
        }
      }
      return pixel;
    },
    getValueForPixel: function(pixel) {
      var me = this;
      var range = helpers.log10(me.end) - helpers.log10(me.start);
      var value, innerDimension;

      if (me.isHorizontal()) {
        innerDimension = me.width;
        value = me.start * Math.pow(10, (pixel - me.left) * range / innerDimension);
      } else {  // todo: if start === 0
        innerDimension = me.height;
        value = Math.pow(10, (me.bottom - pixel) * range / innerDimension) / me.start;
      }
      return value;
    }
  });
  Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);

};

},{}],48:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

  var helpers = Chart.helpers;
  var globalDefaults = Chart.defaults.global;

  var defaultConfig = {
    display: true,

    // Boolean - Whether to animate scaling the chart from the centre
    animate: true,
    position: 'chartArea',

    angleLines: {
      display: true,
      color: 'rgba(0, 0, 0, 0.1)',
      lineWidth: 1
    },

    gridLines: {
      circular: false
    },

    // label settings
    ticks: {
      // Boolean - Show a backdrop to the scale label
      showLabelBackdrop: true,

      // String - The colour of the label backdrop
      backdropColor: 'rgba(255,255,255,0.75)',

      // Number - The backdrop padding above & below the label in pixels
      backdropPaddingY: 2,

      // Number - The backdrop padding to the side of the label in pixels
      backdropPaddingX: 2,

      callback: Chart.Ticks.formatters.linear
    },

    pointLabels: {
      // Boolean - if true, show point labels
      display: true,

      // Number - Point label font size in pixels
      fontSize: 10,

      // Function - Used to convert point labels
      callback: function(label) {
        return label;
      }
    }
  };

  function getValueCount(scale) {
    var opts = scale.options;
    return opts.angleLines.display || opts.pointLabels.display ? scale.chart.data.labels.length : 0;
  }

  function getPointLabelFontOptions(scale) {
    var pointLabelOptions = scale.options.pointLabels;
    var fontSize = helpers.getValueOrDefault(pointLabelOptions.fontSize, globalDefaults.defaultFontSize);
    var fontStyle = helpers.getValueOrDefault(pointLabelOptions.fontStyle, globalDefaults.defaultFontStyle);
    var fontFamily = helpers.getValueOrDefault(pointLabelOptions.fontFamily, globalDefaults.defaultFontFamily);
    var font = helpers.fontString(fontSize, fontStyle, fontFamily);

    return {
      size: fontSize,
      style: fontStyle,
      family: fontFamily,
      font: font
    };
  }

  function measureLabelSize(ctx, fontSize, label) {
    if (helpers.isArray(label)) {
      return {
        w: helpers.longestText(ctx, ctx.font, label),
        h: (label.length * fontSize) + ((label.length - 1) * 1.5 * fontSize)
      };
    }

    return {
      w: ctx.measureText(label).width,
      h: fontSize
    };
  }

  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - (size / 2),
        end: pos + (size / 2)
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size - 5,
        end: pos
      };
    }

    return {
      start: pos,
      end: pos + size + 5
    };
  }

  /**
   * Helper function to fit a radial linear scale with point labels
   */
  function fitWithPointLabels(scale) {
    /*
     * Right, this is really confusing and there is a lot of maths going on here
     * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
     *
     * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
     *
     * Solution:
     *
     * We assume the radius of the polygon is half the size of the canvas at first
     * at each index we check if the text overlaps.
     *
     * Where it does, we store that angle and that index.
     *
     * After finding the largest index and angle we calculate how much we need to remove
     * from the shape radius to move the point inwards by that x.
     *
     * We average the left and right distances to get the maximum shape radius that can fit in the box
     * along with labels.
     *
     * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
     * on each side, removing that from the size, halving it and adding the left x protrusion width.
     *
     * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
     * and position it in the most space efficient manner
     *
     * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
     */

    var plFont = getPointLabelFontOptions(scale);

    // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
    // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
    var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
    var furthestLimits = {
      r: scale.width,
      l: 0,
      t: scale.height,
      b: 0
    };
    var furthestAngles = {};
    var i;
    var textSize;
    var pointPosition;

    scale.ctx.font = plFont.font;
    scale._pointLabelSizes = [];

    var valueCount = getValueCount(scale);
    for (i = 0; i < valueCount; i++) {
      pointPosition = scale.getPointPosition(i, largestPossibleRadius);
      textSize = measureLabelSize(scale.ctx, plFont.size, scale.pointLabels[i] || '');
      scale._pointLabelSizes[i] = textSize;

      // Add quarter circle to make degree 0 mean top of circle
      var angleRadians = scale.getIndexAngle(i);
      var angle = helpers.toDegrees(angleRadians) % 360;
      var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

      if (hLimits.start < furthestLimits.l) {
        furthestLimits.l = hLimits.start;
        furthestAngles.l = angleRadians;
      }

      if (hLimits.end > furthestLimits.r) {
        furthestLimits.r = hLimits.end;
        furthestAngles.r = angleRadians;
      }

      if (vLimits.start < furthestLimits.t) {
        furthestLimits.t = vLimits.start;
        furthestAngles.t = angleRadians;
      }

      if (vLimits.end > furthestLimits.b) {
        furthestLimits.b = vLimits.end;
        furthestAngles.b = angleRadians;
      }
    }

    scale.setReductions(largestPossibleRadius, furthestLimits, furthestAngles);
  }

  /**
   * Helper function to fit a radial linear scale with no point labels
   */
  function fit(scale) {
    var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
    scale.drawingArea = Math.round(largestPossibleRadius);
    scale.setCenterPoint(0, 0, 0, 0);
  }

  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return 'center';
    } else if (angle < 180) {
      return 'left';
    }

    return 'right';
  }

  function fillText(ctx, text, position, fontSize) {
    if (helpers.isArray(text)) {
      var y = position.y;
      var spacing = 1.5 * fontSize;

      for (var i = 0; i < text.length; ++i) {
        ctx.fillText(text[i], position.x, y);
        y+= spacing;
      }
    } else {
      ctx.fillText(text, position.x, position.y);
    }
  }

  function adjustPointPositionForLabelHeight(angle, textSize, position) {
    if (angle === 90 || angle === 270) {
      position.y -= (textSize.h / 2);
    } else if (angle > 270 || angle < 90) {
      position.y -= textSize.h;
    }
  }

  function drawPointLabels(scale) {
    var ctx = scale.ctx;
    var getValueOrDefault = helpers.getValueOrDefault;
    var opts = scale.options;
    var angleLineOpts = opts.angleLines;
    var pointLabelOpts = opts.pointLabels;

    ctx.lineWidth = angleLineOpts.lineWidth;
    ctx.strokeStyle = angleLineOpts.color;

    var outerDistance = scale.getDistanceFromCenterForValue(opts.reverse ? scale.min : scale.max);

    // Point Label Font
    var plFont = getPointLabelFontOptions(scale);

    ctx.textBaseline = 'top';

    for (var i = getValueCount(scale) - 1; i >= 0; i--) {
      if (angleLineOpts.display) {
        var outerPosition = scale.getPointPosition(i, outerDistance);
        ctx.beginPath();
        ctx.moveTo(scale.xCenter, scale.yCenter);
        ctx.lineTo(outerPosition.x, outerPosition.y);
        ctx.stroke();
        ctx.closePath();
      }

      if (pointLabelOpts.display) {
        // Extra 3px out for some label spacing
        var pointLabelPosition = scale.getPointPosition(i, outerDistance + 5);

        // Keep this in loop since we may support array properties here
        var pointLabelFontColor = getValueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
        ctx.font = plFont.font;
        ctx.fillStyle = pointLabelFontColor;

        var angleRadians = scale.getIndexAngle(i);
        var angle = helpers.toDegrees(angleRadians);
        ctx.textAlign = getTextAlignForAngle(angle);
        adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
        fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.size);
      }
    }
  }

  function drawRadiusLine(scale, gridLineOpts, radius, index) {
    var ctx = scale.ctx;
    ctx.strokeStyle = helpers.getValueAtIndexOrDefault(gridLineOpts.color, index - 1);
    ctx.lineWidth = helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);

    if (scale.options.gridLines.circular) {
      // Draw circular arcs between the points
      ctx.beginPath();
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
    } else {
      // Draw straight lines connecting each index
      var valueCount = getValueCount(scale);

      if (valueCount === 0) {
        return;
      }

      ctx.beginPath();
      var pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);

      for (var i = 1; i < valueCount; i++) {
        pointPosition = scale.getPointPosition(i, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }

      ctx.closePath();
      ctx.stroke();
    }
  }

  function numberOrZero(param) {
    return helpers.isNumber(param) ? param : 0;
  }

  var LinearRadialScale = Chart.LinearScaleBase.extend({
    setDimensions: function() {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;
      // Set the unconstrained dimension before label rotation
      me.width = me.maxWidth;
      me.height = me.maxHeight;
      me.xCenter = Math.round(me.width / 2);
      me.yCenter = Math.round(me.height / 2);

      var minSize = helpers.min([me.height, me.width]);
      var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
      me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
    },
    determineDataLimits: function() {
      var me = this;
      var chart = me.chart;
      var min = Number.POSITIVE_INFINITY;
      var max = Number.NEGATIVE_INFINITY;

      helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
        if (chart.isDatasetVisible(datasetIndex)) {
          var meta = chart.getDatasetMeta(datasetIndex);

          helpers.each(dataset.data, function(rawValue, index) {
            var value = +me.getRightValue(rawValue);
            if (isNaN(value) || meta.data[index].hidden) {
              return;
            }

            min = Math.min(value, min);
            max = Math.max(value, max);
          });
        }
      });

      me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
      me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

      // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
      me.handleTickRangeOptions();
    },
    getTickLimit: function() {
      var tickOpts = this.options.ticks;
      var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
      return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
    },
    convertTicksToLabels: function() {
      var me = this;
      Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);

      // Point labels
      me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
    },
    getLabelForIndex: function(index, datasetIndex) {
      return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
    },
    fit: function() {
      if (this.options.pointLabels.display) {
        fitWithPointLabels(this);
      } else {
        fit(this);
      }
    },
    /**
     * Set radius reductions and determine new radius and center point
     * @private
     */
    setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
      var me = this;
      var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
      var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
      var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
      var radiusReductionBottom = -Math.max(furthestLimits.b - me.height, 0) / Math.cos(furthestAngles.b);

      radiusReductionLeft = numberOrZero(radiusReductionLeft);
      radiusReductionRight = numberOrZero(radiusReductionRight);
      radiusReductionTop = numberOrZero(radiusReductionTop);
      radiusReductionBottom = numberOrZero(radiusReductionBottom);

      me.drawingArea = Math.min(
        Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
        Math.round(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
      me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
    },
    setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
      var me = this;
      var maxRight = me.width - rightMovement - me.drawingArea,
        maxLeft = leftMovement + me.drawingArea,
        maxTop = topMovement + me.drawingArea,
        maxBottom = me.height - bottomMovement - me.drawingArea;

      me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
      me.yCenter = Math.round(((maxTop + maxBottom) / 2) + me.top);
    },

    getIndexAngle: function(index) {
      var angleMultiplier = (Math.PI * 2) / getValueCount(this);
      var startAngle = this.chart.options && this.chart.options.startAngle ?
        this.chart.options.startAngle :
        0;

      var startAngleRadians = startAngle * Math.PI * 2 / 360;

      // Start from the top instead of right, so remove a quarter of the circle
      return index * angleMultiplier + startAngleRadians;
    },
    getDistanceFromCenterForValue: function(value) {
      var me = this;

      if (value === null) {
        return 0; // null always in center
      }

      // Take into account half font size + the yPadding of the top value
      var scalingFactor = me.drawingArea / (me.max - me.min);
      if (me.options.reverse) {
        return (me.max - value) * scalingFactor;
      }
      return (value - me.min) * scalingFactor;
    },
    getPointPosition: function(index, distanceFromCenter) {
      var me = this;
      var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
      return {
        x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
        y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
      };
    },
    getPointPositionForValue: function(index, value) {
      return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    },

    getBasePosition: function() {
      var me = this;
      var min = me.min;
      var max = me.max;

      return me.getPointPositionForValue(0,
        me.beginAtZero? 0:
        min < 0 && max < 0? max :
        min > 0 && max > 0? min :
        0);
    },

    draw: function() {
      var me = this;
      var opts = me.options;
      var gridLineOpts = opts.gridLines;
      var tickOpts = opts.ticks;
      var getValueOrDefault = helpers.getValueOrDefault;

      if (opts.display) {
        var ctx = me.ctx;

        // Tick Font
        var tickFontSize = getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
        var tickFontStyle = getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
        var tickFontFamily = getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
        var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

        helpers.each(me.ticks, function(label, index) {
          // Don't draw a centre value (if it is minimum)
          if (index > 0 || opts.reverse) {
            var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
            var yHeight = me.yCenter - yCenterOffset;

            // Draw circular lines around the scale
            if (gridLineOpts.display && index !== 0) {
              drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
            }

            if (tickOpts.display) {
              var tickFontColor = getValueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
              ctx.font = tickLabelFont;

              if (tickOpts.showLabelBackdrop) {
                var labelWidth = ctx.measureText(label).width;
                ctx.fillStyle = tickOpts.backdropColor;
                ctx.fillRect(
                  me.xCenter - labelWidth / 2 - tickOpts.backdropPaddingX,
                  yHeight - tickFontSize / 2 - tickOpts.backdropPaddingY,
                  labelWidth + tickOpts.backdropPaddingX * 2,
                  tickFontSize + tickOpts.backdropPaddingY * 2
                );
              }

              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = tickFontColor;
              ctx.fillText(label, me.xCenter, yHeight);
            }
          }
        });

        if (opts.angleLines.display || opts.pointLabels.display) {
          drawPointLabels(me);
        }
      }
    }
  });
  Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);

};

},{}],49:[function(require,module,exports){
/* global window: false */
'use strict';

var moment = require(1);
moment = typeof(moment) === 'function' ? moment : window.moment;

module.exports = function(Chart) {

  var helpers = Chart.helpers;
  var interval = {
    millisecond: {
      size: 1,
      steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
    },
    second: {
      size: 1000,
      steps: [1, 2, 5, 10, 30]
    },
    minute: {
      size: 60000,
      steps: [1, 2, 5, 10, 30]
    },
    hour: {
      size: 3600000,
      steps: [1, 2, 3, 6, 12]
    },
    day: {
      size: 86400000,
      steps: [1, 2, 5]
    },
    week: {
      size: 604800000,
      maxStep: 4
    },
    month: {
      size: 2.628e9,
      maxStep: 3
    },
    quarter: {
      size: 7.884e9,
      maxStep: 4
    },
    year: {
      size: 3.154e10,
      maxStep: false
    }
  };

  var defaultConfig = {
    position: 'bottom',

    time: {
      parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
      format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
      unit: false, // false == automatic or override with week, month, year, etc.
      round: false, // none, or override with week, month, year, etc.
      displayFormat: false, // DEPRECATED
      isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
      minUnit: 'millisecond',

      // defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
      displayFormats: {
        millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
        second: 'h:mm:ss a', // 11:20:01 AM
        minute: 'h:mm:ss a', // 11:20:01 AM
        hour: 'MMM D, hA', // Sept 4, 5PM
        day: 'll', // Sep 4 2015
        week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
        month: 'MMM YYYY', // Sept 2015
        quarter: '[Q]Q - YYYY', // Q3
        year: 'YYYY' // 2015
      },
    },
    ticks: {
      autoSkip: false
    }
  };

  /**
   * Helper function to parse time to a moment object
   * @param axis {TimeAxis} the time axis
   * @param label {Date|string|number|Moment} The thing to parse
   * @return {Moment} parsed time
   */
  function parseTime(axis, label) {
    var timeOpts = axis.options.time;
    if (typeof timeOpts.parser === 'string') {
      return moment(label, timeOpts.parser);
    }
    if (typeof timeOpts.parser === 'function') {
      return timeOpts.parser(label);
    }
    if (typeof label.getMonth === 'function' || typeof label === 'number') {
      // Date objects
      return moment(label);
    }
    if (label.isValid && label.isValid()) {
      // Moment support
      return label;
    }
    var format = timeOpts.format;
    if (typeof format !== 'string' && format.call) {
      // Custom parsing (return an instance of moment)
      console.warn('options.time.format is deprecated and replaced by options.time.parser.');
      return format(label);
    }
    // Moment format parsing
    return moment(label, format);
  }

  /**
   * Figure out which is the best unit for the scale
   * @param minUnit {String} minimum unit to use
   * @param min {Number} scale minimum
   * @param max {Number} scale maximum
   * @return {String} the unit to use
   */
  function determineUnit(minUnit, min, max, maxTicks) {
    var units = Object.keys(interval);
    var unit;
    var numUnits = units.length;

    for (var i = units.indexOf(minUnit); i < numUnits; i++) {
      unit = units[i];
      var unitDetails = interval[unit];
      var steps = (unitDetails.steps && unitDetails.steps[unitDetails.steps.length - 1]) || unitDetails.maxStep;
      if (steps === undefined || Math.ceil((max - min) / (steps * unitDetails.size)) <= maxTicks) {
        break;
      }
    }

    return unit;
  }

  /**
   * Determines how we scale the unit
   * @param min {Number} the scale minimum
   * @param max {Number} the scale maximum
   * @param unit {String} the unit determined by the {@see determineUnit} method
   * @return {Number} the axis step size as a multiple of unit
   */
  function determineStepSize(min, max, unit, maxTicks) {
    // Using our unit, figoure out what we need to scale as
    var unitDefinition = interval[unit];
    var unitSizeInMilliSeconds = unitDefinition.size;
    var sizeInUnits = Math.ceil((max - min) / unitSizeInMilliSeconds);
    var multiplier = 1;
    var range = max - min;

    if (unitDefinition.steps) {
      // Have an array of steps
      var numSteps = unitDefinition.steps.length;
      for (var i = 0; i < numSteps && sizeInUnits > maxTicks; i++) {
        multiplier = unitDefinition.steps[i];
        sizeInUnits = Math.ceil(range / (unitSizeInMilliSeconds * multiplier));
      }
    } else {
      while (sizeInUnits > maxTicks && maxTicks > 0) {
        ++multiplier;
        sizeInUnits = Math.ceil(range / (unitSizeInMilliSeconds * multiplier));
      }
    }

    return multiplier;
  }

  /**
   * Helper for generating axis labels.
   * @param options {ITimeGeneratorOptions} the options for generation
   * @param dataRange {IRange} the data range
   * @param niceRange {IRange} the pretty range to display
   * @return {Number[]} ticks
   */
  function generateTicks(options, dataRange, niceRange) {
    var ticks = [];
    if (options.maxTicks) {
      var stepSize = options.stepSize;
      ticks.push(options.min !== undefined ? options.min : niceRange.min);
      var cur = moment(niceRange.min);
      while (cur.add(stepSize, options.unit).valueOf() < niceRange.max) {
        ticks.push(cur.valueOf());
      }
      var realMax = options.max || niceRange.max;
      if (ticks[ticks.length - 1] !== realMax) {
        ticks.push(realMax);
      }
    }
    return ticks;
  }

  /**
   * @function Chart.Ticks.generators.time
   * @param options {ITimeGeneratorOptions} the options for generation
   * @param dataRange {IRange} the data range
   * @return {Number[]} ticks
   */
  Chart.Ticks.generators.time = function(options, dataRange) {
    var niceMin;
    var niceMax;
    var isoWeekday = options.isoWeekday;
    if (options.unit === 'week' && isoWeekday !== false) {
      niceMin = moment(dataRange.min).startOf('isoWeek').isoWeekday(isoWeekday).valueOf();
      niceMax = moment(dataRange.max).startOf('isoWeek').isoWeekday(isoWeekday);
      if (dataRange.max - niceMax > 0) {
        niceMax.add(1, 'week');
      }
      niceMax = niceMax.valueOf();
    } else {
      niceMin = moment(dataRange.min).startOf(options.unit).valueOf();
      niceMax = moment(dataRange.max).startOf(options.unit);
      if (dataRange.max - niceMax > 0) {
        niceMax.add(1, options.unit);
      }
      niceMax = niceMax.valueOf();
    }
    return generateTicks(options, dataRange, {
      min: niceMin,
      max: niceMax
    });
  };

  var TimeScale = Chart.Scale.extend({
    initialize: function() {
      if (!moment) {
        throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
      }

      Chart.Scale.prototype.initialize.call(this);
    },
    determineDataLimits: function() {
      var me = this;
      var timeOpts = me.options.time;

      // We store the data range as unix millisecond timestamps so dataMin and dataMax will always be integers.
      var dataMin = Number.MAX_SAFE_INTEGER;
      var dataMax = Number.MIN_SAFE_INTEGER;

      var chartData = me.chart.data;
      var parsedData = {
        labels: [],
        datasets: []
      };

      var timestamp;

      helpers.each(chartData.labels, function(label, labelIndex) {
        var labelMoment = parseTime(me, label);

        if (labelMoment.isValid()) {
          // We need to round the time
          if (timeOpts.round) {
            labelMoment.startOf(timeOpts.round);
          }

          timestamp = labelMoment.valueOf();
          dataMin = Math.min(timestamp, dataMin);
          dataMax = Math.max(timestamp, dataMax);

          // Store this value for later
          parsedData.labels[labelIndex] = timestamp;
        }
      });

      helpers.each(chartData.datasets, function(dataset, datasetIndex) {
        var timestamps = [];

        if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null && me.chart.isDatasetVisible(datasetIndex)) {
          // We have potential point data, so we need to parse this
          helpers.each(dataset.data, function(value, dataIndex) {
            var dataMoment = parseTime(me, me.getRightValue(value));

            if (dataMoment.isValid()) {
              if (timeOpts.round) {
                dataMoment.startOf(timeOpts.round);
              }

              timestamp = dataMoment.valueOf();
              dataMin = Math.min(timestamp, dataMin);
              dataMax = Math.max(timestamp, dataMax);
              timestamps[dataIndex] = timestamp;
            }
          });
        } else {
          // We have no x coordinates, so use the ones from the labels
          timestamps = parsedData.labels.slice();
        }

        parsedData.datasets[datasetIndex] = timestamps;
      });

      me.dataMin = dataMin;
      me.dataMax = dataMax;
      me._parsedData = parsedData;
    },
    buildTicks: function() {
      var me = this;
      var timeOpts = me.options.time;

      var minTimestamp;
      var maxTimestamp;
      var dataMin = me.dataMin;
      var dataMax = me.dataMax;

      if (timeOpts.min) {
        var minMoment = parseTime(me, timeOpts.min);
        if (timeOpts.round) {
          minMoment.round(timeOpts.round);
        }
        minTimestamp = minMoment.valueOf();
      }

      if (timeOpts.max) {
        maxTimestamp = parseTime(me, timeOpts.max).valueOf();
      }

      var maxTicks = me.getLabelCapacity(minTimestamp || dataMin);
      var unit = timeOpts.unit || determineUnit(timeOpts.minUnit, minTimestamp || dataMin, maxTimestamp || dataMax, maxTicks);
      me.displayFormat = timeOpts.displayFormats[unit];

      var stepSize = timeOpts.stepSize || determineStepSize(minTimestamp || dataMin, maxTimestamp || dataMax, unit, maxTicks);
      me.ticks = Chart.Ticks.generators.time({
        maxTicks: maxTicks,
        min: minTimestamp,
        max: maxTimestamp,
        stepSize: stepSize,
        unit: unit,
        isoWeekday: timeOpts.isoWeekday
      }, {
        min: dataMin,
        max: dataMax
      });

      // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale
      me.max = helpers.max(me.ticks);
      me.min = helpers.min(me.ticks);
    },
    // Get tooltip label
    getLabelForIndex: function(index, datasetIndex) {
      var me = this;
      var label = me.chart.data.labels && index < me.chart.data.labels.length ? me.chart.data.labels[index] : '';
      var value = me.chart.data.datasets[datasetIndex].data[index];

      if (value !== null && typeof value === 'object') {
        label = me.getRightValue(value);
      }

      // Format nicely
      if (me.options.time.tooltipFormat) {
        label = parseTime(me, label).format(me.options.time.tooltipFormat);
      }

      return label;
    },
    // Function to format an individual tick mark
    tickFormatFunction: function(tick, index, ticks) {
      var formattedTick = tick.format(this.displayFormat);
      var tickOpts = this.options.ticks;
      var callback = helpers.getValueOrDefault(tickOpts.callback, tickOpts.userCallback);

      if (callback) {
        return callback(formattedTick, index, ticks);
      }
      return formattedTick;
    },
    convertTicksToLabels: function() {
      var me = this;
      me.ticksAsTimestamps = me.ticks;
      me.ticks = me.ticks.map(function(tick) {
        return moment(tick);
      }).map(me.tickFormatFunction, me);
    },
    getPixelForOffset: function(offset) {
      var me = this;
      var epochWidth = me.max - me.min;
      var decimal = epochWidth ? (offset - me.min) / epochWidth : 0;

      if (me.isHorizontal()) {
        var valueOffset = (me.width * decimal);
        return me.left + Math.round(valueOffset);
      }

      var heightOffset = (me.height * decimal);
      return me.top + Math.round(heightOffset);
    },
    getPixelForValue: function(value, index, datasetIndex) {
      var me = this;
      var offset = null;
      if (index !== undefined && datasetIndex !== undefined) {
        offset = me._parsedData.datasets[datasetIndex][index];
      }

      if (offset === null) {
        if (!value || !value.isValid) {
          // not already a moment object
          value = parseTime(me, me.getRightValue(value));
        }

        if (value && value.isValid && value.isValid()) {
          offset = value.valueOf();
        }
      }

      if (offset !== null) {
        return me.getPixelForOffset(offset);
      }
    },
    getPixelForTick: function(index) {
      return this.getPixelForOffset(this.ticksAsTimestamps[index]);
    },
    getValueForPixel: function(pixel) {
      var me = this;
      var innerDimension = me.isHorizontal() ? me.width : me.height;
      var offset = (pixel - (me.isHorizontal() ? me.left : me.top)) / innerDimension;
      return moment(me.min + (offset * (me.max - me.min)));
    },
    // Crude approximation of what the label width might be
    getLabelWidth: function(label) {
      var me = this;
      var ticks = me.options.ticks;

      var tickLabelWidth = me.ctx.measureText(label).width;
      var cosRotation = Math.cos(helpers.toRadians(ticks.maxRotation));
      var sinRotation = Math.sin(helpers.toRadians(ticks.maxRotation));
      var tickFontSize = helpers.getValueOrDefault(ticks.fontSize, Chart.defaults.global.defaultFontSize);
      return (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
    },
    getLabelCapacity: function(exampleTime) {
      var me = this;

      me.displayFormat = me.options.time.displayFormats.millisecond;  // Pick the longest format for guestimation
      var exampleLabel = me.tickFormatFunction(moment(exampleTime), 0, []);
      var tickLabelWidth = me.getLabelWidth(exampleLabel);

      var innerWidth = me.isHorizontal() ? me.width : me.height;
      var labelCapacity = innerWidth / tickLabelWidth;
      return labelCapacity;
    }
  });
  Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);

};

},{"1":1}]},{},[7])(7)
});
/*!
 * angular-chart.js - An angular.js wrapper for Chart.js
 * http://jtblin.github.io/angular-chart.js/
 * Version: 1.1.1
 *
 * Copyright 2016 Jerome Touffe-Blin
 * Released under the BSD-2-Clause license
 * https://github.com/jtblin/angular-chart.js/blob/master/LICENSE
 */
!function(t){"use strict";if("object"==typeof exports)module.exports=t("undefined"!=typeof angular?angular:require("angular"),"undefined"!=typeof Chart?Chart:require("chart.js"));else if("function"==typeof define&&define.amd)define(["angular","chart"],t);else{if("undefined"==typeof angular)throw new Error("AngularJS framework needs to be included, see https://angularjs.org/");if("undefined"==typeof Chart)throw new Error("Chart.js library needs to be included, see http://jtblin.github.io/angular-chart.js/");t(angular,Chart)}}(function(t,r){"use strict";function e(){var e={responsive:!0},a={Chart:r,getOptions:function(r){var a=r&&e[r]||{};return t.extend({},e,a)}};this.setOptions=function(r,n){n?e[r]=t.merge(e[r]||{},n):(n=r,e=t.merge(e,n)),t.merge(a.Chart.defaults,e)},this.$get=function(){return a}}function a(e,a){function o(t,r,a){var n=D(t,r);if(C(r)&&k(t,r,a,n)){var o=a[0],c=o.getContext("2d");r.chartGetColor=y(r);var i=b(t,r);F(r),r.chart=new e.Chart(c,{type:t,data:i,options:n}),r.$emit("chart-create",r.chart),A(o,r)}}function c(t,r){return!!(t&&r&&t.length&&r.length)&&(Array.isArray(t[0])?t.length===r.length&&t.every(function(t,e){return t.length===r[e].length}):r.reduce(i,0)>0&&t.length===r.length)}function i(t,r){return t+r}function u(r,e,a){var n={point:void 0,points:void 0};return function(o){var c=r.chart.getElementAtEvent||r.chart.getPointAtEvent,i=r.chart.getElementsAtEvent||r.chart.getPointsAtEvent;if(i){var u=i.call(r.chart,o),l=c?c.call(r.chart,o)[0]:void 0;a!==!1&&(t.equals(n.points,u)||t.equals(n.point,l))||(n.point=l,n.points=u,r[e](u,o,l))}}}function l(a,n){for(var o=t.copy(n.chartColors||e.getOptions(a).chartColors||r.defaults.global.colors),c=o.length<n.chartData.length;o.length<n.chartData.length;)o.push(n.chartGetColor());return c&&(n.chartColors=o),o.map(h)}function h(t){return"string"==typeof t&&"r"===t[0]?f(v(t)):"string"==typeof t&&"#"===t[0]?f(p(t.substr(1))):"object"==typeof t&&null!==t?t:s()}function s(){var t=[d(0,255),d(0,255),d(0,255)];return f(t)}function f(t){var r=t[3]||1;return t=t.slice(0,3),{backgroundColor:g(t,.2),pointBackgroundColor:g(t,r),pointHoverBackgroundColor:g(t,.8),borderColor:g(t,r),pointBorderColor:"#fff",pointHoverBorderColor:g(t,r)}}function d(t,r){return Math.floor(Math.random()*(r-t+1))+t}function g(t,r){return n?"rgb("+t.join(",")+")":"rgba("+t.concat(r).join(",")+")"}function p(t){var r=parseInt(t,16),e=r>>16&255,a=r>>8&255,n=255&r;return[e,a,n]}function v(t){var r=t.match(/^rgba?\(([\d,.]+)\)$/);if(!r)throw new Error("Cannot parse rgb value");return t=r[1].split(","),t.map(Number)}function C(t){return t.chartData&&t.chartData.length}function y(t){return"function"==typeof t.chartGetColor?t.chartGetColor:s}function b(t,r){var e=l(t,r);return Array.isArray(r.chartData[0])?m(r.chartLabels,r.chartData,r.chartSeries||[],e,r.chartDatasetOverride):w(r.chartLabels,r.chartData,e,r.chartDatasetOverride)}function m(r,e,a,n,o){return{labels:r,datasets:e.map(function(r,e){var c=t.extend({},n[e],{label:a[e],data:r});return o&&o.length>=e&&t.merge(c,o[e]),c})}}function w(r,e,a,n){var o={labels:r,datasets:[{data:e,backgroundColor:a.map(function(t){return t.pointBackgroundColor}),hoverBackgroundColor:a.map(function(t){return t.backgroundColor})}]};return n&&t.merge(o.datasets[0],n),o}function D(r,a){return t.extend({},e.getOptions(r),a.chartOptions)}function A(r,e){r.onclick=e.chartClick?u(e,"chartClick",!1):t.noop,r.onmousemove=e.chartHover?u(e,"chartHover",!0):t.noop}function B(t,r){Array.isArray(r.chartData[0])?r.chart.data.datasets.forEach(function(r,e){r.data=t[e]}):r.chart.data.datasets[0].data=t,r.chart.update(),r.$emit("chart-update",r.chart)}function $(t){return!t||Array.isArray(t)&&!t.length||"object"==typeof t&&!Object.keys(t).length}function k(t,r,e,n){return!n.responsive||0!==e[0].clientHeight||(a(function(){o(t,r,e)},50,!1),!1)}function F(t){t.chart&&(t.chart.destroy(),t.$emit("chart-destroy",t.chart))}return function(r){return{restrict:"CA",scope:{chartGetColor:"=?",chartType:"=",chartData:"=?",chartLabels:"=?",chartOptions:"=?",chartSeries:"=?",chartColors:"=?",chartClick:"=?",chartHover:"=?",chartDatasetOverride:"=?"},link:function(e,a){function i(t,n){if(!t||!t.length||Array.isArray(t[0])&&!t[0].length)return void F(e);var i=r||e.chartType;if(i)return e.chart&&c(t,n)?B(t,e):void o(i,e,a)}function u(n,c){if(!$(n)&&!t.equals(n,c)){var i=r||e.chartType;i&&o(i,e,a)}}function l(r,n){$(r)||t.equals(r,n)||o(r,e,a)}n&&window.G_vmlCanvasManager.initElement(a[0]),e.$watch("chartData",i,!0),e.$watch("chartSeries",u,!0),e.$watch("chartLabels",u,!0),e.$watch("chartOptions",u,!0),e.$watch("chartColors",u,!0),e.$watch("chartDatasetOverride",u,!0),e.$watch("chartType",l,!1),e.$on("$destroy",function(){F(e)}),e.$on("$resize",function(){e.chart&&e.chart.resize()})}}}}r.defaults.global.multiTooltipTemplate="<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>",r.defaults.global.tooltips.mode="label",r.defaults.global.elements.line.borderWidth=2,r.defaults.global.elements.rectangle.borderWidth=2,r.defaults.global.legend.display=!1,r.defaults.global.colors=["#97BBCD","#DCDCDC","#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360"];var n="object"==typeof window.G_vmlCanvasManager&&null!==window.G_vmlCanvasManager&&"function"==typeof window.G_vmlCanvasManager.initElement;return n&&(r.defaults.global.animation=!1),t.module("chart.js",[]).provider("ChartJs",e).factory("ChartJsFactory",["ChartJs","$timeout",a]).directive("chartBase",["ChartJsFactory",function(t){return new t}]).directive("chartLine",["ChartJsFactory",function(t){return new t("line")}]).directive("chartBar",["ChartJsFactory",function(t){return new t("bar")}]).directive("chartHorizontalBar",["ChartJsFactory",function(t){return new t("horizontalBar")}]).directive("chartRadar",["ChartJsFactory",function(t){return new t("radar")}]).directive("chartDoughnut",["ChartJsFactory",function(t){return new t("doughnut")}]).directive("chartPie",["ChartJsFactory",function(t){return new t("pie")}]).directive("chartPolarArea",["ChartJsFactory",function(t){return new t("polarArea")}]).directive("chartBubble",["ChartJsFactory",function(t){return new t("bubble")}]).name});
//# sourceMappingURL=angular-chart.min.js.map

/**
 * Angular Selectize2
 * https://github.com/machineboy2045/angular-selectize
 **/

angular.module('selectize', []).value('selectizeConfig', {}).directive("selectize", ['selectizeConfig', function(selectizeConfig) {
  return {
    restrict: 'EA',
    require: '^ngModel',
    scope: { ngModel: '=', config: '=?', options: '=?', ngDisabled: '=', ngRequired: '&' },
    link: function(scope, element, attrs, modelCtrl) {

      var selectize,
          settings = angular.extend({}, Selectize.defaults, selectizeConfig, scope.config);

      scope.options = scope.options || [];
      scope.config = scope.config || {};

      var isEmpty = function(val) {
        return val === undefined || val === null || (angular.isArray(val) && !val.length); //support checking empty arrays
      };

      var toggle = function(disabled) {
        disabled ? selectize.disable() : selectize.enable();
      }

      var validate = function() {
        var isInvalid = (scope.ngRequired() || attrs.required || settings.required) && isEmpty(scope.ngModel);
        modelCtrl.$setValidity('required', !isInvalid);
      };

      var setSelectizeOptions = function(curr, prev) {
        angular.forEach(prev, function(opt){
          if(curr.indexOf(opt) === -1){
            var value = opt[settings.valueField];
            selectize.removeOption(value, true);
          }
        });

        selectize.addOption(curr, true);
  
        selectize.refreshOptions(false);
        setSelectizeValue();
      }

      var setSelectizeValue = function() {
        validate();

        selectize.$control.toggleClass('ng-valid', modelCtrl.$valid);
        selectize.$control.toggleClass('ng-invalid', modelCtrl.$invalid);
        selectize.$control.toggleClass('ng-dirty', modelCtrl.$dirty);
        selectize.$control.toggleClass('ng-pristine', modelCtrl.$pristine);

        if (!angular.equals(selectize.items, scope.ngModel)) {
          selectize.setValue(scope.ngModel, true);
        }
      }

      settings.onChange = function(value) {
        var value = angular.copy(selectize.items);
        if (settings.maxItems == 1) {
          value = value[0]
        }
        modelCtrl.$setViewValue( value );

        if (scope.config.onChange) {
          scope.config.onChange.apply(this, arguments);
        }
      };

      settings.onOptionAdd = function(value, data) {
        if( scope.options.indexOf(data) === -1 ) {
          scope.options.push(data);

          if (scope.config.onOptionAdd) {
            scope.config.onOptionAdd.apply(this, arguments);
          }
        }
      };

      settings.onInitialize = function() {
        selectize = element[0].selectize;

        setSelectizeOptions(scope.options, []);

        //provides a way to access the selectize element from an
        //angular controller
        if (scope.config.onInitialize) {
          scope.config.onInitialize(selectize);
        }

        scope.$watchCollection('options', setSelectizeOptions);
        scope.$watch('ngModel', setSelectizeValue);
        scope.$watch('ngDisabled', toggle);
      };

      element.selectize(settings);

      element.on('$destroy', function() {
        if (selectize) {
          selectize.destroy();
          element = null;
        }
      });
    }
  };
}]);

/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('sifter', factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Sifter = factory();
  }
}(this, function() {

  /**
   * Textually searches arrays and hashes of objects
   * by property (or multiple properties). Designed
   * specifically for autocomplete.
   *
   * @constructor
   * @param {array|object} items
   * @param {object} items
   */
  var Sifter = function(items, settings) {
    this.items = items;
    this.settings = settings || {diacritics: true};
  };

  /**
   * Splits a search string into an array of individual
   * regexps to be used to match results.
   *
   * @param {string} query
   * @returns {array}
   */
  Sifter.prototype.tokenize = function(query) {
    query = trim(String(query || '').toLowerCase());
    if (!query || !query.length) return [];

    var i, n, regex, letter;
    var tokens = [];
    var words = query.split(/ +/);

    for (i = 0, n = words.length; i < n; i++) {
      regex = escape_regex(words[i]);
      if (this.settings.diacritics) {
        for (letter in DIACRITICS) {
          if (DIACRITICS.hasOwnProperty(letter)) {
            regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
          }
        }
      }
      tokens.push({
        string : words[i],
        regex  : new RegExp(regex, 'i')
      });
    }

    return tokens;
  };

  /**
   * Iterates over arrays and hashes.
   *
   * ```
   * this.iterator(this.items, function(item, id) {
   *    // invoked for each item
   * });
   * ```
   *
   * @param {array|object} object
   */
  Sifter.prototype.iterator = function(object, callback) {
    var iterator;
    if (is_array(object)) {
      iterator = Array.prototype.forEach || function(callback) {
        for (var i = 0, n = this.length; i < n; i++) {
          callback(this[i], i, this);
        }
      };
    } else {
      iterator = function(callback) {
        for (var key in this) {
          if (this.hasOwnProperty(key)) {
            callback(this[key], key, this);
          }
        }
      };
    }

    iterator.apply(object, [callback]);
  };

  /**
   * Returns a function to be used to score individual results.
   *
   * Good matches will have a higher score than poor matches.
   * If an item is not a match, 0 will be returned by the function.
   *
   * @param {object|string} search
   * @param {object} options (optional)
   * @returns {function}
   */
  Sifter.prototype.getScoreFunction = function(search, options) {
    var self, fields, tokens, token_count, nesting;

    self        = this;
    search      = self.prepareSearch(search, options);
    tokens      = search.tokens;
    fields      = search.options.fields;
    token_count = tokens.length;
    nesting     = search.options.nesting;

    /**
     * Calculates how close of a match the
     * given value is against a search token.
     *
     * @param {mixed} value
     * @param {object} token
     * @return {number}
     */
    var scoreValue = function(value, token) {
      var score, pos;

      if (!value) return 0;
      value = String(value || '');
      pos = value.search(token.regex);
      if (pos === -1) return 0;
      score = token.string.length / value.length;
      if (pos === 0) score += 0.5;
      return score;
    };

    /**
     * Calculates the score of an object
     * against the search query.
     *
     * @param {object} token
     * @param {object} data
     * @return {number}
     */
    var scoreObject = (function() {
      var field_count = fields.length;
      if (!field_count) {
        return function() { return 0; };
      }
      if (field_count === 1) {
        return function(token, data) {
          return scoreValue(getattr(data, fields[0], nesting), token);
        };
      }
      return function(token, data) {
        for (var i = 0, sum = 0; i < field_count; i++) {
          sum += scoreValue(getattr(data, fields[i], nesting), token);
        }
        return sum / field_count;
      };
    })();

    if (!token_count) {
      return function() { return 0; };
    }
    if (token_count === 1) {
      return function(data) {
        return scoreObject(tokens[0], data);
      };
    }

    if (search.options.conjunction === 'and') {
      return function(data) {
        var score;
        for (var i = 0, sum = 0; i < token_count; i++) {
          score = scoreObject(tokens[i], data);
          if (score <= 0) return 0;
          sum += score;
        }
        return sum / token_count;
      };
    } else {
      return function(data) {
        for (var i = 0, sum = 0; i < token_count; i++) {
          sum += scoreObject(tokens[i], data);
        }
        return sum / token_count;
      };
    }
  };

  /**
   * Returns a function that can be used to compare two
   * results, for sorting purposes. If no sorting should
   * be performed, `null` will be returned.
   *
   * @param {string|object} search
   * @param {object} options
   * @return function(a,b)
   */
  Sifter.prototype.getSortFunction = function(search, options) {
    var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

    self   = this;
    search = self.prepareSearch(search, options);
    sort   = (!search.query && options.sort_empty) || options.sort;

    /**
     * Fetches the specified sort field value
     * from a search result item.
     *
     * @param  {string} name
     * @param  {object} result
     * @return {mixed}
     */
    get_field = function(name, result) {
      if (name === '$score') return result.score;
      return getattr(self.items[result.id], name, options.nesting);
    };

    // parse options
    fields = [];
    if (sort) {
      for (i = 0, n = sort.length; i < n; i++) {
        if (search.query || sort[i].field !== '$score') {
          fields.push(sort[i]);
        }
      }
    }

    // the "$score" field is implied to be the primary
    // sort field, unless it's manually specified
    if (search.query) {
      implicit_score = true;
      for (i = 0, n = fields.length; i < n; i++) {
        if (fields[i].field === '$score') {
          implicit_score = false;
          break;
        }
      }
      if (implicit_score) {
        fields.unshift({field: '$score', direction: 'desc'});
      }
    } else {
      for (i = 0, n = fields.length; i < n; i++) {
        if (fields[i].field === '$score') {
          fields.splice(i, 1);
          break;
        }
      }
    }

    multipliers = [];
    for (i = 0, n = fields.length; i < n; i++) {
      multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
    }

    // build function
    fields_count = fields.length;
    if (!fields_count) {
      return null;
    } else if (fields_count === 1) {
      field = fields[0].field;
      multiplier = multipliers[0];
      return function(a, b) {
        return multiplier * cmp(
          get_field(field, a),
          get_field(field, b)
        );
      };
    } else {
      return function(a, b) {
        var i, result, a_value, b_value, field;
        for (i = 0; i < fields_count; i++) {
          field = fields[i].field;
          result = multipliers[i] * cmp(
            get_field(field, a),
            get_field(field, b)
          );
          if (result) return result;
        }
        return 0;
      };
    }
  };

  /**
   * Parses a search query and returns an object
   * with tokens and fields ready to be populated
   * with results.
   *
   * @param {string} query
   * @param {object} options
   * @returns {object}
   */
  Sifter.prototype.prepareSearch = function(query, options) {
    if (typeof query === 'object') return query;

    options = extend({}, options);

    var option_fields     = options.fields;
    var option_sort       = options.sort;
    var option_sort_empty = options.sort_empty;

    if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
    if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
    if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

    return {
      options : options,
      query   : String(query || '').toLowerCase(),
      tokens  : this.tokenize(query),
      total   : 0,
      items   : []
    };
  };

  /**
   * Searches through all items and returns a sorted array of matches.
   *
   * The `options` parameter can contain:
   *
   *   - fields {string|array}
   *   - sort {array}
   *   - score {function}
   *   - filter {bool}
   *   - limit {integer}
   *
   * Returns an object containing:
   *
   *   - options {object}
   *   - query {string}
   *   - tokens {array}
   *   - total {int}
   *   - items {array}
   *
   * @param {string} query
   * @param {object} options
   * @returns {object}
   */
  Sifter.prototype.search = function(query, options) {
    var self = this, value, score, search, calculateScore;
    var fn_sort;
    var fn_score;

    search  = this.prepareSearch(query, options);
    options = search.options;
    query   = search.query;

    // generate result scoring function
    fn_score = options.score || self.getScoreFunction(search);

    // perform search and sort
    if (query.length) {
      self.iterator(self.items, function(item, id) {
        score = fn_score(item);
        if (options.filter === false || score > 0) {
          search.items.push({'score': score, 'id': id});
        }
      });
    } else {
      self.iterator(self.items, function(item, id) {
        search.items.push({'score': 1, 'id': id});
      });
    }

    fn_sort = self.getSortFunction(search, options);
    if (fn_sort) search.items.sort(fn_sort);

    // apply limits
    search.total = search.items.length;
    if (typeof options.limit === 'number') {
      search.items = search.items.slice(0, options.limit);
    }

    return search;
  };

  // utilities
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  var cmp = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a > b ? 1 : (a < b ? -1 : 0);
    }
    a = asciifold(String(a || ''));
    b = asciifold(String(b || ''));
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  };

  var extend = function(a, b) {
    var i, n, k, object;
    for (i = 1, n = arguments.length; i < n; i++) {
      object = arguments[i];
      if (!object) continue;
      for (k in object) {
        if (object.hasOwnProperty(k)) {
          a[k] = object[k];
        }
      }
    }
    return a;
  };

  /**
   * A property getter resolving dot-notation
   * @param  {Object}  obj     The root object to fetch property on
   * @param  {String}  name    The optionally dotted property name to fetch
   * @param  {Boolean} nesting Handle nesting or not
   * @return {Object}          The resolved property value
   */
  var getattr = function(obj, name, nesting) {
      if (!obj || !name) return;
      if (!nesting) return obj[name];
      var names = name.split(".");
      while(names.length && (obj = obj[names.shift()]));
      return obj;
  };

  var trim = function(str) {
    return (str + '').replace(/^\s+|\s+$|/g, '');
  };

  var escape_regex = function(str) {
    return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  };

  var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
  };

  var DIACRITICS = {
    'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
    'b': '[b␢βΒB฿𐌁ᛒ]',
    'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
    'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
    'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
    'f': '[fƑƒḞḟ]',
    'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
    'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
    'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
    'j': '[jȷĴĵɈɉʝɟʲ]',
    'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
    'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
    'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
    'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
    'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
    'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
    'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
    's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
    't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
    'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
    'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
    'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
    'x': '[xẌẍẊẋχ]',
    'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
    'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
  };

  var asciifold = (function() {
    var i, n, k, chunk;
    var foreignletters = '';
    var lookup = {};
    for (k in DIACRITICS) {
      if (DIACRITICS.hasOwnProperty(k)) {
        chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
        foreignletters += chunk;
        for (i = 0, n = chunk.length; i < n; i++) {
          lookup[chunk.charAt(i)] = k;
        }
      }
    }
    var regexp = new RegExp('[' +  foreignletters + ']', 'g');
    return function(str) {
      return str.replace(regexp, function(foreignletter) {
        return lookup[foreignletter];
      }).toLowerCase();
    };
  })();


  // export
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('microplugin', factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.MicroPlugin = factory();
  }
}(this, function() {
  var MicroPlugin = {};

  MicroPlugin.mixin = function(Interface) {
    Interface.plugins = {};

    /**
     * Initializes the listed plugins (with options).
     * Acceptable formats:
     *
     * List (without options):
     *   ['a', 'b', 'c']
     *
     * List (with options):
     *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
     *
     * Hash (with options):
     *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
     *
     * @param {mixed} plugins
     */
    Interface.prototype.initializePlugins = function(plugins) {
      var i, n, key;
      var self  = this;
      var queue = [];

      self.plugins = {
        names     : [],
        settings  : {},
        requested : {},
        loaded    : {}
      };

      if (utils.isArray(plugins)) {
        for (i = 0, n = plugins.length; i < n; i++) {
          if (typeof plugins[i] === 'string') {
            queue.push(plugins[i]);
          } else {
            self.plugins.settings[plugins[i].name] = plugins[i].options;
            queue.push(plugins[i].name);
          }
        }
      } else if (plugins) {
        for (key in plugins) {
          if (plugins.hasOwnProperty(key)) {
            self.plugins.settings[key] = plugins[key];
            queue.push(key);
          }
        }
      }

      while (queue.length) {
        self.require(queue.shift());
      }
    };

    Interface.prototype.loadPlugin = function(name) {
      var self    = this;
      var plugins = self.plugins;
      var plugin  = Interface.plugins[name];

      if (!Interface.plugins.hasOwnProperty(name)) {
        throw new Error('Unable to find "' +  name + '" plugin');
      }

      plugins.requested[name] = true;
      plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
      plugins.names.push(name);
    };

    /**
     * Initializes a plugin.
     *
     * @param {string} name
     */
    Interface.prototype.require = function(name) {
      var self = this;
      var plugins = self.plugins;

      if (!self.plugins.loaded.hasOwnProperty(name)) {
        if (plugins.requested[name]) {
          throw new Error('Plugin has circular dependency ("' + name + '")');
        }
        self.loadPlugin(name);
      }

      return plugins.loaded[name];
    };

    /**
     * Registers a plugin.
     *
     * @param {string} name
     * @param {function} fn
     */
    Interface.define = function(name, fn) {
      Interface.plugins[name] = {
        'name' : name,
        'fn'   : fn
      };
    };
  };

  var utils = {
    isArray: Array.isArray || function(vArg) {
      return Object.prototype.toString.call(vArg) === '[object Array]';
    }
  };

  return MicroPlugin;
}));

/**
 * selectize.js (v0.12.4)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('selectize', ['jquery','sifter','microplugin'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
  } else {
    root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
  }
}(this, function($, Sifter, MicroPlugin) {
  'use strict';

  var highlight = function($element, pattern) {
    if (typeof pattern === 'string' && !pattern.length) return;
    var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
  
    var highlight = function(node) {
      var skip = 0;
      if (node.nodeType === 3) {
        var pos = node.data.search(regex);
        if (pos >= 0 && node.data.length > 0) {
          var match = node.data.match(regex);
          var spannode = document.createElement('span');
          spannode.className = 'highlight';
          var middlebit = node.splitText(pos);
          var endbit = middlebit.splitText(match[0].length);
          var middleclone = middlebit.cloneNode(true);
          spannode.appendChild(middleclone);
          middlebit.parentNode.replaceChild(spannode, middlebit);
          skip = 1;
        }
      } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
        for (var i = 0; i < node.childNodes.length; ++i) {
          i += highlight(node.childNodes[i]);
        }
      }
      return skip;
    };
  
    return $element.each(function() {
      highlight(this);
    });
  };
  
  /**
   * removeHighlight fn copied from highlight v5 and
   * edited to remove with() and pass js strict mode
   */
  $.fn.removeHighlight = function() {
    return this.find("span.highlight").each(function() {
      this.parentNode.firstChild.nodeName;
      var parent = this.parentNode;
      parent.replaceChild(this.firstChild, this);
      parent.normalize();
    }).end();
  };
  
  
  var MicroEvent = function() {};
  MicroEvent.prototype = {
    on: function(event, fct){
      this._events = this._events || {};
      this._events[event] = this._events[event] || [];
      this._events[event].push(fct);
    },
    off: function(event, fct){
      var n = arguments.length;
      if (n === 0) return delete this._events;
      if (n === 1) return delete this._events[event];
  
      this._events = this._events || {};
      if (event in this._events === false) return;
      this._events[event].splice(this._events[event].indexOf(fct), 1);
    },
    trigger: function(event /* , args... */){
      this._events = this._events || {};
      if (event in this._events === false) return;
      for (var i = 0; i < this._events[event].length; i++){
        this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  };
  
  /**
   * Mixin will delegate all MicroEvent.js function in the destination object.
   *
   * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
   *
   * @param {object} the object which will support MicroEvent
   */
  MicroEvent.mixin = function(destObject){
    var props = ['on', 'off', 'trigger'];
    for (var i = 0; i < props.length; i++){
      destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
    }
  };
  
  var IS_MAC        = /Mac/.test(navigator.userAgent);
  
  var KEY_A         = 65;
  var KEY_COMMA     = 188;
  var KEY_RETURN    = 13;
  var KEY_ESC       = 27;
  var KEY_LEFT      = 37;
  var KEY_UP        = 38;
  var KEY_P         = 80;
  var KEY_RIGHT     = 39;
  var KEY_DOWN      = 40;
  var KEY_N         = 78;
  var KEY_BACKSPACE = 8;
  var KEY_DELETE    = 46;
  var KEY_SHIFT     = 16;
  var KEY_CMD       = IS_MAC ? 91 : 17;
  var KEY_CTRL      = IS_MAC ? 18 : 17;
  var KEY_TAB       = 9;
  
  var TAG_SELECT    = 1;
  var TAG_INPUT     = 2;
  
  // for now, android support in general is too spotty to support validity
  var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;
  
  
  var isset = function(object) {
    return typeof object !== 'undefined';
  };
  
  /**
   * Converts a scalar to its best string representation
   * for hash keys and HTML attribute values.
   *
   * Transformations:
   *   'str'     -> 'str'
   *   null      -> ''
   *   undefined -> ''
   *   true      -> '1'
   *   false     -> '0'
   *   0         -> '0'
   *   1         -> '1'
   *
   * @param {string} value
   * @returns {string|null}
   */
  var hash_key = function(value) {
    if (typeof value === 'undefined' || value === null) return null;
    if (typeof value === 'boolean') return value ? '1' : '0';
    return value + '';
  };
  
  /**
   * Escapes a string for use within HTML.
   *
   * @param {string} str
   * @returns {string}
   */
  var escape_html = function(str) {
    return (str + '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };
  
  /**
   * Escapes "$" characters in replacement strings.
   *
   * @param {string} str
   * @returns {string}
   */
  var escape_replace = function(str) {
    return (str + '').replace(/\$/g, '$$$$');
  };
  
  var hook = {};
  
  /**
   * Wraps `method` on `self` so that `fn`
   * is invoked before the original method.
   *
   * @param {object} self
   * @param {string} method
   * @param {function} fn
   */
  hook.before = function(self, method, fn) {
    var original = self[method];
    self[method] = function() {
      fn.apply(self, arguments);
      return original.apply(self, arguments);
    };
  };
  
  /**
   * Wraps `method` on `self` so that `fn`
   * is invoked after the original method.
   *
   * @param {object} self
   * @param {string} method
   * @param {function} fn
   */
  hook.after = function(self, method, fn) {
    var original = self[method];
    self[method] = function() {
      var result = original.apply(self, arguments);
      fn.apply(self, arguments);
      return result;
    };
  };
  
  /**
   * Wraps `fn` so that it can only be invoked once.
   *
   * @param {function} fn
   * @returns {function}
   */
  var once = function(fn) {
    var called = false;
    return function() {
      if (called) return;
      called = true;
      fn.apply(this, arguments);
    };
  };
  
  /**
   * Wraps `fn` so that it can only be called once
   * every `delay` milliseconds (invoked on the falling edge).
   *
   * @param {function} fn
   * @param {int} delay
   * @returns {function}
   */
  var debounce = function(fn, delay) {
    var timeout;
    return function() {
      var self = this;
      var args = arguments;
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function() {
        fn.apply(self, args);
      }, delay);
    };
  };
  
  /**
   * Debounce all fired events types listed in `types`
   * while executing the provided `fn`.
   *
   * @param {object} self
   * @param {array} types
   * @param {function} fn
   */
  var debounce_events = function(self, types, fn) {
    var type;
    var trigger = self.trigger;
    var event_args = {};
  
    // override trigger method
    self.trigger = function() {
      var type = arguments[0];
      if (types.indexOf(type) !== -1) {
        event_args[type] = arguments;
      } else {
        return trigger.apply(self, arguments);
      }
    };
  
    // invoke provided function
    fn.apply(self, []);
    self.trigger = trigger;
  
    // trigger queued events
    for (type in event_args) {
      if (event_args.hasOwnProperty(type)) {
        trigger.apply(self, event_args[type]);
      }
    }
  };
  
  /**
   * A workaround for http://bugs.jquery.com/ticket/6696
   *
   * @param {object} $parent - Parent element to listen on.
   * @param {string} event - Event name.
   * @param {string} selector - Descendant selector to filter by.
   * @param {function} fn - Event handler.
   */
  var watchChildEvent = function($parent, event, selector, fn) {
    $parent.on(event, selector, function(e) {
      var child = e.target;
      while (child && child.parentNode !== $parent[0]) {
        child = child.parentNode;
      }
      e.currentTarget = child;
      return fn.apply(this, [e]);
    });
  };
  
  /**
   * Determines the current selection within a text input control.
   * Returns an object containing:
   *   - start
   *   - length
   *
   * @param {object} input
   * @returns {object}
   */
  var getSelection = function(input) {
    var result = {};
    if ('selectionStart' in input) {
      result.start = input.selectionStart;
      result.length = input.selectionEnd - result.start;
    } else if (document.selection) {
      input.focus();
      var sel = document.selection.createRange();
      var selLen = document.selection.createRange().text.length;
      sel.moveStart('character', -input.value.length);
      result.start = sel.text.length - selLen;
      result.length = selLen;
    }
    return result;
  };
  
  /**
   * Copies CSS properties from one element to another.
   *
   * @param {object} $from
   * @param {object} $to
   * @param {array} properties
   */
  var transferStyles = function($from, $to, properties) {
    var i, n, styles = {};
    if (properties) {
      for (i = 0, n = properties.length; i < n; i++) {
        styles[properties[i]] = $from.css(properties[i]);
      }
    } else {
      styles = $from.css();
    }
    $to.css(styles);
  };
  
  /**
   * Measures the width of a string within a
   * parent element (in pixels).
   *
   * @param {string} str
   * @param {object} $parent
   * @returns {int}
   */
  var measureString = function(str, $parent) {
    if (!str) {
      return 0;
    }
  
    var $test = $('<test>').css({
      position: 'absolute',
      top: -99999,
      left: -99999,
      width: 'auto',
      padding: 0,
      whiteSpace: 'pre'
    }).text(str).appendTo('body');
  
    transferStyles($parent, $test, [
      'letterSpacing',
      'fontSize',
      'fontFamily',
      'fontWeight',
      'textTransform'
    ]);
  
    var width = $test.width();
    $test.remove();
  
    return width;
  };
  
  /**
   * Sets up an input to grow horizontally as the user
   * types. If the value is changed manually, you can
   * trigger the "update" handler to resize:
   *
   * $input.trigger('update');
   *
   * @param {object} $input
   */
  var autoGrow = function($input) {
    var currentWidth = null;
  
    var update = function(e, options) {
      var value, keyCode, printable, placeholder, width;
      var shift, character, selection;
      e = e || window.event || {};
      options = options || {};
  
      if (e.metaKey || e.altKey) return;
      if (!options.force && $input.data('grow') === false) return;
  
      value = $input.val();
      if (e.type && e.type.toLowerCase() === 'keydown') {
        keyCode = e.keyCode;
        printable = (
          (keyCode >= 97 && keyCode <= 122) || // a-z
          (keyCode >= 65 && keyCode <= 90)  || // A-Z
          (keyCode >= 48 && keyCode <= 57)  || // 0-9
          keyCode === 32 // space
        );
  
        if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
          selection = getSelection($input[0]);
          if (selection.length) {
            value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
          } else if (keyCode === KEY_BACKSPACE && selection.start) {
            value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
          } else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
            value = value.substring(0, selection.start) + value.substring(selection.start + 1);
          }
        } else if (printable) {
          shift = e.shiftKey;
          character = String.fromCharCode(e.keyCode);
          if (shift) character = character.toUpperCase();
          else character = character.toLowerCase();
          value += character;
        }
      }
  
      placeholder = $input.attr('placeholder');
      if (!value && placeholder) {
        value = placeholder;
      }
  
      width = measureString(value, $input) + 4;
      if (width !== currentWidth) {
        currentWidth = width;
        $input.width(width);
        $input.triggerHandler('resize');
      }
    };
  
    $input.on('keydown keyup update blur', update);
    update();
  };
  
  var domToString = function(d) {
    var tmp = document.createElement('div');
  
    tmp.appendChild(d.cloneNode(true));
  
    return tmp.innerHTML;
  };
  
  var logError = function(message, options){
    if(!options) options = {};
    var component = "Selectize";
  
    console.error(component + ": " + message)
  
    if(options.explanation){
      // console.group is undefined in <IE11
      if(console.group) console.group();
      console.error(options.explanation);
      if(console.group) console.groupEnd();
    }
  }
  
  
  var Selectize = function($input, settings) {
    var key, i, n, dir, input, self = this;
    input = $input[0];
    input.selectize = self;
  
    // detect rtl environment
    var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
    dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
    dir = dir || $input.parents('[dir]:first').attr('dir') || '';
  
    // setup default state
    $.extend(self, {
      order            : 0,
      settings         : settings,
      $input           : $input,
      tabIndex         : $input.attr('tabindex') || '',
      tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
      rtl              : /rtl/i.test(dir),
  
      eventNS          : '.selectize' + (++Selectize.count),
      highlightedValue : null,
      isOpen           : false,
      isDisabled       : false,
      isRequired       : $input.is('[required]'),
      isInvalid        : false,
      isLocked         : false,
      isFocused        : false,
      isInputHidden    : false,
      isSetup          : false,
      isShiftDown      : false,
      isCmdDown        : false,
      isCtrlDown       : false,
      ignoreFocus      : false,
      ignoreBlur       : false,
      ignoreHover      : false,
      hasOptions       : false,
      currentResults   : null,
      lastValue        : '',
      caretPos         : 0,
      loading          : 0,
      loadedSearches   : {},
  
      $activeOption    : null,
      $activeItems     : [],
  
      optgroups        : {},
      options          : {},
      userOptions      : {},
      items            : [],
      renderCache      : {},
      onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
    });
  
    // search system
    self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
  
    // build options table
    if (self.settings.options) {
      for (i = 0, n = self.settings.options.length; i < n; i++) {
        self.registerOption(self.settings.options[i]);
      }
      delete self.settings.options;
    }
  
    // build optgroup table
    if (self.settings.optgroups) {
      for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
        self.registerOptionGroup(self.settings.optgroups[i]);
      }
      delete self.settings.optgroups;
    }
  
    // option-dependent defaults
    self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
    if (typeof self.settings.hideSelected !== 'boolean') {
      self.settings.hideSelected = self.settings.mode === 'multi';
    }
  
    self.initializePlugins(self.settings.plugins);
    self.setupCallbacks();
    self.setupTemplates();
    self.setup();
  };
  
  // mixins
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  MicroEvent.mixin(Selectize);
  
  if(typeof MicroPlugin !== "undefined"){
    MicroPlugin.mixin(Selectize);
  }else{
    logError("Dependency MicroPlugin is missing",
      {explanation:
        "Make sure you either: (1) are using the \"standalone\" "+
        "version of Selectize, or (2) require MicroPlugin before you "+
        "load Selectize."}
    );
  }
  
  
  // methods
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  $.extend(Selectize.prototype, {
  
    /**
     * Creates all elements and sets up event bindings.
     */
    setup: function() {
      var self      = this;
      var settings  = self.settings;
      var eventNS   = self.eventNS;
      var $window   = $(window);
      var $document = $(document);
      var $input    = self.$input;
  
      var $wrapper;
      var $control;
      var $control_input;
      var $dropdown;
      var $dropdown_content;
      var $dropdown_parent;
      var inputMode;
      var timeout_blur;
      var timeout_focus;
      var classes;
      var classes_plugins;
      var inputId;
  
      inputMode         = self.settings.mode;
      classes           = $input.attr('class') || '';
  
      $wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
      $control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
      $control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
      $dropdown_parent  = $(settings.dropdownParent || $wrapper);
      $dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
      $dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
  
      if(inputId = $input.attr('id')) {
        $control_input.attr('id', inputId + '-selectized');
        $("label[for='"+inputId+"']").attr('for', inputId + '-selectized');
      }
  
      if(self.settings.copyClassesToDropdown) {
        $dropdown.addClass(classes);
      }
  
      $wrapper.css({
        width: $input[0].style.width
      });
  
      if (self.plugins.names.length) {
        classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
        $wrapper.addClass(classes_plugins);
        $dropdown.addClass(classes_plugins);
      }
  
      if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
        $input.attr('multiple', 'multiple');
      }
  
      if (self.settings.placeholder) {
        $control_input.attr('placeholder', settings.placeholder);
      }
  
      // if splitOn was not passed in, construct it from the delimiter to allow pasting universally
      if (!self.settings.splitOn && self.settings.delimiter) {
        var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
      }
  
      if ($input.attr('autocorrect')) {
        $control_input.attr('autocorrect', $input.attr('autocorrect'));
      }
  
      if ($input.attr('autocapitalize')) {
        $control_input.attr('autocapitalize', $input.attr('autocapitalize'));
      }
  
      self.$wrapper          = $wrapper;
      self.$control          = $control;
      self.$control_input    = $control_input;
      self.$dropdown         = $dropdown;
      self.$dropdown_content = $dropdown_content;
  
      $dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
      $dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
      watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
      autoGrow($control_input);
  
      $control.on({
        mousedown : function() { return self.onMouseDown.apply(self, arguments); },
        click     : function() { return self.onClick.apply(self, arguments); }
      });
  
      $control_input.on({
        mousedown : function(e) { e.stopPropagation(); },
        keydown   : function() { return self.onKeyDown.apply(self, arguments); },
        keyup     : function() { return self.onKeyUp.apply(self, arguments); },
        keypress  : function() { return self.onKeyPress.apply(self, arguments); },
        resize    : function() { self.positionDropdown.apply(self, []); },
        blur      : function() { return self.onBlur.apply(self, arguments); },
        focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
        paste     : function() { return self.onPaste.apply(self, arguments); }
      });
  
      $document.on('keydown' + eventNS, function(e) {
        self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
        self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
        self.isShiftDown = e.shiftKey;
      });
  
      $document.on('keyup' + eventNS, function(e) {
        if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
        if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
        if (e.keyCode === KEY_CMD) self.isCmdDown = false;
      });
  
      $document.on('mousedown' + eventNS, function(e) {
        if (self.isFocused) {
          // prevent events on the dropdown scrollbar from causing the control to blur
          if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
            return false;
          }
          // blur on click outside
          if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
            self.blur(e.target);
          }
        }
      });
  
      $window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
        if (self.isOpen) {
          self.positionDropdown.apply(self, arguments);
        }
      });
      $window.on('mousemove' + eventNS, function() {
        self.ignoreHover = false;
      });
  
      // store original children and tab index so that they can be
      // restored when the destroy() method is called.
      this.revertSettings = {
        $children : $input.children().detach(),
        tabindex  : $input.attr('tabindex')
      };
  
      $input.attr('tabindex', -1).hide().after(self.$wrapper);
  
      if ($.isArray(settings.items)) {
        self.setValue(settings.items);
        delete settings.items;
      }
  
      // feature detect for the validation API
      if (SUPPORTS_VALIDITY_API) {
        $input.on('invalid' + eventNS, function(e) {
          e.preventDefault();
          self.isInvalid = true;
          self.refreshState();
        });
      }
  
      self.updateOriginalInput();
      self.refreshItems();
      self.refreshState();
      self.updatePlaceholder();
      self.isSetup = true;
  
      if ($input.is(':disabled')) {
        self.disable();
      }
  
      self.on('change', this.onChange);
  
      $input.data('selectize', self);
      $input.addClass('selectized');
      self.trigger('initialize');
  
      // preload options
      if (settings.preload === true) {
        self.onSearchChange('');
      }
  
    },
  
    /**
     * Sets up default rendering functions.
     */
    setupTemplates: function() {
      var self = this;
      var field_label = self.settings.labelField;
      var field_optgroup = self.settings.optgroupLabelField;
  
      var templates = {
        'optgroup': function(data) {
          return '<div class="optgroup">' + data.html + '</div>';
        },
        'optgroup_header': function(data, escape) {
          return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
        },
        'option': function(data, escape) {
          return '<div class="option">' + escape(data[field_label]) + '</div>';
        },
        'item': function(data, escape) {
          return '<div class="item">' + escape(data[field_label]) + '</div>';
        },
        'option_create': function(data, escape) {
          return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
        }
      };
  
      self.settings.render = $.extend({}, templates, self.settings.render);
    },
  
    /**
     * Maps fired events to callbacks provided
     * in the settings used when creating the control.
     */
    setupCallbacks: function() {
      var key, fn, callbacks = {
        'initialize'      : 'onInitialize',
        'change'          : 'onChange',
        'item_add'        : 'onItemAdd',
        'item_remove'     : 'onItemRemove',
        'clear'           : 'onClear',
        'option_add'      : 'onOptionAdd',
        'option_remove'   : 'onOptionRemove',
        'option_clear'    : 'onOptionClear',
        'optgroup_add'    : 'onOptionGroupAdd',
        'optgroup_remove' : 'onOptionGroupRemove',
        'optgroup_clear'  : 'onOptionGroupClear',
        'dropdown_open'   : 'onDropdownOpen',
        'dropdown_close'  : 'onDropdownClose',
        'type'            : 'onType',
        'load'            : 'onLoad',
        'focus'           : 'onFocus',
        'blur'            : 'onBlur'
      };
  
      for (key in callbacks) {
        if (callbacks.hasOwnProperty(key)) {
          fn = this.settings[callbacks[key]];
          if (fn) this.on(key, fn);
        }
      }
    },
  
    /**
     * Triggered when the main control element
     * has a click event.
     *
     * @param {object} e
     * @return {boolean}
     */
    onClick: function(e) {
      var self = this;
  
      // necessary for mobile webkit devices (manual focus triggering
      // is ignored unless invoked within a click event)
      if (!self.isFocused) {
        self.focus();
        e.preventDefault();
      }
    },
  
    /**
     * Triggered when the main control element
     * has a mouse down event.
     *
     * @param {object} e
     * @return {boolean}
     */
    onMouseDown: function(e) {
      var self = this;
      var defaultPrevented = e.isDefaultPrevented();
      var $target = $(e.target);
  
      if (self.isFocused) {
        // retain focus by preventing native handling. if the
        // event target is the input it should not be modified.
        // otherwise, text selection within the input won't work.
        if (e.target !== self.$control_input[0]) {
          if (self.settings.mode === 'single') {
            // toggle dropdown
            self.isOpen ? self.close() : self.open();
          } else if (!defaultPrevented) {
            self.setActiveItem(null);
          }
          return false;
        }
      } else {
        // give control focus
        if (!defaultPrevented) {
          window.setTimeout(function() {
            self.focus();
          }, 0);
        }
      }
    },
  
    /**
     * Triggered when the value of the control has been changed.
     * This should propagate the event to the original DOM
     * input / select element.
     */
    onChange: function() {
      this.$input.trigger('change');
    },
  
    /**
     * Triggered on <input> paste.
     *
     * @param {object} e
     * @returns {boolean}
     */
    onPaste: function(e) {
      var self = this;
  
      if (self.isFull() || self.isInputHidden || self.isLocked) {
        e.preventDefault();
        return;
      }
  
      // If a regex or string is included, this will split the pasted
      // input and create Items for each separate value
      if (self.settings.splitOn) {
  
        // Wait for pasted text to be recognized in value
        setTimeout(function() {
          var pastedText = self.$control_input.val();
          if(!pastedText.match(self.settings.splitOn)){ return }
  
          var splitInput = $.trim(pastedText).split(self.settings.splitOn);
          for (var i = 0, n = splitInput.length; i < n; i++) {
            self.createItem(splitInput[i]);
          }
        }, 0);
      }
    },
  
    /**
     * Triggered on <input> keypress.
     *
     * @param {object} e
     * @returns {boolean}
     */
    onKeyPress: function(e) {
      if (this.isLocked) return e && e.preventDefault();
      var character = String.fromCharCode(e.keyCode || e.which);
      if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
        this.createItem();
        e.preventDefault();
        return false;
      }
    },
  
    /**
     * Triggered on <input> keydown.
     *
     * @param {object} e
     * @returns {boolean}
     */
    onKeyDown: function(e) {
      var isInput = e.target === this.$control_input[0];
      var self = this;
  
      if (self.isLocked) {
        if (e.keyCode !== KEY_TAB) {
          e.preventDefault();
        }
        return;
      }
  
      switch (e.keyCode) {
        case KEY_A:
          if (self.isCmdDown) {
            self.selectAll();
            return;
          }
          break;
        case KEY_ESC:
          if (self.isOpen) {
            e.preventDefault();
            e.stopPropagation();
            self.close();
          }
          return;
        case KEY_N:
          if (!e.ctrlKey || e.altKey) break;
        case KEY_DOWN:
          if (!self.isOpen && self.hasOptions) {
            self.open();
          } else if (self.$activeOption) {
            self.ignoreHover = true;
            var $next = self.getAdjacentOption(self.$activeOption, 1);
            if ($next.length) self.setActiveOption($next, true, true);
          }
          e.preventDefault();
          return;
        case KEY_P:
          if (!e.ctrlKey || e.altKey) break;
        case KEY_UP:
          if (self.$activeOption) {
            self.ignoreHover = true;
            var $prev = self.getAdjacentOption(self.$activeOption, -1);
            if ($prev.length) self.setActiveOption($prev, true, true);
          }
          e.preventDefault();
          return;
        case KEY_RETURN:
          if (self.isOpen && self.$activeOption) {
            self.onOptionSelect({currentTarget: self.$activeOption});
            e.preventDefault();
          }
          return;
        case KEY_LEFT:
          self.advanceSelection(-1, e);
          return;
        case KEY_RIGHT:
          self.advanceSelection(1, e);
          return;
        case KEY_TAB:
          if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
            self.onOptionSelect({currentTarget: self.$activeOption});
  
            // Default behaviour is to jump to the next field, we only want this
            // if the current field doesn't accept any more entries
            if (!self.isFull()) {
              e.preventDefault();
            }
          }
          if (self.settings.create && self.createItem()) {
            e.preventDefault();
          }
          return;
        case KEY_BACKSPACE:
        case KEY_DELETE:
          self.deleteSelection(e);
          return;
      }
  
      if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        return;
      }
    },
  
    /**
     * Triggered on <input> keyup.
     *
     * @param {object} e
     * @returns {boolean}
     */
    onKeyUp: function(e) {
      var self = this;
  
      if (self.isLocked) return e && e.preventDefault();
      var value = self.$control_input.val() || '';
      if (self.lastValue !== value) {
        self.lastValue = value;
        self.onSearchChange(value);
        self.refreshOptions();
        self.trigger('type', value);
      }
    },
  
    /**
     * Invokes the user-provide option provider / loader.
     *
     * Note: this function is debounced in the Selectize
     * constructor (by `settings.loadThrottle` milliseconds)
     *
     * @param {string} value
     */
    onSearchChange: function(value) {
      var self = this;
      var fn = self.settings.load;
      if (!fn) return;
      if (self.loadedSearches.hasOwnProperty(value)) return;
      self.loadedSearches[value] = true;
      self.load(function(callback) {
        fn.apply(self, [value, callback]);
      });
    },
  
    /**
     * Triggered on <input> focus.
     *
     * @param {object} e (optional)
     * @returns {boolean}
     */
    onFocus: function(e) {
      var self = this;
      var wasFocused = self.isFocused;
  
      if (self.isDisabled) {
        self.blur();
        e && e.preventDefault();
        return false;
      }
  
      if (self.ignoreFocus) return;
      self.isFocused = true;
      if (self.settings.preload === 'focus') self.onSearchChange('');
  
      if (!wasFocused) self.trigger('focus');
  
      if (!self.$activeItems.length) {
        self.showInput();
        self.setActiveItem(null);
        self.refreshOptions(!!self.settings.openOnFocus);
      }
  
      self.refreshState();
    },
  
    /**
     * Triggered on <input> blur.
     *
     * @param {object} e
     * @param {Element} dest
     */
    onBlur: function(e, dest) {
      var self = this;
      if (!self.isFocused) return;
      self.isFocused = false;
  
      if (self.ignoreFocus) {
        return;
      } else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
        // necessary to prevent IE closing the dropdown when the scrollbar is clicked
        self.ignoreBlur = true;
        self.onFocus(e);
        return;
      }
  
      var deactivate = function() {
        self.close();
        self.setTextboxValue('');
        self.setActiveItem(null);
        self.setActiveOption(null);
        self.setCaret(self.items.length);
        self.refreshState();
  
        // IE11 bug: element still marked as active
        dest && dest.focus && dest.focus();
  
        self.ignoreFocus = false;
        self.trigger('blur');
      };
  
      self.ignoreFocus = true;
      if (self.settings.create && self.settings.createOnBlur) {
        self.createItem(null, false, deactivate);
      } else {
        deactivate();
      }
    },
  
    /**
     * Triggered when the user rolls over
     * an option in the autocomplete dropdown menu.
     *
     * @param {object} e
     * @returns {boolean}
     */
    onOptionHover: function(e) {
      if (this.ignoreHover) return;
      this.setActiveOption(e.currentTarget, false);
    },
  
    /**
     * Triggered when the user clicks on an option
     * in the autocomplete dropdown menu.
     *
     * @param {object} e
     * @returns {boolean}
     */
    onOptionSelect: function(e) {
      var value, $target, $option, self = this;
  
      if (e.preventDefault) {
        e.preventDefault();
        e.stopPropagation();
      }
  
      $target = $(e.currentTarget);
      if ($target.hasClass('create')) {
        self.createItem(null, function() {
          if (self.settings.closeAfterSelect) {
            self.close();
          }
        });
      } else {
        value = $target.attr('data-value');
        if (typeof value !== 'undefined') {
          self.lastQuery = null;
          self.setTextboxValue('');
          self.addItem(value);
          if (self.settings.closeAfterSelect) {
            self.close();
          } else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
            self.setActiveOption(self.getOption(value));
          }
        }
      }
    },
  
    /**
     * Triggered when the user clicks on an item
     * that has been selected.
     *
     * @param {object} e
     * @returns {boolean}
     */
    onItemSelect: function(e) {
      var self = this;
  
      if (self.isLocked) return;
      if (self.settings.mode === 'multi') {
        e.preventDefault();
        self.setActiveItem(e.currentTarget, e);
      }
    },
  
    /**
     * Invokes the provided method that provides
     * results to a callback---which are then added
     * as options to the control.
     *
     * @param {function} fn
     */
    load: function(fn) {
      var self = this;
      var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);
  
      self.loading++;
      fn.apply(self, [function(results) {
        self.loading = Math.max(self.loading - 1, 0);
        if (results && results.length) {
          self.addOption(results);
          self.refreshOptions(self.isFocused && !self.isInputHidden);
        }
        if (!self.loading) {
          $wrapper.removeClass(self.settings.loadingClass);
        }
        self.trigger('load', results);
      }]);
    },
  
    /**
     * Sets the input field of the control to the specified value.
     *
     * @param {string} value
     */
    setTextboxValue: function(value) {
      var $input = this.$control_input;
      var changed = $input.val() !== value;
      if (changed) {
        $input.val(value).triggerHandler('update');
        this.lastValue = value;
      }
    },
  
    /**
     * Returns the value of the control. If multiple items
     * can be selected (e.g. <select multiple>), this returns
     * an array. If only one item can be selected, this
     * returns a string.
     *
     * @returns {mixed}
     */
    getValue: function() {
      if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
        return this.items;
      } else {
        return this.items.join(this.settings.delimiter);
      }
    },
  
    /**
     * Resets the selected items to the given value.
     *
     * @param {mixed} value
     */
    setValue: function(value, silent) {
      var events = silent ? [] : ['change'];
  
      debounce_events(this, events, function() {
        this.clear(silent);
        this.addItems(value, silent);
      });
    },
  
    /**
     * Sets the selected item.
     *
     * @param {object} $item
     * @param {object} e (optional)
     */
    setActiveItem: function($item, e) {
      var self = this;
      var eventName;
      var i, idx, begin, end, item, swap;
      var $last;
  
      if (self.settings.mode === 'single') return;
      $item = $($item);
  
      // clear the active selection
      if (!$item.length) {
        $(self.$activeItems).removeClass('active');
        self.$activeItems = [];
        if (self.isFocused) {
          self.showInput();
        }
        return;
      }
  
      // modify selection
      eventName = e && e.type.toLowerCase();
  
      if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
        $last = self.$control.children('.active:last');
        begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
        end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
        if (begin > end) {
          swap  = begin;
          begin = end;
          end   = swap;
        }
        for (i = begin; i <= end; i++) {
          item = self.$control[0].childNodes[i];
          if (self.$activeItems.indexOf(item) === -1) {
            $(item).addClass('active');
            self.$activeItems.push(item);
          }
        }
        e.preventDefault();
      } else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
        if ($item.hasClass('active')) {
          idx = self.$activeItems.indexOf($item[0]);
          self.$activeItems.splice(idx, 1);
          $item.removeClass('active');
        } else {
          self.$activeItems.push($item.addClass('active')[0]);
        }
      } else {
        $(self.$activeItems).removeClass('active');
        self.$activeItems = [$item.addClass('active')[0]];
      }
  
      // ensure control has focus
      self.hideInput();
      if (!this.isFocused) {
        self.focus();
      }
    },
  
    /**
     * Sets the selected item in the dropdown menu
     * of available options.
     *
     * @param {object} $object
     * @param {boolean} scroll
     * @param {boolean} animate
     */
    setActiveOption: function($option, scroll, animate) {
      var height_menu, height_item, y;
      var scroll_top, scroll_bottom;
      var self = this;
  
      if (self.$activeOption) self.$activeOption.removeClass('active');
      self.$activeOption = null;
  
      $option = $($option);
      if (!$option.length) return;
  
      self.$activeOption = $option.addClass('active');
  
      if (scroll || !isset(scroll)) {
  
        height_menu   = self.$dropdown_content.height();
        height_item   = self.$activeOption.outerHeight(true);
        scroll        = self.$dropdown_content.scrollTop() || 0;
        y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
        scroll_top    = y;
        scroll_bottom = y - height_menu + height_item;
  
        if (y + height_item > height_menu + scroll) {
          self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
        } else if (y < scroll) {
          self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
        }
  
      }
    },
  
    /**
     * Selects all items (CTRL + A).
     */
    selectAll: function() {
      var self = this;
      if (self.settings.mode === 'single') return;
  
      self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
      if (self.$activeItems.length) {
        self.hideInput();
        self.close();
      }
      self.focus();
    },
  
    /**
     * Hides the input element out of view, while
     * retaining its focus.
     */
    hideInput: function() {
      var self = this;
  
      self.setTextboxValue('');
      self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
      self.isInputHidden = true;
    },
  
    /**
     * Restores input visibility.
     */
    showInput: function() {
      this.$control_input.css({opacity: 1, position: 'relative', left: 0});
      this.isInputHidden = false;
    },
  
    /**
     * Gives the control focus.
     */
    focus: function() {
      var self = this;
      if (self.isDisabled) return;
  
      self.ignoreFocus = true;
      self.$control_input[0].focus();
      window.setTimeout(function() {
        self.ignoreFocus = false;
        self.onFocus();
      }, 0);
    },
  
    /**
     * Forces the control out of focus.
     *
     * @param {Element} dest
     */
    blur: function(dest) {
      this.$control_input[0].blur();
      this.onBlur(null, dest);
    },
  
    /**
     * Returns a function that scores an object
     * to show how good of a match it is to the
     * provided query.
     *
     * @param {string} query
     * @param {object} options
     * @return {function}
     */
    getScoreFunction: function(query) {
      return this.sifter.getScoreFunction(query, this.getSearchOptions());
    },
  
    /**
     * Returns search options for sifter (the system
     * for scoring and sorting results).
     *
     * @see https://github.com/brianreavis/sifter.js
     * @return {object}
     */
    getSearchOptions: function() {
      var settings = this.settings;
      var sort = settings.sortField;
      if (typeof sort === 'string') {
        sort = [{field: sort}];
      }
  
      return {
        fields      : settings.searchField,
        conjunction : settings.searchConjunction,
        sort        : sort
      };
    },
  
    /**
     * Searches through available options and returns
     * a sorted array of matches.
     *
     * Returns an object containing:
     *
     *   - query {string}
     *   - tokens {array}
     *   - total {int}
     *   - items {array}
     *
     * @param {string} query
     * @returns {object}
     */
    search: function(query) {
      var i, value, score, result, calculateScore;
      var self     = this;
      var settings = self.settings;
      var options  = this.getSearchOptions();
  
      // validate user-provided result scoring function
      if (settings.score) {
        calculateScore = self.settings.score.apply(this, [query]);
        if (typeof calculateScore !== 'function') {
          throw new Error('Selectize "score" setting must be a function that returns a function');
        }
      }
  
      // perform search
      if (query !== self.lastQuery) {
        self.lastQuery = query;
        result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
        self.currentResults = result;
      } else {
        result = $.extend(true, {}, self.currentResults);
      }
  
      // filter out selected items
      if (settings.hideSelected) {
        for (i = result.items.length - 1; i >= 0; i--) {
          if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
            result.items.splice(i, 1);
          }
        }
      }
  
      return result;
    },
  
    /**
     * Refreshes the list of available options shown
     * in the autocomplete dropdown menu.
     *
     * @param {boolean} triggerDropdown
     */
    refreshOptions: function(triggerDropdown) {
      var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
      var $active, $active_before, $create;
  
      if (typeof triggerDropdown === 'undefined') {
        triggerDropdown = true;
      }
  
      var self              = this;
      var query             = $.trim(self.$control_input.val());
      var results           = self.search(query);
      var $dropdown_content = self.$dropdown_content;
      var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
  
      // build markup
      n = results.items.length;
      if (typeof self.settings.maxOptions === 'number') {
        n = Math.min(n, self.settings.maxOptions);
      }
  
      // render and group available options individually
      groups = {};
      groups_order = [];
  
      for (i = 0; i < n; i++) {
        option      = self.options[results.items[i].id];
        option_html = self.render('option', option);
        optgroup    = option[self.settings.optgroupField] || '';
        optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
  
        for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
          optgroup = optgroups[j];
          if (!self.optgroups.hasOwnProperty(optgroup)) {
            optgroup = '';
          }
          if (!groups.hasOwnProperty(optgroup)) {
            groups[optgroup] = document.createDocumentFragment();
            groups_order.push(optgroup);
          }
          groups[optgroup].appendChild(option_html);
        }
      }
  
      // sort optgroups
      if (this.settings.lockOptgroupOrder) {
        groups_order.sort(function(a, b) {
          var a_order = self.optgroups[a].$order || 0;
          var b_order = self.optgroups[b].$order || 0;
          return a_order - b_order;
        });
      }
  
      // render optgroup headers & join groups
      html = document.createDocumentFragment();
      for (i = 0, n = groups_order.length; i < n; i++) {
        optgroup = groups_order[i];
        if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
          // render the optgroup header and options within it,
          // then pass it to the wrapper template
          html_children = document.createDocumentFragment();
          html_children.appendChild(self.render('optgroup_header', self.optgroups[optgroup]));
          html_children.appendChild(groups[optgroup]);
  
          html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
            html: domToString(html_children),
            dom:  html_children
          })));
        } else {
          html.appendChild(groups[optgroup]);
        }
      }
  
      $dropdown_content.html(html);
  
      // highlight matching terms inline
      if (self.settings.highlight && results.query.length && results.tokens.length) {
        $dropdown_content.removeHighlight();
        for (i = 0, n = results.tokens.length; i < n; i++) {
          highlight($dropdown_content, results.tokens[i].regex);
        }
      }
  
      // add "selected" class to selected options
      if (!self.settings.hideSelected) {
        for (i = 0, n = self.items.length; i < n; i++) {
          self.getOption(self.items[i]).addClass('selected');
        }
      }
  
      // add create option
      has_create_option = self.canCreate(query);
      if (has_create_option) {
        $dropdown_content.prepend(self.render('option_create', {input: query}));
        $create = $($dropdown_content[0].childNodes[0]);
      }
  
      // activate
      self.hasOptions = results.items.length > 0 || has_create_option;
      if (self.hasOptions) {
        if (results.items.length > 0) {
          $active_before = active_before && self.getOption(active_before);
          if ($active_before && $active_before.length) {
            $active = $active_before;
          } else if (self.settings.mode === 'single' && self.items.length) {
            $active = self.getOption(self.items[0]);
          }
          if (!$active || !$active.length) {
            if ($create && !self.settings.addPrecedence) {
              $active = self.getAdjacentOption($create, 1);
            } else {
              $active = $dropdown_content.find('[data-selectable]:first');
            }
          }
        } else {
          $active = $create;
        }
        self.setActiveOption($active);
        if (triggerDropdown && !self.isOpen) { self.open(); }
      } else {
        self.setActiveOption(null);
        if (triggerDropdown && self.isOpen) { self.close(); }
      }
    },
  
    /**
     * Adds an available option. If it already exists,
     * nothing will happen. Note: this does not refresh
     * the options list dropdown (use `refreshOptions`
     * for that).
     *
     * Usage:
     *
     *   this.addOption(data)
     *
     * @param {object|array} data
     */
    addOption: function(data) {
      var i, n, value, self = this;
  
      if ($.isArray(data)) {
        for (i = 0, n = data.length; i < n; i++) {
          self.addOption(data[i]);
        }
        return;
      }
  
      if (value = self.registerOption(data)) {
        self.userOptions[value] = true;
        self.lastQuery = null;
        self.trigger('option_add', value, data);
      }
    },
  
    /**
     * Registers an option to the pool of options.
     *
     * @param {object} data
     * @return {boolean|string}
     */
    registerOption: function(data) {
      var key = hash_key(data[this.settings.valueField]);
      if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
      data.$order = data.$order || ++this.order;
      this.options[key] = data;
      return key;
    },
  
    /**
     * Registers an option group to the pool of option groups.
     *
     * @param {object} data
     * @return {boolean|string}
     */
    registerOptionGroup: function(data) {
      var key = hash_key(data[this.settings.optgroupValueField]);
      if (!key) return false;
  
      data.$order = data.$order || ++this.order;
      this.optgroups[key] = data;
      return key;
    },
  
    /**
     * Registers a new optgroup for options
     * to be bucketed into.
     *
     * @param {string} id
     * @param {object} data
     */
    addOptionGroup: function(id, data) {
      data[this.settings.optgroupValueField] = id;
      if (id = this.registerOptionGroup(data)) {
        this.trigger('optgroup_add', id, data);
      }
    },
  
    /**
     * Removes an existing option group.
     *
     * @param {string} id
     */
    removeOptionGroup: function(id) {
      if (this.optgroups.hasOwnProperty(id)) {
        delete this.optgroups[id];
        this.renderCache = {};
        this.trigger('optgroup_remove', id);
      }
    },
  
    /**
     * Clears all existing option groups.
     */
    clearOptionGroups: function() {
      this.optgroups = {};
      this.renderCache = {};
      this.trigger('optgroup_clear');
    },
  
    /**
     * Updates an option available for selection. If
     * it is visible in the selected items or options
     * dropdown, it will be re-rendered automatically.
     *
     * @param {string} value
     * @param {object} data
     */
    updateOption: function(value, data) {
      var self = this;
      var $item, $item_new;
      var value_new, index_item, cache_items, cache_options, order_old;
  
      value     = hash_key(value);
      value_new = hash_key(data[self.settings.valueField]);
  
      // sanity checks
      if (value === null) return;
      if (!self.options.hasOwnProperty(value)) return;
      if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
  
      order_old = self.options[value].$order;
  
      // update references
      if (value_new !== value) {
        delete self.options[value];
        index_item = self.items.indexOf(value);
        if (index_item !== -1) {
          self.items.splice(index_item, 1, value_new);
        }
      }
      data.$order = data.$order || order_old;
      self.options[value_new] = data;
  
      // invalidate render cache
      cache_items = self.renderCache['item'];
      cache_options = self.renderCache['option'];
  
      if (cache_items) {
        delete cache_items[value];
        delete cache_items[value_new];
      }
      if (cache_options) {
        delete cache_options[value];
        delete cache_options[value_new];
      }
  
      // update the item if it's selected
      if (self.items.indexOf(value_new) !== -1) {
        $item = self.getItem(value);
        $item_new = $(self.render('item', data));
        if ($item.hasClass('active')) $item_new.addClass('active');
        $item.replaceWith($item_new);
      }
  
      // invalidate last query because we might have updated the sortField
      self.lastQuery = null;
  
      // update dropdown contents
      if (self.isOpen) {
        self.refreshOptions(false);
      }
    },
  
    /**
     * Removes a single option.
     *
     * @param {string} value
     * @param {boolean} silent
     */
    removeOption: function(value, silent) {
      var self = this;
      value = hash_key(value);
  
      var cache_items = self.renderCache['item'];
      var cache_options = self.renderCache['option'];
      if (cache_items) delete cache_items[value];
      if (cache_options) delete cache_options[value];
  
      delete self.userOptions[value];
      delete self.options[value];
      self.lastQuery = null;
      self.trigger('option_remove', value);
      self.removeItem(value, silent);
    },
  
    /**
     * Clears all options.
     */
    clearOptions: function() {
      var self = this;
  
      self.loadedSearches = {};
      self.userOptions = {};
      self.renderCache = {};
      self.options = self.sifter.items = {};
      self.lastQuery = null;
      self.trigger('option_clear');
      self.clear();
    },
  
    /**
     * Returns the jQuery element of the option
     * matching the given value.
     *
     * @param {string} value
     * @returns {object}
     */
    getOption: function(value) {
      return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
    },
  
    /**
     * Returns the jQuery element of the next or
     * previous selectable option.
     *
     * @param {object} $option
     * @param {int} direction  can be 1 for next or -1 for previous
     * @return {object}
     */
    getAdjacentOption: function($option, direction) {
      var $options = this.$dropdown.find('[data-selectable]');
      var index    = $options.index($option) + direction;
  
      return index >= 0 && index < $options.length ? $options.eq(index) : $();
    },
  
    /**
     * Finds the first element with a "data-value" attribute
     * that matches the given value.
     *
     * @param {mixed} value
     * @param {object} $els
     * @return {object}
     */
    getElementWithValue: function(value, $els) {
      value = hash_key(value);
  
      if (typeof value !== 'undefined' && value !== null) {
        for (var i = 0, n = $els.length; i < n; i++) {
          if ($els[i].getAttribute('data-value') === value) {
            return $($els[i]);
          }
        }
      }
  
      return $();
    },
  
    /**
     * Returns the jQuery element of the item
     * matching the given value.
     *
     * @param {string} value
     * @returns {object}
     */
    getItem: function(value) {
      return this.getElementWithValue(value, this.$control.children());
    },
  
    /**
     * "Selects" multiple items at once. Adds them to the list
     * at the current caret position.
     *
     * @param {string} value
     * @param {boolean} silent
     */
    addItems: function(values, silent) {
      var items = $.isArray(values) ? values : [values];
      for (var i = 0, n = items.length; i < n; i++) {
        this.isPending = (i < n - 1);
        this.addItem(items[i], silent);
      }
    },
  
    /**
     * "Selects" an item. Adds it to the list
     * at the current caret position.
     *
     * @param {string} value
     * @param {boolean} silent
     */
    addItem: function(value, silent) {
      var events = silent ? [] : ['change'];
  
      debounce_events(this, events, function() {
        var $item, $option, $options;
        var self = this;
        var inputMode = self.settings.mode;
        var i, active, value_next, wasFull;
        value = hash_key(value);
  
        if (self.items.indexOf(value) !== -1) {
          if (inputMode === 'single') self.close();
          return;
        }
  
        if (!self.options.hasOwnProperty(value)) return;
        if (inputMode === 'single') self.clear(silent);
        if (inputMode === 'multi' && self.isFull()) return;
  
        $item = $(self.render('item', self.options[value]));
        wasFull = self.isFull();
        self.items.splice(self.caretPos, 0, value);
        self.insertAtCaret($item);
        if (!self.isPending || (!wasFull && self.isFull())) {
          self.refreshState();
        }
  
        if (self.isSetup) {
          $options = self.$dropdown_content.find('[data-selectable]');
  
          // update menu / remove the option (if this is not one item being added as part of series)
          if (!self.isPending) {
            $option = self.getOption(value);
            value_next = self.getAdjacentOption($option, 1).attr('data-value');
            self.refreshOptions(self.isFocused && inputMode !== 'single');
            if (value_next) {
              self.setActiveOption(self.getOption(value_next));
            }
          }
  
          // hide the menu if the maximum number of items have been selected or no options are left
          if (!$options.length || self.isFull()) {
            self.close();
          } else {
            self.positionDropdown();
          }
  
          self.updatePlaceholder();
          self.trigger('item_add', value, $item);
          self.updateOriginalInput({silent: silent});
        }
      });
    },
  
    /**
     * Removes the selected item matching
     * the provided value.
     *
     * @param {string} value
     */
    removeItem: function(value, silent) {
      var self = this;
      var $item, i, idx;
  
      $item = (value instanceof $) ? value : self.getItem(value);
      value = hash_key($item.attr('data-value'));
      i = self.items.indexOf(value);
  
      if (i !== -1) {
        $item.remove();
        if ($item.hasClass('active')) {
          idx = self.$activeItems.indexOf($item[0]);
          self.$activeItems.splice(idx, 1);
        }
  
        self.items.splice(i, 1);
        self.lastQuery = null;
        if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
          self.removeOption(value, silent);
        }
  
        if (i < self.caretPos) {
          self.setCaret(self.caretPos - 1);
        }
  
        self.refreshState();
        self.updatePlaceholder();
        self.updateOriginalInput({silent: silent});
        self.positionDropdown();
        self.trigger('item_remove', value, $item);
      }
    },
  
    /**
     * Invokes the `create` method provided in the
     * selectize options that should provide the data
     * for the new item, given the user input.
     *
     * Once this completes, it will be added
     * to the item list.
     *
     * @param {string} value
     * @param {boolean} [triggerDropdown]
     * @param {function} [callback]
     * @return {boolean}
     */
    createItem: function(input, triggerDropdown) {
      var self  = this;
      var caret = self.caretPos;
      input = input || $.trim(self.$control_input.val() || '');
  
      var callback = arguments[arguments.length - 1];
      if (typeof callback !== 'function') callback = function() {};
  
      if (typeof triggerDropdown !== 'boolean') {
        triggerDropdown = true;
      }
  
      if (!self.canCreate(input)) {
        callback();
        return false;
      }
  
      self.lock();
  
      var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
        var data = {};
        data[self.settings.labelField] = input;
        data[self.settings.valueField] = input;
        return data;
      };
  
      var create = once(function(data) {
        self.unlock();
  
        if (!data || typeof data !== 'object') return callback();
        var value = hash_key(data[self.settings.valueField]);
        if (typeof value !== 'string') return callback();
  
        self.setTextboxValue('');
        self.addOption(data);
        self.setCaret(caret);
        self.addItem(value);
        self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
        callback(data);
      });
  
      var output = setup.apply(this, [input, create]);
      if (typeof output !== 'undefined') {
        create(output);
      }
  
      return true;
    },
  
    /**
     * Re-renders the selected item lists.
     */
    refreshItems: function() {
      this.lastQuery = null;
  
      if (this.isSetup) {
        this.addItem(this.items);
      }
  
      this.refreshState();
      this.updateOriginalInput();
    },
  
    /**
     * Updates all state-dependent attributes
     * and CSS classes.
     */
    refreshState: function() {
      this.refreshValidityState();
      this.refreshClasses();
    },
  
    /**
     * Update the `required` attribute of both input and control input.
     *
     * The `required` property needs to be activated on the control input
     * for the error to be displayed at the right place. `required` also
     * needs to be temporarily deactivated on the input since the input is
     * hidden and can't show errors.
     */
    refreshValidityState: function() {
      if (!this.isRequired) return false;
  
      var invalid = !this.items.length;
  
      this.isInvalid = invalid;
      this.$control_input.prop('required', invalid);
      this.$input.prop('required', !invalid);
    },
  
    /**
     * Updates all state-dependent CSS classes.
     */
    refreshClasses: function() {
      var self     = this;
      var isFull   = self.isFull();
      var isLocked = self.isLocked;
  
      self.$wrapper
        .toggleClass('rtl', self.rtl);
  
      self.$control
        .toggleClass('focus', self.isFocused)
        .toggleClass('disabled', self.isDisabled)
        .toggleClass('required', self.isRequired)
        .toggleClass('invalid', self.isInvalid)
        .toggleClass('locked', isLocked)
        .toggleClass('full', isFull).toggleClass('not-full', !isFull)
        .toggleClass('input-active', self.isFocused && !self.isInputHidden)
        .toggleClass('dropdown-active', self.isOpen)
        .toggleClass('has-options', !$.isEmptyObject(self.options))
        .toggleClass('has-items', self.items.length > 0);
  
      self.$control_input.data('grow', !isFull && !isLocked);
    },
  
    /**
     * Determines whether or not more items can be added
     * to the control without exceeding the user-defined maximum.
     *
     * @returns {boolean}
     */
    isFull: function() {
      return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
    },
  
    /**
     * Refreshes the original <select> or <input>
     * element to reflect the current state.
     */
    updateOriginalInput: function(opts) {
      var i, n, options, label, self = this;
      opts = opts || {};
  
      if (self.tagType === TAG_SELECT) {
        options = [];
        for (i = 0, n = self.items.length; i < n; i++) {
          label = self.options[self.items[i]][self.settings.labelField] || '';
          options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
        }
        if (!options.length && !this.$input.attr('multiple')) {
          options.push('<option value="" selected="selected"></option>');
        }
        self.$input.html(options.join(''));
      } else {
        self.$input.val(self.getValue());
        self.$input.attr('value',self.$input.val());
      }
  
      if (self.isSetup) {
        if (!opts.silent) {
          self.trigger('change', self.$input.val());
        }
      }
    },
  
    /**
     * Shows/hide the input placeholder depending
     * on if there items in the list already.
     */
    updatePlaceholder: function() {
      if (!this.settings.placeholder) return;
      var $input = this.$control_input;
  
      if (this.items.length) {
        $input.removeAttr('placeholder');
      } else {
        $input.attr('placeholder', this.settings.placeholder);
      }
      $input.triggerHandler('update', {force: true});
    },
  
    /**
     * Shows the autocomplete dropdown containing
     * the available options.
     */
    open: function() {
      var self = this;
  
      if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
      self.focus();
      self.isOpen = true;
      self.refreshState();
      self.$dropdown.css({visibility: 'hidden', display: 'block'});
      self.positionDropdown();
      self.$dropdown.css({visibility: 'visible'});
      self.trigger('dropdown_open', self.$dropdown);
    },
  
    /**
     * Closes the autocomplete dropdown menu.
     */
    close: function() {
      var self = this;
      var trigger = self.isOpen;
  
      if (self.settings.mode === 'single' && self.items.length) {
        self.hideInput();
        self.$control_input.blur(); // close keyboard on iOS
      }
  
      self.isOpen = false;
      self.$dropdown.hide();
      self.setActiveOption(null);
      self.refreshState();
  
      if (trigger) self.trigger('dropdown_close', self.$dropdown);
    },
  
    /**
     * Calculates and applies the appropriate
     * position of the dropdown.
     */
    positionDropdown: function() {
      var $control = this.$control;
      var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
      offset.top += $control.outerHeight(true);
  
      this.$dropdown.css({
        width : $control.outerWidth(),
        top   : offset.top,
        left  : offset.left
      });
    },
  
    /**
     * Resets / clears all selected items
     * from the control.
     *
     * @param {boolean} silent
     */
    clear: function(silent) {
      var self = this;
  
      if (!self.items.length) return;
      self.$control.children(':not(input)').remove();
      self.items = [];
      self.lastQuery = null;
      self.setCaret(0);
      self.setActiveItem(null);
      self.updatePlaceholder();
      self.updateOriginalInput({silent: silent});
      self.refreshState();
      self.showInput();
      self.trigger('clear');
    },
  
    /**
     * A helper method for inserting an element
     * at the current caret position.
     *
     * @param {object} $el
     */
    insertAtCaret: function($el) {
      var caret = Math.min(this.caretPos, this.items.length);
      if (caret === 0) {
        this.$control.prepend($el);
      } else {
        $(this.$control[0].childNodes[caret]).before($el);
      }
      this.setCaret(caret + 1);
    },
  
    /**
     * Removes the current selected item(s).
     *
     * @param {object} e (optional)
     * @returns {boolean}
     */
    deleteSelection: function(e) {
      var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
      var self = this;
  
      direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
      selection = getSelection(self.$control_input[0]);
  
      if (self.$activeOption && !self.settings.hideSelected) {
        option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
      }
  
      // determine items that will be removed
      values = [];
  
      if (self.$activeItems.length) {
        $tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
        caret = self.$control.children(':not(input)').index($tail);
        if (direction > 0) { caret++; }
  
        for (i = 0, n = self.$activeItems.length; i < n; i++) {
          values.push($(self.$activeItems[i]).attr('data-value'));
        }
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
      } else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
        if (direction < 0 && selection.start === 0 && selection.length === 0) {
          values.push(self.items[self.caretPos - 1]);
        } else if (direction > 0 && selection.start === self.$control_input.val().length) {
          values.push(self.items[self.caretPos]);
        }
      }
  
      // allow the callback to abort
      if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
        return false;
      }
  
      // perform removal
      if (typeof caret !== 'undefined') {
        self.setCaret(caret);
      }
      while (values.length) {
        self.removeItem(values.pop());
      }
  
      self.showInput();
      self.positionDropdown();
      self.refreshOptions(true);
  
      // select previous option
      if (option_select) {
        $option_select = self.getOption(option_select);
        if ($option_select.length) {
          self.setActiveOption($option_select);
        }
      }
  
      return true;
    },
  
    /**
     * Selects the previous / next item (depending
     * on the `direction` argument).
     *
     * > 0 - right
     * < 0 - left
     *
     * @param {int} direction
     * @param {object} e (optional)
     */
    advanceSelection: function(direction, e) {
      var tail, selection, idx, valueLength, cursorAtEdge, $tail;
      var self = this;
  
      if (direction === 0) return;
      if (self.rtl) direction *= -1;
  
      tail = direction > 0 ? 'last' : 'first';
      selection = getSelection(self.$control_input[0]);
  
      if (self.isFocused && !self.isInputHidden) {
        valueLength = self.$control_input.val().length;
        cursorAtEdge = direction < 0
          ? selection.start === 0 && selection.length === 0
          : selection.start === valueLength;
  
        if (cursorAtEdge && !valueLength) {
          self.advanceCaret(direction, e);
        }
      } else {
        $tail = self.$control.children('.active:' + tail);
        if ($tail.length) {
          idx = self.$control.children(':not(input)').index($tail);
          self.setActiveItem(null);
          self.setCaret(direction > 0 ? idx + 1 : idx);
        }
      }
    },
  
    /**
     * Moves the caret left / right.
     *
     * @param {int} direction
     * @param {object} e (optional)
     */
    advanceCaret: function(direction, e) {
      var self = this, fn, $adj;
  
      if (direction === 0) return;
  
      fn = direction > 0 ? 'next' : 'prev';
      if (self.isShiftDown) {
        $adj = self.$control_input[fn]();
        if ($adj.length) {
          self.hideInput();
          self.setActiveItem($adj);
          e && e.preventDefault();
        }
      } else {
        self.setCaret(self.caretPos + direction);
      }
    },
  
    /**
     * Moves the caret to the specified index.
     *
     * @param {int} i
     */
    setCaret: function(i) {
      var self = this;
  
      if (self.settings.mode === 'single') {
        i = self.items.length;
      } else {
        i = Math.max(0, Math.min(self.items.length, i));
      }
  
      if(!self.isPending) {
        // the input must be moved by leaving it in place and moving the
        // siblings, due to the fact that focus cannot be restored once lost
        // on mobile webkit devices
        var j, n, fn, $children, $child;
        $children = self.$control.children(':not(input)');
        for (j = 0, n = $children.length; j < n; j++) {
          $child = $($children[j]).detach();
          if (j <  i) {
            self.$control_input.before($child);
          } else {
            self.$control.append($child);
          }
        }
      }
  
      self.caretPos = i;
    },
  
    /**
     * Disables user input on the control. Used while
     * items are being asynchronously created.
     */
    lock: function() {
      this.close();
      this.isLocked = true;
      this.refreshState();
    },
  
    /**
     * Re-enables user input on the control.
     */
    unlock: function() {
      this.isLocked = false;
      this.refreshState();
    },
  
    /**
     * Disables user input on the control completely.
     * While disabled, it cannot receive focus.
     */
    disable: function() {
      var self = this;
      self.$input.prop('disabled', true);
      self.$control_input.prop('disabled', true).prop('tabindex', -1);
      self.isDisabled = true;
      self.lock();
    },
  
    /**
     * Enables the control so that it can respond
     * to focus and user input.
     */
    enable: function() {
      var self = this;
      self.$input.prop('disabled', false);
      self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
      self.isDisabled = false;
      self.unlock();
    },
  
    /**
     * Completely destroys the control and
     * unbinds all event listeners so that it can
     * be garbage collected.
     */
    destroy: function() {
      var self = this;
      var eventNS = self.eventNS;
      var revertSettings = self.revertSettings;
  
      self.trigger('destroy');
      self.off();
      self.$wrapper.remove();
      self.$dropdown.remove();
  
      self.$input
        .html('')
        .append(revertSettings.$children)
        .removeAttr('tabindex')
        .removeClass('selectized')
        .attr({tabindex: revertSettings.tabindex})
        .show();
  
      self.$control_input.removeData('grow');
      self.$input.removeData('selectize');
  
      $(window).off(eventNS);
      $(document).off(eventNS);
      $(document.body).off(eventNS);
  
      delete self.$input[0].selectize;
    },
  
    /**
     * A helper method for rendering "item" and
     * "option" templates, given the data.
     *
     * @param {string} templateName
     * @param {object} data
     * @returns {string}
     */
    render: function(templateName, data) {
      var value, id, label;
      var html = '';
      var cache = false;
      var self = this;
      var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
  
      if (templateName === 'option' || templateName === 'item') {
        value = hash_key(data[self.settings.valueField]);
        cache = !!value;
      }
  
      // pull markup from cache if it exists
      if (cache) {
        if (!isset(self.renderCache[templateName])) {
          self.renderCache[templateName] = {};
        }
        if (self.renderCache[templateName].hasOwnProperty(value)) {
          return self.renderCache[templateName][value];
        }
      }
  
      // render markup
      html = $(self.settings.render[templateName].apply(this, [data, escape_html]));
  
      // add mandatory attributes
      if (templateName === 'option' || templateName === 'option_create') {
        html.attr('data-selectable', '');
      }
      else if (templateName === 'optgroup') {
        id = data[self.settings.optgroupValueField] || '';
        html.attr('data-group', id);
      }
      if (templateName === 'option' || templateName === 'item') {
        html.attr('data-value', value || '');
      }
  
      // update cache
      if (cache) {
        self.renderCache[templateName][value] = html[0];
      }
  
      return html[0];
    },
  
    /**
     * Clears the render cache for a template. If
     * no template is given, clears all render
     * caches.
     *
     * @param {string} templateName
     */
    clearCache: function(templateName) {
      var self = this;
      if (typeof templateName === 'undefined') {
        self.renderCache = {};
      } else {
        delete self.renderCache[templateName];
      }
    },
  
    /**
     * Determines whether or not to display the
     * create item prompt, given a user input.
     *
     * @param {string} input
     * @return {boolean}
     */
    canCreate: function(input) {
      var self = this;
      if (!self.settings.create) return false;
      var filter = self.settings.createFilter;
      return input.length
        && (typeof filter !== 'function' || filter.apply(self, [input]))
        && (typeof filter !== 'string' || new RegExp(filter).test(input))
        && (!(filter instanceof RegExp) || filter.test(input));
    }
  
  });
  
  
  Selectize.count = 0;
  Selectize.defaults = {
    options: [],
    optgroups: [],
  
    plugins: [],
    delimiter: ',',
    splitOn: null, // regexp or string for splitting up values from a paste command
    persist: true,
    diacritics: true,
    create: false,
    createOnBlur: false,
    createFilter: null,
    highlight: true,
    openOnFocus: true,
    maxOptions: 1000,
    maxItems: null,
    hideSelected: null,
    addPrecedence: false,
    selectOnTab: false,
    preload: false,
    allowEmptyOption: false,
    closeAfterSelect: false,
  
    scrollDuration: 60,
    loadThrottle: 300,
    loadingClass: 'loading',
  
    dataAttr: 'data-data',
    optgroupField: 'optgroup',
    valueField: 'value',
    labelField: 'text',
    optgroupLabelField: 'label',
    optgroupValueField: 'value',
    lockOptgroupOrder: false,
  
    sortField: '$order',
    searchField: ['text'],
    searchConjunction: 'and',
  
    mode: null,
    wrapperClass: 'selectize-control',
    inputClass: 'selectize-input',
    dropdownClass: 'selectize-dropdown',
    dropdownContentClass: 'selectize-dropdown-content',
  
    dropdownParent: null,
  
    copyClassesToDropdown: true,
  
    /*
    load                 : null, // function(query, callback) { ... }
    score                : null, // function(search) { ... }
    onInitialize         : null, // function() { ... }
    onChange             : null, // function(value) { ... }
    onItemAdd            : null, // function(value, $item) { ... }
    onItemRemove         : null, // function(value) { ... }
    onClear              : null, // function() { ... }
    onOptionAdd          : null, // function(value, data) { ... }
    onOptionRemove       : null, // function(value) { ... }
    onOptionClear        : null, // function() { ... }
    onOptionGroupAdd     : null, // function(id, data) { ... }
    onOptionGroupRemove  : null, // function(id) { ... }
    onOptionGroupClear   : null, // function() { ... }
    onDropdownOpen       : null, // function($dropdown) { ... }
    onDropdownClose      : null, // function($dropdown) { ... }
    onType               : null, // function(str) { ... }
    onDelete             : null, // function(values) { ... }
    */
  
    render: {
      /*
      item: null,
      optgroup: null,
      optgroup_header: null,
      option: null,
      option_create: null
      */
    }
  };
  
  
  $.fn.selectize = function(settings_user) {
    var defaults             = $.fn.selectize.defaults;
    var settings             = $.extend({}, defaults, settings_user);
    var attr_data            = settings.dataAttr;
    var field_label          = settings.labelField;
    var field_value          = settings.valueField;
    var field_optgroup       = settings.optgroupField;
    var field_optgroup_label = settings.optgroupLabelField;
    var field_optgroup_value = settings.optgroupValueField;
  
    /**
     * Initializes selectize from a <input type="text"> element.
     *
     * @param {object} $input
     * @param {object} settings_element
     */
    var init_textbox = function($input, settings_element) {
      var i, n, values, option;
  
      var data_raw = $input.attr(attr_data);
  
      if (!data_raw) {
        var value = $.trim($input.val() || '');
        if (!settings.allowEmptyOption && !value.length) return;
        values = value.split(settings.delimiter);
        for (i = 0, n = values.length; i < n; i++) {
          option = {};
          option[field_label] = values[i];
          option[field_value] = values[i];
          settings_element.options.push(option);
        }
        settings_element.items = values;
      } else {
        settings_element.options = JSON.parse(data_raw);
        for (i = 0, n = settings_element.options.length; i < n; i++) {
          settings_element.items.push(settings_element.options[i][field_value]);
        }
      }
    };
  
    /**
     * Initializes selectize from a <select> element.
     *
     * @param {object} $input
     * @param {object} settings_element
     */
    var init_select = function($input, settings_element) {
      var i, n, tagName, $children, order = 0;
      var options = settings_element.options;
      var optionsMap = {};
  
      var readData = function($el) {
        var data = attr_data && $el.attr(attr_data);
        if (typeof data === 'string' && data.length) {
          return JSON.parse(data);
        }
        return null;
      };
  
      var addOption = function($option, group) {
        $option = $($option);
  
        var value = hash_key($option.val());
        if (!value && !settings.allowEmptyOption) return;
  
        // if the option already exists, it's probably been
        // duplicated in another optgroup. in this case, push
        // the current group to the "optgroup" property on the
        // existing option so that it's rendered in both places.
        if (optionsMap.hasOwnProperty(value)) {
          if (group) {
            var arr = optionsMap[value][field_optgroup];
            if (!arr) {
              optionsMap[value][field_optgroup] = group;
            } else if (!$.isArray(arr)) {
              optionsMap[value][field_optgroup] = [arr, group];
            } else {
              arr.push(group);
            }
          }
          return;
        }
  
        var option             = readData($option) || {};
        option[field_label]    = option[field_label] || $option.text();
        option[field_value]    = option[field_value] || value;
        option[field_optgroup] = option[field_optgroup] || group;
  
        optionsMap[value] = option;
        options.push(option);
  
        if ($option.is(':selected')) {
          settings_element.items.push(value);
        }
      };
  
      var addGroup = function($optgroup) {
        var i, n, id, optgroup, $options;
  
        $optgroup = $($optgroup);
        id = $optgroup.attr('label');
  
        if (id) {
          optgroup = readData($optgroup) || {};
          optgroup[field_optgroup_label] = id;
          optgroup[field_optgroup_value] = id;
          settings_element.optgroups.push(optgroup);
        }
  
        $options = $('option', $optgroup);
        for (i = 0, n = $options.length; i < n; i++) {
          addOption($options[i], id);
        }
      };
  
      settings_element.maxItems = $input.attr('multiple') ? null : 1;
  
      $children = $input.children();
      for (i = 0, n = $children.length; i < n; i++) {
        tagName = $children[i].tagName.toLowerCase();
        if (tagName === 'optgroup') {
          addGroup($children[i]);
        } else if (tagName === 'option') {
          addOption($children[i]);
        }
      }
    };
  
    return this.each(function() {
      if (this.selectize) return;
  
      var instance;
      var $input = $(this);
      var tag_name = this.tagName.toLowerCase();
      var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
      if (!placeholder && !settings.allowEmptyOption) {
        placeholder = $input.children('option[value=""]').text();
      }
  
      var settings_element = {
        'placeholder' : placeholder,
        'options'     : [],
        'optgroups'   : [],
        'items'       : []
      };
  
      if (tag_name === 'select') {
        init_select($input, settings_element);
      } else {
        init_textbox($input, settings_element);
      }
  
      instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
    });
  };
  
  $.fn.selectize.defaults = Selectize.defaults;
  $.fn.selectize.support = {
    validity: SUPPORTS_VALIDITY_API
  };
  
  
  Selectize.define('drag_drop', function(options) {
    if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
    if (this.settings.mode !== 'multi') return;
    var self = this;
  
    self.lock = (function() {
      var original = self.lock;
      return function() {
        var sortable = self.$control.data('sortable');
        if (sortable) sortable.disable();
        return original.apply(self, arguments);
      };
    })();
  
    self.unlock = (function() {
      var original = self.unlock;
      return function() {
        var sortable = self.$control.data('sortable');
        if (sortable) sortable.enable();
        return original.apply(self, arguments);
      };
    })();
  
    self.setup = (function() {
      var original = self.setup;
      return function() {
        original.apply(this, arguments);
  
        var $control = self.$control.sortable({
          items: '[data-value]',
          forcePlaceholderSize: true,
          disabled: self.isLocked,
          start: function(e, ui) {
            ui.placeholder.css('width', ui.helper.css('width'));
            $control.css({overflow: 'visible'});
          },
          stop: function() {
            $control.css({overflow: 'hidden'});
            var active = self.$activeItems ? self.$activeItems.slice() : null;
            var values = [];
            $control.children('[data-value]').each(function() {
              values.push($(this).attr('data-value'));
            });
            self.setValue(values);
            self.setActiveItem(active);
          }
        });
      };
    })();
  
  });
  
  Selectize.define('dropdown_header', function(options) {
    var self = this;
  
    options = $.extend({
      title         : 'Untitled',
      headerClass   : 'selectize-dropdown-header',
      titleRowClass : 'selectize-dropdown-header-title',
      labelClass    : 'selectize-dropdown-header-label',
      closeClass    : 'selectize-dropdown-header-close',
  
      html: function(data) {
        return (
          '<div class="' + data.headerClass + '">' +
            '<div class="' + data.titleRowClass + '">' +
              '<span class="' + data.labelClass + '">' + data.title + '</span>' +
              '<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
            '</div>' +
          '</div>'
        );
      }
    }, options);
  
    self.setup = (function() {
      var original = self.setup;
      return function() {
        original.apply(self, arguments);
        self.$dropdown_header = $(options.html(options));
        self.$dropdown.prepend(self.$dropdown_header);
      };
    })();
  
  });
  
  Selectize.define('optgroup_columns', function(options) {
    var self = this;
  
    options = $.extend({
      equalizeWidth  : true,
      equalizeHeight : true
    }, options);
  
    this.getAdjacentOption = function($option, direction) {
      var $options = $option.closest('[data-group]').find('[data-selectable]');
      var index    = $options.index($option) + direction;
  
      return index >= 0 && index < $options.length ? $options.eq(index) : $();
    };
  
    this.onKeyDown = (function() {
      var original = self.onKeyDown;
      return function(e) {
        var index, $option, $options, $optgroup;
  
        if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
          self.ignoreHover = true;
          $optgroup = this.$activeOption.closest('[data-group]');
          index = $optgroup.find('[data-selectable]').index(this.$activeOption);
  
          if(e.keyCode === KEY_LEFT) {
            $optgroup = $optgroup.prev('[data-group]');
          } else {
            $optgroup = $optgroup.next('[data-group]');
          }
  
          $options = $optgroup.find('[data-selectable]');
          $option  = $options.eq(Math.min($options.length - 1, index));
          if ($option.length) {
            this.setActiveOption($option);
          }
          return;
        }
  
        return original.apply(this, arguments);
      };
    })();
  
    var getScrollbarWidth = function() {
      var div;
      var width = getScrollbarWidth.width;
      var doc = document;
  
      if (typeof width === 'undefined') {
        div = doc.createElement('div');
        div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
        div = div.firstChild;
        doc.body.appendChild(div);
        width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
        doc.body.removeChild(div);
      }
      return width;
    };
  
    var equalizeSizes = function() {
      var i, n, height_max, width, width_last, width_parent, $optgroups;
  
      $optgroups = $('[data-group]', self.$dropdown_content);
      n = $optgroups.length;
      if (!n || !self.$dropdown_content.width()) return;
  
      if (options.equalizeHeight) {
        height_max = 0;
        for (i = 0; i < n; i++) {
          height_max = Math.max(height_max, $optgroups.eq(i).height());
        }
        $optgroups.css({height: height_max});
      }
  
      if (options.equalizeWidth) {
        width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
        width = Math.round(width_parent / n);
        $optgroups.css({width: width});
        if (n > 1) {
          width_last = width_parent - width * (n - 1);
          $optgroups.eq(n - 1).css({width: width_last});
        }
      }
    };
  
    if (options.equalizeHeight || options.equalizeWidth) {
      hook.after(this, 'positionDropdown', equalizeSizes);
      hook.after(this, 'refreshOptions', equalizeSizes);
    }
  
  
  });
  
  Selectize.define('remove_button', function(options) {
    options = $.extend({
        label     : '&times;',
        title     : 'Remove',
        className : 'remove',
        append    : true
      }, options);
  
      var singleClose = function(thisRef, options) {
  
        options.className = 'remove-single';
  
        var self = thisRef;
        var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
  
        /**
         * Appends an element as a child (with raw HTML).
         *
         * @param {string} html_container
         * @param {string} html_element
         * @return {string}
         */
        var append = function(html_container, html_element) {
          return html_container + html_element;
        };
  
        thisRef.setup = (function() {
          var original = self.setup;
          return function() {
            // override the item rendering method to add the button to each
            if (options.append) {
              var id = $(self.$input.context).attr('id');
              var selectizer = $('#'+id);
  
              var render_item = self.settings.render.item;
              self.settings.render.item = function(data) {
                return append(render_item.apply(thisRef, arguments), html);
              };
            }
  
            original.apply(thisRef, arguments);
  
            // add event listener
            thisRef.$control.on('click', '.' + options.className, function(e) {
              e.preventDefault();
              if (self.isLocked) return;
  
              self.clear();
            });
  
          };
        })();
      };
  
      var multiClose = function(thisRef, options) {
  
        var self = thisRef;
        var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
  
        /**
         * Appends an element as a child (with raw HTML).
         *
         * @param {string} html_container
         * @param {string} html_element
         * @return {string}
         */
        var append = function(html_container, html_element) {
          var pos = html_container.search(/(<\/[^>]+>\s*)$/);
          return html_container.substring(0, pos) + html_element + html_container.substring(pos);
        };
  
        thisRef.setup = (function() {
          var original = self.setup;
          return function() {
            // override the item rendering method to add the button to each
            if (options.append) {
              var render_item = self.settings.render.item;
              self.settings.render.item = function(data) {
                return append(render_item.apply(thisRef, arguments), html);
              };
            }
  
            original.apply(thisRef, arguments);
  
            // add event listener
            thisRef.$control.on('click', '.' + options.className, function(e) {
              e.preventDefault();
              if (self.isLocked) return;
  
              var $item = $(e.currentTarget).parent();
              self.setActiveItem($item);
              if (self.deleteSelection()) {
                self.setCaret(self.items.length);
              }
            });
  
          };
        })();
      };
  
      if (this.settings.mode === 'single') {
        singleClose(this, options);
        return;
      } else {
        multiClose(this, options);
      }
  });
  
  
  Selectize.define('restore_on_backspace', function(options) {
    var self = this;
  
    options.text = options.text || function(option) {
      return option[this.settings.labelField];
    };
  
    this.onKeyDown = (function() {
      var original = self.onKeyDown;
      return function(e) {
        var index, option;
        if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
          index = this.caretPos - 1;
          if (index >= 0 && index < this.items.length) {
            option = this.options[this.items[index]];
            if (this.deleteSelection(e)) {
              this.setTextboxValue(options.text.apply(this, [option]));
              this.refreshOptions(true);
            }
            e.preventDefault();
            return;
          }
        }
        return original.apply(this, arguments);
      };
    })();
  });
  

  return Selectize;
}));
angular.module("multiple-select-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("multiple-autocomplete-tpl.html","<div class=\"ng-ms form-item-container\">\r\n    <ul class=\"list-inline\">\r\n        <li ng-repeat=\"item in modelArr\">\r\n			<span ng-if=\"objectProperty == undefined || objectProperty == \'\'\">\r\n				{{item}} <span class=\"remove\" ng-click=\"removeAddedValues(item)\">\r\n                <i class=\"glyphicon glyphicon-remove\"></i></span>&nbsp;\r\n			</span>\r\n            <span ng-if=\"objectProperty != undefined && objectProperty != \'\'\">\r\n				{{item[objectProperty]}} <span class=\"remove\" ng-click=\"removeAddedValues(item)\">\r\n                <i class=\"glyphicon glyphicon-remove\"></i></span>&nbsp;\r\n			</span>\r\n        </li>\r\n        <li>\r\n            <input name=\"{{name}}\" ng-model=\"inputValue\" placeholder=\"\" ng-keydown=\"keyParser($event)\"\r\n                   err-msg-required=\"{{errMsgRequired}}\"\r\n                   ng-focus=\"onFocus()\" ng-blur=\"onBlur()\" ng-required=\"!modelArr.length && isRequired\"\r\n                    ng-change=\"onChange()\">\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"autocomplete-list\" ng-show=\"isFocused || isHover\" ng-mouseenter=\"onMouseEnter()\" ng-mouseleave=\"onMouseLeave()\">\r\n    <ul ng-if=\"objectProperty == undefined || objectProperty == \'\'\">\r\n        <li ng-class=\"{\'autocomplete-active\' : selectedItemIndex == $index}\"\r\n            ng-repeat=\"suggestion in suggestionsArr | filter : inputValue | filter : alreadyAddedValues\"\r\n            ng-click=\"onSuggestedItemsClick(suggestion)\" ng-mouseenter=\"mouseEnterOnItem($index)\">\r\n            {{suggestion}}\r\n        </li>\r\n    </ul>\r\n    <ul ng-if=\"objectProperty != undefined && objectProperty != \'\'\">\r\n        <li ng-class=\"{\'autocomplete-active\' : selectedItemIndex == $index}\"\r\n            ng-repeat=\"suggestion in suggestionsArr | filter : inputValue | filter : alreadyAddedValues\"\r\n            ng-click=\"onSuggestedItemsClick(suggestion)\" ng-mouseenter=\"mouseEnterOnItem($index)\">\r\n            {{suggestion[objectProperty]}}\r\n        </li>\r\n    </ul>\r\n</div>");}]);
(function () {

    angular.module('app').directive('multipleAutocomplete', [
        '$filter',
        '$http',
        function ($filter, $http) {
            return {
                restrict: 'EA',
                scope : {
                    suggestionsArr : '=?',
                    modelArr : '=ngModel',
                    apiUrl : '@',
                    beforeSelectItem : '=?',
                    afterSelectItem : '=?',
                    beforeRemoveItem : '=?',
                    afterRemoveItem : '=?'
                },
                templateUrl: '/angular/directives/multiple-autocomplete-field/multiple-autocomplete-tpl.html',
                link : function(scope, element, attr){
                    scope.objectProperty = attr.objectProperty;
                    scope.selectedItemIndex = 0;
                    scope.name = attr.name;
                    scope.isRequired = attr.required;
                    scope.errMsgRequired = attr.errMsgRequired;
                    scope.isHover = false;
                    scope.isFocused = false;
                    var getSuggestionsList = function () {
                        var url = scope.apiUrl;
                        $http({
                            method: 'GET',
                            url: url
                        }).then(function (response) {
                            scope.suggestionsArr = response.data;
                        }, function (response) {
                            console.log("*****Angular-multiple-select **** ----- Unable to fetch list");
                        });
                    };

                    if(scope.suggestionsArr == null || scope.suggestionsArr == ""){
                        if(scope.apiUrl != null && scope.apiUrl != "")
                            getSuggestionsList();
                        else{
                            console.log("*****Angular-multiple-select **** ----- Please provide suggestion array list or url");
                        }
                    }

                    if(scope.modelArr == null || scope.modelArr == ""){
                        scope.modelArr = [];
                    }
                    scope.onFocus = function () {
                        scope.isFocused=true
                    };

                    scope.onMouseEnter = function () {
                        scope.isHover = true
                    };

                    scope.onMouseLeave = function () {
                        scope.isHover = false;
                    };

                    scope.onBlur = function () {
                        scope.isFocused=false;
                    };

                    scope.onChange = function () {
                        scope.selectedItemIndex = 0;
                    };

                    scope.keyParser = function ($event) {
                        var keys = {
                            38: 'up',
                            40: 'down',
                            8 : 'backspace',
                            13: 'enter',
                            9 : 'tab',
                            27: 'esc'
                        };
                        var key = keys[$event.keyCode];
                        if(key == 'backspace' && scope.inputValue == ""){
                            if(scope.modelArr.length != 0){
                                scope.removeAddedValues(scope.modelArr[scope.modelArr.length-1]);
                                //scope.modelArr.pop();
                            }
                        }
                        else if(key == 'down'){
                            var filteredSuggestionArr = $filter('filter')(scope.suggestionsArr, scope.inputValue);
                            filteredSuggestionArr = $filter('filter')(filteredSuggestionArr, scope.alreadyAddedValues);
                            if(scope.selectedItemIndex < filteredSuggestionArr.length -1)
                                scope.selectedItemIndex++;
                        }
                        else if(key == 'up' && scope.selectedItemIndex > 0){
                            scope.selectedItemIndex--;
                        }
                        else if(key == 'esc'){
                            scope.isHover = false;
                            scope.isFocused=false;
                        }
                        else if(key == 'enter'){
                            var filteredSuggestionArr = $filter('filter')(scope.suggestionsArr, scope.inputValue);
                            filteredSuggestionArr = $filter('filter')(filteredSuggestionArr, scope.alreadyAddedValues);
                            if(scope.selectedItemIndex < filteredSuggestionArr.length)
                                scope.onSuggestedItemsClick(filteredSuggestionArr[scope.selectedItemIndex]);
                        }
                    };

                    scope.onSuggestedItemsClick = function (selectedValue) {
                        if(scope.beforeSelectItem && typeof(scope.beforeSelectItem) == 'function')
                            scope.beforeSelectItem(selectedValue);

                        scope.modelArr.push(selectedValue);

                        if(scope.afterSelectItem && typeof(scope.afterSelectItem) == 'function')
                            scope.afterSelectItem(selectedValue);
                        scope.inputValue = "";
                    };

                    var isDuplicate = function (arr, item) {
                        var duplicate = false;
                        if(arr == null || arr == "")
                            return duplicate;

                        for(var i=0;i<arr.length;i++){
                            duplicate = angular.equals(arr[i], item);
                            if(duplicate)
                                break;
                        }
                        return duplicate;
                    };

                    scope.alreadyAddedValues = function (item) {
                        var isAdded = true;
                        isAdded = !isDuplicate(scope.modelArr, item);
                        //if(scope.modelArr != null && scope.modelArr != ""){
                        //    isAdded = scope.modelArr.indexOf(item) == -1;
                        //    console.log("****************************");
                        //    console.log(item);
                        //    console.log(scope.modelArr);
                        //    console.log(isAdded);
                        //}
                        return isAdded;
                    };

                    scope.removeAddedValues = function (item) {
                        if(scope.modelArr != null && scope.modelArr != "") {
                            var itemIndex = scope.modelArr.indexOf(item);
                            if (itemIndex != -1) {
                                if(scope.beforeRemoveItem && typeof(scope.beforeRemoveItem) == 'function')
                                    scope.beforeRemoveItem(item);

                                scope.modelArr.splice(itemIndex, 1);

                                if(scope.afterRemoveItem && typeof(scope.afterRemoveItem) == 'function')
                                    scope.afterRemoveItem(item);
                            }
                        }
                    };

                    scope.mouseEnterOnItem = function (index) {
                        scope.selectedItemIndex = index;
                    };
                }
            };
        }
    ]);
})();