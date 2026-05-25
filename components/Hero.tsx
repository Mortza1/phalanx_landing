"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0;
    let H = 0;

    const nodes: { x: number; y: number; vx: number; vy: number; r: number; pulse: number }[] = [];
    const NODE_COUNT = 40;
    const MAX_DIST = 160;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.5 + 1,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.015;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pulse = Math.sin(n.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.5 * pulse})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.15), transparent)",
          animation: "scan 12s linear infinite",
          top: 0,
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            border: "1px solid rgba(56,189,248,0.2)",
            background: "rgba(56,189,248,0.05)",
            color: "#60A5FA",
            letterSpacing: "0.06em",
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400"
            style={{ animation: "nodePulse 2s ease-in-out infinite" }}
          />
          Early Stage · Architecture Phase
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-6"
          style={{ lineHeight: "1.05", letterSpacing: "-0.03em" }}
        >
          The coordination layer
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #38BDF8 0%, #2DD4BF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            for autonomous systems
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          style={{ lineHeight: "1.65", letterSpacing: "-0.01em" }}
        >
          Phalanx Systems enables fleets of machines, drones, and industrial
          agents to perceive, decide, and act as a single intelligent system.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#waitlist"
            className="btn-primary px-6 py-3 rounded-sm text-sm font-semibold"
          >
            Join the Waitlist
          </a>
          <a
            href="#architecture"
            className="btn-ghost px-6 py-3 rounded-sm text-sm font-medium"
          >
            View Architecture
          </a>
        </div>

        {/* Stat strip */}
        <div
          className="mt-16 pt-10 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          style={{ borderTop: "1px solid rgba(56,189,248,0.08)" }}
        >
          {[
            { value: "3", label: "Coordination Layers" },
            { value: "∞", label: "Scalable Agents" },
            { value: "0ms", label: "Target Latency" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-bold text-slate-200"
                style={{ letterSpacing: "-0.03em" }}
              >
                {value}
              </div>
              <div className="text-xs text-slate-600 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0F14)",
        }}
      />
    </section>
  );
}
