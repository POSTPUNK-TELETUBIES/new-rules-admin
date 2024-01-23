import{b as m,g as z,s as R,l as t,c as u,f as y,_ as B,h as C,j as x}from"./styled-0f466e28.js";import{_ as r}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{r as $}from"./index-76fb7be0.js";import{j as I}from"./jsx-runtime-ffb262ed.js";import{B as h}from"./ButtonBase-e8da2ee5.js";function k(o){return z("MuiIconButton",o)}const _=m("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),j=_,M=["edge","children","className","color","disabled","disableFocusRipple","size"],E=o=>{const{classes:a,disabled:e,color:s,edge:i,size:n}=o,l={root:["root",e&&"disabled",s!=="default"&&`color${t(s)}`,i&&`edge${t(i)}`,`size${t(n)}`]};return x(l,k,a)},O=R(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.color!=="default"&&a[`color${t(e.color)}`],e.edge&&a[`edge${t(e.edge)}`],a[`size${t(e.size)}`]]}})(({theme:o,ownerState:a})=>r({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:o,ownerState:a})=>{var e;const s=(e=(o.vars||o).palette)==null?void 0:e[a.color];return r({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&r({color:s==null?void 0:s.main},!a.disableRipple&&{"&:hover":r({},s&&{backgroundColor:o.vars?`rgba(${s.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(s.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${j.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),T=$.forwardRef(function(a,e){const s=y({props:a,name:"MuiIconButton"}),{edge:i=!1,children:n,className:l,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:f="medium"}=s,v=B(s,M),p=r({},s,{edge:i,color:g,disabled:c,disableFocusRipple:d,size:f}),b=E(p);return I.jsx(O,r({className:C(b.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:e,ownerState:p},v,{children:n}))}),W=T;export{W as I};
