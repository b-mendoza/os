# Code Conventions

## Factory Functions Over Classes

Use `createFooProvider()` not `new FooProvider()`.

## TypeScript

Interface methods use function property style: `method: (...) => ReturnType` (not shorthand). Enforced by `@typescript-eslint/method-signature-style`.

## Formatting

Uses oxfmt (not Prettier). Format specific files with `pnpm oxfmt <file>`.
