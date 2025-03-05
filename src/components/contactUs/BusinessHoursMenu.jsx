import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import ChevronDownIcon from "@mui/icons-material/ExpandMore";
import ChevronUpIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { businessHours } from "../../config/bussinessHours";

const BusinessHoursMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        {anchorEl ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {Object.entries(businessHours).map(([day, hours]) => (
          <MenuItem
            key={day}
            onClick={handleMenuClose}
            sx={{ pointerEvents: "none" }}
          >
            <Typography variant="body2">
              <strong>{day}:</strong>{" "}
              {hours.open && hours.close
                ? `${hours.open} - ${hours.close}`
                : day === "Sunday"
                ? `Closed - ${hours.note}`
                : "Closed"}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default BusinessHoursMenu;
