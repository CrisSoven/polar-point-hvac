import CardsGrid from "../common/CardsGrid";
import ViewMoreServiceCard from "./ViewMoreServiceCard";
import homeConfiguration from "../../config/siteContent/homeConfiguration";

const Services = () => (
  <CardsGrid
    items={homeConfiguration.companyServices}
    CardComponent={ViewMoreServiceCard}
    getKey={(item) => item.id}
    getProps={(item) => ({
      image: item.image,
      title: item.title,
      description: item.description,
      badge: item.badge,
      button: item.button,
    })}
  />
);

export default Services;
