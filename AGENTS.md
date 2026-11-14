# Bastlírna Ostrava

This project follows the [shared AGENTS.md base](https://github.com/TurniXXD/agents-md/blob/main/AGENTS.md).

Project-specific decisions:

- This is a short Czech-only presentation site. Keep the implementation small and frontend-only.
- The Discord invitation comes from `DISCORD_INVITE_URL`; never commit an actual invitation.
- Event time and venue must be confirmed before they are published.
- Use the supplied Canva presentation as the direct visual reference: near-black, bright cyan (#2FD6FF, replaced the original green so the site stays distinct from a green/black competitor), amber, monospaced type, technical traces, and dark workshop imagery. The Raphe manual informs voice and accessibility; this project's visual identity follows the presentation. Headings use sentence case and no eyebrow labels.


<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
