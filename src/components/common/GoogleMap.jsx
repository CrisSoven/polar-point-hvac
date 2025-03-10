import { API_KEY } from "../../utils/config";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import { Card, CardContent } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 19.432608, // CDMX
  lng: -99.133209,
};

const polygonCoords = [
  { lat: 19.436, lng: -99.14 },
  { lat: 19.429, lng: -99.14 },
  { lat: 19.429, lng: -99.126 },
  { lat: 19.436, lng: -99.126 },
];

const MapWithPolygon = () => {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 4, boxShadow: 3 }}>
      <CardContent>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            <Polygon
              paths={polygonCoords}
              options={{
                fillColor: "rgba(255, 0, 0, 0.4)",
                strokeColor: "#FF0000",
                strokeWeight: 2,
              }}
            />
          </GoogleMap>
        </LoadScript>
      </CardContent>
    </Card>
  );
};

export default MapWithPolygon;
