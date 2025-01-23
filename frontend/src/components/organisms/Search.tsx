"use client";
import React, { useState } from "react";

// icon
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Search = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="f-full h-auto px-3 py-4 mb-10 rounded-xl border-2 border-red-500">
      <p className="text-base font-semibold mb-2">キーワード検索</p>
      <input
        type="text"
        placeholder="キーワードを入力"
        className="w-full px-3 py-3 mb-3 border-2 border-gray-300 rounded-xl"
      />
      {isModalVisible ? (
        <button
          className="flex items-center mb-3 text-base font-semibold duration transition-all hover:text-red-500"
          onClick={closeModal}
        >
          詳細検索を閉じる
          <IoMdArrowDropup size={30} />
        </button>
      ) : (
        <button
          className="flex items-center mb-3 text-base font-semibold duration transition-all hover:text-red-500"
          onClick={openModal}
        >
          日時・タグ・カテゴリーで検索する
          <IoMdArrowDropdown size={30} />
        </button>
      )}

      {isModalVisible && (
        <div className="w-full">
          <p className="text-base font-semibold mb-2">カテゴリー検索</p>
          <p className="text-base font-semibold mb-2">タグ検索</p>
          <p className="text-base font-semibold mb-2">日付絞り込み</p>
        </div>
      )}

      <button className="w-full bg-red-500 text-white rounded-xl py-3">
        検索する
      </button>
    </div>
  );
};

export default Search;
