"use client";
import React, { useState } from "react";

// icons
import { FaSearch } from "react-icons/fa";

// components
import SearchPopup from "./SearchPopup";

// props
export type SearchBtnProps = {
  id: string;
};

const SearchBtn = ({ id }: SearchBtnProps) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);
  return (
    <>
      <div
        key={id}
        onClick={openPopup}
        className="flex items-center mr-6 cursor-pointer p-3 bg-red-500 text-white  rounded-2xl md:hidden sm:hidden"
      >
        <FaSearch color="white" size={17} />
        <p className="font-semibold leading-10 cursor-pointer ml-2 text-white">
          Search
        </p>
      </div>
      {isPopupVisible && (
        <SearchPopup id="home-header-search" closePopup={closePopup} />
      )}
    </>
  );
};

export default SearchBtn;
