import ContactButton from "./ContactButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const handleWhatsAppClick = () => {
  const phoneNumber = "5211234567890";
  const message = "¡Hola! Me gustaría más información.";
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

const handleEmailClick = () => {
  const email = "contacto@email.com";
  const subject = "Consulta de información";
  const body = "Hola, quisiera obtener más detalles sobre sus servicios.";
  window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
};

const ContactButtons = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <ContactButton icon={<WhatsAppIcon />} label="WhatsApp" onClick={handleWhatsAppClick} color="success" />
      <ContactButton icon={<EmailIcon />} label="Email" onClick={handleEmailClick} color="primary" />
    </div>
  );
};

export default ContactButtons;
