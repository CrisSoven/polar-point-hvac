import { Grid2 } from "@mui/material";
import ContactInfoRow from "./ContactInfoRow";
import ContactUsForm from "./ContactUsForm";

const ContactInfoSection = () => {
  return (
    <Grid2
      container
      size={{ xs: 12, sm: 12, md: 6 }}
      justifyContent={{ xs: "center", md: "space-between" }}
      alignItems="center"
      spacing={2}
    >
      <ContactUsForm />
      <ContactInfoRow />
    </Grid2>
  );
};

export default ContactInfoSection;
