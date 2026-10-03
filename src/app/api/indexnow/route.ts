import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { urls } = await request.json();
    const host = "www.harshitadagha.in";
    const key = "e5b88c7374df489c922579df6400ac21";
    const keyLocation = `https://${host}/${key}.txt`;

    const payload = {
      host,
      key,
      keyLocation,
      urlList: Array.isArray(urls) && urls.length > 0 ? urls : [`https://${host}`],
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      status: "success",
      indexNowStatus: response.status,
      submittedUrls: payload.urlList,
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error?.message || "Failed to notify IndexNow" },
      { status: 500 }
    );
  }
}
