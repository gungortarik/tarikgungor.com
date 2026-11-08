"use client";

import { useSyncExternalStore } from "react";

const formatters = {
  date: new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Toronto", month: "short", day: "2-digit", year: "numeric",
  }),
  time: new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit", timeZoneName: "short",
  }),
};

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 1000);
  return () => window.clearInterval(timer);
}

// A stable minute snapshot avoids unnecessary renders and a build-time timestamp.
const getSnapshot = () => Math.floor(Date.now() / 60_000) * 60_000;
const getServerSnapshot = () => null;

export function TorontoTime({ variant, className }: {
  variant: "date" | "time";
  className?: string;
}) {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <time
      className={`tabular-nums whitespace-nowrap ${className ?? ""}`}
      dateTime={now === null ? undefined : new Date(now).toISOString()}
      title="Eastern Time (Toronto)"
    >
      {now === null ? "—" : formatters[variant].format(now)}
    </time>
  );
}
