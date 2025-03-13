// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CustomButton>

export const Primary: Story = {
  args: {
    variantType: "primary",
    children: "Primary Button",
  },
};
export const Secondary: Story = {
  args: {
    variantType: "secondary",
    children: "Secondary Button",
  },
};
export const Danger: Story = {
  args: {
    variantType: "danger",
    children: "Danger Button",
  },
};
export const warning: Story = {
  args: {
    variantType: "warning",
    children: "Warning Button",
  },
};
export const info: Story = {
  args: {
    variantType: "info",
    children: "Info Button",
  },
};
export const success: Story = {
  args: {
    variantType: "info",
    children: "Success Button",
  },
};