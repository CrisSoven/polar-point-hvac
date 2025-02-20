import TitleContentComponent from "../../common/TitleContentComponent";
import ServicesGrid from "./ServicesGrid";
import servicesInformation from "../../../config/siteContent/servicesInformation";

const ServicesSection = () => (
  <TitleContentComponent
    main
    title={servicesInformation.servicesSection.title}
    subtitle={servicesInformation.servicesSection.subtitle}
  >
    <ServicesGrid />
  </TitleContentComponent>
);

export default ServicesSection;
