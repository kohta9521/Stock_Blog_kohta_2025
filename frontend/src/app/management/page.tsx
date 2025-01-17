// 個人情報の取り扱いについて
import React from "react";

// components
import BasicPage from "@/components/templates/BasicPage";
import SubPageTitle from "@/components/atoms/SubPageTItle";

const Management = () => {
  return (
    <BasicPage
      id="management"
      linkArr={[{ link: "/management", text: "個人情報の取り扱いについて" }]}
      title="個人情報の取り扱いについて"
      desc="kohta（以下「弊社」といいます）は、以下のとおり個人情報の取り扱いをいたします。"
    >
      <SubPageTitle id="management-title" title="個人情報の取り扱い" />
      <p>sdojsdfakljsdakljsdfklj</p>
    </BasicPage>
  );
};

export default Management;
