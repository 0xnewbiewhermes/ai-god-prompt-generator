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

  if (!prompt) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="relative group">
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl opacity-30 group-hover:opacity-50 blur-sm transition-opacity duration-300" aria-hidden="true" />

        <div className="relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1 sm:ml-2">
                master-prompt.txt
              </span>
            </div>
            <button
              onClick={handleCopy}
              aria-label={copied ? "Prompt berhasil disalin" : "Salin prompt ke clipboard"}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 ${
                copied
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                  : "bg-gray-100 dark:bg-gray-800 active:bg-indigo-100 dark:active:bg-indigo-900/30 text-gray-700 dark:text-gray-300 active:text-indigo-600 dark:active:text-indigo-400"
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="hidden sm:inline">Tersalin!</span>
                  <span className="sm:hidden">OK</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Salin
                </>
              )}
            </button>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-5 overflow-hidden">
            <pre
              tabIndex={0}
              role="region"
              aria-label="Konten prompt yang dihasilkan"
              className="whitespace-pre-wrap break-all sm:break-words font-mono text-xs sm:text-sm leading-relaxed text-gray-800 dark:text-gray-200 max-h-[300px] sm:max-h-[500px] overflow-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
            >
              {prompt}
            </pre>
          </div>

          {/* Footer */}
          <div className="px-3 sm:px-5 py-2 sm:py-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
              <span>{prompt.split("\n").length} baris</span>
              <span>{prompt.length} karakter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
