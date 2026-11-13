import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { DiscordIcon } from "@/components/shared/discord-icon";

export const DiscordAction = async ({ inviteUrl, variant = "default" }: { inviteUrl?: string; variant?: "default" | "outline" }) => {
  const t = await getTranslations("home");
  if (!inviteUrl) return <div className="flex flex-col items-start gap-2"><Button variant={variant} disabled><DiscordIcon className="size-5" />{t("join")}</Button><p className="text-xs text-muted">{t("inviteMissing")}</p></div>;
  return <Button asChild variant={variant}><a href={inviteUrl} target="_blank" rel="noopener noreferrer"><DiscordIcon className="size-5" />{t("join")}</a></Button>;
};

