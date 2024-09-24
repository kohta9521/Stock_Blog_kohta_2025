import React from "react";

// components
import DefaultFlexLayout from "@/components/templates/DefaultFlexLayout";
import Main from "@/components/organisms/Main";
import SideBar from "@/components/organisms/SideBar";
import SideSecTitle from "@/components/atoms/SideSecTitle";
import SideSecLink from "@/components/atoms/SideSecLink";
import Hero from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import ListBlockItem from "@/components/atoms/ListBlockItem";
import SideBarSecBox from "@/components/molecules/SideBarSecBox";
import TopHero from "@/components/organisms/TopHero";

export default function Home() {
  return (
    <div>
      <Header>
        <ListBlockItem id="contact" text="CONTACT" href="/" />
      </Header>
      <DefaultFlexLayout
        id="blog-page-layout"
        leftChildren={<SideBar id="topSideBard" />}
        rightChildren={
          <Main id="top main">
            <TopHero />
          </Main>
        }
      />
    </div>
  );
}
