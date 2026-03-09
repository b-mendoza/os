# Architecture Decisions

## Server Functions vs tRPC Procedures

Use server functions for small, simple operations. Use tRPC procedures for business logic and data fetching.

**Server functions (`createServerOnlyFn`):**

- Simple validations
- Direct, single-purpose operations
- Wraps all server-only code (from `@tanstack/react-start`). Used in 10+ files for env access, formatters, storage, and bindings.

**tRPC procedures:**

- Database queries (fetching documents, sessions)
- Business logic
- Complex operations involving multiple steps
- All procedures are public for now; authenticated procedures will be added after Clerk setup

## Application Bindings

Request-scoped DI via `AsyncLocalStorage`. All server-side code calls `getApplicationBindings()` which returns `{ db, env, storage }`. Never import these as globals.
