import { Grid, Typography, Box } from "@mui/material";
import * as MdiIcons from "mdi-material-ui";
import PropTypes from "prop-types";

const Icon = ({ iconName }) => {
  const IconComponent = MdiIcons[iconName];
  if (!IconComponent) return null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        borderRadius: "8px",
        backgroundColor: "primary.main",
      }}
    >
      <IconComponent
        sx={{
          color: "background.default",
          fontSize: 32,
        }}
      />
    </Box>
  );
};

const Title = ({ title }) => (
  <Typography variant="body2" fontWeight={"bold"} noWrap>
    {title}
  </Typography>
);

const Subtitle = ({ subtitle }) => (
  <Typography variant="body1" noWrap>
    {subtitle}
  </Typography>
);

const ContactCard = ({ iconName, title, subtitle }) => {
  return (
    <Grid
      container
      sx={{
        padding: 2,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 1,
        alignItems: "center",
      }}
    >
      <Icon iconName={iconName} />
      <Grid sx={{ overflow: "hidden" }}>
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
      </Grid>
    </Grid>
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

ContactCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ContactCard;
