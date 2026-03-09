# Tooling

- Use the Node.js version in `.nvmrc`.
- If Node.js or `pnpm` is missing or on the wrong version, run `scripts/setup-node.sh` before doing anything else.

## Setup Script

`scripts/setup-node.sh`:

- installs `fnm`
- enables corepack
- selects the required Node.js version
- runs a smoke test:
  - `pnpm run lint`
  - `pnpm run fix`
  - `pnpm run test`
  - `pnpm run test:coverage`
  - `pnpm run build`
