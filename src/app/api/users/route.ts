import { NextResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const name = params.get("id");
  return NextResponse.json({ message: "User Id: " + name });
}
