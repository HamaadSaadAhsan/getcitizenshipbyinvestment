import{c as ct}from"./createLucideIcon-C4H86EFL.js";import{R as w,r as I,j as X}from"./app-BO8FhFoj.js";import{c as ge,S as Nt}from"./index-B7etewmp.js";import{L as Mt}from"./label-DJD5oZtq.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=ct("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=ct("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);var he=e=>e.type==="checkbox",ae=e=>e instanceof Date,U=e=>e==null;const dt=e=>typeof e=="object";var S=e=>!U(e)&&!Array.isArray(e)&&dt(e)&&!ae(e),ft=e=>S(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,Pt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,yt=(e,r)=>e.has(Pt(r)),jt=e=>{const r=e.constructor&&e.constructor.prototype;return S(r)&&r.hasOwnProperty("isPrototypeOf")},Ie=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Ie&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(r=t?[]:{},!t&&!jt(e))r=e;else for(const i in e)e.hasOwnProperty(i)&&(r[i]=N(e[i]));else return e;return r}var De=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,d=(e,r,t)=>{if(!r||!S(e))return t;const i=De(r.split(/[,[\].]+?/)).reduce((n,a)=>U(n)?n:n[a],e);return E(i)||i===e?E(e[r])?t:e[r]:i},B=e=>typeof e=="boolean",Ne=e=>/^\w*$/.test(e),gt=e=>De(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,r,t)=>{let i=-1;const n=Ne(r)?[r]:gt(r),a=n.length,u=a-1;for(;++i<a;){const g=n[i];let _=t;if(i!==u){const D=e[g];_=S(D)||Array.isArray(D)?D:isNaN(+n[i+1])?{}:[]}if(g==="__proto__")return;e[g]=_,e=e[g]}return e};const Fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ht=w.createContext(null),Ee=()=>w.useContext(ht),Bt=e=>{const{children:r,...t}=e;return w.createElement(ht.Provider,{value:t},r)};var vt=(e,r,t,i=!0)=>{const n={defaultValues:r._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const u=a;return r._proxyFormState[u]!==H.all&&(r._proxyFormState[u]=!i||H.all),t&&(t[u]=!0),e[u]}});return n},M=e=>S(e)&&!Object.keys(e).length,mt=(e,r,t,i)=>{t(e);const{name:n,...a}=e;return M(a)||Object.keys(a).length>=Object.keys(r).length||Object.keys(a).find(u=>r[u]===(!i||H.all))},fe=e=>Array.isArray(e)?e:[e],bt=(e,r,t)=>!e||!r||e===r||fe(e).some(i=>i&&(t?i===r:i.startsWith(r)||r.startsWith(i)));function Me(e){const r=w.useRef(e);r.current=e,w.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function qt(e){const r=Ee(),{control:t=r.control,disabled:i,name:n,exact:a}=e||{},[u,g]=w.useState(t._formState),_=w.useRef(!0),D=w.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),m=w.useRef(n);return m.current=n,Me({disabled:i,next:v=>_.current&&bt(m.current,v.name,a)&&mt(v,D.current,t._updateFormState)&&g({...t._formState,...v}),subject:t._subjects.state}),w.useEffect(()=>(_.current=!0,D.current.isValid&&t._updateValid(!0),()=>{_.current=!1}),[t]),vt(u,t,D.current,!1)}var Q=e=>typeof e=="string",_t=(e,r,t,i,n)=>Q(e)?(i&&r.watch.add(e),d(t,e,n)):Array.isArray(e)?e.map(a=>(i&&r.watch.add(a),d(t,a))):(i&&(r.watchAll=!0),t);function Wt(e){const r=Ee(),{control:t=r.control,name:i,defaultValue:n,disabled:a,exact:u}=e||{},g=w.useRef(i);g.current=i,Me({disabled:a,subject:t._subjects.values,next:m=>{bt(g.current,m.name,u)&&D(N(_t(g.current,t._names,m.values||t._formValues,!1,n)))}});const[_,D]=w.useState(t._getWatch(i,n));return w.useEffect(()=>t._removeUnmounted()),_}function Ht(e){const r=Ee(),{name:t,disabled:i,control:n=r.control,shouldUnregister:a}=e,u=yt(n._names.array,t),g=Wt({control:n,name:t,defaultValue:d(n._formValues,t,d(n._defaultValues,t,e.defaultValue)),exact:!0}),_=qt({control:n,name:t,exact:!0}),D=w.useRef(n.register(t,{...e.rules,value:g,...B(e.disabled)?{disabled:e.disabled}:{}}));return w.useEffect(()=>{const m=n._options.shouldUnregister||a,v=(q,$)=>{const O=d(n._fields,q);O&&O._f&&(O._f.mount=$)};if(v(t,!0),m){const q=N(d(n._options.defaultValues,t));A(n._defaultValues,t,q),E(d(n._formValues,t))&&A(n._formValues,t,q)}return()=>{(u?m&&!n._state.action:m)?n.unregister(t):v(t,!1)}},[t,n,u,a]),w.useEffect(()=>{d(n._fields,t)&&n._updateDisabledField({disabled:i,fields:n._fields,name:t,value:d(n._fields,t)._f.value})},[i,t,n]),{field:{name:t,value:g,...B(i)||_.disabled?{disabled:_.disabled||i}:{},onChange:w.useCallback(m=>D.current.onChange({target:{value:ft(m),name:t},type:Fe.CHANGE}),[t]),onBlur:w.useCallback(()=>D.current.onBlur({target:{value:d(n._formValues,t),name:t},type:Fe.BLUR}),[t,n]),ref:w.useCallback(m=>{const v=d(n._fields,t);v&&m&&(v._f.ref={focus:()=>m.focus(),select:()=>m.select(),setCustomValidity:q=>m.setCustomValidity(q),reportValidity:()=>m.reportValidity()})},[n._fields,t])},formState:_,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(_.errors,t)},isDirty:{enumerable:!0,get:()=>!!d(_.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!d(_.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!d(_.validatingFields,t)},error:{enumerable:!0,get:()=>d(_.errors,t)}})}}const $t=e=>e.render(Ht(e));var Ft=(e,r,t,i,n)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[i]:n||!0}}:{},Je=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),Xe=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const ye=(e,r,t,i)=>{for(const n of t||Object.keys(e)){const a=d(e,n);if(a){const{_f:u,...g}=a;if(u){if(u.refs&&u.refs[0]&&r(u.refs[0],n)&&!i)return!0;if(u.ref&&r(u.ref,u.name)&&!i)return!0;if(ye(g,r))break}else if(S(g)&&ye(g,r))break}}};var Qt=(e,r,t)=>{const i=fe(d(e,t));return A(i,"root",r[t]),A(e,t,i),e},Pe=e=>e.type==="file",J=e=>typeof e=="function",xe=e=>{if(!Ie)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},_e=e=>Q(e),je=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const Ze={value:!1,isValid:!1},et={value:!0,isValid:!0};var xt=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?et:{value:e[0].value,isValid:!0}:et:Ze}return Ze};const tt={isValid:!1,value:null};var Vt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,tt):tt;function rt(e,r,t="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||B(e)&&!e)return{type:t,message:_e(e)?e:"",ref:r}}var ne=e=>S(e)&&!Ve(e)?e:{value:e,message:""},st=async(e,r,t,i,n)=>{const{ref:a,refs:u,required:g,maxLength:_,minLength:D,min:m,max:v,pattern:q,validate:$,name:O,valueAsNumber:ke,mount:z,disabled:Z}=e._f,F=d(r,O);if(!z||Z)return{};const K=u?u[0]:a,G=b=>{i&&K.reportValidity&&(K.setCustomValidity(B(b)?"":b||""),K.reportValidity())},k={},se=je(a),ve=he(a),te=se||ve,ie=(ke||Pe(a))&&E(a.value)&&E(F)||xe(a)&&a.value===""||F===""||Array.isArray(F)&&!F.length,P=Ft.bind(null,O,t,k),me=(b,x,p,T=Y.maxLength,W=Y.minLength)=>{const j=b?x:p;k[O]={type:b?T:W,message:j,ref:a,...P(b?T:W,j)}};if(n?!Array.isArray(F)||!F.length:g&&(!te&&(ie||U(F))||B(F)&&!F||ve&&!xt(u).isValid||se&&!Vt(u).isValid)){const{value:b,message:x}=_e(g)?{value:!!g,message:g}:ne(g);if(b&&(k[O]={type:Y.required,message:x,ref:K,...P(Y.required,x)},!t))return G(x),k}if(!ie&&(!U(m)||!U(v))){let b,x;const p=ne(v),T=ne(m);if(!U(F)&&!isNaN(F)){const W=a.valueAsNumber||F&&+F;U(p.value)||(b=W>p.value),U(T.value)||(x=W<T.value)}else{const W=a.valueAsDate||new Date(F),j=ue=>new Date(new Date().toDateString()+" "+ue),le=a.type=="time",oe=a.type=="week";Q(p.value)&&F&&(b=le?j(F)>j(p.value):oe?F>p.value:W>new Date(p.value)),Q(T.value)&&F&&(x=le?j(F)<j(T.value):oe?F<T.value:W<new Date(T.value))}if((b||x)&&(me(!!b,p.message,T.message,Y.max,Y.min),!t))return G(k[O].message),k}if((_||D)&&!ie&&(Q(F)||n&&Array.isArray(F))){const b=ne(_),x=ne(D),p=!U(b.value)&&F.length>+b.value,T=!U(x.value)&&F.length<+x.value;if((p||T)&&(me(p,b.message,x.message),!t))return G(k[O].message),k}if(q&&!ie&&Q(F)){const{value:b,message:x}=ne(q);if(Ve(b)&&!F.match(b)&&(k[O]={type:Y.pattern,message:x,ref:a,...P(Y.pattern,x)},!t))return G(x),k}if($){if(J($)){const b=await $(F,r),x=rt(b,K);if(x&&(k[O]={...x,...P(Y.validate,x.message)},!t))return G(x.message),k}else if(S($)){let b={};for(const x in $){if(!M(b)&&!t)break;const p=rt(await $[x](F,r),K,x);p&&(b={...p,...P(x,p.message)},G(p.message),t&&(k[O]=b))}if(!M(b)&&(k[O]={ref:K,...b},!t))return k}}return G(!0),k};function zt(e,r){const t=r.slice(0,-1).length;let i=0;for(;i<t;)e=E(e)?i++:e[r[i++]];return e}function Kt(e){for(const r in e)if(e.hasOwnProperty(r)&&!E(e[r]))return!1;return!0}function C(e,r){const t=Array.isArray(r)?r:Ne(r)?[r]:gt(r),i=t.length===1?e:zt(e,t),n=t.length-1,a=t[n];return i&&delete i[a],n!==0&&(S(i)&&M(i)||Array.isArray(i)&&Kt(i))&&C(e,t.slice(0,-1)),e}var Oe=()=>{let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}},Ae=e=>U(e)||!dt(e);function ee(e,r){if(Ae(e)||Ae(r))return e===r;if(ae(e)&&ae(r))return e.getTime()===r.getTime();const t=Object.keys(e),i=Object.keys(r);if(t.length!==i.length)return!1;for(const n of t){const a=e[n];if(!i.includes(n))return!1;if(n!=="ref"){const u=r[n];if(ae(a)&&ae(u)||S(a)&&S(u)||Array.isArray(a)&&Array.isArray(u)?!ee(a,u):a!==u)return!1}}return!0}var At=e=>e.type==="select-multiple",Gt=e=>je(e)||he(e),Te=e=>xe(e)&&e.isConnected,wt=e=>{for(const r in e)if(J(e[r]))return!0;return!1};function we(e,r={}){const t=Array.isArray(e);if(S(e)||t)for(const i in e)Array.isArray(e[i])||S(e[i])&&!wt(e[i])?(r[i]=Array.isArray(e[i])?[]:{},we(e[i],r[i])):U(e[i])||(r[i]=!0);return r}function Dt(e,r,t){const i=Array.isArray(e);if(S(e)||i)for(const n in e)Array.isArray(e[n])||S(e[n])&&!wt(e[n])?E(r)||Ae(t[n])?t[n]=Array.isArray(e[n])?we(e[n],[]):{...we(e[n])}:Dt(e[n],U(r)?{}:r[n],t[n]):t[n]=!ee(e[n],r[n]);return t}var be=(e,r)=>Dt(e,r,we(r)),Et=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:i})=>E(e)?e:r?e===""?NaN:e&&+e:t&&Q(e)?new Date(e):i?i(e):e;function Ue(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return Pe(r)?r.files:je(r)?Vt(e.refs).value:At(r)?[...r.selectedOptions].map(({value:t})=>t):he(r)?xt(e.refs).value:Et(E(r.value)?e.ref.value:r.value,e)}var Yt=(e,r,t,i)=>{const n={};for(const a of e){const u=d(r,a);u&&A(n,a,u._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:i}},ce=e=>E(e)?e:Ve(e)?e.source:S(e)?Ve(e.value)?e.value.source:e.value:e;const it="AsyncFunction";var Jt=e=>(!e||!e.validate)&&!!(J(e.validate)&&e.validate.constructor.name===it||S(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===it)),Xt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function nt(e,r,t){const i=d(e,t);if(i||Ne(t))return{error:i,name:t};const n=t.split(".");for(;n.length;){const a=n.join("."),u=d(r,a),g=d(e,a);if(u&&!Array.isArray(u)&&t!==a)return{name:t};if(g&&g.type)return{name:a,error:g};n.pop()}return{name:t}}var Zt=(e,r,t,i,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(r||e):(t?i.isOnBlur:n.isOnBlur)?!e:(t?i.isOnChange:n.isOnChange)?e:!0,er=(e,r)=>!De(d(e,r)).length&&C(e,r);const tr={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function rr(e={}){let r={...tr,...e},t={submitCount:0,isDirty:!1,isLoading:J(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},i={},n=S(r.defaultValues)||S(r.values)?N(r.defaultValues||r.values)||{}:{},a=r.shouldUnregister?{}:N(n),u={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},_,D=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Oe(),array:Oe(),state:Oe()},q=Je(r.mode),$=Je(r.reValidateMode),O=r.criteriaMode===H.all,ke=s=>l=>{clearTimeout(D),D=setTimeout(s,l)},z=async s=>{if(m.isValid||s){const l=r.resolver?M((await te()).errors):await P(i,!0);l!==t.isValid&&v.state.next({isValid:l})}},Z=(s,l)=>{(m.isValidating||m.validatingFields)&&((s||Array.from(g.mount)).forEach(o=>{o&&(l?A(t.validatingFields,o,l):C(t.validatingFields,o))}),v.state.next({validatingFields:t.validatingFields,isValidating:!M(t.validatingFields)}))},F=(s,l=[],o,y,f=!0,c=!0)=>{if(y&&o){if(u.action=!0,c&&Array.isArray(d(i,s))){const h=o(d(i,s),y.argA,y.argB);f&&A(i,s,h)}if(c&&Array.isArray(d(t.errors,s))){const h=o(d(t.errors,s),y.argA,y.argB);f&&A(t.errors,s,h),er(t.errors,s)}if(m.touchedFields&&c&&Array.isArray(d(t.touchedFields,s))){const h=o(d(t.touchedFields,s),y.argA,y.argB);f&&A(t.touchedFields,s,h)}m.dirtyFields&&(t.dirtyFields=be(n,a)),v.state.next({name:s,isDirty:b(s,l),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(a,s,l)},K=(s,l)=>{A(t.errors,s,l),v.state.next({errors:t.errors})},G=s=>{t.errors=s,v.state.next({errors:t.errors,isValid:!1})},k=(s,l,o,y)=>{const f=d(i,s);if(f){const c=d(a,s,E(o)?d(n,s):o);E(c)||y&&y.defaultChecked||l?A(a,s,l?c:Ue(f._f)):T(s,c),u.mount&&z()}},se=(s,l,o,y,f)=>{let c=!1,h=!1;const V={name:s},L=!!(d(i,s)&&d(i,s)._f&&d(i,s)._f.disabled);if(!o||y){m.isDirty&&(h=t.isDirty,t.isDirty=V.isDirty=b(),c=h!==V.isDirty);const R=L||ee(d(n,s),l);h=!!(!L&&d(t.dirtyFields,s)),R||L?C(t.dirtyFields,s):A(t.dirtyFields,s,!0),V.dirtyFields=t.dirtyFields,c=c||m.dirtyFields&&h!==!R}if(o){const R=d(t.touchedFields,s);R||(A(t.touchedFields,s,o),V.touchedFields=t.touchedFields,c=c||m.touchedFields&&R!==o)}return c&&f&&v.state.next(V),c?V:{}},ve=(s,l,o,y)=>{const f=d(t.errors,s),c=m.isValid&&B(l)&&t.isValid!==l;if(e.delayError&&o?(_=ke(()=>K(s,o)),_(e.delayError)):(clearTimeout(D),_=null,o?A(t.errors,s,o):C(t.errors,s)),(o?!ee(f,o):f)||!M(y)||c){const h={...y,...c&&B(l)?{isValid:l}:{},errors:t.errors,name:s};t={...t,...h},v.state.next(h)}},te=async s=>{Z(s,!0);const l=await r.resolver(a,r.context,Yt(s||g.mount,i,r.criteriaMode,r.shouldUseNativeValidation));return Z(s),l},ie=async s=>{const{errors:l}=await te(s);if(s)for(const o of s){const y=d(l,o);y?A(t.errors,o,y):C(t.errors,o)}else t.errors=l;return l},P=async(s,l,o={valid:!0})=>{for(const y in s){const f=s[y];if(f){const{_f:c,...h}=f;if(c){const V=g.array.has(c.name),L=f._f&&Jt(f._f);L&&m.validatingFields&&Z([y],!0);const R=await st(f,a,O,r.shouldUseNativeValidation&&!l,V);if(L&&m.validatingFields&&Z([y]),R[c.name]&&(o.valid=!1,l))break;!l&&(d(R,c.name)?V?Qt(t.errors,R,c.name):A(t.errors,c.name,R[c.name]):C(t.errors,c.name))}!M(h)&&await P(h,l,o)}}return o.valid},me=()=>{for(const s of g.unMount){const l=d(i,s);l&&(l._f.refs?l._f.refs.every(o=>!Te(o)):!Te(l._f.ref))&&pe(s)}g.unMount=new Set},b=(s,l)=>(s&&l&&A(a,s,l),!ee(Be(),n)),x=(s,l,o)=>_t(s,g,{...u.mount?a:E(l)?n:Q(s)?{[s]:l}:l},o,l),p=s=>De(d(u.mount?a:n,s,e.shouldUnregister?d(n,s,[]):[])),T=(s,l,o={})=>{const y=d(i,s);let f=l;if(y){const c=y._f;c&&(!c.disabled&&A(a,s,Et(l,c)),f=xe(c.ref)&&U(l)?"":l,At(c.ref)?[...c.ref.options].forEach(h=>h.selected=f.includes(h.value)):c.refs?he(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(V=>V===h.value):f===h.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(h=>h.checked=h.value===f):Pe(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||v.values.next({name:s,values:{...a}})))}(o.shouldDirty||o.shouldTouch)&&se(s,f,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&ue(s)},W=(s,l,o)=>{for(const y in l){const f=l[y],c=`${s}.${y}`,h=d(i,c);(g.array.has(s)||!Ae(f)||h&&!h._f)&&!ae(f)?W(c,f,o):T(c,f,o)}},j=(s,l,o={})=>{const y=d(i,s),f=g.array.has(s),c=N(l);A(a,s,c),f?(v.array.next({name:s,values:{...a}}),(m.isDirty||m.dirtyFields)&&o.shouldDirty&&v.state.next({name:s,dirtyFields:be(n,a),isDirty:b(s,c)})):y&&!y._f&&!U(c)?W(s,c,o):T(s,c,o),Xe(s,g)&&v.state.next({...t}),v.values.next({name:u.mount?s:void 0,values:{...a}})},le=async s=>{u.mount=!0;const l=s.target;let o=l.name,y=!0;const f=d(i,o),c=()=>l.type?Ue(f._f):ft(s),h=V=>{y=Number.isNaN(V)||ee(V,d(a,o,V))};if(f){let V,L;const R=c(),re=s.type===Fe.BLUR||s.type===Fe.FOCUS_OUT,Tt=!Xt(f._f)&&!r.resolver&&!d(t.errors,o)&&!f._f.deps||Zt(re,d(t.touchedFields,o),t.isSubmitted,$,q),Le=Xe(o,g,re);A(a,o,R),re?(f._f.onBlur&&f._f.onBlur(s),_&&_(0)):f._f.onChange&&f._f.onChange(s);const Re=se(o,R,re,!1),Ut=!M(Re)||Le;if(!re&&v.values.next({name:o,type:s.type,values:{...a}}),Tt)return m.isValid&&(e.mode==="onBlur"?re&&z():z()),Ut&&v.state.next({name:o,...Le?{}:Re});if(!re&&Le&&v.state.next({...t}),r.resolver){const{errors:Ge}=await te([o]);if(h(R),y){const It=nt(t.errors,i,o),Ye=nt(Ge,i,It.name||o);V=Ye.error,o=Ye.name,L=M(Ge)}}else Z([o],!0),V=(await st(f,a,O,r.shouldUseNativeValidation))[o],Z([o]),h(R),y&&(V?L=!1:m.isValid&&(L=await P(i,!0)));y&&(f._f.deps&&ue(f._f.deps),ve(o,L,V,Re))}},oe=(s,l)=>{if(d(t.errors,l)&&s.focus)return s.focus(),1},ue=async(s,l={})=>{let o,y;const f=fe(s);if(r.resolver){const c=await ie(E(s)?s:f);o=M(c),y=s?!f.some(h=>d(c,h)):o}else s?(y=(await Promise.all(f.map(async c=>{const h=d(i,c);return await P(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!y&&!t.isValid)&&z()):y=o=await P(i);return v.state.next({...!Q(s)||m.isValid&&o!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:o}:{},errors:t.errors}),l.shouldFocus&&!y&&ye(i,oe,s?f:g.mount),y},Be=s=>{const l={...u.mount?a:n};return E(s)?l:Q(s)?d(l,s):s.map(o=>d(l,o))},qe=(s,l)=>({invalid:!!d((l||t).errors,s),isDirty:!!d((l||t).dirtyFields,s),error:d((l||t).errors,s),isValidating:!!d(t.validatingFields,s),isTouched:!!d((l||t).touchedFields,s)}),Ct=s=>{s&&fe(s).forEach(l=>C(t.errors,l)),v.state.next({errors:s?t.errors:{}})},We=(s,l,o)=>{const y=(d(i,s,{_f:{}})._f||{}).ref,f=d(t.errors,s)||{},{ref:c,message:h,type:V,...L}=f;A(t.errors,s,{...L,...l,ref:y}),v.state.next({name:s,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&y&&y.focus&&y.focus()},Lt=(s,l)=>J(s)?v.values.subscribe({next:o=>s(x(void 0,l),o)}):x(s,l,!0),pe=(s,l={})=>{for(const o of s?fe(s):g.mount)g.mount.delete(o),g.array.delete(o),l.keepValue||(C(i,o),C(a,o)),!l.keepError&&C(t.errors,o),!l.keepDirty&&C(t.dirtyFields,o),!l.keepTouched&&C(t.touchedFields,o),!l.keepIsValidating&&C(t.validatingFields,o),!r.shouldUnregister&&!l.keepDefaultValue&&C(n,o);v.values.next({values:{...a}}),v.state.next({...t,...l.keepDirty?{isDirty:b()}:{}}),!l.keepIsValid&&z()},He=({disabled:s,name:l,field:o,fields:y,value:f})=>{if(B(s)&&u.mount||s){const c=s?void 0:E(f)?Ue(o?o._f:d(y,l)._f):f;A(a,l,c),se(l,c,!1,!1,!0)}},Ce=(s,l={})=>{let o=d(i,s);const y=B(l.disabled)||B(e.disabled);return A(i,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...l}}),g.mount.add(s),o?He({field:o,disabled:B(l.disabled)?l.disabled:e.disabled,name:s,value:l.value}):k(s,!0,l.value),{...y?{disabled:l.disabled||e.disabled}:{},...r.progressive?{required:!!l.required,min:ce(l.min),max:ce(l.max),minLength:ce(l.minLength),maxLength:ce(l.maxLength),pattern:ce(l.pattern)}:{},name:s,onChange:le,onBlur:le,ref:f=>{if(f){Ce(s,l),o=d(i,s);const c=E(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Gt(c),V=o._f.refs||[];if(h?V.find(L=>L===c):c===o._f.ref)return;A(i,s,{_f:{...o._f,...h?{refs:[...V.filter(Te),c,...Array.isArray(d(n,s))?[{}]:[]],ref:{type:c.type,name:s}}:{ref:c}}}),k(s,!1,void 0,c)}else o=d(i,s,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||l.shouldUnregister)&&!(yt(g.array,s)&&u.action)&&g.unMount.add(s)}}},$e=()=>r.shouldFocusError&&ye(i,oe,g.mount),Rt=s=>{B(s)&&(v.state.next({disabled:s}),ye(i,(l,o)=>{const y=d(i,o);y&&(l.disabled=y._f.disabled||s,Array.isArray(y._f.refs)&&y._f.refs.forEach(f=>{f.disabled=y._f.disabled||s}))},0,!1))},Qe=(s,l)=>async o=>{let y;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let f=N(a);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:c,values:h}=await te();t.errors=c,f=h}else await P(i);if(C(t.errors,"root"),M(t.errors)){v.state.next({errors:{}});try{await s(f,o)}catch(c){y=c}}else l&&await l({...t.errors},o),$e(),setTimeout($e);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors)&&!y,submitCount:t.submitCount+1,errors:t.errors}),y)throw y},Ot=(s,l={})=>{d(i,s)&&(E(l.defaultValue)?j(s,N(d(n,s))):(j(s,l.defaultValue),A(n,s,N(l.defaultValue))),l.keepTouched||C(t.touchedFields,s),l.keepDirty||(C(t.dirtyFields,s),t.isDirty=l.defaultValue?b(s,N(d(n,s))):b()),l.keepError||(C(t.errors,s),m.isValid&&z()),v.state.next({...t}))},ze=(s,l={})=>{const o=s?N(s):n,y=N(o),f=M(s),c=f?n:y;if(l.keepDefaultValues||(n=o),!l.keepValues){if(l.keepDirtyValues)for(const h of g.mount)d(t.dirtyFields,h)?A(c,h,d(a,h)):j(h,d(c,h));else{if(Ie&&E(s))for(const h of g.mount){const V=d(i,h);if(V&&V._f){const L=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(xe(L)){const R=L.closest("form");if(R){R.reset();break}}}}i={}}a=e.shouldUnregister?l.keepDefaultValues?N(n):{}:N(c),v.array.next({values:{...c}}),v.values.next({values:{...c}})}g={mount:l.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!m.isValid||!!l.keepIsValid||!!l.keepDirtyValues,u.watch=!!e.shouldUnregister,v.state.next({submitCount:l.keepSubmitCount?t.submitCount:0,isDirty:f?!1:l.keepDirty?t.isDirty:!!(l.keepDefaultValues&&!ee(s,n)),isSubmitted:l.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?{}:l.keepDirtyValues?l.keepDefaultValues&&a?be(n,a):t.dirtyFields:l.keepDefaultValues&&s?be(n,s):l.keepDirty?t.dirtyFields:{},touchedFields:l.keepTouched?t.touchedFields:{},errors:l.keepErrors?t.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ke=(s,l)=>ze(J(s)?s(a):s,l);return{control:{register:Ce,unregister:pe,getFieldState:qe,handleSubmit:Qe,setError:We,_executeSchema:te,_getWatch:x,_getDirty:b,_updateValid:z,_removeUnmounted:me,_updateFieldArray:F,_updateDisabledField:He,_getFieldArray:p,_reset:ze,_resetDefaultValues:()=>J(r.defaultValues)&&r.defaultValues().then(s=>{Ke(s,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:Rt,_subjects:v,_proxyFormState:m,_setErrors:G,get _fields(){return i},get _formValues(){return a},get _state(){return u},set _state(s){u=s},get _defaultValues(){return n},get _names(){return g},set _names(s){g=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:ue,register:Ce,handleSubmit:Qe,watch:Lt,setValue:j,getValues:Be,reset:Ke,resetField:Ot,clearErrors:Ct,unregister:pe,setError:We,setFocus:(s,l={})=>{const o=d(i,s),y=o&&o._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),l.shouldSelect&&f.select())}},getFieldState:qe}}function xr(e={}){const r=w.useRef(),t=w.useRef(),[i,n]=w.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...rr(e),formState:i});const a=r.current.control;return a._options=e,Me({subject:a._subjects.state,next:u=>{mt(u,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),w.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),w.useEffect(()=>{if(a._proxyFormState.isDirty){const u=a._getDirty();u!==i.isDirty&&a._subjects.state.next({isDirty:u})}},[a,i.isDirty]),w.useEffect(()=>{e.values&&!ee(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values,n(u=>({...u}))):a._resetDefaultValues()},[e.values,a]),w.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),w.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),w.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),r.current.formState=vt(i,a),r.current}const at=(e,r,t)=>{if(e&&"reportValidity"in e){const i=d(t,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},St=(e,r)=>{for(const t in r.fields){const i=r.fields[t];i&&i.ref&&"reportValidity"in i.ref?at(i.ref,t,e):i.refs&&i.refs.forEach(n=>at(n,t,e))}},sr=(e,r)=>{r.shouldUseNativeValidation&&St(e,r);const t={};for(const i in e){const n=d(r.fields,i),a=Object.assign(e[i]||{},{ref:n&&n.ref});if(ir(r.names||Object.keys(e),i)){const u=Object.assign({},d(t,i));A(u,"root",a),A(t,i,u)}else A(t,i,a)}return t},ir=(e,r)=>e.some(t=>t.startsWith(r+"."));var nr=function(e,r){for(var t={};e.length;){var i=e[0],n=i.code,a=i.message,u=i.path.join(".");if(!t[u])if("unionErrors"in i){var g=i.unionErrors[0].errors[0];t[u]={message:g.message,type:g.code}}else t[u]={message:a,type:n};if("unionErrors"in i&&i.unionErrors.forEach(function(m){return m.errors.forEach(function(v){return e.push(v)})}),r){var _=t[u].types,D=_&&_[i.code];t[u]=Ft(u,r,t,n,D?[].concat(D,i.message):i.message)}e.shift()}return t},Vr=function(e,r,t){return t===void 0&&(t={}),function(i,n,a){try{return Promise.resolve(function(u,g){try{var _=Promise.resolve(e[t.mode==="sync"?"parse":"parseAsync"](i,r)).then(function(D){return a.shouldUseNativeValidation&&St({},a),{errors:{},values:t.raw?i:D}})}catch(D){return g(D)}return _&&_.then?_.then(void 0,g):_}(0,function(u){if(function(g){return Array.isArray(g==null?void 0:g.errors)}(u))return{values:{},errors:sr(nr(u.errors,!a.shouldUseNativeValidation&&a.criteriaMode==="all"),a)};throw u}))}catch(u){return Promise.reject(u)}}};const lt="snow",ot={toolbar:[["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],["link","image","video"],[{color:[]},{background:[]}],["clean"]],clipboard:{matchVisual:!1}},ut=["bold","italic","underline","strike","align","list","indent","size","header","link","image","video","color","background"];function de(e,r){if(e==null)throw new TypeError("Cannot convert undefined or null to object");const t=Object(e);for(let i=1;i<arguments.length;i++){const n=arguments[i];if(n!=null)for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}const Ar=(e={theme:lt,modules:ot,formats:ut})=>{const r=I.useRef(),[t,i]=I.useState(!1),[n,a]=I.useState({Quill:void 0,quillRef:r,quill:void 0,editorRef:r,editor:void 0});return I.useEffect(()=>{if(n.Quill||a(u=>de(u,{Quill:require("quill").default})),n.Quill&&!n.quill&&r&&r.current&&t){const u=de(e,{modules:de(ot,e.modules),formats:e.formats||ut,theme:e.theme||lt}),g=new n.Quill(r.current,u);a(de(de({},n),{quill:g,editor:g}))}i(!0)},[t,n,e]),n},wr=Bt,kt=I.createContext({}),Dr=({...e})=>X.jsx(kt.Provider,{value:{name:e.name},children:X.jsx($t,{...e})}),Se=()=>{const e=I.useContext(kt),r=I.useContext(pt),{getFieldState:t,formState:i}=Ee(),n=t(e.name,i);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:a}=r;return{id:a,name:e.name,formItemId:`${a}-form-item`,formDescriptionId:`${a}-form-item-description`,formMessageId:`${a}-form-item-message`,...n}},pt=I.createContext({}),ar=I.forwardRef(({className:e,...r},t)=>{const i=I.useId();return X.jsx(pt.Provider,{value:{id:i},children:X.jsx("div",{ref:t,className:ge("space-y-2",e),...r})})});ar.displayName="FormItem";const lr=I.forwardRef(({className:e,...r},t)=>{const{error:i,formItemId:n}=Se();return X.jsx(Mt,{ref:t,className:ge(i&&"text-destructive",e),htmlFor:n,...r})});lr.displayName="FormLabel";const or=I.forwardRef(({...e},r)=>{const{error:t,formItemId:i,formDescriptionId:n,formMessageId:a}=Se();return X.jsx(Nt,{ref:r,id:i,"aria-describedby":t?`${n} ${a}`:`${n}`,"aria-invalid":!!t,...e})});or.displayName="FormControl";const ur=I.forwardRef(({className:e,...r},t)=>{const{formDescriptionId:i}=Se();return X.jsx("p",{ref:t,id:i,className:ge("text-[0.8rem] text-muted-foreground",e),...r})});ur.displayName="FormDescription";const cr=I.forwardRef(({className:e,children:r,...t},i)=>{const{error:n,formMessageId:a}=Se(),u=n?String(n==null?void 0:n.message):r;return u?X.jsx("p",{ref:i,id:a,className:ge("text-[0.8rem] font-medium text-destructive",e),...t,children:u}):null});cr.displayName="FormMessage";const dr=I.forwardRef(({className:e,...r},t)=>X.jsx("textarea",{className:ge("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:t,...r}));dr.displayName="Textarea";export{wr as F,_r as L,dr as T,Fr as U,Ar as a,Dr as b,ar as c,lr as d,or as e,cr as f,ur as g,Vr as t,xr as u};
