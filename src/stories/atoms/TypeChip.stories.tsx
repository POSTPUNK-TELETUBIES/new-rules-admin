import type { Meta, StoryObj } from '@storybook/react'
import TypeChip from '../../components/Chip/TypeChip'
import { RuleType } from '../../types/ruleEnums'

const meta = {
  title: 'atoms/TypeChip',
  component: TypeChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypeChip>

export default meta
type Story = StoryObj<typeof meta>

export const Bug: Story = {
  args: {
    value: RuleType.BUG,
  },
}

export const CODE_SMELL: Story = {
  args: {
    value: RuleType.CODE_SMELL,
  },
}

export const SECURITY_HOTSPOT: Story = {
  args: {
    value: RuleType.SECURITY_HOTSPOT,
  },
}

export const VULNERABILITY: Story = {
  args: {
    value: RuleType.VULNERABILITY,
  },
}
