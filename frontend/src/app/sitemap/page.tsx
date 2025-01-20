import React from "react";

// next

// components
import BasicPage from "@/components/templates/BasicPage";
import SubPageTitle from "@/components/atoms/SubPageTItle";

const SiteMap = () => {
  return (
    <BasicPage
      id="management"
      linkArr={[{ link: "/sitemap", text: "サイトマップ" }]}
      title="サイトマップ"
      desc="2025 kohta stock blogのサイトマップです。"
    >
      <SubPageTitle id="sitemap-title-1" title="会社情報" />
    </BasicPage>
  );
};

export default SiteMap;
