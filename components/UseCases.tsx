"use client";

import { useEffect, useRef } from "react";

const cases = [
  {
    domain: "Warehousing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="12" width="24" height="16" rx="1" stroke="#38BDF8" strokeWidth="1.2" />
        <path d="M4 12 L16 4 L28 12" stroke="#38BDF8" strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="12" y="20" width="8" height="8" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />
        <line x1="16" y1="20" x2="16" y2="28" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
        <circle cx="8" cy="19" r="1.5" fill="#2DD4BF" opacity="0.7" />
        <circle cx="24" cy="19" r="1.5" fill="#2DD4BF" opacity="0.7" />
      </svg>
    ),
    capabilities: [
      "Autonomous inventory tracking",
      "Fleet coordination of mobile robots",
      "Real-time space utilization mapping",
      "Predictive restocking triggers",
    ],
    status: "Priority target environment",
  },
  {
    domain: "Agriculture",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28 L16 14" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 18 C16 18 10 16 8 10 C12 10 16 14 16 14" fill="rgba(56,189,248,0.15)" stroke="#38BDF8" strokeWidth="1" />
        <path d="M16 22 C16 22 22 20 24 14 C20 14 16 18 16 18" fill="rgba(56,189,248,0.1)" stroke="#38BDF8" strokeWidth="1" />
        <circle cx="8" cy="8" r="2" fill="none" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
        <circle cx="24" cy="8" r="2" fill="none" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
        <line x1="5" y1="28" x2="27" y2="28" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    capabilities: [
      "Drone-based field monitoring",
      "Soil & crop health mapping",
      "Dynamic irrigation coordination",
      "Anomaly detection across parcels",
    ],
    status: "Prototype in development",
  },
  {
    domain: "Industrial Monitoring",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="10" height="16" rx="1" stroke="#38BDF8" strokeWidth="1.2" />
        <rect x="18" y="14" width="10" height="10" rx="1" stroke="#38BDF8" strokeWidth="1.2" />
        <path d="M14 14 L18 14" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 1.5" opacity="0.5" />
        <circle cx="9" cy="12" r="1.5" fill="#2DD4BF" opacity="0.7" />
        <path d="M7 18 L9 16 L11 18 L13 15" stroke="#38BDF8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        <circle cx="23" cy="18" r="2" fill="none" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
    capabilities: [
      "Predictive maintenance scheduling",
      "Anomaly detection across machines",
      "Sensor fusion for diagnostics",
      "Coordinated inspection drones",
    ],
    status: "Architecture phase",
  },
];

export default function UseCases() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
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
    <section id="usecases" ref={ref} className="relative py-32 px-6">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs font-mono mb-4 tracking-widest uppercase"
            style={{ color: "#38BDF8", letterSpacing: "0.12em" }}
          >
            Use Cases
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-100 mb-4"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            Initial focus areas
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto" style={{ lineHeight: "1.7" }}>
            We&apos;re starting with environments where coordination failures are costly
            and measurable — where the gap is clear.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <div
              key={c.domain}
              className="usecase-card reveal rounded-sm p-7"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-5">{c.icon}</div>
              <h3
                className="text-slate-200 font-semibold text-lg mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                {c.domain}
              </h3>
              <ul className="space-y-2.5 mb-6">
                {c.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-sm text-slate-500"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      className="flex-shrink-0 w-1 h-1 rounded-full mt-2"
                      style={{ background: "#38BDF8", opacity: 0.6 }}
                    />
                    {cap}
                  </li>
                ))}
              </ul>
              <div
                className="text-xs font-mono pt-4"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                  color: "#334155",
                  letterSpacing: "0.04em",
                }}
              >
                {c.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
