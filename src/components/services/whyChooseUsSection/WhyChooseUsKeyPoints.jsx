import { Box, Typography, Grid2, Card, CardContent } from "@mui/material";
import * as MdiIcons from "mdi-material-ui";
import PropTypes from "prop-types";
import servicesInformation from "../../../config/siteContent/servicesInformation";

const Icon = ({ iconName }) => {
  const IconComponent = MdiIcons[iconName];
  if (!IconComponent) return null;

  return (
    <IconComponent
      sx={{ fontSize: 48, color: (theme) => theme.palette.secondary.main }}
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

const KeyPointCard = ({ title, description, iconName }) => {
  return (
    <Grid2 size={{ xs: 12 }} sx={{ display: "flex" }}>
      <Card
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: 4,
          boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: 8,
            height: "100%",
            backgroundColor: (theme) => theme.palette.secondary.main,
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", pl: 2, flex: 1 }}>
          <Icon iconName={iconName} />
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid2>
  );
};

KeyPointCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

const WhyChooseUsKeyPoints = () => {
  return (
    <Box>
      <Typography mb={2} gutterBottom>
        {servicesInformation.whyChooseUsSection.introduction}
      </Typography>
      <Grid2 container spacing={3}>
        {servicesInformation.whyChooseUsSection.whyChooseUs.map(
          (point, index) => (
            <KeyPointCard
              key={index}
              title={point.title}
              description={point.description}
              iconName={point.iconName}
            />
          )
        )}
      </Grid2>
      <Typography mt={4} gutterBottom>
        {servicesInformation.whyChooseUsSection.conclusion}
      </Typography>
    </Box>
  );
};

export default WhyChooseUsKeyPoints;
