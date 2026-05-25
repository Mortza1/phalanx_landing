"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-opacity group-hover:opacity-80"
          >
            <rect width="28" height="28" rx="4" fill="#0F1923" />
            <path
              d="M7 6H16.5C18.985 6 21 8.015 21 10.5C21 12.985 18.985 15 16.5 15H11V22H7V6Z"
              fill="#38BDF8"
            />
            <path
              d="M11 15H16.5C18.985 15 21 17.015 21 19.5V22H17V19.5C17 19.224 16.776 19 16.5 19H11V15Z"
              fill="#2DD4BF"
              opacity="0.7"
            />
          </svg>
          <span className="text-sm font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors">
            Phalanx Systems
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Architecture", href: "#architecture" },
            { label: "Use Cases", href: "#usecases" },
            { label: "Build Log", href: "#buildlog" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="btn-primary text-xs px-4 py-2 rounded-sm"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="#waitlist"
          className="md:hidden btn-primary text-xs px-3 py-2 rounded-sm"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
