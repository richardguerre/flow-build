import{a as h,R as Wn,e as be,j as Ft,F as Oo,r as ga,_ as Ko}from"./index-4b77959e.js";import{N as de,m as W,w as pt,M as qe,f as He,g as je,h as ya,t as Dn,P as Gn,i as _o,T as gt,j as No,E as qn,S as Bt,k as Ho,l as ka,F as Ji,n as va,o as jo,p as Uo,q as zo,r as Wo,s as Go,v as Ta,H as Da,x as Aa,y as ba,d as Ne,z as At,A as qo,C as Yo,G as Xo,I as Yn,B as Qo,D as Zo,J as Jo,K as el,O as tl,L as nl,Q as il,R as sl}from"./Lists-f264c4ab.js";const Ca=function(){var e=[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"getPluginsQuery",selections:e,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"getPluginsQuery",selections:e},params:{cacheID:"db4503747db73a63517d1ed36da1fbad",id:null,metadata:{},name:"getPluginsQuery",operationKind:"query",text:`query getPluginsQuery {
  installedPlugins {
    slug
    url
  }
}
`}}}();Ca.hash="ea9a149ac2978eb47c4795c56c5799f3";const he=h.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ye=h.createContext({}),Xe=h.createContext(null),bt=typeof document<"u",pe=bt?h.useLayoutEffect:h.useEffect,Xn=h.createContext({strict:!1});function al(e,t,n,i){const{visualElement:s}=h.useContext(Ye),a=h.useContext(Xn),r=h.useContext(Xe),o=h.useContext(he).reducedMotion,l=h.useRef();i=i||a.renderer,!l.current&&i&&(l.current=i(e,{visualState:t,parent:s,props:n,presenceContext:r,blockInitialAnimation:r?r.initial===!1:!1,reducedMotionConfig:o}));const u=l.current;return h.useInsertionEffect(()=>{u&&u.update(n,r)}),pe(()=>{u&&u.render()}),h.useEffect(()=>{u&&u.updateFeatures()}),(window.HandoffAppearAnimations?pe:h.useEffect)(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}function Oe(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function rl(e,t,n){return h.useCallback(i=>{i&&e.mount&&e.mount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):Oe(n)&&(n.current=i))},[t])}function yt(e){return typeof e=="string"||Array.isArray(e)}function Gt(e){return typeof e=="object"&&typeof e.start=="function"}const Qn=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zn=["initial",...Qn];function qt(e){return Gt(e.animate)||Zn.some(t=>yt(e[t]))}function Sa(e){return!!(qt(e)||e.variants)}function ol(e,t){if(qt(e)){const{initial:n,animate:i}=e;return{initial:n===!1||yt(n)?n:void 0,animate:yt(i)?i:void 0}}return e.inherit!==!1?t:{}}function ll(e){const{initial:t,animate:n}=ol(e,h.useContext(Ye));return h.useMemo(()=>({initial:t,animate:n}),[es(t),es(n)])}function es(e){return Array.isArray(e)?e.join(" "):e}const ts={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},kt={};for(const e in ts)kt[e]={isEnabled:t=>ts[e].some(n=>!!t[n])};function An(e){for(const t in e)kt[t]={...kt[t],...e[t]}}const Ue=h.createContext({}),Jn=h.createContext({}),ei=Symbol.for("motionComponentSymbol");function ti({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:s}){e&&An(e);function a(o,l){let u;const c={...h.useContext(he),...o,layoutId:ul(o)},{isStatic:d}=c,f=ll(o),m=i(o,d);if(!d&&bt){f.visualElement=al(s,m,c,t);const p=h.useContext(Jn),y=h.useContext(Xn).strict;f.visualElement&&(u=f.visualElement.loadFeatures(c,y,e,p))}return h.createElement(Ye.Provider,{value:f},u&&f.visualElement?h.createElement(u,{visualElement:f.visualElement,...c}):null,n(s,o,rl(m,f.visualElement,l),m,d,f.visualElement))}const r=h.forwardRef(a);return r[ei]=s,r}function ul({layoutId:e}){const t=h.useContext(Ue).id;return t&&e!==void 0?t+"-"+e:e}function xa(e){function t(i,s={}){return ti(e(i,s))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(i,s)=>(n.has(s)||n.set(s,t(s)),n.get(s))})}const cl=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ni(e){return typeof e!="string"||e.includes("-")?!1:!!(cl.indexOf(e)>-1||/[A-Z]/.test(e))}const Ot={};function Pa(e){Object.assign(Ot,e)}const Ct=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ce=new Set(Ct);function Va(e,{layout:t,layoutId:n}){return ce.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ot[e]||e==="opacity")}const O=e=>!!(e&&e.getVelocity),dl={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},fl=Ct.length;function La(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},i,s){let a="";for(let r=0;r<fl;r++){const o=Ct[r];if(e[o]!==void 0){const l=dl[o]||o;a+=`${l}(${e[o]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(e,i?"":a):n&&i&&(a="none"),a}const Ma=e=>t=>typeof t=="string"&&t.startsWith(e),ii=Ma("--"),bn=Ma("var(--"),ml=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,hl=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ce=(e,t,n)=>Math.min(Math.max(n,e),t),Ee={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},lt={...Ee,transform:e=>Ce(0,1,e)},Lt={...Ee,default:1},ut=e=>Math.round(e*1e5)/1e5,Yt=/(-)?([\d]*\.?[\d])+/g,Ia=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,pl=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function St(e){return typeof e=="string"}const xt=e=>({test:t=>St(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Te=xt("deg"),le=xt("%"),C=xt("px"),gl=xt("vh"),yl=xt("vw"),ns={...le,parse:e=>le.parse(e)/100,transform:e=>le.transform(e*100)},is={...Ee,transform:Math.round},wa={borderWidth:C,borderTopWidth:C,borderRightWidth:C,borderBottomWidth:C,borderLeftWidth:C,borderRadius:C,radius:C,borderTopLeftRadius:C,borderTopRightRadius:C,borderBottomRightRadius:C,borderBottomLeftRadius:C,width:C,maxWidth:C,height:C,maxHeight:C,size:C,top:C,right:C,bottom:C,left:C,padding:C,paddingTop:C,paddingRight:C,paddingBottom:C,paddingLeft:C,margin:C,marginTop:C,marginRight:C,marginBottom:C,marginLeft:C,rotate:Te,rotateX:Te,rotateY:Te,rotateZ:Te,scale:Lt,scaleX:Lt,scaleY:Lt,scaleZ:Lt,skew:Te,skewX:Te,skewY:Te,distance:C,translateX:C,translateY:C,translateZ:C,x:C,y:C,z:C,perspective:C,transformPerspective:C,opacity:lt,originX:ns,originY:ns,originZ:C,zIndex:is,fillOpacity:lt,strokeOpacity:lt,numOctaves:is};function si(e,t,n,i){const{style:s,vars:a,transform:r,transformOrigin:o}=e;let l=!1,u=!1,c=!0;for(const d in t){const f=t[d];if(ii(d)){a[d]=f;continue}const m=wa[d],p=hl(f,m);if(ce.has(d)){if(l=!0,r[d]=p,!c)continue;f!==(m.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,o[d]=p):s[d]=p}if(t.transform||(l||i?s.transform=La(e.transform,n,c,i):s.transform&&(s.transform="none")),u){const{originX:d="50%",originY:f="50%",originZ:m=0}=o;s.transformOrigin=`${d} ${f} ${m}`}}const ai=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Fa(e,t,n){for(const i in t)!O(t[i])&&!Va(i,n)&&(e[i]=t[i])}function kl({transformTemplate:e},t,n){return h.useMemo(()=>{const i=ai();return si(i,t,{enableHardwareAcceleration:!n},e),Object.assign({},i.vars,i.style)},[t])}function vl(e,t,n){const i=e.style||{},s={};return Fa(s,i,e),Object.assign(s,kl(e,t,n)),e.transformValues?e.transformValues(s):s}function Tl(e,t,n){const i={},s=vl(e,t,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=s,i}const Dl=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function vt(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||Dl.has(e)}let Ra=e=>!vt(e);function Ea(e){e&&(Ra=t=>t.startsWith("on")?!vt(t):e(t))}try{Ea(require("@emotion/is-prop-valid").default)}catch{}function $a(e,t,n){const i={};for(const s in e)s==="values"&&typeof e.values=="object"||(Ra(s)||n===!0&&vt(s)||!t&&!vt(s)||e.draggable&&s.startsWith("onDrag"))&&(i[s]=e[s]);return i}function ss(e,t,n){return typeof e=="string"?e:C.transform(t+n*e)}function Al(e,t,n){const i=ss(t,e.x,e.width),s=ss(n,e.y,e.height);return`${i} ${s}`}const bl={offset:"stroke-dashoffset",array:"stroke-dasharray"},Cl={offset:"strokeDashoffset",array:"strokeDasharray"};function Sl(e,t,n=1,i=0,s=!0){e.pathLength=1;const a=s?bl:Cl;e[a.offset]=C.transform(-i);const r=C.transform(t),o=C.transform(n);e[a.array]=`${r} ${o}`}function ri(e,{attrX:t,attrY:n,attrScale:i,originX:s,originY:a,pathLength:r,pathSpacing:o=1,pathOffset:l=0,...u},c,d,f){if(si(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:p,dimensions:y}=e;m.transform&&(y&&(p.transform=m.transform),delete m.transform),y&&(s!==void 0||a!==void 0||p.transform)&&(p.transformOrigin=Al(y,s!==void 0?s:.5,a!==void 0?a:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),i!==void 0&&(m.scale=i),r!==void 0&&Sl(m,r,o,l,!1)}const Ba=()=>({...ai(),attrs:{}}),oi=e=>typeof e=="string"&&e.toLowerCase()==="svg";function xl(e,t,n,i){const s=h.useMemo(()=>{const a=Ba();return ri(a,t,{enableHardwareAcceleration:!1},oi(i),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Fa(a,e.style,e),s.style={...a,...s.style}}return s}function Pl(e=!1){return(n,i,s,{latestValues:a},r)=>{const l=(ni(n)?xl:Tl)(i,a,r,n),c={...$a(i,typeof n=="string",e),...l,ref:s},{children:d}=i,f=h.useMemo(()=>O(d)?d.get():d,[d]);return h.createElement(n,{...c,children:f})}}const Tt=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function Oa(e,{style:t,vars:n},i,s){Object.assign(e.style,t,s&&s.getProjectionStyles(i));for(const a in n)e.style.setProperty(a,n[a])}const Ka=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _a(e,t,n,i){Oa(e,t,void 0,i);for(const s in t.attrs)e.setAttribute(Ka.has(s)?s:Tt(s),t.attrs[s])}function li(e,t){const{style:n}=e,i={};for(const s in n)(O(n[s])||t.style&&O(t.style[s])||Va(s,e))&&(i[s]=n[s]);return i}function Na(e,t){const n=li(e,t);for(const i in e)if(O(e[i])||O(t[i])){const s=Ct.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[s]=e[i]}return n}function ui(e,t,n,i={},s={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,s)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,s)),t}function Y(e){const t=h.useRef(null);return t.current===null&&(t.current=e()),t.current}const Kt=e=>Array.isArray(e),Vl=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Ll=e=>Kt(e)?e[e.length-1]||0:e;function ct(e){const t=O(e)?e.get():e;return Vl(t)?t.toValue():t}function Ml({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},i,s,a){const r={latestValues:Il(i,s,a,e),renderState:t()};return n&&(r.mount=o=>n(i,o,r)),r}const Xt=e=>(t,n)=>{const i=h.useContext(Ye),s=h.useContext(Xe),a=()=>Ml(e,t,i,s);return n?a():Y(a)};function Il(e,t,n,i){const s={},a=i(e,{});for(const f in a)s[f]=ct(a[f]);let{initial:r,animate:o}=e;const l=qt(e),u=Sa(e);t&&u&&!l&&e.inherit!==!1&&(r===void 0&&(r=t.initial),o===void 0&&(o=t.animate));let c=n?n.initial===!1:!1;c=c||r===!1;const d=c?o:r;return d&&typeof d!="boolean"&&!Gt(d)&&(Array.isArray(d)?d:[d]).forEach(m=>{const p=ui(e,m);if(!p)return;const{transitionEnd:y,transition:T,...v}=p;for(const g in v){let k=v[g];if(Array.isArray(k)){const D=c?k.length-1:0;k=k[D]}k!==null&&(s[g]=k)}for(const g in y)s[g]=y[g]}),s}const wl={useVisualState:Xt({scrapeMotionValuesFromProps:Na,createRenderState:Ba,onMount:(e,t,{renderState:n,latestValues:i})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}ri(n,i,{enableHardwareAcceleration:!1},oi(t.tagName),e.transformTemplate),_a(t,n)}})},Fl={useVisualState:Xt({scrapeMotionValuesFromProps:li,createRenderState:ai})};function ci(e,{forwardMotionProps:t=!1},n,i){return{...ni(e)?wl:Fl,preloadedFeatures:n,useRender:Pl(t),createVisualElement:i,Component:e}}function oe(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const Ha=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Qt(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const ja=e=>t=>Ha(t)&&e(t,Qt(t));function ue(e,t,n,i){return oe(e,t,ja(n),i)}const Rl=(e,t)=>n=>t(e(n)),fe=(...e)=>e.reduce(Rl);function Ua(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const as=Ua("dragHorizontal"),rs=Ua("dragVertical");function za(e){let t=!1;if(e==="y")t=rs();else if(e==="x")t=as();else{const n=as(),i=rs();n&&i?t=()=>{n(),i()}:(n&&n(),i&&i())}return t}function di(){const e=za(!0);return e?(e(),!1):!0}class Pe{constructor(t){this.isMounted=!1,this.node=t}update(){}}function El(e){let t=[],n=[],i=0,s=!1,a=!1;const r=new WeakSet,o={schedule:(l,u=!1,c=!1)=>{const d=c&&s,f=d?t:n;return u&&r.add(l),f.indexOf(l)===-1&&(f.push(l),d&&s&&(i=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),r.delete(l)},process:l=>{if(s){a=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,i=t.length,i)for(let u=0;u<i;u++){const c=t[u];c(l),r.has(c)&&(o.schedule(c),e())}s=!1,a&&(a=!1,o.process(l))}};return o}const B={delta:0,timestamp:0,isProcessing:!1},$l=40;let Cn=!0,Dt=!1;const Qe=["read","update","preRender","render","postRender"],Fe=Qe.reduce((e,t)=>(e[t]=El(()=>Dt=!0),e),{}),Bl=e=>Fe[e].process(B),Wa=e=>{Dt=!1,B.delta=Cn?1e3/60:Math.max(Math.min(e-B.timestamp,$l),1),B.timestamp=e,B.isProcessing=!0,Qe.forEach(Bl),B.isProcessing=!1,Dt&&(Cn=!1,requestAnimationFrame(Wa))},Ol=()=>{Dt=!0,Cn=!0,B.isProcessing||requestAnimationFrame(Wa)},M=Qe.reduce((e,t)=>{const n=Fe[t];return e[t]=(i,s=!1,a=!1)=>(Dt||Ol(),n.schedule(i,s,a)),e},{});function X(e){Qe.forEach(t=>Fe[t].cancel(e))}function os(e,t){const n="pointer"+(t?"enter":"leave"),i="onHover"+(t?"Start":"End"),s=(a,r)=>{if(a.type==="touch"||di())return;const o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[i]&&M.update(()=>o[i](a,r))};return ue(e.current,n,s,{passive:!e.getProps()[i]})}class Kl extends Pe{mount(){this.unmount=fe(os(this.node,!0),os(this.node,!1))}unmount(){}}class _l extends Pe{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fe(oe(this.node.current,"focus",()=>this.onFocus()),oe(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Ga=(e,t)=>t?e===t?!0:Ga(e,t.parentElement):!1,H=e=>e;function on(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Qt(n))}class Nl extends Pe{constructor(){super(...arguments),this.removeStartListeners=H,this.removeEndListeners=H,this.removeAccessibleListeners=H,this.startPointerPress=(t,n)=>{if(this.removeEndListeners(),this.isPressing)return;const i=this.node.getProps(),a=ue(window,"pointerup",(o,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c}=this.node.getProps();M.update(()=>{Ga(this.node.current,o.target)?u&&u(o,l):c&&c(o,l)})},{passive:!(i.onTap||i.onPointerUp)}),r=ue(window,"pointercancel",(o,l)=>this.cancelPress(o,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=fe(a,r),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const r=o=>{o.key!=="Enter"||!this.checkPressEnd()||on("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&M.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=oe(this.node.current,"keyup",r),on("down",(o,l)=>{this.startPress(o,l)})},n=oe(this.node.current,"keydown",t),i=()=>{this.isPressing&&on("cancel",(a,r)=>this.cancelPress(a,r))},s=oe(this.node.current,"blur",i);this.removeAccessibleListeners=fe(n,s)}}startPress(t,n){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&M.update(()=>i(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!di()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&M.update(()=>i(t,n))}mount(){const t=this.node.getProps(),n=ue(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=oe(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=fe(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Sn=new WeakMap,ln=new WeakMap,Hl=e=>{const t=Sn.get(e.target);t&&t(e)},jl=e=>{e.forEach(Hl)};function Ul({root:e,...t}){const n=e||document;ln.has(n)||ln.set(n,{});const i=ln.get(n),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(jl,{root:e,...t})),i[s]}function zl(e,t,n){const i=Ul(t);return Sn.set(e,n),i.observe(e),()=>{Sn.delete(e),i.unobserve(e)}}const Wl={some:0,all:1};class Gl extends Pe{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:a}=t,r={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Wl[s]},o=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return zl(this.node.current,r,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(ql(t,n))&&this.startObserver()}unmount(){}}function ql({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const qa={inView:{Feature:Gl},tap:{Feature:Nl},focus:{Feature:_l},hover:{Feature:Kl}};function Ya(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Yl(e){const t={};return e.values.forEach((n,i)=>t[i]=n.get()),t}function Xl(e){const t={};return e.values.forEach((n,i)=>t[i]=n.getVelocity()),t}function Zt(e,t,n){const i=e.getProps();return ui(i,t,n!==void 0?n:i.custom,Yl(e),Xl(e))}const Xa="framerAppearId",Qa="data-"+Tt(Xa);let fi=H,Pt=H;const me=e=>e*1e3,te=e=>e/1e3,xn={current:!1},Za=e=>Array.isArray(e)&&typeof e[0]=="number";function Ja(e){return!!(!e||typeof e=="string"&&er[e]||Za(e)||Array.isArray(e)&&e.every(Ja))}const ot=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,er={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ot([0,.65,.55,1]),circOut:ot([.55,0,1,.45]),backIn:ot([.31,.01,.66,-.59]),backOut:ot([.33,1.53,.69,.99])};function tr(e){if(e)return Za(e)?ot(e):Array.isArray(e)?e.map(tr):er[e]}function Pn(e,t,n,{delay:i=0,duration:s,repeat:a=0,repeatType:r="loop",ease:o,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=tr(o);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:i,duration:s,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:a+1,direction:r==="reverse"?"alternate":"normal"})}const ls={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},un={},nr={};for(const e in ls)nr[e]=()=>(un[e]===void 0&&(un[e]=ls[e]()),un[e]);function Ql(e,{repeat:t,repeatType:n="loop"}){const i=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[i]}const ir=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Zl=1e-7,Jl=12;function eu(e,t,n,i,s){let a,r,o=0;do r=t+(n-t)/2,a=ir(r,i,s)-e,a>0?n=r:t=r;while(Math.abs(a)>Zl&&++o<Jl);return r}function Ze(e,t,n,i){if(e===t&&n===i)return H;const s=a=>eu(a,0,1,e,n);return a=>a===0||a===1?a:ir(s(a),t,i)}const sr=Ze(.42,0,1,1),ar=Ze(0,0,.58,1),mi=Ze(.42,0,.58,1),rr=e=>Array.isArray(e)&&typeof e[0]!="number",hi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,pi=e=>t=>1-e(1-t),gi=e=>1-Math.sin(Math.acos(e)),Jt=pi(gi),or=hi(Jt),yi=Ze(.33,1.53,.69,.99),en=pi(yi),lr=hi(en),ur=e=>(e*=2)<1?.5*en(e):.5*(2-Math.pow(2,-10*(e-1))),tu={linear:H,easeIn:sr,easeInOut:mi,easeOut:ar,circIn:gi,circInOut:or,circOut:Jt,backIn:en,backInOut:lr,backOut:yi,anticipate:ur},Vn=e=>{if(Array.isArray(e)){Pt(e.length===4);const[t,n,i,s]=e;return Ze(t,n,i,s)}else if(typeof e=="string")return tu[e];return e},ki=(e,t)=>n=>!!(St(n)&&pl.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),cr=(e,t,n)=>i=>{if(!St(i))return i;const[s,a,r,o]=i.match(Yt);return{[e]:parseFloat(s),[t]:parseFloat(a),[n]:parseFloat(r),alpha:o!==void 0?parseFloat(o):1}},nu=e=>Ce(0,255,e),cn={...Ee,transform:e=>Math.round(nu(e))},we={test:ki("rgb","red"),parse:cr("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+cn.transform(e)+", "+cn.transform(t)+", "+cn.transform(n)+", "+ut(lt.transform(i))+")"};function iu(e){let t="",n="",i="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Ln={test:ki("#"),parse:iu,transform:we.transform},Ke={test:ki("hsl","hue"),parse:cr("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+le.transform(ut(t))+", "+le.transform(ut(n))+", "+ut(lt.transform(i))+")"},q={test:e=>we.test(e)||Ln.test(e)||Ke.test(e),parse:e=>we.test(e)?we.parse(e):Ke.test(e)?Ke.parse(e):Ln.parse(e),transform:e=>St(e)?e:e.hasOwnProperty("red")?we.transform(e):Ke.transform(e)},F=(e,t,n)=>-n*e+n*t+e;function dn(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function su({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let s=0,a=0,r=0;if(!t)s=a=r=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;s=dn(l,o,e+1/3),a=dn(l,o,e),r=dn(l,o,e-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(r*255),alpha:i}}const fn=(e,t,n)=>{const i=e*e;return Math.sqrt(Math.max(0,n*(t*t-i)+i))},au=[Ln,we,Ke],ru=e=>au.find(t=>t.test(e));function us(e){const t=ru(e);let n=t.parse(e);return t===Ke&&(n=su(n)),n}const dr=(e,t)=>{const n=us(e),i=us(t),s={...n};return a=>(s.red=fn(n.red,i.red,a),s.green=fn(n.green,i.green,a),s.blue=fn(n.blue,i.blue,a),s.alpha=F(n.alpha,i.alpha,a),we.transform(s))};function ou(e){var t,n;return isNaN(e)&&St(e)&&(((t=e.match(Yt))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Ia))===null||n===void 0?void 0:n.length)||0)>0}const fr={regex:ml,countKey:"Vars",token:"${v}",parse:H},mr={regex:Ia,countKey:"Colors",token:"${c}",parse:q.parse},hr={regex:Yt,countKey:"Numbers",token:"${n}",parse:Ee.parse};function mn(e,{regex:t,countKey:n,token:i,parse:s}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,i),e.values.push(...a.map(s)))}function _t(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&mn(n,fr),mn(n,mr),mn(n,hr),n}function pr(e){return _t(e).values}function gr(e){const{values:t,numColors:n,numVars:i,tokenised:s}=_t(e),a=t.length;return r=>{let o=s;for(let l=0;l<a;l++)l<i?o=o.replace(fr.token,r[l]):l<i+n?o=o.replace(mr.token,q.transform(r[l])):o=o.replace(hr.token,ut(r[l]));return o}}const lu=e=>typeof e=="number"?0:e;function uu(e){const t=pr(e);return gr(e)(t.map(lu))}const ge={test:ou,parse:pr,createTransformer:gr,getAnimatableNone:uu},yr=(e,t)=>n=>`${n>0?t:e}`;function kr(e,t){return typeof e=="number"?n=>F(e,t,n):q.test(e)?dr(e,t):e.startsWith("var(")?yr(e,t):Tr(e,t)}const vr=(e,t)=>{const n=[...e],i=n.length,s=e.map((a,r)=>kr(a,t[r]));return a=>{for(let r=0;r<i;r++)n[r]=s[r](a);return n}},cu=(e,t)=>{const n={...e,...t},i={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(i[s]=kr(e[s],t[s]));return s=>{for(const a in i)n[a]=i[a](s);return n}},Tr=(e,t)=>{const n=ge.createTransformer(t),i=_t(e),s=_t(t);return i.numVars===s.numVars&&i.numColors===s.numColors&&i.numNumbers>=s.numNumbers?fe(vr(i.values,s.values),n):yr(e,t)},Se=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},cs=(e,t)=>n=>F(e,t,n);function du(e){return typeof e=="number"?cs:typeof e=="string"?q.test(e)?dr:Tr:Array.isArray(e)?vr:typeof e=="object"?cu:cs}function fu(e,t,n){const i=[],s=n||du(e[0]),a=e.length-1;for(let r=0;r<a;r++){let o=s(e[r],e[r+1]);if(t){const l=Array.isArray(t)?t[r]||H:t;o=fe(l,o)}i.push(o)}return i}function Vt(e,t,{clamp:n=!0,ease:i,mixer:s}={}){const a=e.length;if(Pt(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const r=fu(t,i,s),o=r.length,l=u=>{let c=0;if(o>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Se(e[c],e[c+1],u);return r[c](d)};return n?u=>l(Ce(e[0],e[a-1],u)):l}function Dr(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const s=Se(0,t,i);e.push(F(n,1,s))}}function vi(e){const t=[0];return Dr(t,e.length-1),t}function mu(e,t){return e.map(n=>n*t)}function hu(e,t){return e.map(()=>t||mi).splice(0,e.length-1)}function Nt({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const s=rr(i)?i.map(Vn):Vn(i),a={done:!1,value:t[0]},r=mu(n&&n.length===t.length?n:vi(t),e),o=Vt(r,t,{ease:Array.isArray(s)?s:hu(t,s)});return{calculatedDuration:e,next:l=>(a.value=o(l),a.done=l>=e,a)}}function Ti(e,t){return t?e*(1e3/t):0}const pu=5;function Ar(e,t,n){const i=Math.max(t-pu,0);return Ti(n-e(i),t-i)}const hn=.001,gu=.01,ds=10,yu=.05,ku=1;function vu({duration:e=800,bounce:t=.25,velocity:n=0,mass:i=1}){let s,a;fi(e<=me(ds));let r=1-t;r=Ce(yu,ku,r),e=Ce(gu,ds,te(e)),r<1?(s=u=>{const c=u*r,d=c*e,f=c-n,m=Mn(u,r),p=Math.exp(-d);return hn-f/m*p},a=u=>{const d=u*r*e,f=d*n+n,m=Math.pow(r,2)*Math.pow(u,2)*e,p=Math.exp(-d),y=Mn(Math.pow(u,2),r);return(-s(u)+hn>0?-1:1)*((f-m)*p)/y}):(s=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-hn+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const o=5/e,l=Du(s,a,o);if(e=me(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:r*2*Math.sqrt(i*u),duration:e}}}const Tu=12;function Du(e,t,n){let i=n;for(let s=1;s<Tu;s++)i=i-e(i)/t(i);return i}function Mn(e,t){return e*Math.sqrt(1-t*t)}const Au=["duration","bounce"],bu=["stiffness","damping","mass"];function fs(e,t){return t.some(n=>e[n]!==void 0)}function Cu(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!fs(e,bu)&&fs(e,Au)){const n=vu(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function tn({keyframes:e,restDelta:t,restSpeed:n,...i}){const s=e[0],a=e[e.length-1],r={done:!1,value:s},{stiffness:o,damping:l,mass:u,velocity:c,duration:d,isResolvedFromDuration:f}=Cu(i),m=c?-te(c):0,p=l/(2*Math.sqrt(o*u)),y=a-s,T=te(Math.sqrt(o/u)),v=Math.abs(y)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let g;if(p<1){const k=Mn(T,p);g=D=>{const b=Math.exp(-p*T*D);return a-b*((m+p*T*y)/k*Math.sin(k*D)+y*Math.cos(k*D))}}else if(p===1)g=k=>a-Math.exp(-T*k)*(y+(m+T*y)*k);else{const k=T*Math.sqrt(p*p-1);g=D=>{const b=Math.exp(-p*T*D),x=Math.min(k*D,300);return a-b*((m+p*T*y)*Math.sinh(x)+k*y*Math.cosh(x))/k}}return{calculatedDuration:f&&d||null,next:k=>{const D=g(k);if(f)r.done=k>=d;else{let b=m;k!==0&&(p<1?b=Ar(g,k,D):b=0);const x=Math.abs(b)<=n,S=Math.abs(a-D)<=t;r.done=x&&S}return r.value=r.done?a:D,r}}}function ms({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:a=500,modifyTarget:r,min:o,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},m=A=>o!==void 0&&A<o||l!==void 0&&A>l,p=A=>o===void 0?l:l===void 0||Math.abs(o-A)<Math.abs(l-A)?o:l;let y=n*t;const T=d+y,v=r===void 0?T:r(T);v!==T&&(y=v-d);const g=A=>-y*Math.exp(-A/i),k=A=>v+g(A),D=A=>{const P=g(A),R=k(A);f.done=Math.abs(P)<=u,f.value=f.done?v:R};let b,x;const S=A=>{m(f.value)&&(b=A,x=tn({keyframes:[f.value,p(f.value)],velocity:Ar(k,A,f.value),damping:s,stiffness:a,restDelta:u,restSpeed:c}))};return S(0),{calculatedDuration:null,next:A=>{let P=!1;return!x&&b===void 0&&(P=!0,D(A),S(A)),b!==void 0&&A>b?x.next(A-b):(!P&&D(A),f)}}}const Su=e=>{const t=({timestamp:n})=>e(n);return{start:()=>M.update(t,!0),stop:()=>X(t),now:()=>B.isProcessing?B.timestamp:performance.now()}},In=2e4;function wn(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<In;)t+=n,i=e.next(t);return t>=In?1/0:t}const xu={decay:ms,inertia:ms,tween:Nt,keyframes:Nt,spring:tn};function ze({autoplay:e=!0,delay:t=0,driver:n=Su,keyframes:i,type:s="keyframes",repeat:a=0,repeatDelay:r=0,repeatType:o="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let m=1,p=!1,y,T;const v=()=>{y&&y(),T=new Promise(L=>{y=L})};v();let g;const k=xu[s]||Nt;let D;k!==Nt&&typeof i[0]!="number"&&(D=Vt([0,100],i,{clamp:!1}),i=[0,100]);const b=k({...f,keyframes:i});let x;o==="mirror"&&(x=k({...f,keyframes:[...i].reverse(),velocity:-(f.velocity||0)}));let S="idle",A=null,P=null,R=null;b.calculatedDuration===null&&a&&(b.calculatedDuration=wn(b));const{calculatedDuration:K}=b;let N=1/0,j=1/0;K!==null&&(N=K+r,j=N*(a+1)-r);let V=0;const w=L=>{if(P===null)return;m>0&&(P=Math.min(P,L)),A!==null?V=A:V=(L-P)*m;const G=V-t,ye=G<0;V=Math.max(G,0),S==="finished"&&A===null&&(V=j);let $e=V,Je=b;if(a){const Ve=V/N;let ve=Math.floor(Ve),ne=Ve%1;!ne&&Ve>=1&&(ne=1),ne===1&&ve--,ve=Math.min(ve,a+1);const nt=!!(ve%2);nt&&(o==="reverse"?(ne=1-ne,r&&(ne-=r/N)):o==="mirror"&&(Je=x));let it=Ce(0,1,ne);V>j&&(it=o==="reverse"&&nt?1:0),$e=it*N}const ke=ye?{done:!1,value:i[0]}:Je.next($e);D&&(ke.value=D(ke.value));let{done:et}=ke;!ye&&K!==null&&(et=V>=j);const tt=A===null&&(S==="finished"||S==="running"&&et||m<0&&V<=0);return d&&d(ke.value),tt&&z(),ke},I=()=>{g&&g.stop(),g=void 0},_=()=>{S="idle",I(),v(),P=R=null},z=()=>{S="finished",c&&c(),I(),v()},U=()=>{if(p)return;g||(g=n(w));const L=g.now();l&&l(),A!==null?P=L-A:(!P||S==="finished")&&(P=L),R=P,A=null,S="running",g.start()};e&&U();const Z={then(L,G){return T.then(L,G)},get time(){return te(V)},set time(L){L=me(L),V=L,A!==null||!g||m===0?A=L:P=g.now()-L/m},get duration(){const L=b.calculatedDuration===null?wn(b):b.calculatedDuration;return te(L)},get speed(){return m},set speed(L){L===m||!g||(m=L,Z.time=te(V))},get state(){return S},play:U,pause:()=>{S="paused",A=V},stop:()=>{p=!0,S!=="idle"&&(S="idle",u&&u(),_())},cancel:()=>{R!==null&&w(R),_()},complete:()=>{S="finished"},sample:L=>(P=0,w(L))};return Z}const Pu=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Mt=10,Vu=2e4,Lu=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Ja(t.ease);function Mu(e,t,{onUpdate:n,onComplete:i,...s}){if(!(nr.waapi()&&Pu.has(t)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let r=!1,o,l;const u=()=>{l=new Promise(v=>{o=v})};u();let{keyframes:c,duration:d=300,ease:f,times:m}=s;if(Lu(t,s)){const v=ze({...s,repeat:0,delay:0});let g={done:!1,value:c[0]};const k=[];let D=0;for(;!g.done&&D<Vu;)g=v.sample(D),k.push(g.value),D+=Mt;m=void 0,c=k,d=D-Mt,f="linear"}const p=Pn(e.owner.current,t,c,{...s,duration:d,ease:f,times:m}),y=()=>p.cancel(),T=()=>{M.update(y),o(),u()};return p.onfinish=()=>{e.set(Ql(c,s)),i&&i(),T()},{then(v,g){return l.then(v,g)},get time(){return te(p.currentTime||0)},set time(v){p.currentTime=me(v)},get speed(){return p.playbackRate},set speed(v){p.playbackRate=v},get duration(){return te(d)},play:()=>{r||(p.play(),X(y))},pause:()=>p.pause(),stop:()=>{if(r=!0,p.playState==="idle")return;const{currentTime:v}=p;if(v){const g=ze({...s,autoplay:!1});e.setWithVelocity(g.sample(v-Mt).value,g.sample(v).value,Mt)}T()},complete:()=>p.finish(),cancel:T}}function Iu({keyframes:e,delay:t,onUpdate:n,onComplete:i}){const s=()=>(n&&n(e[e.length-1]),i&&i(),{time:0,speed:1,duration:0,play:H,pause:H,stop:H,then:a=>(a(),Promise.resolve()),cancel:H,complete:H});return t?ze({keyframes:[0,1],duration:0,delay:t,onComplete:s}):s()}const wu={type:"spring",stiffness:500,damping:25,restSpeed:10},Fu=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ru={type:"keyframes",duration:.8},Eu={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$u=(e,{keyframes:t})=>t.length>2?Ru:ce.has(e)?e.startsWith("scale")?Fu(t[1]):wu:Eu,Fn=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ge.test(t)||t==="0")&&!t.startsWith("url(")),Bu=new Set(["brightness","contrast","saturate","opacity"]);function Ou(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Yt)||[];if(!i)return e;const s=n.replace(i,"");let a=Bu.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+s+")"}const Ku=/([a-z-]*)\(.*?\)/g,Rn={...ge,getAnimatableNone:e=>{const t=e.match(Ku);return t?t.map(Ou).join(" "):e}},_u={...wa,color:q,backgroundColor:q,outlineColor:q,fill:q,stroke:q,borderColor:q,borderTopColor:q,borderRightColor:q,borderBottomColor:q,borderLeftColor:q,filter:Rn,WebkitFilter:Rn},Di=e=>_u[e];function br(e,t){let n=Di(e);return n!==Rn&&(n=ge),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Cr=e=>/^0[^.\s]+$/.test(e);function Nu(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Cr(e)}function Hu(e,t,n,i){const s=Fn(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const r=i.from!==void 0?i.from:e.get();let o;const l=[];for(let u=0;u<a.length;u++)a[u]===null&&(a[u]=u===0?r:a[u-1]),Nu(a[u])?l.push(u):typeof a[u]=="string"&&(o=a[u]);if(s&&l.length&&o)for(let u=0;u<l.length;u++){const c=l[u];a[c]=br(t,o)}return a}function ju({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:a,repeatType:r,repeatDelay:o,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function Sr(e,t){return e[t]||e.default||e}const Ai=(e,t,n,i={})=>s=>{const a=Sr(i,e)||{},r=a.delay||i.delay||0;let{elapsed:o=0}=i;o=o-me(r);const l=Hu(t,e,n,a),u=l[0],c=l[l.length-1],d=Fn(e,u),f=Fn(e,c);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-o,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{s(),a.onComplete&&a.onComplete()}};if(ju(a)||(m={...m,...$u(e,m)}),m.duration&&(m.duration=me(m.duration)),m.repeatDelay&&(m.repeatDelay=me(m.repeatDelay)),!d||!f||xn.current||a.type===!1)return Iu(m);if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const p=Mu(t,e,m);if(p)return p}return ze(m)};function Ht(e){return!!(O(e)&&e.add)}const Uu=e=>/^\-?\d*\.?\d+$/.test(e);function nn(e,t){e.indexOf(t)===-1&&e.push(t)}function We(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}function zu([...e],t,n){const i=t<0?e.length+t:t;if(i>=0&&i<e.length){const s=n<0?e.length+n:n,[a]=e.splice(t,1);e.splice(s,0,a)}return e}class bi{constructor(){this.subscriptions=[]}add(t){return nn(this.subscriptions,t),()=>We(this.subscriptions,t)}notify(t,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,i);else for(let a=0;a<s;a++){const r=this.subscriptions[a];r&&r(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Wu=e=>!isNaN(parseFloat(e));class Ci{constructor(t,n={}){this.version="10.12.10",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{this.prev=this.current,this.current=i;const{delta:a,timestamp:r}=B;this.lastUpdated!==r&&(this.timeDelta=a,this.lastUpdated=r,M.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>M.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Wu(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new bi);const i=this.events[t].add(n);return t==="change"?()=>{i(),M.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=t,this.timeDelta=i}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ti(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ee(e,t){return new Ci(e,t)}const xr=e=>t=>t.test(e),Gu={test:e=>e==="auto",parse:e=>e},Pr=[Ee,C,le,Te,yl,gl,Gu],st=e=>Pr.find(xr(e)),qu=[...Pr,q,ge],Yu=e=>qu.find(xr(e));function Xu(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ee(n))}function Si(e,t){const n=Zt(e,t);let{transitionEnd:i={},transition:s={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...i};for(const r in a){const o=Ll(a[r]);Xu(e,r,o)}}function En(e,t){[...t].reverse().forEach(i=>{const s=e.getVariant(i);s&&Si(e,s),e.variantChildren&&e.variantChildren.forEach(a=>{En(a,t)})})}function Qu(e,t){if(Array.isArray(t))return En(e,t);if(typeof t=="string")return En(e,[t]);Si(e,t)}function xi(e,t,n){var i,s;const a=Object.keys(t).filter(o=>!e.hasValue(o)),r=a.length;if(r)for(let o=0;o<r;o++){const l=a[o],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(s=(i=n[l])!==null&&i!==void 0?i:e.readValue(l))!==null&&s!==void 0?s:t[l]),c!=null&&(typeof c=="string"&&(Uu(c)||Cr(c))?c=parseFloat(c):!Yu(c)&&ge.test(u)&&(c=br(l,u)),e.addValue(l,ee(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function Zu(e,t){return t?(t[e]||t.default||t).from:void 0}function Vr(e,t,n){const i={};for(const s in e){const a=Zu(s,t);if(a!==void 0)i[s]=a;else{const r=n.getValue(s);r&&(i[s]=r.get())}}return i}function Ju({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function Pi(e,t,{delay:n=0,transitionOverride:i,type:s}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:r,...o}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");i&&(a=i);const u=[],c=s&&e.animationState&&e.animationState.getState()[s];for(const d in o){const f=e.getValue(d),m=o[d];if(!f||m===void 0||c&&Ju(c,d))continue;const p={delay:n,elapsed:0,...a};if(window.HandoffAppearAnimations&&!f.hasAnimated){const T=e.getProps()[Qa];T&&(p.elapsed=window.HandoffAppearAnimations(T,d,f,M))}f.start(Ai(d,f,m,e.shouldReduceMotion&&ce.has(d)?{type:!1}:p));const y=f.animation;Ht(l)&&(l.add(d),y.then(()=>l.remove(d))),u.push(y)}return r&&Promise.all(u).then(()=>{r&&Si(e,r)}),u}function $n(e,t,n={}){const i=Zt(e,t,n.custom);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(Pi(e,i,n)):()=>Promise.resolve(),r=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=s;return ec(e,t,u+l,c,d,n)}:()=>Promise.resolve(),{when:o}=s;if(o){const[l,u]=o==="beforeChildren"?[a,r]:[r,a];return l().then(()=>u())}else return Promise.all([a(),r(n.delay)])}function ec(e,t,n=0,i=0,s=1,a){const r=[],o=(e.variantChildren.size-1)*i,l=s===1?(u=0)=>u*i:(u=0)=>o-u*i;return Array.from(e.variantChildren).sort(tc).forEach((u,c)=>{u.notify("AnimationStart",t),r.push($n(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(r)}function tc(e,t){return e.sortNodePosition(t)}function sn(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(a=>$n(e,a,n));i=Promise.all(s)}else if(typeof t=="string")i=$n(e,t,n);else{const s=typeof t=="function"?Zt(e,t,n.custom):t;i=Promise.all(Pi(e,s,n))}return i.then(()=>e.notify("AnimationComplete",t))}const nc=[...Qn].reverse(),ic=Qn.length;function sc(e){return t=>Promise.all(t.map(({animation:n,options:i})=>sn(e,n,i)))}function ac(e){let t=sc(e);const n=oc();let i=!0;const s=(l,u)=>{const c=Zt(e,u);if(c){const{transition:d,transitionEnd:f,...m}=c;l={...l,...m,...f}}return l};function a(l){t=l(e)}function r(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},f=[],m=new Set;let p={},y=1/0;for(let v=0;v<ic;v++){const g=nc[v],k=n[g],D=c[g]!==void 0?c[g]:d[g],b=yt(D),x=g===u?k.isActive:null;x===!1&&(y=v);let S=D===d[g]&&D!==c[g]&&b;if(S&&i&&e.manuallyAnimateOnMount&&(S=!1),k.protectedKeys={...p},!k.isActive&&x===null||!D&&!k.prevProp||Gt(D)||typeof D=="boolean")continue;const A=rc(k.prevProp,D);let P=A||g===u&&k.isActive&&!S&&b||v>y&&b;const R=Array.isArray(D)?D:[D];let K=R.reduce(s,{});x===!1&&(K={});const{prevResolvedValues:N={}}=k,j={...N,...K},V=w=>{P=!0,m.delete(w),k.needsAnimating[w]=!0};for(const w in j){const I=K[w],_=N[w];p.hasOwnProperty(w)||(I!==_?Kt(I)&&Kt(_)?!Ya(I,_)||A?V(w):k.protectedKeys[w]=!0:I!==void 0?V(w):m.add(w):I!==void 0&&m.has(w)?V(w):k.protectedKeys[w]=!0)}k.prevProp=D,k.prevResolvedValues=K,k.isActive&&(p={...p,...K}),i&&e.blockInitialAnimation&&(P=!1),P&&!S&&f.push(...R.map(w=>({animation:w,options:{type:g,...l}})))}if(m.size){const v={};m.forEach(g=>{const k=e.getBaseTarget(g);k!==void 0&&(v[g]=k)}),f.push({animation:v})}let T=!!f.length;return i&&c.initial===!1&&!e.manuallyAnimateOnMount&&(T=!1),i=!1,T?t(f):Promise.resolve()}function o(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(m=>{var p;return(p=m.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const f=r(c,l);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:r,setActive:o,setAnimateFunction:a,getState:()=>n}}function rc(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ya(t,e):!1}function Le(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function oc(){return{animate:Le(!0),whileInView:Le(),whileHover:Le(),whileTap:Le(),whileDrag:Le(),whileFocus:Le(),exit:Le()}}class lc extends Pe{constructor(t){super(t),t.animationState||(t.animationState=ac(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Gt(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let uc=0;class cc extends Pe{constructor(){super(...arguments),this.id=uc++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const a=this.node.animationState.setActive("exit",!t,{custom:i??this.node.getProps().custom});n&&!t&&a.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Vi={animation:{Feature:lc},exit:{Feature:cc}},Bn=(e,t)=>Math.abs(e-t);function Lr(e,t){const n=Bn(e.x,t.x),i=Bn(e.y,t.y);return Math.sqrt(n**2+i**2)}class Mr{constructor(t,n,{transformPagePoint:i}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=gn(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=Lr(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:m}=B;this.history.push({...f,timestamp:m});const{onStart:p,onMove:y}=this.handlers;c||(p&&p(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=pn(c,this.transformPagePoint),M.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:d,onSessionEnd:f}=this.handlers,m=gn(u.type==="pointercancel"?this.lastMoveEventInfo:pn(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,m),f&&f(u,m)},!Ha(t))return;this.handlers=n,this.transformPagePoint=i;const s=Qt(t),a=pn(s,this.transformPagePoint),{point:r}=a,{timestamp:o}=B;this.history=[{...r,timestamp:o}];const{onSessionStart:l}=n;l&&l(t,gn(a,this.history)),this.removeListeners=fe(ue(window,"pointermove",this.handlePointerMove),ue(window,"pointerup",this.handlePointerUp),ue(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),X(this.updatePoint)}}function pn(e,t){return t?{point:t(e.point)}:e}function hs(e,t){return{x:e.x-t.x,y:e.y-t.y}}function gn({point:e},t){return{point:e,delta:hs(e,Ir(t)),offset:hs(e,dc(t)),velocity:fc(t,.1)}}function dc(e){return e[0]}function Ir(e){return e[e.length-1]}function fc(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const s=Ir(e);for(;n>=0&&(i=e[n],!(s.timestamp-i.timestamp>me(t)));)n--;if(!i)return{x:0,y:0};const a=te(s.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const r={x:(s.x-i.x)/a,y:(s.y-i.y)/a};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function Q(e){return e.max-e.min}function On(e,t=0,n=.01){return Math.abs(e-t)<=n}function ps(e,t,n,i=.5){e.origin=i,e.originPoint=F(t.min,t.max,e.origin),e.scale=Q(n)/Q(t),(On(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=F(n.min,n.max,e.origin)-e.originPoint,(On(e.translate)||isNaN(e.translate))&&(e.translate=0)}function dt(e,t,n,i){ps(e.x,t.x,n.x,i?i.originX:void 0),ps(e.y,t.y,n.y,i?i.originY:void 0)}function gs(e,t,n){e.min=n.min+t.min,e.max=e.min+Q(t)}function mc(e,t,n){gs(e.x,t.x,n.x),gs(e.y,t.y,n.y)}function ys(e,t,n){e.min=t.min-n.min,e.max=e.min+Q(t)}function ft(e,t,n){ys(e.x,t.x,n.x),ys(e.y,t.y,n.y)}function hc(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?F(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?F(n,e,i.max):Math.min(e,n)),e}function ks(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function pc(e,{top:t,left:n,bottom:i,right:s}){return{x:ks(e.x,n,s),y:ks(e.y,t,i)}}function vs(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function gc(e,t){return{x:vs(e.x,t.x),y:vs(e.y,t.y)}}function yc(e,t){let n=.5;const i=Q(e),s=Q(t);return s>i?n=Se(t.min,t.max-i,e.min):i>s&&(n=Se(e.min,e.max-s,t.min)),Ce(0,1,n)}function kc(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Kn=.35;function vc(e=Kn){return e===!1?e=0:e===!0&&(e=Kn),{x:Ts(e,"left","right"),y:Ts(e,"top","bottom")}}function Ts(e,t,n){return{min:Ds(e,t),max:Ds(e,n)}}function Ds(e,t){return typeof e=="number"?e:e[t]||0}const As=()=>({translate:0,scale:1,origin:0,originPoint:0}),mt=()=>({x:As(),y:As()}),bs=()=>({min:0,max:0}),E=()=>({x:bs(),y:bs()});function re(e){return[e("x"),e("y")]}function wr({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function Tc({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Dc(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function yn(e){return e===void 0||e===1}function _n({scale:e,scaleX:t,scaleY:n}){return!yn(e)||!yn(t)||!yn(n)}function Me(e){return _n(e)||Fr(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Fr(e){return Cs(e.x)||Cs(e.y)}function Cs(e){return e&&e!=="0%"}function jt(e,t,n){const i=e-n,s=t*i;return n+s}function Ss(e,t,n,i,s){return s!==void 0&&(e=jt(e,s,i)),jt(e,n,i)+t}function Nn(e,t=0,n=1,i,s){e.min=Ss(e.min,t,n,i,s),e.max=Ss(e.max,t,n,i,s)}function Rr(e,{x:t,y:n}){Nn(e.x,t.translate,t.scale,t.originPoint),Nn(e.y,n.translate,n.scale,n.originPoint)}function Ac(e,t,n,i=!1){const s=n.length;if(!s)return;t.x=t.y=1;let a,r;for(let o=0;o<s;o++){a=n[o],r=a.projectionDelta;const l=a.instance;l&&l.style&&l.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&_e(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),r&&(t.x*=r.x.scale,t.y*=r.y.scale,Rr(e,r)),i&&Me(a.latestValues)&&_e(e,a.latestValues))}t.x=xs(t.x),t.y=xs(t.y)}function xs(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Ae(e,t){e.min=e.min+t,e.max=e.max+t}function Ps(e,t,[n,i,s]){const a=t[s]!==void 0?t[s]:.5,r=F(e.min,e.max,a);Nn(e,t[n],t[i],r,t.scale)}const bc=["x","scaleX","originX"],Cc=["y","scaleY","originY"];function _e(e,t){Ps(e.x,t,bc),Ps(e.y,t,Cc)}function Er(e,t){return wr(Dc(e.getBoundingClientRect(),t))}function Sc(e,t,n){const i=Er(e,n),{scroll:s}=t;return s&&(Ae(i.x,s.offset.x),Ae(i.y,s.offset.y)),i}const xc=new WeakMap;class Pc{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=E(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=l=>{this.stopAnimation(),n&&this.snapToCursor(Qt(l,"page").point)},a=(l,u)=>{const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();if(c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=za(c),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),re(p=>{let y=this.getAxisMotionValue(p).get()||0;if(le.test(y)){const{projection:T}=this.visualElement;if(T&&T.layout){const v=T.layout.layoutBox[p];v&&(y=Q(v)*(parseFloat(y)/100))}}this.originPoint[p]=y}),f&&M.update(()=>f(l,u),!1,!0);const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},r=(l,u)=>{const{dragPropagation:c,dragDirectionLock:d,onDirectionLock:f,onDrag:m}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:p}=u;if(d&&this.currentDirection===null){this.currentDirection=Vc(p),this.currentDirection!==null&&f&&f(this.currentDirection);return}this.updateAxis("x",u.point,p),this.updateAxis("y",u.point,p),this.visualElement.render(),m&&m(l,u)},o=(l,u)=>this.stop(l,u);this.panSession=new Mr(t,{onSessionStart:s,onStart:a,onMove:r,onSessionEnd:o},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&M.update(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:s}=this.getProps();if(!i||!It(t,s,this.currentDirection))return;const a=this.getAxisMotionValue(t);let r=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(r=hc(r,this.constraints[t],this.elastic[t])),a.set(r)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:i}=this.visualElement.projection||{},s=this.constraints;t&&Oe(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=pc(i.layoutBox,t):this.constraints=!1,this.elastic=vc(n),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&re(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=kc(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Oe(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const a=Sc(i,s.root,this.visualElement.getTransformPagePoint());let r=gc(s.layout.layoutBox,a);if(n){const o=n(Tc(r));this.hasMutatedConstraints=!!o,o&&(r=wr(o))}return r}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:a,dragSnapToOrigin:r,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},u=re(c=>{if(!It(c,n,this.currentDirection))return;let d=l&&l[c]||{};r&&(d={min:0,max:0});const f=s?200:1e6,m=s?40:1e7,p={type:"inertia",velocity:i?t[c]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...a,...d};return this.startAxisValueAnimation(c,p)});return Promise.all(u).then(o)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return i.start(Ai(t,i,0,n))}stopAnimation(){re(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){re(n=>{const{drag:i}=this.getProps();if(!It(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,a=this.getAxisMotionValue(n);if(s&&s.layout){const{min:r,max:o}=s.layout.layoutBox[n];a.set(t[n]-F(r,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Oe(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};re(r=>{const o=this.getAxisMotionValue(r);if(o){const l=o.get();s[r]=yc({min:l,max:l},this.constraints[r])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),re(r=>{if(!It(r,t,null))return;const o=this.getAxisMotionValue(r),{min:l,max:u}=this.constraints[r];o.set(F(l,u,s[r]))})}addListeners(){if(!this.visualElement.current)return;xc.set(this.visualElement,this);const t=this.visualElement.current,n=ue(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Oe(l)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,a=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const r=oe(window,"resize",()=>this.scalePositionWithinConstraints()),o=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(re(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{r(),n(),a(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:a=!1,dragElastic:r=Kn,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:a,dragElastic:r,dragMomentum:o}}}function It(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Vc(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Lc extends Pe{constructor(t){super(t),this.removeGroupControls=H,this.removeListeners=H,this.controls=new Pc(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||H}unmount(){this.removeGroupControls(),this.removeListeners()}}const Vs=e=>(t,n)=>{e&&M.update(()=>e(t,n))};class Mc extends Pe{constructor(){super(...arguments),this.removePointerDownListener=H}onPointerDown(t){this.session=new Mr(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Vs(t),onStart:Vs(n),onMove:i,onEnd:(a,r)=>{delete this.session,s&&M.update(()=>s(a,r))}}}mount(){this.removePointerDownListener=ue(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function $r(){const e=h.useContext(Xe);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,s=h.useId();return h.useEffect(()=>i(s),[]),!t&&n?[!1,()=>n&&n(s)]:[!0]}function Ic(){return wc(h.useContext(Xe))}function wc(e){return e===null?!0:e.isPresent}const Rt={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ls(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const at={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(C.test(e))e=parseFloat(e);else return e;const n=Ls(e,t.target.x),i=Ls(e,t.target.y);return`${n}% ${i}%`}},Fc={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,s=ge.parse(e);if(s.length>5)return i;const a=ge.createTransformer(e),r=typeof s[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;s[0+r]/=o,s[1+r]/=l;const u=F(o,l,.5);return typeof s[2+r]=="number"&&(s[2+r]/=u),typeof s[3+r]=="number"&&(s[3+r]/=u),a(s)}};class Rc extends Wn.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:a}=t;Pa(Ec),a&&(n.group&&n.group.add(a),i&&i.register&&s&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Rt.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:s,isPresent:a}=this.props,r=i.projection;return r&&(r.isPresent=a,s||t.layoutDependency!==n||n===void 0?r.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?r.promote():r.relegate()||M.postRender(()=>{const o=r.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Br(e){const[t,n]=$r(),i=h.useContext(Ue);return Wn.createElement(Rc,{...e,layoutGroup:i,switchLayoutGroup:h.useContext(Jn),isPresent:t,safeToRemove:n})}const Ec={borderRadius:{...at,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:at,borderTopRightRadius:at,borderBottomLeftRadius:at,borderBottomRightRadius:at,boxShadow:Fc},Or=["TopLeft","TopRight","BottomLeft","BottomRight"],$c=Or.length,Ms=e=>typeof e=="string"?parseFloat(e):e,Is=e=>typeof e=="number"||C.test(e);function Bc(e,t,n,i,s,a){s?(e.opacity=F(0,n.opacity!==void 0?n.opacity:1,Oc(i)),e.opacityExit=F(t.opacity!==void 0?t.opacity:1,0,Kc(i))):a&&(e.opacity=F(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let r=0;r<$c;r++){const o=`border${Or[r]}Radius`;let l=ws(t,o),u=ws(n,o);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Is(l)===Is(u)?(e[o]=Math.max(F(Ms(l),Ms(u),i),0),(le.test(u)||le.test(l))&&(e[o]+="%")):e[o]=u}(t.rotate||n.rotate)&&(e.rotate=F(t.rotate||0,n.rotate||0,i))}function ws(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Oc=Kr(0,.5,Jt),Kc=Kr(.5,.95,H);function Kr(e,t,n){return i=>i<e?0:i>t?1:n(Se(e,t,i))}function Fs(e,t){e.min=t.min,e.max=t.max}function J(e,t){Fs(e.x,t.x),Fs(e.y,t.y)}function Rs(e,t,n,i,s){return e-=t,e=jt(e,1/n,i),s!==void 0&&(e=jt(e,1/s,i)),e}function _c(e,t=0,n=1,i=.5,s,a=e,r=e){if(le.test(t)&&(t=parseFloat(t),t=F(r.min,r.max,t/100)-r.min),typeof t!="number")return;let o=F(a.min,a.max,i);e===a&&(o-=t),e.min=Rs(e.min,t,n,o,s),e.max=Rs(e.max,t,n,o,s)}function Es(e,t,[n,i,s],a,r){_c(e,t[n],t[i],t[s],t.scale,a,r)}const Nc=["x","scaleX","originX"],Hc=["y","scaleY","originY"];function $s(e,t,n,i){Es(e.x,t,Nc,n?n.x:void 0,i?i.x:void 0),Es(e.y,t,Hc,n?n.y:void 0,i?i.y:void 0)}function Bs(e){return e.translate===0&&e.scale===1}function _r(e){return Bs(e.x)&&Bs(e.y)}function Hn(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Os(e){return Q(e.x)/Q(e.y)}class jc{constructor(){this.members=[]}add(t){nn(this.members,t),t.scheduleRender()}remove(t){if(We(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(s=>t===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const a=this.members[s];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ks(e,t,n){let i="";const s=e.x.translate/t.x,a=e.y.translate/t.y;if((s||a)&&(i=`translate3d(${s}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(i+=`rotate(${l}deg) `),u&&(i+=`rotateX(${u}deg) `),c&&(i+=`rotateY(${c}deg) `)}const r=e.x.scale*t.x,o=e.y.scale*t.y;return(r!==1||o!==1)&&(i+=`scale(${r}, ${o})`),i||"none"}const Uc=(e,t)=>e.depth-t.depth;class Nr{constructor(){this.children=[],this.isDirty=!1}add(t){nn(this.children,t),this.isDirty=!0}remove(t){We(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Uc),this.isDirty=!1,this.children.forEach(t)}}function Hr(e,t){const n=performance.now(),i=({timestamp:s})=>{const a=s-n;a>=t&&(X(i),e(a-t))};return M.read(i,!0),()=>X(i)}function zc(e){window.MotionDebug&&window.MotionDebug.record(e)}function jr(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Li(e,t,n){const i=O(e)?e:ee(e);return i.start(Ai("",i,t,n)),i.animation}const _s=["","X","Y","Z"],Ns=1e3;let Wc=0;const Ie={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Ur({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(r={},o=t==null?void 0:t()){this.id=Wc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{Ie.totalNodes=Ie.resolvedTargetDeltas=Ie.recalculatedProjection=0,this.nodes.forEach(Yc),this.nodes.forEach(Jc),this.nodes.forEach(ed),this.nodes.forEach(Xc),zc(Ie)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Nr)}addEventListener(r,o){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new bi),this.eventHandlers.get(r).add(o)}notifyListeners(r,...o){const l=this.eventHandlers.get(r);l&&l.notify(...o)}hasListeners(r){return this.eventHandlers.has(r)}mount(r,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=jr(r),this.instance=r;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(r,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=Hr(f,250),Rt.hasAnimatedSinceResize&&(Rt.hasAnimatedSinceResize=!1,this.nodes.forEach(js))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:m,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||ad,{onLayoutAnimationStart:T,onLayoutAnimationComplete:v}=c.getProps(),g=!this.targetLayout||!Hn(this.targetLayout,p)||m,k=!f&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||k||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,k);const D={...Sr(y,"layout"),onPlay:T,onComplete:v};(c.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else f||js(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,X(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(td),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Hs);return}this.isUpdating&&(this.isUpdating=!1,this.nodes.forEach(Zc),this.nodes.forEach(Gc),this.nodes.forEach(qc),this.clearAllSnapshots(),Fe.update.process(B),Fe.preRender.process(B),Fe.render.process(B))}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Qc),this.sharedNodes.forEach(nd)}scheduleUpdateProjection(){M.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){M.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutCorrected=E(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let o=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(o=!1),o&&(this.scroll={animationId:this.root.animationId,phase:r,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const r=this.isLayoutDirty||this.shouldResetTransform,o=this.projectionDelta&&!_r(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;r&&(o||Me(this.latestValues)||c)&&(s(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return r&&(l=this.removeTransform(l)),rd(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:r}=this.options;if(!r)return E();const o=r.measureViewportBox(),{scroll:l}=this.root;return l&&(Ae(o.x,l.offset.x),Ae(o.y,l.offset.y)),o}removeElementScroll(r){const o=E();J(o,r);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){J(o,r);const{scroll:f}=this.root;f&&(Ae(o.x,-f.offset.x),Ae(o.y,-f.offset.y))}Ae(o.x,c.offset.x),Ae(o.y,c.offset.y)}}return o}applyTransform(r,o=!1){const l=E();J(l,r);for(let u=0;u<this.path.length;u++){const c=this.path[u];!o&&c.options.layoutScroll&&c.scroll&&c!==c.root&&_e(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Me(c.latestValues)&&_e(l,c.latestValues)}return Me(this.latestValues)&&_e(l,this.latestValues),l}removeTransform(r){const o=E();J(o,r);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Me(u.latestValues))continue;_n(u.latestValues)&&u.updateSnapshot();const c=E(),d=u.measurePageBox();J(c,d),$s(o,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Me(this.latestValues)&&$s(o,this.latestValues),o}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==B.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(r||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=B.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=E(),this.relativeTargetOrigin=E(),ft(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),J(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=E(),this.targetWithTransforms=E()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),mc(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):J(this.target,this.layout.layoutBox),Rr(this.target,this.targetDelta)):J(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=E(),this.relativeTargetOrigin=E(),ft(this.relativeTargetOrigin,this.target,m.target),J(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ie.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||_n(this.parent.latestValues)||Fr(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var r;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||!((r=this.parent)===null||r===void 0)&&r.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===B.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;J(this.layoutCorrected,this.layout.layoutBox),Ac(this.layoutCorrected,this.treeScale,this.path,l);const{target:f}=o;if(!f)return;this.projectionDelta||(this.projectionDelta=mt(),this.projectionDeltaWithTransform=mt());const m=this.treeScale.x,p=this.treeScale.y,y=this.projectionTransform;dt(this.projectionDelta,this.layoutCorrected,f,this.latestValues),this.projectionTransform=Ks(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==m||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f)),Ie.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),r){const o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(r,o=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=mt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const f=E(),m=l?l.source:void 0,p=this.layout?this.layout.source:void 0,y=m!==p,T=this.getStack(),v=!T||T.members.length<=1,g=!!(y&&!v&&this.options.crossfade===!0&&!this.path.some(sd));this.animationProgress=0;let k;this.mixTargetDelta=D=>{const b=D/1e3;Us(d.x,r.x,b),Us(d.y,r.y,b),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ft(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),id(this.relativeTarget,this.relativeTargetOrigin,f,b),k&&Hn(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=E()),J(k,this.relativeTarget)),y&&(this.animationValues=c,Bc(c,u,this.latestValues,b,g,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(X(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=M.update(()=>{Rt.hasAnimatedSinceResize=!0,this.currentAnimation=Li(0,Ns,{...r,onUpdate:o=>{this.mixTargetDelta(o),r.onUpdate&&r.onUpdate(o)},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ns),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:o,target:l,layout:u,latestValues:c}=r;if(!(!o||!l||!u)){if(this!==r&&this.layout&&u&&zr(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||E();const d=Q(this.layout.layoutBox.x);l.x.min=r.target.x.min,l.x.max=l.x.min+d;const f=Q(this.layout.layoutBox.y);l.y.min=r.target.y.min,l.y.max=l.y.min+f}J(o,l),_e(o,c),dt(this.projectionDeltaWithTransform,this.layoutCorrected,o,c)}}registerSharedNode(r,o){this.sharedNodes.has(r)||this.sharedNodes.set(r,new jc),this.sharedNodes.get(r).add(o);const u=o.options.initialPromotionConfig;o.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(o):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){var r;const{layoutId:o}=this.options;return o?((r=this.getStack())===null||r===void 0?void 0:r.lead)||this:this}getPrevLead(){var r;const{layoutId:o}=this.options;return o?(r=this.getStack())===null||r===void 0?void 0:r.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:o,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),r&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetRotation(){const{visualElement:r}=this.options;if(!r)return;let o=!1;const{latestValues:l}=r;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(o=!0),!o)return;const u={};for(let c=0;c<_s.length;c++){const d="rotate"+_s[c];l[d]&&(u[d]=l[d],r.setStaticValue(d,0))}r.render();for(const c in u)r.setStaticValue(c,u[c]);r.scheduleRender()}getProjectionStyles(r={}){var o,l;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ct(r.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=ct(r.pointerEvents)||""),this.hasProjected&&!Me(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Ks(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:m,y:p}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${p.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(o=f.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Ot){if(f[y]===void 0)continue;const{correct:T,applyTo:v}=Ot[y],g=u.transform==="none"?f[y]:T(f[y],d);if(v){const k=v.length;for(let D=0;D<k;D++)u[v[D]]=g}else u[y]=g}return this.options.layoutId&&(u.pointerEvents=d===this?ct(r.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>{var o;return(o=r.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(Hs),this.root.sharedNodes.clear()}}}function Gc(e){e.updateLayout()}function qc(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=e.layout,{animationType:a}=e.options,r=n.source!==e.layout.source;a==="size"?re(d=>{const f=r?n.measuredBox[d]:n.layoutBox[d],m=Q(f);f.min=i[d].min,f.max=f.min+m}):zr(a,n.layoutBox,i)&&re(d=>{const f=r?n.measuredBox[d]:n.layoutBox[d],m=Q(i[d]);f.max=f.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+m)});const o=mt();dt(o,i,n.layoutBox);const l=mt();r?dt(l,e.applyTransform(s,!0),n.measuredBox):dt(l,i,n.layoutBox);const u=!_r(o);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:m}=d;if(f&&m){const p=E();ft(p,n.layoutBox,f.layoutBox);const y=E();ft(y,i,m.layoutBox),Hn(p,y)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=p,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function Yc(e){Ie.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Xc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Qc(e){e.clearSnapshot()}function Hs(e){e.clearMeasurements()}function Zc(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function js(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function Jc(e){e.resolveTargetDelta()}function ed(e){e.calcProjection()}function td(e){e.resetRotation()}function nd(e){e.removeLeadSnapshot()}function Us(e,t,n){e.translate=F(t.translate,0,n),e.scale=F(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function zs(e,t,n,i){e.min=F(t.min,n.min,i),e.max=F(t.max,n.max,i)}function id(e,t,n,i){zs(e.x,t.x,n.x,i),zs(e.y,t.y,n.y,i)}function sd(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const ad={duration:.45,ease:[.4,0,.1,1]};function Ws(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function rd(e){Ws(e.x),Ws(e.y)}function zr(e,t,n){return e==="position"||e==="preserve-aspect"&&!On(Os(t),Os(n),.2)}const od=Ur({attachResizeListener:(e,t)=>oe(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Re={current:void 0},Wr=Ur({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Re.current){const e=new od({});e.mount(window),e.setOptions({layoutScroll:!0}),Re.current=e}return Re.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Gr={pan:{Feature:Mc},drag:{Feature:Lc,ProjectionNode:Wr,MeasureLayout:Br}},ld=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function ud(e){const t=ld.exec(e);if(!t)return[,];const[,n,i]=t;return[n,i]}function jn(e,t,n=1){const[i,s]=ud(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);return a?a.trim():bn(s)?jn(s,t,n+1):s}function cd(e,{...t},n){const i=e.current;if(!(i instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(s=>{const a=s.get();if(!bn(a))return;const r=jn(a,i);r&&s.set(r)});for(const s in t){const a=t[s];if(!bn(a))continue;const r=jn(a,i);r&&(t[s]=r,n||(n={}),n[s]===void 0&&(n[s]=a))}return{target:t,transitionEnd:n}}const dd=new Set(["width","height","top","left","right","bottom","x","y"]),qr=e=>dd.has(e),fd=e=>Object.keys(e).some(qr),Gs=e=>e===Ee||e===C,qs=(e,t)=>parseFloat(e.split(", ")[t]),Ys=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/);if(s)return qs(s[1],t);{const a=i.match(/^matrix\((.+)\)$/);return a?qs(a[1],e):0}},md=new Set(["x","y","z"]),hd=Ct.filter(e=>!md.has(e));function pd(e){const t=[];return hd.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Xs={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Ys(4,13),y:Ys(5,14)},gd=(e,t,n)=>{const i=t.measureViewportBox(),s=t.current,a=getComputedStyle(s),{display:r}=a,o={};r==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{o[u]=Xs[u](i,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(o[u]),e[u]=Xs[u](l,a)}),e},yd=(e,t,n={},i={})=>{t={...t},i={...i};const s=Object.keys(t).filter(qr);let a=[],r=!1;const o=[];if(s.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=st(c);const f=t[l];let m;if(Kt(f)){const p=f.length,y=f[0]===null?1:0;c=f[y],d=st(c);for(let T=y;T<p&&f[T]!==null;T++)m?Pt(st(f[T])===m):m=st(f[T])}else m=st(f);if(d!==m)if(Gs(d)&&Gs(m)){const p=u.get();typeof p=="string"&&u.set(parseFloat(p)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&m===C&&(t[l]=f.map(parseFloat))}else d!=null&&d.transform&&(m!=null&&m.transform)&&(c===0||f===0)?c===0?u.set(m.transform(c)):t[l]=d.transform(f):(r||(a=pd(e),r=!0),o.push(l),i[l]=i[l]!==void 0?i[l]:t[l],u.jump(f))}),o.length){const l=o.indexOf("height")>=0?window.pageYOffset:null,u=gd(t,e,o);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),bt&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:i}}else return{target:t,transitionEnd:i}};function kd(e,t,n,i){return fd(t)?yd(e,t,n,i):{target:t,transitionEnd:i}}const vd=(e,t,n,i)=>{const s=cd(e,t,i);return t=s.target,i=s.transitionEnd,kd(e,t,n,i)},Ut={current:null},Mi={current:!1};function Yr(){if(Mi.current=!0,!!bt)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ut.current=e.matches;e.addListener(t),t()}else Ut.current=!1}function Td(e,t,n){const{willChange:i}=t;for(const s in t){const a=t[s],r=n[s];if(O(a))e.addValue(s,a),Ht(i)&&i.add(s);else if(O(r))e.addValue(s,ee(a,{owner:e})),Ht(i)&&i.remove(s);else if(r!==a)if(e.hasValue(s)){const o=e.getValue(s);!o.hasAnimated&&o.set(a)}else{const o=e.getStaticValue(s);e.addValue(s,ee(o!==void 0?o:a,{owner:e}))}}for(const s in n)t[s]===void 0&&e.removeValue(s);return t}const Ge=new WeakMap,Xr=Object.keys(kt),Dd=Xr.length,Qs=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Ad=Zn.length;class Ii{constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:s,visualState:a},r={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>M.render(this.render,!1,!0);const{latestValues:o,renderState:l}=a;this.latestValues=o,this.baseTarget={...o},this.initialValues=n.initial?{...o}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=r,this.isControllingVariants=qt(n),this.isVariantNode=Sa(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const f=c[d];o[d]!==void 0&&O(f)&&(f.set(o[d],!1),Ht(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Ge.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Mi.current||Yr(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ut.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ge.delete(this.current),this.projection&&this.projection.unmount(),X(this.notifyUpdate),X(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const i=ce.has(t),s=n.on("change",r=>{this.latestValues[t]=r,this.props.onUpdate&&M.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{s(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},i,s,a){let r,o;for(let l=0;l<Dd;l++){const u=Xr[l],{isEnabled:c,Feature:d,ProjectionNode:f,MeasureLayout:m}=kt[u];f&&(r=f),c(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),m&&(o=m))}if(!this.projection&&r){this.projection=new r(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f,layoutRoot:m}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&Oe(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:f,layoutRoot:m})}return o}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update(this.props,this.prevProps):(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):E()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Qs.length;i++){const s=Qs[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a=t["on"+s];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=Td(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Ad;i++){const s=Zn[i],a=this.props[s];(yt(a)||a===!1)&&(n[s]=a)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=ee(n,{owner:this}),this.addValue(t,i)),i}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props,s=typeof i=="string"||typeof i=="object"?(n=ui(this.props,i))===null||n===void 0?void 0:n[t]:void 0;if(i&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!O(a)?a:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new bi),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Qr extends Ii{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...i},{transformValues:s},a){let r=Vr(i,t||{},this);if(s&&(n&&(n=s(n)),i&&(i=s(i)),r&&(r=s(r))),a){xi(this,i,r);const o=vd(this,i,r,n);n=o.transitionEnd,i=o.target}return{transition:t,transitionEnd:n,...i}}}function bd(e){return window.getComputedStyle(e)}class Zr extends Qr{readValueFromInstance(t,n){if(ce.has(n)){const i=Di(n);return i&&i.default||0}else{const i=bd(t),s=(ii(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Er(t,n)}build(t,n,i,s){si(t,n,i,s.transformTemplate)}scrapeMotionValuesFromProps(t,n){return li(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;O(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,i,s){Oa(t,n,i,s)}}class Jr extends Qr{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ce.has(n)){const i=Di(n);return i&&i.default||0}return n=Ka.has(n)?n:Tt(n),t.getAttribute(n)}measureInstanceViewportBox(){return E()}scrapeMotionValuesFromProps(t,n){return Na(t,n)}build(t,n,i,s){ri(t,n,i,this.isSVGTag,s.transformTemplate)}renderInstance(t,n,i,s){_a(t,n,i,s)}mount(t){this.isSVGTag=oi(t.tagName),super.mount(t)}}const wi=(e,t)=>ni(e)?new Jr(t,{enableHardwareAcceleration:!1}):new Zr(t,{enableHardwareAcceleration:!0}),eo={layout:{ProjectionNode:Wr,MeasureLayout:Br}},to={...Vi,...qa,...Gr,...eo},Fi=xa((e,t)=>ci(e,t,to,wi));function Cd(e){return ti(ci(e,{forwardMotionProps:!1},to,wi))}const Sd=xa(ci);function no(){const e=h.useRef(!1);return pe(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function an(){const e=no(),[t,n]=h.useState(0),i=h.useCallback(()=>{e.current&&n(t+1)},[t]);return[h.useCallback(()=>M.postRender(i),[i]),t]}class xd extends h.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Pd({children:e,isPresent:t}){const n=h.useId(),i=h.useRef(null),s=h.useRef({width:0,height:0,top:0,left:0});return h.useInsertionEffect(()=>{const{width:a,height:r,top:o,left:l}=s.current;if(t||!i.current||!a||!r)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${r}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),h.createElement(xd,{isPresent:t,childRef:i,sizeRef:s},h.cloneElement(e,{ref:i}))}const kn=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:s,presenceAffectsLayout:a,mode:r})=>{const o=Y(Vd),l=h.useId(),u=h.useMemo(()=>({id:l,initial:t,isPresent:n,custom:s,onExitComplete:c=>{o.set(c,!0);for(const d of o.values())if(!d)return;i&&i()},register:c=>(o.set(c,!1),()=>o.delete(c))}),a?void 0:[n]);return h.useMemo(()=>{o.forEach((c,d)=>o.set(d,!1))},[n]),h.useEffect(()=>{!n&&!o.size&&i&&i()},[n]),r==="popLayout"&&(e=h.createElement(Pd,{isPresent:n},e)),h.createElement(Xe.Provider,{value:u},e)};function Vd(){return new Map}function Ri(e){return h.useEffect(()=>()=>e(),[])}const Be=e=>e.key||"";function Ld(e,t){e.forEach(n=>{const i=Be(n);t.set(i,n)})}function Md(e){const t=[];return h.Children.forEach(e,n=>{h.isValidElement(n)&&t.push(n)}),t}const Id=({children:e,custom:t,initial:n=!0,onExitComplete:i,exitBeforeEnter:s,presenceAffectsLayout:a=!0,mode:r="sync"})=>{const o=h.useContext(Ue).forceRender||an()[0],l=no(),u=Md(e);let c=u;const d=h.useRef(new Map).current,f=h.useRef(c),m=h.useRef(new Map).current,p=h.useRef(!0);if(pe(()=>{p.current=!1,Ld(u,m),f.current=c}),Ri(()=>{p.current=!0,m.clear(),d.clear()}),p.current)return h.createElement(h.Fragment,null,c.map(g=>h.createElement(kn,{key:Be(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:r},g)));c=[...c];const y=f.current.map(Be),T=u.map(Be),v=y.length;for(let g=0;g<v;g++){const k=y[g];T.indexOf(k)===-1&&!d.has(k)&&d.set(k,void 0)}return r==="wait"&&d.size&&(c=[]),d.forEach((g,k)=>{if(T.indexOf(k)!==-1)return;const D=m.get(k);if(!D)return;const b=y.indexOf(k);let x=g;if(!x){const S=()=>{m.delete(k),d.delete(k);const A=f.current.findIndex(P=>P.key===k);if(f.current.splice(A,1),!d.size){if(f.current=u,l.current===!1)return;o(),i&&i()}};x=h.createElement(kn,{key:Be(D),isPresent:!1,onExitComplete:S,custom:t,presenceAffectsLayout:a,mode:r},D),d.set(k,x)}c.splice(b,0,x)}),c=c.map(g=>{const k=g.key;return d.has(k)?g:h.createElement(kn,{key:Be(g),isPresent:!0,presenceAffectsLayout:a,mode:r},g)}),h.createElement(h.Fragment,null,d.size?c:c.map(g=>h.cloneElement(g)))};function wd({children:e,isValidProp:t,...n}){t&&Ea(t),n={...h.useContext(he),...n},n.isStatic=Y(()=>n.isStatic);const i=h.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return h.createElement(he.Provider,{value:i},e)}function Fd({children:e,features:t,strict:n=!1}){const[,i]=h.useState(!vn(t)),s=h.useRef(void 0);if(!vn(t)){const{renderer:a,...r}=t;s.current=a,An(r)}return h.useEffect(()=>{vn(t)&&t().then(({renderer:a,...r})=>{An(r),s.current=a,i(!0)})},[]),h.createElement(Xn.Provider,{value:{renderer:s.current,strict:n}},e)}function vn(e){return typeof e=="function"}const io=h.createContext(null),Rd=e=>!e.isLayoutDirty&&e.willUpdate(!1);function Zs(){const e=new Set,t=new WeakMap,n=()=>e.forEach(Rd);return{add:i=>{e.add(i),t.set(i,i.addEventListener("willUpdate",n))},remove:i=>{e.delete(i);const s=t.get(i);s&&(s(),t.delete(i)),n()},dirty:n}}const so=e=>e===!0,Ed=e=>so(e===!0)||e==="id",ao=({children:e,id:t,inherit:n=!0})=>{const i=h.useContext(Ue),s=h.useContext(io),[a,r]=an(),o=h.useRef(null),l=i.id||s;o.current===null&&(Ed(n)&&l&&(t=t?l+"-"+t:l),o.current={id:t,group:so(n)&&i.group||Zs()});const u=h.useMemo(()=>({...o.current,forceRender:a}),[r]);return h.createElement(Ue.Provider,{value:u},e)},ro=h.createContext(null);function $d(e,t,n,i){if(!i)return e;const s=e.findIndex(c=>c.value===t);if(s===-1)return e;const a=i>0?1:-1,r=e[s+a];if(!r)return e;const o=e[s],l=r.layout,u=F(l.min,l.max,.5);return a===1&&o.layout.max+n>u||a===-1&&o.layout.min+n<u?zu(e,s,s+a):e}function Bd({children:e,as:t="ul",axis:n="y",onReorder:i,values:s,...a},r){const o=Y(()=>Fi(t)),l=[],u=h.useRef(!1),c={axis:n,registerItem:(d,f)=>{f&&l.findIndex(m=>d===m.value)===-1&&(l.push({value:d,layout:f[n]}),l.sort(_d))},updateOrder:(d,f,m)=>{if(u.current)return;const p=$d(l,d,f,m);l!==p&&(u.current=!0,i(p.map(Kd).filter(y=>s.indexOf(y)!==-1)))}};return h.useEffect(()=>{u.current=!1}),h.createElement(o,{...a,ref:r,ignoreStrict:!0},h.createElement(ro.Provider,{value:c},e))}const Od=h.forwardRef(Bd);function Kd(e){return e.value}function _d(e,t){return e.layout.min-t.layout.min}function xe(e){const t=Y(()=>ee(e)),{isStatic:n}=h.useContext(he);if(n){const[,i]=h.useState(e);h.useEffect(()=>t.on("change",i),[])}return t}const Nd=e=>typeof e=="object"&&e.mix,Hd=e=>Nd(e)?e.mix:void 0;function oo(...e){const t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],s=e[1+n],a=e[2+n],r=e[3+n],o=Vt(s,a,{mixer:Hd(a[0]),...r});return t?o(i):o}function lo(e,t){const n=xe(t()),i=()=>n.set(t());return i(),pe(()=>{const s=()=>M.update(i,!1,!0),a=e.map(r=>r.on("change",s));return()=>{a.forEach(r=>r()),X(i)}}),n}function zt(e,t,n,i){const s=typeof t=="function"?t:oo(t,n,i);return Array.isArray(e)?Js(e,s):Js([e],([a])=>s(a))}function Js(e,t){const n=Y(()=>[]);return lo(e,()=>{n.length=0;const i=e.length;for(let s=0;s<i;s++)n[s]=e[s].get();return t(n)})}function ea(e,t=0){return O(e)?e:xe(t)}function jd({children:e,style:t={},value:n,as:i="li",onDrag:s,layout:a=!0,...r},o){const l=Y(()=>Fi(i)),u=h.useContext(ro),c={x:ea(t.x),y:ea(t.y)},d=zt([c.x,c.y],([T,v])=>T||v?1:"unset"),f=h.useRef(null),{axis:m,registerItem:p,updateOrder:y}=u;return h.useEffect(()=>{p(n,f.current)},[u]),h.createElement(l,{drag:m,...r,dragSnapToOrigin:!0,style:{...t,x:c.x,y:c.y,zIndex:d},layout:a,onDrag:(T,v)=>{const{velocity:g}=v;g[m]&&y(n,c[m].get(),g[m]),s&&s(T,v)},onLayoutMeasure:T=>{f.current=T},ref:o,ignoreStrict:!0},e)}const Ud=h.forwardRef(jd),zd={Group:Od,Item:Ud},uo={renderer:wi,...Vi,...qa},Wd={...uo,...Gr,...eo};function Gd(e,...t){const n=e.length;function i(){let s="";for(let a=0;a<n;a++){s+=e[a];const r=t[a];r&&(s+=O(r)?r.get():r)}return s}return lo(t.filter(O),i)}function qd(e,t={}){const{isStatic:n}=h.useContext(he),i=h.useRef(null),s=xe(O(e)?e.get():e),a=()=>{i.current&&i.current.stop()};return h.useInsertionEffect(()=>s.attach((r,o)=>{if(n)return o(r);if(a(),i.current=ze({keyframes:[s.get(),r],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o}),!B.isProcessing){const l=performance.now()-B.timestamp;l<30&&(i.current.time=te(l))}return s.get()},a),[JSON.stringify(t)]),pe(()=>{if(O(e))return e.on("change",r=>s.set(parseFloat(r)))},[s]),s}function co(e,t,n){h.useInsertionEffect(()=>e.on(t,n),[e,t,n])}function Yd(e){const t=xe(e.getVelocity());return co(e,"velocityChange",n=>{t.set(n)}),t}function rn(e,t,n){var i;if(typeof e=="string"){let s=document;t&&(Pt(!!t.current),s=t.current),n?((i=n[e])!==null&&i!==void 0||(n[e]=s.querySelectorAll(e)),e=n[e]):e=s.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const Et=new WeakMap;let De;function Xd(e,t){if(t){const{inlineSize:n,blockSize:i}=t[0];return{width:n,height:i}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function Qd({target:e,contentRect:t,borderBoxSize:n}){var i;(i=Et.get(e))===null||i===void 0||i.forEach(s=>{s({target:e,contentSize:t,get size(){return Xd(e,n)}})})}function Zd(e){e.forEach(Qd)}function Jd(){typeof ResizeObserver>"u"||(De=new ResizeObserver(Zd))}function ef(e,t){De||Jd();const n=rn(e);return n.forEach(i=>{let s=Et.get(i);s||(s=new Set,Et.set(i,s)),s.add(t),De==null||De.observe(i)}),()=>{n.forEach(i=>{const s=Et.get(i);s==null||s.delete(t),s!=null&&s.size||De==null||De.unobserve(i)})}}const $t=new Set;let ht;function tf(){ht=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};$t.forEach(n=>n(t))},window.addEventListener("resize",ht)}function nf(e){return $t.add(e),ht||tf(),()=>{$t.delete(e),!$t.size&&ht&&(ht=void 0)}}function sf(e,t){return typeof e=="function"?nf(e):ef(e,t)}const af=50,ta=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),rf=()=>({time:0,x:ta(),y:ta()}),of={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function na(e,t,n,i){const s=n[t],{length:a,position:r}=of[t],o=s.current,l=n.time;s.current=e["scroll"+r],s.scrollLength=e["scroll"+a]-e["client"+a],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=Se(0,s.scrollLength,s.current);const u=i-l;s.velocity=u>af?0:Ti(s.current-o,u)}function lf(e,t,n){na(e,"x",t,n),na(e,"y",t,n),t.time=n}function uf(e,t){let n={x:0,y:0},i=e;for(;i&&i!==t;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){const{top:s,left:a}=i.getBBox();for(n.x+=a,n.y+=s;i&&i.tagName!=="svg";)i=i.parentNode}return n}const cf={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Un={start:0,center:.5,end:1};function ia(e,t,n=0){let i=0;if(Un[e]!==void 0&&(e=Un[e]),typeof e=="string"){const s=parseFloat(e);e.endsWith("px")?i=s:e.endsWith("%")?e=s/100:e.endsWith("vw")?i=s/100*document.documentElement.clientWidth:e.endsWith("vh")?i=s/100*document.documentElement.clientHeight:e=s}return typeof e=="number"&&(i=t*e),n+i}const df=[0,0];function ff(e,t,n,i){let s=Array.isArray(e)?e:df,a=0,r=0;return typeof e=="number"?s=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?s=e.split(" "):s=[e,Un[e]?e:"0"]),a=ia(s[0],n,i),r=ia(s[1],t),a-r}const mf={x:0,y:0};function hf(e,t,n){let{offset:i=cf.All}=n;const{target:s=e,axis:a="y"}=n,r=a==="y"?"height":"width",o=s!==e?uf(s,e):mf,l=s===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:s.clientWidth,height:s.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let c=!t[a].interpolate;const d=i.length;for(let f=0;f<d;f++){const m=ff(i[f],u[r],l[r],o[a]);!c&&m!==t[a].interpolatorOffsets[f]&&(c=!0),t[a].offset[f]=m}c&&(t[a].interpolate=Vt(t[a].offset,vi(i)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function pf(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function gf(e,t,n,i={}){return{measure:()=>pf(e,i.target,n),update:s=>{lf(e,n,s),(i.offset||i.target)&&hf(e,n,i)},notify:()=>t(n)}}const rt=new WeakMap,sa=new WeakMap,Tn=new WeakMap,aa=e=>e===document.documentElement?window:e;function fo(e,{container:t=document.documentElement,...n}={}){let i=Tn.get(t);i||(i=new Set,Tn.set(t,i));const s=rf(),a=gf(t,e,s,n);if(i.add(a),!rt.has(t)){const o=()=>{for(const f of i)f.measure()},l=()=>{for(const f of i)f.update(B.timestamp)},u=()=>{for(const f of i)f.notify()},c=()=>{M.read(o,!1,!0),M.update(l,!1,!0),M.update(u,!1,!0)};rt.set(t,c);const d=aa(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&sa.set(t,sf(t,c)),d.addEventListener("scroll",c,{passive:!0})}const r=rt.get(t);return M.read(r,!1,!0),()=>{var o;X(r);const l=Tn.get(t);if(!l||(l.delete(a),l.size))return;const u=rt.get(t);rt.delete(t),u&&(aa(t).removeEventListener("scroll",u),(o=sa.get(t))===null||o===void 0||o(),window.removeEventListener("resize",u))}}function ra(e,t){fi(!!(!t||t.current))}const yf=()=>({scrollX:ee(0),scrollY:ee(0),scrollXProgress:ee(0),scrollYProgress:ee(0)});function Ei({container:e,target:t,layoutEffect:n=!0,...i}={}){const s=Y(yf);return(n?pe:h.useEffect)(()=>(ra("target",t),ra("container",e),fo(({x:r,y:o})=>{s.scrollX.set(r.current),s.scrollXProgress.set(r.progress),s.scrollY.set(o.current),s.scrollYProgress.set(o.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[]),s}function kf(e){return Ei({container:e})}function vf(){return Ei()}function mo(e){const t=h.useRef(0),{isStatic:n}=h.useContext(he);h.useEffect(()=>{if(n)return;const i=({timestamp:s,delta:a})=>{t.current||(t.current=s),e(s-t.current,a)};return M.update(i,!0),()=>X(i)},[e])}function Tf(){const e=xe(0);return mo(t=>e.set(t)),e}class Df extends Ci{constructor(){super(...arguments),this.members=[],this.transforms=new Set}add(t){let n;ce.has(t)?(this.transforms.add(t),n="transform"):!t.startsWith("origin")&&!ii(t)&&t!=="willChange"&&(n=Tt(t)),n&&(nn(this.members,n),this.update())}remove(t){ce.has(t)?(this.transforms.delete(t),this.transforms.size||We(this.members,"transform")):We(this.members,Tt(t)),this.update()}update(){this.set(this.members.length?this.members.join(", "):"auto")}}function Af(){return Y(()=>new Df("auto"))}function ho(){!Mi.current&&Yr();const[e]=h.useState(Ut.current);return e}function bf(){const e=ho(),{reducedMotion:t}=h.useContext(he);return t==="never"?!1:t==="always"?!0:e}function Cf(e){e.values.forEach(t=>t.stop())}function po(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,i){const s=[];return e.forEach(a=>{s.push(sn(a,n,{transitionOverride:i}))}),Promise.all(s)},set(n){return e.forEach(i=>{Qu(i,n)})},stop(){e.forEach(n=>{Cf(n)})},mount(){return()=>{t.stop()}}};return t}class go{constructor(t){this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=n}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Sf(e){return typeof e=="object"&&!Array.isArray(e)}function xf(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=jr(e)?new Jr(t,{enableHardwareAcceleration:!1}):new Zr(t,{enableHardwareAcceleration:!0});n.mount(e),Ge.set(e,n)}function Pf(e,t=100){const n=tn({keyframes:[0,t],...e}),i=Math.min(wn(n),In);return{type:"keyframes",ease:s=>n.next(i*s).value/t,duration:te(i)}}function oa(e,t,n,i){var s;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:(s=i.get(t))!==null&&s!==void 0?s:e}const $i=(e,t,n)=>{const i=t-e;return((n-e)%i+i)%i+e};function Vf(e,t){return rr(e)?e[$i(0,e.length,t)]:e}function Lf(e,t,n){for(let i=0;i<e.length;i++){const s=e[i];s.at>t&&s.at<n&&(We(e,s),i--)}}function Mf(e,t,n,i,s,a){Lf(e,s,a);for(let r=0;r<t.length;r++)e.push({value:t[r],at:F(s,a,i[r]),easing:Vf(n,r)})}function If(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const wf="easeInOut";function Ff(e,{defaultTransition:t={},...n}={},i){const s=t.duration||.3,a=new Map,r=new Map,o={},l=new Map;let u=0,c=0,d=0;for(let f=0;f<e.length;f++){const m=e[f];if(typeof m=="string"){l.set(m,c);continue}else if(!Array.isArray(m)){l.set(m.name,oa(c,m.at,u,l));continue}let[p,y,T={}]=m;T.at!==void 0&&(c=oa(c,T.at,u,l));let v=0;const g=(k,D,b,x=0,S=0)=>{const A=Rf(k),{delay:P=0,times:R=vi(A),type:K="keyframes",...N}=D;let{ease:j=t.ease||"easeOut",duration:V}=D;const w=typeof P=="function"?P(x,S):P,I=A.length;if(I<=2&&K==="spring"){let Z=100;if(I===2&&Bf(A)){const ye=A[1]-A[0];Z=Math.abs(ye)}const L={...N};V!==void 0&&(L.duration=me(V));const G=Pf(L,Z);j=G.ease,V=G.duration}V??(V=s);const _=c+w,z=_+V;R.length===1&&R[0]===0&&(R[1]=1);const U=R.length-A.length;U>0&&Dr(R,U),A.length===1&&A.unshift(null),Mf(b,A,j,R,_,z),v=Math.max(w+V,v),d=Math.max(z,d)};if(O(p)){const k=la(p,r);g(y,T,ua("default",k))}else{const k=rn(p,i,o),D=k.length;for(let b=0;b<D;b++){y=y,T=T;const x=k[b],S=la(x,r);for(const A in y)g(y[A],Ef(T,A),ua(A,S),b,D)}u=c,c+=v}}return r.forEach((f,m)=>{for(const p in f){const y=f[p];y.sort(If);const T=[],v=[],g=[];for(let D=0;D<y.length;D++){const{at:b,value:x,easing:S}=y[D];T.push(x),v.push(Se(0,d,b)),g.push(S||"easeOut")}v[0]!==0&&(v.unshift(0),T.unshift(T[0]),g.unshift(wf)),v[v.length-1]!==1&&(v.push(1),T.push(null)),a.has(m)||a.set(m,{keyframes:{},transition:{}});const k=a.get(m);k.keyframes[p]=T,k.transition[p]={...t,duration:d,ease:g,times:v,...n}}}),a}function la(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function ua(e,t){return t[e]||(t[e]=[]),t[e]}function Rf(e){return Array.isArray(e)?e:[e]}function Ef(e,t){return e[t]?{...e,...e[t]}:{...e}}const $f=e=>typeof e=="number",Bf=e=>e.every($f);function yo(e,t,n,i){const s=rn(e,i),a=s.length,r=[];for(let o=0;o<a;o++){const l=s[o];Ge.has(l)||xf(l);const u=Ge.get(l),c={...n};typeof c.delay=="function"&&(c.delay=c.delay(o,a)),r.push(...Pi(u,{...t,transition:c},{}))}return new go(r)}const Of=e=>Array.isArray(e)&&Array.isArray(e[0]);function Kf(e,t,n){const i=[];return Ff(e,t,n).forEach(({keyframes:a,transition:r},o)=>{let l;O(o)?l=Li(o,a.default,r.default):l=yo(o,a,r),i.push(l)}),new go(i)}const Bi=e=>{function t(n,i,s){let a;return Of(n)?a=Kf(n,i,e):Sf(i)?a=yo(n,i,s,e):a=Li(n,i,s),e&&e.animations.push(a),a}return t},_f=Bi();function Nf(){const e=Y(()=>({current:null,animations:[]})),t=Y(()=>Bi(e));return Ri(()=>{e.animations.forEach(n=>n.stop())}),[e,t]}function ko(){const e=Y(po);return pe(e.mount,[]),e}const Hf=ko;function jf(...e){const t=h.useRef(0),[n,i]=h.useState(e[t.current]),s=h.useCallback(a=>{t.current=typeof a!="number"?$i(0,e.length,t.current+1):a,i(e[t.current])},[e.length,...e]);return[n,s]}const Uf={any:0,all:1};function vo(e,t,{root:n,margin:i,amount:s="any"}={}){const a=rn(e),r=new WeakMap,o=u=>{u.forEach(c=>{const d=r.get(c.target);if(c.isIntersecting!==!!d)if(c.isIntersecting){const f=t(c);typeof f=="function"?r.set(c.target,f):l.unobserve(c.target)}else d&&(d(c),r.delete(c.target))})},l=new IntersectionObserver(o,{root:n,rootMargin:i,threshold:typeof s=="number"?s:Uf[s]});return a.forEach(u=>l.observe(u)),()=>l.disconnect()}function zf(e,{root:t,margin:n,amount:i,once:s=!1}={}){const[a,r]=h.useState(!1);return h.useEffect(()=>{if(!e.current||s&&a)return;const o=()=>(r(!0),s?void 0:()=>r(!1)),l={root:t&&t.current||void 0,margin:n,amount:i==="some"?"any":i};return vo(e.current,o,l)},[t,e,n,s]),a}class To{constructor(){this.componentControls=new Set}subscribe(t){return this.componentControls.add(t),()=>this.componentControls.delete(t)}start(t,n){this.componentControls.forEach(i=>{i.start(t.nativeEvent||t,n)})}}const Wf=()=>new To;function Gf(){return Y(Wf)}function qf(e,t,n,i){h.useEffect(()=>{const s=e.current;if(n&&s)return oe(s,t,n,i)},[e,t,n,i])}function Do(e){return e!==null&&typeof e=="object"&&ei in e}function Yf(e){if(Do(e))return e[ei]}function Ao(){return Xf}function Xf(e){Re.current&&(Re.current.isUpdating=!1,Re.current.blockUpdate(),e&&e())}function Qf(){const[e,t]=an(),n=Ao();return h.useEffect(()=>{M.postRender(()=>M.postRender(()=>xn.current=!1))},[t]),i=>{n(()=>{xn.current=!0,e(),i()})}}function Zf(){return h.useCallback(()=>{const t=Re.current;t&&t.resetTree()},[])}const bo=(e,t)=>`${e}: ${t}`,Wt=new Map;function Jf(e,t,n,i){const s=bo(e,ce.has(t)?"transform":t),a=Wt.get(s);if(!a)return 0;const{animation:r,startTime:o}=a,l=()=>{Wt.delete(s);try{r.cancel()}catch{}};if(o!==null){const u=performance.now();return i.update(()=>{n.animation&&(n.animation.time=te(performance.now()-u))}),i.render(l),u-o||0}else return l(),0}function em(e,t,n,i,s){const a=e.dataset[Xa];if(!a)return;window.HandoffAppearAnimations=Jf;const r=bo(a,t),o=Pn(e,t,[n[0],n[0]],{duration:1e4,ease:"linear"});Wt.set(r,{animation:o,startTime:null});const l=()=>{o.cancel();const u=Pn(e,t,n,i);document.timeline&&(u.startTime=document.timeline.currentTime),Wt.set(r,{animation:u,startTime:performance.now()}),s&&s(u)};o.ready?o.ready.then(l).catch(H):l()}const zn=()=>({});class tm extends Ii{build(){}measureInstanceViewportBox(){return E()}resetTransform(){}restoreTransform(){}removeValueFromRenderState(){}renderInstance(){}scrapeMotionValuesFromProps(){return zn()}getBaseTargetFromProps(){}readValueFromInstance(t,n,i){return i.initialState[n]||0}sortInstanceNodePosition(){return 0}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...i}){const s=Vr(i,t||{},this);return xi(this,i,s),{transition:t,transitionEnd:n,...i}}}const nm=Xt({scrapeMotionValuesFromProps:zn,createRenderState:zn});function im(e){const[t,n]=h.useState(e),i=nm({},!1),s=Y(()=>new tm({props:{},visualState:i,presenceContext:null},{initialState:e}));h.useEffect(()=>(s.mount({}),()=>s.unmount()),[s]),h.useEffect(()=>{s.update({onUpdate:r=>{n({...r})}},null)},[n,s]);const a=Y(()=>r=>sn(s,r));return[t,a]}const sm=1e5,ca=e=>e>.001?1/e:sm;function am(e){let t=xe(1),n=xe(1);const{visualElement:i}=h.useContext(Ye);e?(t=e.scaleX||t,n=e.scaleY||n):i&&(t=i.getValue("scaleX",1),n=i.getValue("scaleY",1));const s=zt(t,ca),a=zt(n,ca);return{scaleX:s,scaleY:a}}let rm=0;const om=({children:e})=>(h.useEffect(()=>{},[]),h.createElement(ao,{id:Y(()=>`asl-${rm++}`)},e));function lm(e,t){if(e==="first")return 0;{const n=t-1;return e==="last"?n:n/2}}function um(e=.1,{startDelay:t=0,from:n=0,ease:i}={}){return(s,a)=>{const r=typeof n=="number"?n:lm(n,a),o=Math.abs(r-s);let l=e*o;if(i){const u=a*e;l=Vn(i)(l/u)*u}return t+l}}const cm=M,dm=Qe.reduce((e,t)=>(e[t]=n=>X(n),e),{}),fm=Object.freeze(Object.defineProperty({__proto__:null,AnimatePresence:Id,AnimateSharedLayout:om,DeprecatedLayoutGroupContext:io,DragControls:To,FlatTree:Nr,LayoutGroup:ao,LayoutGroupContext:Ue,LazyMotion:Fd,MotionConfig:wd,MotionConfigContext:he,MotionContext:Ye,MotionValue:Ci,PresenceContext:Xe,Reorder:zd,SwitchLayoutGroupContext:Jn,VisualElement:Ii,addPointerEvent:ue,addPointerInfo:ja,addScaleCorrector:Pa,animate:_f,animateValue:ze,animateVisualElement:sn,animationControls:po,animations:Vi,anticipate:ur,backIn:en,backInOut:lr,backOut:yi,buildTransform:La,calcLength:Q,cancelFrame:X,cancelSync:dm,checkTargetForNewValues:xi,circIn:gi,circInOut:or,circOut:Jt,clamp:Ce,color:q,complex:ge,createBox:E,createDomMotionComponent:Cd,createMotionComponent:ti,createScopedAnimate:Bi,cubicBezier:Ze,delay:Hr,distance:Bn,distance2D:Lr,domAnimation:uo,domMax:Wd,easeIn:sr,easeInOut:mi,easeOut:ar,filterProps:$a,frame:M,frameData:B,inView:vo,interpolate:Vt,invariant:Pt,isBrowser:bt,isDragActive:di,isMotionComponent:Do,isMotionValue:O,isValidMotionProp:vt,m:Sd,makeUseVisualState:Xt,mirrorEasing:hi,mix:F,motion:Fi,motionValue:ee,optimizedAppearDataAttribute:Qa,pipe:fe,progress:Se,px:C,resolveMotionValue:ct,reverseEasing:pi,scroll:fo,spring:tn,stagger:um,startOptimizedAppearAnimation:em,steps:Fe,stepsOrder:Qe,sync:cm,transform:oo,unwrapMotionComponent:Yf,useAnimate:Nf,useAnimation:Hf,useAnimationControls:ko,useAnimationFrame:mo,useCycle:jf,useDeprecatedAnimatedState:im,useDeprecatedInvertedScale:am,useDomEvent:qf,useDragControls:Gf,useElementScroll:kf,useForceUpdate:an,useInView:zf,useInstantLayoutTransition:Ao,useInstantTransition:Qf,useIsPresent:Ic,useIsomorphicLayoutEffect:pe,useMotionTemplate:Gd,useMotionValue:xe,useMotionValueEvent:co,usePresence:$r,useReducedMotion:ho,useReducedMotionConfig:bf,useResetProjection:Zf,useScroll:Ei,useSpring:qd,useTime:Tf,useTransform:zt,useUnmountEffect:Ri,useVelocity:Yd,useViewportScroll:vf,useWillChange:Af,visualElementStore:Ge,warning:fi,wrap:$i},Symbol.toStringTag,{value:"Module"})),mm=/^\s*>\s$/,hm=de.create({name:"blockquote",addOptions(){return{HTMLAttributes:{}}},content:"block+",group:"block",defining:!0,parseHTML(){return[{tag:"blockquote"}]},renderHTML({HTMLAttributes:e}){return["blockquote",W(this.options.HTMLAttributes,e),0]},addCommands(){return{setBlockquote:()=>({commands:e})=>e.wrapIn(this.name),toggleBlockquote:()=>({commands:e})=>e.toggleWrap(this.name),unsetBlockquote:()=>({commands:e})=>e.lift(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-b":()=>this.editor.commands.toggleBlockquote()}},addInputRules(){return[pt({find:mm,type:this.type})]}}),pm=/(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,gm=/(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g,ym=/(?:^|\s)((?:__)((?:[^__]+))(?:__))$/,km=/(?:^|\s)((?:__)((?:[^__]+))(?:__))/g,vm=qe.create({name:"bold",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"strong"},{tag:"b",getAttrs:e=>e.style.fontWeight!=="normal"&&null},{style:"font-weight",getAttrs:e=>/^(bold(er)?|[5-9]\d{2,})$/.test(e)&&null}]},renderHTML({HTMLAttributes:e}){return["strong",W(this.options.HTMLAttributes,e),0]},addCommands(){return{setBold:()=>({commands:e})=>e.setMark(this.name),toggleBold:()=>({commands:e})=>e.toggleMark(this.name),unsetBold:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-b":()=>this.editor.commands.toggleBold(),"Mod-B":()=>this.editor.commands.toggleBold()}},addInputRules(){return[He({find:pm,type:this.type}),He({find:ym,type:this.type})]},addPasteRules(){return[je({find:gm,type:this.type}),je({find:km,type:this.type})]}}),Tm=de.create({name:"listItem",addOptions(){return{HTMLAttributes:{}}},content:"paragraph block*",defining:!0,parseHTML(){return[{tag:"li"}]},renderHTML({HTMLAttributes:e}){return["li",W(this.options.HTMLAttributes,e),0]},addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}}),da=qe.create({name:"textStyle",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"span",getAttrs:e=>e.hasAttribute("style")?{}:!1}]},renderHTML({HTMLAttributes:e}){return["span",W(this.options.HTMLAttributes,e),0]},addCommands(){return{removeEmptyTextStyle:()=>({state:e,commands:t})=>{const n=ya(e,this.type);return Object.entries(n).some(([,s])=>!!s)?!0:t.unsetMark(this.name)}}}}),fa=/^\s*([-+*])\s$/,Co=de.create({name:"bulletList",addOptions(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:!1,keepAttributes:!1}},group:"block list",content(){return`${this.options.itemTypeName}+`},parseHTML(){return[{tag:"ul"}]},renderHTML({HTMLAttributes:e}){return["ul",W(this.options.HTMLAttributes,e),0]},addCommands(){return{toggleBulletList:()=>({commands:e,chain:t})=>this.options.keepAttributes?t().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(Tm.name,this.editor.getAttributes(da.name)).run():e.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks)}},addKeyboardShortcuts(){return{"Mod-Shift-8":()=>this.editor.commands.toggleBulletList()}},addInputRules(){let e=pt({find:fa,type:this.type});return(this.options.keepMarks||this.options.keepAttributes)&&(e=pt({find:fa,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:()=>this.editor.getAttributes(da.name),editor:this.editor})),[e]}}),Dm=/(?:^|\s)((?:`)((?:[^`]+))(?:`))$/,Am=/(?:^|\s)((?:`)((?:[^`]+))(?:`))/g,bm=qe.create({name:"code",addOptions(){return{HTMLAttributes:{}}},excludes:"_",code:!0,exitable:!0,parseHTML(){return[{tag:"code"}]},renderHTML({HTMLAttributes:e}){return["code",W(this.options.HTMLAttributes,e),0]},addCommands(){return{setCode:()=>({commands:e})=>e.setMark(this.name),toggleCode:()=>({commands:e})=>e.toggleMark(this.name),unsetCode:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-e":()=>this.editor.commands.toggleCode()}},addInputRules(){return[He({find:Dm,type:this.type})]},addPasteRules(){return[je({find:Am,type:this.type})]}}),Cm=/^```([a-z]+)?[\s\n]$/,Sm=/^~~~([a-z]+)?[\s\n]$/,xm=de.create({name:"codeBlock",addOptions(){return{languageClassPrefix:"language-",exitOnTripleEnter:!0,exitOnArrowDown:!0,HTMLAttributes:{}}},content:"text*",marks:"",group:"block",code:!0,defining:!0,addAttributes(){return{language:{default:null,parseHTML:e=>{var t;const{languageClassPrefix:n}=this.options,a=[...((t=e.firstElementChild)===null||t===void 0?void 0:t.classList)||[]].filter(r=>r.startsWith(n)).map(r=>r.replace(n,""))[0];return a||null},rendered:!1}}},parseHTML(){return[{tag:"pre",preserveWhitespace:"full"}]},renderHTML({node:e,HTMLAttributes:t}){return["pre",W(this.options.HTMLAttributes,t),["code",{class:e.attrs.language?this.options.languageClassPrefix+e.attrs.language:null},0]]},addCommands(){return{setCodeBlock:e=>({commands:t})=>t.setNode(this.name,e),toggleCodeBlock:e=>({commands:t})=>t.toggleNode(this.name,"paragraph",e)}},addKeyboardShortcuts(){return{"Mod-Alt-c":()=>this.editor.commands.toggleCodeBlock(),Backspace:()=>{const{empty:e,$anchor:t}=this.editor.state.selection,n=t.pos===1;return!e||t.parent.type.name!==this.name?!1:n||!t.parent.textContent.length?this.editor.commands.clearNodes():!1},Enter:({editor:e})=>{if(!this.options.exitOnTripleEnter)return!1;const{state:t}=e,{selection:n}=t,{$from:i,empty:s}=n;if(!s||i.parent.type!==this.type)return!1;const a=i.parentOffset===i.parent.nodeSize-2,r=i.parent.textContent.endsWith(`

`);return!a||!r?!1:e.chain().command(({tr:o})=>(o.delete(i.pos-2,i.pos),!0)).exitCode().run()},ArrowDown:({editor:e})=>{if(!this.options.exitOnArrowDown)return!1;const{state:t}=e,{selection:n,doc:i}=t,{$from:s,empty:a}=n;if(!a||s.parent.type!==this.type||!(s.parentOffset===s.parent.nodeSize-2))return!1;const o=s.after();return o===void 0||i.nodeAt(o)?!1:e.commands.exitCode()}}},addInputRules(){return[Dn({find:Cm,type:this.type,getAttributes:e=>({language:e[1]})}),Dn({find:Sm,type:this.type,getAttributes:e=>({language:e[1]})})]},addProseMirrorPlugins(){return[new Gn({key:new _o("codeBlockVSCodeHandler"),props:{handlePaste:(e,t)=>{if(!t.clipboardData||this.editor.isActive(this.type.name))return!1;const n=t.clipboardData.getData("text/plain"),i=t.clipboardData.getData("vscode-editor-data"),s=i?JSON.parse(i):void 0,a=s==null?void 0:s.mode;if(!n||!a)return!1;const{tr:r}=e.state;return r.replaceSelectionWith(this.type.create({language:a})),r.setSelection(gt.near(r.doc.resolve(Math.max(0,r.selection.from-2)))),r.insertText(n.replace(/\r\n?/g,`
`)),r.setMeta("paste",!0),e.dispatch(r),!0}}})]}});function Pm(e={}){return new Gn({view(t){return new Vm(t,e)}})}class Vm{constructor(t,n){this.editorView=t,this.cursorPos=null,this.element=null,this.timeout=-1,this.width=n.width||1,this.color=n.color||"black",this.class=n.class,this.handlers=["dragover","dragend","drop","dragleave"].map(i=>{let s=a=>{this[i](a)};return t.dom.addEventListener(i,s),{name:i,handler:s}})}destroy(){this.handlers.forEach(({name:t,handler:n})=>this.editorView.dom.removeEventListener(t,n))}update(t,n){this.cursorPos!=null&&n.doc!=t.state.doc&&(this.cursorPos>t.state.doc.content.size?this.setCursor(null):this.updateOverlay())}setCursor(t){t!=this.cursorPos&&(this.cursorPos=t,t==null?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())}updateOverlay(){let t=this.editorView.state.doc.resolve(this.cursorPos),n=!t.parent.inlineContent,i;if(n){let o=t.nodeBefore,l=t.nodeAfter;if(o||l){let u=this.editorView.nodeDOM(this.cursorPos-(o?o.nodeSize:0));if(u){let c=u.getBoundingClientRect(),d=o?c.bottom:c.top;o&&l&&(d=(d+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),i={left:c.left,right:c.right,top:d-this.width/2,bottom:d+this.width/2}}}}if(!i){let o=this.editorView.coordsAtPos(this.cursorPos);i={left:o.left-this.width/2,right:o.left+this.width/2,top:o.top,bottom:o.bottom}}let s=this.editorView.dom.offsetParent;this.element||(this.element=s.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none; background-color: "+this.color),this.element.classList.toggle("prosemirror-dropcursor-block",n),this.element.classList.toggle("prosemirror-dropcursor-inline",!n);let a,r;if(!s||s==document.body&&getComputedStyle(s).position=="static")a=-pageXOffset,r=-pageYOffset;else{let o=s.getBoundingClientRect();a=o.left-s.scrollLeft,r=o.top-s.scrollTop}this.element.style.left=i.left-a+"px",this.element.style.top=i.top-r+"px",this.element.style.width=i.right-i.left+"px",this.element.style.height=i.bottom-i.top+"px"}scheduleRemoval(t){clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.setCursor(null),t)}dragover(t){if(!this.editorView.editable)return;let n=this.editorView.posAtCoords({left:t.clientX,top:t.clientY}),i=n&&n.inside>=0&&this.editorView.state.doc.nodeAt(n.inside),s=i&&i.type.spec.disableDropCursor,a=typeof s=="function"?s(this.editorView,n,t):s;if(n&&!a){let r=n.pos;if(this.editorView.dragging&&this.editorView.dragging.slice&&(r=No(this.editorView.state.doc,r,this.editorView.dragging.slice),r==null))return this.setCursor(null);this.setCursor(r),this.scheduleRemoval(5e3)}}dragend(){this.scheduleRemoval(20)}drop(){this.scheduleRemoval(20)}dragleave(t){(t.target==this.editorView.dom||!this.editorView.dom.contains(t.relatedTarget))&&this.setCursor(null)}}const Lm=qn.create({name:"dropCursor",addOptions(){return{color:"currentColor",width:1,class:void 0}},addProseMirrorPlugins(){return[Pm(this.options)]}});class $ extends Bt{constructor(t){super(t,t)}map(t,n){let i=t.resolve(n.map(this.head));return $.valid(i)?new $(i):Bt.near(i)}content(){return va.empty}eq(t){return t instanceof $&&t.head==this.head}toJSON(){return{type:"gapcursor",pos:this.head}}static fromJSON(t,n){if(typeof n.pos!="number")throw new RangeError("Invalid input for GapCursor.fromJSON");return new $(t.resolve(n.pos))}getBookmark(){return new Oi(this.anchor)}static valid(t){let n=t.parent;if(n.isTextblock||!Mm(t)||!Im(t))return!1;let i=n.type.spec.allowGapCursor;if(i!=null)return i;let s=n.contentMatchAt(t.index()).defaultType;return s&&s.isTextblock}static findGapCursorFrom(t,n,i=!1){e:for(;;){if(!i&&$.valid(t))return t;let s=t.pos,a=null;for(let r=t.depth;;r--){let o=t.node(r);if(n>0?t.indexAfter(r)<o.childCount:t.index(r)>0){a=o.child(n>0?t.indexAfter(r):t.index(r)-1);break}else if(r==0)return null;s+=n;let l=t.doc.resolve(s);if($.valid(l))return l}for(;;){let r=n>0?a.firstChild:a.lastChild;if(!r){if(a.isAtom&&!a.isText&&!ka.isSelectable(a)){t=t.doc.resolve(s+a.nodeSize*n),i=!1;continue e}break}a=r,s+=n;let o=t.doc.resolve(s);if($.valid(o))return o}return null}}}$.prototype.visible=!1;$.findFrom=$.findGapCursorFrom;Bt.jsonID("gapcursor",$);class Oi{constructor(t){this.pos=t}map(t){return new Oi(t.map(this.pos))}resolve(t){let n=t.resolve(this.pos);return $.valid(n)?new $(n):Bt.near(n)}}function Mm(e){for(let t=e.depth;t>=0;t--){let n=e.index(t),i=e.node(t);if(n==0){if(i.type.spec.isolating)return!0;continue}for(let s=i.child(n-1);;s=s.lastChild){if(s.childCount==0&&!s.inlineContent||s.isAtom||s.type.spec.isolating)return!0;if(s.inlineContent)return!1}}return!0}function Im(e){for(let t=e.depth;t>=0;t--){let n=e.indexAfter(t),i=e.node(t);if(n==i.childCount){if(i.type.spec.isolating)return!0;continue}for(let s=i.child(n);;s=s.firstChild){if(s.childCount==0&&!s.inlineContent||s.isAtom||s.type.spec.isolating)return!0;if(s.inlineContent)return!1}}return!0}function wm(){return new Gn({props:{decorations:$m,createSelectionBetween(e,t,n){return t.pos==n.pos&&$.valid(n)?new $(n):null},handleClick:Rm,handleKeyDown:Fm,handleDOMEvents:{beforeinput:Em}}})}const Fm=Ho({ArrowLeft:wt("horiz",-1),ArrowRight:wt("horiz",1),ArrowUp:wt("vert",-1),ArrowDown:wt("vert",1)});function wt(e,t){const n=e=="vert"?t>0?"down":"up":t>0?"right":"left";return function(i,s,a){let r=i.selection,o=t>0?r.$to:r.$from,l=r.empty;if(r instanceof gt){if(!a.endOfTextblock(n)||o.depth==0)return!1;l=!1,o=i.doc.resolve(t>0?o.after():o.before())}let u=$.findGapCursorFrom(o,t,l);return u?(s&&s(i.tr.setSelection(new $(u))),!0):!1}}function Rm(e,t,n){if(!e||!e.editable)return!1;let i=e.state.doc.resolve(t);if(!$.valid(i))return!1;let s=e.posAtCoords({left:n.clientX,top:n.clientY});return s&&s.inside>-1&&ka.isSelectable(e.state.doc.nodeAt(s.inside))?!1:(e.dispatch(e.state.tr.setSelection(new $(i))),!0)}function Em(e,t){if(t.inputType!="insertCompositionText"||!(e.state.selection instanceof $))return!1;let{$from:n}=e.state.selection,i=n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);if(!i)return!1;let s=Ji.empty;for(let r=i.length-1;r>=0;r--)s=Ji.from(i[r].createAndFill(null,s));let a=e.state.tr.replace(n.pos,n.pos,new va(s,0,0));return a.setSelection(gt.near(a.doc.resolve(n.pos+1))),e.dispatch(a),!1}function $m(e){if(!(e.selection instanceof $))return null;let t=document.createElement("div");return t.className="ProseMirror-gapcursor",jo.create(e.doc,[Uo.widget(e.selection.head,t,{key:"gapcursor"})])}const Bm=qn.create({name:"gapCursor",addProseMirrorPlugins(){return[wm()]},extendNodeSchema(e){var t;const n={name:e.name,options:e.options,storage:e.storage};return{allowGapCursor:(t=zo(Wo(e,"allowGapCursor",n)))!==null&&t!==void 0?t:null}}}),Om=de.create({name:"hardBreak",addOptions(){return{keepMarks:!0,HTMLAttributes:{}}},inline:!0,group:"inline",selectable:!1,parseHTML(){return[{tag:"br"}]},renderHTML({HTMLAttributes:e}){return["br",W(this.options.HTMLAttributes,e)]},renderText(){return`
`},addCommands(){return{setHardBreak:()=>({commands:e,chain:t,state:n,editor:i})=>e.first([()=>e.exitCode(),()=>e.command(()=>{const{selection:s,storedMarks:a}=n;if(s.$from.parent.type.spec.isolating)return!1;const{keepMarks:r}=this.options,{splittableMarks:o}=i.extensionManager,l=a||s.$to.parentOffset&&s.$from.marks();return t().insertContent({type:this.name}).command(({tr:u,dispatch:c})=>{if(c&&l&&r){const d=l.filter(f=>o.includes(f.type.name));u.ensureMarks(d)}return!0}).run()})])}},addKeyboardShortcuts(){return{"Mod-Enter":()=>this.editor.commands.setHardBreak(),"Shift-Enter":()=>this.editor.commands.setHardBreak()}}}),Km=de.create({name:"heading",addOptions(){return{levels:[1,2,3,4,5,6],HTMLAttributes:{}}},content:"inline*",group:"block",defining:!0,addAttributes(){return{level:{default:1,rendered:!1}}},parseHTML(){return this.options.levels.map(e=>({tag:`h${e}`,attrs:{level:e}}))},renderHTML({node:e,HTMLAttributes:t}){return[`h${this.options.levels.includes(e.attrs.level)?e.attrs.level:this.options.levels[0]}`,W(this.options.HTMLAttributes,t),0]},addCommands(){return{setHeading:e=>({commands:t})=>this.options.levels.includes(e.level)?t.setNode(this.name,e):!1,toggleHeading:e=>({commands:t})=>this.options.levels.includes(e.level)?t.toggleNode(this.name,"paragraph",e):!1}},addKeyboardShortcuts(){return this.options.levels.reduce((e,t)=>({...e,[`Mod-Alt-${t}`]:()=>this.editor.commands.toggleHeading({level:t})}),{})},addInputRules(){return this.options.levels.map(e=>Dn({find:new RegExp(`^(#{1,${e}})\\s$`),type:this.type,getAttributes:{level:e}}))}}),_m=de.create({name:"horizontalRule",addOptions(){return{HTMLAttributes:{}}},group:"block",parseHTML(){return[{tag:"hr"}]},renderHTML({HTMLAttributes:e}){return["hr",W(this.options.HTMLAttributes,e)]},addCommands(){return{setHorizontalRule:()=>({chain:e})=>e().insertContent({type:this.name}).command(({tr:t,dispatch:n})=>{var i;if(n){const{$to:s}=t.selection,a=s.end();if(s.nodeAfter)t.setSelection(gt.create(t.doc,s.pos));else{const r=(i=s.parent.type.contentMatch.defaultType)===null||i===void 0?void 0:i.create();r&&(t.insert(a,r),t.setSelection(gt.create(t.doc,a)))}t.scrollIntoView()}return!0}).run()}},addInputRules(){return[Go({find:/^(?:---|—-|___\s|\*\*\*\s)$/,type:this.type})]}}),Nm=/(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,Hm=/(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g,jm=/(?:^|\s)((?:_)((?:[^_]+))(?:_))$/,Um=/(?:^|\s)((?:_)((?:[^_]+))(?:_))/g,zm=qe.create({name:"italic",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"em"},{tag:"i",getAttrs:e=>e.style.fontStyle!=="normal"&&null},{style:"font-style=italic"}]},renderHTML({HTMLAttributes:e}){return["em",W(this.options.HTMLAttributes,e),0]},addCommands(){return{setItalic:()=>({commands:e})=>e.setMark(this.name),toggleItalic:()=>({commands:e})=>e.toggleMark(this.name),unsetItalic:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-i":()=>this.editor.commands.toggleItalic(),"Mod-I":()=>this.editor.commands.toggleItalic()}},addInputRules(){return[He({find:Nm,type:this.type}),He({find:jm,type:this.type})]},addPasteRules(){return[je({find:Hm,type:this.type}),je({find:Um,type:this.type})]}}),So=de.create({name:"listItem",addOptions(){return{HTMLAttributes:{}}},content:"paragraph block*",defining:!0,parseHTML(){return[{tag:"li"}]},renderHTML({HTMLAttributes:e}){return["li",W(this.options.HTMLAttributes,e),0]},addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}}),Wm=de.create({name:"listItem",addOptions(){return{HTMLAttributes:{}}},content:"paragraph block*",defining:!0,parseHTML(){return[{tag:"li"}]},renderHTML({HTMLAttributes:e}){return["li",W(this.options.HTMLAttributes,e),0]},addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}}),ma=qe.create({name:"textStyle",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"span",getAttrs:e=>e.hasAttribute("style")?{}:!1}]},renderHTML({HTMLAttributes:e}){return["span",W(this.options.HTMLAttributes,e),0]},addCommands(){return{removeEmptyTextStyle:()=>({state:e,commands:t})=>{const n=ya(e,this.type);return Object.entries(n).some(([,s])=>!!s)?!0:t.unsetMark(this.name)}}}}),ha=/^(\d+)\.\s$/,xo=de.create({name:"orderedList",addOptions(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:!1,keepAttributes:!1}},group:"block list",content(){return`${this.options.itemTypeName}+`},addAttributes(){return{start:{default:1,parseHTML:e=>e.hasAttribute("start")?parseInt(e.getAttribute("start")||"",10):1}}},parseHTML(){return[{tag:"ol"}]},renderHTML({HTMLAttributes:e}){const{start:t,...n}=e;return t===1?["ol",W(this.options.HTMLAttributes,n),0]:["ol",W(this.options.HTMLAttributes,e),0]},addCommands(){return{toggleOrderedList:()=>({commands:e,chain:t})=>this.options.keepAttributes?t().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(Wm.name,this.editor.getAttributes(ma.name)).run():e.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks)}},addKeyboardShortcuts(){return{"Mod-Shift-7":()=>this.editor.commands.toggleOrderedList()}},addInputRules(){let e=pt({find:ha,type:this.type,getAttributes:t=>({start:+t[1]}),joinPredicate:(t,n)=>n.childCount+n.attrs.start===+t[1]});return(this.options.keepMarks||this.options.keepAttributes)&&(e=pt({find:ha,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:t=>({start:+t[1],...this.editor.getAttributes(ma.name)}),joinPredicate:(t,n)=>n.childCount+n.attrs.start===+t[1],editor:this.editor})),[e]}}),Gm=/(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/,qm=/(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g,Ym=qe.create({name:"strike",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",consuming:!1,getAttrs:e=>e.includes("line-through")?{}:!1}]},renderHTML({HTMLAttributes:e}){return["s",W(this.options.HTMLAttributes,e),0]},addCommands(){return{setStrike:()=>({commands:e})=>e.setMark(this.name),toggleStrike:()=>({commands:e})=>e.toggleMark(this.name),unsetStrike:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-x":()=>this.editor.commands.toggleStrike()}},addInputRules(){return[He({find:Gm,type:this.type})]},addPasteRules(){return[je({find:qm,type:this.type})]}}),Po=qn.create({name:"starterKit",addExtensions(){var e,t,n,i,s,a,r,o,l,u,c,d,f,m,p,y,T,v;const g=[];return this.options.blockquote!==!1&&g.push(hm.configure((e=this.options)===null||e===void 0?void 0:e.blockquote)),this.options.bold!==!1&&g.push(vm.configure((t=this.options)===null||t===void 0?void 0:t.bold)),this.options.bulletList!==!1&&g.push(Co.configure((n=this.options)===null||n===void 0?void 0:n.bulletList)),this.options.code!==!1&&g.push(bm.configure((i=this.options)===null||i===void 0?void 0:i.code)),this.options.codeBlock!==!1&&g.push(xm.configure((s=this.options)===null||s===void 0?void 0:s.codeBlock)),this.options.document!==!1&&g.push(Ta.configure((a=this.options)===null||a===void 0?void 0:a.document)),this.options.dropcursor!==!1&&g.push(Lm.configure((r=this.options)===null||r===void 0?void 0:r.dropcursor)),this.options.gapcursor!==!1&&g.push(Bm.configure((o=this.options)===null||o===void 0?void 0:o.gapcursor)),this.options.hardBreak!==!1&&g.push(Om.configure((l=this.options)===null||l===void 0?void 0:l.hardBreak)),this.options.heading!==!1&&g.push(Km.configure((u=this.options)===null||u===void 0?void 0:u.heading)),this.options.history!==!1&&g.push(Da.configure((c=this.options)===null||c===void 0?void 0:c.history)),this.options.horizontalRule!==!1&&g.push(_m.configure((d=this.options)===null||d===void 0?void 0:d.horizontalRule)),this.options.italic!==!1&&g.push(zm.configure((f=this.options)===null||f===void 0?void 0:f.italic)),this.options.listItem!==!1&&g.push(So.configure((m=this.options)===null||m===void 0?void 0:m.listItem)),this.options.orderedList!==!1&&g.push(xo.configure((p=this.options)===null||p===void 0?void 0:p.orderedList)),this.options.paragraph!==!1&&g.push(Aa.configure((y=this.options)===null||y===void 0?void 0:y.paragraph)),this.options.strike!==!1&&g.push(Ym.configure((T=this.options)===null||T===void 0?void 0:T.strike)),this.options.text!==!1&&g.push(ba.configure((v=this.options)===null||v===void 0?void 0:v.text)),g}}),Vo=function(){var e={defaultValue:null,kind:"LocalArgument",name:"after"},t={defaultValue:null,kind:"LocalArgument",name:"first"},n={defaultValue:null,kind:"LocalArgument",name:"includeItem"},i={defaultValue:null,kind:"LocalArgument",name:"includeItemPluginDatas"},s={defaultValue:null,kind:"LocalArgument",name:"includeItemPluginDatasFull"},a={defaultValue:null,kind:"LocalArgument",name:"includeNotes"},r={defaultValue:null,kind:"LocalArgument",name:"includeTaskPluginDatas"},o={defaultValue:null,kind:"LocalArgument",name:"includeTaskPluginDatasFull"},l={defaultValue:null,kind:"LocalArgument",name:"includeTasks"},u={defaultValue:null,kind:"LocalArgument",name:"renderDay"},c={defaultValue:null,kind:"LocalArgument",name:"renderDayContent"},d={defaultValue:null,kind:"LocalArgument",name:"renderDays"},f={defaultValue:null,kind:"LocalArgument",name:"renderItemCard"},m={defaultValue:null,kind:"LocalArgument",name:"renderTaskCard"},p=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"first",variableName:"first"}],y={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},T={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},D={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},A={alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},P={alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},R={alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},K={alias:null,args:null,kind:"ScalarField",name:"updatedAt",storageKey:null},N={alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},V=[{alias:null,args:null,kind:"ScalarField",name:"full",storageKey:null}],w={condition:"includeItemPluginDatas",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[y,D,K,N,j,{condition:"includeItemPluginDatasFull",kind:"Condition",passingValue:!0,selections:V}],storageKey:null}]},I={condition:"includeTaskPluginDatas",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[y,D,K,N,j,{condition:"includeTaskPluginDatasFull",kind:"Condition",passingValue:!0,selections:V}],storageKey:null}]},_={condition:"includeNotes",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Note",kind:"LinkedField",name:"notes",plural:!0,selections:[y,{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},T,D,K,v,{alias:null,args:null,kind:"ScalarField",name:"content",storageKey:null}],storageKey:null}]},z={alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[S,y],storageKey:null},U=[N,j,y],Z={alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:U,storageKey:null},L={alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[y,x,v,b,k,z,Z,g],storageKey:null},G=[L];return{fragment:{argumentDefinitions:[e,t,n,i,s,a,r,o,l,u,c,d,f,m],kind:"Fragment",metadata:null,name:"getDaysDaysQuery",selections:[{condition:"renderDays",kind:"Condition",passingValue:!0,selections:[{args:p,kind:"FragmentSpread",name:"Days_data"}]},{alias:null,args:p,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{condition:"renderDay",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"}]},{condition:"renderDayContent",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"DayContent_day"}]},y,T,{condition:"includeTasks",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[{condition:"renderTaskCard",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"TaskCard_task"}]},y,T,v,g,k,D,b,x,{condition:"includeItem",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[{condition:"renderItemCard",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"ItemCard_item"}]},y,D,S,b,A,v,P,R,w],storageKey:null}]},I],storageKey:null}]},_],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[t,e,d,u,c,l,m,a,n,f,r,o,i,s],kind:"Operation",name:"getDaysDaysQuery",selections:[{alias:null,args:p,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[y,T,{condition:"renderDay",kind:"Condition",passingValue:!0,selections:G},{condition:"renderDayContent",kind:"Condition",passingValue:!0,selections:G},{condition:"includeTasks",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[y,T,v,g,k,D,b,x,{condition:"renderTaskCard",kind:"Condition",passingValue:!0,selections:[z,Z]},{condition:"includeItem",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[y,D,S,b,A,v,P,R,{condition:"renderItemCard",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:U,storageKey:null}]},w],storageKey:null}]},I],storageKey:null}]},_],storageKey:null}],storageKey:null}],storageKey:null},{condition:"renderDays",kind:"Condition",passingValue:!0,selections:[{alias:null,args:p,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[L,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:p,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"}]}]},params:{cacheID:"316a6c787c161fa26de9f7b5b96fb8ed",id:null,metadata:{},name:"getDaysDaysQuery",operationKind:"query",text:`query getDaysDaysQuery(
  $first: Int!
  $after: ID
  $renderDays: Boolean!
  $renderDay: Boolean!
  $renderDayContent: Boolean!
  $includeTasks: Boolean!
  $renderTaskCard: Boolean!
  $includeNotes: Boolean!
  $includeItem: Boolean!
  $renderItemCard: Boolean!
  $includeTaskPluginDatas: Boolean!
  $includeTaskPluginDatasFull: Boolean!
  $includeItemPluginDatas: Boolean!
  $includeItemPluginDatasFull: Boolean!
) {
  ...Days_data_2HEEH6 @include(if: $renderDays)
  days(first: $first, after: $after) {
    edges {
      node {
        ...Day_day @include(if: $renderDay)
        ...DayContent_day @include(if: $renderDayContent)
        id
        date
        tasks @include(if: $includeTasks) {
          ...TaskCard_task @include(if: $renderTaskCard)
          id
          date
          title
          canBeSuperdone
          completedAt
          createdAt
          durationInMinutes
          status
          item @include(if: $includeItem) {
            ...ItemCard_item @include(if: $renderItemCard)
            id
            createdAt
            scheduledAt
            durationInMinutes
            isAllDay
            title
            color
            isRelevant
            pluginDatas @include(if: $includeItemPluginDatas) {
              id
              createdAt
              updatedAt
              pluginSlug
              min
              full @include(if: $includeItemPluginDatasFull)
            }
          }
          pluginDatas @include(if: $includeTaskPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeTaskPluginDatasFull)
          }
        }
        notes @include(if: $includeNotes) {
          id
          slug
          date
          createdAt
          updatedAt
          title
          content
        }
      }
    }
  }
}

fragment DayAddTaskActionsBar_day on Day {
  date
}

fragment DayContent_day on Day {
  date
  tasks {
    id
    status
    ...TaskCard_task
  }
}

fragment Day_day on Day {
  date
  ...DayContent_day
  ...DayAddTaskActionsBar_day
}

fragment Days_data_2HEEH6 on Query {
  days(first: $first, after: $after) {
    edges {
      cursor
      node {
        ...Day_day
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}

fragment ItemCardActions_item on Item {
  id
  pluginDatas {
    pluginSlug
    min
    id
  }
}

fragment ItemCardDetails_item on Item {
  scheduledAt
}

fragment ItemCard_item on Item {
  title
  durationInMinutes
  ...ItemCardDetails_item
  ...ItemCardActions_item
}

fragment TaskCardActions_task on Task {
  status
  canBeSuperdone
  id
}

fragment TaskCardDetails_task on Task {
  item {
    scheduledAt
    id
  }
  pluginDatas {
    pluginSlug
    min
    id
  }
}

fragment TaskCard_task on Task {
  title
  durationInMinutes
  status
  completedAt
  ...TaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();Vo.hash="082ca0f7b72c633b4564022e5f60cdac";const Lo=function(){var e={defaultValue:null,kind:"LocalArgument",name:"day0"},t={defaultValue:null,kind:"LocalArgument",name:"day1"},n={defaultValue:null,kind:"LocalArgument",name:"day2"},i={defaultValue:null,kind:"LocalArgument",name:"day3"},s={defaultValue:null,kind:"LocalArgument",name:"day4"},a={defaultValue:null,kind:"LocalArgument",name:"day5"},r={defaultValue:null,kind:"LocalArgument",name:"day6"},o={defaultValue:null,kind:"LocalArgument",name:"day7"},l={defaultValue:null,kind:"LocalArgument",name:"day8"},u={defaultValue:null,kind:"LocalArgument",name:"day9"},c={defaultValue:null,kind:"LocalArgument",name:"includeDay0"},d={defaultValue:null,kind:"LocalArgument",name:"includeDay1"},f={defaultValue:null,kind:"LocalArgument",name:"includeDay2"},m={defaultValue:null,kind:"LocalArgument",name:"includeDay3"},p={defaultValue:null,kind:"LocalArgument",name:"includeDay4"},y={defaultValue:null,kind:"LocalArgument",name:"includeDay5"},T={defaultValue:null,kind:"LocalArgument",name:"includeDay6"},v={defaultValue:null,kind:"LocalArgument",name:"includeDay7"},g={defaultValue:null,kind:"LocalArgument",name:"includeDay8"},k={defaultValue:null,kind:"LocalArgument",name:"includeDay9"},D={defaultValue:null,kind:"LocalArgument",name:"includeItem"},b={defaultValue:null,kind:"LocalArgument",name:"includeItemPluginDatas"},x={defaultValue:null,kind:"LocalArgument",name:"includeItemPluginDatasFull"},S={defaultValue:null,kind:"LocalArgument",name:"includeNotes"},A={defaultValue:null,kind:"LocalArgument",name:"includeTaskPluginDatas"},P={defaultValue:null,kind:"LocalArgument",name:"includeTaskPluginDatasFull"},R={defaultValue:null,kind:"LocalArgument",name:"includeTasks"},K={defaultValue:null,kind:"LocalArgument",name:"renderDay"},N={defaultValue:null,kind:"LocalArgument",name:"renderDayContent"},j={defaultValue:null,kind:"LocalArgument",name:"renderItemCard"},V={defaultValue:null,kind:"LocalArgument",name:"renderTaskCard"},w=[{kind:"Variable",name:"id",variableName:"day0"}],I={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},_={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},z={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},U={alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null},Z={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},L={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},G={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},ye={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},$e={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},Je={alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},ke={alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},et={alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},tt={alias:null,args:null,kind:"ScalarField",name:"updatedAt",storageKey:null},Ve={alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},ve={alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},ne=[{alias:null,args:null,kind:"ScalarField",name:"full",storageKey:null}],nt={condition:"includeItemPluginDatas",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[I,L,tt,Ve,ve,{condition:"includeItemPluginDatasFull",kind:"Condition",passingValue:!0,selections:ne}],storageKey:null}]},it={condition:"includeTaskPluginDatas",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[I,L,tt,Ve,ve,{condition:"includeTaskPluginDatasFull",kind:"Condition",passingValue:!0,selections:ne}],storageKey:null}]},Ki={condition:"includeNotes",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Note",kind:"LinkedField",name:"notes",plural:!0,selections:[I,{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},_,L,tt,z,{alias:null,args:null,kind:"ScalarField",name:"content",storageKey:null}],storageKey:null}]},ie=[{kind:"InlineFragment",selections:[{condition:"renderDay",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"}]},{condition:"renderDayContent",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"DayContent_day"}]},I,_,{condition:"includeTasks",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[{condition:"renderTaskCard",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"TaskCard_task"}]},I,_,z,U,Z,L,G,ye,{condition:"includeItem",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[{condition:"renderItemCard",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"ItemCard_item"}]},I,L,$e,G,Je,z,ke,et,nt],storageKey:null}]},it],storageKey:null}]},Ki],type:"Day",abstractKey:null}],_i=[{kind:"Variable",name:"id",variableName:"day1"}],Ni=[{kind:"Variable",name:"id",variableName:"day2"}],Hi=[{kind:"Variable",name:"id",variableName:"day3"}],ji=[{kind:"Variable",name:"id",variableName:"day4"}],Ui=[{kind:"Variable",name:"id",variableName:"day5"}],zi=[{kind:"Variable",name:"id",variableName:"day6"}],Wi=[{kind:"Variable",name:"id",variableName:"day7"}],Gi=[{kind:"Variable",name:"id",variableName:"day8"}],qi=[{kind:"Variable",name:"id",variableName:"day9"}],Yi={alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[$e,I],storageKey:null},Xi=[Ve,ve,I],Qi={alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:Xi,storageKey:null},Zi=[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[I,ye,z,G,Z,Yi,Qi,U],storageKey:null}],se=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},I,{kind:"InlineFragment",selections:[_,{condition:"renderDay",kind:"Condition",passingValue:!0,selections:Zi},{condition:"renderDayContent",kind:"Condition",passingValue:!0,selections:Zi},{condition:"includeTasks",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[I,_,z,U,Z,L,G,ye,{condition:"renderTaskCard",kind:"Condition",passingValue:!0,selections:[Yi,Qi]},{condition:"includeItem",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[I,L,$e,G,Je,z,ke,et,{condition:"renderItemCard",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:Xi,storageKey:null}]},nt],storageKey:null}]},it],storageKey:null}]},Ki],type:"Day",abstractKey:null}];return{fragment:{argumentDefinitions:[e,t,n,i,s,a,r,o,l,u,c,d,f,m,p,y,T,v,g,k,D,b,x,S,A,P,R,K,N,j,V],kind:"Fragment",metadata:null,name:"getDaysDaysMax10Query",selections:[{condition:"includeDay0",kind:"Condition",passingValue:!0,selections:[{alias:"day0",args:w,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay1",kind:"Condition",passingValue:!0,selections:[{alias:"day1",args:_i,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay2",kind:"Condition",passingValue:!0,selections:[{alias:"day2",args:Ni,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay3",kind:"Condition",passingValue:!0,selections:[{alias:"day3",args:Hi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay4",kind:"Condition",passingValue:!0,selections:[{alias:"day4",args:ji,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay5",kind:"Condition",passingValue:!0,selections:[{alias:"day5",args:Ui,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay6",kind:"Condition",passingValue:!0,selections:[{alias:"day6",args:zi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay7",kind:"Condition",passingValue:!0,selections:[{alias:"day7",args:Wi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay8",kind:"Condition",passingValue:!0,selections:[{alias:"day8",args:Gi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]},{condition:"includeDay9",kind:"Condition",passingValue:!0,selections:[{alias:"day9",args:qi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:ie,storageKey:null}]}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,e,d,t,f,n,m,i,p,s,y,a,T,r,v,o,g,l,k,u,K,N,R,V,S,D,j,A,P,b,x],kind:"Operation",name:"getDaysDaysMax10Query",selections:[{condition:"includeDay0",kind:"Condition",passingValue:!0,selections:[{alias:"day0",args:w,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay1",kind:"Condition",passingValue:!0,selections:[{alias:"day1",args:_i,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay2",kind:"Condition",passingValue:!0,selections:[{alias:"day2",args:Ni,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay3",kind:"Condition",passingValue:!0,selections:[{alias:"day3",args:Hi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay4",kind:"Condition",passingValue:!0,selections:[{alias:"day4",args:ji,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay5",kind:"Condition",passingValue:!0,selections:[{alias:"day5",args:Ui,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay6",kind:"Condition",passingValue:!0,selections:[{alias:"day6",args:zi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay7",kind:"Condition",passingValue:!0,selections:[{alias:"day7",args:Wi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay8",kind:"Condition",passingValue:!0,selections:[{alias:"day8",args:Gi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]},{condition:"includeDay9",kind:"Condition",passingValue:!0,selections:[{alias:"day9",args:qi,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:se,storageKey:null}]}]},params:{cacheID:"1480e44875a2674254bda4f422ddc8b2",id:null,metadata:{},name:"getDaysDaysMax10Query",operationKind:"query",text:`query getDaysDaysMax10Query(
  $includeDay0: Boolean!
  $day0: ID!
  $includeDay1: Boolean!
  $day1: ID!
  $includeDay2: Boolean!
  $day2: ID!
  $includeDay3: Boolean!
  $day3: ID!
  $includeDay4: Boolean!
  $day4: ID!
  $includeDay5: Boolean!
  $day5: ID!
  $includeDay6: Boolean!
  $day6: ID!
  $includeDay7: Boolean!
  $day7: ID!
  $includeDay8: Boolean!
  $day8: ID!
  $includeDay9: Boolean!
  $day9: ID!
  $renderDay: Boolean!
  $renderDayContent: Boolean!
  $includeTasks: Boolean!
  $renderTaskCard: Boolean!
  $includeNotes: Boolean!
  $includeItem: Boolean!
  $renderItemCard: Boolean!
  $includeTaskPluginDatas: Boolean!
  $includeTaskPluginDatasFull: Boolean!
  $includeItemPluginDatas: Boolean!
  $includeItemPluginDatasFull: Boolean!
) {
  day0: node(id: $day0) @include(if: $includeDay0) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day1: node(id: $day1) @include(if: $includeDay1) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day2: node(id: $day2) @include(if: $includeDay2) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day3: node(id: $day3) @include(if: $includeDay3) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day4: node(id: $day4) @include(if: $includeDay4) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day5: node(id: $day5) @include(if: $includeDay5) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day6: node(id: $day6) @include(if: $includeDay6) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day7: node(id: $day7) @include(if: $includeDay7) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day8: node(id: $day8) @include(if: $includeDay8) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
  day9: node(id: $day9) @include(if: $includeDay9) {
    __typename
    ... on Day {
      ...Day_day @include(if: $renderDay)
      ...DayContent_day @include(if: $renderDayContent)
      id
      date
      tasks @include(if: $includeTasks) {
        ...TaskCard_task @include(if: $renderTaskCard)
        id
        date
        title
        canBeSuperdone
        completedAt
        createdAt
        durationInMinutes
        status
        item @include(if: $includeItem) {
          ...ItemCard_item @include(if: $renderItemCard)
          id
          createdAt
          scheduledAt
          durationInMinutes
          isAllDay
          title
          color
          isRelevant
          pluginDatas @include(if: $includeItemPluginDatas) {
            id
            createdAt
            updatedAt
            pluginSlug
            min
            full @include(if: $includeItemPluginDatasFull)
          }
        }
        pluginDatas @include(if: $includeTaskPluginDatas) {
          id
          createdAt
          updatedAt
          pluginSlug
          min
          full @include(if: $includeTaskPluginDatasFull)
        }
      }
      notes @include(if: $includeNotes) {
        id
        slug
        date
        createdAt
        updatedAt
        title
        content
      }
    }
    id
  }
}

fragment DayAddTaskActionsBar_day on Day {
  date
}

fragment DayContent_day on Day {
  date
  tasks {
    id
    status
    ...TaskCard_task
  }
}

fragment Day_day on Day {
  date
  ...DayContent_day
  ...DayAddTaskActionsBar_day
}

fragment ItemCardActions_item on Item {
  id
  pluginDatas {
    pluginSlug
    min
    id
  }
}

fragment ItemCardDetails_item on Item {
  scheduledAt
}

fragment ItemCard_item on Item {
  title
  durationInMinutes
  ...ItemCardDetails_item
  ...ItemCardActions_item
}

fragment TaskCardActions_task on Task {
  status
  canBeSuperdone
  id
}

fragment TaskCardDetails_task on Task {
  item {
    scheduledAt
    id
  }
  pluginDatas {
    pluginSlug
    min
    id
  }
}

fragment TaskCard_task on Task {
  title
  durationInMinutes
  status
  completedAt
  ...TaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();Lo.hash="3d58e8b9911ea4481e26f2792c6da472";const Xm=async e=>{var l,u,c,d,f,m,p,y,T,v,g,k,D,b,x,S,A,P,R,K,N,j;const t=Ne(e.from).subtract(1,"day").format("YYYY-MM-DD"),n=Ne(e.to).diff(Ne(e.from),"day")+1,i=!!((l=e.toRender)!=null&&l.ItemCard),s=!!(i||(c=(u=e.include)==null?void 0:u.tasks)!=null&&c.item),a=!!((d=e.toRender)!=null&&d.TaskCard),r=!!(i||a||(f=e.include)!=null&&f.tasks),o=await At(be,Vo,{first:n,after:t,renderDays:!!((m=e.toRender)!=null&&m.Days),renderDay:!!((p=e.toRender)!=null&&p.Day),renderDayContent:!!((y=e.toRender)!=null&&y.DayContent),renderTaskCard:a,includeTasks:r,includeNotes:!!((T=e.include)!=null&&T.notes),renderItemCard:i,includeItem:s,includeTaskPluginDatas:!!((g=(v=e.include)==null?void 0:v.tasks)!=null&&g.pluginDatas),includeTaskPluginDatasFull:!!((b=(D=(k=e.include)==null?void 0:k.tasks)==null?void 0:D.pluginDatas)!=null&&b.full),includeItemPluginDatas:!!((A=(S=(x=e.include)==null?void 0:x.tasks)==null?void 0:S.item)!=null&&A.pluginDatas),includeItemPluginDatasFull:!!((N=(K=(R=(P=e.include)==null?void 0:P.tasks)==null?void 0:R.item)==null?void 0:K.pluginDatas)!=null&&N.full)}).toPromise();return((j=o==null?void 0:o.days)==null?void 0:j.edges.map(V=>{var w;return{...V.node,tasks:((w=V.node.tasks)==null?void 0:w.map(I=>{var _,z;return{...I,pluginDatas:Object.fromEntries(((_=I.pluginDatas)==null?void 0:_.map(U=>[U.pluginSlug,U]))??[]),item:I.item?{...I.item,pluginDatas:Object.fromEntries(((z=I.item.pluginDatas)==null?void 0:z.map(U=>[U.pluginSlug,U]))??[])}:void 0}}))??[]}}))??[]},Qm=async e=>{var r,o,l,u,c,d,f,m,p,y,T,v,g,k,D,b,x,S,A,P;const t=!!((r=e.toRender)!=null&&r.ItemCard),n=!!(t||(l=(o=e.include)==null?void 0:o.tasks)!=null&&l.item),i=!!((u=e.toRender)!=null&&u.TaskCard),s=!!(t||i||(c=e.include)!=null&&c.tasks),a=await At(be,Lo,{includeDay0:!!e.dates[0],day0:ae(e.dates[0]),includeDay1:!!e.dates[1],day1:ae(e.dates[1]),includeDay2:!!e.dates[2],day2:ae(e.dates[2]),includeDay3:!!e.dates[3],day3:ae(e.dates[3]),includeDay4:!!e.dates[4],day4:ae(e.dates[4]),includeDay5:!!e.dates[5],day5:ae(e.dates[5]),includeDay6:!!e.dates[6],day6:ae(e.dates[6]),includeDay7:!!e.dates[7],day7:ae(e.dates[7]),includeDay8:!!e.dates[8],day8:ae(e.dates[8]),includeDay9:!!e.dates[9],day9:ae(e.dates[9]),renderDay:!!((d=e.toRender)!=null&&d.Day),renderDayContent:!!((f=e.toRender)!=null&&f.DayContent),renderTaskCard:i,includeTasks:s,includeNotes:!!((m=e.include)!=null&&m.notes),renderItemCard:t,includeItem:n,includeTaskPluginDatas:!!((y=(p=e.include)==null?void 0:p.tasks)!=null&&y.pluginDatas),includeTaskPluginDatasFull:!!((g=(v=(T=e.include)==null?void 0:T.tasks)==null?void 0:v.pluginDatas)!=null&&g.full),includeItemPluginDatas:!!((b=(D=(k=e.include)==null?void 0:k.tasks)==null?void 0:D.item)!=null&&b.pluginDatas),includeItemPluginDatasFull:!!((P=(A=(S=(x=e.include)==null?void 0:x.tasks)==null?void 0:S.item)==null?void 0:A.pluginDatas)!=null&&P.full)}).toPromise();return[a==null?void 0:a.day0,a==null?void 0:a.day1,a==null?void 0:a.day2,a==null?void 0:a.day3,a==null?void 0:a.day4,a==null?void 0:a.day5,a==null?void 0:a.day6,a==null?void 0:a.day7,a==null?void 0:a.day8,a==null?void 0:a.day9]},ae=e=>`Day_${Ne(e).format("YYYY-MM-DD")}`,Mo=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"slug"}],t=[{kind:"Variable",name:"slug",variableName:"slug"}],n={alias:null,args:null,kind:"ScalarField",name:"content",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"NoteEditorQuery",selections:[{alias:null,args:t,concreteType:"Note",kind:"LinkedField",name:"note",plural:!1,selections:[n],storageKey:null},{alias:"labels",args:null,concreteType:"QueryNoteLabelsConnection",kind:"LinkedField",name:"noteLabels",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryNoteLabelsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NoteLabel",kind:"LinkedField",name:"node",plural:!1,selections:[i],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"NoteEditorQuery",selections:[{alias:null,args:t,concreteType:"Note",kind:"LinkedField",name:"note",plural:!1,selections:[n,s],storageKey:null},{alias:"labels",args:null,concreteType:"QueryNoteLabelsConnection",kind:"LinkedField",name:"noteLabels",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryNoteLabelsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NoteLabel",kind:"LinkedField",name:"node",plural:!1,selections:[i,s],storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"7b39a11c60c7c929890be080ed21edc3",id:null,metadata:{},name:"NoteEditorQuery",operationKind:"query",text:`query NoteEditorQuery(
  $slug: String!
) {
  note(slug: $slug) {
    content
    id
  }
  labels: noteLabels {
    edges {
      node {
        slug
        id
      }
    }
  }
}
`}}}();Mo.hash="9ecd4670c636b2cbe04f6a83bb108140";const Io=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"Note",kind:"LinkedField",name:"createOrUpdateNote",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"NoteEditorUpsertNoteMutation",selections:t,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"NoteEditorUpsertNoteMutation",selections:t},params:{cacheID:"b9e2b6aa128fa2922cc4a67699eb868c",id:null,metadata:{},name:"NoteEditorUpsertNoteMutation",operationKind:"mutation",text:`mutation NoteEditorUpsertNoteMutation(
  $input: MutationCreateOrUpdateNoteInput!
) {
  createOrUpdateNote(input: $input) {
    id
  }
}
`}}}();Io.hash="9e9eaa521d0bb082f0ce109a6f8d841a";const Zm=e=>e.loading?Ft(Oo,{children:"Loading..."}):Ft(h.Suspense,{fallback:"Loading...",children:Ft(Jm,{...e})}),Jm=e=>{var r;const t=h.useRef(),n=ga.useLazyLoadQuery(Mo,{slug:e.slug}),[i]=qo(Io),s=async o=>{var l,u;(l=e.onSaveBegin)==null||l.call(e,{html:o,labels:[]}),await i({variables:{input:{date:Ne().format("YYYY-MM-DD"),slug:e.slug,title:e.title,content:o,labels:[],newLabels:[],removedLabels:[]}}}),(u=e.onSaveEnd)==null||u.call(e,{html:o,labels:[]})},a=Yo({extensions:[Po],editorProps:{attributes:{class:"prose focus:outline-none"}},content:((r=n.note)==null?void 0:r.content)??e.initialValue,autofocus:e.autofocus,onUpdate:({editor:o})=>{t.current&&clearTimeout(t.current);const l=o.getHTML();t.current=setTimeout(()=>{s(l)},1e3),e.onChange&&e.onChange({html:l,labels:[]})}});return h.useEffect(()=>{a&&e.saveNow&&s(a.getHTML())},[e.saveNow,a]),Ft(Xo,{editor:a})},wo=(e,t=[])=>{const[n,i]=h.useState(null),[s,a]=h.useState(!0),[r,o]=h.useState(null);return h.useEffect(()=>{e().then(l=>o(l)).catch(l=>i(l)).finally(()=>a(!1))},t),[r,s,n]},eh=(e,t)=>{const[n,i]=h.useState(e),[s,a]=h.useState(!1);return h.useEffect(()=>{a(!0);const r=setTimeout(()=>{i(e),a(!1)},t);return()=>{clearTimeout(r)}},[e,t]),[n,s]},th=(e,t)=>{h.useEffect(()=>{e()},t)},Fo=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"updatedAt",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"createItemMutation",selections:[{alias:null,args:t,concreteType:"Item",kind:"LinkedField",name:"createItem",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ItemCard_item"},n,i,s,a,r,o,l,u,{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[n,i,c,d,f],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"createItemMutation",selections:[{alias:null,args:t,concreteType:"Item",kind:"LinkedField",name:"createItem",plural:!1,selections:[s,o,r,n,{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[d,f,n,i,c],storageKey:null},i,a,l,u],storageKey:null}]},params:{cacheID:"ed0042d646a6a0d1ab1c420d932ebfd9",id:null,metadata:{},name:"createItemMutation",operationKind:"mutation",text:`mutation createItemMutation(
  $input: MutationCreateItemInput!
) {
  createItem(input: $input) {
    ...ItemCard_item
    id
    createdAt
    title
    isRelevant
    scheduledAt
    durationInMinutes
    isAllDay
    color
    pluginDatas {
      id
      createdAt
      updatedAt
      pluginSlug
      min
    }
  }
}

fragment ItemCardActions_item on Item {
  id
  pluginDatas {
    pluginSlug
    min
    id
  }
}

fragment ItemCardDetails_item on Item {
  scheduledAt
}

fragment ItemCard_item on Item {
  title
  durationInMinutes
  ...ItemCardDetails_item
  ...ItemCardActions_item
}
`}}}();Fo.hash="1295ac554aac1ab0b5cb16bd134943a3";const nh=async e=>{const{createItem:t}=await Yn(be,{mutation:Fo,variables:{input:e}});return t},Ro=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"updatedAt",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"createTaskMutation",selections:[{alias:null,args:t,concreteType:"Task",kind:"LinkedField",name:"createTask",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"TaskCard_task"},n,i,s,a,r,o,l,{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[n,u,i,c,d],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"createTaskMutation",selections:[{alias:null,args:t,concreteType:"Task",kind:"LinkedField",name:"createTask",plural:!1,selections:[s,l,a,o,{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},n],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[u,d,n,i,c],storageKey:null},r,n,i],storageKey:null}]},params:{cacheID:"faf71db4ce2d3d1664a681e37b29e52c",id:null,metadata:{},name:"createTaskMutation",operationKind:"mutation",text:`mutation createTaskMutation(
  $input: MutationCreateTaskInput!
) {
  createTask(input: $input) {
    ...TaskCard_task
    id
    createdAt
    title
    status
    canBeSuperdone
    completedAt
    durationInMinutes
    pluginDatas {
      id
      pluginSlug
      createdAt
      updatedAt
      min
    }
  }
}

fragment TaskCardActions_task on Task {
  status
  canBeSuperdone
  id
}

fragment TaskCardDetails_task on Task {
  item {
    scheduledAt
    id
  }
  pluginDatas {
    pluginSlug
    min
    id
  }
}

fragment TaskCard_task on Task {
  title
  durationInMinutes
  status
  completedAt
  ...TaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();Ro.hash="f1deb4271a3348feba37330022dd8a3c";const ih=async e=>{const{createTask:t}=await Yn(be,{mutation:Ro,variables:{input:e}});return t},Eo=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"getStoreUtilsGetQuery",selections:[{alias:null,args:t,concreteType:"Store",kind:"LinkedField",name:"storeItems",plural:!0,selections:[n,i],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"getStoreUtilsGetQuery",selections:[{alias:null,args:t,concreteType:"Store",kind:"LinkedField",name:"storeItems",plural:!0,selections:[n,i,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{cacheID:"3cf186b7b20db964fb4840c2673e0436",id:null,metadata:{},name:"getStoreUtilsGetQuery",operationKind:"query",text:`query getStoreUtilsGetQuery(
  $input: QueryStoreItemsInput!
) {
  storeItems(input: $input) {
    key
    value
    id
  }
}
`}}}();Eo.hash="2e80c7dff53ea8a044265f402dacf688";const sh=e=>{const t=async(n,i)=>{const s=await At(be,Eo,{input:{keys:n,pluginSlug:i===void 0?e:i}}).toPromise();return Object.fromEntries((s==null?void 0:s.storeItems.map(a=>[a.key,a.value]))??[])};return{get:t,useStore:(n,i)=>wo(async()=>t(n,i))}},$o=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{alias:null,args:[{kind:"Variable",name:"id",variableName:"id"},{kind:"Variable",name:"input",variableName:"input"}],concreteType:"PluginOperation",kind:"LinkedField",name:"pluginOperation",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"data",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"pluginOperationQuery",selections:t,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"pluginOperationQuery",selections:t},params:{cacheID:"a3a684eb5306c679728db803e5abf391",id:null,metadata:{},name:"pluginOperationQuery",operationKind:"query",text:`query pluginOperationQuery(
  $id: ID!
  $input: JSON!
) {
  pluginOperation(id: $id, input: $input) {
    id
    data
  }
}
`}}}();$o.hash="d7fb25615776d823a233dd62109be133";const Bo=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{alias:null,args:[{kind:"Variable",name:"id",variableName:"id"},{kind:"Variable",name:"input",variableName:"input"}],concreteType:"PluginOperation",kind:"LinkedField",name:"pluginOperation",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"data",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"pluginOperationMutation",selections:t,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"pluginOperationMutation",selections:t},params:{cacheID:"bc295ca316e67ef2e3316bbe1f27bfcb",id:null,metadata:{},name:"pluginOperationMutation",operationKind:"mutation",text:`mutation pluginOperationMutation(
  $id: ID!
  $input: JSON!
) {
  pluginOperation(id: $id, input: $input) {
    id
    data
  }
}
`}}}();Bo.hash="645c301137d10a9a41491eec8c956f5f";const pa=$o,ah=e=>({query:async t=>{try{const n=await At(be,pa,{id:`PluginOperation_${t.pluginSlug}_${t.operationName}`,input:t.input??{}}).toPromise();return n!=null&&n.pluginOperation?{id:n.pluginOperation.id,data:n.pluginOperation.data}:null}catch(n){return console.error(n),null}},useLazyQuery:t=>{const n=ga.useLazyLoadQuery(pa,{id:`PluginOperation_${t.pluginSlug}_${t.operationName}`,input:t.input??{}});return n.pluginOperation?{id:n.pluginOperation.id,data:n.pluginOperation.data}:null},mutation:async t=>{try{const n=await Yn(be,{mutation:Bo,variables:{id:`PluginOperation_${t.pluginSlug}_${t.operationName}`,input:t.input??{}},onError:i=>{throw i}});return n!=null&&n.pluginOperation?{id:n.pluginOperation.id,data:n.pluginOperation.data}:null}catch(n){return console.error(n),null}}}),rh=e=>({pluginSlug:e,React:Wn,components:{Button:Qo,NoteEditor:Zm,Day:Zo,DayContent:Jo,TaskCard:el,ItemCard:tl,Lists:nl},hooks:{useAsyncLoader:wo,useDebounce:eh,useAsyncEffect:th},store:sh(e),operations:ah(),getDays:Xm,getDaysMax10:Qm,createItem:nh,createTask:ih,framerMotion:fm,tiptap:il,tiptapExtensions:{StarterKit:Po,Document:Ta,Paragraph:Aa,Text:ba,Mention:sl,History:Da,BulletList:Co,OrderedList:xo,ListItem:So},dayjs:Ne}),dh=async e=>{try{const n=(await oh())[e.pluginSlug];if(!n)return{_error:"PLUGIN_NOT_INSTALLED"};const i=Ko(()=>import(`${n.url}/web.js`),[]),{plugin:s,slug:a}=(await i).default;return s(rh(a))}catch(t){return console.log(t),{_error:"PLUGIN_LOAD_ERROR"}}},oh=async()=>{const e=await At(be,Ca,{},{fetchPolicy:"store-or-network"}).toPromise(),t=(e==null?void 0:e.installedPlugins)??[];return Object.fromEntries(t.map(n=>[n.slug,n]))};export{dh as g,wo as u};
