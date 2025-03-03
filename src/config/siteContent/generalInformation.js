const generalInformation = {
  // General Site Information
  // Name of the company used the site name
  companyName: "Polar Point HVAC",

  // Company Information used in the footer
  copyright: {
    year: new Date().getFullYear(),
    text: "All Rights Reserved",
  },

  // Footer titles
  footerTitles: [
    "Quick Links",
    "Business Hours",
    "Schedule",
    "After Hours Services",
    "Contact Info",
  ],

  // Company Contact Information used in different parts of the site (footer, buttons, contact uspage, etc.)
  companyAddress: {
    iconName: "MapMarkerOutline",
    fieldName: "Address",
    fieldContent: "1189 Silverton Rd Toms River, NJ 08755",
  },
  companyEmail: {
    iconName: "EmailOutline",
    fieldName: "Email",
    fieldContent: "billing@polarpointhvac.com",
  },
  companyPhone: {
    iconName: "PhoneOutline",
    fieldName: "Phone",
    fieldContent: "+17327361393",
  },
  businessHours: {
    schedule: {
      "Mon - Thu": "8 AM - 5 PM",
      Fri: "8 AM - 1 PM",
      Sat: "Closed",
      Sun: "Closed (limited availability at overtime rate)",
    },
    afterHours: "Available at 1.5x Rate",
  },

  // Pages information used in the site navigation
  quickLinks: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Services",
      url: "/services",
    },
    {
      id: 3,
      title: "Equipment",
      url: "/equipment",
    },
    {
      id: 4,
      title: "Contact Us",
      url: "/contact-us",
    },
  ],
};

export default generalInformation;
