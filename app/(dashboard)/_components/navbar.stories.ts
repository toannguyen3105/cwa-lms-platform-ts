import type { StoryObj } from "@storybook/react";
import { Meta } from "@storybook/react";

import Navbar from "./navbar";

const meta = {
  title: "Dashboard/_components/Navbar",
  component: Navbar,
  parameters: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FinalNavbar: Story = {
  args: {},
};
