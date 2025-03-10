import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Rating,
  CircularProgress,
  Alert,
  Tooltip,
  Container,
} from "@mui/material";
import useGoogleReviews from "../../../hooks/useGoogleReviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormatQuoteCloseOutline } from "mdi-material-ui";

const ReviewCard = () => {
  const { reviews, loading, error } = useGoogleReviews();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (reviews.length === 0)
    return <Typography variant="body2">No hay reseñas disponibles.</Typography>;

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {reviews.map((review) => (
          <Container key={review.name}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
                flexDirection: "column",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={review.authorAttribution.photoUri}
                    alt={review.author_name}
                  />
                }
                action={
                  <FormatQuoteCloseOutline
                    color="disabled"
                    style={{ fontSize: 40 }}
                  />
                }
                title={review.authorAttribution.displayName}
                subheader={review.relativePublishTimeDescription}
              />
              <CardContent sx={{ pt: 0 }}>
                <Rating value={review.rating} readOnly />
                <Tooltip
                  title={review.originalText.text}
                  arrow
                  disableInteractive
                  placement="top"
                >
                  <Typography
                    variant="body2"
                    fontStyle={{ fontStyle: "italic" }}
                    color="text.secondary"
                    style={{ cursor: "pointer" }}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      height: "100%",
                    }}
                  >
                    {review.originalText.text}
                  </Typography>
                </Tooltip>
              </CardContent>
            </Card>
          </Container>
        ))}
      </Slider>
    </Container>
  );
};

export default ReviewCard;
