"use client";

import { useEffect, useRef } from "react";

const entries = [
  {
    ts: "2025-11-01",
    status: "done",
    label: "COMPLETE",
    message: "Defined coordination problem space. Identified gap in multi-agent physical systems.",
  },
  {
    ts: "2025-12-14",
    status: "done",
    label: "COMPLETE",
    message: "Drafted three-layer architecture spec. Perception / Intelligence / Action model.",
  },
  {
    ts: "2026-01-08",
    status: "done",
    label: "COMPLETE",
    message: "Mapped initial use case environments: warehousing, agriculture, industrial.",
  },
  {
    ts: "2026-02-20",
    status: "done",
    label: "COMPLETE",
    message: "Coordination layer protocol design v0.1 — agent state sync, task graph primitives.",
  },
  {
    ts: "2026-04-03",
    status: "wip",
    label: "IN PROGRESS",
    message: "Simulation environment setup. Testing multi-agent coordination in synthetic warehouse.",
  },
  {
    ts: "2026-06-00",
    status: "next",
    label: "PLANNED",
    message: "First hardware integration test. Drone + ground robot coordination in closed environment.",
  },
  {
    ts: "2026-Q3",
    status: "next",
    label: "PLANNED",
    message: "Partner with initial pilot customer. Agriculture or warehousing site TBD.",
  },
];

export default function BuildLog() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="buildlog" ref={ref} className="relative py-32 px-6">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <p
              className="text-xs font-mono mb-4 tracking-widest uppercase"
              style={{ color: "#38BDF8", letterSpacing: "0.12em" }}
            >
              Build Log
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-100 mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
            >
              Building in public
            </h2>
            <p className="text-slate-500 mb-8" style={{ lineHeight: "1.7" }}>
              We share our progress openly — not for show, but because transparent
              development builds trust with the people we want to work with.
            </p>
            <div
              className="p-4 rounded-sm font-mono text-xs"
              style={{
                background: "rgba(17,24,32,0.8)",
                border: "1px solid rgba(56,189,248,0.1)",
                color: "#334155",
              }}
            >
              <span style={{ color: "#38BDF8" }}>$</span>{" "}
              <span style={{ color: "#475569" }}>phalanx status --verbose</span>
              <br />
              <span style={{ color: "#2DD4BF" }}>✓</span>{" "}
              <span style={{ color: "#475569" }}>system: architecture_phase</span>
              <br />
              <span style={{ color: "#2DD4BF" }}>✓</span>{" "}
              <span style={{ color: "#475569" }}>sim: initializing</span>
              <br />
              <span style={{ color: "#38BDF8" }}>◎</span>{" "}
              <span style={{ color: "#475569" }}>hardware: pending</span>
              <br />
              <span style={{ color: "#334155" }}>_</span>
              <span className="cursor-blink" style={{ color: "#38BDF8" }}>▋</span>
            </div>
          </div>

          {/* Right: Terminal log */}
          <div
            className="reveal rounded-sm overflow-hidden"
            style={{
              border: "1px solid rgba(56,189,248,0.1)",
              background: "rgba(6,10,15,0.8)",
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid rgba(56,189,248,0.08)" }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#1E2A38" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#1E2A38" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#1E2A38" }}
              />
              <span
                className="ml-auto text-xs font-mono"
                style={{ color: "#253244" }}
              >
                phalanx.log
              </span>
            </div>

            {/* Log entries */}
            <div className="p-5 space-y-1 overflow-y-auto" style={{ maxHeight: "400px" }}>
              {entries.map((entry, i) => (
                <div key={i} className="terminal-line flex items-start gap-0">
                  <span className="timestamp flex-shrink-0">{entry.ts}</span>
                  <span
                    className={`status-label flex-shrink-0 status-${entry.status}`}
                  >
                    [{entry.label}]
                  </span>
                  <span style={{ flex: 1, paddingLeft: "0.5rem" }}>
                    {entry.message}
                    {entry.status === "wip" && (
                      <span className="cursor-blink ml-1" style={{ color: "#38BDF8" }}>
                        ▋
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
