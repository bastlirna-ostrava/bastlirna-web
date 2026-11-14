# Bastlírna Ostrava

Krátký web pro ostravskou komunitu lidí, kteří něco staví. Obsahuje úvodní stránku s programem a stránku `/qrcode`.

## Spuštění

Vyžaduje Node.js 22+ a pnpm 11.6.0.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Do `DISCORD_INVITE_URL` v `.env.local` vložte pozvánku ve tvaru `https://discord.gg/...` nebo `https://discord.com/invite/...`. Bez platného odkazu stránka zobrazí informaci, že pozvánka přibude. Nasazení musí mít stejnou proměnnou prostředí.

Volitelně `EVENT_URL` (https odkaz na detail nejbližší akce, např. událost na Discordu). Bez něj se tlačítko „Detail akce“ v sekci programu nezobrazí.

## Ověření

```bash
pnpm lint
pnpm typecheck
pnpm build
```

