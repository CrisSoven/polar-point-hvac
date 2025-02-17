import { Grid2 } from "@mui/material";
import PropTypes from "prop-types";

const CardsGrid = ({ items, isCentered, CardComponent, getKey, getProps }) => (
  <Grid2 container spacing={4} alignItems={isCentered ? "center" : "stretch"}>
    {items.map((item) => (
      <Grid2 key={getKey(item)} size={{ xs: 12, sm: 12, md: 4 }}>
        <CardComponent {...getProps(item)} />
      </Grid2>
    ))}
  </Grid2>
);

CardsGrid.propTypes = {
  items: PropTypes.array.isRequired,
  isCentered: PropTypes.bool,
  CardComponent: PropTypes.elementType.isRequired,
  getKey: PropTypes.func.isRequired,
  getProps: PropTypes.func.isRequired,
};

export default CardsGrid;
