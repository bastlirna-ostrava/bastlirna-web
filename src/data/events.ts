import data from "./events.json";

export type Event = {
  title: string;
  /** ISO date, e.g. "2026-11-25" */
  date: string;
  time?: string;
  place?: string;
  url?: string;
};

export const events: Event[] = data;
