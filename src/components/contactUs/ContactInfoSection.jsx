import ContactCard from "./ContactCard";
import generalInformation from "../../config/siteContent/generalInformation";

import { Box } from "@mui/material";

const companyInfo = [
  {
    iconName: generalInformation.companyAddress.iconName,
    title: generalInformation.companyAddress.fieldName,
    subtitle: generalInformation.companyAddress.fieldContent,
  },
  {
    iconName: generalInformation.companyAddress.iconName,
    title: generalInformation.companyEmail.fieldName,
    subtitle: generalInformation.companyEmail.fieldContent,
  },
  {
    iconName: generalInformation.companyPhone.iconName,
    title: generalInformation.companyPhone.fieldName,
    subtitle: generalInformation.companyPhone.fieldContent,
  },
];

const ContactInfoSection = () => {
  return (
    <Box>
      {companyInfo.map((info, index) => (
        <ContactCard
          key={index}
          iconName={info.iconName}
          title={info.title}
          subtitle={info.subtitle}
        />
      ))}
    </Box>
  );
};

export default ContactInfoSection;
