import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { ChevronRight } from "mdi-material-ui";
import ServiceBadge from "../../common/ServiceBadge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ image, title, description, badge }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/services");
  };

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 4,
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          cursor: "pointer",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        sx={{
          height: 240,
          position: "relative",
        }}
        image={image}
        title={title}
      >
        {badge && <ServiceBadge text={badge.text} type={badge.type} />}
      </CardMedia>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "opacity 0.3s ease-in-out, max-height 0.3s ease-in-out",
          opacity: isHovered ? 1 : 0.9,
          maxHeight: isHovered ? "500px" : "120px",
        }}
      >
        <Typography
          fontWeight={600}
          align="center"
          sx={{ transition: "opacity 0.3s ease-in-out" }}
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          align="justify"
          sx={{ display: isHovered ? "block" : "none" }}
        >
          {description}
        </Typography>
        <CardActions sx={{ display: isHovered ? "flex" : "none" }}>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ChevronRight />}
            fullWidth
            onClick={handleClick}
          >
            View more
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["success", "warning", "error", "secondary"])
      .isRequired,
  }),
};

export default ServiceCard;
