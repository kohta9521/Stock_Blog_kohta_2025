"use client";
import React, { useState } from "react";

// next
import Image from "next/image";

// type
import { Blog } from "@/types/blog";

// icons
import { IoClose } from "react-icons/io5";
import PopupArticleCard from "./PopupArticleCard";

// props
export type SearchPopupProps = {
  id: string;
  closePopup: () => void;
};

const SearchPopup = ({ id, closePopup }: SearchPopupProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Blog[]>([]);
  const [hasSearched, setHasSearched] = useState(false); // 検索済みかを追跡

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setHasSearched(true); // 検索フラグを true に設定
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.contents || []);
    } catch (error) {
      console.error("検索中にエラーが発生しました:", error);
      setResults([]); // エラー時も空の結果にする
    }
  };

  return (
    <>
      <div
        key={id}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* 背景（ブラー効果） */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closePopup}
        ></div>

        {/* ポップアップ内容 */}
        <div className="relative z-10 bg-white w-6/12 min-h-96 h-auto p-9 rounded-md shadow-lg">
          <button
            onClick={closePopup}
            className="absolute top-10 right-9 text-gray-500 hover:text-red-600"
          >
            <IoClose size={30} />
          </button>
          <h1 className="text-2xl font-semibold mb-5">記事検索</h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="検索ワード"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full mb-2 py-4 px-4 border-2 rounded-md border-gray-200"
            />
            <button
              className="block w-full mb-5 py-3 px-4 rounded-md text-lg font-semibold transition-all duration-300 bg-red-500 hover:bg-red-400 text-white"
              type="submit"
            >
              検索
            </button>
          </form>
          {/* 検索結果 */}
          <div className="w-full">
            {hasSearched ? (
              results.length > 0 ? (
                results.map((result) => (
                  <PopupArticleCard
                    key={result.id}
                    id={result.id}
                    link={`/articles/${result.id}`}
                    image={result.image.url}
                    category={result.category.name}
                    date={result.date}
                    title={result.title}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  記事が見つかりません。別のキーワードでお試しください。
                </p>
              )
            ) : (
              <div className="text-center">
                <p className="block text-center text-gray-500 mb-8">
                  検索ワードを入力してください。
                </p>
                {/* デフォルト時に画像を表示（必要に応じて有効化） */}
                <Image
                  className="w-56 mx-auto mb-12"
                  src="/images/common/search.svg"
                  width={300}
                  height={500}
                  alt="search"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
