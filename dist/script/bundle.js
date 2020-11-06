"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var e={670:function(t,e,n){function i(t,e,n,i,r,o,s){try{var u=t[o](s),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var s=t.apply(e,n);function u(t){i(s,r,o,u,a,"next",t)}function a(t){i(s,r,o,u,a,"throw",t)}u(void 0)})}}var o,s,u=n(626),a=(u.TimerStatus,u.Timer,u.StopwatchTimer,u.CountdownTimer,u.getCookie),c=u.setCookie;window.lang=void 0,window.i18n={languages:{"en-US":"English","zh-HK":"繁體中文"},components:[],addComponent:function(t){this.components.push(t)},init:function(){var t=a().lang;if(null==t){var e=window.navigator.userLanguage||window.navigator.language,n=function(t){return t.test(e)};switch(!0){case n(/yue.*/):case n(/zh.*/):t="zh-HK"}}null!=t&&this.load(t)},load:(s=r(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(n=document.createElement("script")).setAttribute("src","./lang/"+e+".js"),document.getElementsByTagName("head")[0].appendChild(n);case 3:case"end":return t.stop()}},t)})),function(t){return s.apply(this,arguments)}),use:(o=r(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.lang=null==window.lang?e:Object.assign(lang,e),c({lang:lang.name}),this.components.forEach(function(t){t.$forceUpdate()});case 3:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)})},t.exports={i18n:i18n}},626:function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return _typeof(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof(t)})(t)}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&function(t,e){(Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=o(t);if(e){var s=o(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return r(this,n)}}function r(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function t(){a(this,t)};c(l,"INIT",Symbol()),c(l,"RUNNING",Symbol()),c(l,"PAUSE",Symbol()),c(l,"TIMESUP",Symbol());var d=function(){function t(){a(this,t),this._previousTicks=0,this._startTick=null}return u(t,[{key:"stop",value:function(){this.isRunning&&(this._previousTicks+=(new Date).getTime()-this._startTick,this._startTick=null)}},{key:"start",value:function(){throw new Error("NotImplementedError")}},{key:"set",value:function(t,e,n,i){throw new Error("NotImplementedError")}},{key:"reset",value:function(){this._startTick=null,this._previousTicks=0,this.set(this._totalTicks||0)}},{key:"displayTicks",get:function(){throw new Error("NotImplementedError")}},{key:"isRunning",get:function(){return this.status==l.RUNNING}},{key:"status",get:function(){throw new Error("NotImplementedError")}}]),t}(),h=function(t){n(r,d);var e=i(r);function r(){var t;return a(this,r),(t=e.call(this))._initTicks=0,t}return u(r,[{key:"start",value:function(){this.isRunning||(this._startTick=(new Date).getTime())}},{key:"set",value:function(t,e,n,i){null!=e&&null!=n&&null!=i&&(t=36e5*t+6e4*e+1e3*n+i),this.status==l.PAUSE?(this._initTicks=t-1,this._previousTicks=1):this._initTicks=t}},{key:"displayTicks",get:function(){return this.passedTicks}},{key:"status",get:function(){return null==this._startTick&&0==this._previousTicks?l.INIT:null==this._startTick&&0!=this._previousTicks?l.PAUSE:l.RUNNING}},{key:"passedTicks",get:function(){return Math.max(0,(this._startTick?(new Date).getTime()-this._startTick:0)+this._initTicks+this._previousTicks)}}]),r}(),f=function(t){n(r,d);var e=i(r);function r(){var t;return a(this,r),(t=e.call(this))._totalTicks=0,t}return u(r,[{key:"start",value:function(){this.isRunning||this.isTimeup||(this._startTick=(new Date).getTime())}},{key:"set",value:function(t,e,n,i){null!=e&&null!=n&&null!=i&&(t=36e5*t+6e4*e+1e3*n+i),this.status==l.PAUSE?(this._totalTicks=t+1,this._previousTicks=1):this._totalTicks=t}},{key:"displayTicks",get:function(){return this.remainingTicks}},{key:"isTimeup",get:function(){return this.status==l.TIMESUP}},{key:"status",get:function(){return null==this._startTick&&0==this._previousTicks?l.INIT:null!=this._startTick&&0!=this.remainingTicks?l.RUNNING:null==this._startTick&&0!=this._previousTicks?l.PAUSE:0==this.remainingTicks?l.TIMESUP:void 0}},{key:"totalTicks",get:function(){return this._totalTicks}},{key:"remainingTicks",get:function(){return Math.max(0,(this._startTick?this._startTick-(new Date).getTime():0)+this._totalTicks-this._previousTicks)}}]),r}(),m=function(){function t(){a(this,t),this._on=!0,this._playing=!1}return u(t,[{key:"updateStatus",value:function(t){if(t==l.TIMESUP){if(0==this._playing){this.audioElem.currentTime=0;var e=this.audioElem.play();void 0!==e&&e.catch(function(){}),this._playing=!0}}else this.audioElem.pause(),this._playing=!1}},{key:"isSoundOn",set:function(t){this._on=t,this.audioElem.volume=this._on?1:0},get:function(){return this._on}},{key:"audioElem",get:function(){return document.getElementById("sound")}}]),t}();t.exports={TimerStatus:l,Timer:d,StopwatchTimer:h,CountdownTimer:f,SoundManager:m,setCookie:function(t){var e=new Date;e.setFullYear(e.getFullYear()+1),Object.keys(t).forEach(function(n){return document.cookie="".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(t[n]),"; expires=").concat(e.toGMTString(),";")})},getCookie:function(){return document.cookie.split(";").map(function(t){return t.split("=")}).reduce(function(t,e){return 1!=e.length&&(t[decodeURIComponent(e[0].trim())]=decodeURIComponent(e[1].trim())),t},{})}}},867:function(t,e,n){var i=n(626),r=i.getCookie,o=i.setCookie,s=i.SoundManager,u=n(670).i18n;window.vuePanel=new Vue({el:"#setting-panel",mounted:function(){var t=this;u.addComponent(this);var e=r();this.theme=e.theme||this.theme,this.sound.isSoundOn=e.sound?"true"==e.sound:this.sound.isSoundOn;var n=function(){t.isHideOptional&&(t.isHideOptional=!1)};document.body.addEventListener("touchstart",n,!1),document.body.addEventListener("touchmove",n,!1);var i=0,o=0;document.body.addEventListener("mousemove",function(t){var e=i?t.screenX-i:0,r=o?t.screenY-o:0;i=t.screenX,o=t.screenY,(e>2||r>2)&&n()}),document.addEventListener("fullscreenchange",function(){t.$forceUpdate()}),window.addEventListener("resize",function(){t.$forceUpdate()})},data:{isHideOptional:!1,theme:"dark",themesList:["dark","light"],zoomScale:1,sound:new s},watch:{isHideOptional:function(){document.body.style.cursor=this.isHideOptional?"none":""},theme:{handler:function(t,e){this.themesList.forEach(function(t){return document.body.classList.remove(t)}),document.body.classList.add(t),null!=e&&o({theme:t})},immediate:!0},"sound.isSoundOn":{handler:function(t,e){null!=e&&o({sound:t})},immediate:!0}},computed:{},methods:{openFullscreen:function(){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},closeFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},isFullScreen:function(){return null!=document.fullscreenElement||null!=document.msFullscreenElement},getTimerScale:function(){var t=document.body.offsetWidth;return"scale("+Math.min(1,t/900)*this.zoomScale+")"}}}),t.exports={vuePanel:vuePanel}},643:function(e,n,i){function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var s=i(626),u=s.TimerStatus,a=s.StopwatchTimer,c=s.CountdownTimer,l=s.getCookie,d=s.setCookie,h=i(670).i18n;window.vueTimer=new Vue({el:"#thebody",mounted:function(){var t=this;h.addComponent(this);var e=l();e.timer_mode&&("countdown"==e.timer_mode?(this.t=new c,this.t._totalTicks=Math.trunc(e.timer_total_ticks)||0):(this.t=new a,this.t._initTicks=Math.trunc(e.timer_init_ticks)||0),this.t._startTick=Math.trunc(e.timer_start_tick)||null,this.t._previousTicks=Math.trunc(e.timer_previous_ticks)||0),setInterval(function(){t.t&&t.t.__ob__.dep.notify()},1),this.getAllEditableTimeValueFieldElm().forEach(function(e){e.addEventListener("focus",t.focusTimeValueFieldEvent,!1),e.addEventListener("blur",t.blurTimeValueFieldEvent,!1),e.addEventListener("beforeinput",t.b4changedTimeValueFieldEvent,!1),e.addEventListener("input",t.changedTimeValueFieldEvent,!1)})},data:{t:new c,timerEditingFlag:{hour:!1,minute:!1,second:!1,msec:!1}},watch:{"t._previousTicks":function(){this.updateTimerCookie()},"t._startTick":function(){this.updateTimerCookie()},"t.status":function(t){vuePanel.sound.updateStatus(t)},timeS:function(){document.title="".concat(this.timeH,":").concat(this.timeM,":").concat(this.timeS)},isEditable:{handler:function(t){this.getAllEditableTimeValueFieldElm().forEach(function(e){t?e.setAttribute("contenteditable","true"):e.removeAttribute("contenteditable")})},immediate:!0}},methods:{BodyKeyDownEvent:function(t){var e=r(this.getAllEditableTimeValueFieldElm());if(("Tab"===t.key||"Enter"===t.key)&&e.includes(t.target)){t.preventDefault();var n=t.target,i=e[(e.indexOf(t.target)+1)%e.length];n.blur(),i.focus()}},clickBtn1Event:function(){if(this.t.status==u.INIT){if(0==this.t.displayTicks)this.t=new a;else{var t=this.t.displayTicks;this.t=new c,this.t.set(t)}this.t.start()}else this.t.status==u.RUNNING?this.t.stop():this.t.status==u.PAUSE&&this.t.start()},clickBtn2Event:function(){this.t.status==u.INIT?(this.t.set(0),this.updateTimerCookie()):this.t.reset()},updateEditableDataAndHtml:function(t,e){e=Math.max(0,Math.min(e,{hour:99,minute:59,second:59,msec:999}[t.id])),t.innerText=e;var n=this.getTimerData(),i=n.hour,r=n.minute,o=n.second,s=n.msec;this.t.set(i,r,o,s)},focusTimeValueFieldEvent:function(t){var e=t.target;this.timerEditingFlag[e.id]=!0,e.beforeFocus=e.innerText},blurTimeValueFieldEvent:function(t){var e=t.target,n=e.innerText,i=Math.trunc(n);this.timerEditingFlag[e.id]=!1,(0==n.length||isNaN(i)||-1!==n.indexOf("."))&&(i=Math.trunc(e.beforeFocus)),this.updateEditableDataAndHtml(e,i)},b4changedTimeValueFieldEvent:function(t){t.target.beforeInput=t.target.innerText},changedTimeValueFieldEvent:function(t){var e=window.getSelection(),n=e.getRangeAt(0).startOffset,i=t.target,r=i.innerText;0==r.length&&(r=i.innerText="0"),r=r.slice(0,"msec"==i.id?3:2);var o=Math.trunc(r);(isNaN(o)||-1!==r.indexOf("."))&&(o=Math.trunc(i.beforeInput)),this.updateEditableDataAndHtml(i,o);var s=document.createRange();s.setStart(i.childNodes[0],Math.min(i.innerText.length,n)),s.collapse(!0),e.removeAllRanges(),e.addRange(s)},updateTimerCookie:function(){d({timer_mode:this.t instanceof c?"countdown":"stopwatch",timer_start_tick:this.t._startTick,timer_previous_ticks:this.t._previousTicks,timer_init_ticks:this.t._initTicks,timer_total_ticks:this.t._totalTicks})},getTimerData:function(){var t={};return this.getAllEditableTimeValueFieldElm().forEach(function(e){return t[e.id]=e.innerText-0}),t},getAllEditableTimeValueFieldElm:function(){return r(document.querySelectorAll("#timer-body span.editable-field"))}},computed:{displayTicks:function(){return t.displayTicks},timeH:function(){if(this.timerEditingFlag.hour)return"";var t=Math.trunc(this.t.displayTicks/36e5);return(t%=100)>9?t+"":"0"+t},timeM:function(){if(this.timerEditingFlag.minute)return"";var t=Math.trunc(this.t.displayTicks%36e5/6e4);return t>9?t+"":"0"+t},timeS:function(){if(this.timerEditingFlag.second)return"";var t=Math.trunc(this.t.displayTicks%6e4/1e3);return t>9?t+"":"0"+t},timeMS:function(){if(this.timerEditingFlag.msec)return"";var t=Math.trunc(this.t.displayTicks%1e3);return this.t.status==u.INIT&&0==t?"000":t},isBtn1Disabled:function(){return this.t instanceof c&&this.t.status==u.TIMESUP},btn1Warning:function(){return this.t.status==u.TIMESUP?lang.times_up_blocked_warning:""},btn1Message:function(){return this.t.status==u.RUNNING?lang.pause:lang.start},btn2Message:function(){return this.t.status==u.INIT?lang.clear:lang.reset},isEditable:function(){return this.t.status==u.INIT||this.t.status==u.PAUSE}}}),e.exports={vueTimer:vueTimer}}},n={};function i(t){if(n[t])return n[t].exports;var r=n[t]={exports:{}};return e[t](r,r.exports,i),r.exports}i(670),window.addEventListener("DOMContentLoaded",function(){i(867),i(643)})}();