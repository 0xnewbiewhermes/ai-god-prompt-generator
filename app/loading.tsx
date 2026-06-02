export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="bg-mesh" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center gap-5">
        <div className="relative w-10 h-10">
          <div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: "var(--surface-border)" }}
          />
          <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin" style={{ borderTopColor: "var(--accent)" }} />
        </div>
        <p className="text-sm text-[var(--text-tertiary)]">Memuat...</p>
      </div>
    </div>
  );
}
