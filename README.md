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

## Akce

Akce se zapisují do `src/data/events.json` (typ `Event` v `src/data/events.ts`): `title`, `date` (`YYYY-MM-DD`), volitelně `start` a `end` (`HH:MM`, pražský čas), `place` a `url` (registrace). Sekce „následující akce“ ukazuje jen akce, které ještě neskončily, a tlačítko „Registrace na setkání“ v úvodu vede na nejbližší z nich. Stránka se obnovuje nejpozději minutu po konci akce; bez `end` se akce skryje po půlnoci.

## Ověření

```bash
pnpm lint
pnpm typecheck
pnpm build
```

