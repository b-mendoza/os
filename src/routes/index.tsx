import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  DAILY_TASKS,
  DECISION_STEPS,
  LIFE_AREAS,
  REVIEW_CADENCE,
} from "#/shared/constants/home-page.data";

export const Route = createFileRoute("/")({
  component: HomePage,
  head() {
    return {
      meta: [
        {
          title: "Home | Spend Guard",
        },
      ],
    };
  },
});

const ACCENT = "#FF4500";

const accentLabel: React.CSSProperties = {
  fontSize: "10px",
  color: ACCENT,
  letterSpacing: "3px",
  marginBottom: "16px",
};

const highlightBox: React.CSSProperties = {
  marginTop: "24px",
  padding: "20px",
  background: "#0d0d0d",
  border: "1px solid #FF450033",
  borderLeft: `3px solid ${ACCENT}`,
};

const listItem = (color: string): React.CSSProperties => ({
  fontSize: "11px",
  color: "#666",
  marginBottom: "4px",
  paddingLeft: "8px",
  borderLeft: `1px solid ${color}33`,
});

const cadenceLabel = (color: string): React.CSSProperties => ({
  fontSize: "9px",
  color,
  letterSpacing: "2px",
  marginBottom: "6px",
});

const cardBox = (bg: string, color: string): React.CSSProperties => ({
  background: bg,
  border: `1px solid ${color}22`,
  padding: "20px",
});

const colorTag = (color: string): React.CSSProperties => ({
  color,
  fontSize: "10px",
  letterSpacing: "3px",
  fontWeight: "700",
});

const ruleQuote = (color: string): React.CSSProperties => ({
  fontSize: "12px",
  color: "#666",
  fontStyle: "italic",
  marginBottom: "10px",
  borderLeft: `2px solid ${color}`,
  paddingLeft: "10px",
});

