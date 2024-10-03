import { Meta, StoryObj } from "@storybook/react";

// components
import HeaderBoxButton from "../HeaderBoxButton";

const meta: Meta = {
  title: "Components/Atoms/HeaderBoxButton",
  component: HeaderBoxButton,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "key設定用の文字列ID",
    },
    link: {
      control: {
        type: "text",
      },
      description: "リンク先URL",
    },
    text: {
      control: {
        type: "text",
      },
      description: "ボタンテキスト",
    },
  },
};

export default meta;

type HeaderBoxButtonStory = StoryObj<typeof HeaderBoxButton>;

export const Default: HeaderBoxButtonStory = {
  args: {
    id: "headerBoxButton",
    link: "/",
    text: "お問い合わせ",
  },
};
