import { Grid2, Typography, useTheme } from "@mui/material";
import * as MdiIcons from "mdi-material-ui";
import PropTypes from "prop-types";

const Icon = ({ iconName }) => {
  const IconComponent = MdiIcons[iconName];
  if (!IconComponent) return null;

  return (
    <IconComponent
      sx={{
        color: "white",
        fontSize: 20,
      }}
    />
  );
};

const Title = ({ title, url }) => {
  const theme = useTheme();

  return (
    <Typography variant="body2" noWrap>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        style={{ textDecoration: "none", color: theme.palette.common.white }}
      >
        {title}
      </a>
    </Typography>
  );
};

const FooterContactInfo = ({ iconName, title, url }) => {
  return (
    <Grid2 container spacing={1} alignItems="center" component="div">
      <Grid2
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
      >
        <Icon iconName={iconName} />
      </Grid2>
      <Grid2>
        <Title title={title} url={url} />
      </Grid2>
    </Grid2>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

FooterContactInfo.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FooterContactInfo;
