# Use Remix with the Vite build pipeline

- Status: Accepted
- Scope: Ninetailed Remix Example

## Context

The example needs a compact full-stack application with server rendering and a current local development workflow.

## Decision

Build and serve the example with Remix's Vite integration.

## Consequences

Routing changes belong under app/routes, and build plus typecheck should be run before publishing example updates.

