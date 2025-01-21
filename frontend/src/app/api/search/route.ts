import { NextRequest, NextResponse } from "next/server";

// client
import { createClient } from "microcms-js-sdk";

// microCMSクライアントの設定
const client = createClient({
  serviceDomain: "2025kohtastockblog", // microCMSのサービスドメイン
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "", // 環境変数でAPIキーを管理
});

export async function GET(req: NextRequest) {
  // クエリパラメータから "q" を取得
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { message: "クエリパラメータ 'q' は必須です。" },
      { status: 400 }
    );
  }

  try {
    // microCMSのエンドポイントからデータ取得
    const data = await client.get({
      endpoint: "blogs", // microCMSで設定したエンドポイント名
      queries: {
        q: query, // 全文検索
        limit: 10, // 最大取得件数（必要に応じて調整）
      },
    });

    return NextResponse.json(data); // 結果をJSONで返す
  } catch (error) {
    console.error("検索エラー:", error);
    return NextResponse.json(
      { message: "検索中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
