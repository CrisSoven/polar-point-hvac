import { Box, Card, CardContent, Typography } from "@mui/material";
import * as MdiIcons from "mdi-material-ui";
import PropTypes from "prop-types";

const Icon = ({ iconName, type }) => {
  const IconComponent = MdiIcons[iconName];
  if (!IconComponent) return null;

  return (
    <IconComponent
      sx={{
        width: "100%",
        color: (theme) =>
          theme.palette[type]?.main || theme.palette.primary.main,
        fontSize: 88,
      }}
    />
  );
};

const ValueCard = ({ iconName, title, description, type }) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: 4,
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 8,
          backgroundColor: (theme) =>
            theme.palette[type]?.main || theme.palette.primary.main,
        }}
      />
      <CardContent>
        <Icon iconName={iconName} type={type} />
        <Typography fontWeight={600} align="center" mb={2} noWrap>
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" mx={4} align="justify">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "error", "secondary"]).isRequired,
};

ValueCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "error", "secondary"]).isRequired,
};

export default ValueCard;
