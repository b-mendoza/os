import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRightIcon,
  CpuIcon,
  GlobeIcon,
  ScanLineIcon,
  ShieldCheckIcon,
  TerminalIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/5-gemini")({
  component: GeminiLandingPage,
});

function GeminiLandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Animation trigger on mount
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] font-mono text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[4rem_4rem] opacity-20" />
        <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-cyan-900/50 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800/50 bg-[#050505]/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center border border-cyan-500/30 bg-cyan-950/10">
              <div className="absolute inset-0 animate-pulse bg-cyan-500/10" />
              <div className="h-2 w-2 bg-cyan-400" />
              <div className="absolute top-0 left-0 h-1 w-1 bg-cyan-500" />
              <div className="absolute top-0 right-0 h-1 w-1 bg-cyan-500" />
              <div className="absolute bottom-0 left-0 h-1 w-1 bg-cyan-500" />
              <div className="absolute right-0 bottom-0 h-1 w-1 bg-cyan-500" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white uppercase">
              Spend<span className="text-cyan-500">Guard</span>
            </span>
          </div>

          <div className="hidden gap-8 text-xs font-medium tracking-widest text-zinc-500 uppercase md:flex">
            {["Intelligence", "Protocol", "Network"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="group relative overflow-hidden border border-cyan-900 bg-cyan-950/10 px-6 py-2 text-xs font-bold tracking-widest text-cyan-400 uppercase transition-all hover:border-cyan-500/50 hover:bg-cyan-950/30"
          >
            <span className="relative z-10">Initialize</span>
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-cyan-500/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div
              className={`transition-all delay-100 duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <div className="mb-6 inline-flex items-center gap-2 border border-lime-500/20 bg-lime-500/5 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-lime-400 uppercase">
                <span className="h-1.5 w-1.5 animate-pulse bg-lime-400" />
                System Online v2.0
              </div>
              <h1 className="text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase md:text-7xl lg:text-8xl">
                Fiscal <br />
                <span className="bg-linear-to-r from-cyan-400 via-cyan-200 to-white bg-clip-text text-transparent">
                  Dominance
                </span>
              </h1>
            </div>

            <p
              className={`max-w-xl border-l-2 border-zinc-800 pl-6 text-sm leading-relaxed text-zinc-400 transition-all delay-300 duration-700 md:text-base ${mounted ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
            >
              Precision-engineered spend intelligence for the modern enterprise.
              Eliminate variance with automated 3-way matching and DTE
              synchronization.
              <span className="mt-2 block text-cyan-500">
                99.9% accuracy verified.
              </span>
            </p>

            <div
              className={`flex flex-col gap-4 transition-all delay-500 duration-700 sm:flex-row ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <button
                type="button"
                className="group clip-path-slant relative flex items-center justify-center gap-3 bg-cyan-500 px-8 py-4 font-bold tracking-wide text-black uppercase transition-colors hover:bg-cyan-400"
              >
                Deploy System
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                className="group flex items-center justify-center gap-3 border border-zinc-800 bg-zinc-900/50 px-8 py-4 font-bold tracking-wide text-white uppercase transition-colors hover:border-zinc-600"
              >
                View Diagnostics
              </button>
            </div>
          </div>

          {/* Hero Visual - Cyber Scanner */}
          <div
            className={`relative aspect-square overflow-hidden border border-zinc-800 bg-black/50 backdrop-blur-sm transition-all delay-300 duration-1000 md:aspect-4/3 ${mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[20px_20px]" />

            {/* Crosshairs */}
            <div className="absolute top-4 left-4 h-4 w-4 border-t border-l border-cyan-500/50" />
            <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-cyan-500/50" />
            <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-cyan-500/50" />
            <div className="absolute right-4 bottom-4 h-4 w-4 border-r border-b border-cyan-500/50" />

            {/* Central Scanner */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-64 w-64 animate-[spin_10s_linear_infinite] rounded-full border border-cyan-900/50 md:h-80 md:w-80">
                <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
              </div>
              <div className="absolute h-48 w-48 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-cyan-500/20" />
              <div className="absolute h-32 w-32 rounded-full border border-cyan-500/10" />

              {/* Scan Beam */}
              <div className="animate-scan-vertical absolute inset-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-linear-to-b from-transparent via-cyan-500/10 to-transparent" />
            </div>

            {/* Data Overlay */}
            <div className="absolute bottom-8 left-8 space-y-2 font-mono text-[10px] text-cyan-400/80">
              <div className="flex gap-4">
                <span className="opacity-50">TARGET</span>
                <span>INV-2024-X99</span>
              </div>
              <div className="flex gap-4">
                <span className="opacity-50">STATUS</span>
                <span className="animate-pulse text-lime-400">MATCHED</span>
              </div>
              <div className="flex gap-4">
                <span className="opacity-50">CONFIDENCE</span>
                <span>99.98%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics Strip */}
      <div className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Processing Time", value: "< 150ms" },
              { label: "Accuracy Rate", value: "99.9%" },
              { label: "Uptime", value: "99.99%" },
              { label: "Security Level", value: "Tier 1" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col border-l border-zinc-800 pl-6"
              >
                <span className="mb-1 text-xs tracking-wider text-zinc-500 uppercase">
                  {metric.label}
                </span>
                <span className="font-sans text-lg font-bold text-white md:text-xl">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section
        id="intelligence"
        className="relative z-10 container mx-auto px-6 py-24 md:py-32"
      >
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white uppercase md:text-5xl">
              Core Capabilities
            </h2>
            <p className="leading-relaxed text-zinc-400">
              Our proprietary neural networks decompose invoices into structured
              data with human-level understanding and machine-level speed.
            </p>
          </div>
          <div className="mb-2 ml-12 hidden h-px flex-1 bg-zinc-800 md:block" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <TechCard
            icon={<ScanLineIcon className="h-6 w-6" />}
            title="Optical Recognition"
            code="OCR_ENGINE_V4"
            desc="Proprietary engine tuned for complex layouts. Extracts line items, tax tables, and handwritten notes."
          />
          <TechCard
            icon={<ShieldCheckIcon className="h-6 w-6" />}
            title="Policy Enforcement"
            code="RULE_SET_01"
            desc="Automated compliance checks against POs and receiving logs. Zero-tolerance for variance."
          />
          <TechCard
            icon={<CpuIcon className="h-6 w-6" />}
            title="ERP Integration"
            code="SYNC_PROTOCOL"
            desc="Bi-directional sync with SAP, Oracle, and NetSuite. Real-time ledger updates."
          />
        </div>
      </section>

      {/* Terminal Section */}
      <section
        id="protocol"
        className="border-t border-zinc-800 bg-zinc-900/20 py-24"
      >
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative order-2 rounded border border-zinc-800 bg-[#0a0a0a] p-2 shadow-2xl lg:order-1">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-2">
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
              </div>
              <div className="font-mono text-[10px] text-zinc-500">
                user@spend-guard:~/protocols
              </div>
            </div>
            <div className="overflow-x-auto p-6 font-mono text-sm">
              <div className="space-y-2">
                <div className="flex">
                  <span className="mr-2 text-lime-400">➜</span>
                  <span className="text-cyan-400">sg-cli</span>
                  <span className="ml-2 text-white">
                    verify --file invoice_001.pdf
                  </span>
                </div>
                <div className="animate-pulse text-zinc-500">
                  Initializing neural engine...
                </div>
                <div className="text-zinc-400">
                  [SUCCESS] Document parsed (142ms)
                  <br />
                  [INFO] Vendor: ACME Corp
                  <br />
                  [INFO] Total: $1,240.50
                  <br />
                  [INFO] PO Match:{" "}
                  <span className="text-lime-400">VERIFIED (PO-9921)</span>
                </div>
                <div className="mt-4 flex">
                  <span className="mr-2 text-lime-400">➜</span>
                  <span className="text-cyan-400">sg-cli</span>
                  <span className="cursor-blink ml-2 text-white">_</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-500 uppercase">
              <TerminalIcon className="h-4 w-4" />
              Developer API
            </div>
            <h2 className="text-3xl font-bold text-white uppercase md:text-4xl">
              Programmatic <br />
              Control
            </h2>
            <p className="leading-relaxed text-zinc-400">
              Full access to the Spend Guard engine via our GraphQL API. Build
              custom verification workflows, trigger payments programmatically,
              and pull real-time spend analytics into your own dashboards.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {["Webhooks", "Audit Logs", "RBAC", "Sandboxing"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <div className="h-1 w-1 bg-cyan-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto overflow-hidden px-6 py-32 text-center">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cyan-900/10 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-3xl space-y-8">
          <h2 className="text-4xl font-bold tracking-tighter text-white uppercase md:text-6xl">
            Initiate <span className="text-cyan-500">Control</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Deploy Spend Guard across your organization today.
            <br />
            Recover 20% of AP processing time immediately.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="w-full bg-white px-8 py-4 font-bold tracking-wide text-black uppercase transition-colors hover:bg-zinc-200 sm:w-auto"
            >
              Schedule Demo
            </button>
            <button
              type="button"
              className="w-full border border-zinc-800 px-8 py-4 font-bold tracking-wide text-white uppercase transition-colors hover:bg-zinc-900 sm:w-auto"
            >
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#020202] py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 font-mono text-xs text-zinc-600 md:flex-row">
          <div className="flex items-center gap-2">
            <GlobeIcon className="h-4 w-4" />
            <span>SAN SALVADOR, SV // EST. 2024</span>
          </div>
          <div className="flex gap-8 tracking-widest uppercase">
            <a href="/" className="transition-colors hover:text-cyan-500">
              Legal
            </a>
            <a href="/" className="transition-colors hover:text-cyan-500">
              Privacy
            </a>
            <a href="/" className="transition-colors hover:text-cyan-500">
              Status
            </a>
          </div>
        </div>
      </footer>

      {/* Global Styles for this page */}
      <style>{`
        @keyframes scan-vertical {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-vertical {
          animation: scan-vertical 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
}

function TechCard({
  icon,
  title,
  code,
  desc,
}: {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly code: string;
  readonly desc: string;
}) {
  return (
    <div className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/20 p-8 transition-colors hover:bg-zinc-900/40">
      <div className="absolute top-0 left-0 h-px w-full -translate-x-full bg-linear-to-r from-transparent via-cyan-500/50 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <div className="mb-6 flex items-start justify-between">
        <div className="border border-zinc-800 bg-zinc-900 p-3 text-cyan-500 transition-colors group-hover:border-lime-500/30 group-hover:text-lime-400">
          {icon}
        </div>
        <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
          {code}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-white uppercase transition-colors group-hover:text-cyan-400">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-400">{desc}</p>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-zinc-800 transition-colors group-hover:border-cyan-500/50" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-zinc-800 transition-colors group-hover:border-cyan-500/50" />
    </div>
  );
}
