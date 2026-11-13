import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { DiscordAction } from "@/components/shared/discord-action";
import { SiteHeader } from "@/components/shared/site-header";
import { TerminalRule } from "@/components/shared/terminal-rule";
import styles from "./home-page.module.css";

const CircuitTrace = () => (
  <svg viewBox="0 0 210 380" fill="none" className="pointer-events-none absolute right-[39%] top-16 hidden h-[380px] w-[210px] text-primary/30 lg:block" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1">
      <path d="M205 0v76l-43 43v51l-53 53v75l-45 45v37" />
      <path d="M175 0v65l-42 42v58l-55 55v65l-52 52v43" />
      <path d="M145 0v55l-42 42v56l-52 52v80L0 336" />
      <path d="M205 125h-40M132 165h-30M77 249h-34" />
    </g>
    <g fill="#050807" stroke="currentColor"><circle cx="162" cy="119" r="4" /><circle cx="103" cy="165" r="4" /><circle cx="78" cy="249" r="4" /><circle cx="26" cy="337" r="4" /></g>
  </svg>
);

export const HomePage = async ({ inviteUrl }: { inviteUrl?: string }) => {
  const t = await getTranslations("home");
  const site = await getTranslations("site");
  const program = [1, 2, 3].map((number) => ({
    number,
    title: t(`program${["One", "Two", "Three"][number - 1]}Title`),
    text: t(`program${["One", "Two", "Three"][number - 1]}Text`),
  }));

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <section className="relative min-h-[670px] overflow-hidden border-b border-primary/30 sm:min-h-[720px]">
        <div className={`${styles.heroPhoto} absolute inset-0`} aria-hidden="true" />
        <div className={`${styles.grid} pointer-events-none absolute inset-0`} aria-hidden="true" />
        <CircuitTrace />
        <div className="relative mx-auto flex min-h-[670px] max-w-7xl flex-col justify-between px-5 py-10 sm:min-h-[720px] sm:px-8 sm:py-14 lg:px-12">
          <TerminalRule />
          <div className="max-w-[690px] pb-10 sm:pb-14">
            <h1 className="text-[clamp(3.4rem,7.5vw,6.8rem)] leading-[.98] font-normal tracking-[-.07em]"><span className="block">{site("nameFirst")}</span><span className="block text-primary">{site("nameSecond")}</span></h1>
            <p className="mt-8 max-w-[34ch] text-base leading-7 text-white sm:text-xl sm:leading-8">{t("intro")}</p>
            <p className="mt-7 text-sm leading-6 text-amber sm:text-base">{t("firstEvent")}</p>
            <p className="mt-1 max-w-[40ch] text-sm leading-6 text-white/70">{t("firstEventDetail")}</p>
            <div className="mt-8 flex flex-wrap items-start gap-5"><DiscordAction inviteUrl={inviteUrl} /><Link href="/#program" className="inline-flex min-h-12 items-center gap-2 border-b border-primary/60 px-1 text-sm text-primary hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{t("seeProgram")} <span aria-hidden="true">↓</span></Link></div>
          </div>
          <div className="flex items-center gap-3 border-t border-primary/30 pt-5 text-xs text-primary sm:text-sm"><span aria-hidden="true">$</span><span className="h-px w-10 bg-primary/60" />{t("topics")}</div>
        </div>
      </section>

      <section id="program" className="relative scroll-mt-8 border-b border-primary/25 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className={`${styles.grid} pointer-events-none absolute inset-0`} aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><TerminalRule /><h2 className="mt-8 max-w-[11ch] text-4xl leading-[1.08] tracking-[-.06em] sm:text-6xl">{t("programTitle")}</h2><p className="mt-7 max-w-[42ch] text-sm leading-7 text-muted sm:text-base">{t("programIntro")}</p><p className="mt-7 text-sm text-amber">{t("firstEvent")}</p></div>
          <div className="border-t border-primary/50">
            {program.map((item) => <article key={item.number} className="grid gap-4 border-b border-primary/30 py-7 sm:grid-cols-[54px_1fr] sm:gap-7 sm:py-9"><span className="text-sm text-primary">0{item.number}</span><div><h3 className="text-xl leading-tight text-white sm:text-2xl">{item.title}</h3><p className="mt-3 max-w-[45ch] text-sm leading-7 text-muted">{item.text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="o-bastlirne" className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><TerminalRule /><div><h2 className="max-w-[18ch] text-4xl leading-[1.1] tracking-[-.06em] sm:text-5xl">{t("aboutTitle")}</h2><p className="mt-7 max-w-[60ch] text-sm leading-8 text-muted sm:text-base">{t("aboutText")}</p></div></div></section>

      <footer className="border-t border-primary/40 bg-surface px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-9 lg:flex-row lg:items-end"><div><TerminalRule /><h2 className="mt-6 max-w-[25ch] text-2xl leading-tight sm:text-3xl">{t("footerTitle")}</h2><p className="mt-4 max-w-[55ch] text-sm leading-7 text-muted">{t("footerText")}</p></div><DiscordAction inviteUrl={inviteUrl} variant="outline" /></div></footer>
    </main>
  );
};

