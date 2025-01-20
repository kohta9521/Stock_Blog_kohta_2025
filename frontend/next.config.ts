import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"], // ここに外部画像のホスト名を追加
  },
};

export default nextConfig;
