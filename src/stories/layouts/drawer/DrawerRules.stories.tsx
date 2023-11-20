import type { Meta, StoryObj } from '@storybook/react'
import DrawerRules from '../../../components/Drawer'
import { ColorModeProvider } from '../../../theme/ColorModeProvider'
import {
  DrawerContext,
  DrawerProvider,
} from '../../../components/Drawer/Drawercontext'
import { useContext } from 'react'
import { Button } from '@mui/material'

const meta = {
  title: 'Layouts/Drawer Rules',
  component: DrawerRules,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <ColorModeProvider>
          <DrawerProvider>
            <DrawerContainer>
              <Story />
            </DrawerContainer>
          </DrawerProvider>
        </ColorModeProvider>
      )
    },
  ],
} satisfies Meta<typeof DrawerRules>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
}

const DrawerContainer = ({ children }: { children: JSX.Element }) => {
  const { setIsOpenDrawer } = useContext(DrawerContext)
  return (
    <>
      <Button variant='outlined' onClick={() => setIsOpenDrawer(true)}>
        Abrir drawer
      </Button>
      {children}
    </>
  )
}
