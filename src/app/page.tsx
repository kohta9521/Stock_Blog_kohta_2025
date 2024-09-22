import React from "react";

// components
import DefaultFlexLayout from "@/components/templates/DefaultFlexLayout";
import Main from "@/components/organisms/Main";

export default function Home() {
  return (
    <div>
      <DefaultFlexLayout
        id="blog-page-layout"
        leftChildren={<h1>sidebar</h1>}
        rightChildren={
          <Main id="top main">
            <h1>this area in main contents</h1>
          </Main>
        }
      />
    </div>
  );
}
