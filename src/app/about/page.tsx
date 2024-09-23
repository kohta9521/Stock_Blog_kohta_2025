"use client";
import React from "react";

// styles
import styles from "./styles/About.module.scss";

// components
import Header from "@/components/organisms/Header";
import ListBlockItem from "@/components/atoms/ListBlockItem";
import DefaultFlexLayout from "@/components/templates/DefaultFlexLayout";
import SideBarSecBox from "@/components/molecules/SideBarSecBox";
import SideSecTitle from "@/components/atoms/SideSecTitle";
import SideBar from "@/components/organisms/SideBar";
import SideSecLink from "@/components/atoms/SideSecLink";
import { Main } from "next/document";
import Hero from "@/components/organisms/Hero";

const About = () => {
  return (
    <>
      <Header>
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
        rightChildren={<h1>sample</h1>}
      />
    </>
  );
};

export default About;
