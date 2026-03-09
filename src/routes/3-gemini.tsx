/* oxlint-disable max-lines, no-magic-numbers -- Experimental landing-page mockup with inline visual constants and a single-file layout. */

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ActivityIcon,
  BarChart3Icon,
  CheckCircle2Icon,
  ChevronRightIcon,
  CpuIcon,
  FileTextIcon,
  GlobeIcon,
  LockIcon,
  ScanLineIcon,
  TerminalIcon,
  ZapIcon,
} from "lucide-react";

export const Route = createFileRoute("/3-gemini")({
  component: GeminiLandingPage,
  head() {
    return {
      meta: [
        {
          title: "SPENDGUARD_SYS | V.3.0",
        },
      ],
    };
  },
});

function GeminiLandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-mono text-neutral-300 selection:bg-[#39ff14] selection:text-black">
      {/* Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Bar - System Status */}
      <div className="fixed top-0 z-50 w-full border-b border-[#333] bg-[#050505]/90 backdrop-blur-md">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-[#39ff14]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39ff14] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#39ff14]"></span>
              </span>
              SYSTEM ONLINE
            </span>
            <span className="hidden text-neutral-600 md:inline">
              {"// LATENCY: 12ms"}
            </span>
            <span className="hidden text-neutral-600 md:inline">
              {"// ENCRYPTION: AES-256"}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-neutral-500">
              BUILD: <span className="text-white">2026.02.18</span>
            </span>
            <span className="text-neutral-500">
              REGION: <span className="text-white">US-EAST</span>
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 z-40 w-full border-b border-[#333] bg-[#050505]/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center border border-[#39ff14] bg-[#39ff14]/10">
              <TerminalIcon className="h-6 w-6 text-[#39ff14]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                SpendGuard
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#39ff14]">
                INTELLIGENCE_UNIT
              </span>
            </div>
          </div>

          <div className="hidden gap-8 md:flex">
            {[
              { name: "MODULES", href: "#features" },
              { name: "PROTOCOL", href: "#workflow" },
              { name: "ACCESS", href: "#pricing" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-2 py-1 text-sm font-bold tracking-widest text-neutral-400 uppercase transition-colors hover:text-[#39ff14]"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#39ff14] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <Link
            to="/"
            className="group relative overflow-hidden border border-[#333] bg-neutral-900 px-6 py-2 text-sm font-bold tracking-wider text-white uppercase transition-all hover:border-[#39ff14] hover:text-[#39ff14]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initialize
              <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-[#39ff14]/10 transition-transform group-hover:translate-x-0" />
          </Link>
        </div>
      </nav>

      <main className="relative pt-32">
        {/* Hero Section */}
        <section className="relative container mx-auto px-6 py-20 lg:py-32">
          {/* Decorative Lines */}
          <div className="absolute top-0 left-6 h-full w-px bg-linear-to-b from-[#333] via-[#333] to-transparent" />
          <div className="absolute top-0 right-6 h-full w-px bg-linear-to-b from-[#333] via-[#333] to-transparent" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center gap-2 border-l-2 border-[#39ff14] bg-[#39ff14]/5 px-4 py-2 text-sm text-[#39ff14]">
                <CpuIcon className="h-4 w-4" />
                <span>AI_CORE ACTIVATED // READY FOR INPUT</span>
              </div>

              <h1 className="mb-6 text-5xl leading-none font-black tracking-tighter text-white uppercase lg:text-7xl">
                FINANCIAL
                <br />
                <span className="bg-[linear-gradient(45deg,#fff,#666)] bg-clip-text text-transparent">
                  OPERATIONS
                </span>
                <br />
                <span className="text-[#39ff14]">AUTOMATED</span>
              </h1>

              <p className="mb-10 max-w-lg border-l border-[#333] pl-6 text-lg leading-relaxed text-neutral-400">
                Execute financial workflows with military precision.
                <br />
                <span className="text-white">Zero error tolerance.</span>
                <br />
                Instant optical character recognition.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="group relative flex items-center gap-3 bg-[#39ff14] px-8 py-4 font-bold tracking-wider text-black uppercase transition-all hover:bg-[#32e612] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                >
                  <ZapIcon className="h-5 w-5 fill-black" />
                  Deploy System
                </Link>
                <button className="group flex items-center gap-3 border border-[#333] bg-transparent px-8 py-4 font-bold tracking-wider text-white uppercase transition-all hover:border-white hover:bg-white/5">
                  <ScanLineIcon className="h-5 w-5" />
                  View Telemetry
                </button>
              </div>
            </div>

            {/* Hero Visual - "The Terminal" */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative border border-[#333] bg-black p-2 shadow-2xl">
                {/* Window Controls */}
                <div className="flex items-center justify-between border-b border-[#333] bg-[#111] px-4 py-2">
                  <div className="text-xs text-neutral-500">
                    TERMINAL_01 // spend_guard.exe
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 bg-[#333]"></div>
                    <div className="h-3 w-3 bg-[#333]"></div>
                    <div className="h-3 w-3 bg-[#39ff14]"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="h-[400px] overflow-hidden p-6 font-mono text-sm leading-relaxed text-neutral-400">
                  <div className="mb-4 text-[#39ff14]">
                    &gt; INITIATING SEQUENCE...
                  </div>
                  <div className="mb-2">
                    &gt; LOADING MODULE:{" "}
                    <span className="text-white">OCR_ENGINE</span>
                  </div>
                  <div className="mb-2 pl-4 text-xs text-neutral-600">
                    [OK] Tesseract loaded (12ms)
                    <br />
                    [OK] Neural net weights initialized
                  </div>
                  <div className="mb-2">
                    &gt; CONNECTING TO:{" "}
                    <span className="text-white">DTE_NETWORK</span>
                  </div>
                  <div className="mb-2 pl-4 text-xs text-neutral-600">
                    [OK] Secure handshake established
                    <br />
                    [OK] Token verified
                  </div>
                  <div className="mb-4">
                    &gt; SCANNING INVOICE #INV-2026-001...
                  </div>

                  {/* Simulated Analysis */}
                  <div className="mt-8 border border-[#333] bg-[#0a0a0a] p-4">
                    <div className="mb-2 flex justify-between border-b border-[#333] pb-2 text-xs font-bold text-white">
                      <span>DETECTED ENTITIES</span>
                      <span className="text-[#39ff14]">CONFIDENCE: 99.9%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 text-xs">
                      <span className="text-neutral-500">VENDOR:</span>
                      <span className="text-[#39ff14]">TECH_CORP_INC</span>
                      <span className="text-neutral-500">DATE:</span>
                      <span className="text-white">2026-02-18</span>
                      <span className="text-neutral-500">TOTAL:</span>
                      <span className="text-white">$4,250.00</span>
                      <span className="text-neutral-500">TAX_ID:</span>
                      <span className="text-white">99-1234567</span>
                    </div>
                  </div>

                  <div className="mt-4 animate-pulse text-[#39ff14]">
                    &gt; MATCH CONFIRMED. PROCESSING PAYMENT...
                    <span className="animate-blink">_</span>
                  </div>
                </div>

                {/* Scanline Overlay */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] mix-blend-overlay" />
              </div>

              {/* Back decoration */}
              <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full border border-[#333] bg-[#39ff14]/5" />
            </div>
          </div>
        </section>

        {/* Stats Section / Tape */}
        <section className="overflow-hidden border-y border-[#333] bg-[#0a0a0a] py-6">
          <div className="flex w-full whitespace-nowrap">
            <div className="animate-marquee flex items-center gap-16 text-2xl font-black tracking-tighter text-[#222] italic">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className={i % 2 === 0 ? "text-[#333]" : "text-neutral-800"}
                >
                  AUTOMATION // PRECISION // SPEED
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-6 py-24">
          <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-white uppercase">
                Core Modules
              </h2>
              <p className="mt-2 text-neutral-500">
                Select a subsystem to view capabilities.
              </p>
            </div>
            <div className="text-right text-xs font-bold text-[#39ff14]">
              ALL SYSTEMS NOMINAL
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "OPTICAL RECOGNITION",
                desc: "High-speed extraction of unstructured data from physical and digital documents.",
                icon: <ScanLineIcon className="h-8 w-8" />,
                stat: "0.4s",
                label: "PARSE TIME",
              },
              {
                title: "3-WAY MATCHING",
                desc: "Automated reconciliation of POs, receipts, and invoices. Discrepancy detection.",
                icon: <CheckCircle2Icon className="h-8 w-8" />,
                stat: "100%",
                label: "ACCURACY",
              },
              {
                title: "DTE INTEGRATION",
                desc: "Direct uplinking to tax authorities. Real-time compliance verification.",
                icon: <GlobeIcon className="h-8 w-8" />,
                stat: "AES-256",
                label: "SECURITY",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="group relative border border-[#333] bg-[#080808] p-8 transition-all hover:-translate-y-1 hover:border-[#39ff14]"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="text-[#39ff14]">{feature.icon}</div>
                  <div className="text-4xl font-black text-[#1a1a1a] transition-colors group-hover:text-[#39ff14]/20">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold tracking-wider text-white uppercase">
                  {feature.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-neutral-400">
                  {feature.desc}
                </p>
                <div className="border-t border-[#222] pt-4">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-neutral-500">{feature.label}</span>
                    <span className="text-white">{feature.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specs / Detail View */}
        <section className="bg-[#080808] py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute top-0 left-0 -z-10 h-64 w-64 bg-[#39ff14]/5 blur-[100px]" />
                <h2 className="mb-8 text-3xl font-black tracking-tight text-white uppercase">
                  System Architecture
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      label: "Data Ingestion",
                      val: "Multi-Format Support",
                      icon: <FileTextIcon className="h-4 w-4" />,
                    },
                    {
                      label: "Processing Unit",
                      val: "Neural OCR Engine",
                      icon: <CpuIcon className="h-4 w-4" />,
                    },
                    {
                      label: "Security Layer",
                      val: "Enterprise Grade",
                      icon: <LockIcon className="h-4 w-4" />,
                    },
                    {
                      label: "Analytics",
                      val: "Real-time Telemetry",
                      icon: <BarChart3Icon className="h-4 w-4" />,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 border-b border-[#222] pb-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center bg-[#111] text-[#39ff14]">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-neutral-500 uppercase">
                          {item.label}
                        </div>
                        <div className="font-bold text-white uppercase">
                          {item.val}
                        </div>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-[#39ff14]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Code/Config Display */}
              <div className="relative flex items-center justify-center border border-[#333] bg-black p-8">
                <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-[#39ff14]" />
                <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-[#39ff14]" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#39ff14]" />
                <div className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-[#39ff14]" />

                <div className="w-full space-y-2 font-mono text-xs text-neutral-500">
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">01</span>
                    <span>
                      <span className="text-purple-400">class</span>{" "}
                      <span className="text-yellow-300">SpendGuard</span>{" "}
                      <span className="text-white">implements</span>{" "}
                      <span className="text-yellow-300">ISecureProcessor</span>{" "}
                      {"{"}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">02</span>
                    <span className="pl-4">
                      <span className="text-purple-400">private</span>{" "}
                      <span className="text-blue-400">readonly</span>{" "}
                      <span className="text-white">config</span>:{" "}
                      <span className="text-yellow-300">Config</span>;
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">03</span>
                    <span className="pl-4">
                      <span className="text-purple-400">constructor</span>(){" "}
                      {"{"}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">04</span>
                    <span className="pl-8">
                      <span className="text-blue-400">this</span>.
                      <span className="text-white">config</span> ={" "}
                      <span className="text-white">Security.init({"{"}</span>
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">05</span>
                    <span className="pl-12">
                      <span className="text-white">level:</span>{" "}
                      <span className="text-orange-400">
                        &quot;MAXIMUM_PROTECTION&quot;
                      </span>
                      ,
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">06</span>
                    <span className="pl-12">
                      <span className="text-white">encryption:</span>{" "}
                      <span className="text-blue-400">true</span>,
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">07</span>
                    <span className="pl-8">{"}"});</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">08</span>
                    <span className="pl-4">{"}"}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 text-[#333]">09</span>
                    <span>{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-32 text-center">
          <div className="relative mx-auto max-w-4xl border border-[#333] bg-[#080808] p-16">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#050505] px-4 text-sm font-bold tracking-widest text-[#39ff14] uppercase">
              System Ready
            </div>

            <h2 className="mb-6 text-4xl font-black text-white uppercase md:text-6xl">
              Initialize Your
              <br />
              Operation
            </h2>

            <p className="mb-10 text-lg text-neutral-400">
              Join the elite organizations automating their financial
              intelligence.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#39ff14] px-12 py-5 text-lg font-bold tracking-widest text-black uppercase hover:bg-[#32e612]"
            >
              <ActivityIcon className="h-5 w-5" />
              Start Sequence
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#333] bg-[#020202] py-12 text-xs">
          <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div className="flex items-center gap-2 text-neutral-500">
              <div className="h-2 w-2 bg-[#39ff14]" />
              SPENDGUARD SYSTEMS © 2026
            </div>
            <div className="flex gap-8 font-bold tracking-widest text-neutral-500 uppercase">
              <a href="/privacy" className="hover:text-white">
                Privacy_Policy
              </a>
              <a href="/terms" className="hover:text-white">
                Terms_of_Service
              </a>
              <a href="/status" className="hover:text-white">
                Status
              </a>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-blink {
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
