import type { StoryObj } from "@storybook/react";
import { Meta } from "@storybook/react";

import { Layout } from "lucide-react";
import SidebarItem from "./sidebar-item";

const meta = {
  title: "Dashboard/_components/SidebarItem",
  component: SidebarItem,
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FinalLogo: Story = {
  args: {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
};
