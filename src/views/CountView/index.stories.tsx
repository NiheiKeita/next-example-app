import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import { CountView } from '.';

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
Default.play = async () => {
  const button = await screen.findByTestId('button');
  expect(button).toBeInTheDocument();
  expect(screen.queryByTestId('countText')?.innerHTML).toBe("0");
  await userEvent.click(button);
  expect(screen.queryByTestId('countText')?.innerHTML).toBe("1");
}
