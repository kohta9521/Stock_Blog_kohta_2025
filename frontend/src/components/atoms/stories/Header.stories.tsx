import { StoryObj, Meta } from "@storybook/react";

// components
import Logo from "../Logo";

const meta: Meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "id用の文字列",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "サイズ",
    },
  },
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Default: LogoStory = {
  args: {
    id: "logo",
    size: "medium",
  },
};

export const Small: LogoStory = {
  args: {
    id: "logo",
    size: "small",
  },
};

export const Medium: LogoStory = {
  args: {
    id: "logo",
    size: "medium",
  },
};

export const Large: LogoStory = {
  args: {
    id: "logo",
    size: "large",
  },
};
