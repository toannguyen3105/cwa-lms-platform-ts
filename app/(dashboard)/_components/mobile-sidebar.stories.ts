import type { StoryObj } from "@storybook/react";
import { Meta } from "@storybook/react";

import MobileSidebar from "./mobile-sidebar";

const meta = {
  title: "Dashboard/_components/MobileSidebar",
  component: MobileSidebar,
  parameters: {},
} satisfies Meta<typeof MobileSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FinalMobileSidebar: Story = {
  args: {},
};
