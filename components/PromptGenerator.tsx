"use client";

import { useState, useRef } from "react";
import TargetSelector from "@/components/TargetSelector";
import PromptForm from "@/components/PromptForm";
import PromptOutput from "@/components/PromptOutput";
import { TargetAI, generatePrompt } from "@/lib/promptTemplates";

export default function PromptGenerator() {
  const [selectedAI, setSelectedAI] = useState<TargetAI>("universal");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (request: string) => {
    setIsLoading(true);
    setGeneratedPrompt("");

    setTimeout(() => {
      const prompt = generatePrompt(request, selectedAI);
      setGeneratedPrompt(prompt);
      setIsLoading(false);

      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        outputRef.current?.focus();
      }, 100);
    }, 300);
  };

  return (
    <>
      {/* Step 1: Select Target AI */}
      <section className="bg-white/70 dark:bg-gray-800/50 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-6 md:p-8" aria-label="Langkah 1: Pilih AI">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-500/25" aria-hidden="true">
            1
          </span>
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Pilih Target AI
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Pilih model AI yang akan kamu gunakan
            </p>
          </div>
        </div>
        <TargetSelector selected={selectedAI} onSelect={setSelectedAI} />
      </section>

      {/* Step 2: Input Request */}
      <section className="bg-white/70 dark:bg-gray-800/50 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-6 md:p-8" aria-label="Langkah 2: Deskripsakan kebutuhan">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-500/25" aria-hidden="true">
            2
          </span>
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Deskripsakan Kebutuhanmu
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Jelaskan apa yang ingin kamu buat sedetail mungkin
            </p>
          </div>
        </div>
        <PromptForm onGenerate={handleGenerate} isLoading={isLoading} />
      </section>

      {/* Step 3: Output */}
      <div aria-live="polite" aria-atomic="true">
        {(generatedPrompt || isLoading) && (
          <section
            ref={outputRef}
            tabIndex={-1}
            className="outline-none"
            aria-label="Langkah 3: Hasil God Prompt"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-green-500/25" aria-hidden="true">
                3
              </span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    God Prompt Siap Digunakan
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Copy prompt ini dan gunakan di AI pilihanmu untuk hasil maksimal
                </p>
              </div>
            </div>

            {isLoading ? (
              <div className="bg-white/70 dark:bg-gray-800/50 rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8">
                <div className="flex flex-col items-center gap-4" role="status" aria-label="Sedang membuat prompt">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-indigo-200 dark:border-indigo-800 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sedang membuat prompt yang optimal...
                  </p>
                </div>
              </div>
            ) : (
              <PromptOutput prompt={generatedPrompt} />
            )}
          </section>
        )}
      </div>
    </>
  );
}
