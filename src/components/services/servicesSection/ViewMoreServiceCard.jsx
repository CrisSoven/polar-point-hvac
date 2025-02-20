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
import { useNavigate } from "react-router-dom";

const ViewMoreServiceCard = ({ image, title, description, badge, button }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{
          height: 240,
          position: "relative",
        }}
        image={image}
        title={title}
      >
        {badge && badge.type !== "warning" && (
          <ServiceBadge text={badge.text} type={badge.type} />
        )}
      </CardMedia>

      <CardContent sx={{ flexGrow: 1, pb: 0 }}>
        <Typography fontWeight={600} align="center" noWrap mb={1}>
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" align="justify">
          {description}
        </Typography>
      </CardContent>
      <CardContent>
        <CardActions>
          <Button
            variant="contained"
            color={button.type || "secondary"}
            endIcon={button.icon && <ChevronRight />}
            fullWidth
            onClick={() => {
              navigate(button.link);
            }}
          >
            {button.text}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

ViewMoreServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["success", "warning", "error", "secondary"])
      .isRequired,
  }),
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["success", "warning", "error", "secondary"]),
    icon: PropTypes.bool,
  }),
};

export default ViewMoreServiceCard;
