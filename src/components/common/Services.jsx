import { Grid2 } from "@mui/material";
import ServiceCard from "./ServiceCard";
import homeConfiguration from "../../config/siteContent/homeConfiguration";

const Services = () => (
  <Grid2 container spacing={4} alignItems="center">
    {homeConfiguration.companyServices.map(
      ({ id, image, title, description, badge }) => (
        <Grid2 key={id} size={{ xs: 12, sm: 12, md: 4 }}>
          <ServiceCard
            image={image}
            title={title}
            description={description}
            badge={badge}
          />
        </Grid2>
      )
    )}
  </Grid2>
);

export default Services;
