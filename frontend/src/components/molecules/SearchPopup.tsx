import React from "react";

// icons
import { IoClose } from "react-icons/io5";

// props
export type SearchPopupProps = {
  id: string;
  closePopup: () => void;
};

const SearchPopup = ({ id, closePopup }: SearchPopupProps) => {
  return (
    <>
      <div
        key={id}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* 背景（ブラー効果） */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closePopup} // 背景をクリックしたら閉じる
        ></div>

        {/* ポップアップ内容 */}
        <div className="relative z-10 bg-white w-6/12 min-h-96 p-6 rounded-md shadow-lg">
          <button
            onClick={closePopup}
            className="absolute top-5 right-5 text-gray-500 hover:text-gray-800"
          >
            <IoClose size={30} />
          </button>
          <h1 className="text-2xl font-semibold mb-3">記事検索</h1>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
