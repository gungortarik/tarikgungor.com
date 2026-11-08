"use client";

import { useEffect, useState } from "react";

export function LiveDate({ className = "" }: { className?: string }) {
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Toronto",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const update = () => {
      // Formats as "NOV 03, 2026"
      setDateString(formatter.format(new Date()).toUpperCase());
    };

    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  if (!dateString) {
    return (
      <span className={`tabular-nums font-mono opacity-0 ${className}`} aria-hidden="true">
        NOV 03, 2026
      </span>
    );
  }

  return (
    <span className={`tabular-nums font-mono ${className}`} title="Eastern Time (Toronto)">
      {dateString}
    </span>
  );
}
