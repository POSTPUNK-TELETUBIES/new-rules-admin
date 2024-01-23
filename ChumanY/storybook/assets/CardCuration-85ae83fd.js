import{j as r}from"./jsx-runtime-ffb262ed.js";import{M as u,d as x}from"./index-ba62242e.js";import{C}from"./CurationForm-393cd463.js";import{_ as p}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{g as f,b as y,s as h,f as j,_ as g,h as v,j as _}from"./styled-0f466e28.js";import{r as b}from"./index-76fb7be0.js";import{P as M}from"./Paper-3987c687.js";import{B as w}from"./Box-01f144c6.js";import{A as T}from"./Avatar-2e49f73b.js";import{T as P}from"./Typography-a16f3c59.js";import{u as B}from"./index-a1cf9e47.js";import"./iframe-fb86c311.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-e784747a.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./Switch-d01df9d6.js";import"./TextField-2823bbce.js";import"./ButtonBase-e8da2ee5.js";import"./useControlled-2e74c885.js";import"./isMuiElement-bce4c331.js";import"./react-is.production.min-a192e302.js";import"./Menu-56ab304a.js";import"./useTheme-6957705c.js";import"./Modal-e44d1a54.js";import"./ownerWindow-fbe9f185.js";import"./useSlotProps-48a97173.js";import"./createChainedFunction-0bab83cf.js";import"./createSvgIcon-29244f67.js";import"./GlobalStyles-fe12c981.js";import"./Button-aa7107fe.js";import"./extendSxProp-58e483d5.js";function F(t){return f("MuiCard",t)}y("MuiCard",["root"]);const N=["className","raised"],R=t=>{const{classes:o}=t;return _({root:["root"]},F,o)},W=h(M,{name:"MuiCard",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({overflow:"hidden"})),A=b.forwardRef(function(o,s){const e=j({props:o,name:"MuiCard"}),{className:d,raised:n=!1}=e,c=g(e,N),i=p({},e,{raised:n}),l=R(i);return r.jsx(W,p({className:v(l.root,d),elevation:n?8:void 0,ref:s,ownerState:i},c))}),E=A,a=({name:t,avatar:o})=>r.jsxs(E,{sx:{minWidth:300,p:2},children:[r.jsx(w,{sx:{display:"flex",justifyContent:"space-between"},children:r.jsx(T,{src:o,alt:t,sx:{textTransform:"uppercase"}})}),r.jsx(P,{sx:{mt:1},variant:"subtitle1",fontWeight:"bold",children:t}),r.jsx(C,{})]});try{a.displayName="CardCuration",a.__docgenInfo={description:"",displayName:"CardCuration",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!0,type:{name:"string"}}}}}catch{}const U=`import {
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
