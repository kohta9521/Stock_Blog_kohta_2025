import { Meta, StoryObj } from "@storybook/react";

// components
import Logo from "../Logo";

const meta: Meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
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
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "ロゴサイズ",
    },
  },
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Default: LogoStory = {
  args: {
    id: "トップページのヘッダーロゴ",
    link: "/",
    size: "medium",
  },
};

export const Small: LogoStory = {
  args: {
    id: "headerLogo",
    link: "/",
    size: "small",
  },
};
export const Medium: LogoStory = {
  args: {
    id: "headerLogo",
    link: "/",
    size: "medium",
  },
};
export const Large: LogoStory = {
  args: {
    id: "headerLogo",
    link: "/",
    size: "large",
  },
};
