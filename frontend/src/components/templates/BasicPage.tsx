import React from "react";

// next
import Link from "next/link";

// icons
import { IoIosArrowForward } from "react-icons/io";

// components
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

// props
export type BasicPageProps = {
  id: string;
  linkArr: { link: string; text: string }[];
  title: string;
  desc?: string;
  children: React.ReactNode;
};

const BasicPage = ({ id, linkArr, title, desc, children }: BasicPageProps) => {
  return (
    <div key={id} className="w-full h-auto">
      <Header />
      {/* Hero */}
      <div className="w-11/12 mx-auto mt-20  mb-12 sm:mt-5">
        {/* Link Array */}
        <div className="hidden sm:flex sm:items-center sm:gap-3 sm:mb-20">
          <Link href="/">
            <p className="text-red-500">Kohta Stack Blog トップ</p>
          </Link>
          {/* icon */}
          <IoIosArrowForward className="hidden sm:block sm:text-gray-400" />
          {linkArr.map((link) => (
            <Link key={link.link} href={link.link}>
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
        <h1 className="text-center text-xl text-red-500 font-semibold mb-5 sm:text-left sm:text-3xl sm:mb-10">
          {title}
        </h1>
        <span className="block w-9 h-1 bg-red-500 mx-auto mb-7 sm:ml-0"></span>
        <p className="font-medium text-medium text-left sm:text-left">{desc}</p>
      </div>
      {/* Main (children) */}
      <div className="w-11/12 mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default BasicPage;
