import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ContactButton = ({ icon, label, onClick, color = "primary" }) => {
  return (
    <Button
      variant="contained"
      color={color}
      startIcon={icon}
      onClick={onClick}
      sx={{
        borderRadius: 8,
        color: "white",
        padding: "12px 24px",
        boxShadow: "none",
      }}
    >
      {label}
    </Button>
  );
};

ContactButton.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default ContactButton;
