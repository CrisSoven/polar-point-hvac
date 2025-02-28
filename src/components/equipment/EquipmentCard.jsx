import { Card, CardMedia, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const EquipmentCard = ({ image, title }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia sx={{ height: 380 }} image={image} title={title} />

      <Box
        className="overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography
          className="title"
          fontWeight={500}
          align="center"
          sx={{ transition: "font-size 0.2s ease-in-out" }}
        >
          {title}
        </Typography>
      </Box>
    </Card>
  );
};

EquipmentCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default EquipmentCard;
