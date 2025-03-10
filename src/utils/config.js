export const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;
export const API_URL = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews&key=${API_KEY}`;
