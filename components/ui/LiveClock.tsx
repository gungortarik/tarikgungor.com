"use client";

import { useEffect, useState } from "react";

interface LiveClockProps {
  className?: string;
  showDate?: boolean;
}

export function LiveClock({ className = "", showDate = false }: LiveClockProps) {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Toronto",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
      ...(showDate ? { month: "short", day: "2-digit" } : {}),
    });

    const updateTime = () => {
      setTimeString(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [showDate]);

  if (!timeString) {
    return (
      <span className={`inline-block tabular-nums font-mono opacity-0 ${className}`} aria-hidden="true">
        --:-- EST
      </span>
    );
  }

  return (
    <span className={`tabular-nums font-mono ${className}`} title="Eastern Time (Toronto)">
      {timeString}
    </span>
  );
}
