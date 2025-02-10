import { Box } from "@mui/material";
import PropTypes from "prop-types";

const PolarPointLogo = ({ src, sx }) => (
  <Box
    component="img"
    src={src}
    sx={{ display: "block", ...sx }}
    alt="Polar Point Logo"
  />
);

PolarPointLogo.propTypes = {
  src: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default PolarPointLogo;
