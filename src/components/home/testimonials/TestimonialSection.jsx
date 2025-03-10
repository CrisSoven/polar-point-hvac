import TitleContentComponent from "../../common/TitleContentComponent";
import homeConfiguration from "../../../config/siteContent/homeConfiguration";
import ReviewCard from "./ReviewCard";

const OurServicesSection = () => (
  <TitleContentComponent
    title={homeConfiguration.testimonialsSection.title}
    subtitle={homeConfiguration.testimonialsSection.subtitle}
  >
    <ReviewCard />
  </TitleContentComponent>
);

export default OurServicesSection;
