import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import imagesPath from "../../config/siteContent/imagesPath";

const BrandSlider = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 400,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Slider {...settings}>
        {imagesPath.brands.map((brand, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <img
              src={brand.src}
              alt={brand.alt}
              style={{
                width: "160px",
                maxHeight: "80px",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BrandSlider;
