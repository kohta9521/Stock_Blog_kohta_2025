import React from "react";

// components
import DefaultFlexLayout from "@/components/templates/DefaultFlexLayout";
import Main from "@/components/organisms/Main";
import SideBar from "@/components/organisms/SideBar";
import SideSecTitle from "@/components/atoms/SideSecTitle";
import SideSecLink from "@/components/atoms/SideSecLink";
import Hero from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import ListItem from "@/components/atoms/ListItem";
import ListBlockItem from "@/components/atoms/ListBlockItem";

export default function Home() {
  return (
    <div>
      <Header>
        <ListItem id="home" text="HOME" href="/" />
        <ListItem id="about" text="ABOUT" href="/" />
        <ListItem id="blog" text="BLOG" href="/" />
        <ListBlockItem id="contact" text="CONTACT" href="/" />
      </Header>
      <DefaultFlexLayout
        id="blog-page-layout"
        leftChildren={
          <SideBar id="topSideBard">
            <SideSecTitle
              id="top"
              text="TOP"
              link="/"
              onClick={() => {}}
              isSelected={true}
            />
            <SideSecLink
              id={"aboutpagelink"}
              href="/about"
              text="About"
              changePage={false}
            />
            <SideSecLink
              id={"aboutpagelink"}
              href="/about"
              text="Concept"
              changePage={false}
            />
            <SideSecLink
              id={"aboutpagelink"}
              href="/about"
              text="Service"
              changePage={false}
            />
            <SideSecLink
              id={"aboutpagelink"}
              href="/about"
              text="Portfolio Site"
              changePage={true}
            />
          </SideBar>
        }
        rightChildren={
          <Main id="top main">
            <Hero />
          </Main>
        }
      />
    </div>
  );
}
