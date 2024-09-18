import { Meta, StoryObj } from "@storybook/react";

// components
import ListBlockItem from "../ListBlockItem";

const meta: Meta = {
  title: "Atoms/ListBlockItem",
  component: ListBlockItem,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "id用の文字列",
    },
    text: {
      control: {
        type: "text",
      },
      description: "表示するテキスト",
    },
    href: {
      control: {
        type: "text",
      },
      description: "リンク先",
    },
  },
};

export default meta;

type ListBlockItemStory = StoryObj<typeof ListBlockItem>;

export const Default: ListBlockItemStory = {
  args: {
    id: "contact",
    text: "CONTACT",
    href: "/contact",
  },
};
