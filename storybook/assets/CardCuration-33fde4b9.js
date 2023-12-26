import{j as r}from"./jsx-runtime-ffb262ed.js";import{M as u,d as x}from"./index-e2bdb7c5.js";import{C}from"./CurationForm-8d377ebd.js";import{_ as p}from"./extends-15b115a7.js";import{b as f,g as y,s as h,f as j,_ as g,h as v,j as _}from"./styled-2829571e.js";import{r as b}from"./index-76fb7be0.js";import{P as M}from"./Paper-0438b206.js";import{B as w}from"./Box-d0519cd2.js";import{A as T}from"./Avatar-6280b08b.js";import{T as P}from"./Typography-f4e7de3b.js";import{u as B}from"./index-a1cf9e47.js";import"./iframe-3f3bf624.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-8349f581.js";import"./index-13a69483.js";import"./index-356e4a49.js";import"./Switch-d64e2b93.js";import"./TextField-c8ffc429.js";import"./ButtonBase-1c52ff8a.js";import"./useControlled-2e74c885.js";import"./isMuiElement-bce4c331.js";import"./react-is.production.min-a192e302.js";import"./Menu-6acf922c.js";import"./useTheme-9778e19a.js";import"./Modal-57166ffe.js";import"./ownerWindow-fbe9f185.js";import"./useSlotProps-26d1b577.js";import"./createChainedFunction-0bab83cf.js";import"./createSvgIcon-75307310.js";import"./GlobalStyles-79ed327d.js";import"./Button-b240b90e.js";import"./extendSxProp-3312d140.js";function F(t){return f("MuiCard",t)}y("MuiCard",["root"]);const N=["className","raised"],R=t=>{const{classes:o}=t;return _({root:["root"]},F,o)},W=h(M,{name:"MuiCard",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({overflow:"hidden"})),A=b.forwardRef(function(o,s){const e=j({props:o,name:"MuiCard"}),{className:d,raised:n=!1}=e,c=g(e,N),i=p({},e,{raised:n}),l=R(i);return r.jsx(W,p({className:v(l.root,d),elevation:n?8:void 0,ref:s,ownerState:i},c))}),E=A,a=({name:t,avatar:o})=>r.jsxs(E,{sx:{minWidth:300,p:2},children:[r.jsx(w,{sx:{display:"flex",justifyContent:"space-between"},children:r.jsx(T,{src:o,alt:t,sx:{textTransform:"uppercase"}})}),r.jsx(P,{sx:{mt:1},variant:"subtitle1",fontWeight:"bold",children:t}),r.jsx(C,{})]});try{a.displayName="CardCuration",a.__docgenInfo={description:"",displayName:"CardCuration",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!0,type:{name:"string"}}}}}catch{}const U=`import {
  Avatar,
  Box,
  Card,
  Typography,
} from '@mui/material'
import { CurationForm } from './CurationForm'
export interface CardCurationProps {
  name: string
  avatar: string
}

export const CardCuration = ({ name, avatar }: CardCurationProps) => {
  
  return (
    <Card sx={{ minWidth: 300, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Avatar src={avatar} alt={name} sx={{ textTransform: 'uppercase' }} />
      </Box>
      <Typography sx={{ mt: 1 }} variant='subtitle1' fontWeight={'bold'}>
        {name}
      </Typography>
      <CurationForm/>
    </Card>
  )
}

`;function m(t){return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Examples/Card Curation",component:a}),`
`,r.jsx("h2",{children:"Example with card"}),`
`,r.jsx("div",{style:{display:"grid"},children:r.jsx(a,{})}),`
`,r.jsx(x,{code:U,dark:!0})]})}function yr(t={}){const{wrapper:o}=Object.assign({},B(),t.components);return o?r.jsx(o,Object.assign({},t,{children:r.jsx(m,t)})):m()}export{yr as default};
//# sourceMappingURL=CardCuration-33fde4b9.js.map
