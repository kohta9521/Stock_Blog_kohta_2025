import React from "react";

// components
import DefaultFlexLayout from "@/components/templates/DefaultFlexLayout";

export default function Home() {
  return (
    <div>
      <DefaultFlexLayout
        id="blog-page-layout"
        leftChildren={<h1>sidebar</h1>}
        rightChildren={<h1>main</h1>}
      />
    </div>
  );
}
