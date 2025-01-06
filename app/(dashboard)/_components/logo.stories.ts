import type { StoryObj } from "@storybook/react";
import { Meta } from "@storybook/react";

import Logo from "./logo";

const meta = {
  title: "Dashboard/_components/Logo",
  component: Logo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FinalLogo: Story = {
  args: {},
};
