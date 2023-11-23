import type { Meta, StoryObj } from '@storybook/react'
import { Box, Paper } from '@mui/material'
import RuleDetails from './RuleDetails'

const meta = {
  title: 'molecules/RuleDetails',
  component: RuleDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Paper sx={{ width: 600, minHeight: 600 }}>
        <Box p={3}>
          <Story />
        </Box>
      </Paper>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof RuleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    severity: 'MAJOR',
    status: 'ACTIVE',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum alias illum culpa sunt aliquid id, optio rem ab sint at!',
    htmlContent:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nisi blanditiis, facilis laborum iure totam minus unde fuga cupiditate repellendus porro voluptatibus molestiae, provident eos et voluptatum molestias id a eius odit quis! Minus illo possimus iure voluptatem odio sunt eligendi qui saepe et delectus, ducimus quia aliquid cumque maxime rem sit! Amet debitis, earum a assumenda quam quae. Quis dicta illo ullam eveniet voluptatibus, veritatis fugiat sit, accusamus eos numquam corporis cupiditate odio iusto possimus nihil voluptas praesentium quidem! Aliquam et iure ex autem soluta aperiam suscipit reprehenderit laborum exercitationem excepturi reiciendis deserunt voluptate modi qui, tempore libero ut, ad dolorum. Explicabo quos ullam culpa voluptates incidunt nobis hic, corporis, eum ratione ipsam dignissimos esse omnis. Doloremque corrupti accusamus provident ratione, iure et pariatur fuga at voluptas? Vel, labore maiores nobis reprehenderit quae sint modi veritatis dignissimos iste quia hic quidem vitae repellendus minima fugiat! Vel aliquid qui rerum quo similique, in, maxime cumque quaerat quas doloremque perferendis a, praesentium vitae illo voluptatum consequatur ab ut accusantium esse possimus optio! Eligendi porro architecto fugiat, et nam cum maiores assumenda voluptatum obcaecati ipsa vitae provident! Quidem officiis sit aut nemo quos culpa, debitis veniam assumenda porro numquam amet consequatur alias!',
  },
}
