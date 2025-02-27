import { useEffect, useState } from "react";

const GOOGLE_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.REACT_APP_PLACE_ID;

const useGoogleReview = () => {
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReview = async () => {
            setLoading(true);

            const cachedReview = localStorage.getItem("google_review");
            if (cachedReview) {
                setReview(JSON.parse(cachedReview));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`
                );
                const data = await response.json();

                if (data.result?.reviews) {
                    setReview(data.result.reviews[0]);
                    localStorage.setItem("google_review", JSON.stringify(data.result.reviews[0])); // Guarda en caché
                } else {
                    throw new Error("No hay reseñas disponibles");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReview();
    }, []);

    return { review, loading, error };
};

export default useGoogleReview;
