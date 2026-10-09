"use client";

import React from "react";
import { CheckCircle2, Quote } from "lucide-react";

interface FormattedPostContentProps {
  content: string;
}

export default function FormattedPostContent({ content }: FormattedPostContentProps) {
  if (!content) return null;

  // Split into blocks by double newlines or multiple linebreaks
  const blocks = content.split(/\n\n+/);

  return (
    <div className="space-y-6 text-base sm:text-lg leading-relaxed text-zinc-300 font-normal">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // 1. Markdown Image: ![alt](url)
        const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (imgMatch) {
          const alt = imgMatch[1] || "Article media";
          const src = imgMatch[2];
          return (
            <figure key={idx} className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl">
              <div className="relative w-full bg-black flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="w-full max-h-[550px] object-contain rounded-2xl"
                  loading="lazy"
                />
              </div>
              {alt && alt !== "Article media" && alt !== "Article Image" && (
                <figcaption className="p-3 text-center text-xs text-zinc-400 font-mono border-t border-white/5">
                  {alt}
                </figcaption>
              )}
            </figure>
          );
        }

        // 2. Heading 1: # Title
        if (trimmed.startsWith("# ")) {
          return (
            <h1 key={idx} className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mt-8 mb-4">
              {trimmed.replace(/^#\s+/, "")}
            </h1>
          );
        }

        // 3. Heading 2: ## Title
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={idx} className="text-xl sm:text-2xl font-serif font-bold text-[#d89ba4] tracking-tight mt-8 mb-3">
              {trimmed.replace(/^##\s+/, "")}
            </h2>
          );
        }

        // 4. Heading 3: ### Title
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-lg sm:text-xl font-serif font-semibold text-zinc-100 mt-6 mb-2">
              {trimmed.replace(/^###\s+/, "")}
            </h3>
          );
        }

        // 5. Blockquote: > Quote
        if (trimmed.startsWith(">")) {
          const quoteText = trimmed.replace(/^>\s*/gm, "");
          return (
            <blockquote key={idx} className="my-6 p-6 rounded-2xl bg-white/[0.03] border-l-4 border-[#d89ba4] italic text-zinc-100 font-serif text-lg sm:text-xl flex gap-3">
              <Quote className="w-6 h-6 text-[#d89ba4] shrink-0 mt-1 opacity-70" />
              <span>{quoteText}</span>
            </blockquote>
          );
        }

        // 6. Bulleted List: lines starting with - or *
        const lines = trimmed.split("\n");
        const isBulletList = lines.every((line) => line.trim().startsWith("- ") || line.trim().startsWith("* "));
        if (isBulletList) {
          return (
            <div key={idx} className="p-6 rounded-2xl bg-[#141418] border border-white/10 space-y-2.5 my-5">
              {lines.map((line, lIdx) => (
                <div key={lIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d89ba4] shrink-0 mt-1" />
                  <span>{parseInlineFormatting(line.trim().replace(/^[-*]\s+/, ""))}</span>
                </div>
              ))}
            </div>
          );
        }

        // 7. Standard Paragraph with inline bolding and line breaks
        return (
          <p key={idx} className="leading-relaxed">
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {parseInlineFormatting(line)}
                {lIdx < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

function parseInlineFormatting(text: string): React.ReactNode {
  // Parse inline markdown images if embedded within a paragraph
  const imgInlineMatch = text.match(/!\[(.*?)\]\((.*?)\)/);
  if (imgInlineMatch) {
    const [full, alt, src] = imgInlineMatch;
    const parts = text.split(full);
    return (
      <>
        {parts[0] && parseBoldAndLinks(parts[0])}
        <span className="block my-6 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt || "Media"} className="w-full max-h-[480px] object-contain rounded-2xl" />
          {alt && <span className="block p-2 text-center text-xs text-zinc-400 font-mono">{alt}</span>}
        </span>
        {parts[1] && parseBoldAndLinks(parts[1])}
      </>
    );
  }

  return parseBoldAndLinks(text);
}

function parseBoldAndLinks(text: string): React.ReactNode {
  // Simple bold parser: **bold**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
