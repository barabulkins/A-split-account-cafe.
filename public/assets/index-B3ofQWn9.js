(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var _p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vp={exports:{}};/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(s,e){(function(t,n){s.exports=n()})(_p,function(){const t=new Map,n={set(v,c,m){t.has(v)||t.set(v,new Map);const E=t.get(v);E.has(c)||E.size===0?E.set(c,m):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(E.keys())[0]}.`)},get:(v,c)=>t.has(v)&&t.get(v).get(c)||null,remove(v,c){if(!t.has(v))return;const m=t.get(v);m.delete(c),m.size===0&&t.delete(v)}},i="transitionend",r=v=>(v&&window.CSS&&window.CSS.escape&&(v=v.replace(/#([^\s"#']+)/g,(c,m)=>`#${CSS.escape(m)}`)),v),o=v=>v==null?`${v}`:Object.prototype.toString.call(v).match(/\s([a-z]+)/i)[1].toLowerCase(),a=v=>{v.dispatchEvent(new Event(i))},l=v=>!(!v||typeof v!="object")&&(v.jquery!==void 0&&(v=v[0]),v.nodeType!==void 0),u=v=>l(v)?v.jquery?v[0]:v:typeof v=="string"&&v.length>0?document.querySelector(r(v)):null,h=v=>{if(!l(v)||v.getClientRects().length===0)return!1;const c=getComputedStyle(v).getPropertyValue("visibility")==="visible",m=v.closest("details:not([open])");if(!m)return c;if(m!==v){const E=v.closest("summary");if(E&&E.parentNode!==m||E===null)return!1}return c},d=v=>!v||v.nodeType!==Node.ELEMENT_NODE||!!v.classList.contains("disabled")||(v.disabled!==void 0?v.disabled:v.hasAttribute("disabled")&&v.getAttribute("disabled")!=="false"),f=v=>{if(!document.documentElement.attachShadow)return null;if(typeof v.getRootNode=="function"){const c=v.getRootNode();return c instanceof ShadowRoot?c:null}return v instanceof ShadowRoot?v:v.parentNode?f(v.parentNode):null},_=()=>{},x=v=>{v.offsetHeight},y=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,g=[],p=()=>document.documentElement.dir==="rtl",A=v=>{var c;c=()=>{const m=y();if(m){const E=v.NAME,O=m.fn[E];m.fn[E]=v.jQueryInterface,m.fn[E].Constructor=v,m.fn[E].noConflict=()=>(m.fn[E]=O,v.jQueryInterface)}},document.readyState==="loading"?(g.length||document.addEventListener("DOMContentLoaded",()=>{for(const m of g)m()}),g.push(c)):c()},M=(v,c=[],m=v)=>typeof v=="function"?v.call(...c):m,w=(v,c,m=!0)=>{if(!m)return void M(v);const E=(K=>{if(!K)return 0;let{transitionDuration:ie,transitionDelay:_e}=window.getComputedStyle(K);const Ae=Number.parseFloat(ie),Re=Number.parseFloat(_e);return Ae||Re?(ie=ie.split(",")[0],_e=_e.split(",")[0],1e3*(Number.parseFloat(ie)+Number.parseFloat(_e))):0})(c)+5;let O=!1;const k=({target:K})=>{K===c&&(O=!0,c.removeEventListener(i,k),M(v))};c.addEventListener(i,k),setTimeout(()=>{O||a(c)},E)},N=(v,c,m,E)=>{const O=v.length;let k=v.indexOf(c);return k===-1?!m&&E?v[O-1]:v[0]:(k+=m?1:-1,E&&(k=(k+O)%O),v[Math.max(0,Math.min(k,O-1))])},D=/[^.]*(?=\..*)\.|.*/,L=/\..*/,q=/::\d+$/,S={};let C=1;const Y={mouseenter:"mouseover",mouseleave:"mouseout"},J=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function le(v,c){return c&&`${c}::${C++}`||v.uidEvent||C++}function F(v){const c=le(v);return v.uidEvent=c,S[c]=S[c]||{},S[c]}function j(v,c,m=null){return Object.values(v).find(E=>E.callable===c&&E.delegationSelector===m)}function $(v,c,m){const E=typeof c=="string",O=E?m:c||m;let k=ne(v);return J.has(k)||(k=v),[E,O,k]}function ee(v,c,m,E,O){if(typeof c!="string"||!v)return;let[k,K,ie]=$(c,m,E);c in Y&&(K=(Ze=>function(Ye){if(!Ye.relatedTarget||Ye.relatedTarget!==Ye.delegateTarget&&!Ye.delegateTarget.contains(Ye.relatedTarget))return Ze.call(this,Ye)})(K));const _e=F(v),Ae=_e[ie]||(_e[ie]={}),Re=j(Ae,K,k?m:null);if(Re)return void(Re.oneOff=Re.oneOff&&O);const be=le(K,c.replace(D,"")),it=k?function(Ge,Ze,Ye){return function Je(Et){const Pt=Ge.querySelectorAll(Ze);for(let{target:ht}=Et;ht&&ht!==this;ht=ht.parentNode)for(const _t of Pt)if(_t===ht)return pe(Et,{delegateTarget:ht}),Je.oneOff&&B.off(Ge,Et.type,Ze,Ye),Ye.apply(ht,[Et])}}(v,m,K):function(Ge,Ze){return function Ye(Je){return pe(Je,{delegateTarget:Ge}),Ye.oneOff&&B.off(Ge,Je.type,Ze),Ze.apply(Ge,[Je])}}(v,K);it.delegationSelector=k?m:null,it.callable=K,it.oneOff=O,it.uidEvent=be,Ae[be]=it,v.addEventListener(ie,it,k)}function Q(v,c,m,E,O){const k=j(c[m],E,O);k&&(v.removeEventListener(m,k,!!O),delete c[m][k.uidEvent])}function te(v,c,m,E){const O=c[m]||{};for(const[k,K]of Object.entries(O))k.includes(E)&&Q(v,c,m,K.callable,K.delegationSelector)}function ne(v){return v=v.replace(L,""),Y[v]||v}const B={on(v,c,m,E){ee(v,c,m,E,!1)},one(v,c,m,E){ee(v,c,m,E,!0)},off(v,c,m,E){if(typeof c!="string"||!v)return;const[O,k,K]=$(c,m,E),ie=K!==c,_e=F(v),Ae=_e[K]||{},Re=c.startsWith(".");if(k===void 0){if(Re)for(const be of Object.keys(_e))te(v,_e,be,c.slice(1));for(const[be,it]of Object.entries(Ae)){const Ge=be.replace(q,"");ie&&!c.includes(Ge)||Q(v,_e,K,it.callable,it.delegationSelector)}}else{if(!Object.keys(Ae).length)return;Q(v,_e,K,k,O?m:null)}},trigger(v,c,m){if(typeof c!="string"||!v)return null;const E=y();let O=null,k=!0,K=!0,ie=!1;c!==ne(c)&&E&&(O=E.Event(c,m),E(v).trigger(O),k=!O.isPropagationStopped(),K=!O.isImmediatePropagationStopped(),ie=O.isDefaultPrevented());const _e=pe(new Event(c,{bubbles:k,cancelable:!0}),m);return ie&&_e.preventDefault(),K&&v.dispatchEvent(_e),_e.defaultPrevented&&O&&O.preventDefault(),_e}};function pe(v,c={}){for(const[m,E]of Object.entries(c))try{v[m]=E}catch{Object.defineProperty(v,m,{configurable:!0,get:()=>E})}return v}function Z(v){if(v==="true")return!0;if(v==="false")return!1;if(v===Number(v).toString())return Number(v);if(v===""||v==="null")return null;if(typeof v!="string")return v;try{return JSON.parse(decodeURIComponent(v))}catch{return v}}function re(v){return v.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const ve={setDataAttribute(v,c,m){v.setAttribute(`data-bs-${re(c)}`,m)},removeDataAttribute(v,c){v.removeAttribute(`data-bs-${re(c)}`)},getDataAttributes(v){if(!v)return{};const c={},m=Object.keys(v.dataset).filter(E=>E.startsWith("bs")&&!E.startsWith("bsConfig"));for(const E of m){let O=E.replace(/^bs/,"");O=O.charAt(0).toLowerCase()+O.slice(1),c[O]=Z(v.dataset[E])}return c},getDataAttribute:(v,c)=>Z(v.getAttribute(`data-bs-${re(c)}`))};class Le{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,m){const E=l(m)?ve.getDataAttribute(m,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...l(m)?ve.getDataAttributes(m):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,m=this.constructor.DefaultType){for(const[E,O]of Object.entries(m)){const k=c[E],K=l(k)?"element":o(k);if(!new RegExp(O).test(K))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${K}" but expected type "${O}".`)}}}class Ee extends Le{constructor(c,m){super(),(c=u(c))&&(this._element=c,this._config=this._getConfig(m),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),B.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,m,E=!0){w(c,m,E)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return n.get(u(c),this.DATA_KEY)}static getOrCreateInstance(c,m={}){return this.getInstance(c)||new this(c,typeof m=="object"?m:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const We=v=>{let c=v.getAttribute("data-bs-target");if(!c||c==="#"){let m=v.getAttribute("href");if(!m||!m.includes("#")&&!m.startsWith("."))return null;m.includes("#")&&!m.startsWith("#")&&(m=`#${m.split("#")[1]}`),c=m&&m!=="#"?m.trim():null}return c?c.split(",").map(m=>r(m)).join(","):null},oe={find:(v,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,v)),findOne:(v,c=document.documentElement)=>Element.prototype.querySelector.call(c,v),children:(v,c)=>[].concat(...v.children).filter(m=>m.matches(c)),parents(v,c){const m=[];let E=v.parentNode.closest(c);for(;E;)m.push(E),E=E.parentNode.closest(c);return m},prev(v,c){let m=v.previousElementSibling;for(;m;){if(m.matches(c))return[m];m=m.previousElementSibling}return[]},next(v,c){let m=v.nextElementSibling;for(;m;){if(m.matches(c))return[m];m=m.nextElementSibling}return[]},focusableChildren(v){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(m=>`${m}:not([tabindex^="-"])`).join(",");return this.find(c,v).filter(m=>!d(m)&&h(m))},getSelectorFromElement(v){const c=We(v);return c&&oe.findOne(c)?c:null},getElementFromSelector(v){const c=We(v);return c?oe.findOne(c):null},getMultipleElementsFromSelector(v){const c=We(v);return c?oe.find(c):[]}},Fe=(v,c="hide")=>{const m=`click.dismiss${v.EVENT_KEY}`,E=v.NAME;B.on(document,m,`[data-bs-dismiss="${E}"]`,function(O){if(["A","AREA"].includes(this.tagName)&&O.preventDefault(),d(this))return;const k=oe.getElementFromSelector(this)||this.closest(`.${E}`);v.getOrCreateInstance(k)[c]()})},ot=".bs.alert",X=`close${ot}`,Gt=`closed${ot}`;class De extends Ee{static get NAME(){return"alert"}close(){if(B.trigger(this._element,X).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),B.trigger(this._element,Gt),this.dispose()}static jQueryInterface(c){return this.each(function(){const m=De.getOrCreateInstance(this);if(typeof c=="string"){if(m[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);m[c](this)}})}}Fe(De,"close"),A(De);const Ve='[data-bs-toggle="button"]';class we extends Ee{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const m=we.getOrCreateInstance(this);c==="toggle"&&m[c]()})}}B.on(document,"click.bs.button.data-api",Ve,v=>{v.preventDefault();const c=v.target.closest(Ve);we.getOrCreateInstance(c).toggle()}),A(we);const gt=".bs.swipe",Qe=`touchstart${gt}`,R=`touchmove${gt}`,b=`touchend${gt}`,V=`pointerdown${gt}`,ue=`pointerup${gt}`,ae={endCallback:null,leftCallback:null,rightCallback:null},he={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ce extends Le{constructor(c,m){super(),this._element=c,c&&Ce.isSupported()&&(this._config=this._getConfig(m),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ae}static get DefaultType(){return he}static get NAME(){return"swipe"}dispose(){B.off(this._element,gt)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),M(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const m=c/this._deltaX;this._deltaX=0,m&&M(m>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(B.on(this._element,V,c=>this._start(c)),B.on(this._element,ue,c=>this._end(c)),this._element.classList.add("pointer-event")):(B.on(this._element,Qe,c=>this._start(c)),B.on(this._element,R,c=>this._move(c)),B.on(this._element,b,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ge=".bs.carousel",Se=".data-api",Be="ArrowLeft",et="ArrowRight",se="next",ct="prev",je="left",ze="right",Ne=`slide${ge}`,Me=`slid${ge}`,P=`keydown${ge}`,de=`mouseenter${ge}`,Ie=`mouseleave${ge}`,Te=`dragstart${ge}`,ce=`load${ge}${Se}`,I=`click${ge}${Se}`,fe="carousel",xe="active",He=".active",Ue=".carousel-item",lt=He+Ue,ut={[Be]:ze,[et]:je},Nt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ut={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class at extends Ee{constructor(c,m){super(c,m),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=oe.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===fe&&this.cycle()}static get Default(){return Nt}static get DefaultType(){return Ut}static get NAME(){return"carousel"}next(){this._slide(se)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(ct)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?B.one(this._element,Me,()=>this.cycle()):this.cycle())}to(c){const m=this._getItems();if(c>m.length-1||c<0)return;if(this._isSliding)return void B.one(this._element,Me,()=>this.to(c));const E=this._getItemIndex(this._getActive());if(E===c)return;const O=c>E?se:ct;this._slide(O,m[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&B.on(this._element,P,c=>this._keydown(c)),this._config.pause==="hover"&&(B.on(this._element,de,()=>this.pause()),B.on(this._element,Ie,()=>this._maybeEnableCycle())),this._config.touch&&Ce.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const m of oe.find(".carousel-item img",this._element))B.on(m,Te,E=>E.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(je)),rightCallback:()=>this._slide(this._directionToOrder(ze)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Ce(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const m=ut[c.key];m&&(c.preventDefault(),this._slide(this._directionToOrder(m)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const m=oe.findOne(He,this._indicatorsElement);m.classList.remove(xe),m.removeAttribute("aria-current");const E=oe.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);E&&(E.classList.add(xe),E.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const m=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=m||this._config.defaultInterval}_slide(c,m=null){if(this._isSliding)return;const E=this._getActive(),O=c===se,k=m||N(this._getItems(),E,O,this._config.wrap);if(k===E)return;const K=this._getItemIndex(k),ie=be=>B.trigger(this._element,be,{relatedTarget:k,direction:this._orderToDirection(c),from:this._getItemIndex(E),to:K});if(ie(Ne).defaultPrevented||!E||!k)return;const _e=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(K),this._activeElement=k;const Ae=O?"carousel-item-start":"carousel-item-end",Re=O?"carousel-item-next":"carousel-item-prev";k.classList.add(Re),x(k),E.classList.add(Ae),k.classList.add(Ae),this._queueCallback(()=>{k.classList.remove(Ae,Re),k.classList.add(xe),E.classList.remove(xe,Re,Ae),this._isSliding=!1,ie(Me)},E,this._isAnimated()),_e&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return oe.findOne(lt,this._element)}_getItems(){return oe.find(Ue,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return p()?c===je?ct:se:c===je?se:ct}_orderToDirection(c){return p()?c===ct?je:ze:c===ct?ze:je}static jQueryInterface(c){return this.each(function(){const m=at.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(m[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);m[c]()}}else m.to(c)})}}B.on(document,I,"[data-bs-slide], [data-bs-slide-to]",function(v){const c=oe.getElementFromSelector(this);if(!c||!c.classList.contains(fe))return;v.preventDefault();const m=at.getOrCreateInstance(c),E=this.getAttribute("data-bs-slide-to");return E?(m.to(E),void m._maybeEnableCycle()):ve.getDataAttribute(this,"slide")==="next"?(m.next(),void m._maybeEnableCycle()):(m.prev(),void m._maybeEnableCycle())}),B.on(window,ce,()=>{const v=oe.find('[data-bs-ride="carousel"]');for(const c of v)at.getOrCreateInstance(c)}),A(at);const Rt=".bs.collapse",vn=`show${Rt}`,Ar=`shown${Rt}`,Io=`hide${Rt}`,ss=`hidden${Rt}`,wr=`click${Rt}.data-api`,hi="show",$n="collapse",Pi="collapsing",No=`:scope .${$n} .${$n}`,er='[data-bs-toggle="collapse"]',Uo={parent:null,toggle:!0},T={parent:"(null|element)",toggle:"boolean"};class H extends Ee{constructor(c,m){super(c,m),this._isTransitioning=!1,this._triggerArray=[];const E=oe.find(er);for(const O of E){const k=oe.getSelectorFromElement(O),K=oe.find(k).filter(ie=>ie===this._element);k!==null&&K.length&&this._triggerArray.push(O)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Uo}static get DefaultType(){return T}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(O=>O!==this._element).map(O=>H.getOrCreateInstance(O,{toggle:!1}))),c.length&&c[0]._isTransitioning||B.trigger(this._element,vn).defaultPrevented)return;for(const O of c)O.hide();const m=this._getDimension();this._element.classList.remove($n),this._element.classList.add(Pi),this._element.style[m]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const E=`scroll${m[0].toUpperCase()+m.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Pi),this._element.classList.add($n,hi),this._element.style[m]="",B.trigger(this._element,Ar)},this._element,!0),this._element.style[m]=`${this._element[E]}px`}hide(){if(this._isTransitioning||!this._isShown()||B.trigger(this._element,Io).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,x(this._element),this._element.classList.add(Pi),this._element.classList.remove($n,hi);for(const m of this._triggerArray){const E=oe.getElementFromSelector(m);E&&!this._isShown(E)&&this._addAriaAndCollapsedClass([m],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Pi),this._element.classList.add($n),B.trigger(this._element,ss)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(hi)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=u(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(er);for(const m of c){const E=oe.getElementFromSelector(m);E&&this._addAriaAndCollapsedClass([m],this._isShown(E))}}_getFirstLevelChildren(c){const m=oe.find(No,this._config.parent);return oe.find(c,this._config.parent).filter(E=>!m.includes(E))}_addAriaAndCollapsedClass(c,m){if(c.length)for(const E of c)E.classList.toggle("collapsed",!m),E.setAttribute("aria-expanded",m)}static jQueryInterface(c){const m={};return typeof c=="string"&&/show|hide/.test(c)&&(m.toggle=!1),this.each(function(){const E=H.getOrCreateInstance(this,m);if(typeof c=="string"){if(E[c]===void 0)throw new TypeError(`No method named "${c}"`);E[c]()}})}}B.on(document,wr,er,function(v){(v.target.tagName==="A"||v.delegateTarget&&v.delegateTarget.tagName==="A")&&v.preventDefault();for(const c of oe.getMultipleElementsFromSelector(this))H.getOrCreateInstance(c,{toggle:!1}).toggle()}),A(H);var z="top",W="bottom",G="right",me="left",Pe="auto",Oe=[z,W,G,me],ke="start",qe="end",Ke="clippingParents",$e="viewport",bt="popper",Qt="reference",Ft=Oe.reduce(function(v,c){return v.concat([c+"-"+ke,c+"-"+qe])},[]),pn=[].concat(Oe,[Pe]).reduce(function(v,c){return v.concat([c,c+"-"+ke,c+"-"+qe])},[]),Ct="beforeRead",nt="read",rs="afterRead",Dt="beforeMain",Fn="main",tr="afterMain",di="beforeWrite",os="write",Vt="afterWrite",Bn=[Ct,nt,rs,Dt,Fn,tr,di,os,Vt];function un(v){return v?(v.nodeName||"").toLowerCase():null}function Lt(v){if(v==null)return window;if(v.toString()!=="[object Window]"){var c=v.ownerDocument;return c&&c.defaultView||window}return v}function Cn(v){return v instanceof Lt(v).Element||v instanceof Element}function hn(v){return v instanceof Lt(v).HTMLElement||v instanceof HTMLElement}function as(v){return typeof ShadowRoot<"u"&&(v instanceof Lt(v).ShadowRoot||v instanceof ShadowRoot)}const Oo={name:"applyStyles",enabled:!0,phase:"write",fn:function(v){var c=v.state;Object.keys(c.elements).forEach(function(m){var E=c.styles[m]||{},O=c.attributes[m]||{},k=c.elements[m];hn(k)&&un(k)&&(Object.assign(k.style,E),Object.keys(O).forEach(function(K){var ie=O[K];ie===!1?k.removeAttribute(K):k.setAttribute(K,ie===!0?"":ie)}))})},effect:function(v){var c=v.state,m={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,m.popper),c.styles=m,c.elements.arrow&&Object.assign(c.elements.arrow.style,m.arrow),function(){Object.keys(c.elements).forEach(function(E){var O=c.elements[E],k=c.attributes[E]||{},K=Object.keys(c.styles.hasOwnProperty(E)?c.styles[E]:m[E]).reduce(function(ie,_e){return ie[_e]="",ie},{});hn(O)&&un(O)&&(Object.assign(O.style,K),Object.keys(k).forEach(function(ie){O.removeAttribute(ie)}))})}},requires:["computeStyles"]};function kn(v){return v.split("-")[0]}var Di=Math.max,Rr=Math.min,cs=Math.round;function Fo(){var v=navigator.userAgentData;return v!=null&&v.brands&&Array.isArray(v.brands)?v.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function Sc(){return!/^((?!chrome|android).)*safari/i.test(Fo())}function ls(v,c,m){c===void 0&&(c=!1),m===void 0&&(m=!1);var E=v.getBoundingClientRect(),O=1,k=1;c&&hn(v)&&(O=v.offsetWidth>0&&cs(E.width)/v.offsetWidth||1,k=v.offsetHeight>0&&cs(E.height)/v.offsetHeight||1);var K=(Cn(v)?Lt(v):window).visualViewport,ie=!Sc()&&m,_e=(E.left+(ie&&K?K.offsetLeft:0))/O,Ae=(E.top+(ie&&K?K.offsetTop:0))/k,Re=E.width/O,be=E.height/k;return{width:Re,height:be,top:Ae,right:_e+Re,bottom:Ae+be,left:_e,x:_e,y:Ae}}function Bo(v){var c=ls(v),m=v.offsetWidth,E=v.offsetHeight;return Math.abs(c.width-m)<=1&&(m=c.width),Math.abs(c.height-E)<=1&&(E=c.height),{x:v.offsetLeft,y:v.offsetTop,width:m,height:E}}function Tc(v,c){var m=c.getRootNode&&c.getRootNode();if(v.contains(c))return!0;if(m&&as(m)){var E=c;do{if(E&&v.isSameNode(E))return!0;E=E.parentNode||E.host}while(E)}return!1}function Zn(v){return Lt(v).getComputedStyle(v)}function Ad(v){return["table","td","th"].indexOf(un(v))>=0}function fi(v){return((Cn(v)?v.ownerDocument:v.document)||window.document).documentElement}function Cr(v){return un(v)==="html"?v:v.assignedSlot||v.parentNode||(as(v)?v.host:null)||fi(v)}function Ac(v){return hn(v)&&Zn(v).position!=="fixed"?v.offsetParent:null}function nr(v){for(var c=Lt(v),m=Ac(v);m&&Ad(m)&&Zn(m).position==="static";)m=Ac(m);return m&&(un(m)==="html"||un(m)==="body"&&Zn(m).position==="static")?c:m||function(E){var O=/firefox/i.test(Fo());if(/Trident/i.test(Fo())&&hn(E)&&Zn(E).position==="fixed")return null;var k=Cr(E);for(as(k)&&(k=k.host);hn(k)&&["html","body"].indexOf(un(k))<0;){var K=Zn(k);if(K.transform!=="none"||K.perspective!=="none"||K.contain==="paint"||["transform","perspective"].indexOf(K.willChange)!==-1||O&&K.willChange==="filter"||O&&K.filter&&K.filter!=="none")return k;k=k.parentNode}return null}(v)||c}function ko(v){return["top","bottom"].indexOf(v)>=0?"x":"y"}function ir(v,c,m){return Di(v,Rr(c,m))}function wc(v){return Object.assign({},{top:0,right:0,bottom:0,left:0},v)}function Rc(v,c){return c.reduce(function(m,E){return m[E]=v,m},{})}const Cc={name:"arrow",enabled:!0,phase:"main",fn:function(v){var c,m=v.state,E=v.name,O=v.options,k=m.elements.arrow,K=m.modifiersData.popperOffsets,ie=kn(m.placement),_e=ko(ie),Ae=[me,G].indexOf(ie)>=0?"height":"width";if(k&&K){var Re=function(St,yt){return wc(typeof(St=typeof St=="function"?St(Object.assign({},yt.rects,{placement:yt.placement})):St)!="number"?St:Rc(St,Oe))}(O.padding,m),be=Bo(k),it=_e==="y"?z:me,Ge=_e==="y"?W:G,Ze=m.rects.reference[Ae]+m.rects.reference[_e]-K[_e]-m.rects.popper[Ae],Ye=K[_e]-m.rects.reference[_e],Je=nr(k),Et=Je?_e==="y"?Je.clientHeight||0:Je.clientWidth||0:0,Pt=Ze/2-Ye/2,ht=Re[it],_t=Et-be[Ae]-Re[Ge],st=Et/2-be[Ae]/2+Pt,mt=ir(ht,st,_t),xt=_e;m.modifiersData[E]=((c={})[xt]=mt,c.centerOffset=mt-st,c)}},effect:function(v){var c=v.state,m=v.options.element,E=m===void 0?"[data-popper-arrow]":m;E!=null&&(typeof E!="string"||(E=c.elements.popper.querySelector(E)))&&Tc(c.elements.popper,E)&&(c.elements.arrow=E)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function us(v){return v.split("-")[1]}var wd={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Lc(v){var c,m=v.popper,E=v.popperRect,O=v.placement,k=v.variation,K=v.offsets,ie=v.position,_e=v.gpuAcceleration,Ae=v.adaptive,Re=v.roundOffsets,be=v.isFixed,it=K.x,Ge=it===void 0?0:it,Ze=K.y,Ye=Ze===void 0?0:Ze,Je=typeof Re=="function"?Re({x:Ge,y:Ye}):{x:Ge,y:Ye};Ge=Je.x,Ye=Je.y;var Et=K.hasOwnProperty("x"),Pt=K.hasOwnProperty("y"),ht=me,_t=z,st=window;if(Ae){var mt=nr(m),xt="clientHeight",St="clientWidth";mt===Lt(m)&&Zn(mt=fi(m)).position!=="static"&&ie==="absolute"&&(xt="scrollHeight",St="scrollWidth"),(O===z||(O===me||O===G)&&k===qe)&&(_t=W,Ye-=(be&&mt===st&&st.visualViewport?st.visualViewport.height:mt[xt])-E.height,Ye*=_e?1:-1),O!==me&&(O!==z&&O!==W||k!==qe)||(ht=G,Ge-=(be&&mt===st&&st.visualViewport?st.visualViewport.width:mt[St])-E.width,Ge*=_e?1:-1)}var yt,Ht=Object.assign({position:ie},Ae&&wd),mn=Re===!0?function(Pn,nn){var yn=Pn.x,Mn=Pn.y,Bt=nn.devicePixelRatio||1;return{x:cs(yn*Bt)/Bt||0,y:cs(Mn*Bt)/Bt||0}}({x:Ge,y:Ye},Lt(m)):{x:Ge,y:Ye};return Ge=mn.x,Ye=mn.y,_e?Object.assign({},Ht,((yt={})[_t]=Pt?"0":"",yt[ht]=Et?"0":"",yt.transform=(st.devicePixelRatio||1)<=1?"translate("+Ge+"px, "+Ye+"px)":"translate3d("+Ge+"px, "+Ye+"px, 0)",yt)):Object.assign({},Ht,((c={})[_t]=Pt?Ye+"px":"",c[ht]=Et?Ge+"px":"",c.transform="",c))}const Ho={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(v){var c=v.state,m=v.options,E=m.gpuAcceleration,O=E===void 0||E,k=m.adaptive,K=k===void 0||k,ie=m.roundOffsets,_e=ie===void 0||ie,Ae={placement:kn(c.placement),variation:us(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:O,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,Lc(Object.assign({},Ae,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:K,roundOffsets:_e})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,Lc(Object.assign({},Ae,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:_e})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var Lr={passive:!0};const zo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(v){var c=v.state,m=v.instance,E=v.options,O=E.scroll,k=O===void 0||O,K=E.resize,ie=K===void 0||K,_e=Lt(c.elements.popper),Ae=[].concat(c.scrollParents.reference,c.scrollParents.popper);return k&&Ae.forEach(function(Re){Re.addEventListener("scroll",m.update,Lr)}),ie&&_e.addEventListener("resize",m.update,Lr),function(){k&&Ae.forEach(function(Re){Re.removeEventListener("scroll",m.update,Lr)}),ie&&_e.removeEventListener("resize",m.update,Lr)}},data:{}};var Rd={left:"right",right:"left",bottom:"top",top:"bottom"};function Pr(v){return v.replace(/left|right|bottom|top/g,function(c){return Rd[c]})}var Cd={start:"end",end:"start"};function Pc(v){return v.replace(/start|end/g,function(c){return Cd[c]})}function Go(v){var c=Lt(v);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function Vo(v){return ls(fi(v)).left+Go(v).scrollLeft}function Wo(v){var c=Zn(v),m=c.overflow,E=c.overflowX,O=c.overflowY;return/auto|scroll|overlay|hidden/.test(m+O+E)}function Dc(v){return["html","body","#document"].indexOf(un(v))>=0?v.ownerDocument.body:hn(v)&&Wo(v)?v:Dc(Cr(v))}function sr(v,c){var m;c===void 0&&(c=[]);var E=Dc(v),O=E===((m=v.ownerDocument)==null?void 0:m.body),k=Lt(E),K=O?[k].concat(k.visualViewport||[],Wo(E)?E:[]):E,ie=c.concat(K);return O?ie:ie.concat(sr(Cr(K)))}function Xo(v){return Object.assign({},v,{left:v.x,top:v.y,right:v.x+v.width,bottom:v.y+v.height})}function Ic(v,c,m){return c===$e?Xo(function(E,O){var k=Lt(E),K=fi(E),ie=k.visualViewport,_e=K.clientWidth,Ae=K.clientHeight,Re=0,be=0;if(ie){_e=ie.width,Ae=ie.height;var it=Sc();(it||!it&&O==="fixed")&&(Re=ie.offsetLeft,be=ie.offsetTop)}return{width:_e,height:Ae,x:Re+Vo(E),y:be}}(v,m)):Cn(c)?function(E,O){var k=ls(E,!1,O==="fixed");return k.top=k.top+E.clientTop,k.left=k.left+E.clientLeft,k.bottom=k.top+E.clientHeight,k.right=k.left+E.clientWidth,k.width=E.clientWidth,k.height=E.clientHeight,k.x=k.left,k.y=k.top,k}(c,m):Xo(function(E){var O,k=fi(E),K=Go(E),ie=(O=E.ownerDocument)==null?void 0:O.body,_e=Di(k.scrollWidth,k.clientWidth,ie?ie.scrollWidth:0,ie?ie.clientWidth:0),Ae=Di(k.scrollHeight,k.clientHeight,ie?ie.scrollHeight:0,ie?ie.clientHeight:0),Re=-K.scrollLeft+Vo(E),be=-K.scrollTop;return Zn(ie||k).direction==="rtl"&&(Re+=Di(k.clientWidth,ie?ie.clientWidth:0)-_e),{width:_e,height:Ae,x:Re,y:be}}(fi(v)))}function Nc(v){var c,m=v.reference,E=v.element,O=v.placement,k=O?kn(O):null,K=O?us(O):null,ie=m.x+m.width/2-E.width/2,_e=m.y+m.height/2-E.height/2;switch(k){case z:c={x:ie,y:m.y-E.height};break;case W:c={x:ie,y:m.y+m.height};break;case G:c={x:m.x+m.width,y:_e};break;case me:c={x:m.x-E.width,y:_e};break;default:c={x:m.x,y:m.y}}var Ae=k?ko(k):null;if(Ae!=null){var Re=Ae==="y"?"height":"width";switch(K){case ke:c[Ae]=c[Ae]-(m[Re]/2-E[Re]/2);break;case qe:c[Ae]=c[Ae]+(m[Re]/2-E[Re]/2)}}return c}function hs(v,c){c===void 0&&(c={});var m=c,E=m.placement,O=E===void 0?v.placement:E,k=m.strategy,K=k===void 0?v.strategy:k,ie=m.boundary,_e=ie===void 0?Ke:ie,Ae=m.rootBoundary,Re=Ae===void 0?$e:Ae,be=m.elementContext,it=be===void 0?bt:be,Ge=m.altBoundary,Ze=Ge!==void 0&&Ge,Ye=m.padding,Je=Ye===void 0?0:Ye,Et=wc(typeof Je!="number"?Je:Rc(Je,Oe)),Pt=it===bt?Qt:bt,ht=v.rects.popper,_t=v.elements[Ze?Pt:it],st=function(nn,yn,Mn,Bt){var Hn=yn==="clippingParents"?function(At){var sn=sr(Cr(At)),bn=["absolute","fixed"].indexOf(Zn(At).position)>=0&&hn(At)?nr(At):At;return Cn(bn)?sn.filter(function(mi){return Cn(mi)&&Tc(mi,bn)&&un(mi)!=="body"}):[]}(nn):[].concat(yn),zn=[].concat(Hn,[Mn]),ps=zn[0],jt=zn.reduce(function(At,sn){var bn=Ic(nn,sn,Bt);return At.top=Di(bn.top,At.top),At.right=Rr(bn.right,At.right),At.bottom=Rr(bn.bottom,At.bottom),At.left=Di(bn.left,At.left),At},Ic(nn,ps,Bt));return jt.width=jt.right-jt.left,jt.height=jt.bottom-jt.top,jt.x=jt.left,jt.y=jt.top,jt}(Cn(_t)?_t:_t.contextElement||fi(v.elements.popper),_e,Re,K),mt=ls(v.elements.reference),xt=Nc({reference:mt,element:ht,placement:O}),St=Xo(Object.assign({},ht,xt)),yt=it===bt?St:mt,Ht={top:st.top-yt.top+Et.top,bottom:yt.bottom-st.bottom+Et.bottom,left:st.left-yt.left+Et.left,right:yt.right-st.right+Et.right},mn=v.modifiersData.offset;if(it===bt&&mn){var Pn=mn[O];Object.keys(Ht).forEach(function(nn){var yn=[G,W].indexOf(nn)>=0?1:-1,Mn=[z,W].indexOf(nn)>=0?"y":"x";Ht[nn]+=Pn[Mn]*yn})}return Ht}function Ld(v,c){c===void 0&&(c={});var m=c,E=m.placement,O=m.boundary,k=m.rootBoundary,K=m.padding,ie=m.flipVariations,_e=m.allowedAutoPlacements,Ae=_e===void 0?pn:_e,Re=us(E),be=Re?ie?Ft:Ft.filter(function(Ze){return us(Ze)===Re}):Oe,it=be.filter(function(Ze){return Ae.indexOf(Ze)>=0});it.length===0&&(it=be);var Ge=it.reduce(function(Ze,Ye){return Ze[Ye]=hs(v,{placement:Ye,boundary:O,rootBoundary:k,padding:K})[kn(Ye)],Ze},{});return Object.keys(Ge).sort(function(Ze,Ye){return Ge[Ze]-Ge[Ye]})}const Uc={name:"flip",enabled:!0,phase:"main",fn:function(v){var c=v.state,m=v.options,E=v.name;if(!c.modifiersData[E]._skip){for(var O=m.mainAxis,k=O===void 0||O,K=m.altAxis,ie=K===void 0||K,_e=m.fallbackPlacements,Ae=m.padding,Re=m.boundary,be=m.rootBoundary,it=m.altBoundary,Ge=m.flipVariations,Ze=Ge===void 0||Ge,Ye=m.allowedAutoPlacements,Je=c.options.placement,Et=kn(Je),Pt=_e||(Et!==Je&&Ze?function(At){if(kn(At)===Pe)return[];var sn=Pr(At);return[Pc(At),sn,Pc(sn)]}(Je):[Pr(Je)]),ht=[Je].concat(Pt).reduce(function(At,sn){return At.concat(kn(sn)===Pe?Ld(c,{placement:sn,boundary:Re,rootBoundary:be,padding:Ae,flipVariations:Ze,allowedAutoPlacements:Ye}):sn)},[]),_t=c.rects.reference,st=c.rects.popper,mt=new Map,xt=!0,St=ht[0],yt=0;yt<ht.length;yt++){var Ht=ht[yt],mn=kn(Ht),Pn=us(Ht)===ke,nn=[z,W].indexOf(mn)>=0,yn=nn?"width":"height",Mn=hs(c,{placement:Ht,boundary:Re,rootBoundary:be,altBoundary:it,padding:Ae}),Bt=nn?Pn?G:me:Pn?W:z;_t[yn]>st[yn]&&(Bt=Pr(Bt));var Hn=Pr(Bt),zn=[];if(k&&zn.push(Mn[mn]<=0),ie&&zn.push(Mn[Bt]<=0,Mn[Hn]<=0),zn.every(function(At){return At})){St=Ht,xt=!1;break}mt.set(Ht,zn)}if(xt)for(var ps=function(At){var sn=ht.find(function(bn){var mi=mt.get(bn);if(mi)return mi.slice(0,At).every(function(Hr){return Hr})});if(sn)return St=sn,"break"},jt=Ze?3:1;jt>0&&ps(jt)!=="break";jt--);c.placement!==St&&(c.modifiersData[E]._skip=!0,c.placement=St,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Oc(v,c,m){return m===void 0&&(m={x:0,y:0}),{top:v.top-c.height-m.y,right:v.right-c.width+m.x,bottom:v.bottom-c.height+m.y,left:v.left-c.width-m.x}}function Fc(v){return[z,G,W,me].some(function(c){return v[c]>=0})}const Bc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(v){var c=v.state,m=v.name,E=c.rects.reference,O=c.rects.popper,k=c.modifiersData.preventOverflow,K=hs(c,{elementContext:"reference"}),ie=hs(c,{altBoundary:!0}),_e=Oc(K,E),Ae=Oc(ie,O,k),Re=Fc(_e),be=Fc(Ae);c.modifiersData[m]={referenceClippingOffsets:_e,popperEscapeOffsets:Ae,isReferenceHidden:Re,hasPopperEscaped:be},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":Re,"data-popper-escaped":be})}},kc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(v){var c=v.state,m=v.options,E=v.name,O=m.offset,k=O===void 0?[0,0]:O,K=pn.reduce(function(Re,be){return Re[be]=function(it,Ge,Ze){var Ye=kn(it),Je=[me,z].indexOf(Ye)>=0?-1:1,Et=typeof Ze=="function"?Ze(Object.assign({},Ge,{placement:it})):Ze,Pt=Et[0],ht=Et[1];return Pt=Pt||0,ht=(ht||0)*Je,[me,G].indexOf(Ye)>=0?{x:ht,y:Pt}:{x:Pt,y:ht}}(be,c.rects,k),Re},{}),ie=K[c.placement],_e=ie.x,Ae=ie.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=_e,c.modifiersData.popperOffsets.y+=Ae),c.modifiersData[E]=K}},jo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(v){var c=v.state,m=v.name;c.modifiersData[m]=Nc({reference:c.rects.reference,element:c.rects.popper,placement:c.placement})},data:{}},Hc={name:"preventOverflow",enabled:!0,phase:"main",fn:function(v){var c=v.state,m=v.options,E=v.name,O=m.mainAxis,k=O===void 0||O,K=m.altAxis,ie=K!==void 0&&K,_e=m.boundary,Ae=m.rootBoundary,Re=m.altBoundary,be=m.padding,it=m.tether,Ge=it===void 0||it,Ze=m.tetherOffset,Ye=Ze===void 0?0:Ze,Je=hs(c,{boundary:_e,rootBoundary:Ae,padding:be,altBoundary:Re}),Et=kn(c.placement),Pt=us(c.placement),ht=!Pt,_t=ko(Et),st=_t==="x"?"y":"x",mt=c.modifiersData.popperOffsets,xt=c.rects.reference,St=c.rects.popper,yt=typeof Ye=="function"?Ye(Object.assign({},c.rects,{placement:c.placement})):Ye,Ht=typeof yt=="number"?{mainAxis:yt,altAxis:yt}:Object.assign({mainAxis:0,altAxis:0},yt),mn=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,Pn={x:0,y:0};if(mt){if(k){var nn,yn=_t==="y"?z:me,Mn=_t==="y"?W:G,Bt=_t==="y"?"height":"width",Hn=mt[_t],zn=Hn+Je[yn],ps=Hn-Je[Mn],jt=Ge?-St[Bt]/2:0,At=Pt===ke?xt[Bt]:St[Bt],sn=Pt===ke?-St[Bt]:-xt[Bt],bn=c.elements.arrow,mi=Ge&&bn?Bo(bn):{width:0,height:0},Hr=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Al=Hr[yn],wl=Hr[Mn],zr=ir(0,xt[Bt],mi[Bt]),lp=ht?xt[Bt]/2-jt-zr-Al-Ht.mainAxis:At-zr-Al-Ht.mainAxis,up=ht?-xt[Bt]/2+jt+zr+wl+Ht.mainAxis:sn+zr+wl+Ht.mainAxis,oa=c.elements.arrow&&nr(c.elements.arrow),hp=oa?_t==="y"?oa.clientTop||0:oa.clientLeft||0:0,Rl=(nn=mn==null?void 0:mn[_t])!=null?nn:0,dp=Hn+up-Rl,Cl=ir(Ge?Rr(zn,Hn+lp-Rl-hp):zn,Hn,Ge?Di(ps,dp):ps);mt[_t]=Cl,Pn[_t]=Cl-Hn}if(ie){var Ll,fp=_t==="x"?z:me,pp=_t==="x"?W:G,Hi=mt[st],Gr=st==="y"?"height":"width",Pl=Hi+Je[fp],Dl=Hi-Je[pp],aa=[z,me].indexOf(Et)!==-1,Il=(Ll=mn==null?void 0:mn[st])!=null?Ll:0,Nl=aa?Pl:Hi-xt[Gr]-St[Gr]-Il+Ht.altAxis,Ul=aa?Hi+xt[Gr]+St[Gr]-Il-Ht.altAxis:Dl,Ol=Ge&&aa?function(mp,gp,ca){var Fl=ir(mp,gp,ca);return Fl>ca?ca:Fl}(Nl,Hi,Ul):ir(Ge?Nl:Pl,Hi,Ge?Ul:Dl);mt[st]=Ol,Pn[st]=Ol-Hi}c.modifiersData[E]=Pn}},requiresIfExists:["offset"]};function Pd(v,c,m){m===void 0&&(m=!1);var E,O,k=hn(c),K=hn(c)&&function(be){var it=be.getBoundingClientRect(),Ge=cs(it.width)/be.offsetWidth||1,Ze=cs(it.height)/be.offsetHeight||1;return Ge!==1||Ze!==1}(c),ie=fi(c),_e=ls(v,K,m),Ae={scrollLeft:0,scrollTop:0},Re={x:0,y:0};return(k||!k&&!m)&&((un(c)!=="body"||Wo(ie))&&(Ae=(E=c)!==Lt(E)&&hn(E)?{scrollLeft:(O=E).scrollLeft,scrollTop:O.scrollTop}:Go(E)),hn(c)?((Re=ls(c,!0)).x+=c.clientLeft,Re.y+=c.clientTop):ie&&(Re.x=Vo(ie))),{x:_e.left+Ae.scrollLeft-Re.x,y:_e.top+Ae.scrollTop-Re.y,width:_e.width,height:_e.height}}function Dd(v){var c=new Map,m=new Set,E=[];function O(k){m.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(K){if(!m.has(K)){var ie=c.get(K);ie&&O(ie)}}),E.push(k)}return v.forEach(function(k){c.set(k.name,k)}),v.forEach(function(k){m.has(k.name)||O(k)}),E}var zc={placement:"bottom",modifiers:[],strategy:"absolute"};function Gc(){for(var v=arguments.length,c=new Array(v),m=0;m<v;m++)c[m]=arguments[m];return!c.some(function(E){return!(E&&typeof E.getBoundingClientRect=="function")})}function Dr(v){v===void 0&&(v={});var c=v,m=c.defaultModifiers,E=m===void 0?[]:m,O=c.defaultOptions,k=O===void 0?zc:O;return function(K,ie,_e){_e===void 0&&(_e=k);var Ae,Re,be={placement:"bottom",orderedModifiers:[],options:Object.assign({},zc,k),modifiersData:{},elements:{reference:K,popper:ie},attributes:{},styles:{}},it=[],Ge=!1,Ze={state:be,setOptions:function(Je){var Et=typeof Je=="function"?Je(be.options):Je;Ye(),be.options=Object.assign({},k,be.options,Et),be.scrollParents={reference:Cn(K)?sr(K):K.contextElement?sr(K.contextElement):[],popper:sr(ie)};var Pt,ht,_t=function(st){var mt=Dd(st);return Bn.reduce(function(xt,St){return xt.concat(mt.filter(function(yt){return yt.phase===St}))},[])}((Pt=[].concat(E,be.options.modifiers),ht=Pt.reduce(function(st,mt){var xt=st[mt.name];return st[mt.name]=xt?Object.assign({},xt,mt,{options:Object.assign({},xt.options,mt.options),data:Object.assign({},xt.data,mt.data)}):mt,st},{}),Object.keys(ht).map(function(st){return ht[st]})));return be.orderedModifiers=_t.filter(function(st){return st.enabled}),be.orderedModifiers.forEach(function(st){var mt=st.name,xt=st.options,St=xt===void 0?{}:xt,yt=st.effect;if(typeof yt=="function"){var Ht=yt({state:be,name:mt,instance:Ze,options:St});it.push(Ht||function(){})}}),Ze.update()},forceUpdate:function(){if(!Ge){var Je=be.elements,Et=Je.reference,Pt=Je.popper;if(Gc(Et,Pt)){be.rects={reference:Pd(Et,nr(Pt),be.options.strategy==="fixed"),popper:Bo(Pt)},be.reset=!1,be.placement=be.options.placement,be.orderedModifiers.forEach(function(yt){return be.modifiersData[yt.name]=Object.assign({},yt.data)});for(var ht=0;ht<be.orderedModifiers.length;ht++)if(be.reset!==!0){var _t=be.orderedModifiers[ht],st=_t.fn,mt=_t.options,xt=mt===void 0?{}:mt,St=_t.name;typeof st=="function"&&(be=st({state:be,options:xt,name:St,instance:Ze})||be)}else be.reset=!1,ht=-1}}},update:(Ae=function(){return new Promise(function(Je){Ze.forceUpdate(),Je(be)})},function(){return Re||(Re=new Promise(function(Je){Promise.resolve().then(function(){Re=void 0,Je(Ae())})})),Re}),destroy:function(){Ye(),Ge=!0}};if(!Gc(K,ie))return Ze;function Ye(){it.forEach(function(Je){return Je()}),it=[]}return Ze.setOptions(_e).then(function(Je){!Ge&&_e.onFirstUpdate&&_e.onFirstUpdate(Je)}),Ze}}var Id=Dr(),Nd=Dr({defaultModifiers:[zo,jo,Ho,Oo]}),qo=Dr({defaultModifiers:[zo,jo,Ho,Oo,kc,Uc,Hc,Cc,Bc]});const Vc=Object.freeze(Object.defineProperty({__proto__:null,afterMain:tr,afterRead:rs,afterWrite:Vt,applyStyles:Oo,arrow:Cc,auto:Pe,basePlacements:Oe,beforeMain:Dt,beforeRead:Ct,beforeWrite:di,bottom:W,clippingParents:Ke,computeStyles:Ho,createPopper:qo,createPopperBase:Id,createPopperLite:Nd,detectOverflow:hs,end:qe,eventListeners:zo,flip:Uc,hide:Bc,left:me,main:Fn,modifierPhases:Bn,offset:kc,placements:pn,popper:bt,popperGenerator:Dr,popperOffsets:jo,preventOverflow:Hc,read:nt,reference:Qt,right:G,start:ke,top:z,variationPlacements:Ft,viewport:$e,write:os},Symbol.toStringTag,{value:"Module"})),Wc="dropdown",Ii=".bs.dropdown",Yo=".data-api",Ud="ArrowUp",Xc="ArrowDown",Od=`hide${Ii}`,Fd=`hidden${Ii}`,Bd=`show${Ii}`,kd=`shown${Ii}`,jc=`click${Ii}${Yo}`,qc=`keydown${Ii}${Yo}`,Hd=`keyup${Ii}${Yo}`,ds="show",Ni='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',zd=`${Ni}.${ds}`,Ir=".dropdown-menu",Gd=p()?"top-end":"top-start",Vd=p()?"top-start":"top-end",Wd=p()?"bottom-end":"bottom-start",Xd=p()?"bottom-start":"bottom-end",jd=p()?"left-start":"right-start",qd=p()?"right-start":"left-start",Yd={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Kd={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ln extends Ee{constructor(c,m){super(c,m),this._popper=null,this._parent=this._element.parentNode,this._menu=oe.next(this._element,Ir)[0]||oe.prev(this._element,Ir)[0]||oe.findOne(Ir,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Yd}static get DefaultType(){return Kd}static get NAME(){return Wc}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!B.trigger(this._element,Bd,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const m of[].concat(...document.body.children))B.on(m,"mouseover",_);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ds),this._element.classList.add(ds),B.trigger(this._element,kd,c)}}hide(){if(d(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!B.trigger(this._element,Od,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const m of[].concat(...document.body.children))B.off(m,"mouseover",_);this._popper&&this._popper.destroy(),this._menu.classList.remove(ds),this._element.classList.remove(ds),this._element.setAttribute("aria-expanded","false"),ve.removeDataAttribute(this._menu,"popper"),B.trigger(this._element,Fd,c)}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!l(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${Wc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(Vc===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let c=this._element;this._config.reference==="parent"?c=this._parent:l(this._config.reference)?c=u(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const m=this._getPopperConfig();this._popper=qo(c,this._menu,m)}_isShown(){return this._menu.classList.contains(ds)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return jd;if(c.classList.contains("dropstart"))return qd;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const m=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?m?Vd:Gd:m?Xd:Wd}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(m=>Number.parseInt(m,10)):typeof c=="function"?m=>c(m,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ve.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...M(this._config.popperConfig,[void 0,c])}}_selectMenuItem({key:c,target:m}){const E=oe.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(O=>h(O));E.length&&N(E,m,c===Xc,!E.includes(m)).focus()}static jQueryInterface(c){return this.each(function(){const m=Ln.getOrCreateInstance(this,c);if(typeof c=="string"){if(m[c]===void 0)throw new TypeError(`No method named "${c}"`);m[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const m=oe.find(zd);for(const E of m){const O=Ln.getInstance(E);if(!O||O._config.autoClose===!1)continue;const k=c.composedPath(),K=k.includes(O._menu);if(k.includes(O._element)||O._config.autoClose==="inside"&&!K||O._config.autoClose==="outside"&&K||O._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const ie={relatedTarget:O._element};c.type==="click"&&(ie.clickEvent=c),O._completeHide(ie)}}static dataApiKeydownHandler(c){const m=/input|textarea/i.test(c.target.tagName),E=c.key==="Escape",O=[Ud,Xc].includes(c.key);if(!O&&!E||m&&!E)return;c.preventDefault();const k=this.matches(Ni)?this:oe.prev(this,Ni)[0]||oe.next(this,Ni)[0]||oe.findOne(Ni,c.delegateTarget.parentNode),K=Ln.getOrCreateInstance(k);if(O)return c.stopPropagation(),K.show(),void K._selectMenuItem(c);K._isShown()&&(c.stopPropagation(),K.hide(),k.focus())}}B.on(document,qc,Ni,Ln.dataApiKeydownHandler),B.on(document,qc,Ir,Ln.dataApiKeydownHandler),B.on(document,jc,Ln.clearMenus),B.on(document,Hd,Ln.clearMenus),B.on(document,jc,Ni,function(v){v.preventDefault(),Ln.getOrCreateInstance(this).toggle()}),A(Ln);const Yc="backdrop",Kc="show",$c=`mousedown.bs.${Yc}`,$d={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Zd={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Zc extends Le{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return $d}static get DefaultType(){return Zd}static get NAME(){return Yc}show(c){if(!this._config.isVisible)return void M(c);this._append();const m=this._getElement();this._config.isAnimated&&x(m),m.classList.add(Kc),this._emulateAnimation(()=>{M(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(Kc),this._emulateAnimation(()=>{this.dispose(),M(c)})):M(c)}dispose(){this._isAppended&&(B.off(this._element,$c),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=u(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),B.on(c,$c,()=>{M(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){w(c,this._getElement(),this._config.isAnimated)}}const Nr=".bs.focustrap",Jd=`focusin${Nr}`,Qd=`keydown.tab${Nr}`,Jc="backward",ef={autofocus:!0,trapElement:null},tf={autofocus:"boolean",trapElement:"element"};class Qc extends Le{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ef}static get DefaultType(){return tf}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),B.off(document,Nr),B.on(document,Jd,c=>this._handleFocusin(c)),B.on(document,Qd,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,B.off(document,Nr))}_handleFocusin(c){const{trapElement:m}=this._config;if(c.target===document||c.target===m||m.contains(c.target))return;const E=oe.focusableChildren(m);E.length===0?m.focus():this._lastTabNavDirection===Jc?E[E.length-1].focus():E[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?Jc:"forward")}}const el=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",tl=".sticky-top",Ur="padding-right",nl="margin-right";class Ko{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ur,m=>m+c),this._setElementAttributes(el,Ur,m=>m+c),this._setElementAttributes(tl,nl,m=>m-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ur),this._resetElementAttributes(el,Ur),this._resetElementAttributes(tl,nl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,m,E){const O=this.getWidth();this._applyManipulationCallback(c,k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+O)return;this._saveInitialAttribute(k,m);const K=window.getComputedStyle(k).getPropertyValue(m);k.style.setProperty(m,`${E(Number.parseFloat(K))}px`)})}_saveInitialAttribute(c,m){const E=c.style.getPropertyValue(m);E&&ve.setDataAttribute(c,m,E)}_resetElementAttributes(c,m){this._applyManipulationCallback(c,E=>{const O=ve.getDataAttribute(E,m);O!==null?(ve.removeDataAttribute(E,m),E.style.setProperty(m,O)):E.style.removeProperty(m)})}_applyManipulationCallback(c,m){if(l(c))m(c);else for(const E of oe.find(c,this._element))m(E)}}const xn=".bs.modal",nf=`hide${xn}`,sf=`hidePrevented${xn}`,il=`hidden${xn}`,sl=`show${xn}`,rf=`shown${xn}`,of=`resize${xn}`,af=`click.dismiss${xn}`,cf=`mousedown.dismiss${xn}`,lf=`keydown.dismiss${xn}`,uf=`click${xn}.data-api`,rl="modal-open",ol="show",$o="modal-static",hf={backdrop:!0,focus:!0,keyboard:!0},df={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ui extends Ee{constructor(c,m){super(c,m),this._dialog=oe.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ko,this._addEventListeners()}static get Default(){return hf}static get DefaultType(){return df}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||B.trigger(this._element,sl,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(rl),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(B.trigger(this._element,nf).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ol),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){B.off(window,xn),B.off(this._dialog,xn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Zc({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Qc({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const m=oe.findOne(".modal-body",this._dialog);m&&(m.scrollTop=0),x(this._element),this._element.classList.add(ol),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,B.trigger(this._element,rf,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){B.on(this._element,lf,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),B.on(window,of,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),B.on(this._element,cf,c=>{B.one(this._element,af,m=>{this._element===c.target&&this._element===m.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(rl),this._resetAdjustments(),this._scrollBar.reset(),B.trigger(this._element,il)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(B.trigger(this._element,sf).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,m=this._element.style.overflowY;m==="hidden"||this._element.classList.contains($o)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add($o),this._queueCallback(()=>{this._element.classList.remove($o),this._queueCallback(()=>{this._element.style.overflowY=m},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,m=this._scrollBar.getWidth(),E=m>0;if(E&&!c){const O=p()?"paddingLeft":"paddingRight";this._element.style[O]=`${m}px`}if(!E&&c){const O=p()?"paddingRight":"paddingLeft";this._element.style[O]=`${m}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,m){return this.each(function(){const E=Ui.getOrCreateInstance(this,c);if(typeof c=="string"){if(E[c]===void 0)throw new TypeError(`No method named "${c}"`);E[c](m)}})}}B.on(document,uf,'[data-bs-toggle="modal"]',function(v){const c=oe.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&v.preventDefault(),B.one(c,sl,E=>{E.defaultPrevented||B.one(c,il,()=>{h(this)&&this.focus()})});const m=oe.findOne(".modal.show");m&&Ui.getInstance(m).hide(),Ui.getOrCreateInstance(c).toggle(this)}),Fe(Ui),A(Ui);const Jn=".bs.offcanvas",al=".data-api",ff=`load${Jn}${al}`,cl="show",ll="showing",ul="hiding",hl=".offcanvas.show",pf=`show${Jn}`,mf=`shown${Jn}`,gf=`hide${Jn}`,dl=`hidePrevented${Jn}`,fl=`hidden${Jn}`,_f=`resize${Jn}`,vf=`click${Jn}${al}`,xf=`keydown.dismiss${Jn}`,yf={backdrop:!0,keyboard:!0,scroll:!1},Mf={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Qn extends Ee{constructor(c,m){super(c,m),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return yf}static get DefaultType(){return Mf}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||B.trigger(this._element,pf,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ko().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ll),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(cl),this._element.classList.remove(ll),B.trigger(this._element,mf,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(B.trigger(this._element,gf).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ul),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(cl,ul),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ko().reset(),B.trigger(this._element,fl)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new Zc({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():B.trigger(this._element,dl)}:null})}_initializeFocusTrap(){return new Qc({trapElement:this._element})}_addEventListeners(){B.on(this._element,xf,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():B.trigger(this._element,dl))})}static jQueryInterface(c){return this.each(function(){const m=Qn.getOrCreateInstance(this,c);if(typeof c=="string"){if(m[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);m[c](this)}})}}B.on(document,vf,'[data-bs-toggle="offcanvas"]',function(v){const c=oe.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&v.preventDefault(),d(this))return;B.one(c,fl,()=>{h(this)&&this.focus()});const m=oe.findOne(hl);m&&m!==c&&Qn.getInstance(m).hide(),Qn.getOrCreateInstance(c).toggle(this)}),B.on(window,ff,()=>{for(const v of oe.find(hl))Qn.getOrCreateInstance(v).show()}),B.on(window,_f,()=>{for(const v of oe.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(v).position!=="fixed"&&Qn.getOrCreateInstance(v).hide()}),Fe(Qn),A(Qn);const pl={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},bf=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ef=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Sf=(v,c)=>{const m=v.nodeName.toLowerCase();return c.includes(m)?!bf.has(m)||!!Ef.test(v.nodeValue):c.filter(E=>E instanceof RegExp).some(E=>E.test(m))},Tf={allowList:pl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Af={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},wf={entry:"(string|element|function|null)",selector:"(string|element)"};class Rf extends Le{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return Tf}static get DefaultType(){return Af}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[O,k]of Object.entries(this._config.content))this._setContent(c,k,O);const m=c.children[0],E=this._resolvePossibleFunction(this._config.extraClass);return E&&m.classList.add(...E.split(" ")),m}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[m,E]of Object.entries(c))super._typeCheckConfig({selector:m,entry:E},wf)}_setContent(c,m,E){const O=oe.findOne(E,c);O&&((m=this._resolvePossibleFunction(m))?l(m)?this._putElementInTemplate(u(m),O):this._config.html?O.innerHTML=this._maybeSanitize(m):O.textContent=m:O.remove())}_maybeSanitize(c){return this._config.sanitize?function(m,E,O){if(!m.length)return m;if(O&&typeof O=="function")return O(m);const k=new window.DOMParser().parseFromString(m,"text/html"),K=[].concat(...k.body.querySelectorAll("*"));for(const ie of K){const _e=ie.nodeName.toLowerCase();if(!Object.keys(E).includes(_e)){ie.remove();continue}const Ae=[].concat(...ie.attributes),Re=[].concat(E["*"]||[],E[_e]||[]);for(const be of Ae)Sf(be,Re)||ie.removeAttribute(be.nodeName)}return k.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return M(c,[void 0,this])}_putElementInTemplate(c,m){if(this._config.html)return m.innerHTML="",void m.append(c);m.textContent=c.textContent}}const Cf=new Set(["sanitize","allowList","sanitizeFn"]),Zo="fade",Or="show",Lf=".tooltip-inner",ml=".modal",gl="hide.bs.modal",rr="hover",Jo="focus",Qo="click",Pf={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},Df={allowList:pl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},If={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Oi extends Ee{constructor(c,m){if(Vc===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(c,m),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Df}static get DefaultType(){return If}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),B.off(this._element.closest(ml),gl,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=B.trigger(this._element,this.constructor.eventName("show")),m=(f(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!m)return;this._disposePopper();const E=this._getTipElement();this._element.setAttribute("aria-describedby",E.getAttribute("id"));const{container:O}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(O.append(E),B.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(E),E.classList.add(Or),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))B.on(k,"mouseover",_);this._queueCallback(()=>{B.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!B.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Or),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))B.off(c,"mouseover",_);this._activeTrigger[Qo]=!1,this._activeTrigger[Jo]=!1,this._activeTrigger[rr]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),B.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const m=this._getTemplateFactory(c).toHtml();if(!m)return null;m.classList.remove(Zo,Or),m.classList.add(`bs-${this.constructor.NAME}-auto`);const E=(O=>{do O+=Math.floor(1e6*Math.random());while(document.getElementById(O));return O})(this.constructor.NAME).toString();return m.setAttribute("id",E),this._isAnimated()&&m.classList.add(Zo),m}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new Rf({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Lf]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Zo)}_isShown(){return this.tip&&this.tip.classList.contains(Or)}_createPopper(c){const m=M(this._config.placement,[this,c,this._element]),E=Pf[m.toUpperCase()];return qo(this._element,c,this._getPopperConfig(E))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(m=>Number.parseInt(m,10)):typeof c=="function"?m=>c(m,this._element):c}_resolvePossibleFunction(c){return M(c,[this._element,this._element])}_getPopperConfig(c){const m={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:E=>{this._getTipElement().setAttribute("data-popper-placement",E.state.placement)}}]};return{...m,...M(this._config.popperConfig,[void 0,m])}}_setListeners(){const c=this._config.trigger.split(" ");for(const m of c)if(m==="click")B.on(this._element,this.constructor.eventName("click"),this._config.selector,E=>{const O=this._initializeOnDelegatedTarget(E);O._activeTrigger[Qo]=!(O._isShown()&&O._activeTrigger[Qo]),O.toggle()});else if(m!=="manual"){const E=m===rr?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),O=m===rr?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");B.on(this._element,E,this._config.selector,k=>{const K=this._initializeOnDelegatedTarget(k);K._activeTrigger[k.type==="focusin"?Jo:rr]=!0,K._enter()}),B.on(this._element,O,this._config.selector,k=>{const K=this._initializeOnDelegatedTarget(k);K._activeTrigger[k.type==="focusout"?Jo:rr]=K._element.contains(k.relatedTarget),K._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},B.on(this._element.closest(ml),gl,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,m){clearTimeout(this._timeout),this._timeout=setTimeout(c,m)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const m=ve.getDataAttributes(this._element);for(const E of Object.keys(m))Cf.has(E)&&delete m[E];return c={...m,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:u(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[m,E]of Object.entries(this._config))this.constructor.Default[m]!==E&&(c[m]=E);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const m=Oi.getOrCreateInstance(this,c);if(typeof c=="string"){if(m[c]===void 0)throw new TypeError(`No method named "${c}"`);m[c]()}})}}A(Oi);const Nf=".popover-header",Uf=".popover-body",Of={...Oi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ff={...Oi.DefaultType,content:"(null|string|element|function)"};class Fr extends Oi{static get Default(){return Of}static get DefaultType(){return Ff}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Nf]:this._getTitle(),[Uf]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const m=Fr.getOrCreateInstance(this,c);if(typeof c=="string"){if(m[c]===void 0)throw new TypeError(`No method named "${c}"`);m[c]()}})}}A(Fr);const ea=".bs.scrollspy",Bf=`activate${ea}`,_l=`click${ea}`,kf=`load${ea}.data-api`,fs="active",ta="[href]",vl=".nav-link",Hf=`${vl}, .nav-item > ${vl}, .list-group-item`,zf={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Gf={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class or extends Ee{constructor(c,m){super(c,m),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return zf}static get DefaultType(){return Gf}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=u(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(m=>Number.parseFloat(m))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(B.off(this._config.target,_l),B.on(this._config.target,_l,ta,c=>{const m=this._observableSections.get(c.target.hash);if(m){c.preventDefault();const E=this._rootElement||window,O=m.offsetTop-this._element.offsetTop;if(E.scrollTo)return void E.scrollTo({top:O,behavior:"smooth"});E.scrollTop=O}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(m=>this._observerCallback(m),c)}_observerCallback(c){const m=K=>this._targetLinks.get(`#${K.target.id}`),E=K=>{this._previousScrollData.visibleEntryTop=K.target.offsetTop,this._process(m(K))},O=(this._rootElement||document.documentElement).scrollTop,k=O>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=O;for(const K of c){if(!K.isIntersecting){this._activeTarget=null,this._clearActiveClass(m(K));continue}const ie=K.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&ie){if(E(K),!O)return}else k||ie||E(K)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=oe.find(ta,this._config.target);for(const m of c){if(!m.hash||d(m))continue;const E=oe.findOne(decodeURI(m.hash),this._element);h(E)&&(this._targetLinks.set(decodeURI(m.hash),m),this._observableSections.set(m.hash,E))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(fs),this._activateParents(c),B.trigger(this._element,Bf,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))oe.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(fs);else for(const m of oe.parents(c,".nav, .list-group"))for(const E of oe.prev(m,Hf))E.classList.add(fs)}_clearActiveClass(c){c.classList.remove(fs);const m=oe.find(`${ta}.${fs}`,c);for(const E of m)E.classList.remove(fs)}static jQueryInterface(c){return this.each(function(){const m=or.getOrCreateInstance(this,c);if(typeof c=="string"){if(m[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);m[c]()}})}}B.on(window,kf,()=>{for(const v of oe.find('[data-bs-spy="scroll"]'))or.getOrCreateInstance(v)}),A(or);const Fi=".bs.tab",Vf=`hide${Fi}`,Wf=`hidden${Fi}`,Xf=`show${Fi}`,jf=`shown${Fi}`,qf=`click${Fi}`,Yf=`keydown${Fi}`,Kf=`load${Fi}`,$f="ArrowLeft",xl="ArrowRight",Zf="ArrowUp",yl="ArrowDown",na="Home",Ml="End",Bi="active",bl="fade",ia="show",El=".dropdown-toggle",sa=`:not(${El})`,Sl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ra=`.nav-link${sa}, .list-group-item${sa}, [role="tab"]${sa}, ${Sl}`,Jf=`.${Bi}[data-bs-toggle="tab"], .${Bi}[data-bs-toggle="pill"], .${Bi}[data-bs-toggle="list"]`;class ki extends Ee{constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),B.on(this._element,Yf,m=>this._keydown(m)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const m=this._getActiveElem(),E=m?B.trigger(m,Vf,{relatedTarget:c}):null;B.trigger(c,Xf,{relatedTarget:m}).defaultPrevented||E&&E.defaultPrevented||(this._deactivate(m,c),this._activate(c,m))}_activate(c,m){c&&(c.classList.add(Bi),this._activate(oe.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),B.trigger(c,jf,{relatedTarget:m})):c.classList.add(ia)},c,c.classList.contains(bl)))}_deactivate(c,m){c&&(c.classList.remove(Bi),c.blur(),this._deactivate(oe.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),B.trigger(c,Wf,{relatedTarget:m})):c.classList.remove(ia)},c,c.classList.contains(bl)))}_keydown(c){if(![$f,xl,Zf,yl,na,Ml].includes(c.key))return;c.stopPropagation(),c.preventDefault();const m=this._getChildren().filter(O=>!d(O));let E;if([na,Ml].includes(c.key))E=m[c.key===na?0:m.length-1];else{const O=[xl,yl].includes(c.key);E=N(m,c.target,O,!0)}E&&(E.focus({preventScroll:!0}),ki.getOrCreateInstance(E).show())}_getChildren(){return oe.find(ra,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,m){this._setAttributeIfNotExists(c,"role","tablist");for(const E of m)this._setInitialAttributesOnChild(E)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const m=this._elemIsActive(c),E=this._getOuterElement(c);c.setAttribute("aria-selected",m),E!==c&&this._setAttributeIfNotExists(E,"role","presentation"),m||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const m=oe.getElementFromSelector(c);m&&(this._setAttributeIfNotExists(m,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(m,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,m){const E=this._getOuterElement(c);if(!E.classList.contains("dropdown"))return;const O=(k,K)=>{const ie=oe.findOne(k,E);ie&&ie.classList.toggle(K,m)};O(El,Bi),O(".dropdown-menu",ia),E.setAttribute("aria-expanded",m)}_setAttributeIfNotExists(c,m,E){c.hasAttribute(m)||c.setAttribute(m,E)}_elemIsActive(c){return c.classList.contains(Bi)}_getInnerElement(c){return c.matches(ra)?c:oe.findOne(ra,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const m=ki.getOrCreateInstance(this);if(typeof c=="string"){if(m[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);m[c]()}})}}B.on(document,qf,Sl,function(v){["A","AREA"].includes(this.tagName)&&v.preventDefault(),d(this)||ki.getOrCreateInstance(this).show()}),B.on(window,Kf,()=>{for(const v of oe.find(Jf))ki.getOrCreateInstance(v)}),A(ki);const pi=".bs.toast",Qf=`mouseover${pi}`,ep=`mouseout${pi}`,tp=`focusin${pi}`,np=`focusout${pi}`,ip=`hide${pi}`,sp=`hidden${pi}`,rp=`show${pi}`,op=`shown${pi}`,Tl="hide",Br="show",kr="showing",ap={animation:"boolean",autohide:"boolean",delay:"number"},cp={animation:!0,autohide:!0,delay:5e3};class ar extends Ee{constructor(c,m){super(c,m),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return cp}static get DefaultType(){return ap}static get NAME(){return"toast"}show(){B.trigger(this._element,rp).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Tl),x(this._element),this._element.classList.add(Br,kr),this._queueCallback(()=>{this._element.classList.remove(kr),B.trigger(this._element,op),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(B.trigger(this._element,ip).defaultPrevented||(this._element.classList.add(kr),this._queueCallback(()=>{this._element.classList.add(Tl),this._element.classList.remove(kr,Br),B.trigger(this._element,sp)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Br),super.dispose()}isShown(){return this._element.classList.contains(Br)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,m){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=m;break;case"focusin":case"focusout":this._hasKeyboardInteraction=m}if(m)return void this._clearTimeout();const E=c.relatedTarget;this._element===E||this._element.contains(E)||this._maybeScheduleHide()}_setListeners(){B.on(this._element,Qf,c=>this._onInteraction(c,!0)),B.on(this._element,ep,c=>this._onInteraction(c,!1)),B.on(this._element,tp,c=>this._onInteraction(c,!0)),B.on(this._element,np,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const m=ar.getOrCreateInstance(this,c);if(typeof c=="string"){if(m[c]===void 0)throw new TypeError(`No method named "${c}"`);m[c](this)}})}}return Fe(ar),A(ar),{Alert:De,Button:we,Carousel:at,Collapse:H,Dropdown:Ln,Modal:Ui,Offcanvas:Qn,Popover:Fr,ScrollSpy:or,Tab:ki,Toast:ar,Tooltip:Oi}})})(vp);class xp{constructor(e){this.parent=e}getDishesHTML(e){return`
      <div class="card bg-transparent" style="width: 300px;">
        <img class="card-img-top" src="${e.src}" alt="картинка" onerror="this.onerror=null;this.src='/img/default-dish.svg';">
        <div class="card-body" style="border: 1px solid #fffefe">
          <h5 class="card-title" style="color: rgb(255, 255, 255);">${e.title}</h5>
          <p class="card-text" style="color: rgb(255, 255, 255);">${e.cardText}</p>
          <div class="dishes-card-actions">
            <button class="btn btn-outline-light me-2" id="dishes-click-card-${e.id}" data-id="${e.id}">Подробнее</button>
          </div>
        </div>
      </div>
    `}renderDishes(e,t){this.parent.insertAdjacentHTML("beforeend",this.getDishesHTML(e));const n=document.getElementById(`dishes-click-card-${e.id}`);n&&n.addEventListener("click",t)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="160",ms={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yp=0,Bl=1,Mp=2,Uh=1,bp=2,oi=3,li=0,fn=1,Vn=2,wi=0,Bs=1,kl=2,Hl=3,zl=4,Ep=5,qi=100,Sp=101,Tp=102,Gl=103,Vl=104,Ap=200,wp=201,Rp=202,Cp=203,qa=204,Ya=205,Lp=206,Pp=207,Dp=208,Ip=209,Np=210,Up=211,Op=212,Fp=213,Bp=214,kp=0,Hp=1,zp=2,Mo=3,Gp=4,Vp=5,Wp=6,Xp=7,Oh=0,jp=1,qp=2,Ri=0,Yp=1,Kp=2,$p=3,Zp=4,Jp=5,Qp=6,Wl="attached",em="detached",Fh=300,zs=301,Gs=302,Ka=303,$a=304,Ro=306,Vs=1e3,Tn=1001,bo=1002,Yt=1003,Za=1004,xo=1005,dn=1006,Bh=1007,Qi=1008,Ci=1009,tm=1010,nm=1011,lc=1012,kh=1013,Si=1014,ai=1015,yr=1016,Hh=1017,zh=1018,$i=1020,im=1021,An=1023,sm=1024,rm=1025,Zi=1026,Ws=1027,om=1028,Gh=1029,am=1030,Vh=1031,Wh=1033,la=33776,ua=33777,ha=33778,da=33779,Xl=35840,jl=35841,ql=35842,Yl=35843,Xh=36196,Kl=37492,$l=37496,Zl=37808,Jl=37809,Ql=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,ou=37817,au=37818,cu=37819,lu=37820,uu=37821,fa=36492,hu=36494,du=36495,cm=36283,fu=36284,pu=36285,mu=36286,Mr=2300,Xs=2301,pa=2302,gu=2400,_u=2401,vu=2402,lm=2500,um=0,jh=1,Ja=2,qh=3e3,Ji=3001,hm=3200,dm=3201,Yh=0,fm=1,wn="",kt="srgb",Kt="srgb-linear",uc="display-p3",Co="display-p3-linear",Eo="linear",It="srgb",So="rec709",To="p3",_s=7680,xu=519,pm=512,mm=513,gm=514,Kh=515,_m=516,vm=517,xm=518,ym=519,Qa=35044,yu="300 es",ec=1035,ci=2e3,Ao=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mu=1234567;const gr=Math.PI/180,js=180/Math.PI;function On(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function hc(s,e){return(s%e+e)%e}function Mm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function bm(s,e,t){return s!==e?(t-s)/(e-s):0}function _r(s,e,t){return(1-t)*s+t*e}function Em(s,e,t,n){return _r(s,e,1-Math.exp(-t*n))}function Sm(s,e=1){return e-Math.abs(hc(s,e*2)-e)}function Tm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Am(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function wm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rm(s,e){return s+Math.random()*(e-s)}function Cm(s){return s*(.5-Math.random())}function Lm(s){s!==void 0&&(Mu=s);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pm(s){return s*gr}function Dm(s){return s*js}function tc(s){return(s&s-1)===0&&s!==0}function Im(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),_=r((n-e)/2),x=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*u);break;case"YZY":s.set(l*f,a*h,l*d,a*u);break;case"ZXZ":s.set(l*d,l*f,a*h,a*u);break;case"XZX":s.set(a*h,l*x,l*_,a*u);break;case"YXY":s.set(l*_,a*h,l*x,a*u);break;case"ZYZ":s.set(l*x,l*_,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $h={DEG2RAD:gr,RAD2DEG:js,generateUUID:On,clamp:$t,euclideanModulo:hc,mapLinear:Mm,inverseLerp:bm,lerp:_r,damp:Em,pingpong:Sm,smoothstep:Tm,smootherstep:Am,randInt:wm,randFloat:Rm,randFloatSpread:Cm,seededRandom:Lm,degToRad:Pm,radToDeg:Dm,isPowerOfTwo:tc,ceilPowerOfTwo:Im,floorPowerOfTwo:wo,setQuaternionFromProperEuler:Nm,normalize:Tt,denormalize:Wn};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,i,r,o,a,l,u){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u)}set(e,t,n,i,r,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],_=n[5],x=n[8],y=i[0],g=i[3],p=i[6],A=i[1],M=i[4],w=i[7],N=i[2],D=i[5],L=i[8];return r[0]=o*y+a*A+l*N,r[3]=o*g+a*M+l*D,r[6]=o*p+a*w+l*L,r[1]=u*y+h*A+d*N,r[4]=u*g+h*M+d*D,r[7]=u*p+h*w+d*L,r[2]=f*y+_*A+x*N,r[5]=f*g+_*M+x*D,r[8]=f*p+_*w+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*l+i*r*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*l-h*r,_=u*r-o*l,x=t*d+n*f+i*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(i*u-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=f*y,e[4]=(h*t-i*l)*y,e[5]=(i*r-a*t)*y,e[6]=_*y,e[7]=(n*l-u*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new dt;function Zh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Um(){const s=br("canvas");return s.style.display="block",s}const bu={};function vr(s){s in bu||(bu[s]=!0,console.warn(s))}const Eu=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Su=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[Kt]:{transfer:Eo,primaries:So,toReference:s=>s,fromReference:s=>s},[kt]:{transfer:It,primaries:So,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Co]:{transfer:Eo,primaries:To,toReference:s=>s.applyMatrix3(Su),fromReference:s=>s.applyMatrix3(Eu)},[uc]:{transfer:It,primaries:To,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Su),fromReference:s=>s.applyMatrix3(Eu).convertLinearToSRGB()}},Om=new Set([Kt,Co]),vt={enabled:!0,_workingColorSpace:Kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Om.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Vr[e].toReference,i=Vr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Vr[s].primaries},getTransfer:function(s){return s===wn?Eo:Vr[s].transfer}};function ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class Jh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=br("canvas")),vs.width=e.width,vs.height=e.height;const n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ks(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ks(t[n]/255)*255):t[n]=ks(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fm=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=On(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_a(i[o].image)):r.push(_a(i[o]))}else r=_a(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bm=0;class Jt extends is{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Tn,i=Tn,r=dn,o=Qi,a=An,l=Ci,u=Jt.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=On(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ji?kt:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Ji:qh}set encoding(e){vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ji?kt:wn}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Fh;Jt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],_=l[5],x=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(x+g)<.1&&Math.abs(u+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,w=(_+1)/2,N=(p+1)/2,D=(h+f)/4,L=(d+y)/4,q=(x+g)/4;return M>w&&M>N?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=D/n,r=L/n):w>N?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=D/i,r=q/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=L/r,i=q/r),this.set(n,i,r,t),this}let A=Math.sqrt((g-x)*(g-x)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(g-x)/A,this.y=(d-y)/A,this.z=(f-h)/A,this.w=Math.acos((u+_+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class km extends is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ji?kt:wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends km{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ed extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hm extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],u=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],_=r[o+1],x=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=_,e[t+2]=x,e[t+3]=y;return}if(d!==y||l!==f||u!==_||h!==x){let g=1-a;const p=l*f+u*_+h*x+d*y,A=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const N=Math.sqrt(M),D=Math.atan2(N,p*A);g=Math.sin(g*D)/N,a=Math.sin(a*D)/N}const w=a*A;if(l=l*g+f*w,u=u*g+_*w,h=h*g+x*w,d=d*g+y*w,g===1-a){const N=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=N,u*=N,h*=N,d*=N}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o],f=r[o+1],_=r[o+2],x=r[o+3];return e[t]=a*x+h*d+l*_-u*f,e[t+1]=l*x+h*f+u*d-a*_,e[t+2]=u*x+h*_+a*f-l*d,e[t+3]=h*x-a*d-l*f-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),_=l(i/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*d+u*_*x,this._y=u*_*d-f*h*x,this._z=u*h*x+f*_*d,this._w=u*h*d-f*_*x;break;case"YXZ":this._x=f*h*d+u*_*x,this._y=u*_*d-f*h*x,this._z=u*h*x-f*_*d,this._w=u*h*d+f*_*x;break;case"ZXY":this._x=f*h*d-u*_*x,this._y=u*_*d+f*h*x,this._z=u*h*x+f*_*d,this._w=u*h*d-f*_*x;break;case"ZYX":this._x=f*h*d-u*_*x,this._y=u*_*d+f*h*x,this._z=u*h*x-f*_*d,this._w=u*h*d+f*_*x;break;case"YZX":this._x=f*h*d+u*_*x,this._y=u*_*d+f*h*x,this._z=u*h*x-f*_*d,this._w=u*h*d-f*_*x;break;case"XZY":this._x=f*h*d-u*_*x,this._y=u*_*d-f*h*x,this._z=u*h*x+f*_*d,this._w=u*h*d+f*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(r-u)*_,this._z=(o-i)*_}else if(n>a&&n>d){const _=2*Math.sqrt(1+n-a-d);this._w=(h-l)/_,this._x=.25*_,this._y=(i+o)/_,this._z=(r+u)/_}else if(a>d){const _=2*Math.sqrt(1+a-n-d);this._w=(r-u)/_,this._x=(i+o)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+d-n-a);this._w=(o-i)/_,this._x=(r+u)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*l,this._y=i*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-i*a,this._w=o*h-n*a-i*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*i+t*this._y,this._z=_*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*u+o*d-a*h,this.y=n+l*h+a*u-r*d,this.z=i+l*d+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new U,Tu=new jn;class qn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Xr.subVectors(this.max,cr),xs.subVectors(e.a,cr),ys.subVectors(e.b,cr),Ms.subVectors(e.c,cr),gi.subVectors(ys,xs),_i.subVectors(Ms,ys),zi.subVectors(xs,Ms);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-zi.z,zi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,zi.z,0,-zi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-zi.y,zi.x,0];return!xa(t,xs,ys,Ms,Xr)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,xs,ys,Ms,Xr))?!1:(jr.crossVectors(gi,_i),t=[jr.x,jr.y,jr.z],xa(t,xs,ys,Ms,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new U,new U,new U,new U,new U,new U,new U,new U],Dn=new U,Wr=new qn,xs=new U,ys=new U,Ms=new U,gi=new U,_i=new U,zi=new U,cr=new U,Xr=new U,jr=new U,Gi=new U;function xa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gi.fromArray(s,r);const a=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=e.dot(Gi),u=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const zm=new qn,lr=new U,ya=new U;class Yn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(ya)),this.expandByPoint(lr.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new U,Ma=new U,qr=new U,vi=new U,ba=new U,Yr=new U,Ea=new U;class Sr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ma.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=vi.dot(this.direction),l=-vi.dot(qr),u=vi.lengthSq(),h=Math.abs(1-o*o);let d,f,_,x;if(h>0)if(d=o*l-a,f=o*a-l,x=r*h,d>=0)if(f>=-x)if(f<=x){const y=1/h;d*=y,f*=y,_=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),_=f*(f+2*l)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ma).addScaledVector(qr,f),_}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,r){ba.subVectors(t,e),Yr.subVectors(n,e),Ea.crossVectors(ba,Yr);let o=this.direction.dot(Ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(Yr.crossVectors(vi,Yr));if(l<0)return null;const u=a*this.direction.dot(ba.cross(vi));if(u<0||l+u>o)return null;const h=-a*vi.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,i,r,o,a,l,u,h,d,f,_,x,y,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u,h,d,f,_,x,y,g)}set(e,t,n,i,r,o,a,l,u,h,d,f,_,x,y,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=h,p[10]=d,p[14]=f,p[3]=_,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,_=o*d,x=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=_+x*u,t[5]=f-y*u,t[9]=-a*l,t[2]=y-f*u,t[6]=x+_*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,_=l*d,x=u*h,y=u*d;t[0]=f+y*a,t[4]=x*a-_,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=_*a-x,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,_=l*d,x=u*h,y=u*d;t[0]=f-y*a,t[4]=-o*d,t[8]=x+_*a,t[1]=_+x*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,_=o*d,x=a*h,y=a*d;t[0]=l*h,t[4]=x*u-_,t[8]=f*u+y,t[1]=l*d,t[5]=y*u+f,t[9]=_*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,_=o*u,x=a*l,y=a*u;t[0]=l*h,t[4]=y-f*d,t[8]=x*d+_,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=_*d+x,t[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,_=o*u,x=a*l,y=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+y,t[5]=o*h,t[9]=_*d-x,t[2]=x*d-_,t[6]=a*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Vm)}lookAt(e,t,n){const i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),xi.crossVectors(n,gn),xi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),xi.crossVectors(n,gn)),xi.normalize(),Kr.crossVectors(gn,xi),i[0]=xi.x,i[4]=Kr.x,i[8]=gn.x,i[1]=xi.y,i[5]=Kr.y,i[9]=gn.y,i[2]=xi.z,i[6]=Kr.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],_=n[13],x=n[2],y=n[6],g=n[10],p=n[14],A=n[3],M=n[7],w=n[11],N=n[15],D=i[0],L=i[4],q=i[8],S=i[12],C=i[1],Y=i[5],J=i[9],le=i[13],F=i[2],j=i[6],$=i[10],ee=i[14],Q=i[3],te=i[7],ne=i[11],B=i[15];return r[0]=o*D+a*C+l*F+u*Q,r[4]=o*L+a*Y+l*j+u*te,r[8]=o*q+a*J+l*$+u*ne,r[12]=o*S+a*le+l*ee+u*B,r[1]=h*D+d*C+f*F+_*Q,r[5]=h*L+d*Y+f*j+_*te,r[9]=h*q+d*J+f*$+_*ne,r[13]=h*S+d*le+f*ee+_*B,r[2]=x*D+y*C+g*F+p*Q,r[6]=x*L+y*Y+g*j+p*te,r[10]=x*q+y*J+g*$+p*ne,r[14]=x*S+y*le+g*ee+p*B,r[3]=A*D+M*C+w*F+N*Q,r[7]=A*L+M*Y+w*j+N*te,r[11]=A*q+M*J+w*$+N*ne,r[15]=A*S+M*le+w*ee+N*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],_=e[14],x=e[3],y=e[7],g=e[11],p=e[15];return x*(+r*l*d-i*u*d-r*a*f+n*u*f+i*a*_-n*l*_)+y*(+t*l*_-t*u*f+r*o*f-i*o*_+i*u*h-r*l*h)+g*(+t*u*d-t*a*_-r*o*d+n*o*_+r*a*h-n*u*h)+p*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],_=e[11],x=e[12],y=e[13],g=e[14],p=e[15],A=d*g*u-y*f*u+y*l*_-a*g*_-d*l*p+a*f*p,M=x*f*u-h*g*u-x*l*_+o*g*_+h*l*p-o*f*p,w=h*y*u-x*d*u+x*a*_-o*y*_-h*a*p+o*d*p,N=x*d*l-h*y*l-x*a*f+o*y*f+h*a*g-o*d*g,D=t*A+n*M+i*w+r*N;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=A*L,e[1]=(y*f*r-d*g*r-y*i*_+n*g*_+d*i*p-n*f*p)*L,e[2]=(a*g*r-y*l*r+y*i*u-n*g*u-a*i*p+n*l*p)*L,e[3]=(d*l*r-a*f*r-d*i*u+n*f*u+a*i*_-n*l*_)*L,e[4]=M*L,e[5]=(h*g*r-x*f*r+x*i*_-t*g*_-h*i*p+t*f*p)*L,e[6]=(x*l*r-o*g*r-x*i*u+t*g*u+o*i*p-t*l*p)*L,e[7]=(o*f*r-h*l*r+h*i*u-t*f*u-o*i*_+t*l*_)*L,e[8]=w*L,e[9]=(x*d*r-h*y*r-x*n*_+t*y*_+h*n*p-t*d*p)*L,e[10]=(o*y*r-x*a*r+x*n*u-t*y*u-o*n*p+t*a*p)*L,e[11]=(h*a*r-o*d*r-h*n*u+t*d*u+o*n*_-t*a*_)*L,e[12]=N*L,e[13]=(h*y*i-x*d*i+x*n*f-t*y*f-h*n*g+t*d*g)*L,e[14]=(x*a*i-o*y*i-x*n*l+t*y*l+o*n*g-t*a*g)*L,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,h*a+n,h*l-i*o,0,u*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,d=a+a,f=r*u,_=r*h,x=r*d,y=o*h,g=o*d,p=a*d,A=l*u,M=l*h,w=l*d,N=n.x,D=n.y,L=n.z;return i[0]=(1-(y+p))*N,i[1]=(_+w)*N,i[2]=(x-M)*N,i[3]=0,i[4]=(_-w)*D,i[5]=(1-(f+p))*D,i[6]=(g+A)*D,i[7]=0,i[8]=(x+M)*L,i[9]=(g-A)*L,i[10]=(1-(f+y))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=bs.set(i[0],i[1],i[2]).length();const o=bs.set(i[4],i[5],i[6]).length(),a=bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],In.copy(this);const u=1/r,h=1/o,d=1/a;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ci){const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let _,x;if(a===ci)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ao)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ci){const l=this.elements,u=1/(t-e),h=1/(n-i),d=1/(o-r),f=(t+e)*u,_=(n+i)*h;let x,y;if(a===ci)x=(o+r)*d,y=-2*d;else if(a===Ao)x=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bs=new U,In=new ft,Gm=new U(0,0,0),Vm=new U(1,1,1),xi=new U,Kr=new U,gn=new U,Au=new ft,wu=new jn;class Lo{constructor(e=0,t=0,n=0,i=Lo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],u=i[5],h=i[9],d=i[2],f=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lo.DEFAULT_ORDER="XYZ";class td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wm=0;const Ru=new U,Es=new jn,ni=new ft,$r=new U,ur=new U,Xm=new U,jm=new jn,Cu=new U(1,0,0),Lu=new U(0,1,0),Pu=new U(0,0,1),qm={type:"added"},Ym={type:"removed"};class Ot extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new U,t=new Lo,n=new jn,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new dt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ur,$r,this.up):ni.lookAt($r,ur,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(ni),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ym)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),_=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ot.DEFAULT_UP=new U(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new U,ii=new U,Sa=new U,si=new U,Ss=new U,Ts=new U,Du=new U,Ta=new U,Aa=new U,wa=new U;let Zr=!1;class Un{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),ii.subVectors(n,t),Sa.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(ii),l=Nn.dot(Sa),u=ii.dot(ii),h=ii.dot(Sa),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,_=(u*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-_-x,x,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,t,n,i,r,o,a,l){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),ii.subVectors(e,t),Nn.cross(ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Nn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ss.subVectors(i,n),Ts.subVectors(r,n),Ta.subVectors(e,n);const l=Ss.dot(Ta),u=Ts.dot(Ta);if(l<=0&&u<=0)return t.copy(n);Aa.subVectors(e,i);const h=Ss.dot(Aa),d=Ts.dot(Aa);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ss,o);wa.subVectors(e,r);const _=Ss.dot(wa),x=Ts.dot(wa);if(x>=0&&_<=x)return t.copy(r);const y=_*u-l*x;if(y<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(n).addScaledVector(Ts,a);const g=h*x-_*d;if(g<=0&&d-h>=0&&_-x>=0)return Du.subVectors(r,i),a=(d-h)/(d-h+(_-x)),t.copy(i).addScaledVector(Du,a);const p=1/(g+y+f);return o=y*p,a=f*p,t.copy(n).addScaledVector(Ss,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=hc(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return vt.toWorkingColorSpace(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return vt.fromWorkingColorSpace(tn.copy(this),e),Math.round($t(tn.r*255,0,255))*65536+Math.round($t(tn.g*255,0,255))*256+Math.round($t(tn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=kt){vt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Jr);const n=_r(yi.h,Jr.h,t),i=_r(yi.s,Jr.s,t),r=_r(yi.l,Jr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new tt;tt.NAMES=nd;let Km=0;class Xn extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Bs,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ki extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new U,Qr=new Xe;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}}class id extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sd extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $m=0;const En=new ft,Ca=new Ot,As=new U,_n=new qn,hr=new qn,qt=new U;class Rn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?sd:id)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(_n.min,hr.min),_n.expandByPoint(qt),qt.addVectors(_n.max,hr.max),_n.expandByPoint(qt)):(_n.expandByPoint(hr.min),_n.expandByPoint(hr.max))}_n.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)qt.fromBufferAttribute(a,u),l&&(As.fromBufferAttribute(e,u),qt.add(As)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let C=0;C<a;C++)u[C]=new U,h[C]=new U;const d=new U,f=new U,_=new U,x=new Xe,y=new Xe,g=new Xe,p=new U,A=new U;function M(C,Y,J){d.fromArray(i,C*3),f.fromArray(i,Y*3),_.fromArray(i,J*3),x.fromArray(o,C*2),y.fromArray(o,Y*2),g.fromArray(o,J*2),f.sub(d),_.sub(d),y.sub(x),g.sub(x);const le=1/(y.x*g.y-g.x*y.y);isFinite(le)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(_,-y.y).multiplyScalar(le),A.copy(_).multiplyScalar(y.x).addScaledVector(f,-g.x).multiplyScalar(le),u[C].add(p),u[Y].add(p),u[J].add(p),h[C].add(A),h[Y].add(A),h[J].add(A))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let C=0,Y=w.length;C<Y;++C){const J=w[C],le=J.start,F=J.count;for(let j=le,$=le+F;j<$;j+=3)M(n[j+0],n[j+1],n[j+2])}const N=new U,D=new U,L=new U,q=new U;function S(C){L.fromArray(r,C*3),q.copy(L);const Y=u[C];N.copy(Y),N.sub(L.multiplyScalar(L.dot(Y))).normalize(),D.crossVectors(q,Y);const le=D.dot(h[C])<0?-1:1;l[C*4]=N.x,l[C*4+1]=N.y,l[C*4+2]=N.z,l[C*4+3]=le}for(let C=0,Y=w.length;C<Y;++C){const J=w[C],le=J.start,F=J.count;for(let j=le,$=le+F;j<$;j+=3)S(n[j+0]),S(n[j+1]),S(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const i=new U,r=new U,o=new U,a=new U,l=new U,u=new U,h=new U,d=new U;if(e)for(let f=0,_=e.count;f<_;f+=3){const x=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),a.add(h),l.add(h),u.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,_=t.count;f<_;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let _=0,x=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?_=l[y]*a.data.stride+a.offset:_=l[y]*h;for(let p=0;p<h;p++)f[x++]=u[_++]}return new cn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],_=e(f,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const _=u[d];h.push(_.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,_=d.length;f<_;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iu=new ft,Vi=new Sr,eo=new Yn,Nu=new U,ws=new U,Rs=new U,Cs=new U,La=new U,to=new U,no=new Xe,io=new Xe,so=new Xe,Uu=new U,Ou=new U,Fu=new U,ro=new U,oo=new U;class Zt extends Ot{constructor(e=new Rn,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],d=r[l];h!==0&&(La.fromBufferAttribute(d,e),o?to.addScaledVector(La,h):to.addScaledVector(La.sub(t),h))}t.add(to)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(eo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(eo,Nu)===null||Vi.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Iu.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const g=f[x],p=o[g.materialIndex],A=Math.max(g.start,_.start),M=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let w=A,N=M;w<N;w+=3){const D=a.getX(w),L=a.getX(w+1),q=a.getX(w+2);i=ao(this,p,e,n,u,h,d,D,L,q),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const x=Math.max(0,_.start),y=Math.min(a.count,_.start+_.count);for(let g=x,p=y;g<p;g+=3){const A=a.getX(g),M=a.getX(g+1),w=a.getX(g+2);i=ao(this,o,e,n,u,h,d,A,M,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const g=f[x],p=o[g.materialIndex],A=Math.max(g.start,_.start),M=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let w=A,N=M;w<N;w+=3){const D=w,L=w+1,q=w+2;i=ao(this,p,e,n,u,h,d,D,L,q),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const x=Math.max(0,_.start),y=Math.min(l.count,_.start+_.count);for(let g=x,p=y;g<p;g+=3){const A=g,M=g+1,w=g+2;i=ao(this,o,e,n,u,h,d,A,M,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Zm(s,e,t,n,i,r,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===li,a),l===null)return null;oo.copy(a),oo.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(oo);return u<t.near||u>t.far?null:{distance:u,point:oo.clone(),object:s}}function ao(s,e,t,n,i,r,o,a,l,u){s.getVertexPosition(a,ws),s.getVertexPosition(l,Rs),s.getVertexPosition(u,Cs);const h=Zm(s,e,t,n,ws,Rs,Cs,ro);if(h){i&&(no.fromBufferAttribute(i,a),io.fromBufferAttribute(i,l),so.fromBufferAttribute(i,u),h.uv=Un.getInterpolation(ro,ws,Rs,Cs,no,io,so,new Xe)),r&&(no.fromBufferAttribute(r,a),io.fromBufferAttribute(r,l),so.fromBufferAttribute(r,u),h.uv1=Un.getInterpolation(ro,ws,Rs,Cs,no,io,so,new Xe),h.uv2=h.uv1),o&&(Uu.fromBufferAttribute(o,a),Ou.fromBufferAttribute(o,l),Fu.fromBufferAttribute(o,u),h.normal=Un.getInterpolation(ro,ws,Rs,Cs,Uu,Ou,Fu,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new U,materialIndex:0};Un.getNormal(ws,Rs,Cs,d.normal),h.face=d}return h}class Li extends Rn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,_=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ln(u,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(d,2));function x(y,g,p,A,M,w,N,D,L,q,S){const C=w/L,Y=N/q,J=w/2,le=N/2,F=D/2,j=L+1,$=q+1;let ee=0,Q=0;const te=new U;for(let ne=0;ne<$;ne++){const B=ne*Y-le;for(let pe=0;pe<j;pe++){const Z=pe*C-J;te[y]=Z*A,te[g]=B*M,te[p]=F,u.push(te.x,te.y,te.z),te[y]=0,te[g]=0,te[p]=D>0?1:-1,h.push(te.x,te.y,te.z),d.push(pe/L),d.push(1-ne/q),ee+=1}}for(let ne=0;ne<q;ne++)for(let B=0;B<L;B++){const pe=f+B+j*ne,Z=f+B+j*(ne+1),re=f+(B+1)+j*(ne+1),ve=f+(B+1)+j*ne;l.push(pe,Z,ve),l.push(Z,re,ve),Q+=6}a.addGroup(_,Q,S),_+=Q,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function on(s){const e={};for(let t=0;t<s.length;t++){const n=qs(s[t]);for(const i in n)e[i]=n[i]}return e}function Jm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rd(s){return s.getRenderTarget()===null?s.outputColorSpace:vt.workingColorSpace}const Qm={clone:qs,merge:on};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Ps=1;class ng extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(Ls,Ps,e,t);i.layers=this.layers,this.add(i);const r=new an(Ls,Ps,e,t);r.layers=this.layers,this.add(r);const o=new an(Ls,Ps,e,t);o.layers=this.layers,this.add(o);const a=new an(Ls,Ps,e,t);a.layers=this.layers,this.add(a);const l=new an(Ls,Ps,e,t);l.layers=this.layers,this.add(l);const u=new an(Ls,Ps,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,_),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ad extends Jt{constructor(e,t,n,i,r,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,i,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ig extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ji?kt:wn),this.texture=new ad(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Li(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:wi});r.uniforms.tEquirect.value=t;const o=new Zt(i,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=dn),new ng(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Pa=new U,sg=new U,rg=new dt;class bi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pa.subVectors(n,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rg.getNormalMatrix(e),i=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Yn,co=new U;class dc{constructor(e=new bi,t=new bi,n=new bi,i=new bi,r=new bi,o=new bi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],u=i[4],h=i[5],d=i[6],f=i[7],_=i[8],x=i[9],y=i[10],g=i[11],p=i[12],A=i[13],M=i[14],w=i[15];if(n[0].setComponents(l-r,f-u,g-_,w-p).normalize(),n[1].setComponents(l+r,f+u,g+_,w+p).normalize(),n[2].setComponents(l+o,f+h,g+x,w+A).normalize(),n[3].setComponents(l-o,f-h,g-x,w-A).normalize(),n[4].setComponents(l-a,f-d,g-y,w-M).normalize(),t===ci)n[5].setComponents(l+a,f+d,g+y,w+M).normalize();else if(t===Ao)n[5].setComponents(a,d,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(co.x=i.normal.x>0?e.max.x:e.min.x,co.y=i.normal.y>0?e.max.y:e.min.y,co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function og(s,e){const t=e.isWebGL2,n=new WeakMap;function i(u,h){const d=u.array,f=u.usage,_=d.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,d,f),u.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:_}}function r(u,h,d){const f=h.array,_=h._updateRange,x=h.updateRanges;if(s.bindBuffer(d,u),_.count===-1&&x.length===0&&s.bufferSubData(d,0,f),x.length!==0){for(let y=0,g=x.length;y<g;y++){const p=x[y];t?s.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}_.count!==-1&&(t?s.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):s.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(s.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);if(d===void 0)n.set(u,i(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,u,h),d.version=u.version}}return{get:o,remove:a,update:l}}class fc extends Rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,h=l+1,d=e/a,f=t/l,_=[],x=[],y=[],g=[];for(let p=0;p<h;p++){const A=p*f-o;for(let M=0;M<u;M++){const w=M*d-r;x.push(w,-A,0),y.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const M=A+u*p,w=A+u*(p+1),N=A+1+u*(p+1),D=A+1+u*p;_.push(M,w,D),_.push(w,N,D)}this.setIndex(_),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(y,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,__=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,b_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:ag,alphahash_pars_fragment:cg,alphamap_fragment:lg,alphamap_pars_fragment:ug,alphatest_fragment:hg,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:_g,beginnormal_vertex:vg,bsdfs:xg,iridescence_fragment:yg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:Tg,color_fragment:Ag,color_pars_fragment:wg,color_pars_vertex:Rg,color_vertex:Cg,common:Lg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Ng,emissivemap_fragment:Ug,emissivemap_pars_fragment:Og,colorspace_fragment:Fg,colorspace_pars_fragment:Bg,envmap_fragment:kg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:zg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:e_,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:jg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_fragment:Kg,lightmap_pars_fragment:$g,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:s_,lights_physical_fragment:r_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:c_,lights_fragment_end:l_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:f_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:v_,metalnessmap_pars_fragment:x_,morphcolor_vertex:y_,morphnormal_vertex:M_,morphtarget_pars_vertex:b_,morphtarget_vertex:E_,normal_fragment_begin:S_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:w_,normal_vertex:R_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:I_,opaque_fragment:N_,packing:U_,premultiplied_alpha_fragment:O_,project_vertex:F_,dithering_fragment:B_,dithering_pars_fragment:k_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:j_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:K_,specularmap_fragment:$_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:Q_,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:cv,backgroundCube_frag:lv,cube_vert:uv,cube_frag:hv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:yv,meshbasic_frag:Mv,meshlambert_vert:bv,meshlambert_frag:Ev,meshmatcap_vert:Sv,meshmatcap_frag:Tv,meshnormal_vert:Av,meshnormal_frag:wv,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Lv,meshphysical_frag:Pv,meshtoon_vert:Dv,meshtoon_frag:Iv,points_vert:Nv,points_frag:Uv,shadow_vert:Ov,shadow_frag:Fv,sprite_vert:Bv,sprite_frag:kv},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Gn={basic:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:on([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:on([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:on([ye.points,ye.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:on([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:on([ye.common,ye.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:on([ye.sprite,ye.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:on([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:on([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Gn.physical={uniforms:on([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const lo={r:0,b:0,g:0};function Hv(s,e,t,n,i,r,o){const a=new tt(0);let l=r===!0?0:1,u,h,d=null,f=0,_=null;function x(g,p){let A=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?t:e).get(M)),M===null?y(a,l):M&&M.isColor&&(y(M,1),A=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ro)?(h===void 0&&(h=new Zt(new Li(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:qs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=vt.getTransfer(M.colorSpace)!==It,(d!==M||f!==M.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,_=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Zt(new fc(2,2),new ts({name:"BackgroundMaterial",uniforms:qs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=vt.getTransfer(M.colorSpace)!==It,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||_!==s.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,_=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,p){g.getRGB(lo,rd(s)),n.buffers.color.setClear(lo.r,lo.g,lo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:x}}function zv(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null);let u=l,h=!1;function d(F,j,$,ee,Q){let te=!1;if(o){const ne=y(ee,$,j);u!==ne&&(u=ne,_(u.object)),te=p(F,ee,$,Q),te&&A(F,ee,$,Q)}else{const ne=j.wireframe===!0;(u.geometry!==ee.id||u.program!==$.id||u.wireframe!==ne)&&(u.geometry=ee.id,u.program=$.id,u.wireframe=ne,te=!0)}Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(te||h)&&(h=!1,q(F,j,$,ee),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function _(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function y(F,j,$){const ee=$.wireframe===!0;let Q=a[F.id];Q===void 0&&(Q={},a[F.id]=Q);let te=Q[j.id];te===void 0&&(te={},Q[j.id]=te);let ne=te[ee];return ne===void 0&&(ne=g(f()),te[ee]=ne),ne}function g(F){const j=[],$=[],ee=[];for(let Q=0;Q<i;Q++)j[Q]=0,$[Q]=0,ee[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:$,attributeDivisors:ee,object:F,attributes:{},index:null}}function p(F,j,$,ee){const Q=u.attributes,te=j.attributes;let ne=0;const B=$.getAttributes();for(const pe in B)if(B[pe].location>=0){const re=Q[pe];let ve=te[pe];if(ve===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(ve=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(ve=F.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;ne++}return u.attributesNum!==ne||u.index!==ee}function A(F,j,$,ee){const Q={},te=j.attributes;let ne=0;const B=$.getAttributes();for(const pe in B)if(B[pe].location>=0){let re=te[pe];re===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));const ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),Q[pe]=ve,ne++}u.attributes=Q,u.attributesNum=ne,u.index=ee}function M(){const F=u.newAttributes;for(let j=0,$=F.length;j<$;j++)F[j]=0}function w(F){N(F,0)}function N(F,j){const $=u.newAttributes,ee=u.enabledAttributes,Q=u.attributeDivisors;$[F]=1,ee[F]===0&&(s.enableVertexAttribArray(F),ee[F]=1),Q[F]!==j&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,j),Q[F]=j)}function D(){const F=u.newAttributes,j=u.enabledAttributes;for(let $=0,ee=j.length;$<ee;$++)j[$]!==F[$]&&(s.disableVertexAttribArray($),j[$]=0)}function L(F,j,$,ee,Q,te,ne){ne===!0?s.vertexAttribIPointer(F,j,$,Q,te):s.vertexAttribPointer(F,j,$,ee,Q,te)}function q(F,j,$,ee){if(n.isWebGL2===!1&&(F.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Q=ee.attributes,te=$.getAttributes(),ne=j.defaultAttributeValues;for(const B in te){const pe=te[B];if(pe.location>=0){let Z=Q[B];if(Z===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){const re=Z.normalized,ve=Z.itemSize,Le=t.get(Z);if(Le===void 0)continue;const Ee=Le.buffer,We=Le.type,oe=Le.bytesPerElement,Fe=n.isWebGL2===!0&&(We===s.INT||We===s.UNSIGNED_INT||Z.gpuType===kh);if(Z.isInterleavedBufferAttribute){const ot=Z.data,X=ot.stride,Gt=Z.offset;if(ot.isInstancedInterleavedBuffer){for(let De=0;De<pe.locationSize;De++)N(pe.location+De,ot.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let De=0;De<pe.locationSize;De++)w(pe.location+De);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let De=0;De<pe.locationSize;De++)L(pe.location+De,ve/pe.locationSize,We,re,X*oe,(Gt+ve/pe.locationSize*De)*oe,Fe)}else{if(Z.isInstancedBufferAttribute){for(let ot=0;ot<pe.locationSize;ot++)N(pe.location+ot,Z.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<pe.locationSize;ot++)w(pe.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ot=0;ot<pe.locationSize;ot++)L(pe.location+ot,ve/pe.locationSize,We,re,ve*oe,ve/pe.locationSize*ot*oe,Fe)}}else if(ne!==void 0){const re=ne[B];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(pe.location,re);break;case 3:s.vertexAttrib3fv(pe.location,re);break;case 4:s.vertexAttrib4fv(pe.location,re);break;default:s.vertexAttrib1fv(pe.location,re)}}}}D()}function S(){J();for(const F in a){const j=a[F];for(const $ in j){const ee=j[$];for(const Q in ee)x(ee[Q].object),delete ee[Q];delete j[$]}delete a[F]}}function C(F){if(a[F.id]===void 0)return;const j=a[F.id];for(const $ in j){const ee=j[$];for(const Q in ee)x(ee[Q].object),delete ee[Q];delete j[$]}delete a[F.id]}function Y(F){for(const j in a){const $=a[j];if($[F.id]===void 0)continue;const ee=$[F.id];for(const Q in ee)x(ee[Q].object),delete ee[Q];delete $[F.id]}}function J(){le(),h=!0,u!==l&&(u=l,_(u.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:le,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:Y,initAttributes:M,enableAttribute:w,disableUnusedAttributes:D}}function Gv(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let _,x;if(i)_=s,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](r,h,d,f),t.update(d,r,f)}function u(h,d,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<f;x++)this.render(h[x],d[x]);else{_.multiDrawArraysWEBGL(r,h,0,d,0,f);let x=0;for(let y=0;y<f;y++)x+=d[y];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function Vv(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,w=o||e.has("OES_texture_float"),N=M&&w,D=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:N,maxSamples:D}}function Wv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new bi,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||n!==0||i;return i=f,n=d.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,_){const x=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||x===null||x.length===0||r&&!g)r?h(null):u();else{const A=r?0:n,M=A*4;let w=p.clippingState||null;l.value=w,w=h(x,f,M,_);for(let N=0;N!==M;++N)w[N]=t[N];p.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,_,x){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const p=_+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,w=_;M!==y;++M,w+=4)o.copy(d[M]).applyMatrix4(A,a),o.normal.toArray(g,w),g[w+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Xv(s){let e=new WeakMap;function t(o,a){return a===Ka?o.mapping=zs:a===$a&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ka||a===$a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ig(l.height/2);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class pc extends od{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Os=4,Bu=[.125,.215,.35,.446,.526,.582],Yi=20,Da=new pc,ku=new tt;let Ia=null,Na=0,Ua=0;const ji=(1+Math.sqrt(5))/2,Ds=1/ji,Hu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ji,Ds),new U(0,ji,-Ds),new U(Ds,0,ji),new U(-Ds,0,ji),new U(ji,Ds,0),new U(-ji,Ds,0)];class zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Na,Ua),e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:yr,format:An,colorSpace:Kt,depthBuffer:!1},i=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(r)),this._blurMaterial=qv(r,e,t)}return i}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,i){const a=new an(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ku),h.toneMapping=Ri,h.autoClear=!1;const _=new Ki({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),x=new Zt(new Li,_);let y=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,y=!0):(_.color.copy(ku),y=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const M=this._cubeSize;uo(i,A*M,p>2?M:0,M,M),h.setRenderTarget(i),y&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Hu[(i-1)%Hu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Zt(this._lodPlanes[i],u),f=u.uniforms,_=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Yi-1),y=r/x,g=isFinite(r)?1+Math.floor(h*y):Yi;g>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);const p=[];let A=0;for(let L=0;L<Yi;++L){const q=L/y,S=Math.exp(-q*q/2);p.push(S),L===0?A+=S:L<g&&(A+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;const w=this._sizeLods[i],N=3*w*(i>M-Os?i-M+Os:0),D=4*(this._cubeSize-w);uo(t,N,D,3*w,2*w),l.setRenderTarget(t),l.render(d,Da)}}function jv(s){const e=[],t=[],n=[];let i=s;const r=s-Os+1+Bu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Os?l=Bu[o-s+Os-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,x=6,y=3,g=2,p=1,A=new Float32Array(y*x*_),M=new Float32Array(g*x*_),w=new Float32Array(p*x*_);for(let D=0;D<_;D++){const L=D%3*2/3-1,q=D>2?0:-1,S=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];A.set(S,y*x*D),M.set(f,g*x*D);const C=[D,D,D,D,D,D];w.set(C,p*x*D)}const N=new Rn;N.setAttribute("position",new cn(A,y)),N.setAttribute("uv",new cn(M,g)),N.setAttribute("faceIndex",new cn(w,p)),e.push(N),i>Os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gu(s,e,t){const n=new es(s,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qv(s,e,t){const n=new Float32Array(Yi),i=new U(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Vu(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Wu(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ka||l===$a,h=l===zs||l===Gs;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new zu(s)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new zu(s));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $v(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let g=0,p=y.length;g<p;g++)e.remove(y[g])}f.removeEventListener("dispose",o),delete i[f.id];const _=r.get(f);_&&(e.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],s.ARRAY_BUFFER);const _=d.morphAttributes;for(const x in _){const y=_[x];for(let g=0,p=y.length;g<p;g++)e.update(y[g],s.ARRAY_BUFFER)}}function u(d){const f=[],_=d.index,x=d.attributes.position;let y=0;if(_!==null){const A=_.array;y=_.version;for(let M=0,w=A.length;M<w;M+=3){const N=A[M+0],D=A[M+1],L=A[M+2];f.push(N,D,D,L,L,N)}}else if(x!==void 0){const A=x.array;y=x.version;for(let M=0,w=A.length/3-1;M<w;M+=3){const N=M+0,D=M+1,L=M+2;f.push(N,D,D,L,L,N)}}else return;const g=new(Zh(f)?sd:id)(f,1);g.version=y;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){const f=r.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Zv(s,e,t,n){const i=n.isWebGL2;let r;function o(_){r=_}let a,l;function u(_){a=_.type,l=_.bytesPerElement}function h(_,x){s.drawElements(r,x,a,_*l),t.update(x,r,1)}function d(_,x,y){if(y===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,x,a,_*l,y),t.update(x,r,y)}function f(_,x,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<y;p++)this.render(_[p]/l,x[p]);else{g.multiDrawElementsWEBGL(r,x,0,a,_,0,y);let p=0;for(let A=0;A<y;A++)p+=x[A];t.update(p,r,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Jv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qv(s,e){return s[0]-e[0]}function ex(s,e){return Math.abs(e[1])-Math.abs(s[1])}function tx(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new wt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0;let g=r.get(h);if(g===void 0||g.count!==y){let j=function(){le.dispose(),r.delete(h),h.removeEventListener("dispose",j)};var _=j;g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,N=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],q=h.morphAttributes.color||[];let S=0;M===!0&&(S=1),w===!0&&(S=2),N===!0&&(S=3);let C=h.attributes.position.count*S,Y=1;C>e.maxTextureSize&&(Y=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const J=new Float32Array(C*Y*4*y),le=new ed(J,C,Y,y);le.type=ai,le.needsUpdate=!0;const F=S*4;for(let $=0;$<y;$++){const ee=D[$],Q=L[$],te=q[$],ne=C*Y*4*$;for(let B=0;B<ee.count;B++){const pe=B*F;M===!0&&(o.fromBufferAttribute(ee,B),J[ne+pe+0]=o.x,J[ne+pe+1]=o.y,J[ne+pe+2]=o.z,J[ne+pe+3]=0),w===!0&&(o.fromBufferAttribute(Q,B),J[ne+pe+4]=o.x,J[ne+pe+5]=o.y,J[ne+pe+6]=o.z,J[ne+pe+7]=0),N===!0&&(o.fromBufferAttribute(te,B),J[ne+pe+8]=o.x,J[ne+pe+9]=o.y,J[ne+pe+10]=o.z,J[ne+pe+11]=te.itemSize===4?o.w:1)}}g={count:y,texture:le,size:new Xe(C,Y)},r.set(h,g),h.addEventListener("dispose",j)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];const A=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const x=f===void 0?0:f.length;let y=n[h.id];if(y===void 0||y.length!==x){y=[];for(let w=0;w<x;w++)y[w]=[w,0];n[h.id]=y}for(let w=0;w<x;w++){const N=y[w];N[0]=w,N[1]=f[w]}y.sort(ex);for(let w=0;w<8;w++)w<x&&y[w][1]?(a[w][0]=y[w][0],a[w][1]=y[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Qv);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let A=0;for(let w=0;w<8;w++){const N=a[w],D=N[0],L=N[1];D!==Number.MAX_SAFE_INTEGER&&L?(g&&h.getAttribute("morphTarget"+w)!==g[D]&&h.setAttribute("morphTarget"+w,g[D]),p&&h.getAttribute("morphNormal"+w)!==p[D]&&h.setAttribute("morphNormal"+w,p[D]),i[w]=L,A+=L):(g&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),p&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const M=h.morphTargetsRelative?1:1-A;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function nx(s,e,t,n){let i=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==u&&(f.update(),i.set(f,u))}return d}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class ld extends Jt{constructor(e,t,n,i,r,o,a,l,u,h){if(h=h!==void 0?h:Zi,h!==Zi&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=Si),n===void 0&&h===Ws&&(n=$i),super(null,i,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ud=new Jt,hd=new ld(1,1);hd.compareFunction=Kh;const dd=new ed,fd=new Hm,pd=new ad,Xu=[],ju=[],qu=new Float32Array(16),Yu=new Float32Array(9),Ku=new Float32Array(4);function $s(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Xu[i];if(r===void 0&&(r=new Float32Array(i),Xu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Po(s,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2fv(this.addr,e),Xt(t,e)}}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;s.uniform3fv(this.addr,e),Xt(t,e)}}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4fv(this.addr,e),Xt(t,e)}}function ax(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ku.set(n),s.uniformMatrix2fv(this.addr,!1,Ku),Xt(t,n)}}function cx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Yu.set(n),s.uniformMatrix3fv(this.addr,!1,Yu),Xt(t,n)}}function lx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;qu.set(n),s.uniformMatrix4fv(this.addr,!1,qu),Xt(t,n)}}function ux(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2iv(this.addr,e),Xt(t,e)}}function dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3iv(this.addr,e),Xt(t,e)}}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4iv(this.addr,e),Xt(t,e)}}function px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2uiv(this.addr,e),Xt(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3uiv(this.addr,e),Xt(t,e)}}function _x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4uiv(this.addr,e),Xt(t,e)}}function vx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?hd:ud;t.setTexture2D(e||r,i)}function xx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fd,i)}function yx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pd,i)}function Mx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dd,i)}function bx(s){switch(s){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return cx;case 35676:return lx;case 5124:case 35670:return ux;case 35667:case 35671:return hx;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Mx}}function Ex(s,e){s.uniform1fv(this.addr,e)}function Sx(s,e){const t=$s(e,this.size,2);s.uniform2fv(this.addr,t)}function Tx(s,e){const t=$s(e,this.size,3);s.uniform3fv(this.addr,t)}function Ax(s,e){const t=$s(e,this.size,4);s.uniform4fv(this.addr,t)}function wx(s,e){const t=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rx(s,e){const t=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cx(s,e){const t=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Lx(s,e){s.uniform1iv(this.addr,e)}function Px(s,e){s.uniform2iv(this.addr,e)}function Dx(s,e){s.uniform3iv(this.addr,e)}function Ix(s,e){s.uniform4iv(this.addr,e)}function Nx(s,e){s.uniform1uiv(this.addr,e)}function Ux(s,e){s.uniform2uiv(this.addr,e)}function Ox(s,e){s.uniform3uiv(this.addr,e)}function Fx(s,e){s.uniform4uiv(this.addr,e)}function Bx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ud,r[o])}function kx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||fd,r[o])}function Hx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||pd,r[o])}function zx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dd,r[o])}function Gx(s){switch(s){case 5126:return Ex;case 35664:return Sx;case 35665:return Tx;case 35666:return Ax;case 35674:return wx;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Lx;case 35667:case 35671:return Px;case 35668:case 35672:return Dx;case 35669:case 35673:return Ix;case 5125:return Nx;case 36294:return Ux;case 36295:return Ox;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return zx}}class Vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bx(t.type)}}class Wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}}class Xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function $u(s,e){s.seq.push(e),s.map[e.id]=e}function jx(s,e,t){const n=s.name,i=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),o=Oa.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){$u(t,u===void 0?new Vx(a,s,e):new Wx(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Xx(a),$u(t,d)),t=d}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);jx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const qx=37297;let Yx=0;function Kx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $x(s){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(s);let n;switch(e===t?n="":e===To&&t===So?n="LinearDisplayP3ToLinearSRGB":e===So&&t===To&&(n="LinearSRGBToLinearDisplayP3"),s){case Kt:case Co:return[n,"LinearTransferOETF"];case kt:case uc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ju(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Kx(s.getShaderSource(e),o)}else return i}function Zx(s,e){const t=$x(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jx(s,e){let t;switch(e){case Yp:t="Linear";break;case Kp:t="Reinhard";break;case $p:t="OptimizedCineon";break;case Zp:t="ACESFilmic";break;case Qp:t="AgX";break;case Jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function e0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fs).join(`
`)}function t0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Fs(s){return s!==""}function Qu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(s){return s.replace(i0,r0)}const s0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function r0(s,e){let t=rt[e];if(t===void 0){const n=s0.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}const o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(s){return s.replace(o0,a0)}function a0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function l0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function h0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Oh:e="ENVMAP_BLENDING_MULTIPLY";break;case jp:e="ENVMAP_BLENDING_MIX";break;case qp:e="ENVMAP_BLENDING_ADD";break}return e}function d0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function f0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=c0(t),u=l0(t),h=u0(t),d=h0(t),f=d0(t),_=t.isWebGL2?"":Qx(t),x=e0(t),y=t0(r),g=i.createProgram();let p,A,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Fs).join(`
`),p.length>0&&(p+=`
`),A=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Fs).join(`
`),A.length>0&&(A+=`
`)):(p=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),A=[_,nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Zx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=nc(o),o=Qu(o,t),o=eh(o,t),a=nc(a),a=Qu(a,t),a=eh(a,t),o=th(o),a=th(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const w=M+p+o,N=M+A+a,D=Zu(i,i.VERTEX_SHADER,w),L=Zu(i,i.FRAGMENT_SHADER,N);i.attachShader(g,D),i.attachShader(g,L),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function q(J){if(s.debug.checkShaderErrors){const le=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(D).trim(),j=i.getShaderInfoLog(L).trim();let $=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,D,L);else{const Q=Ju(i,D,"vertex"),te=Ju(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+Q+`
`+te)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(F===""||j==="")&&(ee=!1);ee&&(J.diagnostics={runnable:$,programLog:le,vertexShader:{log:F,prefix:p},fragmentShader:{log:j,prefix:A}})}i.deleteShader(D),i.deleteShader(L),S=new yo(i,g),C=n0(i,g)}let S;this.getUniforms=function(){return S===void 0&&q(this),S};let C;this.getAttributes=function(){return C===void 0&&q(this),C};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=i.getProgramParameter(g,qx)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=L,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new g0(e),t.set(e,n)),n}}class g0{constructor(e){this.id=p0++,this.code=e,this.usedTimes=0}}function _0(s,e,t,n,i,r,o){const a=new td,l=new m0,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function g(S,C,Y,J,le){const F=J.fog,j=le.geometry,$=S.isMeshStandardMaterial?J.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),Q=ee&&ee.mapping===Ro?ee.image.height:null,te=x[S.type];S.precision!==null&&(_=i.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ne=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,B=ne!==void 0?ne.length:0;let pe=0;j.morphAttributes.position!==void 0&&(pe=1),j.morphAttributes.normal!==void 0&&(pe=2),j.morphAttributes.color!==void 0&&(pe=3);let Z,re,ve,Le;if(te){const Ut=Gn[te];Z=Ut.vertexShader,re=Ut.fragmentShader}else Z=S.vertexShader,re=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),Le=l.getFragmentShaderID(S);const Ee=s.getRenderTarget(),We=le.isInstancedMesh===!0,oe=le.isBatchedMesh===!0,Fe=!!S.map,ot=!!S.matcap,X=!!ee,Gt=!!S.aoMap,De=!!S.lightMap,Ve=!!S.bumpMap,we=!!S.normalMap,gt=!!S.displacementMap,Qe=!!S.emissiveMap,R=!!S.metalnessMap,b=!!S.roughnessMap,V=S.anisotropy>0,ue=S.clearcoat>0,ae=S.iridescence>0,he=S.sheen>0,Ce=S.transmission>0,ge=V&&!!S.anisotropyMap,Se=ue&&!!S.clearcoatMap,Be=ue&&!!S.clearcoatNormalMap,et=ue&&!!S.clearcoatRoughnessMap,se=ae&&!!S.iridescenceMap,ct=ae&&!!S.iridescenceThicknessMap,je=he&&!!S.sheenColorMap,ze=he&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,Me=!!S.specularColorMap,P=!!S.specularIntensityMap,de=Ce&&!!S.transmissionMap,Ie=Ce&&!!S.thicknessMap,Te=!!S.gradientMap,ce=!!S.alphaMap,I=S.alphaTest>0,fe=!!S.alphaHash,xe=!!S.extensions,He=!!j.attributes.uv1,Ue=!!j.attributes.uv2,lt=!!j.attributes.uv3;let ut=Ri;return S.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ut=s.toneMapping),{isWebGL2:h,shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:re,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:oe,instancing:We,instancingColor:We&&le.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Kt,map:Fe,matcap:ot,envMap:X,envMapMode:X&&ee.mapping,envMapCubeUVHeight:Q,aoMap:Gt,lightMap:De,bumpMap:Ve,normalMap:we,displacementMap:f&&gt,emissiveMap:Qe,normalMapObjectSpace:we&&S.normalMapType===fm,normalMapTangentSpace:we&&S.normalMapType===Yh,metalnessMap:R,roughnessMap:b,anisotropy:V,anisotropyMap:ge,clearcoat:ue,clearcoatMap:Se,clearcoatNormalMap:Be,clearcoatRoughnessMap:et,iridescence:ae,iridescenceMap:se,iridescenceThicknessMap:ct,sheen:he,sheenColorMap:je,sheenRoughnessMap:ze,specularMap:Ne,specularColorMap:Me,specularIntensityMap:P,transmission:Ce,transmissionMap:de,thicknessMap:Ie,gradientMap:Te,opaque:S.transparent===!1&&S.blending===Bs,alphaMap:ce,alphaTest:I,alphaHash:fe,combine:S.combine,mapUv:Fe&&y(S.map.channel),aoMapUv:Gt&&y(S.aoMap.channel),lightMapUv:De&&y(S.lightMap.channel),bumpMapUv:Ve&&y(S.bumpMap.channel),normalMapUv:we&&y(S.normalMap.channel),displacementMapUv:gt&&y(S.displacementMap.channel),emissiveMapUv:Qe&&y(S.emissiveMap.channel),metalnessMapUv:R&&y(S.metalnessMap.channel),roughnessMapUv:b&&y(S.roughnessMap.channel),anisotropyMapUv:ge&&y(S.anisotropyMap.channel),clearcoatMapUv:Se&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Be&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(S.sheenRoughnessMap.channel),specularMapUv:Ne&&y(S.specularMap.channel),specularColorMapUv:Me&&y(S.specularColorMap.channel),specularIntensityMapUv:P&&y(S.specularIntensityMap.channel),transmissionMapUv:de&&y(S.transmissionMap.channel),thicknessMapUv:Ie&&y(S.thicknessMap.channel),alphaMapUv:ce&&y(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(we||V),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:Ue,vertexUv3s:lt,pointsUvs:le.isPoints===!0&&!!j.attributes.uv&&(Fe||ce),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:le.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:pe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===It,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vn,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xe&&S.extensions.derivatives===!0,extensionFragDepth:xe&&S.extensions.fragDepth===!0,extensionDrawBuffers:xe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)C.push(Y),C.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(A(C,S),M(C,S),C.push(s.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function A(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function M(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function w(S){const C=x[S.type];let Y;if(C){const J=Gn[C];Y=Qm.clone(J.uniforms)}else Y=S.uniforms;return Y}function N(S,C){let Y;for(let J=0,le=u.length;J<le;J++){const F=u[J];if(F.cacheKey===C){Y=F,++Y.usedTimes;break}}return Y===void 0&&(Y=new f0(s,C,S,r),u.push(Y)),Y}function D(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function q(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:N,releaseProgram:D,releaseShaderCache:L,programs:u,dispose:q}}function v0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function x0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ih(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,_,x,y,g){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:_,groupOrder:x,renderOrder:d.renderOrder,z:y,group:g},s[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=_,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=y,p.group=g),e++,p}function a(d,f,_,x,y,g){const p=o(d,f,_,x,y,g);_.transmission>0?n.push(p):_.transparent===!0?i.push(p):t.push(p)}function l(d,f,_,x,y,g){const p=o(d,f,_,x,y,g);_.transmission>0?n.unshift(p):_.transparent===!0?i.unshift(p):t.unshift(p)}function u(d,f){t.length>1&&t.sort(d||x0),n.length>1&&n.sort(f||ih),i.length>1&&i.sort(f||ih)}function h(){for(let d=e,f=s.length;d<f;d++){const _=s[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:u}}function y0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new sh,s.set(n,[o])):i>=r.length?(o=new sh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function M0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function b0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let E0=0;function S0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function T0(s,e){const t=new M0,n=b0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const r=new U,o=new ft,a=new ft;function l(h,d){let f=0,_=0,x=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let y=0,g=0,p=0,A=0,M=0,w=0,N=0,D=0,L=0,q=0,S=0;h.sort(S0);const C=d===!0?Math.PI:1;for(let J=0,le=h.length;J<le;J++){const F=h[J],j=F.color,$=F.intensity,ee=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=j.r*$*C,_+=j.g*$*C,x+=j.b*$*C;else if(F.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(F.sh.coefficients[te],$);S++}else if(F.isDirectionalLight){const te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const ne=F.shadow,B=n.get(F);B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,i.directionalShadow[y]=B,i.directionalShadowMap[y]=Q,i.directionalShadowMatrix[y]=F.shadow.matrix,w++}i.directional[y]=te,y++}else if(F.isSpotLight){const te=t.get(F);te.position.setFromMatrixPosition(F.matrixWorld),te.color.copy(j).multiplyScalar($*C),te.distance=ee,te.coneCos=Math.cos(F.angle),te.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),te.decay=F.decay,i.spot[p]=te;const ne=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,ne.updateMatrices(F),F.castShadow&&q++),i.spotLightMatrix[p]=ne.matrix,F.castShadow){const B=n.get(F);B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,i.spotShadow[p]=B,i.spotShadowMap[p]=Q,D++}p++}else if(F.isRectAreaLight){const te=t.get(F);te.color.copy(j).multiplyScalar($),te.halfWidth.set(F.width*.5,0,0),te.halfHeight.set(0,F.height*.5,0),i.rectArea[A]=te,A++}else if(F.isPointLight){const te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*C),te.distance=F.distance,te.decay=F.decay,F.castShadow){const ne=F.shadow,B=n.get(F);B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,B.shadowCameraNear=ne.camera.near,B.shadowCameraFar=ne.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=F.shadow.matrix,N++}i.point[g]=te,g++}else if(F.isHemisphereLight){const te=t.get(F);te.skyColor.copy(F.color).multiplyScalar($*C),te.groundColor.copy(F.groundColor).multiplyScalar($*C),i.hemi[M]=te,M++}}A>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=_,i.ambient[2]=x;const Y=i.hash;(Y.directionalLength!==y||Y.pointLength!==g||Y.spotLength!==p||Y.rectAreaLength!==A||Y.hemiLength!==M||Y.numDirectionalShadows!==w||Y.numPointShadows!==N||Y.numSpotShadows!==D||Y.numSpotMaps!==L||Y.numLightProbes!==S)&&(i.directional.length=y,i.spot.length=p,i.rectArea.length=A,i.point.length=g,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=D+L-q,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=q,i.numLightProbes=S,Y.directionalLength=y,Y.pointLength=g,Y.spotLength=p,Y.rectAreaLength=A,Y.hemiLength=M,Y.numDirectionalShadows=w,Y.numPointShadows=N,Y.numSpotShadows=D,Y.numSpotMaps=L,Y.numLightProbes=S,i.version=E0++)}function u(h,d){let f=0,_=0,x=0,y=0,g=0;const p=d.matrixWorldInverse;for(let A=0,M=h.length;A<M;A++){const w=h[A];if(w.isDirectionalLight){const N=i.directional[f];N.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),f++}else if(w.isSpotLight){const N=i.spot[x];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(p),N.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),x++}else if(w.isRectAreaLight){const N=i.rectArea[y];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const N=i.point[_];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(p),_++}else if(w.isHemisphereLight){const N=i.hemi[g];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(p),g++}}}return{setup:l,setupView:u,state:i}}function rh(s,e){const t=new T0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function A0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new rh(s,e),t.set(r,[l])):o>=a.length?(l=new rh(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class w0 extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R0 extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P0(s,e,t){let n=new dc;const i=new Xe,r=new Xe,o=new wt,a=new w0({depthPacking:dm}),l=new R0,u={},h=t.maxTextureSize,d={[li]:fn,[fn]:li,[Vn]:Vn},f=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:C0,fragmentShader:L0}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const x=new Rn;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Zt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(D,L,q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const S=s.getRenderTarget(),C=s.getActiveCubeFace(),Y=s.getActiveMipmapLevel(),J=s.state;J.setBlending(wi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const le=p!==oi&&this.type===oi,F=p===oi&&this.type!==oi;for(let j=0,$=D.length;j<$;j++){const ee=D[j],Q=ee.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const te=Q.getFrameExtents();if(i.multiply(te),r.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,Q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,Q.mapSize.y=r.y)),Q.map===null||le===!0||F===!0){const B=this.type!==oi?{minFilter:Yt,magFilter:Yt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new es(i.x,i.y,B),Q.map.texture.name=ee.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const ne=Q.getViewportCount();for(let B=0;B<ne;B++){const pe=Q.getViewport(B);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),J.viewport(o),Q.updateMatrices(ee,B),n=Q.getFrustum(),w(L,q,Q.camera,ee,this.type)}Q.isPointLightShadow!==!0&&this.type===oi&&A(Q,q),Q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,C,Y)};function A(D,L){const q=e.update(y);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new es(i.x,i.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(L,null,q,f,y,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(L,null,q,_,y,null)}function M(D,L,q,S){let C=null;const Y=q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Y!==void 0)C=Y;else if(C=q.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const J=C.uuid,le=L.uuid;let F=u[J];F===void 0&&(F={},u[J]=F);let j=F[le];j===void 0&&(j=C.clone(),F[le]=j,L.addEventListener("dispose",N)),C=j}if(C.visible=L.visible,C.wireframe=L.wireframe,S===oi?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:d[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=s.properties.get(C);J.light=q}return C}function w(D,L,q,S,C){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===oi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,D.matrixWorld);const le=e.update(D),F=D.material;if(Array.isArray(F)){const j=le.groups;for(let $=0,ee=j.length;$<ee;$++){const Q=j[$],te=F[Q.materialIndex];if(te&&te.visible){const ne=M(D,te,S,C);D.onBeforeShadow(s,D,L,q,le,ne,Q),s.renderBufferDirect(q,null,le,ne,D,Q),D.onAfterShadow(s,D,L,q,le,ne,Q)}}}else if(F.visible){const j=M(D,F,S,C);D.onBeforeShadow(s,D,L,q,le,j,null),s.renderBufferDirect(q,null,le,j,D,null),D.onAfterShadow(s,D,L,q,le,j,null)}}const J=D.children;for(let le=0,F=J.length;le<F;le++)w(J[le],L,q,S,C)}function N(D){D.target.removeEventListener("dispose",N);for(const q in u){const S=u[q],C=D.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function D0(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const fe=new wt;let xe=null;const He=new wt(0,0,0,0);return{setMask:function(Ue){xe!==Ue&&!I&&(s.colorMask(Ue,Ue,Ue,Ue),xe=Ue)},setLocked:function(Ue){I=Ue},setClear:function(Ue,lt,ut,Nt,Ut){Ut===!0&&(Ue*=Nt,lt*=Nt,ut*=Nt),fe.set(Ue,lt,ut,Nt),He.equals(fe)===!1&&(s.clearColor(Ue,lt,ut,Nt),He.copy(fe))},reset:function(){I=!1,xe=null,He.set(-1,0,0,0)}}}function r(){let I=!1,fe=null,xe=null,He=null;return{setTest:function(Ue){Ue?oe(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!I&&(s.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(xe!==Ue){switch(Ue){case kp:s.depthFunc(s.NEVER);break;case Hp:s.depthFunc(s.ALWAYS);break;case zp:s.depthFunc(s.LESS);break;case Mo:s.depthFunc(s.LEQUAL);break;case Gp:s.depthFunc(s.EQUAL);break;case Vp:s.depthFunc(s.GEQUAL);break;case Wp:s.depthFunc(s.GREATER);break;case Xp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=Ue}},setLocked:function(Ue){I=Ue},setClear:function(Ue){He!==Ue&&(s.clearDepth(Ue),He=Ue)},reset:function(){I=!1,fe=null,xe=null,He=null}}}function o(){let I=!1,fe=null,xe=null,He=null,Ue=null,lt=null,ut=null,Nt=null,Ut=null;return{setTest:function(at){I||(at?oe(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(at){fe!==at&&!I&&(s.stencilMask(at),fe=at)},setFunc:function(at,Rt,vn){(xe!==at||He!==Rt||Ue!==vn)&&(s.stencilFunc(at,Rt,vn),xe=at,He=Rt,Ue=vn)},setOp:function(at,Rt,vn){(lt!==at||ut!==Rt||Nt!==vn)&&(s.stencilOp(at,Rt,vn),lt=at,ut=Rt,Nt=vn)},setLocked:function(at){I=at},setClear:function(at){Ut!==at&&(s.clearStencil(at),Ut=at)},reset:function(){I=!1,fe=null,xe=null,He=null,Ue=null,lt=null,ut=null,Nt=null,Ut=null}}}const a=new i,l=new r,u=new o,h=new WeakMap,d=new WeakMap;let f={},_={},x=new WeakMap,y=[],g=null,p=!1,A=null,M=null,w=null,N=null,D=null,L=null,q=null,S=new tt(0,0,0),C=0,Y=!1,J=null,le=null,F=null,j=null,$=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,te=0;const ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Q=te>=1):ne.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Q=te>=2);let B=null,pe={};const Z=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),ve=new wt().fromArray(Z),Le=new wt().fromArray(re);function Ee(I,fe,xe,He){const Ue=new Uint8Array(4),lt=s.createTexture();s.bindTexture(I,lt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<xe;ut++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(fe,0,s.RGBA,1,1,He,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(fe+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return lt}const We={};We[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),We[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),We[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),oe(s.DEPTH_TEST),l.setFunc(Mo),Qe(!1),R(Bl),oe(s.CULL_FACE),we(wi);function oe(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function Fe(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function ot(I,fe){return _[I]!==fe?(s.bindFramebuffer(I,fe),_[I]=fe,n&&(I===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=fe),I===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=fe)),!0):!1}function X(I,fe){let xe=y,He=!1;if(I)if(xe=x.get(fe),xe===void 0&&(xe=[],x.set(fe,xe)),I.isWebGLMultipleRenderTargets){const Ue=I.texture;if(xe.length!==Ue.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,ut=Ue.length;lt<ut;lt++)xe[lt]=s.COLOR_ATTACHMENT0+lt;xe.length=Ue.length,He=!0}}else xe[0]!==s.COLOR_ATTACHMENT0&&(xe[0]=s.COLOR_ATTACHMENT0,He=!0);else xe[0]!==s.BACK&&(xe[0]=s.BACK,He=!0);He&&(t.isWebGL2?s.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Gt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const De={[qi]:s.FUNC_ADD,[Sp]:s.FUNC_SUBTRACT,[Tp]:s.FUNC_REVERSE_SUBTRACT};if(n)De[Gl]=s.MIN,De[Vl]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(De[Gl]=I.MIN_EXT,De[Vl]=I.MAX_EXT)}const Ve={[Ap]:s.ZERO,[wp]:s.ONE,[Rp]:s.SRC_COLOR,[qa]:s.SRC_ALPHA,[Np]:s.SRC_ALPHA_SATURATE,[Dp]:s.DST_COLOR,[Lp]:s.DST_ALPHA,[Cp]:s.ONE_MINUS_SRC_COLOR,[Ya]:s.ONE_MINUS_SRC_ALPHA,[Ip]:s.ONE_MINUS_DST_COLOR,[Pp]:s.ONE_MINUS_DST_ALPHA,[Up]:s.CONSTANT_COLOR,[Op]:s.ONE_MINUS_CONSTANT_COLOR,[Fp]:s.CONSTANT_ALPHA,[Bp]:s.ONE_MINUS_CONSTANT_ALPHA};function we(I,fe,xe,He,Ue,lt,ut,Nt,Ut,at){if(I===wi){p===!0&&(Fe(s.BLEND),p=!1);return}if(p===!1&&(oe(s.BLEND),p=!0),I!==Ep){if(I!==A||at!==Y){if((M!==qi||D!==qi)&&(s.blendEquation(s.FUNC_ADD),M=qi,D=qi),at)switch(I){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.ONE,s.ONE);break;case Hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,N=null,L=null,q=null,S.set(0,0,0),C=0,A=I,Y=at}return}Ue=Ue||fe,lt=lt||xe,ut=ut||He,(fe!==M||Ue!==D)&&(s.blendEquationSeparate(De[fe],De[Ue]),M=fe,D=Ue),(xe!==w||He!==N||lt!==L||ut!==q)&&(s.blendFuncSeparate(Ve[xe],Ve[He],Ve[lt],Ve[ut]),w=xe,N=He,L=lt,q=ut),(Nt.equals(S)===!1||Ut!==C)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Ut),S.copy(Nt),C=Ut),A=I,Y=!1}function gt(I,fe){I.side===Vn?Fe(s.CULL_FACE):oe(s.CULL_FACE);let xe=I.side===fn;fe&&(xe=!xe),Qe(xe),I.blending===Bs&&I.transparent===!1?we(wi):we(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const He=I.stencilWrite;u.setTest(He),He&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(I){J!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),J=I)}function R(I){I!==yp?(oe(s.CULL_FACE),I!==le&&(I===Bl?s.cullFace(s.BACK):I===Mp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),le=I}function b(I){I!==F&&(Q&&s.lineWidth(I),F=I)}function V(I,fe,xe){I?(oe(s.POLYGON_OFFSET_FILL),(j!==fe||$!==xe)&&(s.polygonOffset(fe,xe),j=fe,$=xe)):Fe(s.POLYGON_OFFSET_FILL)}function ue(I){I?oe(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function ae(I){I===void 0&&(I=s.TEXTURE0+ee-1),B!==I&&(s.activeTexture(I),B=I)}function he(I,fe,xe){xe===void 0&&(B===null?xe=s.TEXTURE0+ee-1:xe=B);let He=pe[xe];He===void 0&&(He={type:void 0,texture:void 0},pe[xe]=He),(He.type!==I||He.texture!==fe)&&(B!==xe&&(s.activeTexture(xe),B=xe),s.bindTexture(I,fe||We[I]),He.type=I,He.texture=fe)}function Ce(){const I=pe[B];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(I){ve.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ve.copy(I))}function de(I){Le.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Le.copy(I))}function Ie(I,fe){let xe=d.get(fe);xe===void 0&&(xe=new WeakMap,d.set(fe,xe));let He=xe.get(I);He===void 0&&(He=s.getUniformBlockIndex(fe,I.name),xe.set(I,He))}function Te(I,fe){const He=d.get(fe).get(I);h.get(fe)!==He&&(s.uniformBlockBinding(fe,He,I.__bindingPointIndex),h.set(fe,He))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},B=null,pe={},_={},x=new WeakMap,y=[],g=null,p=!1,A=null,M=null,w=null,N=null,D=null,L=null,q=null,S=new tt(0,0,0),C=0,Y=!1,J=null,le=null,F=null,j=null,$=null,ve.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:oe,disable:Fe,bindFramebuffer:ot,drawBuffers:X,useProgram:Gt,setBlending:we,setMaterial:gt,setFlipSided:Qe,setCullFace:R,setLineWidth:b,setPolygonOffset:V,setScissorTest:ue,activeTexture:ae,bindTexture:he,unbindTexture:Ce,compressedTexImage2D:ge,compressedTexImage3D:Se,texImage2D:Ne,texImage3D:Me,updateUBOMapping:Ie,uniformBlockBinding:Te,texStorage2D:je,texStorage3D:ze,texSubImage2D:Be,texSubImage3D:et,compressedTexSubImage2D:se,compressedTexSubImage3D:ct,scissor:P,viewport:de,reset:ce}}function I0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,b){return _?new OffscreenCanvas(R,b):br("canvas")}function y(R,b,V,ue){let ae=1;if((R.width>ue||R.height>ue)&&(ae=ue/Math.max(R.width,R.height)),ae<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const he=b?wo:Math.floor,Ce=he(ae*R.width),ge=he(ae*R.height);d===void 0&&(d=x(Ce,ge));const Se=V?x(Ce,ge):d;return Se.width=Ce,Se.height=ge,Se.getContext("2d").drawImage(R,0,0,Ce,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ce+"x"+ge+")."),Se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return tc(R.width)&&tc(R.height)}function p(R){return a?!1:R.wrapS!==Tn||R.wrapT!==Tn||R.minFilter!==Yt&&R.minFilter!==dn}function A(R,b){return R.generateMipmaps&&b&&R.minFilter!==Yt&&R.minFilter!==dn}function M(R){s.generateMipmap(R)}function w(R,b,V,ue,ae=!1){if(a===!1)return b;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he=b;if(b===s.RED&&(V===s.FLOAT&&(he=s.R32F),V===s.HALF_FLOAT&&(he=s.R16F),V===s.UNSIGNED_BYTE&&(he=s.R8)),b===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(he=s.R8UI),V===s.UNSIGNED_SHORT&&(he=s.R16UI),V===s.UNSIGNED_INT&&(he=s.R32UI),V===s.BYTE&&(he=s.R8I),V===s.SHORT&&(he=s.R16I),V===s.INT&&(he=s.R32I)),b===s.RG&&(V===s.FLOAT&&(he=s.RG32F),V===s.HALF_FLOAT&&(he=s.RG16F),V===s.UNSIGNED_BYTE&&(he=s.RG8)),b===s.RGBA){const Ce=ae?Eo:vt.getTransfer(ue);V===s.FLOAT&&(he=s.RGBA32F),V===s.HALF_FLOAT&&(he=s.RGBA16F),V===s.UNSIGNED_BYTE&&(he=Ce===It?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function N(R,b,V){return A(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==dn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function D(R){return R===Yt||R===Za||R===xo?s.NEAREST:s.LINEAR}function L(R){const b=R.target;b.removeEventListener("dispose",L),S(b),b.isVideoTexture&&h.delete(b)}function q(R){const b=R.target;b.removeEventListener("dispose",q),Y(b)}function S(R){const b=n.get(R);if(b.__webglInit===void 0)return;const V=R.source,ue=f.get(V);if(ue){const ae=ue[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&C(R),Object.keys(ue).length===0&&f.delete(V)}n.remove(R)}function C(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const V=R.source,ue=f.get(V);delete ue[b.__cacheKey],o.memory.textures--}function Y(R){const b=R.texture,V=n.get(R),ue=n.get(b);if(ue.__webglTexture!==void 0&&(s.deleteTexture(ue.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(V.__webglFramebuffer[ae]))for(let he=0;he<V.__webglFramebuffer[ae].length;he++)s.deleteFramebuffer(V.__webglFramebuffer[ae][he]);else s.deleteFramebuffer(V.__webglFramebuffer[ae]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[ae])}else{if(Array.isArray(V.__webglFramebuffer))for(let ae=0;ae<V.__webglFramebuffer.length;ae++)s.deleteFramebuffer(V.__webglFramebuffer[ae]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ae=0;ae<V.__webglColorRenderbuffer.length;ae++)V.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[ae]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ae=0,he=b.length;ae<he;ae++){const Ce=n.get(b[ae]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),o.memory.textures--),n.remove(b[ae])}n.remove(b),n.remove(R)}let J=0;function le(){J=0}function F(){const R=J;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),J+=1,R}function j(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function $(R,b){const V=n.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ue=R.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,R,b);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+b)}function ee(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ve(V,R,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+b)}function Q(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ve(V,R,b);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+b)}function te(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Le(V,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+b)}const ne={[Vs]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[bo]:s.MIRRORED_REPEAT},B={[Yt]:s.NEAREST,[Za]:s.NEAREST_MIPMAP_NEAREST,[xo]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[Bh]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},pe={[pm]:s.NEVER,[ym]:s.ALWAYS,[mm]:s.LESS,[Kh]:s.LEQUAL,[gm]:s.EQUAL,[xm]:s.GEQUAL,[_m]:s.GREATER,[vm]:s.NOTEQUAL};function Z(R,b,V){if(V?(s.texParameteri(R,s.TEXTURE_WRAP_S,ne[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ne[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ne[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,B[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,B[b.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Tn||b.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,D(b.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,D(b.minFilter)),b.minFilter!==Yt&&b.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Yt||b.minFilter!==xo&&b.minFilter!==Qi||b.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(R,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function re(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",L));const ue=b.source;let ae=f.get(ue);ae===void 0&&(ae={},f.set(ue,ae));const he=j(b);if(he!==R.__cacheKey){ae[he]===void 0&&(ae[he]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ae[he].usedTimes++;const Ce=ae[R.__cacheKey];Ce!==void 0&&(ae[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&C(b)),R.__cacheKey=he,R.__webglTexture=ae[he].texture}return V}function ve(R,b,V){let ue=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=s.TEXTURE_3D);const ae=re(R,b),he=b.source;t.bindTexture(ue,R.__webglTexture,s.TEXTURE0+V);const Ce=n.get(he);if(he.version!==Ce.__version||ae===!0){t.activeTexture(s.TEXTURE0+V);const ge=vt.getPrimaries(vt.workingColorSpace),Se=b.colorSpace===wn?null:vt.getPrimaries(b.colorSpace),Be=b.colorSpace===wn||ge===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const et=p(b)&&g(b.image)===!1;let se=y(b.image,et,!1,i.maxTextureSize);se=Qe(b,se);const ct=g(se)||a,je=r.convert(b.format,b.colorSpace);let ze=r.convert(b.type),Ne=w(b.internalFormat,je,ze,b.colorSpace,b.isVideoTexture);Z(ue,b,ct);let Me;const P=b.mipmaps,de=a&&b.isVideoTexture!==!0&&Ne!==Xh,Ie=Ce.__version===void 0||ae===!0,Te=N(b,se,ct);if(b.isDepthTexture)Ne=s.DEPTH_COMPONENT,a?b.type===ai?Ne=s.DEPTH_COMPONENT32F:b.type===Si?Ne=s.DEPTH_COMPONENT24:b.type===$i?Ne=s.DEPTH24_STENCIL8:Ne=s.DEPTH_COMPONENT16:b.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Zi&&Ne===s.DEPTH_COMPONENT&&b.type!==lc&&b.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Si,ze=r.convert(b.type)),b.format===Ws&&Ne===s.DEPTH_COMPONENT&&(Ne=s.DEPTH_STENCIL,b.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=$i,ze=r.convert(b.type))),Ie&&(de?t.texStorage2D(s.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ne,se.width,se.height,0,je,ze,null));else if(b.isDataTexture)if(P.length>0&&ct){de&&Ie&&t.texStorage2D(s.TEXTURE_2D,Te,Ne,P[0].width,P[0].height);for(let ce=0,I=P.length;ce<I;ce++)Me=P[ce],de?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Me.width,Me.height,je,ze,Me.data):t.texImage2D(s.TEXTURE_2D,ce,Ne,Me.width,Me.height,0,je,ze,Me.data);b.generateMipmaps=!1}else de?(Ie&&t.texStorage2D(s.TEXTURE_2D,Te,Ne,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,je,ze,se.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,se.width,se.height,0,je,ze,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){de&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ne,P[0].width,P[0].height,se.depth);for(let ce=0,I=P.length;ce<I;ce++)Me=P[ce],b.format!==An?je!==null?de?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,se.depth,je,Me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Ne,Me.width,Me.height,se.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,se.depth,je,ze,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,Ne,Me.width,Me.height,se.depth,0,je,ze,Me.data)}else{de&&Ie&&t.texStorage2D(s.TEXTURE_2D,Te,Ne,P[0].width,P[0].height);for(let ce=0,I=P.length;ce<I;ce++)Me=P[ce],b.format!==An?je!==null?de?t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Me.width,Me.height,je,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Me.width,Me.height,je,ze,Me.data):t.texImage2D(s.TEXTURE_2D,ce,Ne,Me.width,Me.height,0,je,ze,Me.data)}else if(b.isDataArrayTexture)de?(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ne,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,je,ze,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,je,ze,se.data);else if(b.isData3DTexture)de?(Ie&&t.texStorage3D(s.TEXTURE_3D,Te,Ne,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,je,ze,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,je,ze,se.data);else if(b.isFramebufferTexture){if(Ie)if(de)t.texStorage2D(s.TEXTURE_2D,Te,Ne,se.width,se.height);else{let ce=se.width,I=se.height;for(let fe=0;fe<Te;fe++)t.texImage2D(s.TEXTURE_2D,fe,Ne,ce,I,0,je,ze,null),ce>>=1,I>>=1}}else if(P.length>0&&ct){de&&Ie&&t.texStorage2D(s.TEXTURE_2D,Te,Ne,P[0].width,P[0].height);for(let ce=0,I=P.length;ce<I;ce++)Me=P[ce],de?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,je,ze,Me):t.texImage2D(s.TEXTURE_2D,ce,Ne,je,ze,Me);b.generateMipmaps=!1}else de?(Ie&&t.texStorage2D(s.TEXTURE_2D,Te,Ne,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,ze,se)):t.texImage2D(s.TEXTURE_2D,0,Ne,je,ze,se);A(b,ct)&&M(ue),Ce.__version=he.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Le(R,b,V){if(b.image.length!==6)return;const ue=re(R,b),ae=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);const he=n.get(ae);if(ae.version!==he.__version||ue===!0){t.activeTexture(s.TEXTURE0+V);const Ce=vt.getPrimaries(vt.workingColorSpace),ge=b.colorSpace===wn?null:vt.getPrimaries(b.colorSpace),Se=b.colorSpace===wn||Ce===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!Be&&!et?se[ce]=y(b.image[ce],!1,!0,i.maxCubemapSize):se[ce]=et?b.image[ce].image:b.image[ce],se[ce]=Qe(b,se[ce]);const ct=se[0],je=g(ct)||a,ze=r.convert(b.format,b.colorSpace),Ne=r.convert(b.type),Me=w(b.internalFormat,ze,Ne,b.colorSpace),P=a&&b.isVideoTexture!==!0,de=he.__version===void 0||ue===!0;let Ie=N(b,ct,je);Z(s.TEXTURE_CUBE_MAP,b,je);let Te;if(Be){P&&de&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Me,ct.width,ct.height);for(let ce=0;ce<6;ce++){Te=se[ce].mipmaps;for(let I=0;I<Te.length;I++){const fe=Te[I];b.format!==An?ze!==null?P?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I,0,0,fe.width,fe.height,ze,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I,Me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I,0,0,fe.width,fe.height,ze,Ne,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I,Me,fe.width,fe.height,0,ze,Ne,fe.data)}}}else{Te=b.mipmaps,P&&de&&(Te.length>0&&Ie++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Me,se[0].width,se[0].height));for(let ce=0;ce<6;ce++)if(et){P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,ze,Ne,se[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Me,se[ce].width,se[ce].height,0,ze,Ne,se[ce].data);for(let I=0;I<Te.length;I++){const xe=Te[I].image[ce].image;P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I+1,0,0,xe.width,xe.height,ze,Ne,xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I+1,Me,xe.width,xe.height,0,ze,Ne,xe.data)}}else{P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ze,Ne,se[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Me,ze,Ne,se[ce]);for(let I=0;I<Te.length;I++){const fe=Te[I];P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I+1,0,0,ze,Ne,fe.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I+1,Me,ze,Ne,fe.image[ce])}}}A(b,je)&&M(s.TEXTURE_CUBE_MAP),he.__version=ae.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ee(R,b,V,ue,ae,he){const Ce=r.convert(V.format,V.colorSpace),ge=r.convert(V.type),Se=w(V.internalFormat,Ce,ge,V.colorSpace);if(!n.get(b).__hasExternalTextures){const et=Math.max(1,b.width>>he),se=Math.max(1,b.height>>he);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,he,Se,et,se,b.depth,0,Ce,ge,null):t.texImage2D(ae,he,Se,et,se,0,Ce,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),we(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ae,n.get(V).__webglTexture,0,Ve(b)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,ae,n.get(V).__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(R,b,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ue=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||we(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ai?ue=s.DEPTH_COMPONENT32F:ae.type===Si&&(ue=s.DEPTH_COMPONENT24));const he=Ve(b);we(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,ue,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,he,ue,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ue,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const ue=Ve(b);V&&we(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,s.DEPTH24_STENCIL8,b.width,b.height):we(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const ue=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0;ae<ue.length;ae++){const he=ue[ae],Ce=r.convert(he.format,he.colorSpace),ge=r.convert(he.type),Se=w(he.internalFormat,Ce,ge,he.colorSpace),Be=Ve(b);V&&we(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Se,b.width,b.height):we(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be,Se,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Se,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const ue=n.get(b.depthTexture).__webglTexture,ae=Ve(b);if(b.depthTexture.format===Zi)we(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0);else if(b.depthTexture.format===Ws)we(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const b=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(b.__webglFramebuffer,R)}else if(V){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]=s.createRenderbuffer(),We(b.__webglDepthbuffer[ue],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),We(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(R,b,V){const ue=n.get(R);b!==void 0&&Ee(ue.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Fe(R)}function X(R){const b=R.texture,V=n.get(R),ue=n.get(b);R.addEventListener("dispose",q),R.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=b.version,o.memory.textures++);const ae=R.isWebGLCubeRenderTarget===!0,he=R.isWebGLMultipleRenderTargets===!0,Ce=g(R)||a;if(ae){V.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[ge]=[];for(let Se=0;Se<b.mipmaps.length;Se++)V.__webglFramebuffer[ge][Se]=s.createFramebuffer()}else V.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)V.__webglFramebuffer[ge]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(he)if(i.drawBuffers){const ge=R.texture;for(let Se=0,Be=ge.length;Se<Be;Se++){const et=n.get(ge[Se]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&we(R)===!1){const ge=he?b:[b];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Se=0;Se<ge.length;Se++){const Be=ge[Se];V.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[Se]);const et=r.convert(Be.format,Be.colorSpace),se=r.convert(Be.type),ct=w(Be.internalFormat,et,se,Be.colorSpace,R.isXRRenderTarget===!0),je=Ve(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,ct,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,V.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),We(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Z(s.TEXTURE_CUBE_MAP,b,Ce);for(let ge=0;ge<6;ge++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)Ee(V.__webglFramebuffer[ge][Se],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else Ee(V.__webglFramebuffer[ge],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);A(b,Ce)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const ge=R.texture;for(let Se=0,Be=ge.length;Se<Be;Se++){const et=ge[Se],se=n.get(et);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),Z(s.TEXTURE_2D,et,Ce),Ee(V.__webglFramebuffer,R,et,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),A(et,Ce)&&M(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ge=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ue.__webglTexture),Z(ge,b,Ce),a&&b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)Ee(V.__webglFramebuffer[Se],R,b,s.COLOR_ATTACHMENT0,ge,Se);else Ee(V.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,ge,0);A(b,Ce)&&M(ge),t.unbindTexture()}R.depthBuffer&&Fe(R)}function Gt(R){const b=g(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ue=0,ae=V.length;ue<ae;ue++){const he=V[ue];if(A(he,b)){const Ce=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ge=n.get(he).__webglTexture;t.bindTexture(Ce,ge),M(Ce),t.unbindTexture()}}}function De(R){if(a&&R.samples>0&&we(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,ue=R.height;let ae=s.COLOR_BUFFER_BIT;const he=[],Ce=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(R),Se=R.isWebGLMultipleRenderTargets===!0;if(Se)for(let Be=0;Be<b.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Be=0;Be<b.length;Be++){he.push(s.COLOR_ATTACHMENT0+Be),R.depthBuffer&&he.push(Ce);const et=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(et===!1&&(R.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),Se&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[Be]),et===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ce]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ce])),Se){const se=n.get(b[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,V,ue,0,0,V,ue,ae,s.NEAREST),u&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Be=0;Be<b.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,ge.__webglColorRenderbuffer[Be]);const et=n.get(b[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Ve(R){return Math.min(i.maxSamples,R.samples)}function we(R){const b=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function gt(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Qe(R,b){const V=R.colorSpace,ue=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ec||V!==Kt&&V!==wn&&(vt.getTransfer(V)===It?a===!1?e.has("EXT_sRGB")===!0&&ue===An?(R.format=ec,R.minFilter=dn,R.generateMipmaps=!1):b=Jh.sRGBToLinear(b):(ue!==An||ae!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}this.allocateTextureUnit=F,this.resetTextureUnits=le,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=ot,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=we}function N0(s,e,t){const n=t.isWebGL2;function i(r,o=wn){let a;const l=vt.getTransfer(o);if(r===Ci)return s.UNSIGNED_BYTE;if(r===Hh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tm)return s.BYTE;if(r===nm)return s.SHORT;if(r===lc)return s.UNSIGNED_SHORT;if(r===kh)return s.INT;if(r===Si)return s.UNSIGNED_INT;if(r===ai)return s.FLOAT;if(r===yr)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===im)return s.ALPHA;if(r===An)return s.RGBA;if(r===sm)return s.LUMINANCE;if(r===rm)return s.LUMINANCE_ALPHA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===ec)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===om)return s.RED;if(r===Gh)return s.RED_INTEGER;if(r===am)return s.RG;if(r===Vh)return s.RG_INTEGER;if(r===Wh)return s.RGBA_INTEGER;if(r===la||r===ua||r===ha||r===da)if(l===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xl||r===jl||r===ql||r===Yl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ql)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kl||r===$l)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Kl)return l===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$l)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zl||r===Jl||r===Ql||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===cu||r===lu||r===uu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zl)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jl)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ql)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eu)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tu)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nu)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===iu)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===su)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ru)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ou)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===au)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cu)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lu)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uu)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fa||r===hu||r===du)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fa)return l===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===du)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cm||r===fu||r===pu||r===mu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$i?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class U0 extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ti extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),p=this._getHandJoint(u,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),_=.02,x=.005;u.inputState.pinching&&f>_+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=_-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class F0 extends is{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,_=null,x=null;const y=t.getContextAttributes();let g=null,p=null;const A=[],M=[],w=new Xe;let N=null;const D=new an;D.layers.enable(1),D.viewport=new wt;const L=new an;L.layers.enable(2),L.viewport=new wt;const q=[D,L],S=new U0;S.layers.enable(1),S.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=A[Z];return re===void 0&&(re=new Fa,A[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=A[Z];return re===void 0&&(re=new Fa,A[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=A[Z];return re===void 0&&(re=new Fa,A[Z]=re),re.getHandSpace()};function J(Z){const re=M.indexOf(Z.inputSource);if(re===-1)return;const ve=A[re];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,u||o),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function le(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",le),i.removeEventListener("inputsourceschange",F);for(let Z=0;Z<A.length;Z++){const re=M[Z];re!==null&&(M[Z]=null,A[Z].disconnect(re))}C=null,Y=null,e.setRenderTarget(g),_=null,f=null,d=null,i=null,p=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",le),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),p=new es(_.framebufferWidth,_.framebufferHeight,{format:An,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let re=null,ve=null,Le=null;y.depth&&(Le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?Ws:Zi,ve=y.stencil?$i:Si);const Ee={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new es(f.textureWidth,f.textureHeight,{format:An,type:Ci,depthTexture:new ld(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const We=e.properties.get(p);We.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(Z){for(let re=0;re<Z.removed.length;re++){const ve=Z.removed[re],Le=M.indexOf(ve);Le>=0&&(M[Le]=null,A[Le].disconnect(ve))}for(let re=0;re<Z.added.length;re++){const ve=Z.added[re];let Le=M.indexOf(ve);if(Le===-1){for(let We=0;We<A.length;We++)if(We>=M.length){M.push(ve),Le=We;break}else if(M[We]===null){M[We]=ve,Le=We;break}if(Le===-1)break}const Ee=A[Le];Ee&&Ee.connect(ve)}}const j=new U,$=new U;function ee(Z,re,ve){j.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(ve.matrixWorld);const Le=j.distanceTo($),Ee=re.projectionMatrix.elements,We=ve.projectionMatrix.elements,oe=Ee[14]/(Ee[10]-1),Fe=Ee[14]/(Ee[10]+1),ot=(Ee[9]+1)/Ee[5],X=(Ee[9]-1)/Ee[5],Gt=(Ee[8]-1)/Ee[0],De=(We[8]+1)/We[0],Ve=oe*Gt,we=oe*De,gt=Le/(-Gt+De),Qe=gt*-Gt;re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qe),Z.translateZ(gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const R=oe+gt,b=Fe+gt,V=Ve-Qe,ue=we+(Le-Qe),ae=ot*Fe/b*R,he=X*Fe/b*R;Z.projectionMatrix.makePerspective(V,ue,ae,he,R,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function Q(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;S.near=L.near=D.near=Z.near,S.far=L.far=D.far=Z.far,(C!==S.near||Y!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,Y=S.far);const re=Z.parent,ve=S.cameras;Q(S,re);for(let Le=0;Le<ve.length;Le++)Q(ve[Le],re);ve.length===2?ee(S,D,L):S.projectionMatrix.copy(D.projectionMatrix),te(Z,S,re)};function te(Z,re,ve){ve===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=js*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Z)};let ne=null;function B(Z,re){if(h=re.getViewerPose(u||o),x=re,h!==null){const ve=h.views;_!==null&&(e.setRenderTargetFramebuffer(p,_.framebuffer),e.setRenderTarget(p));let Le=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,Le=!0);for(let Ee=0;Ee<ve.length;Ee++){const We=ve[Ee];let oe=null;if(_!==null)oe=_.getViewport(We);else{const ot=d.getViewSubImage(f,We);oe=ot.viewport,Ee===0&&(e.setRenderTargetTextures(p,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(p))}let Fe=q[Ee];Fe===void 0&&(Fe=new an,Fe.layers.enable(Ee),Fe.viewport=new wt,q[Ee]=Fe),Fe.matrix.fromArray(We.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(We.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(oe.x,oe.y,oe.width,oe.height),Ee===0&&(S.matrix.copy(Fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Le===!0&&S.cameras.push(Fe)}}for(let ve=0;ve<A.length;ve++){const Le=M[ve],Ee=A[ve];Le!==null&&Ee!==void 0&&Ee.update(Le,re,u||o)}ne&&ne(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),x=null}const pe=new cd;pe.setAnimationLoop(B),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}}function B0(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,rd(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,A,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&_(g,p,w)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,A,M):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=e.get(p).envMap;if(A&&(g.envMap.value=A,g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function _(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,M){const w=M.program;n.uniformBlockBinding(A,w)}function u(A,M){let w=i[A.id];w===void 0&&(x(A),w=h(A),i[A.id]=w,A.addEventListener("dispose",g));const N=M.program;n.updateUBOMapping(A,N);const D=e.render.frame;r[A.id]!==D&&(f(A),r[A.id]=D)}function h(A){const M=d();A.__bindingPointIndex=M;const w=s.createBuffer(),N=A.__size,D=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,N,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const M=i[A.id],w=A.uniforms,N=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let D=0,L=w.length;D<L;D++){const q=Array.isArray(w[D])?w[D]:[w[D]];for(let S=0,C=q.length;S<C;S++){const Y=q[S];if(_(Y,D,S,N)===!0){const J=Y.__offset,le=Array.isArray(Y.value)?Y.value:[Y.value];let F=0;for(let j=0;j<le.length;j++){const $=le[j],ee=y($);typeof $=="number"||typeof $=="boolean"?(Y.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,J+F,Y.__data)):$.isMatrix3?(Y.__data[0]=$.elements[0],Y.__data[1]=$.elements[1],Y.__data[2]=$.elements[2],Y.__data[3]=0,Y.__data[4]=$.elements[3],Y.__data[5]=$.elements[4],Y.__data[6]=$.elements[5],Y.__data[7]=0,Y.__data[8]=$.elements[6],Y.__data[9]=$.elements[7],Y.__data[10]=$.elements[8],Y.__data[11]=0):($.toArray(Y.__data,F),F+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,Y.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(A,M,w,N){const D=A.value,L=M+"_"+w;if(N[L]===void 0)return typeof D=="number"||typeof D=="boolean"?N[L]=D:N[L]=D.clone(),!0;{const q=N[L];if(typeof D=="number"||typeof D=="boolean"){if(q!==D)return N[L]=D,!0}else if(q.equals(D)===!1)return q.copy(D),!0}return!1}function x(A){const M=A.uniforms;let w=0;const N=16;for(let L=0,q=M.length;L<q;L++){const S=Array.isArray(M[L])?M[L]:[M[L]];for(let C=0,Y=S.length;C<Y;C++){const J=S[C],le=Array.isArray(J.value)?J.value:[J.value];for(let F=0,j=le.length;F<j;F++){const $=le[F],ee=y($),Q=w%N;Q!==0&&N-Q<ee.boundary&&(w+=N-Q),J.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=ee.storage}}}const D=w%N;return D>0&&(w+=N-D),A.__size=w,A.__cache={},this}function y(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function g(A){const M=A.target;M.removeEventListener("dispose",g);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:l,update:u,dispose:p}}class md{constructor(e={}){const{canvas:t=Um(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const _=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const p=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const M=this;let w=!1,N=0,D=0,L=null,q=-1,S=null;const C=new wt,Y=new wt;let J=null;const le=new tt(0);let F=0,j=t.width,$=t.height,ee=1,Q=null,te=null;const ne=new wt(0,0,j,$),B=new wt(0,0,j,$);let pe=!1;const Z=new dc;let re=!1,ve=!1,Le=null;const Ee=new ft,We=new Xe,oe=new U,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return L===null?ee:1}let X=n;function Gt(T,H){for(let z=0;z<T.length;z++){const W=T[z],G=t.getContext(W,H);if(G!==null)return G}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",fe,!1),X===null){const H=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&H.shift(),X=Gt(H,T),X===null)throw Gt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let De,Ve,we,gt,Qe,R,b,V,ue,ae,he,Ce,ge,Se,Be,et,se,ct,je,ze,Ne,Me,P,de;function Ie(){De=new Kv(X),Ve=new Vv(X,De,e),De.init(Ve),Me=new N0(X,De,Ve),we=new D0(X,De,Ve),gt=new Jv(X),Qe=new v0,R=new I0(X,De,we,Qe,Ve,Me,gt),b=new Xv(M),V=new Yv(M),ue=new og(X,Ve),P=new zv(X,De,ue,Ve),ae=new $v(X,ue,gt,P),he=new nx(X,ae,ue,gt),je=new tx(X,Ve,R),et=new Wv(Qe),Ce=new _0(M,b,V,De,Ve,P,et),ge=new B0(M,Qe),Se=new y0,Be=new A0(De,Ve),ct=new Hv(M,b,V,we,he,f,l),se=new P0(M,he,Ve),de=new k0(X,gt,Ve,we),ze=new Gv(X,De,gt,Ve),Ne=new Zv(X,De,gt,Ve),gt.programs=Ce.programs,M.capabilities=Ve,M.extensions=De,M.properties=Qe,M.renderLists=Se,M.shadowMap=se,M.state=we,M.info=gt}Ie();const Te=new F0(M,X);this.xr=Te,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=De.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=De.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(j,$,!1))},this.getSize=function(T){return T.set(j,$)},this.setSize=function(T,H,z=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,$=H,t.width=Math.floor(T*ee),t.height=Math.floor(H*ee),z===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(j*ee,$*ee).floor()},this.setDrawingBufferSize=function(T,H,z){j=T,$=H,ee=z,t.width=Math.floor(T*z),t.height=Math.floor(H*z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,H,z,W){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,H,z,W),we.viewport(C.copy(ne).multiplyScalar(ee).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,H,z,W){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,H,z,W),we.scissor(Y.copy(B).multiplyScalar(ee).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(T){we.setScissorTest(pe=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(T=!0,H=!0,z=!0){let W=0;if(T){let G=!1;if(L!==null){const me=L.texture.format;G=me===Wh||me===Vh||me===Gh}if(G){const me=L.texture.type,Pe=me===Ci||me===Si||me===lc||me===$i||me===Hh||me===zh,Oe=ct.getClearColor(),ke=ct.getClearAlpha(),qe=Oe.r,Ke=Oe.g,$e=Oe.b;Pe?(_[0]=qe,_[1]=Ke,_[2]=$e,_[3]=ke,X.clearBufferuiv(X.COLOR,0,_)):(x[0]=qe,x[1]=Ke,x[2]=$e,x[3]=ke,X.clearBufferiv(X.COLOR,0,x))}else W|=X.COLOR_BUFFER_BIT}H&&(W|=X.DEPTH_BUFFER_BIT),z&&(W|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Se.dispose(),Be.dispose(),Qe.dispose(),b.dispose(),V.dispose(),he.dispose(),P.dispose(),de.dispose(),Ce.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ut),Te.removeEventListener("sessionend",at),Le&&(Le.dispose(),Le=null),Rt.stop()};function ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=gt.autoReset,H=se.enabled,z=se.autoUpdate,W=se.needsUpdate,G=se.type;Ie(),gt.autoReset=T,se.enabled=H,se.autoUpdate=z,se.needsUpdate=W,se.type=G}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xe(T){const H=T.target;H.removeEventListener("dispose",xe),He(H)}function He(T){Ue(T),Qe.remove(T)}function Ue(T){const H=Qe.get(T).programs;H!==void 0&&(H.forEach(function(z){Ce.releaseProgram(z)}),T.isShaderMaterial&&Ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,z,W,G,me){H===null&&(H=Fe);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Oe=No(T,H,z,W,G);we.setMaterial(W,Pe);let ke=z.index,qe=1;if(W.wireframe===!0){if(ke=ae.getWireframeAttribute(z),ke===void 0)return;qe=2}const Ke=z.drawRange,$e=z.attributes.position;let bt=Ke.start*qe,Qt=(Ke.start+Ke.count)*qe;me!==null&&(bt=Math.max(bt,me.start*qe),Qt=Math.min(Qt,(me.start+me.count)*qe)),ke!==null?(bt=Math.max(bt,0),Qt=Math.min(Qt,ke.count)):$e!=null&&(bt=Math.max(bt,0),Qt=Math.min(Qt,$e.count));const Ft=Qt-bt;if(Ft<0||Ft===1/0)return;P.setup(G,W,Oe,z,ke);let pn,Ct=ze;if(ke!==null&&(pn=ue.get(ke),Ct=Ne,Ct.setIndex(pn)),G.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*ot()),Ct.setMode(X.LINES)):Ct.setMode(X.TRIANGLES);else if(G.isLine){let nt=W.linewidth;nt===void 0&&(nt=1),we.setLineWidth(nt*ot()),G.isLineSegments?Ct.setMode(X.LINES):G.isLineLoop?Ct.setMode(X.LINE_LOOP):Ct.setMode(X.LINE_STRIP)}else G.isPoints?Ct.setMode(X.POINTS):G.isSprite&&Ct.setMode(X.TRIANGLES);if(G.isBatchedMesh)Ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ct.renderInstances(bt,Ft,G.count);else if(z.isInstancedBufferGeometry){const nt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,rs=Math.min(z.instanceCount,nt);Ct.renderInstances(bt,Ft,rs)}else Ct.render(bt,Ft)};function lt(T,H,z){T.transparent===!0&&T.side===Vn&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,hi(T,H,z),T.side=li,T.needsUpdate=!0,hi(T,H,z),T.side=Vn):hi(T,H,z)}this.compile=function(T,H,z=null){z===null&&(z=T),g=Be.get(z),g.init(),A.push(g),z.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),T!==z&&T.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(M._useLegacyLights);const W=new Set;return T.traverse(function(G){const me=G.material;if(me)if(Array.isArray(me))for(let Pe=0;Pe<me.length;Pe++){const Oe=me[Pe];lt(Oe,z,G),W.add(Oe)}else lt(me,z,G),W.add(me)}),A.pop(),g=null,W},this.compileAsync=function(T,H,z=null){const W=this.compile(T,H,z);return new Promise(G=>{function me(){if(W.forEach(function(Pe){Qe.get(Pe).currentProgram.isReady()&&W.delete(Pe)}),W.size===0){G(T);return}setTimeout(me,10)}De.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ut=null;function Nt(T){ut&&ut(T)}function Ut(){Rt.stop()}function at(){Rt.start()}const Rt=new cd;Rt.setAnimationLoop(Nt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(T){ut=T,Te.setAnimationLoop(T),T===null?Rt.stop():Rt.start()},Te.addEventListener("sessionstart",Ut),Te.addEventListener("sessionend",at),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(H),H=Te.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,H,L),g=Be.get(T,A.length),g.init(),A.push(g),Ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Z.setFromProjectionMatrix(Ee),ve=this.localClippingEnabled,re=et.init(this.clippingPlanes,ve),y=Se.get(T,p.length),y.init(),p.push(y),vn(T,H,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(Q,te),this.info.render.frame++,re===!0&&et.beginShadows();const z=g.state.shadowsArray;if(se.render(z,T,H),re===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(y,T),g.setupLights(M._useLegacyLights),H.isArrayCamera){const W=H.cameras;for(let G=0,me=W.length;G<me;G++){const Pe=W[G];Ar(y,T,Pe,Pe.viewport)}}else Ar(y,T,H);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(M,T,H),P.resetDefaultState(),q=-1,S=null,A.pop(),A.length>0?g=A[A.length-1]:g=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function vn(T,H,z,W){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){W&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const Pe=he.update(T),Oe=T.material;Oe.visible&&y.push(T,Pe,Oe,z,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const Pe=he.update(T),Oe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),oe.copy(Pe.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(Oe)){const ke=Pe.groups;for(let qe=0,Ke=ke.length;qe<Ke;qe++){const $e=ke[qe],bt=Oe[$e.materialIndex];bt&&bt.visible&&y.push(T,Pe,bt,z,oe.z,$e)}}else Oe.visible&&y.push(T,Pe,Oe,z,oe.z,null)}}const me=T.children;for(let Pe=0,Oe=me.length;Pe<Oe;Pe++)vn(me[Pe],H,z,W)}function Ar(T,H,z,W){const G=T.opaque,me=T.transmissive,Pe=T.transparent;g.setupLightsView(z),re===!0&&et.setGlobalState(M.clippingPlanes,z),me.length>0&&Io(G,me,H,z),W&&we.viewport(C.copy(W)),G.length>0&&ss(G,H,z),me.length>0&&ss(me,H,z),Pe.length>0&&ss(Pe,H,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Io(T,H,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const me=Ve.isWebGL2;Le===null&&(Le=new es(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?yr:Ci,minFilter:Qi,samples:me?4:0})),M.getDrawingBufferSize(We),me?Le.setSize(We.x,We.y):Le.setSize(wo(We.x),wo(We.y));const Pe=M.getRenderTarget();M.setRenderTarget(Le),M.getClearColor(le),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear();const Oe=M.toneMapping;M.toneMapping=Ri,ss(T,z,W),R.updateMultisampleRenderTarget(Le),R.updateRenderTargetMipmap(Le);let ke=!1;for(let qe=0,Ke=H.length;qe<Ke;qe++){const $e=H[qe],bt=$e.object,Qt=$e.geometry,Ft=$e.material,pn=$e.group;if(Ft.side===Vn&&bt.layers.test(W.layers)){const Ct=Ft.side;Ft.side=fn,Ft.needsUpdate=!0,wr(bt,z,W,Qt,Ft,pn),Ft.side=Ct,Ft.needsUpdate=!0,ke=!0}}ke===!0&&(R.updateMultisampleRenderTarget(Le),R.updateRenderTargetMipmap(Le)),M.setRenderTarget(Pe),M.setClearColor(le,F),M.toneMapping=Oe}function ss(T,H,z){const W=H.isScene===!0?H.overrideMaterial:null;for(let G=0,me=T.length;G<me;G++){const Pe=T[G],Oe=Pe.object,ke=Pe.geometry,qe=W===null?Pe.material:W,Ke=Pe.group;Oe.layers.test(z.layers)&&wr(Oe,H,z,ke,qe,Ke)}}function wr(T,H,z,W,G,me){T.onBeforeRender(M,H,z,W,G,me),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(M,H,z,W,T,me),G.transparent===!0&&G.side===Vn&&G.forceSinglePass===!1?(G.side=fn,G.needsUpdate=!0,M.renderBufferDirect(z,H,W,G,T,me),G.side=li,G.needsUpdate=!0,M.renderBufferDirect(z,H,W,G,T,me),G.side=Vn):M.renderBufferDirect(z,H,W,G,T,me),T.onAfterRender(M,H,z,W,G,me)}function hi(T,H,z){H.isScene!==!0&&(H=Fe);const W=Qe.get(T),G=g.state.lights,me=g.state.shadowsArray,Pe=G.state.version,Oe=Ce.getParameters(T,G.state,me,H,z),ke=Ce.getProgramCacheKey(Oe);let qe=W.programs;W.environment=T.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(T.isMeshStandardMaterial?V:b).get(T.envMap||W.environment),qe===void 0&&(T.addEventListener("dispose",xe),qe=new Map,W.programs=qe);let Ke=qe.get(ke);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Pe)return Pi(T,Oe),Ke}else Oe.uniforms=Ce.getUniforms(T),T.onBuild(z,Oe,M),T.onBeforeCompile(Oe,M),Ke=Ce.acquireProgram(Oe,ke),qe.set(ke,Ke),W.uniforms=Oe.uniforms;const $e=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=et.uniform),Pi(T,Oe),W.needsLights=Uo(T),W.lightsStateVersion=Pe,W.needsLights&&($e.ambientLightColor.value=G.state.ambient,$e.lightProbe.value=G.state.probe,$e.directionalLights.value=G.state.directional,$e.directionalLightShadows.value=G.state.directionalShadow,$e.spotLights.value=G.state.spot,$e.spotLightShadows.value=G.state.spotShadow,$e.rectAreaLights.value=G.state.rectArea,$e.ltc_1.value=G.state.rectAreaLTC1,$e.ltc_2.value=G.state.rectAreaLTC2,$e.pointLights.value=G.state.point,$e.pointLightShadows.value=G.state.pointShadow,$e.hemisphereLights.value=G.state.hemi,$e.directionalShadowMap.value=G.state.directionalShadowMap,$e.directionalShadowMatrix.value=G.state.directionalShadowMatrix,$e.spotShadowMap.value=G.state.spotShadowMap,$e.spotLightMatrix.value=G.state.spotLightMatrix,$e.spotLightMap.value=G.state.spotLightMap,$e.pointShadowMap.value=G.state.pointShadowMap,$e.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Ke,W.uniformsList=null,Ke}function $n(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=yo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Pi(T,H){const z=Qe.get(T);z.outputColorSpace=H.outputColorSpace,z.batching=H.batching,z.instancing=H.instancing,z.instancingColor=H.instancingColor,z.skinning=H.skinning,z.morphTargets=H.morphTargets,z.morphNormals=H.morphNormals,z.morphColors=H.morphColors,z.morphTargetsCount=H.morphTargetsCount,z.numClippingPlanes=H.numClippingPlanes,z.numIntersection=H.numClipIntersection,z.vertexAlphas=H.vertexAlphas,z.vertexTangents=H.vertexTangents,z.toneMapping=H.toneMapping}function No(T,H,z,W,G){H.isScene!==!0&&(H=Fe),R.resetTextureUnits();const me=H.fog,Pe=W.isMeshStandardMaterial?H.environment:null,Oe=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Kt,ke=(W.isMeshStandardMaterial?V:b).get(W.envMap||Pe),qe=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ke=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),$e=!!z.morphAttributes.position,bt=!!z.morphAttributes.normal,Qt=!!z.morphAttributes.color;let Ft=Ri;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ft=M.toneMapping);const pn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ct=pn!==void 0?pn.length:0,nt=Qe.get(W),rs=g.state.lights;if(re===!0&&(ve===!0||T!==S)){const Lt=T===S&&W.id===q;et.setState(W,T,Lt)}let Dt=!1;W.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==rs.state.version||nt.outputColorSpace!==Oe||G.isBatchedMesh&&nt.batching===!1||!G.isBatchedMesh&&nt.batching===!0||G.isInstancedMesh&&nt.instancing===!1||!G.isInstancedMesh&&nt.instancing===!0||G.isSkinnedMesh&&nt.skinning===!1||!G.isSkinnedMesh&&nt.skinning===!0||G.isInstancedMesh&&nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&nt.instancingColor===!1&&G.instanceColor!==null||nt.envMap!==ke||W.fog===!0&&nt.fog!==me||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==et.numPlanes||nt.numIntersection!==et.numIntersection)||nt.vertexAlphas!==qe||nt.vertexTangents!==Ke||nt.morphTargets!==$e||nt.morphNormals!==bt||nt.morphColors!==Qt||nt.toneMapping!==Ft||Ve.isWebGL2===!0&&nt.morphTargetsCount!==Ct)&&(Dt=!0):(Dt=!0,nt.__version=W.version);let Fn=nt.currentProgram;Dt===!0&&(Fn=hi(W,H,G));let tr=!1,di=!1,os=!1;const Vt=Fn.getUniforms(),Bn=nt.uniforms;if(we.useProgram(Fn.program)&&(tr=!0,di=!0,os=!0),W.id!==q&&(q=W.id,di=!0),tr||S!==T){Vt.setValue(X,"projectionMatrix",T.projectionMatrix),Vt.setValue(X,"viewMatrix",T.matrixWorldInverse);const Lt=Vt.map.cameraPosition;Lt!==void 0&&Lt.setValue(X,oe.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&Vt.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Vt.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,di=!0,os=!0)}if(G.isSkinnedMesh){Vt.setOptional(X,G,"bindMatrix"),Vt.setOptional(X,G,"bindMatrixInverse");const Lt=G.skeleton;Lt&&(Ve.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),Vt.setValue(X,"boneTexture",Lt.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Vt.setOptional(X,G,"batchingTexture"),Vt.setValue(X,"batchingTexture",G._matricesTexture,R));const un=z.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0&&Ve.isWebGL2===!0)&&je.update(G,z,Fn),(di||nt.receiveShadow!==G.receiveShadow)&&(nt.receiveShadow=G.receiveShadow,Vt.setValue(X,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Bn.envMap.value=ke,Bn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),di&&(Vt.setValue(X,"toneMappingExposure",M.toneMappingExposure),nt.needsLights&&er(Bn,os),me&&W.fog===!0&&ge.refreshFogUniforms(Bn,me),ge.refreshMaterialUniforms(Bn,W,ee,$,Le),yo.upload(X,$n(nt),Bn,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(yo.upload(X,$n(nt),Bn,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Vt.setValue(X,"center",G.center),Vt.setValue(X,"modelViewMatrix",G.modelViewMatrix),Vt.setValue(X,"normalMatrix",G.normalMatrix),Vt.setValue(X,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Lt=W.uniformsGroups;for(let Cn=0,hn=Lt.length;Cn<hn;Cn++)if(Ve.isWebGL2){const as=Lt[Cn];de.update(as,Fn),de.bind(as,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function er(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Uo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,H,z){Qe.get(T.texture).__webglTexture=H,Qe.get(T.depthTexture).__webglTexture=z;const W=Qe.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const z=Qe.get(T);z.__webglFramebuffer=H,z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,z=0){L=T,N=H,D=z;let W=!0,G=null,me=!1,Pe=!1;if(T){const ke=Qe.get(T);ke.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(X.FRAMEBUFFER,null),W=!1):ke.__webglFramebuffer===void 0?R.setupRenderTarget(T):ke.__hasExternalTextures&&R.rebindTextures(T,Qe.get(T.texture).__webglTexture,Qe.get(T.depthTexture).__webglTexture);const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const Ke=Qe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?G=Ke[H][z]:G=Ke[H],me=!0):Ve.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?G=Qe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?G=Ke[z]:G=Ke,C.copy(T.viewport),Y.copy(T.scissor),J=T.scissorTest}else C.copy(ne).multiplyScalar(ee).floor(),Y.copy(B).multiplyScalar(ee).floor(),J=pe;if(we.bindFramebuffer(X.FRAMEBUFFER,G)&&Ve.drawBuffers&&W&&we.drawBuffers(T,G),we.viewport(C),we.scissor(Y),we.setScissorTest(J),me){const ke=Qe.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke.__webglTexture,z)}else if(Pe){const ke=Qe.get(T.texture),qe=H||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ke.__webglTexture,z||0,qe)}q=-1},this.readRenderTargetPixels=function(T,H,z,W,G,me,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){we.bindFramebuffer(X.FRAMEBUFFER,Oe);try{const ke=T.texture,qe=ke.format,Ke=ke.type;if(qe!==An&&Me.convert(qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ke===yr&&(De.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&De.has("EXT_color_buffer_float"));if(Ke!==Ci&&Me.convert(Ke)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===ai&&(Ve.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-W&&z>=0&&z<=T.height-G&&X.readPixels(H,z,W,G,Me.convert(qe),Me.convert(Ke),me)}finally{const ke=L!==null?Qe.get(L).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(T,H,z=0){const W=Math.pow(2,-z),G=Math.floor(H.image.width*W),me=Math.floor(H.image.height*W);R.setTexture2D(H,0),X.copyTexSubImage2D(X.TEXTURE_2D,z,0,0,T.x,T.y,G,me),we.unbindTexture()},this.copyTextureToTexture=function(T,H,z,W=0){const G=H.image.width,me=H.image.height,Pe=Me.convert(z.format),Oe=Me.convert(z.type);R.setTexture2D(z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,z.unpackAlignment),H.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,T.x,T.y,G,me,Pe,Oe,H.image.data):H.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Pe,H.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,W,T.x,T.y,Pe,Oe,H.image),W===0&&z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,H,z,W,G=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=T.max.x-T.min.x+1,Pe=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,ke=Me.convert(W.format),qe=Me.convert(W.type);let Ke;if(W.isData3DTexture)R.setTexture3D(W,0),Ke=X.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Ke=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const $e=X.getParameter(X.UNPACK_ROW_LENGTH),bt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Qt=X.getParameter(X.UNPACK_SKIP_PIXELS),Ft=X.getParameter(X.UNPACK_SKIP_ROWS),pn=X.getParameter(X.UNPACK_SKIP_IMAGES),Ct=z.isCompressedTexture?z.mipmaps[G]:z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ct.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ct.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,T.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,T.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?X.texSubImage3D(Ke,G,H.x,H.y,H.z,me,Pe,Oe,ke,qe,Ct.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ke,G,H.x,H.y,H.z,me,Pe,Oe,ke,Ct.data)):X.texSubImage3D(Ke,G,H.x,H.y,H.z,me,Pe,Oe,ke,qe,Ct),X.pixelStorei(X.UNPACK_ROW_LENGTH,$e),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,bt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ft),X.pixelStorei(X.UNPACK_SKIP_IMAGES,pn),G===0&&W.generateMipmaps&&X.generateMipmap(Ke),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){N=0,D=0,L=null,we.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uc?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===Co?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Ji:qh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ji?kt:Kt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class H0 extends md{}H0.prototype.isWebGL1Renderer=!0;class z0 extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class G0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new U;class gc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const oh=new U,ah=new wt,ch=new wt,V0=new U,lh=new ft,ho=new U,Ba=new Yn,uh=new ft,ka=new Sr;class W0 extends Zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wl,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(i),e.ray.intersectsSphere(Ba)!==!1&&(uh.copy(i).invert(),ka.copy(e.ray).applyMatrix4(uh),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===em?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ah.fromBufferAttribute(i.attributes.skinIndex,e),ch.fromBufferAttribute(i.attributes.skinWeight,e),oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ch.getComponent(r);if(o!==0){const a=ah.getComponent(r);lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(V0.copy(oh).applyMatrix4(lh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class gd extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class X0 extends Jt{constructor(e=null,t=1,n=1,i,r,o,a,l,u=Yt,h=Yt,d,f){super(null,o,a,l,u,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hh=new ft,j0=new ft;class _c{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:j0;hh.multiplyMatrices(a,t[r]),hh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new _c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new X0(t,e,e,An,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gd),this.bones.push(o),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ic extends cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new ft,dh=new ft,fo=[],fh=new qn,q0=new ft,dr=new Zt,fr=new Yn;class Y0 extends Zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,q0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),fh.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),fr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Is),dh.multiplyMatrices(n,Is),dr.matrixWorld=dh,dr.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const l=fo[o];l.instanceId=r,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _d extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ph=new U,mh=new U,gh=new ft,Ha=new Sr,po=new Yn;class vc extends Ot{constructor(e=new Rn,t=new _d){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ph.fromBufferAttribute(t,i-1),mh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ph.distanceTo(mh);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;gh.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new U,h=new U,d=new U,f=new U,_=this.isLineSegments?2:1,x=n.index,g=n.attributes.position;if(x!==null){const p=Math.max(0,o.start),A=Math.min(x.count,o.start+o.count);for(let M=p,w=A-1;M<w;M+=_){const N=x.getX(M),D=x.getX(M+1);if(u.fromBufferAttribute(g,N),h.fromBufferAttribute(g,D),Ha.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const q=e.ray.origin.distanceTo(f);q<e.near||q>e.far||t.push({distance:q,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let M=p,w=A-1;M<w;M+=_){if(u.fromBufferAttribute(g,M),h.fromBufferAttribute(g,M+1),Ha.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const _h=new U,vh=new U;class K0 extends vc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_h.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_h.distanceTo(vh);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $0 extends vc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vd extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xh=new ft,sc=new Sr,mo=new Yn,go=new U;class Z0 extends Ot{constructor(e=new Rn,t=new vd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;xh.copy(i).invert(),sc.copy(e.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=f,y=_;x<y;x++){const g=u.getX(x);go.fromBufferAttribute(d,g),yh(go,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=f,y=_;x<y;x++)go.fromBufferAttribute(d,x),yh(go,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yh(s,e,t,n,i,r,o){const a=sc.distanceSqToPoint(s);if(a<t){const l=new U;sc.closestPointToPoint(s,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class xc extends Rn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],_=[];let x=0;const y=[],g=n/2;let p=0;A(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(f,3)),this.setAttribute("uv",new ln(_,2));function A(){const w=new U,N=new U;let D=0;const L=(t-e)/n;for(let q=0;q<=r;q++){const S=[],C=q/r,Y=C*(t-e)+e;for(let J=0;J<=i;J++){const le=J/i,F=le*l+a,j=Math.sin(F),$=Math.cos(F);N.x=Y*j,N.y=-C*n+g,N.z=Y*$,d.push(N.x,N.y,N.z),w.set(j,L,$).normalize(),f.push(w.x,w.y,w.z),_.push(le,1-C),S.push(x++)}y.push(S)}for(let q=0;q<i;q++)for(let S=0;S<r;S++){const C=y[S][q],Y=y[S+1][q],J=y[S+1][q+1],le=y[S][q+1];h.push(C,Y,le),h.push(Y,J,le),D+=6}u.addGroup(p,D,0),p+=D}function M(w){const N=x,D=new Xe,L=new U;let q=0;const S=w===!0?e:t,C=w===!0?1:-1;for(let J=1;J<=i;J++)d.push(0,g*C,0),f.push(0,C,0),_.push(.5,.5),x++;const Y=x;for(let J=0;J<=i;J++){const F=J/i*l+a,j=Math.cos(F),$=Math.sin(F);L.x=S*$,L.y=g*C,L.z=S*j,d.push(L.x,L.y,L.z),f.push(0,C,0),D.x=j*.5+.5,D.y=$*.5*C+.5,_.push(D.x,D.y),x++}for(let J=0;J<i;J++){const le=N+J,F=Y+J;w===!0?h.push(F,F+1,le):h.push(F+1,F,le),q+=3}u.addGroup(p,q,w===!0?1:2),p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yc extends Rn{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],u=[],h=[],d=new U,f=new U,_=new U,x=new U,y=new U,g=new U,p=new U;for(let M=0;M<=n;++M){const w=M/n*r*Math.PI*2;A(w,r,o,e,_),A(w+.01,r,o,e,x),g.subVectors(x,_),p.addVectors(x,_),y.crossVectors(g,p),p.crossVectors(y,g),y.normalize(),p.normalize();for(let N=0;N<=i;++N){const D=N/i*Math.PI*2,L=-t*Math.cos(D),q=t*Math.sin(D);d.x=_.x+(L*p.x+q*y.x),d.y=_.y+(L*p.y+q*y.y),d.z=_.z+(L*p.z+q*y.z),l.push(d.x,d.y,d.z),f.subVectors(d,_).normalize(),u.push(f.x,f.y,f.z),h.push(M/n),h.push(N/i)}}for(let M=1;M<=n;M++)for(let w=1;w<=i;w++){const N=(i+1)*(M-1)+(w-1),D=(i+1)*M+(w-1),L=(i+1)*M+w,q=(i+1)*(M-1)+w;a.push(N,D,q),a.push(D,L,q)}this.setIndex(a),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(h,2));function A(M,w,N,D,L){const q=Math.cos(M),S=Math.sin(M),C=N/w*M,Y=Math.cos(C);L.x=D*(2+Y)*.5*q,L.y=D*(2+Y)*S*.5,L.z=D*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Er extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends Er{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _o(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function J0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Q0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Mh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function xd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ey extends Tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:r=e,a=2*t-n;break;case vu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _u:o=e,l=2*n-t;break;case vu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,_=this._weightNext,x=(n-t)/(i-t),y=x*x,g=y*x,p=-f*g+2*f*y-f*x,A=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*x+1,M=(-1-_)*g+(1.5+_)*y+.5*x,w=_*g-_*y;for(let N=0;N!==a;++N)r[N]=p*o[h+N]+A*o[u+N]+M*o[l+N]+w*o[d+N];return r}}class ty extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[l+f]*h;return r}}class ny extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ny(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ty(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ey(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&J0(i))for(let a=0,l=i.length;a!==l;++a){const u=i[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,_=d+n;for(let x=0;x!==n;++x){const y=t[d+x];if(y!==t[f+x]||y!==t[_+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let _=0;_!==n;++_)t[f+_]=t[d+_]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Xs;class Zs extends Kn{}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Mr;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class yd extends Kn{}yd.prototype.ValueTypeName="color";class Ys extends Kn{}Ys.prototype.ValueTypeName="number";class iy extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let u=e*a;for(let h=u+a;u!==h;u+=4)jn.slerpFlat(r,0,o,u-a,o,u,l);return r}}class ns extends Kn{InterpolantFactoryMethodLinear(e){return new iy(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=Xs;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Kn{}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Mr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Kn{}Ks.prototype.ValueTypeName="vector";class sy{constructor(e,t=-1,n,i=lm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(oy(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=Q0(l);l=Mh(l,1,h),u=Mh(u,1,h),!i&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new Ys(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,_,x,y){if(_.length!==0){const g=[],p=[];xd(_,g,p,x),g.length!==0&&y.push(new d(f,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const _={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let y=0;y<f[x].morphTargets.length;y++)_[f[x].morphTargets[y]]=-1;for(const y in _){const g=[],p=[];for(let A=0;A!==f[x].morphTargets.length;++A){const M=f[x];g.push(M.time),p.push(M.morphTarget===y?1:0)}i.push(new Ys(".morphTargetInfluence["+y+"]",g,p))}l=_.length*o}else{const _=".bones["+t[d].name+"]";n(Ks,_+".position",f,"pos",i),n(ns,_+".quaternion",f,"rot",i),n(Ks,_+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ry(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return yd;case"quaternion":return ns;case"bool":case"boolean":return Zs;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function oy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ry(s.type);if(s.times===void 0){const t=[],n=[];xd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ai={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ay{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const _=u[d],x=u[d+1];if(_.global&&(_.lastIndex=0),_.test(h))return x}return null}}}const cy=new ay;class Qs{constructor(e){this.manager=e!==void 0?e:cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class ly extends Error{constructor(e,t){super(e),this.response=t}}class Md extends Qs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ai.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:i});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=ri[e],d=u.body.getReader(),f=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),_=f?parseInt(f):0,x=_!==0;let y=0;const g=new ReadableStream({start(p){A();function A(){d.read().then(({done:M,value:w})=>{if(M)p.close();else{y+=w.byteLength;const N=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:_});for(let D=0,L=h.length;D<L;D++){const q=h[D];q.onProgress&&q.onProgress(N)}p.enqueue(w),A()}})}}});return new Response(g)}else throw new ly(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,_=new TextDecoder(f);return u.arrayBuffer().then(x=>_.decode(x))}}}).then(u=>{Ai.add(e,u);const h=ri[e];delete ri[e];for(let d=0,f=h.length;d<f;d++){const _=h[d];_.onLoad&&_.onLoad(u)}}).catch(u=>{const h=ri[e];if(h===void 0)throw this.manager.itemError(e),u;delete ri[e];for(let d=0,f=h.length;d<f;d++){const _=h[d];_.onError&&_.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class uy extends Qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=br("img");function l(){h(),Ai.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class hy extends Qs{constructor(e){super(e)}load(e,t,n,i){const r=new Jt,o=new uy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Do extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const za=new ft,bh=new U,Eh=new U;class Mc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dc,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eh),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dy extends Mc{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fy extends Do{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sh=new ft,pr=new U,Ga=new U;class py extends Mc{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),Ga.copy(n.position),Ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ga),n.updateMatrixWorld(),i.makeTranslation(-pr.x,-pr.y,-pr.z),Sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh)}}class my extends Do{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new py}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gy extends Mc{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bd extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new gy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _y extends Do{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vy extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Ai.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),Ai.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(e,l),r.manager.itemStart(e)}}const bc="\\[\\]\\.:\\/",xy=new RegExp("["+bc+"]","g"),Ec="[^"+bc+"]",yy="[^"+bc.replace("\\.","")+"]",My=/((?:WC+[\/:])*)/.source.replace("WC",Ec),by=/(WCOD+)?/.source.replace("WCOD",yy),Ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),Ty=new RegExp("^"+My+by+Ey+Sy+"$"),Ay=["material","materials","bones","map"];class wy{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xy,"")}static parseTrackName(e){const t=Ty.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ay.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=wy;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Th{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);function Ah(s,e){if(e===um)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ja||e===jh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ja)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Ry extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Iy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new jy(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=xr.extractUrlBase(e);o=xr.resolveURL(u,this.path)}else o=xr.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Md(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ed){try{o[pt.KHR_BINARY_GLTF]=new qy(e)}catch(d){i&&i(d);return}r=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new oM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case pt.KHR_MATERIALS_UNLIT:o[d]=new Py;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[d]=new Yy(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[d]=new Ky;break;case pt.KHR_MESH_QUANTIZATION:o[d]=new $y;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Cy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ly{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new tt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new bd(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new my(h),u.distance=d;break;case"spot":u=new fy(h),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,Ei(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Py{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ki}extendParams(e,t,n){const i=[];e.color=new tt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(i)}}class Dy{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Iy{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(r)}}class Ny{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Uy{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Oy{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Fy{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(a[0],a[1],a[2],Kt),Promise.all(r)}}class By{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ky{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(r)}}class Hy{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class zy{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Gy{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Vy{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Wy{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Xy{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,u=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(_){return _.buffer}):o.ready.then(function(){const _=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(_),h,d,f,i.mode,i.filter),_})})}else return null}}class jy{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Sn.TRIANGLES&&u.mode!==Sn.TRIANGLE_STRIP&&u.mode!==Sn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,_=[];for(const x of d){const y=new ft,g=new U,p=new jn,A=new U(1,1,1),M=new Y0(x.geometry,x.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&A.fromBufferAttribute(l.SCALE,w),M.setMatrixAt(w,y.compose(g,p,A));for(const w in l)if(w==="_COLOR_0"){const N=l[w];M.instanceColor=new ic(N.array,N.itemSize,N.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&x.geometry.setAttribute(w,l[w]);Ot.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),_.push(M)}return h.isGroup?(h.clear(),h.add(..._),h):_[0]}))}}const Ed="glTF",mr=12,wh={JSON:1313821514,BIN:5130562};class qy{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ed)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-mr,r=new DataView(e,mr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===wh.JSON){const u=new Uint8Array(e,mr+o,a);this.content=n.decode(u)}else if(l===wh.BIN){const u=mr+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const h in o){const d=rc[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=rc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],_=Hs[f.componentType];u[d]=_.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(_){for(const x in _.attributes){const y=_.attributes[x],g=l[x];g!==void 0&&(y.normalized=g)}d(_)},a,u,Kt,f)})})}}class Ky{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $y{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Sd extends Tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,h=i-t,d=(n-t)/h,f=d*d,_=f*d,x=e*u,y=x-u,g=-2*_+3*f,p=_-f,A=1-g,M=p-f+d;for(let w=0;w!==a;w++){const N=o[y+w+a],D=o[y+w+l]*h,L=o[x+w+a],q=o[x+w]*h;r[w]=A*N+M*D+g*L+p*q}return r}}const Zy=new jn;class Jy extends Sd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Zy.fromArray(r).normalize().toArray(r),r}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rh={9728:Yt,9729:dn,9984:Za,9985:Bh,9986:xo,9987:Qi},Ch={33071:Tn,33648:bo,10497:Vs},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qy={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Mr},Wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),s.DefaultMaterial}function Xi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tM(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function nM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iM(s){let e;const t=s.extensions&&s.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xa(t.attributes):e=s.indices+":"+Xa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xa(s.targets[n]);return e}function Xa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function oc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const rM=new ft;class oM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new hy(this.options.manager):this.textureLoader=new vy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Md(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Xi(r,a,i),Ei(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(xr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Va[i.type],a=Hs[i.componentType],l=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new cn(u,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Va[i.type],u=Hs[i.componentType],h=u.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,_=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let y,g;if(_&&_!==d){const p=Math.floor(f/_),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(A);M||(y=new u(a,p*_,i.count*_/h),M=new G0(y,_/h),t.cache.add(A,M)),g=new gc(M,l,f%_/h,x)}else a===null?y=new u(i.count*l):y=new u(a,f,i.count*l),g=new cn(y,l,x);if(i.sparse!==void 0){const p=Va.SCALAR,A=Hs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,N=new A(o[1],M,i.sparse.count*p),D=new u(o[2],w,i.sparse.count*l);a!==null&&(g=new cn(g.array.slice(),g.itemSize,g.normalized));for(let L=0,q=N.length;L<q;L++){const S=N[L];if(g.setX(S,D[L*l]),l>=2&&g.setY(S,D[L*l+1]),l>=3&&g.setZ(S,D[L*l+2]),l>=4&&g.setW(S,D[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Rh[f.magFilter]||dn,h.minFilter=Rh[f.minFilter]||Qi,h.wrapS=Ch[f.wrapS]||Vs,h.wrapT=Ch[f.wrapT]||Vs,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,_){let x=f;t.isImageBitmapLoader===!0&&(x=function(y){const g=new Jt(y);g.needsUpdate=!0,f(g)}),t.load(xr.resolveURL(d,r.path),x,void 0,_)})}).then(function(d){return u===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||sM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new vd,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _d,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Er}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[pt.KHR_MATERIALS_UNLIT]){const d=i[pt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new tt(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Kt),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,kt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Vn);const h=r.alphaMode||Wa.OPAQUE;if(h===Wa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ki&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Ki&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ki){const d=r.emissiveFactor;a.emissive=new tt().setRGB(d[0],d[1],d[2],Kt)}return r.emissiveTexture!==void 0&&o!==Ki&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,kt)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Ei(d,r),t.associations.set(d,{materials:e}),r.extensions&&Xi(i,d,r),d})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Lh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],h=iM(u),d=i[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=Lh(new Rn,u,t),i[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?eM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let _=0,x=h.length;_<x;_++){const y=h[_],g=o[_];let p;const A=u[_];if(g.mode===Sn.TRIANGLES||g.mode===Sn.TRIANGLE_STRIP||g.mode===Sn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new W0(y,A):new Zt(y,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Sn.TRIANGLE_STRIP?p.geometry=Ah(p.geometry,jh):g.mode===Sn.TRIANGLE_FAN&&(p.geometry=Ah(p.geometry,Ja));else if(g.mode===Sn.LINES)p=new K0(y,A);else if(g.mode===Sn.LINE_STRIP)p=new vc(y,A);else if(g.mode===Sn.LINE_LOOP)p=new $0(y,A);else if(g.mode===Sn.POINTS)p=new Z0(y,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&nM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ei(p,r),g.extensions&&Xi(i,p,g),t.assignFinalMaterial(p),d.push(p)}for(let _=0,x=d.length;_<x;_++)t.associations.set(d[_],{meshes:e,primitives:_});if(d.length===1)return r.extensions&&Xi(i,d[0],r),d[0];const f=new Ti;r.extensions&&Xi(i,f,r),t.associations.set(f,{meshes:e});for(let _=0,x=d.length;_<x;_++)f.add(d[_]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an($h.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new pc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){a.push(d);const f=new ft;r!==null&&f.fromArray(r.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new _c(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],u=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const _=i.channels[d],x=i.samplers[_.sampler],y=_.target,g=y.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,A=i.parameters!==void 0?i.parameters[x.output]:x.output;y.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),u.push(x),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(d){const f=d[0],_=d[1],x=d[2],y=d[3],g=d[4],p=[];for(let A=0,M=f.length;A<M;A++){const w=f[A],N=_[A],D=x[A],L=y[A],q=g[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const S=n._createAnimationTracks(w,N,D,L,q);if(S)for(let C=0;C<S.length;C++)p.push(S[C])}return new sy(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=i.weights.length;l<u;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const h=u[0],d=u[1],f=u[2];f!==null&&h.traverse(function(_){_.isSkinnedMesh&&_.bind(f,rM)});for(let _=0,x=d.length;_<x;_++)h.add(d[_]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new gd:u.length>1?h=new Ti:u.length===1?h=u[0]:h=new Ot,h!==u[0])for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Ei(h,r),r.extensions&&Xi(n,h,r),r.matrix!==void 0){const d=new ft;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ti;n.name&&(r.name=i.createUniqueName(n.name)),Ei(r,n),n.extensions&&Xi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const u=h=>{const d=new Map;for(const[f,_]of i.associations)(f instanceof Xn||f instanceof Jt)&&d.set(f,_);return h.traverse(f=>{const _=i.associations.get(f);_!=null&&d.set(f,_)}),d};return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Mi[r.path]===Mi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let u;switch(Mi[r.path]){case Mi.weights:u=Ys;break;case Mi.rotation:u=ns;break;case Mi.position:case Mi.scale:u=Ks;break;default:switch(n.itemSize){case 1:u=Ys;break;case 2:case 3:default:u=Ks;break}break}const h=i.interpolation!==void 0?Qy[i.interpolation]:Xs,d=this._getArrayFromAccessor(n);for(let f=0,_=l.length;f<_;f++){const x=new u(l[f]+"."+Mi[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=oc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ns?Jy:Sd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aM(s,e,t){const n=e.attributes,i=new qn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(u[0],u[1],u[2])),a.normalized){const h=oc(Hs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],_=f.min,x=f.max;if(_!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(_[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(_[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(_[2]),Math.abs(x[2]))),f.normalized){const y=oc(Hs[f.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Yn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Lh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=rc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return vt.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),Ei(s,e),aM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tM(s,e.targets,t):s})}const Ph={type:"change"},ja={type:"start"},Dh={type:"end"},vo=new Sr,Ih=new bi,cM=Math.cos(70*$h.DEG2RAD);class lM extends is{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Be),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ph),n.update(),r=i.NONE},this.update=function(){const P=new U,de=new jn().setFromUnitVectors(e.up,new U(0,1,0)),Ie=de.clone().invert(),Te=new U,ce=new jn,I=new U,fe=2*Math.PI;return function(He=null){const Ue=n.object.position;P.copy(Ue).sub(n.target),P.applyQuaternion(de),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&J(C(He)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let lt=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(lt)&&isFinite(ut)&&(lt<-Math.PI?lt+=fe:lt>Math.PI&&(lt-=fe),ut<-Math.PI?ut+=fe:ut>Math.PI&&(ut-=fe),lt<=ut?a.theta=Math.max(lt,Math.min(ut,a.theta)):a.theta=a.theta>(lt+ut)/2?Math.max(lt,a.theta):Math.min(ut,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&D||n.object.isOrthographicCamera?a.radius=ne(a.radius):a.radius=ne(a.radius*u),P.setFromSpherical(a),P.applyQuaternion(Ie),Ue.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Nt=!1;if(n.zoomToCursor&&D){let Ut=null;if(n.object.isPerspectiveCamera){const at=P.length();Ut=ne(at*u);const Rt=at-Ut;n.object.position.addScaledVector(w,Rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const at=new U(N.x,N.y,0);at.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Nt=!0;const Rt=new U(N.x,N.y,0);Rt.unproject(n.object),n.object.position.sub(Rt).add(at),n.object.updateMatrixWorld(),Ut=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ut!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ut).add(n.object.position):(vo.origin.copy(n.object.position),vo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(vo.direction))<cM?e.lookAt(n.target):(Ih.setFromNormalAndCoplanarPoint(n.object.up,n.target),vo.intersectPlane(Ih,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Nt=!0);return u=1,D=!1,Nt||Te.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o||I.distanceToSquared(n.target)>0?(n.dispatchEvent(Ph),Te.copy(n.object.position),ce.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ct),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",V),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Be),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Th,l=new Th;let u=1;const h=new U,d=new Xe,f=new Xe,_=new Xe,x=new Xe,y=new Xe,g=new Xe,p=new Xe,A=new Xe,M=new Xe,w=new U,N=new Xe;let D=!1;const L=[],q={};let S=!1;function C(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function Y(P){const de=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*de)}function J(P){l.theta-=P}function le(P){l.phi-=P}const F=function(){const P=new U;return function(Ie,Te){P.setFromMatrixColumn(Te,0),P.multiplyScalar(-Ie),h.add(P)}}(),j=function(){const P=new U;return function(Ie,Te){n.screenSpacePanning===!0?P.setFromMatrixColumn(Te,1):(P.setFromMatrixColumn(Te,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Ie),h.add(P)}}(),$=function(){const P=new U;return function(Ie,Te){const ce=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;P.copy(I).sub(n.target);let fe=P.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),F(2*Ie*fe/ce.clientHeight,n.object.matrix),j(2*Te*fe/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(Ie*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),j(Te*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ee(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(P,de){if(!n.zoomToCursor)return;D=!0;const Ie=n.domElement.getBoundingClientRect(),Te=P-Ie.left,ce=de-Ie.top,I=Ie.width,fe=Ie.height;N.x=Te/I*2-1,N.y=-(ce/fe)*2+1,w.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function ne(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function B(P){d.set(P.clientX,P.clientY)}function pe(P){te(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function Z(P){x.set(P.clientX,P.clientY)}function re(P){f.set(P.clientX,P.clientY),_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const de=n.domElement;J(2*Math.PI*_.x/de.clientHeight),le(2*Math.PI*_.y/de.clientHeight),d.copy(f),n.update()}function ve(P){A.set(P.clientX,P.clientY),M.subVectors(A,p),M.y>0?ee(Y(M.y)):M.y<0&&Q(Y(M.y)),p.copy(A),n.update()}function Le(P){y.set(P.clientX,P.clientY),g.subVectors(y,x).multiplyScalar(n.panSpeed),$(g.x,g.y),x.copy(y),n.update()}function Ee(P){te(P.clientX,P.clientY),P.deltaY<0?Q(Y(P.deltaY)):P.deltaY>0&&ee(Y(P.deltaY)),n.update()}function We(P){let de=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?le(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?le(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(-n.keyPanSpeed,0),de=!0;break}de&&(P.preventDefault(),n.update())}function oe(P){if(L.length===1)d.set(P.pageX,P.pageY);else{const de=Me(P),Ie=.5*(P.pageX+de.x),Te=.5*(P.pageY+de.y);d.set(Ie,Te)}}function Fe(P){if(L.length===1)x.set(P.pageX,P.pageY);else{const de=Me(P),Ie=.5*(P.pageX+de.x),Te=.5*(P.pageY+de.y);x.set(Ie,Te)}}function ot(P){const de=Me(P),Ie=P.pageX-de.x,Te=P.pageY-de.y,ce=Math.sqrt(Ie*Ie+Te*Te);p.set(0,ce)}function X(P){n.enableZoom&&ot(P),n.enablePan&&Fe(P)}function Gt(P){n.enableZoom&&ot(P),n.enableRotate&&oe(P)}function De(P){if(L.length==1)f.set(P.pageX,P.pageY);else{const Ie=Me(P),Te=.5*(P.pageX+Ie.x),ce=.5*(P.pageY+Ie.y);f.set(Te,ce)}_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const de=n.domElement;J(2*Math.PI*_.x/de.clientHeight),le(2*Math.PI*_.y/de.clientHeight),d.copy(f)}function Ve(P){if(L.length===1)y.set(P.pageX,P.pageY);else{const de=Me(P),Ie=.5*(P.pageX+de.x),Te=.5*(P.pageY+de.y);y.set(Ie,Te)}g.subVectors(y,x).multiplyScalar(n.panSpeed),$(g.x,g.y),x.copy(y)}function we(P){const de=Me(P),Ie=P.pageX-de.x,Te=P.pageY-de.y,ce=Math.sqrt(Ie*Ie+Te*Te);A.set(0,ce),M.set(0,Math.pow(A.y/p.y,n.zoomSpeed)),ee(M.y),p.copy(A);const I=(P.pageX+de.x)*.5,fe=(P.pageY+de.y)*.5;te(I,fe)}function gt(P){n.enableZoom&&we(P),n.enablePan&&Ve(P)}function Qe(P){n.enableZoom&&we(P),n.enableRotate&&De(P)}function R(P){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",V)),je(P),P.pointerType==="touch"?et(P):ue(P))}function b(P){n.enabled!==!1&&(P.pointerType==="touch"?se(P):ae(P))}function V(P){ze(P),L.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",V)),n.dispatchEvent(Dh),r=i.NONE}function ue(P){let de;switch(P.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case ms.DOLLY:if(n.enableZoom===!1)return;pe(P),r=i.DOLLY;break;case ms.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Z(P),r=i.PAN}else{if(n.enableRotate===!1)return;B(P),r=i.ROTATE}break;case ms.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;B(P),r=i.ROTATE}else{if(n.enablePan===!1)return;Z(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ja)}function ae(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;re(P);break;case i.DOLLY:if(n.enableZoom===!1)return;ve(P);break;case i.PAN:if(n.enablePan===!1)return;Le(P);break}}function he(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(ja),Ee(Ce(P)),n.dispatchEvent(Dh))}function Ce(P){const de=P.deltaMode,Ie={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(de){case 1:Ie.deltaY*=16;break;case 2:Ie.deltaY*=100;break}return P.ctrlKey&&!S&&(Ie.deltaY*=10),Ie}function ge(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",Se,{passive:!0,capture:!0}))}function Se(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",Se,{passive:!0,capture:!0}))}function Be(P){n.enabled===!1||n.enablePan===!1||We(P)}function et(P){switch(Ne(P),L.length){case 1:switch(n.touches.ONE){case gs.ROTATE:if(n.enableRotate===!1)return;oe(P),r=i.TOUCH_ROTATE;break;case gs.PAN:if(n.enablePan===!1)return;Fe(P),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case gs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(P),r=i.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Gt(P),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ja)}function se(P){switch(Ne(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ve(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;gt(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Qe(P),n.update();break;default:r=i.NONE}}function ct(P){n.enabled!==!1&&P.preventDefault()}function je(P){L.push(P.pointerId)}function ze(P){delete q[P.pointerId];for(let de=0;de<L.length;de++)if(L[de]==P.pointerId){L.splice(de,1);return}}function Ne(P){let de=q[P.pointerId];de===void 0&&(de=new Xe,q[P.pointerId]=de),de.set(P.pageX,P.pageY)}function Me(P){const de=P.pointerId===L[0]?L[1]:L[0];return q[de]}n.domElement.addEventListener("contextmenu",ct),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",he,{passive:!1}),document.addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}class uM{constructor(e){this.parent=e,this.currentDishesRenderer=null,this.animationFrameId=null}getDishesHTML(e){return`
      <div class="card bg-transparent dishes-product-card" style="width: 720px; max-width: 100%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${e.src}" class="img-fluid mb-2" alt="картинка" onerror="this.onerror=null;this.src='/img/default-dish.svg';">
            <canvas id="dishes-model-canvas-${e.id}" style="width: 100%; height: 240px; background: #e6ebf5; border-radius: 12px;"></canvas>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style="color: rgb(255, 255, 255);">${e.title}</h5>
              <div class="card-text" style="color: rgb(255, 255, 255);">${e.detailsHtml}</div>
            </div>
          </div>
        </div>
      </div>
    `}clearRenderer(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.currentDishesRenderer&&(this.currentDishesRenderer.dispose(),this.currentDishesRenderer=null)}buildFallbackObject(e){const t=new Ti,n=new Er({color:12946267});if(e===1){const a=new xc(.8,.8,.5,32),l=new Zt(a,n);return t.add(l),t}if(e===2){const a=new yc(.45,.16,100,16),l=new Er({color:16747109}),u=new Zt(a,l);return u.rotation.x=Math.PI/2,t.add(u),t}const i=new Zt(new Li(1.2,.22,.9),n),r=new Zt(new Li(1,.22,.7),n),o=new Zt(new Li(.8,.22,.5),n);return i.position.y=0,r.position.y=.28,o.position.y=.56,t.add(i,r,o),t}initScene(e){this.clearRenderer();const t=document.getElementById(e);if(!t)return null;const n=t.clientWidth||240,i=t.clientHeight||240;t.width=n,t.height=i;const r=new md({canvas:t,alpha:!1,antialias:!0});r.setSize(n,i),r.setClearColor(15133685,1);const o=new z0,a=new an(45,n/i,.1,1e3);a.position.set(0,1.4,3.4),a.lookAt(0,.5,0);const l=new lM(a,t);l.enableDamping=!0,l.enableZoom=!0,l.target.set(0,.5,0);const u=new _y(16777215,1);o.add(u);const h=new bd(16777215,1);h.position.set(2,5,3),o.add(h),this.currentDishesRenderer=r;const d=()=>{this.animationFrameId=requestAnimationFrame(d),l.update(),r.render(o,a)};return d(),{scene:o,camera:a,controls:l,canvas:t}}addObjectToScene(e,t,n){const i=new qn().setFromObject(e),r=i.getCenter(new U),o=i.min;e.position.x-=r.x,e.position.z-=r.z,e.position.y-=o.y;const a=i.getSize(new U),l=Math.max(a.x,a.y,a.z);if(l>1.6){const u=1.6/l;e.scale.set(u,u,u)}t.add(e),n.target.set(0,.5,0),n.update()}initDishesThree(e,t,n){const i=this.initScene(t);if(!i)return;const{scene:r,controls:o}=i,a=()=>{const u=this.buildFallbackObject(n);this.addObjectToScene(u,r,o)};if(!e){a();return}new Ry().load(e,u=>{this.addObjectToScene(u.scene,r,o)},void 0,()=>{a()})}renderDishes(e){this.parent.insertAdjacentHTML("beforeend",this.getDishesHTML(e)),this.initDishesThree(e.modelPath,`dishes-model-canvas-${e.id}`,Number(e.id))}}class hM{async request(e,t={}){const n=await fetch(e,t),i=await n.text();let r=null;if(i)try{r=JSON.parse(i)}catch{r=i}return{data:r,status:n.status,ok:n.ok}}get(e){return this.request(e,{method:"GET"})}post(e,t){return this.request(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}patch(e,t){return this.request(e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}delete(e){return this.request(e,{method:"DELETE"})}}const Ns=new hM;class dM{constructor(){this.baseUrl="/dishes"}getDishes(e={}){const t=new URL(this.baseUrl,window.location.origin);return e.title&&t.searchParams.set("title",e.title),e.price!==void 0&&e.price!==null&&e.price!==""&&t.searchParams.set("price",e.price),`${t.pathname}${t.search}`}getDishById(e){return`${this.baseUrl}/${e}`}createDish(){return this.baseUrl}updateDishById(e){return`${this.baseUrl}/${e}`}removeDishById(e){return`${this.baseUrl}/${e}`}}const Us=new dM,fM="/img/default-dish.svg";function pM(s){if(s==null||s==="")return 0;if(typeof s=="number")return s;const e=String(s).replace(/[^\d.,-]/g,"").replace(",","."),t=Number(e);return Number.isNaN(t)?0:t}function Nh(s){return`${Number(s||0).toLocaleString("ru-RU")} ₽`}function mM(s){return`
    <h6>Описание:</h6>
    <div class="dishes-description-block">${s.description||"Описание отсутствует"}</div>
    <h6 class="mt-3">Состав:</h6>
    <div class="dishes-description-block">${s.composition||"Состав не указан"}</div>
    <h6 class="mt-3">На 100г:</h6>
    <div class="dishes-description-block">${s.nutrition||"Пищевая ценность не указана"}</div>
    <h6 class="mt-3">Цена:</h6>
    <div class="dishes-description-block">${s.cardText}</div>
  `}function ac(s={}){const e=pM(s.price??s.text);return{id:s.id,src:s.src||fM,title:s.title||"Без названия",price:e,cardText:Nh(e),description:s.description||"",composition:s.composition||"",nutrition:s.nutrition||"",detailsHtml:mM({description:s.description||"",composition:s.composition||"",nutrition:s.nutrition||"",cardText:Nh(e)}),modelPath:s.modelPath||null}}class gM{constructor(e,t){this.parent=e,this.id=t}get dishesPageRoot(){return document.getElementById("dishes-product-page")}getDishesHTML(){return`
      <div class="dishes-content-wrapper w-100 d-flex justify-content-center">
        <div id="dishes-product-page" class="w-100"></div>
      </div>
    `}renderHeader(){const e=document.getElementById("dishes-buttons-container");if(!e)return;e.innerHTML='<button id="dishes-back-button" class="btn btn-outline-light me-2" type="button">Домой</button>';const t=document.getElementById("dishes-back-button");t&&t.addEventListener("click",this.onBackButtonClick.bind(this))}onBackButtonClick(){new Td(this.parent).renderDishes()}async getData(){try{const{data:e,ok:t}=await Ns.get(Us.getDishById(this.id));if(!t||!e){this.dishesPageRoot.innerHTML='<div class="dishes-empty-state">Карточка не найдена</div>';return}this.renderData(e)}catch(e){console.error(e),this.dishesPageRoot.innerHTML='<div class="dishes-empty-state">Карточка не найдена</div>'}}renderData(e){const t=ac(e);new uM(this.dishesPageRoot).renderDishes(t)}async renderDishes(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getDishesHTML()),this.renderHeader(),await this.getData()}}class _M{constructor(e){this.parent=e}getDishesHTML(){return`
      <button id="dishes-add-button" class="btn btn-outline-light me-2">
        Добавить карточку
      </button>
    `}renderDishes(e){this.parent.insertAdjacentHTML("beforeend",this.getDishesHTML());const t=document.getElementById("dishes-add-button");t&&t.addEventListener("click",e)}}class vM{constructor(e){this.parent=e}getDishesHTML(){return`
      <button id="dishes-remove-button" class="btn btn-outline-light me-2">
        Удалить последнюю карточку
      </button>
    `}renderDishes(e){this.parent.insertAdjacentHTML("beforeend",this.getDishesHTML());const t=document.getElementById("dishes-remove-button");t&&t.addEventListener("click",e)}}class xM{constructor(e){this.parent=e}getDishesHTML(){return`
      <button id="dishes-home-button" class="btn btn-outline-light me-2" type="button">Домой</button>
    `}renderDishes(e){this.parent.insertAdjacentHTML("beforeend",this.getDishesHTML());const t=document.getElementById("dishes-home-button");t&&t.addEventListener("click",e)}}class yM{constructor(e){this.parent=e}getDishesHTML(e=""){return`
      <div class="d-flex gap-2 flex-wrap align-items-center dishes-search-wrapper">
        <input
          id="dishes-search-price-input"
          class="form-control dishes-search-input"
          type="number"
          min="0"
          step="1"
          placeholder="Поиск по цене"
          value="${e}"
        >
        <button id="dishes-search-price-button" class="btn btn-outline-light" type="button">Найти по цене</button>
        <button id="dishes-search-reset-button" class="btn btn-outline-light" type="button">Сбросить поиск</button>
      </div>
    `}renderDishes(e,t,n=""){this.parent.insertAdjacentHTML("beforeend",this.getDishesHTML(n));const i=document.getElementById("dishes-search-price-input"),r=document.getElementById("dishes-search-price-button"),o=document.getElementById("dishes-search-reset-button");r&&r.addEventListener("click",()=>e(i?i.value:"")),i&&i.addEventListener("keydown",a=>{a.key==="Enter"&&e(i.value)}),o&&o.addEventListener("click",t)}}class Td{constructor(e){this.parent=e,this.priceSearchValue=""}get dishesPageRoot(){return document.getElementById("dishes-main-page")}getDishesHTML(){return`
      <div class="dishes-content-wrapper w-100">
        <div id="dishes-main-page" class="d-flex flex-wrap justify-content-center"></div>
      </div>
    `}onDishCardClick(e){const t=e.currentTarget.dataset.id;new gM(this.parent,t).renderDishes()}async onCreateDishClick(){try{const{data:e,ok:t}=await Ns.get(Us.getDishes());if(!t||!Array.isArray(e)||e.length===0){alert("Не удалось добавить карточку");return}const n=ac(e[0]),i={src:n.src,title:n.title,text:n.text,modelPath:n.modelPath,price:n.price};if(!(await Ns.post(Us.createDish(),i)).ok){alert("Не удалось добавить карточку");return}await this.getData()}catch(e){console.error(e),this.renderError("Не удалось добавить карточку. Проверьте API.")}}onSearchByPrice(e){this.priceSearchValue=String(e||"").trim(),this.getData()}onResetSearch(){this.priceSearchValue="",this.renderDishes()}async removeLastDish(){try{const{data:e,ok:t}=await Ns.get(Us.getDishes());if(!t||!Array.isArray(e)||e.length===0){alert("Не удалось удалить карточку");return}const n=[...e].sort((o,a)=>Number(o.id)-Number(a.id)),i=n[n.length-1];if(!(await Ns.delete(Us.removeDishById(i.id))).ok){alert("Не удалось удалить последнюю карточку");return}await this.getData()}catch(e){console.error(e),this.renderError("Не удалось выполнить удаление. Проверьте API.")}}closeDishesWindow(){window.open("","_self"),window.close(),window.location.href="about:blank"}renderHeader(){const e=document.getElementById("dishes-buttons-container");if(!e)return;e.innerHTML="",new _M(e).renderDishes(this.onCreateDishClick.bind(this)),new vM(e).renderDishes(this.removeLastDish.bind(this)),new xM(e).renderDishes(this.closeDishesWindow.bind(this)),new yM(e).renderDishes(this.onSearchByPrice.bind(this),this.onResetSearch.bind(this),this.priceSearchValue)}async getData(){try{const e=Us.getDishes({price:this.priceSearchValue}),{data:t,ok:n}=await Ns.get(e);if(!n){this.renderError("Не удалось загрузить карточки. Проверьте API.");return}this.renderData(Array.isArray(t)?t:[])}catch(e){console.error(e),this.renderError("Не удалось загрузить карточки. Проверьте API.")}}renderData(e){if(this.dishesPageRoot){if(this.dishesPageRoot.innerHTML="",!e.length){this.dishesPageRoot.insertAdjacentHTML("beforeend",'<div class="dishes-empty-state">По вашему запросу ничего не найдено</div>');return}e.map(t=>ac(t)).forEach(t=>{new xp(this.dishesPageRoot).renderDishes(t,this.onDishCardClick.bind(this))})}}renderError(e){this.dishesPageRoot&&(this.dishesPageRoot.innerHTML=`<div class="dishes-empty-state">${e}</div>`)}async renderDishes(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getDishesHTML()),this.renderHeader(),await this.getData()}}const MM=document.getElementById("root"),bM=new Td(MM);bM.renderDishes();
