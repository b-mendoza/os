/* oxlint-disable max-lines, no-magic-numbers -- Cyber UI demo route intentionally keeps chart/keyframe constants inline during prototyping. */

import { createFileRoute } from "@tanstack/react-router";
import {
  ActivityIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  FileCheckIcon,
  ScanLineIcon,
  ShieldCheckIcon,
  TerminalIcon,
  ZapIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/4-gemini")({
  component: GeminiCyberIndustrialPage,
});

function GeminiCyberIndustrialPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#030305] font-mono text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-100">
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .scanline-overlay {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        .glitch-hover:hover {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        .technical-grid {
          background-size: 50px 50px;
          background-image:
            linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
        }
        .clip-corner-tl {
          clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px);
        }
        .clip-corner-br {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
        }
      `}</style>

      {/* Global Tech Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 flex flex-col justify-between p-4 opacity-40 mix-blend-overlay">
        <div className="flex justify-between">
          <div className="h-4 w-4 border-t-2 border-l-2 border-cyan-500/50" />
          <div className="h-4 w-4 border-t-2 border-r-2 border-cyan-500/50" />
        </div>
        <div className="flex justify-between">
          <div className="h-4 w-4 border-b-2 border-l-2 border-cyan-500/50" />
          <div className="h-4 w-4 border-r-2 border-b-2 border-cyan-500/50" />
        </div>
      </div>
      <div className="scanline-overlay pointer-events-none fixed inset-0 z-40 opacity-20" />
      <div className="technical-grid pointer-events-none fixed inset-0 z-0" />

      {/* Navigation / HUD Header */}
      <header className="fixed top-0 z-40 w-full border-b border-white/5 bg-[#030305]/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center bg-cyan-950 font-bold text-cyan-400">
              <span className="absolute -inset-0.5 border border-cyan-500/30 opacity-50" />
              <span>SG</span>
            </div>
            <div className="text-sm font-bold tracking-widest text-white uppercase">
              Spend<span className="text-cyan-500">Guard</span>
              <span className="ml-2 text-[10px] text-zinc-500">v2.0.4-ESA</span>
            </div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex gap-1">
              <div className="h-1 w-1 bg-cyan-500" />
              <div className="h-1 w-1 bg-cyan-500/50" />
              <div className="h-1 w-1 bg-cyan-500/20" />
            </div>
            <div className="text-xs tracking-widest text-zinc-500 uppercase">
              System Operational
            </div>
          </div>
          <button className="group relative overflow-hidden bg-zinc-900 px-6 py-2 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-zinc-800 hover:text-cyan-400">
            <span className="relative z-10 flex items-center gap-2">
              Access Terminal <ArrowRightIcon className="h-3 w-3" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-cyan-500/10 transition-transform group-hover:translate-x-0" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-cyan-500/50" />
          </button>
        </div>
      </header>

      <main className="relative z-10 pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-950/20 px-3 py-1 text-xs font-bold tracking-wider text-cyan-400 uppercase backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                </span>
                <span>Net_Status: Live // El Salvador Region</span>
              </div>

              <h1 className="mb-8 font-sans text-6xl leading-none font-black tracking-tighter text-white uppercase md:text-8xl">
                Stop
                <br />
                <span className="relative inline-block text-transparent">
                  <span className="absolute top-0 left-0 -ml-[2px] text-red-500 opacity-70 mix-blend-screen">
                    Bleeding
                  </span>
                  <span className="absolute top-0 left-0 ml-[2px] text-cyan-500 opacity-70 mix-blend-screen">
                    Bleeding
                  </span>
                  <span className="bg-linear-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text">
                    Bleeding
                  </span>
                </span>
                <br />
                Cash.
              </h1>

              <div className="mb-10 flex max-w-2xl flex-col gap-2 border-l-2 border-zinc-700 pl-6 text-lg text-zinc-400">
                <p>
                  <span className="text-cyan-500">&gt;&gt;</span> Initializing
                  automated spend intelligence protocol...
                </p>
                <p>
                  <span className="text-cyan-500">&gt;&gt;</span> Loading
                  modules: <span className="text-white">Photo OCR</span>,{" "}
                  <span className="text-white">3-Way Matching</span>,{" "}
                  <span className="text-white">DTE Integration</span>.
                </p>
                <p className="mt-2 text-zinc-500">
                  {"// Optimized for modern CFO workflows."}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="clip-corner-tl group relative bg-cyan-600 px-8 py-4 font-bold tracking-wider text-black uppercase transition-all hover:bg-cyan-500 hover:pr-10">
                  <span className="relative z-10 flex items-center gap-2">
                    Initialize Trial{" "}
                    <ZapIcon className="h-4 w-4 fill-current" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
                <button className="group flex items-center gap-2 border border-zinc-700 bg-black px-8 py-4 font-bold tracking-wider text-white uppercase transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                  <TerminalIcon className="h-4 w-4" />
                  View_Demo_Log
                </button>
              </div>
            </div>

            {/* Industrial Dashboard Preview */}
            <div className="lg:col-span-5 lg:pt-10">
              <div className="relative border border-zinc-800 bg-[#0A0A0C] p-1 shadow-2xl">
                {/* Decorative Connectors */}
                <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-cyan-500" />
                <div className="absolute -top-1 -right-1 h-2 w-2 border-t border-r border-cyan-500" />
                <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-cyan-500" />
                <div className="absolute -right-1 -bottom-1 h-2 w-2 border-r border-b border-cyan-500" />

                <div className="relative overflow-hidden bg-black p-4">
                  <div className="mb-4 flex items-center justify-between border-b border-zinc-800 pb-2">
                    <div className="text-xs font-bold text-zinc-500">
                      SYS_MONITOR // 01
                    </div>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-zinc-800 bg-zinc-900/50 p-3">
                        <div className="mb-1 text-[10px] tracking-wider text-zinc-500 uppercase">
                          Pending Invoices
                        </div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-white">
                            12
                          </div>
                          <ActivityIcon className="h-4 w-4 text-orange-500" />
                        </div>
                        <div className="mt-2 h-1 w-full bg-zinc-800">
                          <div className="h-full w-[40%] bg-orange-500" />
                        </div>
                      </div>
                      <div className="border border-zinc-800 bg-zinc-900/50 p-3">
                        <div className="mb-1 text-[10px] tracking-wider text-zinc-500 uppercase">
                          Match Rate
                        </div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-cyan-400">
                            84%
                          </div>
                          <CheckCircle2Icon className="h-4 w-4 text-cyan-500" />
                        </div>
                        <div className="mt-2 h-1 w-full bg-zinc-800">
                          <div className="h-full w-[84%] bg-cyan-500" />
                        </div>
                      </div>
                    </div>

                    <div className="border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="text-[10px] tracking-wider text-zinc-500 uppercase">
                          Expenditure_Analysis
                        </div>
                        <div className="font-mono text-xs text-cyan-500">
                          $4.2k SAVED
                        </div>
                      </div>
                      <div className="flex h-32 items-end gap-1">
                        {[
                          40, 65, 45, 90, 60, 75, 50, 80, 95, 70, 85, 60, 50,
                          40, 55, 75, 90, 85, 100, 95,
                        ].map((h, i) => (
                          <div
                            key={`${h}-${i}`}
                            className="flex-1 bg-zinc-800 transition-all hover:bg-cyan-500"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Schematics */}
        <section className="border-y border-white/5 bg-[#050507] py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 flex items-center gap-4">
              <div className="h-px w-12 bg-cyan-500" />
              <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-500 uppercase">
                Core_Capabilities
              </h2>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <SchematicCard
                icon={<ScanLineIcon className="h-6 w-6" />}
                title="Photo OCR Engine"
                code="OCR_CONFIDENCE > 99.8%"
                description="High-precision receipt extraction. Identifies merchant data, totals, and line items with sub-pixel accuracy."
                delay={0}
              />
              <SchematicCard
                icon={<ShieldCheckIcon className="h-6 w-6" />}
                title="3-Way Matching"
                code="RECONCILIATION_MODE: AUTO"
                description="Automated cross-referencing of POs, Receipts, and Invoices. Discrepancy detection system active."
                delay={150}
              />
              <SchematicCard
                icon={<FileCheckIcon className="h-6 w-6" />}
                title="DTE Automation"
                code="STATUS: COMPLIANT"
                description="Direct integration with Ministerio de Hacienda. Real-time validation protocol engaged."
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Terminal Quote */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-black p-8 font-mono">
              <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
              <div className="mb-6 flex gap-2 border-b border-zinc-900 pb-4 text-xs text-zinc-600">
                <div className="h-3 w-3 rounded-full bg-zinc-800" />
                <div className="h-3 w-3 rounded-full bg-zinc-800" />
                <div className="h-3 w-3 rounded-full bg-zinc-800" />
                <span className="ml-auto">user_feedback.log</span>
              </div>
              <div className="space-y-4 text-lg text-zinc-300">
                <p>
                  <span className="text-cyan-500">root@techsal:~$</span> cat
                  feedback.txt
                </p>
                <p className="border-l-2 border-zinc-800 pl-4 italic">
                  &ldquo;Finally, a tool that understands how business is done
                  in El Salvador. No more manual data entry. It&apos;s fully
                  automated.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <div className="h-10 w-10 overflow-hidden bg-zinc-800 grayscale">
                    <div className="h-full w-full bg-linear-to-br from-zinc-700 to-zinc-900" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Carlos M.</div>
                    <div className="text-zinc-500">CFO @ TechSal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specs / Comparison */}
        <section className="border-t border-white/5 bg-[#050507] py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 font-sans text-4xl font-bold tracking-tighter text-white uppercase">
                  System <span className="text-cyan-500">Specifications</span>
                </h2>
                <div className="space-y-px bg-zinc-800">
                  <SpecRow label="Compliance" value="Tax Compliant (Local)" />
                  <SpecRow label="Budget Tracking" value="Real-time / Live" />
                  <SpecRow label="Workflows" value="Automated Approval" />
                  <SpecRow label="Encryption" value="AES-256 (Bank Grade)" />
                  <SpecRow
                    label="Interface"
                    value="Responsive / Mobile-First"
                  />
                </div>
                <button className="mt-8 flex items-center gap-2 text-sm font-bold text-cyan-500 hover:text-cyan-400">
                  [ EXPAND_FULL_SPECS ] <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-500/5 blur-2xl" />
                <div className="relative border border-zinc-800 bg-black p-8">
                  <h3 className="mb-6 text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Performance_Benchmark
                  </h3>

                  <div className="mb-8 space-y-6">
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-zinc-400">Manual Process</span>
                        <span className="font-mono text-red-500">24h 00m</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900">
                        <div className="h-full w-full bg-red-900/50" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-bold text-white">
                          Spend Guard
                        </span>
                        <span className="font-mono text-cyan-400">
                          &lt; 0s 050ms
                        </span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900">
                        <div className="h-full w-[2%] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-zinc-900 pt-6">
                    <div>
                      <div className="text-xs text-zinc-500">Error Rate</div>
                      <div className="text-xl font-bold text-red-500/50 line-through">
                        15%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">Optimization</div>
                      <div className="text-xl font-bold text-cyan-400">
                        99.9%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="relative overflow-hidden py-32 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 container mx-auto px-4">
            <h2 className="mb-6 font-sans text-5xl font-bold tracking-tighter text-white uppercase md:text-7xl">
              Execute <span className="text-cyan-500">Control</span>
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
              Join the network of businesses optimizing their spend management
              protocols.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="clip-corner-br bg-white px-10 py-4 font-bold tracking-wider text-black uppercase transition-transform hover:scale-105">
                Initiate Setup
              </button>
              <button className="border border-zinc-700 px-10 py-4 font-bold tracking-wider text-white uppercase transition-colors hover:border-cyan-500 hover:text-cyan-400">
                Contact_Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Technical Footer */}
      <footer className="border-t border-zinc-900 bg-[#020203] py-12 text-xs text-zinc-600">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-cyan-900" />
            <span className="font-bold tracking-widest text-zinc-400 uppercase">
              Spend Guard // SYS.ROOT
            </span>
          </div>
          <div>© 2026 SPEND GUARD INC. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <button className="hover:text-cyan-500">STATUS</button>
            <button className="hover:text-cyan-500">DOCS</button>
            <button className="hover:text-cyan-500">API</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SchematicCard({
  icon,
  title,
  code,
  description,
  delay,
}: Readonly<{
  icon: ReactNode;
  title: string;
  code: string;
  description: string;
  delay: number;
}>) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });
    if (domRef.current != null) {
      observer.observe(domRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`group relative border border-zinc-800 bg-zinc-900/20 p-8 transition-all duration-700 hover:border-cyan-500/50 hover:bg-zinc-900/40 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 p-2 opacity-50 transition-opacity group-hover:opacity-100">
        <div className="h-1 w-1 bg-cyan-500" />
      </div>
      <div className="mb-6 inline-flex border border-zinc-700 bg-black p-3 text-cyan-500 transition-shadow group-hover:text-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        {icon}
      </div>
      <div className="mb-2 font-mono text-[10px] text-cyan-600 uppercase">
        {code}
      </div>
      <h3 className="mb-4 text-xl font-bold tracking-wide text-white uppercase">
        {title}
      </h3>
      <p className="leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}

function SpecRow({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="flex items-center justify-between bg-[#0A0A0C] p-4 transition-colors hover:bg-zinc-900">
      <span className="text-xs tracking-wider text-zinc-500 uppercase">
        {label}
      </span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}
