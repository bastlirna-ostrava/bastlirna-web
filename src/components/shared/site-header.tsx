import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const SiteHeader = async () => {
  const t = await getTranslations("nav");
  const site = await getTranslations("site");
  return (
    <header className="relative z-10 border-b border-primary/25 bg-background/85">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="font-mono text-base tracking-[-.05em] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-lg" aria-label={t("homeLabel")}>{site("nameFirst")}<span className="text-primary">_{site("nameSecond")}</span></Link>
        <nav className="flex items-center gap-4 text-xs sm:gap-7 sm:text-sm" aria-label="Hlavní navigace">
          <Link className="hidden text-white/80 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:block" href="/#program">{t("program")}</Link>
          <Link className="hidden text-white/80 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:block" href="/#o-bastlirne">{t("about")}</Link>
          <Link className="text-white/80 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="/qrcode">{t("qr")}</Link>
        </nav>
      </div>
    </header>
  );
};

