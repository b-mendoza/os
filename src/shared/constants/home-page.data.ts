interface DailyTask {
  tier: string;
  label: string;
  color: string;
  bg: string;
  time: string;
  rule: string;
  question: string;
  examples: string[];
}

interface LifeArea {
  area: string;
  priority: string;
  allocation: string;
  color: string;
  bg: string;
  focus: string;
  weekly: string[];
  monthly: string[];
  signal: string;
}

interface DecisionStep {
  label: string;
  q: string;
  yes: string;
}

interface ReviewItem {
  label: string;
  desc: string;
}

export const DAILY_TASKS: DailyTask[] = [
  {
    tier: "1",
    label: "DO FIRST",
    color: "#FF4500",
    bg: "#1a0800",
    time: "Peak focus block · 2-3 hrs",
    rule: "Never skip this block. Your job, inbox, and Slack can wait.",
    question: "Does this directly advance a venture?",
    examples: [
      "Shipping MVP features",
      "YC application",
      "Pivot decision",
      "Product roadmap",
      "Building prototypes",
    ],
  },
  {
    tier: "2",
    label: "DO AFTER",
    color: "#FFB800",
    bg: "#1a1000",
    time: "60-90 min · Hard timebox",
    rule: "Stop when the clock runs out. This block must never eat into Tier 1.",
    question: "Does this directly earn money or open a high-paying door?",
    examples: [
      "Targeted job apps",
      "Networking",
      "LinkedIn content",
      "Client outreach",
      "Interview prep",
    ],
  },
  {
    tier: "3",
    label: "DELEGATE TO AI",
    color: "#00C2FF",
    bg: "#001a1f",
    time: "Batched · Async",
    rule: "If you've done it manually twice, automate it now. Build the system once.",
    question: "Can an AI agent do 80% of this?",
    examples: [
      "Cover letters",
      "Research summaries",
      "Code boilerplate",
      "Scheduling",
      "Formatting docs",
    ],
  },
  {
    tier: "4",
    label: "CUT / POSTPONE",
    color: "#666",
    bg: "#111",
    time: "Not this week",
    rule: "Ask: what's the real cost of NOT doing this today? Usually: nothing.",
    question: "None of the above?",
    examples: [
      "HackerRank with no interview",
      "Perfectionism on unshipped work",
      "Non-urgent admin",
      "Low-signal meetings",
    ],
  },
];

export const LIFE_AREAS: LifeArea[] = [
  {
    area: "VENTURES",
    priority: "P1",
    allocation: "40%",
    color: "#FF4500",
    bg: "#1a0800",
    focus:
      "Your only path to asymmetric upside. Treat it like a second job with a dedicated daily shift. On workdays this % will be lower — protect it on mornings and weekends.",
    weekly: [
      "Ship or decide something every week — no weeks with zero output",
      "One key metric to move per venture",
      "Define your own signal threshold: when does no traction mean kill/pivot?",
    ],
    monthly: [
      "Review: Is this venture worth continuing?",
      "One experiment per month per active venture",
    ],
    signal:
      "You're under-investing if a week passes with no tangible venture output.",
  },
  {
    area: "WORK / JOB SEARCH",
    priority: "P2",
    allocation: "30%",
    color: "#FFB800",
    bg: "#1a1000",
    focus:
      "Your current job is cash flow. Job search is your upgrade lever. Both deserve attention — but neither should crowd out P1.",
    weekly: [
      "3-5 targeted applications (quality > volume)",
      "One networking interaction",
      "Keep current job stable — don't burn bridges",
    ],
    monthly: [
      "Audit: Am I getting interviews? Adjust if not",
      "One salary/offer benchmark check",
    ],
    signal:
      "You're over-investing here if it's eating into your peak-focus venture block.",
  },
  {
    area: "LEARNING",
    priority: "P3",
    allocation: "15%",
    color: "#00C2FF",
    bg: "#001a1f",
    focus:
      "Only learn what unlocks P1 or P2 faster. Learning for its own sake is a trap right now.",
    weekly: [
      "30 min/day max — consistent beats binge",
      "Apply what you learn immediately to a venture",
    ],
    monthly: [
      "Is this course/resource useful in the next 30 days? If not, pause it",
    ],
    signal: "You're over-learning if you're consuming without shipping.",
  },
  {
    area: "PERSONAL",
    priority: "P4",
    allocation: "15%",
    color: "#888",
    bg: "#111",
    focus:
      "Non-negotiable maintenance. Energy, health, and relationships are infrastructure — not rewards.",
    weekly: [
      "Exercise, sleep, nutrition — protect these as inputs, not outcomes",
      "One meaningful personal interaction",
    ],
    monthly: ["Check: Am I burning out? Adjust intensity if yes"],
    signal:
      "You're neglecting this if your focus and energy are declining week over week.",
  },
];

export const DECISION_STEPS: DecisionStep[] = [
  {
    label: "1.",
    q: "Does this move a venture forward?",
    yes: "→ Tier 1. Do it first, with your best energy.",
  },
  {
    label: "2.",
    q: "Does this directly earn money or open a high-paying door?",
    yes: "→ Tier 2. Timebox to 90 min max.",
  },
  {
    label: "3.",
    q: "Can an AI agent do 80% of this?",
    yes: "→ Tier 3. Build the system, don't do it manually.",
  },
  {
    label: "4.",
    q: "None of the above?",
    yes: "→ Tier 4. Cut it or schedule it for a specific future date.",
  },
];

export const REVIEW_CADENCE: ReviewItem[] = [
  {
    label: "WEEKLY",
    desc: "Every Sunday: Did I protect my peak-focus block? Did I ship anything for a venture?",
  },
  {
    label: "MONTHLY",
    desc: "1st of each month: Does my actual time match my stated priorities? If not, diagnose why.",
  },
  {
    label: "QUARTERLY",
    desc: "Every 3 months: Kill, pivot, or double-down on each venture. Adjust job search strategy.",
  },
];
