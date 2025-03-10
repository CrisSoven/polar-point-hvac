/**
 * Business hours configuration for determining when the company is open or closed.
 * This configuration is independent of the `businessHours` in `generalInformation.js`
 * and is used specifically for calculating operational hours.
 *
 * Each day follows the format:
 * - open: Opening time (string, e.g., "9:00 AM"), or null if closed.
 * - close: Closing time (string, e.g., "5:00 PM"), or null if closed.
 * - note: (Optional) Additional information if applicable, such as after-hours availability.
 */

import generalInformation from "./siteContent/generalInformation";

export const businessHours = {
  Monday: { open: "9:00 AM", close: "5:00 PM" },
  Tuesday: { open: "9:00 AM", close: "5:00 PM" },
  Wednesday: { open: "9:00 AM", close: "5:00 PM" },
  Thursday: { open: "9:00 AM", close: "5:00 PM" },
  Friday: { open: "9:00 AM", close: "1:00 PM" },
  Saturday: { open: null, close: null }, // Closed all day
  Sunday: {
    open: null,
    close: null,
    note: generalInformation.businessHours.afterHours, // After-hours service available
  },
};
