import { HomePage } from "@/components/home/home-page";

// Re-render at most once a minute so finished events drop off and registration moves to the next one.
export const revalidate = 60;

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
