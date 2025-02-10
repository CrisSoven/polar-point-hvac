import MainLayout from "../layout/MainLayout";
import SpacingDivider from "../components/common/SpacingDivider";
import HeroSection from "../components/home/HeroSection";
import OurServicesSection from "../components/home/OurServicesSection";
import OurValuesSection from "../components/home/values/";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <OurServicesSection />
      <SpacingDivider />
      <OurValuesSection />
      <SpacingDivider />
    </MainLayout>
  );
};

export default Home;
