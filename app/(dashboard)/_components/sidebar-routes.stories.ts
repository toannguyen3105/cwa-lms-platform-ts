import type { StoryObj } from "@storybook/react";
import { Meta } from "@storybook/react";

import SidebarRoutes from "./sidebar-routes";

const meta = {
  title: "Dashboard/_components/SidebarRoutes",
  component: SidebarRoutes,
  parameters: {},
} satisfies Meta<typeof SidebarRoutes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FinalSidebarRoutes: Story = {
  args: {},
};
