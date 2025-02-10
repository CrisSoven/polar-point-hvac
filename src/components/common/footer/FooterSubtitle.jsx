import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const FooterSubtitle = ({ children }) => (
  <Typography variant="body2" fontWeight={"bold"} sx={{ mb: 1 }}>
    {children}
  </Typography>
);

FooterSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterSubtitle;
