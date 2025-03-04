import { Grid2 } from "@mui/material";
import ContactCards from "./ContactCards";
import ContactButtons from "./ContactButtons";

const ContactInfoRow = () => {
  return (
    <Grid2>
      <ContactCards />
      <ContactButtons />
    </Grid2>
  );
};

export default ContactInfoRow;
