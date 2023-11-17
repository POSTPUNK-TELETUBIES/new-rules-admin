import type { Meta, StoryObj } from '@storybook/react'
import { ColorModeProvider } from '../../theme/ColorModeProvider'
import { Box } from '@mui/material'
import Header from '../../components/molecules/Header'
import Logo from '../../components/atoms/Logo'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import ApprovalIcon from '@mui/icons-material/Approval'
import IconButton from '@mui/material/IconButton'
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned'

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
    logo: <Logo />,
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
    logo: <Logo />,
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

export const Tertiary: Story = {
  args: {
    logo: <Logo />,
    sx: { background: 'linear-gradient(90deg, #22CE5E, #404040)' },
    children: (
      <>
        <IconButton>
          <AddAPhotoIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <AddIcCallIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <ApprovalIcon sx={{ color: 'white' }} />
        </IconButton>
      </>
    ),
  },
}

export const Quaternary: Story = {
  args: {
    logo: <Logo />,
    sx: { background: 'crimson' },
    children: (
      <>
        <IconButton>
          <AddAPhotoIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <AddIcCallIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <ApprovalIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <AssignmentReturnedIcon sx={{ color: 'white' }} />
        </IconButton>
      </>
    ),
  },
}