function SectionLabel({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div style={accentLabel}>{children}</div>;
}

function DecisionFilter({
  activeStep,
  onToggle,
}: Readonly<{
  activeStep: number | null;
  onToggle: (i: number) => void;
}>) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <SectionLabel>
        THE DAILY FILTER — RUN EVERY TASK THROUGH THIS
      </SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {DECISION_STEPS.map((step, i) => {
          const active = activeStep === i;
          return (
            <div
              key={step.label}
              role="button"
              tabIndex={0}
              onClick={() => {
                onToggle(i);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onToggle(i);
                }
              }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "14px 16px",
                background: active ? "#1a0800" : "#111",
                border: `1px solid ${active ? ACCENT : "#1a1a1a"}`,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <span
                style={{
                  color: ACCENT,
                  fontSize: "11px",
                  minWidth: "20px",
                  paddingTop: "1px",
                }}
              >
                {step.label}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", color: "#ccc" }}>{step.q}</div>
                {active ? (
                  <div
                    style={{
                      fontSize: "12px",
                      color: ACCENT,
                      marginTop: "6px",
                      fontStyle: "italic",
                    }}
                  >
                    {step.yes}
                  </div>
                ) : null}
              </div>
              <span style={{ color: "#333", fontSize: "10px" }}>
                {active ? "▲" : "▼"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TierCards() {
  return (
    <>
      <SectionLabel>THE FOUR TIERS</SectionLabel>
      <div style={{ display: "grid", gap: "12px" }}>
        {DAILY_TASKS.map((t) => (
          <div key={t.tier} style={cardBox(t.bg, t.color)}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "12px",
              }}
            >
              <span style={colorTag(t.color)}>
                TIER {t.tier} · {t.label}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  color: t.color,
                  background: `${t.color}18`,
                  padding: "3px 8px",
                  border: `1px solid ${t.color}33`,
                }}
              >
                {t.time}
              </span>
            </div>
            <div style={ruleQuote(t.color)}>{t.rule}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {t.examples.map((ex) => (
                <span
                  key={ex}
                  style={{
                    fontSize: "11px",
                    color: t.color,
                    background: `${t.color}0f`,
                    padding: "3px 8px",
                    border: `1px solid ${t.color}22`,
                  }}
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function LifeAreaCards() {
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      {LIFE_AREAS.map((a) => (
        <div key={a.area} style={cardBox(a.bg, a.color)}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <span style={colorTag(a.color)}>
              {a.priority} · {a.area}
            </span>
            <span
              style={{ fontSize: "18px", fontWeight: "900", color: a.color }}
            >
              {a.allocation}
            </span>
          </div>
          <div
            style={{
              ...ruleQuote(a.color),
              color: "#888",
              marginBottom: "14px",
              lineHeight: "1.6",
            }}
          >
            {a.focus}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <div>
              <div style={cadenceLabel(a.color)}>WEEKLY</div>
              {a.weekly.map((w) => (
                <div key={w} style={listItem(a.color)}>
                  {w}
                </div>
              ))}
            </div>
            <div>
              <div style={cadenceLabel(a.color)}>MONTHLY</div>
              {a.monthly.map((m) => (
                <div key={m} style={listItem(a.color)}>
                  {m}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: "14px",
              padding: "8px 12px",
              background: `${a.color}0a`,
              borderLeft: `2px solid ${a.color}55`,
              fontSize: "11px",
              color: "#555",
              fontStyle: "italic",
            }}
          >
            ⚠ {a.signal}
          </div>
        </div>
      ))}
    </div>
  );
}

function ReviewCadencePanel() {
  return (
    <div style={highlightBox}>
      <div style={{ ...accentLabel, marginBottom: "12px" }}>REVIEW CADENCE</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {REVIEW_CADENCE.map((r) => (
          <div key={r.label}>
            <div style={cadenceLabel(ACCENT)}>{r.label}</div>
            <div style={{ fontSize: "11px", color: "#666", lineHeight: "1.6" }}>
              {r.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DailyTab({
  activeStep,
  onToggle,
}: Readonly<{
  activeStep: number | null;
  onToggle: (i: number) => void;
}>) {
  return (
    <div>
      <DecisionFilter activeStep={activeStep} onToggle={onToggle} />
      <TierCards />
      <div style={highlightBox}>
        <SectionLabel>NON-NEGOTIABLE RULE</SectionLabel>
        <div style={{ fontSize: "14px", color: "#ccc", lineHeight: "1.6" }}>
          Your <strong style={{ color: "#fff" }}>peak focus block</strong>{" "}
          belongs to Tier 1. Every day. Before Slack, before email, before your
          job. This single habit separates people who build things from people
          who always plan to.
        </div>
      </div>
    </div>
  );
}

function LongTermTab() {
  return (
    <div>
      <SectionLabel>
        ENERGY ALLOCATION — TARGET CEILINGS, NOT RIGID RULES
      </SectionLabel>
      <div
        style={{
          fontSize: "11px",
          color: "#555",
          marginBottom: "16px",
          fontStyle: "italic",
        }}
      >
        Workdays will skew toward P2. Protect P1 on mornings and weekends. The %
        below are weekly targets.
      </div>
      <div
        style={{
          display: "flex",
          height: "8px",
          marginBottom: "32px",
          gap: "2px",
        }}
      >
        {LIFE_AREAS.map((a) => (
          <div
            key={a.area}
            style={{ width: a.allocation, background: a.color }}
          />
        ))}
      </div>
      <LifeAreaCards />
      <ReviewCadencePanel />
    </div>
  );
}

function HomePage() {
  const [tab, setTab] = useState("daily");
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    setActiveStep(activeStep === i ? null : i);
  };

  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#e0e0e0",
        padding: "0",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #222",
          padding: "32px 32px 0",
          background: "#0d0d0d",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            color: ACCENT,
            letterSpacing: "4px",
            marginBottom: "8px",
          }}
        >
          PRIORITY FRAMEWORK · VALIDATED 2026-03-09
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "900",
            margin: "0 0 4px",
            letterSpacing: "-1px",
            color: "#fff",
          }}
        >
          Your Operating System
        </h1>
        <p style={{ fontSize: "12px", color: "#555", margin: "0 0 24px" }}>
          P1 → Ventures &nbsp;·&nbsp; P2 → High-paying work
        </p>
        <div style={{ display: "flex", gap: "0" }}>
          {(
            [
              ["daily", "01 · Day-to-Day"],
              ["longterm", "02 · Long-Term"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setTab(key);
              }}
              style={{
                background: tab === key ? ACCENT : "transparent",
                color: tab === key ? "#fff" : "#555",
                border: "none",
                padding: "10px 24px",
                fontFamily: "'Courier New', monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                cursor: "pointer",
                fontWeight: tab === key ? "700" : "400",
                transition: "all 0.15s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "32px" }}>
        {tab === "daily" ? (
          <DailyTab activeStep={activeStep} onToggle={handleToggle} />
        ) : null}
        {tab === "longterm" ? <LongTermTab /> : null}
      </div>
    </div>
  );
}
