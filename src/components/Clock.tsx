import { useEffect, useState } from "react";

// Live HH:MM:SS clock in IST, top-right corner — matches the reference nav.
const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed right-4 top-4 z-50 text-sm text-muted-foreground md:right-6"
      aria-hidden="true"
    >
      {time}
    </div>
  );
};

export default Clock;
