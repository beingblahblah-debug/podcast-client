import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Allowed mime types
const ALLOWED_MIME_TYPES: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",
  "image/avif": ".avif"
};

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    // 1. Handle FormData upload (standard file input)
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
        return NextResponse.json(
          { success: false, message: "No file provided in form data" },
          { status: 400 }
        );
      }

      const mimeType = file.type || "image/jpeg";
      const ext = ALLOWED_MIME_TYPES[mimeType] || path.extname(file.name) || ".jpg";
      
      const buffer = Buffer.from(await file.arrayBuffer());
      
      // Clean original base name
      const cleanOriginal = file.name
        ? file.name.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9_-]+/g, "-").slice(0, 30)
        : "image";
      
      const fileName = `${cleanOriginal}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}${ext}`;
      const uploadsDir = path.join(process.cwd(), "public", "uploads");

      try {
        if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
        }
        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, buffer);

        return NextResponse.json({
          success: true,
          url: `/uploads/${fileName}`,
          fileName,
          size: buffer.length,
          mimeType
        });
      } catch (fsError) {
        // Fallback for read-only serverless filesystems: return base64 Data URL
        console.warn("Filesystem write not permitted, falling back to Data URL:", fsError);
        const base64Data = buffer.toString("base64");
        const dataUrl = `data:${mimeType};base64,${base64Data}`;
        return NextResponse.json({
          success: true,
          url: dataUrl,
          fileName,
          size: buffer.length,
          mimeType,
          isDataUrl: true
        });
      }
    }

    // 2. Handle JSON base64 upload
    if (contentType.includes("application/json")) {
      const body = await request.json();
      const { dataUrl, filename = "image.jpg" } = body;

      if (!dataUrl || typeof dataUrl !== "string") {
        return NextResponse.json(
          { success: false, message: "Missing dataUrl string" },
          { status: 400 }
        );
      }

      // Check if dataUrl is base64
      const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        // Already a standard URL
        return NextResponse.json({ success: true, url: dataUrl });
      }

      const mimeType = matches[1];
      const ext = ALLOWED_MIME_TYPES[mimeType] || ".jpg";
      const buffer = Buffer.from(matches[2], "base64");

      const cleanBase = filename.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9_-]+/g, "-").slice(0, 30) || "image";
      const fileName = `${cleanBase}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}${ext}`;
      const uploadsDir = path.join(process.cwd(), "public", "uploads");

      try {
        if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
        }
        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, buffer);

        return NextResponse.json({
          success: true,
          url: `/uploads/${fileName}`,
          fileName,
          size: buffer.length
        });
      } catch (fsError) {
        console.warn("Filesystem write not permitted in JSON upload, retaining Data URL:", fsError);
        return NextResponse.json({
          success: true,
          url: dataUrl,
          fileName,
          isDataUrl: true
        });
      }
    }

    return NextResponse.json(
      { success: false, message: "Unsupported Content-Type" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Upload API error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "File upload failed" },
      { status: 500 }
    );
  }
}
