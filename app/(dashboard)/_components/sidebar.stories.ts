import type { StoryObj } from "@storybook/react";
import { Meta } from "@storybook/react";

import Sidebar from "./sidebar";

const meta = {
  title: "Dashboard/_components/Sidebar",
  component: Sidebar,
  parameters: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FinalSidebar: Story = {
  args: {},
};
