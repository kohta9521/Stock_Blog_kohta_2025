import ListBlockItem from "@/components/atoms/ListBlockItem";
import ListItem from "@/components/atoms/ListItem";
import TopBlogCard from "@/components/molecules/TopBlogCard";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header>
        <ListItem id="about" text="ABOUT" href="/about" />
        <ListItem id="blogList" text="BLOG LIST" href="/bloglist" />
        <ListItem id="profile" text="PROFILE" href="/profile" />
        <ListItem id="news" text="NEWS" href="/news" />
        <ListBlockItem id="contact" text="CONTACT" href="/contact" />
      </Header>
      <Hero>
        <TopBlogCard
          id="高配当株"
          href="/blog/1"
          img="/images/sampleBlogImage.png"
          title="高配当株投資とインデックス投資はどちらがよいのか"
          desc="高配当株投資は、安定した収入を得たい投資家にとって魅力的に映ります。そのため、昔から人気のある投資です。さて、その高配当株投資にはどのような特徴があるのでしょうか。"
          publishDate="2021-9-14"
          updateDate="2021-9-18"
          tag={["備忘録", "高配当"]}
        />
      </Hero>
    </div>
  );
}
