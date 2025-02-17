import TitleContentComponent from "../common/TitleContentComponent";
import RowContent from "../services/RowContent";
import servicesInformation from "../../config/siteContent/servicesInformation";
import { Typography } from "@mui/material";

const HVACContent = () => (
  <TitleContentComponent
    main
    title={servicesInformation.hvacInstallationPage.title}
    subtitle={servicesInformation.hvacInstallationPage.subtitle}
  >
    <>
      {servicesInformation.hvacInstallationPage.content.map(
        (content, index) => (
          <RowContent
            key={index}
            image={content.image}
            text={content.text}
            direction={content.direction}
          />
        )
      )}
      <Typography>
        {servicesInformation.hvacInstallationPage.conclusion}
      </Typography>
    </>
  </TitleContentComponent>
);

export default HVACContent;
