import { Meta, StoryObj } from "@storybook/react";

// components
import ListItem from "../ListItem";

const meta: Meta = {
  title: "Atoms/ListItem",
  component: ListItem,
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

type ListItemStory = StoryObj<typeof ListItem>;

export const Default: ListItemStory = {
  args: {
    id: "about",
    text: "ABOUT",
    href: "/about",
  },
};
