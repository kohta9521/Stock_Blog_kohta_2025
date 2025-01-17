import React from "react";

// icons
import { MdLocalPhone } from "react-icons/md";

// components
import Logo from "../atoms/Logo";
import HeaderList from "../atoms/HeaderList";
import HeaderBoxList from "../atoms/HeaderBoxList";
import SearchBtn from "../molecules/SearchBtn";

const Header = () => {
  return (
    <div className="w-full h-20 py-5">
      <div className="flex justify-between w-11/12 max-w-screen-2xl h-10 mx-auto ">
        <Logo id="home-header" link="/" size="large" color="primary" />
        <div className="flex justify-between h-10">
          <HeaderList
            id="home-header-about"
            link="/about"
            text="About"
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
      </div>
    </div>
  );
};

export default Header;
