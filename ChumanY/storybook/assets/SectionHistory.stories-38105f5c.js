import{j as i}from"./jsx-runtime-ffb262ed.js";import{c as P}from"./dataHistory-fa44baba.js";import{Q as L,a as k}from"./QueryClientProvider-426c0272.js";import{r as a}from"./index-76fb7be0.js";import{C as B}from"./CardHistory-ce327cf9.js";import{_ as s}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{g as f,b as C,l as M,s as x,f as T,_ as g,h as v,j as y}from"./styled-0f466e28.js";import{B as E}from"./Button-aa7107fe.js";import{i as H}from"./isMuiElement-bce4c331.js";import{T as w}from"./Typography-a16f3c59.js";import{L as S}from"./LinearProgress-1a0b5565.js";import"./index-3a83ac04.js";import"./_commonjsHelpers-de833af9.js";import"./Paper-3987c687.js";import"./Avatar-2e49f73b.js";import"./createSvgIcon-29244f67.js";import"./Chip-87e94d03.js";import"./ButtonBase-e8da2ee5.js";import"./assertThisInitialized-e784747a.js";import"./extendSxProp-58e483d5.js";import"./useTheme-6957705c.js";const V=a.createContext({}),h=V;function q(e){return f("MuiTimeline",e)}C("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function u(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${M(e)}`}const G=["position","className"],Q=e=>{const{position:o,classes:n}=e,t={root:["root",o&&u(o)]};return y(t,q,n)},W=x("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.position&&o[u(n.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),z=a.forwardRef(function(o,n){const t=T({props:o,name:"MuiTimeline"}),{position:r="right",className:p}=t,c=g(t,G),l=s({},t,{position:r}),m=Q(l),d=a.useMemo(()=>({position:r}),[r]);return i.jsx(h.Provider,{value:d,children:i.jsx(W,s({className:v(m.root,p),ownerState:l,ref:n},c))})}),F=z;function J(e){return f("MuiTimelineContent",e)}const K=C("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),X=K,Y=["className"],Z=e=>{const{position:o,classes:n}=e,t={root:["root",u(o)]};return y(t,J,n)},ee=x(w,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[u(n.position)]]}})(({ownerState:e})=>s({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),oe=a.forwardRef(function(o,n){const t=T({props:o,name:"MuiTimelineContent"}),{className:r}=t,p=g(t,Y),{position:c}=a.useContext(h),l=s({},t,{position:c||"right"}),m=Z(l);return i.jsx(ee,s({component:"div",className:v(m.root,r),ownerState:l,ref:n},p))}),te=oe;function ne(e){return f("MuiTimelineOppositeContent",e)}const ie=C("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),A=ie,se=["className"],re=e=>{const{position:o,classes:n}=e,t={root:["root",u(o)]};return y(t,ne,n)},le=x(w,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[u(n.position)]]}})(({ownerState:e})=>s({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},e.position==="left"&&{textAlign:"left"})),b=a.forwardRef(function(o,n){const t=T({props:o,name:"MuiTimelineOppositeContent"}),{className:r}=t,p=g(t,se),{position:c}=a.useContext(h),l=s({},t,{position:c||"left"}),m=re(l);return i.jsx(le,s({component:"div",className:v(m.root,r),ownerState:l,ref:n},p))});b.muiName="TimelineOppositeContent";const ae=b;function ce(e){return f("MuiTimelineItem",e)}C("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const pe=["position","className"],me=e=>{const{position:o,classes:n,hasOppositeContent:t}=e,r={root:["root",u(o),!t&&"missingOppositeContent"]};return y(r,ce,n)},de=x("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[u(n.position)]]}})(({ownerState:e})=>s({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${X.root}`]:{textAlign:"right"},[`& .${A.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),ue=a.forwardRef(function(o,n){const t=T({props:o,name:"MuiTimelineItem"}),{position:r,className:p}=t,c=g(t,pe),{position:l}=a.useContext(h);let m=!1;a.Children.forEach(t.children,I=>{H(I,["TimelineOppositeContent"])&&(m=!0)});const d=s({},t,{position:r||l||"right",hasOppositeContent:m}),D=me(d),U=a.useMemo(()=>({position:d.position}),[d.position]);return i.jsx(h.Provider,{value:U,children:i.jsx(de,s({className:v(D.root,p),ownerState:d,ref:n},c))})}),fe=ue;function Ce(e){return f("MuiTimelineSeparator",e)}C("MuiTimelineSeparator",["root"]);const xe=["className"],Te=e=>{const{classes:o}=e;return y({root:["root"]},Ce,o)},ge=x("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),ve=a.forwardRef(function(o,n){const t=T({props:o,name:"MuiTimelineSeparator"}),{className:r}=t,p=g(t,xe),c=t,l=Te(c);return i.jsx(ge,s({className:v(l.root,r),ownerState:c,ref:n},p))}),ye=ve;function he(e){return f("MuiTimelineConnector",e)}C("MuiTimelineConnector",["root"]);const Re=["className"],Me=e=>{const{classes:o}=e;return y({root:["root"]},he,o)},$e=x("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),Se=a.forwardRef(function(o,n){const t=T({props:o,name:"MuiTimelineConnector"}),{className:r}=t,p=g(t,Re),c=t,l=Me(c);return i.jsx($e,s({className:v(l.root,r),ownerState:c,ref:n},p))}),_e=Se;function je(e){return f("MuiTimelineDot",e)}C("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const Ne=["className","color","variant"],Oe=e=>{const{color:o,variant:n,classes:t}=e,r={root:["root",n,o!=="inherit"&&`${n}${M(o)}`]};return y(r,je,t)},we=x("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.color!=="inherit"&&`${n.variant}${M(n.color)}`],o[n.variant]]}})(({ownerState:e,theme:o})=>s({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(o.vars||o).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&s({borderColor:"transparent"},e.color!=="inherit"&&s({},e.color==="grey"?{color:(o.vars||o).palette.grey[50],backgroundColor:(o.vars||o).palette.grey[400]}:{color:(o.vars||o).palette[e.color].contrastText,backgroundColor:(o.vars||o).palette[e.color].main})),e.variant==="outlined"&&s({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&s({},e.color==="grey"?{borderColor:(o.vars||o).palette.grey[400]}:{borderColor:(o.vars||o).palette[e.color].main})))),Ae=a.forwardRef(function(o,n){const t=T({props:o,name:"MuiTimelineDot"}),{className:r,color:p="grey",variant:c="filled"}=t,l=g(t,Ne),m=s({},t,{color:p,variant:c}),d=Oe(m);return i.jsx(we,s({className:v(d.root,r),ownerState:m,ref:n},l))}),be=Ae;var $=(e=>(e.Ascending="asc",e.Descending="desc",e))($||{});const _=e=>({time:o},{time:n})=>(e==="asc"?1:-1)*(new Date(o).getTime()-new Date(n).getTime());try{_.displayName="sortByOrder",_.__docgenInfo={description:"",displayName:"sortByOrder",props:{}}}catch{}const De=({sortedHistory:e,order:o,handleChangeOrder:n})=>i.jsxs(F,{sx:{[`& .${A.root}`]:{flex:.2}},children:[i.jsx(E,{onClick:n,children:o===$.Ascending?"Ordenar de manera descendente":"Ordenar de manera ascendente"}),e==null?void 0:e.map(t=>i.jsxs(fe,{children:[i.jsx(ae,{children:i.jsx(a.Suspense,{fallback:i.jsx(S,{}),children:t.time.toLocaleString()})}),i.jsxs(ye,{children:[i.jsx(be,{}),i.jsx(_e,{})]}),i.jsx(te,{children:i.jsx(a.Suspense,{fallback:i.jsx(S,{}),children:i.jsx(B,{avatar:t.avatar,user:t.user,action:t.action,sustain:t.sustain})})})]},t.id))]});try{TimelineComponent.displayName="TimelineComponent",TimelineComponent.__docgenInfo={description:"",displayName:"TimelineComponent",props:{sortedHistory:{defaultValue:null,description:"",name:"sortedHistory",required:!0,type:{name:"History[]"}},order:{defaultValue:null,description:"",name:"order",required:!0,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},handleChangeOrder:{defaultValue:null,description:"",name:"handleChangeOrder",required:!0,type:{name:"() => void"}}}}}catch{}const Ue=new L,to={title:"organisms/TimelineSection",component:De,tags:["autodocs"],decorators:[e=>i.jsx(k,{client:Ue,children:i.jsx(e,{})})]},R={args:{sortedHistory:P(),order:$.Ascending}};var j,N,O;R.parameters={...R.parameters,docs:{...(j=R.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sortedHistory: createHistory(),
    order: Order.Ascending
  }
}`,...(O=(N=R.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const no=["Primary"];export{R as Primary,no as __namedExportsOrder,to as default};
