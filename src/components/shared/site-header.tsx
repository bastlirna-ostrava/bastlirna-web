import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LogoMark } from "@/components/shared/logo-mark";
import { DiscordIcon } from "@/components/shared/discord-icon";
import { GithubIcon } from "@/components/shared/github-icon";
import { getDiscordInviteUrl, getGithubUrl } from "@/lib/links";

const iconLinkClass = "inline-flex size-9 items-center justify-center border border-primary/40 text-white/80 transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export const SiteHeader = async () => {
  const t = await getTranslations("nav");
  const site = await getTranslations("site");
  const githubUrl = getGithubUrl();
  const discordUrl = getDiscordInviteUrl();
  return (
    <header className="relative z-10 border-b border-primary/25 bg-background/85">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group inline-flex items-center gap-3 font-mono text-base tracking-[-.05em] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-lg" aria-label={t("homeLabel")}><LogoMark className="h-6 w-8 shrink-0 group-hover:[&_rect]:fill-amber" /><span>{site("nameFirst")}<span className="text-primary">_{site("nameSecond")}</span></span></Link>
        <nav className="flex items-center gap-4 text-xs sm:gap-7 sm:text-sm" aria-label="Hlavní navigace">
          <Link className="hidden text-white/80 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:block" href="/#o-bastlirne">{t("about")}</Link>
          <Link className="text-white/80 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="/qrcode">{t("qr")}</Link>
          {(githubUrl || discordUrl) && (
            <div className="flex items-center gap-2">
              {githubUrl && <a className={iconLinkClass} href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={t("github")} title={t("github")}><GithubIcon className="size-4" /></a>}
              {discordUrl && <a className={iconLinkClass} href={discordUrl} target="_blank" rel="noopener noreferrer" aria-label={t("discord")} title={t("discord")}><DiscordIcon className="size-4" /></a>}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

