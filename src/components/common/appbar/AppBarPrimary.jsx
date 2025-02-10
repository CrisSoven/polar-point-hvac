import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid2,
  useTheme,
  useMediaQuery,
  Box,
  Fab,
  Fade,
  useScrollTrigger,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CallUsNowButton from "../CallUsNowButton";
import IconsSection from "./IconsSection";
import PolarPointLogo from "../PolarPointLogo";
import imagesPath from "../../../config/siteContent/imagesPath";
import PropTypes from "prop-types";

const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

const AppBarPrimary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          transform: showScroll ? "translateY(-100%)" : "translateY(0)",
        }}
      >
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

      <ScrollTop>
        <Fab
          size="medium"
          aria-label="scroll back to top"
          sx={{ bgcolor: "white" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default AppBarPrimary;
