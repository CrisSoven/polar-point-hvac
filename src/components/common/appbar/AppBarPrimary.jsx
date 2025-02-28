import {
  AppBar,
  Toolbar,
  Grid2,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CallUsNowButton from "../CallUsNowButton";
import IconsSection from "./IconsSection";
import PolarPointLogo from "../PolarPointLogo";
import imagesPath from "../../../config/siteContent/imagesPath";

const AppBarPrimary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Grid2
            container
            alignItems="center"
            justifyContent="center"
            width="100%"
            sx={{ paddingY: isMobile ? 2 : 0 }}
          >
            {isMobile && <IconsSection />}

            {!isMobile && (
              <Grid2 flexGrow={1}>
                <PolarPointLogo src={imagesPath.logo} sx={{ height: 40 }} />
              </Grid2>
            )}

            {!isMobile && <IconsSection />}

            <CallUsNowButton />
          </Grid2>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarPrimary;
