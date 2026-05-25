"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Waitlist() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, handleSubmit] = useForm("mykvnpop");

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
    <section id="waitlist" ref={ref} className="relative py-32 px-6">
      <div className="section-divider mb-0" />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative">
        <div className="reveal">
          <p
            className="text-xs font-mono mb-4 tracking-widest uppercase"
            style={{ color: "#38BDF8", letterSpacing: "0.12em" }}
          >
            Early Access
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-100 mb-4"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            Get updates on early access
          </h2>
          <p className="text-slate-500 mb-10" style={{ lineHeight: "1.7" }}>
            We&apos;re working with a small group of early partners and researchers.
            If this aligns with what you&apos;re building, let&apos;s talk.
          </p>

          {state.succeeded ? (
            <div
              className="py-6 px-8 rounded-sm"
              style={{
                border: "1px solid rgba(45,212,191,0.25)",
                background: "rgba(45,212,191,0.05)",
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" stroke="#2DD4BF" strokeWidth="1.2" />
                  <path d="M5 9 L8 12 L13 6" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-teal-400 font-medium">You&apos;re on the list</span>
              </div>
              <p className="text-slate-500 text-sm">
                We&apos;ll reach out when early access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="waitlist-input flex-1 px-4 py-3 rounded-sm text-sm"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary px-6 py-3 rounded-sm text-sm font-semibold flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <circle
                          cx="7"
                          cy="7"
                          r="5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="20 10"
                        />
                      </svg>
                      Sending
                    </span>
                  ) : (
                    "Get Early Access"
                  )}
                </button>
              </div>
              <ValidationError
                field="email"
                errors={state.errors}
                className="text-red-400 text-xs"
              />
            </form>
          )}

          {/* Partnership link */}
          <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <p className="text-slate-600 text-sm">
              For partnerships & research collaboration —{" "}
              <a
                href="mailto:hello@phalanxsystems.com"
                className="transition-colors"
                style={{ color: "#38BDF8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#60A5FA")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#38BDF8")}
              >
                reach out directly
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
