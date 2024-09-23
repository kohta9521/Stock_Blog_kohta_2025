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
import SideBarSecBox from "@/components/molecules/SideBarSecBox";

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
            {/* about */}
            <SideBarSecBox id="about">
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
            </SideBarSecBox>
            {/* sample */}
            <SideBarSecBox id="sample">
              <SideSecTitle
                id="build"
                text="Build & connect backend"
                link="/"
                onClick={() => {}}
                isSelected={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Authentication"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="API (GraphQL)"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="API (REST)"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Strorage"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Functions"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Server-Side Rendering"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Existing resources"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="utilties"
                changePage={false}
              />
            </SideBarSecBox>
            {/* deploy */}
            <SideBarSecBox id="host">
              <SideSecTitle
                id="build"
                text="Deploy & host"
                link="/"
                onClick={() => {}}
                isSelected={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Amplify hosting"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="deployment"
                changePage={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Custom configuration"
                changePage={true}
              />
            </SideBarSecBox>
            {/* sample */}
            <SideBarSecBox id="sample2">
              <SideSecTitle
                id="build"
                text="Git Hub"
                link="/"
                onClick={() => {}}
                isSelected={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Amplify hosting"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="deployment"
                changePage={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Custom configuration"
                changePage={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Custom configuration"
                changePage={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Custom configuration"
                changePage={true}
              />
            </SideBarSecBox>
            {/* sample */}
            <SideBarSecBox id="sample2">
              <SideSecTitle
                id="build"
                text="Git Hub"
                link="/"
                onClick={() => {}}
                isSelected={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Amplify hosting"
                changePage={false}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="deployment"
                changePage={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Custom configuration"
                changePage={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Custom configuration"
                changePage={true}
              />
              <SideSecLink
                id={"aboutpagelink"}
                href="/about"
                text="Custom configuration"
                changePage={true}
              />
            </SideBarSecBox>
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
