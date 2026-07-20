"use client";

import { weddingInfo } from "@/lib/contstants";
import { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <span className="font-bold">Time's up!</span>;
  }

  return (
    <div className="flex gap-4">
      <div className="countdown-item">
        <span className="text-3xl sm:text-4xl font-bold">{zeroPad(days)}</span>
        <span className="text-xs">Days</span>
      </div>

      <div className="countdown-item">
        <span className="text-3xl sm:text-4xl font-bold">{zeroPad(hours)}</span>
        <span className="text-xs">Hours</span>
      </div>

      <div className="countdown-item">
        <span className="text-3xl sm:text-4xl font-bold">{zeroPad(minutes)}</span>
        <span className="text-xs">Mins</span>
      </div>

      <div className="countdown-item">
        <span className="text-4xl font-bold">{zeroPad(seconds)}</span>
        <span className="text-xs">Secs</span>
      </div>
    </div>
  );
};

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Countdown
      date={new Date(weddingInfo.countdownDate)}
      renderer={renderer}
    />
  );
}