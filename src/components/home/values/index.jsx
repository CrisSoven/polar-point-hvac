import TitleContentComponent from "../../common/TitleContentComponent";
import homeConfiguration from "../../../config/siteContent/homeConfiguration";
import Values from "./Values";

const OurServicesSection = () => (
  <TitleContentComponent
    title={homeConfiguration.companyValues.title}
    subtitle={homeConfiguration.companyValues.subtitle}
  >
    <Values />
  </TitleContentComponent>
);

export default OurServicesSection;
