import data from "./events.json";

export type Event = {
  title: string;
  /** ISO date, e.g. "2026-11-25" */
  date: string;
  /** Local Prague time "HH:MM" */
  start?: string;
  /** Local Prague time "HH:MM"; the event counts as upcoming until then (end of day if missing) */
  end?: string;
  place?: string;
  url?: string;
};

export const events: Event[] = data;

/** Converts a Prague wall-clock date and time to an absolute Date. */
const pragueTime = (date: string, time: string) => {
  const asUtc = new Date(`${date}T${time}:00Z`);
  const inPrague = new Date(asUtc.toLocaleString("en-US", { timeZone: "Europe/Prague" }));
  const inUtc = new Date(asUtc.toLocaleString("en-US", { timeZone: "UTC" }));
  return new Date(asUtc.getTime() - (inPrague.getTime() - inUtc.getTime()));
};

const endsAt = (event: Event) => pragueTime(event.date, event.end ?? "23:59");

/** Events that have not ended yet, soonest first. */
export const getUpcomingEvents = (now = new Date()) =>
  events.filter((event) => endsAt(event) > now).sort((a, b) => endsAt(a).getTime() - endsAt(b).getTime());

/** "18:00"–"21:00" → "18–21 h", "18:30"–"21:00" → "18:30–21 h" */
export const formatTime = ({ start, end }: Event) => {
  const short = (time: string) => time.replace(/:00$/, "");
  if (!start) return undefined;
  return `${short(start)}${end ? `–${short(end)}` : ""} h`;
};
