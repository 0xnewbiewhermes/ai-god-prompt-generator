"use client";

import { useState } from "react";

interface PromptOutputProps {
  prompt: string;
}

export default function PromptOutput({ prompt }: PromptOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = prompt;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin:", err);
    }
  };

  if (!prompt) return null;

  return (
    <div className="w-full anim-slide-up">
      <div className="card overflow-hidden">
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 sm:px-5 py-3"
          style={{ borderBottom: "1px solid var(--card-border)" }}
        >
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
            </div>
            <span className="text-xs font-medium text-[var(--text-tertiary)] ml-1 font-mono">
              master-prompt.txt
            </span>
          </div>
          <button
            onClick={handleCopy}
            aria-label={
              copied ? "Prompt berhasil disalin" : "Salin prompt ke clipboard"
            }
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150"
            style={{
              background: copied
                ? "rgba(34,197,94,0.1)"
                : "var(--surface-bg)",
              color: copied ? "#22c55e" : "var(--text-tertiary)",
              border: `1px solid ${copied ? "rgba(34,197,94,0.2)" : "var(--surface-border)"}`,
            }}
          >
            {copied ? (
              <>
                <CheckIcon />
                <span className="hidden sm:inline">Tersalin</span>
              </>
            ) : (
              <>
                <CopyIcon />
                <span>Salin</span>
              </>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <pre
            tabIndex={0}
            role="region"
            aria-label="Konten prompt yang dihasilkan"
            className="whitespace-pre-wrap break-all sm:break-words font-mono text-xs sm:text-sm leading-relaxed text-[var(--text-primary)] max-h-[300px] sm:max-h-[500px] overflow-auto focus:outline-none rounded-lg p-1"
          >
            {prompt}
          </pre>
        </div>

        {/* Footer */}
        <div
          className="px-4 sm:px-5 py-2.5 flex items-center justify-between text-[11px] text-[var(--text-muted)]"
          style={{ borderTop: "1px solid var(--card-border)" }}
        >
          <span>{prompt.split("\n").length} baris</span>
          <span>{prompt.length} karakter</span>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
