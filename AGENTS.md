# Agent Guide

This repository is being repurposed. Treat old product-specific language as transitional, and prefer neutral descriptions unless the task or issue defines the new direction.

**Package manager:** `pnpm`

## Bootstrap

- Use the Node.js version in `.nvmrc`.
- If Node.js or `pnpm` is missing or on the wrong version, run `scripts/setup-node.sh` before doing anything else.
- The setup script installs `fnm`, enables corepack, selects the required Node.js version, and runs a smoke test (`lint`, `fix`, `test`, `test:coverage`, `build`).

## Essential For Every Task

- Run `pnpm run lint` after meaningful changes.
- Run `pnpm run test` when changing behavior or adding tests.
- Run `pnpm run build` when touching app wiring, routing, or build configuration.

## Current Stack

- TanStack Start with React 19 and TypeScript
- TanStack Router, React Query, and tRPC
- Vite and Tailwind CSS v4
- Vitest, Testing Library, ESLint, oxlint, and oxfmt

## Repo Notes

- The current app shell is intentionally minimal while the project direction is being reset.
- Prefer simple, direct implementations over speculative abstractions.
- Follow the repo docs before introducing new architecture or patterns.

## Progressive Disclosure

- [Architecture and server boundaries](docs/architecture.md)
- [Code conventions](docs/conventions.md)
- [Workflow and task scoping](docs/workflow.md)
