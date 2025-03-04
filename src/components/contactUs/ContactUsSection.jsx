import TitleContentComponent from "../common/TitleContentComponent";
import contactUsInformation from "../../config/siteContent/contactUsInformation";
import ContactInfoSection from "./ContactInfoSection";

const ContactUsSection = () => (
  <TitleContentComponent
    main
    title={contactUsInformation.contactUsSection.title}
    subtitle={contactUsInformation.contactUsSection.subtitle}
  >
    <ContactInfoSection />
  </TitleContentComponent>
);

export default ContactUsSection;
