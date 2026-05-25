"use client";

import { useEffect, useRef } from "react";

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(56,189,248,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="reveal">
          {/* Decorative mark */}
          <svg
            className="mx-auto mb-8"
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
          >
            <path
              d="M2 8 C2 4 6 2 10 4 L20 10 L30 4 C34 2 38 4 38 8 L38 20 C38 26 32 30 26 28 L20 26 L14 28 C8 30 2 26 2 20 Z"
              stroke="#38BDF8"
              strokeWidth="1"
              opacity="0.2"
            />
            <circle cx="20" cy="14" r="3" fill="#38BDF8" opacity="0.3" />
          </svg>

          <p
            className="text-xs font-mono mb-8 tracking-widest uppercase"
            style={{ color: "#38BDF8", letterSpacing: "0.12em" }}
          >
            Vision
          </p>

          <blockquote
            className="text-2xl md:text-3xl font-medium text-slate-300 mb-6"
            style={{
              lineHeight: "1.5",
              letterSpacing: "-0.02em",
            }}
          >
            &ldquo;We believe the next industrial revolution is not more robots,
            but better coordination between them.&rdquo;
          </blockquote>

          <p className="text-slate-500 max-w-2xl mx-auto" style={{ lineHeight: "1.75" }}>
            The ability for physical systems to work together intelligently will
            define the next decade of automation. Not the hardware. Not the raw compute.
            The coordination layer.
          </p>
        </div>
      </div>
    </section>
  );
}
