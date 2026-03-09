# Agent Guide

El Salvador-first spend and invoice intelligence app focused on photo OCR, 3-way matching, and DTE automation for SMB workflows.

**Package manager:** `pnpm`

## Bootstrap

If Node.js (see `.nvmrc`) or `pnpm` is not installed or not at the expected version, run `scripts/setup-node.sh` before doing anything else. The script installs fnm, the correct Node.js version, enables corepack, and runs a full smoke test (lint, fix, test, coverage, build).

## Essential For Every Task

- Run quality checks with `pnpm run lint` (`oxfmt` + `tsc` + `eslint`).

## Progressive Disclosure

- [Architecture and server boundaries](docs/architecture.md)
- [Code conventions](docs/conventions.md)
- [Workflow and task scoping](docs/workflow.md)
