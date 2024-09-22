import React from "react";

// components
import DefaultFlexLayout from "@/components/templates/DefaultFlexLayout";
import Main from "@/components/organisms/Main";
import SideBar from "@/components/organisms/SideBar";
import SideSecTitle from "@/components/atoms/SideSecTitle";
import SideSecLink from "@/components/atoms/SideSecLink";

export default function Home() {
  return (
    <div>
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
            <h1>this area in main contents</h1>
          </Main>
        }
      />
    </div>
  );
}
