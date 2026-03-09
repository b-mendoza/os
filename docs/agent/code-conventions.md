# Code Conventions

## Imports

- Use the `#/` path alias for `src/` imports.

## File Naming

- Use `*.mod.ts` for module files.
- Use `*.test.ts` for test files.

## Design Preference

- Prefer factory functions over classes (for example, `createFooProvider()` over `new FooProvider()`).

## TypeScript

- Interface methods use function property style:
  - `method: (...) => ReturnType`
  - Avoid shorthand style in interfaces.
- This is enforced by `@typescript-eslint/method-signature-style`.
