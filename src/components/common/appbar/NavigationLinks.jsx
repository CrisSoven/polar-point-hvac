import { Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import generalInformation from "../../../config/siteContent/generalInformation";

const NavigationLinks = () => {
  const theme = useTheme();
  const { quickLinks } = generalInformation;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Toolbar
      sx={{ width: "100%", justifyContent: "space-evenly" }}
      variant="dense"
    >
      {quickLinks.map(({ id, title, url }) => (
        <Link
          key={id}
          to={url}
          onClick={handleClick}
          style={{
            textDecoration: "none",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          {title}
        </Link>
      ))}
    </Toolbar>
  );
};

export default NavigationLinks;
