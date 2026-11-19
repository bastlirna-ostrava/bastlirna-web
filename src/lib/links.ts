// External community links come from the environment so invitations never land in the repository.

export const getDiscordInviteUrl = () => {
  const url = process.env.DISCORD_INVITE_URL;
  return url?.startsWith("https://discord.gg/") || url?.startsWith("https://discord.com/invite/") ? url : undefined;
};

export const getGithubUrl = () => {
  const url = process.env.GITHUB_URL;
  return url?.startsWith("https://github.com/") ? url : undefined;
};
