import type { Meta, StoryObj } from '@storybook/react'
import DrawerBase from '../../examples/drawer'
import {
  DrawerContext,
  DrawerProvider,
} from '../../examples/drawer/Drawercontext'
import { useContext } from 'react'
import { Button } from '@mui/material'

const meta = {
  title: 'Layouts/Drawer Rules',
  component: DrawerBase,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    () => {
      return (
        <DrawerProvider>
          <AppExample />
        </DrawerProvider>
      )
    },
  ],
} satisfies Meta<typeof DrawerBase>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
}

const AppExample = () => {
  const { setIsOpenDrawer } = useContext(DrawerContext)

  return (
    <>
      <Button variant='outlined' onClick={() => setIsOpenDrawer(true)}>
        Abrir drawer
      </Button>
      <DrawerBase>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        unde totam incidunt deleniti molestias explicabo? Accusantium reiciendis
        laborum tempora deserunt!
      </DrawerBase>
    </>
  )
}
