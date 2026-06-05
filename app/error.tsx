"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      <div className="bg-mesh" aria-hidden="true" />
      <div className="relative z-10 max-w-md w-full card p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-red-500/10 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">
          Terjadi Kesalahan
        </h2>
        <p className="text-sm text-[var(--text-tertiary)] mb-6">
          Maaf, ada yang tidak beres. Silakan coba lagi.
        </p>
        <button onClick={reset} className="btn-primary px-6 py-3 text-sm">
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
