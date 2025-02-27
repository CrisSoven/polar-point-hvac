import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import AppBarCombined from "../components/common/appbar";
import CustomBreadCrumbs from "../components/common/CustomBreadCrumbs"
import Footer from "../components/common/footer";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <Box>
      <AppBarCombined />
      {location.pathname !== '/' && <CustomBreadCrumbs />}
      <Box minHeight={"80vh"}>{children}</Box>
      <Footer />
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
