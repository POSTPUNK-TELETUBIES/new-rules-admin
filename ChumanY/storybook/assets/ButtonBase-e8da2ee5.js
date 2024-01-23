import{_ as X}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{_ as re,h as x,b as ye,k as ie,s as oe,f as Ee,g as ze,j as Oe}from"./styled-0f466e28.js";import{r as o,R as A}from"./index-76fb7be0.js";import{j as $}from"./jsx-runtime-ffb262ed.js";import{_ as Ae,a as Xe}from"./assertThisInitialized-e784747a.js";function Ye(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const We=typeof window<"u"?o.useLayoutEffect:o.useEffect,He=We;function H(e){const t=o.useRef(e);return He(()=>{t.current=e}),o.useRef((...r)=>(0,t.current)(...r)).current}function fe(...e){return o.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{Ye(r,t)})},e)}let G=!0,te=!1,de;const Ge={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function qe(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&Ge[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Je(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Qe(){this.visibilityState==="hidden"&&te&&(G=!0)}function Ze(e){e.addEventListener("keydown",Je,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Qe,!0)}function et(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||qe(t)}function tt(){const e=o.useCallback(n=>{n!=null&&Ze(n.ownerDocument)},[]),t=o.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(de),de=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return et(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:r,ref:e}}const he=A.createContext(null);function se(e,t){var r=function(i){return t&&o.isValidElement(i)?t(i):i},u=Object.create(null);return e&&o.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=r(n)}),u}function nt(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var i in e)i in t?n.length&&(u[i]=n,n=[]):n.push(i);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=r(p)}c[l]=r(l)}for(s=0;s<n.length;s++)c[n[s]]=r(n[s]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function rt(e,t){return se(e.children,function(r){return o.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function it(e,t,r){var u=se(e.children),n=nt(t,u);return Object.keys(n).forEach(function(i){var s=n[i];if(o.isValidElement(s)){var c=i in t,l=i in u,p=t[i],d=o.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[i]=o.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:S(s,"exit",e),enter:S(s,"enter",e)}):!l&&c&&!d?n[i]=o.cloneElement(s,{in:!1}):l&&c&&o.isValidElement(p)&&(n[i]=o.cloneElement(s,{onExited:r.bind(null,s),in:p.props.in,exit:S(s,"exit",e),enter:S(s,"enter",e)}))}}),n}var ot=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},st={component:"div",childFactory:function(t){return t}},ae=function(e){Ae(t,e);function t(u,n){var i;i=e.call(this,u,n)||this;var s=i.handleExited.bind(Xe(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var s=i.children,c=i.handleExited,l=i.firstRender;return{children:l?rt(n,c):it(n,s,c),firstRender:!1}},r.handleExited=function(n,i){var s=se(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[n.key],{children:l}}))},r.render=function(){var n=this.props,i=n.component,s=n.childFactory,c=re(n,["component","childFactory"]),l=this.state.contextValue,p=ot(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?A.createElement(he.Provider,{value:l},p):A.createElement(he.Provider,{value:l},A.createElement(i,c,p))},t}(A.Component);ae.propTypes={};ae.defaultProps=st;const at=ae;function ut(e){const{className:t,classes:r,pulsate:u=!1,rippleX:n,rippleY:i,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=o.useState(!1),b=x(t,r.ripple,r.rippleVisible,u&&r.ripplePulsate),C={width:s,height:s,top:-(s/2)+i,left:-(s/2)+n},h=x(r.child,d&&r.childLeaving,u&&r.childPulsate);return!c&&!d&&g(!0),o.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),$.jsx("span",{className:b,style:C,children:$.jsx("span",{className:h})})}const lt=ye("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=lt,ct=["center","classes","className"];let q=e=>e,me,be,ge,Re;const ne=550,pt=80,ft=ie(me||(me=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),dt=ie(be||(be=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ht=ie(ge||(ge=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),mt=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),bt=oe(ut,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,ft,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,dt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ht,({theme:e})=>e.transitions.easing.easeInOut),gt=o.forwardRef(function(t,r){const u=Ee({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:s}=u,c=re(u,ct),[l,p]=o.useState([]),d=o.useRef(0),g=o.useRef(null);o.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=o.useRef(!1),C=o.useRef(0),h=o.useRef(null),R=o.useRef(null);o.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const U=o.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:D,rippleSize:I,cb:K}=f;p(T=>[...T,$.jsx(bt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:E,rippleY:D,rippleSize:I},d.current)]),d.current+=1,g.current=K},[i]),N=o.useCallback((f={},y={},E=()=>{})=>{const{pulsate:D=!1,center:I=n||y.pulsate,fakeElement:K=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=K?null:R.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,P,L;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)V=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:k,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;V=Math.round(k-B.left),P=Math.round(v-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((T?T.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;L=Math.sqrt(k**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:D,rippleX:V,rippleY:P,rippleSize:L,cb:E})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},pt)):U({pulsate:D,rippleX:V,rippleY:P,rippleSize:L,cb:E})},[n,U]),_=o.useCallback(()=>{N({},{pulsate:!0})},[N]),j=o.useCallback((f,y)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{j(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[]);return o.useImperativeHandle(r,()=>({pulsate:_,start:N,stop:j}),[_,N,j]),$.jsx(mt,X({className:x(m.root,i.root,s),ref:R},c,{children:$.jsx(at,{component:null,exit:!0,children:l})}))}),Rt=gt;function yt(e){return ze("MuiButtonBase",e)}const Et=ye("MuiButtonBase",["root","disabled","focusVisible"]),Tt=Et,Mt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],xt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:u,classes:n}=e,s=Oe({root:["root",t&&"disabled",r&&"focusVisible"]},yt,n);return r&&u&&(s.root+=` ${u}`),s},Ct=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Tt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Vt=o.forwardRef(function(t,r){const u=Ee({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:_,onFocusVisible:j,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:D,onMouseUp:I,onTouchEnd:K,onTouchMove:T,onTouchStart:B,tabIndex:V=0,TouchRippleProps:P,touchRippleRef:L,type:k}=u,v=re(u,Mt),z=o.useRef(null),M=o.useRef(null),Te=fe(M,L),{isFocusVisibleRef:ue,onFocus:Me,onBlur:xe,ref:Ce}=tt(),[F,Y]=o.useState(!1);p&&F&&Y(!1),o.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),z.current.focus()}}),[]);const[J,Ve]=o.useState(!1);o.useEffect(()=>{Ve(!0)},[]);const ve=J&&!d&&!p;o.useEffect(()=>{F&&b&&!d&&J&&M.current.pulsate()},[d,b,F,J]);function w(a,ce,Ke=g){return H(pe=>(ce&&ce(pe),!Ke&&M.current&&M.current[a](pe),!0))}const we=w("start",E),Be=w("stop",U),Pe=w("stop",N),Le=w("stop",I),De=w("stop",a=>{F&&a.preventDefault(),D&&D(a)}),ke=w("start",B),Fe=w("stop",K),Se=w("stop",T),$e=w("stop",a=>{xe(a),ue.current===!1&&Y(!1),h&&h(a)},!1),Ne=H(a=>{z.current||(z.current=a.currentTarget),Me(a),ue.current===!0&&(Y(!0),j&&j(a)),_&&_(a)}),Q=()=>{const a=z.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Z=o.useRef(!1),je=H(a=>{b&&!Z.current&&F&&M.current&&a.key===" "&&(Z.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),Ie=H(a=>{b&&a.key===" "&&M.current&&F&&!a.defaultPrevented&&(Z.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let W=l;W==="button"&&(v.href||v.to)&&(W=C);const O={};W==="button"?(O.type=k===void 0?"button":k,O.disabled=p):(!v.href&&!v.to&&(O.role="button"),p&&(O["aria-disabled"]=p));const Ue=fe(r,Ce,z),le=X({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:F}),_e=xt(le);return $.jsxs(Ct,X({as:W,className:x(_e.root,c),ownerState:le,onBlur:$e,onClick:R,onContextMenu:Be,onFocus:Ne,onKeyDown:je,onKeyUp:Ie,onMouseDown:we,onMouseLeave:De,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:Fe,onTouchMove:Se,onTouchStart:ke,ref:Ue,tabIndex:p?-1:V,type:k},O,v,{children:[s,ve?$.jsx(Rt,X({ref:Te,center:i},P)):null]}))}),kt=Vt;export{kt as B,he as T,He as a,H as b,tt as c,Ye as s,fe as u};
