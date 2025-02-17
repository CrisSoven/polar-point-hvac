import { Grid2 } from "@mui/material";
import PropTypes from "prop-types";

const RowContent = ({ image, text, direction = "row" }) => {
  return (
    <Grid2 container direction={direction} spacing={2} sx={{ py: 2 }}>
      <Grid2 size={{ xs: 12, sm: 4 }}>
        <img
          src={image}
          alt={text}
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "4/3",
            objectFit: "cover",
          }}
        />
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 8 }}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <p>{text}</p>
      </Grid2>
    </Grid2>
  );
};

RowContent.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["row", "row-reverse"]),
};

export default RowContent;
