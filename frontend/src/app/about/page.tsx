import React from "react";

// components
import BasicPage from "@/components/templates/BasicPage";
import SubPageTitle from "@/components/atoms/SubPageTItle";

const About = () => {
  return (
    <BasicPage
      id="about"
      linkArr={[{ link: "/about", text: "このサイトについて" }]}
      title="このサイトについて"
      desc="このWebサイトはkohta（以下、「弊社」といいます。）が運営しています。"
    >
      <SubPageTitle id="about-title-1" title="このサイトについて" />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        まずはご覧いただきありがとうございます。
      </p>
      <SubPageTitle id="about-title-2" title="このサイトを作った理由" />
      <p className="mb-10 text-base lending-relaxed sm:leading-loose">
        このサイトを作成するに至った理由は2025年のとある目標があります。
        <br />
        <span className="text-red-500">
          その目標とは「投資をしっかりと2025年は始める」です。
        </span>
        <br />
        昨今インターネット上で投資をするといい・資産の分散をするといいといった情報が溢れていますが
      </p>
    </BasicPage>
  );
};

export default About;
