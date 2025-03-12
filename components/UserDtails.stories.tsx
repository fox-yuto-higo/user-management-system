import type { Meta, StoryObj } from '@storybook/react';
import UserDitails from "./UserDetails"

const meta: Meta<typeof UserDitails> = {
  title: 'Components/UserDitails',
  component: UserDitails,
};

export default meta;

type Story = StoryObj<typeof UserDitails>;

export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: '山田 太郎',
      email: 'taro.yamada@example.com',
      role: '管理者',
      deleted: false,
    },
  },
};