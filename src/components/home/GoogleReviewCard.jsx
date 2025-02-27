import { Card, CardContent, CardHeader, Typography, Avatar, Rating, CircularProgress, Alert } from "@mui/material";
import useGoogleReview from "../hooks/useGoogleReview";

const GoogleReviewCard = () => {
  const { review, loading, error } = useGoogleReview();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!review) return <Typography variant="body2">No hay reseñas disponibles.</Typography>;

  return (
    <Card sx={{ maxWidth: 400, m: 2 }}>
      <CardHeader
        avatar={<Avatar src={review.profile_photo_url} alt={review.author_name} />}
        title={review.author_name}
        subheader={new Date(review.time * 1000).toLocaleDateString()}
      />
      <CardContent>
        <Rating value={review.rating} readOnly />
        <Typography variant="body2" color="text.secondary" mt={1}>
          {review.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GoogleReviewCard;
