!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).larkplayer=e()}}(function(){return function l(o,u,s){function a(t,e){if(!u[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=u[t]={exports:{}};o[t][0].call(i.exports,function(e){return a(o[t][1][e]||e)},i,i.exports,l,o,u,s)}return u[t].exports}for(var c="function"==typeof require&&require,e=0;e<s.length;e++)a(s[e]);return a}({1:[function(e,t,n){"use strict";t.exports=function(e,t,n){if("function"==typeof Array.prototype.find)return e.find(t,n);n=n||this;var r,i=e.length;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(r=0;r<i;r++)if(t.call(n,e[r],r,e))return e[r]}},{}],2:[function(i,l,e){(function(e){var t,n=void 0!==e?e:"undefined"!=typeof window?window:{},r=i("min-document");"undefined"!=typeof document?t=document:(t=n["__GLOBAL_DOCUMENT_CACHE@4"])||(t=n["__GLOBAL_DOCUMENT_CACHE@4"]=r),l.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"min-document":4}],3:[function(e,n,t){(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){},{}],5:[function(e,t,n){var c=1/0,i=9007199254740991,f=1.7976931348623157e308,d=NaN,s="[object Arguments]",l="[object Function]",o="[object GeneratorFunction]",h="[object String]",p="[object Symbol]",y=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,r=/^(?:0|[1-9]\d*)$/,b=parseInt;function w(e){return e!=e}function E(t,e){return function(e,t){for(var n=-1,r=e?e.length:0,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}(e,function(e){return t[e]})}var u,a,_=Object.prototype,S=_.hasOwnProperty,C=_.toString,T=_.propertyIsEnumerable,M=(u=Object.keys,a=Object,function(e){return u(a(e))}),O=Math.max;function F(e,t){var n,r,i=k(e)||P(r=n=e)&&x(r)&&S.call(n,"callee")&&(!T.call(n,"callee")||C.call(n)==s)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],l=i.length,o=!!l;for(var u in e)!t&&!S.call(e,u)||o&&("length"==u||A(u,l))||i.push(u);return i}function j(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||_,t!==r)return M(e);var t,n,r,i=[];for(var l in Object(e))S.call(e,l)&&"constructor"!=l&&i.push(l);return i}function A(e,t){return!!(t=null==t?i:t)&&("number"==typeof e||r.test(e))&&-1<e&&e%1==0&&e<t}var k=Array.isArray;function x(e){return null!=e&&("number"==typeof(r=e.length)&&-1<r&&r%1==0&&r<=i)&&!((n=R(t=e)?C.call(t):"")==l||n==o);var t,n,r}function R(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function P(e){return!!e&&"object"==typeof e}t.exports=function(e,t,n,r){var i,l,o,u;e=x(e)?e:(i=e)?E(i,x(l=i)?F(l):j(l)):[],n=n&&!r?(o=function(e){if(!e)return 0===e?e:0;if((e=function(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||P(t)&&C.call(t)==p)return d;var t;if(R(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=R(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var r=v.test(e);return r||m.test(e)?b(e.slice(2),r?2:8):g.test(e)?d:+e}(e))===c||e===-c){var t=e<0?-1:1;return t*f}return e==e?e:0}(n),u=o%1,o==o?u?o-u:o:0):0;var s,a=e.length;return n<0&&(n=O(a+n,0)),"string"==typeof(s=e)||!k(s)&&P(s)&&C.call(s)==h?n<=a&&-1<e.indexOf(t,n):!!a&&-1<function(e,t,n){if(t!=t)return function(e,t,n,r){for(var i=e.length,l=n+(r?1:-1);r?l--:++l<i;)if(t(e[l],l,e))return l;return-1}(e,w,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n)}},{}],6:[function(e,t,n){var o=9007199254740991,a="[object Arguments]",u="[object Function]",s="[object GeneratorFunction]",r=/^(?:0|[1-9]\d*)$/;function i(t,e){return function(e,t){for(var n=-1,r=e?e.length:0,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}(e,function(e){return t[e]})}var l,c,f=Object.prototype,d=f.hasOwnProperty,h=f.toString,p=f.propertyIsEnumerable,y=(l=Object.keys,c=Object,function(e){return l(c(e))});function g(e,t){var n,r,i,l=b(e)||(i=r=n=e)&&"object"==typeof i&&w(r)&&d.call(n,"callee")&&(!p.call(n,"callee")||h.call(n)==a)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],o=l.length,u=!!o;for(var s in e)!t&&!d.call(e,s)||u&&("length"==s||m(s,o))||l.push(s);return l}function v(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||f,t!==r)return y(e);var t,n,r,i=[];for(var l in Object(e))d.call(e,l)&&"constructor"!=l&&i.push(l);return i}function m(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||r.test(e))&&-1<e&&e%1==0&&e<t}var b=Array.isArray;function w(e){return null!=e&&("number"==typeof(l=e.length)&&-1<l&&l%1==0&&l<=o)&&(i=typeof(r=t=e),!((n=!r||"object"!=i&&"function"!=i?"":h.call(t))==u||n==s));var t,n,r,i,l}t.exports=function(e){return e?i(e,w(t=e)?g(t):v(t)):[];var t}},{}],7:[function(e,t,n){"use strict";var s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var o in n=Object(arguments[l]))a.call(n,o)&&(i[o]=n[o]);if(s){r=s(n);for(var u=0;u<r.length;u++)c.call(n,r[u])&&(i[r[u]]=n[r[u]])}}return i}},{}],8:[function(e,t,n){"use strict";n.__esModule=!0,n.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=r.isEl(e.el)?e.el:r.createElement("div");e.on=function(e,t){i.on(n,e,t)},e.off=function(e,t){i.off(n,e,t)},e.one=function(e,t){i.one(n,e,t)},e.trigger=function(e,t){i.trigger(n,e,t)}};var r=l(e("../utils/dom")),i=l(e("./events"));function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}},{"../utils/dom":22,"./events":9}],9:[function(e,t,n){"use strict";n.__esModule=!0,n.on=o,n.off=u,n.one=function(t,n,r){var i=3<arguments.length&&void 0!==arguments[3]&&arguments[3];o(t,n,function e(){r();u(t,n,e,i)},i)},n.trigger=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};n=(0,l.default)({bubbles:!1,cancelable:!1,detail:null},n);var r=i.default.createEvent("CustomEvent");r.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),e.dispatchEvent(r)};var i=r(e("global/document")),l=r(e("object-assign"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3];e.addEventListener(t,n,r)}function u(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},{"global/document":2,"object-assign":7}],10:[function(e,t,n){"use strict";n.__esModule=!0;var r,i=e("global/document"),l=(r=i)&&r.__esModule?r:{default:r},o=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(e("../events/events"));var u=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s={};u.forEach(function(e,t){e&&e[1]in l.default&&e.forEach(function(e,t){s[u[0][t]]=e})}),n.default={requestFullscreen:function(e){e[s.requestFullscreen]()},exitFullscreen:function(){l.default[s.exitFullscreen]()},fullscreenElement:function(){return l.default[s.fullscreenElement]},fullscreenEnabled:function(){return l.default[s.fullscreenEnabled]},isFullscreen:function(){return!!this.fullscreenElement()},fullscreenchange:function(e){o.on(l.default,s.fullscreenchange,e)},fullscreenerror:function(e){o.on(l.default,s.fullscreenerror,e)},off:function(e,t){e?t?o.off(l.default,e,t):o.off(l.default,e):(o.off(l.default,s.fullscreenchange),o.off(l.default,s.fullscreenerror))}}},{"../events/events":9,"global/document":2}],11:[function(e,t,n){"use strict";n.__esModule=!0;var r=n.HTML5_WRITABLE_ATTRS=["src","crossOrigin","poster","preload","autoplay","loop","muted","defaultMuted","controls","controlsList","width","height","playsinline","playbackRate","defaultPlaybackRate","volume","currentTime"],i=(n.HTML5_WRITABLE_BOOL_ATTRS=["autoplay","loop","muted","defaultMuted","controls","playsinline"],n.HTML5_READONLY_ATTRS=["error","currentSrc","networkState","buffered","readyState","seeking","duration","paused","played","seekable","ended","videoWidth","videoHeight"]);n.default=[].concat(r,i)},{}],12:[function(e,t,n){"use strict";n.__esModule=!0,n.default=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"]},{}],13:[function(e,t,n){"use strict";n.__esModule=!0;var r=d(e("global/window")),i=d(e("global/document")),l=d(e("lodash.includes")),o=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(e("../utils/dom")),u=d(e("../utils/to-title-case")),s=d(e("../utils/normalize-source")),a=d(e("../events/evented")),c=e("./html5-attrs"),f=d(c);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.options=t,this.el=this.options.el,(0,a.default)(this,{eventBusKey:this.el}),this.proxyWebkitFullscreen()}return n.prototype.dispose=function(){n.disposeMediaElement(this.el)},n.prototype.proxyWebkitFullscreen=function(){var e=this;if("webkitDisplayingFullscreen"in this.el){var t=function(){this.trigger("fullscreenchange",{detail:{isFullscreen:!1}})},n=function(){"webkitPresentationMode"in this.el&&"picture-in-picture"!==this.el.webkitPresentationMode&&(this.one("webkitendfullscreen",t),this.trigger("fullscreenchange",{detail:{isFullscreen:!0}}))};n=n.bind(this),t=t.bind(this),this.on("webkitbeginfullscreen",n),this.on("dispose",function(){e.off("webkitbeginfullscreen",n),e.off("webkitendfullscreen",t)})}},n.prototype.supportsFullScreen=function(){if("function"==typeof this.el.webkitEnterFullScreen){var e=r.default.navigator&&r.default.navigator.userAgent||"";if(/Android/.test(e)||!/Chrome|Mac OS X 10.5/.test(e))return!0}return!1},n.prototype.enterFullScreen=function(){"function"==typeof this.el.webkitEnterFullScreen&&this.el.webkitEnterFullScreen()},n.prototype.exitFullScreen=function(){"function"==typeof this.el.webkitExitFullScreen&&(this.player.removeClass("lark-fullscreen"),this.el.webkitExitFullScreen())},n.prototype.src=function(e){if(void 0===e)return this.el.currentSrc||this.el.src;this.setSrc(e)},n.prototype.source=function(e){if(void 0===e){var t=o.$$("source",this.el);return Array.from(t).map(function(e){return{src:e.src,type:e.type}})}e=(0,s.default)(e);var n=i.default.createDocumentFragment();e.forEach(function(e){var t=o.createElement("source",{src:e.src,type:e.type});n.appendChild(t)}),this.el.appendChild(n)},n.prototype.reset=function(){n.resetMediaElement(this.el)},n}();(n.default=h).TEST_VID=i.default.createElement("video"),h.isSupported=function(){try{h.TEST_VID.volume=.5}catch(e){return!1}return!(!h.TEST_VID||!h.TEST_VID.canPlayType)},h.canPlayType=function(e){return h.TEST_VID.canPlayType(e)},h.canControlPlaybackRate=function(){try{var e=h.TEST_VID.playbackRate;return h.TEST_VID.playbackRate=e/2+.1,e!==h.TEST_VID.playbackRate}catch(e){return!1}},h.disposeMediaElement=function(e){h.resetMediaElement(e),e.parentNode&&e.parentNode.removeChild(e)},h.resetMediaElement=function(e){if(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(e.removeAttribute("src"),"function"==typeof e.load)try{e.load()}catch(e){}}},f.default.forEach(function(e){h.prototype[e]=function(){return(0,l.default)(c.HTML5_WRITABLE_BOOL_ATTRS,e)?this.el[e]||this.el.hasAttribute(e):this.el[e]}}),c.HTML5_WRITABLE_ATTRS.forEach(function(t){h.prototype["set"+(0,u.default)(t)]=function(e){!1===(this.el[t]=e)&&this.el.removeAttribute(t)}}),["pause","load","play"].forEach(function(e){h.prototype[e]=function(){return this.el[e]()}})},{"../events/evented":8,"../utils/dom":22,"../utils/normalize-source":27,"../utils/to-title-case":30,"./html5-attrs":11,"global/document":2,"global/window":3,"lodash.includes":5}],14:[function(e,t,n){"use strict";var i=h(e("object-assign")),l=d(e("./utils/dom")),r=d(e("./events/events")),o=h(e("./player")),u=h(e("./html5/html5")),s=h(e("./plugin/component")),a=h(e("./plugin/media-source-handler")),c=h(e("./plugin/plugin")),f=h(e("./utils/utils"));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return!!u.default.isSupported()&&new(Function.prototype.bind.apply(o.default,[null].concat(function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};if(t=(0,i.default)({playsinline:!0},t),"string"==typeof e&&(e=l.$(/^#/.test(e)?e:"#"+e)),!l.isEl(e))throw new Error("[larkplayer initial error]: el should be an id or DOM element!");if("VIDEO"!==e.tagName.toUpperCase()){var r=l.createElement("video",{id:e.id+"-video"});e.appendChild(r),e=r}return[e,t,n]}(e,t,n))))}(0,i.default)(p,{Events:r,DOM:l,Component:s.default,MediaSourceHandler:a.default,Plugin:c.default,util:f.default}),t.exports=p},{"./events/events":9,"./html5/html5":13,"./player":15,"./plugin/component":16,"./plugin/media-source-handler":17,"./plugin/plugin":20,"./utils/dom":22,"./utils/utils":31,"object-assign":7}],15:[function(e,t,n){"use strict";n.__esModule=!0;var r=_(e("lodash.includes")),l=_(e("global/document")),o=_(e("./html5/html5")),u=_(e("./html5/html5-events")),s=e("./html5/html5-attrs"),a=_(e("./html5/fullscreen")),c=_(e("./plugin/component")),f=_(e("./plugin/media-source-handler")),d=_(e("./plugin/plugin")),h=_(e("./plugin/plugin-types")),p=E(e("./events/events")),y=E(e("./utils/dom")),i=_(e("./utils/to-title-case")),g=_(e("./events/evented")),v=e("./utils/obj"),m=_(e("./utils/log")),b=_(e("./utils/computed-style")),w=_(e("./utils/feature-detector"));function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}var S=function(){function i(e,t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.isReady=!1,(this.player=this).options=t,this.tag=e,this.el=this.createEl(),this.ready(n),(0,g.default)(this,{eventBusKey:this.el}),this.handleFirstplay=this.handleFirstplay.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handleFullscreenChange=this.handleFullscreenChange.bind(this),this.handleFullscreenError=this.handleFullscreenError.bind(this),this.handleClick=this.handleClick.bind(this),this.fullWindowOnEscKey=this.fullWindowOnEscKey.bind(this),w.default.touch?this.on("touchend",this.handleTouchEnd):this.on("click",this.handleClick),this.tech||(this.tech=this.loadTech());var r=this.src();r&&(this.handleLateInit(this.tech.el),this.callMS(r)),this.initialUIPlugins(),this.initialNormalPlugins(),this.triggerReady()}return i.prototype.initialNormalPlugins=function(){var r=this;this[h.default.OTHERS]={},d.default.getAll().forEach(function(e){var t=e._displayName,n=new e(r,r.getPluginOptions(t,h.default.OTHERS));r[h.default.OTHERS][t]=n})},i.prototype.initialUIPlugins=function(){var i=this;(c.default.player=this)[h.default.UI]={},c.default.getAll().forEach(function(e){var t=e._displayName,n=new e(i,i.getPluginOptions(t,h.default.UI)),r=n.el;i.el.appendChild(r),i[h.default.UI][t]=n})},i.prototype.getPluginOptions=function(e,t){return this.options&&this.options[t]&&this.options[t][e]},i.prototype.callMS=function(e){this.disposeMS();var t=f.default.select(e);return!!t&&(this.MSHandler=new t(this,this.getPluginOptions(t._displayName,h.default.MS)),this.MSHandler.src(e),!0)},i.prototype.disposeMS=function(){this.MSHandler&&(this.MSHandler.dispose(),this.MSHandler=null)},i.prototype.ready=function(e){var t=this;"function"==typeof e&&(this.isReady?setTimeout(function(){return e.call(t)},1):(this.readyQueue=this.readyQueue||[],this.readyQueue.push(e)))},i.prototype.triggerReady=function(){var t=this;this.isReady=!0,setTimeout(function(){var e=t.readyQueue;t.readyQueue=[],e&&e.length&&e.forEach(function(e){e.call(t)}),t.trigger("ready")},1)},i.prototype.removeClass=function(e){return y.removeClass(this.el,e)},i.prototype.addClass=function(e){return y.addClass(this.el,e)},i.prototype.hasClass=function(e){return y.hasClass(this.el,e)},i.prototype.toggleClass=function(e){return this.hasClass(e)?this.removeClass(e):this.addClass(e)},i.prototype.dispose=function(){this.trigger("dispose"),a.default.off(),this.disposeMS(),this.tag&&this.tag.player&&(this.tag.player=null),this.el&&this.el.player&&(this.el.player=null),this.tech&&this.tech.dispose()},i.prototype.createEl=function(){var e=this,n=this.tag;(0,v.each)(this.options,function(e,t){(0,r.default)(s.HTML5_WRITABLE_ATTRS,t)&&e&&y.setAttribute(n,t,e)}),this.options.source&&this.ready(function(){e.source(e.options.source)});var t=y.createElement("div",{className:"larkplayer",id:n.id+"-larkplayer"});return y.setAttribute(n,"tabindex","-1"),n.parentNode&&n.parentNode.insertBefore(t,n),n.hasAttribute("width")&&(t.style.width=n.getAttribute("width")+"px",n.setAttribute("width","100%")),n.hasAttribute("height")&&(t.style.height=n.getAttribute("height")+"px",n.setAttribute("height","100%")),t.appendChild(n),t},i.prototype.handleLateInit=function(e){var t=this;if(e.error)this.ready(function(){t.trigger("error")});else if(0!==e.networkState&&3!==e.networkState){if(0===e.readyState){var n=!1,r=function(){n=!0};this.on("loadstart",r);var i=function(){n||t.trigger("loadstart")};return this.on("loadedmetadata",i),void this.ready(function(){t.off("loadstart",r),t.off("loadedmetadata",i),n||t.trigger("loadstart")})}var l=["loadstart","loadedmetadata"];2<=e.readyState&&l.push("loadeddata"),3<=e.readyState&&l.push("canplay"),4<=e.readyState&&l.push("canplaythrough"),this.ready(function(){l.forEach(function(e){t.trigger(e)})})}},i.prototype.loadTech=function(){var t=this;this.options.el=this.tag;var n=new o.default(this.player,this.options);return u.default.forEach(function(e){p.on(n.el,e,function(){t.trigger(e)})}),this.off("play",this.handleFirstplay),this.one("play",this.handleFirstplay),p.on(n.el,"fullscreenchange",this.handleFullscreenChange),a.default.fullscreenchange(this.handleFullscreenChange),a.default.fullscreenerror(this.handleFullscreenError),n},i.prototype.techGet=function(e){return this.tech[e]()},i.prototype.techCall=function(e,t){try{this.tech[e](t)}catch(e){(0,m.default)(e)}},i.prototype.width=function(e){if(void 0===e)return parseInt((0,b.default)(this.el,"width"),0);/\d$/.test(e)&&(e+="px"),this.el.style.width=e},i.prototype.height=function(e){if(void 0===e)return parseInt((0,b.default)(this.el,"height"),0);/\d$/.test(e)&&(e+="px"),this.el.style.height=e},i.prototype.handleFirstplay=function(){this.trigger("firstplay")},i.prototype.handleTouchEnd=function(e){e.target===this.tech.el&&this.paused()&&this.play()},i.prototype.handleFullscreenChange=function(e){1<arguments.length&&void 0!==arguments[1]&&arguments[1];var t={};e.detail&&void 0!==e.detail.isFullscreen?this.fullscreenStatus=e.detail.isFullscreen:a.default.fullscreenEnabled()&&(this.fullscreenStatus=a.default.isFullscreen()),this.isFullscreen()?(t.isFullscreen=!0,this.addClass("lark-fullscreen")):(t.isFullscreen=!1,this.removeClass("lark-fullscreen"),this.removeClass("lark-fullscreen-adjust")),this.trigger("fullscreenchange",{detail:t})},i.prototype.handleFullscreenError=function(){this.trigger("fullscreenerror")},i.prototype.handleClick=function(e){e.target===this.tech.el&&(this.paused()?this.play():this.pause())},i.prototype.isFullscreen=function(){return this.fullscreenStatus||!1},i.prototype.requestFullscreen=function(){this.fullscreenStatus=!0,a.default.fullscreenEnabled()?(this.addClass("lark-fullscreen-adjust"),a.default.requestFullscreen(this.el)):this.tech.supportsFullScreen()?this.techGet("enterFullScreen"):this.enterFullWindow()},i.prototype.exitFullscreen=function(){this.fullscreenStatus=!1,a.default.fullscreenEnabled()&&a.default.isFullscreen()?(this.removeClass("lark-fullscreen-adjust"),a.default.exitFullscreen()):this.tech.supportsFullScreen()?this.techGet("exitFullScreen"):this.exitFullWindow()},i.prototype.enterFullWindow=function(){this.addClass("lark-full-window"),this.trigger("fullscreenchange"),p.on(l.default,"keydown",this.fullWindowOnEscKey)},i.prototype.fullWindowOnEscKey=function(e){27===(e.keyCode||e.which)&&this.exitFullWindow()},i.prototype.exitFullWindow=function(){this.removeClass("lark-full-window"),this.trigger("fullscreenchange"),p.off(l.default,"keydown",this.fullWindowOnEscKey)},i.prototype.internalPlay=function(){var e=this.techGet("play");e&&e.then&&e.then(null,function(e){m.default.error(e)})},i.prototype.play=function(){this.MSHandler?this.MSHandler.play():this.isReady?this.internalPlay():this.ready(this.internalPlay)},i.prototype.pause=function(){this.techCall("pause")},i.prototype.load=function(){this.techCall("load")},i.prototype.reset=function(){this.pause(),this.techCall("reset"),this.children.forEach(function(e){e&&e.reset&&e.reset()})},i.prototype.currentTime=function(e){if(void 0===e)return this.techGet("currentTime")||0;this.techCall("setCurrentTime",e)},i.prototype.remainingTime=function(){return this.duration()-this.currentTime()},i.prototype.bufferedEnd=function(){var e=this.buffered(),t=this.duration();return!(!e||!t)&&e.end(e.length-1)===t},i.prototype.src=function(e){if(void 0===e)return this.techGet("src");this.callMS(e)||this.techCall("setSrc",e),this.off("play",this.handleFirstplay),this.one("play",this.handleFirstplay),this.trigger("srcchange",{detail:e})},i.prototype.source=function(e){if(void 0===e)return this.techGet("source");this.techCall("source",e),this.trigger("srcchange",{detail:this.player.src()})},i}();s.HTML5_WRITABLE_ATTRS.filter(function(e){return!(0,r.default)(["src","currentTime","width","height"],e)}).forEach(function(t){S.prototype[t]=function(e){if(void 0===e)return this.techGet(t);this.techCall("set"+(0,i.default)(t),e),this.options[t]=e}}),s.HTML5_READONLY_ATTRS.forEach(function(e){S.prototype[e]=function(){return this.techGet(e)}}),n.default=S},{"./events/evented":8,"./events/events":9,"./html5/fullscreen":10,"./html5/html5":13,"./html5/html5-attrs":11,"./html5/html5-events":12,"./plugin/component":16,"./plugin/media-source-handler":17,"./plugin/plugin":20,"./plugin/plugin-types":19,"./utils/computed-style":21,"./utils/dom":22,"./utils/feature-detector":23,"./utils/log":25,"./utils/obj":28,"./utils/to-title-case":30,"global/document":2,"lodash.includes":5}],16:[function(e,t,n){"use strict";n.__esModule=!0;var r=u(e("./plugin-store")),i=u(e("./plugin-types")),s=o(e("../utils/dom")),l=(o(e("../events/events")),u(e("../events/evented"))),a=u(e("../utils/to-camel-case"));function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){function u(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),this.player=e,this.options=t,this.el=this.createEl(this.options),(0,l.default)(this,{eventBusKey:this.el}),this.dispose=this.dispose.bind(this),this.player.on("dispose",this.dispose)}return u.prototype.createEl=function(){return s.createElement("div",this.options)},u.prototype.dispose=function(){this.player.off("dispose",this.dispose),s.isEl(this.el)&&this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.player=null,this.options=null,this.el=null},u.createElement=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};t=t||{};var n=void 0;"string"==typeof e?n=u.get((0,a.default)(e)):e.prototype instanceof u&&(n=e);for(var r=arguments.length,i=Array(2<r?r-2:0),l=2;l<r;l++)i[l-2]=arguments[l];if(n){var o=new n(this.player,t).el;return i&&s.appendContent(o,i),o}return s.createElement.apply(s,[e,t].concat(i))},u.register=function(e,t){return r.default.add(e,t,i.default.UI)},u.unregister=function(e){r.default.delete(e,i.default.UI)},u.get=function(e){return r.default.get(e,i.default.UI)},u.getAll=function(){return r.default.getAll(i.default.UI)},u}();n.default=c},{"../events/evented":8,"../events/events":9,"../utils/dom":22,"../utils/to-camel-case":29,"./plugin-store":18,"./plugin-types":19}],17:[function(e,t,n){"use strict";n.__esModule=!0;var i=r(e("array-find")),l=r(e("./plugin-store")),o=r(e("./plugin-types"));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(){function r(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.player=e,this.options=t}return r.prototype.src=function(e){this.player.techCall("setSrc",e)},r.prototype.play=function(){this.player.techCall("play")},r.prototype.dispose=function(){this.player=null,this.options=null},r.canPlay=function(e,t){return!1},r.register=function(e,t){return l.default.add(e,t,o.default.MS)},r.unregister=function(e){l.default.delete(e,o.default.MS)},r.getAll=function(){return l.default.getAll(o.default.MS)},r.select=function(t,n){var e=r.getAll();return(0,i.default)(e,function(e){return e.canPlay(t,n)})},r}();n.default=u},{"./plugin-store":18,"./plugin-types":19,"array-find":1}],18:[function(e,t,n){"use strict";n.__esModule=!0;var r=c(e("lodash.values")),i=c(e("./component")),l=c(e("./media-source-handler")),o=c(e("./plugin")),u=c(e("./plugin-types")),s=e("../utils/guid"),a=c(e("../utils/to-camel-case"));function c(e){return e&&e.__esModule?e:{default:e}}var f=u.default.UI,d=u.default.MS,h=u.default.OTHERS;function p(){var e;return(e={})[f]={},e[d]={},e[h]={},e}n.default={store:p(),validate:function(e,t){switch(t){case f:return e&&e.prototype instanceof i.default;case d:return e&&e.prototype instanceof l.default;case h:return e&&e.prototype instanceof o.default;default:return!1}},has:function(e,t){return this.store[t]&&this.store[t][e]},add:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(this.validate(e,n)){var r=t.name||(0,a.default)(e.name)||"plugin_"+(0,s.newGUID)();return e._displayName=r,this.has(r,n)||(this.store[n][r]=e),!0}return!1},delete:function(e,t){this.has(e,t)&&delete this.store[t][e]},clear:function(){this.store=p()},get:function(e,t){if(this.has(e,t))return this.store[t][e]},getAll:function(e){switch(e){case f:return(0,r.default)(this.store[f]);case d:return(0,r.default)(this.store[d]);case h:return(0,r.default)(this.store[h]);default:var t=[];for(var n in this.store)this.store.hasOwnProperty(n)&&t.concat((0,r.default)(this.store[n]));return t}}}},{"../utils/guid":24,"../utils/to-camel-case":29,"./component":16,"./media-source-handler":17,"./plugin":20,"./plugin-types":19,"lodash.values":6}],19:[function(e,t,n){"use strict";n.__esModule=!0,n.default={UI:"UI",MS:"MS",OTHERS:"plugin"}},{}],20:[function(e,t,n){"use strict";n.__esModule=!0;var r=l(e("./plugin-store")),i=l(e("./plugin-types"));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,this.options=t,this.dispose=this.dispose.bind(this),this.player.on("dispose",this.dispose)}return n.prototype.dispose=function(){this.player=null,this.options=null},n.register=function(e,t){r.default.add(e,t,i.default.OTHERS)},n.unregister=function(e){r.default.delete(e,i.default.OTHERS)},n.get=function(e){r.default.get(e,i.default.OTHERS)},n.getAll=function(){return r.default.getAll(i.default.OTHERS)},n}();n.default=o},{"./plugin-store":18,"./plugin-types":19}],21:[function(e,t,n){"use strict";n.__esModule=!0,n.default=function(e,t){if(!e||!t)return"";if("function"==typeof l.default.getComputedStyle){var n=l.default.getComputedStyle(e);return n?n[t]:""}return e.currentStyle&&e.currentStyle[t]||""};var r,i=e("global/window"),l=(r=i)&&r.__esModule?r:{default:r}},{"global/window":3}],22:[function(e,t,n){"use strict";n.__esModule=!0,n.$$=n.$=void 0,n.isReal=function(){return void 0!==f.default.createElement},n.isEl=s,n.createQuerier=a,n.createEl=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],i=f.default.createElement(e);null==n&&(n={});null==t&&(t={});Object.keys(n).forEach(function(e){var t=n[e];-1!==e.indexOf("aria-")||"role"===e||"type"===e?i.setAttribute(e,t):"textContent"===e?d(i,t):i[e]=t}),Object.keys(t).forEach(function(e){i.setAttribute(e,t[e])}),r&&S(i,r);return i},n.createElement=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=f.default.createElement(e);null==t&&(t={});Object.keys(t).forEach(function(e){m(n,"className"===e?"class":e,t[e]),n[e]=t[e]});for(var r=arguments.length,i=Array(2<r?r-2:0),l=2;l<r;l++)i[l-2]=arguments[l];i&&S(n,i);return n},n.textContent=d,n.normalizeContent=h,n.isTextNode=p,n.prependTo=function(e,t){t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)},n.parent=function(e,t){var n=null;for(;e&&e.parentNode;)y(e.parentNode,t)?(n=e.parentNode,e=null):e=e.parentNode;return n},n.hasClass=y,n.addClass=g,n.removeClass=v,n.toggleClass=function(e,t,n){var r=y(e,t);"function"==typeof n&&(n=n(e,t));"boolean"!=typeof n&&(n=!r);if(n===r)return;n?g(e,t):v(e,t);return e},n.setAttributes=function(n,r){Object.keys(r).forEach(function(e){var t=r[e];null==t||!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)})},n.getAttributes=function(e){var t={},n=["autoplay","controls","playsinline","webkit-playsinline","loop","muted","default","defaultMuted"];if(e&&e.attributes&&e.attributes.length)for(var r=e.attributes,i=0;i<r.length;i++){var l=r[i].name,o=r[i].value;("boolean"==typeof e[l]||(0,u.default)(n,l))&&(o=null!==o),t[l]=o}return t},n.getAttribute=function(e,t){return e.getAttribute(t)},n.setAttribute=m,n.removeAttribute=b,n.blockTextSelection=function(){f.default.body.focus(),f.default.onselectstart=function(){return!1}},n.unblockTextSelection=function(){f.default.onselectstart=function(){return!0}},n.getBoundingClientRect=w,n.findPosition=E,n.getPointerPosition=function(e,t){var n=E(e),r=e.offsetWidth,i=e.offsetHeight,l=n.top,o=n.left,u=t.pageX,s=t.pageY;t.changedTouches&&(u=t.changedTouches[0].pageX,s=t.changedTouches[0].pageY);return{x:Math.max(0,Math.min(1,(u-o)/r)),y:Math.max(0,Math.min(1,(l-s+i)/i))}},n.emptyEl=_,n.appendContent=S,n.insertContent=function(e,t){return S(_(e),t)},n.replaceContent=function(e,t){return S(_(e),t)};var u=l(e("lodash.includes")),c=l(e("global/window")),f=l(e("global/document")),r=e("./obj"),i=l(e("./computed-style"));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){return"string"==typeof e&&/\S/.test(e)}function s(e){return(0,r.isObject)(e)&&1===e.nodeType}function a(r){return function(e,t){if(!o(e))return f.default[r](null);o(t)&&(t=f.default.querySelector(t));var n=s(t)?t:f.default;return n[r]&&n[r](e)}}function d(e,t){return void 0===e.textContent?e.innerText=t:e.textContent=t,e}function h(e){return"function"==typeof e&&(e=e()),(Array.isArray(e)?e:[].concat(e)).map(function(e){return"function"==typeof e&&(e=e()),s(e)||p(e)?e:o(e)?f.default.createTextNode(e):void 0}).filter(function(e){return!!e})}function p(e){return(0,r.isObject)(e)&&3===e.nodeType}function y(e,t){return function(e){if(/\s/.test(e))throw new Error("class has illegal whitespace characters")}(t),e.classList?e.classList.contains(t):(n=t,new RegExp("(^|\\s+)"+n+"($|\\s+)")).test(e.className);var n}function g(e,t){return e.classList?e.classList.add(t):y(e,t)||(e.className=(e.className+" "+t).trim()),e}function v(e,t){return y(e,t)&&(e.classList?e.classList.remove(t):e.className=e.className.split(/\s+/).filter(function(e){return e!==t}).join(" ")),e}function m(e,t,n){!1===n?b(e,t):e.setAttribute(t,!0===n?"":n)}function b(e,t){e.removeAttribute(t)}function w(e){if(e&&e.getBoundingClientRect&&e.parentNode){var t=e.getBoundingClientRect(),n={};return["top","right","bottom","left","width","height"].forEach(function(e){void 0!==t[e]&&(n[e]=t[e])}),n.height||(n.height=parseFloat((0,i.default)(e,"height"))),n.width||(n.width=parseFloat((0,i.default)(e,"width"))),n}}function E(e){var t=w(e);if(!t)return{left:0,top:0};var n=f.default.documentElement,r=f.default.body,i=n.clientLeft||r.clientLeft||0,l=c.default.pageXOffset||r.scrollLeft,o=t.left+l-i,u=n.clientLeft||r.clientLeft||0,s=c.default.pageYOffset||r.scrollTop,a=t.top+s-u;return{left:Math.round(o),top:Math.round(a)}}function _(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e}function S(t,e){return h(e).forEach(function(e){return t.appendChild(e)}),t}n.$=a("querySelector"),n.$$=a("querySelectorAll")},{"./computed-style":21,"./obj":28,"global/document":2,"global/window":3,"lodash.includes":5}],23:[function(e,t,n){"use strict";n.__esModule=!0;var r,i=e("global/document"),l=(r=i)&&r.__esModule?r:{default:r};n.default={touch:"ontouchend"in l.default}},{"global/document":2}],24:[function(e,t,n){"use strict";n.__esModule=!0,n.newGUID=function(){return r++};var r=1},{}],25:[function(e,t,n){"use strict";function r(){var e;(e=console).log.apply(e,arguments)}n.__esModule=!0,(n.default=r).info=console.info,r.warn=console.warn,r.error=console.error,r.clear=console.clear},{}],26:[function(e,t,n){"use strict";n.__esModule=!0,n.default={flv:"video/x-flv",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",m3u8:"application/x-mpegURL",ts:"video/MP2T","3gp":"video/3gpp",mov:"video/quicktime",avi:"video/x-msvideo",wmv:"video/x-ms-wmv"}},{}],27:[function(e,t,n){"use strict";n.__esModule=!0,n.default=function(e){{if((0,i.isPlain)(e))return[s(e)];if(Array.isArray(e))return e.map(function(e){return s(e)});throw new TypeError("Source should be an Object or an Array which contains Object")}};var r,i=e("./obj"),l=e("./mime-type-map"),o=(r=l)&&r.__esModule?r:{default:r};var u=/\.([\w]+)$/;function s(e){if(!(0,i.isPlain)(e))throw new TypeError("SingleSource should be an Object");if("string"!=typeof e.src)throw new TypeError("SingleSource.src should be a string");if(e.hasOwnProperty("type")&&"string"!=typeof e.type)throw new TypeError("SingleSource.type should be a string");return e.type||(e.type=function(e){var t="";if("string"==typeof e){var n=e.match(u);Array.isArray(n)&&(t=n[1])}return o.default[t]}(e.src)),e}},{"./mime-type-map":26,"./obj":28}],28:[function(e,t,n){"use strict";n.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){return!!e&&"object"===(void 0===e?"undefined":r(e))}n.isObject=i,n.isPlain=function(e){return i(e)&&"[object Object]"===Object.prototype.toString.call(e)&&e.constructor===Object},n.each=function(t,n){Object.keys(t).forEach(function(e){return n(t[e],e)})}},{}],29:[function(e,t,n){"use strict";n.__esModule=!0,n.default=function(e){if("string"!=typeof e)return e;return e.charAt(0).toLowerCase()+e.slice(1)}},{}],30:[function(e,t,n){"use strict";n.__esModule=!0,n.default=function(e){if("string"!=typeof e)return e;return e.charAt(0).toUpperCase()+e.slice(1)}},{}],31:[function(e,t,n){"use strict";n.__esModule=!0;var r=y(e("array-find")),i=y(e("lodash.includes")),l=y(e("lodash.values")),o=y(e("object-assign")),u=y(e("./computed-style")),s=y(e("./feature-detector")),a=p(e("./guid")),c=y(e("./mime-type-map")),f=p(e("./obj")),d=y(e("./to-camel-case")),h=y(e("./to-title-case"));function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function y(e){return e&&e.__esModule?e:{default:e}}n.default={find:r.default,includes:i.default,values:l.default,assign:o.default,computedStyle:u.default,featureDetector:s.default,guid:a,mimeTypeMap:c.default,obj:f,toCamelCase:d.default,toTitleCase:h.default}},{"./computed-style":21,"./feature-detector":23,"./guid":24,"./mime-type-map":26,"./obj":28,"./to-camel-case":29,"./to-title-case":30,"array-find":1,"lodash.includes":5,"lodash.values":6,"object-assign":7}]},{},[14])(14)});
