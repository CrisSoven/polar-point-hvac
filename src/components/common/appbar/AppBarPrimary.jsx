import { AppBar, Toolbar, Grid2, useTheme, useMediaQuery } from "@mui/material";
import IconsSection from "./IconsSection";
import PolarPointLogo from "../PolarPointLogo";
import imagesPath from "../../../config/siteContent/imagesPath";
import NavigationLinks from "./NavigationLinks";

const AppBarPrimary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position={isMobile ? "relative" : "sticky"}>
        <Toolbar>
          <Grid2
            container
            alignItems="center"
            justifyContent="center"
            width="100%"
            sx={{ paddingY: 2 }}
          >
            {!isMobile && (
              <Grid2 display={"flex"} direction={"column"} flexGrow={1}>
                <PolarPointLogo src={imagesPath.logo} sx={{ height: 40 }} />
                <NavigationLinks />
              </Grid2>
            )}

            <IconsSection />
          </Grid2>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarPrimary;
