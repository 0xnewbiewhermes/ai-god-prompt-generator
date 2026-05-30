"use client";

import { useState, useRef } from "react";
import TargetSelector from "@/components/TargetSelector";
import PromptForm from "@/components/PromptForm";
import PromptOutput from "@/components/PromptOutput";
import { TargetAI, generatePrompt } from "@/lib/promptTemplates";

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const features = [
  "Rantai Pikiran",
  "Peran Expert",
  "Gerbang Kualitas",
  "Output Terstruktur",
];

const aiModels = [
  { name: "ChatGPT", desc: "OpenAI GPT-4" },
  { name: "Claude", desc: "Anthropic" },
  { name: "Gemini", desc: "Google AI" },
  { name: "Universal", desc: "Semua Model" },
];

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 glass-effect border-b border-gray-200/50 dark:border-gray-800/50 sticky top-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg sm:text-xl font-bold gradient-text">
                AI God Prompt Generator
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Buat God Prompt level elite untuk semua model AI
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12" aria-label="Pengenalan">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
            <span className="text-amber-600 dark:text-amber-400 text-base sm:text-lg" aria-hidden="true">⚡</span>
            <span className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-300">GOD PROMPT MODE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white px-2">
            Buat <span className="gradient-text">God Prompt</span> dalam Hitungan Detik
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Generator prompt AI gratis yang menghasilkan God Prompt level elite untuk ChatGPT, Claude, Gemini, dan semua model AI. Dapatkan output yang lebih detail, spesifik, dan actionable.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 px-2">
            {features.map((feature) => (
              <span key={feature} className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-white/70 dark:bg-gray-800/50 rounded-full text-xs text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50">
                <CheckIcon />
                {feature}
              </span>
            ))}
          </div>
        </section>

        {/* Supported AI Models - SEO friendly */}
        <section className="text-center mb-4" aria-label="Model AI yang didukung">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Mendukung: {aiModels.map((m, i) => (
              <span key={m.name}>
                <strong className="text-gray-700 dark:text-gray-300">{m.name}</strong>
                {i < aiModels.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </section>

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
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
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
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
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
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full uppercase tracking-wider" aria-label="Status: Elite">
                      Elite
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Copy prompt ini dan gunakan di AI pilihanmu untuk hasil maksimal
                  </p>
                </div>
              </div>

              {isLoading ? (
                <div className="bg-white/70 dark:bg-gray-800/50 rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8">
                  <div className="flex flex-col items-center gap-4" role="status" aria-label="Sedang membuat prompt">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-indigo-200 dark:border-indigo-800 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
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

        {/* SEO Content Section */}
        <section className="bg-white/70 dark:bg-gray-800/50 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-6 md:p-8 mt-12" aria-label="Tentang God Prompt">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Apa itu God Prompt?
          </h2>
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              <strong>God Prompt</strong> adalah teknik prompt engineering tingkat lanjut yang memaksa AI untuk berpikir lebih dalam, lebih terstruktur, dan menghasilkan output berkualitas tinggi. Dengan menggunakan God Prompt, Anda bisa mendapatkan respons yang lebih detail, spesifik, dan actionable dari ChatGPT, Claude, Gemini, dan model AI lainnya.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Mengapa Menggunakan God Prompt?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong>Chain of Thought</strong> - AI dipaksa berpikir step-by-step sebelum menjawab</li>
              <li><strong>Expert Persona</strong> - AI berperan sebagai ahli dengan pengalaman 20+ tahun</li>
              <li><strong>Quality Gates</strong> - Checklist kualitas yang harus dipenuhi sebelum output dikirim</li>
              <li><strong>Structured Output</strong> - Format output yang rapi dan mudah dicerna</li>
              <li><strong>Anti-Generic</strong> - Prompt yang menghasilkan jawaban spesifik, bukan template</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Cara Menggunakan AI God Prompt Generator
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Pilih target AI (ChatGPT, Claude, Gemini, atau Universal)</li>
              <li>Ketik kebutuhan Anda di kolom input</li>
              <li>Klik tombol &quot;Buat God Prompt&quot;</li>
              <li>Copy prompt yang dihasilkan</li>
              <li>Paste prompt tersebut ke AI yang dipilih</li>
            </ol>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200/50 dark:border-gray-800/50 mt-12 sm:mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              AI God Prompt Generator
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} &middot; Dibuat dengan ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
