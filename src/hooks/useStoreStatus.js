import { useState, useEffect } from "react";
import { businessHours } from "../config/bussinessHours";

const useStoreStatus = () => {
  const [status, setStatus] = useState({
    title: "Loading...",
    subtitle: "",
    icon: "StoreClock",
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const parts = formatter.formatToParts(now);
      const weekday = parts.find((part) => part.type === "weekday")?.value;
      const currentHour = parts.find((part) => part.type === "hour")?.value;
      const currentMinute = parts.find((part) => part.type === "minute")?.value;
      const currentPeriod = parts.find(
        (part) => part.type === "dayPeriod"
      )?.value;

      const todaySchedule = businessHours[weekday];

      if (!todaySchedule.open || !todaySchedule.close) {
        if (weekday === "Sunday" && todaySchedule.note) {
          setStatus({
            title: "Closed",
            subtitle: `${todaySchedule.note}`,
            icon: "StoreClock",
          });
        } else {
          setStatus({
            title: "Closed",
            subtitle: `Closed Today (GMT-5)`,
            icon: "StoreRemove",
          });
        }
        return;
      }

      const parseTime = (timeString) => {
        const [hour, minute, period] = timeString.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === "PM" && hour24 !== 12) hour24 += 12;
        if (period === "AM" && hour24 === 12) hour24 = 0;
        return hour24 * 60 + parseInt(minute, 10);
      };

      const openTime = parseTime(todaySchedule.open);
      const closeTime = parseTime(todaySchedule.close);
      const currentTime = parseTime(
        `${currentHour}:${currentMinute} ${currentPeriod}`
      );

      if (currentTime >= openTime && currentTime < closeTime) {
        setStatus({
          title: "Open Now",
          subtitle: `Closes ${todaySchedule.close} (GMT-5)`,
          icon: "StoreCheck",
        });
      } else {
        if (weekday === "Friday") {
          setStatus({
            title: "Closed",
            subtitle: `Opens next business day`,
            icon: "StoreRemove",
          });
        } else {
          setStatus({
            title: "Closed",
            subtitle: `Opens ${todaySchedule.open} (GMT-5)`,
            icon: "StoreRemove",
          });
        }
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return status;
};

export default useStoreStatus;
