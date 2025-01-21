import React from "react";

// components
import BasicPage from "@/components/templates/BasicPage";
import SubPageTitle from "@/components/atoms/SubPageTItle";

const Contact = () => {
  return (
    <BasicPage
      id="contact"
      linkArr={[{ link: "/contact", text: "お問い合わせ" }]}
      title="お問い合わせ"
      desc="お問い合わせはこちらからお願いいたします。"
    >
      <SubPageTitle id="contact-title-1" title="お問い合わせフォーム" />
      <p className="mb-10 text-base leading-relaxed sm:leading-loose">
        お問い合わせフォームを設置しております。お気軽にお問い合わせください。お問い合わせいただいた内容は担当のものが3営業日以内に返信をいたします。またお問い合わせ時に入力いただいたメールアドレス宛にお問い合わせ完了メールが送信されますのでそちらもご確認お願いいたします。
      </p>
      {/* 後に切り離す */}
      <form
        className="w-full h-auto"
        action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT}
        method="post"
      >
        <label htmlFor="name">
          お名前<span>*</span>
        </label>
        <input id="name" name="name" required />
        <label htmlFor="email">
          メールアドレス<span>*</span>
        </label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="message">
          お問い合わせ内容<span>*</span>
        </label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">送信</button>
      </form>
    </BasicPage>
  );
};

export default Contact;
