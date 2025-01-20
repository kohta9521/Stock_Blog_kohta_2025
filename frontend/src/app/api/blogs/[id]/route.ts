import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";

// 非同期に `id` を取得
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // 非同期で id を取得

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const data = await client.get({
      endpoint: `blogs/${id}`,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
