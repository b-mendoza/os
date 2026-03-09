# Workflow And Task Scoping

## Simplicity First

- Avoid complex solutions for simple problems.
- Before implementation, check:
  - Can this be solved with fewer abstractions?
  - Is this over-engineering for hypothetical future requirements?
  - Would a junior developer understand this in 5 minutes?

## Task Management

- Create a GitHub issue for any multi-step or non-trivial task.

## Task Decomposition

- Break large tasks into smaller, independently mergeable, testable units.
- A well-scoped subtask:
  - Can be reviewed in isolation
  - Has a clear definition of done
  - Does not create blocking dependencies
  - Can be safely merged independently
