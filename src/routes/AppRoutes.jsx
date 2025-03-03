import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/services/";
import HVACInstallation from "../pages/services/HVACInstallation";
import RepairAndMaintenance from "../pages/services/RepairAndMaintenance";
import Equipment from "../pages/Equipment";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound"; 

const AppRoutes = () => {
  return (
    <Router basename="/polar-point-hvac">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/hvac-installation" element={<HVACInstallation />} />
        <Route path="/services/repair-and-maintenance" element={<RepairAndMaintenance />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/page-not-found" />} />
        <Route path="/page-not-found" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;
