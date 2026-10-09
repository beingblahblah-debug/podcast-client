"use client";

/**
 * Optimizes an image file on the client using HTML5 Canvas.
 * Resizes down to maxWidth/maxHeight while preserving aspect ratio,
 * and compresses to WebP or JPEG quality.
 */
export async function optimizeImageFile(
  file: File,
  maxWidth = 1600,
  maxHeight = 1600,
  quality = 0.85
): Promise<{ blob: Blob; dataUrl: string; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new (window as any).Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            maxHeight = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          // Fallback if canvas context fails
          resolve({ blob: file, dataUrl: e.target?.result as string, width: img.width, height: img.height });
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        // Prefer webp, fallback to jpeg
        const mimeType = file.type === "image/png" ? "image/png" : "image/webp";
        const dataUrl = canvas.toDataURL(mimeType, quality);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve({ blob, dataUrl, width, height });
            } else {
              resolve({ blob: file, dataUrl, width, height });
            }
          },
          mimeType,
          quality
        );
      };

      img.onerror = () => reject(new Error("Failed to load image for processing"));
      img.src = e.target?.result as string;
    };

    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.readAsDataURL(file);
  });
}

/**
 * Uploads an image file from the user's computer to the server (/api/upload).
 * Falls back seamlessly to optimized base64 Data URL if the server filesystem is read-only.
 */
export async function uploadImageFromComputer(
  file: File
): Promise<{ url: string; fileName: string; size: number }> {
  try {
    // 1. Optimize on client first to keep upload light and blazing fast
    const optimized = await optimizeImageFile(file, 1600, 1600, 0.85);

    // 2. Prepare FormData
    const formData = new FormData();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9_.-]/g, "_");
    formData.append("file", optimized.blob, cleanFileName);

    // 3. Post to /api/upload
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.url) {
        return {
          url: data.url,
          fileName: data.fileName || cleanFileName,
          size: optimized.blob.size,
        };
      }
    }

    // If server upload failed or returned error, use client-optimized Data URL
    return {
      url: optimized.dataUrl,
      fileName: cleanFileName,
      size: optimized.blob.size,
    };
  } catch (error) {
    console.warn("Upload API failed, falling back to local optimized data URL:", error);
    // Ultimate fallback: read file directly
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          url: reader.result as string,
          fileName: file.name,
          size: file.size,
        });
      };
      reader.readAsDataURL(file);
    });
  }
}
