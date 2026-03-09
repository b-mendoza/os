# Spend Guard

This repository is in transition.

The previous business-plan content has been removed, and the app is currently a lightweight TanStack Start codebase being repurposed for its next product direction.

## Current Status

- The product scope is being reset.
- The home route is a placeholder while the new experience is defined.
- The repo is ready to evolve from this baseline rather than preserving the old intake flow.

## Tech Stack

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- TanStack React Query
- tRPC
- Vite
- Tailwind CSS v4
- Vitest and Testing Library

## Getting Started

1. Use the Node.js version in `.nvmrc`.
2. If Node.js or `pnpm` is missing, run `scripts/setup-node.sh`.
3. Install dependencies with `pnpm install`.
4. Start local development with `pnpm run dev`.

## Common Commands

- `pnpm run dev` - start the development server
- `pnpm run build` - create a production build
- `pnpm run lint` - run formatting, linting, and type checks
- `pnpm run fix` - apply available autofixes
- `pnpm run test` - run the test suite
- `pnpm run test:coverage` - run tests with coverage
- `pnpm run preview` - preview the production build locally

## Project Structure

- `src/routes` - route definitions and route components
- `src/shared` - shared libraries, constants, and utilities
- `src/tests` - test setup and shared test helpers
- `docs` - architecture, conventions, and workflow notes
- `.github/workflows` - CI workflows

## Additional Docs

- `docs/architecture.md`
- `docs/conventions.md`
- `docs/workflow.md`
