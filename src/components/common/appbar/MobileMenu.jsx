import { Menu, MenuItem, Typography } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import generalInformation from "../../../config/siteContent/generalInformation";

const MobileMenu = ({ anchorEl, open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (open) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [open]);

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {generalInformation.quickLinks.map(({ title, url }) => {
        const isActive = location.pathname === url;
        return (
          <MenuItem
            key={url}
            component={Link}
            to={url}
            onClick={() => {
              onClose();
              navigate(url);
            }}
          >
            <Typography
              sx={{
                fontWeight: isActive ? "bold" : 500,
                textDecoration: isActive ? "underline" : "none",
                color: "primary.main",
              }}
              variant="body2"
            >
              {title}
            </Typography>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

MobileMenu.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
