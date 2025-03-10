import { useState, useEffect } from "react";
import { API_URL } from "../utils/config";

const CACHE_KEY = "cachedReviews";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

const useGoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error fetching reviews");
        const data = await response.json();
        const filteredReviews = data.reviews.filter(
          (review) => review.rating >= 4
        );

        const cacheData = {
          reviews: filteredReviews,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
        setReviews(filteredReviews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (Date.now() - parsedData.timestamp < CACHE_DURATION) {
        setReviews(parsedData.reviews);
        setLoading(false);
        return;
      }
    }
    fetchReviews();
  }, []);

  return { reviews, loading, error };
};

export default useGoogleReviews;
