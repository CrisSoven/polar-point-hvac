import { Grid2 } from "@mui/material";
import EquipmentCard from "./EquipmentCard";
import imagesPath from "../../config/siteContent/imagesPath";

const EquipmentGrid = () => {
  return (
    <Grid2 container spacing={4}>
      {imagesPath.equipments.map(({ src, alt }, index) => (
        <Grid2 key={index} container size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <EquipmentCard key={index} image={src} title={alt} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default EquipmentGrid;
