import TitleContentComponent from "../../common/TitleContentComponent";
import WhyChooseUsKeyPoints from "./WhyChooseUsKeyPoints";
import servicesInformation from "../../../config/siteContent/servicesInformation";

const WhyChooseUs = () => (
  <TitleContentComponent
    main
    title={servicesInformation.whyChooseUsSection.title}
    subtitle={servicesInformation.whyChooseUsSection.subtitle}
  >
    <WhyChooseUsKeyPoints />
  </TitleContentComponent>
);

export default WhyChooseUs;
