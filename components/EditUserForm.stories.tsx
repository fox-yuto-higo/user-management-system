import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EditUserForm from "./EditUserForm";

// TODO: メタデータ
const meta: Meta<typeof EditUserForm> = {
    title: 'Components/EditUserForm',
    component: EditUserForm,
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof EditUserForm>;

// TODO: デフォルトストーリーの設定

export const Default: Story = {
  args: {
   userId:1
  },
};