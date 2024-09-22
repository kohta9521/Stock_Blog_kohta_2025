import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// components
import SideSecTitle from "../SideSecTitle";

const meta: Meta = {
  title: "Atoms/SideSecTitle",
  component: SideSecTitle,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "id設定用の文字列型",
    },
    text: {
      control: {
        type: "text",
      },
      description: "表示するテキスト",
    },
    link: {
      control: {
        type: "text",
      },
      description: "リンク先URL",
    },
    onClick: {
      action: "clicked",
      description: "クリック時に呼ばれる関数",
    },
    isSelected: {
      control: {
        type: "boolean",
      },
      description: "選択状態",
    },
  },
};

export default meta;

type SideSecTitleStory = StoryObj<typeof SideSecTitle>;

export const Default: SideSecTitleStory = {
  args: {
    id: "sideSecTitle",
    text: "HOME",
    link: "/",
    isSelected: false,
  },
};

// With controlled state using args
export const WithArgsState: SideSecTitleStory = {
  args: {
    id: "1",
    text: "HOME",
    link: "/",
    isSelected: false,
    onClick: (id: string) => {
      // 状態を反転
      WithArgsState.args!.isSelected = !WithArgsState.args!.isSelected;
    },
  },
};
