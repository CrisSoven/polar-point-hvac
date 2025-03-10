/**
 * Contact Us Page Content Configuration
 * 
 * This file contains all the content displayed on the "Contact Us" section.
 * Any modifications related to the contact page should be made here.
 */

import generalInformation from "./generalInformation";
import afterHoursValue from "../afterHoursValue";

const contactUsInformation = {
  // Contact Us Section Information
  contactUsSection: {
    title: "Contact Us",
    subtitle:
      "Contact us today for your HVAC needs. You can call, WhatsApp, text, email, or fill out the form, our team is ready to assist you with professional and reliable solutions.",
  },

  // After Hours Service Information
  // This message informs users about the after-hours service rate.
  // The value of afterHoursValue determines the multiplier for the after-hours service fee.
  afterHours: `After hours service is available at a rate of ${afterHoursValue} times.`,

  // WhatsApp Contact Information
  whatsAppUs: {
    phoneNumber: generalInformation.companyPhone.fieldContent, // Uses the company phone number from general information
    message: "test", // Default message when initiating a WhatsApp chat (can be customized)
  },

  // Email Contact Information
  emailUs: {
    email: generalInformation.companyEmail.fieldContent, // Uses the company email from general information
    subject: "Request for information", // Default email subject when contacting via email
    body: "Hello, I would like to obtain more details about your services.", // Default email body message
  },
};

export default contactUsInformation;
