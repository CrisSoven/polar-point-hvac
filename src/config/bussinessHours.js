import generalInformation from "./siteContent/generalInformation";

export const businessHours = {
  Monday: { open: "9:00 AM", close: "5:00 PM" },
  Tuesday: { open: "9:00 AM", close: "5:00 PM" },
  Wednesday: { open: "9:00 AM", close: "5:00 PM" },
  Thursday: { open: "9:00 AM", close: "5:00 PM" },
  Friday: { open: "9:00 AM", close: "1:00 PM" },
  Saturday: { open: null, close: null },
  Sunday: {
    open: null,
    close: null,
    note: generalInformation.businessHours.afterHours,
  },
};
