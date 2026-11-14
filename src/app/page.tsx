import { HomePage } from "@/components/home/home-page";

export default function Page() {
  const inviteUrl = process.env.DISCORD_INVITE_URL;
  const eventUrl = process.env.EVENT_URL;
  return (
    <HomePage
      inviteUrl={inviteUrl?.startsWith("https://discord.gg/") || inviteUrl?.startsWith("https://discord.com/invite/") ? inviteUrl : undefined}
      eventUrl={eventUrl?.startsWith("https://") ? eventUrl : undefined}
    />
  );
}

