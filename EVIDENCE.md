# Evidence and Technical Scope

## Interactive frontend source

This public repository includes the original static TypeScript frontend from the private Community OS repository: application state, channel navigation, message interactions, moderation surfaces, local persistence, and styles. Seeded names, messages, and activity are demonstration data.

```bash
npm ci
npm run check
npm run build
python -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Open `http://127.0.0.1:8000`. Voice, streaming, payment, and external integration controls are simulated interface behavior, not production services. This is an independent project with no affiliation to Discord.

## Publication adaptations

- Added a pinned local TypeScript dependency and a portable Node.js asset-copy script in place of machine-specific PowerShell wrappers.
- Renamed the entry file to `src/main.ts` and used an explicit `.js` import for browser module loading.
- Updated the display title to Community OS.
- Excluded the private backend-oriented starter, internal runbooks, CI configuration, and operational history.

See [validation](VALIDATION.md). The public code is the frontend prototype workstream; the private starter remains part of the same project, described in the case study.
