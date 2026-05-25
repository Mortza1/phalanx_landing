import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Phalanx Systems — Coordination Infrastructure for Autonomous Machines",
  description:
    "Phalanx Systems builds the intelligence layer that enables fleets of machines, drones, and industrial agents to perceive, decide, and act as a single coordinated system.",
  openGraph: {
    title: "Phalanx Systems",
    description: "The coordination layer for autonomous physical systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phalanx Systems",
    description: "The coordination layer for autonomous physical systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="noise font-sans antialiased">{children}</body>
    </html>
  );
}
