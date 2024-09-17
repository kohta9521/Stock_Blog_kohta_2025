import ListBlockItem from "@/components/atoms/ListBlockItem";
import ListItem from "@/components/atoms/ListItem";
import Header from "@/components/organisms/Header";
import React from "react";

// icons
import { IoIosMail } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <Header>
        <ListItem id="about" text="ABOUT" href="/about" />
        <ListItem id="blogList" text="BLOG LIST" href="/bloglist" />
        <ListItem id="profile" text="PROFILE" href="/profile" />
        <ListItem id="news" text="NEWS" href="/news" />
        <ListBlockItem
          id="contact"
          text="CONTACT"
          icon={<IoIosMail />}
          href="/contact"
        />
      </Header>
    </div>
  );
}
