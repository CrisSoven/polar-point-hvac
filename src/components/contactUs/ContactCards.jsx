import ContactCard from "./ContactCard";
import generalInformation from "../../config/siteContent/generalInformation";
import { Box } from "@mui/material";
import useStoreStatus from "../../hooks/useStoreStatus";
import usePhoneNumber from "../../hooks/usePhoneNumber";

const ContactCards = () => {
  const status = useStoreStatus();
  const formattedPhone = usePhoneNumber(
    generalInformation.companyPhone.fieldContent
  );

  const companyInfo = [
    {
      iconName: generalInformation.companyAddress.iconName,
      title: generalInformation.companyAddress.fieldName,
      subtitle: generalInformation.companyAddress.fieldContent,
    },
    {
      iconName: generalInformation.companyEmail.iconName,
      title: generalInformation.companyEmail.fieldName,
      subtitle: generalInformation.companyEmail.fieldContent,
    },
    {
      iconName: generalInformation.companyPhone.iconName,
      title: generalInformation.companyPhone.fieldName,
      subtitle: formattedPhone,
    },
    {
      iconName: "ClockOutline",
      title: "Business Hours",
      subtitle: `${status.title} - ${status.subtitle}`,
    },
  ];

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

export default ContactCards;
