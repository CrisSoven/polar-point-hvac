import TitleContentComponent from "../common/TitleContentComponent";
import contactUsInformation from "../../config/siteContent/contactUsInformation";

const ContactUsSection = () => (
  <TitleContentComponent
    main
    title={contactUsInformation.contactUsSection.title}
    subtitle={contactUsInformation.contactUsSection.subtitle}
  ></TitleContentComponent>
);

export default ContactUsSection;
