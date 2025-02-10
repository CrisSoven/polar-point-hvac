import { Grid2, Typography } from "@mui/material";
import * as MdiIcons from "mdi-material-ui";
import PropTypes from "prop-types";

const Icon = ({ iconName }) => {
  const IconComponent = MdiIcons[iconName];
  if (!IconComponent) return null;

  return (
    <IconComponent
      sx={{
        color: "error.main",
        fontSize: 48,
      }}
    />
  );
};

const Title = ({ title }) => {
  return (
    <Typography variant="body1" fontWeight={"bold"} noWrap>
      {title}
    </Typography>
  );
};

const Subtitle = ({ subtitle }) => {
  return (
    <Typography variant="body2" noWrap>
      {subtitle}
    </Typography>
  );
};

const AppBarIcon = ({ iconName, title, subtitle }) => {
  return (
    <Grid2
      container
      sx={{
        padding: 2,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 1,
      }}
    >
      <Icon iconName={iconName} />
      <Grid2 sx={{ overflow: "hidden" }}>
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
      </Grid2>
    </Grid2>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

AppBarIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default AppBarIcon;
