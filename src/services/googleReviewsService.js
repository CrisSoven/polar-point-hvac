import { API_KEY, PLACE_ID, API_URL } from "../utils/config";

export const fetchReviews = async () => {
  const response = await fetch(
    `${API_URL}?place_id=${PLACE_ID}&key=${API_KEY}`
  );
  const data = await response.json();

  const filteredReviews = data.result.reviews.filter((review) => {
    const rating = review.rating > 4;
    const publishTime = new Date(review.time * 1000);
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const recent = publishTime >= oneYearAgo;

    return rating && recent;
  });

  return filteredReviews;
};
