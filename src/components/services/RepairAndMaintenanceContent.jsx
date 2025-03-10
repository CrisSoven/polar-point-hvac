import TitleContentComponent from "../common/TitleContentComponent";
import RowContent from "./RowContent";
import servicesInformation from "../../config/siteContent/servicesInformation";
import SubtitleContent from "./SubtitleContent";

const HVACContent = () => (
  <TitleContentComponent
    main
    title={servicesInformation.repairAndMaintenancePage.title}
    subtitle={servicesInformation.repairAndMaintenancePage.subtitle}
  >
    {servicesInformation.repairAndMaintenancePage.content.map(
      (content, index) => (
        <>
          <SubtitleContent
            key={index}
            subtitle={content.subtitle}
            text={content.content}
          />
          <RowContent
            key={index}
            image={content.image}
            text={content.text}
            direction={content.direction}
          />
        </>
      )
    )}
  </TitleContentComponent>
);

export default HVACContent;
