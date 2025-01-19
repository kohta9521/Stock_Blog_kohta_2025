import React from "react";

// icons
import { MdLocalPhone } from "react-icons/md";

// components
import Logo from "../atoms/Logo";
import HeaderList from "../atoms/HeaderList";
import HeaderBoxList from "../atoms/HeaderBoxList";
import SearchBtn from "../molecules/SearchBtn";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <div className="w-full h-16 py-3.5 md:h-20 md:py-5">
      <div className="flex justify-between w-11/12 h-14 mx-auto md:max-w-screen-2xl">
        <Logo id="home-header" link="/" size="large" color="primary" />
        <div className="hidden md:flex md:justify-between md:h-10">
          <HeaderList
            id="home-header-about"
            link="/about"
            text="About"
            size="medium"
          />
          <HeaderList
            id="home-header-articles"
            link="/articles"
            text="Articles"
            size="medium"
          />
          <HeaderList
            id="home-header-portfolio"
            link="https://www.kohta-engineer.com/"
            text="Portfolio Site"
            size="medium"
          />
          <SearchBtn id="home-header-search" />
          <HeaderBoxList
            id="home-header-contact"
            link="/contact"
            icon={<MdLocalPhone color="white" size={20} />}
            text="Contact"
            size="medium"
          />
        </div>
        {/* スマホ版のハンバーガーメニュー */}
        <div className="block md:hidden">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Header;
