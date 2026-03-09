# Code Conventions

## Factory Functions Over Classes

- Prefer `createFooProvider()` over `new FooProvider()`.

## TypeScript

- In interfaces, use function-property style for methods: `method: (...) => ReturnType`.

## Formatting

- Use `oxfmt`, not Prettier.
- Format a specific file with `pnpm oxfmt <file>`.
