import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "@/components/parts/CustomButton"
import CustomModal from "./CustomModal";
import { Box } from "@mui/material";

const meta: Meta<typeof CustomModal> = {
    title: "Components/Parts/CustomModal",
    component: CustomModal,
    tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CustomModal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const modalOpen = () => {
        setOpen(true);
    }

    return (
      <Box>
        <CustomButton variantType="primary" onClick={modalOpen}>
          モーダルを開く
        </CustomButton>
        <CustomModal
        open={open}
        title="確認"
        content="ユーザーを削除しますか"
        onClose={() => setOpen(false)}
        onConfirm={() => {
            alert("確認ボタンがクリックされました")
            setOpen(false)
        }}
        />
      </Box>
    );
  },
};