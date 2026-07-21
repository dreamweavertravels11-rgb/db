# Decoration Kingdom

A party/event decoration website with a React + Vite frontend and an Express API backend, organized as a pnpm monorepo.

## Project Structure

- `artifacts/decoration-kingdom/` — React + Vite frontend (Tailwind CSS, shadcn/ui, Wouter routing, TanStack Query)
- `artifacts/api-server/` — Express 5 backend (TypeScript, Drizzle ORM, Pino logging)
- `lib/` — Shared libraries:
  - `lib/api-spec/` — OpenAPI spec + codegen
  - `lib/api-zod/` — Generated Zod schemas
  - `lib/api-client-react/` — Generated TanStack Query hooks
  - `lib/db/` — Drizzle ORM database schema & client

## How to Run

Both services start automatically via configured workflows.

- **Frontend** (`artifacts/decoration-kingdom: web`): `PORT=5173 BASE_PATH=/ pnpm --filter @workspace/decoration-kingdom run dev`
- **API Server** (`artifacts/api-server: API Server`): `PORT=8080 pnpm --filter @workspace/api-server run dev`

Install dependencies: `pnpm install` (run from workspace root)

## User Preferences

_None recorded yet._
