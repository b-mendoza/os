# SpendGuard Spend & Invoice Intelligence (Procurement / Finance) - Revised Business Plan (v2, Jan 2026)

#### Note on Revision Process

This draft updates the original plan based on feedback highlighting mismatches with El Salvador's SMB realities (e.g., low adoption of US ERPs like QuickBooks/Xero, prevalence of paper docs, manual DTE entry pains). We've shifted to a "LatAm-first, El Salvador wedge" focus, prioritizing accessibility for informal businesses via photo capture and DTE auto-fill. Decisions prioritize solo-founder feasibility (e.g., start with simple integrations/OCR), user education (rankings to build habits), and high-pain features (DTE automation to differentiate). Reasons: Market research shows 60-70% of Salvadoran SMBs use paper; manual DTE issuance is a top complaint in 2025-2026 contador forums. This reduces opportunity cost by starting mobile-first, testable as a side project.

## Target Customers

SMBs and mid-market companies in El Salvador (initial wedge), expanding to Mexico; finance teams, contadores, and owners handling AP/AR manually or with basic local ERPs.

#### Note

Narrowed from "mid-market + eProcurement platforms" to SMBs for realism—El Salvador's economy is SMB-heavy (per 2025 BCR data, ~90% of businesses <50 employees). Reason: Easier acquisition via word-of-mouth; mid-market can upsell later. Avoided broad "finance teams" to focus on pain points like paper docs.

## Core Value Proposition

Automatically digitize and match paper/digital invoices → POs → receipts via photo capture; flag anomalies/duplicates; auto-generate DTE credit notes for disputes; provide supplier rankings and semantic search for audits; educate users via confidence rankings to improve processes.

#### Note

Expanded from pure matching/anomaly to include photo OCR and DTE auto-fill as core hooks. Reason: Addresses feedback on physical/paper dominance; DTE auto-fill solves a verified daily hassle (e.g., 15-30 min per credit note), creating "wow" retention. Supplier rankings add community value without heavy ML upfront.

## AI Features (POC-Level)

- Mobile photo OCR for handwritten/printed invoices, POs, receipts (extract line items, VAT, totals, supplier info).
- Partial three-way matching with confidence ranking (e.g., 70% if receipt missing; educates on gaps without blocking).
- Embedding-based semantic search + supplier similarity for quick audits.
- Rules + basic ML anomaly detection (duplicates, unusual amounts); user-contributed supplier rankings for risk signals (community + internal history; public APIs later).
- Auto-fill and submission of DTE credit notes using matched data (pre-populate from PO/receipt/invoice; user reviews & signs via firma electrónica).

#### Note

Added photo OCR and DTE auto-fill as new pillars; made matching "partial" with rankings inspired by 1Password Watchtower. Reason: Overcomes paper barrier (valid concern); educates informally to gather better data over time. Kept ML light for POC—start rules-based, add embeddings via hosted LLM (e.g., OpenAI) to keep costs low.

## Minimal Technical & Data Requirements

- Inputs: 100–500 historical docs (photos/CSVs) for basic anomaly tuning (POC threshold lowered for small users).
- Stack: Python backend (Flask/Django), Postgres + vector DB (Pinecone free tier), hosted LLM for OCR/embeddings/summaries, mobile-first UI (React Native app for photo capture + web dashboard), Slack/Teams alerts.
- Integrations: Initial CSV ingestion; phased API sync with local ERPs (Haz Conta Fácil, Softland, JARVIS); MH DTE API for auto-submission (requires user firma token handling).

#### Note

Reduced data reqs from 500–10k to 100–500. Reason: Feedback on small invoice volumes in SMBs; enables quicker POC. Prioritized mobile/photo over ERP integrations first—builds user base, then add APIs. MH API is free/public, so low barrier (decision: handle signing via user prompt to avoid compliance risks).

## Go-to-Market & Sales Motion

Beta via local contador networks and SMB Facebook groups in El Salvador; partner with bookkeeping services for referrals; position as "painless DTE disputes + fraud shield" with free photo OCR trial.

#### Note

Shifted from "accounting firms" to informal networks. Reason: El Salvador's bookkeeping is fragmented/low-tech (per 2025-2026 X searches on "contadores El Salvador"); Facebook groups (e.g., "Contadores de El Salvador") have high engagement for tools. Free trial hooks paper users.

## Monetization

SaaS tiers by monthly doc volume ($10–50 base); add-ons for DTE auto-submit ($15/mo), premium anomaly + rankings ($20/mo), ERP connectors ($10/mo).

