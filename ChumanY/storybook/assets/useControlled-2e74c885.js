import{r as u,a as i}from"./index-76fb7be0.js";let l=0;function m(t){const[e,n]=u.useState(t),a=t||e;return u.useEffect(()=>{e==null&&(l+=1,n(`mui-${l}`))},[e]),a}const o=i["useId".toString()];function S(t){if(o!==void 0){const e=o();return t??e}return m(t)}function p({controlled:t,default:e,name:n,state:a="value"}){const{current:s}=u.useRef(t!==void 0),[c,f]=u.useState(e),r=s?t:c,d=u.useCallback(I=>{s||f(I)},[]);return[r,d]}export{p as a,S as u};
