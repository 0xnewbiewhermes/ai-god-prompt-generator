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
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Input */}
      <div className="relative">
        <label htmlFor="request" className="sr-only">
          Deskripsakan kebutuhanmu
        </label>
        <textarea
          id="request"
          name="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ceritakan kebutuhanmu…"
          autoComplete="off"
          spellCheck={false}
          rows={4}
          maxLength={MAX_CHARS}
          aria-describedby="char-counter"
          aria-invalid={isOverLimit}
          className="input-field w-full px-5 py-4 text-base leading-relaxed resize-none"
        />
        <div
          id="char-counter"
          aria-live="polite"
          className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-medium"
          style={{
            background: isOverLimit
              ? "rgba(239,68,68,0.1)"
              : "var(--surface-bg)",
            color: isOverLimit ? "#f87171" : "var(--text-muted)",
          }}
        >
          {request.length}/{MAX_CHARS}
        </div>
      </div>

      {/* Quick suggestions */}
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Contoh prompt"
      >
        <span className="text-xs text-[var(--text-muted)] py-1.5">
          Contoh:
        </span>
        {examplePrompts.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => handleExampleClick(example)}
            aria-label={`Gunakan contoh: ${example}`}
            className="px-3 py-1.5 text-xs rounded-lg transition-all duration-150 hover:text-[var(--text-secondary)] hover:border-[var(--card-border)] active:scale-95"
            style={{
              background: "var(--surface-bg)",
              border: "1px solid var(--surface-border)",
              color: "var(--text-tertiary)",
            }}
          >
            {example}
          </button>
        ))}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!request.trim() || isLoading || isOverLimit}
        aria-busy={isLoading}
        className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2.5"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Membuat Prompt…
          </>
        ) : (
          <>Buat Master Prompt</>
        )}
      </button>
    </form>
  );
}
