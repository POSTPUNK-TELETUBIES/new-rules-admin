import type { Meta, StoryObj } from '@storybook/react'
import { Box, Paper, Typography } from '@mui/material'
import ToogleTheme from '../../theme/ToogleTheme'
import { ColorModeProvider } from '../../theme/ColorModeProvider'

const meta = {
  title: 'atoms/ToogleTheme',
  component: ToogleTheme,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ColorModeProvider>
        <Box
          sx={{
            px: 3,
            py: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '50rem',
            backgroundColor: 'primary.light',
          }}
        >
          <Typography fontWeight='bold' fontSize={'1.2rem'}>
            Pacifico
          </Typography>
          <Story />
        </Box>
        <Paper
          sx={{
            p: 4,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit.
        </Paper>
      </ColorModeProvider>
    ),
  ],
} satisfies Meta<typeof ToogleTheme>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
