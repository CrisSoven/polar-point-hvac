import afterHoursValue from "../afterHoursValue";

/**
 * General information of the website.
 * This file allows to modify details such as the company name,
 * business hours, contact information, and navigation links without altering the core code.
 */
const generalInformation = {
  /**
   * Company name used throughout the website.
   * Displayed in the navigation bar, site title, etc.
   */
  companyName: "Polar Point HVAC",

  /**
   * Copyright information displayed in the website footer.
   */
  copyright: {
    year: new Date().getFullYear(), // Dynamic year based on the current date
    text: "All Rights Reserved", // Copyright text
  },

  /**
   * Footer section titles.
   * Can be modified to change the headings displayed at the bottom of the site.
   */
  footerTitles: [
    "Quick Links",          // Quick navigation links
    "Business Hours",       // Company working hours
    "Schedule",             // Scheduling information
    "After Hours Services", // Available outside business hours
    "Contact Info",         // Company contact details
  ],

  /**
   * Company contact information used in various parts of the site,
   * such as the footer, contact buttons, and the "Contact Us" page.
   */
  companyAddress: {
    iconName: "MapMarkerOutline", // Icon representing the address
    fieldName: "Address", // Field label
    fieldContent: "1189 Silverton Rd Toms River, NJ 08755", // Company address
  },
  companyEmail: {
    iconName: "EmailOutline", // Icon representing email
    fieldName: "Email", // Field label
    fieldContent: "billing@polarpointhvac.com", // Contact email address
  },
  companyPhone: {
    iconName: "PhoneOutline", // Icon representing phone number
    fieldName: "Phone", // Field label
    fieldContent: "+17327361393", // Contact phone number
  },

  /**
   * Company business hours.
   * You can update these values to reflect any changes in working hours.
   */
  businessHours: {
    schedule: {
      "Mon - Thu": "9 AM - 5 PM", // Monday to Thursday
      Fri: "9 AM - 1 PM", // Friday
      Sat: "Closed", // Saturday closed
      Sun: "Closed (limited availability at overtime rate)", // Sunday with limited availability
    },
    afterHours: `Available at ${afterHoursValue}x Rate`, // Extra charge for after-hours service
  },

  /**
   * Quick links used for website navigation (App bar and fotter).
   * These links appear in the main menu and can be easily updated.
   */
  quickLinks: [
    {
      id: 1,
      title: "Home", // Link name
      url: "/", // URL for the home page
    },
    {
      id: 2,
      title: "Services", // Link name
      url: "/services", // URL for the services page
    },
    {
      id: 3,
      title: "Equipment", // Link name
      url: "/equipment", // URL for the equipment page
    },
    {
      id: 4,
      title: "Contact Us", // Link name
      url: "/contact-us", // URL for the contact page
    },
  ],
};

export default generalInformation;
