import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Architecture from "@/components/Architecture";
import UseCases from "@/components/UseCases";
import BuildLog from "@/components/BuildLog";
import Vision from "@/components/Vision";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0B0F14" }}>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Architecture />
      <UseCases />
      <BuildLog />
      <Vision />
      <Waitlist />
      <Footer />
    </main>
  );
}
