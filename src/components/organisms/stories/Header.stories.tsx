import { Meta, StoryObj } from "@storybook/react";

// components
import Header from "../Header";

const meta: Meta = {
  title: "Components/Organisms/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type HeaderStory = StoryObj<typeof Header>;

export const Default: HeaderStory = {
  render: () => <Header />,
};
