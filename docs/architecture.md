# Architecture

## Server Functions vs tRPC Procedures

Use server functions for small, direct server-only operations.
Use tRPC procedures for business logic, data fetching, and multi-step operations.

### Server functions (`createServerOnlyFn`)

- simple validations
- direct, single-purpose operations
- server-only wrappers such as env access or bindings

### tRPC procedures

- database queries
- business logic
- complex operations involving multiple steps
