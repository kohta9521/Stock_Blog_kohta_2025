import { Meta, StoryObj } from "@storybook/react";

// components
import ArticleCard from "../ArticleCard";

const meta: Meta = {
  title: "Molecules/ArticleCard",
  component: ArticleCard,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "id設定用の文字列型",
    },
    link: {
      control: {
        type: "text",
      },
      description: "リンク先URL",
    },
    title: {
      control: {
        type: "text",
      },
      description: "記事タイトル",
    },
    desc: {
      control: {
        type: "text",
      },
      description: "記事の説明",
    },
  },
};

export default meta;

type ArticleCardStory = StoryObj<typeof ArticleCard>;

export const Default: ArticleCardStory = {
  args: {
    id: "articleCard",
    link: "/",
    title: "記事タイトル",
    desc: "記事の説明",
  },
};
