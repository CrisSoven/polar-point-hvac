import { Box } from "@mui/material";
import PropTypes from "prop-types";
import AppBarCombined from "../components/common/appbar";
import Footer from "../components/common/footer";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <AppBarCombined />
      <Box minHeight={"80vh"}>{children}</Box>
      <Footer />
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
