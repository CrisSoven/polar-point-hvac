import { Box, Grid2, Typography } from "@mui/material";
import ContactCard from "./ContactCard";
import BusinessHoursMenu from "./BusinessHoursMenu";
import generalInformation from "../../config/siteContent/generalInformation";
import contactUsInformation from "../../config/siteContent/contactUsInformation";
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
      <Grid2 container alignItems="center">
        <Grid2 size={{ xs: 10, md: 11 }} md="auto">
          <ContactCard
            iconName="ClockOutline"
            title="Business Hours"
            subtitle={`${status.title} - ${status.subtitle}`}
          />
        </Grid2>
        <Grid2 size={{ xs: 2, md: 1 }} md="auto">
          <BusinessHoursMenu />
        </Grid2>
      </Grid2>
      <Typography fontWeight={"bold"} variant="body2" flexGrow={1}>
        {contactUsInformation.afterHours}
      </Typography>
    </Box>
  );
};

export default ContactCards;
