import MainLayout from "../layout/MainLayout";
import SpacingDivider from "../components/common/SpacingDivider";
import HeroSection from "../components/home/HeroSection";
import OurServicesSection from "../components/home/OurServicesSection";
import TestimonialSection from "../components/home/testimonials/TestimonialSection";
import OurValuesSection from "../components/home/values/";
import GoogleMap from "../components/common/GoogleMap";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <OurServicesSection />
      <SpacingDivider />
      <TestimonialSection />
      <SpacingDivider />
      <OurValuesSection />
      <SpacingDivider />
      <GoogleMap />
    </MainLayout>
  );
};

export default Home;
