import {
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationLinks from "./NavigationLinks";
import MobileMenu from "./MobileMenu";
import PolarPointLogo from "../PolarPointLogo";
import imagesPath from "../../../config/siteContent/imagesPath";
import { useState } from "react";

const AppBarMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [menuAnchor, setMenuAnchor] = useState(null);
  const openMenu = (event) => setMenuAnchor(event.currentTarget);
  const closeMenu = () => setMenuAnchor(null);

  return (
    isMobile && (
      <AppBar position="sticky" color="inherit">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: theme.spacing(0, 2),
          }}
          variant="dense"
        >
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <PolarPointLogo
              sx={{ height: 28, display: { xs: "block", md: "none" } }}
              src={imagesPath.whiteLogo}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton color="primary" onClick={openMenu}>
                <MenuIcon />
              </IconButton>
              <MobileMenu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={closeMenu}
              />
            </>
          ) : (
            <NavigationLinks />
          )}
        </Toolbar>
      </AppBar>
    )
  );
};

export default AppBarMenu;
