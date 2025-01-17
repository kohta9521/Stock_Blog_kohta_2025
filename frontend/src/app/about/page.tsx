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
        弊社の運営するWebサイトでは、お客様からお預かりする個人情報を保護するため、細心の注意を払っております。弊社が提供するサービスをご利用いただく際や弊社へのお問い合わせをされる際に、必要に応じてお客様の個人情報をお知らせいただく場合がございます。弊社はお客様から情報を収集する際は、あらかじめその目的・利用内容をお知らせした上で、適切な範囲で個人情報の収集をいたします。また、お知らせした目的以外に個人情報を利用する際には、改めて目的をお知らせし、お客様のご了解をいただきます。
      </p>
    </BasicPage>
  );
};

export default About;
