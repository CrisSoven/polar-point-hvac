import { Box, Typography, Grid2, Card, CardContent } from "@mui/material";
import * as MdiIcons from "mdi-material-ui";
import servicesInformation from "../../config/siteContent/servicesInformation";
import PropTypes from "prop-types";

const Icon = ({ iconName }) => {
  const IconComponent = MdiIcons[iconName];
  if (!IconComponent) return null;

  return (
    <IconComponent
      sx={{
        fontSize: 48,
        color: (theme) => theme.palette.secondary.main,
      }}
    />
  );
};

Icon.propTypes = {
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
            <Grid2 key={index}>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: "100%",
                    backgroundColor: (theme) => theme.palette.secondary.main,
                  }}
                />
                <Grid2 sx={{ display: "flex", alignItems: "center", pl: 2 }}>
                  <Icon iconName={point.iconName} color="secondary" />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {point.title}
                    </Typography>
                    <Typography>{point.description}</Typography>
                  </CardContent>
                </Grid2>
              </Card>
            </Grid2>
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
