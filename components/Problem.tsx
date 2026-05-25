"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
        <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: "Machines operate in isolation",
    body: "Each system perceives and acts alone. No awareness of neighboring agents, no shared state.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="12" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="3" y="12" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="12" y="12" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="8" y1="5.5" x2="12" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4" />
        <line x1="5.5" y1="8" x2="5.5" y2="12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
    title: "No shared intelligence across systems",
    body: "Data stays siloed per device. Insights can't propagate across fleets or physical boundaries.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 10 C7 8 13 8 13 10 L13 14 L7 14 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M5 17 L10 14 L15 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
    title: "Humans still coordinate everything",
    body: "Every edge case, every task reassignment — it falls back to a human operator. That doesn't scale.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14 L7 10 L11 12 L17 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
        <line x1="17" y1="14" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: "Existing systems don't scale across environments",
    body: "Robotics platforms built for one site fail when deployed at scale across diverse real-world conditions.",
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
    <section ref={ref} className="relative py-32 px-6 section-glow-left">
      <div className="section-divider mb-0" />

      <div className="max-w-6xl mx-auto pt-0">
        <div className="max-w-2xl mb-16 reveal">
          <p
            className="text-xs font-mono text-steel-600 mb-4 tracking-widest uppercase"
            style={{ color: "#38BDF8", letterSpacing: "0.12em" }}
          >
            Problem
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-100 mb-4"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            Physical automation is still fragmented
          </h2>
          <p className="text-slate-500 text-lg" style={{ lineHeight: "1.7" }}>
            The hardware is ready. The intelligence to coordinate it isn&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="problem-card rounded-sm p-6 reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="text-slate-500 mb-4">{p.icon}</div>
              <h3
                className="text-slate-200 font-semibold mb-2 text-sm"
                style={{ letterSpacing: "-0.01em" }}
              >
                {p.title}
              </h3>
              <p className="text-slate-600 text-sm" style={{ lineHeight: "1.6" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div
          className="reveal p-6 rounded-sm flex items-center gap-4"
          style={{
            border: "1px solid rgba(56,189,248,0.15)",
            background: "rgba(56,189,248,0.03)",
          }}
        >
          <div
            className="w-1 self-stretch rounded-full flex-shrink-0"
            style={{ background: "#38BDF8" }}
          />
          <p
            className="text-slate-300 font-medium"
            style={{ letterSpacing: "-0.01em" }}
          >
            We&apos;re building the missing layer:{" "}
            <span style={{ color: "#38BDF8" }}>coordination intelligence.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
