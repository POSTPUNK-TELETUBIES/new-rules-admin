import{g as x,b as y,k as b,s as R,c as _,e as u,f as S,_ as $,h as U,j}from"./styled-0f466e28.js";import{_ as n}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{r as M}from"./index-76fb7be0.js";import{j as A}from"./jsx-runtime-ffb262ed.js";import{g as X,t as N}from"./cssUtils-d0106cb4.js";function B(a){return x("MuiSkeleton",a)}y("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const E=["animation","className","component","height","style","variant","width"];let r=a=>a,p,m,g,f;const K=a=>{const{classes:t,variant:e,animation:i,hasChildren:o,width:l,height:s}=a;return j({root:["root",e,i,o&&"withChildren",o&&!l&&"fitContent",o&&!s&&"heightAuto"]},B,t)},P=b(p||(p=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),T=b(m||(m=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),W=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.root,t[e.variant],e.animation!==!1&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})(({theme:a,ownerState:t})=>{const e=X(a.shape.borderRadius)||"px",i=N(a.shape.borderRadius);return n({display:"block",backgroundColor:a.vars?a.vars.palette.Skeleton.bg:_(a.palette.text.primary,a.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:a})=>a.animation==="pulse"&&u(g||(g=r`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),P),({ownerState:a,theme:t})=>a.animation==="wave"&&u(f||(f=r`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),T,(t.vars||t).palette.action.hover)),F=M.forwardRef(function(t,e){const i=S({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:l,component:s="span",height:h,style:v,variant:k="text",width:C}=i,d=$(i,E),c=n({},i,{animation:o,component:s,variant:k,hasChildren:!!d.children}),w=K(c);return A.jsx(W,n({as:s,ref:e,className:U(w.root,l),ownerState:c},d,{style:n({width:C,height:h},v)}))}),D=F;export{D as S};
