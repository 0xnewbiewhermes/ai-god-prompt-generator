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
        outputRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        outputRef.current?.focus();
      }, 100);
    }, 300);
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Step 1 */}
      <section className="card p-5 sm:p-7" aria-label="Langkah 1: Pilih AI">
        <StepHeader
          num={1}
          label="Pilih Target AI"
          desc="Pilih model AI yang akan kamu gunakan"
        />
        <TargetSelector selected={selectedAI} onSelect={setSelectedAI} />
      </section>

      {/* Step 2 */}
      <section
        className="card p-5 sm:p-7"
        aria-label="Langkah 2: Deskripsakan kebutuhan"
      >
        <StepHeader
          num={2}
          label="Deskripsakan Kebutuhanmu"
          desc="Jelaskan apa yang ingin kamu buat sedetail mungkin"
        />
        <PromptForm onGenerate={handleGenerate} isLoading={isLoading} />
      </section>

      {/* Step 3 */}
      <div aria-live="polite" aria-atomic="true">
        {(generatedPrompt || isLoading) && (
          <section
            ref={outputRef}
            tabIndex={-1}
            className="outline-none space-y-4"
            aria-label="Langkah 3: Hasil Master Prompt"
          >
            <StepHeader
              num={3}
              label="Master Prompt Siap"
              desc="Copy prompt ini dan gunakan di AI pilihanmu"
            />

            {isLoading ? (
              <div className="card p-8">
                <div
                  className="flex flex-col items-center gap-4"
                  role="status"
                  aria-label="Sedang membuat prompt"
                >
                  <div className="relative w-10 h-10">
                    <div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: "var(--surface-border)" }}
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin" style={{ borderTopColor: "var(--accent)" }} />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
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
    </div>
  );
}

function StepHeader({
  num,
  label,
  desc,
}: {
  num: number;
  label: string;
  desc: string;
}) {
  const colors = ["#c9a84c", "#c9a84c", "#10b981"];
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-bold text-white"
        style={{ background: colors[num - 1] }}
        aria-hidden="true"
      >
        {num}
      </span>
      <div>
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">
          {label}
        </h2>
        <p className="text-xs text-[var(--text-tertiary)]">{desc}</p>
      </div>
    </div>
  );
}
