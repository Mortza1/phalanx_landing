"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    num: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" fill="#38BDF8" opacity="0.8" />
        <circle cx="3" cy="4" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="19" cy="4" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="3" cy="18" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="19" cy="18" r="1.5" fill="currentColor" opacity="0.5" />
        <line x1="4.5" y1="5.5" x2="8.5" y2="9.5" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
        <line x1="17.5" y1="5.5" x2="13.5" y2="9.5" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
        <line x1="4.5" y1="16.5" x2="8.5" y2="12.5" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
        <line x1="17.5" y1="16.5" x2="13.5" y2="12.5" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
    title: "Connect sensors, drones, and machines",
    body: "Unify heterogeneous hardware under a single coordination fabric — regardless of manufacturer, protocol, or environment.",
  },
  {
    num: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="8" width="6" height="4" rx="1" stroke="#38BDF8" strokeWidth="1" />
        <rect x="14" y="8" width="6" height="4" rx="1" stroke="#38BDF8" strokeWidth="1" />
        <path d="M8 10 L14 10" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 1.5" />
        <circle cx="11" cy="10" r="1" fill="#2DD4BF" />
        <line x1="11" y1="2" x2="11" y2="7" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
        <line x1="11" y1="15" x2="11" y2="20" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
    title: "Share context across agents in real-time",
    body: "Every agent sees the full operational picture. Decisions are made with global awareness, not local guessing.",
  },
  {
    num: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <rect x="15" y="2" width="5" height="5" rx="0.8" stroke="#38BDF8" strokeWidth="1" />
        <rect x="8.5" y="15" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M4.5 7 L11 12 L17.5 7" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.6" />
        <path d="M11 12 L11 15" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
    title: "Assign tasks dynamically by environment state",
    body: "The system continuously computes optimal task assignments across the fleet based on real-world conditions.",
  },
  {
    num: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3 C6 3 3 7 3 11 C3 15 6 19 11 19 C16 19 19 15 19 11" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" />
        <path d="M19 3 L19 11 L11 11" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="11" r="2.5" fill="#2DD4BF" opacity="0.7" />
      </svg>
    ),
    title: "Continuously adapt without manual control",
    body: "When conditions change, the system reconfigures itself. No human operator required for routine coordination.",
  },
];

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto pt-0">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="reveal">
            <p
              className="text-xs font-mono mb-4 tracking-widest uppercase"
              style={{ color: "#38BDF8", letterSpacing: "0.12em" }}
            >
              Solution
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-100 mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
            >
              A unified intelligence layer for real-world systems
            </h2>
            <p className="text-slate-500" style={{ lineHeight: "1.7" }}>
              We don&apos;t replace your machines. We give them a shared mind.
            </p>

            {/* Abstract node diagram */}
            <div className="mt-10 relative" style={{ height: "160px" }}>
              <svg
                viewBox="0 0 320 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Connection lines */}
                {[
                  [40, 80, 160, 80],
                  [160, 80, 280, 30],
                  [160, 80, 280, 130],
                  [160, 80, 240, 80],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#38BDF8"
                    strokeWidth="0.8"
                    opacity="0.25"
                    strokeDasharray="4 3"
                  />
                ))}
                {/* Center node */}
                <circle cx="160" cy="80" r="14" fill="rgba(56,189,248,0.1)" stroke="#38BDF8" strokeWidth="1" />
                <circle cx="160" cy="80" r="5" fill="#38BDF8" opacity="0.9" />
                {/* Outer nodes */}
                {[
                  [40, 80], [280, 30], [280, 130], [240, 80],
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    cx={cx} cy={cy} r="4"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                ))}
                {/* Pulse ring */}
                <circle cx="160" cy="80" r="22" fill="none" stroke="#38BDF8" strokeWidth="0.5" opacity="0.15" strokeDasharray="6 4" />
              </svg>
            </div>
          </div>

          {/* Right: features */}
          <div className="space-y-0">
            {features.map((f, i) => (
              <div
                key={f.num}
                className="reveal flex gap-5 py-6 group"
                style={{
                  borderBottom: i < features.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="flex-shrink-0 mt-0.5 text-slate-600 group-hover:text-slate-400 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span
                      className="text-xs font-mono"
                      style={{ color: "#334155" }}
                    >
                      {f.num}
                    </span>
                    <h3
                      className="text-slate-200 font-semibold text-sm"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm" style={{ lineHeight: "1.65" }}>
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
