import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactUsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleClick}
    >
      Contact Us
    </Button>
  );
};

export default ContactUsButton;
