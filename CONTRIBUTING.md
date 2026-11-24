# Contributing

Issues and pull requests are welcome. For larger changes, open an issue first to discuss the proposed direction.

## Local setup

```bash
pnpm install
pnpm dev
```

Keep site copy, navigation and feature content in `src/content/site.ts`. Add articles as MDX routes under `src/app/journal/`. Keep client components limited to interactions that require browser state.

Before opening a pull request, run:

```bash
pnpm typecheck
pnpm build
```

Describe the change and include screenshots for visual updates.
