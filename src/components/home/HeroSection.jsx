import { Box, Typography, Grid2 } from "@mui/material";
import CallUsNowButton from "../common/CallUsNowButton";
import ContactUsButton from "./ContactUsButton";
import homeConfiguration from "../../config/siteContent/homeConfiguration";
import imagesPath from "../../config/siteContent/imagesPath";

const overlayStyle = {
  position: "absolute",
  width: "100%",
  minHeight: "100%",
};

const imageStyle = {
  width: "40%",
  borderRadius: 2,
  boxShadow: 2,
  objectFit: "cover",
};

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        color: "white",
        position: "relative",
      }}
    >
      <Box
        sx={{
          ...overlayStyle,
          backgroundImage: `url(${imagesPath.heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        sx={{ ...overlayStyle, backgroundColor: "#25215C", opacity: 0.75 }}
      />
      <Box sx={{ ...overlayStyle, backgroundColor: "black", opacity: 0.2 }} />

      <Grid2 container sx={{ position: "relative", paddingY: 4 }}>
        <Grid2
          container
          spacing={2}
          size={{ sm: 12, md: 6 }}
          alignContent="center"
          p={2}
        >
          <Grid2>
            <Typography variant="h2" fontWeight="bold">
              {homeConfiguration.heroSection.title}
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="h6">
              {homeConfiguration.heroSection.subtitle}
            </Typography>
          </Grid2>
          <Grid2 container spacing={2}>
            <CallUsNowButton />
            <ContactUsButton />
          </Grid2>
        </Grid2>

        <Grid2
          container
          spacing={4}
          justifyContent="center"
          size={{ sm: 12, md: 6 }}
        >
          <Box
            component="img"
            src={homeConfiguration.heroSection.imagesDisplayed[0].src}
            alt={homeConfiguration.heroSection.imagesDisplayed[0].alt}
            sx={imageStyle}
          />
          <Box
            component="img"
            src={homeConfiguration.heroSection.imagesDisplayed[1].src}
            alt={homeConfiguration.heroSection.imagesDisplayed[1].alt}
            sx={imageStyle}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default HeroSection;
