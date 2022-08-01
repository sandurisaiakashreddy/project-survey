var Me=Object.defineProperty,Ae=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var J=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))qe.call(t,s)&&J(e,s,t[s]);if(Z)for(var s of Z(t))Fe.call(t,s)&&J(e,s,t[s]);return e},w=(e,t)=>Ae(e,Ye(t));import{N as z,p as C,s as E,e as d,O as R,P as K,b as k,F as Ue,Q as ee,j as N,B as D,D as H,R as Xe,G as x,U as Qe,r as Ze,f as oe,i as Je,x as re,y as ue,u as Ke,V as et,W as tt,X as nt,q as st,Y as it,g as lt,A as at,E as S,Z as ot,$ as rt,a0 as ut,M as ct,a1 as dt,a2 as te,H as ft,L as vt,a3 as W,l as ce}from"./index.f0d9b455.js";function de(e){const t=z("useRender");t.render=e}const fe=C({border:[Boolean,Number,String]},"border");function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:d(()=>{const n=[];if(e.border!=null&&e.border!==!1&&n.push(`${t}--border`),typeof e.border=="string"&&e.border!==""||e.border===0)for(const i of String(e.border).split(" "))n.push(`border-${i}`);return n})}}const mt=[null,"default","comfortable","compact"],me=C({density:{type:String,default:"default",validator:e=>mt.includes(e)}},"density");function ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const he=C({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function be(e){return{elevationClasses:d(()=>{const s=R(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const pe=C({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:d(()=>{const n=R(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))i.push(`rounded-${l}`);return i})}}const I=C({tag:{type:String,default:"div"}},"tag");function M(e){const t=d(()=>K(e.value.background)),s=d(()=>K(e.value.text)),n=d(()=>{const l=[];return e.value.background&&!t.value&&l.push(`bg-${e.value.background}`),e.value.text&&!s.value&&l.push(`text-${e.value.text}`),l}),i=d(()=>{const l={};return e.value.background&&t.value&&(l.backgroundColor=e.value.background),e.value.text&&s.value&&(l.color=e.value.text,l.caretColor=e.value.text),l});return{colorClasses:n,colorStyles:i}}function gt(e,t){const s=d(()=>({text:R(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=M(s);return{textColorClasses:n,textColorStyles:i}}function Ut(e,t){const s=d(()=>({background:R(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=M(s);return{backgroundColorClasses:n,backgroundColorStyles:i}}const ht=["outlined","plain","text","contained","contained-flat","contained-text"];function bt(e,t){return k(Ue,null,[e&&k("div",{class:`${t}__overlay`},null),k("div",{class:`${t}__underlay`},null)])}const Ce=C({color:String,variant:{type:String,default:"contained",validator:e=>ht.includes(e)}},"variant");function pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const s=d(()=>{const{variant:l}=ee(e);return`${t}--variant-${l}`}),{colorClasses:n,colorStyles:i}=M(d(()=>{const{variant:l,color:a}=ee(e);return{[["contained","contained-flat"].includes(l)?"background":"text"]:a}}));return{colorClasses:n,colorStyles:i,variantClasses:s}}const yt=N({name:"VBtnGroup",props:c(c(c(c(c(c(c({divided:Boolean},fe()),me()),he()),pe()),I()),D()),Ce()),setup(e,t){let{slots:s}=t;const{themeClasses:n}=H(e),{densityClasses:i}=ge(e),{borderClasses:l}=ve(e),{elevationClasses:a}=be(e),{roundedClasses:o}=ye(e);Xe({VBtn:{height:"auto",color:x(e,"color"),density:x(e,"density"),flat:!0,variant:x(e,"variant")}}),de(()=>k(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,i.value,a.value,o.value]},s))}});function Ct(e,t,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r=>r,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r=>r;const l=z("useProxiedModel"),a=d(()=>{var r,m;return!!(typeof e[t]!="undefined"&&(l!=null&&(r=l.vnode.props)!=null&&r.hasOwnProperty(t)||l!=null&&(m=l.vnode.props)!=null&&m.hasOwnProperty(Qe(t))))}),o=Ze(n(e[t]));return d({get(){return a.value?n(e[t]):o.value},set(r){(a.value?n(e[t]):o.value)!==r&&(o.value=r,l==null||l.emit(`update:${t}`,i(r)))}})}const St=C({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),_t=C({value:null,disabled:Boolean,selectedClass:String},"group-item");function kt(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=z("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Ke();oe(Symbol.for(`${t.description}:id`),i);const l=Je(t,null);if(!l){if(!s)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const a=x(e,"value"),o=d(()=>l.disabled.value||e.disabled);l.register({id:i,value:a,disabled:o},n),re(()=>{l.unregister(i)});const r=d(()=>l.isSelected(i)),m=d(()=>r.value&&[l.selectedClass.value,e.selectedClass]);return ue(r,h=>{n.emit("group:selected",{value:h})}),{id:i,isSelected:r,toggle:()=>l.select(i,!r.value),select:h=>l.select(i,h),selectedClass:m,value:a,disabled:o,group:l}}function $t(e,t){let s=!1;const n=et([]),i=Ct(e,"modelValue",[],u=>u==null?[]:Se(n,st(u)),u=>{const f=xt(n,u);return e.multiple?f:f[0]}),l=z("useGroup");function a(u,f){const b=u,p=Symbol.for(`${t.description}:id`),v=it(p,l==null?void 0:l.vnode).indexOf(f);v>-1?n.splice(v,0,b):n.push(b)}function o(u){if(s)return;r();const f=n.findIndex(b=>b.id===u);n.splice(f,1)}function r(){const u=n.find(f=>!f.disabled);u&&e.mandatory==="force"&&!i.value.length&&(i.value=[u.id])}tt(()=>{r()}),re(()=>{s=!0});function m(u,f){const b=n.find(v=>v.id===u);if(!(f&&b!=null&&b.disabled))if(e.multiple){var p;const v=i.value.slice(),$=v.findIndex(V=>V===u),L=~$;if(f=(p=f)!=null?p:!L,L&&e.mandatory&&v.length<=1||!L&&e.max!=null&&v.length+1>e.max)return;$<0&&f?v.push(u):$>=0&&!f&&v.splice($,1),i.value=v}else{var g;const v=i.value.includes(u);if(e.mandatory&&v)return;i.value=((g=f)!=null?g:!v)?[u]:[]}}function h(u){if(e.multiple&&lt('This method is not supported when using "multiple" prop'),i.value.length){const f=i.value[0],b=n.findIndex(v=>v.id===f);let p=(b+u)%n.length,g=n[p];for(;g.disabled&&p!==b;)p=(p+u)%n.length,g=n[p];if(g.disabled)return;i.value=[n[p].id]}else{const f=n.find(b=>!b.disabled);f&&(i.value=[f.id])}}const _={register:a,unregister:o,selected:i,select:m,disabled:x(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:u=>i.value.includes(u),selectedClass:d(()=>e.selectedClass),items:d(()=>n),getItemIndex:u=>wt(n,u)};return oe(t,_),_}function wt(e,t){const s=Se(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function Se(e,t){const s=[];for(let n=0;n<e.length;n++){const i=e[n];i.value!=null?t.find(l=>nt(l,i.value))!=null&&s.push(i.id):t.includes(n)&&s.push(i.id)}return s}function xt(e,t){const s=[];for(let n=0;n<e.length;n++){const i=e[n];t.includes(i.id)&&s.push(i.value!=null?i.value:n)}return s}const _e=Symbol.for("vuetify:v-btn-toggle");at()({name:"VBtnToggle",props:St({selectedClass:"v-btn--selected"}),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:i,prev:l,select:a,selected:o}=$t(e,_e);return de(()=>{var r;return k(yt,{class:"v-btn-toggle"},{default:()=>[(r=s.default)==null?void 0:r.call(s,{isSelected:n,next:i,prev:l,select:a,selected:o})]})}),{next:i,prev:l,select:a}}});const ne=["x-small","small","default","large","x-large"],ke=C({size:{type:[String,Number],default:"default"}},"size");function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const s=d(()=>ne.includes(e.size)?`${t}--size-${e.size}`:null),n=d(()=>!ne.includes(e.size)&&e.size?{width:S(e.size),height:S(e.size)}:null);return{sizeClasses:s,sizeStyles:n}}const Et=C(c(c(c({color:String,start:Boolean,end:Boolean,icon:{type:[String,Object]}},ke()),I({tag:"i"})),D()),"v-icon"),j=N({name:"VIcon",props:Et(),setup(e,t){let{slots:s}=t,n;s.default&&(n=d(()=>{var m,h;const _=(m=s.default)==null?void 0:m.call(s);if(!!_)return(h=ot(_).filter(u=>u.children&&typeof u.children=="string")[0])==null?void 0:h.children}));const{themeClasses:i}=H(e),{iconData:l}=rt(n||e),{sizeClasses:a}=$e(e),{textColorClasses:o,textColorStyles:r}=gt(x(e,"color"));return()=>k(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",a.value,o.value,i.value,{"v-icon--start":e.start,"v-icon--end":e.end}],style:[a.value?void 0:{fontSize:S(e.size),width:S(e.size),height:S(e.size)},r.value],"aria-hidden":"true"},null)}}),Lt=C({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Bt(e){return{dimensionStyles:d(()=>({height:S(e.height),maxHeight:S(e.maxHeight),maxWidth:S(e.maxWidth),minHeight:S(e.minHeight),minWidth:S(e.minWidth),width:S(e.width)}))}}const Tt=["static","relative","fixed","absolute","sticky"],Nt=C({absolute:Boolean,bottom:[Boolean,Number,String],fixed:Boolean,left:[Boolean,Number,String],position:{type:String,validator:e=>Tt.includes(e)},right:[Boolean,Number,String],top:[Boolean,Number,String]},"position");function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const s=["top","right","bottom","left"],n=d(()=>e.fixed?`${t}--fixed`:e.absolute?`${t}--absolute`:e.position?`position-${e.position}`:void 0),i=d(()=>{const l={};for(const a of s){const o=e[a];o==null||o===!1||(l[a]=S(o===!0?"0":String(o)))}return l});return{positionClasses:n,positionStyles:i}}function Vt(e,t){const s=ut("RouterLink"),n=d(()=>!!(e.href||e.to)),i=d(()=>(n==null?void 0:n.value)||!!(t.onClick||t.onClickOnce));if(typeof s=="string")return{isLink:n,isClickable:i,href:x(e,"href")};const l=e.to?s.useLink(e):void 0;return w(c({},l),{isLink:n,isClickable:i,href:d(()=>e.to?l==null?void 0:l.route.value.href:e.href)})}const Pt=C({href:String,replace:Boolean,to:[String,Object]},"router");function zt(e,t){ue(()=>{var s;return(s=e.isExactActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&t&&ct(()=>{t(!0)})},{immediate:!0})}const se=Symbol("rippleStop"),Rt=80;function ie(e,t){e.style.transform=t,e.style.webkitTransform=t}function G(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function O(e){return e.constructor.name==="TouchEvent"}function we(e){return e.constructor.name==="KeyboardEvent"}const jt=function(e,t){var s;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,l=0;if(!we(e)){const u=t.getBoundingClientRect(),f=O(e)?e.touches[e.touches.length-1]:e;i=f.clientX-u.left,l=f.clientY-u.top}let a=0,o=.3;(s=t._ripple)!=null&&s.circle?(o=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((i-a)**2+(l-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-a*2)/2}px`,m=`${(t.clientHeight-a*2)/2}px`,h=n.center?r:`${i-a}px`,_=n.center?m:`${l-a}px`;return{radius:a,scale:o,x:h,y:_,centerX:r,centerY:m}},P={show(e,t){var s;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(s=t._ripple)!=null&&s.enabled))return;const i=document.createElement("span"),l=document.createElement("span");i.appendChild(l),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:a,scale:o,x:r,y:m,centerX:h,centerY:_}=jt(e,t,n),u=`${a*2}px`;l.className="v-ripple__animation",l.style.width=u,l.style.height=u,t.appendChild(i);const f=window.getComputedStyle(t);f&&f.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),ie(l,`translate(${r}, ${m}) scale3d(${o},${o},${o})`),G(l,0),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),ie(l,`translate(${h}, ${_}) scale3d(1,1,1)`),G(l,.08)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const s=e.getElementsByClassName("v-ripple__animation");if(s.length===0)return;const n=s[s.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),l=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),G(n,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)},300)},l)}};function xe(e){return typeof e=="undefined"||!!e}function B(e){const t={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[se])){if(e[se]=!0,O(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||we(e),s._ripple.class&&(t.class=s._ripple.class),O(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{P.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{var n;s!=null&&(n=s._ripple)!=null&&n.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},Rt)}else P.show(e,s,t)}}function y(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{y(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),P.hide(t)}}function Ee(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let T=!1;function Le(e){!T&&(e.keyCode===te.enter||e.keyCode===te.space)&&(T=!0,B(e))}function Be(e){T=!1,y(e)}function Te(e){T&&(T=!1,y(e))}function Ne(e,t,s){var n;const{value:i,modifiers:l}=t,a=xe(i);a||P.hide(e),e._ripple=(n=e._ripple)!=null?n:{},e._ripple.enabled=a,e._ripple.centered=l.center,e._ripple.circle=l.circle,dt(i)&&i.class&&(e._ripple.class=i.class),a&&!s?(e.addEventListener("touchstart",B,{passive:!0}),e.addEventListener("touchend",y,{passive:!0}),e.addEventListener("touchmove",Ee,{passive:!0}),e.addEventListener("touchcancel",y),e.addEventListener("mousedown",B),e.addEventListener("mouseup",y),e.addEventListener("mouseleave",y),e.addEventListener("keydown",Le),e.addEventListener("keyup",Be),e.addEventListener("blur",Te),e.addEventListener("dragstart",y,{passive:!0})):!a&&s&&Ie(e)}function Ie(e){e.removeEventListener("mousedown",B),e.removeEventListener("touchstart",B),e.removeEventListener("touchend",y),e.removeEventListener("touchmove",Ee),e.removeEventListener("touchcancel",y),e.removeEventListener("mouseup",y),e.removeEventListener("mouseleave",y),e.removeEventListener("keydown",Le),e.removeEventListener("keyup",Be),e.removeEventListener("dragstart",y),e.removeEventListener("blur",Te)}function Gt(e,t){Ne(e,t,!1)}function Ot(e){delete e._ripple,Ie(e)}function Dt(e,t){if(t.value===t.oldValue)return;const s=xe(t.oldValue);Ne(e,t,s)}const Ht={mounted:Gt,unmounted:Ot,updated:Dt},Xt=N({name:"VBtn",directives:{Ripple:Ht},props:c(c(c(c(c(c(c(c(c(c(c(c({symbol:{type:null,default:_e},flat:Boolean,icon:[Boolean,String],prependIcon:String,appendIcon:String,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0}},fe()),pe()),me()),Lt()),he()),_t()),Nt()),Pt()),ke()),I({tag:"button"})),D()),Ce({variant:"contained"})),setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:i}=H(e),{borderClasses:l}=ve(e),{colorClasses:a,colorStyles:o,variantClasses:r}=pt(e),{densityClasses:m}=ge(e),{dimensionStyles:h}=Bt(e),{elevationClasses:_}=be(e),{positionClasses:u,positionStyles:f}=It(e),{roundedClasses:b}=ye(e),{sizeClasses:p}=$e(e),g=kt(e,e.symbol,!1),v=Vt(e,s),$=d(()=>(g==null?void 0:g.disabled.value)||e.disabled),L=d(()=>e.variant==="contained"&&!(e.disabled||e.flat||e.border));return zt(v,g==null?void 0:g.select),()=>{var V,F;const U=v.isLink.value?"a":e.tag,X=!g||g.isSelected.value;return ft(k(U,{type:U==="a"?void 0:"button",class:["v-btn",g==null?void 0:g.selectedClass.value,{"v-btn--active":(V=v.isExactActive)==null?void 0:V.value,"v-btn--block":e.block,"v-btn--disabled":$.value,"v-btn--elevated":L.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--stacked":e.stacked},i.value,l.value,X?a.value:void 0,m.value,_.value,u.value,b.value,p.value,r.value],style:[X?o.value:void 0,h.value,f.value],disabled:$.value||void 0,href:v.href.value,onClick:We=>{var Q;$.value||((Q=v.navigate)==null||Q.call(v,We),g==null||g.toggle())}},{default:()=>[bt(!0,"v-btn"),!e.icon&&e.prependIcon&&k(j,{class:"v-btn__icon",icon:e.prependIcon,start:!0},null),typeof e.icon=="boolean"?(F=n.default)==null?void 0:F.call(n):k(j,{class:"v-btn__icon",icon:e.icon,size:e.size},null),!e.icon&&e.appendIcon&&k(j,{class:"v-btn__icon",icon:e.appendIcon,end:!0},null)]}),[[vt("ripple"),!$.value&&e.ripple,null]])}}});const A=["sm","md","lg","xl","xxl"],Ve=(()=>A.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),Pe=(()=>A.reduce((e,t)=>(e["offset"+W(t)]={type:[String,Number],default:null},e),{}))(),ze=(()=>A.reduce((e,t)=>(e["order"+W(t)]={type:[String,Number],default:null},e),{}))(),le={col:Object.keys(Ve),offset:Object.keys(Pe),order:Object.keys(ze)};function Wt(e,t,s){let n=e;if(!(s==null||s===!1))return t&&(n+=`-${t.replace(e,"")}`),e==="col"&&(n="v-"+n),e==="col"&&(s===""||s===!0)||(n+=`-${s}`),n.toLowerCase()}const Qt=N({name:"VCol",props:c(w(c(w(c(w(c({cols:{type:[Boolean,String,Number],default:!1}},Ve),{offset:{type:[String,Number],default:null}}),Pe),{order:{type:[String,Number],default:null}}),ze),{alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)}}),I()),setup(e,t){let{slots:s}=t;const n=d(()=>{const i=[];let l;for(l in le)le[l].forEach(o=>{const r=e[o],m=Wt(l,o,r);m&&i.push(m)});const a=i.some(o=>o.startsWith("v-col-"));return i.push({"v-col":!a||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),i});return()=>{var i;return ce(e.tag,{class:n.value},(i=s.default)==null?void 0:i.call(s))}}}),Mt=["sm","md","lg","xl","xxl"],Y=["start","end","center"];function q(e,t){return Mt.reduce((s,n)=>(s[e+W(n)]=t(),s),{})}const Re=e=>[...Y,"baseline","stretch"].includes(e),je=q("align",()=>({type:String,default:null,validator:Re})),Ge=e=>[...Y,"space-between","space-around"].includes(e),Oe=q("justify",()=>({type:String,default:null,validator:Ge})),De=e=>[...Y,"space-between","space-around","stretch"].includes(e),He=q("alignContent",()=>({type:String,default:null,validator:De})),ae={align:Object.keys(je),justify:Object.keys(Oe),alignContent:Object.keys(He)},At={align:"align",justify:"justify",alignContent:"align-content"};function Yt(e,t,s){let n=At[e];if(s!=null)return t&&(n+=`-${t.replace(e,"")}`),n+=`-${s}`,n.toLowerCase()}const Zt=N({name:"VRow",props:c(c(w(c(w(c({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Re}},je),{justify:{type:String,default:null,validator:Ge}}),Oe),{alignContent:{type:String,default:null,validator:De}}),He),I()),setup(e,t){let{slots:s}=t;const n=d(()=>{const i=[];let l;for(l in ae)ae[l].forEach(a=>{const o=e[a],r=Yt(l,a,o);r&&i.push(r)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return ce(e.tag,{class:["v-row",n.value]},(i=s.default)==null?void 0:i.call(s))}}});export{Zt as V,Qt as a,Xt as b,de as c,gt as d,ge as e,j as f,pe as g,I as h,Ut as i,ye as j,me as m,Ct as u};
