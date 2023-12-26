import{j as r}from"./jsx-runtime-ffb262ed.js";import{M as i,d as s}from"./index-e2bdb7c5.js";import{D as n}from"./DrawerRules.example-18e4a05c.js";import{u as p}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3f3bf624.js";import"../sb-preview/runtime.js";import"./extends-15b115a7.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-8349f581.js";import"./index-13a69483.js";import"./index-356e4a49.js";import"./ButtonChanges-43e905bb.js";import"./createSvgIcon-7d5d1471.js";import"./createSvgIcon-75307310.js";import"./styled-2829571e.js";import"./ownerWindow-fbe9f185.js";import"./ButtonBase-1c52ff8a.js";import"./createChainedFunction-0bab83cf.js";import"./isMuiElement-bce4c331.js";import"./useControlled-2e74c885.js";import"./Box-d0519cd2.js";import"./extendSxProp-3312d140.js";import"./TextField-c8ffc429.js";import"./react-is.production.min-a192e302.js";import"./Menu-6acf922c.js";import"./useTheme-9778e19a.js";import"./Modal-57166ffe.js";import"./useSlotProps-26d1b577.js";import"./Paper-0438b206.js";import"./GlobalStyles-79ed327d.js";import"./Radio-7c4c5de9.js";import"./Typography-f4e7de3b.js";import"./Stack-cf0b63f7.js";import"./Button-b240b90e.js";import"./Tabs-09a73c8b.js";import"./KeyboardArrowRight-379deb7b.js";import"./LinearProgress-b5d39dc9.js";import"./Drawer-98184902.js";const m=`import { Box, Button, Drawer, LinearProgress } from '@mui/material'
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
//# sourceMappingURL=Drawer-02b5a16c.js.map
