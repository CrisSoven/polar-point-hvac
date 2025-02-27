import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import imagesPath from "../../config/siteContent/imagesPath";

const BrandsSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const speed = 25000;

    // Animación continua
    const animateSlider = () => {
      slider.style.transition = `transform ${speed}ms linear`;
      slider.style.transform = `translateX(-${slider.scrollWidth / 2}px)`; // Mueve el slider hacia la izquierda
    };

    // Reiniciar la animación sin corte visual
    const resetSlider = () => {
      slider.style.transition = "none"; // Sin transición
      slider.style.transform = `translateX(0)`; // Vuelve al principio
      setTimeout(() => {
        animateSlider(); // Reinicia la animación
      }, 50); // El pequeño retraso evita el "corte" visual
    };

    // Aplicar animación inicial
    animateSlider();

    // Ajustar el evento para reiniciar la animación
    slider.addEventListener("transitionend", resetSlider);

    return () => {
      slider.removeEventListener("transitionend", resetSlider);
    };
  }, []);

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Duplicamos las imágenes para el efecto de scroll infinito */}
        {imagesPath.brands.concat(imagesPath.brands).map(({ src, alt }, index) => (
          <Box key={index} sx={{ padding: "10px" }}>
            <img
              src={src}
              alt={alt}
              style={{
                width: "120px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BrandsSlider;
