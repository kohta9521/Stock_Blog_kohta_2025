import { NextResponse } from "next/server";
import { client } from "@/lib/client";

export async function GET() {
  try {
    const data = await client.get({ endpoint: "categories" });
    return NextResponse.json(data.contents);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
