import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/services/";
import HVACInstallation from "../pages/services/HVACInstallation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/hvac-installation" element={<HVACInstallation />} />
    </Routes>
  );
};

export default AppRoutes;
