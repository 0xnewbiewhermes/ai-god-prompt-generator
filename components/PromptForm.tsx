"use client";

import { useState, type FormEvent } from "react";

interface PromptFormProps {
  onGenerate: (request: string) => void;
  isLoading?: boolean;
}

const MAX_CHARS = 2000;

export default function PromptForm({
  onGenerate,
  isLoading = false,
}: PromptFormProps) {
  const [request, setRequest] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (request.trim()) {
      onGenerate(request);
    }
  };

  const handleExampleClick = (example: string) => {
    if (request.trim().length > 0) {
      const confirmed = window.confirm(
        "Teks yang sudah kamu ketik akan diganti. Lanjutkan?"
      );
      if (!confirmed) return;
    }
    setRequest(example);
  };

  const examplePrompts = [
    "Email marketing untuk produk skincare",
    "Script YouTube tentang AI tools",
    "Proposal bisnis startup teknologi",
    "Caption Instagram promosi diskon",
  ];

  const isOverLimit = request.length > MAX_CHARS;

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 sm:space-y-4">
      <div className={`relative rounded-xl sm:rounded-2xl transition-all duration-200 ${
        isFocused ? "ring-2 ring-indigo-500/30 shadow-lg shadow-indigo-500/10" : ""
      }`}>
        <label htmlFor="request" className="sr-only">
          Deskripsakan kebutuhanmu
        </label>
        <textarea
          id="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ceritakan kebutuhanmu..."
          rows={4}
          maxLength={MAX_CHARS}
          aria-describedby="char-counter"
          aria-invalid={isOverLimit}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all resize-none text-base leading-relaxed"
        />
        <div
          id="char-counter"
          aria-live="polite"
          className={`absolute bottom-2 sm:bottom-3 right-2 sm:right-3 px-2 py-1 rounded-lg text-xs font-medium ${
            isOverLimit
              ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          }`}
        >
          {request.length}/{MAX_CHARS}
        </div>
      </div>

      {/* Quick suggestions */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2" role="group" aria-label="Contoh prompt">
        <span className="text-xs text-gray-500 dark:text-gray-400 py-1">Contoh:</span>
        {examplePrompts.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => handleExampleClick(example)}
            aria-label={`Gunakan contoh: ${example}`}
            className="px-2.5 sm:px-3 py-1.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 active:bg-indigo-100 dark:active:bg-indigo-900/30 active:text-indigo-600 dark:active:text-indigo-400 transition-colors duration-150 border border-gray-200/60 dark:border-gray-700/60"
          >
            {example}
          </button>
        ))}
      </div>

      <button
        type="submit"
        disabled={!request.trim() || isLoading || isOverLimit}
        aria-busy={isLoading}
        className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 active:from-indigo-700 active:via-purple-700 active:to-pink-700 disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 disabled:shadow-none disabled:cursor-not-allowed overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Membuat Prompt...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Buat Master Prompt
            </>
          )}
        </span>
      </button>
    </form>
  );
}
