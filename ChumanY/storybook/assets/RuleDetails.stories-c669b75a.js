import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{B as r}from"./Box-01f144c6.js";import{C as u}from"./Chip-87e94d03.js";import{T as t}from"./Typography-a16f3c59.js";import{P as x}from"./Paper-3987c687.js";import"./_commonjsHelpers-de833af9.js";import"./styled-0f466e28.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./extendSxProp-58e483d5.js";import"./createSvgIcon-29244f67.js";import"./ButtonBase-e8da2ee5.js";import"./assertThisInitialized-e784747a.js";const o=({type:i,severity:h,isActive:f,subtitle:g,htmlCode:l})=>{const n=c.useRef(null);return c.useEffect(()=>{var p;const a=(p=n.current)==null?void 0:p.contentDocument;a&&(a.open(),a.write(`
        <html>
          <head>
            <meta charset="UTF-8" />
          </head>
          <body>
            ${l}
          </body>
        </html>
        `),a.close())},[l]),e.jsxs(r,{display:"flex",flexDirection:"column",gap:2,children:[e.jsxs(r,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(r,{display:"flex",gap:1,children:[e.jsx(u,{label:h,variant:"outlined",title:"Severidad de la regla"}),e.jsx(u,{label:i,variant:"outlined",title:"tipo de regla"})]}),e.jsxs(t,{children:["Regla"," ",e.jsx(t,{component:"span",color:"primary",fontWeight:"bold",children:f?"Activa":"Inactiva"})," ","desde:"," ",e.jsx(t,{component:"span",color:"primary",fontWeight:"bold",children:new Date().toLocaleDateString()})]})]}),e.jsxs(r,{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(t,{variant:"subtitle2",sx:{background:"purple",color:"white",fontWeight:"bold",padding:1,borderRadius:2},children:g}),e.jsx(t,{color:"primary",children:"DESCRIPCIÓN DE LA REGLA"}),e.jsx("iframe",{ref:n,title:"Descripción de la regla"})]})]})};try{o.displayName="RuleDetails",o.__docgenInfo={description:"",displayName:"RuleDetails",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},severity:{defaultValue:null,description:"",name:"severity",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},htmlCode:{defaultValue:null,description:"",name:"htmlCode",required:!0,type:{name:"string"}}}}}catch{}const L={title:"molecules/RuleDetails",component:o,parameters:{layout:"centered"},tags:["autodocs"],decorators:[i=>e.jsx(x,{sx:{width:600,minHeight:600},children:e.jsx(r,{p:3,children:e.jsx(i,{})})})],argTypes:{}},s={args:{type:"BUG",severity:"MAJOR",isActive:!0,subtitle:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum alias illum culpa sunt aliquid id, optio rem ab sint at!",htmlCode:'<h1 style="color: red">jaen 🎉</h1><input type="search"><button>Buscar</button>'}};var d,m,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'BUG',
    severity: 'MAJOR',
    isActive: true,
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum alias illum culpa sunt aliquid id, optio rem ab sint at!',
    htmlCode: \`<h1 style="color: red">jaen 🎉</h1><input type="search"><button>Buscar</button>\`
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const P=["Primary"];export{s as Primary,P as __namedExportsOrder,L as default};
