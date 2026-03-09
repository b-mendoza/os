/* oxlint-disable max-lines -- Long-form design prototype kept in a single route for visual iteration. */

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  FileTextIcon,
  MenuIcon,
  ScanIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  XIcon,
  ZapIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/2-gemini")({
  component: GeminiLandingPage,
  head() {
    return {
      meta: [
        {
          title: "SpendGuard | Precision Finance",
        },
      ],
    };
  },
});

const SCROLL_THRESHOLD_PX = 50;
const MARQUEE_REPEAT_MARKERS = Array.from("ABCDEFGHIJ");

function GeminiLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E5E5E5] font-sans text-black selection:bg-black selection:text-[#CCFF00]">
      {/* Background Grid Pattern */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 border-b border-black transition-all duration-300 ${scrolled ? "bg-[#E5E5E5]/90 py-4 backdrop-blur-md" : "bg-[#E5E5E5] py-6"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center bg-black text-[#CCFF00]">
              <ShieldCheckIcon size={24} strokeWidth={3} />
            </div>
            <span className="text-3xl font-black tracking-tighter uppercase">
              SpendGuard
            </span>
          </div>

          <div className="hidden items-center gap-8 font-mono text-sm font-bold tracking-wide uppercase md:flex">
            {["Capabilities", "Process", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative overflow-hidden px-1 py-1"
              >
                <span className="relative z-10 transition-colors group-hover:text-[#CCFF00]">
                  {item}
                </span>
                <span className="absolute inset-0 -translate-y-full bg-black transition-transform duration-300 group-hover:translate-y-0"></span>
              </a>
            ))}
            <Link
              to="/"
              className="relative overflow-hidden border border-black bg-black px-6 py-2 text-[#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Start Now
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-[#E5E5E5] px-6 pt-24 md:hidden">
          <div className="flex flex-col gap-8 text-4xl font-black tracking-tighter uppercase">
            {["Capabilities", "Process", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="border-b border-black pb-2"
              >
                {item}
              </a>
            ))}
            <Link to="/" className="bg-black p-4 text-center text-[#CCFF00]">
              Start Now
            </Link>
          </div>
        </div>
      ) : null}

      {/* Hero Section */}
      <header className="relative z-10 container mx-auto grid min-h-[90vh] grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <div className="inline-flex w-fit items-center gap-3 border border-black bg-white px-4 py-2 font-mono text-xs font-bold tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CCFF00] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full border border-black bg-[#CCFF00]"></span>
            </span>
            <span>System Operational // v2.4.0</span>
          </div>

          <h1 className="text-7xl leading-[0.85] font-black tracking-tighter uppercase md:text-9xl">
            Financial <br />
            <span className="bg-linear-to-r from-black via-neutral-700 to-neutral-500 bg-clip-text text-transparent">
              Control
            </span>
            <br />
            Reimagined
          </h1>

          <p className="max-w-xl border-l-8 border-[#CCFF00] py-1 pl-8 text-2xl font-bold text-neutral-800 md:text-3xl">
            Stop leaking revenue. Automate your invoices with military-grade OCR
            and 3-way matching.
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row">
            <Link
              to="/"
              className="group flex items-center justify-center gap-4 border-2 border-black bg-[#CCFF00] px-10 py-5 text-xl font-black text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
            >
              DEPLOY SYSTEM
              <ArrowRightIcon
                className="h-6 w-6 transition-transform group-hover:translate-x-2"
                strokeWidth={3}
              />
            </Link>
            <button className="group flex items-center justify-center gap-4 border-2 border-black bg-white px-10 py-5 text-xl font-black text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
              VIEW DOCS
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:col-span-5">
          <div className="relative aspect-3/4 w-full max-w-md border-2 border-black bg-black shadow-[16px_16px_0px_0px_#CCFF00]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-luminosity grayscale"></div>

            {/* Grid Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(204, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-between p-8 font-mono text-[#CCFF00]">
              <div className="flex items-start justify-between border-b border-[#CCFF00]/30 pb-4">
                <ScanIcon className="h-16 w-16" strokeWidth={1.5} />
                <div className="text-right text-xs leading-relaxed opacity-80">
                  ID: SG-2026-X
                  <br />
                  SECURE LINK: ACTIVE
                  <br />
                  LAT: 13.6929 N<br />
                  LON: 89.2182 W
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-[#CCFF00] bg-black/80 p-4 backdrop-blur-sm">
                  <div className="mb-1 text-[10px] tracking-widest text-white/60 uppercase">
                    Detected Vendor
                  </div>
                  <div className="text-xl font-bold tracking-tighter">
                    OFFICE DEPOT INC.
                  </div>
                </div>
                <div className="border-l-2 border-[#CCFF00] bg-black/80 p-4 backdrop-blur-sm">
                  <div className="mb-1 text-[10px] tracking-widest text-white/60 uppercase">
                    Total Amount
                  </div>
                  <div className="text-3xl font-bold tracking-tighter text-white">
                    $1,245.00
                  </div>
                </div>
              </div>
            </div>

            {/* Scanning Line Animation */}
            <div className="animate-scan pointer-events-none absolute inset-0 z-20 h-[4px] w-full bg-[#CCFF00] shadow-[0_0_40px_#CCFF00]"></div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 h-8 w-8 border-t-4 border-l-4 border-[#CCFF00]"></div>
            <div className="absolute top-0 right-0 h-8 w-8 border-t-4 border-r-4 border-[#CCFF00]"></div>
            <div className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4 border-[#CCFF00]"></div>
            <div className="absolute right-0 bottom-0 h-8 w-8 border-r-4 border-b-4 border-[#CCFF00]"></div>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="relative z-20 scale-105 rotate-1 overflow-hidden border-y-2 border-black bg-[#CCFF00] py-6 shadow-xl">
        <div className="animate-marquee flex gap-16 text-4xl font-black tracking-tight whitespace-nowrap text-black uppercase">
          {MARQUEE_REPEAT_MARKERS.map((marker) => (
            <span key={marker} className="flex items-center gap-8">
              Automated Spend Intelligence <span className="text-xl">●</span>{" "}
              99.9% Accuracy <span className="text-xl">●</span> DTE Integration{" "}
              <span className="text-xl">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* Capabilities Grid */}
      <section id="capabilities" className="container mx-auto px-6 py-32">
        <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <h2 className="text-6xl leading-[0.8] font-black tracking-tighter uppercase md:text-8xl">
            Core <br />
            Modules
          </h2>
          <p className="max-w-xs border-t-4 border-black pt-6 font-mono text-sm leading-relaxed font-bold uppercase">
            {`// STATUS: DEPLOYED`}
            <br />
            Streamline operations and reduce manual intervention across all
            financial departments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border-2 border-black bg-black md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Photo OCR Engine",
              icon: <SmartphoneIcon className="h-12 w-12" />,
              desc: "Proprietary optical character recognition optimized for receipts and invoices. Turns pixels into structured JSON data instantly.",
            },
            {
              title: "3-Way Matching",
              icon: <ShieldCheckIcon className="h-12 w-12" />,
              desc: "Automated reconciliation between Purchase Orders, Receiving Reports, and Invoices. Flag discrepancies before payment.",
            },
            {
              title: "DTE Automation",
              icon: <FileTextIcon className="h-12 w-12" />,
              desc: "Direct integration with Ministry of Finance for immediate DTE generation and validation. Compliance guaranteed.",
            },
            {
              title: "Real-time Analytics",
              icon: <ZapIcon className="h-12 w-12" />,
              desc: "Live dashboards tracking spend velocity, category breakdown, and vendor performance metrics.",
            },
            {
              title: "Fraud Detection",
              icon: <ScanIcon className="h-12 w-12" />,
              desc: "AI-driven anomaly detection identifies duplicate invoices, price spikes, and unauthorized vendors.",
            },
            {
              title: "Cloud Archive",
              icon: <CheckCircle2Icon className="h-12 w-12" />,
              desc: "Secure, searchable storage for all your financial documents with 7-year retention policy built-in.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative h-full bg-[#E5E5E5] p-12 transition-all hover:bg-black hover:text-[#CCFF00]"
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-8 text-black transition-colors group-hover:text-[#CCFF00]">
                    {item.icon}
                  </div>
                  <h3 className="mb-4 text-3xl leading-none font-black tracking-tighter uppercase">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-8 font-mono text-sm leading-relaxed text-neutral-600 group-hover:text-[#CCFF00]/80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="relative overflow-hidden bg-black py-32 text-white"
      >
        {/* Background Elements */}
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="mb-24 flex flex-col items-baseline gap-12 border-b border-white/20 pb-8 md:flex-row">
            <h2 className="text-5xl font-black tracking-tighter uppercase md:text-7xl">
              The Workflow
            </h2>
            <div className="animate-pulse font-mono text-[#CCFF00]">
              {`// SYSTEM_PROCESS_INIT`}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Capture",
                desc: "Snap a photo of the invoice or receipt via mobile app.",
              },
              {
                step: "02",
                title: "Process",
                desc: "AI extracts data and matches against POs automatically.",
              },
              {
                step: "03",
                title: "Approve",
                desc: "One-click approval sends data to ERP and Tax Authority.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="group relative border-2 border-white/20 bg-neutral-900/50 p-10 transition-all duration-300 hover:border-[#CCFF00] hover:bg-neutral-900"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="text-8xl font-black text-neutral-800 transition-colors select-none group-hover:text-[#CCFF00]">
                    {step.step}
                  </div>
                  <div className="ml-8 h-px flex-1 bg-white/20 transition-colors group-hover:bg-[#CCFF00]"></div>
                </div>

                <h3 className="mb-4 text-4xl font-bold tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-neutral-400 transition-colors group-hover:text-white">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section
        id="pricing"
        className="relative container mx-auto flex flex-col items-center px-6 py-40 text-center"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <span className="text-[20vw] font-black uppercase">Start</span>
        </div>

        <h2 className="mb-12 max-w-5xl text-6xl leading-[0.85] font-black tracking-tighter uppercase md:text-8xl">
          Ready to take <br />
          <span className="bg-[#CCFF00] px-4 text-black">control?</span>
        </h2>

        <p className="mb-16 max-w-2xl text-2xl font-bold md:text-3xl">
          Join the platform processing over{" "}
          <span className="underline decoration-[#CCFF00] decoration-4 underline-offset-4">
            $50M
          </span>{" "}
          in secure transactions annually.
        </p>

        <Link
          to="/"
          className="group relative overflow-hidden border-2 border-black bg-black px-16 py-8 text-3xl font-black text-white shadow-[12px_12px_0px_0px_#CCFF00] transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none"
        >
          <span className="relative z-10 transition-colors group-hover:text-[#CCFF00]">
            START FREE TRIAL
          </span>
          <div className="absolute inset-0 z-0 -translate-x-full bg-neutral-900 transition-transform duration-300 group-hover:translate-x-0"></div>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-black pt-24 pb-12 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="col-span-1 md:col-span-5">
              <div className="mb-8 flex items-center gap-3 text-[#CCFF00]">
                <ShieldCheckIcon size={48} strokeWidth={2} />
                <span className="text-5xl font-black tracking-tighter text-white uppercase">
                  SpendGuard
                </span>
              </div>
              <p className="max-w-md font-mono text-lg text-neutral-400">
                Building automated financial infrastructure for the modern
                enterprise. San Salvador, El Salvador.
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <h4 className="mb-6 text-sm font-black tracking-widest text-[#CCFF00] uppercase">
                Platform
              </h4>
              <ul className="space-y-4 font-bold tracking-tight uppercase">
                {["Features", "Integrations", "Enterprise", "Changelog"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className="block transition-all hover:pl-2 hover:text-[#CCFF00]"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="mb-6 text-sm font-black tracking-widest text-[#CCFF00] uppercase">
                Company
              </h4>
              <ul className="space-y-4 font-bold tracking-tight uppercase">
                {["About", "Careers", "Contact", "Legal"].map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="block transition-all hover:pl-2 hover:text-[#CCFF00]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="mb-6 text-sm font-black tracking-widest text-[#CCFF00] uppercase">
                Social
              </h4>
              <ul className="space-y-4 font-bold tracking-tight uppercase">
                {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="block transition-all hover:pl-2 hover:text-[#CCFF00]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between border-t border-neutral-800 pt-12 font-mono text-sm text-neutral-500 uppercase md:flex-row">
            <div>© 2026 SpendGuard Systems</div>
            <div className="mt-4 flex gap-8 md:mt-0">
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
