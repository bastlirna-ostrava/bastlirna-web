# Ostravská Bastlírna

Krátký web pro ostravskou komunitu lidí, kteří něco staví. Obsahuje úvodní stránku a stránku `/qrcode`.

## Spuštění

Vyžaduje Node.js 22+ a pnpm 11.6.0.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Do `DISCORD_INVITE_URL` v `.env.local` vložte pozvánku ve tvaru `https://discord.gg/...` nebo `https://discord.com/invite/...`. Bez platného odkazu stránka zobrazí informaci, že pozvánka přibude. Nasazení musí mít stejnou proměnnou prostředí.

Volitelně `EVENT_URL` (https odkaz na detail nejbližší akce, např. událost na Discordu). Bez něj se tlačítko „Detail akce“ v úvodu nezobrazí.

Volitelně `REGISTRATION_URL` (https odkaz na registraci na akci). S ním se v úvodu zobrazí tlačítko „Registrace na setkání“ a tlačítko Discordu v úvodu přejde do obrysové varianty.

## Ověření

```bash
pnpm lint
pnpm typecheck
pnpm build
```

