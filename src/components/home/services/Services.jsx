import CardsGrid from "../../common/CardsGrid";
import ServiceCard from "./ServiceCard";
import homeConfiguration from "../../../config/siteContent/homeConfiguration";

const Services = () => (
  <CardsGrid
    items={homeConfiguration.companyServices}
    isCentered={true}
    CardComponent={ServiceCard}
    getKey={(item) => item.id}
    getProps={(item) => ({
      image: item.image,
      title: item.title,
      description: item.description,
      badge: item.badge,
    })}
  />
);

export default Services;
