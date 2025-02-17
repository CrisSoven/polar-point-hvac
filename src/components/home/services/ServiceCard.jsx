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

const ServiceCard = ({ image, title, description, badge }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 4,
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        "&:hover": {
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
          maxHeight: isHovered ? "500px" : "100px",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <Typography fontWeight={600} align="center" noWrap>
          {title}
        </Typography>
        {isHovered && (
          <>
            <Typography gutterBottom variant="body2" align="justify">
              {description}
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ChevronRight />}
                fullWidth
              >
                View more
              </Button>
            </CardActions>
          </>
        )}
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
    type: PropTypes.oneOf(["success", "warning", "error", "secondary"]).isRequired,
  }),
};

export default ServiceCard;
