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
        このサイトは、自分が興味を持っていることや、学んだことを発信するために作成しました。
        <br />
        具体的には株式や税金などのことに着目して記事を掲載していく予定です。
      </p>
    </BasicPage>
  );
};

export default About;
