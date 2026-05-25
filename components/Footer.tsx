export default function Footer() {
  return (
    <footer className="relative py-10 px-6" style={{ borderTop: "1px solid rgba(56,189,248,0.07)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="4" fill="#0F1923" />
            <path d="M7 6H16.5C18.985 6 21 8.015 21 10.5C21 12.985 18.985 15 16.5 15H11V22H7V6Z" fill="#38BDF8" />
            <path d="M11 15H16.5C18.985 15 21 17.015 21 19.5V22H17V19.5C17 19.224 16.776 19 16.5 19H11V15Z" fill="#2DD4BF" opacity="0.7" />
          </svg>
          <span className="text-sm text-slate-600">Phalanx Systems</span>
          <span className="text-slate-700 text-sm">—</span>
          <span className="text-xs text-slate-700 font-mono">
            Coordination infrastructure for autonomous machines
          </span>
        </div>
        <div className="text-xs font-mono text-slate-700">
          © 2026 Phalanx Systems · Early Stage
        </div>
      </div>
    </footer>
  );
}
