import TitleContentComponent from "../common/TitleContentComponent";
import Services from "../common/Services";
import homeConfiguration from "../../config/siteContent/homeConfiguration";

const OurServicesSection = () => (
  <TitleContentComponent
    title={homeConfiguration.servicesSection.title}
    subtitle={homeConfiguration.servicesSection.subtitle}
  >
    <Services />
    
  </TitleContentComponent>
);

export default OurServicesSection;
