import { Meta, StoryObj } from "@storybook/react";

// components
import TopBlogCard from "../TopBlogCard";

const meta: Meta = {
  title: "Molecules/TopBlogCard",
  component: TopBlogCard,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "id用の文字列",
    },
    href: {
      control: {
        type: "text",
      },
      description: "リンク先",
    },
    img: {
      control: {
        type: "text",
      },
      description: "画像のURL",
    },
    title: {
      control: {
        type: "text",
      },
      description: "ブログ記事タイトル",
    },
    desc: {
      control: {
        type: "text",
      },
      description: "ブログ記事の概要文章",
    },
    publishDate: {
      control: {
        type: "text",
      },
      description: "ブログの作成日",
    },
    updateDate: {
      control: {
        type: "text",
      },
      description: "ブログの更新日",
    },
    tag: {
      control: {
        type: "text",
      },
      description: "ブログのタグ",
    },
  },
};

export default meta;

type TopBlogCardStory = StoryObj<typeof TopBlogCard>;

export const Default: TopBlogCardStory = {
  args: {
    id: "1",
    href: "/blog/1",
    img: "/images/sampletopimage.png",
    title: "高配当株投資とインデックス投資はどちらがよいのか",
    desc: "高配当株投資は、安定した収入を得たい投資家にとって魅力的に映ります。そのため、昔から人気のある投資です。さて、その高配当株投資にはどのような特徴があるのでしょうか。",
    publishDate: "2021-09-14",
    updateDate: "2021-09-18",
    tag: ["備忘録", "高配当"],
  },
};
