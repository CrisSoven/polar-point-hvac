import { Menu, MenuItem, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import generalInformation from "../../../config/siteContent/generalInformation";

const MobileMenu = ({ anchorEl, open, onClose }) => {
  const navigate = useNavigate();

  // Esta lógica permite realizar un desplazamiento suave a la parte superior de la página al cambiar de ruta.
  useEffect(() => {
    if (open) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [open]);

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {generalInformation.quickLinks.map(({ title, url }) => (
        <MenuItem
          key={url}
          component={Link}
          to={url}
          onClick={() => {
            onClose();
            navigate(url); 
          }}
        >
          <Typography sx={{ fontWeight: 600, color: "primary.main" }} variant="body2">
            {title}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

MobileMenu.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
