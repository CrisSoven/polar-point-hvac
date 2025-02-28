import { useState, useEffect } from "react";
import AppBarIcon from "./AppBarIcon";
import { businessHours } from "../../../config/bussinessHours";  

const ScheduleBarIcon = () => {
  const [status, setStatus] = useState({ title: "Loading...", subtitle: "" });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const { value: weekday } = formatter.formatToParts(now).find(part => part.type === "weekday");
      const { value: currentHour } = formatter.formatToParts(now).find(part => part.type === "hour");
      const { value: currentMinute } = formatter.formatToParts(now).find(part => part.type === "minute");

      const currentTime = parseInt(currentHour) * 60 + parseInt(currentMinute); 

      const todaySchedule = businessHours[weekday];
      if (!todaySchedule.open || !todaySchedule.close) {
        setStatus({ title: "Closed", subtitle: "Opens tomorrow" });
        return;
      }

      const [openHour, openMinute] = todaySchedule.open.split(":").map(Number);
      const [closeHour, closeMinute] = todaySchedule.close.split(":").map(Number);

      const openTime = openHour * 60 + openMinute;
      const closeTime = closeHour * 60 + closeMinute;

      if (currentTime >= openTime && currentTime < closeTime) {
        setStatus({ title: "Open Now", subtitle: `Closes: ${todaySchedule.close}` });
      } else {
        setStatus({ title: "Closed", subtitle: `Opens ${todaySchedule.open} tomorrow` });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return <AppBarIcon iconName="StoreClock" title={status.title} subtitle={status.subtitle} />;
};

export default ScheduleBarIcon;
