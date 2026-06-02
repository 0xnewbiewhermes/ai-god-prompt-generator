import PromptGenerator from "@/components/PromptGenerator";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AI Master Prompt Generator",
  description:
    "Generator Master Prompt gratis untuk ChatGPT, Claude, Gemini, dan semua model AI. Buat prompt level elite dengan Chain of Thought, Expert Persona, dan Quality Gates.",
  url: "https://promptgod.pro",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  author: {
    "@type": "Organization",
    name: "AI Master Prompt Generator",
  },
  keywords: [
    "AI prompt generator",
    "Master Prompt",
    "ChatGPT",
    "Claude",
    "Gemini",
    "prompt engineering",
  ],
};

const features = [
  { label: "Chain of Thought" },
  { label: "Expert Persona" },
  { label: "Quality Gates" },
  { label: "Structured Output" },
];

const aiModels = [
  { name: "ChatGPT", color: "#10a37f" },
  { name: "Claude", color: "#d97757" },
  { name: "Gemini", color: "#4285f4" },
  { name: "Universal", color: "#8b5cf6" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background */}
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      {/* Header */}
      <header className="relative z-10 card-header">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-sm sm:text-base font-bold gradient-text tracking-tight">
                  AI Master Prompt
                </h1>
                <p className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
                  Generator
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full card-surface">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] text-[var(--text-tertiary)]">
                Online
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main
        id="main-content"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16"
      >
        {/* Hero */}
        <section
          className="text-center space-y-5 mb-14 sm:mb-20 anim-fade-up"
          aria-label="Pengenalan"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full card-surface">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-wide uppercase text-[var(--text-tertiary)]">
              Prompt Engineering Tool
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight px-2 leading-[1.15]">
            <span className="text-[var(--text-primary)]">Buat </span>
            <span className="text-[var(--text-primary)]">Master Prompt</span>
            <br />
            <span className="text-[var(--text-secondary)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              dalam Hitungan Detik
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-tertiary)] max-w-lg mx-auto leading-relaxed">
            Generator prompt AI gratis untuk ChatGPT, Claude, Gemini, dan semua
            model AI. Hasilkan output yang lebih detail, spesifik, dan
            actionable.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {features.map((feature, i) => (
              <span
                key={feature.label}
                className="px-3 py-1.5 rounded-lg text-xs text-[var(--text-tertiary)] anim-fade-up"
                style={{
                  background: "var(--surface-bg)",
                  border: "1px solid var(--surface-border)",
                  animationDelay: `${i * 50}ms`,
                }}
              >
                {feature.label}
              </span>
            ))}
          </div>
        </section>

        {/* AI Models */}
        <section
          className="text-center mb-6 anim-fade"
          aria-label="Model AI yang didukung"
          style={{ animationDelay: "150ms" }}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {aiModels.map((model) => (
              <div
                key={model.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg card-surface"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: model.color }}
                  aria-hidden="true"
                />
                <span className="text-xs text-[var(--text-secondary)]">
                  {model.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Generator */}
        <div
          className="anim-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <PromptGenerator />
        </div>

        {/* SEO Content */}
        <section
          className="card p-6 sm:p-8 md:p-10 mt-16 sm:mt-24 anim-fade-up"
          aria-label="Tentang Master Prompt"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-6">
            Apa itu Master Prompt?
          </h2>

          <div className="space-y-6 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <p>
              <strong className="text-[var(--text-primary)]">
                Master Prompt
              </strong>{" "}
              adalah teknik prompt engineering tingkat lanjut yang memaksa AI
              untuk berpikir lebih dalam, lebih terstruktur, dan menghasilkan
              output berkualitas tinggi.
            </p>

            <div className="divider" />

            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3">
                Mengapa Menggunakan Master Prompt?
              </h3>
              <ul className="space-y-2">
                {[
                  {
                    t: "Chain of Thought",
                    d: "AI dipaksa berpikir step-by-step sebelum menjawab",
                  },
                  {
                    t: "Expert Persona",
                    d: "AI berperan sebagai ahli dengan pengalaman 20+ tahun",
                  },
                  {
                    t: "Quality Gates",
                    d: "Checklist kualitas yang harus dipenuhi sebelum output dikirim",
                  },
                  {
                    t: "Structured Output",
                    d: "Format output yang rapi dan mudah dicerna",
                  },
                  {
                    t: "Anti-Generic",
                    d: "Prompt yang menghasilkan jawaban spesifik, bukan template",
                  },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
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
                    <span>
                      <strong className="text-[var(--text-primary)]">
                        {item.t}
                      </strong>{" "}
                      — {item.d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="divider" />

            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3">
                Cara Menggunakan
              </h3>
              <ol className="space-y-2">
                {[
                  "Pilih target AI (ChatGPT, Claude, Gemini, atau Universal)",
                  "Ketik kebutuhan Anda di kolom input",
                  'Klik tombol "Buat Master Prompt"',
                  "Copy prompt yang dihasilkan",
                  "Paste prompt tersebut ke AI yang dipilih",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold shrink-0 mt-0.5"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 mt-16 sm:mt-24"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-muted)]">
                promptgod.pro
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
