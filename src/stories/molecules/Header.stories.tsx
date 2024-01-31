import type { Meta, StoryObj } from '@storybook/react'
import { ColorModeProvider } from '../../theme/ColorModeProvider'
import { Box, Typography } from '@mui/material'
import Header from '../../components/Header/Header'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import IconButton from '@mui/material/IconButton'

const meta = {
  title: 'molecules/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <ColorModeProvider>
        <Box width={720}>
          <Story />
        </Box>
      </ColorModeProvider>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    logo: <Typography variant='h5'>Logo</Typography>,
    children: (
      <IconButton>
        <AddAPhotoIcon sx={{ color: 'white' }} />
      </IconButton>
    ),
    sx: { background: 'linear-gradient(90deg, #0099CC, #EE2C70)' },
  },
}

export const Secondary: Story = {
  args: {
    logo: <Typography variant='h5'>Logo</Typography>,
    sx: { background: 'linear-gradient(90deg, #FF1053, #035E7B)' },
    children: (
      <>
        <IconButton>
          <AddAPhotoIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <AddIcCallIcon sx={{ color: 'white' }} />
        </IconButton>
      </>
    ),
  },
}
