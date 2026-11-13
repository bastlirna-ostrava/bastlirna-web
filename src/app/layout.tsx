import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import "./globals.css";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("site");
  return {
    title: { default: t("name"), template: `%s | ${t("name")}` },
    description: t("description"),
    metadataBase: new URL("https://bastlirna-ostrava.vantuch.dev"),
    openGraph: { title: t("name"), description: t("description"), locale: "cs_CZ", type: "website" },
  };
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs" data-scroll-behavior="smooth"><body className="antialiased">{children}</body></html>;
}

