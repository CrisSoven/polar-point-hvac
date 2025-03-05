import { Grid2 } from "@mui/material";
import ContactButton from "./ContactButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import contactUsInformation from "../../config/siteContent/contactUsInformation";

const handleWhatsAppClick = () => {
  const phoneNumber = contactUsInformation.whatsAppUs.phoneNumber;
  const message = contactUsInformation.whatsAppUs.message;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

const handleEmailClick = () => {
  const email = contactUsInformation.emailUs.email;
  const subject = contactUsInformation.emailUs.subject;
  const body = contactUsInformation.emailUs.body;

  window.open(
    `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  );
};

const ContactButtons = () => {
  return (
    <Grid2 container spacing={2} py={2}>
      <ContactButton
        icon={<WhatsAppIcon />}
        label="WhatsApp us"
        onClick={handleWhatsAppClick}
        color="success"
      />
      <ContactButton
        icon={<EmailOutlinedIcon />}
        label="Email us"
        onClick={handleEmailClick}
        color="secondary"
      />
    </Grid2>
  );
};

export default ContactButtons;
