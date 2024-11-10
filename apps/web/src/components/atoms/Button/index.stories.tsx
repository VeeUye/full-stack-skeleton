import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index.tsx'

// This is the required metadata configuration
const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // Define reusable args
  args: {
    children: 'Button Text',
  },
  // Define which args can be controlled
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
}
