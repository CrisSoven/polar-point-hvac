import { Grid2 } from "@mui/material";
import ContactInfoRow from "./ContactInfoRow";
import ContactUsForm from "./ContactUsForm";

const ContactInfoSection = () => {
  return (
    <Grid2 container spacing={2}>
      <ContactInfoRow />
      <ContactUsForm />
    </Grid2>
  );
};

export default ContactInfoSection;
