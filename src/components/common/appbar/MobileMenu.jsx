import { Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import generalInformation from "../../../config/siteContent/generalInformation";

const MobileMenu = ({ anchorEl, open, onClose }) => (
  <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
    {generalInformation.quickLinks.map(({ title, url }) => (
      <MenuItem key={url} component={Link} to={url} onClick={onClose}>
        <Typography
          sx={{ fontWeight: 600, color: "primary.main" }}
          variant="body2"
        >
          {title}
        </Typography>
      </MenuItem>
    ))}
  </Menu>
);

MobileMenu.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
