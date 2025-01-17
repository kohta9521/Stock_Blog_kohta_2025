"use client";
import React, { useState, useEffect } from "react";

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

  // 背景スクロール制御
  useEffect(() => {
    if (isPopupVisible) {
      // ポップアップ表示中はスクロール無効化
      document.body.classList.add("overflow-hidden");
    } else {
      // ポップアップ非表示時はスクロール有効化
      document.body.classList.remove("overflow-hidden");
    }

    // クリーンアップ関数でスクロール有効化
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPopupVisible]);

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);
  return (
    <>
      <div
        key={id}
        onClick={openPopup}
        className="flex items-center mr-6 cursor-pointer p-3 bg-red-500 text-white  rounded-2xl"
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
