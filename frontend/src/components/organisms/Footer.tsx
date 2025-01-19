import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// components
import Logo from "../atoms/Logo";
import FooterBottomItem from "../atoms/FooterBottomItem";

// data
import { snsData } from "@/data/snsData";
import FooterList from "../atoms/FooterListI";

const Footer = () => {
  return (
    <div className="w-full py-3n ">
      <div className="w-11/12 mx-auto pt-20 sm:pt-5">
        <Logo id="footer-logo" link="/" size="large" color="secondary" />
        {/* SNS */}
        <div className="w-full hidden">
          {snsData.map((sns) => (
            <Link
              key={sns.id}
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 mx-2"
            >
              <Image
                className=""
                src={sns.icon}
                width={40}
                height={40}
                alt="sns-icon"
              />
            </Link>
          ))}
        </div>
        {/* main */}
        <div className="w-full block sm:flex sm:justify-between">
          <div className="block mb-4">
            <p className="text-sm">運営者: Kohta</p>
            <p className="text-sm">
              お問い合わせは
              <Link
                className="text-red-400 duration-300 transition-all hover:text-red-600"
                href="/contact"
              >
                Contactページ
              </Link>
              よりお願い致します。
            </p>
          </div>
          <div className="w-auto sm:hidden">
            <FooterList
              id="footer-list-terms-1"
              link="/"
              text="About"
              size="primary"
            />
            <FooterList
              id="footer-list-terms-2"
              link="/"
              text="このサイトについて"
              size="secondary"
            />
            <FooterList
              id="footer-list-terms-3"
              link="/"
              text="サイト解説の経緯"
              size="secondary"
            />
            <FooterList
              id="footer-list-terms-4"
              link="/"
              text="目指していること"
              size="secondary"
            />
            <FooterList
              id="footer-list-terms-5"
              link="/articles"
              text="Articles"
              size="primary"
            />
            <FooterList
              id="footer-list-terms-5"
              link="/"
              text="ブログ記事一覧"
              size="secondary"
            />
            <FooterList
              id="footer-list-terms-5"
              link="/"
              text="ブログ絞り込み"
              size="secondary"
            />
          </div>
        </div>
        {/* bottom link section */}
        <div className="block w-full border-t-2 py-4 border-gray-300 sm:flex sm:items-center">
          <FooterBottomItem
            id="footer-bottom-terms"
            link="/management"
            text="個人情報の取り扱いについて"
          />
          <FooterBottomItem
            id="footer-bottom-terms"
            link="/sitemap"
            text="サイトマップ"
          />
          <FooterBottomItem
            id="footer-bottom-terms"
            link="/about"
            text="このサイトについて"
          />
          <FooterBottomItem
            id="footer-bottom-terms"
            link="/management"
            text="運営者情報"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
