import { Meta, StoryObj } from "@storybook/react";

// components
import SideSecLink from "../SideSecLink";

const meta: Meta = {
  title: "Atoms/SideSecLink",
  component: SideSecLink,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "id設定用の文字列型",
    },
    href: {
      control: {
        type: "text",
      },
      description: "リンク先URL",
    },
    text: {
      control: {
        type: "text",
      },
      description: "表示するテキスト",
    },
    changePage: {
      control: {
        type: "boolean",
      },
      description: "ページ遷移するかどうか:trueの場合はアイコンが変更される。",
    },
  },
};

export default meta;

type SideSecLinkStory = StoryObj<typeof SideSecLink>;

export const NotMovePage: SideSecLinkStory = {
  args: {
    id: "sideSecLink",
    href: "/",
    text: "HOME",
    changePage: false,
  },
};

export const MovePage: SideSecLinkStory = {
  args: {
    id: "sideSecLink",
    href: "/",
    text: "HOME",
    changePage: true,
  },
};
