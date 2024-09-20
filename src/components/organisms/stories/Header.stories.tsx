import { Meta, StoryObj } from "@storybook/react";

// components
import Header from "../Header";
import ListItem from "@/components/atoms/ListItem";
import ListBlockItem from "@/components/atoms/ListBlockItem";

const meta: Meta = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type HeaderStory = StoryObj<typeof Header>;

export const Default: HeaderStory = {
  args: {
    children: (
      <>
        <ListItem id="about" text="ABOUT" href="/about" />
        <ListItem id="blogList" text="BLOG LIST" href="/bloglist" />
        <ListItem id="profile" text="PROFILE" href="/profile" />
        <ListItem id="news" text="NEWS" href="/news" />
        <ListBlockItem id="contact" text="CONTACT" href="/contact" />
      </>
    ),
  },
};
