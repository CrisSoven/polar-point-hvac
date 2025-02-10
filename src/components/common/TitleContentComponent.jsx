import { Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const CardComponent = ({ main, title, subtitle, children }) => {
  return (
    <Card sx={{ p: 2, bgcolor: "transparent" }} elevation={0}>
      <CardContent>
        <Typography
          variant={"h4"}
          fontWeight={"bold"}
          align={main ? "left" : "center"}
          mb={2}
        >
          {title}
        </Typography>
        <Typography variant="h6" align={main ? "left" : "center"}>
          {subtitle}
        </Typography>
        <Box py={4}>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  main: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CardComponent;
