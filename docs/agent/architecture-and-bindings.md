# Architecture And Bindings

## Server Functions vs tRPC Procedures

- Use server functions for small, simple operations.
- Use tRPC procedures for business logic and data fetching.

### Server functions (`createServerOnlyFn`)

- Use for simple validation and direct single-purpose operations.
- Wrap all server-only code with `createServerOnlyFn` from `@tanstack/react-start`.
- Existing usage includes environment access, formatters, storage, and bindings.

### tRPC procedures

- Use for database queries, business logic, and multi-step operations.
- Procedures are currently public; authenticated procedures will be added after Clerk setup.

## Application Bindings

- Server-side code must use request-scoped bindings via `getApplicationBindings()`.
- `getApplicationBindings()` returns `{ db, env, storage }`.
- Do not import these as globals.
