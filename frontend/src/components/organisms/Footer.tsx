import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// components
import Logo from "../atoms/Logo";

// data
import { snsData } from "@/data/snsData";

const Footer = () => {
  return (
    <div className="w-full py-3n ">
      <div className="w-11/12 mx-auto pt-20 sm:pt-5">
        <Logo id="footer-logo" link="/" size="large" color="secondary" />
        {/* SNS */}
        <div className="w-full hidden mb-20">
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
        <Link href="/management">
          <p>個人情報の取り扱いについて</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
