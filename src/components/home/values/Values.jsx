import { Grid2 } from "@mui/material";
import ValueCard from "./ValueCard";
import homeConfiguration from "../../../config/siteContent/homeConfiguration";

const Values = () => (
  <Grid2 container spacing={4}>
    {homeConfiguration.companyValues.values.map(
      ({ id, iconName, title, description, type }) => (
        <Grid2 key={id} size={{ xs: 12, sm: 12, md: 4 }}>
          <ValueCard
            iconName={iconName}
            title={title}
            description={description}
            type={type}
          />
        </Grid2>
      )
    )}
  </Grid2>
);

export default Values;
