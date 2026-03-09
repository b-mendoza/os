import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRightIcon,
  BotIcon,
  CameraIcon,
  CheckCircle2Icon,
  FileTextIcon,
  GlobeIcon,
  LockIcon,
  MenuIcon,
  PieChartIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 20;
const CHART_BARS = 20;
const CHART_MAX_HEIGHT = 100;
const CHART_HEIGHT_BASE_RATIO = 0.45;
const CHART_HEIGHT_STEP_MULTIPLIER = 17;
const CHART_HEIGHT_VARIANCE_MODULUS = 50;
const PERCENT_DIVISOR = 100;
const CHART_BASE_OPACITY = 0.5;
const CHART_RANDOM_OPACITY = 0.5;
const CHART_OPACITY_GROUP_SIZE = 5;
const TICKER_MARKERS = Array.from("ABCDEFGHIJ");

export const Route = createFileRoute("/1-gemini")({
  component: GeminiLandingPage,
  head() {
    return {
      meta: [
        {
          title: "Spend Guard | Intelligent Spend Management",
        },
        {
          name: "description",
          content:
            "El Salvador-first spend and invoice intelligence app. Automate DTE, 3-way matching, and photo OCR.",
        },
      ],
    };
  },
});

const CHART_DATA = Array.from(
  {
    length: CHART_BARS,
  },
  (_, index) => ({
    id: `bar-${index}`,
    height:
      CHART_MAX_HEIGHT *
      (CHART_HEIGHT_BASE_RATIO +
        ((index * CHART_HEIGHT_STEP_MULTIPLIER) %
          CHART_HEIGHT_VARIANCE_MODULUS) /
          PERCENT_DIVISOR),
    opacity:
      CHART_BASE_OPACITY +
      ((index % CHART_OPACITY_GROUP_SIZE) * CHART_RANDOM_OPACITY) /
        CHART_OPACITY_GROUP_SIZE,
  }),
);

function GeminiLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030305] font-sans text-white selection:bg-[#ccff00] selection:text-black">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');

          :root {
            --neon-lime: #ccff00;
            --deep-purple: #1a1a2e;
            --glass-border: rgba(255, 255, 255, 0.08);
            --glass-bg: rgba(255, 255, 255, 0.02);
          }

          .font-display { font-family: 'Syne', sans-serif; }
          .font-body { font-family: 'Space Grotesk', sans-serif; }

          .blob-gradient {
            background: radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.15), transparent 60%);
          }
          
          .text-glow {
            text-shadow: 0 0 20px rgba(204, 255, 0, 0.3);
          }

          .glass-panel {
            background: var(--glass-bg);
            backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
          }

          .grid-bg {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float 8s ease-in-out infinite;
            animation-delay: 2s;
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0">
        <div className="blob-gradient absolute top-0 left-0 h-[800px] w-full opacity-60" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/5 bg-[#030305]/80 py-4 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="group flex cursor-pointer items-center gap-3">
            <div className="flex h-10 w-10 transform items-center justify-center rounded-none bg-[#ccff00] transition-transform duration-500 group-hover:rotate-180">
              <ShieldCheckIcon className="h-6 w-6 text-black" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              SpendGuard
            </span>
          </div>

          <div className="font-body hidden items-center gap-8 text-sm font-medium md:flex">
            {["Product", "Solutions", "Pricing", "Company"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-gray-400 transition-colors hover:text-[#ccff00]"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#ccff00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button className="font-body hidden items-center gap-2 rounded-none border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:bg-[#ccff00] hover:text-black md:flex">
            Start Trial <ArrowRightIcon className="h-4 w-4" />
          </button>

          <button className="text-white md:hidden">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-40 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 border border-[#ccff00]/20 bg-[#ccff00]/5 px-3 py-1 font-mono text-xs tracking-wider text-[#ccff00] uppercase">
                <span className="h-2 w-2 animate-pulse bg-[#ccff00]" />
                <span>El Salvador First</span>
              </div>

              <h1 className="font-display mb-8 bg-linear-to-br from-white via-white to-gray-500 bg-clip-text text-6xl leading-[0.9] font-extrabold tracking-tighter text-transparent md:text-8xl">
                TOTAL <br />
                SPEND <br />
                <span className="bg-linear-to-r from-[#ccff00] to-green-400 bg-clip-text text-transparent">
                  CONTROL
                </span>
              </h1>

              <p className="font-body mb-10 max-w-lg border-l-2 border-[#ccff00]/30 pl-6 text-lg leading-relaxed text-gray-400">
                The definitive financial intelligence platform for modern
                enterprises. Automate DTE, 3-way matching, and photo OCR with
                military-grade precision.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="font-display group flex items-center justify-center gap-2 bg-[#ccff00] px-8 py-4 text-lg font-bold tracking-tight text-black transition-colors hover:bg-white">
                  Deploy Now
                  <ZapIcon className="h-5 w-5 transition-all group-hover:fill-black" />
                </button>
                <button className="font-display flex items-center justify-center gap-2 border border-white/20 bg-transparent px-8 py-4 text-lg font-bold tracking-tight text-white transition-colors hover:bg-white/5">
                  View Demo
                  <PieChartIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Abstract 3D/UI Element */}
            <div className="relative hidden h-[600px] perspective-[2000px] lg:block">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#ccff00]/5 to-transparent blur-[100px]" />

              <div className="relative h-full w-full rotate-x-10 -rotate-y-12 transform transition-transform duration-700 hover:rotate-x-5 hover:-rotate-y-5">
                {/* Main Card */}
                <div className="glass-panel absolute top-10 right-10 bottom-10 left-10 flex flex-col border border-white/10 p-8 shadow-2xl">
                  <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/50" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                      <div className="h-3 w-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="font-mono text-xs text-gray-500">
                      DASHBOARD_V2.0.SYS
                    </div>
                  </div>

                  <div className="grid flex-1 grid-cols-2 gap-6">
                    <div className="group relative col-span-2 overflow-hidden rounded-none border border-white/5 bg-white/5 p-6">
                      <div className="absolute top-0 right-0 p-4 text-[#ccff00]">
                        <TrendingUpIcon className="h-6 w-6" />
                      </div>
                      <div className="mb-2 font-mono text-sm text-gray-400">
                        TOTAL SPEND
                      </div>
                      <div className="font-display text-4xl font-bold">
                        $124,592.00
                      </div>
                      <div className="mt-4 flex gap-1">
                        {CHART_DATA.map((data) => (
                          <div
                            key={data.id}
                            className="flex h-12 flex-1 items-end bg-white/10"
                          >
                            <div
                              className="w-full bg-[#ccff00] transition-all duration-1000"
                              style={{
                                height: `${data.height}%`,
                                opacity: data.opacity,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10">
                      <div className="mb-4 font-mono text-xs text-gray-500">
                        PENDING APPROVALS
                      </div>
                      <div className="font-display text-3xl">14</div>
                      <div className="mt-2 text-xs text-[#ccff00]">
                        4 High Priority
                      </div>
                    </div>

                    <div className="border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10">
                      <div className="mb-4 font-mono text-xs text-gray-500">
                        MATCH RATE
                      </div>
                      <div className="font-display text-3xl">99.2%</div>
                      <div className="mt-2 text-xs text-green-400">
                        +2.4% vs last mo
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="glass-panel animate-float absolute top-20 -right-12 w-64 border-l-4 border-l-[#ccff00] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#ccff00]/20 text-[#ccff00]">
                      <BotIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">AI Alert</div>
                      <div className="text-sm font-bold">
                        Duplicate Invoice Detected
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel animate-float-delayed absolute bottom-32 -left-12 w-64 border-r-4 border-r-blue-400 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-blue-500/20 text-blue-400">
                      <CheckCircle2Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Status</div>
                      <div className="text-sm font-bold">
                        3-Way Match Complete
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker / Divider */}
      <div className="w-full overflow-hidden border-y border-white/10 bg-black/50 py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {TICKER_MARKERS.map((marker) => (
            <div key={marker} className="mx-8 flex items-center gap-8">
              <span className="font-display text-2xl font-bold text-white/20 uppercase">
                Intelligent Spend Protocol
              </span>
              <span className="h-2 w-2 rounded-full bg-[#ccff00]" />
            </div>
          ))}
        </div>
      </div>

      {/* Feature Grid */}
      <section id="features" className="relative container mx-auto px-6 py-32">
        <div className="mb-20 max-w-xl">
          <h2 className="font-display mb-6 text-4xl font-bold md:text-5xl">
            SYSTEM <span className="text-[#ccff00]">CAPABILITIES</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Deploying next-generation financial tools to optimize your workflow.
            Engineered for speed, accuracy, and compliance.
          </p>
        </div>

        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          <BentoItem
            icon={<CameraIcon />}
            title="Photo OCR Engine"
            desc="Military-grade text recognition for instant invoice digitization."
            number="01"
          />
          <BentoItem
            icon={<ShieldCheckIcon />}
            title="3-Way Match"
            desc="Automated reconciliation of POs, receipts, and invoices."
            number="02"
            active
          />
          <BentoItem
            icon={<FileTextIcon />}
            title="DTE Automation"
            desc="Direct integration with Ministry of Finance systems."
            number="03"
          />
          <BentoItem
            icon={<ZapIcon />}
            title="Real-time Analytics"
            desc="Live spend tracking and anomaly detection algorithms."
            number="04"
          />
          <BentoItem
            icon={<GlobeIcon />}
            title="Global Access"
            desc="Secure, encrypted remote access from any terminal."
            number="05"
          />
          <BentoItem
            icon={<LockIcon />}
            title="Vault Security"
            desc="End-to-end encryption for your most sensitive data."
            number="06"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-panel relative overflow-hidden border-t border-[#ccff00]/50 p-12 text-center md:p-24">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#ccff00]/5 to-transparent" />

            <h2 className="font-display relative z-10 mb-8 text-5xl font-bold tracking-tighter md:text-7xl">
              READY TO{" "}
              <span className="bg-linear-to-b from-white to-white/50 bg-clip-text text-transparent">
                UPGRADE?
              </span>
            </h2>

            <p className="relative z-10 mx-auto mb-12 max-w-2xl text-xl text-gray-400">
              Join the forward-thinking enterprises in El Salvador utilizing
              Spend Guard for financial dominance.
            </p>

            <button className="font-display relative z-10 bg-[#ccff00] px-10 py-5 text-xl font-bold text-black transition-colors hover:bg-white">
              Initialize Onboarding
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center bg-[#ccff00]">
              <ShieldCheckIcon className="h-4 w-4 text-black" />
            </div>
            <span className="font-display text-lg font-bold">SpendGuard</span>
          </div>

          <div className="flex gap-8 font-mono text-sm text-gray-500">
            <button className="cursor-pointer transition-colors hover:text-[#ccff00]">
              Documentation
            </button>
            <button className="cursor-pointer transition-colors hover:text-[#ccff00]">
              API Status
            </button>
            <button className="cursor-pointer transition-colors hover:text-[#ccff00]">
              Legal
            </button>
          </div>

          <div className="font-mono text-xs text-gray-600">
            © 2026 SPEND GUARD INC.
          </div>
        </div>
      </footer>
    </div>
  );
}

function BentoItem({
  icon,
  title,
  desc,
  number,
  active = false,
}: {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly desc: string;
  readonly number: string;
  readonly active?: boolean;
}) {
  return (
    <div
      className={`group relative border border-white/5 bg-white/2 p-10 transition-all duration-300 hover:bg-white/4 ${active ? "bg-white/4" : ""} `}
    >
      <div className="font-display absolute top-0 right-0 bg-linear-to-b from-white to-transparent bg-clip-text p-4 text-4xl font-bold text-transparent opacity-20 transition-opacity group-hover:opacity-40">
        {number}
      </div>

      <div
        className={`mb-6 w-fit border p-4 ${active ? "border-[#ccff00] text-[#ccff00]" : "border-white/10 text-gray-400"} transition-colors group-hover:border-[#ccff00] group-hover:text-[#ccff00]`}
      >
        {icon}
      </div>

      <h3 className="font-display mb-4 text-2xl font-bold transition-transform duration-300 group-hover:translate-x-2">
        {title}
      </h3>

      <p className="font-body max-w-xs leading-relaxed text-gray-400 group-hover:text-gray-300">
        {desc}
      </p>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#ccff00] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
