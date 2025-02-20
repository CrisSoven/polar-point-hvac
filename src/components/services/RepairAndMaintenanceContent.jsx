import TitleContentComponent from "../common/TitleContentComponent";
import RowContent from "./RowContent";
import servicesInformation from "../../config/siteContent/servicesInformation";
import { Typography } from "@mui/material";
import SubtitleContent from "./SubtitleContent";
import SpacingDivider from "../common/SpacingDivider";

const HVACContent = () => (
  <TitleContentComponent
    main
    title={servicesInformation.repairAndMaintenancePage.title}
    subtitle={servicesInformation.repairAndMaintenancePage.subtitle}
  >
    <>
      {servicesInformation.repairAndMaintenancePage.content.map(
        (content, index) => (
          <>
            <SubtitleContent key={index} subtitle={content.subtitle} text={content.content}/>
            <RowContent
              key={index}
              image={content.image}
              text={content.text}
              direction={content.direction}
            />
            <SpacingDivider/>
          </>
        )
      )}
      <Typography>
        {servicesInformation.repairAndMaintenancePage.conclusion}
      </Typography>
    </>
  </TitleContentComponent>
);

export default HVACContent;
