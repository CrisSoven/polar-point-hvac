import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/services/";
import HVACInstallation from "../pages/services/HVACInstallation";
import RepairAndMaintenance from "../pages/services/RepairAndMaintenance"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/hvac-installation" element={<HVACInstallation />} />
      <Route path="/services/repair-and-maintenance" element={<RepairAndMaintenance/>}/>
    </Routes>
  );
};

export default AppRoutes;
