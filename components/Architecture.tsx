"use client";

import { useEffect, useRef } from "react";

export default function Architecture() {
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
    <section id="architecture" ref={ref} className="relative py-32 px-6">
      <div className="section-divider mb-0" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs font-mono mb-4 tracking-widest uppercase"
            style={{ color: "#38BDF8", letterSpacing: "0.12em" }}
          >
            System Architecture
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-100 mb-4"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            Three-layer coordination model
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto" style={{ lineHeight: "1.7" }}>
            A strict layered architecture ensures clean separation between sensing,
            reasoning, and acting — at any scale.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Layer 1: Perception */}
          <div
            className="arch-layer reveal rounded-sm p-6 md:p-8"
            style={{ background: "rgba(17,24,32,0.6)", transitionDelay: "0s" }}
          >
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(56,189,248,0.1)",
                      color: "#38BDF8",
                      letterSpacing: "0.08em",
                    }}
                  >
                    LAYER 01
                  </span>
                  <h3
                    className="text-slate-200 font-semibold"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Perception Layer
                  </h3>
                </div>
                <p className="text-slate-500 text-sm mb-4" style={{ lineHeight: "1.65" }}>
                  Raw environmental data ingested from all physical sources, normalized
                  into a unified world model.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Sensors", "Vision Systems", "LiDAR / Radar", "Data Ingestion", "Environment Mapping"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-sm"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "#64748B",
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
              {/* Mini diagram */}
              <div className="flex-shrink-0">
                <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                  {[10, 30, 50, 70].map((x, i) => (
                    <g key={i}>
                      <rect x={x - 6} y="8" width="12" height="12" rx="2" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
                      <line x1={x} y1="20" x2="40" y2="48" stroke="#38BDF8" strokeWidth="0.5" opacity="0.25" strokeDasharray="3 2" />
                    </g>
                  ))}
                  <circle cx="40" cy="52" r="5" fill="rgba(56,189,248,0.15)" stroke="#38BDF8" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Connector: down arrow */}
          <div className="flex items-center justify-center py-2">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <line x1="12" y1="0" x2="12" y2="28" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
              <path d="M6 22 L12 32 L18 22" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
              {/* Animated dot flowing down */}
              <circle cx="12" cy="8" r="2" fill="#38BDF8" opacity="0.6">
                <animate attributeName="cy" values="4;28" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Layer 2: Intelligence (highlighted) */}
          <div
            className="arch-layer highlighted reveal rounded-sm p-6 md:p-8"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(56,189,248,0.18)",
                      color: "#38BDF8",
                      letterSpacing: "0.08em",
                    }}
                  >
                    LAYER 02
                  </span>
                  <h3
                    className="text-slate-100 font-semibold"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Intelligence Layer
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(45,212,191,0.15)",
                      color: "#2DD4BF",
                      border: "1px solid rgba(45,212,191,0.25)",
                    }}
                  >
                    Core
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4" style={{ lineHeight: "1.65" }}>
                  The multi-agent AI coordination engine. Interprets the world model,
                  computes task assignments, resolves conflicts, and dispatches directives.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Multi-Agent Coordination",
                    "Task Graph Engine",
                    "Conflict Resolution",
                    "Dynamic Replanning",
                    "Fleet Orchestration",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-sm"
                      style={{
                        background: "rgba(56,189,248,0.08)",
                        border: "1px solid rgba(56,189,248,0.15)",
                        color: "#60A5FA",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Central node diagram */}
              <div className="flex-shrink-0">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" stroke="#38BDF8" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 3" />
                  <circle cx="40" cy="40" r="18" stroke="#38BDF8" strokeWidth="0.8" opacity="0.2" />
                  <circle cx="40" cy="40" r="8" fill="rgba(56,189,248,0.2)" stroke="#38BDF8" strokeWidth="1" />
                  <circle cx="40" cy="40" r="3" fill="#38BDF8" />
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 40 + 26 * Math.cos(rad);
                    const y = 40 + 26 * Math.sin(rad);
                    return (
                      <g key={i}>
                        <line x1="40" y1="40" x2={x} y2={y} stroke="#38BDF8" strokeWidth="0.5" opacity="0.3" />
                        <circle cx={x} cy={y} r="2.5" fill="none" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Connector: down arrow */}
          <div className="flex items-center justify-center py-2">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <line x1="12" y1="0" x2="12" y2="28" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
              <path d="M6 22 L12 32 L18 22" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
              <circle cx="12" cy="8" r="2" fill="#38BDF8" opacity="0.6">
                <animate attributeName="cy" values="4;28" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Layer 3: Action */}
          <div
            className="arch-layer reveal rounded-sm p-6 md:p-8"
            style={{ background: "rgba(17,24,32,0.6)", transitionDelay: "0.2s" }}
          >
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(56,189,248,0.1)",
                      color: "#38BDF8",
                      letterSpacing: "0.08em",
                    }}
                  >
                    LAYER 03
                  </span>
                  <h3
                    className="text-slate-200 font-semibold"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Action Layer
                  </h3>
                </div>
                <p className="text-slate-500 text-sm mb-4" style={{ lineHeight: "1.65" }}>
                  Physical execution by autonomous agents — coordinated rather than
                  isolated, responsive rather than scripted.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Drones", "Ground Robots", "Industrial Systems", "Actuators", "Edge Devices"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-sm"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "#64748B",
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="flex-shrink-0">
                <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                  <circle cx="40" cy="10" r="5" fill="rgba(56,189,248,0.15)" stroke="#38BDF8" strokeWidth="0.8" />
                  {[10, 30, 50, 70].map((x, i) => (
                    <g key={i}>
                      <line x1="40" y1="15" x2={x} y2="40" stroke="#38BDF8" strokeWidth="0.5" opacity="0.25" strokeDasharray="3 2" />
                      <rect x={x - 6} y="40" width="12" height="12" rx="2" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" fill="none" />
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div
            className="reveal mt-8 flex flex-wrap gap-6 justify-center text-xs text-slate-600 font-mono"
            style={{ transitionDelay: "0.3s" }}
          >
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-8 h-px"
                style={{ background: "rgba(56,189,248,0.3)" }}
              />
              Data flow
            </span>
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "#38BDF8" }}
              />
              Agent node
            </span>
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ border: "1px solid rgba(56,189,248,0.35)" }}
              />
              Coordination layer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
