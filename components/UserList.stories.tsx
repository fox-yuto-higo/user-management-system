// components/RegisterForm.stories.tsx

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserList from "./UserList";

// TODO: メタデータ
const meta: Meta<typeof UserList> = {
    title: 'Components/UserList',
    component: UserList,
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof UserList>;

// TODO: デフォルトストーリーの設定

export const Default: Story = {
    args: {
      initialUsers: [ // 複数のユーザーを適切にリスト化
          {
            id: 1,
            name: '山田 太郎',
            email: 'taro.yamada@example.com',
            role: '管理者',
            deleted: false,
          },
          {
            id: 2,
            name: '佐藤 健',
            email: 'sato.ken@example.com',
            role: '俳優',
            deleted: false,
          }
        ]
      },
    };