import{j as r}from"./jsx-runtime-ffb262ed.js";import{M as i,d as s}from"./index-ba62242e.js";import{D as n}from"./DrawerRules.example-57151039.js";import{u as p}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-fb86c311.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-e784747a.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./ButtonChanges-e66f15e2.js";import"./createSvgIcon-0c40b1ec.js";import"./createSvgIcon-29244f67.js";import"./styled-0f466e28.js";import"./ownerWindow-fbe9f185.js";import"./ButtonBase-e8da2ee5.js";import"./createChainedFunction-0bab83cf.js";import"./isMuiElement-bce4c331.js";import"./useControlled-2e74c885.js";import"./Box-01f144c6.js";import"./extendSxProp-58e483d5.js";import"./TextField-2823bbce.js";import"./react-is.production.min-a192e302.js";import"./Menu-56ab304a.js";import"./useTheme-6957705c.js";import"./Modal-e44d1a54.js";import"./useSlotProps-48a97173.js";import"./Paper-3987c687.js";import"./GlobalStyles-fe12c981.js";import"./Radio-a6f670ac.js";import"./Typography-a16f3c59.js";import"./Stack-7c99166d.js";import"./Button-aa7107fe.js";import"./Tabs-76d16a4f.js";import"./KeyboardArrowRight-71af3ed1.js";import"./LinearProgress-1a0b5565.js";import"./Drawer-3a2f83b9.js";const m=`import { Box, Button, Drawer, LinearProgress } from '@mui/material'
import { Suspense, useState } from 'react'
import { DrawerOptions } from './DrawerOptions'

export const DrawerRules = () => {
  const [isDrawerOptions, setIsDrawerOptions] = useState(false)

  const openDrawer = () => {
    setIsDrawerOptions(true)
  }

  const closeDrawer = () => {
    setIsDrawerOptions(false)
  }

  return (
    <>
      <Button onClick={openDrawer} >
        Abrir drawer
      </Button>
      <Drawer
        anchor='right'
        open={isDrawerOptions}
        onClose={closeDrawer}
      >
        <Box sx={{ width: '40rem' }}>
          <Suspense fallback={<LinearProgress />}>
            <DrawerOptions />
          </Suspense>
        </Box>
      </Drawer>
    </>
  )
}

`;function e(t){return r.jsxs(r.Fragment,{children:[r.jsx(i,{title:"Examples/DrawerRules",component:n}),`
`,r.jsx("div",{style:{display:"grid"},children:r.jsx(n,{})}),`
`,r.jsx(s,{code:m,dark:!0})]})}function W(t={}){const{wrapper:o}=Object.assign({},p(),t.components);return o?r.jsx(o,Object.assign({},t,{children:r.jsx(e,t)})):e()}export{W as default};
