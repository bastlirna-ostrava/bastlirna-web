import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/shared/site-header";
import { TerminalRule } from "@/components/shared/terminal-rule";

const SITE_URL = "https://bastlirna-ostrava.vantuch.dev";

export const generateMetadata = async () => ({ title: (await getTranslations("qr"))("pageTitle") });

export default async function QrCodePage() {
  const t = await getTranslations("qr");
  const qr = await QRCode.toDataURL(SITE_URL, { errorCorrectionLevel: "H", margin: 2, width: 720, color: { dark: "#05080c", light: "#FFFFFF" } });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
        <div className="mx-auto grid w-full max-w-[480px] place-items-center border-2 border-dashed border-primary p-7 sm:p-12 lg:order-2"><div className="w-full bg-white p-4 sm:p-6"><Image src={qr} alt={t("alt")} width={720} height={720} unoptimized className="aspect-square w-full" /></div></div>
        <div className="lg:order-1"><TerminalRule /><h1 className="mt-8 max-w-[12ch] text-4xl leading-[1.1] tracking-[-.06em] sm:text-6xl">{t("title")}</h1><p className="mt-7 max-w-[38ch] text-sm leading-7 text-muted sm:text-base">{t("description")}</p><p className="mt-7 break-all text-sm text-primary">{t("url")}</p><div className="mt-10 flex flex-wrap gap-5"><Button asChild><a href={SITE_URL}>{t("open")} <span aria-hidden="true">↗</span></a></Button><Link href="/" className="inline-flex min-h-12 items-center border-b border-primary/60 text-sm text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{t("back")}</Link></div></div>
      </section>
    </main>
  );
}

