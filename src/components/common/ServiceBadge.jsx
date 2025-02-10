import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ServiceBadge = ({ text, type }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette[type]?.main || theme.palette.primary.main,
        textAlign: "center",
        py: 1,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold">
        {text}
      </Typography>
    </Box>
  );
};

ServiceBadge.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired,
};

export default ServiceBadge;
