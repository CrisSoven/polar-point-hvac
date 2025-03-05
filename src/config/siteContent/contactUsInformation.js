import generalInformation from "./generalInformation";
import afterHoursValue from "../afterHoursValue";

const contactUsInformation = {
  contactUsSection: {
    title: "Contact Us",
    subtitle:
      "Contact us today for your HVAC needs. You can call, WhatsApp, text, email, or fill out the form, our team is ready to assist you with professional and reliable solutions.",
  },
  afterHours: `After hours services is available at rate of ${afterHoursValue} times.`,
  whatsAppUs: {
    phoneNumber: generalInformation.companyPhone.fieldContent,
    message: "test",
  },
  emailUs: {
    email: generalInformation.companyEmail.fieldContent,
    subject: "Request for information",
    body: "Hello, I would like to obtain more details about your services.",
  },
};

export default contactUsInformation;