#### Note

Added DTE-specific add-on. Reason: High perceived value (saves hours); tiers encourage upgrades as users digitize more. Keeps base affordable for SMBs ($10 entry vs original's implied higher pricing).

## Market Size (Qualitative)

Every Salvadoran SMB processes invoices/DTE; ~200k registered taxpayers (MH 2025 stats); growing with 2024-2026 e-invoicing enforcement. Untapped for AI-assisted disputes in informal sector.

#### Note

Localized to El Salvador (wedge). Reason: Original was vague; focused here avoids overestimation. Expansion to Mexico (millions of CFDI users) post-POC.

## POC Validation Metrics

- Doc extraction accuracy ≥ 90% for key fields (totals, supplier, via photo OCR).
- Anomaly/ranking precision ≥ 55% (balanced for fewer false positives in small datasets); pilot uncovers real disputes.
- Time-to-DTE credit note reduced by ≥ 70% (from manual to auto-fill).
- User feedback on education: ≥ 60% report improved processes via rankings.

#### Note

Adjusted metrics down slightly for realism (e.g., 92% → 90% extraction). Added DTE-specific metric. Reason: Photo OCR can be noisier than clean scans; focus on time savings as key differentiator.

## Why Now (Facts)

- **DTE Mandates**: El Salvador's program fully enforced for all IVA-registered by 2024; 2025-2026 updates emphasize credit notes for disputes (MH guides). Manual issuance remains bottleneck.
- **Local Rails**: Transfer365 (24/7 real-time transfers) gaining traction; providers like Banco Agrícola expose APIs; useful for AP payouts post-matching.
- **US AP Tools Mismatch**: BILL/Tipalti costly for SMBs; local tools (Haz Conta) lack AI/DTE integration from procurement data.

#### Note

Updated rails from SPEI (Mexico-only) to Transfer365. Reason: Feedback correction; 2026 BanCentral data shows Transfer365 at 40% adoption. Kept "why now" focused on mandates—2026 sees compliance audits ramping up.

## Competitor Landscape

### Group: Local ERPs/Facturadores

- Haz Conta Fácil (basic OCR, DTE issuance, but manual entry heavy).
- Softland (full ERP, AP modules, but no auto-credit from matching).
- JARVIS ERP (DTE + some AI, but limited photo integration).
- FacturaYa/Acatha (DTE-focused, API-friendly, but no AP intelligence).

### Group: Regional/LatAm

- Alegra (Colombia-strong, DTE support, basic AP).
- Facturama (MX CFDI, but not SV-focused).

### Group: Incumbents (AP/IDP)

- BILL/Tipalti (US-centric, no local DTE).
- Rossum/Nanonets (OCR pros, but generic; no SV localization).

#### Note

Refocused on El Salvador locals over US/global. Reason: Original overlooked them; 2026 searches confirm they dominate but lack end-to-end AP-to-DTE flow.

## Narrative

The gap is an **El Salvador-first AP tool** that (1) digitizes paper via mobile photos; (2) runs partial AI matching with educational rankings; (3) auto-fills/submits DTE credit notes from disputes; (4) builds community supplier rankings; and (5) syncs with local ERPs/Transfer365. Locals handle DTE basics but miss procurement intelligence; US tools ignore paper/informality.

#### Note

Rewrote for wedge focus, incorporating new features. Reason: Ties discussion threads (photo, rankings, DTE) into cohesive story; emphasizes differentiation.

## Scores

Crowdedness **2** (few with AI+DTE auto); Dominance **1** (no leader in paper-to-DTE); Switching Cost **3** (sticky but photo ease lowers); Localization **5** (DTE/MH API native); Regulatory Defensibility **4** (MH certs); Solo-Founder Feasibility **4** (mobile-first, light ML).

#### Note

Improved feasibility from 3→4. Reason: New features leverage free APIs/open-source (e.g., EasyOCR); educational approach gathers data organically.

## Verdict: _Pursue (Top Pick)_

### Wedge

Start with El Salvador photo OCR + DTE credit auto-fill; match vs. paper POs/receipts; upsell supplier rankings and local payouts via Transfer365. Charge per-doc tier; expand to MX CFDI later.

#### Note

Kept "Pursue" but refined wedge to photo/DTE first. Reason: Aligns with discussion—mitigates paper/ERP concerns; positions as side-project viable while keeping $5k/mo job.
