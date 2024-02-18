import { Meta, StoryObj } from '@storybook/react'
import { CountView } from '.'

const meta: Meta<typeof CountView> = {
  title: 'views/CountView',
  component: CountView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  },
  render: function Render() {
    return <CountView />
  },
}
