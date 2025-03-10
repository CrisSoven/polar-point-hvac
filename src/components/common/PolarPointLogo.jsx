import { Box } from "@mui/material";
import PropTypes from "prop-types";

const PolarPointLogo = ({ src, sx }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="img"
      src={src}
      sx={{ display: "block", ...sx }}
      alt="Polar Point Logo"
      onClick={handleClick}
    />
  );
};

PolarPointLogo.propTypes = {
  src: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default PolarPointLogo;
