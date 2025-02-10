import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const FooterTitle = ({ children }) => (
  <Typography fontWeight="bold" variant="h6" sx={{ mb: 2 }}>
    {children}
  </Typography>
);

FooterTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterTitle;
