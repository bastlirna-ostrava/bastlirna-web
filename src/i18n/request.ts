import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => ({
  locale: "cs",
  messages: (await import("@/messages/cs.json")).default,
}));

